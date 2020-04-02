export const parameters = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#fffff",
          blur: 5
        }
      },
        number: {
          value: 200,
      }
    },
    interactivity:{
      detect_on:"canvas",
      events:{
         onhover:{
            enable:true,
            mode:"repulse"
         },
         onclick:{
            enable:true,
            mode:"push"
         }
        }
  }
  }