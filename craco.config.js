module.exports = {
  style: {
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  },
  babel : {
    presets: ['@emotion/babel-preset-css-prop'],
  }
};