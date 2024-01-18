<script>
import WhyUs from '../components/about/WhyUs.vue'
import Team from '../components/about/Team.vue'
import BrandsProducts from '../components/reusable/BrandsProducts.vue'

export default {
  name: 'About',
  components: {
    WhyUs,
    Team,
    BrandsProducts
  },
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
      ]
    }
  }
}
</script>

<template>
  <section class="container-fluid pt-2" id="About-us">
    <WhyUs />

    <!-- SEZIONE HISTORY -->
    <div class="history container text-center mt-5">
      <h2 class="pb-4">Codezeel History</h2>
      <div class="row mt-5">
        <div class="col-lg-4" v-for="(card, i) in cards" :key="i">
          <div class="cards d-flex flex-column align-items-center gap-3">
            <div class="icon">
              <i :class="card.icon"></i>
            </div>
            <span>{{ card.title }}</span>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- banner -->
    <div class="container counter my-5">
      <div class="row">
        <div class="col-lg-3">
          <h2 class="num">50</h2>
          <span class="txt">Hours Per Week</span>
        </div>
        <div class="col-lg-3">
          <h2 class="num">25,025</h2>
          <span class="txt">Line of code</span>
        </div>
        <div class="col-lg-3">
          <h2 class="num">980</h2>
          <span class="txt">Projects Completed</span>
        </div>
        <div class="col-lg-3 border-end-0">
          <h2 class="num">334</h2>
          <span class="txt">Shots On Dribble</span>
        </div>
      </div>
    </div>
    <Team />
    <BrandsProducts/>
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

  .history {
    h2 {
      position: relative;
    }
    h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 5%;
      height: 2px;
      background-color: #f9aa01;
    }
    .cards {
      i {
        font-size: 30px;
        width: 60px;
        height: 60px;
        color: #000000;
        background-color: #f9aa01;
        border-radius: 50%;
        line-height: 60px;
        display: inline-block;
        margin-bottom: 10px;
        transition: transform 0.2s;
      }
      span {
        font-weight: bold;
      }
      p {
        color: #747276;
      }
    }
    .cards:hover i {
      transform: scale(1.2);
    }
  }
  .counter {
    background-color: #170f1f;
    .row {
      padding: 50px;
      div {
        border-right: solid 1px #241b2e;
        text-align: center;
      }

      span {
        color: #777777;
      }
    }
  }
}
</style>
