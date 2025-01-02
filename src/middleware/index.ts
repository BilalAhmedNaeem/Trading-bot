import type { Telegraf } from "telegraf";
import type { BotContext } from "../types/index.js";

export function setupMiddleware(bot: Telegraf<BotContext>) {
  // Log all messages
  bot.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log("Response time: %sms", ms);
  });

  // Error handling
  bot.catch((err, ctx) => {
    console.error(`Error for ${ctx.updateType}`, err);
    ctx.reply("An error occurred while processing your request.");
  });
}
