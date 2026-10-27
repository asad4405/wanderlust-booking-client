'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { DestinationInfo } from '@/components/destination/DestinationInfo';
import { BookingCard } from '@/components/destination/BookingCard';
import { EditDestinationModal } from '@/components/destination/EditDestinationModal';
import { DestinationType } from '@/types/Destination';
import { DestinationHeader } from '@/components/destination/DestinationHeader';

export default function DestinationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const [id, setId] = useState<string>('');
    const [destination, setDestination] = useState<DestinationType | null>(null);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const fetchDestination = useCallback(async (destinationId: string) => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const res = await fetch(`${baseUrl}/destination/${destinationId}`);
            const data = await res.json();
            setDestination(data);
        } catch (error) {
            console.error("data fetch error:", error);
        }
    }, []);

    useEffect(() => {
        params.then((p) => {
            setId(p.id);
            fetchDestination(p.id);
        });
    }, [params, fetchDestination]);

    if (!destination) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    const validImageUrl = 
        destination?.imageUrl && destination.imageUrl.trim().startsWith("http")
            ? destination.imageUrl.trim()
            : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

    return (
        <div className="w-full min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                
                <DestinationHeader 
                    id={id} 
                    destination={destination} 
                    onEditClick={() => setIsEditOpen(true)} 
                />

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
                    <DestinationInfo 
                        destinationName={destination.destinationName}
                        country={destination.country}
                        category={destination.category}
                        duration={destination.duration}
                        description={destination.description}
                        departureDate={destination.departureDate}
                    />

                    <BookingCard destination={destination}/>
                </div>

                <EditDestinationModal 
                    isOpen={isEditOpen}
                    onClose={() => setIsEditOpen(false)}
                    destination={destination}
                    onUpdateSuccess={() => fetchDestination(id)}
                />

            </div>
        </div>
    );
}