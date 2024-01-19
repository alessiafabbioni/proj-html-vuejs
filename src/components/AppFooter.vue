<script>
export default {
  name: 'AppFooter'
}
</script>

<template>

    <div class="container-fluid">
        <div class="container">
            

            <div class="info">
                <div class="row">

                    <div class="col-lg-4 col-md-4 col-sm-6 address">
                        <h5>Address Info</h5>
                        <div><i class="fa-solid fa-location-dot"></i> <span> 60 29th Street San Francisco, CA 94110 507-Union Trade Center, United States of America </span></div>
                        <div><i class="fa-solid fa-phone"></i> (+00) 123-456-789 </div>
                        <div class="y"><i class="fa-solid fa-envelope"></i> demo@example.com</div>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-6 i">
                        <h5>Information</h5>
                        <div class="y"> Bookmark </div>
                        <div class="y"> Features </div>
                        <div class="y"> Sitemap </div>
                        <div class="y"> Lists </div>
                        <div class="y"> Contact Us </div>
                    </div>

                    <div class="col-lg-2 col-md-2 col-sm-6 i">
                        <h5> Extras </h5>
                        <div class="y"> Delivery </div>
                        <div class="y"> Cart </div>
                        <div class="y"> Terms condition </div>
                        <div class="y"> My account </div>
                        <div class="y"> About us </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 i">
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
            </div>

                <div class="footer-bottom">
                        <div class="copyright"> Copyright © 2024 Codezeel </div>
                        <div class="pay-card">
                            <div class="card1"></div>
                            <div class="card2"></div>
                            <div class="card3"></div>
                            <div class="card4"></div>
                            <div class="card5"></div>
                        </div>
                </div>

                
            
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.container-fluid {
    width: 100%;
    height: 480px;
    color: #bfbfbf;
    background-image: url(../../public/img/footer-bg.png);
    background-size: cover;
    color: white;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

    }

        .info {
            width: 100%;
            padding-bottom: 110px;
            overflow-y: auto;

            h5 {
                    color: white;
                    font-size: 18px;
                    padding-bottom: 20px;
                }

            div {
                padding-bottom: 5px;
            }

            .address {
                color: #bfbfbf;
                font-size: 16px;

                div {
                    padding-top: 10px;
                }

                i {
                    padding-right: 10px;
                    color:  #f9aa01;
                }
            }
        
            .i {
                color: #bfbfbf;
                font-size: 16px;

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
            height: 55px;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #515772;
            padding: 20px;

            .copyright {
                color: #bfbfbf;
                font-size: 14px;
            }
    }

    .y:hover {
                    cursor: pointer;
                    color: #f9aa01;
                }
    
}

.pay-card {

    display: flex;
    justify-content: center;
    width: 250px;
    height: 25px;
   
            
    
   .card1, .card2, .card3, .card4, .card5 {
        width: 40px;
        height: 25px;
        margin-right: 10px;
   }

    .card1 {
        background-image: url('../../public/img/payments.png');
        background-position: 0% 60%;
    }

    .card2 {
        background-image: url("../../public/img/payments.png");
        background-position: 0% 50%;
    }

    .card3 {
        background-image: url("../../public/img/payments.png");
        background-position: 0% 10%;
    }

    .card4 {
        background-image: url("../../public/img/payments.png");
        background-position: 0% 30%;
    }

    .card5 {
        background-image: url("../../public/img/payments.png");
        background-position: 0% 80%;
    }
}


</style>

