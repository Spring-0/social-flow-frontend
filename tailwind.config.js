
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {

      animation: {
        blob: "blob 7s infinite"
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -30px) scale(1.3)",
          },
          "66%": {
            transform: "translate(-30px, 30px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        }
      },

      backgroundImage: {
        'paper-pattern': "linear-gradient(to bottom right, #101010, #292626), url('static/images/background.jpg')",
        'pink-purple-blue': 'linear-gradient(to right, #ff69b4, #8a2be2, #1e90ff)',
      }
    },
  },
  plugins: [],
}