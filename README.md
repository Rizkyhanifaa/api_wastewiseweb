# 🗑️ WasteWise Web API – Klasifikasi Sampah Organik & Anorganik 

API ini adalah bagian backend dari proyek capstone **WasteWiseWeb**, yang berfungsi untuk memberikan data rekomendasi pengolahan sampah.

🌐 Deploy:  
[https://hapi-webapp123-gea7b4bbhbengbdv.indonesiacentral-01.azurewebsites.net]

## ✨ Fitur

- Endpoint `GET/recommendations/${specificWasteType}` untuk mendapatkan data rekomendasi pengolahan sampah.
- Parameter `specificWasteType` digunakan untuk mengenali jenis sampah secara spesifik, seperti plastic, biological, battery, dll.) sebagai bagian dari URL
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
│ ├── data/
| |   └── recommendations.js # Data dan fungsi untuk rekomendasi pengolahan sampah
│ ├── handler.js # Handler utama untuk endpoint rekomendasi pengolahan sampah
│ ├── routes.js # Routing konfigurasi untuk server HapiJS
│ └── server.js # Inisialisasi dan konfigurasi server HapiJS
│
├── package.json # Konfigurasi proyek dan daftar dependensi
└── package-lock.json # File pengunci versi dependensi

