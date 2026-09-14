"use client";

import React, { useRef } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import { StepCard } from "@/components/ui/how-it-works";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
    "Parkir & Konfirmasi",
    "Menuju Titik Start",
    "Briefing & Pembagian Alat",
    "Mulai Mengarungi Jeram",
    "Rehat Kelapa Muda",
    "Kembali ke Meeting Point",
] as const;

const cardRotations = [
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-1",
    "rotate-1",
    "-rotate-2",
];

const cardThemes: ("mono")[] = [
    "mono",
    "mono",
    "mono",
    "mono",
    "mono",
    "mono",
];

export default function TripFlow() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const amount = direction === "left" ? -260 : 260;
            scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    return (
        <LazyMotion features={domAnimation}>
            <section className="relative w-full bg-white py-12 md:py-20 overflow-hidden select-none border-t border-neutral-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header Section (Polos Tanpa Background Box) */}
                    <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                                Dari start sampai finish
                            </p>
                            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                                Begini alur<br />
                                petualanganmu.
                            </h2>
                        </div>

                        <div className="flex items-end justify-between gap-4 md:flex-col md:items-end">
                            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-neutral-600">
                                Tidak perlu bingung. Tim kami akan mendampingi di setiap langkah perjalanan.
                            </p>

                            {/* Tombol Navigasi Horizontal Scroll (Hanya Tampil di Mobile/Tablet) */}
                            <div className="flex gap-1.5 lg:hidden shrink-0">
                                <button
                                    onClick={() => scroll("left")}
                                    aria-label="Scroll Kiri"
                                    className="flex h-9 w-9 items-center justify-center border border-neutral-300 bg-white text-black active:bg-black active:text-white transition-colors"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    aria-label="Scroll Kanan"
                                    className="flex h-9 w-9 items-center justify-center border border-neutral-300 bg-white text-black active:bg-black active:text-white transition-colors"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CARDS CONTAINER (Horizontal Snap Scroll di HP, Grid 6 Kolom di Desktop) */}
                    <div
                        ref={scrollRef}
                        className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory scrollbar-none py-4 px-1"
                    >
                        {steps.map((step, i) => (
                            <div
                                key={step}
                                className="min-w-[220px] sm:min-w-[240px] lg:min-w-0 flex-none snap-start"
                            >
                                <StepCard
                                    number={`0${i + 1}`}
                                    title={step}
                                    colorTheme={cardThemes[i % cardThemes.length]}
                                    rotate={cardRotations[i % cardRotations.length]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </LazyMotion>
    );
}