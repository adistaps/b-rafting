"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
    ["Aman untuk pemula?", "Aman. Sungai Elo bersahabat untuk pemula dan setiap boat didampingi guide berpengalaman."],
    ["Harga dihitung per orang atau boat?", "Harga paket dihitung per boat, maksimal 4 peserta per boat."],
    ["Pakaian apa yang disarankan?", "Gunakan pakaian nyaman yang cepat kering, alas kaki yang mengikat, dan bawa pakaian ganti."],
    ["Bagaimana jika hujan?", "Kami memantau kondisi cuaca. Jika tidak aman, jadwal dapat di-reschedule bersama admin."],
    ["Bisa untuk rombongan besar atau bus?", "Bisa. Area parkir dan operasional kami siap menerima rombongan, dengan koordinasi sebelumnya."],
    ["Bisa minta invoice untuk instansi?", "Bisa. Sampaikan kebutuhan invoice saat chat admin agar kami siapkan detailnya."],
    ["Kapan foto atau video diterima?", "Dokumentasi biasanya dibagikan setelah trip sesuai paket dan proses tim dokumentasi."],
    ["Usia minimal anak berapa?", "Anak dapat ikut dengan pertimbangan kondisi dan pendampingan orang dewasa. Konfirmasi ke admin."],
    ["Berapa jauh dari Borobudur, Jogja, dan Semarang?", "Lokasi berada di area Magelang dan mudah dijangkau dari Borobudur, Yogyakarta, maupun Semarang."],
    ["Apa beda Elo dan Progo?", "Elo lebih ramah pemula dengan durasi 2,5–3 jam; Progo menawarkan pilihan trip yang lebih singkat dan menantang."],
    ["Bisa kombinasi rafting dan Borobudur?", "Bisa. Pilih jadwal pagi atau siang sesuai susunan itinerary harianmu."],
    ["Di mana lokasi meeting point?", "Meeting point akan dikirim admin setelah booking dikonfirmasi."]
] as const

export default function FAQ() {
    const half = Math.ceil(faqs.length / 2)
    const leftFaqs = faqs.slice(0, half)
    const rightFaqs = faqs.slice(half)

    return (
        <section id="faq" className="w-full bg-white py-20 text-neutral-900 border-t border-neutral-200">
            {/* Container Fixed Width */}
            <div className="mx-auto max-w-7xl px-5 sm:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-8">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 leading-tight">
                            Pertanyaan yang<br />
                            <span className="text-neutral-400">sering ditanyakan.</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-xs font-medium text-neutral-500 leading-relaxed">
                        Informasi lengkap seputar operasional, persiapan, dan teknis trip rafting kamu.
                    </p>
                </div>

                {/* 2-Column Grid Accordion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 items-start">

                    {/* Kolom Kiri (01 - 06) */}
                    <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
                        {leftFaqs.map(([question, answer], index) => {
                            const num = index + 1
                            return (
                                <AccordionItem
                                    key={question}
                                    value={`item-left-${index}`}
                                    className="border-b border-neutral-200 rounded-none overflow-hidden"
                                >
                                    <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-900 hover:no-underline hover:text-neutral-500 transition-colors duration-200 [&[data-state=open]>svg]:rotate-45">
                                        <span className="flex items-center gap-4">
                                            <span className="text-xs font-mono font-normal text-neutral-400 shrink-0">
                                                {num.toString().padStart(2, "0")}
                                            </span>
                                            {question}
                                        </span>
                                        <Plus className="h-4 w-4 shrink-0 text-neutral-900 transition-transform duration-300 ease-out group-hover:scale-110" />
                                    </AccordionTrigger>
                                    <AccordionContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed pl-9 pb-5">
                                            {answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>

                    {/* Kolom Kanan (07 - 12) */}
                    <Accordion type="single" collapsible className="w-full border-t border-neutral-200">
                        {rightFaqs.map(([question, answer], index) => {
                            const num = index + half + 1
                            return (
                                <AccordionItem
                                    key={question}
                                    value={`item-right-${index}`}
                                    className="border-b border-neutral-200 rounded-none overflow-hidden"
                                >
                                    <AccordionTrigger className="group flex w-full items-center justify-between py-5 text-left text-sm sm:text-base font-bold uppercase tracking-tight text-neutral-900 hover:no-underline hover:text-neutral-500 transition-colors duration-200 [&[data-state=open]>svg]:rotate-45">
                                        <span className="flex items-center gap-4">
                                            <span className="text-xs font-mono font-normal text-neutral-400 shrink-0">
                                                {num.toString().padStart(2, "0")}
                                            </span>
                                            {question}
                                        </span>
                                        <Plus className="h-4 w-4 shrink-0 text-neutral-900 transition-transform duration-300 ease-out group-hover:scale-110" />
                                    </AccordionTrigger>
                                    <AccordionContent className="transition-all duration-300 ease-in-out data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed pl-9 pb-5">
                                            {answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>

                </div>

            </div>
        </section>
    )
}