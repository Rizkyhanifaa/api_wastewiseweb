# 🗑️ WasteWise Web API – Klasifikasi Sampah Organik & Anorganik 

API ini adalah bagian backend dari proyek capstone **WasteWiseWeb**, yang berfungsi untuk mengklasifikasikan gambar sampah menjadi **organik** dan **anorganik**.

Deploy:  
🌐 [https://hapi-webapp123-gea7b4bbhbengbdv.indonesiacentral-01.azurewebsites.net/classify](https://hapi-webapp123-gea7b4bbhbengbdv.indonesiacentral-01.azurewebsites.net/classify)

## ✨ Fitur

- Endpoint `POST /classify` untuk mengunggah gambar sampah.
- API akan mengembalikan label klasifikasi (`Organik` dan `Anorganik`) dan confidence (tingkat keyakinan).
- Dirancang untuk diintegrasikan dengan frontend WasteWiseWeb.

## 🛠️ Teknologi

- Node.js
- HapiJS
- Azure Web App (untuk deployment)

## 📂 Struktur Proyek
```text
api_wastewiseweb/
│
├── src/
│ ├── classify.js # Penyimpanan array untuk data klasifikasi
│ ├── handler.js # Handler utama untuk endpoint klasifikasi
│ ├── routes.js # Routing konfigurasi untuk server HapiJS
│ └── server.js # Inisialisasi dan konfigurasi server HapiJS
│
├── package.json # Konfigurasi proyek dan daftar dependensi
└── package-lock.json # File pengunci versi dependensi

