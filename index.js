require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')



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

 bot.command('start', async (ctx) => {
    return [
        await ctx.replyWithHTML(`
<b>✋ Привет!</b>
<i>Жми на меню возле строки для вода текста и получи информацию о PoliWeb Developer</i>

<i>Или воспользуйся быстрыми командами для общения с чат-ботом</i>

| ⭐ | Страница старта - /start
| 📸 | Портфолио - /portfolio
| 🎅 | Кто Я - /about
| 📩 | Контакты - /contact
| ❓ | Помощь - /help

<b>Мне нравится</b> следить за быстрым развитием <b>ИТ-технологий</b>, оставаться в курсе событий и каждый день улучшать свои профессиональные навыки веб-разработки.

<b>Фрагмент кода на JS для этого чат-бота</b>
Моя философия  - <i>обучение на протяжении всей жизни</i>
<code>
bot.command('start', (ctx) => {
    return [
        ctx.replyWithHTML('✋ Привет!')
    ]
})
</code>
    `),
    await ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/v1659345878/PoliWebStartUpScvear_ax3px5.webp'}, 
    {caption: 'Логотип PoliWeb и илюстрация SVG - формат'}),
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
*📸  Это моё портфолио*

В портфолио подобраны графические фрагменты сайтов.

_Посетите страницу разрабочика на GitHub
Вы там найдёте много интересного и полезного.
Получите подробную информацию о разработчике этого чат-бота._

✋ [PoliWeb on GitHub](https://github.com/poliweb)

`),
    await ctx.replyWithMediaGroup([
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659491161/Portfolio/slade_7_hfdov0.webp' },
            caption: 'Слайд 1',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659491158/Portfolio/slade_5_t8yznw.webp' },
            caption: 'Слайд 2',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659491298/Portfolio/slade_8_zjghsg.webp' },
            caption: 'Слайд 3',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659491158/Portfolio/slade_6_n8yjbh.webp' },
            caption: 'Слайд 4',
            type: 'photo'
        }
    ]),
    await ctx.reply('Это <b>Моё</b>супер портфолио! Просмотри дополнительные Альбом 1 и Альбом 2',
        {   parse_mode: 'HTML',
            ...Markup.inlineKeyboard([
                Markup.button.callback('Альбом 1', 'Albom_1'),
                Markup.button.callback('Альбом 2', 'Albom_2')
            ])
        }
        )
})


/**
 * Action
 */

//  Albom 1
bot.action('Albom_1', async(ctx) => {
    await ctx.replyWithMediaGroup([
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659487339/Portfolio/mars_3_pydzo2.webp' },
            caption: 'My Mars Expedition 1',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659486719/Portfolio/mars_1_du0jzm.webp' },
            caption: 'My Mars Expedition 2',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659486716/Portfolio/mars_2_de3qea.webp' },
            caption: 'My Mars Expedition 3',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659487342/Portfolio/mars_4_koumbw.webp' },
            caption: 'My Mars Expedition 4',
            type: 'photo'
        },
    ]),
    await ctx.reply(
        'Просмотри Альбом 2',
        Markup.inlineKeyboard([
            Markup.button.callback('Альбом 2', 'Albom_2')
        ])
    )
})

//Albom 2
bot.action('Albom_2', async (ctx) => {
    await ctx.replyWithMarkdown(`Альбом *Протатип сайта*`)
    await ctx.replyWithMediaGroup([
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659488383/Portfolio/site_1_rfkea6.webp' },
            caption: 'Протатип сайт лендинг',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659488713/Portfolio/site_2_xmcmi2.webp' },
            caption: 'Протатип сайт лендинг 2',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659490041/Portfolio/site_3_spby9b.webp' },
            caption: 'Протатип сайт Модели 1',
            type: 'photo'
        },
        {
            media: { url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659490044/Portfolio/site_7_kbyzdd.webp' },
            caption: 'Протатип сайт Модели 2',
            type: 'photo'
        },
    ]),
    await ctx.reply(
        'Просмотри Альбом 1',
        Markup.inlineKeyboard([
            Markup.button.callback('Альбом 1', 'Albom_1')
        ])
    )
})


/**
 * Test Code
 */
//  bot.command('pyramid', (ctx) => {
//     return ctx.reply(
//       'Keyboard wrap',
//       Markup.keyboard(['one', 'two', 'three', 'four', 'five', 'six', 'Albom_1'], {
//         wrap: (btn, index, currentRow) => currentRow.length >= (index + 1) / 3
//       })
//     )
//   })
  

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