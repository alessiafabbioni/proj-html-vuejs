<script>
export default {
  name: 'Team',
  data() {
    return {
      visibleSlides: 5,
      activeIndex: 1,
      Team: [
        {
          name: 'Nemo Enim',
          text: '.',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s1-2-1-600x600_t.jpg'
        },
        {
          name: 'Outstanding Support',
          text: '.',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s2-2-1-600x600_t.jpg'
        },
        {
          name: 'Simply Beautiful',
          text: '.',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s3-2-1-600x600_t.jpg'
        },
        {
          name: 'Careful Crafted',
          text: '.',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s5-2-1-600x600_t.jpg'
        },
        {
          name: 'WP Video Training',
          text: '.',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s4-2-1-600x600_t.jpg'
        }
      ]
    }
  },

  methods: {
    prevSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.Team.length) % this.Team.length
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.Team.length
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="team text-center">
      <h3>Our Team Member</h3>
      <p>Meet the many faces that help power the Elegant Themes community</p>
    </div>
    <div class="carousel-container">
      <div
        class="carousel"
        :style="{
          transform: `translateX(-${activeIndex * (100 / visibleSlides)}%)`
        }"
      >
        <div class="item-carousel" v-for="(staff, index) in Team" :key="index">
          <div class="staff-card">
            <img :src="staff.img" class="d-block" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ staff.name }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" @click="prevSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;
.carousel-container {
  overflow: hidden;
  position: relative;
  .staff-card {
    img {
      width: 100%;
    }
  }
  .carousel {
    display: flex;
    transition: transform 0.5s ease;

    .item-carousel {
      flex: 0 0 25%;
      padding-right: 30px;
      margin-right: 0;
      display: block;
    }
  }
}
</style>
