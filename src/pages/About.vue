<script>
export default {
  name: 'About'
}
</script>

<template>
  <section class="container-fluid pt-2" id="About-us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'home' }" class="nav-link">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">Library</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 d-flex justify-content-end">
          <h4>About Us</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
#About-us {
  background-image: url('public/img/body-bg.jpg');
  height: 800px;
  color: white;
}
</style>
