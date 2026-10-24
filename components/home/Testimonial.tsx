"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    location: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
        name: "Michael Chen",
        location: "Singapore",
        image: "/images/person1.png",
    },
    {
        id: 2,
        quote: '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
        name: "Sarah Johnson",
        location: "New York, USA",
        image: "/images/person2.png",
    },
    {
        id: 3,
        quote: '"An incredible journey from start to finish. The team took care of everything seamlessly, allowing us to just enjoy the stunning beauty."',
        name: "David Smith",
        location: "London, UK",
        image: "/images/person3.png",
    },
];

const Testimonial = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [, setCurrent] = useState<number>(1);

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
        <section className="w-full py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-1">
                            What Travelers Say
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base font-normal">
                            Real experiences from our happy travelers
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
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

                <Carousel setApi={setApi} className="w-full">
                    <CarouselContent className="-ml-6">
                        {testimonials.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="pl-6 basis-full lg:basis-[50%]"
                            >
                                <Card className="border border-gray-100 shadow-sm bg-white rounded-xl overflow-hidden p-6 sm:p-8">
                                    <CardContent className="p-0 flex flex-col sm:flex-row items-center justify-between gap-6">

                                        <div className="flex-1 space-y-4">
                                            <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
                                                {item.quote}
                                            </p>
                                            <div>
                                                <h4 className="text-cyan-500 font-bold text-sm tracking-wide">
                                                    — {item.name}
                                                </h4>
                                                <span className="text-gray-400 text-xs">
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 rounded-lg overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    );
};

export default Testimonial;