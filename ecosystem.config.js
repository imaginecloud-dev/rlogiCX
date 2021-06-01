module.exports = {
  apps : [{
   name: “app”,
   script: “./start.js”,
   env: {
      NODE_ENV: “prod”,
      PORT:8080,
      {YOUR_OTHER_VARIAVLES}
   }
  }]
}
