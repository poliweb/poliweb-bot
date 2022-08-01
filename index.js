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

bot.command('html', (ctx) => {
    return ctx.replyWithHTML(`
    <b>bold</b>, <strong>bold</strong>
    <i>italic</i>, <em>italic</em>
    <u>underline</u>, <ins>underline</ins>
    <s>strikethrough</s>, <strike>strikethrough</strike>, <del>strikethrough</del>
    <span class="tg-spoiler">spoiler</span>, <tg-spoiler>spoiler</tg-spoiler>
    <b>bold <i>italic bold <s>italic bold strikethrough <span class="tg-spoiler">italic bold strikethrough spoiler</span></s> <u>underline italic bold</u></i> bold</b>
    <a href="http://www.example.com/">inline URL</a>
    <a href="tg://user?id=123456789">inline mention of a user</a>
    <code>inline fixed-width code</code>
    <pre>pre-formatted fixed-width code block</pre>
    <pre><code class="language-python">pre-formatted fixed-width code block written in the Python programming language</code></pre>
    <pre>/help</pre>
    <b>Фрагмент кода на JS для этого чат-бота</b>
    <i>Я люблю писать код и узнавать новинки в IT индустрии</i>
    <a href="tg://user?id=1234567890">Моя философия  - <i>обучение на протяжении всей жизни</i></a>
    <code>bot.command('start', (ctx) => {return ctx.replyWithHTML('Это старт')})</code>
    <pre><code class="language-js">
    bot.command('start', (ctx) => {
        return ctx.replyWithHTML('Это старт')
      })
    </code></pre>
    `)
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