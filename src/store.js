import { reactive } from 'vue'

export const store = reactive ({
    products: [
        {
            name: "Wireless Mouse",
            price: 45.99,
            discounted: 22.50,
            rating: 3.8,
            tag: "sale",
            image: "../../../public/img/01.jpg"
        },
        {
            name: "Mechanical Keyboard",
            price: 109.99,
            discounted: 78.25,
            rating: 4.1,
            tag: "bestseller",
            image: "../../../public/img/02.jpg"
        },
        {
            name: "Gaming Monitor",
            price: 279.99,
            discounted: null,
            rating: 2.9,
            tag: "featured",
            image: "../../../public/img/03.jpg"
        },
        {
            name: "RGB Gaming Chair",
            price: 199.99,
            discounted: 85.60,
            rating: 4.3,
            tag: "new arrival",
            image: "../../../public/img/04.jpg"
        },
        {
            name: "Gaming Laptop",
            price: 1299.99,
            discounted: null,
            rating: 4.7,
            tag: "featured",
            image: "../../../public/img/05.jpg"
        },
        {
            name: "Gaming Mouse Pad",
            price: 19.99,
            discounted: null,
            rating: 3.5,
            tag: "sale",
            image: "../../../public/img/06.jpg"
        },
        {
            name: "Webcam with Microphone",
            price: 64.99,
            discounted: null,
            rating: 4.0,
            tag: "featured",
            image: "../../../public/img/07.jpg"
        },
        {
            name: "External Hard Drive",
            price: 89.99,
            discounted: 45.00,
            rating: 4.5,
            tag: "bestseller",
            image: "../../../public/img/08.jpg"
        },
        {
            name: "Gaming Desk",
            price: 179.99,
            discounted: 90.00,
            rating: 4.6,
            tag: "new arrival",
            image: "../../../public/img/09.jpg"
        },
        {
            name: "Wireless Gaming Controller",
            price: 54.99,
            discounted: 27.50,
            rating: 4.2,
            tag: "featured",
            image: "../../../public/img/10.jpg"
        },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "featured",
                image: "../../../public/img/11.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "featured",
                image: "../../../public/img/12.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                rating: 4.5,
                tag: "featured",
                image: "../../../public/img/13.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "featured",
                image: "../../../public/img/14.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "featured",
                image: "../../../public/img/15.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "new arrival",
                image: "../../../public/img/16.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "featured",
                image: "../../../public/img/17.jpg"
            },
            {
                name: "Gaming Headset",
                price: 89.99,
                discounted: 50.00,
                rating: 4.5,
                tag: "new arrival",
                image: "../../../public/img/18.jpg"
            },
    ],

});