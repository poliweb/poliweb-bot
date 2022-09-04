require('dotenv').config()
const { Telegraf, Markup } = require('telegraf')

const helpText = require('./const')


/**
 * Подключение токина
 */
const {BOT_TOKEN, URL} = process.env
if(BOT_TOKEN === undefined) {
    throw new Error('BOT_TOKEN must be provided! BOT_TOKEN должен быть предоставлен!')
}

const PORT = process.env.PORT || 5000

/**
 * Authorizing bot - авторизация бота
 */
const bot = new Telegraf(BOT_TOKEN)

// bot.use(Telegraf.log())


/**
 * Commands for bot
 */

/**
 * Command Start
 */

 bot.start(async (ctx) => {
    return [
        await ctx.replyWithPhoto({url: 'https://res.cloudinary.com/poliweb/image/upload/v1659345878/PoliWebStartUpScvear_ax3px5.webp'}, 
        {caption: 'Логотип PoliWeb и илюстрация SVG - формат'}),
        await ctx.replyWithHTML(`
<b>✋ Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'}!</b>
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
bot.start(async (ctx) => {
    return [
        await ctx.replyWithHTML('✋ Привет!')
    ]
})
</code>
    `)
]
})

/**
 * Command Help
*/
bot.help(async (ctx) => {
    return [
        await ctx.replyWithMarkdown(`
*Это help*
_Этот чат-бот понимает следующие команды:_
`),
// Константа helpText импортирует из файла const.js список команд через константу commands
await ctx.reply(helpText.commands),

    ]
})

/**
 * Command Contact
 */
bot.command('contact', (ctx) => {
    ctx.replyWithHTML(`
<b>Контакты для связи</b>

<i>Звяжитесь прямо сейчас по телефону!</i>

📞 <i>Tel:</i> +7 701 721 1284

📩 <i>Email:</i> <a href="mailto:web@poliweb.su&body=Привет?subject=Вопрос с телеграм чат-бота">web@poliweb.su</a>

🔗 <i>Сайт:</i> <a href="https://poliweb.su/">PoliWeb.SU</a>


🌐 Alma-Ata, Kazakhstan, KZ
    `)
})

/**
 * Command About
 */
bot.command('about', (ctx) => {
    return [
        ctx.replyWithMarkdown(`
_WEB DEVELOPER_
*ПАВЕЛ ПОЛИСТОВСКИЙ*

Я веб-разработчик. Моя специализация - фронтенд-разработка. Мне нравится разрабатывать сайты, начиная с разработки прототипа веб-сайта, дизайна UX / UI в инструменте FIGMA до полного развертывания проекта на платформе NETLIFY, HEROKU, с подключением облачных технологий, микросервисной архитектуры и настройки Домен DNS. Мои любимые фреймворки - LARAVEL, VUE, NUXT, TAILWINDCSS и многие другие, которые облегчают жизнь веб-разработчика.

Готов сотрудничать как с крупными компаниями, так и с частными лицами на беспроигрышной основе. Я могу работать как над крупными проектами, так и над небольшими стартапами. Готов строить отношения как на постоянной работе (полный рабочий день), так и в рамках веб-проекта с частичной (фриланс) работой.

Мне нравится следить за быстрым развитием ИТ-технологий, оставаться в курсе событий и каждый день улучшать свои профессиональные навыки веб-разработки.

_Моя философия - обучение на протяжении всей жизни_

[Подробней на сайте](https://poliweb.su/)
`)
    ]
})


/**
 * Command Portfolio
 */
 bot.command('portfolio', async (ctx) => {
    try{
        await ctx.replyWithMarkdown(`
*📸  Это моё портфолио*

В портфолио подобраны графические фрагменты сайтов.

_Посетите страницу разрабочика на_ [GitHub](https://github.com/poliweb)
_Вы там найдёте много интересного и полезного.
Получите подробную информацию о разработчике этого 
чат-бота._

✋ [PoliWeb on GitHub](https://github.com/poliweb)

        `,{disable_web_page_preview: false})
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
            await ctx.reply('Это <b>Моё супер портфолио!</b> Просмотри дополнительные Альбом 1, Альбом 2 и Альбом 3',
                {   parse_mode: 'HTML',
                    ...Markup.inlineKeyboard([
                        [Markup.button.callback('Альбом 1', 'Albom_1'),  Markup.button.callback('Альбом 2', 'Albom_2')],
                        [Markup.button.callback('Альбом 3', 'Albom_3')]
                    ])
                }
                )
    } catch (e) {
        console.error(e)
    }

})

/**
 * Action
 */

//  Albom 1
bot.action('Albom_1', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithMarkdown(`
Альбом 1 *Слайдер для сайта*
        `)
        await ctx.replyWithMediaGroup([{
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659487339/Portfolio/mars_3_pydzo2.webp'
                    },
                    caption: 'My Mars Expedition 1',
                    type: 'photo'
                },
                {
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659486719/Portfolio/mars_1_du0jzm.webp'
                    },
                    caption: 'My Mars Expedition 2',
                    type: 'photo'
                },
                {
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659486716/Portfolio/mars_2_de3qea.webp'
                    },
                    caption: 'My Mars Expedition 3',
                    type: 'photo'
                },
                {
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659487342/Portfolio/mars_4_koumbw.webp'
                    },
                    caption: 'My Mars Expedition 4',
                    type: 'photo'
                },
            ]),
            await ctx.replyWithMarkdown(`
            Демо сайта: [My Mars Expedition](https://mymarsexpedition.netlify.app)
            `,
            {disable_web_page_preview: true}),
            await ctx.replyWithMarkdown(
                `Просмотри ещё *Альбомы* `,
                Markup.inlineKeyboard([
                    [Markup.button.callback('Альбом 2', 'Albom_2'), Markup.button.callback('Альбом 3', 'Albom_3')]
                ])
            )
    } catch (e) {
        console.error(e)
    }
})

