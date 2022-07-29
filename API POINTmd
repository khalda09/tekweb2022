# API Points #
## Users ##
**Menampilkan data semua pengguna**
```

response:[
{
    "id": "1",
    "nama": "Khalda Hafizhah Arina Wafa",
    "status": "Hello i'm Indonesian",
    "bio": "Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta ",
{
```

**Menampilkan data semua pengguna dengan id tertentu**
```

response:[
{
    "id": "2",
    "nama": "ganti",
    "status": "masih jomblo",
    "bio": "selama engkau hidup",
{
 ```
 
 **Menambahkan data pengguna**
 ```

 data:
 {
    "id": "1",
    "judul": "Minat",
    "tanggal": "2022-04-01",
    "image": ".\/img\/anakusiadini.jpeg",
    "link": "article1.md"
    "deskripsi": "menekuni dalam bidang pendidikan anak usia dini","
}

response:
true 
```

data:
{
    "id": "2",
    "judul": "Komunitas",
    "tanggal": "2022-04-10",
    "deskripsi":"Teman Dengar adalah salah satu komunitas kesehatran mental yang saya ikuti",
    "image":".\/img\/temandengar.jpeg",
    "link":"article4.md"},
}
 
 
response:
true   
```

DELETE: /users/[1]

response:
data berhasil dihapus   
```

## Artikel ##
**Menampilkan semua data Artikel**
```
GET: /artikel

response: [
{
    "id": "3",
    "judul": "Bidang",
    "tanggal": "2022-04-13",
    "deskripsi": "Melakukan observasi tentang sebuah bisnis di salah satu Restoran di Yogyakarta",
    "image": ".\/img\/analisis.jpeg",
    "link":"article2.md",
}
]
```

**Menampilkan data artikel berdasarkan id**
```
GET: /article?id=1

response:

{
    "id": "7",
    "judul": "coba",
    "tanggal":"0000-00-00",
    "deskripsi":"gatau",
    "image":".\/image.jpg",
    "link":"contoh."
}
```

**Menambahkan data artikel**
```
POST: /artikel

data:
{
    "id": "1",
    "nama": "Khalda Hafizhah Arina Wafa",
    "posisi": "mahasiswa",
    "story": "Hay Fweenn, kenalin aku khalda. panggil aja khal atau da, maybe. aku mahasiswa semester 4 universitas ahmad dahlan prodi sisitem informasi.kalo kalian mau kenal aku lebih jauh bisa tap di instagram juga email aku yaa. salam kenal semuanya!",
    "image": ".\/img\/IMG_2415.JPG",
}

response:
true
```

**Edit data artikel**
```
PUT: /artikel

data:
{
    "id": "2",
    "nama": "null",
    "posisi": "sendiri",
    "link": "article1.md",
    "story": "nolep euy",
    "image": "gak pede"
}
 
response:
true   
```
