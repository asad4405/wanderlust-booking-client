import { Calendar, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BookingProps {
    price: string | number;
    departureDate: string;
}

export const BookingCard = ({ price, departureDate }: BookingProps) => {
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

                    <div className="space-y-1.5">
                        <div className="text-xs font-medium text-gray-500">Selected Departure Date</div>
                        <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 font-medium flex items-center justify-between">
                            <span>{departureDate || "03-Dec-2021"}</span>
                            <Calendar size={16} className="text-gray-400" />
                        </div>
                    </div>

                    <Button className="w-full bg-[#10A2B9] hover:bg-[#0e8fa3] text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                        Book Now →
                    </Button>

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