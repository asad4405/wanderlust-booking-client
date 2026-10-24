import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button'; 

const Banner = () => {
    return (
        <section className="relative w-full min-h-[calc(100vh-64px)] flex flex-col justify-between overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/Banner.png"
                    alt="Banner Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
                    Discover Your <br /> Next Adventure
                </h1>

                <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mb-8 font-light">
                    Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button className="bg-[#18A0FB] hover:bg-cyan-600 text-white font-semibold px-6 py-6 text-xs tracking-wider uppercase rounded-md">
                        EXPLORE NOW
                        <ArrowRight size={16} className="ml-2" />
                    </Button>

                    <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/40 backdrop-blur-md font-semibold px-6 py-6 text-xs tracking-wider uppercase rounded-md">
                        VIEW DESTINATION
                    </Button>
                </div>
            </div>

            <div className="w-full bg-black/40 backdrop-blur-md border-t border-white/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-white">

                    <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center">
                        <span className="text-sm font-semibold text-gray-200">Location</span>
                        <span className="text-xs text-gray-300 font-light mt-0.5">Address, City Or Zip</span>
                    </div>

                    <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center">
                        <span className="text-sm font-semibold text-gray-200">Date/Duration</span>
                        <span className="text-xs text-gray-300 font-light mt-0.5">Anytime/3 Days</span>
                    </div>

                    <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center">
                        <span className="text-sm font-semibold text-gray-200">Budget</span>
                        <span className="text-xs text-gray-300 font-light mt-0.5">$0-$3000</span>
                    </div>

                    <div className="p-4 border-b sm:border-b-0 sm:border-r border-white/10 flex flex-col justify-center">
                        <span className="text-sm font-semibold text-gray-200">People</span>
                        <span className="text-xs text-gray-300 font-light mt-0.5">5-10</span>
                    </div>

                    <Button className="bg-[#18A0FB] hover:bg-cyan-600 text-white font-semibold rounded-none h-full py-6 text-base w-full">
                        Search
                    </Button>

                </div>
            </div>

        </section>
    );
};

export default Banner;