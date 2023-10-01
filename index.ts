import { Telegraf } from 'telegraf'

const bot = new Telegraf(process.env.BOT_TOKEN as string)

const webapp = 'https://tg-webapp.omegasoft.keenetic.name/'

bot.command('start', async (ctx) => {
    await ctx.reply('Hello World!')
  })



bot.launch()
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))