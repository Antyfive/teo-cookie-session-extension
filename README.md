# Teo.JS teo-cookie-session-extension
Simple cookie-based session middleware based on [cookie-session](https://github.com/expressjs/cookie-session) module.
## Installation
`npm i -S teo-cookie-session-extension`
## Teo.JS Config Example
```javascript
module.exports = {
    protocol: "http",
    host: "localhost",
    port: 3100,
    cluster: {
        enabled: true
    },
    extensions: [
        {
            name: "cookie-session",
            module: "teo-cookie-session-extension",
            config: {
                secret: "mySecret",
                name: "sessionName",
                keys: ["my", "key"],
                maxAge: 1000 * 60 * 60 * 24, // 24 hours
                domain: 'mysite.com'
            },
        }
    ],
};
```
