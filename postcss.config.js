const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./public/*.html"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/.]+/g) || []
});

module.exports = {
  plugins: [
    // require("postcss-import"),
    require("tailwindcss")("./src/assets/tailwind.config.js"),
    require("autoprefixer"),
    ...process.env.NODE_ENV === "build" ?
      [purgecss, require("cssnano")] : []
  ]
};
