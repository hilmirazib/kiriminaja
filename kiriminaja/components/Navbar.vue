<template>
  <nav
    class="navbar sticky-top navbar-expand-lg navbar-dark bg-kiriminaja py-3"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/logo.png')" class="logo-kiriminaja" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Blog</a>
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link active" aria-current="page" href="#">kabar</a>
          </li>
          <li class="nav-item dropdown ms-lg-4">
            <a
              class="nav-link active dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Layanan
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Menajemen Order</a></li>
              <li><a class="dropdown-item" href="#">integrasi API</a></li>
            </ul>
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link active" href="#">Cek Ongkir</a>
          </li>
          <li class="nav-item ms-lg-4">
            <a class="nav-link active" href="#">Lacak</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Masuk</a>
          </li>
          <li class="nav-item ms-lg-4">
            <a
              class="nav-link active d-block text-white py-2 px-3 btn-signup"
              aria-current="page"
              href="#"
            >
              <div
                class="d-flex justify-content-center align-items-center gap-2"
              >
                <span>Daftar Gratis</span>
                <svg width="1em" height="1em" viewBox="0 0 32 32"><path fill="#ffffff" d="M5 15a1 1 0 1 0 0 2v-2Zm21 2a1 1 0 1 0 0-2v2Zm1-1l.707.707a1 1 0 0 0 0-1.414L27 16Zm-7.293-8.707a1 1 0 1 0-1.414 1.414l1.414-1.414Zm-1.414 16a1 1 0 0 0 1.414 1.414l-1.414-1.414ZM5 17h21v-2H5v2Zm22.707-1.707l-8-8l-1.414 1.414l8 8l1.414-1.414Zm-1.414 0l-8 8l1.414 1.414l8-8l-1.414-1.414Z"></path></svg>
                
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderTop",
};
</script>
