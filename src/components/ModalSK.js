import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Box from '@material-ui/core/Box'
import { Link, Typography } from '@material-ui/core'
import CheckboxButton from './CheckboxButton'

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles ((theme) => ({
  containerKebijakanPrivasi:{
    width: '534px',
    height: '851px',
    paddingLeft:'35px',
    paddingRight: '35px',
    borderRadius: '15px',
  },
  box: {
    /*width: '464px',*/
    width: '552px',
    height: '123px',
    marginTop: '26px',
    paddingTop: '21px',
    backgroundColor:'#000',
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center',
  },
  logoEduModal: {
    width: '220px',
    [theme.breakpoints.down('xs')]: {
      width: '190px',
    }
  },
  textUnderLogo: {
    color:'#fff',
    fontWeight: '400',
    fontSize: '10px',
    fontFamily: 'Montserrat',
  },
  textHeaderModal:{
    color: '#000',
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '27px',
  },
  textModal:{
    color: '#000',
    textAlign: 'justify',
  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '700',
    fontSize: '18px',
  },
  paragraf: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: '14px',
  },

  btnGoogleKebijakanPrivasi: {
    backgroundColor: '#ABABAB',
    height: '51px',
    /*width: '474px',*/
    width: '552px',
    borderRadius: '5px',
    marginLeft:'30px',
    marginRight:'30px',
    marginBottom: '39px',
    marginTop: '16px',
  },
  icGoogle: {
    width: '30px',
  },
  txtbtnGoogleKebijakanPrivasi:{
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: '16px',
    textAlign: "center",
    color: '#fff',
  },
})) 



