import { Star, Calendar, MapPin, Tag } from 'lucide-react';

interface InfoProps {
    destinationName: string;
    country: string;
    category: string;
    duration: string;
    description: string;
    departureDate: string;
}

export const DestinationInfo = ({
    destinationName,
    country,
    category,
    duration,
    description,
    departureDate
}: InfoProps) => {
    return (
        <div className="lg:col-span-2 space-y-8">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        <MapPin size={13} className="text-gray-400" />
                        {country || "Country"}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[#10A2B9] bg-[#10A2B9]/10 px-2.5 py-1 rounded-md font-medium uppercase tracking-wider">
                        <Tag size={12} />
                        {category || "adventure"}
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
                    {destinationName || "Destination Name"}
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
                        <span>{duration || "Duration"}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 pt-2">
                <h2 className="text-xl font-medium text-gray-900">Description</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {description || "No description provided."}
                </p>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 space-y-2">
                <h3 className="text-sm font-semibold text-gray-900">Departure Information</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={15} className="text-[#10A2B9]" />
                    <span>Scheduled Departure Date: <strong className="text-gray-900">{departureDate || "N/A"}</strong></span>
                </div>
            </div>
        </div>
    );
};