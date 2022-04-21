const newLocal = {
    data() {
        return {
            header: {
                nama: "khalda Hafizhah Arina Wafa",
                location: "Hello i'm indonesian",
                deskripsi: "Mahasiswa Sistem Informasi Universitas Ahmad Dahlan Yogyakarta"
            },
            article: [
                {
                    image: "./img/Pulau Dewata.jpg",
                    deskripsi: "Bukan jadi sebuah pertanyaan besar jika pulau tersebut merupakan salah satu pulau yang sangat menyimpan banyak kenangan masa kecil saya didalamnya.",
                    author: "dibuat oleh khalda hafizhah arina wafa"
                },
                {
                    image: "./img/mental health.jpg",
                    deskripsi: "Ketertarikan saya terhadap kesehatan mental membuat saya saat ini memiliki banyak ilmu dan pengalaman mengenai hal tersebut.",
                    author: "dibuat oleh khalda hafizhah arina wafa"
                },
                {
                    image: "./img/alam.jpg",
                    deskripsi: "Salah satu cara bersyukur menurut saya adalah dengan mencintai dan menjaga alam yang telah Allah titipkan.",
                    author: "dibuat oleh khalda hafizhah arina wafa"
                }
            ]
        }
    }
}
Vue.createApp(newLocal).mount('#app')