const presets = [
  [
    "@babel/env",
    {
      targets: { browsers: ["last 2 versions", ">= 5% in KR"] }
    }
  ],
  ["@babel/preset-react"],
  ["@babel/preset-typescript"]
];

module.exports = { presets };
