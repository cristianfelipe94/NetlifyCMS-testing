const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Felipe\\Desktop\\atana-fe\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Felipe\\Desktop\\atana-fe\\src\\pages\\index.js")))
}

