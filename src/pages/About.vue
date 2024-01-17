<script>
export default {
  name: 'About',
  data() {
    return {
      activeCard: 0,
      cards: [
        {
          title: 'Easy To Use',
          text: 'We’ve put a lot of thought in giving you the best possible experience to make your job easier.',
          icon: 'fa-solid fa-earth-europe'
        },
        {
          title: 'Outstanding Support',
          text: 'Modules comes fully documented with step by step instructions. access premium support forum.',
          icon: 'fa-solid fa-comments'
        },
        {
          title: 'Simply Beautiful',
          text: 'Our themes are not just nicely coded, they are built to show your visitors how much you care for beauty and for design.',
          icon: 'fa-regular fa-heart'
        },
        {
          title: 'Careful Crafted',
          text: 'Coded with WordPress best practices in mind, Modules will give you an amazing looking site easier.',
          icon: 'fa-solid fa-cube'
        },
        {
          title: '20+ Bulilder Module',
          text: 'Create as many modules as you want. Personalize them and build with them your pages.',
          icon: 'service-icon fa fa-th'
        },
        {
          title: 'WP Video Training',
          text: 'Enjoy a comprehensive collection of WordPress 101 video tutorials on our membership training area.',
          icon: 'fa-regular fa-circle-play'
        }
      ],
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
  <section class="container-fluid pt-2" id="About-us">
    <!--  WHY CHOOSE US -->
    <div class="container why-us">
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
        <div class="col-lg-6">
          <h5>Why choose us</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            velit! Dolorem, minima sapiente. Alias omnis in nesciunt, molestias
            optio voluptatibus aliquam labore, error officiis, corrupti commodi
            eaque a nemo ex? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corrupti qui quo nemo. Voluptatibus, aliquam similique cumque
            alias at, doloremque maiores ipsum obcaecati quos sit, eligendi
            animi magnam nisi rerum magni!
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

    <!-- SEZIONE HISTORY -->
    <div class="history text-center mt-5">
      <h2>Codezeel History</h2>
      <div class="row">
        <div class="col-lg-4" v-for="(card, i) in cards" :key="i">
          <div class="cardz">
            <div class="icon">
              <i :class="card.icon"></i>
            </div>
            <span>{{ card.title }}</span>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- TEAM -->
    <div class="team text-center">
      <h3>Our Team Member</h3>
      <p>Meet the many faces that help power the Elegant Themes community</p>
    </div>
    <div class="row">
      <div class="col"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;
#About-us {
  background-image: url('public/img/body-bg.jpg');
  // height: 800px;
  padding-bottom: 30px;
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
}
</style>
