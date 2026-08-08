// var lagi = true;
// while (lagi) {
//   alert("Tebak angka dari 1 - 10!\nKamu punya 3 kesempatan.");
//   var comp = Math.round(Math.random() * 10);
//   var hasil = "";
//   for (var i = 3; i > 0; i--) {
//     var p = prompt("Masukkan Angka tebakan!");
//     j = i - 1;
//     if (p == "") {
//       alert("Yang anda masukkan bukan angka");
//       i = 0;
//     } else if (p == null) {
//       i = 0;
//     } else {
//       if (p == comp) {
//         alert("Anda BENAR!\nAngka yang dicari adalah " + comp);
//         i = 0;
//       } else if (p < comp) {
//         if (j == 0) {
//           alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
//         } else {
//           alert("Terlalu RENDAH!\nAyo masih ada " + j + " kesempatan");
//         }
//       } else if (p > comp) {
//         if (j == 0) {
//           alert("Anda GAGAL!\nAngka yang dicari adalah " + comp);
//         } else {
//           alert("Terlalu TINGGI!\nAyo masih ada " + j + " kesempatan");
//         }
//       } else {
//         alert("Yang anda masukkan bukan angka");
//         i = 0;
//       }
//     }
//   }
//   lagi = confirm("Main lagi?");
// }
// alert("Terima kasih.");

var lagi = true;

while (lagi) {
  // 1. Komputer membangkitkan angka acak antara 1 - 23
  var angkaKomputer = Math.floor(Math.random() * 23) + 1;

  var tebakan = "";
  var kesempatan = 5; // Batas kesempatan menebak
  var menang = false;

  alert(
    "Selamat datang di Game Tebak Angka!\nSaya telah memilih angka antara 1 sampai 23.\nKamu punya " +
      kesempatan +
      " kesempatan!",
  );

  // 2. Loop perulangan tebakan player
  while (kesempatan > 0 && !menang) {
    tebakan = prompt(
      "Masukkan angka tebakanmu (1 - 23):\nKesempatan tersisa: " + kesempatan,
    );

    // Jika player menekan tombol 'Cancel' pada prompt
    if (tebakan === null) {
      alert("Permainan dibatalkan.");
      break;
    }

    // Mengubah string input menjadi angka bulat
    tebakan = parseInt(tebakan);

    // Validasi input jika player memasukkan selain angka atau angka di luar rentang
    if (isNaN(tebakan) || tebakan < 1 || tebakan > 23) {
      alert("Harap masukkan angka yang valid antara 1 sampai 23!");
      continue; // Mengulang loop tanpa mengurangi kesempatan
    }

    // 3. Menentukan aturan game (Rules)
    if (tebakan === angkaKomputer) {
      menang = true;
      alert(
        "SELAMAT! Tebakanmu BENAR!\nAngka yang dicari adalah " + angkaKomputer,
      );
    } else if (tebakan < angkaKomputer) {
      kesempatan--;
      if (kesempatan > 0) {
        alert("Tebakanmu terlalu KECIL! Coba angka yang lebih besar.");
      }
    } else {
      kesempatan--;
      if (kesempatan > 0) {
        alert("Tebakanmu terlalu BESAR! Coba angka yang lebih kecil.");
      }
    }
  }

  // Jika kesempatan habis dan belum berhasil menebak
  if (!menang && tebakan !== null) {
    alert(
      "KASIHANKU! Kesempatanmu sudah habis.\nAngka yang benar adalah: " +
        angkaKomputer,
    );
  }

  // Konfirmasi untuk main lagi
  lagi = confirm("Ingin bermain lagi?");
}

alert("Terima kasih sudah bermain!");
