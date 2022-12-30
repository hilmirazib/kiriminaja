<template>
  <section class="position-relative py-3">
    <div class="container">
      <div class="row mb-5 align-items-center">
        <div class="col-lg-7 col-12 order-lg-1 order-2">
          <div class="mb-5">
            <h1 class="fw-bold text-h1 mb-4 pe-lg-4">
              Temukan ongkos kirim <br />dari berbagai ekspedisi
            </h1>
            <p class="w-75 pe-lg-4 text-p-header" style="color: #aeaaae">
              Anda bisa dengan mudah mengakses cek tarif pengiriman multi
              ekspedisi dengan KiriminAja.
            </p>
          </div>
        </div>
        <div class="col-lg-5 col-12 order-lg-2 order-1">
          <div class="d-flex gap-3 ms-auto">
            <div class="ms-xl-auto">
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/kiriminaja/id1544207424"
              >
                <img
                  src="https://tauku.com/_nuxt/img/badge-app-store.4a87905.png"
                  alt=""
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=id.tries.kiriminaja&amp;hl=in"
              >
                <img
                  src="https://tauku.com/_nuxt/img/badge-play-store.ee6356a.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
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
                <label for="exampleFormControlInput1" class="form-label"
                  >Berat</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="999"
                />
              </div>
              <div class="col-lg-1 col-12">
                <a href="#" class="btn-search-ongkir">
                  <ion-icon name="search-outline"></ion-icon>
                  <span>Cek Ongkir</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>
