# JSONPlaceholder Users — Dark Theme (Vue 3 + Vite)

Aplikasi frontend sederhana untuk menampilkan daftar pengguna dari API **https://jsonplaceholder.typicode.com/users**.  
Fitur:
- Daftar pengguna (vertikal scroll cards)
- Halaman detail user (klik kartu)
- Cari sesuai nama (menggunakan partial, case-insensitive)
- Urutkan (nama/kota) & filter menurut kota
- Highlight kata yang dicari
- Responsive dark theme UI


## Instalasi & Setup

### Prasyarat
- **Node.js** versi 18+ (atau 20)
- **npm** sudah terinstall

### Langkah instalasi
1. Clone repo:
   ```bash
   git clone https://github.com/MirzaSNR/jsonplaceholder-users-dark.git
   cd jsonplaceholder-users-dark
   npm install

## Struktur Kode

repo/
├─ index.html              # halaman awalan HTML
├─ package.json            # konfigurasi project + scripts
├─ vite.config.js          # konfigurasi vite
├─ netlify.toml / vercel.json  # config deploy SPA
└─ src/
   ├─ main.js              # bootstrap Vue app
   ├─ App.vue              # root component, shell + layout
   ├─ router/
   │  └─ index.js          # definisi route (Home, UserDetail)
   ├─ services/
   │  └─ api.js            # helper fetch API users
   ├─ components/
   │  ├─ SearchBar.vue     # input pencarian by nama
   │  └─ UserCard.vue      # kartu user
   └─ views/
      ├─ UsersView.vue     # halaman Home
      └─ UserDetailView.vue# halaman detail user

## Menjalankan Applikasi
### Mode Development
- **npm run dev**
- **npm run build**
- **npm run preview**

