<script>
export default {
    name: 'AppFooter'
}

</script>

<template>

    <div class="container">
        <div class="info">

            <div class="col-address">
                <h5>Address Info</h5>
                <div><i class="fa-solid fa-location-dot"></i> 60 29th Street San Francisco, CA 94110 507-Union Trade Center, United States of America </div>
                <div><i class="fa-solid fa-phone"></i> (+00) 123-456-789 </div>
                <div><i class="fa-solid fa-envelope"></i> demo@example.com</div>
            </div>

            <div class="col">
                <h5>Information</h5>
                <div> Bookmark </div>
                <div> Features </div>
                <div> Sitemap </div>
                <div> Lists </div>
                <div> Contact Us </div>
            </div>

            <div class="col">
                <h5> Extras </h5>
                <div> Delivery </div>
                <div> Cart </div>
                <div> Terms condition </div>
                <div> My account </div>
                <div> About us </div>
            </div>

            <div class="col">
                <h5> Our Newsletter </h5>
                <div> There are many variations of passages of form humour or randomised </div>
                <input type="email" >
                <button> <i class="fa-regular fa-paper-plane"></i> </button> 
                <div class="social-icon">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                    <i class="fa-brands fa-skype"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
                <div class="copyright"> Copyright © 2024 Codezeel </div>
                <div class="pay-card">
                    <div class="card1"></div>
                    <div class="card2"></div>
                    <div class="card3"></div>
                    <div class="card4"></div>
                </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.container {
    width: 100%;
    height: 500px;
    color: #bfbfbf;
    padding: 0 80px;
    background-image: url(../../public/img/footer-bg.png);
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .info {
        width: 100%;
        display: flex;
        // padding: 0 80px;
        padding-top: 150px;

        h5 {
                color: white;
                font-size: 18px;
                padding-bottom: 20px;
            }

        div {
            padding-bottom: 5px;
        }

        .col-address {
            width: 26%;
            padding: 0 15px 0;
            color: #bfbfbf;
            font-size: 14px;

            i {
                padding-right: 10px;
                color:  #f9aa01;
            }
        }
       
        .col {
            padding: 0 15px 0;
            color: #bfbfbf;
            font-size: 14px;

            input {
                width: 87%;
                margin-top: 15px;
            }

           .social-icon {

                i {
                    padding-right: 20px;
                    font-size: 17px;
                    padding-top: 20px;
                    color: white;
                }
           }
        }
    }

   .footer-bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #515772;
        padding: 20px;

        .copyright {
            color: #bfbfbf;
            font-size: 14px;
        }

        .pay-card {
            width: 180px;
            background-image: url(../../public/img/payments.png);
        
            background-position-y:  50%;
        }
   }
   

}
</style>