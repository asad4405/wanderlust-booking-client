'use client';

import { X, AlertTriangle, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DestinationType } from '@/types/Destination';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    destination: DestinationType;
}

export const DeleteDestinationModal = ({ isOpen, onClose, destination }: DeleteModalProps) => {
    const router = useRouter();

    if (!isOpen) return null;

    const handleDelete = async () => {
        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            
            const res = await fetch(`${baseUrl}/destination/${destination._id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                toast.success('Travel package deleted successfully!', {
                    position: 'bottom-right',
                });
                onClose();
                router.push('/destinations'); 
            } else {
                toast.error('Failed to delete package', {
                    position: 'bottom-right',
                });
            }
        } catch (error) {
            console.error("Failed to delete", error);
            toast.error('Something went wrong', {
                position: 'bottom-right',
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl p-6 relative space-y-6">
                
                <button 
                    type="button" 
                    onClick={onClose} 
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                    <X size={20} />
                </button>

                <div className="flex items-center gap-4 pt-2">
                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
                        <AlertTriangle size={24} />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Delete Travel Package</h2>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                    Are you sure you want to delete &quot;<strong className="text-gray-900">{destination?.destinationName}</strong>&quot;? This action cannot be undone and will permanently remove this travel package from the system.
                </p>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                    <Button 
                        type="button" 
                        variant="outline" 
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </Button>
                    <Button 
                        type="button" 
                        onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm"
                    >
                        <Trash2 size={16} />
                        Delete Package
                    </Button>
                </div>

            </div>
        </div>
    );
};