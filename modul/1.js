//variabel&constanta
// let nama = "sukirman"
// let umur = 20
// let status_menikah = false

// const url = "http://smktelkom-mlg.sch.id"
// const port = 8080

// port = 3000
//objek

// let nama_siswa1 = "suneo"
// let nis_siswa1 = "101"
// let jurusan_siswa1 = "RPL"

// let nama_siswa2 = "jeko"
// let nis_siswa2 = "102"
// let jurusan_siswa2 = "TKJ"

// let siswa1 = {
//     nis: "101",
//     nama: "suneo",
//     jurusan: "RPL"
// }


// let siswa2 = {
//     nis: "102",
//     nama: "jeko",
//     jurusan: "TKJ"
// }

// console.log("Nama Siswa-1 = " + siswa1.nama);

// siswa1.nama = "nobita"

// console.log("Nama Siswa-1 = " + siswa1.nama);

//array

// let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer Dan Jaringan"]
// let tingkatan_kelas = [10, 11, 12]

// let siswa = [{
//         nama: "Yaya",
//         jurusan: "RPL"
//     },
//     {
//         nama: "Ying",
//         jurusan: "TKJ"
//     },
//     {
//         nama: "gopal",
//         jurusan: "RPL"
//     }
// ]
// console.log("Jumlah elemen array jurusan = " + jurusan.length)
// console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length)
// console.log("Jumlah elemen array siswa = " + siswa.length)

// let kota = ["Malang", "Surabaya", "Tulungagung"]
// console.log("Isi Array Kota");
// console.log(kota);
// console.log("Jumlah Data = " + kota.length);
// console.log("----------------------------");
// kota.push("Banyuwangi")

// console.log("Isi Array Kota saat ini");
// console.log(kota);
// console.log("Jumlah Data saat ini = " + kota.length);

// let barang = [{
//         nama: "Rinsoo",
//         harga: 5000
//     },
//     {
//         nama: "Moonlight",
//         harga: 4000
//     }
// ]

// console.log("Isi Array barang");
// console.log(barang);
// console.log("Jumlah Data = " + barang.length);
// console.log("----------------------------");
// barang.push({
//     nama: "Mloto",
//     harga: 1000
// })

// console.log("Isi Array barang saat ini");
// console.log(barang);
// console.log("Jumlah Data saat ini = " + barang.length);

// console.log("Data array");
// nama = ["Ana", "Sulaiman", "Putri", "Gatot", "Adit", "Gico"]
// console.log(nama)
// console.log("Jumlah Data saat ini = " + nama.length)
// nama.splice(4, 2)
// console.log(nama)
// console.log("Jumlah Data saat ini = " + nama.length)

// let siswa = [{
//         nama_depan: "Jack",
//         nama_belakang: "Ma"
//     },
//     {
//         nama_depan: "Jonny",
//         nama_belakang: "English"
//     },
//     {
//         nama_depan: "John",
//         nama_belakang: "Cena"
//     }
// ]

// siswa.map(
//     (s, i) => {
//         console.log(s.nama_depan + " " + s.nama_belakang);
//     }
// )

// console.log("Operator Perbandingan")

// let a = 5,
//     b = 10,
//     c = "5"

// console.log("a == c -> " + (a == c));
// console.log("a === c -> " + (a === c));
// console.log("a != c -> " + (a != c));
// console.log("a !== c -> " + (a !== c));
// console.log("a > b -> " + (a > b));
// console.log("a < b -> " + (a < b));
// console.log("a >= b -> " + (a >= b));
// console.log("a <= b -> " + (a <= b));

// let tahun = 2020

// if (tahun % 4 == 0) {
//     console.log(tahun + " adalah Tahun kabisat")
// } else {
//     console.log(tahun + " bukan Tahun kabisat")

// }

// let nilai = 80

// if (nilai > 80) {
//     console.log("Excellent");
// } else if (nilai <= 80 && nilai > 70) {
//     console.log("Good");
// } else if (nilai <= 70 && nilai > 60) {
//     console.log("Not Bad");
// } else {
//     console.log("So Bad")
// }

// for (let i = 1; i <= 10; i++) {
//     console.log("Perulangan ke-" + i);
// }

// let siswa = {
//     nama: "Kusuma Seta",
//     gender: "Wanita",
//     jurusan: "RPL",
//     usia: "300",
//     alamat: "Ngantru"
// }

// for (k in siswa) {
//     console.log(k);
// }

// let presiden = ["Soekarno", "Soeharto", "Habbie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
// for (pres of presiden) {
//     console.log(pres)
// }

// let laptop = ["Lenovo", "HP", "Acer", "Azus"]
// let i = 0

// while (laptop[i]) {
//     console.log(laptop[i]);
//     i++
// }

// let gadget = ["Xiomi", "Samsung", "Motorola", "Sony Ericson"]
// let i = 0
// do {
//     console.log(gadget[i]);
//     i++
// } while (gadget[i])

// luaslingkaran = (r) => {
//     return 3, 14 * (r ** 2)
// }
// console.log("Luas lingkaran dengan r = 10 adalah " + luaslingkaran(10))

// class persegipanjang {
//     constructor(p, l) {
//         this.p = p
//         this.l = l
//     }
//     luas = () => {
//         return this.p * this.l
//     }
//     keliling = () => {
//         return 2 * (this.p + this.l)
//     }
// }

// let tanah = new persegipanjang(10, 50)

// console.log("Luas Tanah = " + tanah.luas());
// console.log("Keliling Tanah = " + tanah.keliling());


// class balok extends persegipanjang {
//     constructor(p, l, t) {
//         super(p, l);
//         this.tinggi = t
//     }
//     luas = () => {
//         return (2 * this.p * this.l) + (2 * this.p * this.tinggi) + (2 * this.l * this.tinggi)
//     }
//     volume = () => {
//         return this.p * this.l * this.tinggi
//     }
// }
// let lemari = new balok(10, 5, 2)

// console.log("Luas Lemari = " + lemari.luas());
// console.log("Volume Lemari = " + lemari.volume());

// let barang = [{
//         nama: "Beras",
//         harga: 10000,
//         jumlah: 5
//     },
//     {
//         nama: "Gula",
//         harga: 14000,
//         jumlah: 5
//     }, {
//         nama: "Telur",
//         harga: 20000,
//         jumlah: 2
//     }, {
//         nama: "Minyak Goreng",
//         harga: 9000,
//         jumlah: 10
//     }
// ]
// console.log(JSON.stringify(barang));