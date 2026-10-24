import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { DestinationType } from '@/types/Destination';


const DestinationsPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/destinations`, {
        cache: 'no-store'
    });
    const destinations: DestinationType[] = await res.json();

    return (
        <div className="w-full min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                <div className="space-y-1">
                    <h1 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
                        Explore All Destinations
                    </h1>
                    <p className="text-gray-500 text-sm sm:text-base">
                        Find your perfect travel experience from our curated collection
                    </p>
                </div>

                <div className="text-sm text-gray-500 font-normal pt-2">
                    Showing {destinations.length} destinations
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {destinations.map((item) => {
                        const validImageUrl = 
                            item.imageUrl && item.imageUrl.trim().startsWith("http")
                                ? item.imageUrl.trim()
                                : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

                        return (
                            <div key={item._id || item.destinationName} className="bg-transparent border-0 outline-none flex flex-col justify-between group">
                                <div className="p-0 flex flex-col h-full">
                                    
                                    <div className="relative w-full h-56 sm:h-60 bg-gray-100 overflow-hidden rounded-lg">
                                        <Image
                                            src={validImageUrl}
                                            alt={item.destinationName || "Destination"}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1 shadow-sm text-gray-900">
                                            <span>{item.rating || "4.5"}</span>
                                            <Star size={11} className="fill-black text-black" />
                                        </div>
                                    </div>

                                    <div className="pt-3.5 flex flex-col grow justify-between space-y-3">
                                        <div className="space-y-1">
                                            <div className="flex items-center text-xs text-gray-500 gap-1">
                                                <MapPin size={12} className="text-gray-400" />
                                                <span>{item.country}</span>
                                            </div>

                                            <div className="flex items-baseline justify-between gap-2">
                                                <h3 className="text-lg font-normal text-gray-900 tracking-tight">
                                                    {item.destinationName}
                                                </h3>
                                                <div className="text-right whitespace-nowrap">
                                                    <span className="text-base font-medium text-gray-900">${item.price}</span>
                                                    <span className="text-xs text-gray-400 font-normal">/Person</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center text-xs text-gray-500 gap-1 pt-0.5">
                                                <Calendar size={12} className="text-gray-400" />
                                                <span>{item.duration}</span>
                                            </div>
                                        </div>

                                        <div className="pt-1">
                                            <Link href={`/destinations/${item._id}`} className="inline-flex items-center text-xs font-semibold text-[#10A2B9] hover:text-[#0e8fa3] gap-1 tracking-wider uppercase">
                                                BOOK NOW
                                                <ArrowUpRight size={14} />
                                            </Link>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default DestinationsPage;