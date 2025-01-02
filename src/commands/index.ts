import type { Telegraf } from "telegraf";
import type { BotContext } from "../types/index.js";

export function setupCommands(bot: Telegraf<BotContext>) {
  bot.command("start", async (ctx) => {
    await ctx.reply(
      `Welcome to the Crypto Bot! 🚀

        Available commands:
        /start - Show this message
        /help - Show help information
        /status - Check bot status`
    );
  });

  bot.command("help", async (ctx) => {
    await ctx.reply(`
      Crypto Bot Help 💡
      
      This bot will help you manage crypto transactions.

      More features coming soon!`
    );
  });

  bot.command("status", async (ctx) => {
    await ctx.reply("Bot is operational ✅");
  });
}
