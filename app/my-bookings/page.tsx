import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { MyBooking } from "@/components/booking/MyBooking";
import { redirect } from "next/navigation";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

interface BookingType {
    _id: string;
    destinationName?: string;
    country?: string;
    imageUrl?: string;
    price: string;
    departureDate: string;
    status?: string;
}
async function getMyBookings(email: string): Promise<BookingType[]> {
    try {
        const token = await getTokenFromServer();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/my-bookings/${email}`, {
            headers: {
                authorization: `Bearer ${token}`
            },
            cache: 'no-store' ,
        });

        if (!res.ok) {
            return [];
        }

        return await res.json();
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return [];
    }
}

export default async function MyBookingsPage() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session?.user?.email) {
        redirect("/signin");
    }

    const bookings = await getMyBookings(session.user.email);

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">My Bookings</h1>
                <p className="text-sm text-gray-500">Manage and view your upcoming travel plans</p>
            </div>

            {bookings.length === 0 ? (
                <div className="text-center py-16 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <p className="text-gray-500">No bookings found!</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {bookings.map((booking) => (
                        <MyBooking
                            key={booking._id}
                            booking={booking}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}