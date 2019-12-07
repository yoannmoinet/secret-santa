const Mailgun = require('mailgun-js');
const ss = require('secret-santa-generator');

const users = require('./env/users.json');
const mg_keys = require('./env/secrets.json');
const body = require('./body');

const DOMAIN = mg_keys.mailgun_domain;
const KEY = mg_keys.mailgun_private;

const mailgun = new Mailgun({
    apiKey: KEY,
    domain: DOMAIN
});

const toSend = {
    from: 'Le Père Noël 🎅 <le-papa-noel-secret@pole-nord.com>',
    to: '',
    subject: '🙈 Tu es un Père Noël 🎅🤶 secret!'
};

const assignements = Object.entries(
    ss.buildSecretSantaTable(
        users
            .slice(0)
            .map((u) => users.indexOf(u))
    )
);

assignements.forEach(([i, j]) => {
    const from = users[i];
    const to = users[j];
    mailgun.messages().send({
        ...toSend,
        to: from.email,
        html: body({ santa: from, kid: to })
    }, (err, body) => {
        if (err) {
            console.log(`Error sending from ${from.name} to ${to.name}.`, err);
        } else {
            console.log(`Success!`, body);
        }
    });
});
