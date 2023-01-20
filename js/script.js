// VUE JS
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        message: "Hello VueJs",
        myImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--I4FWon9Y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ll22z8mea106b4vjdjy7.jpeg',
      }
    },
    methods:{

    }
  }).mount('#app')
