module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData:
          `
            @import "src/styles/app.scss";
          `,
      },
    },
  },
};
