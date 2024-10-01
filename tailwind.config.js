/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}', './App.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['SVN-Nexa Rust Slab Black Shadow'],
        text: ['Nunito-Light'],
        payone: ['PaytoneOne-Regular'],
      },
      colors: {
        title_red: '#C71A1A',
        background_yellow: '#FFC900',
        border_brown: '#711F1F',
        text_red: '#AE0808',
        color_button_again: '#D86643',
        color_red_infor: '#880B0B',
        color_red_left: '#D91313',
        color_brown_left: '#9C6666',
        yellow_button: '#FFB906',
        gray: '#A09A9A',
      },
      borderRadius: {
        XVII: 17,
        XXI: 21,
        XIII: 13,
      },
      flex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
