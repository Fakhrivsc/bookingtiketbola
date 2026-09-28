import { useState } from 'react';
import produkData from './data/produk';
import Card from './components/Card';
import './App.css';

function App() {
  const [filter, setFilter] = useState('semua');

  // Filter data sesuai tombol filter yang dipilih
  const filteredProduk = produkData.filter((p) => {
    if (filter === 'tersedia') return p.stok > 0;
    if (filter === 'habis') return p.stok === 0;
    return true; // 'semua'
  });

  const countTotal = produkData.length;
  const countTersedia = produkData.filter((p) => p.stok > 0).length;
  const countHabis = produkData.filter((p) => p.stok === 0).length;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-badge">Pemrograman Web III • Pertemuan 3</div>
        <h1 className="app-title">⚽ Katalog Tiket Pertandingan Bola</h1>
        <p className="app-subtitle">
          Latihan: Bangun Katalog Produk Sederhana menggunakan React + Vite
        </p>

        {/* Tombol filter untuk mengubah isi list sesuai Target Hasil */}
        <div className="filter-group">
          <button
            type="button"
            className={`filter-btn ${filter === 'semua' ? 'active' : ''}`}
            onClick={() => setFilter('semua')}
          >
            Semua Produk ({countTotal})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'tersedia' ? 'active' : ''}`}
            onClick={() => setFilter('tersedia')}
          >
            Stok Tersedia ({countTersedia})
          </button>
          <button
            type="button"
            className={`filter-btn ${filter === 'habis' ? 'active' : ''}`}
            onClick={() => setFilter('habis')}
          >
            Stok Habis ({countHabis})
          </button>
        </div>
      </header>

      <main className="catalog-section">
        <div className="catalog-info-bar">
          <h2 className="catalog-heading">
            Daftar Tiket ({filteredProduk.length})
          </h2>
          <span className="filter-status-text">
            Filter aktif: <strong>{filter === 'semua' ? 'Semua' : filter === 'tersedia' ? 'Tersedia' : 'Habis'}</strong>
          </span>
        </div>

        {/* Render semua data dengan map() dan key={p.id} sesuai instruksi nomor 3 */}
        <div className="products-grid">
          {filteredProduk.map((p) => (
            <Card key={p.id} produk={p} />
          ))}
        </div>

        {filteredProduk.length === 0 && (
          <div className="empty-state">
            <p>Tidak ada tiket dalam kategori ini.</p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2026 Booking Tiket Bola — Praktik Pemrograman Web III (Pertemuan 3)</p>
      </footer>
    </div>
  );
}

export default App;
