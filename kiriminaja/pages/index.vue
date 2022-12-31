<template>
  <div class="area-kiriminaja bg-kiriminaja h-100 w-100 d-block text-white">
      <carousel :loop="true" :autoplay="true" ::items="1" :center="true" :stagePadding="10"
        :margin="50">
        <div v-for="main in mainBanner" :key="main.id">
          <Banner :title="main.title" :desc="main.description" :image="main.image" :link="main.href" :list="main.list"/>
        </div>
      </carousel>
    
    <CekOngkir />
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
    <Umkm />
    <Benefit />
  </div>
</template>


<script>
import Banner from '~/components/Banner.vue';
import Umkm from '~/components/Umkm.vue';
import CekOngkir from '~/components/CekOngkir.vue';
import Benefit from '~/components/Benefit.vue';
export default {
  name: "IndexPage",
  components: {
    Banner,
    Umkm,
    CekOngkir,
    Benefit,
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