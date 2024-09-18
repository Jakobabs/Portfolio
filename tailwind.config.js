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
      size: {
        '18': '4.5rem'
      },
      maxHeight: {
        '68': '17rem'
      },
      height: {
        '68': '17rem',
        '28r': '28rem'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#7480FF",
          "primary-content": "#050617",
          "secondary": "#A991F7",
          "secondary-content": "#0A0715",
          "accent": "#00CDB7",
          "accent-content": "#000F0C",
          "neutral": "#2A323C",
          "neutral-content": "#A6ADBB",
          "base-100": "#1D232A",
          "base-200": "#191E24",
          "base-300": "#15191E",
          "base-content": "#A6ADBB",
          "info": "#00B5FF",
          "info-content": "#000000",
          "success": "#00A96E",
          "success-content": "#000000",
          "warning": "#FFBE00",
          "warning-content": "#000000",
          "error": "#ff0000",
          "error-content": "#000000",
        }
      }
    ]
  }
}