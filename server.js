const app = require('./src/app');

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log('Server is running \uD83D\uDE80');
});
