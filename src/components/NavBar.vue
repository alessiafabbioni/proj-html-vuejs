<script>
export default {
  name: 'NavBar',
  data() {
    return {
      iconpage: [
        {
          url: '#',
          icon: 'fa-solid fa-magnifying-glass'
        },
        {
          url: '#',
          icon: 'fa-solid fa-user'
        },
        {
          url: '#',
          icon: 'fa-solid fa-bag-shopping'
        }
      ]
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
      >
        <i class="fa-solid fa-bars"></i>
      </div>

      <div
        class="offcanvas offcanvas-start d-lg-none"
        tabindex="-1"
        id="sidebar"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body"></div>
      </div>

      <a class="navbar-brand d-none d-lg-block" href="#">
        <router-link :to="{ name: 'home' }" class="nav-link">
          <img src="/img/mob-logo.png" alt="" />
        </router-link>
      </a>
      <div class="lista-nav">
        <ul class="d-flex">
          <li class="d-none d-lg-block">
            <router-link :to="{ name: 'home' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="d-none d-lg-block">
            <router-link :to="{ name: 'about' }" class="nav-link">
              About Us
            </router-link>
          </li>
          <li class="d-none d-lg-block">
            <router-link :to="{ name: 'contact' }" class="nav-link">
              Contact Us
            </router-link>
          </li>
        </ul>
      </div>
      <div class="icone">
        <ul class="list-unstyled d-flex text-center mt-3">
          <li
            class="me-3 d-none d-lg-inline"
            v-for="(icons, index) in iconpage"
            :key="index"
          >
            <i :class="icons.icon"> </i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;
.navbar {
  background-color: #1d1427;
  .container {
    background-color: #1d1427;

    color: white;
    font-weight: bold;
    .lista-nav {
      ul {
        list-style: none;
        gap: 30px;
        font-size: 15px;
      }
    }
    .icone {
      font-size: 20px;

      ul {
        gap: 40px;
      }
    }
  }
  ul :hover {
    cursor: pointer;
    color: #f9aa01;
  }
}
.navbar-toggler {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
}
.fa-bars {
  color: white;
  font-size: 30px;
}
</style>
