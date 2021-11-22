
module.exports = {
    name: 'delete',
    description: 'Delete a message',
    execute(message) {
        message.reply({content: 'Deleted!', ephemeral: true});
        message.message.delete();
    }
}