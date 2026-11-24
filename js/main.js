// 1. Daftar keahlian dari JSON

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

async function muatKeahlian() {
  try {
    const response = await fetch("data/keahlian.json");

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    const skills = await response.json();

    skills.forEach((skill) => {
      const item = document.createElement("li");
      item.textContent = `${skill.nama} (${skill.level})`;
      daftarSkill.appendChild(item);
    });

    jumlahSkill.textContent =
      `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;

  } catch (error) {
    jumlahSkill.textContent = "Daftar keahlian gagal dimuat.";
    console.error(error);
  }
}

if (daftarSkill) {
  muatKeahlian();
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

// 5. Repositori GitHub terbaru (halaman Proyek)
const username = "aullxpplg1";
const alamatRepo = `https://api.github.com/users/${username}/repos`;
const pilihan = "?sort=updated&per_page=6";
const daftarRepo = document.querySelector("#daftar-repo");
const statusRepo = document.querySelector("#status-repo");
async function ambilRepo() {
const response = await fetch(alamatRepo + pilihan);
const repos = await response.json();
console.log(repos);
}
if (daftarRepo) {
ambilRepo();
}

async function ambilRepo() {
const response = await fetch(alamatRepo + pilihan);
const repos = await response.json();
repos.forEach((repo) => {
const item = document.createElement("li");
const tautan = document.createElement("a");
tautan.href = repo.html_url;
tautan.target = "_blank";
tautan.textContent = repo.name;
item.appendChild(tautan);
daftarRepo.appendChild(item);
});
statusRepo.textContent = `${repos.length} repositori yang terakhirdiperbarui:`;
}

async function ambilRepo() {
    statusRepo.textContent = "Memuat...";
    const response = await fetch(alamatRepo + pilihan);
    const repos = await response.json();
}

async function ambilRepo() {
  statusRepo.textContent = "Memuat...";
  daftarRepo.innerHTML = "";
  try {
    const response = await fetch(alamatRepo + pilihan);
    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }
    const repos = await response.json();
    repos.forEach((repo) => {
      const item = document.createElement("li");
      const tautan = document.createElement("a");
      tautan.href = repo.html_url;
      tautan.target = "_blank";
      tautan.textContent = repo.name;
      item.appendChild(tautan);
      daftarRepo.appendChild(item);
    });
    statusRepo.textContent = `${repos.length} repositori yang terakhir diperbarui:`;
  } catch (error) {
    statusRepo.textContent = "Maaf, daftar repositori gagal dimuat. Periksa username atau coba lagi nanti.";
    console.error(error);
  }
}


// =============================
// KEAHLIAN DINAMIS
// =============================

// Mengambil elemen HTML
const pilihanSkill = document.getElementById("skill-baru");
const tombolSkill = document.getElementById("tombol-skill");
const DaftarSkill = document.getElementById("daftar-skill");

// Data awal keahlian
let dataSkill = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git dan GitHub",
    "Canva"
];

// Fungsi menampilkan keahlian
function tampilkanSkill() {
    daftarSkill.innerHTML = "";

    dataSkill.forEach((skill, index) => {

        // Membuat elemen list
        const item = document.createElement("li");
        item.classList.add("skill-item");

        // Membuat informasi keahlian
        const informasi = document.createElement("div");
        informasi.classList.add("skill-info");

        const nama = document.createElement("strong");
        nama.textContent = skill;

        informasi.appendChild(nama);

        // Membuat tombol hapus
        const tombolHapus = document.createElement("button");
        tombolHapus.textContent = "Hapus";
        tombolHapus.classList.add("hapus-skill");
        tombolHapus.type = "button";

        // Event untuk menghapus keahlian
        tombolHapus.addEventListener("click", function () {
            hapusSkill(index);
        });

        // Menggabungkan elemen
        item.appendChild(informasi);
        item.appendChild(tombolHapus);

        daftarSkill.appendChild(item);
    });
}

// Fungsi menambahkan keahlian
function tambahSkill() {

    const skillBaru = pilihanSkill.value;

    // Memeriksa apakah pilihan kosong
    if (skillBaru === "") {
        alert("Silakan pilih keahlian terlebih dahulu!");
        return;
    }

    // Memeriksa keahlian yang sudah ada
    if (dataSkill.includes(skillBaru)) {
        alert("Keahlian tersebut sudah ada!");
        return;
    }

    // Menambahkan ke dalam array
    dataSkill.push(skillBaru);

    // Memperbarui tampilan
    tampilkanSkill();

    // Mengembalikan pilihan ke awal
    pilihanSkill.value = "";

    alert("Keahlian berhasil ditambahkan!");
}

// Fungsi menghapus keahlian
function hapusSkill(index) {

    const konfirmasi = confirm(
        "Apakah kamu yakin ingin menghapus keahlian ini?"
    );

    if (konfirmasi) {

        // Menghapus data berdasarkan index
        dataSkill.splice(index, 1);

        // Memperbarui daftar keahlian
        tampilkanSkill();
    }
}

// Event tombol tambah keahlian
tombolSkill.addEventListener("click", tambahSkill);

// Menampilkan keahlian saat halaman dibuka
tampilkanSkill();
