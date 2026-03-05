"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function HeroSection() {
    return (
        <div className='relative h-screen'>
            <Image
                src="/landing-splash.jpg"
                alt="Rentiful Rental Platform Hero Section"
                fill
                className="object-cover object-center"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
                <div className="max-w-4xl mx-auto px-16 sm:px-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Start your Journey to Your Dream Home with Estate Edge
                    </h1>
                    <p className="text-xl text-white mb-8">
                        Explore our wide range of properties, personalized recommendations, and seamless search experience. Your perfect home is just a click away!
                    </p>
                    <div className="flex justify-center">
                        <Input
                            type="text"
                            value="searchQuery"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search by city, neightbourhood or address.'
                            className='w-full max-w-lg rounded-none rounded-r-xl border-none hbg-white h-12'
                        />
                        <Button
                            onClick="handleLocationSearch"
                            className="bg-secondary-500 text-white rounded-none rounded-r-xl border-none hover:bg-secondry-600 h-12"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
};

export default HeroSection;