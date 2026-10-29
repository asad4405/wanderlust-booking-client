import { DestinationDetailsClient } from '@/components/destination/DestinationDetailsClient';
import { DestinationType } from '@/types/Destination';

export default async function DestinationDetailsPage({ 
    params 
}: { 
    params: Promise<{ id: string }> 
}) {
    const { id } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseUrl}/destination/${id}`, { 
        cache: 'no-store' 
    });
    const destination: DestinationType = await res.json();

    if (!destination) {
        return <div className="min-h-screen flex items-center justify-center">Destination not found</div>;
    }

    return (
        <DestinationDetailsClient 
            initialDestination={destination} 
            id={id} 
        />
    );
}