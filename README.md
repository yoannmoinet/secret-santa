# Secret Santa

Uses mailgun module to send the mail.

## Mail template

The mail template is [here](./body.js).

## How to use

Create a `./env/secrets.json` and `./env/users.json`.

### secrets.json

```json
{
    "mailgun_private": "key-xxxxxxxxxxxxxxxxxxxx",
    "mailgun_public": "pubkey-xxxxxxxxxxxxxxxxxx",
    "mailgun_domain": "my-domain.com"
}
```

### users.json

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

### Run

```bash
node ./index.js
```
