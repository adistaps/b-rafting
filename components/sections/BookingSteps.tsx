import { ArrowRight, CalendarCheck, MessageCircle, WalletCards } from "lucide-react"

const steps = [
    ["01", "Chat admin & cek slot", "Sampaikan jumlah peserta, pilihan paket, dan tanggal yang diinginkan.", MessageCircle],
    ["02", "Konfirmasi & DP", "Terima detail booking lalu amankan slot dengan pembayaran DP.", WalletCards],
    ["03", "Datang & mulai trip", "Datang sesuai jadwal, gunakan perlengkapan, dan nikmati sungainya.", CalendarCheck],
] as const

export default function BookingSteps() {
    return (
        <section id="booking" className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    {/* Left Column: Bold Title & Pill CTA Button */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-[1.1]">
                            Tiga langkah menuju <br className="hidden sm:inline" />
                            sungai.
                        </h2>

                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center gap-4 rounded-full bg-black py-2 pl-6 pr-2 text-xs font-black uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <span>Booking via WhatsApp</span>
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ccff00] text-black">
                                    <ArrowRight className="h-4 w-4" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Clean Feature Grid (Matching Reference Image) */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {steps.map(([number, title, text, Icon]) => (
                            <div key={number} className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f4f4] text-neutral-900">
                                    <Icon className="h-5 w-5 stroke-[2]" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                                        {title}
                                    </h3>
                                    <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed">
                                        {text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}