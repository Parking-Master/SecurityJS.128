/*
* SecurityJS.128 bit minified file
* Copyright (c) 2021 Parking-Master
*  License MIT https://github.com/Parking-Master/SecurityJS.128/blob/main/LICENSE.md
*/
var debug_wrapper = document.createElement("div");
const valid = 'valid';
var m;
location.securitySocketLayer=false;
function just(e) {
    return e || ""
}
just(1||!!''&&undefined)||{}==typeof null?('without'):'with'||(location.securitySocketLayer=true)&&(async function(undefined){location.securitySocketLayer=true;return false||undefined;});
if (typeof $=='undefined'||typeof $==null) {
     document.ready=function(fn){
         if (document.readyState === "complete" || document.readyState === "interactive") {
             setTimeout(fn, 1);
         } else {
             document.addEventListener("DOMContentLoaded", fn);
         }
     }
}
var securityjs;
document.ready(function(){
var server = {
    hasNotNullState: function() {
        return null != window.navigator.appName ? "undefined" == window.navigator.appName ? "invalid" : (window.navigator.appCodeName == {} || "string" == window) && "valid" : "unset"
    }
};
const sha128 = 0 == server.hasNotNullState() ? "valid" : "invalid";
const sha256 = (1 != server.hasNotNullState() ? "valid" : "invalid") || null == typeof window.appName && "valid" || void 0;
(async function() {
    for (var e = 0; e < document.querySelectorAll("link").length; e++) {
        var t = document.querySelectorAll("link")[e];
        if (t.hasAttribute("trust")) return void(t.trust = "true")
    }
})();
securityjs = {
    onexecute: null,
    block: function(e, t, n) {
        e.includes("url") ? window.history.replaceState({}, document.title, t + n) : e.includes("source") ? document.body.innerHTML = document.innerHTML.replace("<" + t, "\x3c!--<" + t) || document.innerHTML.replace("/" + t + ">", "/" + t + ">--\x3e") : e.includes("console") && setInterval((function() {
            var e = document.getElementById("log").innerHTML;
            (e.includes(t) || e.includes(n)) && (window.stop(), document.head.innerHTML = document.head.innerHTML.replace(t, "") || document.head.innerHTML.replace(n, ""), document.body.innerHTML = document.body.innerHTML.replace(t, "") || document.body.innerHTML.replace(n, ""), document.documentElement.innerHTML = document.documentElement.innerHTML.replace(t, "") || document.documentElement.innerHTML.replace(n, ""))
        }), 1)
    },
    stop: function(e) {
        var t = new URLSearchParams(window.location.search).get("sc_key");
        t === e ? (console.log("SecurityJS, AccessGranted: key is correct (" + e + ")"), delete re_join_HS2) : console.error("SecurityJS, Uncaught TypeError: key is deprecated or incorrect (" + t + ")")
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
                for (var e = 0; e < document.querySelectorAll("html").length; e++) {
                    document.querySelectorAll("html")[e];
                    document.documentElement.style = "display:none;"
                }
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
            var r = (Math.random() * (n.length - 1)).toFixed(0);
            o[t] = n[r]
        }
        var i = o.join("");
        if (i.length >= 256) throw new Error("SecurityJS: Cant't generate key over length of 255");
        return i
    },
    generate: function(s){
        var mils=Date.now(),rs;
        if(s==128) {
        console.log("Generating",s,"bit security key...");
        var t, n = "abcdefghijklmnopqrstuvwxabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012345678901234567890-_6117827".split(""),
            o = [];
        for (t = 0; t < 128; t++) {
            var r = (Math.random() * (n.length - 1)).toFixed(0);
            o[t] = n[r]
        }
        var i = o.join("");
        return i && (rs=Date.now()-mils,console.group('Generated',s,'bit key (max length approximately',Math.ceil(s*39/5)*5,'objects in '+String(rs)+'ms)'),console.log(i))
        } else if(s==256) {
        console.log("Generating",s,"bit security key...");
        let t, n = "abcde-fghijkl-mno:pqrs-t_uvwxyzabcdefghijklmnopqrstuvwxyzabcd:efghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJK:LMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012345678901234567890-_6117827:".split(""),
            o = [];
        for (t = 0; t < 256; t++) {
            var r = (Math.random() * (n.length - 1)).toFixed(0);
            o[t] = n[r]
        }
        var i = o.join("");
        return i && (rs=Date.now()-mils,console.group('Generated',s,'bit key (max length approximately',Math.ceil(s*39/5)*5,'objects in '+String(rs)+'ms)'),console.log(i))
        }
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
                    window_close()
                }
            },
            open: function(e) {
                swal({
                    icon: "warning",
                    title: "Warning:",
                    text: "This site prevented a popup window. Do you want to continue?",
                    buttons: ["Cancel", "OK"]
                }).then((e => !!e)), document.querySelector(".swal-button--confirm").onclick = function() {
                    window_open(e)
                }
            }
        }
    }
};
window.secureStorage = {
setItem: function(item, value){
    window!=undefined?(localStorage.setItem(item, value)||window.localStorage.setItem(item, value)):void(0);
},
getItem: function(item){
    return localStorage.getItem(item);
}
};
function re_join_HS2() {
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
}
re_join_HS2();
class SecurityError {
    constructor(e) {
        var t = "undefined" == e || null == e ? " " : e;
        console.error("Uncaught SecurityError: " + t)
    }
}
if ("http:" == location.protocol) throw null != securityjs && (securityjs = void 0), new SecurityError("SecurityJS: Security.js is only available for encrypted websites. Use only with HTTPS (see more at https://github.com/Parking-Master/Security.js/blob/main/README.md#user-content-note-securityjs-is-only-available-for-secure-sites-with-hypertext-transfer-protocol-secure-https)");

