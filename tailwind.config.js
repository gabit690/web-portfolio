module.exports = {
  content: [
    './src/**/*.{html, js}',
    './src/**/dark-mode.component.ts',
    './src/**/menu.component.ts'
  ],
  theme: {
    fontFamily: {
      'serif': ['Georgia', 'serif'],
      'sans': ['Verdana', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