function ModalSK() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <container
        className= {classes.containerKebijakanPrivasi}
      >
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          /*aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"*/
        >
          <DialogTitle >
            <Typography className={classes.textHeaderModal}>
              Masuk & daftar
            </Typography> 
            <Box className={classes.box}>
              <img
                src='/assets/logo.png'
                alt='logo'
                className={classes.logoEduModal}
              />
              <Typography className={classes.textUnderLogo}>
                Syarat Ketentuan & Kebijakan Privasi
              </Typography>
            </Box>
          </DialogTitle>

          <DialogContent dividers={scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              ref={descriptionElementRef}
              tabIndex={-1}
            >
              <Typography className={classes.textModal}>
                <Typography className={classes.title}>
                  Syarat Ketentuan & Kebijakan Privasi
                </Typography>
                <Typography className={classes.paragraf}>
                  <p>
                    Kepada Pengguna,
                  </p>
                  <p>
                    Dengan menggunakan layanan ini (“Kami”), Anda (“pengguna”) akan mempercayakan informasi yang pengguna berikan saat registrasi. 
                    Kami sangat memahami betapa pentingnya informasi ini bagi pengguna, dengan demikian kami memprioritaskan keamanan informasi serta data pengguna agar tetap terjaga dan terlindungi. 
                  </p>
                  <p>
                    Untuk penghormatan akan privasi pengguna, kami mengadopsi pada <i>Privacy Framework A Tool for Improving Privacy Through Enterprise Risk Management, Version 1.0.”</i> 
                    Kerangka Privasi NIST: Sebuah Instrumen Untuk Meningkatkan Privasi Melalui Manajemen Risiko Bisnis, Versi 1.0” yang dipublikasikan oleh lembaga milik Amerika Serikat yakni, <i>National Institute of Stpenggunards and Technology</i> (NIST). 
                    Selain itu, kami juga merujuk pada ketentuan hukum nasional, seperti Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, yang kemudian diubah menjadi Undang-Undang Nomor 19 Tahun 2016, 
                    Peraturan Pemerintah Nomor 8 Tahun 2012 tentang Penyelenggaraan Sistem dan Transaksi Elektronik yang kemudian diubah menjadi Peraturan Pemerintah Nomor 71 tentang Penyelenggaraan Sistem dan Transaksi Elektronik dan Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik.
                  </p>
                  <p>
                    Pada syarat ketentuan dan kebijakan privasi ini, memiliki tujuan untuk membantu pengguna dalam memahami informasi atau data yang kami kumpulkan, serta apa yang menjadi alasan kami menghimpun data ini, dan cara memperbaharui, mengelola, mengekspor dan menghapus informasi pengguna yang sudah tidak lagi relevan. 
                    Maka dengan itu, kami ingin memberikan sedikit profil singkat mengenai layanan kami. 
                  </p>
                  <p>
                    HeyLaw.edu adalah anak perusahaan <i>(Subsidiary Company)</i> dari HeyLaw Indonesia, yang merupakan sebuah sarana untuk belajar seputar dunia hukum. 
                    Menggunakan layanan <i>Learning Management System</i> (LMS) sehingga dapat membuat pengguna dapat mengakses video-video materi di mana saja dan kapan saja. 
                    Adanya sarana ini membuat pengguna tidak lagi perlu repot-repot untuk pergi ke tempat pelatihan atau pun seminar, pun demikian dengan pengajar yang tidak perlu lagi mengeluarkan tenaga untuk menyusuri jalan dan ruang kelas untuk menyampaikan materi, melalui layanan ini semua bisa dilakukan dengan perangkat komputer di rumah saja, 
                    karena semuanya sudah disajikan di dalam website kami yakni 
                    <Link href="https://HeyLawedu.id/" >
                      : https://HeyLawedu.id/
                    </Link>
                  </p>
                  <p>
                    Pada layanan ini membantu memberikan penjelasan seputar permasalahan maupun realita di masyarakat yang berkaitan dengan hukum positif di Indonesia. 
                    Selain itu, kami menjadi wadah bagi para pengajar maupun ahli hukum di Indonesia untuk dapat berkarya sesuai keahlian mereka. 
                    Dengan akses yang sangat fleksibel dan harga yang amat terjangkau. 
                    Dengan dengan demikian ini juga membantu para pengajar untuk mempromosikan dirinya, ‘berinvestasi sosial kapital’ dan membuat profil yang elegan serta professional pada layanan ini.
                  </p>
                  <p>
                    Pengguna hanya tinggal memilih kelas yang sudah disediakan, dan melakukan registrasi pembayaran, lalu langsung dapat mengikuti kelas yang dipilih, sangat simple sekali, dan selepasnya, pengguna mendapatkan sertifikat untuk kelas yang berhasil dibeli. 
                  </p>
                  <h3>
                    Dasar Hukum
                  </h3>
                  <p>
                    Beberapa dokumen digunakan sebagai rujukan terhadap disusunnya Syarat Ketentuan dan Kebijakan Privasi ini, antara lain adalah :
                  </p>
                  <ol>
                    <li>
                      Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik, yang sudah diperbaharui Undang-Undang Nomor 19 Tahun 2016;
                    </li>
                    <li>
                      Peraturan Pemerintah Nomor 8 Tahun 2012 tentang Penyelenggaraan Sistem dan Transaksi Elektronik, yang sudah diperbaharui PP No. 71 Tahun 2019 tentang Transaksi Elektronik;
                    </li>
                    <li>
                      Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik
                    </li>
                  </ol>
                  <p>
                    Beberapa dokumen internasional juga rujuk dalam syarat ketentuan dan privasi ini, antara lain adalah
                  </p>
                  <ol>
                    <li>
                      Resolusi Majelis Umum PBB No. 73/266 Tahun 2019 tentang pembangunan di bidang teknologi dan informasi dalam konteks internasional; 
                    </li>
                    <li>
                      Resolusi Dewan HAM PBB No. 42/ 15 Tahun 2019 tentang hak privasi di era digital;
                    </li>
                    <li>
                      Resolusi Majelis Umum PBB No. 73/27 Tahun 2018 pembangunan di bidang teknologi dan informasi dalam konteks internasional;
                    </li>
                    <li>
                      Resolusi Majelis Umum PBB No. 71/ 199 Tahun 2017 tentang hak privasi di era digital;
                    </li>
                    <li>
                      Resolusi Majelis Umum PBB No. 69/ 204 Tahun 2015 tentang Teknologi Informasi dan Komunikasi untuk Pembangunan;
                    </li>
                    <li>
                      Resolusi Dewan HAM PBB No. 26/ 13 Tahun 2014 tentang Promosi, Perlindungan dan Kenikmatan Hak Asasi Manusia pada Internet;
                    </li>
                    <li>
                      Resolusi Majelis Umum PBB No. 69/ 166 Tahun 2014 tentang hak privasi di era digital;
                    </li>
                    <li>
                      Resolusi Majelis Umum PBB No. 68/ 167 Tahun 2013 tentang hak privasi di era digital; 
                    </li>
                    <li>
                      Resolusi Dewan HAM PBB No. 20/ 8 Tahun 2012 tentang Promosi, Perlindungan dan Kenikmatan Hak Asasi Manusia pada Internet;
                    </li>
                    <li>
                      ASEAN Telecommunications and Information Technology Ministers Meeting (Telmin) Framework on Personal Data Protection.
                    </li>
                  </ol>
                  <h3>
                    Ketentuan Umum
                  </h3>
                  <p>
                    HeyLaw.edu adalah <i>platform</i> layanan edukasi hukum digital yang disusun oleh PT. Prawira Bahagia Selalu, yang berisikan video dan materi pendidikan hukum yang dilakukan oleh pengajar profesional terdaftar di layanan ini;
                  </p>
                  <p>
                    Perusahaan adalah PT. Prawira Bahagia Selalu yang bergerak di bidang jasa layanan hukum dan pengembangan teknologi informasi;
                  </p>
                  <p>
                    Pengajar profesional adalah para Dosen, Praktisi maupun Lawyer yang terdaftar dan tersertifikasi di bidangnya masing-masing. 
                    Seperti dosen yang memiliki Nomor Induk Dosen Nasional (NIDN), Praktisi yang memiliki sertifikat pengangkatan, seperti konsultan Hak Kekayaan Intelektual (HKI) dan terakhir, 
                    Lawyer profesional adalah para lawyer yang telah diangkat dan disumpah di depan pengadilan dan yang telah mempunyai kartu advokat dan/ atau Berita Acara Sumpah (BAS), serta ahli-ahli hukum maupun keilmuan yang lain berhubungan dengan hukum;
                  </p>
                  <p>
                    Pihak Ketiga adalah beberapa perangkat lunak yang diintegrasikan ke dalam aplikasi, yang tanggung-jawab serta kontrolnya bukan berada pada perusahaan, seperti sistem pembayaran dan masuk/ daftar. 
                    Sistem pembayaran kita menggunakan pihak ketiga yang terdaftar dalam pengawasan Bank Indonesia, serta layanan masuk/ daftar menggunakan bantuan akun Google;
                  </p>
                  <h3>
                    Penggunaan Akun
                  </h3>
                  <p>
                    Akun pengguna hanya dapat digunakan oleh Pengguna dan tidak bisa dialihkan kepada orang lain dengan alasan apa pun. 
                    Kami berhak menolak untuk memberikan pelayanan jika kami mengetahui atau mempunyai alasan yang cukup untuk menduga Pengguna telah mengalihkan atau membiarkan Akun Pengguna dimiliki atau digunakan oleh orang lain.
                  </p>
                  <p>
                    Segera beritahukan kami jika Pengguna menyadari suatu ketika bahwa Akun Pengguna telah digunakan tanpa sepengetahuan atau tanpa izin dari Pengguna. 
                    Kami akan melakukan tindakan yang diperlukan atas pelaporan tersebut.
                  </p>
                  <h3>
                    Pembuatan Akun
                  </h3>
                  <p>
                    Pengguna akan membuat dan mendaftarkan akunnya menggunakan akun Google, yang membuat Pengguna lebih mudah menggunakan aplikasi layanan kami. 
                    Setelahnya akan muncul halaman <i>home</i> dari <i>platform</i> ini yang menampilkan <i>suggestion</i> dari kelas-kelas yang tersedia. 
                    Pengguna bisa melakukan pembelian kelas dan mengikuti serta mendapatkan sertifikat setelah mempunyai akun.
                  </p>
                  <h3>
                    Layanan Saat Ini
                  </h3>
                  <p>
                    Di dalam aplikasi terdiri dari 2 (dua) layanan inti untuk saat ini, yang pertama yakni layanan kelas pembelajaran hukum, seperti hukum perdata, hukum pidana maupun administrasi negara. Kedua adalah layanan pendidikan atau pelatihan kemahiran profesi, seperti Pendidikan Khusus Profesi Advokat (PKPA) dan lain sebagainya. Adapun uraian masing-masing layanan adalah sebagai berikut:
                  </p>
                  <ul>
                    <li>
                      Layanan kelas pembelajaran
                      <p>
                        Kami akan menyiapkan kelas-kelas, berkaitan dengan kebutuhan hukum, seperti Perlindungan Data Pribadi, Teknik Penulisan Kontrak, Teknik Pelaporan pada Kepolisian, dan masih sangat banyak sekali. 
                        Layanan kelas ini akan sangat dinamis mengikuti kebutuhan hukum yang ada. 
                        Pada layanan ini, nantinya pengguna bisa mengakses dan mengikuti kelas yang tersedia. 
                        Selanjutnya pengguna hanya tinggal melakukan administrasi untuk ikut kelas, dan langsung memulai pembelajaran. 
                        Untuk contoh kelas ini sangat banyak sekali, peserta hanya tinggal memilih saja kelas yang sesuai dengan kebutuhannya.
                      </p>
                    </li>
                    <li>
                      Layanan Pelatihan Profesi
                      <p>
                        Tidak hanya berhenti pada pengadaan kelas saja, pada layanan ini, kami melebarkan sayap untuk melakukan pelatihan profesi hukum, untuk kelas ini saat ini kami membuka kelas Pendidikan Khusus Profesi Advokat (PKPA) yang menjadi sarana para calon praktisi hukum untuk dapat menggapai cita-citanya. 
                        Tentu ini dilakukan tidak sendiri oleh kami, melainkan dengan kerja sama dengan Universitas dan Kongres Advokat Indonesia. 
                        Untuk kelas ini, tidak memiliki perbedaan yang signifikan seperti layanan kelas pembelajaran, peserta akan ikut pelatihan dengan menonton video yang sudah ada, yang diisi oleh para ahli hukum hebat, dengan skala internasional, yang terdiri dari profesor-profesor hukum, doktor-doktor hukum, master-master hukum, dan terakhir tak lain adalah advokat itu sendiri. 
                        Selain PKPA, kami juga menyediakan pelatihan profesi yang lain dalam layanan kami.
                      </p>
                    </li>
                  </ul>
                  <h3>
                    Keamanan Informasi Pribadi
                  </h3>
                  <p>
                    Keharasiaan infromasi pribadi pengguna adalah sesuatu hal yang paling penting bagi Kami. Kami akan mengupayakan usaha terbaik untuk melindungi dan mengamankan informasi pribadi Pengguna dari akses yang tidak berwenang untuk pengumpulan, penggunaan, pengolahan, penganalisisan, penyimpanan, penampilan, pengumuman, pengiriman, dan penyebarluasan. Kami mengutamakan penghormatan terhadap informasi pribadi sebagai privasi yang bersifat rahasia.
                  </p>
                  <h3>
                    Tanggung Jawab Perusahaan
                  </h3>
                  <p>
                    Kami berusaha untuk bertanggung jawab atas segala yang terjadi atau kemungkinan adanya kerusakan dan sekuat tenaga menjamin kepenggunalan, kualitas, kesesuaian, ketersediaan, akurasi, kelengkapan dan keamanan data dari aplikasi yang kami miliki. 
                    Sayangnya kami memiliki keterbatasan untuk meminta pertanggung-jawaban kepada pihak ketiga, misalnya layanan pembayaran dan layanan lain yang terintegrasi dengan aplikasi ini.
                  </p>
                  <p>
                    Kami juga bertanggung jawab pelaksanaan aktivitas di bawah "Kebijakan, Proses, dan Prosedur Tata Kelola" dari layanan ini. 
                    Selain itu kami memiliki tanggung jawab dalam pengelolaan manajemen risiko dari informasi atau data yang telah kami himpun dengan memberikan notifikasi kepada akun pengguna jika membutuhkan verifikasi dan penyampaian informasi.
                  </p>
                  <p>
                    Peran-peran dan tanggung jawab-tanggung jawab yang dikoordinasikan dan diselaraskan dengan pihak penyelenggara layanan, misalnya pengkomunikasian tujuan pemrosesan data, serta bagaimana praktiknya yang dijalan dalam sistem. 
                    Tenaga kerja dari penyelenggara, akan berpadu pada pengolahan data yang disediakan oleh penyelenggara, memiliki  pengetahuan atas privasi yang sudah terlatih dan bertanggung jawab atas kebijakan dan pengelolaan dari organisasi. 
                    Keamanan dan kebijakan data serta tanggung jawabnya terhadap Pemrosesan data dimaksudkan untuk pengaturan perlindungan data privasi.
                  </p>
                  <h3>
                    Pengumpulan Informasi
                  </h3>
                  <p>
                    Kami menganut prinsip pembatasan pengumpulan data pribadi. 
                    Sehingga data yang kami kumpulkan hanyalah email Google. 
                    Saat Pengguna mendaftar dan membuat akun dengan layanan kami, sementara ini yang tertarik dari Pengguna hanyalah verifikasi akun Google terkait dengan nama yang teregistrasi di Google. 
                    Kelak, Pengguna dapat melakukan penambahan profil pribadi Pengguna pada menu profil yang tersedia dalam layanan. 
                    Nama lengkap bisa diubah di menu profil untuk kepentingan pencetakan sertifikat.
                  </p>
                  <p>
                    Selebihnya data yang kami kumpulkan dalam bentuk agregat dan analitik, yang kami bisa akses melalui Google analytic, mulai dari lokasi yang bersifat umum, waktu keaktifan menggunakan aplikasi kami, jumlah kunjungan dan halaman yang dikunjungi dan seterusnya. 
                    Saat melakukan pembayaran, seluruh data dan informasi berkaitan dengan pembayaran seperti nomor rekening pengguna akan dikumpulkan, dipergunakan dan dikelola oleh pihak ketiga dalam fitur pembayaran yang dilakukan oleh perusahaan fintech payment yang mendapatkan izin dan diawasi oleh Bank Indonesia.
                  </p>
                  <p>
                    Tujuan dari pengumpulan data ini, semata-mata digunakan untuk memberikan pelayanan terbaik kepada pengguna dan mengembangkan aplikasi layanan kami ke arah yang lebih baik.
                  </p>
                  <h3>
                    Pemrosesan Informasi
                  </h3>
                  <p>
                    HeyLaw.edu menjamin tidak ada penjualan, pengalihan, distribusi atau meminjamkan informasi/ data pribadi pengguna kepada pihak ketiga dengan asalan apapun tanpa terdapat izin dari pengguna. Kecuali dalam hal-hal sebagai berikut; 
                    misalnya HeyLaw.edu secara keseluruhan atau sebagian asetnya diakuisisi atau merger dengan pihak ketiga, maka data pribadi yang dimiliki oleh HeyLaw.edu akan menjadi salah satu aset yang dialihkan atau digabungkan; 
                    dan apabila ada kewajiban dan kepatuhan kepada pemerintah/ aparat penegak hukum yang hanya terbatas pada urusan dalam rangka penegakan hukum dan keamanan nasional.
                  </p>
                  <p>
                    Kami hanya menggunakan informasi pribadi pengguna yang pada intinya ada dua hal, memastikan pengguna terlayani dengan baik dan meningkatkan kualitas layanan. 
                    Jika pengguna mempunyai komplain terhadap kami, kami akan melakukan verifikasi terhadap informasi pribadi pengguna, jika ada ketidak sesuaian dengan informasi pribadi pengguna, maka kami berhak menolak memberikan pelayanan yang dimaksud. 
                    Kami kuatir jika terdapat penyalahgunaan akun atas nama dan milik pengguna. 
                    Kami juga berusaha memaksimalkan kualitas layanan kami, dengan melakukan riset layanan apa yang Pengguna minati, sehingga memungkinkan kita mengembangkan jenis layanan yang terbaik kualitasnya.
                  </p>
                  <p>
                    Melalui proses yang transparan dan berbasis konsesnsus antara penyelenggara dan pengguna, Meningkatkan Privasi melalui Manajemen Risiko Bisnis, untuk memungkinkan praktek teknik privasi yang lebih baik serta mendukung privasi menurut konsep desain dan membantu penyelenggara dalam melindungi privasi pengguna. 
                    Kerangka Privasi dapat mendukung penyelenggara dalam berbagai hal, di antaranya:
                  </p>
                  <ul>
                    <li>
                      Membangun kepercayaan pengguna dengan mendukung pengambilan keputusan etis dalam desain atau penerapan produk dan layanan yang mengoptimalkan penggunaan data yang bermanfaat sementara itu juga meminimalkan konsekuensi yang merugikan bagi privasi pengguna dan masyarakat secara keseluruhan;
                    </li>
                    <li>
                      Memenuhi kewajiban-kewajiban kepatuhan saat ini, serta produk-produk dan layanan-layanan yang mumpuni untuk memenuhi kewajiban dalam sebuah teknologi yang berubah dan kebijakan lingkungan ; dan
                    </li>
                    <li>
                      Memfasilitasi komunikasi maupun diskusi tentang praktik privasi antara para pengguna-pengguna, mitra-mitra bisnis, penilai, dan regulator.
                    </li>
                  </ul>
                  <p>
                    Memperoleh manfaat dari data sekaligus mengelola risiko terhadap privasi pengguna tidak sesuai untuk menjadi solusi atas semua permasalahan. 
                    Seperti membangun rumah, di mana pemilik rumah membuat pilihan tata letak dan desain sambil mengpenggunalkan fondasi yang dibuat dengan baik, perlindungan privasi harus memungkinkan pilihan pengguna, selama mitigasi risiko privasi yang efektif sudah direncanakan ke dalam produk-produk dan layanan-layanan. 
                    Kerangka Privasi — melalui pendekatan berbasis risiko dan hasil — cukup fleksibel untuk menangani beragam kebutuhan privasi, memungkinkan solusi yang lebih inovatif dan efektif yang dapat memberikan hasil yang lebih baik bagi pengguna-pengguna dan organisasi-organisasi, dan tetap mengikuti tren-tren teknologi, seperti kecerdasan buatan Artificial Intelligence (AI) dan Internet of Things (IoT) ke depannya.
                  </p>
                  <h3>
                    Pembatalan perjanjian dan Penghapusan Data
                  </h3>
                  <p>
                    Syarat ketentuan dan kebijakan privasi ini menjadi tidak berlaku setelah pengguna berhenti menggunakan layanan ini, dan menutup akun di dalam aplikasi ini. 
                    Setelah pengguna tidak lagi mempunyai akun HeyLaw, maka kami akan menghapus data pribadi pengguna yang tidak lagi menyimpannya dalam gudang data kami. 
                    Kami mempunyai kebijakan dengan melakukan penghapusan dengan masa retensi maksimal 1 (satu) tahun sejak pengguna keluar dari aplikasi.
                  </p>
                  <h3>
                    Pembaharuan Ketentuan dan Privasi
                  </h3>
                  <p>
                    Kami akan melakukan peninjauan dan pembaharuan setiap waktu untuk mengikuti perkembangan kebutuhan pengguna. 
                    Pembaharuan diperlukan untuk memastikan bahwa syarat ketentuan dan kebijakan privasi kami mempunyai validitas dan akurasi yang tajam dalam perkembangan teknologi dan kebutuhan pengguna dari masa ke masa. 
                    Tentu perubahan itu juga akan didasarkan ketentuan peraturan perundang-undangan yang belaku di Indonesia. 
                    Jika kami melakukan pembaharuan syarat ketentuan dan kebijakan privasi ini, maka dokumen yang terbaru akan kami publikasikan ke dalam aplikasi. 
                    Setelah itu, Pengguna masih terus tetap berkomunikasi dan menggunakan layanan kami sebagaimana waktu sebelumnya.
                  </p>
                </Typography>
              </Typography>  
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {/*<Box>
              <CheckboxButton/>
              <FormControl component="fieldset">
                <FormGroup aria-label="position">
                    <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" />}
                    label="Dengan masuk atau mendaftar, anda menyetujui Syarat Ketentuan dan Kebijakan Privasi"
                    labelPlacement="end"
                />
                </FormGroup>
              </FormControl>
            </Box>*/}
            
            <Button 
            onClick={handleClose} 
            className={classes.btnGoogleKebijakanPrivasi}
            variant="contained"
            >
              <img
                src='/assets/ic_google.png'
                alt='google minit'
                className={classes.icGoogle}
              />
              &nbsp;&nbsp;
              <Typography className={classes.txtbtnGoogleKebijakanPrivasi}>
                Masuk & daftar dengan Google
              </Typography>
            </Button>  
            
            
          </DialogActions>
        </Dialog>
      </container>
    </div>
  );
}

export default ModalSK;