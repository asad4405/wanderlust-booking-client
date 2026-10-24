"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowUpRight, ArrowLeft, ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

interface Destination {
    id: number;
    title: string;
    location: string;
    rating: string;
    price: string;
    duration: string;
    image: string;
}

const destinations: Destination[] = [
    {
        id: 1,
        title: "Bali Paradise",
        location: "Nepal",
        rating: "4.5",
        price: "$2700",
        duration: "7 Days/6 Nights",
        image: "/images/destinations/image1.png",
    },
    {
        id: 2,
        title: "Bali Paradise",
        location: "Indonesia",
        rating: "4.5",
        price: "$2700",
        duration: "7 Days/6 Nights",
        image: "/images/destinations/image2.png",
    },
    {
        id: 3,
        title: "Bali Paradise",
        location: "Indonesia",
        rating: "4.8",
        price: "$2900",
        duration: "7 Days/6 Nights",
        image: "/images/destinations/image3.png",
    },
    {
        id: 4,
        title: "Maldives Beach Resort",
        location: "Maldives",
        rating: "4.9",
        price: "$3200",
        duration: "5 Days/4 Nights",
        image: "/images/destinations/image4.png",
    },
    {
        id: 5,
        title: "Santorini Escape",
        location: "Greece",
        rating: "4.7",
        price: "$3100",
        duration: "6 Days/5 Nights",
        image: "/images/destinations/image5.png",
    },
];

const FeaturedDestinations = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState<number>(1);
    const [count] = useState<number>(destinations.length);

    useEffect(() => {
        if (!api) return;

        queueMicrotask(() => {
            setCurrent(api.selectedScrollSnap() + 1);
        });

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <section className="w-full py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                            Featured Destinations
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base mt-2 font-normal">
                            Handpicked travel experiences for the adventure seekers
                        </p>
                    </div>

                    <Button
                        variant="outline"
                        className="border-cyan-500 text-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 uppercase text-xs font-semibold tracking-wider px-5 py-5 rounded-none self-start sm:self-auto cursor-pointer"
                    >
                        <Link href="#" className="flex items-center gap-2">
                            ALL DESTINATIONS
                            <ArrowRight size={14} />
                        </Link>
                    </Button>
                </div>

                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent className="-ml-6">
                        {destinations.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-6 basis-full sm:basis-[48%] md:basis-[48%] lg:basis-[48%]"
                            >
                                <div className="bg-transparent group cursor-pointer">

                                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-sm mb-3">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 text-xs font-bold rounded-sm flex items-center gap-1 shadow-sm">
                                            <span>{item.rating}</span>
                                            <Star size={11} className="fill-black text-black" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5 px-0">
                                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                                            <MapPin size={13} className="text-gray-400" />
                                            <span>{item.location}</span>
                                        </div>

                                        <div className="flex items-baseline justify-between">
                                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                                {item.title}
                                            </h3>
                                            <div className="text-right">
                                                <span className="text-xl font-bold text-gray-900">{item.price}</span>
                                                <span className="text-xs text-gray-400 font-normal">/Person</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                            <Calendar size={13} className="text-gray-400" />
                                            <span>{item.duration}</span>
                                        </div>

                                        <div className="pt-2">
                                            <Link
                                                href="#"
                                                className="inline-flex items-center gap-1 text-xs font-bold text-cyan-500 hover:text-cyan-600 tracking-wider uppercase cursor-pointer"
                                            >
                                                BOOK NOW
                                                <ArrowUpRight size={14} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="mt-10 flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1 max-w-2xl">
                            <span className="text-sm font-medium text-gray-800">
                                {current}/{count}
                            </span>
                            <div className="h-[1.5px] bg-gray-200 flex-1 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gray-400 transition-all duration-300 ease-out"
                                    style={{ width: `${(current / count) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3 ml-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-10 h-10 border-gray-300 hover:bg-gray-100 cursor-pointer"
                                onClick={() => api?.scrollPrev()}
                            >
                                <ArrowLeft size={16} className="text-gray-600" />
                            </Button>

                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full w-10 h-10 border-gray-300 hover:bg-gray-100 cursor-pointer"
                                onClick={() => api?.scrollNext()}
                            >
                                <ArrowRight size={16} className="text-gray-600" />
                            </Button>
                        </div>
                    </div>
                </Carousel>

            </div>
        </section>
    );
};

export default FeaturedDestinations;