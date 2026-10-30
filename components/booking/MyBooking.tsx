"use client";

import Image from "next/image";
import { Calendar, MapPin, Trash2, Eye, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

export interface MyBookingProps {
    booking: {
        _id: string;
        destinationName?: string;
        country?: string;
        imageUrl?: string;
        price: string;
        departureDate: string;
        status?: string;
    };
}

export const MyBooking = ({ booking }: MyBookingProps) => {
    const status = booking.status || "Confirmed";

    const router = useRouter();

    const handleCancelBooking = async() => {
        const token = await getTokenFromClient();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/my-bookings/${booking._id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
            method: 'DELETE',
        });

        const data = await res.json();
        
        if(data){
            toast.success("Bookings Deleted");
            router.refresh();
        }
    }

    return (
        <Card className="border border-gray-200/80 shadow-sm bg-white rounded-xl overflow-hidden hover:shadow-md transition-all">
            <CardContent className="p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full md:w-auto">
                    
                    {booking?.imageUrl && booking.imageUrl.startsWith("http") && (
                        <div className="relative w-full sm:w-48 h-32 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                            <Image
                                src={booking.imageUrl}
                                alt={booking.destinationName || "Destination"}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <div className="space-y-2 w-full">
                        {status === "Confirmed" ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                <CheckCircle2 size={13} /> Confirmed
                            </span>
                        ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
                                <Clock size={13} /> Pending
                            </span>
                        )}

                        <h3 className="text-xl font-bold text-gray-900">
                            {booking.destinationName || "Destination Name"}
                        </h3>

                        <div className="space-y-1 text-xs text-gray-500">
                            <div className="flex items-center gap-1.5">
                                <Calendar size={14} className="text-gray-400" />
                                <span>Departure: {booking.departureDate}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-gray-400" />
                                <span>Booking ID: {booking._id.slice(-6)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                    <div className="text-left md:text-right">
                        <span className="text-3xl font-bold text-[#10A2B9]">
                            ${booking.price}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Button onClick={handleCancelBooking}
                            variant="outline"
                            className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 text-xs h-9 px-3.5 cursor-pointer"
                        >
                            <Trash2 size={14} className="mr-1.5" /> Cancel
                        </Button>
                        <Link href={`/destinations/${booking._id}`}>
                            <Button
                                className="bg-[#10A2B9] hover:bg-[#0e8fa3] text-white text-xs h-9 px-4 cursor-pointer"
                            >
                                <Eye size={14} className="mr-1.5" /> View
                            </Button>
                        </Link>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};