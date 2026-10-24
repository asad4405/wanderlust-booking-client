import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-[#111111] text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
                        Wanderlast
                    </h2>
                    <p className="text-gray-400 text-sm font-normal">
                        Your gateway to extraordinary travel experiences around the world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-gray-800">

                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                            NEWSLETTER
                        </h4>
                        <p className="text-gray-400 text-xs">
                            Subscribe for exclusive travel deals and inspiration.
                        </p>
                        <div className="flex items-center max-w-md relative">
                            <Input
                                type="email"
                                placeholder="Enter email"
                                className="bg-[#1C1C1C] border-gray-700 text-white placeholder:text-gray-500 rounded-md pr-10 py-5 text-sm focus-visible:ring-cyan-500"
                            />
                            <Button
                                size="icon"
                                variant="ghost"
                                className="absolute right-1 text-gray-400 hover:text-white hover:bg-transparent cursor-pointer"
                            >
                                <ArrowUpRight size={18} />
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                            QUICK LINKS
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Destinations</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">My Bookings</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">My Profile</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                            SUPPORT
                        </h4>
                        <ul className="space-y-2.5 text-xs text-gray-400">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Help Center</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
                            CONTACT US
                        </h4>
                        <div className="space-y-2 text-xs text-gray-400">
                            <p>786 901 1522</p>
                            <p>info@wanderland.com</p>
                        </div>
                    </div>

                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 Wanderlust. All rights reserved.</p>

                    <div className="flex items-center space-x-4">
                        <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>

                        <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </Link>

                        <Link href="#" className="hover:text-white transition-colors cursor-pointer">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;