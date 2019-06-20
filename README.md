# Tyur NIM Finder

Tyur Nim Finder adalah Aplikasi web yang berbasiskan react javascript yang dibuat oleh **Bram Musuko Panjaitan / 13517089** untuk memenuhi tugas seleksi LabPro 2

## Cara Menjalankan Aplikasi

+ Pergi ke website [Tyur Nim Finder](https://bmusuko.github.io/tyur)
+ Jika anda belum mempunyai akun, maka lakukan register terlebih dahulu
+ Login
+ Lakukan pencarian dengan memasukkan nama atau nim

## Cara Menggunakan Aplikasi

```
contoh query :
"budi" atau "16817"
```

Login page

![Login Page](../master/img/login.png)

Sign Up Page

![Sign Up Page](../master/img/signup.png)

Pencarian dengan nama

![Pencarian dengan nama](../master/img/pencariannama.png)

Pencarian dengan nim
![Pencarian dengan nim](../master/img/pencariannim.png)

## Desain Aplikasi

Desain aplikasi yang digunakan adalah, index.js adalah bagian yang mengatur router dari aplikasi, terdapat tiga router, "/" yang berisi login, "/register" yang berisi sign up, dan "/search" yang berisi nim finder.

Kelas login dapat menuju kelas sign up dan sebaliknya, kelas login juga dapat ke kelas App dengan mengirimkan state token, kelas App akan menerima inputan query dan meneruskan ke kelas result untuk dihubungkan ke API yang telah disediakan dan mendapatkan hasil dari query. 

Kelas result akan memanggil kelas Navigation setelah mengirimkan informasi halaman dan ketersiadan next page, dan terakhir kelas Navigation akan me-render page navigation. Jika state kelas Navigation diubah, maka kelas Result akan diubah juga state-nya

## Library yang digunakan
1. React -> membuat aplikasi berbasis react
1. ReactDOM -> merender aplikasi
1. Axios -> untuk menghubungkan ke API yang disediakan
1. qs -> untuk mengubah body saat memanggil API yang disediakan
1. BrowserRouter -> membuat router pada aplikasi

## Review untuk desain API yang ada
kelas App dapat digabungkan dengan kelas result, sehingga kelas yang digunakan lebih sedikit
