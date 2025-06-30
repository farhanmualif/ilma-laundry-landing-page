// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        bounceIn: 'bounceIn 1s ease',
      },
      keyframes: {
        bounceIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.3)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
          '70%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // pastikan aktif
  },
}
