<template>
  <div class="area-kiriminaja bg-kiriminaja h-100 w-100 d-block text-white">
    <client-only>
      <carousel :loop="true" :autoplay="true" ::items="1" :center="true" :stagePadding="10"
        :margin="50">
        <div v-for="main in mainBanner" :key="main.id">
          <Banner :title="main.title" :desc="main.description" :image="main.image" :link="main.href"/>
        </div>
      </carousel>
    </client-only>
    <section class="position-relative py-3">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <form class="form-cek-ongkir">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <label for="exampleDataList" class="form-label">Asal</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Keluarahan Asal</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-lg-4 col-12">
                  <label for="exampleDataList" class="form-label">Tujuan</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Kelurahan Tujuan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-lg-3 col-12">
                  <label for="exampleFormControlInput1" class="form-label">Berat</label>
                  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="999" />
                </div>
                <div class="col-lg-1 col-12">
                  <a href="#" class="btn-search-ongkir">
                    <svg width="1em" height="1em" viewBox="0 0 32 32">
                      <path fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"></path>
                    </svg>
                    <span>Cek Ongkir</span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-5 border border-white border-start-0 border-end-0 bg-carousel">
      <div class="container mx-auto px-3 position-relative">
        <carousel
          :responsive="{ 0: { items: 1, nav: false }, 600: { items: 3, nav: true }, 1000: { items: 6, nav: false } }"
          :dots="false" :loop="true" :nav="false" :autoplay="true" :autoplayHoverPause="true">
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/anteraja.png" height="50px"
              alt="Kurir anteraja" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ninja.png" height="50px"
              alt="Kurir ninja" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/idx.png" height="50px" alt="Kurir idx"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/gosend.png" height="50px"
              alt="Kurir GoSend" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/grab_express.png" height="50px"
              alt="Kurir Grab Express" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/borzo.png" height="50px"
              alt="Kurir Borzo Delivery" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jne.png" height="50px" alt="Kurir jne"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jnt.png" height="50px" alt="Kurir jnt"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sicepat.png" height="50px"
              alt="Kurir sicepat" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sap.png" height="50px" alt="Kurir sap"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ncs.png" height="50px" alt="Kurir ncs"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sentral.png" height="50px"
              alt="Kurir sentral" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/anteraja.png" height="50px"
              alt="Kurir anteraja" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ninja.png" height="50px"
              alt="Kurir ninja" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/idx.png" height="50px" alt="Kurir idx"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/gosend.png" height="50px"
              alt="Kurir GoSend" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/grab_express.png" height="50px"
              alt="Kurir Grab Express" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/borzo.png" height="50px"
              alt="Kurir Borzo Delivery" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jne.png" height="50px" alt="Kurir jne"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/jnt.png" height="50px" alt="Kurir jnt"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sicepat.png" height="50px"
              alt="Kurir sicepat" class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sap.png" height="50px" alt="Kurir sap"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/ncs.png" height="50px" alt="Kurir ncs"
              class="img-fluid" />
          </div>
          <div class="my-3 p-2">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/logistics/sentral.png" height="50px"
              alt="Kurir sentral" class="img-fluid" />
          </div>
        </carousel>
      </div>
    </section>
    <!-- <section class="mt-5 border border-white border-start-0 border-end-0 bg-carousel">
      <div class="container mx-auto px-3 position-relative">
        <carousel
          :responsive="{ 0: { items: 1, nav: false }, 600: { items: 3, nav: true }, 1000: { items: 6, nav: false }}" 
          :dots="false"
          :loop="true"
          :nav="false"
          :autoplay="true"
          :autoplayHoverPause="true"
        >
          <div class="my-3 p-2" v-for="banner in dataBanner" :key="banner.id">
            <img :src="banner.image" height="50px"
              alt="Kurir anteraja" />
          </div>
        </carousel>
      </div>
    </section> -->
    <section class="py-5 position-relative">
      <div class="container">
        <span class="fw-bold text-primary">Empowering UMKM</span>
        <h2 class="fw-bold mb-4 mt-3">
          Jangkauan untuk semua<br />
          kebutuhan pengiriman<br />paketmu
        </h2>
        <p>
          Persembahan dari kami untuk mempermudah <br />
          kebutuhan bisnismu
        </p>
        <div class="row mt-5">
          <div class="col-lg-4 col-12 mb-4">
            <div
              class="py-3 px-4 position-relative d-flex flex-column justify-content-start overflow-hidden box-empowering">
              <div class="mb-3">
                <div class="rounded-circle box-empowering-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="armchair" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z">
                    </path>
                    <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5"></path>
                    <path d="M6 19v2"></path>
                    <path d="M18 19v2"></path>
                  </svg>
                </div>
              </div>
              <h3 class="fw-bold mb-3">Layanan Terintegrasi</h3>
              <p class="pe-5">
                Dashboard, API, Dan Mobile kami sediakan untuk mengontrol &amp;
                monitoring lebih mudah.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-4">
            <div
              class="py-3 px-4 position-relative d-flex flex-column justify-content-start overflow-hidden box-empowering">
              <div class="mb-3">
                <div class="rounded-circle box-empowering-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="shield-lock" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3">
                    </path>
                    <circle cx="12" cy="11" r="1"></circle>
                    <line x1="12" y1="12" x2="12" y2="14.5"></line>
                  </svg>
                </div>
              </div>
              <h3 class="fw-bold mb-3">Ekspedisi Terbaik</h3>
              <p class="pe-5">
                Kamu bisa pilih layanan sameday, next day, reguler, ekonomi,
                kargo dan lainya sesukamu.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-4">
            <div
              class="py-3 px-4 position-relative d-flex flex-column justify-content-start overflow-hidden box-empowering">
              <div class="mb-3">
                <div class="rounded-circle box-empowering-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="brand-github-copilot" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2"></path>
                    <path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 .002 4 3 4c4 0 5 -2.5 5 -4z">
                    </path>
                    <path
                      d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3.001 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2">
                    </path>
                    <path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2"></path>
                    <path
                      d="M12 7.5l.003 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c.005 .033 .01 .066 .013 .098l.016 .185l.005 .171l-.003 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z">
                    </path>
                    <path d="M10 15v2"></path>
                    <path d="M14 15v2"></path>
                  </svg>
                </div>
              </div>
              <h3 class="fw-bold mb-3">Sistem Otomatis</h3>
              <p class="pe-5">
                Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-4">
            <div
              class="py-3 px-4 position-relative d-flex flex-column justify-content-start overflow-hidden box-empowering">
              <div class="mb-3">
                <div class="rounded-circle box-empowering-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="headset" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="4" y="13" rx="2" width="4" height="6"></rect>
                    <rect x="16" y="13" rx="2" width="4" height="6"></rect>
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                    <path d="M18 19a6 3 0 0 1 -6 3"></path>
                  </svg>
                </div>
              </div>
              <h3 class="fw-bold mb-3">Selalu Ada Untukmu</h3>
              <p class="pe-5">
                Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-4">
            <div
              class="py-3 px-4 position-relative d-flex flex-column justify-content-start overflow-hidden box-empowering">
              <div class="mb-3">
                <div class="rounded-circle box-empowering-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="clipboard-check" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                    <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                    <path d="M9 14l2 2l4 -4"></path>
                  </svg>
                </div>
              </div>
              <h3 class="fw-bold mb-3">Laporan Aktual</h3>
              <p class="pe-5">
                Kemudahan pantau paket, pencairan COD, saldo, semuanya.
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-12 mb-4">
            <div
              class="py-3 px-4 position-relative d-flex flex-column justify-content-start overflow-hidden box-empowering">
              <div class="mb-3">
                <div class="rounded-circle box-empowering-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" class="heart" width="24" height="24" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </div>
              </div>
              <h3 class="fw-bold mb-3">Friendly</h3>
              <p class="pe-5">
                Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 position-relative">
      <div class="container">
        <span class="fw-bold text-primary">Makin Simpel</span>
        <h2 class="fw-bold mb-4 mt-3">
          Masih jaman kirim paket lama?<br />
          Berantas dengan KiriminAja
        </h2>
        <p>Ekspedisi terbaik yang kami pilihkan hanya untuk kamu lho</p>
        <div class="row align-items-center">
          <div class="col-lg-6 col-12">
            <img src="https://kiriminaja-static-file.imgix.net/home-v3/feature-light.webp" class="img-fluid" alt="" />
          </div>
          <div class="col-lg-6 col-12">
            <div class="d-flex flex-column gap-3">
              <div class="w-100 border border-white py-3 px-3 bg-transparent d-flex gap-3 align-items-center rounded">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Berbagai service expedisi sameday, kargo dan lainnya.</span>
              </div>
              <div class="w-100 border border-white py-3 px-3 bg-transparent d-flex gap-3 align-items-center rounded">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Penjemputan paket tanpa minimal kiriman.</span>
              </div>
              <div class="w-100 border border-white py-3 px-3 bg-transparent d-flex gap-3 align-items-center rounded">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Fitur dropoff atau cashless.</span>
              </div>
              <div class="w-100 border border-white py-3 px-3 bg-transparent d-flex gap-3 align-items-center rounded">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Kirim paket COD dengan pencairan tercepat.</span>
              </div>
              <div class="w-100 border border-white py-3 px-3 bg-transparent d-flex gap-3 align-items-center rounded">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Platform mudah digunakan (user friendly).</span>
              </div>
              <div class="w-100 border border-white py-3 px-3 bg-transparent d-flex gap-3 align-items-center rounded">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Meminimalisir rasio retur.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue';
export default {
  name: "IndexPage",
  components: {
    Banner
  },
  data: () => ({
    dataBanner: [],
    mainBanner: []
  }),
  async fetch() {
    this.dataBanner = await fetch("http://localhost:3000/Api/Banner.json").then((res) => res.json());
    this.mainBanner = await fetch("http://localhost:3000/Api/MainBanner.json").then((res) => res.json());
  },
};
</script>
