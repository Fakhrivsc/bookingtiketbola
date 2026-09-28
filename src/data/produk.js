// Data dummy produk tiket pertandingan sepak bola
// Memenuhi syarat minimal 5 data dummy dengan properti: id, nama, harga, stok

export const dataProduk = [
  {
    id: 1,
    nama: "Tiket VIP: Timnas Indonesia vs Argentina",
    harga: 750000,
    stok: 15,
    kategori: "VIP",
    stadion: "Stadion Gelora Bung Karno, Jakarta",
    icon: "⚽"
  },
  {
    id: 2,
    nama: "Tiket Tribun Barat: Persija Jakarta vs Persib Bandung",
    harga: 150000,
    stok: 0, // Stok 0 untuk menguji status "Habis"
    kategori: "Tribun",
    stadion: "Jakarta International Stadium (JIS)",
    icon: "🏟️"
  },
  {
    id: 3,
    nama: "Tiket Tribun Timur: Arema FC vs Persebaya Surabaya",
    harga: 120000,
    stok: 25,
    kategori: "Tribun",
    stadion: "Stadion Gelora Bung Tomo, Surabaya",
    icon: "🔥"
  },
  {
    id: 4,
    nama: "Tiket VVIP Lounge: Bali United vs PSM Makassar",
    harga: 950000,
    stok: 0, // Stok 0 untuk menguji status "Habis"
    kategori: "VIP",
    stadion: "Stadion Kapten I Wayan Dipta, Bali",
    icon: "🏆"
  },
  {
    id: 5,
    nama: "Tiket Cat 1: Timnas Indonesia vs Jepang",
    harga: 350000,
    stok: 8,
    kategori: "Cat 1",
    stadion: "Stadion Gelora Bung Karno, Jakarta",
    icon: "🇮🇩"
  },
  {
    id: 6,
    nama: "Tiket Tribun Selatan: Persis Solo vs PSIS Semarang",
    harga: 90000,
    stok: 30,
    kategori: "Tribun",
    stadion: "Stadion Manahan, Solo",
    icon: "⚡"
  }
];

// Export default dan named export agar fleksibel saat diimpor
export const produk = dataProduk;
export default dataProduk;
