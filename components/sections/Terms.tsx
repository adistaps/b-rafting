const terms = [
    ["Usia peserta", "Anak-anak boleh ikut dengan pendampingan orang dewasa dan mengikuti arahan guide."],
    ["Kondisi kesehatan", "Pastikan peserta dalam kondisi sehat dan informasikan kondisi khusus sebelum trip."],
    ["Pakaian & alas kaki", "Gunakan pakaian nyaman, pakaian ganti, dan alas kaki yang tidak mudah lepas."],
    ["Pembayaran & DP", "Slot dikunci setelah DP diterima. Pelunasan mengikuti ketentuan admin."],
    ["Reschedule & cuaca", "Perubahan jadwal karena cuaca dibicarakan bersama demi keselamatan."],
    ["Barang bawaan", "Simpan barang berharga. Gunakan dry bag dan ikuti instruksi penyimpanan."]
]

export default function Terms() {
    return (
        <section id="syarat" className="w-full bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                {/* Header Section */}
                <div className="mb-12">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
                        Sebelum berangkat
                    </p>
                    <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
                        Biar trip tetap<br />
                        <span className="text-neutral-400">aman & nyaman.</span>
                    </h2>
                </div>

                {/* Grid Box Tanpa Rounded (Sharp Edge) */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {terms.map(([title, text], i) => (
                        <div
                            key={title}
                            className="border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col justify-between"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                                0{i + 1}
                            </span>
                            <div className="mt-8 space-y-2">
                                <h3 className="text-lg font-black uppercase tracking-tight text-neutral-900">
                                    {title}
                                </h3>
                                <p className="text-xs font-medium text-neutral-500 leading-relaxed">
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