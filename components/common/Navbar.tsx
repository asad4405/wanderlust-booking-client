"use client";
import Link from 'next/link';
import { User, LogIn, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();
    const handleSignOut = async() => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Signed out successfully!");
                    router.push("/signin"); 
                },
            },
        });
    }
    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="text-cyan-500 border-b-2 border-cyan-500 pb-1">
                        Home
                    </Link>
                    <Link href="/destinations" className="text-gray-700 hover:text-cyan-600 transition-colors">
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
                    <Link href="/" className="text-2xl font-black tracking-tight text-cyan-600">
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

                    {user ?
                        <Popover>
                            <PopoverTrigger render={
                                <Avatar className="w-10 h-10">
                                    <AvatarImage referrerPolicy='no-referrer'
                                        src={user?.image || undefined}
                                        alt={user?.name || "User"}
                                    />
                                    <AvatarFallback>
                                        {user?.name ? user.name.slice(0, 2).toUpperCase() : "CN"}
                                    </AvatarFallback>
                                </Avatar>
                            }>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverHeader>
                                    <PopoverTitle>{user?.name}</PopoverTitle>
                                    <PopoverDescription>
                                        <p>{user?.email}</p>
                                        <Button onClick={handleSignOut} variant={'destructive'} className="mt-2 cursor-pointer">Sign Out</Button>
                                    </PopoverDescription>
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover> :
                        <>
                            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-cyan-600">
                                <Link href="/signin" className="flex items-center gap-1.5">
                                    <LogIn size={16} />
                                    <span>Login</span>
                                </Link>
                            </Button>

                            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-cyan-600">
                                <Link href="/signup" className="flex items-center gap-1.5">
                                    <UserPlus size={16} />
                                    <span>Sign Up</span>
                                </Link>
                            </Button>
                        </>
                    }


                </div>

            </div>
        </header>
    );
};

export default Navbar;