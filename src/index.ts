import { Telegraf } from 'telegraf';
import { BOT_TOKEN } from './config.js';
import { setupCommands } from './commands/index.js';
import { setupMiddleware } from './middleware/index.js';
import type { BotContext } from './types/index.js';

async function startBot() {
  try {
    const bot = new Telegraf<BotContext>(BOT_TOKEN);

    // Setup middleware
    setupMiddleware(bot);

    // Setup commands
    setupCommands(bot);

    // Start bot
    await bot.launch();
    console.log('Bot started successfully! 🚀');

    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
  } catch (error) {
    console.error('Failed to start bot:', error);
    process.exit(1);
  }
}

startBot();