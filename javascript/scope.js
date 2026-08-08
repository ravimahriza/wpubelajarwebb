// SCOPE
// FUNCTION SCOPE

// Global Scope atau Window Scope
var a = 1;

// Kondisi Block Scope, dimana b tidak dikenali di console-log karena var-b hanya bisa digunakan di dalam function saja
// function tes() {
//   var b = 2;
// }
// tes();
// console.log(b);

// agar bisa dikenali maka harus seperti ini
function tess() {
  var c = 2;
  console.log(c);
}
tess();
// Di dalam function kita bisa memanggil variabel global tapi var-global tidak bisa memanggil var-lokal
// function tes() {
//   var d = 2;
//   console.log(a);
// }
