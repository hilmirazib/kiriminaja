<template>
  <section class="position-relative py-5 bg-footer">
    <div class="container">
      <footer class="row row-cols-5 py-5 my-5 border-top">
        <div class="col-lg-5 col-12">
          <a
            href="/"
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <img :src="require('@/assets/logo.png')" class="logo-kiriminaja" alt="" />
          </a>
          <p class="text-white">
            KiriminAja adalah sebuah platform order pengiriman berbagai
            ekspedisi, agar para online seller dapat dengan mudah melakukan
            pengiriman paket COD maupun NON COD ke seluruh Indonesia.
          </p>
          <p class="text-muted">© 2021</p>
        </div>
        <div class="col-lg-3 d-lg-block d-none"></div>
        <div class="col-lg-2 col-6">
          <h5 class="text-muted">Tautan Cepat</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Cek Tarif Aja</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Kabar Buatmu</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Manajemen Order</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Integrasi API</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Karir</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-6">
          <h5 class="text-muted">Kirimin Aja</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Tentang Kami</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Syarat & Ketentuan</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Kebijakan Privasi</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-white">Fakta & Pertanyaan</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
};
</script>
