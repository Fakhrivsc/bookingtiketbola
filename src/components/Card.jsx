
function Card(props) {
  // Mendukung props baik berupa objek produk terbungkus (produk={p}) maupun spread ({...p})
  const item = props.produk || props;
  const { nama, harga, stok, kategori, stadion, icon } = item;

  // Format harga ke format Rupiah (IDR)
  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className={`card-product ${stok === 0 ? 'is-out-of-stock' : ''}`}>
      <div className="card-top">
        <span className="card-icon">{icon || '🎟️'}</span>
        {/* Tampilkan label 'Habis' jika stok 0 menggunakan operator ternary */}
        <span className={`card-badge ${stok === 0 ? 'badge-habis' : 'badge-tersedia'}`}>
          {stok === 0 ? 'Habis' : `Tersedia (${stok})`}
        </span>
      </div>

      <div className="card-body">
        {kategori && <span className="card-kategori">{kategori}</span>}
        <h3 className="card-title">{nama}</h3>
        {stadion && <p className="card-stadion">📍 {stadion}</p>}
        
        <div className="card-info-row">
          <div className="card-price">
            <span className="price-label">Harga Tiket</span>
            <span className="price-value">{formatRupiah(harga)}</span>
          </div>
          <div className="card-stock-info">
            <span className="stock-label">Stok: </span>
            {/* Ternary condition untuk menampilkan status stok */}
            <span className={`stock-status ${stok === 0 ? 'text-habis' : 'text-tersedia'}`}>
              {stok === 0 ? 'Habis' : `${stok} tiket`}
            </span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <button
          type="button"
          className={`btn-order ${stok === 0 ? 'btn-disabled' : 'btn-buy'}`}
          disabled={stok === 0}
        >
          {stok === 0 ? 'Habis' : 'Pesan Tiket'}
        </button>
      </div>
    </div>
  );
}

export default Card;
