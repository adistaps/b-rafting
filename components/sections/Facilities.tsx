import { LucideIcon, BedDouble, Building2, Coffee, Landmark, MapPin, Shirt, ShowerHead, Store } from "lucide-react"

interface FacilityItem {
    title: string
    text: string
    icon: LucideIcon
    tag: string
    img?: string
}

const facilities: FacilityItem[] = [
    {
        title: "Parkir Luas",
        text: "Bus dan kendaraan pribadi mudah masuk tanpa kendala.",
        icon: Building2,
        tag: "Area Parkir",
    },
    {
        title: "Kamar Bilas",
        text: "Bersihkan diri secara nyaman setelah puas bermain air.",
        icon: ShowerHead,
        tag: "Fasilitas Air",
        img: "/images/rafting-1.webp",
    },
    {
        title: "Musholla",
        text: "Ruang ibadah yang bersih dan nyaman untuk pengunjung.",
        icon: Landmark,
        tag: "Ibadah",
    },
    {
        title: "Toko Baju Ganti",
        text: "Perlengkapan pakaian ganti & aksesoris tambahan tersedia.",
        icon: Shirt,
        tag: "Perlengkapan",
        img: "/images/rafting-2.webp",
    },
    {
        title: "Pusat Oleh-Oleh",
        text: "Bawa pulang jajanan khas dan cinderamata Magelang.",
        icon: Store,
        tag: "Oleh-Oleh",
        img: "/images/rafting-3.webp",
    },
    {
        title: "Hotel Dekat",
        text: "Beragam pilihan penginapan nyaman di sekitar lokasi.",
        icon: BedDouble,
        tag: "Akomodasi",
    },
    {
        title: "Kawasan Candi",
        text: "Lokasi sangat dekat dengan destinasi wisata Borobudur.",
        icon: Landmark,
        tag: "Destinasi",
        img: "/images/rafting-4.webp",
    },
    {
        title: "Kuliner Lokal",
        text: "Isi ulang tenagamu dengan aneka sajian kuliner lezat.",
        icon: Coffee,
        tag: "Resto & Cafe",
    },
]

export default function Facilities() {
    return (
        <section id="fasilitas" className="w-full bg-white overflow-hidden select-none">
            {/* Header Section: Background Putih Polos, Font Hitam */}
            <div className="w-full bg-white px-5 sm:px-8 lg:px-12 py-10 text-left border-b border-neutral-200">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
                    Semua Kebutuhan Tersedia
                </h2>
            </div>

            {/* Grid 2 Kolom di Mobile, 4 Kolom di Desktop (lg:grid-cols-4) */}
            <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-0 border-b border-neutral-200">
                {facilities.map((item) => {
                    const Icon = item.icon

                    // 1. CARD DENGAN BACKGROUND FOTO
                    if (item.img) {
                        return (
                            <div
                                key={item.title}
                                className="group relative h-[220px] sm:h-[280px] w-full overflow-hidden bg-black p-4 sm:p-8 flex flex-col justify-between border-b border-r border-neutral-800"
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

                                <div className="relative z-10 flex items-center justify-between">
                                    <span className="bg-[#ccff00] px-2 py-0.5 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-black">
                                        {item.tag}
                                    </span>
                                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </div>

                                <div className="relative z-10 space-y-1 sm:space-y-1.5 mt-auto">
                                    <h3 className="text-base sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-[11px] sm:text-xs font-medium text-gray-200 leading-relaxed">
                                        {item.text}
                                    </p>
                                    <div className="pt-1 sm:pt-2 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-gray-300">
                                        <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-300" />
                                        <span>Rafting Elo Magelang</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    // 2. CARD PUTIH POLOS (Font Hitam Pekat)
                    return (
                        <div
                            key={item.title}
                            className="group h-[220px] sm:h-[280px] w-full bg-white hover:bg-neutral-100 transition-colors p-4 sm:p-8 flex flex-col justify-between border-b border-r border-neutral-200"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
                                    {item.tag}
                                </span>
                                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                            </div>

                            <div className="space-y-1 sm:space-y-1.5 mt-auto">
                                <h3 className="text-base sm:text-2xl font-black uppercase tracking-tight text-black leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[11px] sm:text-xs font-medium text-black leading-relaxed">
                                    {item.text}
                                </p>
                            </div>

                            <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-neutral-200 flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black">
                                <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-black" />
                                <span>Fasilitas Terjamin</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}