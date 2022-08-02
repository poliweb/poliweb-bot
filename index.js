require('dotenv').config()
const { Telegraf, Markup, Extra } = require('telegraf')



/**
 * Подключение токина
 */
const bot = new Telegraf(process.env.BOT_TOKEN)

// bot.use(Telegraf.log())


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
 bot.command('portfolio', async (ctx) => {
    await ctx.replyWithMarkdown(`
*Это моё портфолио*
✋ [PoliWeb on GitHub](https://github.com/poliweb)

Посетите страницу разрабочика на GitHub.
Вы там найдёте много интересного и полезного.
Получите подробную информацию о разрабочике этого чат-бота

`),
    await ctx.replyWithMediaGroup([
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1640408444/HadeBaner_hikeag.webp' },
            caption: 'Piped from URL 1',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,g_center,w_1000/v1639997472/screnshot1_woginx.webp' },
            caption: 'Piped from URL 2',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1640060314/poliweb-dev-to_tp9bpw.webp' },
            caption: 'Piped from URL 3',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1639997474/screnshot2_axudbj.webp' },
            caption: 'Piped from URL 4',
            type: 'photo'
        }
    ]),
    await ctx.reply('Это <b>Моё</b> супер портфолио!',
        {   parse_mode: 'HTML',
            ...Markup.inlineKeyboard([
                Markup.button.callback('Альбом', 'Albom1'),
                Markup.button.callback('Альбом 2', 'Albom2')
            ])
        }
        )
})


/**
 * Action
 */

//  Albom 1
bot.action('Albom1', async(ctx) => {
    await ctx.replyWithMediaGroup([
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
    ]),
    await ctx.reply(
        'Просмотри Альбом 2',
        Markup.inlineKeyboard([
            Markup.button.callback('Альбом 2', 'Albom2')
        ])
    )
})

//Albom 2
bot.action('Albom2', async (ctx) => {
    await ctx.replyWithMediaGroup([
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: 'https://picsum.photos/300/500/?random' },
            caption: 'Piped from URL',
            type: 'photo'
        },
    ]),
    await ctx.reply(
        'Просмотри Альбом 1',
        Markup.inlineKeyboard([
            Markup.button.callback('Альбом 1', 'Albom1')
        ])
    )
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


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))