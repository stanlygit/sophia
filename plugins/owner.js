const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner Stanly - http://Wa.me/+919633833279*\n* *\n🔰instagram:- https://www.instagram.com/nishal_zan__ *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Stanly*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner Stanly═💥*\n\n*💘 https://github.com/Stanlygit/Damu-bot*\n*     *\n follow on Instagram- https://www.instagram.com/nishal_zan__*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "*owner Stanly- http://Wa.me/+919633833279*\n* *\n🔰instagram:- https://www.instagram.com/nishal_zan__ *            *\n*╚══════🔱🔱🔱🔱🔱═════╝*\n\n*▷Creator: Althaf Rahman*"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "*Git links*\n           *\n💥═Owner Stanly═💥*\n\n*💘 https://github.com/Stanlygit/Damu-bot*\n*     *\n follow on Instagram- https://www.instagram.com/nishal_zan__*"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

