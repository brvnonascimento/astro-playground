export default {
  plugins: {
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
        "custom-media-queries": true,
      },
    },
    "postcss-subgrid": {
      ieHack: false,
    },
  },
};
