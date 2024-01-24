/** @type {import('next').NextConfig} */

const nextConfig = {
  env:{
    ISDEV : process.env.ISDEV
  },
  sassOptions: {
    additionalData: `@import "src/styles/mixins.scss";`,
  },
}

module.exports = nextConfig
