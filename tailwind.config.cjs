/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
        backgroundImage: {
            'paisagem': "url(/src/assets/paisagem.png)",
            'ceu': "url(/src/assets/ceu.jpg)",
            'lua': "url(/src/assets/lua.png)",
            'montanha': "url(/src/assets/montanhas.png)",
        },
    },
  },
  plugins: [],
}
