NodeJS backend service wrapping AvalancheJS API and exposing as REST API

Build: yarn

Run: node server.js

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

2) Create and sign transaction:
```
POST http://localhost:3000/sign_tx
Body: {
    "networkID": 5,
    "endpoint": "api.avax-test.network",
    "assetID": "U8iRqJoiJm8xZHAacmvYyZVwqQx6uDNtQeP3CQ6fcgQk3JqnK",
    "privateKey": "PrivateKey-2qarB8gPPWg62Cv6HTH6au4LDLMzgRNRfA2SfNivT3sm7ZZdPw",
    "amount": 1,
    "toAddress": "X-fuji1fxugsy4jfqglf4cjtux90auczpe7cy5wwker68",
    "memo": "Test"
}
Response:

FIXME

```


