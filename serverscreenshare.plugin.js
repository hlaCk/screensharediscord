//META{"name":"serverscreensharePlugin","displayName":"𝗦erver 𝗦creenShare By hlaCk","website":"https://www.youtube.com/user/decodercan","source":"https://raw.githubusercontent.com/hlaCk/screensharediscord/master/serverscreenshare.plugin.js"}*//
var serverscreensharePlugin = function () {
};
serverscreensharePlugin.prototype.start = function () {
};
serverscreensharePlugin.prototype.load = function () {
    window.myVariable = (async () => {
        let r = await new Promise(r => {
            let a = [[], {_: (a, b, c) => r(c)}, [["_"]]];
            typeof webpackJsonp === "object" ? webpackJsonp.push(a) : webpackJsonp(...a)
        });
        delete r.m["_"];
        delete r.c["_"];
        for (let i in r.c) {
            if (r.c.hasOwnProperty(i)) {
                let m = r.c[i].exports;
                if (m && r.c[i].exports.isDeveloper === false) {
                    Object.defineProperty(r.c[i].exports, "isDeveloper", {
                        get: _ => true,
                        set: _ => _,
                        configurable: true
                    })
                }
            }
        }
    })()
};
serverscreensharePlugin.prototype.unload = function () {
};
serverscreensharePlugin.prototype.stop = function () {
};
serverscreensharePlugin.prototype.onMessage = function () {
};
serverscreensharePlugin.prototype.onSwitch = function () {
};
serverscreensharePlugin.prototype.observer = function (e) {
};
serverscreensharePlugin.prototype.getSettingsPanel = function () {
    return "<h3>By hlaCk#3509</h3>";
};
serverscreensharePlugin.prototype.getName = function () {
    return "	󠁡󠀮 	󠁡󠀮 𝗦erver 𝗦creenShare By hlaCk#3509";
};
serverscreensharePlugin.prototype.getDescription = function () {
    return "Enables in-server screensharing.";
};
serverscreensharePlugin.prototype.getVersion = function () {
    return "₁.₀.₀ ";
};
serverscreensharePlugin.prototype.getAuthor = function () {
    return "hlaCk";
};
