require('dotenv').config()
const { Telegraf, Markup, Extra } = require('telegraf')



/**
 * Подключение токина
 */
const bot = new Telegraf(process.env.BOT_TOKEN)




/**
 * Commands for bot
 */


// console.log(Markup.inlineKeyboard)
// console.log(Telegraf)

/**
 * Command Start
 */

 bot.command('start', (ctx) => {
    return [
        ctx.replyWithHTML(`
<b>✋ Привет!</b>
<i>Жми на меню возле строки для вода текста и получи информацию о PoliWeb Developer</i>

<i>Или воспользуйся быстрыми командами для общения с чат-ботом</i>

| Страница старта - /start
| Портфолио - /portfolio
| Кто Я - /about
| Контакты - /contact
| Помощь - /help

<b>Мне нравится</b> следить за быстрым развитием <b>ИТ-технологий</b>, оставаться в курсе событий и каждый день улучшать свои профессиональные навыки веб-разработки.

<b>Фрагмент кода на JS для этого чат-бота</b>
Моя философия  - <i>обучение на протяжении всей жизни</i>
<code>
bot.command('help', (ctx) => {
    return ctx.reply('Это help')
})
</code>
    `),
    ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/v1659345878/PoliWebStartUpScvear_ax3px5.webp'}),
]
})

/**
 * Command Help
*/
bot.command('help', (ctx) => {
    return [
        ctx.reply('Это help'),

    ]
})
bot.command('contact', (ctx) => {
    return ctx.reply('Это contact')
})
bot.command('about', (ctx) => {
    return ctx.reply('Это About')
})

/**
 * Command Portfolio
 */
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
        ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,g_center,w_1000/v1639997472/screnshot1_woginx.webp'}, Markup.keyboard([['Альбом 1', 'кнопка 2'], ['кнопка 3', 'кнопка 4']]).oneTime().resize()),

    ]
})

/**
 * /FotoNext1
 */
bot.hears('Альбом 1', (ctx) => {
    return  [
        ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/v1659335486/PoliWebStartUp_vugrpm.webp'}),
        ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1640060314/poliweb-dev-to_tp9bpw.webp'})
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