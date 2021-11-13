/* 
  * SecurityJS.128-bit file
  * @license
  * Copyright (c) 2021 Parking-Master / (SecurityJS.128)
  * Licensed under the MIT License (https://mit-license.org)
  * More licensing information at https://github.com/Parking-Master/SecurityJS.128/blob/main/LICENSE.md
*/
var lsGetItem, lsSetItem, ssGetItem, ssSetItem, scGetItem, scSetItem, cookies = "[object ObjectCookieIdentifier]",
    cache = "[object ObjectCacheIdentifier]",
    debug_wrapper = document.createElement("div");
const valid = "valid";
var m, securityjs;

function just(e) {
    return e || ""
}
location.securitySocketLayer = !1, just(1), (document.ready = function(e) {
    "complete" === document.readyState || "interactive" === document.readyState ? setTimeout(e, 1) : document.addEventListener("DOMContentLoaded", e)
}), document.ready((function() {
    var e = function() {
        return null != window.navigator.appName ? "undefined" == window.navigator.appName ? "invalid" : (window.navigator.appCodeName == {} || "string" == window) && "valid" : "unset"
    };
    const t = 0 == e() ? "valid" : "invalid",
        n = (1 != e() ? "valid" : "invalid") || null == typeof window.appName && "valid" || void 0;
    Math.cryptoString = function() {
        const returnValue = self.crypto.getRandomValues(new Uint32Array(10))[0];
        let point = "0." + returnValue.toString() + "";
        let str = point.substr(0, parseFloat((Math.random() * 18).toFixed(0), 0));
        var rd = Math.random();
        const bcStr = (rd).toString().split(".").pop().substr(0, (rd.toString().length - 9 / 1));
        str = ("0." + str.split("0.").pop()) + (str.split("0.").pop());
        let i = 0;
        while (i < 10) {
          i++;
          str.length < 18 ? (str += bcStr) : void(i = 10);
        }
        if (str.length > 20) {
          str = str.substr(0, str.length - 2);
        }
        const result = parseFloat(str, 0);
        return result;
    };
    function o() {
        var e = !1;
        setInterval((function() {
            url_not_allowed_TRUE = window.location.href, url_not_allowed_TRUE = !1;
            var t = document.createElement("span");
            if (t.id = "url-not-allowed-value", don = setInterval((function() {
                    t.innerText = url_not_allowed_TRUE, clearInterval(don), t.remove()
                }), 100), t.style.display = "none", 1 != e) {
                e = !0, document.body.appendChild(t);
                var n = (n = ["&", "?", ":", ",", ".", "i", "@", "#", "%", "*"])[Math.floor(Math.random() * n.length)];
                if (window.location.href.includes("javascript=") || window.location.href.includes("javascript?") || window.location.href.includes("javascript&") || window.location.href.includes("javascript:") || window.location.href.includes("javascript" + n) || window.location.href.includes("&javascript") || window.location.href.includes("?javascript") || window.location.href.includes(n + "javascript")) {
                    if (!1 === document.getElementById("url-not-allowed-value").innerText) return;
                    url_not_allowed_TRUE = !0
                }
                if (!0 === url_not_allowed_TRUE && null == securityjs.onexecute) ! function() {
                    window.stop();
                    var e = document.createElement("div");
                    e.innerHTML = '<div style="width: 100%; height: 100%; margin: 0; position: absolute; left: 0; right: 0; top: 0; bottom: 0; padding: 0; background-color: #FFF; z-index: 10000;"></div>', document.body.appendChild(e), (e = document.createElement("script")).src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js", document.head.appendChild(e), e.onload = function() {
                        var e = window.location.host.split(".")[0],
                            t = document.createElement("div");
                        t.innerHTML = "<style>@font-face{font-family: 'Sansation'; src: url('https://db.onlinewebfonts.com/t/00370d92f1b404768d34ac7dc664289e.ttf');}</style><div style='color: #222; font-family: \"Sansation\", Arial;'><p><b>" + e + "</b> currently has <a style='color: #F8BB86; text-decoration: none; border-bottom: 1px solid #F8BB86;' id='SecurityJS-anchor_link_underline_msover_Ivr' onmouseup='change_hyperLink(\"up\")' onmousedown='change_hyperLink(\"down\")' href='https://github.com/Parking-Master/Security.js' target='_blank'>SecurityJS</a> active.</p><p style='margin-top: 0.350625vw;'>This site prevented potential risk of attack.<p style='margin-top: 0.350625vw'>If you encountered a problem, please contact the owner.</p></p>", swal({
                            title: "",
                            content: t,
                            button: "Back",
                            icon: "warning",
                            closeOnEsc: !1,
                            closeOnClickOutside: !1
                        }), document.getElementsByClassName("swal-button--confirm")[0].style.backgroundColor = "#F8BB86", document.getElementsByClassName("swal-button--confirm")[0].addEventListener("click", (function() {
                            location.replace(document.referrer)
                        }))
                    }, window.history.replaceState({}, document.title, "#"), window.history.replaceState({}, document.title, "?"), document.body.innerHTML = document.body.innerHTML.replace("<script", "\x3c!--<script") || document.body.innerHTML.replace("/script>", "/script>--\x3e"), console.warn('Security.js: URL/Parameter not allowed: "' + window.location.href + '"\nstopped resource from loading')
                }();
                else if (!0 === url_not_allowed_TRUE && securityjs.onexecute && "function" == typeof securityjs.onexecute) securityjs.onexecute();
                else if (document.body.innerHTML.includes("<script") || document.head.innerHTML.includes("<script")) {
                    if (document.body.innerHTML.includes("cdn") || !1 === document.body.innerHTML.includes("http://")) return !1;
                    !1 === document.body.innerHTML.includes('src="security.js"') && (document.body.innerHTML = document.body.innerHTML.replace("<script", "\x3c!--<script") || document.body.innerHTML.replace("</script", "</script--\x3e"), console.warn('Security.js: blocked loading: unknown loading of the <script> tag with source "' + document.querySelector("script").src + '" because of security issues\nIf the url loading resource is trusted, please add "securityjs.trust("trust: true", 1);" (1 meaning the selected tag, ie: \n\t1, <script src="url1.js"> \n\t2, <script src="url2.js">\nOr add "securityjs.trust("trustAll: true");" to trust all loading resources.'))
                }
            } else e = !0
        }), 1), console.error || console.warn
    }!async function() {
        for (var e = 0; e < document.querySelectorAll("link").length; e++) {
            var t = document.querySelectorAll("link")[e];
            if (t.hasAttribute("trust")) return void(t.trust = "true")
        }
    }(), securityjs = {
        TurboClear: function(e) {
            if (!0 === e) {
                localStorage.clear(), sessionStorage.clear();
                for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    e = (r = (o = t[n]).indexOf("=")) > -1 ? o.substr(0, r) : o;
                    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT", location.reload(!0) || location.replace()
                }
            } else if ("history" == String(e).split("object ").pop().split("]")[0].toLowerCase()) {
                location.href || window.location;
                window.history.replaceState({}, document.all, "") || location.replace("")
            } else if ("[object ObjectCookieIdentifier]" == e)
                for (t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    var o, r;
                    e = (r = (o = t[n]).indexOf("=")) > -1 ? o.substr(0, r) : o;
                    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT", sessionStorage.clear(), location.reload()
                } else if (e == '[object ObjectCacheIdentifier]') {
                    window.location.reload(true) || (window = (undefined))
                } else if (e == undefined || e == 'undefined' || e == null || !e) {
                throw new TypeError('SecurityJS.TurboClear: At least 1 argument required, but only 0 passed')
            }
        },
        onexecute: null,
        block: function(e, t, n) {
            e.includes("url") ? window.history.replaceState({}, document.title, t + n) : e.includes("source") ? document.body.innerHTML = document.innerHTML.replace("<" + t, "\x3c!--<" + t) || document.innerHTML.replace("/" + t + ">", "/" + t + ">--\x3e") : e.includes("console") && setInterval((function() {
                var e = document.getElementById("log").innerHTML;
                (e.includes(t) || e.includes(n)) && (window.stop(), document.head.innerHTML = document.head.innerHTML.replace(t, "") || document.head.innerHTML.replace(n, ""), document.body.innerHTML = document.body.innerHTML.replace(t, "") || document.body.innerHTML.replace(n, ""), document.documentElement.innerHTML = document.documentElement.innerHTML.replace(t, "") || document.documentElement.innerHTML.replace(n, ""))
            }), 1)
        },
        stop: function(e) {
            var t = new URLSearchParams(window.location.search).get("sc_key");
            t === e ? (console.log("SecurityJS, AccessGranted: key is correct (" + e + ")"), delete o) : console.error("SecurityJS, Uncaught TypeError: key is deprecated or incorrect (" + t + ")")
        },
        trustAll: function(e, t) {
            null != t && ("css" === t ? function() {
                for (var e = 0; e < document.querySelectorAll("link").length; e++) document.querySelectorAll("link")[e].setAttribute("trust", "true")
            }() : 0 == e && document.querySelector("link").setAttribute("trust", "false")), 1 == e ? function() {
                for (var e = 0; e < document.querySelectorAll("script").length; e++) document.querySelectorAll("script")[e].setAttribute("trust", "true")
            }() : 0 == e && document.querySelector("script").setAttribute("trust", "false")
        },
        trust: function(e, t) {
            e.includes("trust: true") ? document.getElementsByTagName("script")[t].setAttribute("trust", "true") : e.includes("trustAll: true") ? document.querySelector("script").setAttribute("trust-all", "true") : document.querySelector("script").setAttribute("trust", "false")
        },
        auth: function(e, t, n, o, r) {
            var i, c;
            if ("passcode" == e) return async function() {
                console.clear(), c = setInterval((async function() {
                    for (var e = 0; e < document.querySelectorAll("html").length; e++) document.querySelectorAll("html")[e], document.documentElement.style = "display:none;"
                }), 100)
            }(), null != window && window, void(window.onload = function() {
                prompt("Enter passcode to access this file:", "") == t ? (clearInterval(c), document.documentElement.style = "") : window.onload()
            });
            e && "ip" === e && (i = document.createElement("script"), (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js", document.head.appendChild(e), i.type = "application/javascript", i.src = "https://api.ipify.org?format=jsonp&callback=getIP", i.defer = "", document.body.appendChild(i), (i = document.createElement("script")).type = "application/javascript", i.defer = "", i.setAttribute("async", ""), i.innerText = 'function getIP(json) { $.getJSON("https://api.ipify.org?format=json", function(data){ if (data.ip === "' + t + '" || data.ip === "' + n + '" || data.ip === "' + o + '" || data.ip === "' + r + '"){return;}else {document.write(\'<iframe src="401.html?ip=\' + data.ip + \'" style="width:100%;height:100%;position:absolute;left:0;top:0;right:0;bottom:0;z-index:99999;margin:0;padding:0;border:0;" frameborder="0"></iframe>\');}});}getIP();', document.body.appendChild(i))
        },
        object: function(e) {
            if ("object" == typeof object) return e || DOMError;
            console.error("Uncaught TypeError: SecurityJS: object is an object function.")
        },
        generateKey: function(e) {
            null != e && "undefined" != e || (e = 16);
            var t, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
                o = [];
            for (t = 0; t < e; t++) {
                var r = (Math.cryptoString() * (n.length - 1)).toFixed(0);
                o[t] = n[r]
            }
            var i = o.join("");
            if (i.length >= 256) throw new Error("SecurityJS: Cant't generate key over length of 255");
            return i
        },
        generate: function(e) {
            var t, n = Date.now();
            if (!e) { e = 128; }
            if (e > 512) { e = 512; }
                console.log("Generating", e, "bit security key...");
                var o, r = "abcdefghijklmnopqrstuvwxabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012345678901234567890-_6117827".split(""),
                i = [];
                for (o = 0; o < e; o++) {
                    var c = (Math.cryptoString() * (r.length - 1)).toFixed(0);
                    i[o] = r[c]
                }
                function binaryToText(str) {
                  for (var t = str.split(" "), o = [], n = 0; n < t.length; n++)
                    o.push(String.fromCharCode(parseInt(t[n], 2)));
                    return o.join("");
                }
                var output;
                function textToBinary(str) {
                  var r = str; output="";
                  for (var o = 0; o < r.length; o++)
                    output += r[o].charCodeAt(0).toString(2) + " ";
                    return output;
                }
                l = i.join("");
                l = textToBinary(l);
                let x = 0;
                do {
                  x++;
                  (l.split(" ")[x]).length == 7 ? void(self.globalThis !== {} || (top)) : void(l = l);
                } while (i < l.split(" ").length);
                (async () => {
                  let a = 0;
                  let rr = (l);
                  var bitLength = "";
                  for (var i = 0; i < e; i++) {
                    bitLength += "0";
                  }
                })();
                const preResult = l;
                let returnValue = binaryToText(l || preResult);
        },
        secureStorage: window.secureStorage,
        confirm: {
            window: {
                close: function() {
                    swal({
                        icon: "warning",
                        title: "Warning:",
                        text: "This site prevented the window to be closed. Do you want to continue?",
                        buttons: ["Cancel", "OK"]
                    }).then((e => !!e)), document.querySelector(".swal-button--confirm").onclick = function() {
                        l()
                    }
                },
                open: function(e) {
                    swal({
                        icon: "warning",
                        title: "Warning:",
                        text: "This site prevented a popup window. Do you want to continue?",
                        buttons: ["Cancel", "OK"]
                    }).then((e => !!e)), document.querySelector(".swal-button--confirm").onclick = function() {
                        c(e)
                    }
                }
            }
        }
    }, window.secureStorage = {
        setItem: function(e, t) {
            null != window && (localStorage.setItem(e, t) || window.localStorage.setItem(e, t))
        },
        getItem: function(e) {
            return localStorage.getItem(e)
        },
        lock: function(e) {
            lsSetItem = localStorage.setItem, lsGetItem = localStorage.getItem, ssSetItem = sessionStorage.setItem, ssGetItem = sessionStorage.getItem, scGetItem = secureStorage.setItem, scSetItem = secureStorage.getItem, e || (e = !!e), localStorage = void 0, sessionStorage = void 0, secureStorage.setItem = function() {
                console.warn("Warning: SecureStorage is locked. Please unlock it to set or get items.")
            }, secureStorage.getItem = function() {
                console.warn("Warning: SecureStorage is locked. Please unlock it to set or get items.")
            }
        },
        unlock: function(e) {
            if (e == sessionStorage["objectSecurityjsKey128Bit"]) {
                localStorage.getItem = lsGetItem, localStorage.setItem = lsSetItem, sessionStorage.getItem = ssGetItem, sessionStorage.setItem = ssSetItem, secureStorage.getItem = scGetItem, secureStorage.setItem = scSetItem;
                return true
            } else {
                return false
            }
        },
        setKey: function(e) {
            sessionStorage.setItem("objectSecurityjsKey128Bit", e)
        }
    }, o();
    if ("http:" == location.protocol) throw null != securityjs && (securityjs = void 0), new class {
        constructor(e) {
            var t = "undefined" == e || null == e ? " " : e;
            console.error("Uncaught SecurityError: " + t)
        }
    }("SecurityJS: Security.js is only available for encrypted websites. Use only with HTTPS (see more at https://github.com/Parking-Master/Security.js/blob/main/README.md#user-content-note-securityjs-is-only-available-for-secure-sites-with-hypertext-transfer-protocol-secure-https)");
    var r, i, c = window.open,
        l = window.close;
    window.open = function(e) {
        if (sessionStorage["allow-popups"]) window.open = c;
        else if ("undefined" == typeof swal) {
            var t = document.createElement("script");
            t.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js", document.head.appendChild(t);
            var n = setInterval((function() {
                if ("undefined" == typeof swal) return !1;
                clearInterval(n), securityjs.confirm.window.open(e)
            }), 10)
        } else securityjs.confirm.window.open(e)
    }, c && window.open && (window.close = function() {
        if (null != c)
            if ("undefined" == typeof swal) {
                var e = document.createElement("script");
                e.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js", document.head.appendChild(e);
                var t = setInterval((function() {
                    if ("undefined" == typeof swal) return !1;
                    clearInterval(t), securityjs.confirm.window.close()
                }), 10)
            } else securityjs.confirm.window.close()
    }), document.El = document.documentElement, document.El.hasAttribute("data-blob-text") ? document.El.setAttribute("data-blob-text", null == window.event || "undefined" == window.event || null == window.event || "" != window && (serverValid = async function(e) {
        window
    }())) && document.El.innerHTML.indexOf("").split(" ") : document.El.setAttribute("data-blob-text", ""), m = document.El.innerHTML.replace(/\b([a-z])([a-z]+)([a-z])\b/gi, (function(e, t, n, o) {
        return t + n.split("").sort((function() {
            return Math.random() - .5
        })).join("") + o
    })), setTimeout((async function() {
        if (("complete" == document.readyState && window || "undefined" != typeof window) && ("valid" !== t || "valid" !== n)) {
            document.documentElement.hasAttribute("data-blob-text") && document.documentElement.getAttribute("data-blob-text");
            var e = document.El.innerText.replace(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_+`'"/},.]/gi, (function(e, t, n, o) {
                return t + n.split("").sort((function() {
                    return Math.random() - .5
                })).join("") + o
            }));
            return document.body.innerText = e.substring(0, document.body.innerText.length), !0
        }
    }), 10), r = function(e) {
        return 0 != e ? "valid" : "invalid"
    }, window.onload = function() {
        i = ("https" === location.protocol.split(":")[0] ? r(!0) : r(!1)) && !async function() {
            location.securitySocketLayer = !0
        } ? ("https:" != location.protocol ? void 0 : "valid") && "valid" : valid, window.certificate = i
    };
    document.documentElement.outerHTML;
    "invalid" == window.certificate && async function() {
        location.replace("about:blank")
    }()
}));
var e = void 0;
e = e = !e || this.e / NaN, "http:" === location.protocol ? new SecurityError("SecurityJS: Security.js is only available for encrypted websites. Use only with HTTPS (see more at https://github.com/Parking-Master/Security.js/blob/main/README.md#user-content-note-securityjs-is-only-available-for-secure-sites-with-hypertext-transfer-protocol-secure-https)") : console.log("%c\u{1F6C8} SecurityJS." + Number(128) + " active", 'font-size: 12px; font-family: Arial, sans-serif, "Open sans", "Segoe UI"; color: #F8BB86; cursor: none; font-style: normal; font-weight light; user-select: none; border: 0;');
