# Secret Santa

Uses mailgun module to send the mail.

## Run

```bash
node ./index.js
```

## Mail template

The mail template is [here](./body.js).

## Configure

Create a `./env/secrets.json` and `./env/users.json`.

### ./env/secrets.json

```json
{
    "mailgun_private": "key-xxxxxxxxxxxxxxxxxxxx",
    "mailgun_public": "pubkey-xxxxxxxxxxxxxxxxxx",
    "mailgun_domain": "my-domain.com"
}
```

### ./env/users.json

```json
[
    {
        "name": "Random User #1",
        "email": "random1@email.com"
    },
    {
        "name": "Random User #2",
        "email": "random2@email.com"
    },
]
```
