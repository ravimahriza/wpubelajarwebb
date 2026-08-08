// var tanya = true;
// while (tanya) {
//   // menangkap pilihan player
//   var p = prompt("pilih: gajah, semut, orang");

//   // menangkap pilihan komputer
//   // membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }

// PERINTAH AWAL
var lagi = true;

while (lagi) {
  var p = prompt("Silahkan ketik BATU, GUNTING, atau KERTAS :");

  if (p) {
    p = p.toUpperCase();
  }

  var comp = Math.random();
  if (comp <= 0.34) {
    comp = "BATU";
  } else if (comp > 0.34 && comp <= 0.67) {
    comp = "GUNTING";
  } else {
    comp = "KERTAS";
  }

  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "BATU") {
    hasil = comp == "GUNTING" ? "MENANG" : "KALAH";
  } else if (p == "GUNTING") {
    hasil = comp == "KERTAS" ? "MENANG" : "KALAH";
  } else if (p == "KERTAS") {
    hasil = comp = "BATU" ? "MENANG" : "KALAH";
  } else {
    hasil = "memasukkan input yang salah !";
  }

  alert(
    "Anda memilih " +
      p +
      " dan komputer memilih " +
      comp +
      "." +
      "\nMaka hasilnya anda " +
      hasil,
  );

  lagi = confirm("Coba lagi?");
}
alert("Terima Kasih");
