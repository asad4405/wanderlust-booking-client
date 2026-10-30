'use client';

import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DestinationType } from '@/types/Destination';
import { toast } from 'sonner';
import { authClient } from '@/lib/auth-client';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    destination: DestinationType;
    onUpdateSuccess: () => void;
}

export const EditDestinationModal = ({ isOpen, onClose, destination, onUpdateSuccess }: EditModalProps) => {
    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';
            const { data: tokenData } = await authClient.token();
            const token = tokenData?.token;

            const res = await fetch(`${baseUrl}/destination/${destination._id}`, {
                method: 'PATCH',
                headers: { 
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify(userData),
            });
            
            if (res.ok) {
                toast.success('Destination updated successfully!', {
                    position: 'bottom-right',
                });
                onUpdateSuccess(); 
                onClose();
            } else {
                toast.error('Failed to update destination', {
                    position: 'bottom-right',
                });
            }
        } catch (error) {
            console.error("Failed to update", error);
            toast.error('Something went wrong', {
                position: 'bottom-right',
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Edit Destination</h2>
                    <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs font-medium text-gray-600">Destination Name</label>
                            <input type="text" name="destinationName" defaultValue={destination?.destinationName || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-600">Country</label>
                            <input type="text" name="country" defaultValue={destination?.country || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-600">Category</label>
                            <input type="text" name="category" defaultValue={destination?.category || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-600">Price ($)</label>
                            <input type="text" name="price" defaultValue={destination?.price || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-600">Duration</label>
                            <input type="text" name="duration" defaultValue={destination?.duration || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-600">Departure Date</label>
                            <input type="text" name="departureDate" defaultValue={destination?.departureDate || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-gray-600">Image URL</label>
                        <input type="text" name="imageUrl" defaultValue={destination?.imageUrl || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-gray-600">Description</label>
                        <textarea name="description" rows={3} defaultValue={destination?.description || ''} className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none focus:border-[#10A2B9]" />
                    </div>

                    <div className="flex justify-end gap-3 pt-4 border-t">
                        <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
                        <Button type="submit" className="bg-[#10A2B9] hover:bg-[#0e8fa3] text-white">Save Changes</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};