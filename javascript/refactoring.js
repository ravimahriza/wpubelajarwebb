// REFACTORING = proses mengubah kode agar menjadi lebih baik tanpa mengubah fungsionalitasnya.(penulisan yang lebih efisien)
// TUJUANNYA:
// 1. Agar mudah dibaca
// 2. DRY (Don't Repeat Yourself)
// 3. Meningkatkan performa
// 4. Lebih mudah dikelola dan dikembangkan

// RUMUS AWAL
function jumlahVolumeDuaKubus(a, b) {
  var total;
  var volumeA;
  var volumeB;

  volumeA = a ** 3;
  volumeB = b ** 3;

  total = volumeA + volumeB;
  return total;
}
console.log(jumlahVolumeDuaKubus(8, 3));

// RUMUS REFACTORING
function jumlahVolumeDuaKubuss(c, d) {
  return c ** 3 + d ** 3;
}
console.log(jumlahVolumeDuaKubuss(8, 3));
