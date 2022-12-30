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
                <ion-icon name="arrow-forward-outline"></ion-icon>
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
