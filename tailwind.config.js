const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
   content: ["./*.html"],
  theme: {
  
    screens: {
     xs:'280px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      
    },
    colors: {
      'white':"#FFFFFF",
      'yellow': '#FFDB0A',
      'blue': '#3D61B0',
      'black':"#141414",
      'gray': '#F6FAFC',
      'unnamed': '#333333',
      'red': '#FF6142',
      'navyblue': '#26458C',
    },
    fontSize: {
      'h1': ['44px', {
        lineHeight: '62px',
      }],
      'h3': ['34px', {
        lineHeight: '62px',
        
      }],
      'h4': ['24px', {
        lineHeight: '35px',
      }],
      'h5': ['18px', {
        lineHeight: '27px',
      }],
      'Body-text-nblue': ['16px', {
        lineHeight: '25px',
      }],
      'Body-text-black': ['16px', {
        lineHeight: '22px',
      }],
      'Body-text-white': ['16px', {
        lineHeight: '22px',
        'color':"ffff"
      }],
      'Body-text-nblack': ['16px', {
        lineHeight: '22px',
        colors:{
        'navyblue': '#26458C',
      }
      }],
      'Button-text-menu': ['15px', {
        lineHeight: '23px',
      }],
      '2xl': ['24px', {
        lineHeight: '-0.01em',
      }],
      // Or with a default line-height as well
      '3xl': ['32px', {
        lineHeight: '-0.02em',
        lineHeight: '40px',
      }],
    },
    extend: {
      fontFamily: {
        'PoppinsBold': [
          'Poppins-bold','sans-serif',   
        ],
        'PoppinsRegular': [
          'poppins-Regular','sans-serif',   
        ],
        'PoppinsMedium': [
          'Poppins-Medium','sans-serif',   
        ],
        'PoppinsSemibold': [
          'poppins-SemiBold','sans-serif',   
        ],
        
      },
     
      spacing: {
        '128': '32rem',
        '144': '36rem',
        36.5:"144px"
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
} 
