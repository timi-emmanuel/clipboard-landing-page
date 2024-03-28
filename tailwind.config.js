/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
   container:{center:true},
   screens:{
     sm:'480px',
     md:'768px',
     lg:'976px',
     xl:'1440px',
   },

    extend: {
      fontFamily:{
        Bai:['Bai Jamjuree']
    },
    colors:{
      StrongCyan: 'hsl(171, 66%, 44%)',
      LightBlue: 'hsl(233, 100%, 69%)',
      DarkGrayishBlue: 'hsl(210, 10%, 33%)',
      GrayishBlue: 'hsl(201, 11%, 66%)',
  },
  },
  plugins: [],
}
}
