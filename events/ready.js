module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        console.log(`${client.user.tag} is now Horsting!`);
		client.user.setActivity({name: 'Horst', type: 'PLAYING'});
		// every 60 seconds set the status to prevent bot from loosing status
		setInterval(() => {
			client.user.setActivity({name: 'Horst', type: 'PLAYING'});
		}, 60000);
	},
};