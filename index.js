/*!
 * Teo.JS cookie-session extension
 * based on https://github.com/expressjs/cookie-session
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 11/29/16
 */

"use strict";

const CookieSession = require("cookie-session");

module.exports = {
    extension(app, config = {}) {
        const cookieSession = CookieSession(config);

        app.middleware(function* (next) {

            yield function(next) {
                cookieSession(this.req, this.res, next);
            };

            yield next;
        });
    }
};

