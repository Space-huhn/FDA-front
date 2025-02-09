// config.js
const {getCookie} = require("cookies-next");
const location = getCookie("NEXT_LOCALE")

const pathsConfig ={
  paths: {
    home: '/',
    about: `/${location}/about`,
    contact: `/${location}/contact`,
    login: `/${location}/login`,
    // Add more paths as needed
  },
}

module.exports = pathsConfig;