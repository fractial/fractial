module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans'],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
}