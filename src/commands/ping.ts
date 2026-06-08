export const command = {
  name: 'ping',
  description: 'Responds with a ping message.',
  async execute(interaction) {
    const userMention = interaction.options.getUser('user')?.toString() || 'there';
    await interaction.reply(`I am Pinging ${userMention}.`);
  },
};