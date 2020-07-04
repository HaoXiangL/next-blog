// module.exports = {
//   plugins: [
//     'tailwindcss',
//     'postcss-flexbugs-fixes',
//     'autoprefixer',
//     [
//       'postcss-preset-env',
//       {
//         autoprefixer: {
//           flexbox: 'no-2009'
//         },
//         stage: 3,
//         features: {
//           'custom-properties': false
//         }
//       }
//     ]
//   ]
// }

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === 'production'
//       ? {
//           '@fullhuman/postcss-purgecss': {
//             content: [
//               './components/**/*.js',
//               './pages/**/*.js'
//             ],
//             defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
//           }
//         }
//       : {})
//   }
// };

const tailwind = require('tailwindcss')
module.exports = {
  plugins: [
    require('postcss-easy-import'),
    tailwind('./tailwind.config.js'),
    require('autoprefixer')
  ]
}