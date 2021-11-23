
module.exports = {
    ids: ['delBtn'],
    execute(message) {
        message.reply({content: 'Deleted!', ephemeral: true});
        message.message.delete();
    }
}