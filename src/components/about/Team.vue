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
          text: 'Manager',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s1-2-1-600x600_t.jpg'
        },
        {
          name: 'Monic Marty',
          text: 'Assistent',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s2-2-1-600x600_t.jpg'
        },
        {
          name: 'Vilorano Jeo',
          text: 'Designer',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s3-2-1-600x600_t.jpg'
        },
        {
          name: 'Mark Marley',
          text: 'CEO',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s5-2-1-600x600_t.jpg'
        },
        {
          name: 'Lily Anderson',
          text: 'Manager',
          img: 'https://capricathemes.com/wordpress/WCM04/WCM040086/wp-content/uploads/2019/06/s4-2-1-600x600_t.jpg'
        }
      ]
    }
  },

  methods: {
    toggleSlide() {
      this.activeIndex = 1 - this.activeIndex
    },
    prevSlide() {
      this.toggleSlide()
    },
    nextSlide() {
      this.toggleSlide()
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="team text-center">
      <h3>Our Team Member</h3>
      <p class="pb-4">
        Meet the many faces that help power the Elegant Themes community
      </p>
    </div>

    <div class="carousel-container">
      <div class="swag">
        <div
          class="carousel"
          :style="{
            transform: `translateX(-${activeIndex * (100 / visibleSlides)}%)`
          }"
        >
          <div
            class="item-carousel"
            v-for="(staff, index) in Team"
            :key="index"
          >
            <div class="staff-card">
              <img :src="staff.img" class="d-block" alt="..." />
              <div class="card-body">
                <h6 class="card-title d-inline">{{ staff.name }}</h6>
                <span class="">({{ staff.text }})</span>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next" @click="prevSlide"></div>
      <div class="prev" @click="nextSlide"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/styles/partials/_variables.scss' as *;
@use 'src/styles/partials/_mixins.scss' as *;
.container {
  padding-bottom: 30px;
  .team {
    p {
      position: relative;
    }
    p::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 5%;
      height: 2px;
      background-color: #f9aa01;
    }
  }
  .carousel-container {
    overflow: hidden;

    position: relative;

    .carousel {
      display: flex;
      transition: transform 0.5s ease;

      .item-carousel {
        flex: 0 0 25%;
        padding-right: 30px;
        margin-right: 0;
        display: block;
        .staff-card {
          img {
            width: 100%;
          }
          .card-body {
            margin-top: 20px;

            span {
              margin-left: 10px;
              font-weight: 300;
              font-style: oblique;
            }
            p {
              color: #747276;
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
  .next,
  .prev {
    width: 30px;
    height: 30px;
    background-image: url(../../../public/img/arrow.png);
    position: absolute;
    top: 40%;
    transform: translate(-50%, -50%);
    transition: all 300ms ease;
  }
  .next {
    background-position: -59% 100%;
    right: 0;
    &:hover {
      background-image: url(../../../public/img/arrow.png);
      background-position: 100% 0%;
    }
  }
}
.prev {
  background-position: 0% 100%;
  left: 2%;

  &:hover {
    background-image: url(../../../public/img/arrow.png);
    background-position: 0% 0%;
  }
}
</style>
