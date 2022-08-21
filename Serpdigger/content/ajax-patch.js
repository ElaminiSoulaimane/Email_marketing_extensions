if (!Function.prototype.bind) {
    Function.prototype.bind = function(a) {
        if (typeof this !== "function") {
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        }
        var f = Array.prototype.slice.call(arguments, 1)
          , e = this
          , b = function() {}
          , c = function() {
            return e.apply(this instanceof b && a ? this : a, f.concat(Array.prototype.slice.call(arguments)))
        }
        ;
        b.prototype = this.prototype;
        c.prototype = new b();
        return c
    }
}
if (!Array.prototype.map) {
    Array.prototype.map = function(c) {
        if (this === void 0 || this === null ) {
            throw new TypeError()
        }
        var g = Object(this)
          , a = g.length >>> 0;
        if (typeof c !== "function") {
            throw new TypeError()
        }
        var f = new Array(a)
          , b = arguments.length >= 2 ? arguments[1] : void 0;
        for (var e = 0; e < a; e++) {
            if (e in g) {
                f[e] = c.call(b, g[e], e, g)
            }
        }
        return f
    }
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
if (!Object.prototype.hasOwnProperty) {
    Object.prototype.hasOwnProperty = function(a) {
        var b = this.__proto__ || this.constructor.prototype;
        return a in this && (!(a in b) || this[a] !== b[a])
    }
}
if (!Object.keys) {
    Object.keys = (function() {
        var c = Object.prototype.hasOwnProperty
          , e = !({
            toString: null 
        }).propertyIsEnumerable("toString")
          , b = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , a = b.length;
        return function(h) {
            if (typeof h !== "object" && (typeof h !== "function" || h === null )) {
                throw new TypeError("Object.keys called on non-object")
            }
            var f = [], j, g;
            for (j in h) {
                if (c.call(h, j)) {
                    f.push(j)
                }
            }
            if (e) {
                for (g = 0; g < a; g++) {
                    if (c.call(h, b[g])) {
                        f.push(b[g])
                    }
                }
            }
            return f
        }
    }())
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(a, b) {
        if (this === undefined || this === null ) {
            throw new TypeError('"this" is null or not defined')
        }
        var c = this.length >>> 0;
        b = +b || 0;
        if (Math.abs(b) === Infinity) {
            b = 0
        }
        if (b < 0) {
            b += c;
            if (b < 0) {
                b = 0
            }
        }
        for (; b < c; b++) {
            if (this[b] === a) {
                return b
            }
        }
        return -1
    }
}
if (!window.console) {
    var noop = function() {}
    ;
    window.console = {
        log: noop,
        error: noop,
        warn: noop,
        info: noop
    }
}
window.Modernizr = function(ap, ao, an) {
    function aa(b) {
        ag.cssText = b
    }
    function Y(e, c) {
        return aa(ad.join(e + ";") + (c || ""))
    }
    function W(e, c) {
        return typeof e === c
    }
    function U(e, c) {
        return !!~("" + e).indexOf(c)
    }
    function S(f, c) {
        for (var h in f) {
            var g = f[h];
            if (!U(g, "-") && ag[g] !== an) {
                return c == "pfx" ? g : !0
            }
        }
        return !1
    }
    function Q(g, c, j) {
        for (var i in g) {
            var h = c[g[i]];
            if (h !== an) {
                return j === !1 ? g[i] : W(h, "function") ? h.bind(j || c) : h
            }
        }
        return !1
    }
    function O(g, f, j) {
        var i = g.charAt(0).toUpperCase() + g.slice(1)
          , h = (g + " " + ab.join(i + " ") + i).split(" ");
        return W(f, "string") || W(f, "undefined") ? S(h, f) : (h = (g + " " + Z.join(i + " ") + i).split(" "),
        Q(h, f, j))
    }
    var am = "2.8.3", al = {}, ak = !0, aj = ao.documentElement, ai = "modernizr", ah = ao.createElement(ai), ag = ah.style, af, ae = {}.toString, ad = " -webkit- -moz- -o- -ms- ".split(" "), ac = "Webkit Moz O ms", ab = ac.split(" "), Z = ac.toLowerCase().split(" "), X = {
        svg: "http://www.w3.org/2000/svg"
    }, V = {}, T = {}, R = {}, P = [], N = P.slice, M, K = function(v, u, t, s) {
        var r, q, p, o, h = ao.createElement("div"), g = ao.body, b = g || ao.createElement("body");
        if (parseInt(t, 10)) {
            while (t--) {
                p = ao.createElement("div"),
                p.id = s ? s[t] : ai + (t + 1),
                h.appendChild(p)
            }
        }
        return r = ["&#173;", '<style id="s', ai, '">', v, "</style>"].join(""),
        h.id = ai,
        (g ? h : b).innerHTML += r,
        b.appendChild(h),
        g || (b.style.background = "",
        b.style.overflow = "hidden",
        o = aj.style.overflow,
        aj.style.overflow = "hidden",
        aj.appendChild(b)),
        q = u(h, v),
        g ? h.parentNode.removeChild(h) : (b.parentNode.removeChild(b),
        aj.style.overflow = o),
        !!q
    }
    , J = {}.hasOwnProperty, I;
    !W(J, "undefined") && !W(J.call, "undefined") ? I = function(e, c) {
        return J.call(e, c)
    }
     : I = function(e, c) {
        return c in e && W(e.constructor.prototype[c], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var h = this;
        if (typeof h != "function") {
            throw new TypeError
        }
        var g = N.call(arguments, 1)
          , f = function() {
            if (this instanceof f) {
                var b = function() {}
                ;
                b.prototype = h.prototype;
                var e = new b
                  , c = h.apply(e, g.concat(N.call(arguments)));
                return Object(c) === c ? c : e
            }
            return h.apply(a, g.concat(N.call(arguments)))
        }
        ;
        return f
    }
    ),
    V.touch = function() {
        var a;
        return "ontouchstart" in ap || ap.DocumentTouch && ao instanceof DocumentTouch ? a = !0 : K(["@media (", ad.join("touch-enabled),("), ai, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(b) {
            a = b.offsetTop === 9
        }),
        a
    }
    ,
    V.opacity = function() {
        return Y("opacity:.55"),
        /^0.55$/.test(ag.opacity)
    }
    ,
    V.csstransforms3d = function() {
        var b = !!O("perspective");
        return b && "webkitPerspective" in aj.style && K("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(a, e) {
            b = a.offsetLeft === 9 && a.offsetHeight === 3
        }),
        b
    }
    ,
    V.csstransitions = function() {
        return O("transition")
    }
    ,
    V.svg = function() {
        return !!ao.createElementNS && !!ao.createElementNS(X.svg, "svg").createSVGRect
    }
    ;
    for (var L in V) {
        I(V, L) && (M = L.toLowerCase(),
        al[M] = V[L](),
        P.push((al[M] ? "" : "no-") + M))
    }
    return al.addTest = function(e, c) {
        if (typeof e == "object") {
            for (var f in e) {
                I(e, f) && al.addTest(f, e[f])
            }
        } else {
            e = e.toLowerCase();
            if (al[e] !== an) {
                return al
            }
            c = typeof c == "function" ? c() : c,
            typeof ak != "undefined" && ak && (aj.className += " " + (c ? "" : "no-") + e),
            al[e] = c
        }
        return al
    }
    ,
    aa(""),
    ah = af = null ,
    function(av, au) {
        function B(f, e) {
            var h = f.createElement("p")
              , g = f.getElementsByTagName("head")[0] || f.documentElement;
            return h.innerHTML = "x<style>" + e + "</style>",
            g.insertBefore(h.lastChild, g.firstChild)
        }
        function A() {
            var b = t.elements;
            return typeof b == "string" ? b.split(" ") : b
        }
        function z(e) {
            var c = D[e[F]];
            return c || (c = {},
            E++,
            e[F] = E,
            D[E] = c),
            c
        }
        function y(b, h, f) {
            h || (h = au);
            if (C) {
                return h.createElement(b)
            }
            f || (f = z(h));
            var e;
            return f.cache[b] ? e = f.cache[b].cloneNode() : H.test(b) ? e = (f.cache[b] = f.createElem(b)).cloneNode() : e = f.createElem(b),
            e.canHaveChildren && !aq.test(b) && !e.tagUrn ? f.frag.appendChild(e) : e
        }
        function x(b, m) {
            b || (b = au);
            if (C) {
                return b.createDocumentFragment()
            }
            m = m || z(b);
            var k = m.frag.cloneNode()
              , j = 0
              , i = A()
              , h = i.length;
            for (; j < h; j++) {
                k.createElement(i[j])
            }
            return k
        }
        function v(e, c) {
            c.cache || (c.cache = {},
            c.createElem = e.createElement,
            c.createFrag = e.createDocumentFragment,
            c.frag = c.createFrag()),
            e.createElement = function(a) {
                return t.shivMethods ? y(a, e, c) : c.createElem(a)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + A().join().replace(/[\w\-]+/g, function(b) {
                return c.createElem(b),
                c.frag.createElement(b),
                'c("' + b + '")'
            }) + ");return n}")(t, c.frag)
        }
        function u(b) {
            b || (b = au);
            var e = z(b);
            return t.shivCSS && !G && !e.hasCSS && (e.hasCSS = !!B(b, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            C || v(b, e),
            b
        }
        var at = "3.7.0", ar = av.html5 || {}, aq = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, H = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, G, F = "_html5shiv", E = 0, D = {}, C;
        (function() {
            try {
                var b = au.createElement("a");
                b.innerHTML = "<xyz></xyz>",
                G = "hidden" in b,
                C = b.childNodes.length == 1 || function() {
                    au.createElement("a");
                    var c = au.createDocumentFragment();
                    return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined"
                }()
            } catch (e) {
                G = !0,
                C = !0
            }
        })();
        var t = {
            elements: ar.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: at,
            shivCSS: ar.shivCSS !== !1,
            supportsUnknownElements: C,
            shivMethods: ar.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: y,
            createDocumentFragment: x
        };
        av.html5 = t,
        u(au)
    }(this, ao),
    al._version = am,
    al._prefixes = ad,
    al._domPrefixes = Z,
    al._cssomPrefixes = ab,
    al.testProp = function(b) {
        return S([b])
    }
    ,
    al.testAllProps = O,
    al.testStyles = K,
    aj.className = aj.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (ak ? " js " + P.join(" ") : ""),
    al
}(this, this.document),
Modernizr.addTest("cssfilters", function() {
    var b = document.createElement("div");
    return b.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "),
    !!b.style.length && (document.documentMode === undefined || document.documentMode > 9)
});
/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function(a4, aH) {
    var aj, z, aD = typeof aH, aM = a4.location, n = a4.document, bY = n.documentElement, bk = a4.jQuery, J = a4.$, ab = {}, a8 = [], u = "1.10.2", aJ = a8.concat, ap = a8.push, a6 = a8.slice, aN = a8.indexOf, B = ab.toString, W = ab.hasOwnProperty, aR = u.trim, bL = function(e, b6) {
        return new bL.fn.init(e,b6,z)
    }
    , bC = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ad = /\S+/g, E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, a = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, bj = /^[\],:{}\s]*$/, bm = /(?:^|:|,)(?:\s*\[)+/g, bI = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, a0 = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bU = /^-ms-/, aW = /-([\da-z])/gi, N = function(e, b6) {
        return b6.toUpperCase()
    }
    , bZ = function(e) {
        if (n.addEventListener || e.type === "load" || n.readyState === "complete") {
            bn();
            bL.ready()
        }
    }
    , bn = function() {
        if (n.addEventListener) {
            n.removeEventListener("DOMContentLoaded", bZ, false);
            a4.removeEventListener("load", bZ, false)
        } else {
            n.detachEvent("onreadystatechange", bZ);
            a4.detachEvent("onload", bZ)
        }
    }
    ;
    bL.fn = bL.prototype = {
        jquery: u,
        constructor: bL,
        init: function(e, b8, b7) {
            var b6, b9;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    b6 = [null , e, null ]
                } else {
                    b6 = bt.exec(e)
                }
                if (b6 && (b6[1] || !b8)) {
                    if (b6[1]) {
                        b8 = b8 instanceof bL ? b8[0] : b8;
                        bL.merge(this, bL.parseHTML(b6[1], b8 && b8.nodeType ? b8.ownerDocument || b8 : n, true));
                        if (a.test(b6[1]) && bL.isPlainObject(b8)) {
                            for (b6 in b8) {
                                if (bL.isFunction(this[b6])) {
                                    this[b6](b8[b6])
                                } else {
                                    this.attr(b6, b8[b6])
                                }
                            }
                        }
                        return this
                    } else {
                        b9 = n.getElementById(b6[2]);
                        if (b9 && b9.parentNode) {
                            if (b9.id !== b6[2]) {
                                return b7.find(e)
                            }
                            this.length = 1;
                            this[0] = b9
                        }
                        this.context = n;
                        this.selector = e;
                        return this
                    }
                } else {
                    if (!b8 || b8.jquery) {
                        return (b8 || b7).find(e)
                    } else {
                        return this.constructor(b8).find(e)
                    }
                }
            } else {
                if (e.nodeType) {
                    this.context = this[0] = e;
                    this.length = 1;
                    return this
                } else {
                    if (bL.isFunction(e)) {
                        return b7.ready(e)
                    }
                }
            }
            if (e.selector !== aH) {
                this.selector = e.selector;
                this.context = e.context
            }
            return bL.makeArray(e, this)
        },
        selector: "",
        length: 0,
        toArray: function() {
            return a6.call(this)
        },
        get: function(e) {
            return e == null  ? this.toArray() : (e < 0 ? this[this.length + e] : this[e])
        },
        pushStack: function(e) {
            var b6 = bL.merge(this.constructor(), e);
            b6.prevObject = this;
            b6.context = this.context;
            return b6
        },
        each: function(b6, e) {
            return bL.each(this, b6, e)
        },
        ready: function(e) {
            bL.ready.promise().done(e);
            return this
        },
        slice: function() {
            return this.pushStack(a6.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b7) {
            var e = this.length
              , b6 = +b7 + (b7 < 0 ? e : 0);
            return this.pushStack(b6 >= 0 && b6 < e ? [this[b6]] : [])
        },
        map: function(e) {
            return this.pushStack(bL.map(this, function(b7, b6) {
                return e.call(b7, b6, b7)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: ap,
        sort: [].sort,
        splice: [].splice
    };
    bL.fn.init.prototype = bL.fn;
    bL.extend = bL.fn.extend = function() {
        var e, cb, b6, b7, cf, cc, ca = arguments[0] || {}, b9 = 1, b8 = arguments.length, ce = false;
        if (typeof ca === "boolean") {
            ce = ca;
            ca = arguments[1] || {};
            b9 = 2
        }
        if (typeof ca !== "object" && !bL.isFunction(ca)) {
            ca = {}
        }
        if (b8 === b9) {
            ca = this;
            --b9
        }
        for (; b9 < b8; b9++) {
            if ((cf = arguments[b9]) != null ) {
                for (b7 in cf) {
                    e = ca[b7];
                    b6 = cf[b7];
                    if (ca === b6) {
                        continue
                    }
                    if (ce && b6 && (bL.isPlainObject(b6) || (cb = bL.isArray(b6)))) {
                        if (cb) {
                            cb = false;
                            cc = e && bL.isArray(e) ? e : []
                        } else {
                            cc = e && bL.isPlainObject(e) ? e : {}
                        }
                        ca[b7] = bL.extend(ce, cc, b6)
                    } else {
                        if (b6 !== aH) {
                            ca[b7] = b6
                        }
                    }
                }
            }
        }
        return ca
    }
    ;
    bL.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
        noConflict: function(e) {
            if (a4.$ === bL) {
                a4.$ = J
            }
            if (e && a4.jQuery === bL) {
                a4.jQuery = bk
            }
            return bL
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                bL.readyWait++
            } else {
                bL.ready(true)
            }
        },
        ready: function(e) {
            if (e === true ? --bL.readyWait : bL.isReady) {
                return
            }
            if (!n.body) {
                return setTimeout(bL.ready)
            }
            bL.isReady = true;
            if (e !== true && --bL.readyWait > 0) {
                return
            }
            aj.resolveWith(n, [bL]);
            if (bL.fn.trigger) {
                bL(n).trigger("ready").off("ready")
            }
        },
        isFunction: function(e) {
            return bL.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return bL.type(e) === "array"
        }
        ,
        isWindow: function(e) {
            return e != null  && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            if (e == null ) {
                return String(e)
            }
            return typeof e === "object" || typeof e === "function" ? ab[B.call(e)] || "object" : typeof e
        },
        isPlainObject: function(b8) {
            var b6;
            if (!b8 || bL.type(b8) !== "object" || b8.nodeType || bL.isWindow(b8)) {
                return false
            }
            try {
                if (b8.constructor && !W.call(b8, "constructor") && !W.call(b8.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (b7) {
                return false
            }
            if (bL.support.ownLast) {
                for (b6 in b8) {
                    return W.call(b8, b6)
                }
            }
            for (b6 in b8) {}
            return b6 === aH || W.call(b8, b6)
        },
        isEmptyObject: function(b6) {
            var e;
            for (e in b6) {
                return false
            }
            return true
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(b9, b7, b8) {
            if (!b9 || typeof b9 !== "string") {
                return null 
            }
            if (typeof b7 === "boolean") {
                b8 = b7;
                b7 = false
            }
            b7 = b7 || n;
            var b6 = a.exec(b9)
              , e = !b8 && [];
            if (b6) {
                return [b7.createElement(b6[1])]
            }
            b6 = bL.buildFragment([b9], b7, e);
            if (e) {
                bL(e).remove()
            }
            return bL.merge([], b6.childNodes)
        },
        parseJSON: function(e) {
            if (a4.JSON && a4.JSON.parse) {
                return a4.JSON.parse(e)
            }
            if (e === null ) {
                return e
            }
            if (typeof e === "string") {
                e = bL.trim(e);
                if (e) {
                    if (bj.test(e.replace(bI, "@").replace(a0, "]").replace(bm, ""))) {
                        return (new Function("return " + e))()
                    }
                }
            }
            bL.error("Invalid JSON: " + e)
        },
        parseXML: function(b8) {
            var b6, b7;
            if (!b8 || typeof b8 !== "string") {
                return null 
            }
            try {
                if (a4.DOMParser) {
                    b7 = new DOMParser();
                    b6 = b7.parseFromString(b8, "text/xml")
                } else {
                    b6 = new ActiveXObject("Microsoft.XMLDOM");
                    b6.async = "false";
                    b6.loadXML(b8)
                }
            } catch (b9) {
                b6 = aH
            }
            if (!b6 || !b6.documentElement || b6.getElementsByTagName("parsererror").length) {
                bL.error("Invalid XML: " + b8)
            }
            return b6
        },
        noop: function() {},
        globalEval: function(e) {
            if (e && bL.trim(e)) {
                (a4.execScript || function(b6) {
                    a4["eval"].call(a4, b6)
                }
                )(e)
            }
        },
        camelCase: function(e) {
            return e.replace(bU, "ms-").replace(aW, N)
        },
        nodeName: function(b6, e) {
            return b6.nodeName && b6.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(ca, cb, b6) {
            var b9, b7 = 0, b8 = ca.length, e = ac(ca);
            if (b6) {
                if (e) {
                    for (; b7 < b8; b7++) {
                        b9 = cb.apply(ca[b7], b6);
                        if (b9 === false) {
                            break
                        }
                    }
                } else {
                    for (b7 in ca) {
                        b9 = cb.apply(ca[b7], b6);
                        if (b9 === false) {
                            break
                        }
                    }
                }
            } else {
                if (e) {
                    for (; b7 < b8; b7++) {
                        b9 = cb.call(ca[b7], b7, ca[b7]);
                        if (b9 === false) {
                            break
                        }
                    }
                } else {
                    for (b7 in ca) {
                        b9 = cb.call(ca[b7], b7, ca[b7]);
                        if (b9 === false) {
                            break
                        }
                    }
                }
            }
            return ca
        },
        trim: aR && !aR.call("\uFEFF\xA0") ? function(e) {
            return e == null  ? "" : aR.call(e)
        }
         : function(e) {
            return e == null  ? "" : (e + "").replace(E, "")
        }
        ,
        makeArray: function(e, b7) {
            var b6 = b7 || [];
            if (e != null ) {
                if (ac(Object(e))) {
                    bL.merge(b6, typeof e === "string" ? [e] : e)
                } else {
                    ap.call(b6, e)
                }
            }
            return b6
        },
        inArray: function(b8, b6, b7) {
            var e;
            if (b6) {
                if (aN) {
                    return aN.call(b6, b8, b7)
                }
                e = b6.length;
                b7 = b7 ? b7 < 0 ? Math.max(0, e + b7) : b7 : 0;
                for (; b7 < e; b7++) {
                    if (b7 in b6 && b6[b7] === b8) {
                        return b7
                    }
                }
            }
            return -1
        },
        merge: function(b9, b7) {
            var e = b7.length
              , b8 = b9.length
              , b6 = 0;
            if (typeof e === "number") {
                for (; b6 < e; b6++) {
                    b9[b8++] = b7[b6]
                }
            } else {
                while (b7[b6] !== aH) {
                    b9[b8++] = b7[b6++]
                }
            }
            b9.length = b8;
            return b9
        },
        grep: function(b6, cb, e) {
            var ca, b7 = [], b8 = 0, b9 = b6.length;
            e = !!e;
            for (; b8 < b9; b8++) {
                ca = !!cb(b6[b8], b8);
                if (e !== ca) {
                    b7.push(b6[b8])
                }
            }
            return b7
        },
        map: function(b7, cc, e) {
            var cb, b9 = 0, ca = b7.length, b6 = ac(b7), b8 = [];
            if (b6) {
                for (; b9 < ca; b9++) {
                    cb = cc(b7[b9], b9, e);
                    if (cb != null ) {
                        b8[b8.length] = cb
                    }
                }
            } else {
                for (b9 in b7) {
                    cb = cc(b7[b9], b9, e);
                    if (cb != null ) {
                        b8[b8.length] = cb
                    }
                }
            }
            return aJ.apply([], b8)
        },
        guid: 1,
        proxy: function(b9, b8) {
            var e, b7, b6;
            if (typeof b8 === "string") {
                b6 = b9[b8];
                b8 = b9;
                b9 = b6
            }
            if (!bL.isFunction(b9)) {
                return aH
            }
            e = a6.call(arguments, 2);
            b7 = function() {
                return b9.apply(b8 || this, e.concat(a6.call(arguments)))
            }
            ;
            b7.guid = b9.guid = b9.guid || bL.guid++;
            return b7
        },
        access: function(e, ca, cc, cb, b8, cf, ce) {
            var b7 = 0
              , b6 = e.length
              , b9 = cc == null ;
            if (bL.type(cc) === "object") {
                b8 = true;
                for (b7 in cc) {
                    bL.access(e, ca, b7, cc[b7], true, cf, ce)
                }
            } else {
                if (cb !== aH) {
                    b8 = true;
                    if (!bL.isFunction(cb)) {
                        ce = true
                    }
                    if (b9) {
                        if (ce) {
                            ca.call(e, cb);
                            ca = null 
                        } else {
                            b9 = ca;
                            ca = function(ch, cg, cj) {
                                return b9.call(bL(ch), cj)
                            }
                        }
                    }
                    if (ca) {
                        for (; b7 < b6; b7++) {
                            ca(e[b7], cc, ce ? cb : cb.call(e[b7], b7, ca(e[b7], cc)))
                        }
                    }
                }
            }
            return b8 ? e : b9 ? ca.call(e) : b6 ? ca(e[0], cc) : cf
        },
        now: function() {
            return (new Date()).getTime()
        },
        swap: function(ca, b9, cb, b8) {
            var b7, b6, e = {};
            for (b6 in b9) {
                e[b6] = ca.style[b6];
                ca.style[b6] = b9[b6]
            }
            b7 = cb.apply(ca, b8 || []);
            for (b6 in b9) {
                ca.style[b6] = e[b6]
            }
            return b7
        }
    });
    bL.ready.promise = function(b9) {
        if (!aj) {
            aj = bL.Deferred();
            if (n.readyState === "complete") {
                setTimeout(bL.ready)
            } else {
                if (n.addEventListener) {
                    n.addEventListener("DOMContentLoaded", bZ, false);
                    a4.addEventListener("load", bZ, false)
                } else {
                    n.attachEvent("onreadystatechange", bZ);
                    a4.attachEvent("onload", bZ);
                    var b8 = false;
                    try {
                        b8 = a4.frameElement == null  && n.documentElement
                    } catch (b7) {}
                    if (b8 && b8.doScroll) {
                        (function b6() {
                            if (!bL.isReady) {
                                try {
                                    b8.doScroll("left")
                                } catch (ca) {
                                    return setTimeout(b6, 50)
                                }
                                bn();
                                bL.ready()
                            }
                        })()
                    }
                }
            }
        }
        return aj.promise(b9)
    }
    ;
    bL.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b6, e) {
        ab["[object " + e + "]"] = e.toLowerCase()
    });
    function ac(b7) {
        var b6 = b7.length
          , e = bL.type(b7);
        if (bL.isWindow(b7)) {
            return false
        }
        if (b7.nodeType === 1 && b6) {
            return true
        }
        return e === "array" || e !== "function" && (b6 === 0 || typeof b6 === "number" && b6 > 0 && (b6 - 1) in b7)
    }
    z = bL(n);
    /*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
    (function(di, cm) {
        var cB, dl, cg, cr, cK, cN, cY, dq, cL, c1, cF, cs, db, c5, dj, cf, cI, dd = "sizzle" + -(new Date()), cM = di.document, dm = 0, c6 = 0, b9 = cD(), dc = cD(), cJ = cD(), cZ = false, cH = function(dr, e) {
            if (dr === e) {
                cZ = true;
                return 0
            }
            return 0
        }
        , dh = typeof cm, cT = 1 << 31, cR = ({}).hasOwnProperty, df = [], dg = df.pop, cP = df.push, b7 = df.push, cq = df.slice, ce = df.indexOf || function(ds) {
            var dr = 0
              , e = this.length;
            for (; dr < e; dr++) {
                if (this[dr] === ds) {
                    return dr
                }
            }
            return -1
        }
        , b8 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ct = "[\\x20\\t\\r\\n\\f]", b6 = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", cO = b6.replace("w", "w#"), c8 = "\\[" + ct + "*(" + b6 + ")" + ct + "*(?:([*^$|!~]?=)" + ct + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cO + ")|)|)" + ct + "*\\]", co = ":(" + b6 + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + c8.replace(3, 8) + ")*)|.*)\\)|)", cv = new RegExp("^" + ct + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ct + "+$","g"), cy = new RegExp("^" + ct + "*," + ct + "*"), cE = new RegExp("^" + ct + "*([>+~]|" + ct + ")" + ct + "*"), c3 = new RegExp(ct + "*[+~]"), cx = new RegExp("=" + ct + "*([^\\]'\"]*)" + ct + "*\\]","g"), cV = new RegExp(co), cW = new RegExp("^" + cO + "$"), c4 = {
            ID: new RegExp("^#(" + b6 + ")"),
            CLASS: new RegExp("^\\.(" + b6 + ")"),
            TAG: new RegExp("^(" + b6.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + c8),
            PSEUDO: new RegExp("^" + co),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ct + "*(even|odd|(([+-]|)(\\d*)n|)" + ct + "*(?:([+-]|)" + ct + "*(\\d+)|))" + ct + "*\\)|)","i"),
            bool: new RegExp("^(?:" + b8 + ")$","i"),
            needsContext: new RegExp("^" + ct + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ct + "*((?:-\\d)?\\d*)" + ct + "*\\)|)(?=[^-]|$)","i")
        }, cS = /^[^{]+\{\s*\[native \w/, cU = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, cc = /^(?:input|select|textarea|button)$/i, cp = /^h\d$/i, cQ = /'|\\/g, cw = new RegExp("\\\\([\\da-f]{1,6}" + ct + "?|(" + ct + ")|.)","ig"), c7 = function(e, dt, dr) {
            var ds = "0x" + dt - 65536;
            return ds !== ds || dr ? dt : ds < 0 ? String.fromCharCode(ds + 65536) : String.fromCharCode(ds >> 10 | 55296, ds & 1023 | 56320)
        }
        ;
        try {
            b7.apply((df = cq.call(cM.childNodes)), cM.childNodes);
            df[cM.childNodes.length].nodeType
        } catch (cG) {
            b7 = {
                apply: df.length ? function(dr, e) {
                    cP.apply(dr, cq.call(e))
                }
                 : function(dt, ds) {
                    var e = dt.length
                      , dr = 0;
                    while ((dt[e++] = ds[dr++]) ) {}
                    dt.length = e - 1
                }
            }
        }
        function cz(dy, dr, dD, dF) {
            var dE, dv, dw, dB, dC, du, dt, e, ds, dA;
            if ((dr ? dr.ownerDocument || dr : cM) !== cF) {
                c1(dr)
            }
            dr = dr || cF;
            dD = dD || [];
            if (!dy || typeof dy !== "string") {
                return dD
            }
            if ((dB = dr.nodeType) !== 1 && dB !== 9) {
                return []
            }
            if (db && !dF) {
                if ((dE = cU.exec(dy)) ) {
                    if ((dw = dE[1]) ) {
                        if (dB === 9) {
                            dv = dr.getElementById(dw);
                            if (dv && dv.parentNode) {
                                if (dv.id === dw) {
                                    dD.push(dv);
                                    return dD
                                }
                            } else {
                                return dD
                            }
                        } else {
                            if (dr.ownerDocument && (dv = dr.ownerDocument.getElementById(dw)) && cI(dr, dv) && dv.id === dw) {
                                dD.push(dv);
                                return dD
                            }
                        }
                    } else {
                        if (dE[2]) {
                            b7.apply(dD, dr.getElementsByTagName(dy));
                            return dD
                        } else {
                            if ((dw = dE[3]) && dl.getElementsByClassName && dr.getElementsByClassName) {
                                b7.apply(dD, dr.getElementsByClassName(dw));
                                return dD
                            }
                        }
                    }
                }
                if (dl.qsa && (!c5 || !c5.test(dy))) {
                    e = dt = dd;
                    ds = dr;
                    dA = dB === 9 && dy;
                    if (dB === 1 && dr.nodeName.toLowerCase() !== "object") {
                        du = ck(dy);
                        if ((dt = dr.getAttribute("id")) ) {
                            e = dt.replace(cQ, "\\$&")
                        } else {
                            dr.setAttribute("id", e)
                        }
                        e = "[id='" + e + "'] ";
                        dC = du.length;
                        while (dC--) {
                            du[dC] = e + cl(du[dC])
                        }
                        ds = c3.test(dy) && dr.parentNode || dr;
                        dA = du.join(",")
                    }
                    if (dA) {
                        try {
                            b7.apply(dD, ds.querySelectorAll(dA));
                            return dD
                        } catch (dx) {} finally {
                            if (!dt) {
                                dr.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return dk(dy.replace(cv, "$1"), dr, dD, dF)
        }
        function cD() {
            var dr = [];
            function e(ds, dt) {
                if (dr.push(ds += " ") > cr.cacheLength) {
                    delete e[dr.shift()]
                }
                return ( e[ds] = dt) 
            }
            return e
        }
        function cn(e) {
            e[dd] = true;
            return e
        }
        function ch(dr) {
            var dt = cF.createElement("div");
            try {
                return !!dr(dt)
            } catch (ds) {
                return false
            } finally {
                if (dt.parentNode) {
                    dt.parentNode.removeChild(dt)
                }
                dt = null 
            }
        }
        function dn(dr, dt) {
            var e = dr.split("|")
              , ds = dr.length;
            while (ds--) {
                cr.attrHandle[e[ds]] = dt
            }
        }
        function ca(dr, e) {
            var dt = e && dr
              , ds = dt && dr.nodeType === 1 && e.nodeType === 1 && (~e.sourceIndex || cT) - (~dr.sourceIndex || cT);
            if (ds) {
                return ds
            }
            if (dt) {
                while ((dt = dt.nextSibling) ) {
                    if (dt === e) {
                        return -1
                    }
                }
            }
            return dr ? 1 : -1
        }
        function cA(e) {
            return function(ds) {
                var dr = ds.nodeName.toLowerCase();
                return dr === "input" && ds.type === e
            }
        }
        function cb(e) {
            return function(ds) {
                var dr = ds.nodeName.toLowerCase();
                return (dr === "input" || dr === "button") && ds.type === e
            }
        }
        function c9(e) {
            return cn(function(dr) {
                dr = +dr;
                return cn(function(ds, dw) {
                    var du, dt = e([], ds.length, dr), dv = dt.length;
                    while (dv--) {
                        if (ds[(du = dt[dv])]) {
                            ds[du] = !(dw[du] = ds[du])
                        }
                    }
                })
            })
        }
        cN = cz.isXML = function(e) {
            var dr = e && (e.ownerDocument || e).documentElement;
            return dr ? dr.nodeName !== "HTML" : false
        }
        ;
        dl = cz.support = {};
        c1 = cz.setDocument = function(dr) {
            var ds = dr ? dr.ownerDocument || dr : cM
              , e = ds.defaultView;
            if (ds === cF || ds.nodeType !== 9 || !ds.documentElement) {
                return cF
            }
            cF = ds;
            cs = ds.documentElement;
            db = !cN(ds);
            if (e && e.attachEvent && e !== e.top) {
                e.attachEvent("onbeforeunload", function() {
                    c1()
                })
            }
            dl.attributes = ch(function(dt) {
                dt.className = "i";
                return !dt.getAttribute("className")
            });
            dl.getElementsByTagName = ch(function(dt) {
                dt.appendChild(ds.createComment(""));
                return !dt.getElementsByTagName("*").length
            });
            dl.getElementsByClassName = ch(function(dt) {
                dt.innerHTML = "<div class='a'></div><div class='a i'></div>";
                dt.firstChild.className = "i";
                return dt.getElementsByClassName("i").length === 2
            });
            dl.getById = ch(function(dt) {
                cs.appendChild(dt).id = dd;
                return !ds.getElementsByName || !ds.getElementsByName(dd).length
            });
            if (dl.getById) {
                cr.find.ID = function(dv, du) {
                    if (typeof du.getElementById !== dh && db) {
                        var dt = du.getElementById(dv);
                        return dt && dt.parentNode ? [dt] : []
                    }
                }
                ;
                cr.filter.ID = function(du) {
                    var dt = du.replace(cw, c7);
                    return function(dv) {
                        return dv.getAttribute("id") === dt
                    }
                }
            } else {
                delete cr.find.ID;
                cr.filter.ID = function(du) {
                    var dt = du.replace(cw, c7);
                    return function(dw) {
                        var dv = typeof dw.getAttributeNode !== dh && dw.getAttributeNode("id");
                        return dv && dv.value === dt
                    }
                }
            }
            cr.find.TAG = dl.getElementsByTagName ? function(dt, du) {
                if (typeof du.getElementsByTagName !== dh) {
                    return du.getElementsByTagName(dt)
                }
            }
             : function(dt, dx) {
                var dy, dw = [], dv = 0, du = dx.getElementsByTagName(dt);
                if (dt === "*") {
                    while ((dy = du[dv++]) ) {
                        if (dy.nodeType === 1) {
                            dw.push(dy)
                        }
                    }
                    return dw
                }
                return du
            }
            ;
            cr.find.CLASS = dl.getElementsByClassName && function(du, dt) {
                if (typeof dt.getElementsByClassName !== dh && db) {
                    return dt.getElementsByClassName(du)
                }
            }
            ;
            dj = [];
            c5 = [];
            if ((dl.qsa = cS.test(ds.querySelectorAll)) ) {
                ch(function(dt) {
                    dt.innerHTML = "<select><option selected=''></option></select>";
                    if (!dt.querySelectorAll("[selected]").length) {
                        c5.push("\\[" + ct + "*(?:value|" + b8 + ")")
                    }
                    if (!dt.querySelectorAll(":checked").length) {
                        c5.push(":checked")
                    }
                });
                ch(function(du) {
                    var dt = ds.createElement("input");
                    dt.setAttribute("type", "hidden");
                    du.appendChild(dt).setAttribute("t", "");
                    if (du.querySelectorAll("[t^='']").length) {
                        c5.push("[*^$]=" + ct + "*(?:''|\"\")")
                    }
                    if (!du.querySelectorAll(":enabled").length) {
                        c5.push(":enabled", ":disabled")
                    }
                    du.querySelectorAll("*,:x");
                    c5.push(",.*:")
                })
            }
            if ((dl.matchesSelector = cS.test((cf = cs.webkitMatchesSelector || cs.mozMatchesSelector || cs.oMatchesSelector || cs.msMatchesSelector))) ) {
                ch(function(dt) {
                    dl.disconnectedMatch = cf.call(dt, "div");
                    cf.call(dt, "[s!='']:x");
                    dj.push("!=", co)
                })
            }
            c5 = c5.length && new RegExp(c5.join("|"));
            dj = dj.length && new RegExp(dj.join("|"));
            cI = cS.test(cs.contains) || cs.compareDocumentPosition ? function(du, dt) {
                var dw = du.nodeType === 9 ? du.documentElement : du
                  , dv = dt && dt.parentNode;
                return du === dv || !!(dv && dv.nodeType === 1 && (dw.contains ? dw.contains(dv) : du.compareDocumentPosition && du.compareDocumentPosition(dv) & 16))
            }
             : function(du, dt) {
                if (dt) {
                    while ((dt = dt.parentNode) ) {
                        if (dt === du) {
                            return true
                        }
                    }
                }
                return false
            }
            ;
            cH = cs.compareDocumentPosition ? function(du, dt) {
                if (du === dt) {
                    cZ = true;
                    return 0
                }
                var dv = dt.compareDocumentPosition && du.compareDocumentPosition && du.compareDocumentPosition(dt);
                if (dv) {
                    if (dv & 1 || (!dl.sortDetached && dt.compareDocumentPosition(du) === dv)) {
                        if (du === ds || cI(cM, du)) {
                            return -1
                        }
                        if (dt === ds || cI(cM, dt)) {
                            return 1
                        }
                        return cL ? (ce.call(cL, du) - ce.call(cL, dt)) : 0
                    }
                    return dv & 4 ? -1 : 1
                }
                return du.compareDocumentPosition ? -1 : 1
            }
             : function(du, dt) {
                var dB, dx = 0, dA = du.parentNode, dw = dt.parentNode, dv = [du], dy = [dt];
                if (du === dt) {
                    cZ = true;
                    return 0
                } else {
                    if (!dA || !dw) {
                        return du === ds ? -1 : dt === ds ? 1 : dA ? -1 : dw ? 1 : cL ? (ce.call(cL, du) - ce.call(cL, dt)) : 0
                    } else {
                        if (dA === dw) {
                            return ca(du, dt)
                        }
                    }
                }
                dB = du;
                while ((dB = dB.parentNode) ) {
                    dv.unshift(dB)
                }
                dB = dt;
                while ((dB = dB.parentNode) ) {
                    dy.unshift(dB)
                }
                while (dv[dx] === dy[dx]) {
                    dx++
                }
                return dx ? ca(dv[dx], dy[dx]) : dv[dx] === cM ? -1 : dy[dx] === cM ? 1 : 0
            }
            ;
            return ds
        }
        ;
        cz.matches = function(dr, e) {
            return cz(dr, null , null , e)
        }
        ;
        cz.matchesSelector = function(ds, du) {
            if ((ds.ownerDocument || ds) !== cF) {
                c1(ds)
            }
            du = du.replace(cx, "='$1']");
            if (dl.matchesSelector && db && (!dj || !dj.test(du)) && (!c5 || !c5.test(du))) {
                try {
                    var dr = cf.call(ds, du);
                    if (dr || dl.disconnectedMatch || ds.document && ds.document.nodeType !== 11) {
                        return dr
                    }
                } catch (dt) {}
            }
            return cz(du, cF, null , [ds]).length > 0
        }
        ;
        cz.contains = function(e, dr) {
            if ((e.ownerDocument || e) !== cF) {
                c1(e)
            }
            return cI(e, dr)
        }
        ;
        cz.attr = function(ds, e) {
            if ((ds.ownerDocument || ds) !== cF) {
                c1(ds)
            }
            var dr = cr.attrHandle[e.toLowerCase()]
              , dt = dr && cR.call(cr.attrHandle, e.toLowerCase()) ? dr(ds, e, !db) : cm;
            return dt === cm ? dl.attributes || !db ? ds.getAttribute(e) : (dt = ds.getAttributeNode(e)) && dt.specified ? dt.value : null  : dt
        }
        ;
        cz.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ;
        cz.uniqueSort = function(ds) {
            var dt, du = [], e = 0, dr = 0;
            cZ = !dl.detectDuplicates;
            cL = !dl.sortStable && ds.slice(0);
            ds.sort(cH);
            if (cZ) {
                while ((dt = ds[dr++]) ) {
                    if (dt === ds[dr]) {
                        e = du.push(dr)
                    }
                }
                while (e--) {
                    ds.splice(du[e], 1)
                }
            }
            return ds
        }
        ;
        cK = cz.getText = function(du) {
            var dt, dr = "", ds = 0, e = du.nodeType;
            if (!e) {
                for (; (dt = du[ds]) ; ds++) {
                    dr += cK(dt)
                }
            } else {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof du.textContent === "string") {
                        return du.textContent
                    } else {
                        for (du = du.firstChild; du; du = du.nextSibling) {
                            dr += cK(du)
                        }
                    }
                } else {
                    if (e === 3 || e === 4) {
                        return du.nodeValue
                    }
                }
            }
            return dr
        }
        ;
        cr = cz.selectors = {
            cacheLength: 50,
            createPseudo: cn,
            match: c4,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(cw, c7);
                    e[3] = (e[4] || e[5] || "").replace(cw, c7);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            cz.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +((e[7] + e[8]) || e[3] === "odd")
                    } else {
                        if (e[3]) {
                            cz.error(e[0])
                        }
                    }
                    return e
                },
                PSEUDO: function(dr) {
                    var e, ds = !dr[5] && dr[2];
                    if (c4.CHILD.test(dr[0])) {
                        return null 
                    }
                    if (dr[3] && dr[4] !== cm) {
                        dr[2] = dr[4]
                    } else {
                        if (ds && cV.test(ds) && (e = ck(ds, true)) && (e = ds.indexOf(")", ds.length - e) - ds.length)) {
                            dr[0] = dr[0].slice(0, e);
                            dr[2] = ds.slice(0, e)
                        }
                    }
                    return dr.slice(0, 3)
                }
            },
            filter: {
                TAG: function(dr) {
                    var e = dr.replace(cw, c7).toLowerCase();
                    return dr === "*" ? function() {
                        return true
                    }
                     : function(ds) {
                        return ds.nodeName && ds.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(e) {
                    var dr = b9[e + " "];
                    return dr || (dr = new RegExp("(^|" + ct + ")" + e + "(" + ct + "|$)")) && b9(e, function(ds) {
                        return dr.test(typeof ds.className === "string" && ds.className || typeof ds.getAttribute !== dh && ds.getAttribute("class") || "")
                    })
                },
                ATTR: function(ds, dr, e) {
                    return function(du) {
                        var dt = cz.attr(du, ds);
                        if (dt == null ) {
                            return dr === "!="
                        }
                        if (!dr) {
                            return true
                        }
                        dt += "";
                        return dr === "=" ? dt === e : dr === "!=" ? dt !== e : dr === "^=" ? e && dt.indexOf(e) === 0 : dr === "*=" ? e && dt.indexOf(e) > -1 : dr === "$=" ? e && dt.slice(-e.length) === e : dr === "~=" ? (" " + dt + " ").indexOf(e) > -1 : dr === "|=" ? dt === e || dt.slice(0, e.length + 1) === e + "-" : false
                    }
                },
                CHILD: function(dr, du, dt, dv, ds) {
                    var dx = dr.slice(0, 3) !== "nth"
                      , e = dr.slice(-4) !== "last"
                      , dw = du === "of-type";
                    return dv === 1 && ds === 0 ? function(dy) {
                        return !!dy.parentNode
                    }
                     : function(dF, dD, dI) {
                        var dy, dL, dG, dK, dH, dC, dE = dx !== e ? "nextSibling" : "previousSibling", dJ = dF.parentNode, dB = dw && dF.nodeName.toLowerCase(), dA = !dI && !dw;
                        if (dJ) {
                            if (dx) {
                                while (dE) {
                                    dG = dF;
                                    while ((dG = dG[dE]) ) {
                                        if (dw ? dG.nodeName.toLowerCase() === dB : dG.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    dC = dE = dr === "only" && !dC && "nextSibling"
                                }
                                return true
                            }
                            dC = [e ? dJ.firstChild : dJ.lastChild];
                            if (e && dA) {
                                dL = dJ[dd] || (dJ[dd] = {});
                                dy = dL[dr] || [];
                                dH = dy[0] === dm && dy[1];
                                dK = dy[0] === dm && dy[2];
                                dG = dH && dJ.childNodes[dH];
                                while ((dG = ++dH && dG && dG[dE] || (dK = dH = 0) || dC.pop()) ) {
                                    if (dG.nodeType === 1 && ++dK && dG === dF) {
                                        dL[dr] = [dm, dH, dK];
                                        break
                                    }
                                }
                            } else {
                                if (dA && (dy = (dF[dd] || (dF[dd] = {}))[dr]) && dy[0] === dm) {
                                    dK = dy[1]
                                } else {
                                    while ((dG = ++dH && dG && dG[dE] || (dK = dH = 0) || dC.pop()) ) {
                                        if ((dw ? dG.nodeName.toLowerCase() === dB : dG.nodeType === 1) && ++dK) {
                                            if (dA) {
                                                (dG[dd] || (dG[dd] = {}))[dr] = [dm, dK]
                                            }
                                            if (dG === dF) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            dK -= ds;
                            return dK === dv || (dK % dv === 0 && dK / dv >= 0)
                        }
                    }
                },
                PSEUDO: function(dt, ds) {
                    var e, dr = cr.pseudos[dt] || cr.setFilters[dt.toLowerCase()] || cz.error("unsupported pseudo: " + dt);
                    if (dr[dd]) {
                        return dr(ds)
                    }
                    if (dr.length > 1) {
                        e = [dt, dt, "", ds];
                        return cr.setFilters.hasOwnProperty(dt.toLowerCase()) ? cn(function(dw, dy) {
                            var dv, du = dr(dw, ds), dx = du.length;
                            while (dx--) {
                                dv = ce.call(dw, du[dx]);
                                dw[dv] = !(dy[dv] = du[dx])
                            }
                        }) : function(du) {
                            return dr(du, 0, e)
                        }
                    }
                    return dr
                }
            },
            pseudos: {
                not: cn(function(e) {
                    var dr = []
                      , ds = []
                      , dt = cY(e.replace(cv, "$1"));
                    return dt[dd] ? cn(function(dv, dB, dy, dw) {
                        var dA, du = dt(dv, null , dw, []), dx = dv.length;
                        while (dx--) {
                            if ((dA = du[dx]) ) {
                                dv[dx] = !(dB[dx] = dA)
                            }
                        }
                    }) : function(dw, dv, du) {
                        dr[0] = dw;
                        dt(dr, null , du, ds);
                        return !ds.pop()
                    }
                }),
                has: cn(function(e) {
                    return function(dr) {
                        return cz(e, dr).length > 0
                    }
                }),
                contains: cn(function(e) {
                    return function(dr) {
                        return (dr.textContent || dr.innerText || cK(dr)).indexOf(e) > -1
                    }
                }),
                lang: cn(function(e) {
                    if (!cW.test(e || "")) {
                        cz.error("unsupported lang: " + e)
                    }
                    e = e.replace(cw, c7).toLowerCase();
                    return function(ds) {
                        var dr;
                        do {
                            if ((dr = db ? ds.lang : ds.getAttribute("xml:lang") || ds.getAttribute("lang")) ) {
                                dr = dr.toLowerCase();
                                return dr === e || dr.indexOf(e + "-") === 0
                            }
                        } while ((ds = ds.parentNode) && ds.nodeType === 1);return false
                    }
                }),
                target: function(e) {
                    var dr = di.location && di.location.hash;
                    return dr && dr.slice(1) === e.id
                },
                root: function(e) {
                    return e === cs
                },
                focus: function(e) {
                    return e === cF.activeElement && (!cF.hasFocus || cF.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === false
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    var dr = e.nodeName.toLowerCase();
                    return (dr === "input" && !!e.checked) || (dr === "option" && !!e.selected)
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(e) {
                    return !cr.pseudos.empty(e)
                },
                header: function(e) {
                    return cp.test(e.nodeName)
                },
                input: function(e) {
                    return cc.test(e.nodeName)
                },
                button: function(dr) {
                    var e = dr.nodeName.toLowerCase();
                    return e === "input" && dr.type === "button" || e === "button"
                },
                text: function(dr) {
                    var e;
                    return dr.nodeName.toLowerCase() === "input" && dr.type === "text" && ((e = dr.getAttribute("type")) == null  || e.toLowerCase() === dr.type)
                },
                first: c9(function() {
                    return [0]
                }),
                last: c9(function(e, dr) {
                    return [dr - 1]
                }),
                eq: c9(function(e, ds, dr) {
                    return [dr < 0 ? dr + ds : dr]
                }),
                even: c9(function(e, ds) {
                    var dr = 0;
                    for (; dr < ds; dr += 2) {
                        e.push(dr)
                    }
                    return e
                }),
                odd: c9(function(e, ds) {
                    var dr = 1;
                    for (; dr < ds; dr += 2) {
                        e.push(dr)
                    }
                    return e
                }),
                lt: c9(function(e, dt, ds) {
                    var dr = ds < 0 ? ds + dt : ds;
                    for (; --dr >= 0; ) {
                        e.push(dr)
                    }
                    return e
                }),
                gt: c9(function(e, dt, ds) {
                    var dr = ds < 0 ? ds + dt : ds;
                    for (; ++dr < dt; ) {
                        e.push(dr)
                    }
                    return e
                })
            }
        };
        cr.pseudos.nth = cr.pseudos.eq;
        for (cB in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        }) {
            cr.pseudos[cB] = cA(cB)
        }
        for (cB in {
            submit: true,
            reset: true
        }) {
            cr.pseudos[cB] = cb(cB)
        }
        function cX() {}
        cX.prototype = cr.filters = cr.pseudos;
        cr.setFilters = new cX();
        function ck(du, dA) {
            var dr, dv, dx, dy, dw, ds, e, dt = dc[du + " "];
            if (dt) {
                return dA ? 0 : dt.slice(0)
            }
            dw = du;
            ds = [];
            e = cr.preFilter;
            while (dw) {
                if (!dr || (dv = cy.exec(dw))) {
                    if (dv) {
                        dw = dw.slice(dv[0].length) || dw
                    }
                    ds.push(dx = [])
                }
                dr = false;
                if ((dv = cE.exec(dw)) ) {
                    dr = dv.shift();
                    dx.push({
                        value: dr,
                        type: dv[0].replace(cv, " ")
                    });
                    dw = dw.slice(dr.length)
                }
                for (dy in cr.filter) {
                    if ((dv = c4[dy].exec(dw)) && (!e[dy] || (dv = e[dy](dv)))) {
                        dr = dv.shift();
                        dx.push({
                            value: dr,
                            type: dy,
                            matches: dv
                        });
                        dw = dw.slice(dr.length)
                    }
                }
                if (!dr) {
                    break
                }
            }
            return dA ? dw.length : dw ? cz.error(du) : dc(du, ds).slice(0)
        }
        function cl(dt) {
            var ds = 0
              , dr = dt.length
              , e = "";
            for (; ds < dr; ds++) {
                e += dt[ds].value
            }
            return e
        }
        function cu(du, ds, dt) {
            var e = ds.dir
              , dv = dt && e === "parentNode"
              , dr = c6++;
            return ds.first ? function(dy, dx, dw) {
                while ((dy = dy[e]) ) {
                    if (dy.nodeType === 1 || dv) {
                        return du(dy, dx, dw)
                    }
                }
            }
             : function(dB, dy, dx) {
                var dD, dw, dA, dC = dm + " " + dr;
                if (dx) {
                    while ((dB = dB[e]) ) {
                        if (dB.nodeType === 1 || dv) {
                            if (du(dB, dy, dx)) {
                                return true
                            }
                        }
                    }
                } else {
                    while ((dB = dB[e]) ) {
                        if (dB.nodeType === 1 || dv) {
                            dA = dB[dd] || (dB[dd] = {});
                            if ((dw = dA[e]) && dw[0] === dC) {
                                if ((dD = dw[1]) === true || dD === cg) {
                                    return dD === true
                                }
                            } else {
                                dw = dA[e] = [dC];
                                dw[1] = du(dB, dy, dx) || cg;
                                if (dw[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        function dp(e) {
            return e.length > 1 ? function(du, dt, dr) {
                var ds = e.length;
                while (ds--) {
                    if (!e[ds](du, dt, dr)) {
                        return false
                    }
                }
                return true
            }
             : e[0]
        }
        function c2(e, dr, ds, dt, dw) {
            var du, dA = [], dv = 0, dx = e.length, dy = dr != null ;
            for (; dv < dx; dv++) {
                if ((du = e[dv]) ) {
                    if (!ds || ds(du, dt, dw)) {
                        dA.push(du);
                        if (dy) {
                            dr.push(dv)
                        }
                    }
                }
            }
            return dA
        }
        function cj(ds, dr, du, dt, dv, e) {
            if (dt && !dt[dd]) {
                dt = cj(dt)
            }
            if (dv && !dv[dd]) {
                dv = cj(dv, e)
            }
            return cn(function(dH, dE, dy, dG) {
                var dJ, dF, dB, dA = [], dI = [], dx = dE.length, dw = dH || cC(dr || "*", dy.nodeType ? [dy] : dy, []), dC = ds && (dH || !dr) ? c2(dw, dA, ds, dy, dG) : dw, dD = du ? dv || (dH ? ds : dx || dt) ? [] : dE : dC;
                if (du) {
                    du(dC, dD, dy, dG)
                }
                if (dt) {
                    dJ = c2(dD, dI);
                    dt(dJ, [], dy, dG);
                    dF = dJ.length;
                    while (dF--) {
                        if ((dB = dJ[dF]) ) {
                            dD[dI[dF]] = !(dC[dI[dF]] = dB)
                        }
                    }
                }
                if (dH) {
                    if (dv || ds) {
                        if (dv) {
                            dJ = [];
                            dF = dD.length;
                            while (dF--) {
                                if ((dB = dD[dF]) ) {
                                    dJ.push((dC[dF] = dB))
                                }
                            }
                            dv(null , (dD = []), dJ, dG)
                        }
                        dF = dD.length;
                        while (dF--) {
                            if ((dB = dD[dF]) && (dJ = dv ? ce.call(dH, dB) : dA[dF]) > -1) {
                                dH[dJ] = !(dE[dJ] = dB)
                            }
                        }
                    }
                } else {
                    dD = c2(dD === dE ? dD.splice(dx, dD.length) : dD);
                    if (dv) {
                        dv(null , dE, dD, dG)
                    } else {
                        b7.apply(dE, dD)
                    }
                }
            })
        }
        function de(dw) {
            var dr, du, ds, dv = dw.length, dA = cr.relative[dw[0].type], dB = dA || cr.relative[" "], dt = dA ? 1 : 0, dx = cu(function(dC) {
                return dC === dr
            }, dB, true), dy = cu(function(dC) {
                return ce.call(dr, dC) > -1
            }, dB, true), e = [function(dE, dD, dC) {
                return (!dA && (dC || dD !== dq)) || ((dr = dD).nodeType ? dx(dE, dD, dC) : dy(dE, dD, dC))
            }
            ];
            for (; dt < dv; dt++) {
                if ((du = cr.relative[dw[dt].type]) ) {
                    e = [cu(dp(e), du)]
                } else {
                    du = cr.filter[dw[dt].type].apply(null , dw[dt].matches);
                    if (du[dd]) {
                        ds = ++dt;
                        for (; ds < dv; ds++) {
                            if (cr.relative[dw[ds].type]) {
                                break
                            }
                        }
                        return cj(dt > 1 && dp(e), dt > 1 && cl(dw.slice(0, dt - 1).concat({
                            value: dw[dt - 2].type === " " ? "*" : ""
                        })).replace(cv, "$1"), du, dt < ds && de(dw.slice(dt, ds)), ds < dv && de((dw = dw.slice(ds))), ds < dv && cl(dw))
                    }
                    e.push(du)
                }
            }
            return dp(e)
        }
        function c0(dt, ds) {
            var dv = 0
              , e = ds.length > 0
              , du = dt.length > 0
              , dr = function(dG, dA, dF, dE, dM) {
                var dB, dC, dH, dL = [], dK = 0, dD = "0", dw = dG && [], dI = dM != null , dJ = dq, dy = dG || du && cr.find.TAG("*", dM && dA.parentNode || dA), dx = (dm += dJ == null  ? 1 : Math.random() || 0.1);
                if (dI) {
                    dq = dA !== cF && dA;
                    cg = dv
                }
                for (; (dB = dy[dD]) != null ; dD++) {
                    if (du && dB) {
                        dC = 0;
                        while ((dH = dt[dC++]) ) {
                            if (dH(dB, dA, dF)) {
                                dE.push(dB);
                                break
                            }
                        }
                        if (dI) {
                            dm = dx;
                            cg = ++dv
                        }
                    }
                    if (e) {
                        if ((dB = !dH && dB) ) {
                            dK--
                        }
                        if (dG) {
                            dw.push(dB)
                        }
                    }
                }
                dK += dD;
                if (e && dD !== dK) {
                    dC = 0;
                    while ((dH = ds[dC++]) ) {
                        dH(dw, dL, dA, dF)
                    }
                    if (dG) {
                        if (dK > 0) {
                            while (dD--) {
                                if (!(dw[dD] || dL[dD])) {
                                    dL[dD] = dg.call(dE)
                                }
                            }
                        }
                        dL = c2(dL)
                    }
                    b7.apply(dE, dL);
                    if (dI && !dG && dL.length > 0 && (dK + ds.length) > 1) {
                        cz.uniqueSort(dE)
                    }
                }
                if (dI) {
                    dm = dx;
                    dq = dJ
                }
                return dw
            }
            ;
            return e ? cn(dr) : dr
        }
        cY = cz.compile = function(e, dv) {
            var ds, dr = [], du = [], dt = cJ[e + " "];
            if (!dt) {
                if (!dv) {
                    dv = ck(e)
                }
                ds = dv.length;
                while (ds--) {
                    dt = de(dv[ds]);
                    if (dt[dd]) {
                        dr.push(dt)
                    } else {
                        du.push(dt)
                    }
                }
                dt = cJ(e, c0(du, dr))
            }
            return dt
        }
        ;
        function cC(dr, du, dt) {
            var ds = 0
              , e = du.length;
            for (; ds < e; ds++) {
                cz(dr, du[ds], dt)
            }
            return dt
        }
        function dk(ds, e, dt, dw) {
            var du, dy, dr, dA, dx, dv = ck(ds);
            if (!dw) {
                if (dv.length === 1) {
                    dy = dv[0] = dv[0].slice(0);
                    if (dy.length > 2 && (dr = dy[0]).type === "ID" && dl.getById && e.nodeType === 9 && db && cr.relative[dy[1].type]) {
                        e = (cr.find.ID(dr.matches[0].replace(cw, c7), e) || [])[0];
                        if (!e) {
                            return dt
                        }
                        ds = ds.slice(dy.shift().value.length)
                    }
                    du = c4.needsContext.test(ds) ? 0 : dy.length;
                    while (du--) {
                        dr = dy[du];
                        if (cr.relative[(dA = dr.type)]) {
                            break
                        }
                        if ((dx = cr.find[dA]) ) {
                            if ((dw = dx(dr.matches[0].replace(cw, c7), c3.test(dy[0].type) && e.parentNode || e)) ) {
                                dy.splice(du, 1);
                                ds = dw.length && cl(dy);
                                if (!ds) {
                                    b7.apply(dt, dw);
                                    return dt
                                }
                                break
                            }
                        }
                    }
                }
            }
            cY(ds, dv)(dw, e, !db, dt, c3.test(ds));
            return dt
        }
        dl.sortStable = dd.split("").sort(cH).join("") === dd;
        dl.detectDuplicates = cZ;
        c1();
        dl.sortDetached = ch(function(e) {
            return e.compareDocumentPosition(cF.createElement("div")) & 1
        });
        if (!ch(function(e) {
            e.innerHTML = "<a href='#'></a>";
            return e.firstChild.getAttribute("href") === "#"
        })) {
            dn("type|href|height|width", function(dr, e, ds) {
                if (!ds) {
                    return dr.getAttribute(e, e.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!dl.attributes || !ch(function(e) {
            e.innerHTML = "<input/>";
            e.firstChild.setAttribute("value", "");
            return e.firstChild.getAttribute("value") === ""
        })) {
            dn("value", function(dr, e, ds) {
                if (!ds && dr.nodeName.toLowerCase() === "input") {
                    return dr.defaultValue
                }
            })
        }
        if (!ch(function(e) {
            return e.getAttribute("disabled") == null 
        })) {
            dn(b8, function(dr, e, dt) {
                var ds;
                if (!dt) {
                    return (ds = dr.getAttributeNode(e)) && ds.specified ? ds.value : dr[e] === true ? e.toLowerCase() : null 
                }
            })
        }
        bL.find = cz;
        bL.expr = cz.selectors;
        bL.expr[":"] = bL.expr.pseudos;
        bL.unique = cz.uniqueSort;
        bL.text = cz.getText;
        bL.isXMLDoc = cz.isXML;
        bL.contains = cz.contains
    })(a4);
    var b1 = {};
    function af(b6) {
        var e = b1[b6] = {};
        bL.each(b6.match(ad) || [], function(b8, b7) {
            e[b7] = true
        });
        return e
    }
    bL.Callbacks = function(cg) {
        cg = typeof cg === "string" ? (b1[cg] || af(cg)) : bL.extend({}, cg);
        var b9, b8, e, ca, cb, b7, cc = [], ce = !cg.once && [], b6 = function(ch) {
            b8 = cg.memory && ch;
            e = true;
            cb = b7 || 0;
            b7 = 0;
            ca = cc.length;
            b9 = true;
            for (; cc && cb < ca; cb++) {
                if (cc[cb].apply(ch[0], ch[1]) === false && cg.stopOnFalse) {
                    b8 = false;
                    break
                }
            }
            b9 = false;
            if (cc) {
                if (ce) {
                    if (ce.length) {
                        b6(ce.shift())
                    }
                } else {
                    if (b8) {
                        cc = []
                    } else {
                        cf.disable()
                    }
                }
            }
        }
        , cf = {
            add: function() {
                if (cc) {
                    var cj = cc.length;
                    (function ch(ck) {
                        bL.each(ck, function(cm, cl) {
                            var cn = bL.type(cl);
                            if (cn === "function") {
                                if (!cg.unique || !cf.has(cl)) {
                                    cc.push(cl)
                                }
                            } else {
                                if (cl && cl.length && cn !== "string") {
                                    ch(cl)
                                }
                            }
                        })
                    })(arguments);
                    if (b9) {
                        ca = cc.length
                    } else {
                        if (b8) {
                            b7 = cj;
                            b6(b8)
                        }
                    }
                }
                return this
            },
            remove: function() {
                if (cc) {
                    bL.each(arguments, function(ck, ch) {
                        var cj;
                        while ((cj = bL.inArray(ch, cc, cj)) > -1) {
                            cc.splice(cj, 1);
                            if (b9) {
                                if (cj <= ca) {
                                    ca--
                                }
                                if (cj <= cb) {
                                    cb--
                                }
                            }
                        }
                    })
                }
                return this
            },
            has: function(ch) {
                return ch ? bL.inArray(ch, cc) > -1 : !!(cc && cc.length)
            },
            empty: function() {
                cc = [];
                ca = 0;
                return this
            },
            disable: function() {
                cc = ce = b8 = aH;
                return this
            },
            disabled: function() {
                return !cc
            },
            lock: function() {
                ce = aH;
                if (!b8) {
                    cf.disable()
                }
                return this
            },
            locked: function() {
                return !ce
            },
            fireWith: function(cj, ch) {
                if (cc && (!e || ce)) {
                    ch = ch || [];
                    ch = [cj, ch.slice ? ch.slice() : ch];
                    if (b9) {
                        ce.push(ch)
                    } else {
                        b6(ch)
                    }
                }
                return this
            },
            fire: function() {
                cf.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!e
            }
        };
        return cf
    }
    ;
    bL.extend({
        Deferred: function(b7) {
            var b6 = [["resolve", "done", bL.Callbacks("once memory"), "resolved"], ["reject", "fail", bL.Callbacks("once memory"), "rejected"], ["notify", "progress", bL.Callbacks("memory")]]
              , b8 = "pending"
              , b9 = {
                state: function() {
                    return b8
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var ca = arguments;
                    return bL.Deferred(function(cb) {
                        bL.each(b6, function(ce, cc) {
                            var cg = cc[0]
                              , cf = bL.isFunction(ca[ce]) && ca[ce];
                            e[cc[1]](function() {
                                var ch = cf && cf.apply(this, arguments);
                                if (ch && bL.isFunction(ch.promise)) {
                                    ch.promise().done(cb.resolve).fail(cb.reject).progress(cb.notify)
                                } else {
                                    cb[cg + "With"](this === b9 ? cb.promise() : this, cf ? [ch] : arguments)
                                }
                            })
                        });
                        ca = null 
                    }).promise()
                },
                promise: function(ca) {
                    return ca != null  ? bL.extend(ca, b9) : b9
                }
            }
              , e = {};
            b9.pipe = b9.then;
            bL.each(b6, function(cb, ca) {
                var ce = ca[2]
                  , cc = ca[3];
                b9[ca[1]] = ce.add;
                if (cc) {
                    ce.add(function() {
                        b8 = cc
                    }, b6[cb ^ 1][2].disable, b6[2][2].lock)
                }
                e[ca[0]] = function() {
                    e[ca[0] + "With"](this === e ? b9 : this, arguments);
                    return this
                }
                ;
                e[ca[0] + "With"] = ce.fireWith
            });
            b9.promise(e);
            if (b7) {
                b7.call(e, e)
            }
            return e
        },
        when: function(b9) {
            var b7 = 0, cb = a6.call(arguments), e = cb.length, b6 = e !== 1 || (b9 && bL.isFunction(b9.promise)) ? e : 0, cf = b6 === 1 ? b9 : bL.Deferred(), b8 = function(ch, cj, cg) {
                return function(ck) {
                    cj[ch] = this;
                    cg[ch] = arguments.length > 1 ? a6.call(arguments) : ck;
                    if (cg === ce) {
                        cf.notifyWith(cj, cg)
                    } else {
                        if (!(--b6)) {
                            cf.resolveWith(cj, cg)
                        }
                    }
                }
            }
            , ce, ca, cc;
            if (e > 1) {
                ce = new Array(e);
                ca = new Array(e);
                cc = new Array(e);
                for (; b7 < e; b7++) {
                    if (cb[b7] && bL.isFunction(cb[b7].promise)) {
                        cb[b7].promise().done(b8(b7, cc, cb)).fail(cf.reject).progress(b8(b7, ca, ce))
                    } else {
                        --b6
                    }
                }
            }
            if (!b6) {
                cf.resolveWith(cc, cb)
            }
            return cf.promise()
        }
    });
    bL.support = (function(cj) {
        var ch, cf, ce, cg, cc, b8, ca, b7, b9, b6 = n.createElement("div");
        b6.setAttribute("className", "t");
        b6.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        ch = b6.getElementsByTagName("*") || [];
        cf = b6.getElementsByTagName("a")[0];
        if (!cf || !cf.style || !ch.length) {
            return cj
        }
        cg = n.createElement("select");
        b8 = cg.appendChild(n.createElement("option"));
        ce = b6.getElementsByTagName("input")[0];
        cf.style.cssText = "top:1px;float:left;opacity:.5";
        cj.getSetAttribute = b6.className !== "t";
        cj.leadingWhitespace = b6.firstChild.nodeType === 3;
        cj.tbody = !b6.getElementsByTagName("tbody").length;
        cj.htmlSerialize = !!b6.getElementsByTagName("link").length;
        cj.style = /top/.test(cf.getAttribute("style"));
        cj.hrefNormalized = cf.getAttribute("href") === "/a";
        cj.opacity = /^0.5/.test(cf.style.opacity);
        cj.cssFloat = !!cf.style.cssFloat;
        cj.checkOn = !!ce.value;
        cj.optSelected = b8.selected;
        cj.enctype = !!n.createElement("form").enctype;
        cj.html5Clone = n.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        cj.inlineBlockNeedsLayout = false;
        cj.shrinkWrapBlocks = false;
        cj.pixelPosition = false;
        cj.deleteExpando = true;
        cj.noCloneEvent = true;
        cj.reliableMarginRight = true;
        cj.boxSizingReliable = true;
        ce.checked = true;
        cj.noCloneChecked = ce.cloneNode(true).checked;
        cg.disabled = true;
        cj.optDisabled = !b8.disabled;
        try {
            delete b6.test
        } catch (cb) {
            cj.deleteExpando = false
        }
        ce = n.createElement("input");
        ce.setAttribute("value", "");
        cj.input = ce.getAttribute("value") === "";
        ce.value = "t";
        ce.setAttribute("type", "radio");
        cj.radioValue = ce.value === "t";
        ce.setAttribute("checked", "t");
        ce.setAttribute("name", "t");
        cc = n.createDocumentFragment();
        cc.appendChild(ce);
        cj.appendChecked = ce.checked;
        cj.checkClone = cc.cloneNode(true).cloneNode(true).lastChild.checked;
        if (b6.attachEvent) {
            b6.attachEvent("onclick", function() {
                cj.noCloneEvent = false
            });
            b6.cloneNode(true).click()
        }
        for (b9 in {
            submit: true,
            change: true,
            focusin: true
        }) {
            b6.setAttribute(ca = "on" + b9, "t");
            cj[b9 + "Bubbles"] = ca in a4 || b6.attributes[ca].expando === false
        }
        b6.style.backgroundClip = "content-box";
        b6.cloneNode(true).style.backgroundClip = "";
        cj.clearCloneStyle = b6.style.backgroundClip === "content-box";
        for (b9 in bL(cj)) {
            break
        }
        cj.ownLast = b9 !== "0";
        bL(function() {
            var ck, cn, cm, cl = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", e = n.getElementsByTagName("body")[0];
            if (!e) {
                return
            }
            ck = b6 = cm = cn = null 
        });
        ch = cg = cc = b8 = cf = ce = null ;
        return cj
    })({});
    var by = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , aO = /([A-Z])/g;
    function bc(b8, b6, ca, b9) {
        if (!bL.acceptData(b8)) {
            return
        }
        var cc, cb, ce = bL.expando, cf = b8.nodeType, e = cf ? bL.cache : b8, b7 = cf ? b8[ce] : b8[ce] && ce;
        if ((!b7 || !e[b7] || (!b9 && !e[b7].data)) && ca === aH && typeof b6 === "string") {
            return
        }
        if (!b7) {
            if (cf) {
                b7 = b8[ce] = a8.pop() || bL.guid++
            } else {
                b7 = ce
            }
        }
        if (!e[b7]) {
            e[b7] = cf ? {} : {
                toJSON: bL.noop
            }
        }
        if (typeof b6 === "object" || typeof b6 === "function") {
            if (b9) {
                e[b7] = bL.extend(e[b7], b6)
            } else {
                e[b7].data = bL.extend(e[b7].data, b6)
            }
        }
        cb = e[b7];
        if (!b9) {
            if (!cb.data) {
                cb.data = {}
            }
            cb = cb.data
        }
        if (ca !== aH) {
            cb[bL.camelCase(b6)] = ca
        }
        if (typeof b6 === "string") {
            cc = cb[b6];
            if (cc == null ) {
                cc = cb[bL.camelCase(b6)]
            }
        } else {
            cc = cb
        }
        return cc
    }
    function aa(b9, b7, e) {
        if (!bL.acceptData(b9)) {
            return
        }
        var cb, b8, ca = b9.nodeType, b6 = ca ? bL.cache : b9, cc = ca ? b9[bL.expando] : bL.expando;
        if (!b6[cc]) {
            return
        }
        if (b7) {
            cb = e ? b6[cc] : b6[cc].data;
            if (cb) {
                if (!bL.isArray(b7)) {
                    if (b7 in cb) {
                        b7 = [b7]
                    } else {
                        b7 = bL.camelCase(b7);
                        if (b7 in cb) {
                            b7 = [b7]
                        } else {
                            b7 = b7.split(" ")
                        }
                    }
                } else {
                    b7 = b7.concat(bL.map(b7, bL.camelCase))
                }
                b8 = b7.length;
                while (b8--) {
                    delete cb[b7[b8]]
                }
                if (e ? !O(cb) : !bL.isEmptyObject(cb)) {
                    return
                }
            }
        }
        if (!e) {
            delete b6[cc].data;
            if (!O(b6[cc])) {
                return
            }
        }
        if (ca) {
            bL.cleanData([b9], true)
        } else {
            if (bL.support.deleteExpando || b6 != b6.window) {
                delete b6[cc]
            } else {
                b6[cc] = null 
            }
        }
    }
    bL.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            e = e.nodeType ? bL.cache[e[bL.expando]] : e[bL.expando];
            return !!e && !O(e)
        },
        data: function(b6, e, b7) {
            return bc(b6, e, b7)
        },
        removeData: function(b6, e) {
            return aa(b6, e)
        },
        _data: function(b6, e, b7) {
            return bc(b6, e, b7, true)
        },
        _removeData: function(b6, e) {
            return aa(b6, e, true)
        },
        acceptData: function(b6) {
            if (b6.nodeType && b6.nodeType !== 1 && b6.nodeType !== 9) {
                return false
            }
            var e = b6.nodeName && bL.noData[b6.nodeName.toLowerCase()];
            return !e || e !== true && b6.getAttribute("classid") === e
        }
    });
    bL.fn.extend({
        data: function(b8, cb) {
            var b6, e, ca = null , b7 = 0, b9 = this[0];
            if (b8 === aH) {
                if (this.length) {
                    ca = bL.data(b9);
                    if (b9.nodeType === 1 && !bL._data(b9, "parsedAttrs")) {
                        b6 = b9.attributes;
                        for (; b7 < b6.length; b7++) {
                            e = b6[b7].name;
                            if (e.indexOf("data-") === 0) {
                                e = bL.camelCase(e.slice(5));
                                bA(b9, e, ca[e])
                            }
                        }
                        bL._data(b9, "parsedAttrs", true)
                    }
                }
                return ca
            }
            if (typeof b8 === "object") {
                return this.each(function() {
                    bL.data(this, b8)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                bL.data(this, b8, cb)
            }) : b9 ? bA(b9, b8, bL.data(b9, b8)) : null 
        },
        removeData: function(e) {
            return this.each(function() {
                bL.removeData(this, e)
            })
        }
    });
    function bA(b8, b7, b9) {
        if (b9 === aH && b8.nodeType === 1) {
            var b6 = "data-" + b7.replace(aO, "-$1").toLowerCase();
            b9 = b8.getAttribute(b6);
            if (typeof b9 === "string") {
                try {
                    b9 = b9 === "true" ? true : b9 === "false" ? false : b9 === "null" ? null  : +b9 + "" === b9 ? +b9 : by.test(b9) ? bL.parseJSON(b9) : b9
                } catch (ca) {}
                bL.data(b8, b7, b9)
            } else {
                b9 = aH
            }
        }
        return b9
    }
    function O(b6) {
        var e;
        for (e in b6) {
            if (e === "data" && bL.isEmptyObject(b6[e])) {
                continue
            }
            if (e !== "toJSON") {
                return false
            }
        }
        return true
    }
    bL.extend({
        queue: function(b7, b6, b8) {
            var e;
            if (b7) {
                b6 = (b6 || "fx") + "queue";
                e = bL._data(b7, b6);
                if (b8) {
                    if (!e || bL.isArray(b8)) {
                        e = bL._data(b7, b6, bL.makeArray(b8))
                    } else {
                        e.push(b8)
                    }
                }
                return e || []
            }
        },
        dequeue: function(ca, b9) {
            b9 = b9 || "fx";
            var b6 = bL.queue(ca, b9)
              , cb = b6.length
              , b8 = b6.shift()
              , e = bL._queueHooks(ca, b9)
              , b7 = function() {
                bL.dequeue(ca, b9)
            }
            ;
            if (b8 === "inprogress") {
                b8 = b6.shift();
                cb--
            }
            if (b8) {
                if (b9 === "fx") {
                    b6.unshift("inprogress")
                }
                delete e.stop;
                b8.call(ca, b7, e)
            }
            if (!cb && e) {
                e.empty.fire()
            }
        },
        _queueHooks: function(b7, b6) {
            var e = b6 + "queueHooks";
            return bL._data(b7, e) || bL._data(b7, e, {
                empty: bL.Callbacks("once memory").add(function() {
                    bL._removeData(b7, b6 + "queue");
                    bL._removeData(b7, e)
                })
            })
        }
    });
    bL.fn.extend({
        queue: function(e, b6) {
            var b7 = 2;
            if (typeof e !== "string") {
                b6 = e;
                e = "fx";
                b7--
            }
            if (arguments.length < b7) {
                return bL.queue(this[0], e)
            }
            return b6 === aH ? this : this.each(function() {
                var b8 = bL.queue(this, e, b6);
                bL._queueHooks(this, e);
                if (e === "fx" && b8[0] !== "inprogress") {
                    bL.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                bL.dequeue(this, e)
            })
        },
        delay: function(b6, e) {
            b6 = bL.fx ? bL.fx.speeds[b6] || b6 : b6;
            e = e || "fx";
            return this.queue(e, function(b8, b7) {
                var b9 = setTimeout(b8, b6);
                b7.stop = function() {
                    clearTimeout(b9)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(b7, cb) {
            var b6, b8 = 1, cc = bL.Deferred(), ca = this, e = this.length, b9 = function() {
                if (!(--b8)) {
                    cc.resolveWith(ca, [ca])
                }
            }
            ;
            if (typeof b7 !== "string") {
                cb = b7;
                b7 = aH
            }
            b7 = b7 || "fx";
            while (e--) {
                b6 = bL._data(ca[e], b7 + "queueHooks");
                if (b6 && b6.empty) {
                    b8++;
                    b6.empty.add(b9)
                }
            }
            b9();
            return cc.promise(cb)
        }
    });
    var ba, b2, bO = /[\t\r\n\f]/g, ak = /\r/g, aG = /^(?:input|select|textarea|button|object)$/i, F = /^(?:a|area)$/i, ar = /^(?:checked|selected)$/i, bR = bL.support.getSetAttribute, bH = bL.support.input;
    bL.fn.extend({
        attr: function(e, b6) {
            return bL.access(this, bL.attr, e, b6, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                bL.removeAttr(this, e)
            })
        },
        prop: function(e, b6) {
            return bL.access(this, bL.prop, e, b6, arguments.length > 1)
        },
        removeProp: function(e) {
            e = bL.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = aH;
                    delete this[e]
                } catch (b6) {}
            })
        },
        addClass: function(cc) {
            var b6, e, ce, b9, b7, b8 = 0, ca = this.length, cb = typeof cc === "string" && cc;
            if (bL.isFunction(cc)) {
                return this.each(function(cf) {
                    bL(this).addClass(cc.call(this, cf, this.className))
                })
            }
            if (cb) {
                b6 = (cc || "").match(ad) || [];
                for (; b8 < ca; b8++) {
                    e = this[b8];
                    ce = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bO, " ") : " ");
                    if (ce) {
                        b7 = 0;
                        while ((b9 = b6[b7++]) ) {
                            if (ce.indexOf(" " + b9 + " ") < 0) {
                                ce += b9 + " "
                            }
                        }
                        e.className = bL.trim(ce)
                    }
                }
            }
            return this
        },
        removeClass: function(cc) {
            var b6, e, ce, b9, b7, b8 = 0, ca = this.length, cb = arguments.length === 0 || typeof cc === "string" && cc;
            if (bL.isFunction(cc)) {
                return this.each(function(cf) {
                    bL(this).removeClass(cc.call(this, cf, this.className))
                })
            }
            if (cb) {
                b6 = (cc || "").match(ad) || [];
                for (; b8 < ca; b8++) {
                    e = this[b8];
                    ce = e.nodeType === 1 && (e.className ? (" " + e.className + " ").replace(bO, " ") : "");
                    if (ce) {
                        b7 = 0;
                        while ((b9 = b6[b7++]) ) {
                            while (ce.indexOf(" " + b9 + " ") >= 0) {
                                ce = ce.replace(" " + b9 + " ", " ")
                            }
                        }
                        e.className = cc ? bL.trim(ce) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(b7, e) {
            var b6 = typeof b7;
            if (typeof e === "boolean" && b6 === "string") {
                return e ? this.addClass(b7) : this.removeClass(b7)
            }
            if (bL.isFunction(b7)) {
                return this.each(function(b8) {
                    bL(this).toggleClass(b7.call(this, b8, this.className, e), e)
                })
            }
            return this.each(function() {
                if (b6 === "string") {
                    var ca, b9 = 0, b8 = bL(this), cb = b7.match(ad) || [];
                    while ((ca = cb[b9++]) ) {
                        if (b8.hasClass(ca)) {
                            b8.removeClass(ca)
                        } else {
                            b8.addClass(ca)
                        }
                    }
                } else {
                    if (b6 === aD || b6 === "boolean") {
                        if (this.className) {
                            bL._data(this, "__className__", this.className)
                        }
                        this.className = this.className || b7 === false ? "" : bL._data(this, "__className__") || ""
                    }
                }
            })
        },
        hasClass: function(e) {
            var b8 = " " + e + " "
              , b7 = 0
              , b6 = this.length;
            for (; b7 < b6; b7++) {
                if (this[b7].nodeType === 1 && (" " + this[b7].className + " ").replace(bO, " ").indexOf(b8) >= 0) {
                    return true
                }
            }
            return false
        },
        val: function(b8) {
            var b6, e, b9, b7 = this[0];
            if (!arguments.length) {
                if (b7) {
                    e = bL.valHooks[b7.type] || bL.valHooks[b7.nodeName.toLowerCase()];
                    if (e && "get" in e && (b6 = e.get(b7, "value")) !== aH) {
                        return b6
                    }
                    b6 = b7.value;
                    return typeof b6 === "string" ? b6.replace(ak, "") : b6 == null  ? "" : b6
                }
                return
            }
            b9 = bL.isFunction(b8);
            return this.each(function(ca) {
                var cb;
                if (this.nodeType !== 1) {
                    return
                }
                if (b9) {
                    cb = b8.call(this, ca, bL(this).val())
                } else {
                    cb = b8
                }
                if (cb == null ) {
                    cb = ""
                } else {
                    if (typeof cb === "number") {
                        cb += ""
                    } else {
                        if (bL.isArray(cb)) {
                            cb = bL.map(cb, function(cc) {
                                return cc == null  ? "" : cc + ""
                            })
                        }
                    }
                }
                e = bL.valHooks[this.type] || bL.valHooks[this.nodeName.toLowerCase()];
                if (!e || !("set" in e) || e.set(this, cb, "value") === aH) {
                    this.value = cb
                }
            })
        }
    });
    bL.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var b6 = bL.find.attr(e, "value");
                    return b6 != null  ? b6 : e.text
                }
            },
            select: {
                get: function(e) {
                    var cb, b7, ce = e.options, b9 = e.selectedIndex, b8 = e.type === "select-one" || b9 < 0, cc = b8 ? null  : [], ca = b8 ? b9 + 1 : ce.length, b6 = b9 < 0 ? ca : b8 ? b9 : 0;
                    for (; b6 < ca; b6++) {
                        b7 = ce[b6];
                        if ((b7.selected || b6 === b9) && (bL.support.optDisabled ? !b7.disabled : b7.getAttribute("disabled") === null ) && (!b7.parentNode.disabled || !bL.nodeName(b7.parentNode, "optgroup"))) {
                            cb = bL(b7).val();
                            if (b8) {
                                return cb
                            }
                            cc.push(cb)
                        }
                    }
                    return cc
                },
                set: function(b9, ca) {
                    var cb, b8, b6 = b9.options, e = bL.makeArray(ca), b7 = b6.length;
                    while (b7--) {
                        b8 = b6[b7];
                        if ((b8.selected = bL.inArray(bL(b8).val(), e) >= 0) ) {
                            cb = true
                        }
                    }
                    if (!cb) {
                        b9.selectedIndex = -1
                    }
                    return e
                }
            }
        },
        attr: function(b9, b8, ca) {
            var e, b7, b6 = b9.nodeType;
            if (!b9 || b6 === 3 || b6 === 8 || b6 === 2) {
                return
            }
            if (typeof b9.getAttribute === aD) {
                return bL.prop(b9, b8, ca)
            }
            if (b6 !== 1 || !bL.isXMLDoc(b9)) {
                b8 = b8.toLowerCase();
                e = bL.attrHooks[b8] || (bL.expr.match.bool.test(b8) ? b2 : ba)
            }
            if (ca !== aH) {
                if (ca === null ) {
                    bL.removeAttr(b9, b8)
                } else {
                    if (e && "set" in e && (b7 = e.set(b9, ca, b8)) !== aH) {
                        return b7
                    } else {
                        b9.setAttribute(b8, ca + "");
                        return ca
                    }
                }
            } else {
                if (e && "get" in e && (b7 = e.get(b9, b8)) !== null ) {
                    return b7
                } else {
                    b7 = bL.find.attr(b9, b8);
                    return b7 == null  ? aH : b7
                }
            }
        },
        removeAttr: function(b7, b9) {
            var e, b8, b6 = 0, ca = b9 && b9.match(ad);
            if (ca && b7.nodeType === 1) {
                while ((e = ca[b6++]) ) {
                    b8 = bL.propFix[e] || e;
                    if (bL.expr.match.bool.test(e)) {
                        if (bH && bR || !ar.test(e)) {
                            b7[b8] = false
                        } else {
                            b7[bL.camelCase("default-" + e)] = b7[b8] = false
                        }
                    } else {
                        bL.attr(b7, e, "")
                    }
                    b7.removeAttribute(bR ? e : b8)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, b6) {
                    if (!bL.support.radioValue && b6 === "radio" && bL.nodeName(e, "input")) {
                        var b7 = e.value;
                        e.setAttribute("type", b6);
                        if (b7) {
                            e.value = b7
                        }
                        return b6
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(ca, b8, cb) {
            var b7, e, b9, b6 = ca.nodeType;
            if (!ca || b6 === 3 || b6 === 8 || b6 === 2) {
                return
            }
            b9 = b6 !== 1 || !bL.isXMLDoc(ca);
            if (b9) {
                b8 = bL.propFix[b8] || b8;
                e = bL.propHooks[b8]
            }
            if (cb !== aH) {
                return e && "set" in e && (b7 = e.set(ca, cb, b8)) !== aH ? b7 : (ca[b8] = cb)
            } else {
                return e && "get" in e && (b7 = e.get(ca, b8)) !== null  ? b7 : ca[b8]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(b6) {
                    var e = bL.find.attr(b6, "tabindex");
                    return e ? parseInt(e, 10) : aG.test(b6.nodeName) || F.test(b6.nodeName) && b6.href ? 0 : -1
                }
            }
        }
    });
    b2 = {
        set: function(b6, b7, e) {
            if (b7 === false) {
                bL.removeAttr(b6, e)
            } else {
                if (bH && bR || !ar.test(e)) {
                    b6.setAttribute(!bR && bL.propFix[e] || e, e)
                } else {
                    b6[bL.camelCase("default-" + e)] = b6[e] = true
                }
            }
            return e
        }
    };
    bL.each(bL.expr.match.bool.source.match(/\w+/g), function(b7, b6) {
        var e = bL.expr.attrHandle[b6] || bL.find.attr;
        bL.expr.attrHandle[b6] = bH && bR || !ar.test(b6) ? function(cb, b9, cc) {
            var ca = bL.expr.attrHandle[b9]
              , b8 = cc ? aH : (bL.expr.attrHandle[b9] = aH) != e(cb, b9, cc) ? b9.toLowerCase() : null ;
            bL.expr.attrHandle[b9] = ca;
            return b8
        }
         : function(b9, b8, ca) {
            return ca ? aH : b9[bL.camelCase("default-" + b8)] ? b8.toLowerCase() : null 
        }
    });
    if (!bH || !bR) {
        bL.attrHooks.value = {
            set: function(b6, b7, e) {
                if (bL.nodeName(b6, "input")) {
                    b6.defaultValue = b7
                } else {
                    return ba && ba.set(b6, b7, e)
                }
            }
        }
    }
    if (!bR) {
        ba = {
            set: function(b7, b8, b6) {
                var e = b7.getAttributeNode(b6);
                if (!e) {
                    b7.setAttributeNode((e = b7.ownerDocument.createAttribute(b6)))
                }
                e.value = b8 += "";
                return b6 === "value" || b8 === b7.getAttribute(b6) ? b8 : aH
            }
        };
        bL.expr.attrHandle.id = bL.expr.attrHandle.name = bL.expr.attrHandle.coords = function(b7, b6, b8) {
            var e;
            return b8 ? aH : (e = b7.getAttributeNode(b6)) && e.value !== "" ? e.value : null 
        }
        ;
        bL.valHooks.button = {
            get: function(b7, b6) {
                var e = b7.getAttributeNode(b6);
                return e && e.specified ? e.value : aH
            },
            set: ba.set
        };
        bL.attrHooks.contenteditable = {
            set: function(b6, b7, e) {
                ba.set(b6, b7 === "" ? false : b7, e)
            }
        };
        bL.each(["width", "height"], function(b6, e) {
            bL.attrHooks[e] = {
                set: function(b7, b8) {
                    if (b8 === "") {
                        b7.setAttribute(e, "auto");
                        return b8
                    }
                }
            }
        })
    }
    if (!bL.support.hrefNormalized) {
        bL.each(["href", "src"], function(b6, e) {
            bL.propHooks[e] = {
                get: function(b7) {
                    return b7.getAttribute(e, 4)
                }
            }
        })
    }
    if (!bL.support.style) {
        bL.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || aH
            },
            set: function(e, b6) {
                return ( e.style.cssText = b6 + "") 
            }
        }
    }
    if (!bL.support.optSelected) {
        bL.propHooks.selected = {
            get: function(b6) {
                var e = b6.parentNode;
                if (e) {
                    e.selectedIndex;
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                }
                return null 
            }
        }
    }
    bL.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bL.propFix[this.toLowerCase()] = this
    });
    if (!bL.support.enctype) {
        bL.propFix.enctype = "encoding"
    }
    bL.each(["radio", "checkbox"], function() {
        bL.valHooks[this] = {
            set: function(e, b6) {
                if (bL.isArray(b6)) {
                    return ( e.checked = bL.inArray(bL(e).val(), b6) >= 0) 
                }
            }
        };
        if (!bL.support.checkOn) {
            bL.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null  ? "on" : e.value
            }
        }
    });
    var bJ = /^(?:input|select|textarea)$/i
      , a5 = /^key/
      , bP = /^(?:mouse|contextmenu)|click/
      , bD = /^(?:focusinfocus|focusoutblur)$/
      , bw = /^([^.]*)(?:\.(.+)|)$/;
    function S() {
        return true
    }
    function Y() {
        return false
    }
    function al() {
        try {
            return n.activeElement
        } catch (e) {}
    }
    bL.event = {
        global: {},
        add: function(b9, cf, cl, cb, ca) {
            var cc, cm, cn, b7, ch, ce, ck, b8, cj, e, b6, cg = bL._data(b9);
            if (!cg) {
                return
            }
            if (cl.handler) {
                b7 = cl;
                cl = b7.handler;
                ca = b7.selector
            }
            if (!cl.guid) {
                cl.guid = bL.guid++
            }
            if (!(cm = cg.events)) {
                cm = cg.events = {}
            }
            if (!(ce = cg.handle)) {
                ce = cg.handle = function(co) {
                    return typeof bL !== aD && (!co || bL.event.triggered !== co.type) ? bL.event.dispatch.apply(ce.elem, arguments) : aH
                }
                ;
                ce.elem = b9
            }
            cf = (cf || "").match(ad) || [""];
            cn = cf.length;
            while (cn--) {
                cc = bw.exec(cf[cn]) || [];
                cj = b6 = cc[1];
                e = (cc[2] || "").split(".").sort();
                if (!cj) {
                    continue
                }
                ch = bL.event.special[cj] || {};
                cj = (ca ? ch.delegateType : ch.bindType) || cj;
                ch = bL.event.special[cj] || {};
                ck = bL.extend({
                    type: cj,
                    origType: b6,
                    data: cb,
                    handler: cl,
                    guid: cl.guid,
                    selector: ca,
                    needsContext: ca && bL.expr.match.needsContext.test(ca),
                    namespace: e.join(".")
                }, b7);
                if (!(b8 = cm[cj])) {
                    b8 = cm[cj] = [];
                    b8.delegateCount = 0;
                    if (!ch.setup || ch.setup.call(b9, cb, e, ce) === false) {
                        if (b9.addEventListener) {
                            b9.addEventListener(cj, ce, false)
                        } else {
                            if (b9.attachEvent) {
                                b9.attachEvent("on" + cj, ce)
                            }
                        }
                    }
                }
                if (ch.add) {
                    ch.add.call(b9, ck);
                    if (!ck.handler.guid) {
                        ck.handler.guid = cl.guid
                    }
                }
                if (ca) {
                    b8.splice(b8.delegateCount++, 0, ck)
                } else {
                    b8.push(ck)
                }
                bL.event.global[cj] = true
            }
            b9 = null 
        },
        remove: function(b8, cf, cn, b9, ce) {
            var cb, ck, cc, ca, cm, cl, ch, b7, cj, e, b6, cg = bL.hasData(b8) && bL._data(b8);
            if (!cg || !(cl = cg.events)) {
                return
            }
            cf = (cf || "").match(ad) || [""];
            cm = cf.length;
            while (cm--) {
                cc = bw.exec(cf[cm]) || [];
                cj = b6 = cc[1];
                e = (cc[2] || "").split(".").sort();
                if (!cj) {
                    for (cj in cl) {
                        bL.event.remove(b8, cj + cf[cm], cn, b9, true)
                    }
                    continue
                }
                ch = bL.event.special[cj] || {};
                cj = (b9 ? ch.delegateType : ch.bindType) || cj;
                b7 = cl[cj] || [];
                cc = cc[2] && new RegExp("(^|\\.)" + e.join("\\.(?:.*\\.|)") + "(\\.|$)");
                ca = cb = b7.length;
                while (cb--) {
                    ck = b7[cb];
                    if ((ce || b6 === ck.origType) && (!cn || cn.guid === ck.guid) && (!cc || cc.test(ck.namespace)) && (!b9 || b9 === ck.selector || b9 === "**" && ck.selector)) {
                        b7.splice(cb, 1);
                        if (ck.selector) {
                            b7.delegateCount--
                        }
                        if (ch.remove) {
                            ch.remove.call(b8, ck)
                        }
                    }
                }
                if (ca && !b7.length) {
                    if (!ch.teardown || ch.teardown.call(b8, e, cg.handle) === false) {
                        bL.removeEvent(b8, cj, cg.handle)
                    }
                    delete cl[cj]
                }
            }
            if (bL.isEmptyObject(cl)) {
                delete cg.handle;
                bL._removeData(b8, "events")
            }
        },
        trigger: function(b6, ce, b9, cm) {
            var cf, b8, ck, cl, ch, cc, cb, ca = [b9 || n], cj = W.call(b6, "type") ? b6.type : b6, b7 = W.call(b6, "namespace") ? b6.namespace.split(".") : [];
            ck = cc = b9 = b9 || n;
            if (b9.nodeType === 3 || b9.nodeType === 8) {
                return
            }
            if (bD.test(cj + bL.event.triggered)) {
                return
            }
            if (cj.indexOf(".") >= 0) {
                b7 = cj.split(".");
                cj = b7.shift();
                b7.sort()
            }
            b8 = cj.indexOf(":") < 0 && "on" + cj;
            b6 = b6[bL.expando] ? b6 : new bL.Event(cj,typeof b6 === "object" && b6);
            b6.isTrigger = cm ? 2 : 3;
            b6.namespace = b7.join(".");
            b6.namespace_re = b6.namespace ? new RegExp("(^|\\.)" + b7.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ;
            b6.result = aH;
            if (!b6.target) {
                b6.target = b9
            }
            ce = ce == null  ? [b6] : bL.makeArray(ce, [b6]);
            ch = bL.event.special[cj] || {};
            if (!cm && ch.trigger && ch.trigger.apply(b9, ce) === false) {
                return
            }
            if (!cm && !ch.noBubble && !bL.isWindow(b9)) {
                cl = ch.delegateType || cj;
                if (!bD.test(cl + cj)) {
                    ck = ck.parentNode
                }
                for (; ck; ck = ck.parentNode) {
                    ca.push(ck);
                    cc = ck
                }
                if (cc === (b9.ownerDocument || n)) {
                    ca.push(cc.defaultView || cc.parentWindow || a4)
                }
            }
            cb = 0;
            while ((ck = ca[cb++]) && !b6.isPropagationStopped()) {
                b6.type = cb > 1 ? cl : ch.bindType || cj;
                cf = (bL._data(ck, "events") || {})[b6.type] && bL._data(ck, "handle");
                if (cf) {
                    cf.apply(ck, ce)
                }
                cf = b8 && ck[b8];
                if (cf && bL.acceptData(ck) && cf.apply && cf.apply(ck, ce) === false) {
                    b6.preventDefault()
                }
            }
            b6.type = cj;
            if (!cm && !b6.isDefaultPrevented()) {
                if ((!ch._default || ch._default.apply(ca.pop(), ce) === false) && bL.acceptData(b9)) {
                    if (b8 && b9[cj] && !bL.isWindow(b9)) {
                        cc = b9[b8];
                        if (cc) {
                            b9[b8] = null 
                        }
                        bL.event.triggered = cj;
                        try {
                            b9[cj]()
                        } catch (cg) {}
                        bL.event.triggered = aH;
                        if (cc) {
                            b9[b8] = cc
                        }
                    }
                }
            }
            return b6.result
        },
        dispatch: function(e) {
            e = bL.event.fix(e);
            var b9, ca, cf, b6, b8, ce = [], cc = a6.call(arguments), b7 = (bL._data(this, "events") || {})[e.type] || [], cb = bL.event.special[e.type] || {};
            cc[0] = e;
            e.delegateTarget = this;
            if (cb.preDispatch && cb.preDispatch.call(this, e) === false) {
                return
            }
            ce = bL.event.handlers.call(this, e, b7);
            b9 = 0;
            while ((b6 = ce[b9++]) && !e.isPropagationStopped()) {
                e.currentTarget = b6.elem;
                b8 = 0;
                while ((cf = b6.handlers[b8++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(cf.namespace)) {
                        e.handleObj = cf;
                        e.data = cf.data;
                        ca = ((bL.event.special[cf.origType] || {}).handle || cf.handler).apply(b6.elem, cc);
                        if (ca !== aH) {
                            if ((e.result = ca) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (cb.postDispatch) {
                cb.postDispatch.call(this, e)
            }
            return e.result
        },
        handlers: function(e, b7) {
            var b6, cc, ca, b9, cb = [], b8 = b7.delegateCount, ce = e.target;
            if (b8 && ce.nodeType && (!e.button || e.type !== "click")) {
                for (; ce != this; ce = ce.parentNode || this) {
                    if (ce.nodeType === 1 && (ce.disabled !== true || e.type !== "click")) {
                        ca = [];
                        for (b9 = 0; b9 < b8; b9++) {
                            cc = b7[b9];
                            b6 = cc.selector + " ";
                            if (ca[b6] === aH) {
                                ca[b6] = cc.needsContext ? bL(b6, this).index(ce) >= 0 : bL.find(b6, this, null , [ce]).length
                            }
                            if (ca[b6]) {
                                ca.push(cc)
                            }
                        }
                        if (ca.length) {
                            cb.push({
                                elem: ce,
                                handlers: ca
                            })
                        }
                    }
                }
            }
            if (b8 < b7.length) {
                cb.push({
                    elem: this,
                    handlers: b7.slice(b8)
                })
            }
            return cb
        },
        fix: function(b8) {
            if (b8[bL.expando]) {
                return b8
            }
            var b6, cb, ca, b7 = b8.type, e = b8, b9 = this.fixHooks[b7];
            if (!b9) {
                this.fixHooks[b7] = b9 = bP.test(b7) ? this.mouseHooks : a5.test(b7) ? this.keyHooks : {}
            }
            ca = b9.props ? this.props.concat(b9.props) : this.props;
            b8 = new bL.Event(e);
            b6 = ca.length;
            while (b6--) {
                cb = ca[b6];
                b8[cb] = e[cb]
            }
            if (!b8.target) {
                b8.target = e.srcElement || n
            }
            if (b8.target.nodeType === 3) {
                b8.target = b8.target.parentNode
            }
            b8.metaKey = !!b8.metaKey;
            return b9.filter ? b9.filter(b8, e) : b8
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(b6, e) {
                if (b6.which == null ) {
                    b6.which = e.charCode != null  ? e.charCode : e.keyCode
                }
                return b6
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b8, b7) {
                var e, b9, ca, b6 = b7.button, cb = b7.fromElement;
                if (b8.pageX == null  && b7.clientX != null ) {
                    b9 = b8.target.ownerDocument || n;
                    ca = b9.documentElement;
                    e = b9.body;
                    b8.pageX = b7.clientX + (ca && ca.scrollLeft || e && e.scrollLeft || 0) - (ca && ca.clientLeft || e && e.clientLeft || 0);
                    b8.pageY = b7.clientY + (ca && ca.scrollTop || e && e.scrollTop || 0) - (ca && ca.clientTop || e && e.clientTop || 0)
                }
                if (!b8.relatedTarget && cb) {
                    b8.relatedTarget = cb === b8.target ? b7.toElement : cb
                }
                if (!b8.which && b6 !== aH) {
                    b8.which = (b6 & 1 ? 1 : (b6 & 2 ? 3 : (b6 & 4 ? 2 : 0)))
                }
                return b8
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== al() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (b6) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === al() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (bL.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return bL.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== aH) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function(b7, b9, b8, b6) {
            var ca = bL.extend(new bL.Event(), b8, {
                type: b7,
                isSimulated: true,
                originalEvent: {}
            });
            if (b6) {
                bL.event.trigger(ca, null , b9)
            } else {
                bL.event.dispatch.call(b9, ca)
            }
            if (ca.isDefaultPrevented()) {
                b8.preventDefault()
            }
        }
    };
    bL.removeEvent = n.removeEventListener ? function(b6, e, b7) {
        if (b6.removeEventListener) {
            b6.removeEventListener(e, b7, false)
        }
    }
     : function(b7, b6, b8) {
        var e = "on" + b6;
        if (b7.detachEvent) {
            if (typeof b7[e] === aD) {
                b7[e] = null 
            }
            b7.detachEvent(e, b8)
        }
    }
    ;
    bL.Event = function(b6, e) {
        if (!(this instanceof bL.Event)) {
            return new bL.Event(b6,e)
        }
        if (b6 && b6.type) {
            this.originalEvent = b6;
            this.type = b6.type;
            this.isDefaultPrevented = (b6.defaultPrevented || b6.returnValue === false || b6.getPreventDefault && b6.getPreventDefault()) ? S : Y
        } else {
            this.type = b6
        }
        if (e) {
            bL.extend(this, e)
        }
        this.timeStamp = b6 && b6.timeStamp || bL.now();
        this[bL.expando] = true
    }
    ;
    bL.Event.prototype = {
        isDefaultPrevented: Y,
        isPropagationStopped: Y,
        isImmediatePropagationStopped: Y,
        preventDefault: function() {
            var b6 = this.originalEvent;
            this.isDefaultPrevented = S;
            if (!b6) {
                return
            }
            if (b6.preventDefault) {
                b6.preventDefault()
            } else {
                b6.returnValue = false
            }
        },
        stopPropagation: function() {
            var b6 = this.originalEvent;
            this.isPropagationStopped = S;
            if (!b6) {
                return
            }
            if (b6.stopPropagation) {
                b6.stopPropagation()
            }
            b6.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = S;
            this.stopPropagation()
        }
    };
    bL.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b6, e) {
        bL.event.special[b6] = {
            delegateType: e,
            bindType: e,
            handle: function(b9) {
                var b7, cb = this, ca = b9.relatedTarget, b8 = b9.handleObj;
                if (!ca || (ca !== cb && !bL.contains(cb, ca))) {
                    b9.type = b8.origType;
                    b7 = b8.handler.apply(this, arguments);
                    b9.type = e
                }
                return b7
            }
        }
    });
    if (!bL.support.submitBubbles) {
        bL.event.special.submit = {
            setup: function() {
                if (bL.nodeName(this, "form")) {
                    return false
                }
                bL.event.add(this, "click._submit keypress._submit", function(b8) {
                    var b7 = b8.target
                      , b6 = bL.nodeName(b7, "input") || bL.nodeName(b7, "button") ? b7.form : aH;
                    if (b6 && !bL._data(b6, "submitBubbles")) {
                        bL.event.add(b6, "submit._submit", function(e) {
                            e._submit_bubble = true
                        });
                        bL._data(b6, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        bL.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            },
            teardown: function() {
                if (bL.nodeName(this, "form")) {
                    return false
                }
                bL.event.remove(this, "._submit")
            }
        }
    }
    if (!bL.support.changeBubbles) {
        bL.event.special.change = {
            setup: function() {
                if (bJ.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        bL.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        bL.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            bL.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                bL.event.add(this, "beforeactivate._change", function(b7) {
                    var b6 = b7.target;
                    if (bJ.test(b6.nodeName) && !bL._data(b6, "changeBubbles")) {
                        bL.event.add(b6, "change._change", function(e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                bL.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        bL._data(b6, "changeBubbles", true)
                    }
                })
            },
            handle: function(b6) {
                var e = b6.target;
                if (this !== e || b6.isSimulated || b6.isTrigger || (e.type !== "radio" && e.type !== "checkbox")) {
                    return b6.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                bL.event.remove(this, "._change");
                return !bJ.test(this.nodeName)
            }
        }
    }
    if (!bL.support.focusinBubbles) {
        bL.each({
            focus: "focusin",
            blur: "focusout"
        }, function(b8, e) {
            var b6 = 0
              , b7 = function(b9) {
                bL.event.simulate(e, b9.target, bL.event.fix(b9), true)
            }
            ;
            bL.event.special[e] = {
                setup: function() {
                    if (b6++ === 0) {
                        n.addEventListener(b8, b7, true)
                    }
                },
                teardown: function() {
                    if (--b6 === 0) {
                        n.removeEventListener(b8, b7, true)
                    }
                }
            }
        })
    }
    bL.fn.extend({
        on: function(b7, e, ca, b9, b6) {
            var b8, cb;
            if (typeof b7 === "object") {
                if (typeof e !== "string") {
                    ca = ca || e;
                    e = aH
                }
                for (b8 in b7) {
                    this.on(b8, e, ca, b7[b8], b6)
                }
                return this
            }
            if (ca == null  && b9 == null ) {
                b9 = e;
                ca = e = aH
            } else {
                if (b9 == null ) {
                    if (typeof e === "string") {
                        b9 = ca;
                        ca = aH
                    } else {
                        b9 = ca;
                        ca = e;
                        e = aH
                    }
                }
            }
            if (b9 === false) {
                b9 = Y
            } else {
                if (!b9) {
                    return this
                }
            }
            if (b6 === 1) {
                cb = b9;
                b9 = function(cc) {
                    bL().off(cc);
                    return cb.apply(this, arguments)
                }
                ;
                b9.guid = cb.guid || (cb.guid = bL.guid++)
            }
            return this.each(function() {
                bL.event.add(this, b7, b9, ca, e)
            })
        },
        one: function(b6, e, b8, b7) {
            return this.on(b6, e, b8, b7, 1)
        },
        off: function(b7, e, b9) {
            var b6, b8;
            if (b7 && b7.preventDefault && b7.handleObj) {
                b6 = b7.handleObj;
                bL(b7.delegateTarget).off(b6.namespace ? b6.origType + "." + b6.namespace : b6.origType, b6.selector, b6.handler);
                return this
            }
            if (typeof b7 === "object") {
                for (b8 in b7) {
                    this.off(b8, e, b7[b8])
                }
                return this
            }
            if (e === false || typeof e === "function") {
                b9 = e;
                e = aH
            }
            if (b9 === false) {
                b9 = Y
            }
            return this.each(function() {
                bL.event.remove(this, b7, b9, e)
            })
        },
        trigger: function(e, b6) {
            return this.each(function() {
                bL.event.trigger(e, b6, this)
            })
        },
        triggerHandler: function(e, b7) {
            var b6 = this[0];
            if (b6) {
                return bL.event.trigger(e, b7, b6, true)
            }
        }
    });
    var ao = /^.[^:#\[\.,]*$/
      , bv = /^(?:parents|prev(?:Until|All))/
      , A = bL.expr.match.needsContext
      , bz = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    bL.fn.extend({
        find: function(b6) {
            var b9, b8 = [], b7 = this, e = b7.length;
            if (typeof b6 !== "string") {
                return this.pushStack(bL(b6).filter(function() {
                    for (b9 = 0; b9 < e; b9++) {
                        if (bL.contains(b7[b9], this)) {
                            return true
                        }
                    }
                }))
            }
            for (b9 = 0; b9 < e; b9++) {
                bL.find(b6, b7[b9], b8)
            }
            b8 = this.pushStack(e > 1 ? bL.unique(b8) : b8);
            b8.selector = this.selector ? this.selector + " " + b6 : b6;
            return b8
        },
        has: function(b8) {
            var b7, b6 = bL(b8, this), e = b6.length;
            return this.filter(function() {
                for (b7 = 0; b7 < e; b7++) {
                    if (bL.contains(this, b6[b7])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(aP(this, e || [], true))
        },
        filter: function(e) {
            return this.pushStack(aP(this, e || [], false))
        },
        is: function(e) {
            return !!aP(this, typeof e === "string" && A.test(e) ? bL(e) : e || [], false).length
        },
        closest: function(b9, b8) {
            var ca, b7 = 0, e = this.length, b6 = [], cb = A.test(b9) || typeof b9 !== "string" ? bL(b9, b8 || this.context) : 0;
            for (; b7 < e; b7++) {
                for (ca = this[b7]; ca && ca !== b8; ca = ca.parentNode) {
                    if (ca.nodeType < 11 && (cb ? cb.index(ca) > -1 : ca.nodeType === 1 && bL.find.matchesSelector(ca, b9))) {
                        ca = b6.push(ca);
                        break
                    }
                }
            }
            return this.pushStack(b6.length > 1 ? bL.unique(b6) : b6)
        },
        index: function(e) {
            if (!e) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return bL.inArray(this[0], bL(e))
            }
            return bL.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(e, b6) {
            var b8 = typeof e === "string" ? bL(e, b6) : bL.makeArray(e && e.nodeType ? [e] : e)
              , b7 = bL.merge(this.get(), b8);
            return this.pushStack(bL.unique(b7))
        },
        addBack: function(e) {
            return this.add(e == null  ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function aY(b6, e) {
        do {
            b6 = b6[e]
        } while (b6 && b6.nodeType !== 1);return b6
    }
    bL.each({
        parent: function(b6) {
            var e = b6.parentNode;
            return e && e.nodeType !== 11 ? e : null 
        },
        parents: function(e) {
            return bL.dir(e, "parentNode")
        },
        parentsUntil: function(b6, e, b7) {
            return bL.dir(b6, "parentNode", b7)
        },
        next: function(e) {
            return aY(e, "nextSibling")
        },
        prev: function(e) {
            return aY(e, "previousSibling")
        },
        nextAll: function(e) {
            return bL.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return bL.dir(e, "previousSibling")
        },
        nextUntil: function(b6, e, b7) {
            return bL.dir(b6, "nextSibling", b7)
        },
        prevUntil: function(b6, e, b7) {
            return bL.dir(b6, "previousSibling", b7)
        },
        siblings: function(e) {
            return bL.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return bL.sibling(e.firstChild)
        },
        contents: function(e) {
            return bL.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : bL.merge([], e.childNodes)
        }
    }, function(e, b6) {
        bL.fn[e] = function(b9, b7) {
            var b8 = bL.map(this, b6, b9);
            if (e.slice(-5) !== "Until") {
                b7 = b9
            }
            if (b7 && typeof b7 === "string") {
                b8 = bL.filter(b7, b8)
            }
            if (this.length > 1) {
                if (!bz[e]) {
                    b8 = bL.unique(b8)
                }
                if (bv.test(e)) {
                    b8 = b8.reverse()
                }
            }
            return this.pushStack(b8)
        }
    });
    bL.extend({
        filter: function(b8, e, b7) {
            var b6 = e[0];
            if (b7) {
                b8 = ":not(" + b8 + ")"
            }
            return e.length === 1 && b6.nodeType === 1 ? bL.find.matchesSelector(b6, b8) ? [b6] : [] : bL.find.matches(b8, bL.grep(e, function(b9) {
                return b9.nodeType === 1
            }))
        },
        dir: function(b7, b6, b9) {
            var e = []
              , b8 = b7[b6];
            while (b8 && b8.nodeType !== 9 && (b9 === aH || b8.nodeType !== 1 || !bL(b8).is(b9))) {
                if (b8.nodeType === 1) {
                    e.push(b8)
                }
                b8 = b8[b6]
            }
            return e
        },
        sibling: function(b7, b6) {
            var e = [];
            for (; b7; b7 = b7.nextSibling) {
                if (b7.nodeType === 1 && b7 !== b6) {
                    e.push(b7)
                }
            }
            return e
        }
    });
    function aP(b7, e, b6) {
        if (bL.isFunction(e)) {
            return bL.grep(b7, function(b9, b8) {
                return !!e.call(b9, b8, b9) !== b6
            })
        }
        if (e.nodeType) {
            return bL.grep(b7, function(b8) {
                return (b8 === e) !== b6
            })
        }
        if (typeof e === "string") {
            if (ao.test(e)) {
                return bL.filter(e, b7, b6)
            }
            e = bL.filter(e, b7)
        }
        return bL.grep(b7, function(b8) {
            return (bL.inArray(b8, e) >= 0) !== b6
        })
    }
    function C(e) {
        var b7 = f.split("|")
          , b6 = e.createDocumentFragment();
        if (b6.createElement) {
            while (b7.length) {
                b6.createElement(b7.pop())
            }
        }
        return b6
    }
    var f = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , aB = / jQuery\d+="(?:null|\d+)"/g
      , L = new RegExp("<(?:" + f + ")[\\s/>]","i")
      , b5 = /^\s+/
      , aE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , o = /<([\w:]+)/
      , b0 = /<tbody/i
      , K = /<|&#?\w+;/
      , am = /<(?:script|style|link)/i
      , s = /^(?:checkbox|radio)$/i
      , bW = /checked\s*(?:[^=]|=\s*.checked.)/i
      , bB = /^$|\/(?:java|ecma)script/i
      , at = /^true\/(.*)/
      , aL = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , U = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: bL.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , aT = C(n)
      , k = aT.appendChild(n.createElement("div"));
    U.optgroup = U.option;
    U.tbody = U.tfoot = U.colgroup = U.caption = U.thead;
    U.th = U.td;
    bL.fn.extend({
        text: function(e) {
            return bL.access(this, function(b6) {
                return b6 === aH ? bL.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(b6))
            }, null , e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b6 = a2(this, e);
                    b6.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b6 = a2(this, e);
                    b6.insertBefore(e, b6.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        remove: function(e, b9) {
            var b8, b6 = e ? bL.filter(e, this) : this, b7 = 0;
            for (; (b8 = b6[b7]) != null ; b7++) {
                if (!b9 && b8.nodeType === 1) {
                    bL.cleanData(m(b8))
                }
                if (b8.parentNode) {
                    if (b9 && bL.contains(b8.ownerDocument, b8)) {
                        bu(m(b8, "script"))
                    }
                    b8.parentNode.removeChild(b8)
                }
            }
            return this
        },
        empty: function() {
            var b6, e = 0;
            for (; (b6 = this[e]) != null ; e++) {
                if (b6.nodeType === 1) {
                    bL.cleanData(m(b6, false))
                }
                while (b6.firstChild) {
                    b6.removeChild(b6.firstChild)
                }
                if (b6.options && bL.nodeName(b6, "select")) {
                    b6.options.length = 0
                }
            }
            return this
        },
        clone: function(b6, e) {
            b6 = b6 == null  ? false : b6;
            e = e == null  ? b6 : e;
            return this.map(function() {
                return bL.clone(this, b6, e)
            })
        },
        html: function(e) {
            return bL.access(this, function(b9) {
                var b8 = this[0] || {}
                  , b7 = 0
                  , b6 = this.length;
                if (b9 === aH) {
                    return b8.nodeType === 1 ? b8.innerHTML.replace(aB, "") : aH
                }
                if (typeof b9 === "string" && !am.test(b9) && (bL.support.htmlSerialize || !L.test(b9)) && (bL.support.leadingWhitespace || !b5.test(b9)) && !U[(o.exec(b9) || ["", ""])[1].toLowerCase()]) {
                    b9 = b9.replace(aE, "<$1></$2>");
                    try {
                        for (; b7 < b6; b7++) {
                            b8 = this[b7] || {};
                            if (b8.nodeType === 1) {
                                bL.cleanData(m(b8, false));
                                b8.innerHTML = b9
                            }
                        }
                        b8 = 0
                    } catch (ca) {}
                }
                if (b8) {
                    this.empty().append(b9)
                }
            }, null , e, arguments.length)
        },
        replaceWith: function() {
            var e = bL.map(this, function(b7) {
                return [b7.nextSibling, b7.parentNode]
            })
              , b6 = 0;
            this.domManip(arguments, function(b9) {
                var b8 = e[b6++]
                  , b7 = e[b6++];
                if (b7) {
                    if (b8 && b8.parentNode !== b7) {
                        b8 = this.nextSibling
                    }
                    bL(this).remove();
                    b7.insertBefore(b9, b8)
                }
            }, true);
            return b6 ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(cf, cl, b7) {
            cf = aJ.apply([], cf);
            var cc, b8, e, ca, cj, ce, cb = 0, b9 = this.length, ch = this, ck = b9 - 1, cg = cf[0], b6 = bL.isFunction(cg);
            if (b6 || !(b9 <= 1 || typeof cg !== "string" || bL.support.checkClone || !bW.test(cg))) {
                return this.each(function(cn) {
                    var cm = ch.eq(cn);
                    if (b6) {
                        cf[0] = cg.call(this, cn, cm.html())
                    }
                    cm.domManip(cf, cl, b7)
                })
            }
            if (b9) {
                ce = bL.buildFragment(cf, this[0].ownerDocument, false, !b7 && this);
                cc = ce.firstChild;
                if (ce.childNodes.length === 1) {
                    ce = cc
                }
                if (cc) {
                    ca = bL.map(m(ce, "script"), v);
                    e = ca.length;
                    for (; cb < b9; cb++) {
                        b8 = ce;
                        if (cb !== ck) {
                            b8 = bL.clone(b8, true, true);
                            if (e) {
                                bL.merge(ca, m(b8, "script"))
                            }
                        }
                        cl.call(this[cb], b8, cb)
                    }
                    if (e) {
                        cj = ca[ca.length - 1].ownerDocument;
                        bL.map(ca, bf);
                        for (cb = 0; cb < e; cb++) {
                            b8 = ca[cb];
                            if (bB.test(b8.type || "") && !bL._data(b8, "globalEval") && bL.contains(cj, b8)) {
                                if (b8.src) {
                                    bL._evalUrl(b8.src)
                                } else {
                                    bL.globalEval((b8.text || b8.textContent || b8.innerHTML || "").replace(aL, ""))
                                }
                            }
                        }
                    }
                    ce = cc = null 
                }
            }
            return this
        }
    });
    function a2(b6, e) {
        return bL.nodeName(b6, "table") && bL.nodeName(e.nodeType === 1 ? e : e.firstChild, "tr") ? b6.getElementsByTagName("tbody")[0] || b6.appendChild(b6.ownerDocument.createElement("tbody")) : b6
    }
    function v(e) {
        e.type = (bL.find.attr(e, "type") !== null ) + "/" + e.type;
        return e
    }
    function bf(b6) {
        var e = at.exec(b6.type);
        if (e) {
            b6.type = e[1]
        } else {
            b6.removeAttribute("type")
        }
        return b6
    }
    function bu(e, b7) {
        var b8, b6 = 0;
        for (; (b8 = e[b6]) != null ; b6++) {
            bL._data(b8, "globalEval", !b7 || bL._data(b7[b6], "globalEval"))
        }
    }
    function au(cc, b6) {
        if (b6.nodeType !== 1 || !bL.hasData(cc)) {
            return
        }
        var b9, b8, e, cb = bL._data(cc), ca = bL._data(b6, cb), b7 = cb.events;
        if (b7) {
            delete ca.handle;
            ca.events = {};
            for (b9 in b7) {
                for (b8 = 0,
                e = b7[b9].length; b8 < e; b8++) {
                    bL.event.add(b6, b9, b7[b9][b8])
                }
            }
        }
        if (ca.data) {
            ca.data = bL.extend({}, ca.data)
        }
    }
    function R(b9, b6) {
        var ca, b8, b7;
        if (b6.nodeType !== 1) {
            return
        }
        ca = b6.nodeName.toLowerCase();
        if (!bL.support.noCloneEvent && b6[bL.expando]) {
            b7 = bL._data(b6);
            for (b8 in b7.events) {
                bL.removeEvent(b6, b8, b7.handle)
            }
            b6.removeAttribute(bL.expando)
        }
        if (ca === "script" && b6.text !== b9.text) {
            v(b6).text = b9.text;
            bf(b6)
        } else {
            if (ca === "object") {
                if (b6.parentNode) {
                    b6.outerHTML = b9.outerHTML
                }
                if (bL.support.html5Clone && (b9.innerHTML && !bL.trim(b6.innerHTML))) {
                    b6.innerHTML = b9.innerHTML
                }
            } else {
                if (ca === "input" && s.test(b9.type)) {
                    b6.defaultChecked = b6.checked = b9.checked;
                    if (b6.value !== b9.value) {
                        b6.value = b9.value
                    }
                } else {
                    if (ca === "option") {
                        b6.defaultSelected = b6.selected = b9.defaultSelected
                    } else {
                        if (ca === "input" || ca === "textarea") {
                            b6.defaultValue = b9.defaultValue
                        }
                    }
                }
            }
        }
    }
    bL.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, b6) {
        bL.fn[e] = function(b7) {
            var b8, ca = 0, b9 = [], cc = bL(b7), cb = cc.length - 1;
            for (; ca <= cb; ca++) {
                b8 = ca === cb ? this : this.clone(true);
                bL(cc[ca])[b6](b8);
                ap.apply(b9, b8.get())
            }
            return this.pushStack(b9)
        }
    });
    function m(b8, e) {
        var b6, b9, b7 = 0, ca = typeof b8.getElementsByTagName !== aD ? b8.getElementsByTagName(e || "*") : typeof b8.querySelectorAll !== aD ? b8.querySelectorAll(e || "*") : aH;
        if (!ca) {
            for (ca = [],
            b6 = b8.childNodes || b8; (b9 = b6[b7]) != null ; b7++) {
                if (!e || bL.nodeName(b9, e)) {
                    ca.push(b9)
                } else {
                    bL.merge(ca, m(b9, e))
                }
            }
        }
        return e === aH || e && bL.nodeName(b8, e) ? bL.merge([b8], ca) : ca
    }
    function bX(e) {
        if (s.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }
    bL.extend({
        clone: function(b6, b8, e) {
            var ca, b7, ce, b9, cb, cc = bL.contains(b6.ownerDocument, b6);
            if (bL.support.html5Clone || bL.isXMLDoc(b6) || !L.test("<" + b6.nodeName + ">")) {
                ce = b6.cloneNode(true)
            } else {
                k.innerHTML = b6.outerHTML;
                k.removeChild(ce = k.firstChild)
            }
            if ((!bL.support.noCloneEvent || !bL.support.noCloneChecked) && (b6.nodeType === 1 || b6.nodeType === 11) && !bL.isXMLDoc(b6)) {
                ca = m(ce);
                cb = m(b6);
                for (b9 = 0; (b7 = cb[b9]) != null ; ++b9) {
                    if (ca[b9]) {
                        R(b7, ca[b9])
                    }
                }
            }
            if (b8) {
                if (e) {
                    cb = cb || m(b6);
                    ca = ca || m(ce);
                    for (b9 = 0; (b7 = cb[b9]) != null ; b9++) {
                        au(b7, ca[b9])
                    }
                } else {
                    au(b6, ce)
                }
            }
            ca = m(ce, "script");
            if (ca.length > 0) {
                bu(ca, !cc && m(b6, "script"))
            }
            ca = cb = b7 = null ;
            return ce
        },
        buildFragment: function(b6, b8, ce, ck) {
            var cf, ca, cc, cj, cl, ch, b7, cb = b6.length, b9 = C(b8), e = [], cg = 0;
            for (; cg < cb; cg++) {
                ca = b6[cg];
                if (ca || ca === 0) {
                    if (bL.type(ca) === "object") {
                        bL.merge(e, ca.nodeType ? [ca] : ca)
                    } else {
                        if (!K.test(ca)) {
                            e.push(b8.createTextNode(ca))
                        } else {
                            cj = cj || b9.appendChild(b8.createElement("div"));
                            cl = (o.exec(ca) || ["", ""])[1].toLowerCase();
                            b7 = U[cl] || U._default;
                            cj.innerHTML = b7[1] + ca.replace(aE, "<$1></$2>") + b7[2];
                            cf = b7[0];
                            while (cf--) {
                                cj = cj.lastChild
                            }
                            if (!bL.support.leadingWhitespace && b5.test(ca)) {
                                e.push(b8.createTextNode(b5.exec(ca)[0]))
                            }
                            if (!bL.support.tbody) {
                                ca = cl === "table" && !b0.test(ca) ? cj.firstChild : b7[1] === "<table>" && !b0.test(ca) ? cj : 0;
                                cf = ca && ca.childNodes.length;
                                while (cf--) {
                                    if (bL.nodeName((ch = ca.childNodes[cf]), "tbody") && !ch.childNodes.length) {
                                        ca.removeChild(ch)
                                    }
                                }
                            }
                            bL.merge(e, cj.childNodes);
                            cj.textContent = "";
                            while (cj.firstChild) {
                                cj.removeChild(cj.firstChild)
                            }
                            cj = b9.lastChild
                        }
                    }
                }
            }
            if (cj) {
                b9.removeChild(cj)
            }
            if (!bL.support.appendChecked) {
                bL.grep(m(e, "input"), bX)
            }
            cg = 0;
            while ((ca = e[cg++]) ) {
                if (ck && bL.inArray(ca, ck) !== -1) {
                    continue
                }
                cc = bL.contains(ca.ownerDocument, ca);
                cj = m(b9.appendChild(ca), "script");
                if (cc) {
                    bu(cj)
                }
                if (ce) {
                    cf = 0;
                    while ((ca = cj[cf++]) ) {
                        if (bB.test(ca.type || "")) {
                            ce.push(ca)
                        }
                    }
                }
            }
            cj = null ;
            return b9
        },
        cleanData: function(b6, cf) {
            var b8, ce, b7, b9, ca = 0, cg = bL.expando, e = bL.cache, cb = bL.support.deleteExpando, cc = bL.event.special;
            for (; (b8 = b6[ca]) != null ; ca++) {
                if (cf || bL.acceptData(b8)) {
                    b7 = b8[cg];
                    b9 = b7 && e[b7];
                    if (b9) {
                        if (b9.events) {
                            for (ce in b9.events) {
                                if (cc[ce]) {
                                    bL.event.remove(b8, ce)
                                } else {
                                    bL.removeEvent(b8, ce, b9.handle)
                                }
                            }
                        }
                        if (e[b7]) {
                            delete e[b7];
                            if (cb) {
                                delete b8[cg]
                            } else {
                                if (typeof b8.removeAttribute !== aD) {
                                    b8.removeAttribute(cg)
                                } else {
                                    b8[cg] = null 
                                }
                            }
                            a8.push(b7)
                        }
                    }
                }
            }
        },
        _evalUrl: function(e) {
            return bL.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            })
        }
    });
    bL.fn.extend({
        wrapAll: function(e) {
            if (bL.isFunction(e)) {
                return this.each(function(b7) {
                    bL(this).wrapAll(e.call(this, b7))
                })
            }
            if (this[0]) {
                var b6 = bL(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    b6.insertBefore(this[0])
                }
                b6.map(function() {
                    var b7 = this;
                    while (b7.firstChild && b7.firstChild.nodeType === 1) {
                        b7 = b7.firstChild
                    }
                    return b7
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (bL.isFunction(e)) {
                return this.each(function(b6) {
                    bL(this).wrapInner(e.call(this, b6))
                })
            }
            return this.each(function() {
                var b6 = bL(this)
                  , b7 = b6.contents();
                if (b7.length) {
                    b7.wrapAll(e)
                } else {
                    b6.append(e)
                }
            })
        },
        wrap: function(e) {
            var b6 = bL.isFunction(e);
            return this.each(function(b7) {
                bL(this).wrapAll(b6 ? e.call(this, b7) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!bL.nodeName(this, "body")) {
                    bL(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    var aF, bq, G, bi = /alpha\([^)]*\)/i, aU = /opacity\s*=\s*([^)]*)/, bp = /^(top|right|bottom|left)$/, H = /^(none|table(?!-c[ea]).+)/, aZ = /^margin/, bb = new RegExp("^(" + bC + ")(.*)$","i"), X = new RegExp("^(" + bC + ")(?!px)[a-z%]+$","i"), T = new RegExp("^([+-])=(" + bC + ")","i"), bl = {
        BODY: "block"
    }, be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bE = {
        letterSpacing: 0,
        fontWeight: 400
    }, bV = ["Top", "Right", "Bottom", "Left"], aw = ["Webkit", "O", "Moz", "ms"];
    function b(b8, b6) {
        if (b6 in b8) {
            return b6
        }
        var b9 = b6.charAt(0).toUpperCase() + b6.slice(1)
          , e = b6
          , b7 = aw.length;
        while (b7--) {
            b6 = aw[b7] + b9;
            if (b6 in b8) {
                return b6
            }
        }
        return e
    }
    function Q(b6, e) {
        b6 = e || b6;
        return bL.css(b6, "display") === "none" || !bL.contains(b6.ownerDocument, b6)
    }
    function r(cb, e) {
        var cc, b9, ca, b6 = [], b7 = 0, b8 = cb.length;
        for (; b7 < b8; b7++) {
            b9 = cb[b7];
            if (!b9.style) {
                continue
            }
            b6[b7] = bL._data(b9, "olddisplay");
            cc = b9.style.display;
            if (e) {
                if (!b6[b7] && cc === "none") {
                    b9.style.display = ""
                }
                if (b9.style.display === "" && Q(b9)) {
                    b6[b7] = bL._data(b9, "olddisplay", bG(b9.nodeName))
                }
            } else {
                if (!b6[b7]) {
                    ca = Q(b9);
                    if (cc && cc !== "none" || !ca) {
                        bL._data(b9, "olddisplay", ca ? cc : bL.css(b9, "display"))
                    }
                }
            }
        }
        for (b7 = 0; b7 < b8; b7++) {
            b9 = cb[b7];
            if (!b9.style) {
                continue
            }
            if (!e || b9.style.display === "none" || b9.style.display === "") {
                b9.style.display = e ? b6[b7] || "" : "none"
            }
        }
        return cb
    }
    bL.fn.extend({
        css: function(e, b6) {
            return bL.access(this, function(cb, b8, cc) {
                var b7, ca, ce = {}, b9 = 0;
                if (bL.isArray(b8)) {
                    ca = bq(cb);
                    b7 = b8.length;
                    for (; b9 < b7; b9++) {
                        ce[b8[b9]] = bL.css(cb, b8[b9], false, ca)
                    }
                    return ce
                }
                return cc !== aH ? bL.style(cb, b8, cc) : bL.css(cb, b8)
            }, e, b6, arguments.length > 1)
        },
        show: function() {
            return r(this, true)
        },
        hide: function() {
            return r(this)
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (Q(this)) {
                    bL(this).show()
                } else {
                    bL(this).hide()
                }
            })
        }
    });
    bL.extend({
        cssHooks: {
            opacity: {
                get: function(b7, b6) {
                    if (b6) {
                        var e = G(b7, "opacity");
                        return e === "" ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": bL.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b8, b7, cf, b9) {
            if (!b8 || b8.nodeType === 3 || b8.nodeType === 8 || !b8.style) {
                return
            }
            var cc, ce, cg, ca = bL.camelCase(b7), b6 = b8.style;
            b7 = bL.cssProps[ca] || (bL.cssProps[ca] = b(b6, ca));
            cg = bL.cssHooks[b7] || bL.cssHooks[ca];
            if (cf !== aH) {
                ce = typeof cf;
                if (ce === "string" && (cc = T.exec(cf))) {
                    cf = (cc[1] + 1) * cc[2] + parseFloat(bL.css(b8, b7));
                    ce = "number"
                }
                if (cf == null  || ce === "number" && isNaN(cf)) {
                    return
                }
                if (ce === "number" && !bL.cssNumber[ca]) {
                    cf += "px"
                }
                if (!bL.support.clearCloneStyle && cf === "" && b7.indexOf("background") === 0) {
                    b6[b7] = "inherit"
                }
                if (!cg || !("set" in cg) || (cf = cg.set(b8, cf, b9)) !== aH) {
                    try {
                        b6[b7] = cf
                    } catch (cb) {}
                }
            } else {
                if (cg && "get" in cg && (cc = cg.get(b8, false, b9)) !== aH) {
                    return cc
                }
                return b6[b7]
            }
        },
        css: function(cb, b9, b6, ca) {
            var b8, cc, e, b7 = bL.camelCase(b9);
            b9 = bL.cssProps[b7] || (bL.cssProps[b7] = b(cb.style, b7));
            e = bL.cssHooks[b9] || bL.cssHooks[b7];
            if (e && "get" in e) {
                cc = e.get(cb, true, b6)
            }
            if (cc === aH) {
                cc = G(cb, b9, ca)
            }
            if (cc === "normal" && b9 in bE) {
                cc = bE[b9]
            }
            if (b6 === "" || b6) {
                b8 = parseFloat(cc);
                return b6 === true || bL.isNumeric(b8) ? b8 || 0 : cc
            }
            return cc
        }
    });
    if (a4.getComputedStyle) {
        bq = function(e) {
            return a4.getComputedStyle(e, null )
        }
        ;
        G = function(b9, b7, cb) {
            var b8, b6, ce, ca = cb || bq(b9), cc = ca ? ca.getPropertyValue(b7) || ca[b7] : aH, e = b9.style;
            if (ca) {
                if (cc === "" && !bL.contains(b9.ownerDocument, b9)) {
                    cc = bL.style(b9, b7)
                }
                if (X.test(cc) && aZ.test(b7)) {
                    b8 = e.width;
                    b6 = e.minWidth;
                    ce = e.maxWidth;
                    e.minWidth = e.maxWidth = e.width = cc;
                    cc = ca.width;
                    e.width = b8;
                    e.minWidth = b6;
                    e.maxWidth = ce
                }
            }
            return cc
        }
    } else {
        if (n.documentElement.currentStyle) {
            bq = function(e) {
                return e.currentStyle
            }
            ;
            G = function(b8, b6, cb) {
                var b7, ca, cc, b9 = cb || bq(b8), ce = b9 ? b9[b6] : aH, e = b8.style;
                if (ce == null  && e && e[b6]) {
                    ce = e[b6]
                }
                if (X.test(ce) && !bp.test(b6)) {
                    b7 = e.left;
                    ca = b8.runtimeStyle;
                    cc = ca && ca.left;
                    if (cc) {
                        ca.left = b8.currentStyle.left
                    }
                    e.left = b6 === "fontSize" ? "1em" : ce;
                    ce = e.pixelLeft + "px";
                    e.left = b7;
                    if (cc) {
                        ca.left = cc
                    }
                }
                return ce === "" ? "auto" : ce
            }
        }
    }
    function aK(e, b7, b8) {
        var b6 = bb.exec(b7);
        return b6 ? Math.max(0, b6[1] - (b8 || 0)) + (b6[2] || "px") : b7
    }
    function ax(b9, b6, e, cb, b8) {
        var b7 = e === (cb ? "border" : "content") ? 4 : b6 === "width" ? 1 : 0
          , ca = 0;
        for (; b7 < 4; b7 += 2) {
            if (e === "margin") {
                ca += bL.css(b9, e + bV[b7], true, b8)
            }
            if (cb) {
                if (e === "content") {
                    ca -= bL.css(b9, "padding" + bV[b7], true, b8)
                }
                if (e !== "margin") {
                    ca -= bL.css(b9, "border" + bV[b7] + "Width", true, b8)
                }
            } else {
                ca += bL.css(b9, "padding" + bV[b7], true, b8);
                if (e !== "padding") {
                    ca += bL.css(b9, "border" + bV[b7] + "Width", true, b8)
                }
            }
        }
        return ca
    }
    function x(b9, b6, e) {
        var b8 = true
          , ca = b6 === "width" ? b9.offsetWidth : b9.offsetHeight
          , b7 = bq(b9)
          , cb = bL.support.boxSizing && bL.css(b9, "boxSizing", false, b7) === "border-box";
        if (ca <= 0 || ca == null ) {
            ca = G(b9, b6, b7);
            if (ca < 0 || ca == null ) {
                ca = b9.style[b6]
            }
            if (X.test(ca)) {
                return ca
            }
            b8 = cb && (bL.support.boxSizingReliable || ca === b9.style[b6]);
            ca = parseFloat(ca) || 0
        }
        return (ca + ax(b9, b6, e || (cb ? "border" : "content"), b8, b7)) + "px"
    }
    function bG(b7) {
        var b6 = n
          , e = bl[b7];
        if (!e) {
            e = a3(b7, b6);
            if (e === "none" || !e) {
                aF = (aF || bL("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b6.documentElement);
                b6 = (aF[0].contentWindow || aF[0].contentDocument).document;
                b6.write("<!doctype html><html><body>");
                b6.close();
                e = a3(b7, b6);
                aF.detach()
            }
            bl[b7] = e
        }
        return e
    }
    function a3(e, b8) {
        var b6 = bL(b8.createElement(e)).appendTo(b8.body)
          , b7 = bL.css(b6[0], "display");
        b6.remove();
        return b7
    }
    bL.each(["height", "width"], function(b6, e) {
        bL.cssHooks[e] = {
            get: function(b9, b8, b7) {
                if (b8) {
                    return b9.offsetWidth === 0 && H.test(bL.css(b9, "display")) ? bL.swap(b9, be, function() {
                        return x(b9, e, b7)
                    }) : x(b9, e, b7)
                }
            },
            set: function(b9, ca, b7) {
                var b8 = b7 && bq(b9);
                return aK(b9, ca, b7 ? ax(b9, e, b7, bL.support.boxSizing && bL.css(b9, "boxSizing", false, b8) === "border-box", b8) : 0)
            }
        }
    });
    if (!bL.support.opacity) {
        bL.cssHooks.opacity = {
            get: function(b6, e) {
                return aU.test((e && b6.currentStyle ? b6.currentStyle.filter : b6.style.filter) || "") ? (0.01 * parseFloat(RegExp.$1)) + "" : e ? "1" : ""
            },
            set: function(b9, ca) {
                var b8 = b9.style
                  , b6 = b9.currentStyle
                  , e = bL.isNumeric(ca) ? "alpha(opacity=" + ca * 100 + ")" : ""
                  , b7 = b6 && b6.filter || b8.filter || "";
                b8.zoom = 1;
                if ((ca >= 1 || ca === "") && bL.trim(b7.replace(bi, "")) === "" && b8.removeAttribute) {
                    b8.removeAttribute("filter");
                    if (ca === "" || b6 && !b6.filter) {
                        return
                    }
                }
                b8.filter = bi.test(b7) ? b7.replace(bi, e) : b7 + " " + e
            }
        }
    }
    bL(function() {
        if (!bL.support.reliableMarginRight) {
            bL.cssHooks.marginRight = {
                get: function(b6, e) {
                    if (e) {
                        return bL.swap(b6, {
                            display: "inline-block"
                        }, G, [b6, "marginRight"])
                    }
                }
            }
        }
        if (!bL.support.pixelPosition && bL.fn.position) {
            bL.each(["top", "left"], function(e, b6) {
                bL.cssHooks[b6] = {
                    get: function(b8, b7) {
                        if (b7) {
                            b7 = G(b8, b6);
                            return X.test(b7) ? bL(b8).position()[b6] + "px" : b7
                        }
                    }
                }
            })
        }
    });
    if (bL.expr && bL.expr.filters) {
        bL.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || (!bL.support.reliableHiddenOffsets && ((e.style && e.style.display) || bL.css(e, "display")) === "none")
        }
        ;
        bL.expr.filters.visible = function(e) {
            return !bL.expr.filters.hidden(e)
        }
    }
    bL.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, b6) {
        bL.cssHooks[e + b6] = {
            expand: function(b9) {
                var b8 = 0
                  , b7 = {}
                  , ca = typeof b9 === "string" ? b9.split(" ") : [b9];
                for (; b8 < 4; b8++) {
                    b7[e + bV[b8] + b6] = ca[b8] || ca[b8 - 2] || ca[0]
                }
                return b7
            }
        };
        if (!aZ.test(e)) {
            bL.cssHooks[e + b6].set = aK
        }
    });
    var bx = /%20/g
      , aS = /\[\]$/
      , V = /\r?\n/g
      , c = /^(?:submit|button|image|reset|file)$/i
      , av = /^(?:input|select|textarea|keygen)/i;
    bL.fn.extend({
        serialize: function() {
            return bL.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = bL.prop(this, "elements");
                return e ? bL.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !bL(this).is(":disabled") && av.test(this.nodeName) && !c.test(e) && (this.checked || !s.test(e))
            }).map(function(e, b6) {
                var b7 = bL(this).val();
                return b7 == null  ? null  : bL.isArray(b7) ? bL.map(b7, function(b8) {
                    return {
                        name: b6.name,
                        value: b8.replace(V, "\r\n")
                    }
                }) : {
                    name: b6.name,
                    value: b7.replace(V, "\r\n")
                }
            }).get()
        }
    });
    bL.param = function(e, b7) {
        var b8, b6 = [], b9 = function(ca, cb) {
            cb = bL.isFunction(cb) ? cb() : (cb == null  ? "" : cb);
            b6[b6.length] = encodeURIComponent(ca) + "=" + encodeURIComponent(cb)
        }
        ;
        if (b7 === aH) {
            b7 = bL.ajaxSettings && bL.ajaxSettings.traditional
        }
        if (bL.isArray(e) || (e.jquery && !bL.isPlainObject(e))) {
            bL.each(e, function() {
                b9(this.name, this.value)
            })
        } else {
            for (b8 in e) {
                j(b8, e[b8], b7, b9)
            }
        }
        return b6.join("&").replace(bx, "+")
    }
    ;
    function j(b7, b9, b6, b8) {
        var e;
        if (bL.isArray(b9)) {
            bL.each(b9, function(cb, ca) {
                if (b6 || aS.test(b7)) {
                    b8(b7, ca)
                } else {
                    j(b7 + "[" + (typeof ca === "object" ? cb : "") + "]", ca, b6, b8)
                }
            })
        } else {
            if (!b6 && bL.type(b9) === "object") {
                for (e in b9) {
                    j(b7 + "[" + e + "]", b9[e], b6, b8)
                }
            } else {
                b8(b7, b9)
            }
        }
    }
    bL.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "), function(b6, e) {
        bL.fn[e] = function(b8, b7) {
            return arguments.length > 0 ? this.on(e, null , b8, b7) : this.trigger(e)
        }
    });
    bL.fn.extend({
        hover: function(e, b6) {
            return this.mouseenter(e).mouseleave(b6 || e)
        },
        bind: function(e, b7, b6) {
            return this.on(e, null , b7, b6)
        },
        unbind: function(e, b6) {
            return this.off(e, null , b6)
        },
        delegate: function(e, b6, b8, b7) {
            return this.on(b6, e, b8, b7)
        },
        undelegate: function(e, b6, b7) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(b6, e || "**", b7)
        }
    });
    var b4, Z, bQ = bL.now(), aA = /\?/, aq = /#.*$/, P = /([?&])_=[^&]*/, ah = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, D = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, q = /^(?:GET|HEAD)$/, aI = /^\/\//, aV = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, b3 = bL.fn.load, y = {}, a9 = {}, aX = "*/".concat("*");
    try {
        Z = aM.href
    } catch (bh) {
        Z = n.createElement("a");
        Z.href = "";
        Z = Z.href
    }
    b4 = aV.exec(Z.toLowerCase()) || [];
    function bN(e) {
        return function(b9, ca) {
            if (typeof b9 !== "string") {
                ca = b9;
                b9 = "*"
            }
            var b6, b7 = 0, b8 = b9.toLowerCase().match(ad) || [];
            if (bL.isFunction(ca)) {
                while ((b6 = b8[b7++]) ) {
                    if (b6[0] === "+") {
                        b6 = b6.slice(1) || "*";
                        (e[b6] = e[b6] || []).unshift(ca)
                    } else {
                        (e[b6] = e[b6] || []).push(ca)
                    }
                }
            }
        }
    }
    function p(e, b7, cb, b8) {
        var b6 = {}
          , b9 = (e === a9);
        function ca(cc) {
            var ce;
            b6[cc] = true;
            bL.each(e[cc] || [], function(cg, cf) {
                var ch = cf(b7, cb, b8);
                if (typeof ch === "string" && !b9 && !b6[ch]) {
                    b7.dataTypes.unshift(ch);
                    ca(ch);
                    return false
                } else {
                    if (b9) {
                        return !(ce = ch)
                    }
                }
            });
            return ce
        }
        return ca(b7.dataTypes[0]) || !b6["*"] && ca("*")
    }
    function t(b7, b8) {
        var e, b6, b9 = bL.ajaxSettings.flatOptions || {};
        for (b6 in b8) {
            if (b8[b6] !== aH) {
                (b9[b6] ? b7 : (e || (e = {})))[b6] = b8[b6]
            }
        }
        if (e) {
            bL.extend(true, b7, e)
        }
        return b7
    }
    bL.fn.load = function(b8, cb, cc) {
        if (typeof b8 !== "string" && b3) {
            return b3.apply(this, arguments)
        }
        var e, b7, b9, b6 = this, ca = b8.indexOf(" ");
        if (ca >= 0) {
            e = b8.slice(ca, b8.length);
            b8 = b8.slice(0, ca)
        }
        if (bL.isFunction(cb)) {
            cc = cb;
            cb = aH
        } else {
            if (cb && typeof cb === "object") {
                b9 = "POST"
            }
        }
        if (b6.length > 0) {
            bL.ajax({
                url: b8,
                type: b9,
                dataType: "html",
                data: cb
            }).done(function(ce) {
                b7 = arguments;
                b6.html(e ? bL("<div>").append(bL.parseHTML(ce)).find(e) : ce)
            }).complete(cc && function(cf, ce) {
                b6.each(cc, b7 || [cf.responseText, ce, cf])
            }
            )
        }
        return this
    }
    ;
    bL.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, b6) {
        bL.fn[b6] = function(b7) {
            return this.on(b6, b7)
        }
    });
    bL.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Z,
            type: "GET",
            isLocal: D.test(b4[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": aX,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": bL.parseJSON,
                "text xml": bL.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(b6, e) {
            return e ? t(t(b6, bL.ajaxSettings), e) : t(bL.ajaxSettings, b6)
        },
        ajaxPrefilter: bN(y),
        ajaxTransport: bN(a9),
        ajax: function(ca, b7) {
            if (typeof ca === "object") {
                b7 = ca;
                ca = aH
            }
            b7 = b7 || {};
            var cl, cn, cb, cs, cg, b6, co, b8, cf = bL.ajaxSetup({}, b7), cu = cf.context || cf, cj = cf.context && (cu.nodeType || cu.jquery) ? bL(cu) : bL.event, ct = bL.Deferred(), cq = bL.Callbacks("once memory"), cc = cf.statusCode || {}, ck = {}, cr = {}, b9 = 0, ce = "canceled", cm = {
                readyState: 0,
                getResponseHeader: function(cv) {
                    var e;
                    if (b9 === 2) {
                        if (!b8) {
                            b8 = {};
                            while ((e = ah.exec(cs)) ) {
                                b8[e[1].toLowerCase()] = e[2]
                            }
                        }
                        e = b8[cv.toLowerCase()]
                    }
                    return e == null  ? null  : e
                },
                getAllResponseHeaders: function() {
                    return b9 === 2 ? cs : null 
                },
                setRequestHeader: function(cv, cw) {
                    var e = cv.toLowerCase();
                    if (!b9) {
                        cv = cr[e] = cr[e] || cv;
                        ck[cv] = cw
                    }
                    return this
                },
                overrideMimeType: function(e) {
                    if (!b9) {
                        cf.mimeType = e
                    }
                    return this
                },
                statusCode: function(cv) {
                    var e;
                    if (cv) {
                        if (b9 < 2) {
                            for (e in cv) {
                                cc[e] = [cc[e], cv[e]]
                            }
                        } else {
                            cm.always(cv[cm.status])
                        }
                    }
                    return this
                },
                abort: function(cv) {
                    var e = cv || ce;
                    if (co) {
                        co.abort(e)
                    }
                    ch(0, e);
                    return this
                }
            };
            ct.promise(cm).complete = cq.add;
            cm.success = cm.done;
            cm.error = cm.fail;
            cf.url = ((ca || cf.url || Z) + "").replace(aq, "").replace(aI, b4[1] + "//");
            cf.type = b7.method || b7.type || cf.method || cf.type;
            cf.dataTypes = bL.trim(cf.dataType || "*").toLowerCase().match(ad) || [""];
            if (cf.crossDomain == null ) {
                cl = aV.exec(cf.url.toLowerCase());
                cf.crossDomain = !!(cl && (cl[1] !== b4[1] || cl[2] !== b4[2] || (cl[3] || (cl[1] === "http:" ? "80" : "443")) !== (b4[3] || (b4[1] === "http:" ? "80" : "443"))))
            }
            if (cf.data && cf.processData && typeof cf.data !== "string") {
                cf.data = bL.param(cf.data, cf.traditional)
            }
            p(y, cf, b7, cm);
            if (b9 === 2) {
                return cm
            }
            b6 = cf.global;
            if (b6 && bL.active++ === 0) {
                bL.event.trigger("ajaxStart")
            }
            cf.type = cf.type.toUpperCase();
            cf.hasContent = !q.test(cf.type);
            cb = cf.url;
            if (!cf.hasContent) {
                if (cf.data) {
                    cb = (cf.url += (aA.test(cb) ? "&" : "?") + cf.data);
                    delete cf.data
                }
                if (cf.cache === false) {
                    cf.url = P.test(cb) ? cb.replace(P, "$1_=" + bQ++) : cb + (aA.test(cb) ? "&" : "?") + "_=" + bQ++
                }
            }
            if (cf.ifModified) {
                if (bL.lastModified[cb]) {
                    cm.setRequestHeader("If-Modified-Since", bL.lastModified[cb])
                }
                if (bL.etag[cb]) {
                    cm.setRequestHeader("If-None-Match", bL.etag[cb])
                }
            }
            if (cf.data && cf.hasContent && cf.contentType !== false || b7.contentType) {
                cm.setRequestHeader("Content-Type", cf.contentType)
            }
            cm.setRequestHeader("Accept", cf.dataTypes[0] && cf.accepts[cf.dataTypes[0]] ? cf.accepts[cf.dataTypes[0]] + (cf.dataTypes[0] !== "*" ? ", " + aX + "; q=0.01" : "") : cf.accepts["*"]);
            for (cn in cf.headers) {
                cm.setRequestHeader(cn, cf.headers[cn])
            }
            if (cf.beforeSend && (cf.beforeSend.call(cu, cm, cf) === false || b9 === 2)) {
                return cm.abort()
            }
            ce = "abort";
            for (cn in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                cm[cn](cf[cn])
            }
            co = p(a9, cf, b7, cm);
            if (!co) {
                ch(-1, "No Transport")
            } else {
                cm.readyState = 1;
                if (b6) {
                    cj.trigger("ajaxSend", [cm, cf])
                }
                if (cf.async && cf.timeout > 0) {
                    cg = setTimeout(function() {
                        cm.abort("timeout")
                    }, cf.timeout)
                }
                try {
                    b9 = 1;
                    co.send(ck, ch)
                } catch (cp) {
                    if (b9 < 2) {
                        ch(-1, cp)
                    } else {
                        throw cp
                    }
                }
            }
            function ch(cz, cv, cA, cx) {
                var e, cD, cB, cy, cC, cw = cv;
                if (b9 === 2) {
                    return
                }
                b9 = 2;
                if (cg) {
                    clearTimeout(cg)
                }
                co = aH;
                cs = cx || "";
                cm.readyState = cz > 0 ? 4 : 0;
                e = cz >= 200 && cz < 300 || cz === 304;
                if (cA) {
                    cy = h(cf, cm, cA)
                }
                cy = ag(cf, cy, cm, e);
                if (e) {
                    if (cf.ifModified) {
                        cC = cm.getResponseHeader("Last-Modified");
                        if (cC) {
                            bL.lastModified[cb] = cC
                        }
                        cC = cm.getResponseHeader("etag");
                        if (cC) {
                            bL.etag[cb] = cC
                        }
                    }
                    if (cz === 204 || cf.type === "HEAD") {
                        cw = "nocontent"
                    } else {
                        if (cz === 304) {
                            cw = "notmodified"
                        } else {
                            cw = cy.state;
                            cD = cy.data;
                            cB = cy.error;
                            e = !cB
                        }
                    }
                } else {
                    cB = cw;
                    if (cz || !cw) {
                        cw = "error";
                        if (cz < 0) {
                            cz = 0
                        }
                    }
                }
                cm.status = cz;
                cm.statusText = (cv || cw) + "";
                if (e) {
                    ct.resolveWith(cu, [cD, cw, cm])
                } else {
                    ct.rejectWith(cu, [cm, cw, cB])
                }
                cm.statusCode(cc);
                cc = aH;
                if (b6) {
                    cj.trigger(e ? "ajaxSuccess" : "ajaxError", [cm, cf, e ? cD : cB])
                }
                cq.fireWith(cu, [cm, cw]);
                if (b6) {
                    cj.trigger("ajaxComplete", [cm, cf]);
                    if (!(--bL.active)) {
                        bL.event.trigger("ajaxStop")
                    }
                }
            }
            return cm
        },
        getJSON: function(e, b6, b7) {
            return bL.get(e, b6, b7, "json")
        },
        getScript: function(e, b6) {
            return bL.get(e, aH, b6, "script")
        }
    });
    bL.each(["get", "post"], function(e, b6) {
        bL[b6] = function(b7, b9, ca, b8) {
            if (bL.isFunction(b9)) {
                b8 = b8 || ca;
                ca = b9;
                b9 = aH
            }
            return bL.ajax({
                url: b7,
                type: b6,
                dataType: b8,
                data: b9,
                success: ca
            })
        }
    });
    function h(ce, cc, b9) {
        var e, b8, b7, ca, b6 = ce.contents, cb = ce.dataTypes;
        while (cb[0] === "*") {
            cb.shift();
            if (b8 === aH) {
                b8 = ce.mimeType || cc.getResponseHeader("Content-Type")
            }
        }
        if (b8) {
            for (ca in b6) {
                if (b6[ca] && b6[ca].test(b8)) {
                    cb.unshift(ca);
                    break
                }
            }
        }
        if (cb[0] in b9) {
            b7 = cb[0]
        } else {
            for (ca in b9) {
                if (!cb[0] || ce.converters[ca + " " + cb[0]]) {
                    b7 = ca;
                    break
                }
                if (!e) {
                    e = ca
                }
            }
            b7 = b7 || e
        }
        if (b7) {
            if (b7 !== cb[0]) {
                cb.unshift(b7)
            }
            return b9[b7]
        }
    }
    function ag(cj, b9, cf, b7) {
        var b6, cc, cg, ca, b8, ch = {}, ce = cj.dataTypes.slice();
        if (ce[1]) {
            for (cg in cj.converters) {
                ch[cg.toLowerCase()] = cj.converters[cg]
            }
        }
        cc = ce.shift();
        while (cc) {
            if (cj.responseFields[cc]) {
                cf[cj.responseFields[cc]] = b9
            }
            if (!b8 && b7 && cj.dataFilter) {
                b9 = cj.dataFilter(b9, cj.dataType)
            }
            b8 = cc;
            cc = ce.shift();
            if (cc) {
                if (cc === "*") {
                    cc = b8
                } else {
                    if (b8 !== "*" && b8 !== cc) {
                        cg = ch[b8 + " " + cc] || ch["* " + cc];
                        if (!cg) {
                            for (b6 in ch) {
                                ca = b6.split(" ");
                                if (ca[1] === cc) {
                                    cg = ch[b8 + " " + ca[0]] || ch["* " + ca[0]];
                                    if (cg) {
                                        if (cg === true) {
                                            cg = ch[b6]
                                        } else {
                                            if (ch[b6] !== true) {
                                                cc = ca[0];
                                                ce.unshift(ca[1])
                                            }
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        if (cg !== true) {
                            if (cg && cj["throws"]) {
                                b9 = cg(b9)
                            } else {
                                try {
                                    b9 = cg(b9)
                                } catch (cb) {
                                    return {
                                        state: "parsererror",
                                        error: cg ? cb : "No conversion from " + b8 + " to " + cc
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b9
        }
    }
    bL.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                bL.globalEval(e);
                return e
            }
        }
    });
    bL.ajaxPrefilter("script", function(e) {
        if (e.cache === aH) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    bL.ajaxTransport("script", function(b7) {
        if (b7.crossDomain) {
            var e, b6 = n.head || bL("head")[0] || n.documentElement;
            return {
                send: function(b8, b9) {
                    e = n.createElement("script");
                    e.async = true;
                    if (b7.scriptCharset) {
                        e.charset = b7.scriptCharset
                    }
                    e.src = b7.url;
                    e.onload = e.onreadystatechange = function(cb, ca) {
                        if (ca || !e.readyState || /loaded|complete/.test(e.readyState)) {
                            e.onload = e.onreadystatechange = null ;
                            if (e.parentNode) {
                                e.parentNode.removeChild(e)
                            }
                            e = null ;
                            if (!ca) {
                                b9(200, "success")
                            }
                        }
                    }
                    ;
                    b6.insertBefore(e, b6.firstChild)
                },
                abort: function() {
                    if (e) {
                        e.onload(aH, true)
                    }
                }
            }
        }
    });
    var bs = []
      , a7 = /(=)\?(?=&|$)|\?\?/;
    bL.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = bs.pop() || (bL.expando + "_" + (bQ++));
            this[e] = true;
            return e
        }
    });
    bL.ajaxPrefilter("json jsonp", function(b8, e, b9) {
        var cb, b6, b7, ca = b8.jsonp !== false && (a7.test(b8.url) ? "url" : typeof b8.data === "string" && !(b8.contentType || "").indexOf("application/x-www-form-urlencoded") && a7.test(b8.data) && "data");
        if (ca || b8.dataTypes[0] === "jsonp") {
            cb = b8.jsonpCallback = bL.isFunction(b8.jsonpCallback) ? b8.jsonpCallback() : b8.jsonpCallback;
            if (ca) {
                b8[ca] = b8[ca].replace(a7, "$1" + cb)
            } else {
                if (b8.jsonp !== false) {
                    b8.url += (aA.test(b8.url) ? "&" : "?") + b8.jsonp + "=" + cb
                }
            }
            b8.converters["script json"] = function() {
                if (!b7) {
                    bL.error(cb + " was not called")
                }
                return b7[0]
            }
            ;
            b8.dataTypes[0] = "json";
            b6 = a4[cb];
            a4[cb] = function() {
                b7 = arguments
            }
            ;
            b9.always(function() {
                a4[cb] = b6;
                if (b8[cb]) {
                    b8.jsonpCallback = e.jsonpCallback;
                    bs.push(cb)
                }
                if (b7 && bL.isFunction(b6)) {
                    b6(b7[0])
                }
                b7 = b6 = aH
            });
            return "script"
        }
    });
    var ai, ay, az = 0, aQ = a4.ActiveXObject && function() {
        var e;
        for (e in ai) {
            ai[e](aH, true)
        }
    }
    ;
    function bF() {
        try {
            return new a4.XMLHttpRequest()
        } catch (b6) {}
    }
    function bg() {
        try {
            return new a4.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b6) {}
    }
    bL.ajaxSettings.xhr = a4.ActiveXObject ? function() {
        return !this.isLocal && bF() || bg()
    }
     : bF;
    ay = bL.ajaxSettings.xhr();
    bL.support.cors = !!ay && ("withCredentials" in ay);
    ay = bL.support.ajax = !!ay;
    if (ay) {
        bL.ajaxTransport(function(e) {
            if (!e.crossDomain || bL.support.cors) {
                var b6;
                return {
                    send: function(cc, b7) {
                        var ca, b8, cb = e.xhr();
                        if (e.username) {
                            cb.open(e.type, e.url, e.async, e.username, e.password)
                        } else {
                            cb.open(e.type, e.url, e.async)
                        }
                        if (e.xhrFields) {
                            for (b8 in e.xhrFields) {
                                cb[b8] = e.xhrFields[b8]
                            }
                        }
                        if (e.mimeType && cb.overrideMimeType) {
                            cb.overrideMimeType(e.mimeType)
                        }
                        if (!e.crossDomain && !cc["X-Requested-With"]) {
                            cc["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (b8 in cc) {
                                cb.setRequestHeader(b8, cc[b8])
                            }
                        } catch (b9) {}
                        cb.send((e.hasContent && e.data) || null );
                        b6 = function(cg, cf) {
                            var ce, ch, cl, cj;
                            try {
                                if (b6 && (cf || cb.readyState === 4)) {
                                    b6 = aH;
                                    if (ca) {
                                        cb.onreadystatechange = bL.noop;
                                        if (aQ) {
                                            delete ai[ca]
                                        }
                                    }
                                    if (cf) {
                                        if (cb.readyState !== 4) {
                                            cb.abort()
                                        }
                                    } else {
                                        cj = {};
                                        ce = cb.status;
                                        ch = cb.getAllResponseHeaders();
                                        if (typeof cb.responseText === "string") {
                                            cj.text = cb.responseText
                                        }
                                        try {
                                            cl = cb.statusText
                                        } catch (ck) {
                                            cl = ""
                                        }
                                        if (!ce && e.isLocal && !e.crossDomain) {
                                            ce = cj.text ? 200 : 404
                                        } else {
                                            if (ce === 1223) {
                                                ce = 204
                                            }
                                        }
                                    }
                                }
                            } catch (cm) {
                                if (!cf) {
                                    b7(-1, cm)
                                }
                            }
                            if (cj) {
                                b7(ce, cl, cj, ch)
                            }
                        }
                        ;
                        if (!e.async) {
                            b6()
                        } else {
                            if (cb.readyState === 4) {
                                setTimeout(b6)
                            } else {
                                ca = ++az;
                                if (aQ) {
                                    if (!ai) {
                                        ai = {};
                                        bL(a4).unload(aQ)
                                    }
                                    ai[ca] = b6
                                }
                                cb.onreadystatechange = b6
                            }
                        }
                    },
                    abort: function() {
                        if (b6) {
                            b6(aH, true)
                        }
                    }
                }
            }
        })
    }
    var M, ae, bT = /^(?:toggle|show|hide)$/, bM = new RegExp("^(?:([+-])=|)(" + bC + ")([a-z%]*)$","i"), bS = /queueHooks$/, aC = [i], a1 = {
        "*": [function(e, cb) {
            var ce = this.createTween(e, cb)
              , b9 = ce.cur()
              , b8 = bM.exec(cb)
              , cc = b8 && b8[3] || (bL.cssNumber[e] ? "" : "px")
              , b6 = (bL.cssNumber[e] || cc !== "px" && +b9) && bM.exec(bL.css(ce.elem, e))
              , b7 = 1
              , ca = 20;
            if (b6 && b6[3] !== cc) {
                cc = cc || b6[3];
                b8 = b8 || [];
                b6 = +b9 || 1;
                do {
                    b7 = b7 || ".5";
                    b6 = b6 / b7;
                    bL.style(ce.elem, e, b6 + cc)
                } while (b7 !== (b7 = ce.cur() / b9) && b7 !== 1 && --ca)
            }
            if (b8) {
                b6 = ce.start = +b6 || +b9 || 0;
                ce.unit = cc;
                ce.end = b8[1] ? b6 + (b8[1] + 1) * b8[2] : +b8[2]
            }
            return ce
        }
        ]
    };
    function bo() {
        setTimeout(function() {
            M = aH
        });
        return ( M = bL.now()) 
    }
    function bd(b9, cb, b8) {
        var b6, ca = (a1[cb] || []).concat(a1["*"]), e = 0, b7 = ca.length;
        for (; e < b7; e++) {
            if ((b6 = ca[e].call(b8, cb, b9)) ) {
                return b6
            }
        }
    }
    function g(b7, cb, cf) {
        var cg, e, ca = 0, b6 = aC.length, ce = bL.Deferred().always(function() {
            delete b9.elem
        }), b9 = function() {
            if (e) {
                return false
            }
            var cn = M || bo()
              , ck = Math.max(0, b8.startTime + b8.duration - cn)
              , ch = ck / b8.duration || 0
              , cm = 1 - ch
              , cj = 0
              , cl = b8.tweens.length;
            for (; cj < cl; cj++) {
                b8.tweens[cj].run(cm)
            }
            ce.notifyWith(b7, [b8, cm, ck]);
            if (cm < 1 && cl) {
                return ck
            } else {
                ce.resolveWith(b7, [b8]);
                return false
            }
        }
        , b8 = ce.promise({
            elem: b7,
            props: bL.extend({}, cb),
            opts: bL.extend(true, {
                specialEasing: {}
            }, cf),
            originalProperties: cb,
            originalOptions: cf,
            startTime: M || bo(),
            duration: cf.duration,
            tweens: [],
            createTween: function(ck, ch) {
                var cj = bL.Tween(b7, b8.opts, ck, ch, b8.opts.specialEasing[ck] || b8.opts.easing);
                b8.tweens.push(cj);
                return cj
            },
            stop: function(cj) {
                var ch = 0
                  , ck = cj ? b8.tweens.length : 0;
                if (e) {
                    return this
                }
                e = true;
                for (; ch < ck; ch++) {
                    b8.tweens[ch].run(1)
                }
                if (cj) {
                    ce.resolveWith(b7, [b8, cj])
                } else {
                    ce.rejectWith(b7, [b8, cj])
                }
                return this
            }
        }), cc = b8.props;
        an(cc, b8.opts.specialEasing);
        for (; ca < b6; ca++) {
            cg = aC[ca].call(b8, b7, cc, b8.opts);
            if (cg) {
                return cg
            }
        }
        bL.map(cc, bd, b8);
        if (bL.isFunction(b8.opts.start)) {
            b8.opts.start.call(b7, b8)
        }
        bL.fx.timer(bL.extend(b9, {
            elem: b7,
            anim: b8,
            queue: b8.opts.queue
        }));
        return b8.progress(b8.opts.progress).done(b8.opts.done, b8.opts.complete).fail(b8.opts.fail).always(b8.opts.always)
    }
    function an(b8, ca) {
        var b7, b6, cb, b9, e;
        for (b7 in b8) {
            b6 = bL.camelCase(b7);
            cb = ca[b6];
            b9 = b8[b7];
            if (bL.isArray(b9)) {
                cb = b9[1];
                b9 = b8[b7] = b9[0]
            }
            if (b7 !== b6) {
                b8[b6] = b9;
                delete b8[b7]
            }
            e = bL.cssHooks[b6];
            if (e && "expand" in e) {
                b9 = e.expand(b9);
                delete b8[b6];
                for (b7 in b9) {
                    if (!(b7 in b8)) {
                        b8[b7] = b9[b7];
                        ca[b7] = cb
                    }
                }
            } else {
                ca[b6] = cb
            }
        }
    }
    bL.Animation = bL.extend(g, {
        tweener: function(b6, b9) {
            if (bL.isFunction(b6)) {
                b9 = b6;
                b6 = ["*"]
            } else {
                b6 = b6.split(" ")
            }
            var b8, e = 0, b7 = b6.length;
            for (; e < b7; e++) {
                b8 = b6[e];
                a1[b8] = a1[b8] || [];
                a1[b8].unshift(b9)
            }
        },
        prefilter: function(b6, e) {
            if (e) {
                aC.unshift(b6)
            } else {
                aC.push(b6)
            }
        }
    });
    function i(b8, cc, e) {
        var b7, cf, ca, cj, ck, cg, b9 = this, ce = {}, b6 = b8.style, cb = b8.nodeType && Q(b8), ch = bL._data(b8, "fxshow");
        if (!e.queue) {
            ck = bL._queueHooks(b8, "fx");
            if (ck.unqueued == null ) {
                ck.unqueued = 0;
                cg = ck.empty.fire;
                ck.empty.fire = function() {
                    if (!ck.unqueued) {
                        cg()
                    }
                }
            }
            ck.unqueued++;
            b9.always(function() {
                b9.always(function() {
                    ck.unqueued--;
                    if (!bL.queue(b8, "fx").length) {
                        ck.empty.fire()
                    }
                })
            })
        }
        if (b8.nodeType === 1 && ("height" in cc || "width" in cc)) {
            e.overflow = [b6.overflow, b6.overflowX, b6.overflowY];
            if (bL.css(b8, "display") === "inline" && bL.css(b8, "float") === "none") {
                if (!bL.support.inlineBlockNeedsLayout || bG(b8.nodeName) === "inline") {
                    b6.display = "inline-block"
                } else {
                    b6.zoom = 1
                }
            }
        }
        if (e.overflow) {
            b6.overflow = "hidden";
            if (!bL.support.shrinkWrapBlocks) {
                b9.always(function() {
                    b6.overflow = e.overflow[0];
                    b6.overflowX = e.overflow[1];
                    b6.overflowY = e.overflow[2]
                })
            }
        }
        for (b7 in cc) {
            cf = cc[b7];
            if (bT.exec(cf)) {
                delete cc[b7];
                ca = ca || cf === "toggle";
                if (cf === (cb ? "hide" : "show")) {
                    continue
                }
                ce[b7] = ch && ch[b7] || bL.style(b8, b7)
            }
        }
        if (!bL.isEmptyObject(ce)) {
            if (ch) {
                if ("hidden" in ch) {
                    cb = ch.hidden
                }
            } else {
                ch = bL._data(b8, "fxshow", {})
            }
            if (ca) {
                ch.hidden = !cb
            }
            if (cb) {
                bL(b8).show()
            } else {
                b9.done(function() {
                    bL(b8).hide()
                })
            }
            b9.done(function() {
                var cl;
                bL._removeData(b8, "fxshow");
                for (cl in ce) {
                    bL.style(b8, cl, ce[cl])
                }
            });
            for (b7 in ce) {
                cj = bd(cb ? ch[b7] : 0, b7, b9);
                if (!(b7 in ch)) {
                    ch[b7] = cj.start;
                    if (cb) {
                        cj.end = cj.start;
                        cj.start = b7 === "width" || b7 === "height" ? 1 : 0
                    }
                }
            }
        }
    }
    function I(b7, b6, b9, e, b8) {
        return new I.prototype.init(b7,b6,b9,e,b8)
    }
    bL.Tween = I;
    I.prototype = {
        constructor: I,
        init: function(b8, b6, ca, e, b9, b7) {
            this.elem = b8;
            this.prop = ca;
            this.easing = b9 || "swing";
            this.options = b6;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = b7 || (bL.cssNumber[ca] ? "" : "px")
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this)
        },
        run: function(b7) {
            var b6, e = I.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = b6 = bL.easing[this.easing](b7, this.options.duration * b7, 0, 1, this.options.duration)
            } else {
                this.pos = b6 = b7
            }
            this.now = (this.end - this.start) * b6 + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (e && e.set) {
                e.set(this)
            } else {
                I.propHooks._default.set(this)
            }
            return this
        }
    };
    I.prototype.init.prototype = I.prototype;
    I.propHooks = {
        _default: {
            get: function(b6) {
                var e;
                if (b6.elem[b6.prop] != null  && (!b6.elem.style || b6.elem.style[b6.prop] == null )) {
                    return b6.elem[b6.prop]
                }
                e = bL.css(b6.elem, b6.prop, "");
                return !e || e === "auto" ? 0 : e
            },
            set: function(e) {
                if (bL.fx.step[e.prop]) {
                    bL.fx.step[e.prop](e)
                } else {
                    if (e.elem.style && (e.elem.style[bL.cssProps[e.prop]] != null  || bL.cssHooks[e.prop])) {
                        bL.style(e.elem, e.prop, e.now + e.unit)
                    } else {
                        e.elem[e.prop] = e.now
                    }
                }
            }
        }
    };
    I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    bL.each(["toggle", "show", "hide"], function(b6, e) {
        var b7 = bL.fn[e];
        bL.fn[e] = function(b8, ca, b9) {
            return b8 == null  || typeof b8 === "boolean" ? b7.apply(this, arguments) : this.animate(bK(e, true), b8, ca, b9)
        }
    });
    bL.fn.extend({
        fadeTo: function(e, b8, b7, b6) {
            return this.filter(Q).css("opacity", 0).show().end().animate({
                opacity: b8
            }, e, b7, b6)
        },
        animate: function(cb, b8, ca, b9) {
            var b7 = bL.isEmptyObject(cb)
              , e = bL.speed(b8, ca, b9)
              , b6 = function() {
                var cc = g(this, bL.extend({}, cb), e);
                if (b7 || bL._data(this, "finish")) {
                    cc.stop(true)
                }
            }
            ;
            b6.finish = b6;
            return b7 || e.queue === false ? this.each(b6) : this.queue(e.queue, b6)
        },
        stop: function(b7, b6, e) {
            var b8 = function(b9) {
                var ca = b9.stop;
                delete b9.stop;
                ca(e)
            }
            ;
            if (typeof b7 !== "string") {
                e = b6;
                b6 = b7;
                b7 = aH
            }
            if (b6 && b7 !== false) {
                this.queue(b7 || "fx", [])
            }
            return this.each(function() {
                var cc = true
                  , b9 = b7 != null  && b7 + "queueHooks"
                  , cb = bL.timers
                  , ca = bL._data(this);
                if (b9) {
                    if (ca[b9] && ca[b9].stop) {
                        b8(ca[b9])
                    }
                } else {
                    for (b9 in ca) {
                        if (ca[b9] && ca[b9].stop && bS.test(b9)) {
                            b8(ca[b9])
                        }
                    }
                }
                for (b9 = cb.length; b9--; ) {
                    if (cb[b9].elem === this && (b7 == null  || cb[b9].queue === b7)) {
                        cb[b9].anim.stop(e);
                        cc = false;
                        cb.splice(b9, 1)
                    }
                }
                if (cc || !e) {
                    bL.dequeue(this, b7)
                }
            })
        },
        finish: function(e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function() {
                var b8, cb = bL._data(this), b7 = cb[e + "queue"], b6 = cb[e + "queueHooks"], ca = bL.timers, b9 = b7 ? b7.length : 0;
                cb.finish = true;
                bL.queue(this, e, []);
                if (b6 && b6.stop) {
                    b6.stop.call(this, true)
                }
                for (b8 = ca.length; b8--; ) {
                    if (ca[b8].elem === this && ca[b8].queue === e) {
                        ca[b8].anim.stop(true);
                        ca.splice(b8, 1)
                    }
                }
                for (b8 = 0; b8 < b9; b8++) {
                    if (b7[b8] && b7[b8].finish) {
                        b7[b8].finish.call(this)
                    }
                }
                delete cb.finish
            })
        }
    });
    function bK(b7, b9) {
        var b8, e = {
            height: b7
        }, b6 = 0;
        b9 = b9 ? 1 : 0;
        for (; b6 < 4; b6 += 2 - b9) {
            b8 = bV[b6];
            e["margin" + b8] = e["padding" + b8] = b7
        }
        if (b9) {
            e.opacity = e.width = b7
        }
        return e
    }
    bL.each({
        slideDown: bK("show"),
        slideUp: bK("hide"),
        slideToggle: bK("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, b6) {
        bL.fn[e] = function(b7, b9, b8) {
            return this.animate(b6, b7, b9, b8)
        }
    });
    bL.speed = function(b7, b8, b6) {
        var e = b7 && typeof b7 === "object" ? bL.extend({}, b7) : {
            complete: b6 || !b6 && b8 || bL.isFunction(b7) && b7,
            duration: b7,
            easing: b6 && b8 || b8 && !bL.isFunction(b8) && b8
        };
        e.duration = bL.fx.off ? 0 : typeof e.duration === "number" ? e.duration : e.duration in bL.fx.speeds ? bL.fx.speeds[e.duration] : bL.fx.speeds._default;
        if (e.queue == null  || e.queue === true) {
            e.queue = "fx"
        }
        e.old = e.complete;
        e.complete = function() {
            if (bL.isFunction(e.old)) {
                e.old.call(this)
            }
            if (e.queue) {
                bL.dequeue(this, e.queue)
            }
        }
        ;
        return e
    }
    ;
    bL.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    };
    bL.timers = [];
    bL.fx = I.prototype.init;
    bL.fx.tick = function() {
        var b7, b6 = bL.timers, e = 0;
        M = bL.now();
        for (; e < b6.length; e++) {
            b7 = b6[e];
            if (!b7() && b6[e] === b7) {
                b6.splice(e--, 1)
            }
        }
        if (!b6.length) {
            bL.fx.stop()
        }
        M = aH
    }
    ;
    bL.fx.timer = function(e) {
        if (e() && bL.timers.push(e)) {
            bL.fx.start()
        }
    }
    ;
    bL.fx.interval = 13;
    bL.fx.start = function() {
        if (!ae) {
            ae = setInterval(bL.fx.tick, bL.fx.interval)
        }
    }
    ;
    bL.fx.stop = function() {
        clearInterval(ae);
        ae = null 
    }
    ;
    bL.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    bL.fx.step = {};
    if (bL.expr && bL.expr.filters) {
        bL.expr.filters.animated = function(e) {
            return bL.grep(bL.timers, function(b6) {
                return e === b6.elem
            }).length
        }
    }
    bL.fn.offset = function(b6) {
        if (arguments.length) {
            return b6 === aH ? this : this.each(function(cb) {
                bL.offset.setOffset(this, b6, cb)
            })
        }
        var e, ca, b8 = {
            top: 0,
            left: 0
        }, b7 = this[0], b9 = b7 && b7.ownerDocument;
        if (!b9) {
            return
        }
        e = b9.documentElement;
        if (!bL.contains(e, b7)) {
            return b8
        }
        if (typeof b7.getBoundingClientRect !== aD) {
            b8 = b7.getBoundingClientRect()
        }
        ca = br(b9);
        return {
            top: b8.top + (ca.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            left: b8.left + (ca.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
        }
    }
    ;
    bL.offset = {
        setOffset: function(b8, cj, cb) {
            var cc = bL.css(b8, "position");
            if (cc === "static") {
                b8.style.position = "relative"
            }
            var ca = bL(b8), b6 = ca.offset(), e = bL.css(b8, "top"), cg = bL.css(b8, "left"), ch = (cc === "absolute" || cc === "fixed") && bL.inArray("auto", [e, cg]) > -1, cf = {}, ce = {}, b7, b9;
            if (ch) {
                ce = ca.position();
                b7 = ce.top;
                b9 = ce.left
            } else {
                b7 = parseFloat(e) || 0;
                b9 = parseFloat(cg) || 0
            }
            if (bL.isFunction(cj)) {
                cj = cj.call(b8, cb, b6)
            }
            if (cj.top != null ) {
                cf.top = (cj.top - b6.top) + b7
            }
            if (cj.left != null ) {
                cf.left = (cj.left - b6.left) + b9
            }
            if ("using" in cj) {
                cj.using.call(b8, cf)
            } else {
                ca.css(cf)
            }
        }
    };
    bL.fn.extend({
        position: function() {
            if (!this[0]) {
                return
            }
            var b7, b8, e = {
                top: 0,
                left: 0
            }, b6 = this[0];
            if (bL.css(b6, "position") === "fixed") {
                b8 = b6.getBoundingClientRect()
            } else {
                b7 = this.offsetParent();
                b8 = this.offset();
                if (!bL.nodeName(b7[0], "html")) {
                    e = b7.offset()
                }
                e.top += bL.css(b7[0], "borderTopWidth", true);
                e.left += bL.css(b7[0], "borderLeftWidth", true)
            }
            return {
                top: b8.top - e.top - bL.css(b6, "marginTop", true),
                left: b8.left - e.left - bL.css(b6, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || bY;
                while (e && (!bL.nodeName(e, "html") && bL.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || bY
            })
        }
    });
    bL.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b7, b6) {
        var e = /Y/.test(b6);
        bL.fn[b7] = function(b8) {
            return bL.access(this, function(b9, cc, cb) {
                var ca = br(b9);
                if (cb === aH) {
                    return ca ? (b6 in ca) ? ca[b6] : ca.document.documentElement[cc] : b9[cc]
                }
                if (ca) {
                    ca.scrollTo(!e ? cb : bL(ca).scrollLeft(), e ? cb : bL(ca).scrollTop())
                } else {
                    b9[cc] = cb
                }
            }, b7, b8, arguments.length, null )
        }
    });
    function br(e) {
        return bL.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    bL.each({
        Height: "height",
        Width: "width"
    }, function(e, b6) {
        bL.each({
            padding: "inner" + e,
            content: b6,
            "": "outer" + e
        }, function(b7, b8) {
            bL.fn[b8] = function(cc, cb) {
                var ca = arguments.length && (b7 || typeof cc !== "boolean")
                  , b9 = b7 || (cc === true || cb === true ? "margin" : "border");
                return bL.access(this, function(cf, ce, cg) {
                    var ch;
                    if (bL.isWindow(cf)) {
                        return cf.document.documentElement["client" + e]
                    }
                    if (cf.nodeType === 9) {
                        ch = cf.documentElement;
                        return Math.max(cf.body["scroll" + e], ch["scroll" + e], cf.body["offset" + e], ch["offset" + e], ch["client" + e])
                    }
                    return cg === aH ? bL.css(cf, ce, b9) : bL.style(cf, ce, cg, b9)
                }, b6, ca ? cc : aH, ca, null )
            }
        })
    });
    bL.fn.size = function() {
        return this.length
    }
    ;
    bL.fn.andSelf = bL.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = bL
    } else {
        a4.jQuery = a4.$ = bL;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return bL
            })
        }
    }
})(window);
/*!
 * EventEmitter2
 * https://github.com/hij1nx/EventEmitter2
 *
 * Copyright (c) 2013 hij1nx
 * Licensed under the MIT license.
 */
;!function(b) {
    var e = Array.isArray ? Array.isArray : function h(k) {
        return Object.prototype.toString.call(k) === "[object Array]"
    }
    ;
    var f = 10;
    function i() {
        this._events = {};
        if (this._conf) {
            a.call(this, this._conf)
        }
    }
    function a(k) {
        if (k) {
            this._conf = k;
            k.delimiter && (this.delimiter = k.delimiter);
            k.maxListeners && (this._events.maxListeners = k.maxListeners);
            k.wildcard && (this.wildcard = k.wildcard);
            k.newListener && (this.newListener = k.newListener);
            if (this.wildcard) {
                this.listenerTree = {}
            }
        }
    }
    function j(k) {
        this._events = {};
        this.newListener = false;
        a.call(this, k)
    }
    function c(m, u, A, o) {
        if (!A) {
            return []
        }
        var v = [], r, q, y, z, t, s, n, k = u.length, p = u[o], x = u[o + 1];
        if (o === k && A._listeners) {
            if (typeof A._listeners === "function") {
                m && m.push(A._listeners);
                return [A]
            } else {
                for (r = 0,
                q = A._listeners.length; r < q; r++) {
                    m && m.push(A._listeners[r])
                }
                return [A]
            }
        }
        if ((p === "*" || p === "**") || A[p]) {
            if (p === "*") {
                for (y in A) {
                    if (y !== "_listeners" && A.hasOwnProperty(y)) {
                        v = v.concat(c(m, u, A[y], o + 1))
                    }
                }
                return v
            } else {
                if (p === "**") {
                    n = (o + 1 === k || (o + 2 === k && x === "*"));
                    if (n && A._listeners) {
                        v = v.concat(c(m, u, A, k))
                    }
                    for (y in A) {
                        if (y !== "_listeners" && A.hasOwnProperty(y)) {
                            if (y === "*" || y === "**") {
                                if (A[y]._listeners && !n) {
                                    v = v.concat(c(m, u, A[y], k))
                                }
                                v = v.concat(c(m, u, A[y], o))
                            } else {
                                if (y === x) {
                                    v = v.concat(c(m, u, A[y], o + 2))
                                } else {
                                    v = v.concat(c(m, u, A[y], o))
                                }
                            }
                        }
                    }
                    return v
                }
            }
            v = v.concat(c(m, u, A[p], o + 1))
        }
        z = A["*"];
        if (z) {
            c(m, u, z, o + 1)
        }
        t = A["**"];
        if (t) {
            if (o < k) {
                if (t._listeners) {
                    c(m, u, t, k)
                }
                for (y in t) {
                    if (y !== "_listeners" && t.hasOwnProperty(y)) {
                        if (y === x) {
                            c(m, u, t[y], o + 2)
                        } else {
                            if (y === p) {
                                c(m, u, t[y], o + 1)
                            } else {
                                s = {};
                                s[y] = t[y];
                                c(m, u, {
                                    "**": s
                                }, o + 1)
                            }
                        }
                    }
                }
            } else {
                if (t._listeners) {
                    c(m, u, t, k)
                } else {
                    if (t["*"] && t["*"]._listeners) {
                        c(m, u, t["*"], k)
                    }
                }
            }
        }
        return v
    }
    function g(r, s) {
        r = typeof r === "string" ? r.split(this.delimiter) : r.slice();
        for (var q = 0, o = r.length; q + 1 < o; q++) {
            if (r[q] === "**" && r[q + 1] === "**") {
                return
            }
        }
        var n = this.listenerTree;
        var p = r.shift();
        while (p) {
            if (!n[p]) {
                n[p] = {}
            }
            n = n[p];
            if (r.length === 0) {
                if (!n._listeners) {
                    n._listeners = s
                } else {
                    if (typeof n._listeners === "function") {
                        n._listeners = [n._listeners, s]
                    } else {
                        if (e(n._listeners)) {
                            n._listeners.push(s);
                            if (!n._listeners.warned) {
                                var k = f;
                                if (typeof this._events.maxListeners !== "undefined") {
                                    k = this._events.maxListeners
                                }
                                if (k > 0 && n._listeners.length > k) {
                                    n._listeners.warned = true
                                }
                            }
                        }
                    }
                }
                return true
            }
            p = r.shift()
        }
        return true
    }
    j.prototype.delimiter = ".";
    j.prototype.setMaxListeners = function(k) {
        this._events || i.call(this);
        this._events.maxListeners = k;
        if (!this._conf) {
            this._conf = {}
        }
        this._conf.maxListeners = k
    }
    ;
    j.prototype.event = "";
    j.prototype.once = function(m, k) {
        this.many(m, 1, k);
        return this
    }
    ;
    j.prototype.many = function(o, k, n) {
        var m = this;
        if (typeof n !== "function") {
            throw new Error("many only accepts instances of Function")
        }
        function p() {
            if (--k === 0) {
                m.off(o, p)
            }
            n.apply(this, arguments)
        }
        p._origin = n;
        this.on(o, p);
        return m
    }
    ;
    j.prototype.emit = function() {
        this._events || i.call(this);
        var r = arguments[0];
        if (r === "newListener" && !this.newListener) {
            if (!this._events.newListener) {
                return false
            }
        }
        if (this._all) {
            var k = arguments.length;
            var m = new Array(k - 1);
            for (var n = 1; n < k; n++) {
                m[n - 1] = arguments[n]
            }
            for (n = 0,
            k = this._all.length; n < k; n++) {
                this.event = r;
                this._all[n].apply(this, m)
            }
        }
        if (r === "error") {
            if (!this._all && !this._events.error && !(this.wildcard && this.listenerTree.error)) {
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        var q;
        if (this.wildcard) {
            q = [];
            var p = typeof r === "string" ? r.split(this.delimiter) : r.slice();
            c.call(this, q, p, this.listenerTree, 0)
        } else {
            q = this._events[r]
        }
        if (typeof q === "function") {
            this.event = r;
            if (arguments.length === 1) {
                q.call(this)
            } else {
                if (arguments.length > 1) {
                    switch (arguments.length) {
                    case 2:
                        q.call(this, arguments[1]);
                        break;
                    case 3:
                        q.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        var k = arguments.length;
                        var m = new Array(k - 1);
                        for (var n = 1; n < k; n++) {
                            m[n - 1] = arguments[n]
                        }
                        q.apply(this, m)
                    }
                }
            }
            return true
        } else {
            if (q) {
                var k = arguments.length;
                var m = new Array(k - 1);
                for (var n = 1; n < k; n++) {
                    m[n - 1] = arguments[n]
                }
                var o = q.slice();
                for (var n = 0, k = o.length; n < k; n++) {
                    this.event = r;
                    o[n].apply(this, m)
                }
                return (o.length > 0) || !!this._all
            } else {
                return !!this._all
            }
        }
    }
    ;
    j.prototype.on = function(n, o) {
        if (typeof n === "function") {
            this.onAny(n);
            return this
        }
        if (typeof o !== "function") {
            throw new Error("on only accepts instances of Function")
        }
        this._events || i.call(this);
        this.emit("newListener", n, o);
        if (this.wildcard) {
            g.call(this, n, o);
            return this
        }
        if (!this._events[n]) {
            this._events[n] = o
        } else {
            if (typeof this._events[n] === "function") {
                this._events[n] = [this._events[n], o]
            } else {
                if (e(this._events[n])) {
                    this._events[n].push(o);
                    if (!this._events[n].warned) {
                        var k = f;
                        if (typeof this._events.maxListeners !== "undefined") {
                            k = this._events.maxListeners
                        }
                        if (k > 0 && this._events[n].length > k) {
                            this._events[n].warned = true
                        }
                    }
                }
            }
        }
        return this
    }
    ;
    j.prototype.onAny = function(k) {
        if (typeof k !== "function") {
            throw new Error("onAny only accepts instances of Function")
        }
        if (!this._all) {
            this._all = []
        }
        this._all.push(k);
        return this
    }
    ;
    j.prototype.addListener = j.prototype.on;
    j.prototype.off = function(r, m) {
        if (typeof m !== "function") {
            throw new Error("removeListener only takes instances of Function")
        }
        var n, u = [];
        if (this.wildcard) {
            var s = typeof r === "string" ? r.split(this.delimiter) : r.slice();
            u = c.call(this, null , s, this.listenerTree, 0)
        } else {
            if (!this._events[r]) {
                return this
            }
            n = this._events[r];
            u.push({
                _listeners: n
            })
        }
        for (var t = 0; t < u.length; t++) {
            var q = u[t];
            n = q._listeners;
            if (e(n)) {
                var p = -1;
                for (var o = 0, k = n.length; o < k; o++) {
                    if (n[o] === m || (n[o].listener && n[o].listener === m) || (n[o]._origin && n[o]._origin === m)) {
                        p = o;
                        break
                    }
                }
                if (p < 0) {
                    continue
                }
                if (this.wildcard) {
                    q._listeners.splice(p, 1)
                } else {
                    this._events[r].splice(p, 1)
                }
                if (n.length === 0) {
                    if (this.wildcard) {
                        delete q._listeners
                    } else {
                        delete this._events[r]
                    }
                }
                return this
            } else {
                if (n === m || (n.listener && n.listener === m) || (n._origin && n._origin === m)) {
                    if (this.wildcard) {
                        delete q._listeners
                    } else {
                        delete this._events[r]
                    }
                }
            }
        }
        return this
    }
    ;
    j.prototype.offAny = function(o) {
        var n = 0, k = 0, m;
        if (o && this._all && this._all.length > 0) {
            m = this._all;
            for (n = 0,
            k = m.length; n < k; n++) {
                if (o === m[n]) {
                    m.splice(n, 1);
                    return this
                }
            }
        } else {
            this._all = []
        }
        return this
    }
    ;
    j.prototype.removeListener = j.prototype.off;
    j.prototype.removeAllListeners = function(p) {
        if (arguments.length === 0) {
            !this._events || i.call(this);
            return this
        }
        if (this.wildcard) {
            var o = typeof p === "string" ? p.split(this.delimiter) : p.slice();
            var n = c.call(this, null , o, this.listenerTree, 0);
            for (var m = 0; m < n.length; m++) {
                var k = n[m];
                k._listeners = null 
            }
        } else {
            if (!this._events[p]) {
                return this
            }
            this._events[p] = null 
        }
        return this
    }
    ;
    j.prototype.listeners = function(n) {
        if (this.wildcard) {
            var k = [];
            var m = typeof n === "string" ? n.split(this.delimiter) : n.slice();
            c.call(this, k, m, this.listenerTree, 0);
            return k
        }
        this._events || i.call(this);
        if (!this._events[n]) {
            this._events[n] = []
        }
        if (!e(this._events[n])) {
            this._events[n] = [this._events[n]]
        }
        return this._events[n]
    }
    ;
    j.prototype.listenersAny = function() {
        if (this._all) {
            return this._all
        } else {
            return []
        }
    }
    ;
    if (typeof define === "function" && define.amd) {
        define(function() {
            return j
        })
    } else {
        if (typeof exports === "object") {
            exports.EventEmitter2 = j
        } else {
            window.EventEmitter2 = j
        }
    }
}();
decodeURIComponentSafe = function(a) {
    try {
        a = decodeURIComponent(a)
    } catch (b) {}
    return a
}
;
(function(c) {
    var b = c.scrollTo = function(f, e, g) {
        c(window).scrollTo(f, e, g)
    }
    ;
    b.defaults = {
        axis: "xy",
        duration: parseFloat(c.fn.jquery) >= 1.3 ? 0 : 1,
        limit: true
    };
    b.window = function(e) {
        return c(window)._scrollable()
    }
    ;
    c.fn._scrollable = function() {
        return this.map(function() {
            var f = this
              , g = !f.nodeName || c.inArray(f.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) != -1;
            if (!g) {
                return f
            }
            var e = (f.contentWindow || f).document || f.ownerDocument || f;
            return /webkit/i.test(navigator.userAgent) || e.compatMode == "BackCompat" ? e.body : e.documentElement
        })
    }
    ;
    c.fn.scrollTo = function(j, i, h) {
        if (typeof i == "object") {
            h = i;
            i = 0
        }
        if (typeof h == "function") {
            h = {
                onAfter: h
            }
        }
        if (j == "max") {
            j = 9000000000
        }
        h = c.extend({}, b.defaults, h);
        i = i || h.duration;
        h.queue = h.queue && h.axis.length > 1;
        if (h.queue) {
            i /= 2
        }
        h.offset = a(h.offset);
        h.over = a(h.over);
        return this._scrollable().each(function() {
            if (j == null ) {
                return
            }
            var o = this, k = c(o), m = j, g, e = {}, n = k.is("html,body");
            switch (typeof m) {
            case "number":
            case "string":
                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(m)) {
                    m = a(m);
                    break
                }
                m = c(m, this);
                if (!m.length) {
                    return
                }
            case "object":
                if (m.is || m.style) {
                    g = (m = c(m)).offset()
                }
            }
            c.each(h.axis.split(""), function(u, s) {
                var q = s == "x" ? "Left" : "Top"
                  , x = q.toLowerCase()
                  , t = "scroll" + q
                  , r = o[t]
                  , p = b.max(o, s);
                if (g) {
                    e[t] = g[x] + (n ? 0 : r - k.offset()[x]);
                    if (h.margin) {
                        e[t] -= parseInt(m.css("margin" + q)) || 0;
                        e[t] -= parseInt(m.css("border" + q + "Width")) || 0
                    }
                    e[t] += h.offset[x] || 0;
                    if (h.over[x]) {
                        e[t] += m[s == "x" ? "width" : "height"]() * h.over[x]
                    }
                } else {
                    var v = m[x];
                    e[t] = v.slice && v.slice(-1) == "%" ? parseFloat(v) / 100 * p : v
                }
                if (h.limit && /^\d+$/.test(e[t])) {
                    e[t] = e[t] <= 0 ? 0 : Math.min(e[t], p)
                }
                if (!u && h.queue) {
                    if (r != e[t]) {
                        f(h.onAfterFirst)
                    }
                    delete e[t]
                }
            });
            f(h.onAfter);
            function f(p) {
                k.animate(e, i, h.easing, p && function() {
                    p.call(this, j, h)
                }
                )
            }
        }).end()
    }
    ;
    b.max = function(h, g) {
        var k = g == "x" ? "Width" : "Height"
          , f = "scroll" + k;
        if (!c(h).is("html,body")) {
            return h[f] - c(h)[k.toLowerCase()]()
        }
        var j = "client" + k
          , i = h.ownerDocument.documentElement
          , e = h.ownerDocument.body;
        return Math.max(i[f], e[f]) - Math.min(i[j], e[j])
    }
    ;
    function a(e) {
        return typeof e == "object" ? e : {
            top: e,
            left: e
        }
    }
})(jQuery);
!(function(h) {
    var b = 1000
      , c = 60 * b
      , e = 60 * c
      , f = 24 * e
      , a = 7 * f
      , i = f * 365
      , g = i / 12;
    var j = [[0.7 * c, "just now"], [1.5 * c, "1 min ago"], [60 * c, "min ago", c], [1.5 * e, "an hr ago"], [f, "hrs ago", e], [1.5 * f, "1 day ago"], [14 * f, "days ago", f], [g, "weeks ago", a], [1.5 * g, "a month ago"], [i, "months ago", g], [1.5 * i, "a year ago"], [Number.MAX_VALUE, "years ago", i]];
    h.relativeDate = function(n, m) {
        !m && (m = (new Date).getTime());
        m instanceof Date && (m = m.getTime());
        n instanceof Date && (n = n.getTime());
        var q = m - n, p, o, k;
        for (o = -1,
        k = j.length; ++o < k; ) {
            p = j[o];
            if (q < p[0]) {
                return p[2] == undefined ? p[1] : Math.round(q / p[2]) + " " + p[1]
            }
        }
    }
})(window);
(function(b) {
    var e = "…";
    function f(k, j) {
        var h = 0;
        var m = k - 1;
        var n = -1;
        var i;
        while (h <= m) {
            i = ~~((h + m) / 2);
            var g = j(i);
            if (g < 0) {
                m = i - 1
            } else {
                if (g > 0) {
                    h = i + 1
                } else {
                    h = i + 1
                }
            }
            n = i
        }
        return n
    }
    function a(g) {
        return (g.charAt(g.length - 1) === "<") ? g.substring(0, g.length - 1) : g
    }
    var c = {};
    b.fn.ellipsis = function(m) {
        m = m || {};
        var p = false
          , k = 120;
        for (var q = 0; q < this.length; q++) {
            var n = b(this[q]), u, v, g = m.id && c[m.id + q];
            if (g) {
                u = g.content;
                v = g.maxHeight
            } else {
                u = n.html();
                if (m.firstParagraph) {
                    var t = n.find("p");
                    if (t.length && t.first().text().length > k) {
                        v = b(t[0]).outerHeight()
                    }
                }
                v = v || Math.ceil(parseFloat(n.css("max-height")));
                var x = n.prop("scrollHeight");
                if (x <= v) {
                    continue
                }
            }
            var j = b(this[q].cloneNode(true)).hide().css("position", "absolute").css("overflow", "visible").css("max-height", "none").css("width", n.width()).height("auto");
            j.html(u);
            n.after(j);
            if (m.maxHeight) {
                v = Math.min(j.height(), m.maxHeight);
                n.css("max-height", v)
            }
            if (j.height() > v) {
                var h = u
                  , r = function(y) {
                    var z = h.substr(0, y);
                    j.html(z + e)
                }
                  , o = function(z) {
                    r(z);
                    var y = j.height();
                    if (y > v) {
                        return -1
                    } else {
                        if (y < v) {
                            return 1
                        } else {
                            return 0
                        }
                    }
                }
                  , s = f(u.length - 1, o);
                n.html(a(h.substr(0, s - 2)) + e);
                p = true
            } else {
                if (g) {
                    n.html(u)
                }
            }
            j.remove();
            if (m.id) {
                c[m.id + q] = {
                    content: u,
                    maxHeight: v
                }
            }
        }
        return p
    }
}(jQuery));
!(function() {
    var u = /^[\s,#]+/
      , p = /\s+$/
      , q = 0
      , a = Math
      , C = a.round
      , i = a.min
      , m = a.max
      , k = a.random;
    var A = function A(H, J) {
        H = (H) ? H : "";
        J = J || {};
        if (H instanceof A) {
            return H
        }
        if (!(this instanceof A)) {
            return new A(H,J)
        }
        var I = r(H);
        this._r = I.r,
        this._g = I.g,
        this._b = I.b,
        this._a = I.a,
        this._roundA = C(100 * this._a) / 100,
        this._format = J.format || I.format;
        this._gradientType = J.gradientType;
        if (this._r < 1) {
            this._r = C(this._r)
        }
        if (this._g < 1) {
            this._g = C(this._g)
        }
        if (this._b < 1) {
            this._b = C(this._b)
        }
        this._ok = I.ok;
        this._tc_id = q++
    }
    ;
    A.prototype = {
        isValid: function() {
            return this._ok
        },
        getAlpha: function() {
            return this._a
        },
        setAlpha: function(H) {
            this._a = s(H);
            this._roundA = C(100 * this._a) / 100
        },
        toHsv: function() {
            var H = t(this._r, this._g, this._b);
            return {
                h: H.h * 360,
                s: H.s,
                v: H.v,
                a: this._a
            }
        },
        toHsvString: function() {
            var I = t(this._r, this._g, this._b);
            var K = C(I.h * 360)
              , J = C(I.s * 100)
              , H = C(I.v * 100);
            return (this._a == 1) ? "hsv(" + K + ", " + J + "%, " + H + "%)" : "hsva(" + K + ", " + J + "%, " + H + "%, " + this._roundA + ")"
        },
        toHsl: function() {
            var H = D(this._r, this._g, this._b);
            return {
                h: H.h * 360,
                s: H.s,
                l: H.l,
                a: this._a
            }
        },
        toHslString: function() {
            var I = D(this._r, this._g, this._b);
            var K = C(I.h * 360)
              , J = C(I.s * 100)
              , H = C(I.l * 100);
            return (this._a == 1) ? "hsl(" + K + ", " + J + "%, " + H + "%)" : "hsla(" + K + ", " + J + "%, " + H + "%, " + this._roundA + ")"
        },
        toHex: function(H) {
            return B(this._r, this._g, this._b, H)
        },
        toHexString: function(H) {
            return "#" + this.toHex(H)
        },
        toHex8: function() {
            return f(this._r, this._g, this._b, this._a)
        },
        toHex8String: function() {
            return "#" + this.toHex8()
        },
        toRgb: function() {
            return {
                r: C(this._r),
                g: C(this._g),
                b: C(this._b),
                a: this._a
            }
        },
        toRgbString: function() {
            return (this._a == 1) ? "rgb(" + C(this._r) + ", " + C(this._g) + ", " + C(this._b) + ")" : "rgba(" + C(this._r) + ", " + C(this._g) + ", " + C(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function() {
            return {
                r: C(F(this._r, 255) * 100) + "%",
                g: C(F(this._g, 255) * 100) + "%",
                b: C(F(this._b, 255) * 100) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function() {
            return (this._a == 1) ? "rgb(" + C(F(this._r, 255) * 100) + "%, " + C(F(this._g, 255) * 100) + "%, " + C(F(this._b, 255) * 100) + "%)" : "rgba(" + C(F(this._r, 255) * 100) + "%, " + C(F(this._g, 255) * 100) + "%, " + C(F(this._b, 255) * 100) + "%, " + this._roundA + ")"
        },
        toFilter: function(K) {
            var L = "#" + f(this._r, this._g, this._b, this._a);
            var I = L;
            var H = this._gradientType ? "GradientType = 1, " : "";
            if (K) {
                var J = A(K);
                I = J.toHex8String()
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + H + "startColorstr=" + L + ",endColorstr=" + I + ")"
        },
        toString: function(L) {
            var I = !!L;
            L = L || this._format;
            var K = false;
            var H = !I && this._a < 1 && this._a > 0;
            var J = H && (L === "hex" || L === "hex6" || L === "hex3" || L === "name");
            if (J) {
                return this.toRgbString()
            }
            if (L === "rgb") {
                K = this.toRgbString()
            }
            if (L === "prgb") {
                K = this.toPercentageRgbString()
            }
            if (L === "hex" || L === "hex6") {
                K = this.toHexString()
            }
            if (L === "hex3") {
                K = this.toHexString(true)
            }
            if (L === "hex8") {
                K = this.toHex8String()
            }
            if (L === "hsl") {
                K = this.toHslString()
            }
            if (L === "hsv") {
                K = this.toHsvString()
            }
            return K || this.toHexString()
        }
    };
    A.fromRatio = function(H, K) {
        if (typeof H == "object") {
            var I = {};
            for (var J in H) {
                if (H.hasOwnProperty(J)) {
                    if (J === "a") {
                        I[J] = H[J]
                    } else {
                        I[J] = h(H[J])
                    }
                }
            }
            H = I
        }
        return A(H, K)
    }
    ;
    function r(I) {
        var J = {
            r: 0,
            g: 0,
            b: 0
        };
        var H = 1;
        var K = false;
        var L = false;
        if (typeof I == "string") {
            I = j(I)
        }
        if (typeof I == "object") {
            if (I.hasOwnProperty("r") && I.hasOwnProperty("g") && I.hasOwnProperty("b")) {
                J = n(I.r, I.g, I.b);
                K = true;
                L = String(I.r).substr(-1) === "%" ? "prgb" : "rgb"
            } else {
                if (I.hasOwnProperty("h") && I.hasOwnProperty("s") && I.hasOwnProperty("v")) {
                    I.s = h(I.s);
                    I.v = h(I.v);
                    J = y(I.h, I.s, I.v);
                    K = true;
                    L = "hsv"
                } else {
                    if (I.hasOwnProperty("h") && I.hasOwnProperty("s") && I.hasOwnProperty("l")) {
                        I.s = h(I.s);
                        I.l = h(I.l);
                        J = o(I.h, I.s, I.l);
                        K = true;
                        L = "hsl"
                    }
                }
            }
            if (I.hasOwnProperty("a")) {
                H = I.a
            }
        }
        H = s(H);
        return {
            ok: K,
            format: I.format || L,
            r: i(255, m(J.r, 0)),
            g: i(255, m(J.g, 0)),
            b: i(255, m(J.b, 0)),
            a: H
        }
    }
    function n(J, I, H) {
        return {
            r: F(J, 255) * 255,
            g: F(I, 255) * 255,
            b: F(H, 255) * 255
        }
    }
    function D(H, L, N) {
        H = F(H, 255);
        L = F(L, 255);
        N = F(N, 255);
        var O = m(H, L, N)
          , J = i(H, L, N);
        var K, P, I = (O + J) / 2;
        if (O == J) {
            K = P = 0
        } else {
            var M = O - J;
            P = I > 0.5 ? M / (2 - O - J) : M / (O + J);
            switch (O) {
            case H:
                K = (L - N) / M + (L < N ? 6 : 0);
                break;
            case L:
                K = (N - H) / M + 2;
                break;
            case N:
                K = (H - L) / M + 4;
                break
            }
            K /= 6
        }
        return {
            h: K,
            s: P,
            l: I
        }
    }
    function o(M, P, L) {
        var H, N, O;
        M = F(M, 360);
        P = F(P, 100);
        L = F(L, 100);
        function K(S, R, Q) {
            if (Q < 0) {
                Q += 1
            }
            if (Q > 1) {
                Q -= 1
            }
            if (Q < 1 / 6) {
                return S + (R - S) * 6 * Q
            }
            if (Q < 1 / 2) {
                return R
            }
            if (Q < 2 / 3) {
                return S + (R - S) * (2 / 3 - Q) * 6
            }
            return S
        }
        if (P === 0) {
            H = N = O = L
        } else {
            var I = L < 0.5 ? L * (1 + P) : L + P - L * P;
            var J = 2 * L - I;
            H = K(J, I, M + 1 / 3);
            N = K(J, I, M);
            O = K(J, I, M - 1 / 3)
        }
        return {
            r: H * 255,
            g: N * 255,
            b: O * 255
        }
    }
    function t(H, K, M) {
        H = F(H, 255);
        K = F(K, 255);
        M = F(M, 255);
        var N = m(H, K, M)
          , I = i(H, K, M);
        var J, P, O = N;
        var L = N - I;
        P = N === 0 ? 0 : L / N;
        if (N == I) {
            J = 0
        } else {
            switch (N) {
            case H:
                J = (K - M) / L + (K < M ? 6 : 0);
                break;
            case K:
                J = (M - H) / L + 2;
                break;
            case M:
                J = (H - K) / L + 4;
                break
            }
            J /= 6
        }
        return {
            h: J,
            s: P,
            v: O
        }
    }
    function y(L, S, Q) {
        L = F(L, 360) * 6;
        S = F(S, 100);
        Q = F(Q, 100);
        var K = a.floor(L)
          , N = L - K
          , J = Q * (1 - S)
          , I = Q * (1 - N * S)
          , R = Q * (1 - (1 - N) * S)
          , P = K % 6
          , H = [Q, I, J, J, R, Q][P]
          , M = [R, Q, Q, I, J, J][P]
          , O = [J, J, R, Q, Q, I][P];
        return {
            r: H * 255,
            g: M * 255,
            b: O * 255
        }
    }
    function B(K, J, H, L) {
        var I = [g(C(K).toString(16)), g(C(J).toString(16)), g(C(H).toString(16))];
        if (L && I[0].charAt(0) == I[0].charAt(1) && I[1].charAt(0) == I[1].charAt(1) && I[2].charAt(0) == I[2].charAt(1)) {
            return I[0].charAt(0) + I[1].charAt(0) + I[2].charAt(0)
        }
        return I.join("")
    }
    function f(L, K, H, I) {
        var J = [g(E(I)), g(C(L).toString(16)), g(C(K).toString(16)), g(C(H).toString(16))];
        return J.join("")
    }
    A.equals = function(I, H) {
        if (!I || !H) {
            return false
        }
        return A(I).toRgbString() == A(H).toRgbString()
    }
    ;
    A.random = function() {
        return A.fromRatio({
            r: k(),
            g: k(),
            b: k()
        })
    }
    ;
    A.desaturate = function(I, J) {
        J = (J === 0) ? 0 : (J || 10);
        var H = A(I).toHsl();
        H.s -= J / 100;
        H.s = x(H.s);
        return A(H)
    }
    ;
    A.saturate = function(I, J) {
        J = (J === 0) ? 0 : (J || 10);
        var H = A(I).toHsl();
        H.s += J / 100;
        H.s = x(H.s);
        return A(H)
    }
    ;
    A.greyscale = function(H) {
        return A.desaturate(H, 100)
    }
    ;
    A.lighten = function(I, J) {
        J = (J === 0) ? 0 : (J || 10);
        var H = A(I).toHsl();
        H.l += J / 100;
        H.l = x(H.l);
        return A(H)
    }
    ;
    A.darken = function(I, J) {
        J = (J === 0) ? 0 : (J || 10);
        var H = A(I).toHsl();
        H.l -= J / 100;
        H.l = x(H.l);
        return A(H)
    }
    ;
    A.complement = function(I) {
        var H = A(I).toHsl();
        H.h = (H.h + 180) % 360;
        return A(H)
    }
    ;
    A.triad = function(I) {
        var H = A(I).toHsl();
        var J = H.h;
        return [A(I), A({
            h: (J + 120) % 360,
            s: H.s,
            l: H.l
        }), A({
            h: (J + 240) % 360,
            s: H.s,
            l: H.l
        })]
    }
    ;
    A.tetrad = function(I) {
        var H = A(I).toHsl();
        var J = H.h;
        return [A(I), A({
            h: (J + 90) % 360,
            s: H.s,
            l: H.l
        }), A({
            h: (J + 180) % 360,
            s: H.s,
            l: H.l
        }), A({
            h: (J + 270) % 360,
            s: H.s,
            l: H.l
        })]
    }
    ;
    A.splitcomplement = function(I) {
        var H = A(I).toHsl();
        var J = H.h;
        return [A(I), A({
            h: (J + 72) % 360,
            s: H.s,
            l: H.l
        }), A({
            h: (J + 216) % 360,
            s: H.s,
            l: H.l
        })]
    }
    ;
    A.analogous = function(I, L, M) {
        L = L || 6;
        M = M || 30;
        var H = A(I).toHsl();
        var K = 360 / M;
        var J = [A(I)];
        for (H.h = ((H.h - (K * L >> 1)) + 720) % 360; --L; ) {
            H.h = (H.h + K) % 360;
            J.push(A(H))
        }
        return J
    }
    ;
    A.monochromatic = function(J, M) {
        M = M || 6;
        var L = A(J).toHsv();
        var O = L.h
          , N = L.s
          , I = L.v;
        var K = [];
        var H = 1 / M;
        while (M--) {
            K.push(A({
                h: O,
                s: N,
                v: I
            }));
            I = (I + H) % 1
        }
        return K
    }
    ;
    A.readability = function(L, J) {
        var K = A(L).toRgb();
        var I = A(J).toRgb();
        var H = (K.r * 299 + K.g * 587 + K.b * 114) / 1000;
        var N = (I.r * 299 + I.g * 587 + I.b * 114) / 1000;
        var M = (Math.max(K.r, I.r) - Math.min(K.r, I.r) + Math.max(K.g, I.g) - Math.min(K.g, I.g) + Math.max(K.b, I.b) - Math.min(K.b, I.b));
        return {
            brightness: Math.abs(H - N),
            color: M
        }
    }
    ;
    A.readable = function(I, H) {
        var J = A.readability(I, H);
        return J.brightness > 125 && J.color > 500
    }
    ;
    A.mostReadable = function(O, N) {
        var K = null ;
        var I = 0;
        var P = false;
        for (var M = 0; M < N.length; M++) {
            var J = A.readability(O, N[M]);
            var L = J.brightness > 125 && J.color > 500;
            var H = 3 * (J.brightness / 125) + (J.color / 500);
            if ((L && !P) || (L && P && H > I) || ((!L) && (!P) && H > I)) {
                P = L;
                I = H;
                K = A(N[M])
            }
        }
        return K
    }
    ;
    function e(J) {
        var I = {};
        for (var H in J) {
            if (J.hasOwnProperty(H)) {
                I[J[H]] = H
            }
        }
        return I
    }
    function s(H) {
        H = parseFloat(H);
        if (isNaN(H) || H < 0 || H > 1) {
            H = 1
        }
        return H
    }
    function F(J, H) {
        if (v(J)) {
            J = "100%"
        }
        var I = G(J);
        J = i(H, m(0, parseFloat(J)));
        if (I) {
            J = parseInt(J * H, 10) / 100
        }
        if ((a.abs(J - H) < 0.000001) ) {
            return 1
        }
        return (J % H) / parseFloat(H)
    }
    function x(H) {
        return i(1, m(0, H))
    }
    function c(H) {
        return parseInt(H, 16)
    }
    function v(H) {
        return typeof H == "string" && H.indexOf(".") != -1 && parseFloat(H) === 1
    }
    function G(H) {
        return typeof H === "string" && H.indexOf("%") != -1
    }
    function g(H) {
        return H.length == 1 ? "0" + H : "" + H
    }
    function h(H) {
        if (H <= 1) {
            H = (H * 100) + "%"
        }
        return H
    }
    function E(H) {
        return Math.round(parseFloat(H) * 255).toString(16)
    }
    function z(H) {
        return ( c(H) / 255) 
    }
    var b = (function() {
        var L = "[-\\+]?\\d+%?";
        var K = "[-\\+]?\\d*\\.\\d+%?";
        var H = "(?:" + K + ")|(?:" + L + ")";
        var J = "[\\s|\\(]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")\\s*\\)?";
        var I = "[\\s|\\(]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")[,|\\s]+(" + H + ")\\s*\\)?";
        return {
            rgb: new RegExp("rgb" + J),
            rgba: new RegExp("rgba" + I),
            hsl: new RegExp("hsl" + J),
            hsla: new RegExp("hsla" + I),
            hsv: new RegExp("hsv" + J),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        }
    })();
    function j(H) {
        H = H.replace(u, "").replace(p, "").toLowerCase();
        if (H == "transparent") {
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                format: "name"
            }
        }
        var I;
        if ((I = b.rgb.exec(H)) ) {
            return {
                r: I[1],
                g: I[2],
                b: I[3]
            }
        }
        if ((I = b.rgba.exec(H)) ) {
            return {
                r: I[1],
                g: I[2],
                b: I[3],
                a: I[4]
            }
        }
        if ((I = b.hsl.exec(H)) ) {
            return {
                h: I[1],
                s: I[2],
                l: I[3]
            }
        }
        if ((I = b.hsla.exec(H)) ) {
            return {
                h: I[1],
                s: I[2],
                l: I[3],
                a: I[4]
            }
        }
        if ((I = b.hsv.exec(H)) ) {
            return {
                h: I[1],
                s: I[2],
                v: I[3]
            }
        }
        if ((I = b.hex8.exec(H)) ) {
            return {
                a: z(I[1]),
                r: c(I[2]),
                g: c(I[3]),
                b: c(I[4]),
                format: "hex8"
            }
        }
        if ((I = b.hex6.exec(H)) ) {
            return {
                r: c(I[1]),
                g: c(I[2]),
                b: c(I[3]),
                format: "hex"
            }
        }
        if ((I = b.hex3.exec(H)) ) {
            return {
                r: c(I[1] + "" + I[1]),
                g: c(I[2] + "" + I[2]),
                b: c(I[3] + "" + I[3]),
                format: "hex"
            }
        }
        return false
    }
    window.tinycolor = A
})();
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
;var Handlebars = (function() {
    var g = (function() {
        var h;
        function i(j) {
            this.string = j
        }
        i.prototype.toString = function() {
            return "" + this.string
        }
        ;
        h = i;
        return h
    })();
    var c = (function(r) {
        var s = {};
        var k = r;
        var t = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };
        var h = /[&<>"'`]/g;
        var m = /[&<>"'`]/;
        function u(v) {
            return t[v] || "&amp;"
        }
        function q(y, x) {
            for (var v in x) {
                if (Object.prototype.hasOwnProperty.call(x, v)) {
                    y[v] = x[v]
                }
            }
        }
        s.extend = q;
        var j = Object.prototype.toString;
        s.toString = j;
        var i = function(v) {
            return typeof v === "function"
        }
        ;
        if (i(/x/)) {
            i = function(v) {
                return typeof v === "function" && j.call(v) === "[object Function]"
            }
        }
        var i;
        s.isFunction = i;
        var p = Array.isArray || function(v) {
            return (v && typeof v === "object") ? j.call(v) === "[object Array]" : false
        }
        ;
        s.isArray = p;
        function o(v) {
            if (v instanceof k) {
                return v.toString()
            } else {
                if (!v && v !== 0) {
                    return ""
                }
            }
            v = "" + v;
            if (!m.test(v)) {
                return v
            }
            return v.replace(h, u)
        }
        s.escapeExpression = o;
        function n(v) {
            if (!v && v !== 0) {
                return true
            } else {
                if (p(v) && v.length === 0) {
                    return true
                } else {
                    return false
                }
            }
        }
        s.isEmpty = n;
        return s
    })(g);
    var e = (function() {
        var i;
        var j = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        function h(p, o) {
            var m;
            if (o && o.firstLine) {
                m = o.firstLine;
                p += " - " + m + ":" + o.firstColumn
            }
            var n = Error.prototype.constructor.call(this, p);
            for (var k = 0; k < j.length; k++) {
                this[j[k]] = n[j[k]]
            }
            if (m) {
                this.lineNumber = m;
                this.column = o.firstColumn
            }
        }
        h.prototype = new Error();
        i = h;
        return i
    })();
    var f = (function(t, x) {
        var v = {};
        var r = t;
        var p = x;
        var z = "1.3.0";
        v.VERSION = z;
        var i = 4;
        v.COMPILER_REVISION = i;
        var m = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: ">= 1.0.0"
        };
        v.REVISION_CHANGES = m;
        var q = r.isArray
          , k = r.isFunction
          , j = r.toString
          , h = "[object Object]";
        function o(B, A) {
            this.helpers = B || {};
            this.partials = A || {};
            s(this)
        }
        v.HandlebarsEnvironment = o;
        o.prototype = {
            constructor: o,
            logger: u,
            log: n,
            registerHelper: function(B, C, A) {
                if (j.call(B) === h) {
                    if (A || C) {
                        throw new p("Arg not supported with multiple helpers")
                    }
                    r.extend(this.helpers, B)
                } else {
                    if (A) {
                        C.not = A
                    }
                    this.helpers[B] = C
                }
            },
            registerPartial: function(A, B) {
                if (j.call(A) === h) {
                    r.extend(this.partials, A)
                } else {
                    this.partials[A] = B
                }
            }
        };
        function s(A) {
            A.registerHelper("helperMissing", function(B) {
                if (arguments.length === 2) {
                    return undefined
                } else {
                    throw new p("Missing helper: '" + B + "'")
                }
            });
            A.registerHelper("blockHelperMissing", function(D, C) {
                var B = C.inverse || function() {}
                  , E = C.fn;
                if (k(D)) {
                    D = D.call(this)
                }
                if (D === true) {
                    return E(this)
                } else {
                    if (D === false || D == null ) {
                        return B(this)
                    } else {
                        if (q(D)) {
                            if (D.length > 0) {
                                return A.helpers.each(D, C)
                            } else {
                                return B(this)
                            }
                        } else {
                            return E(D)
                        }
                    }
                }
            });
            A.registerHelper("each", function(B, J) {
                var H = J.fn
                  , D = J.inverse;
                var F = 0, G = "", E;
                if (k(B)) {
                    B = B.call(this)
                }
                if (J.data) {
                    E = y(J.data)
                }
                if (B && typeof B === "object") {
                    if (q(B)) {
                        for (var C = B.length; F < C; F++) {
                            if (E) {
                                E.index = F;
                                E.first = (F === 0);
                                E.last = (F === (B.length - 1))
                            }
                            G = G + H(B[F], {
                                data: E
                            })
                        }
                    } else {
                        for (var I in B) {
                            if (B.hasOwnProperty(I)) {
                                if (E) {
                                    E.key = I;
                                    E.index = F;
                                    E.first = (F === 0)
                                }
                                G = G + H(B[I], {
                                    data: E
                                });
                                F++
                            }
                        }
                    }
                }
                if (F === 0) {
                    G = D(this)
                }
                return G
            });
            A.registerHelper("if", function(C, B) {
                if (k(C)) {
                    C = C.call(this)
                }
                if ((!B.hash.includeZero && !C) || r.isEmpty(C)) {
                    return B.inverse(this)
                } else {
                    return B.fn(this)
                }
            });
            A.registerHelper("unless", function(C, B) {
                return A.helpers["if"].call(this, C, {
                    fn: B.inverse,
                    inverse: B.fn,
                    hash: B.hash
                })
            });
            A.registerHelper("with", function(C, B) {
                if (k(C)) {
                    C = C.call(this)
                }
                if (!r.isEmpty(C)) {
                    return B.fn(C)
                }
            });
            A.registerHelper("log", function(C, B) {
                var D = B.data && B.data.level != null  ? parseInt(B.data.level, 10) : 1;
                A.log(D, C)
            })
        }
        var u = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(C, A) {
                if (u.level <= C) {
                    var B = u.methodMap[C];
                    if (typeof console !== "undefined" && console[B]) {
                        console[B].call(console, A)
                    }
                }
            }
        };
        v.logger = u;
        function n(B, A) {
            u.log(B, A)
        }
        v.log = n;
        var y = function(A) {
            var B = {};
            r.extend(B, A);
            return B
        }
        ;
        v.createFrame = y;
        return v
    })(c, e);
    var b = (function(r, v, k) {
        var t = {};
        var q = r;
        var o = v;
        var j = k.COMPILER_REVISION;
        var n = k.REVISION_CHANGES;
        function i(z) {
            var y = z && z[0] || 1
              , B = j;
            if (y !== B) {
                if (y < B) {
                    var x = n[B]
                      , A = n[y];
                    throw new o("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + x + ") or downgrade your runtime to an older version (" + A + ").")
                } else {
                    throw new o("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + z[1] + ").")
                }
            }
        }
        t.checkRevision = i;
        function s(x, A) {
            if (!A) {
                throw new o("No environment passed to template")
            }
            var z = function(C, E, G, H, F, I) {
                var B = A.VM.invokePartial.apply(this, arguments);
                if (B != null ) {
                    return B
                }
                if (A.compile) {
                    var D = {
                        helpers: H,
                        partials: F,
                        data: I
                    };
                    F[E] = A.compile(C, {
                        data: I !== undefined
                    }, A);
                    return F[E](G, D)
                } else {
                    throw new o("The partial " + E + " could not be compiled when running in runtime-only mode")
                }
            }
            ;
            var y = {
                escapeExpression: q.escapeExpression,
                invokePartial: z,
                programs: [],
                program: function(C, D, E) {
                    var B = this.programs[C];
                    if (E) {
                        B = p(C, D, E)
                    } else {
                        if (!B) {
                            B = this.programs[C] = p(C, D)
                        }
                    }
                    return B
                },
                merge: function(D, C) {
                    var B = D || C;
                    if (D && C && (D !== C)) {
                        B = {};
                        q.extend(B, C);
                        q.extend(B, D)
                    }
                    return B
                },
                programWithDepth: A.VM.programWithDepth,
                noop: A.VM.noop,
                compilerInfo: null 
            };
            return function(E, C) {
                C = C || {};
                var F = C.partial ? C : A, G, D;
                if (!C.partial) {
                    G = C.helpers;
                    D = C.partials
                }
                var B = x.call(y, F, E, G, D, C.data);
                if (!C.partial) {
                    A.VM.checkRevision(y.compilerInfo)
                }
                return B
            }
        }
        t.template = s;
        function m(y, z, A) {
            var x = Array.prototype.slice.call(arguments, 3);
            var B = function(D, C) {
                C = C || {};
                return z.apply(this, [D, C.data || A].concat(x))
            }
            ;
            B.program = y;
            B.depth = x.length;
            return B
        }
        t.programWithDepth = m;
        function p(x, y, z) {
            var A = function(C, B) {
                B = B || {};
                return y(C, B.data || z)
            }
            ;
            A.program = x;
            A.depth = 0;
            return A
        }
        t.program = p;
        function h(x, z, B, C, A, D) {
            var y = {
                partial: true,
                helpers: C,
                partials: A,
                data: D
            };
            if (x === undefined) {
                throw new o("The partial " + z + " could not be found")
            } else {
                if (x instanceof Function) {
                    return x(B, y)
                }
            }
        }
        t.invokePartial = h;
        function u() {
            return ""
        }
        t.noop = u;
        return t
    })(c, e, f);
    var a = (function(s, u, j, o, r) {
        var t;
        var h = s;
        var k = u;
        var n = j;
        var q = o;
        var m = r;
        var p = function() {
            var v = new h.HandlebarsEnvironment();
            q.extend(v, h);
            v.SafeString = k;
            v.Exception = n;
            v.Utils = q;
            v.VM = m;
            v.template = function(x) {
                return m.template(x, v)
            }
            ;
            return v
        }
        ;
        var i = p();
        i.create = p;
        t = i;
        return t
    })(f, g, e, c, b);
    return a
})();
var DDG = {
    Data: {},
    Mixins: {},
    Models: {
        AnswerItems: {},
        Settings: {},
        AnswerSelectLists: {}
    },
    Pages: {},
    Views: {
        AnswerBar: {
            Answers: {},
            Meta: {}
        },
        Bang: {},
        Maps: {},
        Feedback: {},
        Settings: {}
    },
    Text: {},
    Utils: {
        Settings: {}
    }
};
!function(a) {
    a.Data.templates = {
        defaultOptions: {
            price: true,
            brand: true,
            rating: true,
            ratingText: true,
            moreAt: true,
            content: false
        },
        groups: {
            base: {
                item: "base_item",
                detail: "base_detail",
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: false,
                    rowHighlight: false,
                    keySpacing: false,
                    moreAt: false
                }
            },
            text: {
                item: "text_item",
                detail: "text_detail"
            },
            info: {
                item: "basic_image_item",
                detail: "basic_info_detail",
                options: {
                    moreAt: true,
                    aux: false
                }
            },
            products: {
                item: "products_item",
                detail: "products_detail",
                item_detail: "products_item_detail",
                wrap_detail: "base_detail",
                options: {
                    rating: true,
                    price: true,
                    brand: true,
                    hideReviewText: false
                }
            },
            products_simple: {
                item: "basic_image_item",
                detail: "products_detail",
                item_detail: "products_item_detail",
                wrap_detail: "base_detail",
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: true
                }
            },
            movies: {
                item: "basic_image_item",
                detail: "products_detail",
                item_detail: "products_item_detail",
                wrap_detail: "base_detail",
                options: {
                    price: false,
                    brand: false,
                    rating: false,
                    ratingText: true
                },
                variants: {
                    tile: "poster"
                },
                elClass: {
                    tileBody: "is-hidden"
                }
            },
            media: {
                item: "media_item",
                detail: "basic_info_detail",
                item_detail: "media_item_detail",
                options: {
                    moreAt: true,
                    aux: false
                }
            },
            icon: {
                item: "text_item",
                detail: "basic_icon_detail",
                item_detail: "products_item_detail"
            },
            places: {
                item: "places_item",
                detail: "places_detail"
            },
            list: {
                item: "text_item",
                detail: "list_detail"
            },
            images: {
                item: "images_item",
                detail: "images_detail"
            },
            videos: {
                item: "videos_item",
                detail: "videos_detail"
            }
        },
        viewVariants: {
            bgColor: {
                dark: "bg-clr--dk",
                dark2: "bg-clr--dk2",
                light: "bg-clr--lt",
                light2: "bg-clr--lt2",
                light3: "bg-clr--lt3",
                red: "bg-clr--red",
                redLight: "bg-clr--red-light",
                redDark: "bg-clr--red-dark",
                blue: "bg-clr--blue",
                blueLight: "bg-clr--blue-light",
                blueDark: "bg-clr--blue-dark",
                purple: "bg-clr--purple",
                green: "bg-clr--green",
                gold: "bg-clr--gold"
            },
            detail: {
                light: "detail--l"
            },
            tile: {
                narrow: "tile--c--n",
                wide: "tile--c--w",
                xwide: "tile--c--xw",
                video: "tile--b--i--vid tile--c",
                poster: "tile--b--i--mov  tile--c--n",
                local: {
                    tile: "tile--loc",
                    tileFront: "tile--loc__main",
                    tileBack: "tile--loc__alt"
                },
                basic1: [{
                    tileTitle: "2line"
                }, {
                    tileSnippet: "small"
                }],
                basic2: [{
                    tileTitle: "3line-small"
                }, {
                    tileSnippet: "large"
                }],
                basic3: [{
                    tileTitle: "3line-large"
                }, {
                    tileSnippet: "small"
                }],
                basic4: [{
                    tileTitle: "1line-large"
                }, {
                    tileSnippet: "large"
                }]
            },
            tileTitle: {
                "1line": "tile__title--1",
                "1line-large": "tile__title--1lg",
                "2line": "tile__title--2",
                "3line": "tile__title--3",
                "4line": "tile__title--4",
                "3line-small": "tile__title--3sm",
                "3line-large": "tile__title--3lg"
            },
            tileSubtitle: {
                "2line": "tile__sub--2"
            },
            tileSnippet: {
                small: "tile__content--sm",
                large: "tile__content--lg"
            },
            tileFooter: {
                "2line": {
                    tileFoot: "tile__foot--2",
                    tileBody: "has-foot--2"
                },
                "3line": {
                    tileFoot: "tile__foot--3",
                    tileBody: "has-foot--3"
                },
                "4line": {
                    tileFoot: "tile__foot--4",
                    tileBody: "has-foot--4"
                }
            },
            tileRating: {
                starsLeft: "tile__rating--left",
                starsRight: "tile__rating--right"
            },
            iconImage: {
                small: "c-icon__img-wrap--sm",
                medium: "c-icon__img-wrap--md",
                large: "c-icon__img-wrap--lg"
            },
            iconBadge: {
                small: "c-icon__badge--sm",
                medium: "c-icon__badge--md",
                large: "c-icon__badge--lg"
            },
            iconTitle: {
                large: "c-icon__title--lg"
            },
            productSub: {
                noMax: "c-product__subtitle--nm"
            }
        }
    }
}(DDG);
!function() {
    var a = ["l", "ln", "lp", "lnp", "ld", "ldn", "ldp", "ldnp"];
    for (var b = 0, c; c = a[b]; b += 1) {
        if (!this[c]) {
            this[c] = function(e) {
                return e
            }
        }
    }
}(window);
DDG.Data.Settings = {
    colors: {
        b: "ecf5f8",
        b2: "2e4a57",
        ct: "9f9f9f",
        d: "e7eed5",
        g: "215017",
        g2: "ecf8ee",
        kt: "333333",
        o: "ffebcd",
        p: "693E68",
        r: "d44c2a",
        r2: "7c2c1f",
        r3: "fff",
        r4: "d3B5B0",
        w: "fff"
    },
    directionSources: {
        "apple-maps-ios": {
            name: "Apple Maps",
            onDevices: ["isIDevice"],
            url: "maps://?daddr={{addr}}"
        },
        "apple-maps-osx": {
            name: "Apple Maps",
            onDevices: ["isOSXMavericksAndUp"],
            url: "http://maps.apple.com/?daddr={{addr}}"
        },
        "bing-maps": {
            name: "Bing Maps",
            url: "https://bing.com/maps/default.aspx?rtp=~adr.{{addr}}&cp={{lat}}~{{lng}}&lvl=15"
        },
        "google-maps": {
            name: "Google Maps",
            url: "https://www.google.com/maps/dir//{{addr}}"
        },
        "here-maps": {
            name: "HERE Maps",
            notOnDevices: ["isMobileDevice", "isIE9"],
            url: "https://maps.here.com/directions/drive//{{addr}}:{{lat}},{{lng}}?map={{lat}},{{lng}},15,normal"
        },
        osm: {
            name: "OpenStreetMap",
            url: "https://www.openstreetmap.org/directions?route=%3B{{lat}}%2C{{lng}}#map=15/{{lat}}/{{lng}}"
        }
    },
    fonts: {
        a: "Arial",
        b: "Trebuchet MS",
        c: "Century Gothic",
        e: "Segoe UI",
        g: "Georgia",
        h: "Helvetica",
        n: "Sans-serif",
        o: "Tahoma",
        p: "Proxima Nova",
        s: "Serif",
        t: "Times",
        u: "Helvetica Neue",
        v: "Verdana"
    },
    k1: {
        "default": "1",
        desc: "If you still want to support us, %shelp spread DuckDuckGo%s",
        desc2: "<a href='https://duckduckgo.com/spread'>",
        desc3: "</a>",
        name: "Advertisements",
        type: "boolean"
    },
    k5: {
        "default": "-1",
        desc: "Changes what happens when you click on a video thumbnail",
        name: "Video Playback",
        type: "dropdown",
        values: {
            "1": "Always play on DuckDuckGo",
            "2": "Open on third-party site",
            "-1": "Prompt me"
        }
    },
    k7: {
        "default": "ffffff",
        desc: "Change the background color across the entire site",
        name: "Background Color",
        type: "color",
        values: "colors"
    },
    k8: {
        "default": "595959",
        desc: "Changes the color of the result description text",
        name: "Result Description Color",
        type: "color",
        values: {
            g: "595959"
        }
    },
    k9: {
        "default": "292929",
        desc: "Changes the title link color for each result",
        name: "Result Title Color",
        type: "color",
        values: {
            b: "1168cc",
            g: "292929"
        }
    },
    ka: {
        "default": "p",
        desc: "Changes the title link font for each result",
        name: "Result Title Font",
        order: ["a", "c", "g", "h", "u", "p", "n", "e", "s", "t", "o", "b", "v"],
        type: "dropdowncustom",
        values: "fonts"
    },
    kaa: {
        "default": "292929",
        desc: "Changes the title link color for each result",
        name: "Result Visited Title Color",
        type: "color",
        values: {
            g: "292929",
            p: "6830bb"
        }
    },
    kac: {
        "default": "1",
        desc: "Show suggestions under the search box as you type",
        name: "Auto-Suggest",
        type: "boolean"
    },
    kad: {
        "default": "wt_WT",
        desc: "Changes the language across the entire site",
        name: "Language",
        order: ["wt_WT"],
        type: "dropdown",
        values: "languages"
    },
    kae: {
        "default": "-1",
        featured: ["-1", "b", "c", "d"],
        name: "Theme",
        type: "thumbnail",
        values: {
            "-1": {
                color1: "333",
                color2: "888",
                id: "-1",
                name: "Default",
                settings: {
                    k7: null ,
                    k8: null ,
                    k9: null ,
                    ka: null ,
                    kaa: null ,
                    kac: null ,
                    kaf: null ,
                    kag: null ,
                    kai: null ,
                    kf: null ,
                    kj: null ,
                    km: null ,
                    ko: null ,
                    kt: null ,
                    kx: null ,
                    ky: null 
                }
            },
            b: {
                color1: "3434d4",
                color2: "047d00",
                id: "b",
                name: "Basic",
                settings: {
                    k8: "444",
                    k9: "142ace",
                    ka: "h",
                    kaa: "5500A3",
                    kaf: "1",
                    kai: "1",
                    kf: "-1",
                    kt: "h",
                    kx: "009636",
                    ky: "fff"
                }
            },
            c: {
                color1: "0f6ccc",
                color2: "ca4323",
                id: "c",
                name: "Contrast",
                settings: {
                    k8: "333",
                    k9: "3a7fb4",
                    kaa: "6d59a3",
                    kaf: "1",
                    kx: "bd4b2b"
                }
            },
            d: {
                color1: "444",
                color2: "222",
                id: "d",
                name: "Dark",
                settings: {
                    k7: "333",
                    kj: "333"
                }
            },
            r: {
                id: "r",
                name: "Retro",
                settings: {
                    k8: "333",
                    k9: "1168cc",
                    ka: "n",
                    kaa: "6830bb",
                    kaf: "1",
                    kag: "1",
                    kj: "d44c2a",
                    km: "m",
                    ko: "1",
                    kt: "n",
                    kx: "c14100"
                }
            },
            t: {
                id: "t",
                name: "Terminal",
                settings: {
                    k7: "222",
                    k8: "ccc",
                    k9: "50f148",
                    kaa: "ad4ad2",
                    kj: "222",
                    kx: "a1ac25"
                }
            }
        }
    },
    kaf: {
        "default": "1",
        desc: "Show the full URL for each result",
        name: "Result Full URLs",
        type: "boolean"
    },
    kag: {
        "default": "-1",
        desc: "Shows the search button background",
        name: "Search Button Background",
        type: "boolean"
    },
    kah: {
        desc: "Stores the previous region that was set",
        name: "Previous Region",
        values: "regions"
    },
    kai: {
        "default": "-1",
        desc: "Show the Result URL line above the snippet text",
        name: "Result URLs above snippet",
        type: "boolean"
    },
    kaj: {
        "default": "-1",
        desc: "Preferred units of measure",
        name: "Units of Measure",
        order: ["-1", "m", "u"],
        type: "dropdown",
        values: {
            "-1": "No Preference (Default)",
            m: "Metric (Kilograms, Meters, Celsius)",
            u: "US based (Pounds, Feet, Fahrenheit)"
        }
    },
    kak: {
        "default": "1",
        desc: "Show links to instructions for how to add DuckDuckGo to your browser",
        name: "Browser Instructions",
        type: "boolean"
    },
    kal: {
        "default": "1",
        desc: "Show animations on the homepage",
        name: "Homepage Animations",
        type: "boolean"
    },
    kam: {
        desc: "Which third party source to use for directions",
        deviceDependent: true,
        name: "Directions Source",
        order: ["apple-maps-osx", "apple-maps-ios", "bing-maps", "google-maps", "here-maps", "osm"],
        type: "dropdown",
        values: "directionSources"
    },
    kan: {
        "default": "0",
        name: "ATB related (not displayed on settings page)"
    },
    kc: {
        "default": "1",
        desc: "Loads more results when scrolling",
        name: "Auto-Load",
        type: "boolean"
    },
    kd: {
        desc: "Prevent sharing of your search with sites you click on",
        name: "Redirect",
        type: "boolean"
    },
    kf: {
        compositeKey: {
            "-1:-1": "-1",
            "-1:1": "w",
            "1:-1": "1",
            "1:1": "fw"
        },
        "default": "1",
        subsettings: [{
            "default": "1",
            desc: "Show favicons for each result",
            id: "kf_fav",
            name: "Site Icons",
            type: "boolean"
        }, {
            "default": "-1",
            desc: "Show Web of Trust icons for each result",
            id: "kf_wot",
            name: "WOT Icons",
            type: "boolean"
        }],
        type: "composite"
    },
    kg: {
        "default": "g",
        desc: "Search queries are included in URL (if off, searches will use POST requests)",
        name: "GET requests",
        type: "boolean",
        values: {
            "1": "g",
            "-1": "p"
        }
    },
    kh: {
        "default": "1",
        desc: "Use encrypted version of the site",
        name: "HTTPS",
        type: "boolean"
    },
    kj: {
        "default": "ffffff",
        desc: "Changes the header color across the entire site",
        name: "Header Color",
        type: "color",
        values: "colors"
    },
    kk: {
        "default": "1",
        desc: "Enables keyboard shortcuts on the site",
        name: "Keyboard Shortcuts",
        type: "boolean"
    },
    kl: {
        "default": "wt-wt",
        desc: "Changes results to be region specific",
        name: "Region",
        order: ["wt-wt"],
        type: "dropdown",
        values: "regions"
    },
    km: {
        "default": "l",
        desc: "Center align the results page (instead of left aligned)",
        name: "Center Alignment",
        type: "boolean",
        values: {
            "1": "m",
            "-1": "l"
        }
    },
    kn: {
        "default": "-1",
        desc: "Opens results in new windows/tabs",
        name: "New Window",
        type: "boolean"
    },
    ko: {
        "default": "s",
        desc: "Changes how much space the header takes up and what happens to it when you scroll",
        name: "Header Behavior",
        type: "dropdown",
        values: {
            "1": "On & Floating",
            "-1": "Off",
            s: "On & Scrolling"
        }
    },
    kp: {
        "default": "1",
        desc: "Omits objectionable (mostly adult) material",
        name: "Safe Search",
        type: "boolean"
    },
    ks: {
        "default": "n",
        desc: "Changes the font size across the entire site",
        name: "Font Size",
        order: ["t", "l", "n", "m", "s"],
        type: "dropdown",
        values: {
            l: "Larger",
            m: "Medium",
            n: "Large",
            s: "Small",
            t: "Largest"
        }
    },
    kt: {
        "default": "p",
        desc: "Changes the font across the entire site",
        name: "Font",
        order: ["a", "c", "g", "h", "u", "p", "n", "e", "s", "t", "o", "b", "v"],
        type: "dropdowncustom",
        values: "fonts"
    },
    ku: {
        "default": "-1",
        desc: "Underline the title link for each result",
        name: "Result Title Underline",
        type: "boolean"
    },
    kv: {
        compositeKey: {
            "-1:-1": "-1",
            "-1:1": "m",
            "1:-1": "l",
            "1:1": "1"
        },
        "default": "1",
        name: "Page #'s",
        subsettings: [{
            "default": "1",
            desc: "Show page numbers at result page breaks",
            id: "kv_num",
            name: "Page Break #'s",
            type: "boolean"
        }, {
            "default": "1",
            desc: "Show horizontal lines at result page breaks",
            id: "kv_lin",
            name: "Page Break Lines",
            type: "boolean"
        }],
        type: "composite"
    },
    kw: {
        "default": "n",
        desc: "Controls the width of the search box and results",
        name: "Page Width",
        order: ["s", "w", "n"],
        type: "dropdown",
        values: {
            n: "Normal",
            s: "Super Wide",
            w: "Wide"
        }
    },
    kx: {
        "default": "858585",
        desc: "Changes the color of the result URL",
        name: "Result URL Color",
        type: "color",
        values: {
            b: "10385d",
            e: "858585",
            g: "0f5c17",
            l: "222222",
            o: "d15d0d",
            p: "732883",
            r: "c14100"
        }
    },
    ky: {
        "default": "f7f7f7",
        desc: "Changes the background color when hovering over a result",
        name: "Result Highlight Color",
        type: "color",
        values: {
            b: "eaf5fc",
            e: "f7f7f7",
            g: "eef6da",
            p: "fff0f9",
            t: "fcf5ea",
            y: "fffbd3"
        }
    },
    kz: {
        "default": "1",
        desc: "Automatically open relevant Instant Answers",
        name: "Instant Answers",
        type: "boolean"
    },
    languages: {
        af_ZA: "Afrikaans in Suid-Afrika",
        ar_DZ: "العربية في الجزائر",
        ar_EG: "العربية - مصر",
        ar_JO: "العربية في الأردن",
        ar_SA: " العربية - السعودية",
        ast_ES: "Asturianu n'Asturies",
        az_AZ: "Azərbaycanca Azərbaycanda",
        be_BY: "Беларуская ў Беларусі",
        bg_BG: "Български в България",
        bn_BD: "বাংলা (বাংলাদেশ)",
        bn_IN: "বাংলা (ভারত)",
        br_FR: "Breizh e Brezhoneg",
        bs_BA: "Bosanski u Bosni i Hercegovini",
        ca_ES: "Català a Catalunya",
        cs_CZ: "Česky v České republice",
        cy_GB: "Cymraeg yng Nghymru",
        da_DK: "Dansk i Danmark",
        de_CH: "Deutsch in der Schweiz",
        de_DE: "Deutsch in Deutschland",
        en_AU: "English in Australia",
        en_CA: "English in Canada",
        en_GB: "English in United Kingdom",
        en_US: "English of United States",
        eo_XX: "Esperanto",
        es_AR: "Español de Argentina",
        es_CL: "Español en Chile",
        es_CO: "Español de Colombia",
        es_CR: "Español de Costa Rica",
        es_EC: "Español en Ecuador",
        es_ES: "Español de España",
        es_MX: "Español Mexicano",
        es_PE: "Español Peruano",
        es_UY: "Español de Uruguay",
        es_VE: "Español venezolano",
        et_EE: "Eesti keel Eestis",
        "eu_ES-PV": "Euskara Euskal Herrian",
        fa_IR: "فارسی در ایران",
        fi_FI: "Suomi Suomessa",
        fr_BE: "Français en Belgique",
        fr_CA: "Français Canadien",
        fr_CH: "Français de Suisse",
        fr_FR: "Français en France",
        ga_IE: "Gaeilge na Éireann",
        gd_GB: "Gàidhlig san Rìoghachd Aonaichte",
        gl_ES: "Galego de Galicia",
        gr_GR: "Ελληνικά στην Ελλάδα",
        gu_IN: "ગુજરાતનું ગુજરાતી",
        he_IL: "עברית בישראל",
        hi_IN: "भारत की हिन्दी",
        hr_HR: "Hrvatski in Croatia",
        hu_HU: "Magyar Magyarországon",
        hy_AM: "Հայերեն Հայաստանում",
        id_ID: "Indonesia di Indonesia",
        io_XX: "Ido",
        is_IS: "Íslenska fyrir Ísland",
        it_IT: "La lingua italiana in Italia",
        ja_JP: "日本の日本語",
        ka_GE: "ქართული საქართველოში",
        kn_IN: "ಕನ್ನಡ",
        ko_KR: "대한민국의 한국어",
        kw_GB: "Kernewek yn Kernow",
        ky_KG: "Кыргызстандын кыргыз тили",
        latin_ROME: "Latina Romae",
        lt_LT: "Lietuvos Lietuvių",
        lv_LV: "Latviski Latvijā",
        ml_IN: "ഇന്ത്യയിലെ മലയാളം",
        mr_IN: "इंडियाची मराठी",
        ms_MY: "Bahasa Malaysia di Malaysia",
        nb_NO: "Norsk bokmål i Norge",
        ne_NP: "नेपाल को नेपाली",
        nl_BE: "Belgisch-Nederlands",
        nl_NL: "Nederlands in Nederland",
        nn_NO: "Norsk nynorsk i Norge",
        pcd_FR: "Picard in Frinse",
        pirate_XX: "Haarrrr Pirate on Pirate Island",
        pl_PL: "Polski w Polsce",
        pt_BR: "Português do Brasil",
        pt_PT: "Português de Portugal",
        ro_RO: "Romana in Romania",
        ru_RU: "Русский России",
        si_LK: "ශ්රී ලංකාවේ සිංහල",
        sk_SK: "Slovenčina na Slovensku",
        sl_SI: "Slovenski jezik v Sloveniji",
        sq_AL: "Shqip ne Shqiperi",
        sr_RS: "Serbian in Serbia",
        sv_SE: "Svenska i Sverige",
        ta_IN: "இந்தியாவில் தமிழ்",
        te_IN: "భారతదేశంలో తెలుగు",
        th_TH: "ไทย ในประเทศไทย",
        tl_PH: "Tagalog sa Pilipinas",
        tokipona_XX: "Toki Pona",
        tr_TR: "Türkiye'de Türkçe",
        uk_UA: "Українська",
        ur_PK: "پاکستانی اردو",
        vi_VI: "Tiếng Việt ở Việt Nam",
        wt_WT: "Browser preferred language",
        zh_CN: "简体中文",
        zh_TW: "台灣中文"
    },
    regions: {
        "wt-wt": "All Results",
        "ar-es": "Argentina",
        "au-en": "Australia",
        "at-de": "Austria",
        "be-fr": "Belgium (fr)",
        "be-nl": "Belgium (nl)",
        "br-pt": "Brazil",
        "bg-bg": "Bulgaria",
        "ca-en": "Canada",
        "ca-fr": "Canada (fr)",
        "ct-ca": "Catalonia",
        "cl-es": "Chile",
        "cn-zh": "China",
        "co-es": "Colombia",
        "hr-hr": "Croatia",
        "cz-cs": "Czech Republic",
        "dk-da": "Denmark",
        "ee-et": "Estonia",
        "fi-fi": "Finland",
        "fr-fr": "France",
        "de-de": "Germany",
        "gr-el": "Greece",
        "hk-tzh": "Hong Kong",
        "hu-hu": "Hungary",
        "in-en": "India",
        "id-id": "Indonesia",
        "id-en": "Indonesia (en)",
        "ie-en": "Ireland",
        "il-he": "Israel",
        "it-it": "Italy",
        "jp-jp": "Japan",
        "kr-kr": "Korea",
        "xl-es": "Latin America",
        "lv-lv": "Latvia",
        "lt-lt": "Lithuania",
        "my-ms": "Malaysia",
        "my-en": "Malaysia (en)",
        "mx-es": "Mexico",
        "nl-nl": "Netherlands",
        "nz-en": "New Zealand",
        "no-no": "Norway",
        "pe-es": "Peru",
        "ph-en": "Philippines",
        "ph-tl": "Philippines (tl)",
        "pl-pl": "Poland",
        "pt-pt": "Portugal",
        "ro-ro": "Romania",
        "ru-ru": "Russia",
        "xa-ar": "Saudi Arabia",
        "xa-en": "Saudi Arabia (en)",
        "sg-en": "Singapore",
        "sk-sk": "Slovakia",
        "sl-sl": "Slovenia",
        "za-en": "South Africa",
        "es-es": "Spain",
        "es-ca": "Spain (ca)",
        "se-sv": "Sweden",
        "ch-de": "Switzerland (de)",
        "ch-fr": "Switzerland (fr)",
        "ch-it": "Switzerland (it)",
        "tw-tzh": "Taiwan",
        "th-th": "Thailand",
        "tr-tr": "Turkey",
        "ua-uk": "Ukraine",
        "uk-en": "United Kingdom",
        "us-en": "United States",
        "us-es": "United States (es)",
        "vn-vi": "Vietnam"
    },
    tabs: [{
        id: "general",
        name: "General",
        settings: ["kl", "kad", "break", "kp", "kz", "break", "kc", "kac", "kn", "k1", "kk", "kaj", "kam", "break", "kv", "break", "kak", "kal"]
    }, {
        id: "theme",
        name: "Theme",
        settings: ["kae"]
    }, {
        id: "appearance",
        name: "Appearance",
        settings: ["Page Appearance", "kt", "ks", "kw", "km", "k7", "break", "Header Appearance", "ko", "kj", "break", "Results Appearance", "ka", "k9", "kaa", "ku", "break", "k8", "kx", "ky", "kaf", "kai", "break", "kf"]
    }, {
        id: "privacy",
        name: "Privacy",
        settings: ["kd", "kh", "kg", "k5"]
    }]
};
DDG.Data.Pixels = {
    abort: {},
    ad: {},
    atbhi: {
        once: true
    },
    atbhc: {
        once: true
    },
    atbhx: {
        once: true
    },
    atbii: {
        once: true
    },
    atbis: {
        once: true
    },
    atbil: {
        once: true
    },
    atbif: {
        once: true
    },
    atbish: {
        once: true
    },
    atbmi: {
        once: true
    },
    atbmc: {
        once: true
    },
    atbmx: {
        once: true
    },
    atbli: {
        once: true
    },
    atblc: {
        once: true
    },
    atblf: {
        once: true
    },
    atbls: {
        once: true
    },
    atblb: {
        once: true
    },
    atbob: {
        once: true
    },
    atboc: {
        once: true
    },
    atbs: {
        once: true
    },
    c: {
        once: true
    },
    df: {
        once: true
    },
    dli: {
        once: true
    },
    dlc: {
        once: true
    },
    emcb: {},
    ibc: {},
    hl: {},
    htl: {},
    l: {
        once: true
    },
    nrjt: {
        once: true
    },
    nre: {
        once: true
    },
    oli: {
        once: true
    },
    olc: {
        once: true
    },
    prb: {
        once: true
    },
    rgc: {
        once: true
    },
    related: {},
    sm: {},
    sml: {},
    smo: {},
    srpm: {},
    sp: {},
    spd: {},
    w: {},
    iaa: {
        data: ["ia"],
        once: true
    },
    iacl: {
        once: true
    },
    iae: {
        once: true
    },
    iaff: {},
    iafi: {
        once: true
    },
    iag: {},
    iacg: {
        once: true
    },
    iaoe: {
        once: true
    },
    iaof: {},
    iaoi: {
        once: true
    },
    iaolc: {
        once: true
    },
    iaui: {
        once: true
    },
    iauc: {
        once: true
    },
    iaom: {
        once: true
    },
    iaop: {},
    iaoq: {
        once: true
    },
    ias: {
        once: true
    },
    iasm: {
        once: true
    },
    iadrc: {
        once: true
    },
    iatc: {
        once: true
    },
    tri: {
        once: true
    },
    trs: {
        once: true
    },
    trc: {
        once: true
    },
    ynr: {
        once: true
    },
    ynb: {
        once: true
    },
    jse: {},
    depr: {},
    old: {}
};
!function(a) {
    a.Data.languages = {
        fontSubsets: {
            normal: ["sq", "eu", "br", "ch", "da", "nl", "en", "fo", "fi", "fr", "gl", "de", "is", "it", "mg", "no", "pt", "es", "sv"],
            afrikaans: ["af"],
            catalan: ["ca"],
            cyrillic: ["ru", "ab", "av", "ba", "be", "bg", "ce", "cv", "uk", "kk", "ku", "kv", "ky", "mk", "mn", "os", "tg", "tt", "ug", "uz", "sr"],
            esperanto: ["eo"],
            estonian: ["et"],
            greek: ["el", "gr"],
            hungarian: ["hu"],
            lithuanian: ["lt", "sl"],
            maltese: ["mt"],
            polish: ["pl"],
            romanian: ["ro"],
            serbian: ["sr", "bs", "hr", "sl", "lv"],
            slovak: ["sk", "sl", "lv"],
            turkish: ["tr"],
            welsh: ["cy"],
            czech: ["cs", "sl", "lv"]
        },
        languageFontLookup: {
            af: "afrikaans",
            ca: "catalan",
            eo: "esperanto",
            et: "estonian",
            el: "greek",
            gr: "greek",
            hu: "hungarian",
            lt: "lithuanian",
            mt: "maletese",
            pl: "polish",
            ro: "romanian",
            tr: "turkish",
            cy: "welsh",
            cs: "czech",
            sk: "slovak",
            sl: "serbian",
            bs: "serbian",
            hr: "serbian",
            lv: "serbian",
            ru: "cyrillic",
            ab: "cyrillic",
            av: "cyrillic",
            ba: "cyrillic",
            be: "cyrillic",
            bg: "cyrillic",
            ce: "cyrillic",
            cv: "cyrillic",
            uk: "cyrillic",
            kk: "cyrillic",
            ku: "cyrillic",
            kv: "cyrillic",
            ky: "cyrillic",
            mk: "cyrillic",
            mn: "cyrillic",
            os: "cyrillic",
            tg: "cyrillic",
            tt: "cyrillic",
            ug: "cyrillic",
            uz: "cyrillic",
            sr: ["serbian", "cyrillic"]
        }
    }
}(DDG);
DDG.Data.Apps = {
    isIPhone: "https://itunes.apple.com/us/app/id663592361?mt=8",
    isAndroid: "market://details?id=com.duckduckgo.mobile.android"
};
!function(a) {
    a.Data.Homepage = {
        queries: [{
            href: "/?q=tilt+shift+images&ia=images",
            label: "tilt shift images"
        }, {
            href: "/?q=thailand+beach+images&ia=images",
            label: "thailand beach images"
        }, {
            href: "/?q=gopro+videos&ia=videos",
            label: "gopro videos"
        }, {
            href: "/?q=jimmy+fallon+videos&ia=videos",
            label: "jimmy fallon videos"
        }, {
            href: "/?q=weather+in+encinitas&ia=weather",
            label: "weather in encinitas"
        }, {
            href: "/?q=weather+in+paris&ia=weather",
            label: "weather in paris"
        }, {
            href: "/?q=sorbet+recipes&ia=recipes",
            label: "sorbet recipes"
        }, {
            href: "/?q=tilapia+recipes&ia=recipes",
            label: "tilapia recipes"
        }, {
            href: "/?q=thai+food+in+San+Francisco&ia=places",
            label: "thai food in San Francisco"
        }, {
            href: "/?q=bars+near+me",
            label: "bars near me"
        }, {
            href: "/?q=katz%27s+deli+new+york&ia=places",
            label: "katz's deli new york"
        }, {
            href: "/?q=orange&ia=meanings",
            label: "orange"
        }, {
            href: "/?q=daft+punk+soundcloud&ia=soundcloud",
            label: "daft punk soundcloud"
        }, {
            href: "/?q=8oz+to+grams&ia=answer",
            label: "8oz to grams"
        }, {
            href: "/?q=define+superlative&ia=definition",
            label: "define superlative"
        }, {
            href: "/?q=people+in+space&ia=answer",
            label: "people in space"
        }]
    }
}(DDG);
DDG.Data.StaticIAs = [{
    id: "images",
    name: "Images",
    meta: {
        idField: "image",
        primaryText: l("Filter Options") + ":",
        autoExpand: 1,
        developer: [{
            name: "DDG Team"
        }],
        signal_from: "images"
    },
    parameters: [{
        key: "size",
        values: [{
            id: "",
            name: lp("size", "All Sizes")
        }, {
            id: "s",
            name: lp("size", "Small")
        }, {
            id: "m",
            name: lp("size", "Medium")
        }, {
            id: "l",
            name: lp("size", "Large")
        }]
    }],
    sources: [{
        id: "ddg",
        name: "DuckDuckGo",
        requeryURL: "/i.js?l=" + rl + "&o=json&q=",
        parameters: {
            size: ["", "s", "m", "l"]
        }
    }],
    templates: DDG.Data.templates.groups.images,
    deferredURL: "/i.js?l=" + rl + "&o=json&q="
}, {
    id: "videos",
    name: "Videos",
    model: "Video",
    meta: {
        idField: "id",
        developer: [{
            name: "DDG Team"
        }],
        signal_from: "videos"
    },
    templates: DDG.Data.templates.groups.videos,
    deferredURL: "/v.js?o=json&strict=1&q="
}];
DDG.Data.DeferredIAs = {
    news: {
        id: "news",
        name: "News",
        meta: {
            idField: "news",
            developer: [{
                name: "DDG Team"
            }],
            signal_from: "news",
            itemType: l("Recent News"),
            rerender: ["image"]
        },
        templates: {
            item: "news_item"
        },
        deferredURL: "/news.js?l=" + rl + "&o=json&q=",
        onItemShown: function(a) {
            if (!a.fetch_image || a.image || a.fetched_image) {
                return
            }
            a.fetched_image = 1;
            $.getJSON("/f.js?o=json&i=1&u=" + a.url, function(b) {
                if (b && b.image) {
                    a.set("image", b.image)
                }
            })
        }
    },
    images: DDG.Data.StaticIAs[0],
    videos: DDG.Data.StaticIAs[1]
};
!function(a) {
    a.Data.HiddenFields = {
        DATE_FILTER: "df",
        DATE_SORT: "ds"
    }
}(DDG);
!function(a) {
    a.Mixins.Events = {
        bindEvents: function(f) {
            if (!this._bEvents) {
                this._bEvents = []
            }
            for (var e = 0, c; c = f[e]; e++) {
                if (c.length < 2 || !c[0] || !c[1] || !c[2]) {
                    continue
                }
                var b = {
                    bound: c[2].bind(this),
                    evt: c
                };
                if (typeof c[0] === "string") {
                    this.$ && this.$(c[0]).on(c[1], b.bound)
                } else {
                    c[0].on(c[1], b.bound)
                }
                this._bEvents.push(b)
            }
        },
        unbindEvents: function() {
            while (this._bEvents && this._bEvents.length) {
                var c = this._bEvents[this._bEvents.length - 1]
                  , b = c.evt;
                if (b) {
                    if (typeof b[0] === "string") {
                        this.$ && this.$(b[0]).off(b[1], c.bound)
                    } else {
                        b[0].off(b[1], c.bound)
                    }
                }
                this._bEvents.pop()
            }
            this._bEvents = null 
        }
    }
}(DDG);
!function(a) {
    var b = a.Models;
    b.Base = function(c) {
        this.setMaxListeners(500);
        $.extend(this, c)
    }
    ;
    b.Base.prototype = $.extend({}, EventEmitter2.prototype, a.Mixins.Events, {
        set: function(c, i, f) {
            if (typeof c === "object") {
                for (var e in c) {
                    this.set(e, c[e], i)
                }
            }
            f = f || {};
            var h = this[c]
              , g = h !== i;
            this[c] = i;
            !f.silent && g && this._emitChange(c, h)
        },
        clear: function(c, e) {
            this.set(c, null , e)
        },
        UUID: function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(g) {
                var f = Math.random() * 16 | 0
                  , e = g == "x" ? f : (f & 3 | 8);
                return e.toString(16)
            })
        },
        _emitChange: function(c, e) {
            var f = this[c];
            this.emit("change:" + c, f, e);
            this.emit("change", c, f, e)
        }
    })
}(DDG);
!function(m) {
    var b = m.Models.Base, c, p = 1440, o = 1079, n = 864, g = 634, j = 425, i = [{
        id: "xl",
        width: p
    }, {
        id: "l",
        width: o
    }, {
        id: "m",
        width: n
    }, {
        id: "s",
        width: g
    }, {
        id: "xs",
        width: j
    }], f = {
        xl: 94,
        l: 94,
        m: 58,
        s: 0,
        xs: 0
    }, r = j * 0.75, q = j * 0.9, e = j, a = g, h = Math.ceil(g * 1.25);
    m.Models.Device = c = function(u) {
        b.call(this, u);
        var v = this.ua
          , x = u.host || window.location.host;
        this.isEdge = /edge\//.test(v) ? true : false;
        if (!this.isEdge) {
            this.isIE = ie = d.all ? true : false;
            this.isIE9 = ie9 = /msie 9/.test(v) ? true : false;
            this.isIE10p = ie10p = /msie 1[0123456789]/.test(v) ? true : false;
            this.isIE11p = ie11p = /trident\/[789]/.test(v) || /edge\/[0123456789]/.test(v) ? true : false;
            if (ie10p || ie11p) {
                this.isIE = ie = true
            }
        }
        this.isWindowsPhone = /windows phone/.test(v) ? true : false;
        this.isSafari = is = !this.isWindowsPhone && /\([windows|macintosh|ipad|iphone].* version.* safari/.test(v) ? true : false;
        this.safariVersion = this.isSafari && /version\/[0-9]/.test(v) ? parseFloat(v.match(/version\/([0-9][0-9]?\.[0-9])/)[1]) : -1;
        this.isWebkit = iw = /webkit/.test(v) ? true : false;
        this.isChrome = ir = /chrome(?!frame)|crios/.test(v) && !/vivaldi/.test(v) && !this.isIE && !this.isEdge && !/opr\/[0-9][0-9]?/.test(v) ? true : false;
        this.isFirefox = im = /firefox|fxios/.test(v) ? true : false;
        this.isFirefox38AndUp = this.isFirefox && /firefox\/(38|39|[4-9][0-9])\./.test(v) ? true : false;
        this.isOpera = io = /opera/.test(v) ? true : false;
        this.operaVersion = /opr\/[0-9][0-9]?/.test(v) ? parseInt(v.match(/opr\/([0-9][0-9]?)/)[1], 10) : -1;
        this.isOperaMini = /opera mini|opios/.test(v) ? true : false;
        this.isOperaMobile = /opera mobi/.test(v) ? true : false;
        this.isIPad = ipa = /ipad/.test(v) ? true : false;
        this.isIPhone = iph = !this.isWindowsPhone && /iphone/.test(v) ? true : false;
        this.isIDevice = ip = (ipa || iph);
        this.isIOS8p = ip8 = (ip && /os (8|9|10|11)|os 10_10/.test(v)) ? true : false;
        this.isIOS8pSafari = (this.isIOS8p && !this.isChrome && !this.isOperaMini) ? true : false;
        this.isAndroid = ia = !this.isWindowsPhone && /android/.test(v) ? true : false;
        this.isBlackberry = /blackberry/.test(v) ? true : false;
        this.chromeVersion = this.isChrome && /chrome|crios\/[0-9][0-9]?./.test(v) ? parseInt(v.match(/(chrome|crios)\/([0-9][0-9]?)/)[2], 10) : -1;
        this.isChrome31AndUpOnAndroid = this.isAndroid && this.isChrome && this.chromeVersion > 30 ? true : false;
        this.isChrome48AndUp = this.isChrome && this.chromeVersion > 47 ? true : false;
        this.isSilk = is_silk = /silk/.test(v) ? true : false;
        this.isKonqueror = is_konqueror = /konqueror/.test(v) ? true : false;
        this.isOSX = iosx = /mac os x [0-9]/.test(v) ? true : false;
        this.isOSXMavericksAndUp = /mac os x 10(_|\.)(1\d|9)/.test(v) ? true : false;
        this.isWindows = /windows/.test(v) ? true : false;
        this.isOnion = !!x.match(/\.onion$/i);
        this.isDDGIgnore = /ddgignore/.test(v) ? true : false;
        this.isBraveDesktop = (this.isChrome && !window.external);
        this.isRetina = is_retina = this.dpr > 1;
        this.is2x = m.is2x = this.dpr > 1;
        this.is3x = m.is3x = this.dpr > 2;
        var t = "Browser";
        if (ipa) {
            t = "iPad"
        } else {
            if (/seamonkey/.test(v)) {
                t = "SeaMonkey"
            } else {
                if (/iceape/.test(v)) {
                    t = "Iceape"
                } else {
                    if (/palemoon/.test(v)) {
                        t = "PaleMoon"
                    } else {
                        if (im) {
                            t = "Firefox"
                        } else {
                            if (ia) {
                                t = "Android"
                            } else {
                                if (/xbox/.test(v)) {
                                    t = "xBox"
                                } else {
                                    if (/midori/.test(v)) {
                                        t = "Midori"
                                    } else {
                                        if (/opr/.test(v)) {
                                            t = "Opera"
                                        } else {
                                            if (/maxthon/.test(v)) {
                                                t = "Maxthon"
                                            } else {
                                                if (/vivaldi/.test(v)) {
                                                    t = "Vivaldi"
                                                } else {
                                                    if (this.isChrome) {
                                                        t = "Chrome"
                                                    } else {
                                                        if (/fennec/.test(v)) {
                                                            t = "Fennec"
                                                        } else {
                                                            if (/epiphany/.test(v)) {
                                                                t = "Epiphany"
                                                            } else {
                                                                if (this.isFirefox) {
                                                                    t = "Firefox"
                                                                } else {
                                                                    if (/uzbl/.test(v)) {
                                                                        t = "Uzbl"
                                                                    } else {
                                                                        if (this.isEdge) {
                                                                            t = "Edge"
                                                                        } else {
                                                                            if (this.isIE && navigator.platform === "Win64" && !k() && Modernizr.touch && document.documentElement.clientWidth == screen.width) {
                                                                                t = "IEMetro"
                                                                            } else {
                                                                                if (this.isIE) {
                                                                                    t = "IE"
                                                                                } else {
                                                                                    if (this.isOpera) {
                                                                                        t = "Opera"
                                                                                    } else {
                                                                                        if (this.isIPhone) {
                                                                                            t = "iPhone"
                                                                                        } else {
                                                                                            if (/arora/.test(v)) {
                                                                                                t = "Arora"
                                                                                            } else {
                                                                                                if (this.isSafari) {
                                                                                                    t = "Safari"
                                                                                                } else {
                                                                                                    if (this.isKonqueror) {
                                                                                                        t = "Konqueror"
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.browserName = m.browserName = t;
        this.pixelBrowserName = t.toLowerCase();
        this.displayBrowserName = this.browserName;
        if (t === "IEMetro") {
            this.displayBrowserName = "IE"
        } else {
            if (t === "iPhone" || t === "iPad") {
                this.displayBrowserName = "Safari"
            }
        }
        this.isSafariWithNativeDDG = this._isSafariWithNativeDDG();
        this.isFirefoxWithNativeDDG = this._isFirefoxWithNativeDDG();
        this._updateScreenSize();
        this._updateIsMobileDevice();
        if ((this.isIPhone && !/ipod/.test(this.ua)) || (/mac os x 10[_.]1\d/.test(this.ua)) || (this.isAndroid && /mobile/.test(this.ua) && (this.isChrome || this.isFirefox)) || this.isWindowsPhone || this.isBlackberry) {
            this.canMakePhoneCalls = true
        } else {
            this.canMakePhoneCalls = false
        }
        if (this.isMobileDevice && this.browserName === "Firefox") {
            if (screen.width && screen.width < this.width) {
                this.width = viewport_width = screen.width
            }
            if (screen.height && screen.height < this.height) {
                this.height = viewport_height = screen.height
            }
            this._updateIsMobileDevice()
        }
        var s = (this.width < 600 || (this.width < 800 && this.height < 500)) ? 1 : 0;
        if (s !== this.isMobile) {
            this.isMobile = is_mobile = s;
            this.emit("changed:mobile")
        }
        this.$scrollDoc = $("html,body");
        this.pixelId = (this.isMobile || this.isMobileDevice) ? "m" : "d";
        if (this.isMobileDevice) {
            this._wasPortrait = this.isMobilePortrait()
        }
        window.onresize = this._onResize.bind(this);
        window.onscroll = this._onScroll.bind(this)
    }
    ;
    c.prototype = $.extend({}, b.prototype, {
        scrollTop: function(t, s) {
            if (typeof t === "undefined") {
                if (typeof this._scrollTop !== "undefined") {
                    return this._scrollTop
                } else {
                    return this._scrollTop = m.$doc.scrollTop()
                }
            }
            if (t === this.scrollTop()) {
                return
            }
            if (s && !$.isNumeric(s)) {
                s = m.animation_speed
            }
            if (!s) {
                this.$scrollDoc.scrollTop(t)
            } else {
                this.$scrollDoc.animate({
                    scrollTop: t
                }, {
                    duration: s
                })
            }
            return this._scrollTop = t
        },
        getBrowserMoreURL: function() {
            var s = "https://duck.co/help/desktop/";
            if (this.isChrome) {
                return s + "chrome"
            } else {
                if (this.isOpera) {
                    return s + "opera"
                } else {
                    if (this.isSafari && !this.isSafariWithNativeDDG) {
                        return s + "safari"
                    } else {
                        if (this.browserName === "SeaMonkey") {
                            return "https://addons.mozilla.org/seamonkey/addon/duckduckgo-ssl/"
                        } else {
                            if (this.isFirefox) {
                                return s + "firefox"
                            }
                        }
                    }
                }
            }
        },
        canAddToBrowser: function() {
            var s = this.getAddToBrowserDirections();
            return s.useForSearch || s.setAsHomepage
        },
        getAddToBrowserDirections: function() {
            if (this._addToBrowserDirections) {
                return this._addToBrowserDirections
            }
            var s = this.browserName, u, t;
            if (this.isSilk || ((this.isMobileDevice || this.isMobile) && !this.isIOS8pSafari && !this.isChrome31AndUpOnAndroid) || (this.isIDevice && this.isFirefox) || (this.isBraveDesktop)) {
                return this._addToBrowserDirections = {}
            }
            if (s === "IE") {
                t = "ie"
            } else {
                if (s === "SeaMonkey") {
                    t = "seamonkey"
                } else {
                    if (s === "PaleMoon") {
                        t = "palemoon"
                    } else {
                        if (this.isFirefoxWithNativeDDG) {
                            t = "firefox"
                        } else {
                            if (s === "Firefox") {
                                t = "firefox_old"
                            } else {
                                if (this.isChrome && this.isAndroid) {
                                    t = "chrome_android"
                                } else {
                                    if (s === "Chrome") {
                                        t = "chrome"
                                    } else {
                                        if (s === "Maxthon" && !this.isOSX) {
                                            t = "maxthon"
                                        } else {
                                            if (this.isSafariWithNativeDDG) {
                                                t = "safari"
                                            } else {
                                                if (this.isIOS8p && this.isSafari) {
                                                    t = "ios8"
                                                } else {
                                                    if (s === "Safari" && window.postMessage && this.isOSX) {
                                                        t = "safari_old"
                                                    } else {
                                                        if (s === "Safari" && window.postMessage) {
                                                            t = "safari_windows"
                                                        } else {
                                                            if (s === "Opera") {
                                                                t = "opera"
                                                            } else {
                                                                if (s === "Vivaldi") {
                                                                    t = "vivaldi"
                                                                } else {
                                                                    if (s === "Edge") {
                                                                        t = "edge"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (s === "IE") {
                u = "ie"
            } else {
                if (s.match(/^Firefox|PaleMoon|SeaMonkey$/)) {
                    u = "firefox"
                } else {
                    if (s === "Maxthon") {
                        u = "maxthon"
                    } else {
                        if (s === "Chrome") {
                            u = "chrome"
                        } else {
                            if (s === "Safari") {
                                u = "safari"
                            } else {
                                if (s === "Opera") {
                                    u = "opera"
                                } else {
                                    if (s === "Vivaldi") {
                                        u = "vivaldi"
                                    } else {
                                        if (s === "Edge") {
                                            u = "edge"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return this._addToBrowserDirections = {
                useForSearch: t && ("use_for_search_" + t),
                setAsHomepage: u && ("set_as_homepage_" + u)
            }
        },
        isTeapot: function() {
            return this.width >= a && this.height <= h
        },
        isMobileLandscape: function() {
            return this.isMobile && (this.height <= r || this.height <= q && this.width >= e)
        },
        isMobilePortrait: function() {
            return this.isMobile && !this.isMobileLandscape()
        },
        widthBreakpoint: function() {
            var s = i.length;
            while (--s) {
                var t = i[s];
                if (this.width < t.width) {
                    return t.id
                }
            }
            return i[0].id
        },
        gutterSize: function() {
            return f[this.widthBreakpoint()]
        },
        isPrv: function() {
            var u = "prv"
              , t = w.sessionStorage;
            try {
                t.setItem(u, "1");
                t.removeItem(u)
            } catch (s) {
                if (s.code === DOMException.QUOTA_EXCEEDED_ERR && t.length === 0) {
                    return true
                }
            }
            return false
        },
        _updateScreenSize: function() {
            var s, t, u = document.documentElement;
            s = Math.max(u.clientWidth, window.innerWidth || 0);
            t = Math.max(u.clientHeight, window.innerHeight || 0);
            if (s !== this.width || t !== this.height) {
                this.width = viewport_width = s;
                this.height = viewport_height = t;
                return true
            }
            return false
        },
        _updateIsMobileDevice: function() {
            var s = /mobile/.test(this.ua) ? 1 : 0;
            if (this.isOperaMobile || this.isOperaMini || this.isIDevice || this.isAndroid || this.isSilk || (this.width < 600 && this.height < 400)) {
                s = 1
            }
            this.isMobileDevice = is_mobile_device = s
        },
        _isSafariWithNativeDDG: function() {
            if (this.browserName !== "Safari" || this.isMobileDevice) {
                return false
            }
            var s = new RegExp("version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*safari/").exec(this.ua);
            if (!s || !s.length) {
                return false
            }
            s.shift();
            s = s.map(function(t) {
                return t || 0
            }).join("");
            return s && s > 706
        },
        _isFirefoxWithNativeDDG: function() {
            if (this.browserName !== "Firefox" || this._isMobileDevice) {
                return false
            }
            return navigator.buildID && parseInt(navigator.buildID) >= 20141028112145
        },
        _onResize: function(s) {
            if (this._updateScreenSize()) {
                s.isRotation = this.isMobileDevice && this._wasPortrait != this.isMobilePortrait();
                this._wasPortrait = this.isMobilePortrait();
                this.emit("resize", s)
            }
        },
        _onScroll: function(s) {
            delete this._scrollTop;
            this.emit("scroll", s)
        }
    });
    function k() {
        var s;
        try {
            s = !!new ActiveXObject("htmlfile")
        } catch (t) {}
        return s
    }
}(DDG);
!function(c) {
    var a = c.Models.Base
      , e = 500
      , b = {
        13: "enter",
        27: "escape",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        16: "shift",
        17: "ctrl",
        18: "alt",
        91: "cmd"
    };
    c.Models.Keyboard = function(f) {
        a.call(this, f);
        if (!c.device.isMobileDevice) {
            $(document).on("keydown", this._onKeydown.bind(this))
        }
    }
    ;
    c.Models.Keyboard.prototype = $.extend({}, a.prototype, {
        namespaced: function(f) {
            if (!f) {
                return !!this.namespace
            }
            return this.namespace && this.namespace.match(f)
        },
        focusedOnInput: function() {
            var f = document.activeElement;
            return f && (f.nodeName === "INPUT" || f.nodeName === "TEXTAREA")
        },
        keyCodeIsOneOf: function(h, g) {
            var f = b[h];
            return ( f && g.indexOf(f) > -1) 
        },
        _onKeydown: function(h) {
            var g = h.keyCode;
            clearTimeout(this._activeTimeout);
            this.set("active", 1);
            if (!fq && (!kk || kk == "1") && !h.ctrlKey && !h.metaKey && !this.focusedOnInput()) {
                if (this.enableSERPShortcuts) {
                    this._onSERPKeydown(h)
                }
                if (g == 13) {
                    nke()
                }
                if (g == 84) {
                    nkt()
                }
                if (h.shiftKey && g == 49) {
                    nkex()
                }
                if (!io) {
                    if (g == 49) {
                        nkex()
                    }
                }
            }
            var f = b[g];
            if (f && !h.altKey && !h.shiftKey) {
                if (this.namespace) {
                    this.emit(f + "." + this.namespace, h)
                }
                this.emit(f, h)
            }
            this._activeTimeout = setTimeout(function() {
                clearTimeout(this._activeTimeout);
                this.set("active")
            }
            .bind(this), e)
        },
        _onSERPKeydown: function(g) {
            var f = g.keyCode;
            if (f == 40 || f == 74) {
                g.preventDefault();
                nkda()
            }
            if (f == 38 || f == 75) {
                g.preventDefault();
                nkua()
            }
            if (!im) {
                if (g.shiftKey === true && f == 191) {
                    nks()
                }
                if (f == 191) {
                    nks()
                }
            }
            if (f == 79 || f == 76) {
                nko()
            }
            if (f == 222 || f == 86) {
                nkn()
            }
            if (f == 111 || f == 72) {
                nks()
            }
            if (f == 73) {
                nki()
            }
            if (f == 82) {
                nkr()
            }
            if (f == 32) {
                nksb()
            }
            if (f == 77) {
                nkm()
            }
            if (f == 83) {
                nksp()
            }
            if (f == 68) {
                nkd(g)
            }
        }
    })
}(DDG);
!function(c) {
    var b = c.Models
      , a = b.Base;
    b.SelectList = function(e) {
        a.call(this, e);
        this.select(this.values[0].id)
    }
    ;
    b.SelectList.prototype = $.extend({}, a.prototype, {
        select: function(e) {
            var f;
            this.values.forEach(function(g) {
                if (g.id === e) {
                    g.selected = true;
                    f = g
                } else {
                    g.selected = false
                }
            });
            if (!f) {
                this.select(this.values[0].id)
            } else {
                this.set("selected", f)
            }
        }
    })
}(DDG);
!function(c) {
    var b = c.Models
      , a = b.Base;
    b.Search = function(e) {
        this.dateFilterId = window[c.Data.HiddenFields.DATE_FILTER];
        this.deepAnswerIAs = {};
        a.call(this, e)
    }
    ;
    b.Search.prototype = $.extend({}, a.prototype, {
        requery: function() {
            this.emit("requery")
        },
        addBangToSiteInQuery: function(e, f) {
            return f.replace(new RegExp("(^|\\s)(" + e + ")($|\\s)","i"), "$1!$2$3")
        },
        getDateFilterName: function() {
            if (this._dateFilterName) {
                return this._dateFilterName
            }
            var g = this.getDateFilters();
            for (var e = 0, h; h = g[e]; e++) {
                if (h.selected) {
                    return this._dateFilterName = h.name
                }
            }
        },
        getDateFilters: function() {
            if (this._dateFilters) {
                return this._dateFilters
            }
            this._dateFilters = [{
                name: l("Anytime"),
                val: ""
            }, {
                name: l("Past Day"),
                val: "d"
            }, {
                name: l("Past Week"),
                val: "w"
            }, {
                name: l("Past Month"),
                val: "m"
            }];
            if (this.dateFilterId) {
                var e = c.findInArray(this._dateFilters, "val", this.dateFilterId);
                if (e) {
                    e.selected = 1
                }
            } else {
                this._dateFilters[0].selected = 1
            }
            return this._dateFilters
        },
        getSiteQuery: function(o) {
            if (!o) {
                return false
            }
            o = decodeURIComponentSafe(o);
            o = c.strip_html(o);
            var f, e, r = false, k, q = [], m, p = o, n = [];
            k = o.match(/((NOT )?SITE:)([^\s]+)/);
            if (k) {
                r = false;
                n = k[3].split(",");
                p = o.substring(0, k.index - 1);
                for (var h = 0; h < n.length; h++) {
                    if (!n[h]) {
                        continue
                    }
                    f = [];
                    for (var g = 0; g < n.length; g++) {
                        if (g !== h) {
                            f.push(n[g])
                        }
                    }
                    m = (r) ? " NOT SITE:" : " SITE:";
                    e = (f.length) ? m + f.join(",") : "";
                    q.push({
                        site: n[h],
                        clearQuery: encodeURIComponent(p + e)
                    })
                }
            }
            return {
                str: o,
                query: p,
                sites: q,
                isExcluding: r
            }
        },
        isYhsSource: function() {
            return this.src === "yhs"
        }
    });
    c.search = new b.Search()
}(DDG);
var d = document;
var w = window;
var cd, ci, dz, da, fk, fb, fs, fm, fe, fl, fo, fa, fn, fq, fz, ie, idom, io, il, ir, is, ga, gd, rc, rd, rs, rsd, rdc, rsc, rtc, rii, rin, rir, rl, rp, reb, rebc, sx, sy, tl, tlz, tac, tr, ts, tn, tsl, tz, nir, kurl, is_mobile, dow, iosx, slo;
fb = ci = irl = idom = il = dz = da = dam = daiq = daia = fz = tl = tlz = sx = sy = fl = fo = fa = fn = rdc = rtc = rsc = rii = rin = rebc = tsl = tac = tn = tz = fe = fmx = fmy = ieof = iad = iad2 = iad3 = iadt = 0;
kurl = "";
rpc = fk = fs = 1;
slo = 0;
tr = new Array();
ts = new Array();
rd = new Array();
rsd = new Array();
reb = new Array();
DDG.device = new DDG.Models.Device({
    ua: navigator.userAgent.toLowerCase(),
    dpr: window.devicePixelRatio
});
!function(a) {
    window.onerror = function(f, b, h) {
        if (!f || f === ": " || f.match(/Script error|Cannot read property \'style\'|atomicFindClose|bestpriceninja|ModifyLinkTargets|browserToolsLoaded|__gCrWeb|mobiGetClick|savingsslider|DealPly|processSiteSource|symcBFPerform|Papa_|ByTagName\(\'video\'|setTimeout[0-9]+ is undefined/)) {
            return
        }
        if (!b || !b.match(/^http/i) || b.match(/checkpoint|main\.js/)) {
            return
        }
        try {
            a.pixel.fire("jse", encodeURIComponent(f), encodeURIComponent(b), h)
        } catch (g) {
            var c = Math.ceil(Math.random() * 10000000);
            $('<img src="/t/jse_infinite%20loop%20in%20onerror?"' + c + "/>")
        }
    }
}(DDG);
!function(a) {
    var b = function() {
        this.path = window.location.pathname;
        if (this.path.indexOf("//") === 0) {
            this.path = this.path.substring(1)
        }
        this.curState = {};
        var c, f = /\+/g, e = /([^&=]+)=?([^&]*)/g, h = function(i) {
            return decodeURIComponentSafe(i.replace(f, " "))
        }
        , g = window.location.search.substring(1);
        while (c = e.exec(g)) {
            this.curState[h(c[1])] = h(c[2])
        }
    }
    ;
    b.prototype = {
        hasPushed: false,
        get: function(c) {
            return this.curState[c]
        },
        getNamespace: function(c) {
            var e = {};
            for (var f in this.curState) {
                if (this.curState.hasOwnProperty(f)) {
                    if (f.indexOf(c) === 0) {
                        e[f] = this.curState[f]
                    }
                }
            }
            return e
        },
        set: function(c, f) {
            if (typeof c === "object") {
                for (var e in c) {
                    this.set(e, c[e])
                }
                return
            }
            this.curState[c] = f;
            this._updatePath()
        },
        clear: function(e) {
            for (var c = 0; c < arguments.length; c++) {
                delete this.curState[arguments[c]]
            }
            this._updatePath()
        },
        clearNamespace: function(c) {
            for (var e in this.curState) {
                if (this.curState.hasOwnProperty(e)) {
                    if (e.indexOf(c) === 0) {
                        delete this.curState[e]
                    }
                }
            }
            this._updatePath()
        },
        setComposite: function(f, i, e) {
            var c = this.get(f), h = {}, g;
            if (c) {
                g = this._deserializeComposite(c);
                g[i] = e
            } else {
                g = {};
                g[i] = e
            }
            h[f] = this._serializeComposite(g);
            this.set(h)
        },
        getComposite: function(e, g) {
            var c = this.get(e), f;
            if (!c) {
                return
            }
            f = this._deserializeComposite(c);
            return f[g]
        },
        clearComposite: function(e, h) {
            var c = this.get(e), f;
            if (!c) {
                return
            }
            f = this._deserializeComposite(c);
            delete f[h];
            if ($.isEmptyObject(f)) {
                this.clear(e)
            } else {
                var g = {};
                g[e] = this._serializeComposite(f);
                this.set(g)
            }
        },
        _updatePath: function() {
            var c = this.path + "?" + $.param(this.curState);
            if (window.history && window.history.replaceState && a.settings.isDefault("kg")) {
                window.history.replaceState({}, null , c)
            }
        },
        _deserializeComposite: function(e) {
            var g = {}, h = e.split(","), c;
            for (var f = 0; f < h.length; f++) {
                c = h[f].split(":");
                g[c[0]] = c[1]
            }
            return g
        },
        _serializeComposite: function(c) {
            var e = [];
            for (var f in c) {
                if (c.hasOwnProperty(f)) {
                    e.push(f + ":" + c[f])
                }
            }
            return e.join(",")
        }
    };
    a.history = new b()
}(DDG);
!function(c) {
    var b = c.Models
      , a = b.Base;
    b.Hidden = function(f) {
        a.call(this, f);
        this._vals = {};
        for (var g in c.Data.HiddenFields) {
            var e = c.Data.HiddenFields[g];
            if (window[e]) {
                this.set(e, window[e])
            }
        }
    }
    ;
    b.Hidden.prototype = $.extend({}, a.prototype, {
        set: function(e, f) {
            this._vals[e] = f;
            this.emit("change")
        },
        get: function(e) {
            return this._vals[e]
        },
        clear: function(e) {
            delete this._vals[e];
            this.emit("change")
        },
        toJSON: function() {
            return $.extend({}, this._vals)
        }
    });
    c.hidden = new b.Hidden()
}(DDG);
!function(b) {
    var a = b.Models.Base;
    b.Models.Ads = function(c) {
        a.call(this, c);
        this.ads = [];
        this.defaultAds = [];
        this.answerBarAds = []
    }
    ;
    b.Models.Ads.prototype = $.extend({}, a.prototype, {
        block: function() {
            this.set("blocked", 1)
        },
        isBlocked: function() {
            return !!(this.blocked || !DDG.settings.isDefault("k1"))
        },
        getAds: function() {
            return this.ads.length ? this.ads : this.defaultAds
        },
        hasAds: function() {
            var c = this.getAds();
            return !!(c.length || this.pendingAds)
        },
        hasSiteLinks: function(e) {
            e = e || this.getAds();
            var f = e.length && e[0].n >= 2 ? 1 : 0
              , c = this.pendingAds && this.pendingAdsHaveSitelinks;
            return !!(f || c)
        },
        setPendingAds: function(c) {
            if (this.isBlocked()) {
                return
            }
            this.set({
                pendingAds: 1,
                pendingAdsHaveSitelinks: c
            })
        },
        setDefaultAds: function(c) {
            if (this.isBlocked() || this.ads.length || !c || !c.length) {
                return
            }
            this.set("defaultAds", c.map(function(f) {
                var e = this._makeAffiliateAd(f);
                return {
                    a: f.a.substring(0, 75) + (f.a.length > 75 ? "..." : ""),
                    d: f.d,
                    m: 0,
                    s: e.s,
                    p: 1,
                    c: e.c,
                    u: e.u,
                    h: 0,
                    k: 0,
                    i: f.i,
                    t: f.t.substring(0, 60) + (f.t.length > 60 ? "..." : ""),
                    "IE fix": 1
                }
            }
            .bind(this)))
        },
        setAds: function(c) {
            if (this.isBlocked() || !c || !c.length) {
                return
            }
            this.set("ads", c)
        },
        load: function(e) {
            if (this.loaded || this.isBlocked()) {
                return
            }
            nrj(e);
            var c = "/y.js?x=1&q=" + rq + "&l=" + rl;
            c += ra ? "&a=" + ra : "";
            c += "&safe=" + (!DDG.settings.isDefault("kp") ? -1 : 1);
            nrj(c);
            this.set("loaded", 1)
        },
        setAnswerBarAds: function(f, c, g) {
            if (f === undefined) {
                f = []
            }
            for (var e = 0; e < f.length; e++) {
                f[e].pageNo = c;
                f[e].sl = f[e].l;
                f[e].tab = g
            }
            this.set("answerBarAds", this.answerBarAds.concat(f))
        },
        getAnswerBarAds: function(e, h) {
            var c = [];
            var g = this.answerBarAds;
            for (var f = 0; f < g.length; f++) {
                if (g[f].pageNo === e && g[f].tab === h) {
                    c.push(g[f])
                }
            }
            return (b.device.isMobile && c.length) ? [c[0]] : c
        },
        getRecentAnswerBarAds: function(f) {
            var e = this.answerBarAds
              , g = 0;
            for (var c = 0; c < e.length; c++) {
                if (e[c].tab === f) {
                    g = e[c].pageNo
                }
            }
            return this.getAnswerBarAds(g, f)
        },
        resetAnswerBarAds: function(f) {
            var e = this.answerBarAds
              , g = [];
            for (var c = 0; c < e.length; c++) {
                if (e[c].tab !== f) {
                    g.push(e[c])
                }
            }
            this.answerBarAds = g
        },
        _makeAffiliateAd: function(e) {
            var c = {}
              , f = e.k;
            if (f === "skimlinks") {
                c.c = "http://ad.ddg.gg/?id=40063X1035282&xs=1&url=" + encodeURIComponent(e.c) + "&sref=" + encodeURIComponent("https://duckduckgo.com");
                c.u = "http://ad.ddg.gg/?id=40063X1035282&xs=1&url=" + encodeURIComponent(e.u) + "&sref=" + encodeURIComponent("https://duckduckgo.com")
            } else {
                c.c = "/y.js?u2=" + encodeURIComponent(e.c) + (w.ra ? "&a=" + w.ra : "");
                c.u = "/y.js?u2=" + encodeURIComponent(e.u) + (w.ra ? "&a=" + w.ra : "")
            }
            c.s = f;
            return c
        }
    })
}(DDG);
!function(e) {
    var i = e.Data.Settings.regions, h = "kl", f = "kah", c = "wt-wt", j = 3, a = e.Models.Base, n;
    n = e.Models.Settings.Region = function(o) {
        this.settings = o.settings;
        this.prevRegions = [];
        o.id = o.id || this.settings.get(h);
        o.prevId = o.prevId || this.settings.get(f);
        a.call(this, o);
        this.settings.on("change:" + h, this.setId.bind(this));
        this.settings.on("change:" + f, this.setPrevId.bind(this))
    }
    ;
    n.prototype = $.extend({}, a.prototype, {
        getId: function() {
            return this.id || this.getDefaultId()
        },
        getPrevId: function() {
            return (this.id === this.prevId || this.prevId === this.getDefaultId()) ? null  : this.prevId
        },
        getPrevRegions: function() {
            return this.prevRegions
        },
        getDefaultId: function() {
            return c
        },
        hasRegion: function() {
            return this.getId() && this.getId() !== this.getDefaultId()
        },
        hasPrevRegion: function() {
            return this.getPrevId() && this.getPrevId() !== this.getDefaultId()
        },
        setId: function(s, q, p) {
            if (s === this.id) {
                return p && p()
            }
            var o = this, r;
            this.id = s;
            if (s !== c) {
                r = this.prevRegions.indexOf(s);
                if (r !== -1) {
                    this.prevRegions.splice(r, 1)
                }
                this.prevRegions.unshift(s);
                if (this.prevRegions.length > j) {
                    this.prevRegions.pop()
                }
            }
            if (q && q.saveToSettings) {
                if (!q.dontSavePrev) {
                    this.settings.set(f, this.prevRegions.join(","))
                }
                this.settings.set(h, s, {
                    saveToCloud: true,
                    updateURLParams: true
                }, function() {
                    o.emit("change:id", o.id);
                    p && p()
                })
            } else {
                this.emit("change:id", this.id);
                p && p()
            }
        },
        setPrevId: function(o) {
            if (o) {
                this.prevRegions = o.split(",")
            } else {
                this.prevRegions = []
            }
            this.prevId = this.prevRegions[0]
        },
        setDefault: function() {
            this.setId(this.getDefaultId(), {
                saveToSettings: true
            })
        },
        reset: function(o) {
            this.prevId = null ;
            this.settings.clear(f);
            this.setId(this.getDefaultId(), {
                saveToSettings: true,
                dontSavePrev: true
            }, o)
        },
        disableSuggested: function(o) {
            this.setPrevId(this.getDefaultId());
            this.set({
                suggestedRegion: null 
            });
            this.settings.set(f, this.prevId, {
                saveToCloud: true
            }, o)
        },
        disabledSuggested: function() {
            return this.prevId && this.prevId === this.getDefaultId()
        },
        getName: function(o) {
            o = o || this.getId();
            return l(i[o] || i[this.getDefaultId()])
        },
        getSmallIconURL: function(o) {
            return k(o || this.getId())
        },
        getXSmallIconURL: function(o) {
            return b(o || this.getId())
        },
        getLargeIconURL: function(o) {
            return g(o || this.getId())
        },
        getAll: function() {
            var u = [], q, p = this.getId(), o = function(y, v, x) {
                return {
                    id: y,
                    name: l(v),
                    countryCode: m(y),
                    selected: x
                }
            }
            ;
            var s = this.getPrevRegions();
            if (this.suggestedRegion && s.indexOf(this.suggestedRegion) === -1) {
                s.push(this.suggestedRegion)
            }
            for (var t in i) {
                if (t !== c && s.indexOf(t) === -1) {
                    u.push(o(t, i[t], p === t))
                }
            }
            u.unshift(o(c, i[c], p === c));
            if (s.length && !(s.length === 1 && s[0] === c)) {
                u[0].showDivider = true
            }
            for (var r = s.length - 1; r >= 0; r--) {
                if (s[r] !== c) {
                    u.unshift(o(s[r], i[s[r]], p === s[r]))
                }
            }
            return u
        },
        fetchSuggested: function(o) {
            $.ajax({
                url: "/country.json",
                success: this._onFetchedSuggested.bind(this, o),
                error: function(p) {
                    return o && o(p)
                }
            })
        },
        _onFetchedSuggested: function(x, r) {
            if (!r || !r.country) {
                return x && x()
            }
            var t = r.country.toLowerCase()
              , s = []
              , v = function(z) {
                this.set({
                    suggestedRegion: z
                });
                x && x(null , z)
            }
            .bind(this);
            if (t === "us") {
                return x && x()
            }
            for (var y in i) {
                var o = y.split("-")[0];
                if (o === t) {
                    s.push(y)
                }
            }
            if (!s.length) {
                return x && x()
            }
            if (s.length === 1 || !window.locale) {
                return v(s[0])
            }
            var p = window.locale.split("_")[0];
            for (var q = 0; q < s.length; q++) {
                var u = s[q].split("-")[1];
                if (p === u) {
                    return v(s[q])
                }
            }
            return v(s[0])
        }
    });
    var m = function(o) {
        return o.split("-")[0]
    }
      , k = function(o) {
        return "/assets/flags/" + (DDG.is3x ? "60" : DDG.is2x ? "40" : "20") + "/" + m(o) + ".png?v=4"
    }
      , b = function(o) {
        return "/assets/flags/" + (DDG.is3x ? "48" : DDG.is2x ? "32" : "16") + "/" + m(o) + ".png?v=3"
    }
      , g = function(o) {
        return "/assets/flags/" + (DDG.is3x ? "96" : DDG.is2x ? "64" : "32") + "/" + m(o) + ".png?v=4"
    }
}(DDG);
!function(b) {
    var a = "kae"
      , c = b.Data.Settings[a];
    b.Models.Settings.Themes = {
        KEY: a,
        getAll: function() {
            return DDG.objectToArray(c.values)
        },
        getFeaturedThemes: function() {
            return c.featured.map(function(e) {
                return c.values[e]
            })
        },
        getSettingsForTheme: function(i) {
            var h = c.values[i]
              , e = c.values[c["default"]].settings;
            if (h) {
                return $.extend({}, e, h.settings)
            }
            var f = tinycolor(i);
            if (f.isValid()) {
                var g = f.toHexString();
                return $.extend({}, e, {
                    kj: g,
                    k7: g
                })
            }
            return $.extend({}, e)
        }
    }
}(DDG);
!function(h) {
    var b = "/settings.js"
      , g = "application/json"
      , j = "Error "
      , f = " CloudSave Settings"
      , e = j + "Loading" + f
      , c = j + "Saving" + f
      , i = j + "Deleting" + f
      , a = {
        url: b,
        type: "POST",
        dataType: "json",
        contentType: g,
        processData: false
    };
    h.Models.Settings.CloudSave = {
        keyField: "objectKey",
        isKeyField: function(k) {
            return k === this.keyField || k === "key"
        },
        load: function(k, m) {
            if (!k) {
                return m(e)
            }
            $.ajax({
                url: b + "?key=" + k,
                dataType: "json",
                success: function(n) {
                    m(null , n)
                },
                error: function() {
                    m(e)
                }
            })
        },
        save: function(k, n, m) {
            if (!k || !n) {
                return m && m(c)
            }
            $.ajax($.extend({
                data: JSON.stringify({
                    command: "write",
                    objectKey: k,
                    obj: n
                }),
                success: function() {
                    m && m(null , n)
                },
                error: function() {
                    m && m(c)
                }
            }, a))
        },
        destroy: function(k, m) {
            if (!k) {
                return m(i)
            }
            $.ajax($.extend({
                type: "POST",
                data: JSON.stringify({
                    command: "delete",
                    objectKey: k
                }),
                success: function() {
                    m && m(null , true)
                },
                error: function(n) {
                    m && m(i)
                }
            }, a))
        },
        phraseToKey: function(k) {
            var m = new jsSHA(k,"ASCII")
              , n = m.getHash("SHA-512", "HEX");
            return n
        },
        validatePassPhrase: function(k, n) {
            if (!k) {
                return n(lp("cloudsave", "Please enter a pass phrase"))
            }
            if (k.length < 9) {
                return n(lp("cloudsave", "Pass phrase must be at least 9 characters long"))
            }
            var m = this.phraseToKey(k);
            $.ajax({
                url: b + "?key=" + m,
                dataType: "json",
                success: function() {
                    n(lp("cloudsave", "Pass phrase is already taken."))
                },
                error: function() {
                    n(null , true)
                }
            })
        },
        suggestPassPhrase: function(k) {
            $.ajax($.extend({
                type: "POST",
                data: JSON.stringify({
                    command: "passphrase"
                }),
                success: function(m) {
                    k(null , m.passphrase)
                },
                error: function() {
                    k(true)
                }
            }, a))
        }
    }
}(DDG);
!function(i, o) {
    var j = "January 12, 2025", c = "abcdefghijklmnopqrstuvwxyz", n = o.location.protocol + "//" + o.location.host + "/", k = i.Data.Settings, p = i.Models.Settings.CloudSave, r = i.Models.Settings.Themes, e = i.Models.Base, b;
    b = i.Models.Settings.Settings = function(s) {
        s = s || {};
        if (s.cloudSaveKey) {
            this.setCloudSaveKey(s.cloudSaveKey)
        }
        this._settings = {};
        this._savedSettings = {};
        this._urlSettings = {};
        this.region = new i.Models.Settings.Region({
            settings: this
        });
        this.cloudsave = p;
        this.themes = r;
        this._updateDeviceDependentSettings();
        this._setDefaults();
        this._setFromURLParams();
        this._setFromQuerystring();
        this._backfillGlobals();
        this._setFromCookie()
    }
    ;
    b.prototype = $.extend({}, e.prototype, {
        THEME_KEY: r.KEY,
        AUTOCOMPLETE_KEY: "kac",
        LANGUAGE_KEY: "kad",
        POST_KEY: "kg",
        get: function(s) {
            var t = this._settings[s] || this.getDefault(s);
            t = g(s, t);
            return t
        },
        getDefault: function(s) {
            var t = k[s];
            return t && t["default"]
        },
        isDefault: function(s) {
            return this.get(s) === this.getDefault(s)
        },
        getData: function(u) {
            var v = $.extend({}, k[u]);
            v.id = u;
            if (typeof v.values === "string") {
                v.values = $.extend({}, k[v.values])
            }
            if (v.values && v.order) {
                var x, s = {};
                for (var t = 0; t < v.order.length; t++) {
                    x = v.order[t];
                    if (v.values[x]) {
                        s[x] = v.values[x]
                    }
                }
                for (x in v.values) {
                    if (!s[x]) {
                        s[x] = v.values[x]
                    }
                }
                v.values = s
            }
            return v
        },
        set: function(s, x, u, t) {
            u = u || {};
            x = g(s, x);
            var v = u.saveToCloud && this._cloudSaveKey;
            if (x === undefined || x === "" || x === null  || (this.isDefault(this.THEME_KEY) && x === this.getDefault(s))) {
                this.clear(s, u, t);
                if (s === this.THEME_KEY && u.forceTheme) {
                    this._applyTheme(this.getDefault(s), u)
                }
                return t && t()
            }
            this._settings[s] = x;
            o[s] = x;
            if (u.saveToCookie || typeof u.saveToCookie === "undefined") {
                if (typeof x === "string") {
                    x = x.replace("#", "")
                }
                this._savedSettings[s] = x;
                f(q(s), x, u)
            }
            if (u.updateURLParams && this._urlSettings[s]) {
                this._urlSettings[s] = x
            }
            this.emit("change:" + s, x);
            this.emit("change", s);
            if (s === this.THEME_KEY) {
                this._applyTheme(x, u)
            }
            if (u.saveToCloud && this._cloudSaveKey) {
                this.saveToCloud(t)
            } else {
                t && t()
            }
        },
        setTheme: function(t, s) {
            s = s || {};
            s.forceTheme = true;
            this.set(this.THEME_KEY, t, s)
        },
        setBulk: function(u, t) {
            if (u[this.THEME_KEY]) {
                this.set(this.THEME_KEY, u[this.THEME_KEY], t)
            }
            for (var s in u) {
                if (s !== this.THEME_KEY) {
                    this.set(s, u[s], t)
                }
            }
        },
        setTParam: function(s) {
            this._urlSettings.t = s;
            this.set("t", s, {
                saveToCookie: false
            })
        },
        clear: function(s, u, t) {
            u = u || {};
            o[s] = "";
            delete this._settings[s];
            delete this._savedSettings[s];
            if (u.saveToCookie || typeof u.saveToCookie === "undefined") {
                f(q(s), "", {
                    expires: new Date()
                })
            }
            if (u.updateURLParams) {
                delete this._urlSettings[s]
            }
            if (u.saveToCloud) {
                this.saveToCloud(t)
            }
            this.emit("change:" + s);
            this.emit("change", s)
        },
        clearAll: function() {
            for (var s in this._settings) {
                this.clear(s)
            }
        },
        toQueryString: function(s) {
            return $.param(this.toJSON(s))
        },
        toJSON: function(s) {
            s = s || {};
            if (s.onlyURLParams) {
                return $.extend({}, this._urlSettings)
            }
            return $.extend({}, s.all ? this._settings : this._savedSettings)
        },
        toBookmarkletURL: function(t) {
            var s = this.toQueryString(t);
            return s ? n + "?" + s : n
        },
        toCloudSaveBookmarkletURL: function() {
            var s = this.getCloudSaveKey();
            return s ? n + "?key=" + s : n
        },
        getCloudSaveKey: function() {
            return this._cloudSaveKey
        },
        setCloudSaveKey: function(s) {
            f(p.keyField, s);
            this._cloudSaveKey = s;
            this.emit("change:cloudsave");
            return s
        },
        setCloudSavePassPhrase: function(s) {
            return this.setCloudSaveKey(p.phraseToKey(s))
        },
        loadFromCloud: function(s) {
            s = s || {};
            p.load(this._cloudSaveKey, function(v, u) {
                if (u) {
                    if (s && s.clearAll) {
                        this.clearAll()
                    }
                    this._cloudSettings = u;
                    for (var t in u) {
                        if (this._urlSettings[t]) {
                            delete u[t]
                        }
                    }
                    this.setBulk(u);
                    f(p.keyField, this._cloudSaveKey)
                } else {
                    this.clearCloudSave()
                }
                this.emit(s.initial ? "loaded-initial" : "loaded", v, u)
            }
            .bind(this))
        },
        saveToCloud: function(s) {
            p.save(this._cloudSaveKey, this._savedSettings, s)
        },
        clearCloudSave: function(t, s) {
            if (t && t.deleteFromServer) {
                p.destroy(this._cloudSaveKey, s)
            }
            this.clear(p.keyField);
            this._cloudSaveKey = null ;
            this.emit("change:cloudsave")
        },
        getFontName: function(t) {
            var s = k.fonts[t];
            if (s && s === "Proxima Nova") {
                s = "DDG_ProximaNova, DDG_ProximaNova_UI_1, DDG_ProximaNova_UI_2, DDG_ProximaNova_UI_3, DDG_ProximaNova_UI_4, DDG_ProximaNova_UI_5, DDG_ProximaNova_UI_6"
            }
            return s
        },
        _updateDeviceDependentSettings: function() {
            var t, u, s;
            for (t in k) {
                if (k[t].deviceDependent) {
                    s = k[t].values;
                    if (typeof s === "string") {
                        s = k[s]
                    }
                    for (u in s) {
                        if (!this._isValueValidForDevice(s[u])) {
                            delete s[u]
                        } else {
                            if (!k[t]["default"]) {
                                k[t]["default"] = u
                            }
                        }
                    }
                }
            }
        },
        _isValueValidForDevice: function(v) {
            var u = true, t, s;
            if (v.onDevices) {
                u = false;
                for (t = 0; t < v.onDevices.length; t++) {
                    s = v.onDevices[t];
                    if (i.device[s]) {
                        u = true;
                        break
                    }
                }
            }
            if (u && v.notOnDevices) {
                for (t = 0; t < v.notOnDevices.length; t++) {
                    s = v.notOnDevices[t];
                    if (i.device[s]) {
                        u = false;
                        break
                    }
                }
            }
            return u
        },
        _applyTheme: function(v, t) {
            t = t || {};
            var u = r.getSettingsForTheme(v);
            for (var s in u) {
                if (!t.forceTheme && this._settings[s]) {
                    continue
                }
                this.clear(s);
                this.set(s, u[s] || this.getDefault(s), {
                    saveToCookie: false
                })
            }
        },
        _setDefaults: function() {
            var t = i.device
              , s = 1;
            if ((t.chromeVersion > 20 && !t.isAndroid && !t.isIDevice) || (t.chromeVersion >= 50) || (t.safariVersion > 7 && !t.isAndroid && !t.isWindows && !t.isIDevice) || (t.safariVersion >= 8 && t.isIDevice) || (t.operaVersion > 14 && !t.isAndroid && !t.isIDevice) || t.isFirefox38AndUp) {
                s = -1
            }
            kd = k.kd["default"] = s
        },
        _setFromQuerystring: function() {
            var s, v = /\+/g, u = /([^&=]+)=?([^&]*)/g, y = function(B) {
                return decodeURIComponentSafe(B.replace(v, " "))
            }
            , A = o.location.search + o.location.hash, x = A.substring(1);
            while (s = u.exec(x)) {
                var t = y(s[1])
                  , z = y(s[2]);
                if (z.match(/<|>/)) {
                    continue
                }
                if (p.isKeyField(t) && !this.getCloudSaveKey()) {
                    this._urlSettings[t] = z;
                    this.setCloudSaveKey(z)
                } else {
                    if (t.charAt(0) === "k" || t === "t" || t === "atb") {
                        this._urlSettings[t] = z
                    }
                }
            }
            this.setBulk(this._urlSettings, {
                saveToCookie: false
            })
        },
        _setFromURLParams: function() {
            if (!o.settings_url_params) {
                return
            }
            for (var s in o.settings_url_params) {
                var t = o.settings_url_params[s];
                if (p.isKeyField(s) && !this.getCloudSaveKey()) {
                    this._urlSettings[s] = t;
                    this.setCloudSaveKey(t)
                } else {
                    if (!this._urlSettings[s]) {
                        this._urlSettings[s] = t
                    }
                }
            }
            this.setBulk(this._urlSettings, {
                saveToCookie: false
            })
        },
        _setFromCookie: function() {
            if (!document.cookie) {
                return
            }
            var v = {}
              , u = document.cookie.split("; ");
            for (var t = 0; t < u.length; t++) {
                var x = u[t].split("=");
                if (x && x.length == 2) {
                    var s = h(x[0])
                      , y = a(x[1]);
                    if (p.isKeyField(s)) {
                        this.setCloudSaveKey(y)
                    } else {
                        if (y && !this._urlSettings[s]) {
                            v[s] = y
                        }
                    }
                }
            }
            this.setBulk(v)
        },
        _backfillGlobals: function() {
            var t = 0, s, v;
            for (; t < 10; t++) {
                s = h(t.toString());
                if (!o[s]) {
                    o[s] = ""
                }
            }
            for (t = 0; t < c.length; t++) {
                var u = c.charAt(t);
                s = h(u);
                v = h("a" + u);
                if (!o[s]) {
                    o[s] = ""
                }
                if (!o[v]) {
                    o[v] = ""
                }
            }
        }
    });
    var a = function(s) {
        if (!s) {
            return ""
        }
        if (s.indexOf('"') === 0) {
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        return s ? decodeURIComponent(s.replace(/\+/g, " ")) : ""
    }
      , f = function(s, u, t) {
        t = t || {};
        t.expires = t.expires || new Date(j);
        document.cookie = [encodeURIComponent(s), "=", encodeURIComponent(u), t.expires ? "; expires=" + t.expires.toUTCString() : "", t.path ? "; path=" + t.path : "", t.domain ? "; domain=" + t.domain : "", t.secure ? "; secure" : ""].join("")
    }
      , q = function(s) {
        if (s.charAt(0) === "k") {
            return s.substr(1, s.length)
        } else {
            return s
        }
    }
      , h = function(s) {
        if (p.isKeyField(s)) {
            return s
        }
        return "k" + s
    }
      , m = function(s) {
        var t = k[s];
        return typeof t.values === "object" ? t.values : k[t.values]
    }
      , g = function(t, v) {
        if (!v || !t) {
            return v
        }
        var u = k[t];
        if (u && u.type === "color") {
            var s = m(t);
            v = s[v] || v
        }
        return v
    }
    ;
    i.settings = new b({
        cloudSaveKey: o.key || o[p.keyField]
    })
}(DDG, this);
!function(r) {
    var i, e = {
        s: "set-text--small",
        m: "set-text--medium",
        l: "set-text--larger",
        t: "set-text--largest"
    }, a = {
        w: "set-wide",
        s: "set-super-wide"
    }, p = r.Data.languages.languageFontLookup, h = r.Data.languages.fontSubsets, g = tinycolor;
    r.Utils.Settings.LiveUpdater = i = function(v) {
        this.settings = v.settings;
        this.$html = r.$html || $("html");
        this.$body = $("body");
        this.isHomePage = v.isHomePage;
        var u = this;
        this.settings.on("change", function(x) {
            u[x] && u[x](u.settings.get(x))
        })
    }
    ;
    i.prototype = {
        updateAll: function() {
            for (var v in i.prototype) {
                var u = i.prototype[v];
                if (v.charAt(0) == "k") {
                    this[v](this.settings.get(v))
                }
            }
        },
        loadFonts: function() {
            if (!this.settings.isDefault("kt") && !this.settings.isDefault("ka")) {
                return
            }
            var D = r.Data.languages.resultLanguages || {}
              , z = Object.keys(D) || []
              , u = []
              , v = 0
              , C = 6
              , B = "";
            if (!this.settings.isDefault("kad")) {
                z.unshift(this.settings.get("kad").split("_")[0])
            }
            if (locale) {
                z.unshift(locale.split("_")[0])
            }
            if (z && z.length) {
                for (var A = 0; A < z.length; A++) {
                    var x = z[A];
                    if (p[x] && u.indexOf(x) === -1) {
                        var E = $.isArray(p[x]) ? p[x] : [p[x]];
                        for (var y = 0; y < E.length; y++) {
                            B += r.exec_template("theme_font", {
                                name: "_UI_" + v,
                                lang: E[y]
                            });
                            u = u.concat(h[E[y]]);
                            v++
                        }
                        if (v >= C) {
                            break
                        }
                    }
                }
            }
            this._clearCSS("customFonts");
            if (B) {
                this.$customFontscss = s(B)
            }
        },
        k1: function(v) {
            var u = (v && v == "-1") ? "addClass" : "removeClass";
            this.$html[u]("no-ads")
        },
        km: function(v) {
            var u = (v && v === "m") ? "addClass" : "removeClass";
            this.$html[u]("set-align-center")
        },
        ks: function(x) {
            for (var u in e) {
                this.$html.removeClass(e[u])
            }
            var v = e[x];
            v && this.$html.addClass(v)
        },
        kw: function(v) {
            this.$html.removeClass("set-wide").removeClass("set-super-wide");
            var u = a[v];
            u && this.$html.addClass(u)
        },
        kh: function(u) {
            if (!d.x) {
                return
            }
            if ((!u || u == "1") && !d.location.port && d.location.protocol != "https:" && w.location.hostname.indexOf(".onion") == -1) {
                d.x.action = "https://" + w.location.host + "/"
            } else {
                if ((u && u == "-1") && d.location.protocol != "http:") {
                    d.x.action = "http://" + w.location.host + "/"
                } else {
                    if (this.settings.get("kg") === "p" && ir) {
                        d.x.action = w.location.protocol + "//" + w.location.host + "/"
                    } else {
                        d.x.action = "/"
                    }
                }
            }
        },
        kg: function(u) {
            if (!d.x) {
                return
            }
            d.x.method = (u && u === "p") ? "POST" : "GET";
            if (u && u === "p") {
                d.title = "DuckDuckGo"
            }
            if (ir && u && u === "p") {
                d.x.action = window.location.protocol + "//" + window.location.host + "//"
            }
        },
        ko: function(u) {
            if (this.isHomePage) {
                return
            }
            r.isHeaderFixed = false;
            this.$html.removeClass("set-header--menu");
            this.$html.removeClass("set-header--fixed");
            if (u == "1") {
                r.isHeaderFixed = true;
                this.$html.addClass("set-header--fixed")
            } else {
                if (u == "-2" || u == "-1") {
                    this.$html.addClass("set-header--menu");
                    delete r._header_height
                }
            }
        },
        ku: function(u) {
            $(".results")[k(u)]("set-underlined-links")
        },
        kaf: function(u) {
            $(".results")[k(u)]("full-urls")
        },
        kad: function(u) {
            this.loadFonts()
        },
        kag: function(u) {
            $(".search__button")[k(u)]("search__button--active")
        },
        kt: function(y) {
            this._clearCSS("kt");
            if (!y || y == this.settings.getDefault("kt")) {
                return
            }
            var u = this.settings.getFontName(y) || y
              , x = this.settings.getFontName(this.settings.getDefault("kt"))
              , v = u.match(/Helvetica|Arial|Sans-serif/) ? true : false;
            if (u.match(/Helvetica/)) {
                u += ",sans-serif"
            }
            this.$ktcss = s(r.exec_template("theme_custom_font", {
                fontStack: u + "," + x,
                lightenWeight: v
            }))
        },
        ka: function(x) {
            this._clearCSS("ka");
            if (!x || x == this.settings.getDefault("ka")) {
                return
            }
            var u = this.settings.getFontName(x) || x
              , v = this.settings.getFontName(this.settings.getDefault("ka"));
            if (u.match(/Helvetica/)) {
                u += ",sans-serif"
            }
            this.$kacss = s(".result__a { font-family:" + u + "," + v + ";}")
        },
        kj: function(B) {
            this.$html.removeClass("dark-header");
            this._clearCSS("kj");
            if (!B || B == this.settings.getDefault("kj")) {
                return ""
            }
            var u = B
              , z = f(u)
              , A = z.root.toHsl().l > 0.5
              , v = z.root.toRgbString().replace(/rgb\(|\)/g, "")
              , y = z.root.toHexString()
              , x = "";
            if (!A || z.root.toHsl().s > 0.5) {
                this.$html.addClass("dark-header")
            }
            if (A) {
                x += r.exec_template("theme_header", {
                    color: y,
                    rgb: v,
                    bottomBorder: z.darker[0],
                    topBorder: z.darker[4],
                    link: z.text[2],
                    activeLink: z.text[0]
                });
                if (!this.isHomePage) {
                    x += q(z);
                    x += r.exec_template("theme_header_menu_button", {
                        icon: z.text[3],
                        hoverBg: z.text[2],
                        hoverColor: z.lighter[2]
                    });
                    x += r.exec_template("theme_zci", {
                        color: y,
                        bg: z.lighter[4],
                        detail: z.lighter[2],
                        border: z.darker[0],
                        bottomBorder: z.darker[0],
                        outline: z.darker[5],
                        text: z.text[1],
                        link: z.text[0],
                        activeLink: z.text[0],
                        tileNav: z.darker[2],
                        modeBg: z.darker[2],
                        modeText: z.text[1],
                        accent1: z.darker[3],
                        accent2: z.darker[4],
                        accent3: z.darker[2],
                        accentText: z.text[2],
                        accentText2: z.text[3]
                    })
                }
            } else {
                x += r.exec_template("theme_header", {
                    color: y,
                    rgb: v,
                    bottomBorder: z.darker[0],
                    topBorder: z.darker[2],
                    link: z.text[2],
                    activeLink: z.text[0]
                });
                if (!this.isHomePage) {
                    x += r.exec_template("theme_header_menu_button", {
                        icon: z.text[4],
                        hoverBg: z.text[2],
                        hoverColor: z.darker[2]
                    });
                    if (this.settings.get(this.settings.THEME_KEY) !== "r") {
                        x += t(z);
                        x += j(z);
                        x += r.exec_template("theme_zci", {
                            color: y,
                            bg: z.darker[1],
                            detail: z.darker[2],
                            border: z.darker[3],
                            bottomBorder: z.darker[2],
                            outline: z.lighter[5],
                            text: z.text[1],
                            link: z.text[0],
                            activeLink: z.text[3],
                            tileNav: z.darker[0],
                            modeBg: z.lighter[1],
                            modeText: z.text[4],
                            accent1: z.lighter[2],
                            accent2: z.lighter[3],
                            accent3: z.lighter[7],
                            accentText: z.text[2],
                            accentText2: z.text[3]
                        })
                    }
                }
            }
            this.$kjcss = s(x)
        },
        k7: function(v) {
            this.$html.removeClass("dark-bg");
            this.$k7css && this.$k7css.remove();
            delete this.$k7css;
            if (!v || v == this.settings.getDefault("k7")) {
                return
            }
            var A = g(v).toHexString()
              , x = f(A)
              , D = x.root.toHsl().l > 0.5
              , E = x.text[0]
              , y = x.text[3]
              , C = D ? x.darker[1] : x.lighter[1]
              , z = D ? x.darker[0] : x.lighter[2]
              , u = D ? x.lighter[1] : x.darker[1]
              , B = "";
            B += r.exec_template("theme_background", {
                bg: A,
                text: E,
                textTint: y,
                bgTint: C,
                bgTint2: z,
                bgDark: u,
                isDark: !D
            });
            B += r.exec_template("theme_sidemenu", {
                bg: x.darker[1],
                border: x.darker[2],
                text: x.text[5],
                textTint: y,
                link: x.text[3],
                activeLink: x.text[0]
            });
            if (this.isHomePage) {
                B += r.exec_template("theme_header_menu_button", {
                    icon: D ? x.darker[4] : x.text[4],
                    hoverBg: C,
                    border: C
                });
                if (!D) {
                    B += t(x);
                    B += j(x)
                } else {
                    B += q(x)
                }
            } else {
                B += r.exec_template("theme_result_snippet", {
                    color: y
                });
                B += r.exec_template("theme_result_web_links", {
                    color: y,
                    bgTint: C
                });
                B += r.exec_template("theme_result_highlight", {
                    color: C
                });
                B += r.exec_template("theme_result_message", {
                    textColor: y,
                    bgColor: x.darker[1],
                    borderColor: x.darker[2],
                    linkColor: E
                })
            }
            if (!D || x.root.toHsl().s > 0.5) {
                this.$html.addClass("dark-bg")
            }
            this.$k7css = s(B)
        },
        ky: function(v) {
            this._clearCSS("ky");
            if (is_mobile || !v || v == this.settings.getDefault("ky")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$kycss = s(r.exec_template("theme_result_highlight", {
                    color: u.toHexString()
                }))
            }
        },
        k9: function(x) {
            this._clearCSS("k9");
            if (!x || x == this.settings.getDefault("k9")) {
                return
            }
            var u = g(x);
            if (u.isValid()) {
                var v = u.toHsl().l > 0.5;
                this.$k9css = s(r.exec_template("theme_result_title", {
                    color: u.toHexString(),
                    officialSiteBg: v ? "#fff" : "#666",
                    officialSiteText: v ? "#666" : "#fff"
                }))
            }
        },
        k8: function(v) {
            this._clearCSS("k8");
            if (!v || v == this.settings.getDefault("k8")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$k8css = s(r.exec_template("theme_result_snippet", {
                    color: u.toHexString()
                }))
            }
        },
        kaa: function(z) {
            this._clearCSS("kaa");
            var x = z && z === this.settings.getDefault("kaa")
              , u = this.settings.get("k9") === this.settings.getDefault("k9");
            if (!z || (x && u)) {
                return
            }
            var v = g(z)
              , y = x ? "block" : "none";
            if (v.isValid()) {
                this.$kaacss = s(".result__check { display: " + y + ";} .results a.result__a:visited, .sitelinks__title a.result__a:visited { color:" + v.toHexString() + ";}")
            }
        },
        kx: function(v) {
            this._clearCSS("kx");
            if (!v || v == this.settings.getDefault("kx")) {
                return
            }
            var u = g(v);
            if (u.isValid()) {
                this.$kxcss = s(r.exec_template("theme_result_web_links", {
                    color: u.toHexString()
                }))
            }
        },
        kf: function(u) {
            if (u && u === "-1") {
                $(".result__icon").addClass("is-hidden")
            } else {
                $(".result__icon").removeClass("is-hidden");
                r.ImageLoader.loadMore()
            }
        },
        kai: function(u) {
            if (!u || u == this.settings.getDefault("kai")) {
                $(".result--url-above-snippet").removeClass("result--url-above-snippet");
                $(".result__snippet").each(function(x, y) {
                    var v = $(y)
                      , z = v.parent().find(".result__extras");
                    z.before(v)
                })
            } else {
                $(".result").addClass("result--url-above-snippet");
                $(".result__snippet").each(function(x, y) {
                    var v = $(y)
                      , z = v.parent().find(".result__extras");
                    z.after(v)
                })
            }
        },
        _clearCSS: function(u) {
            var x = "$" + u + "css"
              , v = this[x];
            v && v.remove();
            delete this[x]
        }
    };
    var s = function(u) {
        return $("<div />", {
            html: "&shy;<style>" + u + "</style>"
        }).children().appendTo("body")
    }
      , k = function(u) {
        return (u && u == "1") ? "addClass" : "removeClass"
    }
      , o = function(v, u) {
        v = g(v);
        return g.lighten(v, u * (1 - v.toHsl().l)).toHexString()
    }
      , c = function(v, u) {
        v = g(v);
        return g.darken(v, u * v.toHsl().l).toHexString()
    }
      , n = function(v, u) {
        v = g(v);
        return g.desaturate(v, u * v.toHsl().s).toHexString()
    }
      , b = function(v, u) {
        v = g(v);
        return g.saturate(v, u * (1 - v.toHsl().s)).toHexString()
    }
      , m = function(u, v, A, z) {
        var y = [];
        for (var x = 1; x <= v; x++) {
            y.push(z(u, A * x))
        }
        return y
    }
      , f = function(x) {
        x = g(x);
        var E = x.toHsl().l > 0.5
          , z = g.monochromatic(g.desaturate(x, 80), 20)
          , F = g.mostReadable(x, z)
          , A = g(F).toHsl().l > 0.5
          , v = E ? 10 : 4
          , D = E ? 4 : 10
          , C = x.toHsl().s > 0.5;
        if (E) {
            D += D * x.toHsl().s
        }
        var u = m(F, 10, 5, A ? c : o)
          , B = m(x, 8, D, c)
          , y = m(x, 8, v, o);
        return {
            root: x,
            text: u,
            lighter: y,
            darker: B
        }
    }
      , t = function(u) {
        return r.exec_template("theme_search_bar", {
            bg: u.darker[1],
            border: u.darker[2],
            iconText: "rgba(255,255,255,0.35)",
            buttonBg: u.darker[3],
            inputText: u.text[0]
        })
    }
      , j = function(v) {
        var u = g(v.darker[2]).toRgb();
        return r.exec_template("theme_autocomplete", {
            bg: "rgb(" + u.r + "," + u.g + "," + u.b + ")",
            border: v.darker[0],
            lightText: v.text[1],
            darkText: v.text[5],
            selectedBg: v.lighter[3]
        })
    }
      , q = function(u) {
        return r.exec_template("theme_search_bar", {
            bg: "#fff",
            border: u.darker[2],
            iconText: "rgba(0,0,0,0.35)",
            buttonBg: u.darker[4]
        })
    }
}(DDG);
!function(a) {
    a.Pages.Base = function(b) {
        this.views = {};
        a.keyboard = this.keyboard = new a.Models.Keyboard();
        a.ready(this.ready.bind(this))
    }
    ;
    a.Pages.Base.prototype = {
        ready: function() {
            if (is_mobile) {
                a.addClass("html", a.$html, "is-mobile")
            }
            if (is_mobile_device) {
                a.addClass("html", a.$html, "is-mobile-device")
            } else {
                a.addClass("html", a.$html, "is-not-mobile-device")
            }
            a.settings.on("loaded-initial", this._onSettingsLoaded.bind(this));
            a.settings.loadFromCloud({
                initial: true
            });
            var b = a.querystringParam("t");
            if (b) {
                validMatches = b.match(/^[a-z0-9]+/);
                if (validMatches && validMatches[0]) {
                    b = validMatches[0]
                } else {
                    b = null 
                }
            }
            this.tparam = b;
            this.initHeader();
            this.initSearchBar();
            this.initSideMenu()
        },
        initSearchBar: function() {
            this.searchbar = new a.Views.SearchBar($.extend({
                el: ".js-search-form"
            }, this.searchBarOps || {}));
            this.searchbar.on("focus", function() {
                this.sideMenu && this.sideMenu.hide()
            }
            .bind(this))
        },
        initSideMenu: function() {
            this.sideMenu = new a.Views.SideMenu($.extend({
                pageType: this.pageType,
                appendLinkTo: ".js-header-wrap",
                appendTo: ".js-site-wrapper"
            }, this.sideMenuOps || {}));
            this.sideMenu.on("opened", function() {
                if (this.searchbar && this.searchbar.hasFocus) {
                    this._restoreSearchFocus = true;
                    this.searchbar.unfocus()
                }
            }
            .bind(this));
            this.sideMenu.on("closed", function() {
                if (this._restoreSearchFocus) {
                    this.searchbar.focus();
                    delete this._restoreSearchFocus
                }
            }
            .bind(this))
        },
        initHeader: function() {
            var b = (Modernizr.touch) ? "touchstart" : "click";
            $("#header_wrapper").on(b, function() {
                a.device.scrollTop(0, a.animation_speed)
            })
        },
        notify: function(b) {
            if (!this.notifications) {
                this.notifications = new a.Views.Notification({
                    appendTo: "body"
                })
            }
            this.notifications.flash(b)
        },
        _onSettingsLoaded: function() {
            var b = a.settings.toQueryString({
                onlyURLParams: true
            });
            if (b) {
                kurl += "&" + b
            }
            if (this.liveUpdater) {
                a.settings.updater = new a.Utils.Settings.LiveUpdater({
                    isHomePage: this.pageType === "home",
                    settings: a.settings
                });
                a.settings.updater.updateAll();
                a.settings.on("change:kae", this.notify.bind(this, l("Theme Changed")))
            }
        },
        _checkForForceReload: function() {
            if (a.querystringParam("rld") === "1") {
                a.history.clear("rld");
                return window.location.reload()
            }
        }
    }
}(DDG);
!function(b) {
    var a = b.Pages.Base;
    b.Pages.Static = function(c) {
        a.call(this, c)
    }
    ;
    b.Pages.Static.prototype = $.extend({}, a.prototype, {
        pageType: "static",
        sideMenuOps: {
            hideThemes: true,
            showPress: true
        },
        ready: function() {
            if (location.pathname === "/about") {
                this.sideMenuOps.hideAbout = true
            } else {
                if (location.pathname === "/privacy") {
                    this.sideMenuOps.hidePrivacy = true
                } else {
                    if (location.pathname === "/tour") {
                        this.sideMenuOps.hideTour = true
                    } else {
                        if (location.pathname === "/app") {
                            this.sideMenuOps.hideApp = true
                        } else {
                            if (location.pathname === "/bang") {
                                this.sideMenuOps.hideBang = true
                            }
                        }
                    }
                }
            }
            a.prototype.ready.call(this);
            $(".js-show-header").click(function(c) {
                c.preventDefault();
                c.stopPropagation();
                this.searchbar.focus()
            }
            .bind(this));
            this.$anchors = $(".js-anchor");
            this.$anchorLinks = $(".js-anchor-link");
            this.$anchorLinks.on("click", this._onAnchorLinkClick.bind(this));
            this.$popouts = $(".js-popout");
            this.$popovers = $(".js-popover");
            this._createPopouts();
            this._createPopovers()
        },
        addTo: function(f, c) {
            var g = DDG.Utils.AddTo.getData();
            if (g[f]) {
                var e = new b.Views.AddTo({
                    appendTo: c,
                    data: g[f]
                })
            }
        },
        _onAnchorLinkClick: function(j) {
            j.preventDefault();
            var h = j.currentTarget.hash.substr(1)
              , f = this.$anchors
              , c = "";
            for (var g = 0; f.length > g; g++) {
                if (f[g].name == h || f[g].id == h) {
                    c = $(f[g]);
                    break
                }
            }
            if (c) {
                b.device.scrollTop(c.offset().top, 500)
            }
        },
        _createPopouts: function() {
            this.views.popouts = [];
            var g, c, e, f = 0;
            for (; this.$popouts.length > f; f++) {
                g = $(this.$popouts[f]);
                c = g.find(".js-popout-link");
                e = new b.Views.Modal({
                    $el: g.find(".js-popout-main")
                });
                c.click(e.toggle.bind(e));
                this.views.popouts.push(e)
            }
        },
        _createPopovers: function() {
            this.views.popovers = [];
            var f, c, g, e = 0;
            for (; this.$popovers.length > e; e++) {
                f = $(this.$popovers[e]);
                c = $(f.attr("data-js-selector"));
                g = new b.Views.Modal({
                    $el: f
                });
                c.click(g.toggle.bind(g));
                this.views.popovers.push(g)
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Pages.Base;
    b.Pages.Home = function(c) {
        this._checkForForceReload();
        a.call(this, c);
        window.onpageshow = this._onPageShow.bind(this)
    }
    ;
    b.Pages.Home.prototype = $.extend({}, a.prototype, {
        pageType: "home",
        liveUpdater: true,
        ready: function() {
            a.prototype.ready.call(this);
            if (!is_mobile_device) {
                this.searchbar.focus()
            }
            if (Modernizr.touch && ip) {
                window.onorientationchange = function() {
                    b.$win.scrollTop(0)
                }
            }
            if (w.location.host.toLowerCase() === "start.duckduckgo.com") {
                this.searchbar.$el.attr("action", "//duckduckgo.com/");
                b.settings.set("kak", "-1");
                b.settings.set("kal", "-1")
            }
            this.views.tagline = new DDG.Views.HomepageTagline({
                appendTo: ".js-tag-home"
            });
            if (!b.settings.isDefault("kak") || this.tparam || b.device.isOnion) {
                return
            }
            var f = b.device
              , e = $(".js-foot-home");
            if (f.canAddToBrowser()) {
                var g = locale && locale.substr(0, 2)
                  , c = b.device.isSafari && !b.device.isMobileDevice && g && g.toLowerCase() === "en";
                this.views.badge = new b.Views.AddToBrowserBadge({
                    clickPixel: "atbhc",
                    xPixel: "atbhx",
                    topRight: c,
                    appendTo: c ? ".js-site-wrapper" : e
                });
                b.pixel.fire("atbhi", b.device.pixelBrowserName, this.views.badge.version);
                if (f.isMobile) {
                    e.addClass("show-on-small-screens")
                }
                if (c) {
                    this.searchbar.on("typed", function() {
                        this.views.badge && this.views.badge.hide()
                    }
                    .bind(this))
                }
            }
        },
        _onPageShow: function(c) {
            if (c && c.persisted) {
                this._checkForForceReload()
            }
        }
    })
}(DDG);
!function(b) {
    var a = [];
    b.ready = function(e, c) {
        if ($.isReady) {
            return e()
        }
        if (c) {
            a.unshift(e)
        } else {
            a.push(e)
        }
    }
    ;
    $(document).ready(function() {
        var c;
        while (c = a.shift()) {
            c()
        }
    })
}(DDG);
!function(a) {
    a.services = {
        domain: "duckduckgo.com",
        icons: {
            sub: "icons",
            path: "/ip2/"
        },
        images: {
            sub: "images",
            path: "/iu/"
        },
        autocomplete: {
            path: "/ac/"
        },
        reports: {
            sub: "reports",
            path: "/collect.js?type=feedback"
        },
        getURL: function(f) {
            var e = this[f]
              , c = a.device.isOnion;
            var b = e.path;
            if (!c) {
                b = "//";
                if (e.sub) {
                    b += e.sub + "."
                }
                b += this.domain + e.path
            }
            return b
        }
    }
}(DDG);
DDG.assets_loaded = [];
DDG.templates = {};
DDG.first_result = "r1-0";
DDG.is_deep_started = 0;
DDG.is_deep_loaded = 0;
DDG.is_header_fixed = true;
DDG.first_source = false;
DDG.last_selection = "";
DDG.animation_speed = 300;
DDG.isJSURL = function(a) {
    return !a || a === "javascript:;" || a === "#"
}
;
DDG.detect_intent_link = function(a) {
    var b = 0;
    if (ip && a.hostname == "itunes.apple.com") {
        b = 1
    } else {
        if (ia && a.hostname == "play.google.com") {
            b = 1
        }
    }
    return b
}
;
DDG.get_http_redirect = function(e, f) {
    var b = e.href;
    if ((!kd || kd == 1) && e.href.indexOf("/l/?") == -1 && !DDG.isInternalURL(e.href) && !DDG.detect_intent_link(e)) {
        var c = b.match(/^https/) || DDG.device.isOnion
          , a = c ? "" : "http://r.duckduckgo.com";
        b = a + "/l/?kh=-1&uddg=" + encodeURIComponent(e.href);
        if (!(DDG.device.isEdge && f)) {
            nua("nul", e, 500)
        }
    }
    return b
}
;
DDG.get_query_encoded = function() {
    return rq
}
;
DDG.get_query = function() {
    return decodeURIComponentSafe(rq)
}
;
DDG.get_is_safe_search = function() {
    return DDG.settings.isDefault("kp")
}
;
DDG.stem = function(a) {
    return a.replace(/(?:s)$/, "")
}
;
DDG.get_asset_path = function(b, a) {
    if (Spice && Spice.sharedir_map && Spice.sharedir_map[b]) {
        return "/share/" + Spice.sharedir_map[b].path + "/" + a
    }
    return "/share/spice/" + b + "/" + spice_version + "/" + a
}
;
DDG.get_now = function() {
    var a = new Date();
    return a.getTime()
}
;
DDG.report_bad_query = function() {
    var b = document.getElementById("feedback_modal_title");
    var a = "https://collect.duckduckgo.com/collect.js?type=relevancy&q=" + rq;
    if (rl) {
        a += "&region=" + rl
    }
    if (locale) {
        a += "&language=" + locale
    }
    a += "&safe=" + ((rp && rp == "-1") ? -1 : 1);
    if (DDG.first_source) {
        a += "&source=" + DDG.first_source
    }
    nrj(a);
    b.innerHTML = "Thanks!"
}
;
DDG.get_twitter_image = function(a) {
    if (!a || !a.profile_image) {
        return
    }
    var e = d.createElement("div");
    e.id = "twitter_status";
    var c = d.createElement("a");
    c.href = "https://twitter.com/" + a.user + "/status/" + a.status;
    var b = nur("", "", DDG.getImageProxyURL(a.profile_image), 24, 24);
    if (b) {
        c.appendChild(b);
        e.appendChild(c);
        d.body.appendChild(e)
    }
}
;
DDG.display_twitter_status = function() {
    if (is_twitter) {
        var b = new RegExp("^(.*)/(.*)$");
        if (b.test(is_twitter)) {
            var c = RegExp.$1;
            var a = RegExp.$2;
            if (c && a) {
                nrj("/tw.js?user=" + c + "&status=" + a + "&callback=DDG.get_twitter_image")
            }
        }
    }
}
;
DDG.$win = $(window);
DDG.$doc = $(document);
DDG.$html = $("html");
DDG._$cache = {};
DDG.$ = function(a) {
    return DDG._$cache[a.toString()] || (DDG._$cache[a.toString()] = $(a))
}
;
DDG._$classCache = {};
DDG.addClass = function(c, b, a) {
    DDG._$classCache[c + a] = true;
    b.addClass(a)
}
;
DDG.removeClass = function(c, b, a) {
    delete DDG._$classCache[c + a];
    b.removeClass(a)
}
;
DDG.hasClass = function(b, a) {
    return DDG._$classCache[b + a]
}
;
DDG.toggleClass = function(c, b, a) {
    if (DDG.hasClass(c, a)) {
        DDG.removeClass(c, b, a)
    } else {
        DDG.addClass(c, b, a)
    }
}
;
DDG.get_header_height = function() {
    return typeof DDG._header_height !== "undefined" ? DDG._header_height : (DDG._header_height = DDG.$("#header_wrapper").outerHeight())
}
;
DDG.normalize_official = function(a) {
    var b = /^https?:\/\/(?:www.|)([^\/]+)\/?/;
    a = a.replace(b, "$1");
    return a
}
;
DDG.make_official = function() {
    var c = DDG.duckbar.isOfficialSiteValid();
    if (!c && !DDG.is_zci_official_site) {
        return
    }
    if (DDG.duckbar.activeTabId !== "about") {
        return
    }
    if ($(".badge--official").length) {
        $(".badge--official").removeClass("is-hidden");
        return
    }
    var b = $("#r1-0").find(".result__a");
    if (!b.length) {
        return
    }
    var a = b.attr("href")
      , f = b.html()
      , g = f && f.split(/[\-|]/);
    if (!a || !c || !f) {
        return
    }
    a = DDG.normalize_official(a);
    c = DDG.normalize_official(c);
    if (a !== c) {
        return
    }
    var h = g[0];
    if (h.length > 53) {
        h = h.slice(0, 49) + "... "
    } else {
        h += " "
    }
    b.html(h);
    var e = l("Official Site");
    b.parent().before('<i class="result__badge  badge--official" title="' + e + '">' + e + "</i>")
}
;
DDG.add_official_snippet = function(h, a, i, e, b) {
    if (!$(".badge--official").length) {
        return
    }
    var j = $("#r1-0");
    if (!j.length) {
        return
    }
    if (DDG.settings.get("kf") == "-1") {
        j.find(".result__icon").addClass(".is-hidden")
    }
    var f = j.find(".result__a").attr("href");
    f = DDG.normalize_official(f);
    h = DDG.normalize_official(h);
    if (h != f) {
        return
    }
    var g = j.find(".result__snippet");
    if (g.length) {
        return
    }
    var c = j.find(".result__extras");
    if (!c.length) {
        return
    }
    j.attr("data-domain", b);
    div = d.createElement("div");
    $(div).addClass("result__snippet");
    $(div).html(a);
    if (!DDG.settings.isDefault("kai")) {
        $(div).insertAfter(c);
        c.parent().addClass("result--url-above-snippet")
    } else {
        $(div).insertBefore(c)
    }
    DDG.add_sitelinks(j.parent()[0], i, e, b)
}
;
DDG.add_sitelinks = function(f, e, a, c) {
    if (a && a[e] && a[e]["l"]) {
        a[e]["l"].forEach(function(m, i, h) {
            var n = i % 2 === 0;
            var g = i === 0;
            var k = i === h.length - 1;
            var j = (k && n && h.length > 1);
            m.id = "r1-" + (i + 1);
            m.nextRow = (n && !g && !k) || (j);
            m.domainName = c
        });
        var b = DDG.$exec_template("sitelinks", {
            links: a[e]["l"]
        });
        f.appendChild(b[0]);
        DDG.search.set("hasSiteLinks", true);
        DDG.pixel.fire("dli", {
            d: DDG.device.pixelId
        })
    }
}
;
DDG.touchOrClick = function(f, e, c) {
    c = typeof e === "object" ? e : c || {};
    e = typeof e === "function" ? e : null ;
    var a, b = c.namespace || "touchOrClick";
    f = (typeof f === "string") ? $(f) : f;
    if (e) {
        if (Modernizr.touch) {
            f.on("touchstart." + b, function(g) {
                a = DDG.get_now();
                e(g)
            });
            f.on("click." + b, function(h) {
                var g = DDG.get_now();
                if (!a || (g - a) > 1000) {
                    a = 0;
                    return e(h)
                }
                a = 0;
                h.preventDefault();
                h.stopPropagation();
                return false
            })
        } else {
            f.on("click." + b, e)
        }
    } else {
        if (Modernizr.touch) {
            f.off("touchstart." + b);
            f.off("click." + b)
        } else {
            f.off("click." + b)
        }
    }
}
;
DDG.tap = function(c, k, a) {
    a = a || {};
    c = typeof c === "string" ? $(c) : c;
    var h, g, n, m, b, f, j = a.pxThreshold || 20, e = a.namespace || "tap", i = function() {
        h = g = n = m = b = f = 0
    }
    ;
    if (k) {
        c.on("touchstart." + e, function(o) {
            i();
            var p = o.originalEvent.touches && o.originalEvent.touches[0];
            if (p) {
                b = DDG.get_now();
                h = p.clientX;
                g = p.clientY
            }
        });
        c.on("touchmove." + e, function(o) {
            var p = o.originalEvent.touches && o.originalEvent.touches[0];
            if (p) {
                n = p.clientX;
                m = p.clientY
            }
        });
        c.on("touchend." + e, function(o) {
            if ((h && g && !(n && m)) || (Math.abs(n - h) < j && Math.abs(m - g) < j)) {
                f = true;
                k.call(this, o)
            }
        });
        c.on("click." + e, function(o) {
            if (f) {
                o.preventDefault();
                o.stopPropagation();
                i();
                return false
            } else {
                if (a.fallbackToClick) {
                    i();
                    k.call(this, o)
                }
            }
        })
    } else {
        c.off("touchstart." + e);
        c.off("touchmove." + e);
        c.off("touchend." + e);
        c.off("click." + e)
    }
}
;
function nutp(b) {
    var a = b.split("_");
    DDG.pixel.fire.apply(DDG.pixel, a);
    a.unshift("old");
    DDG.pixel.fire.apply(DDG.pixel, a)
}
function nua(i, j, h, g, b, e, c, a) {
    if (!b) {
        b = tr.length;
        tr[b] = j
    }
    if (!h) {
        h = 10
    }
    if (!g) {
        setTimeout(i + "(tr[" + b + "]," + e + "," + c + "," + a + ");", h)
    } else {
        if (!tsl) {
            tsl = ts.length;
            setTimeout(i + "(tr[" + b + "]," + e + "," + c + "," + a + ");tsl=0", 10)
        } else {
            setTimeout("nua(" + i + ",0,1," + b + "," + e + "," + c + "," + a + ")", 100)
        }
    }
}
function nkdc(a) {
    var b;
    if (a) {
        b = a.ctrlKey
    }
    return b
}
function nkdm(a) {
    var b;
    if (!ie && a) {
        b = a.metaKey
    }
    return b
}
function nkdt(a) {
    var b;
    if (a) {
        b = a.altKey
    }
    return b
}
function nkds(a) {
    var b;
    if (a) {
        b = a.shiftKey
    }
    return b
}
function nrl(b, a) {
    var c, e;
    b = b || window.event;
    fl = 1;
    c = nkdc(b) || nkdm(b) || "";
    if (!c && kn && kn == "1" && a && a.href && !DDG.isInternalURL(a.href)) {
        c = 1
    }
    if (!c && (nkds(b) || fm || b.button && ((!ie || ie9 || ie10p) && b.button == 1 || ie && b.button == 4))) {
        c = 1
    }
    if (c) {
        a.href = DDG.get_http_redirect(a);
        if (nkds(b) && !ie && !is) {
            nua("nug", a.href, "", "", "", c);
            return false
        } else {
            return true
        }
    } else {
        e = DDG.get_http_redirect(a);
        nua("nug", e);
        return false
    }
}
function nul(b) {
    var a, c;
    var a = b.href.indexOf("/l/?kh=-1&uddg=");
    if (a != -1) {
        c = decodeURIComponent(b.href.substring(a + 15))
    }
    if (c) {
        b.href = c
    }
    fl = 0
}
function nuo(e, c) {
    DDG.device.scrollTop(e || 0, c)
}
function nrg(h, b, e, f, c) {
    var a, g;
    if (!b) {
        b = 0
    }
    e = e || window.event;
    if (!c) {
        c = h.getElementsByTagName("a")[0]
    }
    if (!f) {
        f = nkdc(e) || nkdm(e) || fn
    }
    if (!f && kn && kn == "1") {
        f = 1
    }
    if (is_mobile_device) {
        if (rc && rc != h) {
            nro(rc)
        }
        nrv(h);
        rc = h
    }
    if (!DDG.isJSURL(c.href)) {
        h && nhr(h.id);
        if (fl) {
            fl = 0
        } else {
            fl = 1;
            a = DDG.get_http_redirect(c);
            if (f) {
                nug(a, f)
            } else {
                nua("nug", a, "", "", "", f)
            }
        }
    } else {
        if (fl) {
            fl = 0
        } else {
            if (DDG.isJSURL(c.href)) {
                c.onclick()
            }
        }
    }
}
function nug(e, g) {
    var b, c, f, a;
    fl = 0;
    fn = 0;
    a = "";
    if (window.getSelection) {
        a = window.getSelection().toString()
    } else {
        if (document.selection) {
            a = document.selection.createRange();
            a = a.text
        }
    }
    var h = a == DDG.last_selection ? 1 : 0;
    DDG.last_selection = a;
    if (!h) {
        return false
    }
    if (g) {
        window.open(e)
    } else {
        if (w.postMessage && !is && !ip && !is_konqueror && kg != "p" && (!kd || kd == 1)) {
            b = document.getElementById("iframe_hidden");
            b.contentWindow.postMessage("ddg:" + e, location.protocol + "//" + location.hostname)
        } else {
            if ((ie || ip || ir || is || im) && e.indexOf("http") != -1 && kg != "p" && (!kd || kd == 1)) {
                if (d.getElementById("iframe_hidden")) {
                    d.body.removeChild(d.getElementById("iframe_hidden"))
                }
                c = "<html><head><meta name='referrer' content='origin'></head><body><script language='JavaScript'>parent.window.location.href=\"" + e + '";<\/script></body></html>';
                b = d.createElement("iframe");
                b.id = "iframe_hidden";
                d.body.appendChild(b);
                f = b.document;
                if (b.contentDocument) {
                    f = b.contentDocument
                } else {
                    if (b.contentWindow) {
                        f = b.contentWindow.document
                    }
                }
                f.open();
                f.writeln(c);
                f.close()
            } else {
                w.location = e
            }
        }
    }
}
function nrv(a, h, q, c) {
    if (!a) {
        return false
    }
    var g, n, r, o, m, k, f, j, p, e;
    g = a;
    a = a.parentNode;
    if (g.id == "r1-" + (parseInt(r1c) - 1)) {
        if (!il && nrb && (!kc || kc != "-1")) {
            nrb("", 1)
        }
    }
    if (!h) {
        var b = $(g);
        if (!b.hasClass("highlight")) {
            b.addClass("highlight");
            if (b.hasClass("highlight_sponsored")) {
                b.addClass("highlight_sponsored_hover")
            }
            n = nun(g);
            o = b.offset().top;
            m = DDG.device.scrollTop();
            if (c && n && !fq && o > m) {
                n.focus();
                n.onclick = function(i) {
                    return nrl(i, this)
                }
            }
        }
    }
}
function nun(a) {
    return a.getElementsByTagName("a")[0]
}
function nro(j) {
    var h, f, e, b, g, c;
    if (!j) {
        return false
    }
    var a = $(j);
    if (a.hasClass("highlight")) {
        a.removeClass("highlight");
        if (a.hasClass("highlight_sponsored_hover")) {
            a.removeClass("highlight_sponsored_hover")
        }
        h = nun(j);
        if (h && !fq) {
            h.blur()
        }
    }
}
function nrm(p, k) {
    var n, g, f, c, e, a, u, m, t, i, q, j, h, s, v, r, b, o;
    if (fq) {
        return false
    }
    if (fo) {
        setTimeout("nrm(" + p + ",'" + k + "')", 100);
        return false
    }
    fo = 1;
    n = new RegExp("r(\\d+)-(\\d+)");
    g = new RegExp("rl([ei])(\\d+)-(\\d+)");
    f = new RegExp("rld-(\\d+)");
    if (k) {
        if (n.test(k)) {
            c = RegExp.$1 || 0;
            e = RegExp.$2 || 0
        } else {
            if (k == "zero_click_wrapper") {
                c = 1;
                e = -1
            } else {
                fo = 0;
                return false
            }
        }
    } else {
        if (rc && rc.id == "zero_click_wrapper") {
            c = 1;
            e = -1
        } else {
            if (rc && n.test(rc.id)) {
                c = RegExp.$1 || 0;
                e = RegExp.$2 || 0
            } else {
                if (rc && g.test(rc.id)) {
                    c = rs ? 1 : 2;
                    q = 1
                } else {
                    if (rc && f.test(rc.id)) {
                        c = 1;
                        q = 1
                    } else {
                        rc = d.getElementById(DDG.first_result);
                        if (!rc) {
                            rc = d.getElementById("zero_click_wrapper")
                        }
                        if (!rc) {
                            fo = 0;
                            return false
                        } else {
                            e = 0;
                            c = 1
                        }
                    }
                }
            }
        }
    }
    switch (p) {
    case 1:
        if (rc && rc.id && rc.id == DDG.first_result && !$(rc).hasClass("highlight")) {} else {
            e++
        }
        break;
    case 2:
        e--;
        break;
    case 3:
        c++;
        e = 0;
        break;
    case 4:
        c--;
        e = 0;
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        e++;
        break;
    default:
        e++
    }
    m = "r" + c + "-" + e;
    if (e <= -1) {
        m = "zero_click_wrapper"
    }
    t = d.getElementById(m);
    i = 0;
    if (k) {
        i = d.getElementById(k)
    }
    if (p == 1 && c == 2 && !t && r1c) {
        m = DDG.first_result;
        t = d.getElementById(m)
    }
    v = DDG.device.scrollTop();
    if (p == 1) {
        if ($("#" + m).length > 0) {
            s = $("#" + m).offset().top
        }
        if (s && (s < v || s > (v + viewport_height))) {
            a = 0;
            while (a > -1) {
                u = d.getElementById("r1-" + a);
                if (!u) {
                    break
                }
                b = $(u);
                s = b.offset().top;
                o = 10;
                r = b.height() + o;
                if (s - r < v && v !== 0) {
                    a++
                } else {
                    t = u;
                    break
                }
            }
        }
    }
    if (p == 2 && m !== "zero_click_wrapper") {
        if ($("#" + m).length > 0) {
            s = $("#" + m).offset().top
        }
        if (s < v || s > (v + viewport_height)) {
            a = r1c - 2;
            while (a > 0) {
                u = d.getElementById("r1-" + a);
                if (!u) {
                    break
                }
                b = $(u);
                s = b.offset().top;
                o = 10;
                r = Math.max(b.height(), 90) + o;
                if (s + r > (v + viewport_height)) {
                    a--
                } else {
                    t = u;
                    break
                }
            }
        }
    }
    if (i && !t && p == 7 && i.nextSibling && i.nextSibling.firstChild) {
        if (i.nextSibling.firstChild.onclick) {
            i.nextSibling.firstChild.onclick()
        }
        fo = 0;
        return
    } else {
        if (!i && !t && p == 7 && rc && rc.nextSibling && rc.nextSibling.firstChild) {
            if (rc.nextSibling.firstChild.onclick) {
                rc.nextSibling.firstChild.onclick()
            }
            fo = 0;
            return
        }
    }
    if ((m == "zero_click_wrapper") && $(t).css("display") == "none") {
        fo = 0;
        return
    }
    if (q) {
        switch (p) {
        case 1:
            if (c == 2) {
                t = rc.nextSibling.nextSibling;
                if (!t) {
                    m = DDG.first_result;
                    t = d.getElementById(m)
                } else {
                    if ($(t).css("display") == "none") {
                        t = t.nextSibling.firstChild;
                        if (!t.id && t.nextSibling) {
                            t = t.nextSibling
                        }
                    }
                }
            } else {
                if (c == 1 && rc.nextSibling.nextSibling) {
                    t = rc.nextSibling.nextSibling.nextSibling
                } else {
                    if (1) {
                        m = DDG.first_result;
                        t = d.getElementById(m)
                    } else {
                        t = rc.nextSibling.firstChild
                    }
                }
            }
            break;
        case 2:
            t = rc.previousSibling.previousSibling;
            if ($(t).css("display") == "none") {
                t = t.nextSibling.lastChild
            }
            break;
        case 4:
            break;
        case 7:
            if (rc.nextSibling.nextSibling) {
                t = rc.nextSibling.nextSibling.nextSibling
            } else {
                t = rc.nextSibling.firstChild
            }
            break;
        default:
            fo = 0;
            return false
        }
    }
    if (t) {
        if (c == 1 && g.test(t.id)) {
            t = t.nextSibling.firstChild
        }
        if (p != 7) {
            if (rc) {
                nua("nro", rc)
            }
        }
        if (p != 5 && (c == 2 || rs) && $(t.parentNode).css("display") == "none") {
            j = t;
            while (j.parentNode.id != "zero_click_topics" && j.parentNode.id != "links" && j.parentNode.id != "content") {
                j = j.parentNode;
                if (!h && $(j).css("display") == "block") {
                    h = j
                }
            }
            if (h && q) {
                t = j.nextSibling.nextSibling
            } else {
                if ($(j).css("display") == "none") {
                    t = j.previousSibling
                } else {
                    if (j.nextSibling && $(j.nextSibling).css("display") == "block") {
                        t = h.lastChild.previousSibling
                    } else {
                        if (p == 2 && j.previousSibling) {
                            t = j.previousSibling
                        } else {
                            if (p == 1 && j.nextSibling && $(j.nextSibling).css("display") == "none") {
                                t = j.nextSibling.nextSibling.firstChild.nextSibling
                            } else {
                                if (p == 1 && !j.nextSibling) {
                                    t = j.previousSibling
                                }
                            }
                        }
                    }
                }
            }
            if (g.test(t.id) && rs && RegExp.$1 == "e") {
                t = t.nextSibling.firstChild
            }
        }
        nua("nrv", t, 0, 1, 0, p == 7 ? 1 : 0, p == 5 || p == 7 ? 1 : 0, 1);
        if (p != 7) {
            rc = t
        }
        if (p != 7 && rc && rc.id) {
            if (fk && (e > 6 + slo || p == 2)) {
                if (!io) {
                    nua("nrs", rc, 0, 1, 0, 1, p == 5 ? 0 : p == 1 ? 1 : -1)
                } else {
                    nrs(rc, 1, p == 5 ? 0 : p == 1 ? 1 : -1)
                }
            } else {
                if (!io) {
                    nua("nrs", rc, 0, 1)
                } else {
                    nrs(rc, 0, 0)
                }
            }
        }
    } else {
        if (c == 1 && m != "zero_click_wrapper" && !ieof && (!rs || !it) && ++ci < 20) {
            nrv(d.getElementById("r1-" + parseInt(r1c - 1)), 1);
            setTimeout("nrm(" + p + ",'" + k + "')", 100)
        }
    }
    if (io && p == 1 && nrb) {
        nrb()
    }
    fo = 0
}
function nrs(b, f, e) {
    var g, a, c, i, h;
    g = $(b).offset().top;
    c = $(b).outerHeight();
    a = DDG.device.scrollTop();
    h = viewport_height / 2;
    if (!c || g == a) {
        return
    }
    if (f || g + c + 10 > viewport_height + a || g - 10 < a) {
        i = g - h;
        if (!e || e == 1 && g - a > h || e == -1 && g - a < h) {
            DDG.device.scrollTop(i)
        }
    }
}
function nki(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (rii) {
        nrm(5, rii)
    }
}
function nkr(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1
}
function nkda(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(1)
}
function nkua(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    nrm(2)
}
function nke(c) {
    if (fq) {
        if ($("#bang").css("display") == "block") {
            nbb(d.getElementById("bang"))
        }
        return false
    }
    if (c && (nkdc(c) || nkdm(c) || nkds(c) || nkdt(c) || fa)) {
        return false
    }
    fk = 1;
    if (rc && (!kn || kn != "1")) {
        var b = new RegExp("rl([ei])(\\d+)-(\\d+)");
        var a = new RegExp("^r2-(\\d+)$");
        if (rc.id && b.test(rc.id)) {
            if (a.test(rc.nextSibling.firstChild.id)) {
                rc = rc.nextSibling.firstChild
            } else {
                rc = rc.nextSibling.firstChild.nextSibling
            }
            nrv(rc)
        } else {
            rc.click()
        }
    }
}
function nko(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (rc) {
        rc.click()
    }
}
function nkt(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    rc = "";
    DDG.device.scrollTop(0)
}
function nkd(b) {
    if (fq) {
        return false
    }
    if (b && (nkdc(b) || nkdm(b) || nkds(b) || nkdt(b) || fa)) {
        return false
    }
    fk = 1;
    var a = rc.getElementsByTagName("a");
    nrg(rc, null , null , null , a[a.length - 1])
}
function nkn(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    fn = 1;
    if (rc) {
        rc.click()
    }
}
function nkm(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (d.getElementById(DDG.first_result)) {
        nrm(5, DDG.first_result)
    }
}
function nkex(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1
}
function nksb(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1;
    if (!il && nrb) {
        nrb()
    }
}
function nksp(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || nkdt(a) || fa)) {
        return false
    }
    fk = 1
}
function nks(a) {
    if (fq) {
        return false
    }
    if (a && (nkdc(a) || nkdm(a) || nkds(a) || fa)) {
        return false
    }
    fk = 1;
    setTimeout("d.x.q.focus()", 10);
    setTimeout("d.x.q.select()", 15);
    if (ko && ko == "s") {
        setTimeout(function() {
            DDG.device.scrollTop(0)
        }, 10)
    }
}
function nhs(a) {
    nrm(5, a)
}
function nhr(a) {
    d.getElementById("state_hidden").value = a
}
function nrp() {}
function nrn(av, I) {
    if (!av || !I) {
        return
    }
    var N, ar, an, al, ak, aj, K, h, C, B, A, v, m, Q, ac, k, aq, ah, s, r, au, ap, ao, V, c, t, ag, aa, Z, X, D, p, P, O, H, Y, F, U, ab, ad, ae, M, J, ai, b;
    s = new RegExp("^.*?//(?:ww[\\dw]+s?\\.|)([^/?:#]+)");
    B = A = v = ab = ad = "";
    switch (av) {
    case "d":
        aq = "1";
        k = d.getElementById("links");
        ah = r1c;
        break;
    case "a":
        ah = r3c;
        aq = "a";
        if (!ah) {
            k = d.getElementById("ads")
        } else {
            var W = DDG.page.ads.hasSiteLinks(I) ? "has-ad--sitelinks" : ""
              , a = I.length > 1 && !DDG.device.isMobile ? "has-ad--x2" : ""
              , e = $('<div class="results--ads has-ad ' + a + " " + W + '"></div>');
            $("#links").append(e);
            k = e[0]
        }
        break
    }
    D = I.length;
    if (av == "a" && DDG.page.ads.isBlocked()) {
        return
    }
    if (av == "a" && !DDG.page.ads.hasAds() && DDG.is_deep_loaded && DDG.get_now() - DDG.is_deep_loaded > 500) {
        return
    }
    if (av == "a" && !ah) {
        DDG.page.ads.setAds(I)
    }
    if (av == "a") {
        DDG.pixel.fire("ad", I[0].s || "default")
    }
    if (rq.indexOf("site%3A") != -1) {
        iqs = 1
    }
    ae = av == "d" && rds == 30 ? 1 : 0;
    if (ae) {
        DDG.page.onDeepStarted()
    }
    var n = "";
    var S = DDG.duckbar.maybeOfficialSite();
    if (av == "d" && ae && (r1c || rad)) {
        for (ap = 0; ap < ah; ap++) {
            var T = $("#r1-" + ap + " a");
            for (ao = 0; ao < T.length; ao++) {
                if ($(T[ao]).hasClass("result__url")) {
                    if (s.test(T[ao].href)) {
                        rd[RegExp.$1] = T[ao].href;
                        var G = $(T[ao]).find(".result__url__domain").text();
                        if (ap == 0) {
                            n = G;
                            rd[G] = 1
                        }
                        if (kf && (kf == "w" || kf == "fw" || kf == "b") && ae && !rs) {
                            ad += (ad ? "," : "") + RegExp.$1 + ":r1-" + ap
                        }
                    }
                }
            }
        }
    }
    if (!D && (av == "r" && rsc <= 0 || av == "d" && rv == "d")) {
        if (av == "d" && !r1c) {
            ar = d.getElementById("rfd");
            $(ar).css("display", "none")
        }
        av = "r";
        I.x = new Array();
        I.x["t"] = "EOH"
    }
    H = 0;
    if (av == "d" && (I[D - 1]["t"] == "EOP" || I[D - 1]["t"] == "EOF")) {
        H = 1;
        ieof = 1;
        il = 1;
        if (I[D - 1]["t"] == "EOP") {
            H = 2
        }
        if (D === 1 && ae) {
            DDG.pixel.fire("nre")
        }
    }
    if (av == "d") {
        $(".js-results-loading").remove();
        if (I.length > 1) {
            $(".js-result-sep.is-hidden").removeClass("is-hidden")
        }
    }
    V = c = p = P = O = 0;
    for (var N = 0; N < I.length; N++) {
        V++;
        F = 0;
        if (!I[N]) {
            continue
        }
        if (!b && N > 0) {
            slo = $(".sitelinks_td").length;
            b = true
        }
        if (!DDG.settings.isDefault("k1") && I[N]["p"]) {
            continue
        }
        if (av == "a" && is_mobile && N > 0) {
            continue
        }
        if (!J && av == "d" && I[N]["k"]) {
            J = N
        }
        if (V == 1 && rv == "i") {
            setTimeout('top.location.replace("' + I[N]["u"] + '")', 100);
            return
        }
        var am = I[N]["u"] || "";
        var R = I[N]["d"] || "";
        R = R.split("/");
        var t = R.shift() || "";
        var ag = R.join("/") || "";
        Y = 0;
        if (av == "d" && I[N]["t"] == "EOP") {
            Y = 1;
            continue
        } else {
            if (av == "d" && I[N]["t"] == "EOF") {
                Y = 1;
                continue
            }
        }
        if (av == "d" && !Y && !I[N]["p"]) {
            if (!t || ((n || S) && rd[t]) || rd[I[N]["u"]]) {
                if (n && rd[t]) {
                    DDG.add_official_snippet(I[N]["c"], I[N]["a"], N, I, t)
                }
                if (c == 0 && V == D && !ae) {
                    nrj("/l.js?q=" + rq);
                    H = 1
                }
                if (V == D) {
                    F = 1
                } else {
                    continue
                }
            } else {
                rd[t] = I[N]["u"];
                rd[I[N]["u"]] = I[N]["u"]
            }
            if (N == (I.length - 1) && I[N]["n"]) {
                DDG.page.deepNextURL = I[N]["n"]
            }
        }
        if (rv == "d" && av == "d") {
            rsc++;
            nrj("/r.js?u=" + encodeURIComponent(I[N]["c"]) + "&q=" + rq + (!DDG.settings.isDefault("kp") ? "&p=1" : ""));
            if (ah != 0) {
                continue
            }
        }
        if (!F) {
            c++;
            ar = d.createElement("div");
            ar.id = "r" + aq + "-" + (ah + ((ah === 0) ? 0 : slo));
            ah++;
            $(ar).addClass("result results_links" + (av == "d" && !I[N]["h"] ? "_deep" : "") + " highlight_" + av);
            if (av == "d") {
                var o = I[N]["t"] + " " + I[N]["a"];
                if (kf && (kf == "w" || kf == "fw" || kf == "b") && t && !Y) {
                    ad += (ad ? "," : "") + t + ":" + ar.id
                }
            }
            if (av == "i" && !rii) {
                rii = ar.id
            } else {
                if (av == "n" && !rin) {
                    rin = ar.id
                } else {
                    if (av == "t" && !rir) {
                        rir = ar.id
                    }
                }
            }
            ar.setAttribute("data-domain", t)
        }
        if (I[N]["da"]) {
            DDG.search.deepAnswerIAs["r" + (ah - 1)] = I[N]["da"]
        }
        if (av == "d" && !H && V == D && !p || av == "r" && rsc <= 0) {
            an = d.createElement("div");
            $(an).addClass("result  result--more");
            h = d.createElement("a");
            h.href = "javascript:;";
            h.onclick = function() {
                nsr(this)
            }
            ;
            if (av == "d" || av == "r") {
                h.className = "result__a";
                if (av == "d") {
                    an.id = "rld-" + ++rdc
                } else {
                    if (av == "r") {
                        an.id = "rle0-1"
                    }
                }
                if (av == "r" && !r1hc) {
                    h.appendChild(d.createTextNode(l("Get Web links") + "..."))
                } else {
                    h.appendChild(d.createTextNode(l("Load More")));
                    h.className = "result--more__btn  btn  btn--alt  btn--full"
                }
            } else {
                if (av == "t") {
                    an.id = "rli1-" + ++rtc;
                    h.appendChild(d.createTextNode(l("More Related Topics") + "..."))
                }
            }
            an.appendChild(h);
            if (av == "r" && !F) {
                p = an;
                O = al
            } else {
                if (av == "r") {
                    k.appendChild(al)
                }
                k.appendChild(an)
            }
            an = d.createElement("div");
            if (av == "d") {
                an.id = "rrd-" + rdc
            } else {
                if (av == "r") {
                    an.id = "rre0-1"
                } else {
                    if (av == "t") {
                        an.id = "rri1-" + rtc
                    }
                }
            }
            $(an).css("display", "none");
            if (av == "r") {
                al = d.createElement("div");
                al.id = "r" + aq + "-" + ah++;
                an.appendChild(al)
            }
            if (av == "r" && !F) {
                P = an
            } else {
                k.appendChild(an);
                k = an;
                p = 1;
                if (av == "r" && ah <= 6) {
                    nua("nsr", k.previousSibling.firstChild, 0, 0, 0, 1)
                }
            }
        }
        if (F) {
            continue
        }
        k.ig = "result__icon__img";
        var q = "";
        if ((av == "d" || av == "r" || (av == "a" && D == 1)) && I[N]["i"] != "") {
            q = d.createElement("span");
            q.className = "result__icon";
            if (kf == "-1") {
                q.className += " is-hidden"
            }
            if (av != "a") {
                var f = I[N]["i"];
                Q = l("Search domain %s", f)
            }
            if (nur) {
                var g = typeof I[N]["i"] === "string" && I[N]["i"].indexOf("http") == 0 ? "/iu?u=" + I[N]["i"] : DDG.get_favicon_url(I[N]["i"]);
                m = nur(k.ig, Q, g, 16, 16)
            }
            if (m) {
                m.className = k.ig;
                if (av == "a") {
                    q.appendChild(m)
                } else {
                    h = d.createElement("a");
                    h.href = (iqs ? "/?q=" + rq : "/?q=" + rq + "+site:" + I[N]["i"]) + (kurl ? kurl : "");
                    h.title = Q;
                    h.appendChild(m);
                    h.onclick = function() {
                        fl = 1
                    }
                    ;
                    q.appendChild(h)
                }
            }
        }
        an = d.createElement("div");
        $(an).addClass("result__body  links_" + (aq == 1 || aq == "a" ? "main" : "zero_click"));
        if ((av == "d" || av == "a") && !I[N]["h"]) {
            $(an).addClass("links_deep")
        }
        if (av != "r") {
            h = d.createElement("a");
            check = d.createElement("a");
            if (av == "d" || av == "a") {
                h.className = "result__a";
                check.className = "result__check";
                check.innerHTML = '<span class="result__check__tt">' + l("Your browser indicates if you've visited this link") + "</span>"
            }
            h.href = I[N]["c"];
            check.href = I[N]["c"];
            if (kn && kn == "1" && h && h.href && h.getAttribute("href").indexOf("http") != -1) {
                h.target = "_blank";
                check.target = "_blank"
            }
            M = d.createElement("h2");
            M.className = "result__title";
            h.innerHTML = I[N]["t"];
            C = h;
            M.appendChild(h);
            M.appendChild(check);
            an.appendChild(M);
            if (I[N]["o"]) {
                var ai = $("#r1-0 .badge--official");
                if (!ai || !ai[0] || ai.length == 0) {
                    ai = d.createElement("span");
                    ai.className = "result__badge  badge--official";
                    ai.innerHTML = ai.title = l("Official Site");
                    an.insertBefore(ai, M)
                }
            }
        }
        if (av == "d" || av == "a") {
            if (I[N]["h"] && I[N]["a"]) {
                K = d.createElement("span");
                K.innerHTML = " " + I[N]["a"];
                an.appendChild(K)
            } else {
                if (I[N]["a"]) {
                    ak = d.createElement("div");
                    ak.className = "result__snippet";
                    if (av == "a") {
                        A = d.createElement("a");
                        A.href = I[N]["c"];
                        if (kn && kn == "1" && A.getAttribute("href").indexOf("http") != -1) {
                            A.target = "_blank"
                        }
                        $(A).html(I[N]["a"]);
                        ak.appendChild(A)
                    } else {
                        ak.innerHTML = I[N]["a"]
                    }
                    an.appendChild(ak)
                }
            }
            al = d.createElement("div");
            al.className = "result__extras";
            aj = d.createElement("div");
            aj.className = "result__extras__url";
            if (q) {
                aj.appendChild(q)
            }
            al.appendChild(aj);
            B = d.createElement("a");
            B.className = "result__url";
            B.href = I[N]["c"];
            if (kn && kn == "1" && B.getAttribute("href").indexOf("http") != -1) {
                B.target = "_blank"
            }
            if (av !== "a") {
                link3text1 = d.createElement("span");
                link3text1.className = "result__url__domain";
                link3text1.appendChild(d.createTextNode(t));
                link3text2 = d.createElement("span");
                link3text2.className = "result__url__full";
                if (ag) {
                    link3text2.appendChild(d.createTextNode("/" + ag))
                }
                B.appendChild(link3text1);
                B.appendChild(link3text2)
            } else {
                B.appendChild(d.createTextNode(I[N]["d"]))
            }
            aj.appendChild(B);
            if (I[N]["l"] && av === "a") {
                K = d.createElement("span");
                K.className = "result__sitelinks";
                K.innerHTML = I[N]["l"];
                al.appendChild(K);
                if (av == "a") {
                    var at = $(K).find("a");
                    if (at.length) {
                        at.each(function() {
                            $(this).click(function(j, i, x) {
                                adClick(j, i);
                                return nrl(x, this)
                            }
                            .bind(this, I[N].s, ar))
                        })
                    }
                }
            }
            if (!Y) {
                if (I[N]["e"]) {
                    K = d.createElement("span");
                    K.className = "result__menu  result__menu--show";
                    K.innerHTML = I[N]["e"];
                    al.appendChild(K)
                }
                if (!iqs && !I[N]["p"]) {
                    v = d.createElement("a");
                    v.href = iqs ? "/?q=" + rq : "/?q=" + rq + "+site:" + I[N]["i"];
                    if (kurl) {
                        v.href += kurl
                    }
                    var L = lp("additional_info_at", "More results")
                      , f = I[N]["i"];
                    v.appendChild(d.createTextNode(L));
                    v.title = l("Search domain %s", f);
                    v.className = "result__menu";
                    al.appendChild(v)
                } else {
                    if (I[N]["p"]) {
                        v = d.createElement("a");
                        v.href = "https://duck.co/help/company/advertising-and-affiliates";
                        v.onclick = function() {
                            fl = 1
                        }
                        ;
                        var E = l("Ad");
                        v.appendChild(d.createTextNode(E));
                        v.className = "result__badge  badge--ad";
                        an.insertBefore(v, M);
                        ar.className += "  result--ad  highlight_sponsored  sponsored";
                        if (ar.id == DDG.first_result) {
                            DDG.first_result = "r" + aq + "-" + ah
                        }
                    }
                }
            }
            if (!ak || !kai || kai != "1") {
                an.appendChild(al)
            } else {
                an.insertBefore(al, an.lastChild);
                an.className += " result--url-above-snippet"
            }
        } else {
            if (av == "t" && I[N]["a"] != "") {
                K = d.createElement("span");
                K.innerHTML = " - " + I[N]["a"];
                K.className = "hidden";
                $(K).css("display", "none");
                an.appendChild(K)
            } else {
                if (av == "i") {} else {
                    if (av == "r") {
                        $(an).addClass("result__snippet");
                        an.innerHTML += I[N]["a"] + "<br>";
                        h = d.createElement("a");
                        h.href = I[N]["c"];
                        if (kn && kn == "1" && h.getAttribute("href").indexOf("http") != -1) {
                            h.target = "_blank"
                        }
                        h.innerHTML += "" + I[N]["d"];
                        an.appendChild(h);
                        if (I[N]["t"]) {
                            K = d.createElement("span");
                            $(K).addClass("result__url");
                            K.innerHTML += " [" + I[N]["t"] + "]";
                            an.appendChild(K)
                        } else {
                            K = d.createElement("span");
                            K.innerHTML += " ";
                            an.appendChild(K)
                        }
                    }
                }
            }
        }
        ar.appendChild(an);
        if (av == "t") {
            k.options[k.options.length] = new Option(I[N]["t"],I[N]["u"] + (rv ? "?v=" + rv : ""))
        } else {
            if (rv == "d" && av == "d") {
                an = d.getElementById("zero_click_answer") || d.getElementById("rfd") || "";
                if (an) {
                    if (an.id == "zero_click_answer") {
                        $(an).css("padding-bottom", "5px")
                    }
                    an.parentNode.insertBefore(ar, an.nextSibling)
                }
            } else {
                if (av == "i") {
                    k.insertBefore(ar, k.firstChild)
                } else {
                    k.appendChild(ar);
                    if (I[N]["l"] && av === "d") {
                        DDG.add_sitelinks(k, N, I, t)
                    }
                    if (!rc && ar.id == DDG.first_result) {
                        rc = ar
                    }
                }
            }
        }
        if (av == "r" && p && P) {
            k.appendChild(O);
            k.appendChild(p);
            k.appendChild(P);
            k = p;
            if (ah <= 6) {
                nua("nsr", p.firstChild, 0, 0, 0, 1)
            }
        }
        if (av == "d" && c == 1) {
            U = 0;
            r = new RegExp("^r1-(\\d+)$");
            if (rc && r.test(rc.id)) {
                au = RegExp.$1
            }
            U = au == ah ? 1 : 0;
            if (fk && U && (!ar.previousSibling || ar.previousSibling.id.indexOf("r1-") == -1)) {
                nrm(6, ar.id)
            }
        }
        var u = function(i, x, j, y) {
            if (i === "a") {
                adClick(x, j)
            }
            return nrl(y, this)
        }
        ;
        if (C) {
            C.onclick = u.bind(C, av, I[N].s, ar)
        }
        if (B) {
            B.onclick = u.bind(B, av, I[N].s, ar)
        }
        if (A) {
            A.onclick = u.bind(A, av, I[N].s, ar)
        }
        if (v) {
            v.onclick = function(i) {
                return nrl(i, this)
            }
        }
        if (av == "i") {
            break
        }
    }
    if (av == "d" && I[0] && I[0]["s"] && !d.getElementById("powered_by")) {
        DDG.first_source = I[0]["s"];
        DDG.search.set("src", I[0]["s"]);
        an = d.createElement("div");
        an.id = "powered_by";
        an.className = "results--powered";
        for (var ap = 0; ap < I.length; ap++) {
            if (I[ap] && I[ap]["s"] && I[ap]["s"].indexOf("yandex") != -1) {
                I[0]["s"] = "yandex"
            }
        }
        if (ah > 5 && I[0]["s"] && I[0]["s"] != "disco" && I[0]["s"] != "boss" && I[0]["s"] != "yahooss") {
            var h;
            if (I[0]["s"].indexOf("yandex") != -1) {
                I[0]["s"] = "yandex"
            }
            if (I[0]["s"].indexOf("yhs") != -1) {
                I[0]["s"] = "yahoo"
            }
            if (I[0]["s"].indexOf("bing") != -1) {
                I[0]["s"] = "bing"
            }
            h = d.createElement("a");
            var af = I[0]["s"] === "yahoo";
            if (af) {
                h.href = "https://duck.co/help/company/yahoo-partnership"
            } else {
                h.href = "https://duck.co/help/results/sources"
            }
            h.target = "_blank";
            h.innerHTML = l("In partnership with");
            h.onclick = function() {
                fl = 1
            }
            ;
            an.appendChild(h);
            h = d.createElement("a");
            if (af) {
                h.href = "https://duck.co/help/company/yahoo-partnership"
            } else {
                h.href = "/" + I[0]["s"] + "/"
            }
            h.target = "_blank";
            h.className = "results--powered__badge-link";
            h.innerHTML = ' <span class="results--powered__badge  badge--' + I[0]["s"] + '" title="' + I[0]["s"] + '"></span>';
            h.onclick = function() {
                fl = 1
            }
            ;
            an.appendChild(h);
            ar = $(".js-results-sidebar-alt");
            if (ar) {
                ar.append(an)
            }
        }
    }
    if (aq == "a") {
        r3c = ah
    } else {
        r1c = ah
    }
    if (ae && J) {
        DDG.page.ads.setDefaultAds([I[J]])
    }
    I = null ;
    if (nir) {
        nir(av)
    }
    DDG.ImageLoader.locateUnloaded();
    if (ad) {
        nrj("/o.js?d=" + ad + (kf && kf == "b" ? "&t=b" : ""))
    }
    if (ae) {
        DDG.page.onDeepFinished()
    }
    if (H) {
        nrj("/l.js?q=" + rq)
    }
    if (nrb) {
        nrb()
    }
}
function nrj(c, f) {
    if (DDG.assets_loaded[c]) {
        return false
    }
    DDG.assets_loaded[c] = 1;
    var b, a;
    b = d.createElement("script");
    b.type = "text/javascript";
    if (!f) {
        b.async = true
    } else {
        b.async = false
    }
    b.src = c;
    var e = "https://duckduckgo-owned-server.yahoo.net";
    if (c.indexOf(e) > -1) {
        DDG.pixel.fire("ynr")
    }
    b.onerror = function(g) {
        if (c.indexOf(e) > -1) {
            c = c.replace(e, "");
            DDG.pixel.fire("ynb");
            nrj(c, f)
        }
    }
    ;
    a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a);
    return b
}
function nrje(b, c) {
    var a = {
        "de-de": 0,
        "us-en": 0.5,
        "wt-wt": 0.5
    };
    if (c && (a[rl] && Math.random() < a[rl]) || (DDG.querystringParam("df"))) {
        if (Math.random() < 0.1) {
            c = c.replace(/yhs=1/, "yhs=2")
        }
        nrj(c)
    } else {
        nrj(b)
    }
}
function nrc(c) {
    if (DDG.assets_loaded[c]) {
        return false
    }
    DDG.assets_loaded[c] = 1;
    var b, a;
    b = d.createElement("link");
    b.type = "text/css";
    b.rel = "stylesheet";
    b.async = true;
    b.href = c;
    b.media = "screen";
    a = document.getElementsByTagName("head")[0];
    a.parentNode.insertBefore(b, a)
}
function nur(b, f, e, a, c) {
    return DDG.ImageLoader.make({
        className: b,
        title: f,
        src: e,
        height: a,
        width: c,
        alt: "",
        visibility: "visible",
        lazyLoad: "scrollY"
    })
}
function nsr(f, s, e) {
    var j, i, h, c, g, m, o, n, k, r, a, u, b;
    h = new RegExp("^r[lr](.*)-(\\d+)$");
    f = f.parentNode;
    if (f.id && h.test(f.id)) {
        g = RegExp.$1 || 0;
        m = RegExp.$2 || 0
    }
    if (g && m) {
        if (tn == f.id) {
            return false
        }
        tn = f.id;
        b = j = i = 0;
        c = new RegExp("^r1-(\\d+)$");
        if (rc && c.test(rc.id)) {
            j = RegExp.$1
        }
        if (f.previousSibling && c.test(f.previousSibling.id)) {
            i = RegExp.$1
        }
        b = j && i && parseInt(j) == parseInt(i) + 1 ? 1 : 0;
        if (!fk) {
            b = 2
        }
        o = d.getElementById("rl" + g + "-" + m);
        n = d.getElementById("rr" + g + "-" + m);
        k = d.getElementById("rl" + g + "-" + (parseInt(m) + 1));
        var q = DDG.settings.get("kv");
        if (q && q != "-1" && rds != 0 && (rds != 1 || r1hc) && g && g.indexOf("i") == -1) {
            o.onmouseover = function() {}
            ;
            o.onmouseout = function() {}
            ;
            o.onclick = function() {}
            ;
            o.className = "result result--sep is-hidden js-result-sep";
            var p = ++rpc;
            if (q == "m") {
                o.className += " result--sep--hr";
                o.innerHTML = ""
            } else {
                if (q == "l") {
                    o.innerHTML = '<div class="result__pagenum">' + l("Page %s", p) + "</div>"
                } else {
                    o.className += " result--sep--hr has-pagenum";
                    o.innerHTML = '<div class="result__pagenum  result__pagenum--side">' + p + "</div>"
                }
            }
        } else {
            $(o).css("display", "none")
        }
        n.style.display = "block";
        if (k && !s) {
            $(k).css("display", "block")
        } else {
            if (!k && (g == "d" || g == "e0" && !fd) && DDG.page.deepNextURL) {
                a = d.createElement("span");
                a.className = (DDG.settings.isDefault("kc")) ? "result--more  result--load-btn" : "btn result--more  result--load-btn";
                a.className += " is-loading js-results-loading";
                a.innerHTML = Handlebars.helpers.loader();
                n.parentNode.appendChild(a);
                if (rv == "d") {
                    rv = ""
                }
                if (rds) {
                    rds += 50
                } else {
                    rds += 30
                }
                nrj(DDG.page.deepNextURL, 1);
                delete DDG.page.deepNextURL
            }
        }
        if (!s && !e && b == 1) {
            if (f.nextSibling.firstChild) {
                nrm(6, f.nextSibling.firstChild.id)
            }
        }
    }
}
function nir(g) {
    var a, f, e, b, c;
    e = (g) ? ".highlight_" + g : ".result";
    a = $(e);
    a.each(function(h, j) {
        f = $(j);
        if (f.attr("data-nir")) {
            return
        }
        if (!is_mobile_device) {
            f.on("mouseenter", function(i) {
                if (fk || fe) {
                    return false
                }
                if (ky && ky == -1) {
                    return false
                }
                if (rc && rc != this) {
                    nua("nro", rc)
                }
                nua("nrv", this);
                rc = this
            });
            f.on("mouseleave", function(i) {
                if (fk || fe) {
                    return false
                }
                if (ky && ky == -1) {
                    return false
                }
                nua("nro", this)
            })
        }
        if (g != "a") {
            f.click(function(i) {
                if (this.id !== "did_you_mean") {
                    organicClick(this)
                }
                if (!fe) {
                    nrg(this, 0, i, 0)
                }
            })
        }
        f.attr("data-nir", 1);
        if (!g || g == "a" || g == "v") {
            b = f.find("a");
            for (c = 0; c < b.length; c++) {
                if (!b[c].onclick && !rs) {
                    b[c].onclick = function(i) {
                        this.blur();
                        return nrl(i || window.event, this)
                    }
                } else {
                    if (!b[c].onclick) {
                        b[c].onclick = function() {
                            this.blur();
                            fl = 1
                        }
                    }
                }
                if (kn && kn === "1" && !DDG.isInternalURL(b[c].href)) {
                    b[c].target = "_blank"
                }
            }
        }
    })
}
function ncku(a) {
    if (!ie && !a.metaKey) {
        fa = 0
    }
}
function nckd(a) {
    if (!ie && a.metaKey) {
        fa = 1
    }
}
function nckp(a) {}
function ncf(h) {
    var i, a, f, j, k;
    fmx = h.clientX;
    fmy = h.clientY;
    if (fmx > viewport_width - 100 && fmy > parseInt(viewport_height) - 17) {
        if (!il && nrb) {
            nrb()
        }
    }
    i = "";
    if (h.srcElement) {
        i = h.srcElement
    } else {
        i = h.target
    }
    var g = 0;
    var c = 0;
    if (ie && (nkdc(h) || nkdm(h))) {
        g = 1
    }
    if (DDG.device.isEdge && (nkdc(h) || nkdm(h))) {
        c = 1
    }
    var b = h.which && h.which == 2;
    var m = h.which && h.which == 3;
    if (c || g || b || m) {
        fm = 1;
        while (i && i != window) {
            if (i.nodeName && i.nodeName == "A") {
                if (DDG.isJSURL(i.href)) {
                    i.onclick();
                    return false
                } else {
                    i.href = DDG.get_http_redirect(i, m)
                }
                fl = 1;
                break
            }
            a = i.id;
            if (a && !m) {
                if (a == "links") {
                    break
                }
                if (rc && a == rc.id) {
                    nrg(rc, 0, h, 1)
                }
            }
            if (i.parentNode) {
                i = i.parentNode
            } else {
                break
            }
        }
    } else {
        fm = 0
    }
}
function ncg(a) {
    fmx = 0;
    fmy = 0;
    if (a.clientX > viewport_width - 25) {
        if (!il && nrb) {
            nrb()
        }
    }
}
function nkf(c) {
    var b, a;
    if (ie) {
        b = c.clientX + d.body.scrollLeft;
        a = c.clientY + d.body.scrollTop
    } else {
        b = c.pageX;
        a = c.pageY
    }
    if (fk && sx && sy && (sx != b || sy != a)) {
        fk = 0
    }
    sx = b;
    sy = a
}
var mousewheelevt = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
if (document.attachEvent) {
    document.attachEvent("on" + mousewheelevt, nkw)
} else {
    if (document.addEventListener) {
        document.addEventListener(mousewheelevt, nkw, false)
    }
}
function nkw(a) {
    if (io && !il && nrb) {
        nrb()
    }
    fk = 0
}
function nis() {
    var c, a;
    setTimeout("idom=1;", 250);
    if (fq) {
        return false
    }
    var b = d.getElementById("state_hidden").value;
    if (b) {
        nhs(b)
    } else {
        rc = d.getElementById(DDG.first_result)
    }
    fs = 0;
    if (!il && nrb) {
        nrb()
    }
}
function nrrel(p) {
    var n, b, o, a, h, g, j, m, e, c, k;
    if (d.getElementById("nrreld")) {
        return
    }
    a = d.getElementById("links");
    m = p.r && p.r.length ? 1 : 0;
    e = r1c || d.getElementById("did_you_mean") || d.getElementById("zero_click_answer") || rad || $("#zero_click_wrapper").css("visibility") == "visible" ? 1 : 0;
    h = d.createElement("div");
    h.id = "nrreld";
    h.className = "no-results";
    if (d.getElementById("zero_click_answer") && !r1c) {
        $(h).addClass("t-m")
    }
    if (rq.indexOf("sort%3Adate") != -1 || rq.indexOf("s%3Ad") != -1) {
        c = 1
    } else {
        c = ""
    }
    g = d.createElement("div");
    g.innerHTML = "No " + (e ? "more " : "") + (c ? "date " : "") + "results." + (m ? " Try:" : "");
    h.appendChild(g);
    if (m) {
        h.className += " has-related";
        for (var f = 0; f < p.r.length; f++) {
            b = p.u[f];
            n = p.r[f];
            g = d.createElement("div");
            j = d.createElement("a");
            j.href = "/?q=" + encodeURIComponent(b) + (kurl ? kurl : "");
            if (kurl) {
                j.href += kurl
            }
            j.innerHTML = n;
            g.className = "no-results__related-search";
            g.appendChild(j);
            h.appendChild(g)
        }
    }
    g = d.createElement("div");
    h.appendChild(g);
    a.appendChild(h);
    DDG.pixel.fire("related", rq)
}
function nrwot(a) {
    var e, m, c, j, h, b, f, g, k;
    for (e = 0; m = a[e]; e++) {
        if (!m.d || !m.r || !m.t) {
            continue
        }
        c = $("#" + m.d + " .result__extras__url");
        if (!c.length) {
            continue
        }
        b = m.r;
        g = m.t;
        k = "";
        if (b <= 2) {
            k = l("Warning! Site could be harmful.")
        } else {
            if (b >= 4) {
                k = l("Site has good reputation.")
            }
        }
        f = DDG.ImageLoader.make({
            title: k,
            src: "/wot/" + b + ".png",
            width: 16,
            height: 16
        });
        j = $('<span class="result__icon"></span>');
        h = $('<a href="https://www.mywot.com/en/scorecard/' + g + '" title="' + k + '"></a>');
        h.append(f);
        j.append(h);
        if (kf === "w") {
            c.find(".result__icon").addClass("is-hidden")
        }
        c.prepend(j);
        h.click(function(i) {
            fl = 1;
            nrl(i, this)
        })
    }
}
function nrb(b, c) {
    var e, p, g, j, n, m, o, f, a, h, k;
    if (fs) {
        return false
    }
    fs = 1;
    n = document.body.scrollHeight;
    m = DDG.device.scrollTop();
    g = m + viewport_height >= n - 500 ? 1 : 0;
    j = 0;
    if (!c && fmx && fmy && fmx > viewport_width - 100 && fmy < parseInt(viewport_height) - 17) {
        fs = 0;
        return
    }
    if (g || j || c) {
        for (f = parseInt(r1c) - 1; f >= 0; f--) {
            k = "r1-" + (f + ((slo) ? slo : 0));
            a = d.getElementById(k);
            h = a.parentNode;
            if ($(h).css("display") == "block") {
                nrm(7, k);
                break
            }
        }
    }
    fs = 0
}
function nip(a) {
    var b;
    if (!a && ie) {
        setTimeout("d.x.reset()", 50)
    }
    if (!a && w.postMessage) {
        b = d.createElement("iframe");
        b.id = "iframe_hidden";
        b.src = "/post2.html";
        d.body.appendChild(b)
    }
    if (!a) {
        if (nir) {
            nir("v")
        }
        DDG.ready(function() {
            setTimeout("nis()", 250);
            if (!DDG.device.isMobileDevice) {
                $(document).on("mousemove", nkf);
                $(document).on("mouseup", ncg);
                $(document).on("keydown", nckd);
                $(document).on("keypress", nckp);
                $(document).on("keyup", ncku)
            }
        })
    }
    $(document).on("mousedown", ncf)
}
if (ir) {
    window.onload = fnChromeLoad
}
function fnChromeLoad(a) {
    irl = 1
}
function getLinkType(e) {
    var f = e.id.split("-");
    var c = f[0] === "ra";
    var b = parseInt(f[1], 10);
    var a = "_cn";
    if (c) {
        a = "_ca"
    } else {
        if (b === 0) {
            a = "_cz"
        } else {
            if (b <= slo) {
                a = "_cs"
            }
        }
    }
    return a
}
function adOrOrganicClick(f) {
    if (DDG.search.randomSampleData) {
        DDG.pixel.fire("olc", DDG.search.randomSampleData + getLinkType(f))
    }
    if (DDG.page.showingSpelling) {
        DDG.pixel.fire("c", DDG.page.views.messages.spellingType)
    }
    var h = DDG.duckbar.activeTabId && DDG.duckbar.activeTabId !== "web" && DDG.duckbar.getActiveTab().pixelId
      , b = DDG.duckbar.initialTab && DDG.duckbar.initialTab.pixelId
      , c = {
        d: DDG.device.pixelId,
        ss: DDG.page.showingSafeSearch,
        sp: DDG.page.showingSpelling,
        ct: DDG.page.countryPixelId,
        dl: DDG.search.hasSiteLinks ? 1 : 0
    };
    if (f) {
        try {
            c.dm = $(f).attr("data-domain")
        } catch (g) {}
        try {
            c.r = "r" + f.id.split("-").pop()
        } catch (g) {}
        c.da = c.r && (DDG.search.deepAnswerIAs[c.r] || 0)
    }
    if (c.dl) {
        DDG.pixel.fire("dlc", c)
    }
    if (h || b) {
        var a = h ? DDG.duckbar.activeTabOpenType : DDG.duckbar.initialTabOpenType;
        DDG.pixel.fire("iaolc", h || b, a, c)
    } else {
        if (c.da) {
            DDG.pixel.fire("iauc", c)
        }
    }
}
function organicClick(a) {
    adOrOrganicClick(a)
}
function adClick(b, a) {
    DDG.pixel.fire("ad", b, "c");
    adOrOrganicClick(a)
}
(function(b) {
    var a;
    if (!b.DDG) {
        b.DDG = {}
    }
    a = b.DDG;
    a.abbrevNumber = function(c) {
        if (!$.isNumeric(c)) {
            return c
        }
        if (c < 1000) {
            return c
        }
        if (c < 10000) {
            return (Math.round(c / 100) / 10) + "K"
        }
        if (c < 1000000) {
            return Math.round(c / 1000) + "K"
        }
        if (c < 10000000) {
            return (Math.round(c / 100000) / 10) + "M"
        }
        if (c < 1000000000) {
            return Math.round(c / 1000000) + "M"
        }
        if (c < 10000000000) {
            return Math.round(c / 100000000) + "B"
        }
        return Math.round(c / 1000000000) + "B"
    }
    ;
    a.capitalize = function(c) {
        return c.charAt(0).toUpperCase() + c.slice(1)
    }
    ;
    a.capitalizeWords = function(c) {
        c = c.replace(/\w\S+/g, a.capitalize);
        c = c.replace(/\b(?:Of|And|The|At|By|In|To|A|For|An|On|Or)\b/g, function(e) {
            return e.toLowerCase()
        });
        return c
    }
    ;
    a.commifyNumber = function(c) {
        if (!$.isNumeric(c)) {
            return c
        }
        var e = c.toString().split(".");
        e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return e.join(".")
    }
    ;
    a.eventToCoordinates = function(f) {
        var g = f.originalEvent
          , c = (g.touches && g.touches.length) ? g.touches[0] : f;
        return {
            x: c.clientX,
            y: c.clientY
        }
    }
    ;
    a.exec_template = function(f, g) {
        if (!f) {
            throw new Error("DDG.exec_template: template is null")
        }
        var e, c;
        if ($.isFunction(f)) {
            c = f
        } else {
            if (a.templates[f]) {
                c = a.templates[f]
            } else {
                if (f.match(/^DDH\./)) {
                    c = a.getProperty(window, f)
                }
            }
        }
        if (!c) {
            throw new Error("Template Not Found: " + f)
        }
        e = c(g || {});
        if (!e) {
            throw new Error("Error Rendering Template: " + f,g)
        }
        return e
    }
    ;
    a.$exec_template = function(c, e) {
        var f = a.exec_template(c, e);
        return f && $(f)
    }
    ;
    a.findInArray = function(c, f, h) {
        for (var e = 0; e < c.length; e++) {
            var g = c[e];
            if (g && g[f] === h) {
                return g
            }
        }
    }
    ;
    a.formatDuration = function(g) {
        var i = 3600000
          , e = 60000
          , f = 1000;
        var c = Math.floor(g / i)
          , h = Math.floor((g - (c * i)) / e)
          , k = Math.round((g - (c * i) - (h * e)) / f);
        if (c && h < 10) {
            h = "0" + h
        }
        if (k < 10) {
            k = "0" + k
        }
        var j = h + ":" + k;
        if (c) {
            j = c + ":" + j
        }
        return j
    }
    ;
    a.getDateFromString = function(c) {
        var f = c.match(/([\d]{4})\-([\d]{2})\-([\d]{2})(?:(T|\s)([\d]{2}):([\d]{2}):([\d]{2,}))?($|Z|\s)?(UTC)?/);
        if (f) {
            for (var e = 0; e < 10; e++) {
                if (f[e] === undefined) {
                    f[e] = false
                }
            }
            if (f[8] === "Z" || f[9] === "UTC") {
                c = new Date(Date.UTC(f[1], f[2] - 1, f[3], f[5], f[6], f[7]))
            } else {
                c = new Date(f[1],f[2] - 1,f[3],f[5],f[6],f[7])
            }
            return c
        }
    }
    ;
    a.get_favicon_url = function(k) {
        if (!k || typeof k !== "string") {
            return
        }
        var i, c, n, f, j, g, h = "", m = a.settings && a.settings.updater && a.settings.updater.isDarkBg, e = /wikipedia|amazon|youtube|yelp|apple|vimeo|metrolyrics|spotify|wolfram|metrolyrics|wordnik|brainyquote|soundcloud/;
        darkVariants = /wikipedia/;
        n = /^.*?\/\/([^\/\?\:\#]+)/;
        f = n.exec(k);
        if (f && $.isArray(f)) {
            i = f[1]
        } else {
            i = k
        }
        j = i.match(e);
        if (j) {
            if (m && darkVariants.test(j)) {
                h = ".white"
            }
            g = a.is3x ? ".3x" : a.is2x ? ".2x" : "";
            c = "/assets/icons/favicons/" + j + h + g + ".png"
        }
        if (!c) {
            c = a.services.getURL("icons") + i + ".ico"
        }
        return c
    }
    ;
    a.getImageProxyURL = function(c, e) {
        if (a.isInternalURL(c)) {
            return c
        }
        if (c.match(/^\/\//)) {
            c = window.location.protocol + c
        }
        c = (e) ? c : encodeURIComponent(c);
        return a.services.getURL("images") + "?u=" + c + "&f=1"
    }
    ;
    a.getOrdinal = function(f) {
        if (!f) {
            return ""
        }
        var e = ["th", "st", "nd", "rd"]
          , c = f % 100;
        return f + (e[(c - 20) % 10] || e[c] || e[0])
    }
    ;
    a.getProperty = function(g, f) {
        if (!f) {
            return null 
        }
        var j = f.split(".")
          , h = g;
        for (var e = 0, c = j.length; e < c; e++) {
            if (!h) {
                return null 
            }
            h = h[j[e]]
        }
        return h
    }
    ;
    a.inject = function(e, j) {
        var h = e.split("."), f;
        for (var c = 0, k; k = h[c]; c++) {
            var g = c === h.length - 1;
            if (c === 0) {
                if (!window[k]) {
                    window[k] = {}
                }
                if (g) {
                    window[k] = j
                }
                f = window[k]
            } else {
                if (!f[k]) {
                    f[k] = {}
                }
                if (g) {
                    f[k] = j
                }
                f = f[k]
            }
        }
    }
    ;
    a.isInternalURL = function(c) {
        return !c || (c.indexOf("http") == -1 && !c.match(/^\/\//)) || /^(https?:)?\/\/([a-z\-0-9]+\.)?duckduckgo.com/.test(c)
    }
    ;
    a.isNumber = function(c) {
        return !isNaN(parseFloat(c)) && isFinite(c)
    }
    ;
    a.objectToArray = function(c) {
        return Object.keys(c).map(function(e) {
            return c[e]
        })
    }
    ;
    a.parseAbstract = function(g) {
        var e = /^(.*)\((.*)\)(.*)/
          , f = e.exec(g);
        var c = {
            content: g,
            main: g
        };
        if (f) {
            c.head = f[1];
            c.subTitle = f[2] || "";
            c.tail = f[3] || "";
            c.main = c.head + c.tail
        }
        return c
    }
    ;
    a.parse_link = function(g, f) {
        var c, h, i, e;
        if (!f) {
            f = "url"
        }
        h = $("<p>" + g + "</p>");
        i = h.find("a");
        if (i.length) {
            e = $(i[0])
        } else {
            c = h.text();
            f = ""
        }
        if (f === "text") {
            c = e.text()
        } else {
            if (f === "rest") {
                e.remove();
                c = h.text();
                if (c) {
                    c = c.replace(/^(\-|\:|\;|,|"|'|\s)+/, "")
                }
            } else {
                if (f === "url") {
                    c = e[0].href
                }
            }
        }
        return c
    }
    ;
    a.pluralize = function(e, f, c) {
        e = parseFloat(e);
        if (!e && e !== 0) {
            return ""
        }
        if (e === 1) {
            return f
        } else {
            return c || (f + "s")
        }
    }
    ;
    a.querystringParam = function(c) {
        c = c.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var f = new RegExp("[\\?&]" + c + "=([^&#]*)")
          , e = f.exec(location.search);
        return e === null  ? "" : decodeURIComponentSafe(e[1].replace(/\+/g, " "))
    }
    ;
    a.scaleToFit = function(f, c, h, g) {
        var e = {
            width: f,
            height: c
        };
        if (h && e.width > h) {
            e.width = h;
            e.height = (h / f) * c
        }
        if (g && e.height > g) {
            e.height = g;
            e.width = (g / c) * f
        }
        return e
    }
    ;
    a.shuffle = function(c) {
        for (var g = c.length - 1; g > 0; g--) {
            var f = Math.floor(Math.random() * (g + 1))
              , e = c[g];
            c[g] = c[f];
            c[f] = e
        }
        return c
    }
    ;
    a.strip_all_html = function(f) {
        var c = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*", e = new RegExp("<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b" + c + ">[\\s\\S]*?<\/script\\s*|style\\b" + c + ">[\\s\\S]*?</style\\s*|/?[a-z]" + c + ")>","gi"), g;
        while (f !== g) {
            g = f;
            f = f.replace(e, "")
        }
        return f.replace(/</g, "&lt;")
    }
    ;
    a.strip_href = function(c) {
        if (c) {
            return c.replace(/(src|href)\s*=\s*(['"])/gi, "_$1=$2")
        }
        return ""
    }
    ;
    a.strip_html = function(c) {
        if (!c) {
            return ""
        }
        return String(c).replace(/<\/?[^>]+>/g, "")
    }
    ;
    a.strip_non_alpha = function(c) {
        if (c) {
            c = c.replace(/\W/g, "")
        }
        return c
    }
    ;
    a.toHTTPS = function(c) {
        return c && c.replace(/^http:/, "https:")
    }
    ;
    a.toHTTP = function(c) {
        return c && c.replace(/^https/, "http")
    }
    ;
    a.unescape = function(e) {
        var c = document.implementation.createHTMLDocument("example");
        c.documentElement.innerHTML = e;
        return c.body.textContent
    }
})(this);
!function(a) {
    DDG.addSearchProvider = function(b) {
        if (!w.external || !("AddSearchProvider" in w.external)) {
            return
        }
        b = b || "opensearch.xml";
        w.external.AddSearchProvider("https://" + w.location.host + "/" + b);
        if (!a.device.isChrome && w != top) {
            setTimeout(function() {
                top.location.replace("https://duckduckgo.com")
            }, 10)
        }
    }
}(DDG);
(function() {
    var c = {
        "sort:date": 1,
        "s:d": 1,
        "!safeoff": 1
    }
      , b = /[';,.]/g
      , a = /[\s-]+/;
    DDG.getRelevants = function(j) {
        if (j.num === undefined) {
            j.num = j.candidates.length
        }
        var e = [];
        var h = DDG.get_query();
        h.replace("'", "");
        j.candidates = j.candidates.sort(j.comparator);
        for (var f = 0, g; g = j.candidates[f]; f++) {
            if (DDG.isRelevant(g.comparable, j.skipArray, j.minWordLength, j.strict)) {
                if (f > j.num) {
                    return e
                } else {
                    e.push(g)
                }
            }
        }
        return e
    }
    ;
    DDG.isRelevant = function(f, g, h, e) {
        return DDG.stringsRelevant(f.toLowerCase(), DDG.get_query().toLowerCase(), g, h, e)
    }
    ;
    DDG.stringsRelevant = function(g, e, v, q, C) {
        if (v instanceof Array) {
            var r = {};
            for (var s = 0; s < v.length; s++) {
                var p = v[s].toLowerCase();
                r[p] = 1
            }
            v = r
        }
        if (q === undefined) {
            q = 4
        }
        if (v === undefined) {
            v = c
        } else {
            for (var B in c) {
                if (c[B]) {
                    v[B] = 1
                }
            }
        }
        g = g.replace(b, "");
        e = e.replace(b, "");
        var x = g.split(a);
        var u = e.split(a);
        var y = [];
        var A = [];
        for (var s = 0; s < x.length; s++) {
            var t = x[s].toLowerCase();
            if (t && t.length >= q && !v[t]) {
                y.push(t)
            }
        }
        for (var s = 0; s < u.length; s++) {
            var t = u[s].toLowerCase();
            if (t && t.length >= q && !v[t]) {
                A.push(t)
            }
        }
        x = y;
        u = A;
        var m, j;
        if (C) {
            if (x.length >= u.length) {
                m = u;
                j = x
            } else {
                m = x;
                j = u
            }
        } else {
            if (x.length >= u.length) {
                m = x;
                j = u
            } else {
                m = u;
                j = x
            }
        }
        var f = {};
        var o = {};
        var k = 0;
        var z = 0;
        for (var s = 0; s < j.length; s++) {
            var t = j[s].toLowerCase();
            var n = t.substring(0, q);
            f[n] = t;
            z++
        }
        f.length = z;
        for (var s = 0; s < m.length; s++) {
            var t = m[s].toLowerCase();
            var h = t.substring(0, q);
            if (!(h in o) && f[h]) {
                o[h] = 1;
                k++
            }
        }
        if (f.length > 0 && f.length <= 2 && k == f.length) {
            return true
        } else {
            if (f.length > 2 && k >= f.length - 1) {
                return true
            }
        }
        return false
    }
})();
!function(b, a) {
    a.SM2_DEFER = true;
    var f, e = 0;
    loadedSm = 0;
    init = function() {
        if (f) {
            return
        }
        f = window.soundManager = new SoundManager();
        f.url = "/soundmanager2/swf";
        f.flashVersion = 9;
        f.useFlashBlock = false;
        f.useHTML5Audio = true;
        f.ontimeout(function() {
            loadedSm = 1;
            c.ready = 0
        });
        f.beginDelayedInit();
        f.onready(function() {
            loadedSm = 1;
            c.ready = 1
        })
    }
    ;
    var c = b.audio = {
        requires: function() {
            if (!e) {
                nrj("soundmanager2/script/soundmanager2-nodebug-jsmin.js", 1);
                e = 1;
                return false
            } else {
                if (!f && window.SoundManager) {
                    init();
                    return false
                } else {
                    if (f && loadedSm) {
                        return c
                    }
                }
            }
            return false
        },
        play: function(j, g, i) {
            if (!c.ready) {
                return false
            }
            i = i || {};
            var h = f.getSoundById(j);
            if (h) {
                h.play(i)
            } else {
                i.onloadstart && i.onloadstart();
                h = f.createSound($.extend(i, {
                    id: j,
                    url: g
                }))
            }
            return h
        },
        pause: function(h) {
            if (!c.ready) {
                return false
            }
            var g = f.getSoundById(h);
            if (g) {
                g.pause()
            }
        },
        stop: function(h) {
            if (!c.ready) {
                return false
            }
            var g = f.getSoundById(h);
            if (g) {
                g.stop()
            } else {
                f.stopAll()
            }
        }
    }
}(DDG, this);
!function(e) {
    var i = {}
      , a = []
      , b = {}
      , g = ["title", "id", "height", "width", "className", "alt", "visibility"];
    e.ImageLoader = {
        make: function(o) {
            var m = d.createElement("img");
            for (var n = 0, k; k = g[n]; n++) {
                if (o[k]) {
                    m[k] = o[k]
                }
            }
            if (o.lazyLoad) {
                this.register(m, o.src, o.lazyLoad)
            } else {
                m.src = o.src
            }
            return m
        },
        register: function(m, o, k) {
            var n = {
                src: o,
                el: m,
                trigger: k || "none"
            };
            if (k && k === "scrollY") {
                if (j(n)) {
                    if (!f(n)) {
                        c(n)
                    }
                } else {
                    h(n)
                }
            } else {
                if (!f(n)) {
                    c(n)
                }
            }
        },
        registerAll: function(r, m, p) {
            if (!r || !r.length) {
                return
            }
            p = p || {};
            for (var n = 0; n < r.length; n++) {
                var k = r[n]
                  , q = $(k).attr("data-src")
                  , o = q.split(".").pop();
                if (p.svg) {
                    if (!q.match(/\.svg|\.png/i)) {
                        q += ".png";
                        o = "png"
                    }
                    if (Modernizr.svg) {
                        q = q.replace("." + o, ".svg")
                    }
                } else {
                    if (p.has3x && DDG.is3x) {
                        q = q.replace("." + o, "@3x." + o)
                    } else {
                        if (p.has2x && (DDG.is2x || DDG.is3x)) {
                            q = q.replace("." + o, "@2x." + o)
                        }
                    }
                }
                this.register(k, q, m)
            }
        },
        locateUnloaded: function() {
            var k = a.length;
            for (var m = 0; m < k; m++) {
                var n = a[m];
                if (j(n)) {
                    if (!f(n)) {
                        c(n)
                    }
                    a.splice(m, 1);
                    m--;
                    k--
                }
            }
        },
        trigger: function(m) {
            if (!i[m]) {
                return
            }
            var n = i[m];
            for (var k = 0; k < n.length; k++) {
                f(n[k], true)
            }
            delete i[m];
            b[m] = 1
        },
        loadMore: function() {
            if (!i.scrollY || !i.scrollY.length) {
                return
            }
            var k;
            while (k = i.scrollY.shift()) {
                f(k, true)
            }
        }
    };
    e.device.on("resize", function() {
        e.ImageLoader.loadMore()
    });
    e.device.on("scroll", function() {
        e.ImageLoader.loadMore()
    });
    function j(k) {
        if (!k.el.parentNode) {
            return false
        }
        k.offset = $(k.el).offset();
        return true
    }
    function h(k) {
        a.push(k)
    }
    function f(m, k) {
        if (k) {
            m.el.src = m.src;
            return true
        }
        if (m.trigger === "scrollY") {
            var n = e.device.scrollTop();
            if (m.offset.top > n && (m.offset.top - n) < viewport_height) {
                m.el.src = m.src;
                return true
            }
        }
        if (m.trigger !== "none" && b[m.trigger]) {
            m.el.src = m.src;
            return true
        }
        return false
    }
    function c(o) {
        var m = i[o.trigger];
        if (!m) {
            i[o.trigger] = m = []
        }
        if (o.trigger === "scrollY") {
            for (var k = 0; k < m.length; k++) {
                var n = m[k];
                if (o.offset.top > n.offset.top) {
                    continue
                }
                break
            }
            m.splice(k, 0, o)
        } else {
            m.push(o)
        }
    }
}(DDG);
!function(a) {
    a.Utils.ABTester = function(b) {
        b = b || {};
        b.numVersions = b.numVersions || 2;
        if (b.englishOnly && window.locale.indexOf("en_") !== 0) {
            this._versionIndex = 0;
            this.version = ""
        } else {
            this._versionIndex = Math.round(Math.random() * (b.numVersions - 1));
            this.version = String.fromCharCode(this._versionIndex + 97)
        }
    }
    ;
    a.Utils.ABTester.prototype = $.extend({}, {
        pick: function(b) {
            return b[this._versionIndex]
        }
    })
}(DDG);
!function(b) {
    var a = "is-touching"
      , c = 80
      , f = 0.5
      , e = 20;
    b.Utils.GestureRecognizer = function(g) {
        this.$el = g.el;
        if (Modernizr.touch) {
            this.$el.on("touchstart", this._onTouchStart.bind(this))
        }
    }
    ;
    b.Utils.GestureRecognizer.prototype = $.extend({}, EventEmitter2.prototype, {
        reset: function() {
            b.$doc.off("touchmove.gestures");
            b.$doc.off("touchend.gestures");
            this.$el.removeClass(a);
            delete this._startX;
            delete this._startY
        },
        _moveTo: function(g) {
            this._x = g.x;
            this._y = g.y;
            if (!this._startX) {
                this._startX = this._x
            }
            if (!this._startY) {
                this._startY = this._y
            }
            this._deltaX = this._x - this._startX;
            this._deltaY = this._y - this._startY;
            this._axis = Math.abs(this._deltaX) > Math.abs(this._deltaY) ? "x" : "y";
            this._distance = this._axis === "x" ? this._deltaX : this._deltaY;
            this._prevDirection = this._direction;
            this._direction = this._axis === "x" ? this._distance >= 0 ? "right" : "left" : this._distance >= 0 ? "down" : "up";
            this._duration = new Date().getTime() - this._startTime;
            this._velocity = this._duration ? Math.abs(this._distance) / this._duration : 0
        },
        _getEventData: function(g) {
            return {
                e: g,
                axis: this._axis,
                direction: this._direction,
                distance: this._distance,
                duration: this._duration,
                velocity: this._velocity
            }
        },
        _onTouchStart: function(g) {
            this.$el.addClass(a);
            this._startTime = new Date().getTime();
            this._moveTo(b.eventToCoordinates(g));
            b.$doc.on("touchmove.gestures", this._onTouchMove.bind(this));
            b.$doc.on("touchend.gestures", this._onTouchEnd.bind(this))
        },
        _onTouchMove: function(h) {
            h.preventDefault();
            this._moveTo(b.eventToCoordinates(h));
            var g = this._getEventData(h);
            if (this._direction != this._prevDirection) {
                this.emit("drag-turn", g)
            }
            this.emit("drag", g)
        },
        _onTouchEnd: function(k) {
            var g = Math.abs(this._distance)
              , i = g < e
              , h = g > c || this._velocity > f
              , j = this._getEventData(k);
            if (h && !i) {
                this.emit("swipe", j)
            } else {
                if (i) {
                    this.emit("tap", j)
                }
                this.emit("drag-release", j)
            }
            this.reset()
        }
    })
}(DDG);
!function(a) {
    a.Utils.Pixel = function() {
        this._addPixels(DDG.Data.Pixels);
        this._sentPixels = []
    }
    ;
    a.Utils.Pixel.prototype = $.extend({}, {
        fire: function() {
            var c = Array.prototype.slice.call(arguments), b = this._pixelsByName[c[0]], f, e = {};
            if (!b) {
                c.unshift("depr")
            } else {
                if (b.data) {
                    c = c.concat(this._getPixelData(b.data))
                }
                f = b.once
            }
            return this._send(c, {
                once: f
            })
        },
        trigger: function(b) {
            var e = this._pixelsByTrigger[b];
            if (!e || !e.length) {
                return
            }
            for (var c = 0; c < e.length; c++) {
                this.fire(e[c].name)
            }
        },
        _getPixelData: function(k, f) {
            var h = [], c, b;
            k = k || [];
            f = f || {};
            for (var c = 0; c < k.length; c++) {
                b = k[c].split(".");
                switch (b[0]) {
                case "device":
                    h.push(a.device[b[1]]);
                    break;
                case "settings":
                    h.push(a.settings.get(b[1]));
                    break;
                case "history":
                    h.push(a.history.get(b[1]));
                    break;
                case "ia":
                    var g;
                    try {
                        g = a.duckbar.getActiveTab().model.pixelId
                    } catch (j) {
                        g = ""
                    }
                    h.push(g);
                    break;
                default:
                    if (f[b[0]]) {
                        h.push(f[b[0]])
                    }
                }
            }
            return h
        },
        _addPixels: function(e) {
            var c;
            this._pixelsByName = e;
            this._pixelsByTrigger = {};
            for (var b in e) {
                c = e[b];
                c.name = b;
                if (c.trigger) {
                    if (!this._pixelsByTrigger[c.trigger]) {
                        this._pixelsByTrigger[c.trigger] = []
                    }
                    this._pixelsByTrigger[c.trigger].push(c)
                }
            }
        },
        _send: function(c, f) {
            var e = Math.ceil(Math.random() * 10000000)
              , g = ""
              , b = "";
            c.forEach(function(i) {
                if (typeof i === "object" && Object.keys(i).length) {
                    for (var j in i) {
                        var k = i[j];
                        b += "&" + j + "=" + k
                    }
                } else {
                    if (g.length) {
                        g += "_"
                    }
                    g += i
                }
            });
            if (a.querystringParam("atb")) {
                b += "&atb=" + a.querystringParam("atb")
            }
            if (f.once) {
                var h = g + b;
                if (this._sentPixels.indexOf(h) > -1) {
                    return
                }
                this._sentPixels.push(h)
            }
            if (a.duckpan || a.device.isDDGIgnore) {
                return
            }
            return $('<img src="/t/' + g + "?" + e + b + '"/>')
        }
    });
    a.pixel = new a.Utils.Pixel()
}(DDG);
!function(a) {
    a.Views.Base = function(b) {
        this.model = b.model;
        this.views = this.views || {};
        this.$parent = (typeof b.appendTo === "string") ? $(b.appendTo) : b.appendTo;
        this.$before = (typeof b.before === "string") ? $(b.before) : b.before;
        this.$after = (typeof b.after === "string") ? $(b.after) : b.after;
        if (b.events) {
            for (var c in b.events) {
                this.on(c, b.events[c])
            }
        }
        this._render(b);
        this._wrapLinks()
    }
    ;
    a.Views.Base.prototype = $.extend({}, EventEmitter2.prototype, a.Mixins.Events, {
        destroy: function() {
            this.unbindEvents();
            this.destroyChildViews();
            this.$el.remove()
        },
        destroyChildViews: function() {
            !function b(e) {
                if (!e) {
                    return
                }
                var f;
                if ($.isArray(e)) {
                    for (var g = 0; g < e.length; g++) {
                        f = e[g];
                        if (f && $.isArray(f)) {
                            b(f)
                        } else {
                            f && f.destroy && f.destroy()
                        }
                    }
                    e = null 
                } else {
                    for (var h in e) {
                        f = e[h];
                        if (f && $.isArray(f)) {
                            b(f)
                        } else {
                            f && f.destroy && f.destroy()
                        }
                        delete e[h]
                    }
                }
            }(this.views);
            delete this.views
        },
        _render: function(b) {
            if (!this.$el) {
                if (b && b.$el) {
                    this.$el = b.$el
                } else {
                    this.$el = DDG.$exec_template(this.template, b || {})
                }
            }
            if (!this.$el) {
                throw new Error("Template Not Found: " + this.template)
            }
            this._addToDOM();
            this.$ = this.$el.find.bind(this.$el)
        },
        _rerender: function() {
            var c = this.$el.prev();
            if (c.length) {
                delete this.$parent;
                this.$after = c
            } else {
                var b = this.$el.next();
                if (b.length) {
                    delete this.$parent;
                    this.$before = b
                }
            }
            this.$el.remove();
            delete this.$el;
            this._render();
            this.emit("rerender");
            this._wrapLinks()
        },
        _wrapLinks: function() {
            if (!this.$) {
                return
            }
            this.$("a").each(function(c, e) {
                var b = $(e);
                if (b.data("wrapped")) {
                    return
                } else {
                    b.data("wrapped", true)
                }
                if (!DDG.isInternalURL(e.href)) {
                    $(e).on("click.wrap", this._onExternalLinkClick.bind(this))
                }
            }
            .bind(this))
        },
        _addToDOM: function() {
            if (this.$parent) {
                this.$parent.append(this.$el)
            } else {
                if (this.$before) {
                    this.$before.before(this.$el)
                } else {
                    if (this.$after) {
                        this.$after.after(this.$el)
                    }
                }
            }
        },
        _cacheElems: function(f, c) {
            for (var e = 0; e < c.length; e++) {
                var b = f + "-" + c[e]
                  , g = "$" + c[e].replace(/-/g, "");
                this[g] = this.$(b)
            }
        },
        _onExternalLinkClick: function(c) {
            var b = c.currentTarget;
            if (DDG.settings && !DDG.settings.isDefault("kn")) {
                b.target = "_blank"
            }
            return nrl(c, b)
        }
    })
}(DDG);
!function(h) {
    var a = h.Views.Base
      , r = "nav-menu__item"
      , b = "is-open"
      , n = "has-slideout-open"
      , i = ".js-side-menu-open"
      , f = ".js-side-menu-msg"
      , c = ".js-side-menu-region"
      , q = ".js-side-menu-date"
      , g = "theme-is-selected"
      , p = "menuTouchOrClick";
    h.Views.SideMenu = function(t) {
        this.pageType = t.pageType;
        this.showDateFilter = t.showDateFilter;
        this.featuredThemes = h.settings.themes.getFeaturedThemes();
        a.call(this, t);
        h.tap(i, o.bind(this), {
            fallbackToClick: true
        });
        h.tap(this.$close, o.bind(this), {
            fallbackToClick: true
        });
        h.touchOrClick(f, function(u) {
            h.pixel.fire("hl")
        });
        for (var s = 0; s < this.$theme.length; s++) {
            h.touchOrClick($(this.$theme[s]), j.bind(this, this.featuredThemes[s].id))
        }
        h.tap(c, k.bind(this), {
            fallbackToClick: true
        });
        h.tap(q, e.bind(this), {
            fallbackToClick: true
        });
        this.$el.bind("touchstart click", function(u) {
            u.stopPropagation()
        });
        this.$("a").click(m.bind(this));
        h.settings.on("change:" + h.settings.THEME_KEY, this._selectTheme.bind(this))
    }
    ;
    h.Views.SideMenu.prototype = $.extend({}, a.prototype, {
        template: "side_menu",
        linkTemplate: "side_menu_link",
        dateFilterPixelId: "sm1",
        show: function() {
            if (this._isShowing) {
                return
            }
            h.ImageLoader.trigger("sidemenu");
            this.$el.css("display", "block");
            this.$el.addClass(b);
            h.$html.addClass(n);
            h.touchOrClick(h.$doc, function() {
                this.hide()
            }
            .bind(this), {
                namespace: p
            });
            this._isShowing = true;
            this.emit("opened");
            if (this.views.addToBrowser) {
                h.pixel.fire("atbmi", h.device.pixelBrowserName, this.views.addToBrowser.version)
            }
            if (this.showDateFilter) {
                h.pixel.fire("df", "i", h.search.dateFilterId || "a", h.device.pixelId, this.dateFilterPixelId)
            }
        },
        hide: function() {
            if (!this._isShowing) {
                return
            }
            this.$el.removeClass(b);
            h.$html.removeClass(n);
            h.touchOrClick(h.$doc, "", {
                namespace: p
            });
            this._isShowing = false;
            this.emit("closed")
        },
        _render: function(u) {
            var t = h.device
              , C = h.search
              , A = h.settings.region
              , B = t.canAddToBrowser()
              , z = DDG.$exec_template(this.linkTemplate, u)
              , x = h.settings.isDefault("kak")
              , y = this.pageType !== "home"
              , v = h.querystringParam("t") || h.querystringParam("atb");
            u.themes = this.featuredThemes;
            if (u.showFilters) {
                if (u.showDateFilter) {
                    u.dateFilter = {
                        active: !!C.dateFilterId,
                        name: C.getDateFilterName()
                    }
                }
                u.regionFilter = {
                    active: A.hasRegion(),
                    name: A.getName(),
                    iconURL: A.getSmallIconURL()
                }
            }
            if (t.isMobileDevice && B) {
                for (var s in h.Data.Apps) {
                    if (t[s]) {
                        u.addToBrowserLinks = [{
                            href: h.Data.Apps[s],
                            title: l("Get App")
                        }]
                    }
                }
            }
            a.prototype._render.call(this, u);
            this._cacheElems(".js-side-menu", ["close", "add-to", "theme"]);
            $(u.appendLinkTo).append(z);
            this._selectTheme(h.settings.get(h.settings.THEME_KEY));
            if (x && y && !t.isMobileDevice) {
                if (!v && B) {
                    this.views.addToBrowser = new h.Views.AddToBrowserBadge({
                        noBreak: true,
                        entryPoint: "sm",
                        clickPixel: "atbmc",
                        xPixel: "atbmx",
                        appendTo: this.$el
                    })
                }
            }
        },
        _selectTheme: function(t) {
            this.$("." + g).removeClass(g);
            t = t || h.settings.getDefault(h.settings.THEME_KEY);
            for (var s = 0; s < this.featuredThemes.length; s++) {
                if (t === this.featuredThemes[s].id) {
                    $(this.$theme[s]).addClass(g)
                }
            }
        }
    });
    var m = function(v) {
        var s = $(v.target)
          , t = s.attr("href")
          , u = s.attr("data-settings");
        if ((h.page.pageType === "serp" || h.page.pageType === "home") && h.device.isSafari && u) {
            h.history.set("rld", "1")
        }
        if (t !== "#") {
            h.pixel.fire("sml", t)
        }
    }
      , o = function(t) {
        t.preventDefault();
        t.stopPropagation();
        if (Modernizr.touch) {
            var s = DDG.get_now();
            if (this._lastTime && s - this._lastTime < 600) {
                return
            }
            this._lastTime = s
        }
        if (!this._isShowing) {
            h.pixel.fire("smo", this.pageType);
            this.show()
        } else {
            this.hide()
        }
    }
      , j = function(t, s) {
        s.preventDefault();
        s.stopPropagation();
        h.settings.setTheme(t, {
            saveToCloud: true,
            updateURLParams: true
        })
    }
      , e = function(s) {
        s.preventDefault();
        this.views.dateFilter = this.views.dateFilter || new h.Views.DateFilterModal({
            pixelVersion: this.dateFilterPixelId,
            type: "popover",
            appendTo: "body"
        });
        this.views.dateFilter.show();
        h.pixel.fire("df", "o", h.search.dateFilterId || "a", h.device.pixelId, this.dateFilterPixelId)
    }
      , k = function(s) {
        s.preventDefault();
        this.views.regionFilter = this.views.regionFilter || new h.Views.RegionFilterModal({
            type: "popover",
            appendTo: "body"
        });
        this.views.regionFilter.show()
    }
}(DDG);
!function(f) {
    var a = f.Views.Base
      , b = ".js-search-filters"
      , j = "js-search-hidden-field";
    f.Views.SearchBar = function(o) {
        this.$el = typeof o.el === "string" ? $(o.el) : o.el;
        a.call(this, o)
    }
    ;
    f.Views.SearchBar.prototype = $.extend({}, a.prototype, {
        _render: function(o) {
            a.prototype._render.call(this, o);
            this._cacheElems(".js-search", ["input", "clear", "button", "hidden"]);
            this.$body = $("body");
            this._upgradeToJSForm();
            this._updateInput();
            this.$input.on("keyup", m.bind(this)).on("touchstart focus", k.bind(this));
            this.$clear.add(this.$button).on("focus", c.bind(this));
            f.keyboard.on("escape.searchbar", h.bind(this));
            f.touchOrClick(this.$clear, n.bind(this));
            f.touchOrClick(this.$el, e.bind(this));
            if (Modernizr.touch) {
                this.$button.on("touchstart", g.bind(this))
            }
            this.$input[0].setAttribute("autocapitalize", "off");
            this.$input[0].setAttribute("autocorrect", "off");
            f.settings.on("change:" + f.settings.AUTOCOMPLETE_KEY, this._updateAutocomplete.bind(this));
            f.settings.on("change", this._updateHiddenFields.bind(this));
            f.settings.on("change:cloudsave", this._updateHiddenFields.bind(this));
            f.hidden.on("change", this._updateHiddenFields.bind(this));
            f.search.on("requery", this.requery.bind(this));
            this._updateAutocomplete();
            this._updateHiddenFields();
            if (o.showFilters) {
                this.views.regionFilter = new f.Views.RegionFilter({
                    appendTo: b
                });
                if (o.showDateFilter) {
                    this.views.dateFilter = new f.Views.DateFilter({
                        appendTo: b
                    });
                    this.views.regionFilter.on("modal-shown", function() {
                        this.views.dateFilter.hideModal()
                    }
                    .bind(this));
                    this.views.dateFilter.on("modal-shown", function() {
                        this.views.regionFilter.hideModal()
                    }
                    .bind(this))
                }
            }
        },
        focus: function() {
            if (fq) {
                return
            }
            fq = 1;
            this.$input.focus();
            this.$el.addClass("search--focus");
            f.$html.addClass("has-search-focus");
            f.tap(this.$body, i.bind(this), {
                fallbackToClick: true,
                namespace: "searchbar"
            });
            this.hasFocus = true
        },
        unfocus: function() {
            if (!fq) {
                return
            }
            fq = 0;
            this.$input.blur();
            this.$el.removeClass("search--focus");
            f.$html.removeClass("has-search-focus");
            f.tap(this.$body, null , {
                namespace: "searchbar"
            });
            if (f.keyboard.namespace === "searchbar") {
                f.keyboard.set("namespace")
            }
            this.hasFocus = false
        },
        requery: function() {
            f.history.clear("ia", "iai", "iax");
            this._updateHiddenFields();
            this.$el.submit()
        },
        _autocompleteOn: function() {
            if (!this.$input || this.autocomplete) {
                return
            }
            this.autocomplete = new DDG.Views.AutoComplete({
                $input: this.$input
            });
            this.autocomplete.on("submit", function() {
                this.$el.submit()
            }
            .bind(this));
            this.$el.append(this.autocomplete.$el)
        },
        _autocompleteOff: function() {
            this.autocomplete && this.autocomplete.destroy();
            delete this.autocomplete
        },
        _clearForm: function() {
            if (this.autocomplete) {
                this.autocomplete.clear();
                this.autocomplete.hide()
            }
            this.$input.val("") && this.$input.focus();
            this._updateInput()
        },
        _upgradeToJSForm: function() {
            this.$el.addClass("search--adv").removeClass("search");
            this.$input.addClass("search__input--adv").removeClass("search__input");
            this.$el.hover(function() {
                $(this).addClass("search--hover")
            }, function() {
                $(this).removeClass("search--hover")
            })
        },
        _updateAutocomplete: function() {
            var o = f.settings.get(f.settings.AUTOCOMPLETE_KEY);
            if (o && o == "-1") {
                this._autocompleteOff()
            } else {
                this._autocompleteOn()
            }
        },
        _updateHiddenFields: function() {
            this.$el.find("." + j).remove();
            var p = f.settings.toJSON({
                onlyURLParams: true
            });
            p = $.extend({}, p, f.hidden.toJSON());
            for (var o in p) {
                this.$hidden.append('<input type="hidden" name="' + o + '" value="' + p[o] + '" class="' + j + '" />')
            }
        },
        _updateInput: function() {
            this._updateClearButton()
        },
        _updateClearButton: function() {
            if (!this.$input) {
                return
            }
            var o = this.$input.val();
            if (!o || o === "") {
                this.$el.removeClass("has-text");
                this.$clear.addClass("empty");
                this._hasText = ""
            } else {
                if (!this._hasText) {
                    this.$el.addClass("has-text");
                    this.$clear.removeClass("empty");
                    this._hasText = 1
                }
            }
        },
        getSiteQuery: function(q) {
            if (!q) {
                return false
            }
            q = f.strip_html(q);
            var p = /^(.*)(site:([^\s]+))(.*)$/i
              , o = q.match(p);
            if (!o || !o.length) {
                return
            }
            return {
                all: o[0],
                url: o[3],
                site: o[2],
                before: o[1],
                after: o[4],
                query: o[1] + o[4]
            }
        },
        addBangToSiteInQuery: function(o, p) {
            return p.replace(new RegExp("(^|\\s)(" + o + ")($|\\s)","i"), "$1!$2$3")
        }
    });
    var m = function() {
        this.focus();
        if (!f.keyboard.namespace) {
            f.keyboard.set("namespace", "searchbar")
        }
        this._updateClearButton();
        if (!this._emittedTypedEvent) {
            this.emit("typed");
            this._emittedTypedEvent = true
        }
    }
      , n = function(o) {
        o.preventDefault();
        o.stopPropagation();
        this._clearForm()
    }
      , c = function(o) {
        f.keyboard.set("namespace", "searchbar")
    }
      , k = function(o) {
        o.stopPropagation();
        f.keyboard.set("namespace", "searchbar");
        this.emit("focus");
        this.focus()
    }
      , g = function(o) {
        o.stopPropagation()
    }
      , e = function(o) {
        o.stopPropagation();
        this.focus()
    }
      , i = function(o) {
        f.device.isMobileDevice && o.preventDefault();
        o.stopPropagation();
        this.emit("unfocus");
        this.unfocus()
    }
      , h = function(o) {
        if (this.autocomplete && this.autocomplete.isVisible()) {
            this.autocomplete.hide()
        } else {
            this.unfocus()
        }
    }
}(DDG);
!function(c) {
    var b = c.Views.Base
      , a = "no-scroll";
    c.Views.Slider = function(e) {
        e = e || {};
        this.$el = e.$el || e.el && $(e.el);
        b.call(this, e);
        this.init(e)
    }
    ;
    c.Views.Slider.prototype = $.extend({}, b.prototype, {
        init: function(h) {
            if (!h.items) {
                return
            }
            this.items = [];
            this.$items = this.$el.find(h.items);
            this.noLoop = h.noLoop || "";
            if (h.next && h.prev) {
                this.$next = this.$el.find(h.next);
                this.$prev = this.$el.find(h.prev);
                this.$next.bind("click", this._onNextClick.bind(this));
                this.$prev.bind("click", this._onPrevClick.bind(this))
            }
            if (h.nav) {
                this.nav = h.nav;
                this.nav.className = h.nav.className || "slider-nav";
                if (this.nav.bindOnly) {
                    this.$nav = this.$el.find("." + this.nav.className)
                }
            }
            for (var g = 0, e = this.$items.length; g < e; g++) {
                var j = {}
                  , f = $(this.$items[g]);
                j.idx = g;
                j.$html = f;
                if (h.nav) {
                    if (h.nav.bindOnly || h.nav.noBind) {
                        j.$nav = $(this.$nav[g]);
                        j.$nav.on("click", this._onNavClick.bind(this, g))
                    } else {
                        j.$nav = this._makeNav(g)
                    }
                }
                this.items[g] = j
            }
            this.items[0].$html.addClass("is-first");
            this.activeByIndex(0);
            if (h.animate) {
                this._animate = true;
                this.$slideEl = (h.slideEl) ? this.$el.find(h.slideEl) : this.items[0].$html;
                this.slideCb = h.animateCallback || ""
            }
            if (h.timeout) {
                this._timing = parseInt(h.timeout);
                this.setTimer();
                if (h.killtimeronclick) {
                    this._killTimer = 1
                }
            }
        },
        _makeNav: function(f) {
            if (!this.$navWrap) {
                this.$navWrap = this._makeNavWrap()
            }
            var e = $('<li class="' + this.nav.className + '__item"></li>');
            e.on("click", this._onNavClick.bind(this, f));
            e.appendTo(this.$navWrap);
            return e
        },
        _makeNavWrap: function() {
            var e = $('<ul class="' + this.nav.className + '"></ul>');
            e.appendTo(this.$el);
            return e
        },
        setTimer: function() {
            this.clearTimer();
            var e = this;
            this.Timer = setTimeout(function() {
                e.advanceSlides()
            }, this._timing)
        },
        clearTimer: function() {
            var e = this;
            clearTimeout(e.Timer)
        },
        killTimer: function() {
            this.clearTimer();
            this._timing = ""
        },
        advanceSlides: function(e) {
            if (!e) {
                e = 1
            }
            e = parseInt(e);
            var f = this._activeItem.idx + e;
            if (this.noLoop && (f >= this.items.length || f < 0)) {
                return false
            }
            if (f >= this.items.length) {
                f = 0
            } else {
                if (f < 0) {
                    f = this.items.length - 1
                }
            }
            this.activeByIndex(f);
            if (this._timing) {
                this.setTimer()
            }
        },
        activeByIndex: function(e) {
            var f = this.items[e];
            if (!f) {
                return
            }
            this.deactivate();
            this._activeItem = f;
            this._activeItem.$html.addClass("is-active");
            if (this.nav) {
                this._activeItem.$nav.addClass("is-active")
            }
            if (this.noLoop && this.$next && this.$prev) {
                this._checkLoopPosition(e)
            }
            if (this._animate) {
                this.slideItems(e)
            }
        },
        deactivate: function() {
            if (!this._activeItem) {
                return
            }
            this._activeItem.$html.removeClass("is-active");
            if (this.nav) {
                this._activeItem.$nav.removeClass("is-active")
            }
        },
        slideItems: function(e) {
            var f = e * 100;
            this.$slideEl.css("margin-left", "-" + f + "%");
            if (this.slideCb) {
                this.slideCb(e)
            }
        },
        _checkLoopPosition: function(e) {
            if (this.$curNav) {
                this.$curNav.removeClass(a);
                delete this.$curNav
            }
            if (e === 0) {
                this.$prev.addClass(a);
                this.$curNav = this.$prev
            } else {
                if (e == this.items.length - 1) {
                    this.$next.addClass(a);
                    this.$curNav = this.$next
                }
            }
        },
        _onNextClick: function() {
            if (this._killTimer) {
                this.killTimer()
            }
            this.advanceSlides()
        },
        _onPrevClick: function() {
            if (this._killTimer) {
                this.killTimer()
            }
            this.advanceSlides(-1)
        },
        _onNavClick: function(f, g) {
            if (this.nav.noClick) {
                return
            }
            if (this._killTimer) {
                this.killTimer()
            }
            this.activeByIndex(f);
            if (this._timing) {
                this.setTimer()
            }
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.Base;
    c.Views.PlayButton = function(f) {
        this.url = f.url;
        if (!this.url && f.$el) {
            this.url = f.$el.data("url")
        }
        b.call(this, f);
        this.$btn = this.$(".js-play-btn-icn");
        this.$err = this.$(".js-play-btn-err");
        this.$btn.on("click", this.play.bind(this))
    }
    ;
    c.Views.PlayButton.prototype = $.extend({}, b.prototype, {
        template: "play_button",
        play: function() {
            this.$btn.text("");
            c.require("audio", a.bind(this))
        }
    });
    var a = function(g) {
        if (!g || !g.ready) {
            return e.call(this)
        }
        var f = this;
        g.play(this.url, this.url, {
            autoPlay: true,
            onloadstart: function() {
                f.$btn.addClass("is-loading")
            },
            onload: function(h) {
                if (!h) {
                    e.call(f)
                }
            },
            onplay: function() {
                f.$btn.removeClass("is-loading");
                f.$btn.addClass("is-playing")
            },
            onfinish: function() {
                f.$btn.removeClass("is-playing");
                f.$btn.text("►")
            }
        })
    }
      , e = function() {
        this.$btn.addClass("is-hidden");
        this.$err.removeClass("is-hidden");
        this.$err.text("Audio Unavailable")
    }
}(DDG);
!function(c) {
    var b = c.Views.Base
      , e = 50
      , a = 50
      , f = 2000;
    c.Views.Notification = function(g) {
        b.call(this, g);
        this.$text = this.$(".js-notification-text");
        this._initTime = new Date().getTime();
        this.$el.on("click touchstart", function(h) {
            h.stopPropagation();
            this.hide()
        }
        .bind(this))
    }
    ;
    c.Views.Notification.prototype = $.extend({}, b.prototype, {
        template: "notification",
        flash: function(h, g) {
            if (new Date().getTime() - this._initTime < e) {
                return setTimeout(this.flash.bind(this, h, g), a)
            }
            this.hide();
            this.$text.text(h);
            this.$el.addClass("is-showing");
            this._timeout = setTimeout(this.hide.bind(this), g || f)
        },
        hide: function() {
            if (this._timeout) {
                clearTimeout(this._timeout);
                delete this._timeout
            }
            this.$el.removeClass("is-showing")
        }
    })
}(DDG);
!function(c) {
    var a = c.Views.Base
      , e = "imgFallback=/assets/icons/favicons/bang.png"
      , g = "acp"
      , b = g + "--highlight"
      , j = g + "--bang"
      , i = "acp-wrap--bang"
      , h = "acp-wrap__column--left"
      , f = "acp-wrap__column--right";
    c.Views.AutoComplete = function(k) {
        a.call(this, k);
        this.$input = k.$input;
        this.$wrap = this.$(".acp-wrap");
        this.$footer = this.$(".acp-footer");
        this._endpoint = c.services.getURL("autocomplete");
        this.$el.on("mouseleave.autocomplete", this._onMouseLeave.bind(this)).on("mousemove.autocomplete", "." + g, this._onMouseMove.bind(this)).on("mousedown.autocomplete", "." + g, this._onMouseDown.bind(this)).on("touchstart.autocomplete", "." + g, this._onTouchStart.bind(this)).on("click.autocomplete", "." + g, this._onClick.bind(this));
        this.$input.on("keyup.autocomplete", this._onKeyUp.bind(this)).on("blur.autocomplete", this._onBlur.bind(this)).on("paste.autocomplete", this._onPaste.bind(this)).on("click.autocomplete", this.show.bind(this));
        this.bindEvents([[c.keyboard, "escape.autocomplete", this._onEscape], [c.keyboard, "enter.autocomplete", this._onEnter], [c.keyboard, "up.autocomplete", this._onUp], [c.keyboard, "down.autocomplete", this._onDown], [c.keyboard, "left.autocomplete", this._onLeft], [c.keyboard, "right.autocomplete", this._onRight], [c.keyboard, "down.searchbar", this._onSearchBarDown]])
    }
    ;
    c.Views.AutoComplete.prototype = $.extend({}, a.prototype, {
        template: "autocomplete",
        suggestions: [],
        _cache: {},
        _selectedIndex: -1,
        _currentQuery: "",
        _visible: false,
        _bangLayoutTemplate: "autocomplete_bang_layout",
        _textItemTemplate: "autocomplete_text_item",
        _bangItemTemplate: "autocomplete_bang_item",
        destroy: function() {
            this.$input.off(".autocomplete");
            a.prototype.destroy.call(this)
        },
        isBangQuery: function(k) {
            return !!k.match(/^![^! ]*\s?$/)
        },
        show: function() {
            if (this.suggestions.length > 0) {
                this._visible = true;
                this._resetMouseMove();
                this.$el.show()
            }
        },
        hide: function() {
            this._visible = false;
            this.$el.hide();
            this._resetMouseMove();
            if (c.keyboard.namespace === "autocomplete") {
                c.keyboard.set("namespace")
            }
        },
        clear: function() {
            this._cache = {};
            this.suggestions = [];
            this._selectedIndex = -1;
            this._currentQuery = ""
        },
        isVisible: function() {
            return this._visible
        },
        _resetMouseMove: function() {
            this._initialMousePos = null ;
            this._mouseMoved = false
        },
        _updateScroll: function() {
            var m, o, p, n, k;
            m = this.$("." + g + "." + b);
            if (m.length === 0) {
                return
            }
            o = this.$wrap.scrollTop();
            p = parseInt(this.$wrap.css("height"));
            n = m.position().top;
            k = n + parseInt(m.css("height")) + 2 * parseInt(m.css("padding-bottom"));
            if (n < 0) {
                this.$wrap.scrollTop(o + n)
            } else {
                if (k > p) {
                    this.$wrap.scrollTop(o + k - p)
                }
            }
        },
        _selectItem: function(k) {
            if (k === this._selectedIndex) {
                return
            }
            this.$("." + b).removeClass(b);
            this._selectedIndex = k;
            if (!this.suggestions[k]) {
                this.$input.val(this._currentQuery);
                return
            }
            var n = this.suggestions[k].phrase
              , m = this.isBangQuery(this._currentQuery);
            if (m) {
                n += " "
            }
            this.$input.val(n);
            this.$("." + g + "[data-index='" + k + "']").addClass(b)
        },
        _isColumnLayout: function() {
            return this.isBangQuery(this._currentQuery) && !c.device.isMobile
        },
        _renderBangResults: function(o) {
            var p = this._bangItemTemplate, n, r, k = c.device.isMobile, q, m;
            this.$wrap.append(DDG.$exec_template(this._bangLayoutTemplate));
            n = this.$("." + h);
            r = this.$("." + f);
            q = Math.ceil(o.length / 2);
            $.each(o, function(t, s) {
                s.i = t;
                s.originalQuery = this._currentQuery;
                if (s.phrase.length > 11) {
                    s.longPhrase = true
                }
                s.image += "?" + e;
                m = DDG.exec_template(p, s);
                if (t < q || k) {
                    n.append(m)
                } else {
                    r.append(m)
                }
            }
            .bind(this));
            this.$wrap.addClass(i);
            this.$footer.removeClass("is-hidden")
        },
        _renderTextResults: function(m) {
            var n = this._textItemTemplate
              , k = c.strip_all_html(this._currentQuery);
            $.each(m, function(p, o) {
                var q = c.strip_all_html(o.phrase);
                this.$wrap.append(DDG.$exec_template(n, {
                    i: p,
                    phrase: q.replace(k, "<strong>" + k + "</strong>")
                }))
            }
            .bind(this));
            this.$wrap.removeClass(i);
            this.$footer.addClass("is-hidden")
        },
        _displayResults: function(k) {
            if (k.length === 0) {
                this.hide();
                return
            }
            if (!this._visible) {
                this.show()
            }
            this._resetMouseMove();
            this._selectedIndex = -1;
            this.$wrap.html("");
            if (this.isBangQuery(this._currentQuery)) {
                this._renderBangResults(k)
            } else {
                this._renderTextResults(k)
            }
        },
        _getSuggestions: function(k) {
            if (this._cache[k]) {
                this.suggestions = this._cache[k];
                return this._displayResults(this._cache[k])
            }
            if (this._lastAjax && this._lastAjax.abort) {
                this._lastAjax.abort()
            }
            window.autocompleteCallback = function(m) {
                delete this._lastAjax;
                if (k !== this._currentQuery) {
                    return
                }
                this.suggestions = m;
                this._cache[k] = m;
                this._displayResults(m)
            }
            .bind(this);
            this._lastAjax = $.ajax({
                url: this._endpoint,
                crossDomain: true,
                data: {
                    q: c.strip_all_html(k)
                },
                type: "GET",
                context: this,
                dataType: "jsonp",
                jsonpCallback: "autocompleteCallback"
            }).fail(function(n, m) {
                delete this._lastAjax;
                if (m !== "abort") {
                    this.hide()
                }
            }).done(window.autocompleteCallback)
        },
        _selectItemByOffset: function(m) {
            var k = this._selectedIndex + m;
            if (k >= this.suggestions.length) {
                return
            }
            this._selectItem(k);
            this._updateScroll()
        },
        _focusInput: function() {
            var k = this.$input.val();
            this.$input.focus().val(k)
        },
        _onMouseMove: function(n) {
            var k = n.pageX
              , o = n.pageY;
            if (this._mouseMoved) {
                var m = $(n.currentTarget).data("index");
                this._selectItem(m);
                c.keyboard.set("namespace", "autocomplete");
                return
            }
            if (!this._initialMousePos) {
                this._initialMousePos = {
                    x: k,
                    y: o
                }
            } else {
                if (Math.abs(this._initialMousePos.x - k) > 3 || Math.abs(this._initialMousePos.y - o) > 3) {
                    this._mouseMoved = true
                }
            }
        },
        _onMouseLeave: function() {
            if (this._mouseMoved) {
                this._selectItem(-1)
            }
        },
        _onTouchStart: function(m) {
            m.stopPropagation();
            var k = $(m.currentTarget).data("index");
            this._selectItem(k)
        },
        _onBlur: function(k) {
            if (this._selectedIndex > -1) {
                return
            }
            this.hide()
        },
        _onMouseDown: function(m) {
            var k = $(m.currentTarget).data("index");
            this._selectItem(k)
        },
        _onClick: function(n) {
            var k = $(n.currentTarget)
              , m = k.data("index");
            if (!this.isBangQuery(this._currentQuery)) {
                this.emit("submit")
            }
            this.clear();
            this.hide();
            this._focusInput()
        },
        _onEscape: function(k) {
            if (!this._visible) {
                return
            }
            this._selectItem(-1);
            this._focusInput();
            this.hide()
        },
        _onEnter: function(k) {
            if (!this._visible) {
                return
            }
            if (this.isBangQuery(this._currentQuery)) {
                k.stopImmediatePropagation();
                k.preventDefault();
                this._focusInput()
            } else {
                this.emit("submit")
            }
            this.clear();
            this.hide()
        },
        _onSearchBarDown: function(k) {
            if (!this._visible) {
                return
            }
            this._onDown(k);
            c.keyboard.set("namespace", "autocomplete");
            if (this.isBangQuery(this._currentQuery)) {
                this.$input.blur()
            }
        },
        _onPaste: function(k) {
            this._resetMouseMove();
            setTimeout(function() {
                this._currentQuery = this.$input.val();
                this._getSuggestions(this._currentQuery)
            }
            .bind(this), 0)
        },
        _onKeyUp: function(m) {
            var k = m.keyCode;
            if (this.$input.val() === this._currentQuery || c.keyboard.keyCodeIsOneOf(k, ["up", "down", "left", "right", "enter", "escape", "shift", "ctrl", "alt", "cmd"])) {
                return
            }
            this._currentQuery = this.$input.val();
            if (this._currentQuery) {
                this._getSuggestions(this._currentQuery)
            } else {
                this.suggestions = [];
                this.hide()
            }
        },
        _onUp: function(m) {
            m.preventDefault();
            var k = Math.ceil(this.suggestions.length / 2);
            if (this._selectedIndex === 0) {
                this._focusInput()
            }
            if (this._isColumnLayout() && this._selectedIndex === k) {
                return
            }
            this._selectItemByOffset(-1)
        },
        _onDown: function(n) {
            n.preventDefault();
            var m = Math.ceil(this.suggestions.length / 2), k;
            k = this._selectedIndex === this.suggestions.length - 1 || (this._isColumnLayout() && this._selectedIndex === m - 1);
            if (k) {
                return
            }
            this._selectItemByOffset(1)
        },
        _onLeft: function(m) {
            if (!this.isBangQuery(this._currentQuery)) {
                return
            }
            m.preventDefault();
            var k = Math.ceil(this.suggestions.length / 2);
            if (this._isColumnLayout() && this._selectedIndex >= k) {
                this._selectItemByOffset(-k)
            }
        },
        _onRight: function(m) {
            if (!this.isBangQuery(this._currentQuery)) {
                return
            }
            m.preventDefault();
            var k = Math.ceil(this.suggestions.length / 2);
            if (this._isColumnLayout() && this._selectedIndex < k) {
                this._selectItemByOffset(k)
            }
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.Modal = function(c) {
        a.call(this, c);
        b.keyboard.on("escape.modal", this.hide.bind(this))
    }
    ;
    b.Views.Modal.prototype = $.extend({}, a.prototype, {
        show: function() {
            if (this.isShowing) {
                return
            }
            this.isShowing = true;
            this.$el.addClass("is-showing");
            setTimeout(function() {
                b.$doc.on("mouseup.modal touchend.modal", this.hide.bind(this))
            }
            .bind(this), 1);
            this.$el.on("mouseup.modal touchend.modal", function(c) {
                c.stopPropagation()
            });
            b.keyboard.set("namespace", "modal");
            this.emit("shown")
        },
        hide: function() {
            if (!this.isShowing) {
                return
            }
            this.isShowing = false;
            this.$el.removeClass("is-showing");
            b.$doc.off("mouseup.modal touchend.modal");
            this.$el.off("mouseup.modal touchend.modal");
            b.keyboard.set("namespace");
            this.emit("hidden")
        },
        toggle: function() {
            return this.isShowing ? this.hide() : this.show()
        },
        destroy: function() {
            this.hide();
            a.prototype.destroy.call(this)
        },
        _render: function(c) {
            a.prototype._render.call(this, c);
            this.$(".js-modal-close").click(function(f) {
                f.preventDefault();
                f.stopPropagation();
                this.hide()
            }
            .bind(this))
        }
    })
}(DDG);
!function(g) {
    var b = g.Views.Slider
      , c = 50;
    g.Views.HomepageTagline = function(k) {
        b.call(this, k)
    }
    ;
    g.Views.HomepageTagline.prototype = $.extend({}, b.prototype, {
        template: "homepage_tagline",
        _render: function(n) {
            var k = g.settings.isDefault("kal");
            n.items = ".js-tag-item";
            if (k) {
                n.timeout = 6000;
                n.nav = {
                    className: "tag-home__nav"
                }
            }
            var m = i(g.Data.Homepage.queries)
              , o = lp("frontpage", "The search engine that doesn't track you.") + ' <span class="hide--screen-xs">' + lp("frontpage", "%sLearn More%s.", '<a href="/about">', "</a>") + "</span>";
            n.taglines = g.shuffle([lp("frontpage", "New to DuckDuckGo? %sTake a Tour.%s", '<a href="/tour">', "</a>"), lp("frontpage", "Already a fan? %sHelp Spread DuckDuckGo!%s", '<a href="/spread">', "</a>"), lp("frontpage", "Did you know you can %scustomize%s DuckDuckGo?", '<a href="/settings">', "</a>"), lp("frontpage", "Need ideas? Try %s.", m)]);
            n.taglines.unshift(o);
            b.prototype._render.call(this, n);
            if (Modernizr.touch) {
                this.$el.on("touchstart.tagline", e.bind(this))
            }
            this.$(".js-tag-item a").click(function(q) {
                var p = $(q.target).attr("href");
                g.pixel.fire("htl", p)
            })
        },
        _makeNavWrap: function() {
            var n = this.nav.className
              , k = $('<ul class="' + n + '__wrap"></ul>')
              , o = $('<div class="' + n + '__close ddgsi">×</div>')
              , m = $('<div class="' + n + '"></div>');
            k.append(o);
            m.append(k);
            this.$el.append(m);
            o.click(j.bind(this));
            k.click(this.advanceSlides.bind(this, 1));
            return k
        },
        _onNavClick: function(k, m) {
            m.stopPropagation();
            b.prototype._onNavClick.call(this, k, m)
        },
        _onExternalLinkClick: function() {}
    });
    function i(k) {
        var m = k[Math.floor(Math.random() * k.length)];
        return '<a href="' + m.href + '">' + m.label + "</a>"
    }
    function f(m) {
        var k = m.originalEvent.touches
          , n = k && k[0];
        return n && n.clientX
    }
    function e(k) {
        g.$doc.on("touchmove.tagline", a.bind(this));
        g.$doc.on("touchend.tagline", h.bind(this));
        this._startX = f(k)
    }
    function a(m) {
        var k = f(m);
        if (k) {
            var n = k - this._startX;
            if (Math.abs(n) > c) {
                this.advanceSlides(n > 0 ? -1 : 1);
                h.call(this)
            }
        }
    }
    function h() {
        g.$doc.off("touchmove.tagline");
        g.$doc.off("touchend.tagline")
    }
    function j() {
        this.activeByIndex(0);
        this.killTimer();
        this.$navWrap.remove();
        g.settings.set("kal", -1, {
            saveToCloud: true
        })
    }
}(DDG);
!function(c) {
    var b = c.Views.Base;
    c.Views.AddToBrowserBadge = function(g) {
        g.displayBrowserName = c.device.displayBrowserName;
        g.browserId = g.displayBrowserName.toLowerCase();
        if (c.device.isIOS8p) {
            this.template = "add_to_browser_badge_ios"
        } else {
            if (c.device.isAndroid) {
                this.template = "add_to_browser_badge_android"
            } else {
                if (g.topRight) {
                    this.template = "add_to_browser_badge_top";
                    setTimeout(function() {
                        this.$el.fadeIn()
                    }
                    .bind(this), 500)
                } else {
                    if ((c.device.isFirefoxWithNativeDDG || c.device.isChrome48AndUp) && !c.device.isMobileDevice) {
                        this.template = "add_to_browser_badge_link";
                        g.url = "//" + w.location.hostname + "/install_" + c.device.browserName.toLowerCase()
                    }
                }
            }
        }
        this.xPixel = g.xPixel;
        this.clickPixel = g.clickPixel;
        this.entryPoint = g.entryPoint || "hp";
        if (c.device.isSafari) {
            g.showButton = true
        }
        b.call(this, g);
        this.bindEvents([[this.$el, "click", e], [".js-badge-link-close", "click", f], [".js-badge-link-dismiss", "click", a]])
    }
    ;
    c.Views.AddToBrowserBadge.prototype = $.extend({}, b.prototype, {
        template: "add_to_browser_badge",
        version: "v15",
        showModal: function() {
            if (!this.views.modal) {
                var g = "AddToBrowserModal";
                if (c.device.isIOS8p || c.device.isAndroid) {
                    g = "AddToBrowserModalBlurred"
                }
                this.views.modal = new c.Views[g]({
                    version: this.version,
                    entryPoint: this.entryPoint,
                    appendTo: $("body")
                })
            }
            setTimeout(function() {
                this.views.modal.show()
            }
            .bind(this), 50)
        },
        hide: function() {
            this.$el.hide()
        },
        dismiss: function() {
            c.settings.set("kak", -1, {
                saveToCloud: true
            });
            c.pixel.fire(this.xPixel, c.device.pixelBrowserName, this.version)
        }
    });
    function e(g) {
        if (this.template === "add_to_browser_badge_link") {
            c.pixel.fire(this.clickPixel, c.device.pixelBrowserName, this.version);
            return
        }
        g.preventDefault();
        if (c.device.isMobileDevice && fq) {
            return false
        }
        if (this._showingCookieMessage) {
            window.location.href = "https://start.duckduckgo.com";
            return
        }
        c.pixel.fire(this.clickPixel, c.device.pixelBrowserName, this.version);
        this.showModal()
    }
    function f(g) {
        g.preventDefault();
        g.stopPropagation();
        this.dismiss();
        this.destroy()
    }
    function a(g) {
        g.preventDefault();
        g.stopPropagation();
        this.dismiss();
        this._showingCookieMessage = true;
        this.$(".js-badge-main-msg").hide();
        this.$(".js-badge-cookie-msg").show();
        setTimeout(function() {
            this.$el && this.$el.fadeOut(600)
        }
        .bind(this), 7000)
    }
}(DDG);
!function(c) {
    var b = c.Views.Modal
      , a = "js-add-to-browser"
      , e = "is-hidden";
    c.Views.AddToBrowserModal = function(f) {
        this.version = f.version;
        this.entryPoint = f.entryPoint;
        b.call(this, f)
    }
    ;
    c.Views.AddToBrowserModal.prototype = $.extend({}, b.prototype, {
        template: "add_to_browser_modal",
        show: function() {
            b.prototype.show.call(this);
            $(window).on("blur.atb", function() {
                c.pixel.fire("atbob", this.entryPoint, c.device.pixelBrowserName, this.version)
            }
            .bind(this))
        },
        hide: function() {
            b.prototype.hide.call(this);
            $(window).off("blur.atb")
        },
        _render: function() {
            var k = c.device
              , n = k.getAddToBrowserDirections()
              , i = {
                displayBrowserName: k.displayBrowserName
            }
              , g = n.useForSearch && c.exec_template(n.useForSearch, i)
              , f = n.setAsHomepage && c.exec_template(n.setAsHomepage, i)
              , m = k.getBrowserMoreURL()
              , j = g && f
              , h = j || m;
            b.prototype._render.call(this, $.extend(i, {
                useForSearch: g,
                setAsHomepage: f,
                moreURL: m,
                hasToggle: j,
                hasFooter: h
            }));
            if (j) {
                this.$("." + a + "-search-link").click(this._showDirections.bind(this, "search"));
                this.$("." + a + "-homepage-link").click(this._showDirections.bind(this, "homepage"))
            }
            this.$(".js-btn-nui").click(function() {
                DDG.pixel.fire("atboc", this.entryPoint, c.device.pixelBrowserName, this.version);
                DDG.addSearchProvider("opensearch_" + this.version + ".xml");
                this.$(".has-btn").removeClass("has-btn");
                this.$(".js-hide-on-nui").addClass(e);
                this.$(".js-show-on-nui").removeClass(e);
                return false
            }
            .bind(this));
            this.$el.click(function(o) {
                o.preventDefault && o.stopPropagation()
            })
        },
        _showDirections: function(f, i) {
            i.preventDefault();
            i.stopPropagation();
            var g = f === "search" ? "homepage" : "search"
              , j = "." + a + "-" + g
              , h = "." + a + "-" + f;
            this.$(j).addClass(e);
            this.$(j + "-link").removeClass(e);
            this.$(h).removeClass(e);
            this.$(h + "-link").addClass(e)
        }
    })
}(DDG);
!function(e) {
    var c = e.Views.Modal;
    e.Views.AddToBrowserModalBlurred = function(f) {
        c.call(this, f)
    }
    ;
    e.Views.AddToBrowserModalBlurred.prototype = $.extend({}, c.prototype, {
        template: "add_to_browser_modal_blurred",
        _render: function(f) {
            f = f || {};
            f.content = e.exec_template(e.device.getAddToBrowserDirections().useForSearch);
            c.prototype._render.call(this, f);
            this.$backdrop = $('<div class="add-to-browser--blurred__backdrop"></div>');
            $("body").append(this.$backdrop);
            this._measureHeight();
            e.device.on("resize", this._measureHeight.bind(this));
            DDG.touchOrClick(this.$backdrop, a.bind(this));
            DDG.touchOrClick(this.$el, a.bind(this))
        },
        show: function() {
            e.$html.addClass("blurred-animation").addClass("is-blurred");
            this.$backdrop.addClass("is-showing");
            b(this.$el, "translate3d(0px," + this._translateY + "px,0px)");
            c.prototype.show.call(this)
        },
        hide: function() {
            b(this.$el, "translate3d(0px,0px,0px)");
            e.$html.removeClass("is-blurred");
            this.$backdrop.removeClass("is-showing");
            c.prototype.hide.call(this);
            setTimeout(function() {
                e.$html.removeClass("blurred-animation")
            }, 300)
        },
        _measureHeight: function() {
            this._translateY = this.$el.outerHeight() * -1;
            if (this.isShowing) {
                b(this.$el, "translate3d(0px", +this._translateY + "px,0px)")
            }
        }
    });
    var b = function(f, g) {
        f.css({
            "-webkit-transform": g,
            transform: g
        })
    }
      , a = function(f) {
        f.preventDefault();
        f.stopPropagation();
        this.hide()
    }
}(DDG);
!function(b) {
    var a = b.Views.Modal;
    b.Views.AddToBrowserModalFullScreen = function(c) {
        this.version = c.version;
        this.entryPoint = c.entryPoint;
        if (b.device.isFirefoxWithNativeDDG) {
            this.template += "_ff"
        }
        a.call(this, c);
        this.$(".js-step-image-link").on("mouseup touchend", function(f) {
            f.stopPropagation()
        })
    }
    ;
    b.Views.AddToBrowserModalFullScreen.prototype = $.extend({}, a.prototype, {
        template: "add_to_browser_modal_full_screen",
        show: function() {
            a.prototype.show.call(this);
            $(window).on("blur.atb", function() {
                b.pixel.fire("atbob", this.entryPoint, "fullscreen", b.device.pixelBrowserName, this.version)
            }
            .bind(this));
            setTimeout(function() {
                this.$(".js-step-1").addClass("is-showing")
            }
            .bind(this), 150);
            setTimeout(function() {
                this.$(".js-step-2").addClass("is-showing")
            }
            .bind(this), 300);
            setTimeout(function() {
                this.$(".js-step-3").addClass("is-showing")
            }
            .bind(this), 450);
            setTimeout(function() {
                this.$(".js-step-1,.js-step-2,.js-step-3").addClass("has-shown")
            }
            .bind(this), 750)
        },
        hide: function() {
            a.prototype.hide.call(this);
            $(window).off("blur.atb")
        }
    })
}(DDG);
!function(b) {
    var a = b.Views.Base;
    b.Views.SpreadBadge = function(c) {
        a.call(this, c);
        b.ImageLoader.registerAll(this.$(".js-lazysvg"), "sidemenu", {
            svg: true
        });
        this.bindEvents([[this.$el, "click", this._onClick], [".js-badge-link-close", "click", this._onCloseClick]])
    }
    ;
    b.Views.SpreadBadge.prototype = $.extend({}, a.prototype, {
        template: "spread_badge",
        _onClick: function() {
            b.pixel.fire("sm_spread");
            window.location.href = "/spread"
        },
        _onCloseClick: function() {
            b.settings.set("kak", -1, {
                saveToCloud: true
            });
            this.destroy()
        }
    })
}(DDG);
!function(c) {
    var a = c.Views.Base
      , b = c.Views
      , e = 10;
    b.Dropdown = function(f) {
        this._showSelected = f.showSelected;
        this._position = f.position || "bottom";
        this._header = f.header;
        this._key = f.key;
        this._xOffset = f.xOffset || 0;
        this._yOffset = f.yOffset || 0;
        a.call(this, f)
    }
    ;
    b.Dropdown.prototype = $.extend({}, a.prototype, {
        template: "dropdown",
        close: function() {
            this.views.modal && this.views.modal.hide()
        },
        open: function() {
            this.views.modal && this.views.modal.show()
        },
        _render: function(f) {
            a.prototype._render.call(this, $.extend({}, this.model, f));
            this._cacheElems(".js-dropdown", ["button"]);
            this.bindEvents([[this.$button, "click", this._onClick], [this.$button, "mouseup touchend", this._onMouseUp], [this.model, "change:disabled", this._onDisabledChange], [this.model, "change:selected", this._onSelectedChange]]);
            this._updateShowSelected()
        },
        _repositionModal: function() {
            if (!this.views.modal) {
                return
            }
            var f = this.$el.offset();
            f.left += this._xOffset;
            f.top += this._yOffset;
            if (this._position === "bottom") {
                f.top += e
            }
            this.views.modal.pointAt(f)
        },
        _updateShowSelected: function() {
            if (this._showSelected) {
                this.$button.html(this.model.selected.name)
            }
        },
        _onClick: function(f) {
            f.preventDefault();
            if (!this.views.modal) {
                this.views.modal = new c.Views.DropdownModal({
                    appendTo: $(".js-site-wrapper"),
                    model: this.model,
                    position: this._position,
                    header: this._header,
                    key: this._key
                });
                this.views.modal.on("item-clicked", this._onItemClick.bind(this))
            }
            this._repositionModal();
            this.views.modal.toggle();
            this.emit(this.views.modal.isShowing ? "opened" : "closed");
            return false
        },
        _onDisabledChange: function() {
            if (this.model.disabled) {
                this.$el.hide()
            } else {
                this.$el.show()
            }
        },
        _onSelectedChange: function() {
            this._updateShowSelected()
        },
        _onItemClick: function(f) {
            this.emit("item-clicked", f)
        },
        _onMouseUp: function(f) {
            f.stopPropagation()
        }
    })
}(DDG);
!function(c) {
    var b = c.Views.Modal
      , f = "is-disabled"
      , e = "is-selected"
      , a = "is-active";
    c.Views.DropdownModal = function(g) {
        b.call(this, g)
    }
    ;
    c.Views.DropdownModal.prototype = $.extend({}, b.prototype, {
        template: "dropdown_modal",
        hasActiveItem: function() {
            return !!this.$("." + a).length
        },
        pointAt: function(g) {
            this.$el.css(g)
        },
        _render: function(g) {
            b.prototype._render.call(this, $.extend({}, this.model, g));
            this._cacheElems(".js-dropdown", ["items"]);
            this.bindEvents([[this.$items, "mouseenter touchstart", this._onItemMouseEnter], [this.$items, "mouseleave", this._onItemMouseLeave], [this.$items, "click", this._onItemClick], [this.model, "change:disabled", this._onDisabledChange], [this.model, "change:selected", this._onSelectedChange], [c.device, "resize", this.hide]])
        },
        _setValue: function(h) {
            var g = this.$items.filter("[data-value='" + h + "']");
            this.$("." + e).removeClass(e);
            g.addClass(e);
            this._currentValue = h
        },
        _onItemClick: function(h) {
            h.preventDefault();
            var g = $(h.currentTarget)
              , i = g.data("value");
            if (i !== this._currentValue && !g.hasClass(f)) {
                this.model.select(i);
                this._setValue(i);
                this.emit("item-clicked", h)
            }
            this.hide();
            return false
        },
        _onItemMouseEnter: function(g) {
            $(g.currentTarget).addClass(a)
        },
        _onItemMouseLeave: function(g) {
            $(g.currentTarget).removeClass(a)
        },
        _onDisabledChange: function() {
            this.model.values.forEach(function(g) {
                this.$items.find("[data-value='" + g.id + "']").toggleClass(f, g.disabled)
            }
            .bind(this))
        },
        _onSelectedChange: function() {
            this._setValue(this.model.selected.val)
        }
    })
}(DDG);
!function(b) {
    var e = {
        audio: {
            require: DDG.audio.requires
        },
        maps: {
            require: function() {
                return window.L || c("maps")
            },
            load: function() {
                nrc("/js/mapbox/mapbox-1.6.2.css", 1);
                nrj("/js/mapbox/mapbox-1.6.2.js", 1)
            }
        },
        settings: {
            require: function() {
                return DDG.Views.Settings.Main || c("settings")
            },
            load: function() {
                nrj(settings_js_version, 1)
            }
        },
        "moment.js": {
            require: function() {
                return window.moment || c("moment.js")
            },
            load: function() {
                nrj("/js/moment.2.9.0.min.js", 1)
            }
        },
        "masonry.js": {
            require: function() {
                return window.Masonry || c("masonry.js")
            },
            load: function() {
                nrj("/js/masonry.pkgd.min.js", 1)
            }
        },
        mathquill: {
            require: function() {
                return $.fn.mathquill || c("mathquill")
            },
            load: function() {
                nrj("/js/mathquill-0.9.4/mathquill.min.js", 1);
                nrc("/js/mathquill-0.9.4/mathquill.css", 1)
            }
        },
        sports: {
            require: function() {
                return window.ddg_spice_sports_games || c("sports")
            },
            load: function() {
                nrj(DDG.get_asset_path("sports", "sports.spice.js"), 1)
            }
        },
        velocity: {
            require: function() {
                return $.Velocity || c("velocity")
            },
            load: function() {
                nrj("/js/velocity-1.2.3.min.js", 1)
            }
        },
        flashDetect: {
            require: function() {
                return window.FlashDetect || c("flashDetect")
            },
            load: function() {
                nrj("/js/flashdetect_modified.js", 1)
            }
        },
        "chart.js": {
            require: function() {
                return window.Chart || c("chart.js")
            },
            load: function() {
                nrj("/js/Chart-1.0.2.min.js", 1)
            }
        }
    }
      , c = function(g) {
        var f = e[g];
        if (!f || f.required) {
            return false
        }
        f.load();
        f.required = true
    }
      , a = function(i, h) {
        var j = e[i]
          , f = j && j.require;
        if (typeof f !== "function") {
            if (i.match(/^\//)) {
                $.getScript(i, function(k, m, n) {
                    h()
                });
                return
            }
            return h()
        }
        var g = f();
        if (g) {
            return h(g)
        }
        setTimeout(b.require.bind(this, i, h), 25)
    }
    ;
    b.require = function(i, h) {
        if ($.isArray(i)) {
            var g = [];
            $.each(i, function(m, k) {
                a(k, function(n) {
                    g[m] = n
                })
            });
            var j, f;
            j = setTimeout(function() {
                var k = i.map(function(n, m) {
                    return n + ((g[m]) ? ":loaded" : ":timeout")
                });
                clearInterval(f)
            }, 5000);
            f = setInterval(function() {
                var k = true;
                $.each(i, function(m) {
                    if (k && !g[m]) {
                        k = false
                    }
                });
                if (k) {
                    clearInterval(j);
                    clearInterval(f);
                    h.apply(null , g)
                }
            }, 25)
        } else {
            a(i, h)
        }
    }
}(DDG);
(function(a) {
    Handlebars.registerHelper("and", function() {
        var c = Array.prototype.slice.call(arguments)
          , b = c.pop();
        for (var e = 0; e < c.length; e++) {
            if (!c[e]) {
                return
            }
        }
        return b.fn(this)
    });
    Handlebars.registerHelper("commifyNumber", function(b) {
        return DDG.commifyNumber(b)
    });
    Handlebars.registerHelper("concat", function(h, f) {
        if (!h) {
            return ""
        }
        var e = f.hash.sep || ""
          , j = f.hash.conj || ""
          , b = h.length
          , c = "";
        if (b === 1) {
            return f.fn(h[0])
        }
        if (b === 2) {
            return f.fn(h[0]) + j + f.fn(h[1])
        }
        if (b === 3) {
            return f.fn(h[0]) + e + " " + f.fn(h[1]) + j + f.fn(h[2])
        }
        for (var g = 0; g < b; g++) {
            if (g == b - 1) {
                c += e + j
            } else {
                if (g > 0) {
                    c += e + " "
                }
            }
            c += f.fn(h[g])
        }
        return c
    });
    Handlebars.registerHelper("condense", function(e, h) {
        var c = 0
          , g = 0;
        var f = h.hash.truncation || "...";
        if (h.hash.maxlen) {
            c = parseInt(h.hash.maxlen, 10)
        }
        if (h.hash.fuzz) {
            g = parseInt(h.hash.fuzz, 10)
        }
        if (!e) {
            return ""
        }
        if (g > c) {
            g = 0
        }
        if (c && e.length > c) {
            var b;
            if (e.length > c && e.lastIndexOf(".", c) + 1 !== 0) {
                b = e.substr(0, e.lastIndexOf(".", c)) + f
            } else {
                if (e.length > c - g && e.lastIndexOf(" ", c) !== 0) {
                    b = e.substr(0, e.lastIndexOf(" ", c)) + f
                }
            }
            if (!(b.length < (c + g) && b.length > (c - g))) {
                return e.substring(0, c) + f
            }
            return b
        }
        return e
    });
    Handlebars.registerHelper("domain", function(b) {
        var c = new RegExp("^.*?//([^/?:#]+)");
        if (c.test(b)) {
            return RegExp.$1.replace("www.", "")
        }
    });
    Handlebars.registerHelper("durationFormat", function(c, b) {
        return DDG.formatDuration(c)
    });
    Handlebars.registerHelper("ellipsis", function(k, c, m) {
        if (!k) {
            return ""
        }
        if (DDG.isNumber(k)) {
            k = k + ""
        }
        if (m && m.hash.parseFirst) {
            k = DDG.parse_link(k, "rest")
        }
        if (!$.isNumeric(c)) {
            if (m && m.hash.fallback) {
                c = m.hash.fallback
            }
            if (!$.isNumeric(c)) {
                c = 100
            }
        }
        var n = []
          , g = 0
          , h = k.split(" ");
        for (var e = 0; e < h.length; e++) {
            g += h[e].length + (e < h.length - 1 ? 1 : 0);
            if (g <= c) {
                n.push(h[e])
            }
        }
        if (n.length === 0) {
            return k
        }
        var b = h.length > n.length;
        n = n.join(" ");
        var f = n.split("<b>").length - 1;
        var j = n.split("</b>").length - 1;
        n += f > j ? "</b>" : "";
        if (b && !(n[n.length - 1].match(/\.$/))) {
            return n + "..."
        }
        return n
    });
    Handlebars.registerHelper("favicon", function(g, n) {
        var j = g || this.source_url
          , c = n && n.hash || {}
          , f = c.lazyload
          , k = c.className || "zci__more-at__icon"
          , m = c.w || "16"
          , i = c.h || "16"
          , b = DDG.get_favicon_url(j)
          , e = '<img width="' + m + '" height="' + i + '" class="' + k;
        if (f) {
            e += ' js-lazyload" data-src="' + b + '" />'
        } else {
            e += '" src="' + b + '" />'
        }
        return e
    });
    Handlebars.registerHelper("firstLetter", function(b) {
        return b.charAt(0).toLowerCase()
    });
    Handlebars.registerHelper("formatSubtitle", function(b) {
        if (!b) {
            return "&nbsp;"
        }
        b = $.isArray(b) ? b : [b];
        return DDG.exec_template("subtitle", {
            components: b
        })
    });
    Handlebars.registerHelper("formatTitle", function(f, b) {
        var c = b.hash;
        if (c.parseFirst) {
            f = DDG.parse_link(f, "text")
        }
        var e = DDG.parseAbstract(f);
        return DDG.exec_template("title", {
            tagName: c.el || "span",
            className: c.className || "title",
            classNameSec: c.classNameSec,
            subTitle: !c.noSub && e.subTitle,
            optSub: c.optSub,
            title: Handlebars.helpers.ellipsis(e.main, c.ellipsis),
            href: (c.href && this[c.href]) || c.href,
            hrefTitle: e.main && !e.main.match(/<b>/) ? e.main : null 
        })
    });
    Handlebars.registerHelper("imageProxy", function(b) {
        return DDG.getImageProxyURL(b)
    });
    Handlebars.registerHelper("include", function(h, c) {
        var f = c && c.hash || {}
          , g = f.wrap
          , e = $.extend(this, f)
          , b = "";
        b = DDG.exec_template(h, e);
        if (b && g) {
            return Spice.exec_template(g, {
                content: b
            })
        }
        return b
    });
    Handlebars.registerHelper("keys", function(f, e) {
        var c = "";
        for (var b in f) {
            c += e.fn($.extend({}, this, {
                key: b,
                value: f[b]
            }))
        }
        return c
    });
    Handlebars.registerHelper("l", function() {
        return l.apply(window, arguments)
    });
    Handlebars.registerHelper("lp", function() {
        return lp.apply(window, arguments)
    });
    Handlebars.registerHelper("loop", function(c, g) {
        var b, f;
        c = Math.min(c, 100);
        if (g.data) {
            f = Handlebars.createFrame(g.data)
        }
        b = "";
        for (var e = 0; e < c; e++) {
            if (f) {
                f.index = e;
                f.max = c
            }
            b += g.fn(this, {
                data: f
            })
        }
        return b
    });
    Handlebars.registerHelper("lyricsAbstract", function(b) {
        return b.split(/<(?:<b>)?break(?:<\/b>)?>/).join("<br />")
    });
    Handlebars.registerHelper("lyricsTitle", function(g, c) {
        var h = /^(.*?):\slyrics:\s(?:(.*?):\s(.*?)$|(.*?)$)/
          , b = h.exec(g)
          , f = b[1]
          , e = b[4] || b[3] + " (" + b[2] + ")";
        return DDG.exec_template("title", {
            tagName: "h1",
            className: "c-info__title",
            title: f,
            subTitle: e,
            href: c
        })
    });
    Handlebars.registerHelper("makeRelative", function(b) {
        if (/^https?:\/\/(?:[^\.]+\.|)duckduckgo.com\/?(.*)$/.test(b)) {
            return RegExp.$1
        } else {
            return b
        }
    });
    Handlebars.registerHelper("momentDate", function(g, c) {
        if (!moment) {
            return ""
        }
        var e = c && c.hash || {}
          , b = moment.utc(g, "YYYY-MM-DD HH:mm:ss")
          , f = e.format || "ddd MMM D";
        return b.local().format(f)
    });
    Handlebars.registerHelper("momentTime", function(c) {
        if (!moment) {
            return ""
        }
        var b = moment.utc(c, "YYYY-MM-DD HH:mm:ss");
        return b.local().format("LT")
    });
    Handlebars.registerHelper("moreAt", function(g, e, c) {
        var f = c && c.hash || {};
        g = g || {};
        if (typeof g === "string") {
            if (!e) {
                return
            }
            g = {
                sourceUrl: g,
                sourceName: e,
                sourceIcon: true
            }
        } else {
            if (g.repo === "fathead") {
                if (!e) {
                    return
                }
                g.sourceUrl = e;
                g.sourceName = g.src_name;
                g.sourceIcon = true
            } else {
                if (g.repo === "longtail") {
                    if (!e) {
                        return
                    }
                    if (e === "none") {
                        return
                    }
                    g.sourceName = g.name;
                    g.sourceUrl = e;
                    g.sourceIcon = true
                } else {
                    if (!g.sourceIconUrl && g.sourceUrl && !g.sourceLogo && g.sourceIcon !== false) {
                        g.sourceIcon = true
                    }
                }
            }
        }
        if (!g.sourceUrl) {
            return
        }
        g.className = "zci__more-at";
        g.iconClassName = "zci__more-at__icon";
        var b = g.moreAtText = (DDG.templates.more_at_text(g) || "").trim();
        if (f.noIcon) {
            g.sourceIcon = false
        }
        if (f.className) {
            g.className = f.className
        }
        if (f.iconClassName) {
            g.iconClassName = f.iconClassName
        }
        if (f.iconUrl) {
            g.sourceIconUrl = f.iconUrl;
            g.sourceIcon = false
        }
        if (f.iconPlaceholder) {
            g.sourceIconUrl = "/assets/icon_favicon_placeholder.v104.png";
            g.sourceIcon = false
        }
        if (!g.hideMoreAtText && !f.hideMoreAtText && !f.dynamicMoreAtText && !(is_mobile && f.sourceOnlyMobile)) {
            g.moreAtText = l("More at %s ", b)
        }
        if (f.dynamicMoreAtText) {
            g.moreAtText = (g.moreAtText.length < f.dynamicMoreAtText) ? l("More at %s ", b) : g.moreAtText
        }
        return DDG.templates.more_at(g)
    });
    Handlebars.registerHelper("numFormat", function(e, c) {
        if (!e) {
            return ""
        }
        var b = ","
          , f = e.toString();
        if (c && c.hash && c.hash.delimiter) {
            b = c.hash.delimiter
        }
        return f.replace(/\b(\d+)((\.\d+)*)\b/g, function(h, g, i) {
            return (g.charAt(0) > 0 && !(i || ".").lastIndexOf(".") ? g.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : g) + i
        })
    });
    Handlebars.registerHelper("ordinal", function(b) {
        return DDG.getOrdinal(b)
    });
    Handlebars.registerHelper("plural", function(b, c) {
        var e = DDG.pluralize(b, c.hash.singular, c.hash.plural);
        if (!e) {
            return
        }
        if (c.hash.delimiter) {
            b = Handlebars.helpers.numFormat(b, c)
        }
        return b + " " + e
    });
    Handlebars.registerHelper("priceSymbols", function(c, f) {
        var e = ""
          , b = 0;
        for (b = 0; b < f; b++) {
            if (b < c) {
                e += "<b>$</b>"
            } else {
                e += "$"
            }
        }
        return e
    });
    Handlebars.registerHelper("renderStars", function(b) {
        if (typeof b === "string") {
            b = {
                rating: b
            }
        }
        return DDG.templates.stars(b)
    });
    Handlebars.registerHelper("retinaImage", function(c) {
        var b = c.split(".");
        b[b.length - 2] += DDG.device.is3x ? "@3x" : DDG.device.is2x ? "@2x" : "";
        return b.join(".")
    });
    Handlebars.registerHelper("reviewCount", function(h, e, j, b) {
        if (!h || h === "") {
            h = 0
        }
        var g, i = '<span class="review-count">', f = "</span>", c = h;
        if (b && b === true) {
            c = DDG.abbrevNumber(h)
        } else {
            c = DDG.commifyNumber(h)
        }
        if (j === true) {
            if (!h) {
                return ""
            }
            g = i + c + f
        } else {
            g = ln("%2$s %1$s %3$s review", "%2$s %1$s %3$s reviews", c, i, f)
        }
        if (e) {
            g = '<a href="' + e + '">' + g + "</a>"
        }
        return g
    });
    Handlebars.registerHelper("starRating", function(c) {
        c = $.isNumeric(c) ? c : 0;
        var b = c.toString();
        if (b.match(/(\d)\.(\d)/)) {
            var e = parseInt(RegExp.$1, 10);
            var f = parseInt(RegExp.$2, 10) > 4 ? 5 : 0;
            if (e > 5) {
                e = 5
            }
            c = e;
            if (f && e < 5) {
                c += "-" + f
            }
        } else {
            c = Math.floor(c)
        }
        return Handlebars.helpers.renderStars({
            rating: c
        })
    });
    Handlebars.registerHelper("starsAndReviews", function(c, e, b, f) {
        return Handlebars.helpers.starRating(c) + Handlebars.helpers.reviewCount(e, b, f, true)
    });
    Handlebars.registerHelper("stripHTML", function(c, b) {
        return b.fn(DDG.strip_html(c))
    });
    Handlebars.registerHelper("table-each", function(f, c) {
        if (!f) {
            return ""
        }
        var b = "";
        if (f.record_keys) {
            var h = f.record_keys;
            for (var e in h) {
                if (f.record_data[h[e]]) {
                    b += c.fn({
                        key: h[e],
                        value: f.record_data[h[e]]
                    })
                }
            }
        } else {
            for (var g in f.record_data) {
                b += c.fn({
                    key: g,
                    value: f.record_data[g]
                })
            }
        }
        return b
    });
    Handlebars.registerHelper("toHTTP", function(b) {
        return DDG.toHTTP(b)
    });
    Handlebars.registerHelper("toHTTPS", function(b) {
        return DDG.toHTTPS(b)
    });
    Handlebars.registerHelper("trim", function(b) {
        if (b) {
            return b.trim()
        }
    });
    Handlebars.registerHelper("stripNonAlpha", function(b) {
        if (b) {
            return DDG.strip_non_alpha(b.toLowerCase())
        }
    });
    Handlebars.registerHelper("loader", function(f) {
        var b = typeof f === "string" && f
          , i = DDG.is3x ? "x3" : DDG.is2x ? "x2" : "x1";
        if (!b) {
            var g = DDG.settings.get("k7")
              , c = tinycolor(g)
              , e = c.isValid() && c.toHsl().l < 0.5;
            b = e ? "white" : "black"
        }
        var h = "/assets/loader/" + b + i + ".png";
        return '<div class="loader" style="background-image:url(\'' + h + "');\"></div>"
    })
})(this);
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["add_to_browser_badge"] = Handlebars.template(function(f, o, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "", b, g, n = e.helperMissing, h = "function", j = this.escapeExpression, q = this;
    function c(v, u) {
        var s, t, r;
        s = (t = e.l || (v && v.l),
        r = {
            hash: {},
            data: u
        },
        t ? t.call(v, "Set DuckDuckGo as your %sdefault search engine", "", r) : n.call(v, "l", "Set DuckDuckGo as your %sdefault search engine", "", r));
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }
    function a(v, u) {
        var s, t, r;
        s = (t = e.l || (v && v.l),
        r = {
            hash: {},
            data: u
        },
        t ? t.call(v, "Set DuckDuckGo as your %sdefault search engine", "<br/>", r) : n.call(v, "l", "Set DuckDuckGo as your %sdefault search engine", "<br/>", r));
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }
    function p(x, v) {
        var r = "", t, u, s;
        r += '<span class="btn btn--primary badge-link__btn">';
        t = (u = e.l || (x && x.l),
        s = {
            hash: {},
            data: v
        },
        u ? u.call(x, "Learn %sMore%s", "", "", s) : n.call(x, "l", "Learn %sMore%s", "", "", s));
        if (t || t === 0) {
            r += t
        }
        r += "</span>";
        return r
    }
    i += '<div class="badge-link js-badge-link"><i class="badge-link__icon browser--';
    if (g = e.browserId) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.browserId);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '"></i><span class="badge-link__text">';
    b = e["if"].call(o, (o && o.noBreak), {
        hash: {},
        inverse: q.program(3, a, k),
        fn: q.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</span>";
    b = e["if"].call(o, (o && o.showButton), {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, p, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '<span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div>';
    return i
});
this["DDG"]["templates"]["add_to_browser_badge_android"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<div class="js-badge-link  add-to-browser-badge--lite  btn  btn--wire">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Add to Home Screen", k) : i.call(j, "l", "Add to Home Screen", k));
    if (a || a === 0) {
        f += a
    }
    f += "</div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_badge_ios"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<div class="js-badge-link  add-to-browser-badge--lite  btn  btn--wire">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Use in Safari", k) : i.call(j, "l", "Use in Safari", k));
    if (a || a === 0) {
        f += a
    }
    f += "</div>";
    return f
});
this["DDG"]["templates"]["add_to_browser_badge_link"] = Handlebars.template(function(f, o, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "", b, g, n = e.helperMissing, h = "function", j = this.escapeExpression, q = this;
    function c(v, u) {
        var s, t, r;
        s = (t = e.l || (v && v.l),
        r = {
            hash: {},
            data: u
        },
        t ? t.call(v, "Set DuckDuckGo as your %sdefault search engine", "", r) : n.call(v, "l", "Set DuckDuckGo as your %sdefault search engine", "", r));
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }
    function a(v, u) {
        var s, t, r;
        s = (t = e.l || (v && v.l),
        r = {
            hash: {},
            data: u
        },
        t ? t.call(v, "Set DuckDuckGo as your %sdefault search engine", "<br/>", r) : n.call(v, "l", "Set DuckDuckGo as your %sdefault search engine", "<br/>", r));
        if (s || s === 0) {
            return s
        } else {
            return ""
        }
    }
    function p(x, v) {
        var r = "", t, u, s;
        r += '<span class="btn btn--primary badge-link__btn">';
        t = (u = e.l || (x && x.l),
        s = {
            hash: {},
            data: v
        },
        u ? u.call(x, "Learn %sMore%s", "", "", s) : n.call(x, "l", "Learn %sMore%s", "", "", s));
        if (t || t === 0) {
            r += t
        }
        r += "</span>";
        return r
    }
    i += '<a class="badge-link js-badge-link" href="';
    if (g = e.url) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.url);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '" target="_blank"><i class="badge-link__icon browser--';
    if (g = e.browserId) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.browserId);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '"></i><span class="badge-link__text">';
    b = e["if"].call(o, (o && o.noBreak), {
        hash: {},
        inverse: q.program(3, a, k),
        fn: q.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</span>";
    b = e["if"].call(o, (o && o.showButton), {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, p, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '<span class="ddgsi badge-link__close js-badge-link-close">&times;</span></a>';
    return i
});
this["DDG"]["templates"]["add_to_browser_badge_top"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, n, f = "function", h = this.escapeExpression, k = b.helperMissing;
    g += '<div class="badge-link badge-link--top js-badge-link"><div class="badge-link__wrap js-badge-main-msg"><i class="badge-link__icon browser--';
    if (e = b.browserId) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.browserId);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '"></i><span class="badge-link__text">';
    a = (e = b.l || (m && m.l),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "Set DuckDuckGo as your %sdefault search engine", "<br/>", n) : k.call(m, "l", "Set DuckDuckGo as your %sdefault search engine", "<br/>", n));
    if (a || a === 0) {
        g += a
    }
    g += '</span><div class="badge-link__btn-group"><span class="badge-link__btn btn js-badge-link-dismiss">';
    a = (e = b.l || (m && m.l),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "Dismiss", n) : k.call(m, "l", "Dismiss", n));
    if (a || a === 0) {
        g += a
    }
    g += '</span><span class="badge-link__btn btn btn--primary js-badge-link-button">';
    a = (e = b.l || (m && m.l),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "Learn %sMore%s", "", "", n) : k.call(m, "l", "Learn %sMore%s", "", "", n));
    if (a || a === 0) {
        g += a
    }
    g += '</span></div></div><div class="badge-link__wrap badge-link__wrap--hidden js-badge-cookie-msg"><div class="badge-link__cookie-msg"><p>';
    a = (e = b.l || (m && m.l),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "Clear your cookies often?", n) : k.call(m, "l", "Clear your cookies often?", n));
    if (a || a === 0) {
        g += a
    }
    g += "</p><p>";
    a = (e = b.l || (m && m.l),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "Try our homepage that never shows these messages:", n) : k.call(m, "l", "Try our homepage that never shows these messages:", n));
    if (a || a === 0) {
        g += a
    }
    g += '</p><p><b><a href="https://start.duckduckgo.com">start.duckduckgo.com</a></b></p></div><span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div></div>';
    return g
});
this["DDG"]["templates"]["add_to_browser_modal"] = Handlebars.template(function(e, r, p, i, t) {
    this.compilerInfo = [4, ">= 1.0.0"];
    p = this.merge(p, e.helpers);
    t = t || {};
    var q = "", f, o = p.helperMissing, b = "function", n = this, a = this.escapeExpression;
    function m(A, z) {
        var u = "", x, y, v;
        u += '<div class="js-add-to-browser-search"><h1 class="add-to-browser__title">';
        x = (y = p.l || (A && A.l),
        v = {
            hash: {},
            data: z
        },
        y ? y.call(A, "Set as Default Search Engine", v) : o.call(A, "l", "Set as Default Search Engine", v));
        if (x || x === 0) {
            u += x
        }
        u += "</h1>";
        if (y = p.useForSearch) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.useForSearch);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        if (x || x === 0) {
            u += x
        }
        u += "</div>";
        return u
    }
    function k(A, z) {
        var u = "", x, y, v;
        u += '<div class="';
        x = p["if"].call(A, (A && A.hasToggle), {
            hash: {},
            inverse: n.noop,
            fn: n.program(4, j, z),
            data: z
        });
        if (x || x === 0) {
            u += x
        }
        u += ' js-add-to-browser-homepage"><h1 class="add-to-browser__title">';
        x = (y = p.l || (A && A.l),
        v = {
            hash: {},
            data: z
        },
        y ? y.call(A, "Set as Homepage", v) : o.call(A, "l", "Set as Homepage", v));
        if (x || x === 0) {
            u += x
        }
        u += "</h1>";
        if (y = p.setAsHomepage) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.setAsHomepage);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        if (x || x === 0) {
            u += x
        }
        u += "</div>";
        return u
    }
    function j(v, u) {
        return "is-hidden"
    }
    function h(y, x) {
        var u = "", v;
        u += '<div class="add-to-browser__footer">';
        v = p["if"].call(y, (y && y.hasToggle), {
            hash: {},
            inverse: n.noop,
            fn: n.program(7, g, x),
            data: x
        });
        if (v || v === 0) {
            u += v
        }
        v = p["if"].call(y, (y && y.moreURL), {
            hash: {},
            inverse: n.noop,
            fn: n.program(9, c, x),
            data: x
        });
        if (v || v === 0) {
            u += v
        }
        u += "</div>";
        return u
    }
    function g(A, z) {
        var u = "", x, y, v;
        u += '<a class="add-to-browser__toggle-search is-hidden js-add-to-browser-search-link" href="#">';
        x = (y = p.l || (A && A.l),
        v = {
            hash: {},
            data: z
        },
        y ? y.call(A, "Set as Default Search Engine", v) : o.call(A, "l", "Set as Default Search Engine", v));
        if (x || x === 0) {
            u += x
        }
        u += '</a><a class="add-to-browser__toggle-homepage js-add-to-browser-homepage-link" href="#">';
        x = (y = p.l || (A && A.l),
        v = {
            hash: {},
            data: z
        },
        y ? y.call(A, "Set as Homepage", v) : o.call(A, "l", "Set as Homepage", v));
        if (x || x === 0) {
            u += x
        }
        u += "</a>";
        return u
    }
    function c(A, z) {
        var u = "", x, y, v;
        x = p["if"].call(A, (A && A.hasToggle), {
            hash: {},
            inverse: n.noop,
            fn: n.program(10, s, z),
            data: z
        });
        if (x || x === 0) {
            u += x
        }
        u += '<a class="add-to-browser__more" href="';
        if (y = p.moreURL) {
            x = y.call(A, {
                hash: {},
                data: z
            })
        } else {
            y = (A && A.moreURL);
            x = typeof y === b ? y.call(A, {
                hash: {},
                data: z
            }) : y
        }
        u += a(x) + '" target="_blank">';
        x = (y = p.l || (A && A.l),
        v = {
            hash: {},
            data: z
        },
        y ? y.call(A, "Extensions & More", v) : o.call(A, "l", "Extensions & More", v));
        if (x || x === 0) {
            u += x
        }
        u += "</a>";
        return u
    }
    function s(v, u) {
        return '<span class="sep"></span>'
    }
    q += '<div class="modal  modal--popover  modal--popover--dk"><a href="#" class="modal__overlay  js-modal-close"></a><div class="modal__wrap"><div class="modal__box  modal__box--add-to-browser">';
    f = p["if"].call(r, (r && r.useForSearch), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, m, t),
        data: t
    });
    if (f || f === 0) {
        q += f
    }
    f = p["if"].call(r, (r && r.setAsHomepage), {
        hash: {},
        inverse: n.noop,
        fn: n.program(3, k, t),
        data: t
    });
    if (f || f === 0) {
        q += f
    }
    f = p["if"].call(r, (r && r.hasFooter), {
        hash: {},
        inverse: n.noop,
        fn: n.program(6, h, t),
        data: t
    });
    if (f || f === 0) {
        q += f
    }
    q += '<a href="#" class="modal__close  js-modal-close">X</a></div></div></div>';
    return q
});
this["DDG"]["templates"]["add_to_browser_modal_blurred"] = Handlebars.template(function(c, j, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var g = "", a, e, f = "function";
    g += '<div class="add-to-browser--blurred">';
    if (e = b.content) {
        a = e.call(j, {
            hash: {},
            data: h
        })
    } else {
        e = (j && j.content);
        a = typeof e === f ? e.call(j, {
            hash: {},
            data: h
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["add_to_browser_modal_full_screen"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<div class="modal modal--popover modal--atb-full-screen"><a href="#" class="modal__overlay js-modal-close"></a><div class="modal__wrap"><h1 class="add-to-browser__title">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Set DuckDuckGo as your %sdefault search engine", "", k) : i.call(j, "l", "Set DuckDuckGo as your %sdefault search engine", "", k));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><ul><li class="full-screen__step js-step-1"><p class="full-screen__num">1</p><p class="full-screen__text"><b>Right-click</b> in the <b>Search bar</b>, and select<br /><b>Edit Search Engines...</b> in the drop down</p><a class="full-screen__img js-step-image-link" href="/assets/add-to-browser/chrome-right-click/1.jpg" target="_blank"><img src="/assets/add-to-browser/chrome-right-click/1.jpg" /></a></li><li class="full-screen__step js-step-2"><p class="full-screen__num">2</p><p class="full-screen__text">Find <b>DuckDuckGo</b></br/>and click <b>Make default</b></p><a class="full-screen__img js-step-image-link" href="/assets/add-to-browser/chrome-right-click/2.jpg" target="_blank"><img src="/assets/add-to-browser/chrome-right-click/2.jpg" /></a></li></ul><a href="#" class="modal__close js-modal-close">X</a></div></div>';
    return f
});
this["DDG"]["templates"]["add_to_browser_modal_full_screen_ff"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<div class="modal modal--popover modal--atb-full-screen"><a href="#" class="modal__overlay js-modal-close"></a><div class="modal__wrap"><h1 class="add-to-browser__title">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Set DuckDuckGo as your %sdefault search engine", "", k) : i.call(j, "l", "Set DuckDuckGo as your %sdefault search engine", "", k));
    if (a || a === 0) {
        f += a
    }
    f += '</h1><ul><li class="full-screen__step is-firefox js-step-1"><p class="full-screen__num">1</p><p class="full-screen__text">In the <b>Search bar</b>, click on<br /><b>Change Search Settings</b> in the drop down</p><a class="full-screen__img js-step-image-link" href="/assets/add-to-browser/firefox-detailed/ff-ss-step1.jpg" target="_blank"><img src="/assets/add-to-browser/firefox-detailed/ff-ss-step1.jpg" /></a></li><li class="full-screen__step is-firefox js-step-2"><p class="full-screen__num">2</p><p class="full-screen__text">Select <b>DuckDuckGo</b> under the<br /><b>Default Search Engine</b> section</p><a class="full-screen__img js-step-image-link" href="/assets/add-to-browser/firefox-detailed/ff-ss-step2.jpg" target="_blank"><img src="/assets/add-to-browser/firefox-detailed/ff-ss-step2.jpg" /></a></li></ul><a href="#" class="modal__close js-modal-close">X</a></div></div>';
    return f
});
this["DDG"]["templates"]["autocomplete"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<div class="search__autocomplete" style="position: absolute; display: none;"><div class="acp-wrap"></div><div class="acp-footer is-hidden"><span class="acp-footer__instructions">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Select a !bang for a direct site search", k) : i.call(j, "l", "Select a !bang for a direct site search", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="acp-footer__link"><a class="no-visited" href=\'/bang\'>';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "View all !bangs", k) : i.call(j, "l", "View all !bangs", k));
    if (a || a === 0) {
        f += a
    }
    f += "</a></span></div></div>";
    return f
});
this["DDG"]["templates"]["autocomplete_bang_item"] = Handlebars.template(function(f, o, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "", b, g, n = e.helperMissing, j = this.escapeExpression, h = "function", q = this;
    function c(s, r) {
        return "acp--long-phrase"
    }
    function a(v, u) {
        var r = "", t, s;
        r += '<div class="acp--bang__img-wrap"><img src="' + j((t = e.imageProxy || (v && v.imageProxy),
        s = {
            hash: {},
            data: u
        },
        t ? t.call(v, (v && v.image), s) : n.call(v, "imageProxy", (v && v.image), s))) + '" class="acp--bang__img" alt="" /></div>';
        return r
    }
    function p(v, u) {
        var r = "", s, t;
        r += '<span class="acp--bang__snippet">';
        if (t = e.snippet) {
            s = t.call(v, {
                hash: {},
                data: u
            })
        } else {
            t = (v && v.snippet);
            s = typeof t === h ? t.call(v, {
                hash: {},
                data: u
            }) : t
        }
        r += j(s) + "</span>";
        return r
    }
    i += '<div class="acp acp--bang ';
    b = e["if"].call(o, (o && o.longPhrase), {
        hash: {},
        inverse: q.noop,
        fn: q.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '" data-index="';
    if (g = e.i) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.i);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '">';
    b = e["if"].call(o, (o && o.image), {
        hash: {},
        inverse: q.noop,
        fn: q.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += '<div class="acp--bang__body"><span class="acp--bang__phrase">';
    if (g = e.phrase) {
        b = g.call(o, {
            hash: {},
            data: k
        })
    } else {
        g = (o && o.phrase);
        b = typeof g === h ? g.call(o, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + "</span>";
    b = e["if"].call(o, (o && o.snippet), {
        hash: {},
        inverse: q.noop,
        fn: q.program(5, p, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</div></div>";
    return i
});
this["DDG"]["templates"]["autocomplete_bang_layout"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="acp-wrap__column acp-wrap__column--left"></div><div class="acp-wrap__column acp-wrap__column--right"></div>'
});
this["DDG"]["templates"]["autocomplete_text_item"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += '<div class="acp" data-index="';
    if (e = b.i) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.i);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '">';
    if (e = b.phrase) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.phrase);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["dropdown"] = Handlebars.template(function(f, n, e, m, k) {
    this.compilerInfo = [4, ">= 1.0.0"];
    e = this.merge(e, f.helpers);
    k = k || {};
    var i = "", b, g, h = "function", j = this.escapeExpression, p = this;
    function c(r, q) {
        return "dropdown--disabled"
    }
    function a(s, r) {
        var q;
        return j(((q = ((q = ((q = (s && s.values)),
        q == null  || q === false ? q : q[0])),
        q == null  || q === false ? q : q.name)),
        typeof q === h ? q.apply(s) : q))
    }
    function o(t, s) {
        var q, r;
        if (r = e.buttonContent) {
            q = r.call(t, {
                hash: {},
                data: s
            })
        } else {
            r = (t && t.buttonContent);
            q = typeof r === h ? r.call(t, {
                hash: {},
                data: s
            }) : r
        }
        return j(q)
    }
    i += '<div class="dropdown ';
    b = e["if"].call(n, (n && n.disabled), {
        hash: {},
        inverse: p.noop,
        fn: p.program(1, c, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += " dropdown--";
    if (g = e.key) {
        b = g.call(n, {
            hash: {},
            data: k
        })
    } else {
        g = (n && n.key);
        b = typeof g === h ? g.call(n, {
            hash: {},
            data: k
        }) : g
    }
    i += j(b) + '"><a href="#" class="dropdown__button js-dropdown-button">';
    b = e["if"].call(n, (n && n.showSelected), {
        hash: {},
        inverse: p.program(5, o, k),
        fn: p.program(3, a, k),
        data: k
    });
    if (b || b === 0) {
        i += b
    }
    i += "</a></div>";
    return i
});
this["DDG"]["templates"]["dropdown_modal"] = Handlebars.template(function(f, q, o, j, s) {
    this.compilerInfo = [4, ">= 1.0.0"];
    o = this.merge(o, f.helpers);
    s = s || {};
    var p = "", g, a, c = "function", b = this.escapeExpression, n = this;
    function m(z, y) {
        var u = "", v, x;
        u += "modal--popout--";
        if (x = o.position) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.position);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        u += b(v);
        return u
    }
    function k(v, u) {
        return "modal--popout--bottom"
    }
    function i(v, u) {
        return "has-header"
    }
    function h(z, y) {
        var u = "", v, x;
        u += '<div class="modal__header"><span class="modal__header__title">';
        if (x = o.header) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.header);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        u += b(v) + "</span></div>";
        return u
    }
    function e(z, y) {
        var u = "", v, x;
        u += '<li><a href="#" data-value="';
        if (x = o.id) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.id);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        u += b(v) + '" class="modal__list__link ';
        v = o["if"].call(z, (z && z.disabled), {
            hash: {},
            inverse: n.noop,
            fn: n.program(10, t, y),
            data: y
        });
        if (v || v === 0) {
            u += v
        }
        u += " ";
        v = o["if"].call(z, (z && z.selected), {
            hash: {},
            inverse: n.noop,
            fn: n.program(12, r, y),
            data: y
        });
        if (v || v === 0) {
            u += v
        }
        u += ' js-dropdown-items">';
        if (x = o.name) {
            v = x.call(z, {
                hash: {},
                data: y
            })
        } else {
            x = (z && z.name);
            v = typeof x === c ? x.call(z, {
                hash: {},
                data: y
            }) : x
        }
        u += b(v) + "</a></li>";
        return u
    }
    function t(v, u) {
        return "is-disabled"
    }
    function r(v, u) {
        return "is-selected"
    }
    p += '<div class="modal--dropdown modal--dropdown--';
    if (a = o.key) {
        g = a.call(q, {
            hash: {},
            data: s
        })
    } else {
        a = (q && q.key);
        g = typeof a === c ? a.call(q, {
            hash: {},
            data: s
        }) : a
    }
    p += b(g) + " modal modal--popout ";
    g = o["if"].call(q, (q && q.position), {
        hash: {},
        inverse: n.program(3, k, s),
        fn: n.program(1, m, s),
        data: s
    });
    if (g || g === 0) {
        p += g
    }
    p += " ";
    g = o["if"].call(q, (q && q.header), {
        hash: {},
        inverse: n.noop,
        fn: n.program(5, i, s),
        data: s
    });
    if (g || g === 0) {
        p += g
    }
    p += ' js-dropdown-popout"><div class="modal__box">';
    g = o["if"].call(q, (q && q.header), {
        hash: {},
        inverse: n.noop,
        fn: n.program(7, h, s),
        data: s
    });
    if (g || g === 0) {
        p += g
    }
    p += '<div class="modal__body"><ol class="modal__list">';
    g = o.each.call(q, (q && q.values), {
        hash: {},
        inverse: n.noop,
        fn: n.program(9, e, s),
        data: s
    });
    if (g || g === 0) {
        p += g
    }
    p += "</ol></div></div></div>";
    return p
});
this["DDG"]["templates"]["homepage_tagline"] = Handlebars.template(function(e, j, c, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    h = h || {};
    var g = "", a, f = "function", k = this;
    function b(p, o) {
        var m = "", n;
        m += '<div class="tag-home__item  js-tag-item">';
        n = (typeof p === f ? p.apply(p) : p);
        if (n || n === 0) {
            m += n
        }
        m += "</div>";
        return m
    }
    g += '<div class="tag-home__wrapper">';
    a = c.each.call(j, (j && j.taglines), {
        hash: {},
        inverse: k.noop,
        fn: k.program(1, b, h),
        data: h
    });
    if (a || a === 0) {
        g += a
    }
    g += "</div>";
    return g
});
this["DDG"]["templates"]["notification"] = Handlebars.template(function(e, f, b, a, c) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, e.helpers);
    c = c || {};
    return '<div class="notification"><div class="notification__wrap"><div class="notification__text  js-notification-text"></div></div></div>'
});
this["DDG"]["templates"]["onoffswitch"] = Handlebars.template(function(c, m, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, n, f = "function", h = this.escapeExpression, k = b.helperMissing;
    g += '<div class="frm__switch  frm-input"><input id="';
    if (e = b.id) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.id);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '" class="frm__switch__inp  ';
    if (e = b.className) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.className);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '" type="checkbox" /><label class="frm__switch__label  btn" for="';
    if (e = b.id) {
        a = e.call(m, {
            hash: {},
            data: i
        })
    } else {
        e = (m && m.id);
        a = typeof e === f ? e.call(m, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + '"><span class="frm__switch-on">';
    a = (e = b.lp || (m && m.lp),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "setting", "On", n) : k.call(m, "lp", "setting", "On", n));
    if (a || a === 0) {
        g += a
    }
    g += '</span><span class="frm__switch-off">';
    a = (e = b.lp || (m && m.lp),
    n = {
        hash: {},
        data: i
    },
    e ? e.call(m, "setting", "Off", n) : k.call(m, "lp", "setting", "Off", n));
    if (a || a === 0) {
        g += a
    }
    g += "</span></label></div>";
    return g
});
this["DDG"]["templates"]["set_as_homepage_chrome"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).", "<b>", "(&#x2261;)</b>", k) : i.call(j, "l", "Click %ssettings/hamburger icon %s on the Chrome toolbar (top right).", "<b>", "(&#x2261;)</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Select %sSettings%s from the drop-down menu.", "<b>", "</b>", k) : i.call(j, "l", "Select %sSettings%s from the drop-down menu.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.", "<b>", "</b>", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Under %sOn startup%s, click %sOpen a specific page%s then click %sSet Pages%s.", "<b>", "</b>", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click %sUse current pages%s then %sClick OK%s.", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Click %sUse current pages%s then %sClick OK%s.", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_edge"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the %s...%s icon at the top right:", "<b>", "</b>", m) : j.call(k, "l", "Click the %s...%s icon at the top right:", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:47px;" src="' + g((e = b.imageProxy || (k && k.imageProxy),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/edge.jpg", m) : j.call(k, "imageProxy", "/assets/add-to-browser/edge.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sSettings%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sSettings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Under %sOpen with%s select %sA specific page or pages%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sOpen with%s select %sA specific page or pages%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sCustom%s and enter %shttps://duckduckgo.com%s in the input field", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %s+%s!", "<b>", "</b>", m) : j.call(k, "l", "Click %s+%s!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_firefox"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Drag %sThis Button%s on top of the home icon:", '<a class="btn btn--primary btn--inline" style="cursor:move;" href="https://duckduckgo.com">', "</a>", m) : j.call(k, "l", "Drag %sThis Button%s on top of the home icon:", '<a class="btn btn--primary btn--inline" style="cursor:move;" href="https://duckduckgo.com">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:80px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/firefox_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/firefox_homepage.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sYes%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sYes%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_ie"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the arrow to the right of the %shome icon%s", "<b>", "</b>", m) : j.call(k, "l", "Click the arrow to the right of the %shome icon%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:121px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/ie_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/ie_homepage.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sAdd or change home page...%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sAdd or change home page...%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)", "<b>", "</b>", m) : j.call(k, "l", "Select %sUse this webpage as your only home page%s (or one of the other options if you prefer)", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sYes%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sYes%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_maxthon"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s", "<b>", "</b>", "<b>", "<b>&#x2261;</b>", "</b>", m) : j.call(k, "l", "On Mac, %sClick Maxthon > Preferences%s, On Windows, %sClick the %s icon > Settings%s", "<b>", "</b>", "<b>", "<b>&#x2261;</b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sOn startup%s, select %sHomepage%s and enter: https://duckduckgo.com", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/maxthon_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/maxthon_homepage.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["set_as_homepage_opera"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Under On startup select %sOpen a specific page or set of pages%s", "<b>", "</b>", k) : i.call(j, "l", "Under On startup select %sOpen a specific page or set of pages%s", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Enter %shttps://duckduckgo.com%s", "<b>", "</b>", k) : i.call(j, "l", "Enter %shttps://duckduckgo.com%s", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_safari"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)", "<b>", "</b>", "<b>", "</b>", k) : i.call(j, "l", "Click %sSafari%s in the top menu (On Windows, click the %sgears icon%s in the top right)", "<b>", "</b>", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Select %sPreferences%s.", "<b>", "</b>", k) : i.call(j, "l", "Select %sPreferences%s.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click the %sGeneral%s tab.", "<b>", "</b>", k) : i.call(j, "l", "Click the %sGeneral%s tab.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Where it says Homepage click %sSet to Current Page%s.", "<b>", "</b>", k) : i.call(j, "l", "Where it says Homepage click %sSet to Current Page%s.", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "If you want, select Home Page next to New windows and New tabs (open with).", k) : i.call(j, "l", "If you want, select Home Page next to New windows and New tabs (open with).", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Close window.", k) : i.call(j, "l", "Close window.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["set_as_homepage_vivaldi"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "In the menu at the top select %sTools%s > %sSettings%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "In the menu at the top select %sTools%s > %sSettings%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com", "<b>", "</b>", m) : j.call(k, "l", "Under %sSTARTUP > Homepage%s enter: https://duckduckgo.com", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/vivaldi_homepage.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/vivaldi_homepage.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["side_menu"] = Handlebars.template(function(k, z, x, q, G) {
    this.compilerInfo = [4, ">= 1.0.0"];
    x = this.merge(x, k.helpers);
    G = G || {};
    var y = "", n, a, g, v = x.helperMissing, u = this, c = "function", b = this.escapeExpression;
    function t(M, L) {
        var H = "", J, K, I;
        H += '<ul class="nav-menu--filters"><li class="nav-menu__heading"><span>';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Search Options", I) : v.call(M, "l", "Search Options", I));
        if (J || J === 0) {
            H += J
        }
        H += "</span></li>";
        J = x["if"].call(M, (M && M.dateFilter), {
            hash: {},
            inverse: u.noop,
            fn: u.program(2, s, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '<li class="nav-menu__item  nav-menu__item--icon  js-side-menu-region"><a href="#region-filter" title="';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Change Region", I) : v.call(M, "l", "Change Region", I));
        if (J || J === 0) {
            H += J
        }
        H += '" class="nav-menu__filter ';
        J = x["if"].call(M, ((J = (M && M.regionFilter)),
        J == null  || J === false ? J : J.active), {
            hash: {},
            inverse: u.noop,
            fn: u.program(3, r, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '"><div class="region-flag__wrap  region-flag__wrap--small  nav-menu__item__icon  nav-menu__item__icon--region  ';
        J = x["if"].call(M, ((J = (M && M.regionFilter)),
        J == null  || J === false ? J : J.active), {
            hash: {},
            inverse: u.noop,
            fn: u.program(5, p, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '"><img class="region-flag__img ';
        J = x["if"].call(M, ((J = (M && M.regionFilter)),
        J == null  || J === false ? J : J.active), {
            hash: {},
            inverse: u.program(7, o, L),
            fn: u.noop,
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '" src="' + b(((J = ((J = (M && M.regionFilter)),
        J == null  || J === false ? J : J.iconURL)),
        typeof J === c ? J.apply(M) : J)) + '" alt="' + b(((J = ((J = (M && M.regionFilter)),
        J == null  || J === false ? J : J.name)),
        typeof J === c ? J.apply(M) : J)) + '" /></div>' + b(((J = ((J = (M && M.regionFilter)),
        J == null  || J === false ? J : J.name)),
        typeof J === c ? J.apply(M) : J)) + "</a></li></ul>";
        return H
    }
    function s(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item  nav-menu__item--icon  js-side-menu-date"><a href="#date-filter" title="';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Filter by date", I) : v.call(M, "l", "Filter by date", I));
        if (J || J === 0) {
            H += J
        }
        H += '" class="nav-menu__filter ';
        J = x["if"].call(M, ((J = (M && M.dateFilter)),
        J == null  || J === false ? J : J.active), {
            hash: {},
            inverse: u.noop,
            fn: u.program(3, r, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '"><span class="nav-menu__item__icon  nav-menu__item__icon--date  ';
        J = x["if"].call(M, ((J = (M && M.dateFilter)),
        J == null  || J === false ? J : J.active), {
            hash: {},
            inverse: u.noop,
            fn: u.program(3, r, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '"></span>' + b(((J = ((J = (M && M.dateFilter)),
        J == null  || J === false ? J : J.name)),
        typeof J === c ? J.apply(M) : J)) + "</a></li>";
        return H
    }
    function r(I, H) {
        return "is-active"
    }
    function p(I, H) {
        return "has-region is-active"
    }
    function o(I, H) {
        return "no-region"
    }
    function j(M, L) {
        var H = "", J, K, I;
        H += '<ul class="nav-menu--theme"><li class="nav-menu__heading"><span>';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Themes", I) : v.call(M, "l", "Themes", I));
        if (J || J === 0) {
            H += J
        }
        H += '</span></li><li class="nav-menu__item"><ul class="nav-menu__themes">';
        J = x.each.call(M, (M && M.themes), {
            hash: {},
            inverse: u.noop,
            fn: u.program(10, F, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += '</ul></li><li class="nav-menu__item clear"><a href="/settings#theme" data-settings="1">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "More Themes", I) : v.call(M, "l", "More Themes", I));
        if (J || J === 0) {
            H += J
        }
        H += '</a></li><li class="nav-menu__item"><a href="/settings" tabindex="-1" data-settings="1">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Advanced Settings", I) : v.call(M, "l", "Advanced Settings", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li></ul>";
        return H
    }
    function F(L, K) {
        var H = "", I, J;
        H += '<li class="nav-menu__theme  js-side-menu-theme"><span class="nav-menu__theme-color"><span class="nav-menu__theme-color-top" style="background-color:#';
        if (J = x.color1) {
            I = J.call(L, {
                hash: {},
                data: K
            })
        } else {
            J = (L && L.color1);
            I = typeof J === c ? J.call(L, {
                hash: {},
                data: K
            }) : J
        }
        H += b(I) + ';"></span><span class="nav-menu__theme-color-bot" style="background-color:#';
        if (J = x.color2) {
            I = J.call(L, {
                hash: {},
                data: K
            })
        } else {
            J = (L && L.color2);
            I = typeof J === c ? J.call(L, {
                hash: {},
                data: K
            }) : J
        }
        H += b(I) + ';"></span></span></li>';
        return H
    }
    function E(J, I) {
        var H;
        H = x["if"].call(J, (J && J.hideSettings), {
            hash: {},
            inverse: u.program(13, D, I),
            fn: u.noop,
            data: I
        });
        if (H || H === 0) {
            return H
        } else {
            return ""
        }
    }
    function D(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="/settings" data-settings="1">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Settings", I) : v.call(M, "l", "Settings", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function C(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="/about">';
        J = (K = x.lp || (M && M.lp),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "static_page", "About", I) : v.call(M, "lp", "static_page", "About", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function B(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="/tour">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Tour", I) : v.call(M, "l", "Tour", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function A(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="/privacy">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Privacy", I) : v.call(M, "l", "Privacy", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function m(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="https://duck.co/help/company/press">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Press", I) : v.call(M, "l", "Press", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function i(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="/bang">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Bangs", I) : v.call(M, "l", "Bangs", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function h(M, L) {
        var H = "", J, K, I;
        H += '<li class="nav-menu__item"><a href="/app">';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "App", I) : v.call(M, "l", "App", I));
        if (J || J === 0) {
            H += J
        }
        H += "</a></li>";
        return H
    }
    function f(M, L) {
        var H = "", J, K, I;
        H += '<ul class="nav-menu--add-to  js-side-menu-add-to"><li class="nav-menu__heading"><span>';
        J = (K = x.l || (M && M.l),
        I = {
            hash: {},
            data: L
        },
        K ? K.call(M, "Add DuckDuckGo", I) : v.call(M, "l", "Add DuckDuckGo", I));
        if (J || J === 0) {
            H += J
        }
        H += "</span></li>";
        J = x.each.call(M, (M && M.addToBrowserLinks), {
            hash: {},
            inverse: u.noop,
            fn: u.program(28, e, L),
            data: L
        });
        if (J || J === 0) {
            H += J
        }
        H += "</ul>";
        return H
    }
    function e(L, K) {
        var H = "", I, J;
        H += '<li class="nav-menu__item"><a href="';
        if (J = x.href) {
            I = J.call(L, {
                hash: {},
                data: K
            })
        } else {
            J = (L && L.href);
            I = typeof J === c ? J.call(L, {
                hash: {},
                data: K
            }) : J
        }
        H += b(I) + '" class="';
        if (J = x.className) {
            I = J.call(L, {
                hash: {},
                data: K
            })
        } else {
            J = (L && L.className);
            I = typeof J === c ? J.call(L, {
                hash: {},
                data: K
            }) : J
        }
        H += b(I) + '">';
        if (J = x.title) {
            I = J.call(L, {
                hash: {},
                data: K
            })
        } else {
            J = (L && L.title);
            I = typeof J === c ? J.call(L, {
                hash: {},
                data: K
            }) : J
        }
        H += b(I) + "</a></li>";
        return H
    }
    y += '<div class="nav-menu--slideout"><ul class="nav-menu__list"><i class="nav-menu__close  js-side-menu-close">X</i>';
    n = x["if"].call(z, (z && z.showFilters), {
        hash: {},
        inverse: u.noop,
        fn: u.program(1, t, G),
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.hideThemes), {
        hash: {},
        inverse: u.program(9, j, G),
        fn: u.noop,
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    y += '<ul class="nav-menu--main"><li class="nav-menu__heading"><span>';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Menu", g) : v.call(z, "l", "Menu", g));
    if (n || n === 0) {
        y += n
    }
    y += "</span></li>";
    n = x["if"].call(z, (z && z.hideThemes), {
        hash: {},
        inverse: u.noop,
        fn: u.program(12, E, G),
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.hideAbout), {
        hash: {},
        inverse: u.program(15, C, G),
        fn: u.noop,
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.hideTour), {
        hash: {},
        inverse: u.program(17, B, G),
        fn: u.noop,
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.hidePrivacy), {
        hash: {},
        inverse: u.program(19, A, G),
        fn: u.noop,
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.showPress), {
        hash: {},
        inverse: u.noop,
        fn: u.program(21, m, G),
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.hideBang), {
        hash: {},
        inverse: u.program(23, i, G),
        fn: u.noop,
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    n = x["if"].call(z, (z && z.hideApp), {
        hash: {},
        inverse: u.program(25, h, G),
        fn: u.noop,
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    y += '<li class="nav-menu__item  hide--mob"><a href="https://duck.co/help">';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Help", g) : v.call(z, "l", "Help", g));
    if (n || n === 0) {
        y += n
    }
    y += '</a></li></ul><ul class="nav-menu--community  hide--mob"><li class="nav-menu__heading"><span>';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Get Involved", g) : v.call(z, "l", "Get Involved", g));
    if (n || n === 0) {
        y += n
    }
    y += '</span></li><li class="nav-menu__item"><a href="http://duckduckhack.com">';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Develop", g) : v.call(z, "l", "Develop", g));
    if (n || n === 0) {
        y += n
    }
    y += '</a></li><li class="nav-menu__item"><a href="https://beta.duckduckgo.com/">';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Beta", g) : v.call(z, "l", "Beta", g));
    if (n || n === 0) {
        y += n
    }
    y += '</a></li><li class="nav-menu__item"><a href="/spread">';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Spread", g) : v.call(z, "l", "Spread", g));
    if (n || n === 0) {
        y += n
    }
    y += '</a></li><li class="nav-menu__item"><a href="/feedback">';
    n = (a = x.l || (z && z.l),
    g = {
        hash: {},
        data: G
    },
    a ? a.call(z, "Feedback", g) : v.call(z, "l", "Feedback", g));
    if (n || n === 0) {
        y += n
    }
    y += "</a></li></ul>";
    n = x["if"].call(z, (z && z.addToBrowserLinks), {
        hash: {},
        inverse: u.noop,
        fn: u.program(27, f, G),
        data: G
    });
    if (n || n === 0) {
        y += n
    }
    y += "</ul></div>";
    return y
});
this["DDG"]["templates"]["side_menu_link"] = Handlebars.template(function(e, k, c, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    i = i || {};
    var g = "", a, f = "function", h = this.escapeExpression, m = this;
    function b(q, p) {
        var n = "", o;
        n += '<a class="header--aside__msg  js-side-menu-msg" href="' + h(((o = ((o = (q && q.message)),
        o == null  || o === false ? o : o.href)),
        typeof o === f ? o.apply(q) : o)) + '">' + h(((o = ((o = (q && q.message)),
        o == null  || o === false ? o : o.text)),
        typeof o === f ? o.apply(q) : o)) + "</a>";
        return n
    }
    g += '<div class="header--aside">';
    a = c["if"].call(k, (k && k.message), {
        hash: {},
        inverse: m.noop,
        fn: m.program(1, b, i),
        data: i
    });
    if (a || a === 0) {
        g += a
    }
    g += '<a class="header__button--menu  js-side-menu-open" href="#">&#8694;</a></div>';
    return g
});
this["DDG"]["templates"]["spread_badge"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<div class="badge-link  badge-link--spread"><img class="badge-link__icon  js-lazysvg" data-src="/assets/spread/share" /><span class="badge-link__title">';
    a = (e = b.lp || (j && j.lp),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "spread_badge", "Love DuckDuckGo?", k) : i.call(j, "lp", "spread_badge", "Love DuckDuckGo?", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="badge-link__text">';
    a = (e = b.lp || (j && j.lp),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "spread_badge", "Get your friends to switch and help us grow!", k) : i.call(j, "lp", "spread_badge", "Get your friends to switch and help us grow!", k));
    if (a || a === 0) {
        f += a
    }
    f += '</span><span class="ddgsi badge-link__close js-badge-link-close">&times;</span></div>';
    return f
});
this["DDG"]["templates"]["use_for_search_chrome"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the %s icon in the top toolbar", "<b>&#x2261;</b>", m) : j.call(k, "l", "Click the %s icon in the top toolbar", "<b>&#x2261;</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:42px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/chrome.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/chrome.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sSettings%s", "<b>", "</b>", m) : j.call(k, "l", "Select %sSettings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Under %sSearch%s section, click %sManage search engines...%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sSearch%s section, click %sManage search engines...%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Find DuckDuckGo in the displayed list and click %sMake Default%s", "<b>", "</b>", m) : j.call(k, "l", "Find DuckDuckGo in the displayed list and click %sMake Default%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_chrome_android"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += "<img style='width:90px;height:90px;display:block;margin:0 auto 40px;box-shadow: 0 0 15px -3px rgba(0,0,0,0.35);' class='circle' src='/assets/android-chrome-menu.svg' />";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Press %sMenu > Add to homescreen > Add%s!", "<b>", "</b>", k) : i.call(j, "l", "Press %sMenu > Add to homescreen > Add%s!", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["use_for_search_edge"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the %s...%s icon at the top right:", "<b>", "</b>", m) : j.call(k, "l", "Click the %s...%s icon at the top right:", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:47px;" src="' + g((e = b.imageProxy || (k && k.imageProxy),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/edge.jpg", m) : j.call(k, "imageProxy", "/assets/add-to-browser/edge.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sSettings%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sSettings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Scroll down and click %sView advanced settings%s", "<b>", "</b>", m) : j.call(k, "l", "Scroll down and click %sView advanced settings%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Under %sSearch in the address bar with%s select %sAdd New%s", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Under %sSearch in the address bar with%s select %sAdd New%s", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sDuckDuckGo%s and click %sAdd as default%s!", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sDuckDuckGo%s and click %sAdd as default%s!", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_firefox"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the magnifying glass in the search box (at the top of the browser)", m) : j.call(k, "l", "Click the magnifying glass in the search box (at the top of the browser)", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sChange Search Settings%s in the drop down", "<b>", "</b>", m) : j.call(k, "l", "Click %sChange Search Settings%s in the drop down", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:202px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/firefox.jpg?v=2", m) : j.call(k, "retinaImage", "/assets/add-to-browser/firefox.jpg?v=2", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sDuckDuckGo%s in the Default Search Engine drop down", "<b>", "</b>", m) : j.call(k, "l", "Select %sDuckDuckGo%s in the Default Search Engine drop down", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_firefox_old"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Check %sMake this the current search engine%s", "<b>", "</b>", m) : j.call(k, "l", "Check %sMake this the current search engine%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:219px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/firefox_old.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/firefox_old.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sAdd%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sAdd%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_ie"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m) : j.call(k, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline js-btn-nui">', "</a>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, 'Make sure to check %s"Make this my default search provider"%s', "<b>", "</b>", m) : j.call(k, "l", 'Make sure to check %s"Make this my default search provider"%s', "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:200.5px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/ie.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/ie.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sAdd%s", "<b>", "</b>", m) : j.call(k, "l", "Click %sAdd%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_ios8"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += "<img style='width:64px;height:64px;display:block;margin:0 auto 5px;' src='/assets/ios-settings-icon.png' />";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Open %sSettings > Safari > Search Engine%s and select DuckDuckGo!", "<b>", "</b>", k) : i.call(j, "l", "Open %sSettings > Safari > Search Engine%s and select DuckDuckGo!", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    return f
});
this["DDG"]["templates"]["use_for_search_maxthon"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Go to Options.", k) : i.call(j, "l", "Go to Options.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Go to Search Engine.", k) : i.call(j, "l", "Go to Search Engine.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click add.", k) : i.call(j, "l", "Click add.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s", "<ol><li><b>", "</b>", "</li><li><b>", "</b>", "https://duckduckgo.com/?q=%s</li><li><b>", "</b>", "</li></ol>", k) : i.call(j, "l", "Enter the following details: %sName%s: DuckDuckGo%s URL%s: %s Alias%s: d%s", "<ol><li><b>", "</b>", "</li><li><b>", "</b>", "https://duckduckgo.com/?q=%s</li><li><b>", "</b>", "</li></ol>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click OK.", k) : i.call(j, "l", "Click OK.", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_opera"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Select %sOpera > Preferences%s (on Mac) or %sOpera > Options%s (on Windows)", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Under Search click the drop down and select %sDuckDuckGo%s", "<b>", "</b>", m) : j.call(k, "l", "Under Search click the drop down and select %sDuckDuckGo%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/opera.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/opera.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_palemoon"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the drop down in the search box", m) : j.call(k, "l", "Click the drop down in the search box", m));
    if (a || a === 0) {
        f += a
    }
    f += '<img class="add-to-browser__image" style="height:137px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/palemoon.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/palemoon.jpg", m))) + '" /></li><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Selected %sDuckDuckGo%s", "<b>", "</b>", m) : j.call(k, "l", "Selected %sDuckDuckGo%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_safari"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Open a new tab or window", m) : j.call(k, "l", "Open a new tab or window", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click the magnifying glass in the search bar", m) : j.call(k, "l", "Click the magnifying glass in the search bar", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select DuckDuckGo!", m) : j.call(k, "l", "Select DuckDuckGo!", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/safari.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/safari.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_safari_old"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click %sHere%s to download the DuckDuckGo extension", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz">', "</a>", k) : i.call(j, "l", "Click %sHere%s to download the DuckDuckGo extension", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz">', "</a>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "After it downloads, locate the extension file and double-click it to install", k) : i.call(j, "l", "After it downloads, locate the extension file and double-click it to install", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_safari_windows"] = Handlebars.template(function(c, j, b, h, g) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    g = g || {};
    var f = "", a, e, k, i = b.helperMissing;
    f += '<ol class="add-to-browser__directions"><li class="has-btn">';
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz" target="com.duckduckgo.safari-HKE973VLUW">', "</a>", k) : i.call(j, "l", "Click %sHere%s to add us as a search engine", '<a class="btn btn--primary btn--inline" href="https://duckduckgo.com/extensions/duckduckgo.safariextz" target="com.duckduckgo.safari-HKE973VLUW">', "</a>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click %sOpen%s to download and open the DuckDuckGo Safari extension", "<b>", "</b>", k) : i.call(j, "l", "Click %sOpen%s to download and open the DuckDuckGo Safari extension", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "After it downloads and opens, click %sInstall%s", "<b>", "</b>", k) : i.call(j, "l", "After it downloads and opens, click %sInstall%s", "<b>", "</b>", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (j && j.l),
    k = {
        hash: {},
        data: g
    },
    e ? e.call(j, "Click the Duck icon at the top of your browser to search!", k) : i.call(j, "l", "Click the Duck icon at the top of your browser to search!", k));
    if (a || a === 0) {
        f += a
    }
    f += "</li></ol>";
    return f
});
this["DDG"]["templates"]["use_for_search_seamonkey"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)", "<b>", "</b>", "<b>", "</b>", m) : j.call(k, "l", "Click %sEdit > Preferences%s (on Windows) %sSeaMonkey > Preferences%s (on Mac)", "<b>", "</b>", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "In the side menu select %sInternet Search%s", "<b>", "</b>", m) : j.call(k, "l", "In the side menu select %sInternet Search%s", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "In the drop down select %sDuckDuckGo%s!", "<b>", "</b>", m) : j.call(k, "l", "In the drop down select %sDuckDuckGo%s!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:118px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/seamonkey.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/seamonkey.jpg", m))) + '" />';
    return f
});
this["DDG"]["templates"]["use_for_search_vivaldi"] = Handlebars.template(function(c, k, b, i, h) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    h = h || {};
    var f = "", a, e, m, j = b.helperMissing, g = this.escapeExpression;
    f += '<ol class="add-to-browser__directions"><li>';
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Click on the magnifying glass in the search box at the top right", m) : j.call(k, "l", "Click on the magnifying glass in the search box at the top right", m));
    if (a || a === 0) {
        f += a
    }
    f += "</li><li>";
    a = (e = b.l || (k && k.l),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "Select %sDuckDuckGo%s!", "<b>", "</b>", m) : j.call(k, "l", "Select %sDuckDuckGo%s!", "<b>", "</b>", m));
    if (a || a === 0) {
        f += a
    }
    f += '</li></ol><img class="add-to-browser__image" style="height:145px;" src="' + g((e = b.retinaImage || (k && k.retinaImage),
    m = {
        hash: {},
        data: h
    },
    e ? e.call(k, "/assets/add-to-browser/vivaldi.jpg", m) : j.call(k, "retinaImage", "/assets/add-to-browser/vivaldi.jpg", m))) + '" />';
    return f
});
this["DDG"] = this["DDG"] || {};
this["DDG"]["templates"] = this["DDG"]["templates"] || {};
this["DDG"]["templates"]["theme_autocomplete"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".search__autocomplete,.acp-wrap__column.acp-wrap__column--left {border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp-wrap,.acp-footer {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp, .acp--bang {color: ";
    if (e = b.darkText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.darkText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp strong,.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__phrase,.acp--highlight.acp--bang .acp--bang__snippet {color: ";
    if (e = b.lightText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lightText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.acp--highlight {background-color: ";
    if (e = b.selectedBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.selectedBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_background"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var h = "", a, f, g = "function", i = this.escapeExpression, n = this;
    function b(p, o) {
        return ".modal--popover.is-showing,.modal--popover--dk.is-showing {background: rgba(0,0,0,0.6); }"
    }
    h += "body,.body--home,.site-wrapper,.region__body,.modal__box {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tag-home__link,.tag-home__link:hover,.tag-home__link:visited,.tag-home__link:active,.tag-home__nav__close:hover,.results,.results--powered,.msg,.feedback-btn__icon:hover,.feedback-btn__send:hover,.feedback-btn__icon:focus,.feedback-btn__send:focus {color: ";
    if (f = c.textTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.textTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.tag-home__nav__wrap:hover {background-color: ";
    if (f = c.bgTint2) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint2);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.result__check {color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.result__check:visited,.feedback-btn,.feedback-btn:hover {color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.result__a,.result__a:hover,.result__a:active,.highlight .result__a,.highlight .result__a:hover,.result__a:visited,.tag-home,.page-settings,.frm__label,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover,.modal__box,.modal__header__title,.modal__header__clear:hover,.modal__list__link,.modal__list__link:hover,.modal__list__link:visited,.modal__list__link:focus,.modal__list__link.is-highlighted,.feedback-btn__icon,.feedback-btn__send,.feedback-modal__heading__prompt,.feedback-modal .frm__label {color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.settings-page-wrapper .set-side a,.settings-page-wrapper .set-side a:hover,.settings-page-wrapper .set-side a:active {color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";text-decoration: underline;}.btn--top,.result--sep--hr:before,.result--load-btn,.feedback--button.btn--wire {color: ";
    if (f = c.textTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.textTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.btn--top:hover,.feedback--button.btn--wire:hover {color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.set-bookmarklet,.set-reset,.set-head,.set-thumbnail__img,.set-main-footer,.region__header__section--current,.frm__color__swatch {border-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal__list__link:hover,.modal__list__link.is-active,.modal__list__link.is-highlighted,.modal--region-filter .modal__list__link.is-highlighted,.switch,.cloudsave {background-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.set-bookmarklet__input,.set-bookmarklet__data,.btn,.btn:visited,.btn:hover,.frm__input {background-color: ";
    if (f = c.bgTint2) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint2);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";color: ";
    if (f = c.textTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.textTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.add-to-browser__directions .btn.btn--primary {background-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: transparent;color: ";
    if (f = c.text) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.text);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.frm__hr,.btn:active {border-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.btn.is-active,.btn.btn--primary,.btn--primary:hover,.is-checked .btn.frm__switch__label {color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.bgTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";background-color: ";
    if (f = c.textTint) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.textTint);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.isDark), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += ".modal__box {border: 1px solid ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal__header {background-color: ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-bottom-color: ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal--popout--bottom.has-header .modal__box:before,.modal--popout--bottom-right.has-header .modal__box:before,.modal--popout--bottom-left.has-header .modal__box:before,.modal--popout--bottom.has-header .modal__box:after,.modal--popout--bottom-right.has-header .modal__box:after,.modal--popout--bottom-left.has-header .modal__box:after,.modal--popout .modal__box:before {color: ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal--popout .modal__box:after {color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.isDark), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    h += ".modal__box {border: 1px solid ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal__header {background-color: ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-bottom-color: ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal--popout--bottom.has-header .modal__box:before,.modal--popout--bottom-right.has-header .modal__box:before,.modal--popout--bottom-left.has-header .modal__box:before,.modal--popout--bottom.has-header .modal__box:after,.modal--popout--bottom-right.has-header .modal__box:after,.modal--popout--bottom-left.has-header .modal__box:after,.modal--popout .modal__box:before {color: ";
    if (f = c.bgDark) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bgDark);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.modal--popout .modal__box:after {color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    return h
});
this["DDG"]["templates"]["theme_custom_font"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var h = "", a, f, g = "function", i = this.escapeExpression, n = this;
    function b(p, o) {
        return ".zci b,.zcm b,.zcm__link,.tile--s h1,.tile--s h2,.tile--s h3,.tile--s h4,.tile--s h5,.tile--s h6,.badge--official,.badge--ad {font-weight: 500;}"
    }
    h += "body,input,textarea,.search__input--adv {font-family: ";
    if (f = c.fontStack) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.fontStack);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.lightenWeight), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    return h
});
this["DDG"]["templates"]["theme_font"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += "@font-face {font-family: 'DDG_ProximaNova";
    if (e = b.name) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.name);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "';src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.eot');src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.eot?#iefix') format('embedded-opentype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.woff') format('woff'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.ttf') format('truetype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Sbold-webfont.svg#proxima_nova_ltsemibold') format('svg');font-weight: 600;font-style: normal;}@font-face {font-family: 'DDG_ProximaNova";
    if (e = b.name) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.name);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "';src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.eot');src: url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.eot?#iefix') format('embedded-opentype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.woff') format('woff'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.ttf') format('truetype'),url('/font/";
    if (e = b.lang) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.lang);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "/ProximaNova-Reg-webfont.svg#proxima_nova_rgregular') format('svg');font-weight: normal;font-style: normal;}";
    return g
});
this["DDG"]["templates"]["theme_header"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".header-wrap, .has-active-zci .header-wrap {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .header-wrap .zcm__link.is-active {background-color: transparent;}.header-wrap.header-wrap--home {background: none;}.has-active-zci .header-wrap {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bottomBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.header-wrap, .header-wrap--home {border-top-color: ";
    if (e = b.topBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.topBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .site-wrapper .zcm__link, .zcm__link, .zcm__link:visited {color: ";
    if (e = b.link) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.link);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .zcm__link:hover:active, .no-touch .zcm__link:focus:active {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "; }.no-touch .zcm__link.is-active:hover, .no-touch .zcm__link.is-active:hover:active, .no-touch .zcm__link.is-active:focus:active {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "; }.zcm__link:hover,.zcm__link:active,.zcm__link.is-active {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-bottom-color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .header-wrap .zcm__link.is-active {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zcm__sep--h:before {border-left-color: ";
    if (e = b.bottomBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bottomBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.lt-ie9 .header-wrap {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bottomBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.set-header--menu.has-zcm.is-mobile .header--aside {background: -moz-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);background: -webkit-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + "),1) 100%);background: -o-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%,rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%,rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);background: -ms-linear-gradient(left, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);background: linear-gradient(to right, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",0) 0%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 40%, rgba(";
    if (e = b.rgb) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.rgb);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ",1) 100%);}";
    return g
});
this["DDG"]["templates"]["theme_header_menu_button"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".btn--icon,.header__button--menu,.no-touch .btn--icon,.no-touch .header__button,.no-touch .header__button--menu {color: ";
    if (e = b.icon) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.icon);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.header--aside__msg,.header--aside__msg:hover {color: ";
    if (e = b.hoverBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.no-touch .btn--icon:hover,.no-touch .header__button:hover,.no-touch .header__button--menu:hover, .no-touch .header__button:focus, .no-touch .header__button--menu:focus {color: ";
    if (e = b.hoverColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.hoverBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.hoverBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_highlight"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result.highlight,.sitelinks_td.highlight,.msg--result.highlight,.msg--box {background: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.result.result--ad.highlight {background: none;}";
    return g
});
this["DDG"]["templates"]["theme_result_message"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".msg--bang__bang-name {color: ";
    if (e = b.textColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.textColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.bgColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bgColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.borderColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.borderColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.msg--bang__bangs-link,.msg--bang__bangs-link:hover,.msg--bang__bangs-link:visited,.msg--bang__bangs-link:active,.msg--spelling a,.msg--spelling a:visited,.msg--spelling a:hover,.msg--spelling a:active {color: ";
    if (e = b.linkColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.linkColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.msg__site,.msg__clear-filter,.msg__clear-filter:hover {color: ";
    if (e = b.textColor) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.textColor);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_snippet"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result__snippet,.result__snippet b,.result__snippet a,.result__snippet a:hover,.result__snippet a:active,.result__snippet a:visited {color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + " !important;}";
    return g
});
this["DDG"]["templates"]["theme_result_title"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result a.result__a,.result a.result__a:hover,.result a.result__a:active,.sitelinks__title a.result__a,.sitelinks__title a.result__a:hover,.sitelinks__title a.result__a:active,.result--url-above-snippet a.result__menu,.result--url-above-snippet a.result__menu:hover,.result--url-above-snippet a.result__menu:active,.result--url-above-snippet a.result__menu:visited,.msg--spelling :link,.msg--spelling :visited,.no-results__related-search a,.no-results__related-search a:visited,.no-results__related-search a:active,.no-results__related-search a:hover {color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.badge--official {background-color: ";
    if (e = b.officialSiteBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.officialSiteBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.officialSiteText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.officialSiteText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_result_web_links"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".result__url,.result__url:visited,.result__url:active,.result__url:hover,a.result__menu,a.result__menu:hover,a.result__menu:active,a.result__menu:visited,.result--ad .result__url,.result--ad .result__url:hover,.result--ad .result__url:active,.result--ad .result__url:visited,.sponsored__sitelink, .sponsored__sitelink b, .sponsored__sitelink:visited,.sponsored__sitelink:hover {color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.sitelinks_td {border-left: solid 1px ";
    if (e = b.bgTint) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bgTint);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_search_bar"] = Handlebars.template(function(e, m, c, k, j) {
    this.compilerInfo = [4, ">= 1.0.0"];
    c = this.merge(c, e.helpers);
    j = j || {};
    var h = "", a, f, g = "function", i = this.escapeExpression, n = this;
    function b(s, r) {
        var o = "", p, q;
        o += ".search__input--adv {color: ";
        if (q = c.inputText) {
            p = q.call(s, {
                hash: {},
                data: r
            })
        } else {
            q = (s && s.inputText);
            p = typeof q === g ? q.call(s, {
                hash: {},
                data: r
            }) : q
        }
        o += i(p) + ";}";
        return o
    }
    h += ".search--home,.search--header {background-color: ";
    if (f = c.bg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.bg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";border-color: ";
    if (f = c.border) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.border);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.search__clear,.search__button,.search--home.has-text .search__clear {color: ";
    if (f = c.iconText) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.iconText);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}.search__button:hover,.search__button--active,.search:hover .search__button,.search__input:focus ~ .search__button,.search--header.has-text.search--hover .search__button,.search--header.has-text.search--focus .search__button,.search--home.has-text .search__button,.search__button:focus,.search:hover .search__button:focus,.search--header.has-text.search--hover .search__button:hover,.search--header.has-text.search--focus .search__button:hover,.search--home.has-text .search__button:focus,.search--home.has-text .search__button:hover {background-color: ";
    if (f = c.buttonBg) {
        a = f.call(m, {
            hash: {},
            data: j
        })
    } else {
        f = (m && m.buttonBg);
        a = typeof f === g ? f.call(m, {
            hash: {},
            data: j
        }) : f
    }
    h += i(a) + ";}";
    a = c["if"].call(m, (m && m.inputText), {
        hash: {},
        inverse: n.noop,
        fn: n.program(1, b, j),
        data: j
    });
    if (a || a === 0) {
        h += a
    }
    return h
});
this["DDG"]["templates"]["theme_sidemenu"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".nav-menu,.nav-menu--slideout {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu--slideout {border-left-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";-webkit-box-shadow: none;-moz-box-shadow: none;box-shadow: none;}.nav-menu__icon,.nav-menu__close,.nav-menu__item,.nav-menu__item--secondary,.nav-menu__item > a,.nav-menu__item--secondary > a,.nav-menu__item > a:visited,.nav-menu__item--secondary > a:visited {color: ";
    if (e = b.link) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.link);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu__item > a:hover {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu__heading,.nav-menu__heading--primary {color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.nav-menu__theme.theme-is-selected {border-color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}a.nav-menu__filter,a.nav-menu__filter:hover,a.nav-menu__filter:active {color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}a.nav-menu__filter.is-active,a.nav-menu__filter.is-active:hover,a.nav-menu__filter.is-active:active {color: ";
    if (e = b.textTint) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.textTint);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});
this["DDG"]["templates"]["theme_zci"] = Handlebars.template(function(c, k, b, j, i) {
    this.compilerInfo = [4, ">= 1.0.0"];
    b = this.merge(b, c.helpers);
    i = i || {};
    var g = "", a, e, f = "function", h = this.escapeExpression;
    g += ".zci, .zci:before,.tileview .metabar--fixed,.tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck,.mapview.is-expanded .zci {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-bottom-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci-wrap {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.set-header--fixed .tileview--grid .metabar--fixed,.tileview--grid .metabar--fixed.is-stuck {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-top-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci.is-active {border-bottom-color: ";
    if (e = b.bottomBorder) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bottomBorder);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci__body,.zci__detail,.zci__caption,.zci__header,.zci__body h1, .zci__detail h1,.zci__body h2, .zci__detail h2,.zci__body h3, .zci__detail h3,.zci__body h4, .zci__detail h4,.zci__body h5, .zci__detail h5,.zci__body h6, .zci__detail h6,.metabar,.c-detail__title,.c-detail__title__sub,.c-detail__desc,.c-detail__filemeta,.c-detail__more,.c-detail__user,.c-detail__count,.c-detail__date,.c-info,.c-info__title,.c-icon,.c-icon__title,.c-icon__content,.c-score,dropdown__selected,dropdown__selected:hover,dropdown__selected:focus {color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.detail--l .detail__media, .detail--products .detail__media, .detail--qa .detail__media, .detail--about .detail__media,.detail--l .detail__media:after, .detail--products .detail__media:after, .detail--qa .detail__media:after, .detail--about .detail__media:after {background: none;}a,a.no-visited,.zci__body a,.zci__detail a,.zcm__link--sub,.zcm__link--sub:visited,.zci__body .chomp--link,.metabar .zci__more-at,.zci__body .zci__more-at,.zci__body .c-detail__rating :link,.zci__more-at,.tile--loc__more,.c-info__link,.c-icon__link,.chomp--link__mr,.chomp--link__ls {color: ";
    if (e = b.link) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.link);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci__body a:hover,.detail__body a:hover,.zci__body a:active,.zci__body a:active,.zcm__link--sub.is-here,.zcm__item.is-here .zcm__link--sub,.zci__body .chomp--link:hover,.zci__more-at:hover,.c-info__link:hover,.c-icon__link:hover,.zcm__link--sub:hover,.zcm__link--sub.is-highlighted,.chomp--link:hover .chomp--link__mr,.chomp--link:hover .chomp--link__ls {color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci pre,.zci code {color: ";
    if (e = b.modeText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.modeText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.modeBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.modeBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci pre,.zci code,.c-list__items,.record__cell {border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.metabar__mode {background-color: ";
    if (e = b.modeBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.modeBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.metabar__mode.is-disabled,.metabar__mode.is-disabled:hover,.metabar__mode.is-disabled:active {color: ";
    if (e = b.modeBg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.modeBg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: transparent;}.detail {background-color: ";
    if (e = b.detail) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.detail);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.detail__close {color: ";
    if (e = b.accent1) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent1);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.detail__close:hover,.detail__close:active{color: ";
    if (e = b.accent2) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent2);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.detail__media--pr {border-right-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile--img:after {border-bottom-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.sep,.sep--small,.sep--before:before,.sep--after:after {border-color: ";
    if (e = b.accent1) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent1);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.mapview.is-expanded .metabar,.tileview--grid .metabar--fixed:before  {background-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile-nav.can-scroll,.tile-nav.can-scroll:after,.tile-nav.can-scroll:hover {background-color: ";
    if (e = b.tileNav) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.tileNav);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + " !important;}.chomp--link__icn,.count__i:after {color: ";
    if (e = b.accent3) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent3);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile-nav--sm {color: ";
    if (e = b.accentText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accentText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.accent1) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent1);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile-nav--sm:hover,.tile-nav--sm:active {background-color: ";
    if (e = b.accent2) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent2);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.c-detail__links__btn,.zci .btn--primary,.zci .btn.btn--primary,.c-detail__links__btn:hover,.zci .btn--primary:hover,.zci__body a.btn--primary:hover {color: ";
    if (e = b.accentText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accentText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";background-color: ";
    if (e = b.accent1) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent1);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.star,.count__i,.tileview__message,.tileview__message:before,.tile--loc .tile__media__no-img  {color: ";
    if (e = b.accent1) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent1);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile, .tile--s, .tile--info .tile--map {border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.highlight.tile, .highlight.tile--s, .highlight.tile--info, .highlight.tile--map,.is-selected.tile, .is-selected.tile--s, .is-selected.tile--info, .is-selected.tile--map,.highlight.tile--f .tile--f__main, .highlight.tile--f .tile--f__alt, .is-selected.tile--f .tile--f__alt {border-color: ";
    if (e = b.outline) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.outline);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";outline-color: ";
    if (e = b.outline) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.outline);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.highlight.tile--no-highlight, .highlight.tile--no-highlight:active, .tile--no-highlight.is-selected {border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";outline: none;}.tile--m {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.link) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.link);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile--m:hover {background-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.activeLink) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.activeLink);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile--m:active,.tile--m.is-loading,.tile--m.is-loading:hover {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.has-tiles--grid .tile--m--images,.has-tiles--grid .tile--m--images:hover,.has-tiles--grid .tile--m--images.is-loading,.is-mobile .has-tiles--grid .tile--m,.is-mobile .has-tiles--grid .tile--m:hover {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";border-color: ";
    if (e = b.detail) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.detail);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.bg-clr--dk,.bg-clr--dk2,.bg-clr--slate,.bg-clr--slate-light  {background-color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.bg-clr--lt,.bg-clr--lt2,.bg-clr--lt3,.bg-clr--grey-dark,.bg-clr--grey-light,.bg-clr--grey {background-color: ";
    if (e = b.accentText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accentText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.text--primary,.tx-clr--dk,.tx-clr--dk2,.tx-clr--slate,.tx-clr--slate-light {color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.zci__subheader,.zci__header__sub,.c-info__sub,.c-info__title__sub,.c-icon__sub,.c-score__head,.c-score__foot,.text--secondary,.tx-clr--grey-dark,.tx-clr--grey-light,.tx-clr--grey,.tx-clr--lt,.tx-clr--lt2,.tx-clr--lt3 {color: ";
    if (e = b.accentText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accentText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile, .tile__title, .tile h4, .tile--m--mob, .at-topic .tile__title, .at-topic .tile.active-topic .tile__title, .at-topic .tile.highlight .tile__title, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile--loc, .tile .tile__price b, .tile__segment__title, .tile--loc__alt .dropdown__button:after {color: ";
    if (e = b.text) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.text);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile, .tile--s, .bg-tile, .tile--m--mob, .tile__media--pr, .at-topic .tile.active-topic, .at-topic .tile.highlight, .tile__foot--news, .tile--f__main, .tile--f__alt, .tile__num:before, .is-mobile .c-info__link, .is-mobile .c-info__link:hover, .tile__media .tile__media__img {background-color: ";
    if (e = b.color) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.color);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile__expand, .tile__expand:hover,.bg-clr--platinum-darker,.bg-clr--platinum-dark,.bg-clr--platinum-light,.bg-clr--platinum,.bg-clr--silver-dark,.bg-clr--silver-light,.bg-clr--silver{background: ";
    if (e = b.accent1) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accent1);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.at-topic .tile,.tile--loc .tile__media__no-img {background: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile__sub, .tile__sub--2, .tile__title__sub, .tile__foot, .tile__footer, .tile__link, .tile--audio .tile__footer, .tile__count, .tile--b--i .tile__source, .tile__neighborhood, .tile__more-at, .tile__title a:visited,.tx-clr--platinum-darker, .tx-clr--platinum-dark, .tx-clr--platinum-light, .tx-clr--platinum,.tx-clr--silver-dark, .tx-clr--silver-light, .tx-clr--silver {color: ";
    if (e = b.accentText2) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accentText2);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile--b--i .tile__description, .tile__content, .tile__content--qa, .tile__content--news, .tile__tx, .tile__expand, .tile__expand:hover, .tile__num, .tile__phone, .info__label, .info__value, .tile__foot, .tile__foot--news, .attribution--link__icon {color: ";
    if (e = b.accentText) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.accentText);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile--info .info, .tile__expand, .tile__expand:hover, .attribution__hr, .c-score__line, .c-score__foot, .has-score .c-score__line__name, .is-mobile .no-score .c-score__line--home, .c-score__line--vs1:before, .c-score__line--vs1:after {border-color: ";
    if (e = b.bg) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.bg);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile--f__main, .tile--f__alt, .csstransforms3d .tile--f__main, .csstransforms3d .tile--f__alt, .is-mobile .c-info__link {border-color: ";
    if (e = b.border) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.border);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}.tile .tile__price {color: ";
    if (e = b.detail) {
        a = e.call(k, {
            hash: {},
            data: i
        })
    } else {
        e = (k && k.detail);
        a = typeof e === f ? e.call(k, {
            hash: {},
            data: i
        }) : e
    }
    g += h(a) + ";}";
    return g
});