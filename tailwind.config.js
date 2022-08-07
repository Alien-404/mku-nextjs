module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        prime: '#3740CA',
        secondary: '#EFFFFD',
        good: '#8BDB81',
        moderate: '#FFE162',
        unhealthy: '#FF6464',
        very_unhealthy: '#a070b6',
        dangerous: '#a06a7b',
      },
      fontFamily: {
        sora: 'Sora',
        nunito: 'Nunito',
        manrope: 'Manrope',
      },
    },
  },
  plugins: [],
};
