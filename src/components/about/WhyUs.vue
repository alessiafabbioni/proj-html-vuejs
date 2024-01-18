<script>
export default {
  name: 'WhyUs',
  data() {
    return {
      activeCard: 0,
      pics: [
        '/img/Et-quasi-architecto-beate.jpg',
        '/img/Laborum-et-dolor-fuga-Et.jpg',
        '/img/Blandit-praesen-volupta-1400x878_t.jpg'
      ]
    }
  },
  methods: {
    prevImg() {
      this.activeCard--
      if (this.activeCard < 0) {
        this.activeCard = this.pics.length - 1
      }
    },
    nextImg() {
      this.activeCard++
      if (this.activeCard > this.pics.length - 1) {
        this.activeCard = 0
      }
    },
    thumbNail(i) {
      this.activeCard = i
    }
  }
}
</script>

<template>
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
    <!-- slider -->
    <div class="row">
      <div class="col-lg-6">
        <div class="slider-wrapper" tabindex="0">
          <div class="item">
            <img :src="pics[activeCard]" alt="" />

            <div class="prev" @click="prevImg">
              <i class="fa-solid fa-circle-left"></i>
            </div>
            <div class="next" @click="nextImg">
              <i class="fa-solid fa-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <!--  WHY CHOOSE US -->
      <div class="col-lg-6 why-us">
        <h5>Why Choose Us</h5>
        <p>
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
          dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
          tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
          enim. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue.consequat vitae, eleifend ac, enim. Quisque rutrum. Aenean
          imperdiet.
        </p>
        <div class="d-flex flex-column">
          <div class="list-element">
            <i class="fa-solid fa-circle"></i>
            <span>Praesent sed ex vel mauris ele</span>
          </div>
          <div class="list-element">
            <i class="fa-solid fa-circle"></i>
            <span>Nam vel luctus nulla, eget interdum metus</span>
          </div>
          <div class="list-element">
            <i class="fa-solid fa-circle"></i> <span>Temporibus autem</span>
          </div>
          <div class="list-element">
            <i class="fa-solid fa-circle"></i>
            <span>Excepteur sint occaecat</span>
          </div>
        </div>
        <div class="lets-talk col-lg-3">Let's TALK</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;
.why-us {
  h5 {
    position: relative;
    padding-bottom: 15px;
  }
  h5::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10%;
    height: 1px;
    background-color: #f9aa01;
  }
  p {
    margin-top: 15px;
    font-size: 15px;
    color: #747276;
  }
  div {
    color: #a59d95;
    font-size: 15px;
    font-weight: 400;
    gap: 15px;
    .list-element {
      i {
        color: #f9aa01;
        margin-right: 10px;
      }
    }
    .list-element:hover {
      color: #f9aa01;
      cursor: pointer;
    }
  }
  .lets-talk {
    background-color: #23172f;
    text-align: center;
    padding: 10px;
    margin-top: 30px;
  }
  .lets-talk:hover {
    cursor: pointer;
    color: #f9aa01;
  }
}
.item {
  float: left;
  position: relative;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item .text {
  position: absolute;
  right: 20px;
  bottom: 20px;
  text-align: right;
  color: white;
}

.prev {
  border-radius: 50%;
  position: absolute;
  left: 5%;
  bottom: 50%;
  transform: translate(-50%);
  cursor: pointer;
  z-index: 999;
  opacity: 0.3;
  display: none;
  i {
    font-size: 30px;
  }
}
.next {
  border-radius: 50%;
  position: absolute;
  left: 95%;
  bottom: 50%;
  transform: translate(-50%);
  cursor: pointer;
  z-index: 999;
  opacity: 0.3;
  display: none;
  i {
    font-size: 30px;
  }
}

.slider-wrapper:hover .prev,
.slider-wrapper:hover .next {
  display: block;
}
</style>
