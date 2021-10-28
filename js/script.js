"use strict"

Vue.config.devtools = true;

const myVue = new Vue({
    el: "#vueInput",
    data: {
        username: "Spider-Man",
        h1Style: "title_text",
        h1Title: "Benvenuto utente! (Scritta fatta con Vue)",
        imgStyle: "image",
        imgUrl: "https://www.smartworld.it/wp-content/uploads/2021/07/spider-man.jpg",
        imgAlt: "Spider-Man image"
    }
})