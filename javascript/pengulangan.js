// var a = "";

// for (var i = 10; i > 0; i--) {
//   for (var u = 0; u < i; u++) {
//     a = a + "*";
//   }
//   a = a + "\n";
// }
// console.log(a);

// var string = "";

// for (var i = 0; i < 10; i++) {
//   // Tambahkan spasi di awal setiap baris
//   for (var j = 0; j < i; j++) {
//     string += " ";
//   }
//   // Tambahkan bintang
//   for (var k = 0; k < 10 - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// console.log(string);

var s = "";

for (var a = 6; a >= 0; a--) {
  for (var b = 0; b < a; b++) {
    s += " ";
  }
  for (var c = 0; c < 2 * (7 - a) - 1; c++) {
    s += "0";
  }
  s += "\n";
}

for (var d = 1; d < 7; d++) {
  for (var e = 0; e < d; e++) {
    s += " ";
  }
  for (var f = 0; f < 2 * (7 - d) - 1; f++) {
    s += "0";
  }
  s += "\n";
}
console.log(s);
// ---------------------------------
var x = "";

for (g = 7; g > 0; g--) {
  for (var h = 0; h < 3 + g; h++) {
    x += " ";
  }
  for (var i = 0; i < 8 - g; i++) {
    x += "4";
  }
  x += "\n";
}

for (j = 3; j > 0; j--) {
  for (var k = 0; k < j; k++) {
    x += " ";
  }
  for (var l = 0; l <= 30 - j; l++) {
    x += "4";
  }
  x += "\n";
}

for (var m = 1; m < 3; m++) {
  for (var n = -1; n < m; n++) {
    x += " ";
  }
  for (var o = 0; o <= 29 - m; o++) {
    x += "4";
  }
  x += "\n";
}

for (var p = 0; p < 7; p++) {
  for (var q = 0; q <= 3 + p; q++) {
    x += " ";
  }
  for (var r = 0; r <= 6 - p; r++) {
    x += "4";
  }
  x += "\n";
}
console.log(x);
