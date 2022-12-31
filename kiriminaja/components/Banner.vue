<template>
  <section class="position-relative py-3">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-7 col-12 order-lg-1 order-2">
          <div class="mb-5">
            <h1 class="fw-bold text-h1 mb-4 pe-lg-4">
              {{ title }}
            </h1>
            <p class="w-75 pe-lg-4 text-p-header" style="color: #aeaaae">
              {{ desc }}
            </p>
          </div>
          <ul class="list-group gap-3 mb-5">
            <li class="" v-for="value in list">
              <svg width="32" height="32" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M336 176L225.2 304L176 255.8"/>
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63Z"/>
              </svg>
              <span>{{ value }}</span>
            </li>
            
          </ul>
          <div class="d-lg-flex d-block gap-3">
            <a class="nav-link active d-block text-white py-2 px-3 btn-signup" aria-current="page" :href="link">
              <div class="d-flex justify-content-center align-items-center gap-2">
                <span>Daftar Gratis</span>
                <svg width="20" height="20" viewBox="0 0 512 512">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="40" d="m268 112l144 144l-144 144m124-144H100" />
                </svg>
              </div>
            </a>
            <a :href="link" class="nav-link active text-white">
              <div class="d-flex justify-content-center align-items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 512 512">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="40"
                    d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64c-30.37-38-80-64-208-64c-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96Zm0 0v288" />
                </svg>
                <span>Selengkapnya</span>
              </div>
            </a>
          </div>
        </div>
        <div class="col-lg-5 col-12 order-lg-2 order-1">
          <img :src="image" class="img-fluid" alt="" />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: ['title', 'list', 'desc', 'image', 'link'],
};
</script>
