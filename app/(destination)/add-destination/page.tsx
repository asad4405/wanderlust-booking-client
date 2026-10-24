"use client";

import React from "react";
import { Trash2, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AddDestinationPage = () => {
    const router = useRouter();
    const handleAddDestinationPage = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/add-destination`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data),
        });

        const destination = await res.json();

        if (destination.insertedId) {
            toast.success("Travel package added successfully!");
            router.push('/destinations');
        } else {
            toast.error("Failed to add destination.");
        }
    };

    return (
        <div className="w-full min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">

                <h1 className="text-2xl sm:text-3xl font-normal text-gray-900 tracking-tight">
                    Add New Travel Package
                </h1>

                <Card className="border border-gray-200 shadow-sm bg-white rounded-lg p-6 sm:p-10">
                    <CardContent className="p-0">
                        <form onSubmit={handleAddDestinationPage} className="space-y-6">
                            
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-600">
                                    Destination Name
                                </label>
                                <Input
                                    name="destinationName"
                                    type="text"
                                    placeholder="Bali Paradise"
                                    className="bg-gray-50/50 border-gray-200 text-gray-900 focus-visible:ring-cyan-500 py-5"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-600">
                                        Country
                                    </label>
                                    <Input
                                        name="country"
                                        type="text"
                                        placeholder="Indonesia"
                                        className="bg-gray-50/50 border-gray-200 text-gray-900 focus-visible:ring-cyan-500 py-5"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-600">
                                        Category
                                    </label>
                                    <select 
                                        name="category"
                                        className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                                    >
                                        <option value="beach">Beach</option>
                                        <option value="mountain">Mountain</option>
                                        <option value="city">City</option>
                                        <option value="adventure">Adventure</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-600">
                                        Price (USD)
                                    </label>
                                    <Input
                                        name="price"
                                        type="text"
                                        placeholder="e.g., 1299"
                                        className="bg-gray-50/50 border-gray-200 text-gray-900 focus-visible:ring-cyan-500 py-5"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-gray-600">
                                        Duration
                                    </label>
                                    <Input
                                        name="duration"
                                        type="text"
                                        placeholder="e.g., 7 Days/6 Nights"
                                        className="bg-gray-50/50 border-gray-200 text-gray-900 focus-visible:ring-cyan-500 py-5"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-600">
                                    Departure Date
                                </label>
                                <Input
                                    name="departureDate"
                                    type="text"
                                    placeholder="mm/dd/yyyy"
                                    className="bg-gray-50/50 border-gray-200 text-gray-900 focus-visible:ring-cyan-500 py-5"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-600">
                                    Image URL
                                </label>
                                <Input
                                    name="imageUrl"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    className="bg-gray-50/50 border-gray-200 text-gray-900 focus-visible:ring-cyan-500 py-5"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-600">
                                    Description
                                </label>
                                <Textarea
                                    name="description"
                                    placeholder="Describe the travel experience..."
                                    className="bg-gray-50/50 border-gray-200 text-gray-900 min-h-32.5 focus-visible:ring-cyan-500 p-3"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 px-5 py-5 rounded-md cursor-pointer text-xs font-semibold tracking-wider"
                                >
                                    <Trash2 size={15} className="mr-1.5" />
                                    Cancel
                                </Button>

                                <Button
                                    type="submit"
                                    className="bg-[#10A2B9] hover:bg-[#0e8fa3] text-white px-6 py-5 rounded-md cursor-pointer text-xs font-semibold tracking-wider"
                                >
                                    <Plus size={15} className="mr-1.5" />
                                    Add Travel Package
                                </Button>
                            </div>

                        </form>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
};

export default AddDestinationPage;