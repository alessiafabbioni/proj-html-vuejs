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
  <div class="container-fluid">
    <div class="container elementi-navbar p-3">
      <div class="row">
        <div class="col-lg-2 logo justify-content-center">
          <router-link :to="{ name: 'about' }" class="nav-link">
            <img src="/img/mob-logo.png" alt="" />
          </router-link>
        </div>
        <div class="lista-nav col-lg-6">
          <ul class="d-flex">
            <li v-for="(element, i) in pages" :key="i" class="">
              {{ element.page }}
            </li>
          </ul>
        </div>
        <div class="icone col-lg-4 d-flex justify-content-end align-items-end">
          <ul class="d-flex">
            <i
              v-for="(icons, index) in iconpage"
              :key="index"
              :class="icons.icon"
            ></i>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;
.container-fluid {
  border-bottom: solid #241b2e 1px;
  background-color: #1d1427;
  color: white;
  font-weight: bold;
  .lista-nav {
    ul {
      list-style: none;
      gap: 60px;
    }
  }
  .icone {
    font-size: 20px;

    ul {
      gap: 55px;
    }
  }
}
ul :hover {
  cursor: pointer;
  color: #f9aa01;
}
</style>
