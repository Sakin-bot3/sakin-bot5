module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
◄❥͜͡⃟⃝🥀 𝗡𝗮𝗺𝗲       : Xakin
◄❥͜͡⃟⃝🥀 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : facebook.com/Xaico.Xakin
◄❥͜͡⃟⃝🥀 𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝗜𝘀𝗹𝗮𝗺)
◄❥͜͡⃟⃝🥀 𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (Bangladesh )
◄❥͜͡⃟⃝🥀 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : Naogaon Rajshahi 
◄❥͜͡⃟⃝🥀 𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)
◄❥͜͡⃟⃝🥀𝗔𝗴𝗲            :  (16+)
◄❥͜͡⃟⃝🥀 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)
◄❥͜͡⃟⃝🥀𝗪𝗼𝗿𝗸         : 𝗦𝘁𝘂𝗱𝗲𝗻𝘁
◄❥͜͡⃟⃝🥀 𝗚𝗺𝗮𝗶𝗹        : nursakin772@gmail.com
◄❥͜͡⃟⃝🥀 𝗙𝗯 𝗹𝗶𝗻𝗸   : https://www.facebook.com/Xaico.Xakin`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100073238456269/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
