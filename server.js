const { dbConn } = require("./src/Config/db");
const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
dbConn();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
