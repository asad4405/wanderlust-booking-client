'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DestinationInfo } from '@/components/destination/DestinationInfo';
import { BookingCard } from '@/components/destination/BookingCard';
import { EditDestinationModal } from '@/components/destination/EditDestinationModal';
import { DestinationType } from '@/types/Destination';
import { DestinationHeader } from '@/components/destination/DestinationHeader';
import { useRouter } from 'next/navigation';

interface DestinationDetailsClientProps {
    initialDestination: DestinationType;
    id: string;
}

export function DestinationDetailsClient({ 
    initialDestination, 
    id 
}: DestinationDetailsClientProps) {
    const [destination, setDestination] = useState<DestinationType>(initialDestination);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const router = useRouter();

    const handleUpdateSuccess = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const res = await fetch(`${baseUrl}/destination/${id}`);
            const data = await res.json();
            if (data) {
                setDestination(data);
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to refresh destination data:", error);
        }
    };

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
                    onUpdateSuccess={handleUpdateSuccess}
                />

            </div>
        </div>
    );
}