import './boostrap';
import app from './app';

app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () => {
	// eslint-disable-next-line
	console.log(`Express running → PORT ${server.address().port}`);
});
