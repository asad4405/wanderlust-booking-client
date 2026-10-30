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

    const tokenData = await auth.api.getToken({
        headers: await headers()
    });

    const token = typeof tokenData === 'string' ? tokenData : tokenData?.token;

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const res = await fetch(`${baseUrl}/destination/${id}`, {
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        },
        cache: 'no-store'
    });

    if (!res.ok) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-2">
                <h1 className="text-xl font-bold text-red-500">Failed to load destination details</h1>
                <p className="text-gray-600">Status: {res.status} ({res.statusText})</p>
            </div>
        );
    }

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