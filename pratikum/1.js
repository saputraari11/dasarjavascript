// let nominal = (p, l) => {
//     let luas = p * l / 100
//     let harga = luas * 1500000
//     return harga + (15 / 100 * harga)
// }
// console.log("Total Nominal tanah yang dibeli sebesar Rp." + nominal(20.5, 30))


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
// var total = 0
// for (let i = 0; i < barang.length; i++) {
//     total += barang[i].harga
// }
// console.log("Total Belanja = " + total)

// let bmi = (b, t) => {
//     let BMI = b / (t / 100) ** 2

//     if (BMI < 18.5) {
//         return console.log("Kekurangan Berat Badan");
//     } else if (BMI >= 18.5 && BMI < 24.9) {
//         return console.log("Normal");
//     } else if (BMI >= 25 && BMI < 29.9) {
//         return console.log("Kelibahan Berat Badan");
//     } else {
//         return console.log("Kegemukan(Obesitas)");
//     }
// }
// bmi(90, 170)

// for (let i = 0; i < 10; i++) {
//     console.log("Suku ke-" + (i + 1) + " = " + (4 + (3 * i)));
// }

class lingkaran {
    constructor(r) {
        this.r = r
        this.phi = 3.14
    }
    luas = () => {
        return this.phi * this.r ** 2
    }
    keliling1 = (d) => {
        return this.phi * d
    }
    keliling2 = () => {
        return this.phi * this.r * 2
    }
}
class tabung extends lingkaran {
    constructor(r, t) {
        super(r)
        this.t = t
    }
    volume = () => {
        return this.luas() * this.t
    }
    luas_selimut = () => {
        return 2 * this.keliling2() * this.t
    }
    luas_tabung = () => {
        return (2 * this.luas()) + (this.luas_selimut())
    }

}
class kerucut extends lingkaran {
    constructor(r, t, s) {
        super(r)
        this.t = t
        this.s = s
    }
    volume = () => {
        return this.luas() * this.t / 3
    }
    luas_selimut = () => {
        return this.r * this.phi * this.s
    }
    luas_kerucut = () => {
        return this.luas() + (this.luas_selimut())
    }

}

class bola extends lingkaran {
    constructor(r) {
        super(r)
    }
    volume = () => {
        return 4 * (this.luas() * this.r) / 3
    }
    luas_bola = () => {
        return 4 * this.luas()
    }
    volume_setengah = () => {
        return this.volume() / 2
    }
    luas_setengah = () => {
        return this.luas_bola() / 2
    }
}

let gelas = new tabung(7, 10)
console.log("Volume Tabung = " + gelas.volume());
console.log("Luas_Selimut Tabung = " + gelas.luas_selimut());
console.log("Luas Tabung = " + gelas.luas_tabung());

console.log("-----------------------------------------");


let bola_sepak = new bola(35)
console.log("Volume Bola = " + bola_sepak.volume());
console.log("Volume Setengah Bola = " + bola_sepak.volume_setengah());
console.log("Luas Bola = " + bola_sepak.luas_bola());
console.log("Luas Setengah Bola = " + bola_sepak.luas_setengah());

console.log("------------------------------------------");

let palang_polisi = new kerucut(49, 10, 20)
console.log("Volume Palang Polisi = " + palang_polisi.volume());
console.log("Luas_Selimut Palang Polisi = " + palang_polisi.luas_selimut());
console.log("Luas Palang Polisi = " + palang_polisi.luas_kerucut());