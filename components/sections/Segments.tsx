import { BriefcaseBusiness, Users, Waves } from "lucide-react"

const segments = [
    [
        "Keluarga & Anak-anak",
        "Ajak si kecil mengenal alam dengan cara yang aman, seru, dan didampingi guide berpengalaman.",
        Users,
    ],
    [
        "Instansi & Company Gathering",
        "Bangun kekompakan tim lewat aktivitas outdoor yang terorganisir untuk rombongan besar.",
        BriefcaseBusiness,
    ],
    [
        "Anak Muda & Komunitas",
        "Cari tantangan baru, konten seru, dan cerita yang bisa dibawa pulang bersama circle kamu.",
        Waves,
    ],
] as const

export default function Segments() {
    return (
        <section className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="mb-12 max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                        Untuk siapa?
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-neutral-900 sm:text-4xl">
                        Satu sungai,<br />
                        <span className="text-neutral-400">banyak alasan.</span>
                    </h2>
                </div>

                {/* 3 Column Feature Layout Matching Reference */}
                <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
                    {segments.map(([title, text, Icon]) => (
                        <div key={title} className="flex items-start gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                                <Icon className="h-5 w-5 stroke-[2]" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-neutral-900 leading-snug">
                                    {title}
                                </h3>
                                <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}