
/* =================================
   1. ARRAY KEAHLIAN - BERANDA
================================= */

const daftarSkill = [
  "HTML",
  "CSS",
  "JavaScript",
  "Desain Web",
  "UI/UX Design"
];

const tempatSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (tempatSkill) {
  daftarSkill.forEach(function(skill) {
    const item = document.createElement("li");
    item.textContent = skill;
    tempatSkill.appendChild(item);
  });

  if (jumlahSkill) {
    jumlahSkill.textContent =
      "Jumlah keahlian: " + daftarSkill.length;
  }
}


/* =================================
   2. MODE GELAP - SEMUA HALAMAN
================================= */

const tombolTema = document.querySelector("#tombol-tema");

// Memuat tema yang tersimpan
const temaTersimpan = localStorage.getItem("tema");

if (temaTersimpan === "gelap") {
  document.body.classList.add("gelap");
}

function perbaruiTombolTema() {
  if (tombolTema) {
    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  }
}

perbaruiTombolTema();

if (tombolTema) {
  tombolTema.addEventListener("click", function() {
    document.body.classList.toggle("gelap");

    if (document.body.classList.contains("gelap")) {
      localStorage.setItem("tema", "gelap");
    } else {
      localStorage.setItem("tema", "terang");
    }

    perbaruiTombolTema();
  });
}


/* =================================
   3. PENGHITUNG KARAKTER - KONTAK
================================= */

const pesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (pesan && hitungKarakter) {
  pesan.addEventListener("input", function() {
    const jumlah = pesan.value.length;

    hitungKarakter.textContent =
      jumlah + "/300 karakter";
  });
}


/* =================================
   4. ARRAY OBJEK PROYEK - PROYEK
================================= */

const daftarProyek = [
  {
    judul: "Halaman Profil Pertama",
    kategori: "HTML",
    deskripsi: "Membuat halaman profil menggunakan HTML dasar.",
    gambar: "img/proyek-profil.png"
  },
  {
    judul: "Form Kontak",
    kategori: "HTML",
    deskripsi: "Membuat form kontak menggunakan HTML.",
    gambar: "img/proyek-kontak.png"
  },
  {
    judul: "Tabel Jadwal Belajar",
    kategori: "HTML",
    deskripsi: "Membuat tabel jadwal belajar menggunakan HTML.",
    gambar: "img/proyek-jadwal.png"
  },
  {
    judul: "Desain Website",
    kategori: "CSS",
    deskripsi: "Mengatur tampilan website menggunakan CSS.",
    gambar: "img/foto-desain.png"
  },
  {
    judul: "Kalkulator Nilai",
    kategori: "JavaScript",
    deskripsi: "Menghitung rata-rata nilai menggunakan JavaScript.",
    gambar: "img/foto-kalkulator.png"
  },
  {
    judul: "Interaksi Website",
    kategori: "JavaScript",
    deskripsi: "Membuat interaksi website menggunakan JavaScript.",
    gambar: "img/foto-interaksi.png"
  }
];


/* =================================
   5. MENAMPILKAN PROYEK - MAP
================================= */

const tempatProyek = document.querySelector("#daftar-proyek");

if (tempatProyek) {

  function tampilkanProyek(kategori = "semua") {

    const hasilFilter = daftarProyek.filter(function(proyek) {
      return kategori === "semua" ||
        proyek.kategori === kategori;
    });

    tempatProyek.innerHTML = hasilFilter.map(function(proyek) {
      return `
        <article class="kartu">
          <h3>${proyek.judul}</h3>
          <img src="${proyek.gambar}"
               alt="${proyek.judul}"
               width="280">
          <p>${proyek.deskripsi}</p>
          <p>Kategori: ${proyek.kategori}</p>
        </article>
      `;
    }).join("");
  }

  // Menampilkan semua proyek saat halaman dibuka
  tampilkanProyek();


  /* =================================
     6. FILTER PROYEK - EVENT
  ================================= */

  const tombolFilter =
    document.querySelectorAll(".tombol-filter");

  tombolFilter.forEach(function(tombol) {

    tombol.addEventListener("click", function() {

      const kategori = tombol.dataset.filter;

      tampilkanProyek(kategori);

      // Menghapus class aktif dari semua tombol
      tombolFilter.forEach(function(item) {
        item.classList.remove("aktif");
      });

      // Menambahkan class aktif pada tombol terpilih
      tombol.classList.add("aktif");

    });

  });

}
