import Link from 'next/link';
import { User, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="text-cyan-500 border-b-2 border-cyan-500 pb-1">
                        Home
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                        Destinations
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                        My Bookings
                    </Link>
                    <Link href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                        Admin
                    </Link>
                </nav>

                <div className="text-center">
                    <Link href="#" className="text-2xl font-black tracking-tight text-cyan-600">
                        Wanderlast
                    </Link>
                </div>

                <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-cyan-600">
                        <Link href="#" className="flex items-center gap-1.5">
                            <User size={16} />
                            <span>Profile</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-cyan-600">
                        <Link href="#" className="flex items-center gap-1.5">
                            <LogIn size={16} />
                            <span>Login</span>
                        </Link>
                    </Button>

                    <Button variant="ghost" size="sm" className="text-gray-700 hover:text-cyan-600">
                        <Link href="#" className="flex items-center gap-1.5">
                            <UserPlus size={16} />
                            <span>Sign Up</span>
                        </Link>
                    </Button>
                </div>

            </div>
        </header>
    );
};

export default Navbar;