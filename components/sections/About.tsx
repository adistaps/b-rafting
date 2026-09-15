"use client"

import React from "react"
import Image from "next/image"
import { BadgeCheck, Headphones, ShieldCheck } from "lucide-react"

export default function About() {
    return (
        <section className="w-full bg-white py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* KOLOM KIRI: Typography Elegan & Profil Founder */}
                    <div className="lg:col-span-5 flex flex-col justify-center">

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111111] leading-[1.1]">
                            Petualangan Air <br />
                            <span className="text-[#0e2a25]">Terbaik di Magelang</span>
                        </h2>

                        <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#556861]">
                            Menaklukkan jeram Sungai Elo bukan sekadar arung jeram biasa, melainkan kombinasi sempurna antara keindahan alam Magelang dan sensasi keseruan tanpa batas. Arusnya ramah pemula, dipandu tim berpengalaman, serta dilengkapi fasilitas terbaik untuk momen tak terlupakan bersama keluarga maupun tim.
                        </p>
                    </div>

                    {/* KOLOM KANAN: Visual Gallery Staggered (Presisi Referensi) */}
                    <div className="lg:col-span-7 grid grid-cols-12 gap-4 sm:gap-6 items-center">
                        {/* Foto Utama (Lebih Tinggi) */}
                        <div className="col-span-7 relative">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100 shadow-xl">
                                <Image
                                    src="/images/rafting-7.webp"
                                    alt="Rafting Sungai Elo"
                                    fill
                                    sizes="(max-width: 1024px) 60vw, 30vw"
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Foto Sekunder (Offset Kebawah) */}
                        <div className="col-span-5 relative -mt-8 sm:-mt-12">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-100 shadow-2xl ring-1 ring-black/5">
                                <Image
                                    src="/images/rafting-1.webp"
                                    alt="Aktivitas Arung Jeram"
                                    fill
                                    sizes="(max-width: 1024px) 40vw, 20vw"
                                    loading="lazy"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}