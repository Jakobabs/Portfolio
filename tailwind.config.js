/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2.0',
        '300': '3.0'
      },
      maxHeight: {
        '68': '17rem'
      },
      height: {
        '68': '17rem',
        '30r': '30rem'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "dark"
    ]
  }
}