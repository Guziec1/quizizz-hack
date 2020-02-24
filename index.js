const puppeteer = require('puppeteer');
const axios = require('axios');
const discord = require('discord.js');
const client = new discord.Client();
const cheerio = require('cheerio')

client.login('NjY0NTIzNTQ1MjE2Mjg2NzQx.XlKxoQ.cXsXkHhbP4s5YW4BxSOhOh5p-So');
client.on('message', (message) => {
    if (message.content.startsWith('!d')) {
        let args = message.content.split(' ').slice(1);
puppeteer.launch({ headless: false }).then(async browser => {
    var gameid;
    let name = "XD" + Math.round(Math.random() * 100);
    const page = await browser.newPage();
    page.on('response', request => {
        if (request.url().includes('api/main')) {
            request.text().then(a => {
                let d = JSON.parse(a);
                if (d.hasOwnProperty('data')) {
                   if(d.data.quizzes){
                    gameid = Object.keys(d.data.quizzes);
                    console.log(gameid)
                    let number = gameid.length -1;
                    gameid = gameid[number];
                    axios.get(`https://quizizz.com/quiz/${gameid}`).then(res => {
                        let questions = res.data.data.quiz.info.questions;
                        questions.forEach(el => {
                            let answer = el.structure.answer;
                            let $ = cheerio.load(el.structure.query.text);
                            var media = el.structure.query.media;
                            if(media.length >= 1){
                                 media = el.structure.query.media[0].url
                            } else media = "https://i.imgur.com/6yXYTxN.jpg";
                            
                            answer = cheerio.load(el.structure.options[answer].text)
                           
                            let embed = new discord.RichEmbed()
                                .setDescription(`Pytanie: ${$.text()} \n \n Odpowiedź: ${answer.text()}`)
                                .setImage(media)
                               
                            message.channel.send(embed);
                        })
                    }).catch(err=>{
                        console.log(err)
                    })

                   }
                   
                }
            })
        }
    });

    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36");
    await page.goto('https://quizizz.com/join/');
    await page.waitForSelector('.check-room-button');
    await page.click('.login-button');
    await page.type('.auth-input', 'j99dxcnduh@smart-email.me');
   await page.keyboard.press("Tab");
   await page.keyboard.type('zaq1@WSX');
   await page.click('.login-submit-btn');
   await page.waitForNavigation({ waitUntil: "domcontentloaded" });
   await page.waitForSelector('.check-room-button');
    await page.type('.check-room-input', String(args));
    await page.click('.check-room-button');
    await page.waitForSelector('.start-game');
    await page.type('.enter-name-field', name);
    await page.click('.start-game');
    console.log(`${name} joined!`);
   await page.close();
    await browser.close();
});
       
    }















    if(message.content.startsWith('!a')){
        let args = message.content.split(' ').slice(1);
        puppeteer.launch({ headless: false }).then(async browser => {
            var gameid;
            let name = "XD" + Math.round(Math.random() * 100);
            const page = await browser.newPage();
            page.on('response', request => {
                if (request.url().includes('api/main')) {
                    request.text().then(a => {
                        let d = JSON.parse(a);
                        if (d.hasOwnProperty('data')) {
                           if(d.data.quizzes){
                            gameid = Object.keys(d.data.quizzes);
                            console.log(gameid)
                            let number = gameid.length -1;
                            gameid = gameid[number];
                            axios.get(`https://quizizz.com/quiz/${gameid}`).then(res => {
                                let questions = res.data.data.quiz.info.questions;
                                questions.forEach(el => {
                                    let answer = el.structure.answer;
                                    let $ = cheerio.load(el.structure.query.text);
                                    var media = el.structure.query.media;
                                    if(media.length >= 1){
                                         media = el.structure.query.media[0].url
                                    } else media = "https://i.imgur.com/6yXYTxN.jpg";
                                    
                                    answer = cheerio.load(el.structure.options[answer].text)
                                   
                                    let embed = new discord.RichEmbed()
                                        .setDescription(`Pytanie: ${$.text()} \n \n Odpowiedź: ${answer.text()}`)
                                        .setImage(media)
                                       
                                    message.channel.send(embed);
                                })
                            }).catch(err=>{
                                console.log(err)
                            })
        
                           }
                           
                        }
                    })
                }
            });
        
            await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36");
            await page.goto('https://quizizz.com/join/');
            await page.waitForSelector('.check-room-button');
            await page.click('.login-button');
            await page.type('.auth-input', 'vi65myq0jw@inscriptio.in');
           await page.keyboard.press("Tab");
           await page.keyboard.type('zaq1@WSX');
           await page.click('.login-submit-btn');
           await page.waitForNavigation({ waitUntil: "domcontentloaded" });
           await page.waitForSelector('.check-room-button');
            await page.type('.check-room-input', String(args));
            await page.click('.check-room-button');
            await page.waitForSelector('.accept-invite-btn');
            await page.click('.accept-invite-btn');
            await page.waitForSelector('.start-game');
            await page.type('.enter-name-field', name);
            await page.click('.start-game');
            console.log(`${name} joined!`);
           await page.close();
            await browser.close();
        });
    }

})
