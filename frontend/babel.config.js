
module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            chrome: '80',
            node: '14'
          }
        }
      }
    ]
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false
      }
    ]
  ]
};