// FUNCTION ADALAH MESIN
function jumlah(a, b) {
  var total;
  total = a ** 3 + b ** 3 + " Function 1";

  return total;
}

// MESIN KITA PANGGIL
console.log(jumlah(3, 2));

// FUNCTION 2
function jumlahVolumeDuaKubus(c, d) {
  var total2;
  var volumeA;
  var volumeB;

  volumeA = c ** 3;
  volumeB = d ** 3;

  total2 = volumeA + volumeB;
  return total2;
}

console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(12, 23));
console.log(jumlahVolumeDuaKubus(11, 43));

// PARAMETER & ARGUMENT
function tambah(e, f) {
  return e + f;
}
var e = parseInt(prompt("masukkan nilai 1"));
var f = parseInt(prompt("masukkan nilai 2"));
var hasil = tambah(e * 2, f * 3) + " hasil nilai";
console.log(hasil);
// (e, f) pada function merupakan "parameter". (2,3) pada var hasil merupakan "argument"

// TAMBAH DALAM KALI
function tambahh(g, h) {
  return g + h;
}
function kali(g, h) {
  return g * h;
}
console.log(kali(tambahh(2, 3), tambahh(3, 4)));
