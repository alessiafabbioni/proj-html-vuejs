<script>
export default {
  name: 'About'
}
</script>

<template>
  <section class="container-fluid pt-2" id="About-us">
    <div class="container">
      <div class="row bread-crumb">
        <div class="col-lg-6">
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'home' }" class="nav-link">
                  Home
                </router-link>
              </li>
              <li class="breadcrumb-item" aria-current="page">About Us</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 d-flex justify-content-end">
          <span>About Us</span>
        </div>
      </div>
      <div class="row">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade col-lg-6"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/img/Et-quasi-architecto-beate.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/img/Laborum-et-dolor-fuga-Et.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/img/Blandit-praesen-volupta-1400x878_t.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="col-lg-6">
          <div>
            <h5>Why choose us</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              velit! Dolorem, minima sapiente. Alias omnis in nesciunt,
              molestias optio voluptatibus aliquam labore, error officiis,
              corrupti commodi eaque a nemo ex? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti qui quo nemo. Voluptatibus,
              aliquam similique cumque alias at, doloremque maiores ipsum
              obcaecati quos sit, eligendi animi magnam nisi rerum magni!
            </p>
            <ul>
              <li>Praesent sed ex vel mauris ele.</li>
              <li>Nam vel luctus nulla, eget interdum metus</li>
              <li>Temporibus autem</li>
              <li>Excepteur sint occaecat</li>
            </ul>
            <div class="lets-talk col-lg-3">Let's TALK</div>
          </div>
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
  .lets-talk {
    background-color: #23172f;
    text-align: center;
    padding: 10px;
  }
  .lets-talk:hover {
    cursor: pointer;
    color: #f9aa01;
  }
}
</style>
