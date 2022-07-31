require('dotenv').config()
const { Telegraf } = require('telegraf')



/**
 * Подключение токина
 */
const bot = new Telegraf(process.env.BOT_TOKEN)




/**
 * Commands for bot
 */
bot.command('start', (ctx) => {
    return ctx.replyWithHTML('Это старт')
  })
bot.command('help', (ctx) => {
    return ctx.reply('Это help')
})
bot.command('contact', (ctx) => {
    return ctx.reply('Это Контакт')
})
bot.command('about', (ctx) => {
    return ctx.reply('Это About')
})


bot.command('portfolio', (ctx) => {
    return [
        ctx.replyWithMarkdown(`
*Это моё портфолио*
✋ [PoliWeb on GitHub](https://github.com/poliweb)

Посетите страницу разрабочика на GitHub.
Вы там найдёте много интересного и полезного.
Получите подробную информацию о разрабочике этого чат-бота

`),
        ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1640408444/HadeBaner_hikeag.webp'}),
        ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,g_center,w_1000/v1639997472/screnshot1_woginx.webp'})
    ]
})


/**
 * Start bot
 * Бот обрабатывает пакет обновлений
 */
bot.launch().then(() => {
    console.log('BOT_TOKEN: OK 👍')
    console.log('Run Bot. Бот запушен и работает 👍')
}).catch((err) => {
    console.log('Опс!!! Ошибка!!! ', err)
})