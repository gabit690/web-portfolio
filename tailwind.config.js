module.exports = {
  content: [
    './src/**/*.{html, js}',
    './src/**/dark-mode.component.ts',
    './src/**/menu.component.ts',
    './src/**/presentation.component.ts',
    './src/**/knowledge.component.ts'
  ],
  theme: {
    fontFamily: {
      'serif': ['Georgia', 'serif'],
      'sans': ['Verdana', 'sans-serif'],
      'mono': ['monospace']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
}
