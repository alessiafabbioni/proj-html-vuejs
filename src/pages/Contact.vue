<script>
export default {
    name: 'Contact'
}

</script>

<template>


    <div class="container-fluid">
        <div class="container">

            <!-- la seziona con la mappa -->
            <div class="row">
                <div class="col">
                    <div class="breadc">
                        <a href="#"> Home </a>
                        <span>»</span>
                        <span> Contact Us </span>
                    </div>
                </div>
                <div class="col">
                    <div class="title-section">
                        Contact Us
                    </div>
                </div>
            </div>

            <div class="map_wraper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9582524048187!2d-122.42377728432723!3d37.744123621694605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e42e1b683a9%3A0x225f82d9da5726a2!2s60+29th+St+%23343%2C+San+Francisco%2C+CA+94110%2C+USA!5e0!3m2!1sen!2sin!4v1501570738622" width="100%" height="450" frameborder="0" style="border: 0px; pointer-events: none;" allowfullscreen=""></iframe>
            </div>

            <!-- sezione con il form -->
            <div class="form">

                <div class="form">
                    <div class="title-form">
                        <h3 class="title">Contact Us</h3>
                        <div class="subtitle"> Get in touch with us for inquiries or business proposals.we'll get back to you! </div>
                        <div class="y-line"></div>
                    </div>
                    <div class="form-input">
                        <div class="descr-input"> Subject </div>
                        <input type="text" >
                    </div>
                    <div class="form-input">
                        <div class="descr-input"> Your Name (required) </div>
                        <input type="text" >
                    </div>
                    <div class="form-input">
                        <div class="descr-input"> Your Email (required) </div>
                        <input type="text" >
                    </div>
                    <div class="form-input">
                        <div class="descr-input"> Your Message </div>
                        <textarea class="textarea" name="your-message" id="" cols="30" rows="8"></textarea>
                    </div>
                    <div class="btn">
                        <input class="btn-send" type="submit" value="Send">
                    </div>
                </div>
            </div>

            <!-- sezione di altre info -->
            <div class="other-info">
                <div class="title-oi"> Codezeel Web Service Pvt. Ltd. </div>
                <div class="descr-oi"> We possess within us two minds. So far I have written only of the conscious mind. I would now like to introduce you to your second mind, the hidden and mysterious subconscious. Our subconscious mind contains such power and complexity that it literally staggers the imagination. </div>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.container-fluid {
    background-image: url(../../public/img/body-bg.jpg);
    color: white;
}

.breadc, .title-section {
    padding: 50px 10px;
}

.breadc {
    font-size: 18px;

    a {
        color: white;
        text-decoration: none;
    }
}

.title-section {
    font-size: 25px;
}

.title-section {
    text-align: right;
}

.form {
    width: 100%;
    padding: 10px;
    background-color: #170f1f;
    margin: 50px 10px;

    .title-form {
    width: 100%;
    text-align: center;
    padding-bottom: 30px;

        .y-line {
            border-bottom: 2px solid #f9aa01;
            width: 54px;
            margin: 0 auto;
            padding: 10px 0;
        }
    }

    .form-input {
        padding-bottom: 20px;
        color: #878787;

        input, .textarea {
        width: 100%;
        border: 1px solid #342c3d;
        background: #170f1f;
        padding: 8px 10px;
        color: white;
        margin-top: 5px;
        }

    }

    .btn-send {
        border: none;
        width: auto;
        padding: 10px 30px;
        background-color: #23172f;
        color: #FFFFFF;
        text-decoration: none;
    }

    .title-oi {
        font-size: 14px;
    }

    .descr-oi {
        font-size: 10px;
        color: #878787;
       
    }
   

}




</style>