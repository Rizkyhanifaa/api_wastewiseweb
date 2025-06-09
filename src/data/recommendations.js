const wasteHandlingRecommendations = {
  // Organik
  "biological": `Sampah jenis ini sangat cocok untuk dijadikan kompos alami yang bermanfaat bagi tanaman. Kamu bisa mengolahnya menggunakan metode komposter sederhana di rumah atau mengumpulkannya untuk dibawa ke bank sampah atau fasilitas pengelolaan organik.`,

  // Anorganik
  "cardboard": "Kardus dapat didaur ulang menjadi kertas baru. Pastikan kardus dalam keadaan kering dan bersih sebelum diserahkan ke bank sampah atau pemulung.",
  "paper": "Kertas sangat mudah didaur ulang. Kumpulkan secara terpisah dari sampah basah dan serahkan ke fasilitas daur ulang.",
  "plastic": "Pisahkan plastik berdasarkan jenisnya jika memungkinkan (botol, kemasan, dll). Bersihkan dari sisa makanan/minuman sebelum didaur ulang untuk mengurangi kontaminasi.",
  "metal": "Kaleng minuman atau sisa logam lainnya memiliki nilai tinggi untuk didaur ulang. Kumpulkan dan jual ke bank sampah atau pengepul barang bekas.",
  "brown-glass": "Botol kaca berwarna dapat didaur ulang menjadi botol baru atau material bangunan. Kumpulkan secara terpisah dari kaca bening.",
  "green-glass": "Sama seperti kaca coklat, kaca hijau juga dapat didaur ulang. Pisahkan dari jenis kaca lainnya untuk proses daur ulang yang lebih efisien.",
  "white-glass": "Kaca bening dapat didaur ulang berkali-kali tanpa kehilangan kualitas. Ini adalah salah satu material daur ulang yang paling efisien.",
  "battery": "Sangat Berbahaya! Baterai bekas mengandung zat kimia beracun. Kumpulkan dan buang di tempat khusus penampungan limbah B3 (Bahan Berbahaya dan Beracun) yang biasanya tersedia di supermarket atau kantor dinas lingkungan hidup.",
  "clothes": "Pakaian bekas yang masih layak pakai dapat disumbangkan. Jika sudah rusak, bisa dijadikan kain lap atau diserahkan ke program daur ulang tekstil.",
  "shoes": "Sepatu yang masih layak bisa didonasikan. Jika rusak, periksa apakah ada program daur ulang sepatu di daerahmu, karena beberapa bagiannya bisa didaur ulang.",
  "trash": "Ini adalah kategori sampah residu yang sulit atau tidak bisa didaur ulang. Pastikan sampah jenis ini dibuang ke tempat sampah agar berakhir di TPA (Tempat Pemrosesan Akhir) dengan benar.",
  "default": "Rekomendasi tidak tersedia. Pastikan untuk membuang sampah pada tempatnya."
};

const getRecommendation = (specificClass) => {
  return wasteHandlingRecommendations[specificClass] || wasteHandlingRecommendations.default;
};

module.exports = { getRecommendation };