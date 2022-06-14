const path = require("path")

const resolve = (dir) => path.resolve(__dirname, dir) 

module.exports = {
//   plugins: [
//     {
//       plugin: CracoAntDesignPlugin,
//       options: {
//         source: "tsconfig",
// 　　　　　baseUrl: "./src",
// 　　　　　tsConfigPath: "./tsconfig.extend.json",
//         customizeTheme: {
//           '@primary-color': '#5b5bea'
//         },
//       },
//     },
  // ],
  webpack: {
    alias: {
      '@': resolve("src")
    }
  }
}