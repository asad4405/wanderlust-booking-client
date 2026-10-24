import React from 'react';
import { ShieldCheck, Map, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
    {
        id: 1,
        title: 'Safe & Secure',
        description: 'Your safety is our priority with comprehensive travel insurance and 24/7 support.',
        icon: <ShieldCheck className="w-8 h-8 text-[#18A0FB]" />,
    },
    {
        id: 2,
        title: 'Expert Guides',
        description: 'Local experts who bring destinations to life with authentic cultural insights.',
        icon: <Map className="w-8 h-8 text-[#18A0FB]" />,
    },
    {
        id: 3,
        title: '24/7 Support',
        description: 'Round-the-clock customer service to assist you wherever your journey takes you.',
        icon: <Headphones className="w-8 h-8 text-[#18A0FB]" />,
    },
];

const WhyChooseUs = () => {
    return (
        <section className="w-full py-20 bg-[#F4F9FB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <div className="mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">
                        Why Choose Wanderlast
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base font-normal">
                        Your trusted partner for exceptional travel experiences
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item) => (
                        <Card key={item.id} className="bg-white border-0 shadow-sm rounded-xl p-6 text-left">
                            <CardContent className="p-0 space-y-4">
                                <div className="w-14 h-14 rounded-lg bg-[#EBF5FC] flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;