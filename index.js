const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");
const readline = require("readline");
const fs = require("fs");
const title = require('title');
const { URLSearchParams } = require("url");
const e = require("express");

process.title = "webhook spammer" //제목
let http = fs.readFileSync("./http.txt").toString().split("\n")



var firstLog = false;


const text_main = `\x1b[31m
    ┌─  T E S T   ───────────────────────────────────┐
    │                                                │
    │  [0] WEbhook terro                             │
    │                                                │
    │                                                │
    └────────────────────────────────────────────────┘
`;


async function MAIN() {
    console.clear();
    console.log(text_main)

    if (firstLog == false) {
        firstLog = true;
        MAIN();
        return
    }

    let rl = readline.createInterface(process.stdin, process.stdout);
    let res = await new Promise((resolve) => rl.question("   -> ", resolve));
    rl.close();

    let mode = res.trim();

    if (mode == "0") {
        check();
    } else {
        MAINE();
        return;
    };
};

async function MAINE() {
    console.clear();
    console.log(text_main);
    console.error("   Invalid command")


    let rl = readline.createInterface(process.stdin, process.stdout);
    let res = await new Promise((resolve) => rl.question("   -> ", resolve));
    rl.close();

    let mode = res.trim();
    title('Made By Mstb')

    if (mode == "0") {
        check();
    } else {
        MAINE();
        return;
    };
};

async function notmake() {
    console.clear();
    console.log(" 죄송합니다! 아직 미완성인 기능입니다");

    let rl = readline.createInterface(process.stdin, process.stdout);
    let res = await new Promise((resolve) => rl.question("\n", resolve));
    rl.close();

    let mode = res.trim();
        MAIN();
};
function pausecomp(millis) {
    var date = new Date();
    var curDate = null;
    do {
      curDate = new Date();
    } while (curDate - date < millis);
  }

//체커기
async function check() {
    console.clear()
    console.log("WebHook Url :")
    let rl = readline.createInterface(process.stdin, process.stdout);
    let res = await new Promise((resolve) => rl.question("   -> ", resolve));
    rl.close();
    var webhook = res.trim();
    console.log("massage :")
    let rl2 = readline.createInterface(process.stdin, process.stdout);
    let res2 = await new Promise((resolve) => rl2.question("   -> ", resolve));
    rl2.close();
    var msg = res2.trim();
    console.log("how many try :")
    let rl3 = readline.createInterface(process.stdin, process.stdout);
    let res3 = await new Promise((resolve) => rl3.question("   -> ", resolve));
    rl3.close();
    var count = res3.trim();
    for(var i=0;i < count;){
        var body = JSON.stringify({content: msg , username : "HakedHOOk" + i,avatar_url: "https://yt3.ggpht.com/a/AATXAJwlDor8HAEvz5BQW2JEqf8jrgwJqcFfbbPCWw=s900-c-k-c0xffffffff-no-rj-mo"});
        axios.post(webhook, body, {headers: {"Content-type": "application/json"}}).then(x=>{i++;console.log("WEbHook sended !@");}).catch(error =>{})        
        await sleep(110)
    }
    await sleep(550)
    await MAIN()

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



MAIN();
