module.exports = {
  // Other webpack configurations like entry, output, etc., should be here as well
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // Injects CSS into the DOM
          { loader: 'css-loader', options: { importLoaders: 1 } }, // Processes @import and url() like import/require()
          'postcss-loader', // Process CSS with PostCSS
        ],
      },
      // Other rules can go here
    ],
  },
  // Other configurations like plugins can go here
};
