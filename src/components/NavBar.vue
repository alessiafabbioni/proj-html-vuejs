<script>
export default {
  name: 'NavBar',
  data() {
    return {
      pages: [
        {
          page: 'Home',
          url: '#'
        },
        {
          page: 'Shop',
          url: '#'
        },
        {
          page: 'Blog',
          url: '#'
        },
        {
          page: 'Media',
          url: '#'
        },
        {
          page: 'ShortCode',
          url: '#'
        },
        {
          page: 'Features',
          url: '#'
        }
      ],
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
  <!-- <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div>
        <a class="navbar-brand d-none d-lg-block" href="#">
          <img src="/img/mob-logo.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li>home</li>
            <li>about</li>
            <li>jhya</li>
          </ul>
        </div>
     
      </div>

      <div class="lista-nav">
        <ul class="d-flex">
          <li v-for="(element, i) in pages" :key="i" class="d-none d-lg-block">
            {{ element.page }}
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
  </nav> -->
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
        <div class="offcanvas-body">
          <div class="lista-nav">
            <ul class="d-flex">
              <li
                v-for="(element, i) in pages"
                :key="i"
                class="d-none d-lg-block"
              >
                {{ element.page }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a class="navbar-brand d-none d-lg-block" href="#">
        <img src="/img/mob-logo.png" alt="" />
      </a>
      <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarText">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li>home</li>
          <li>about</li>
          <li>jhya</li>
        </ul>
      </div> -->
      <div class="lista-nav">
        <ul class="d-flex">
          <li v-for="(element, i) in pages" :key="i" class="d-none d-lg-block">
            {{ element.page }}
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
