import { Client, GatewayIntentBits } from 'discord.js';
import { connectToDatabase } from './database/postgres';
import { deployCommands } from './deploy-commands';
import { commands } from './commands';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.once('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}`);
    await connectToDatabase();
    await deployCommands();
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const command = commands.find(cmd => cmd.name === interaction.commandName);
    if (command) {
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

client.login(process.env.BOT_TOKEN);