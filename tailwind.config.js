/*
 * @Author: Neo Holk
 * @Date: 2020-06-23 17:49:25
 * @LastEditors: Neo Holk
 * @LastEditTime: 2021-04-27 14:42:05
 * @Description:
 */
module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/posts/**.js",
    "./component/**.js",
  ],
  theme: {
    fontFamily: {
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  // ...
};
