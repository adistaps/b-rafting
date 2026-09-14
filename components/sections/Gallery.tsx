"use client"

import React from "react"

const photos = [
    {
        img: "/images/rafting-5.webp",
    },
    {
        img: "/images/rafting-6.webp",
    },
    {
        img: "/images/rafting-7.webp",
    },
    {
        img: "/images/rafting-1.webp",
    },
    {
        img: "/images/rafting-2.webp",
    },
] as const

export default function Gallery() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 md:py-16">
            <div className="mx-auto max-w-[1440px] px-3 sm:px-5 lg:px-8">
                {/* Gallery Grid (Exact Match Layout Referensi, 0px Rounded, Pure White BG) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-2 sm:gap-3">

                    {/* KOLOM KIRI (Grid 2 Atas & Bawah) */}
                    <div className="md:col-span-6 grid grid-cols-2 gap-2 sm:gap-3">
                        {/* Foto 1: Landscape Atas (Memanjang Kiri ke Kanan) */}
                        <div className="col-span-2 relative h-60 sm:h-72 lg:h-80 overflow-hidden group bg-gray-100">
                            <img
                                src={photos[0].img}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                            <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-wider text-white">
                            </p>
                        </div>

                        {/* Foto 2: Kiri Bawah */}
                        <div className="col-span-1 relative h-52 sm:h-64 lg:h-72 overflow-hidden group bg-gray-100">
                            <img
                                src={photos[1].img}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                            <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-wider text-white">

                            </p>
                        </div>

                        {/* Foto 3: Kanan Bawah */}
                        <div className="col-span-1 relative h-52 sm:h-64 lg:h-72 overflow-hidden group bg-gray-100">
                            <img
                                src={photos[2].img}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                            <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-wider text-white">

                            </p>
                        </div>
                    </div>

                    {/* KOLOM TENGAH: Foto Tinggi / Portrait Standalone */}
                    <div className="md:col-span-3 relative h-80 md:h-auto overflow-hidden group bg-gray-100">
                        <img
                            src={photos[3].img}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                        <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-wider text-white">

                        </p>
                    </div>

                    {/* KOLOM KANAN: Foto Tinggi / Portrait Right */}
                    <div className="md:col-span-3 relative h-80 md:h-auto overflow-hidden group bg-gray-100">
                        <img
                            src={photos[4].img}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                        <p className="absolute bottom-4 left-4 right-4 text-xs font-bold uppercase tracking-wider text-white">
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}