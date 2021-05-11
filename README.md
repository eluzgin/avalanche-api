NodeJS backend service wrapping AvalancheJS API and exposing as REST API

Build: yarn

Run: node server.js

Fuji Testnet endpoint: api.avax-test.network

Avalanche endpoint: api.avax.network


1) Create new account keys:
```
POST http://localhost:3000/create_keys
Body: {
    "networkID": 5,
    "endpoint": "api.avax-test.network"
}
Response:
{
    "address": "X-fuji1fxugsy4jfqglf4cjtux90auczpe7cy5wwker68",
    "publicKey": "8NvixosNXDEr2nv7579eYerEa6SKiKNg6h6dEscygsddKdc538",
    "privateKey": "PrivateKey-2qarB8gPPWg62Cv6HTH6au4LDLMzgRNRfA2SfNivT3sm7ZZdPw"
}
```

You can fund test accounts using faucet:
https://faucet.avax-test.network/


2) Create and sign transaction:
Note amount in NAVAX units: 1 AVAX == 1000000000 NAVAX

```
POST http://localhost:3000/send_avax
Body: {
    "networkID": 5,
    "endpoint": "api.avax-test.network",
    "privateKey": "PrivateKey-2qarB8gPPWg62Cv6HTH6au4LDLMzgRNRfA2SfNivT3sm7ZZdPw",
    "amount": 1000000000,
    "toAddress": "X-fuji1fxugsy4jfqglf4cjtux90auczpe7cy5wwker68",
    "memo": "Test"
}
Response:

"2FtZ5Gxq9D6Uj6gWA3pGCeqShV2FrmT4gCv482cmqwtH4vzrXU"

```


