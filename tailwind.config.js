/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        title: ["SVN-Nexa Rust Slab Black Shadow"],
        text:["Nunito-Light"],
        payone:["PaytoneOne-Regular"]
      },
      colors:{
        title_red:'#C71A1A',
        background_yellow: '#FFC900',
        border_brown: '#711F1F',
        text_red:'#AE0808'
      },
      borderRadius:{
        'XVII': 17,
        'XXI': 21,
        'XIII': 13,
      },
      flex:{
        '1': 1
      },
    },
  },
  plugins: [],
};
