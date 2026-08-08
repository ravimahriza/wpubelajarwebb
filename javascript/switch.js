// PARSEINT - Untuk mempertahankan string menjadi integer/angka
// var angka = parseInt(prompt("Masukkan Angka :"));
// if (angka === 1) {
//   alert("Anda memasukkan angka 1");
// } else if (angka === 2) {
//   alert("Anda memasukkan angka 2");
// } else if (angka === 3) {
//   alert("Anda memasukkan angka 3");
// } else {
//   alert("Anda memasukkan angka lebih dari 3");
// }

var item = prompt(
  "Masukkan nama makanan / minuman : \n (cth: nasi, susu, hamburger, soft drink)",
);
// DENGAN BREAK
// switch (item) {
//   case "nasi":
//     alert("makanan / minuman sehat");
//     break;
//   case "daging":
//     alert("makanan / minuman SEHAT");
//     break;
//   case "hamburger":
//     alert("makanan / minuman TIDAK SEHAT");
//     break;
//   default:
//     alert("yang anda masukkan bukan makanan");
//     break;
// }

//  TANPA BREAK
switch (item) {
  case "nasi":
  case "daging":
  case "ayam":
    alert("makanan / minuman SEHAT");
    break;
  case "hamburger":
  case "soda":
  case "pizza":
    alert("makanan / minuman TIDAK SEHAT");
    break;
  default:
    alert("yang anda masukkan bukan makanan");
    break;
}
