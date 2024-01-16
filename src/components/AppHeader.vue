<script>
import NavBar from './NavBar.vue'
export default {
  name: 'AppHeader',
  components: {
    NavBar
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="container d-flex flex-row justify-content-between p-3">
      <div>
        <span class="wishlist pe-3"> wishlist(0)</span>
        <span class="help ps-3">Need Help?</span>
      </div>
      <div class="call">Call 24/7 . 800-8754-987</div>
    </div>
  </div>
  <div>
    <NavBar />
  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  border-bottom: solid #392d47 1px;
  background-color: #1d1427;
  .container {
    color: darkgrey;
    div {
      .wishlist {
        border-right: solid #392d47 1px;
      }
    }
  }
}
</style>
