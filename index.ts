let nama: string = "Agus";
let umur: number = 17;
let aktif: boolean = true;

console.log(nama, umur, aktif);

function login(username: string, password: string): boolean {
    return username === "admin" && password === "admin";
}

console.log(login("admin", "admin"));

interface User {
    id: number;
    nama: string;
    role: string;
}
const user: User = {
    id: 1,
    nama: "Sinta",
    role: "admin"
};

interface Buku {
    id: number;
    judul: string;
    penulis?: string;
}
const buku1: Buku = {
    id: 1,
    judul: "Belajar Backend"
};

console.log(buku1);




// Tugas 1 //

interface Siswa {
    id: number;
    nama: string;
    kelas: string;
}
const siswa1: Siswa = {
    id: 22,
    nama: "Apir",
    kelas: "XIPG1"
};

console.log(siswa1)


// Tugas 2 //

function hitungUmur(tahunLahir: number) : number
{
    const tahunSekarang = new Number(2026)
    return 2026 - 2009
}

console.log(hitungUmur(2009))