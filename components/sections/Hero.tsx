'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
    ArrowDownRight,
    Check,
    Clock3,
    MapPin,
    Users,
    Sparkles
} from 'lucide-react';

const CARDS_DATA = [
    {
        titleLines: ["RAMAH", "PEMULA"],
        badgeText: "Ramah pemula",
        subtext: "SUNGAI ELO · MAGELANG",
        icon: Check,
        bgImage: "/images/rafting-1.webp",
        isGrayscale: false,
    },
    {
        titleLines: ["±3 JAM", "TRIP"],
        badgeText: "±3 jam trip",
        subtext: "DURASI STANDAR",
        icon: Clock3,
        bgImage: "/images/rafting-2.webp",
        isGrayscale: true,
    },
    {
        titleLines: ["4 ORANG", "+ 1 GUIDE"],
        badgeText: "4 orang + 1 guide",
        subtext: "FASILITAS LENGKAP",
        icon: Users,
        bgImage: "/images/rafting-3.webp",
        isGrayscale: false,
    },
    {
        titleLines: ["DEKAT", "BOROBUDUR"],
        badgeText: "Dekat Borobudur",
        subtext: "LOKASI STRATEGIS",
        icon: MapPin,
        bgImage: "/images/rafting-4.webp",
        hasPromoSticker: true,
        isGrayscale: false,
    }
];

export default function Hero() {
    const [activeBgIndex, setActiveBgIndex] = useState(0);
    const [logoError, setLogoError] = useState(false);

    const heroBackgrounds = [
        "/images/rafting-5.webp",
        "/images/rafting-6.webp"
    ];

    return (
        <section id="hero" className="w-full bg-[#0d0d0d] text-white font-sans overflow-hidden select-none">

            {/* SEO: H1 tersembunyi secara visual — tidak mengubah tampilan, tapi memberi sinyal topik utama halaman ke Google */}
            <h1 className="sr-only">
                Rafting Elo Magelang — Arung Jeram Terbaik dan Termurah Dekat Borobudur
            </h1>

            {/* ==========================================
            TOP HERO BANNER
            ========================================== */}
            <div className="relative min-h-[45vh] sm:min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-between items-center px-4 pt-12 sm:pt-28 pb-6 border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroBackgrounds[activeBgIndex]}
                        alt="Rafting Background"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        className="object-cover object-center transition-all duration-700 brightness-90 contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/20 to-black/40" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-4 my-auto py-4 flex flex-col items-center">
                    {!logoError ? (
                        <Image
                            src="/logo.png"
                            alt="Rafting Elo Magelang - Arung Jeram Sungai Elo"
                            width={400}
                            height={160}
                            priority
                            className="h-36 sm:h-64 md:h-80 lg:h-96 w-auto object-contain mx-auto mb-2 brightness-0 invert drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
                            onError={() => setLogoError(true)}
                        />
                    ) : (
                        <div className="logo-fallback mb-2 text-3xl sm:text-5xl font-extrabold tracking-widest text-white uppercase border-2 border-blue-600 px-6 py-2 rounded-xs">
                            LOGOTYPE
                        </div>
                    )}
                </div>
            </div>

            {/* ==========================================
            BOTTOM 4-CARD GRID (MOBILE UX OPTIMIZED)
            ========================================== */}
            <div className="w-full bg-[#0d0d0d] p-3 sm:p-0">
                {/* 
                  - Mobile (< sm): Gap 3 (gap-3), Grid 2x2, Rounded Card (rounded-2xl)
                  - Desktop (>= sm): Grid 1 row border utuh seperti desain asli Anda
                */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-0 sm:border-t sm:border-white/10">
                    {CARDS_DATA.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative min-h-[190px] sm:min-h-[290px] lg:min-h-[320px] flex flex-col justify-between p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-none border border-white/10 sm:border-0 sm:border-r sm:border-b-0 overflow-hidden cursor-pointer bg-[#141414] sm:bg-transparent"
                            >
                                {/* Background Photo */}
                                <Image
                                    src={card.bgImage}
                                    alt={card.badgeText}
                                    fill
                                    sizes="(max-width: 640px) 50vw, 25vw"
                                    loading="lazy"
                                    className={`object-cover object-center transition-transform duration-700 group-hover:scale-105 ${card.isGrayscale
                                        ? "grayscale brightness-[0.45] group-hover:grayscale-0 group-hover:brightness-[0.6]"
                                        : "brightness-[0.45] group-hover:brightness-[0.6]"
                                        }`}
                                />

                                {/* Gradient Shadow Overlay untuk Keterbacaan Teks */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

                                {/* SEASON PROMO STICKER (Mobile & Desktop) */}
                                {card.hasPromoSticker && (
                                    <div className="absolute top-3 right-3 z-20 pointer-events-none">
                                        <div className="rotate-[12deg] bg-amber-400 text-black px-2 py-1 rounded-xl shadow-xl font-extrabold uppercase text-[8px] sm:text-[9px] tracking-wider flex items-center gap-1 border border-black/20 text-center leading-tight">
                                            <Sparkles className="w-2.5 h-2.5 fill-black shrink-0" />
                                            <span>SEASON<br />PROMO</span>
                                        </div>
                                    </div>
                                )}

                                {/* BARIS ATAS: Judul Teks + Ikon Bulat Besar di Pojok Kanan */}
                                <div className="relative z-10 flex items-start justify-between gap-2">
                                    <div>
                                        {card.titleLines.map((line, lIdx) => (
                                            <div
                                                key={lIdx}
                                                className="text-xl sm:text-3xl lg:text-3xl font-black uppercase tracking-tight text-white leading-none drop-shadow-md group-hover:text-[#ccff00] transition-colors"
                                            >
                                                {line}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Icon Badge Bulat di Atas Kanan */}
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ccff00] flex items-center justify-center shrink-0 shadow-lg">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[2.5]" />
                                    </div>
                                </div>

                                {/* BARIS BAWAH: Pill Badge & Subtext */}
                                <div className="relative z-10 flex flex-col items-start gap-1.5 mt-auto">
                                    {/* Pill Badge Lonjong */}
                                    <span className="inline-flex items-center gap-1.5 bg-[#ccff00] text-black px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-[11px] font-bold tracking-wide rounded-full shadow-md max-w-full">
                                        <Icon className="w-3 h-3 shrink-0 text-black" />
                                        <span className="truncate">{card.badgeText}</span>
                                    </span>

                                    {/* Subtext Lokasi/Keterangan */}
                                    <p className="text-[9px] sm:text-[10px] font-bold tracking-widest text-white/70 uppercase truncate w-full">
                                        {card.subtext}
                                    </p>
                                </div>

                                {/* Hover Accent Bar (Mobile-friendly) */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ccff00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}