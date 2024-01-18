import { reactive } from 'vue'

export const store = reactive ({
    products: [
        {
            name: "Wireless Mouse",
            price: 45.99,
            discounted: 22.50,
            rating: 3.8,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/01.jpg"
        },
        {
            name: "Mechanical Keyboard",
            price: 109.99,
            discounted: 78.25,
            rating: 4.1,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/02.jpg"
        },
        {
            name: "Gaming Monitor",
            price: 279.99,
            discounted: null,
            rating: 2.9,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/03.jpg"
        },
        {
            name: "RGB Gaming Chair",
            price: 199.99,
            discounted: 85.60,
            rating: 4.3,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/04.jpg"
        },
        {
            name: "Gaming Laptop",
            price: 1299.99,
            discounted: null,
            rating: 4.7,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/05.jpg"
        },
        {
            name: "Gaming Mouse Pad",
            price: 19.99,
            discounted: null,
            rating: 3.5,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/06.jpg"
        },
        {
            name: "Webcam with Microphone",
            price: 64.99,
            discounted: null,
            rating: 4.0,
            deal: true,
            tag: ["bestseller", "featured"],
            image: "../../../public/img/07.jpg"
        },
        {
            name: "External Hard Drive",
            price: 89.99,
            discounted: 45.50,
            rating: 4.5,
            deal: true,
            tag: ["bestseller", "featured"],
            image: "../../../public/img/08.jpg"
        },
        {
            name: "Gaming Desk",
            price: 179.99,
            discounted: 120.50,
            rating: 4.6,
            deal: true,
            tag: ["bestseller", "featured"],
            image: "../../../public/img/09.jpg"
        },
        {
            name: "Wireless Gaming Controller",
            price: 54.99,
            discounted: 50.50,
            rating: 4.2,
            deal: true,
            tag: ["bestseller", "featured"],
            image: "../../../public/img/10.jpg"
        },
        {
            name: "Gaming Headset",
            price: 89.99,
            discounted: 74.54,
            rating: 4.5,
            deal: true,
            tag: ["bestseller", "featured"],
            image: "../../../public/img/11.jpg"
        },
        {
            name: "Gaming Headset",
            price: 189.99,
            discounted: 127.44,
            rating: 4.5,
            deal: true,
            tag: ["bestseller", "featured"],
            image: "../../../public/img/12.jpg"
        },
        {
            name: "Gaming Headset",
            price: 112.99,
            discounted: 92.12,
            rating: 4.5,
            deal: true,
            tag: ["featured", "new arrival"],
            image: "../../../public/img/13.jpg"
        },
        {
            name: "Gaming Headset",
            price: 89.99,
            discounted: null,
            rating: 4.5,
            deal: true,
            tag: ["featured", "new arrival"],
            image: "../../../public/img/14.jpg"
        },
        {
            name: "Gaming Headset",
            price: 69.99,
            discounted: null,
            rating: 4.5,
            deal: true,
            tag: ["featured", "new arrival"],
            image: "../../../public/img/15.jpg"
        },
        {
            name: "Gaming Headset",
            price: 372.99,
            discounted: 140.12,
            rating: 4.5,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/16.jpg"
        },
        {
            name: "Gaming Headset",
            price: 89.99,
            discounted: null,
            rating: 4.5,
            deal: true,
            tag: ["new arrival", "bestseller"],
            image: "../../../public/img/17.jpg"
        },
        {
            name: "Gaming Headset",
            price: 89.99,
            discounted: null,
            rating: 4.5,
            deal: true,
            tag: ["featured", "new arrival"],
            image: "../../../public/img/18.jpg"
            
        },
    ],

});