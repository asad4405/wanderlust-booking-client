'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Edit3, Trash2 } from 'lucide-react';
import { DestinationType } from '@/types/Destination';
import { DeleteDestinationModal } from './DeleteDestinationModal';

interface HeaderProps {
    id: string;
    destination: DestinationType;
    onEditClick: () => void;
}

export const DestinationHeader = ({ id, destination, onEditClick }: HeaderProps) => {
    
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between">
                <Link 
                    href="/destinations" 
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 gap-2 transition-colors"
                >
                    <ArrowLeft size={16} />
                    পিছনে যান (Back to Destinations)
                </Link>

                <div className="flex items-center gap-3">
                    <button 
                        type="button"
                        onClick={onEditClick}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
                    >
                        <Edit3 size={15} />
                        Edit
                    </button>

                    <button 
                        type="button"
                        onClick={() => setIsDeleteOpen(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 border border-red-100 rounded-lg text-sm font-medium text-red-600 bg-white hover:bg-red-50 transition-colors shadow-sm cursor-pointer"
                    >
                        <Trash2 size={15} />
                        Delete
                    </button>
                </div>
            </div>

            <DeleteDestinationModal 
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                destination={destination}
            />
        </>
    );
};