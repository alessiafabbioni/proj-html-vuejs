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
  <nav class="navbar">
    <div class="container">
      <div>
        <a class="navbar-brand" href="#">
          <img src="/img/mob-logo.png" alt="" />
        </a>
        <!-- <a class="navbar-brand d-none d-lg-inline" href="#">
          <img src="img/logo.svg" alt="" width="130" height="" />
        </a> -->
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
</style>