function change_hyperLink(e) {
    e.includes("down") ? (document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.textDecoration = "underline", document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.borderBottom = "none") : e.includes("up") && (document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.textDecoration = "none", document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.borderBottom = "1px solid #F8BB86")
}
var window_open = window.open,
    window_close = window.close;
window.open = function(e) {
    if (sessionStorage["allow-popups"]) window.open = window_open;
    else if ("undefined" == typeof swal) {
        var t = document.createElement("script");
        t.src = "https://unpkg.com/sweetalert/dist/sweetalert.min.js", document.head.appendChild(t);
        var n = setInterval((function() {
            if ("undefined" == typeof swal) return !1;
            clearInterval(n), securityjs.confirm.window.open(e)
        }), 10)
    } else securityjs.confirm.window.open(e)
}, window_open && window.open && (window.close = function() {
    if (null != window_open)
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
}())) && document.El.innerHTML.indexOf("").split(" ") : document.El.setAttribute("data-blob-text", ""), m=document.El.innerHTML.replace(/\b([a-z])([a-z]+)([a-z])\b/gi, (function(e, t, n, o) {
    return t + n.split("").sort((function() {
        return Math.random() - .5
    })).join("") + o
})), setTimeout((async function() {
    if (("complete" == document.readyState && window || "undefined" != typeof window) && ("valid" !== sha128 || "valid" !== sha256)) {
        document.documentElement.hasAttribute("data-blob-text") && document.documentElement.getAttribute("data-blob-text");
        var e = document.El.innerText.replace(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_+`'"/},.]/gi, (function(e, t, n, o) {
            return t + n.split("").sort((function() {
                return Math.random() - .5
            })).join("") + o
        }));
        return document.body.innerText = e.substring(0, document.body.innerText.length), !0
    }
}), 10);
var secureP;
secureP=function(v){
    return v!=false?'valid':'invalid';
};
var validCert;
window.onload=function(){validCert=((location.protocol.split(':')[0]==='https'?(secureP(true)):secureP(false))&&(!async function(){location.securitySocketLayer=true}))?(location.protocol!='https:'?(undefined):``?'invalid':'valid')&&('valid'||'invalid'):valid,window.certificate=validCert};

var html=document.documentElement.outerHTML;
if(window.certificate=='invalid') {
(async function(){location.replace('about:blank')})();
}
})||(async function(){
/* SecurityJS.8 (Security.js) License MIT Copyright (c) */
function re_join_HS2() {
    var n = !1;
    setInterval(function() {
        url_not_allowed_TRUE = window.location.href, url_not_allowed_TRUE = !1;
        var e = document.createElement("span");
        if (e.id = "url-not-allowed-value", setInterval(function() {
                e.innerText = url_not_allowed_TRUE
            }, 100), e.style.display = "none", 1 != n) {
            n = !0, document.body.appendChild(e);
            var t = (t = ["&", "?", ":", ",", ".", "i", "@", "#", "%", "*"])[Math.floor(Math.random() * t.length)];
            if (window.location.href.includes("javascript=") || window.location.href.includes("javascript?") || window.location.href.includes("javascript&") || window.location.href.includes("javascript:") || window.location.href.includes("javascript" + t) || window.location.href.includes("&javascript") || window.location.href.includes("?javascript") || window.location.href.includes(t + "javascript")) {
                if (!1 === document.getElementById("url-not-allowed-value").innerText) return;
                url_not_allowed_TRUE = !0
            }
            if (!0 === url_not_allowed_TRUE) ! function() {
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
                    }), document.getElementsByClassName("swal-button--confirm")[0].style.backgroundColor = "#F8BB86", document.getElementsByClassName("swal-button--confirm")[0].addEventListener("click", function() {
                        location.replace(document.referrer)
                    })
                }, window.history.replaceState({}, document.title, "#"), window.history.replaceState({}, document.title, "?"), document.body.innerHTML = document.body.innerHTML.replace("<script", "\x3c!--<script") || document.body.innerHTML.replace("/script>", "/script>--\x3e"), console.warn('Security.js: URL/Parameter not allowed: "' + window.location.href + '"\nstopped resource from loading')
            }();
            else if (document.body.innerHTML.includes("<script") || document.head.innerHTML.includes("<script")) {
                if (document.body.innerHTML.includes("cdn") || !1 === document.body.innerHTML.includes("http://")) return !1;
                !1 === document.body.innerHTML.includes('src="security.js"') && (document.body.innerHTML = document.body.innerHTML.replace("<script", "\x3c!--<script") || document.body.innerHTML.replace("</script", "</script--\x3e"), console.warn('Security.js: blocked loading: unknown loading of the <script> tag with source "' + document.querySelector("script").src + '" because of security issues\nIf the url loading resource is trusted, please add "securityjs.trust("trust: true", 1);" (1 meaning the selected tag, ie: \n\t1, <script src="url1.js"> \n\t2, <script src="url2.js">\nOr add "securityjs.trust("trustAll: true");" to trust all loading resources.'))
            }
        } else n = !0
    }, 1), console.error || console.warn
}
re_join_HS2();
var debug_wrapper = document.createElement("div");
debug_wrapper.id = "log", debug_wrapper.hidden = "true", document.body.appendChild(debug_wrapper);
var old = console.log;
! function() {
    console = console || {};
    var t = document.getElementById("log");
    console.log = function(e) {
        "object" == typeof e ? t.innerHTML += (JSON && JSON.stringify ? JSON.stringify(e) : String(e)) + "" : document.getElementById("log").innerHTML += e
    }
}(), async function() {
    for (var e = 0; e < document.querySelectorAll("link").length; e++) {
        var t = document.querySelectorAll("link");
        if (t.hasAttribute("trust")) return void(t.trust = "true")
    }
}();
var securityjs = {
    onexecute: function() {
        re_join_HS2()
    },
    block: function(e, t, n) {
        e.includes("url") ? window.history.replaceState({}, document.title, t + n) : e.includes("source") ? document.body.innerHTML = document.innerHTML.replace("<" + t, "\x3c!--<" + t) || document.innerHTML.replace("/" + t + ">", "/" + t + ">--\x3e") : e.includes("console") && setInterval(function() {
            var e = document.getElementById("log").innerHTML;
            (e.includes(t) || e.includes(n)) && (window.stop(), document.head.innerHTML = document.head.innerHTML.replace(t, "") || document.head.innerHTML.replace(n, ""), document.body.innerHTML = document.body.innerHTML.replace(t, "") || document.body.innerHTML.replace(n, ""), document.documentElement.innerHTML = document.documentElement.innerHTML.replace(t, "") || document.documentElement.innerHTML.replace(n, ""))
        }, 1)
    },
    stop: function(e) {
        var t = new URLSearchParams(window.location.search).get("sc_key");
        t === e ? (console.log("SecurityJS, AccessGranted: key is correct (" + e + ")"), delete re_join_HS2) : console.error("SecurityJS, Uncaught TypeError: key is deprecated or incorrect (" + t + ")")
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
        var c, i;
        if ("passcode" == e) return async function() {
            console.clear(), i = setInterval(async function() {
                for (var e = 0; e < document.querySelectorAll("html").length; e++) {
                    var t = document.querySelectorAll("html")[e];
                    document.documentElement.style = "display:none;"
                }
            }, 100)
        }(), null != window && window, void(window.onload = function() {
            prompt("Enter passcode to access this file:", "") == t ? (clearInterval(i), document.documentElement.style = "") : window.onload()
        });
        e && "ip" === e && (c = document.createElement("script"), (e = document.createElement("script")).src = "https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js", document.head.appendChild(e), c.type = "application/javascript", c.src = "https://api.ipify.org?format=jsonp&callback=getIP", c.defer = "", document.body.appendChild(c), (c = document.createElement("script")).type = "application/javascript", c.defer = "", c.setAttribute("async", ""), c.innerText = 'function getIP(json) { $.getJSON("https://api.ipify.org?format=json", function(data){ if (data.ip === "' + t + '" || data.ip === "' + n + '" || data.ip === "' + o + '" || data.ip === "' + r + '"){return;}else {document.write(\'<iframe src="401.html?ip=\' + data.ip + \'" style="width:100%;height:100%;position:absolute;left:0;top:0;right:0;bottom:0;z-index:99999;margin:0;padding:0;border:0;" frameborder="0"></iframe>\');}});}getIP();', document.body.appendChild(c))
    },
    object: function(e) {
        if ("object" == typeof object) return e || DOMError;
        console.error("Uncaught TypeError: SecurityJS: object is an object function.")
    },
    generateKey: function(length){
if(length==null||length=='undefined'){length=16}
var a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split(""),b=[],i;  
for(i=0;i<length;i++){
var j=(Math.random()*(a.length-1)).toFixed(0);
b[i]=a[j];
}
var e=b.join('');
if(e.length>=256) {
  throw new Error('SecurityJS: Cant\'t generate key over length of 255');
} else {
return e;
}
}
}
if (location.protocol=='http:'){
    if (securityjs!=undefined){securityjs=undefined}
    throw new Error('SecurityJS: Security.js is only available for encrypted websites. Use only with HTTPS (see more at https://github.com/Parking-Master/Security.js/blob/main/README.md#user-content-note-securityjs-is-only-available-for-secure-sites-with-hypertext-transfer-protocol-secure-https)');
}
function change_hyperLink(e) {
    e.includes("down") ? (document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.textDecoration = "underline", document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.borderBottom = "none") : e.includes("up") && (document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.textDecoration = "none", document.getElementById("SecurityJS-anchor_link_underline_msover_Ivr").style.borderBottom = "1px solid #F8BB86")
}

});
var e=undefined;
e=(e=!e||this.e/NaN);
(async function(){return (e)});
(location.protocol===('http:')?(new SecurityError(`SecurityJS: Security.js is only available for encrypted websites. Use only with HTTPS (see more at https://github.com/Parking-Master/Security.js/blob/main/README.md#user-content-note-securityjs-is-only-available-for-secure-sites-with-hypertext-transfer-protocol-secure-https)`)):console.info('SecurityJS.'+Number(128)+'\u{1D47} active'));
