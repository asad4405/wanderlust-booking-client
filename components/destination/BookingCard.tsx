"use client";

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DestinationType } from '@/types/Destination';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';

export const BookingCard = ({ destination }: { destination: DestinationType }) => {
    // date format
    const formatDateForInput = (dateString?: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return ""; 
        
        return date.toISOString().split("T")[0];
    };

    const { price, departureDate } = destination;
    const { data: session } = authClient.useSession();
    const user = session?.user;
    
    const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!user) {
            toast.error("Please login to book!");
            return;
        }

        const form = e.currentTarget;
        const selectedDepartureDate = (form.elements.namedItem("departureDate") as HTMLInputElement)?.value;

        const data = {
            username: user?.name,
            email: user?.email,
            image: user?.image,
            ...destination,
            departureDate: selectedDepartureDate,
            bookingDate: new Date()
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/booking`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();
            
            if (result.insertedId) {
                toast.success("Booking successful!");
            } else {
                toast.error("Booking failed!");
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="sticky top-6">
            <Card className="border border-gray-100 shadow-sm bg-white rounded-xl p-6 space-y-6">
                <CardContent className="p-0 space-y-6">
                    
                    <div className="space-y-1">
                        <span className="text-xs text-gray-500 font-normal">Starting from</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-[#10A2B9]">
                                ${price || "0"}
                            </span>
                            <span className="text-xs text-gray-400">per person</span>
                        </div>
                    </div>

                    <form onSubmit={handleBooking}>
                        <div className="space-y-1.5">
                            <label htmlFor="departureDate" className="text-xs font-medium text-gray-500 block">
                                Selected Departure Date
                            </label>
                            <Input
                                id="departureDate"
                                name="departureDate"
                                type="date"
                                defaultValue={formatDateForInput(departureDate)}
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 font-medium focus-visible:ring-[#10A2B9] cursor-pointer"
                            />
                        </div>

                        <Button type="submit" className="mt-3 w-full bg-[#10A2B9] hover:bg-[#0e8fa3] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer">
                            Book Now →
                        </Button>
                    </form>

                    <div className="space-y-2.5 pt-2 border-t border-gray-100 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                            <Check size={14} className="text-emerald-600 shrink-0" />
                            <span>Free cancellation up to 7 days</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check size={14} className="text-emerald-600 shrink-0" />
                            <span>Travel insurance included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check size={14} className="text-emerald-600 shrink-0" />
                            <span>24/7 customer support</span>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
};