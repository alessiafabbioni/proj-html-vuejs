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
          name: 'Search',
          url: '#',
          icon: '<i class="fa-solid fa-magnifying-glass"></i>'
        },
        {
          page: 'MyAccount',
          url: '#',
          icon: '<i class="fa-solid fa-user"></i>'
        },
        {
          page: 'Cart',
          url: '#',
          icon: '"fa-solid fa-bag-shopping"'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="container elementi-navbar pt-4">
      <div class="logo">
        <img src="/img/mob-logo.png" alt="" />
      </div>
      <div class="lista-navigazione">
        <ul>
          <li v-for="(element, i) in pages" :key="i">{{ element.page }}</li>
        </ul>
      </div>
      <div class="icone">
        <ul>
          <li v-for="(icons, i) in iconpage">
            <i> </i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  border-bottom: solid #241b2e 1px;
  background-color: #1d1427;
  height: 100px;
}
</style>
