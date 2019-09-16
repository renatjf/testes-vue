module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/sass/_variables";
          @import "@/assets/sass/_mixins";
        `
      }
    }
  }
};