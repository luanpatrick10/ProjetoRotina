const proxy = [
    {
        "/api/*": {
            target: 'http://localhost:5092',
            secure: false,
            "logLevel": "debug"
        }
    }
];
module.exports = proxy;