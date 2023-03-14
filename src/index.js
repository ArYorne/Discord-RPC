const clientId = '1085097374621368400';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({transport: 'ipc'});

DiscordRPC.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Playing Genshin Impact`,
        state: `Grinding Primogems`,
        startTimestamp: Date.now(),
        largeImageKey: `hutao`,
        largeImageText: `Hu Tao best charecter`,
        smallImageKey: `paimon`,
        smallImageText: `Genshin Impact`,
        instance: false,
        buttons: [{
            label: `My Github Page`,
            url: `https://github.com/ArYorne`
        },
        {
            label: `Genshin Impact`,
            url: `https://genshin.hoyoverse.com/en/home`
        }
        ]
    });
}

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 99999 * 1000);
});

RPC.login({ clientId }).catch(err => console.error(err));