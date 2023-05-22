const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "D0fl5yQybyxpib6mxdaC",
    host: "containers-us-west-93.railway.app",
    port: 5476,
    database: "railway"
});

module.exports = pool; 