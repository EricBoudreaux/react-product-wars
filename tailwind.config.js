module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 6s linear infinite',
        'bounce-mid': 'bounce 3s linear infinite',
        'ping-slow': 'ping 6s alternate infinite',
      }
    },
  },
  plugins: [],
}