//Albom 2
bot.action('Albom_2', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithMarkdown(`Альбом 2 *Протатип сайта*`)
        await ctx.replyWithMediaGroup([{
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/v1659786470/Portfolio/DevTo2_mivecv.webp'
                    },
                    caption: 'Протатип сайт Dev To ',
                    type: 'photo'
                },
                {
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659488383/Portfolio/site_1_rfkea6.webp'
                    },
                    caption: 'Протатип сайт лендинг',
                    type: 'photo'
                },
                {
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/c_scale,w_1000/v1659488713/Portfolio/site_2_xmcmi2.webp'
                    },
                    caption: 'Протатип сайт лендинг 2',
                    type: 'photo'
                },
                {
                    media: {
                        url: 'https://res.cloudinary.com/poliweb/image/upload/v1659785575/Portfolio/Nike1_tb532o.webp'
                    },
                    caption: 'Протатип сайт Модели 1',
                    type: 'photo'
                },
            ])
            await ctx.replyWithHTML('<b>Демо сайта:</b> <a href="http://devto.poliweb.kz/">DevTo.poliweb.kz</a>', 
            {disable_web_page_preview: true})
            await ctx.replyWithMarkdown(
                'Просмотри ещё *Альбомы*',
                Markup.inlineKeyboard([
                    [Markup.button.callback('Альбом 1', 'Albom_1'), Markup.button.callback('Альбом 3', 'Albom_3')]
                ])
            )
    } catch (e) {
        console.error(e)
    }

})

// Albom 3
bot.action('Albom_3', async (ctx) => {
    try {
        await ctx.answerCbQuery()
        await ctx.replyWithMarkdown(`
Альбом 3 
_Cайт:_ *Fashion Models*`)
        await ctx.replyWithMediaGroup([
            {
                media: {
                    url: 'https://res.cloudinary.com/poliweb/image/upload/v1659785725/Portfolio/pw-model-agency4_short_hbboqp.webp'
                },
                caption: 'Протатип сайт Fashion Models 1',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://res.cloudinary.com/poliweb/image/upload/v1659785576/Portfolio/pw-model-agency1_short_f7ztqy.webp'
                },
                caption: 'Протатип сайт Fashion Models 2',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://res.cloudinary.com/poliweb/image/upload/v1659785575/Portfolio/pw-model-agency2_short_jiljzs.webp'
                },
                caption: 'Протатип сайт Fashion Models 3',
                type: 'photo'
            },
            {
                media: {
                    url: 'https://res.cloudinary.com/poliweb/image/upload/v1659785572/Portfolio/pw-model-agency3_short_zabms5.webp'
                },
                caption: 'Протатип сайт Fashion Models 4',
                type: 'photo'
            },
        ])
        await ctx.replyWithHTML('<b>Демо сайта:</b> <a href="https://pw-model-agency.netlify.app/">Fashion Models</a>', 
            {disable_web_page_preview: true})
            await ctx.replyWithMarkdown(
                'Просмотри ещё *Альбомы*',
                Markup.inlineKeyboard([
                    [Markup.button.callback('Альбом 1', 'Albom_1'), Markup.button.callback('Альбом 2', 'Albom_2')]
                ])
            )
    }catch(e){
        console.error(e)
    }
})


/**
 * Hears Code
 */
 bot.hears(['hi', 'HI', 'Hi'], async (ctx) => {
    return [
        await ctx.replyWithSticker('https://res.cloudinary.com/poliweb/image/upload/v1659935059/WebsiteCreator-amico_mzylur.webp'),
        await ctx.replyWithMarkdown(`
*Hi, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'}! I am PoliWeb Chatbot.*
Do you want to know who author is Chatbot?
Click here → /about
    `)
    ]
})

bot.hears(['привет', 'ПРИВЕТ', 'Привет'], async (ctx) => {
    return [
        await ctx.replyWithSticker('https://res.cloudinary.com/poliweb/image/upload/v1659935059/WebsiteCreator-amico_mzylur.webp'),
        await ctx.replyWithMarkdown(`
*Привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'Незнакомец'}! Я чат-бот PoliWeb.*
Хотите узнать, кто автор чат-бота?
Жми сюда → /about
    `)
    ]
})

/**
 * Start bot
 * Бот обрабатывает пакет обновлений
 */
// bot.launch().then((res) => {
//     console.log('BOT_TOKEN: OK 👍')
//     console.log('Run Bot. Бот запушен и работает 👍')
// }).catch((err) => {
//     console.log('Опс!!! Ошибка!!! ', err)
// })


bot.launch({ webhook: { domain: URL, port: PORT } })
console.log('Run Bot. Бот запушен и работает 👍')

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


