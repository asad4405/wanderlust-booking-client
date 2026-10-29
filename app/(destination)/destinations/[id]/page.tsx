import { DestinationDetailsClient } from '@/components/destination/DestinationDetailsClient';
import { auth } from '@/lib/auth';
import { DestinationType } from '@/types/Destination';
import { headers } from 'next/headers';

export default async function DestinationDetailsPage({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;

    const jwtToken = await auth.api.getToken({
        headers: await headers()
    });

    console.log(jwtToken?.token)

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseUrl}/destination/${id}`, {
        headers: {
            authorization: jwtToken?.token
        },
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