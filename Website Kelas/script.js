let slideIndex = 1;
showSlides(slideIndex);



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    if(slideIndex == 1){
        var title = document.getElementById('title');
        var paragraph = document.getElementById('paragraph');
        title.innerHTML = 'OSF 2023'
        paragraph.innerHTML = 'OSF, kependekan dari Osaka Fair Student, adalah sebuah acara tahunan yang penuh semangat dan kreativitas yang diselenggarakan di SMA Negeri 1 Kuta Selatan. Event ini diadakan sebagai bagian dari perayaan ulang tahun sekolah, dan selalu dinantikan oleh seluruh warga sekolah. Dalam OSF, para siswa diberi kesempatan untuk menunjukkan bakat dan keterampilan seni mereka dalam berbagai bentuk. Salah satu atraksi utama adalah pertunjukan modern dance yang memukau, di mana para siswa menampilkan gerakan-gerakan dinamis dan koreografi yang kreatif. Selain itu, terdapat juga berbagai proyek P5 (Projek Penguatan Profil Pelajar Pancasila) yang dipamerkan, termasuk pameran makanan yang menggugah selera dan berbagai karya inovatif lainnya. Tidak hanya itu, OSF juga dipenuhi dengan berbagai lomba menarik yang memacu semangat kompetitif siswa. Mulai dari lomba olahraga, lomba sains, lomba seni, hingga lomba kreativitas lainnya, semua diselenggarakan untuk memberikan kesempatan bagi para siswa untuk bersinar dan menunjukkan kemampuan terbaik mereka. OSF bukan hanya sekadar sebuah acara, tetapi juga merupakan ajang untuk mempererat kebersamaan dan memperlihatkan potensi luar biasa dari para siswa SMA Negeri 1 Kuta Selatan. Dengan berbagai kegiatan menarik dan penuh warna, OSF menjadi momen yang sangat dinantikan dan selalu meninggalkan kesan mendalam bagi semua yang terlibat.'
    }
    if(slideIndex == 2){
        var title = document.getElementById('title');
        var paragraph = document.getElementById('paragraph');
        title.innerHTML = 'Acara perpisahan dengan wali'
        paragraph.innerHTML = 'Kegiatan ini dilakukan saat kami mengetahui Bu Sukma akan pindah tugas mengajar kembali ke lingkungan masa kecilnya. Pada titik ini kmai sudah merasa bahwa Bu Sukma sudah seperti ibu kami sendiri dimana dia selalu memberikan solusi yang sangat solutif bagi kami. Beliau juga selalu mengetahui tentang minat dan bakat kami serta kemauan kami. Oleh karena itu, kami merencanakan acara ini untuk menghormati jasa beliau yang sangat membantu. Acara ini dilakukan di Pantai balangn dan saat seluruh anggota kelas tidak dalam kesibukan.'
    }
    if(slideIndex == 3){
        var title = document.getElementById('title');
        var paragraph = document.getElementById('paragraph');
        title.innerHTML = 'Menikmati Alam'
        paragraph.innerHTML = 'Suatu hari, cowo di kelas 11.2 berkumpul dan tidak sengaja ingin membahas bermain ke Karangasem Mencari tukad. SIapa sangka, rencana tersebut terealisasi dengan sangat mudah tanpa ada drama ataupun omong kosong belaka. Kita akhirnya berangkat dari Jimbaran menuju Karangasem sambil menikmati perjalanan melewati jalan yang Panjang. Sampai disana, di Telaga Surya kami berendam dan menikmati suasana alam disekitar sana serta moment kebersamaannya.'
    }
}

