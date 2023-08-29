const { app } = require('./src/app');
const { port } = require('./src/config/secrets');

app.listen(port, () => {
	console.log(`Server running on port http://localhost:${port}`);
});
