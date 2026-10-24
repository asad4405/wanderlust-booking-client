import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
    return (
        <section className="relative w-full py-28 sm:py-36 flex items-center justify-center overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/CTA.png"
                    alt="Ready To Start Your Journey"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                    Ready To Start Your Journey?
                </h2>

                <p className="text-gray-200 text-sm sm:text-base font-light max-w-xl mx-auto">
                    Join thousands of travelers who have discovered the world with us
                </p>

                <div className="pt-2">
                    <Button
                        className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-6 text-xs tracking-wider uppercase rounded-md shadow-lg cursor-pointer"
                    >
                        <Link href="#" className="flex items-center gap-2">
                            BOOK YOUR TRIP TODAY
                            <ArrowRight size={16} />
                        </Link>
                    </Button>
                </div>
            </div>

        </section>
    );
};

export default CTASection;