<template>
    <div>
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
                                    <input type="text" class="form-control" id="exampleFormControlInput1"
                                        placeholder="999" />
                                </div>
                                <div class="col-lg-1 col-12">
                                    <a href="#" class="btn-search-ongkir">
                                        <svg width="1em" height="1em" viewBox="0 0 32 32">
                                            <path fill="none" stroke="#ffffff" strokeLinecap="round"
                                                strokeLinejoin="round" strokeWidth="2"
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
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      // data untuk API
      params: {
        id: '',
        provinsi_name: ''
      }
    }
  },
  methods: {
    async fetchOngkir() {
      try {
        const response = await axios.post('https://tdev.kiriminaja.com/api/mitra/province')
        console.log(response)
        // gunakan hasil dari API di sini
      } catch (error) {
        // manajemen error di sini
      }
    }
  },
  created() {
    // this.fetchOngkir()
  }
}
</script>
