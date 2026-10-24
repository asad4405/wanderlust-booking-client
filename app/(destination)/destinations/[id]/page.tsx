import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, Calendar, MapPin, Check, Tag, Edit3, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DestinationType } from '@/types/Destination';

const DestinationDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    
    const res = await fetch(`http://localhost:8000/destination/${id}`, {
        cache: 'no-store'
    });
    const destination: DestinationType = await res.json();

    const validImageUrl = 
        destination?.imageUrl && destination.imageUrl.trim().startsWith("http")
            ? destination.imageUrl.trim()
            : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

    return (
        <div className="w-full min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                <div className="flex items-center justify-between">
                    <Link 
                        href="/destinations" 
                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 gap-2 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Destinations
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link 
                            href={`/destinations/edit/${id}`}
                            className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                        >
                            <Edit3 size={15} />
                            Edit
                        </Link>
                        <Link 
                            href="/destinations"
                            className="inline-flex items-center gap-1.5 px-4 py-2 border border-red-100 rounded-lg text-sm font-medium text-red-600 bg-white hover:bg-red-50 transition-colors shadow-sm"
                        >
                            <X size={15} />
                            Cancel
                        </Link>
                    </div>
                </div>

                <div className="relative w-full h-87.5 sm:h-112.5 rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                    <Image
                        src={validImageUrl}
                        alt={destination?.destinationName || "Destination Details"}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    
                    <div className="lg:col-span-2 space-y-8">
                        
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                                    <MapPin size={13} className="text-gray-400" />
                                    {destination?.country || "Country"}
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs text-[#10A2B9] bg-[#10A2B9]/10 px-2.5 py-1 rounded-md font-medium uppercase tracking-wider">
                                    <Tag size={12} />
                                    {destination?.category || "adventure"}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
                                {destination?.destinationName || "Destination Name"}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 pt-1">
                                <div className="flex items-center gap-1 font-medium">
                                    <Star size={15} className="fill-black text-black" />
                                    <span>4.9</span>
                                    <span className="text-gray-400 font-normal">(234 reviews)</span>
                                </div>
                                <span className="text-gray-300">•</span>
                                <div className="flex items-center gap-1.5 text-gray-600">
                                    <Calendar size={15} className="text-gray-400" />
                                    <span>{destination?.duration || "Duration"}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-2">
                            <h2 className="text-xl font-medium text-gray-900">Description</h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                {destination?.description || "No description provided."}
                            </p>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
                            <h3 className="text-sm font-semibold text-gray-900">Departure Information</h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar size={15} className="text-[#10A2B9]" />
                                <span>Scheduled Departure Date: <strong className="text-gray-900">{destination?.departureDate || "N/A"}</strong></span>
                            </div>
                        </div>

                    </div>

                    <div className="sticky top-6">
                        <Card className="border border-gray-100 shadow-sm bg-white rounded-xl p-6 space-y-6">
                            <CardContent className="p-0 space-y-6">
                                
                                <div className="space-y-1">
                                    <span className="text-xs text-gray-500 font-normal">Starting from</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-[#10A2B9]">
                                            ${destination?.price || "0"}
                                        </span>
                                        <span className="text-xs text-gray-400">per person</span>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="text-xs font-medium text-gray-500">Selected Departure Date</div>
                                    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-800 font-medium flex items-center justify-between">
                                        <span>{destination?.departureDate || ""}</span>
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

                </div>

            </div>
        </div>
    );
};

export default DestinationDetailsPage;