! function e(t, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (r) return r(a, !0);
                var l = new Error("Cannot find module '" + a + "'");
                throw l.code = "MODULE_NOT_FOUND", l
            }
            var c = n[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function (e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, c, c.exports, e, t, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    1: [function (e, t, n) {
        function o() {
            f && s && (f = !1, s.length ? d = s.concat(d) : p = -1, d.length && i())
        }

        function i() {
            if (!f) {
                var e = l(o);
                f = !0;
                for (var t = d.length; t;) {
                    for (s = d, d = []; ++p < t;) s && s[p].run();
                    p = -1, t = d.length
                }
                s = null, f = !1, c(e)
            }
        }

        function r(e, t) {
            this.fun = e, this.array = t
        }

        function a() {}
        var s, u = t.exports = {},
            l = setTimeout,
            c = clearTimeout,
            d = [],
            f = !1,
            p = -1;
        u.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new r(e, t)), 1 !== d.length || f || l(i, 0)
        }, r.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = a, u.addListener = a, u.once = a, u.off = a, u.removeListener = a, u.removeAllListeners = a, u.emit = a, u.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function () {
            return "/"
        }, u.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function () {
            return 0
        }
    }, {}],
    2: [function (e, t, n) {
        function o(e, t, n, o) {
            return n = window.getComputedStyle, o = n ? n(e) : e.currentStyle, o ? o[t.replace(/-(\w)/gi, function (e, t) {
                return t.toUpperCase()
            })] : void 0
        }
        t.exports = o
    }, {}],
    3: [function (e, t, n) {
        t.exports = e(5), t.exports.color = e(4)
    }, {
        4: 4,
        5: 5
    }],
    4: [function (e, t, n) {
        var o = t.exports = o || {};
        o.color = o.color || {}, o.utils = o.utils || {}, o.utils.common = function () {
            var e = Array.prototype.forEach,
                t = Array.prototype.slice;
            return {
                BREAK: {},
                extend: function (e) {
                    return this.each(t.call(arguments, 1), function (t) {
                        for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n])
                    }, this), e
                },
                defaults: function (e) {
                    return this.each(t.call(arguments, 1), function (t) {
                        for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n])
                    }, this), e
                },
                compose: function () {
                    var e = t.call(arguments);
                    return function () {
                        for (var n = t.call(arguments), o = e.length - 1; o >= 0; o--) n = [e[o].apply(this, n)];
                        return n[0]
                    }
                },
                each: function (t, n, o) {
                    if (e && t.forEach === e) t.forEach(n, o);
                    else if (t.length === t.length + 0) {
                        for (var i = 0, r = t.length; r > i; i++)
                            if (i in t && n.call(o, t[i], i) === this.BREAK) return
                    } else
                        for (var i in t)
                            if (n.call(o, t[i], i) === this.BREAK) return
                },
                defer: function (e) {
                    setTimeout(e, 0)
                },
                toArray: function (e) {
                    return e.toArray ? e.toArray() : t.call(e)
                },
                isUndefined: function (e) {
                    return void 0 === e
                },
                isNull: function (e) {
                    return null === e
                },
                isNaN: function (e) {
                    return e !== e
                },
                isArray: Array.isArray || function (e) {
                    return e.constructor === Array
                },
                isObject: function (e) {
                    return e === Object(e)
                },
                isNumber: function (e) {
                    return e === e + 0
                },
                isString: function (e) {
                    return e === e + ""
                },
                isBoolean: function (e) {
                    return e === !1 || e === !0
                },
                isFunction: function (e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            }
        }(), o.color.toString = function (e) {
            return function (t) {
                if (1 == t.a || e.isUndefined(t.a)) {
                    for (var n = t.hex.toString(16); n.length < 6;) n = "0" + n;
                    return "#" + n
                }
                return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
            }
        }(o.utils.common), o.Color = o.color.Color = function (e, t, n, o) {
            function i(e, t, n) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return "RGB" === this.__state.space ? this.__state[t] : (a(this, t, n), this.__state[t])
                    },
                    set: function (e) {
                        "RGB" !== this.__state.space && (a(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                    }
                })
            }

            function r(e, t) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return "HSV" === this.__state.space ? this.__state[t] : (s(this), this.__state[t])
                    },
                    set: function (e) {
                        "HSV" !== this.__state.space && (s(this), this.__state.space = "HSV"), this.__state[t] = e
                    }
                })
            }

            function a(e, n, i) {
                if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, i);
                else {
                    if ("HSV" !== e.__state.space) throw "Corrupted color state";
                    o.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
                }
            }

            function s(e) {
                var n = t.rgb_to_hsv(e.r, e.g, e.b);
                o.extend(e.__state, {
                    s: n.s,
                    v: n.v
                }), o.isNaN(n.h) ? o.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
            }
            var u = function () {
                if (this.__state = e.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
                this.__state.a = this.__state.a || 1
            };
            return u.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], o.extend(u.prototype, {
                toString: function () {
                    return n(this)
                },
                toOriginal: function () {
                    return this.__state.conversion.write(this)
                }
            }), i(u.prototype, "r", 2), i(u.prototype, "g", 1), i(u.prototype, "b", 0), r(u.prototype, "h"), r(u.prototype, "s"), r(u.prototype, "v"), Object.defineProperty(u.prototype, "a", {
                get: function () {
                    return this.__state.a
                },
                set: function (e) {
                    this.__state.a = e
                }
            }), Object.defineProperty(u.prototype, "hex", {
                get: function () {
                    return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
                },
                set: function (e) {
                    this.__state.space = "HEX", this.__state.hex = e
                }
            }), u
        }(o.color.interpret = function (e, t) {
            var n, o, i = function () {
                    o = !1;
                    var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
                    return t.each(r, function (i) {
                        return i.litmus(e) ? (t.each(i.conversions, function (i, r) {
                            return n = i.read(e), o === !1 && n !== !1 ? (o = n, n.conversionName = r, n.conversion = i, t.BREAK) : void 0
                        }), t.BREAK) : void 0
                    }), o
                },
                r = [{
                    litmus: t.isString,
                    conversions: {
                        THREE_CHAR_HEX: {
                            read: function (e) {
                                var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                return null === t ? !1 : {
                                    space: "HEX",
                                    hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                                }
                            },
                            write: e
                        },
                        SIX_CHAR_HEX: {
                            read: function (e) {
                                var t = e.match(/^#([A-F0-9]{6})$/i);
                                return null === t ? !1 : {
                                    space: "HEX",
                                    hex: parseInt("0x" + t[1].toString())
                                }
                            },
                            write: e
                        },
                        CSS_RGB: {
                            read: function (e) {
                                var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null === t ? !1 : {
                                    space: "RGB",
                                    r: parseFloat(t[1]),
                                    g: parseFloat(t[2]),
                                    b: parseFloat(t[3])
                                }
                            },
                            write: e
                        },
                        CSS_RGBA: {
                            read: function (e) {
                                var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                                return null === t ? !1 : {
                                    space: "RGB",
                                    r: parseFloat(t[1]),
                                    g: parseFloat(t[2]),
                                    b: parseFloat(t[3]),
                                    a: parseFloat(t[4])
                                }
                            },
                            write: e
                        }
                    }
                }, {
                    litmus: t.isNumber,
                    conversions: {
                        HEX: {
                            read: function (e) {
                                return {
                                    space: "HEX",
                                    hex: e,
                                    conversionName: "HEX"
                                }
                            },
                            write: function (e) {
                                return e.hex
                            }
                        }
                    }
                }, {
                    litmus: t.isArray,
                    conversions: {
                        RGB_ARRAY: {
                            read: function (e) {
                                return 3 != e.length ? !1 : {
                                    space: "RGB",
                                    r: e[0],
                                    g: e[1],
                                    b: e[2]
                                }
                            },
                            write: function (e) {
                                return [e.r, e.g, e.b]
                            }
                        },
                        RGBA_ARRAY: {
                            read: function (e) {
                                return 4 != e.length ? !1 : {
                                    space: "RGB",
                                    r: e[0],
                                    g: e[1],
                                    b: e[2],
                                    a: e[3]
                                }
                            },
                            write: function (e) {
                                return [e.r, e.g, e.b, e.a]
                            }
                        }
                    }
                }, {
                    litmus: t.isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                                    space: "RGB",
                                    r: e.r,
                                    g: e.g,
                                    b: e.b,
                                    a: e.a
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    r: e.r,
                                    g: e.g,
                                    b: e.b,
                                    a: e.a
                                }
                            }
                        },
                        RGB_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? {
                                    space: "RGB",
                                    r: e.r,
                                    g: e.g,
                                    b: e.b
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    r: e.r,
                                    g: e.g,
                                    b: e.b
                                }
                            }
                        },
                        HSVA_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? {
                                    space: "HSV",
                                    h: e.h,
                                    s: e.s,
                                    v: e.v,
                                    a: e.a
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    h: e.h,
                                    s: e.s,
                                    v: e.v,
                                    a: e.a
                                }
                            }
                        },
                        HSV_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? {
                                    space: "HSV",
                                    h: e.h,
                                    s: e.s,
                                    v: e.v
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    h: e.h,
                                    s: e.s,
                                    v: e.v
                                }
                            }
                        }
                    }
                }];
            return i
        }(o.color.toString, o.utils.common), o.color.math = function () {
            var e;
            return {
                hsv_to_rgb: function (e, t, n) {
                    var o = Math.floor(e / 60) % 6,
                        i = e / 60 - Math.floor(e / 60),
                        r = n * (1 - t),
                        a = n * (1 - i * t),
                        s = n * (1 - (1 - i) * t),
                        u = [[n, s, r], [a, n, r], [r, n, s], [r, a, n], [s, r, n], [n, r, a]][o];
                    return {
                        r: 255 * u[0],
                        g: 255 * u[1],
                        b: 255 * u[2]
                    }
                },
                rgb_to_hsv: function (e, t, n) {
                    var o, i, r = Math.min(e, t, n),
                        a = Math.max(e, t, n),
                        s = a - r;
                    return 0 == a ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (i = s / a, o = e == a ? (t - n) / s : t == a ? 2 + (n - e) / s : 4 + (e - t) / s, o /= 6, 0 > o && (o += 1), {
                        h: 360 * o,
                        s: i,
                        v: a / 255
                    })
                },
                rgb_to_hex: function (e, t, n) {
                    var o = this.hex_with_component(0, 2, e);
                    return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n)
                },
                component_from_hex: function (e, t) {
                    return e >> 8 * t & 255
                },
                hex_with_component: function (t, n, o) {
                    return o << (e = 8 * n) | t & ~(255 << e)
                }
            }
        }(), o.color.toString, o.utils.common)
    }, {}],
    5: [function (e, t, n) {
        var o = t.exports = o || {};
        o.gui = o.gui || {}, o.utils = o.utils || {}, o.controllers = o.controllers || {}, o.dom = o.dom || {}, o.color = o.color || {}, o.utils.css = function () {
            return {
                load: function (e, t) {
                    t = t || document;
                    var n = t.createElement("link");
                    n.type = "text/css", n.rel = "stylesheet", n.href = e, t.getElementsByTagName("head")[0].appendChild(n)
                },
                inject: function (e, t) {
                    t = t || document;
                    var n = document.createElement("style");
                    n.type = "text/css", n.innerHTML = e, t.getElementsByTagName("head")[0].appendChild(n)
                }
            }
        }(), o.utils.common = function () {
            var e = Array.prototype.forEach,
                t = Array.prototype.slice;
            return {
                BREAK: {},
                extend: function (e) {
                    return this.each(t.call(arguments, 1), function (t) {
                        for (var n in t) this.isUndefined(t[n]) || (e[n] = t[n])
                    }, this), e
                },
                defaults: function (e) {
                    return this.each(t.call(arguments, 1), function (t) {
                        for (var n in t) this.isUndefined(e[n]) && (e[n] = t[n])
                    }, this), e
                },
                compose: function () {
                    var e = t.call(arguments);
                    return function () {
                        for (var n = t.call(arguments), o = e.length - 1; o >= 0; o--) n = [e[o].apply(this, n)];
                        return n[0]
                    }
                },
                each: function (t, n, o) {
                    if (e && t.forEach === e) t.forEach(n, o);
                    else if (t.length === t.length + 0) {
                        for (var i = 0, r = t.length; r > i; i++)
                            if (i in t && n.call(o, t[i], i) === this.BREAK) return
                    } else
                        for (var i in t)
                            if (n.call(o, t[i], i) === this.BREAK) return
                },
                defer: function (e) {
                    setTimeout(e, 0)
                },
                toArray: function (e) {
                    return e.toArray ? e.toArray() : t.call(e)
                },
                isUndefined: function (e) {
                    return void 0 === e
                },
                isNull: function (e) {
                    return null === e
                },
                isNaN: function (e) {
                    return e !== e
                },
                isArray: Array.isArray || function (e) {
                    return e.constructor === Array
                },
                isObject: function (e) {
                    return e === Object(e)
                },
                isNumber: function (e) {
                    return e === e + 0
                },
                isString: function (e) {
                    return e === e + ""
                },
                isBoolean: function (e) {
                    return e === !1 || e === !0
                },
                isFunction: function (e) {
                    return "[object Function]" === Object.prototype.toString.call(e)
                }
            }
        }(), o.controllers.Controller = function (e) {
            var t = function (e, t) {
                this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0
            };
            return e.extend(t.prototype, {
                onChange: function (e) {
                    return this.__onChange = e, this
                },
                onFinishChange: function (e) {
                    return this.__onFinishChange = e, this
                },
                setValue: function (e) {
                    return this.object[this.property] = e, this.__onChange && this.__onChange.call(this, e), this.updateDisplay(), this
                },
                getValue: function () {
                    return this.object[this.property]
                },
                updateDisplay: function () {
                    return this
                },
                isModified: function () {
                    return this.initialValue !== this.getValue()
                }
            }), t
        }(o.utils.common), o.dom.dom = function (e) {
            function t(t) {
                if ("0" === t || e.isUndefined(t)) return 0;
                var n = t.match(i);
                return e.isNull(n) ? 0 : parseFloat(n[1])
            }
            var n = {
                    HTMLEvents: ["change"],
                    MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
                    KeyboardEvents: ["keydown"]
                },
                o = {};
            e.each(n, function (t, n) {
                e.each(t, function (e) {
                    o[e] = n
                })
            });
            var i = /(\d+(\.\d+)?)px/,
                r = {
                    makeSelectable: function (e, t) {
                        void 0 !== e && void 0 !== e.style && (e.onselectstart = t ? function () {
                            return !1
                        } : function () {}, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off")
                    },
                    makeFullscreen: function (t, n, o) {
                        e.isUndefined(n) && (n = !0), e.isUndefined(o) && (o = !0), t.style.position = "absolute", n && (t.style.left = 0, t.style.right = 0), o && (t.style.top = 0, t.style.bottom = 0)
                    },
                    fakeEvent: function (t, n, i, r) {
                        i = i || {};
                        var a = o[n];
                        if (!a) throw new Error("Event type " + n + " not supported.");
                        var s = document.createEvent(a);
                        switch (a) {
                            case "MouseEvents":
                                var u = i.x || i.clientX || 0,
                                    l = i.y || i.clientY || 0;
                                s.initMouseEvent(n, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, u, l, !1, !1, !1, !1, 0, null);
                                break;
                            case "KeyboardEvents":
                                var c = s.initKeyboardEvent || s.initKeyEvent;
                                e.defaults(i, {
                                    cancelable: !0,
                                    ctrlKey: !1,
                                    altKey: !1,
                                    shiftKey: !1,
                                    metaKey: !1,
                                    keyCode: void 0,
                                    charCode: void 0
                                }), c(n, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
                                break;
                            default:
                                s.initEvent(n, i.bubbles || !1, i.cancelable || !0)
                        }
                        e.defaults(s, r), t.dispatchEvent(s)
                    },
                    bind: function (e, t, n, o) {
                        return o = o || !1, e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent && e.attachEvent("on" + t, n), r
                    },
                    unbind: function (e, t, n, o) {
                        return o = o || !1, e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent && e.detachEvent("on" + t, n), r
                    },
                    addClass: function (e, t) {
                        if (void 0 === e.className) e.className = t;
                        else if (e.className !== t) {
                            var n = e.className.split(/ +/); - 1 == n.indexOf(t) && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""))
                        }
                        return r
                    },
                    removeClass: function (e, t) {
                        if (t)
                            if (void 0 === e.className);
                            else if (e.className === t) e.removeAttribute("class");
                        else {
                            var n = e.className.split(/ +/),
                                o = n.indexOf(t); - 1 != o && (n.splice(o, 1), e.className = n.join(" "))
                        } else e.className = void 0;
                        return r
                    },
                    hasClass: function (e, t) {
                        return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
                    },
                    getWidth: function (e) {
                        var n = getComputedStyle(e);
                        return t(n["border-left-width"]) + t(n["border-right-width"]) + t(n["padding-left"]) + t(n["padding-right"]) + t(n.width)
                    },
                    getHeight: function (e) {
                        var n = getComputedStyle(e);
                        return t(n["border-top-width"]) + t(n["border-bottom-width"]) + t(n["padding-top"]) + t(n["padding-bottom"]) + t(n.height)
                    },
                    getOffset: function (e) {
                        var t = {
                            left: 0,
                            top: 0
                        };
                        if (e.offsetParent)
                            do t.left += e.offsetLeft, t.top += e.offsetTop; while (e = e.offsetParent);
                        return t
                    },
                    isActive: function (e) {
                        return e === document.activeElement && (e.type || e.href)
                    }
                };
            return r
        }(o.utils.common), o.controllers.OptionController = function (e, t, n) {
            var o = function (e, i, r) {
                o.superclass.call(this, e, i);
                var a = this;
                if (this.__select = document.createElement("select"), n.isArray(r)) {
                    var s = {};
                    n.each(r, function (e) {
                        s[e] = e
                    }), r = s
                }
                n.each(r, function (e, t) {
                    var n = document.createElement("option");
                    n.innerHTML = t, n.setAttribute("value", e), a.__select.appendChild(n)
                }), this.updateDisplay(), t.bind(this.__select, "change", function () {
                    var e = this.options[this.selectedIndex].value;
                    a.setValue(e)
                }), this.domElement.appendChild(this.__select)
            };
            return o.superclass = e, n.extend(o.prototype, e.prototype, {
                setValue: function (e) {
                    var t = o.superclass.prototype.setValue.call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), t
                },
                updateDisplay: function () {
                    return this.__select.value = this.getValue(), o.superclass.prototype.updateDisplay.call(this)
                }
            }), o
        }(o.controllers.Controller, o.dom.dom, o.utils.common), o.controllers.NumberController = function (e, t) {
            function n(e) {
                return e = e.toString(), e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0
            }
            var o = function (e, i, r) {
                o.superclass.call(this, e, i), r = r || {}, this.__min = r.min, this.__max = r.max, this.__step = r.step, t.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = n(this.__impliedStep)
            };
            return o.superclass = e, t.extend(o.prototype, e.prototype, {
                setValue: function (e) {
                    return void 0 !== this.__min && e < this.__min ? e = this.__min : void 0 !== this.__max && e > this.__max && (e = this.__max), void 0 !== this.__step && e % this.__step != 0 && (e = Math.round(e / this.__step) * this.__step), o.superclass.prototype.setValue.call(this, e)
                },
                min: function (e) {
                    return this.__min = e, this
                },
                max: function (e) {
                    return this.__max = e, this
                },
                step: function (e) {
                    return this.__step = e, this
                }
            }), o
        }(o.controllers.Controller, o.utils.common), o.controllers.NumberControllerBox = function (e, t, n) {
            function o(e, t) {
                var n = Math.pow(10, t);
                return Math.round(e * n) / n
            }
            var i = function (e, o, r) {
                function a() {
                    var e = parseFloat(f.__input.value);
                    n.isNaN(e) || f.setValue(e)
                }

                function s() {
                    a(), f.__onFinishChange && f.__onFinishChange.call(f, f.getValue())
                }

                function u(e) {
                    t.bind(window, "mousemove", l), t.bind(window, "mouseup", c), d = e.clientY
                }

                function l(e) {
                    var t = d - e.clientY;
                    f.setValue(f.getValue() + t * f.__impliedStep), d = e.clientY
                }

                function c() {
                    t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", c)
                }
                this.__truncationSuspended = !1, i.superclass.call(this, e, o, r);
                var d, f = this;
                this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "change", a), t.bind(this.__input, "blur", s), t.bind(this.__input, "mousedown", u), t.bind(this.__input, "keydown", function (e) {
                    13 === e.keyCode && (f.__truncationSuspended = !0, this.blur(), f.__truncationSuspended = !1)
                }), this.updateDisplay(), this.domElement.appendChild(this.__input)
            };
            return i.superclass = e, n.extend(i.prototype, e.prototype, {
                updateDisplay: function () {
                    return this.__input.value = this.__truncationSuspended ? this.getValue() : o(this.getValue(), this.__precision), i.superclass.prototype.updateDisplay.call(this)
                }
            }), i
        }(o.controllers.NumberController, o.dom.dom, o.utils.common), o.controllers.NumberControllerSlider = function (e, t, n, o, i) {
            function r(e, t, n, o, i) {
                return o + (i - o) * ((e - t) / (n - t))
            }
            var a = function (e, n, o, i, s) {
                function u(e) {
                    t.bind(window, "mousemove", l), t.bind(window, "mouseup", c), l(e)
                }

                function l(e) {
                    e.preventDefault();
                    var n = t.getOffset(d.__background),
                        o = t.getWidth(d.__background);
                    return d.setValue(r(e.clientX, n.left, n.left + o, d.__min, d.__max)), !1
                }

                function c() {
                    t.unbind(window, "mousemove", l), t.unbind(window, "mouseup", c), d.__onFinishChange && d.__onFinishChange.call(d, d.getValue())
                }
                a.superclass.call(this, e, n, {
                    min: o,
                    max: i,
                    step: s
                });
                var d = this;
                this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), t.bind(this.__background, "mousedown", u), t.addClass(this.__background, "slider"), t.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background)
            };
            return a.superclass = e, a.useDefaultStyles = function () {
                n.inject(i)
            }, o.extend(a.prototype, e.prototype, {
                updateDisplay: function () {
                    var e = (this.getValue() - this.__min) / (this.__max - this.__min);
                    return this.__foreground.style.width = 100 * e + "%", a.superclass.prototype.updateDisplay.call(this)
                }
            }), a
        }(o.controllers.NumberController, o.dom.dom, o.utils.css, o.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), o.controllers.FunctionController = function (e, t, n) {
            var o = function (e, n, i) {
                o.superclass.call(this, e, n);
                var r = this;
                this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === i ? "Fire" : i, t.bind(this.__button, "click", function (e) {
                    return e.preventDefault(), r.fire(), !1
                }), t.addClass(this.__button, "button"), this.domElement.appendChild(this.__button)
            };
            return o.superclass = e, n.extend(o.prototype, e.prototype, {
                fire: function () {
                    this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object)
                }
            }), o
        }(o.controllers.Controller, o.dom.dom, o.utils.common), o.controllers.BooleanController = function (e, t, n) {
            var o = function (e, n) {
                function i() {
                    r.setValue(!r.__prev)
                }
                o.superclass.call(this, e, n);
                var r = this;
                this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), t.bind(this.__checkbox, "change", i, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay()
            };
            return o.superclass = e, n.extend(o.prototype, e.prototype, {
                setValue: function (e) {
                    var t = o.superclass.prototype.setValue.call(this, e);
                    return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), t
                },
                updateDisplay: function () {
                    return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, o.superclass.prototype.updateDisplay.call(this)
                }
            }), o
        }(o.controllers.Controller, o.dom.dom, o.utils.common), o.color.toString = function (e) {
            return function (t) {
                if (1 == t.a || e.isUndefined(t.a)) {
                    for (var n = t.hex.toString(16); n.length < 6;) n = "0" + n;
                    return "#" + n
                }
                return "rgba(" + Math.round(t.r) + "," + Math.round(t.g) + "," + Math.round(t.b) + "," + t.a + ")"
            }
        }(o.utils.common), o.color.interpret = function (e, t) {
            var n, o, i = function () {
                    o = !1;
                    var e = arguments.length > 1 ? t.toArray(arguments) : arguments[0];
                    return t.each(r, function (i) {
                        return i.litmus(e) ? (t.each(i.conversions, function (i, r) {
                            return n = i.read(e), o === !1 && n !== !1 ? (o = n, n.conversionName = r, n.conversion = i, t.BREAK) : void 0
                        }), t.BREAK) : void 0
                    }), o
                },
                r = [{
                    litmus: t.isString,
                    conversions: {
                        THREE_CHAR_HEX: {
                            read: function (e) {
                                var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
                                return null === t ? !1 : {
                                    space: "HEX",
                                    hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString())
                                }
                            },
                            write: e
                        },
                        SIX_CHAR_HEX: {
                            read: function (e) {
                                var t = e.match(/^#([A-F0-9]{6})$/i);
                                return null === t ? !1 : {
                                    space: "HEX",
                                    hex: parseInt("0x" + t[1].toString())
                                }
                            },
                            write: e
                        },
                        CSS_RGB: {
                            read: function (e) {
                                var t = e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
                                return null === t ? !1 : {
                                    space: "RGB",
                                    r: parseFloat(t[1]),
                                    g: parseFloat(t[2]),
                                    b: parseFloat(t[3])
                                }
                            },
                            write: e
                        },
                        CSS_RGBA: {
                            read: function (e) {
                                var t = e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
                                return null === t ? !1 : {
                                    space: "RGB",
                                    r: parseFloat(t[1]),
                                    g: parseFloat(t[2]),
                                    b: parseFloat(t[3]),
                                    a: parseFloat(t[4])
                                }
                            },
                            write: e
                        }
                    }
                }, {
                    litmus: t.isNumber,
                    conversions: {
                        HEX: {
                            read: function (e) {
                                return {
                                    space: "HEX",
                                    hex: e,
                                    conversionName: "HEX"
                                }
                            },
                            write: function (e) {
                                return e.hex
                            }
                        }
                    }
                }, {
                    litmus: t.isArray,
                    conversions: {
                        RGB_ARRAY: {
                            read: function (e) {
                                return 3 != e.length ? !1 : {
                                    space: "RGB",
                                    r: e[0],
                                    g: e[1],
                                    b: e[2]
                                }
                            },
                            write: function (e) {
                                return [e.r, e.g, e.b]
                            }
                        },
                        RGBA_ARRAY: {
                            read: function (e) {
                                return 4 != e.length ? !1 : {
                                    space: "RGB",
                                    r: e[0],
                                    g: e[1],
                                    b: e[2],
                                    a: e[3]
                                }
                            },
                            write: function (e) {
                                return [e.r, e.g, e.b, e.a]
                            }
                        }
                    }
                }, {
                    litmus: t.isObject,
                    conversions: {
                        RGBA_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) && t.isNumber(e.a) ? {
                                    space: "RGB",
                                    r: e.r,
                                    g: e.g,
                                    b: e.b,
                                    a: e.a
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    r: e.r,
                                    g: e.g,
                                    b: e.b,
                                    a: e.a
                                }
                            }
                        },
                        RGB_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.r) && t.isNumber(e.g) && t.isNumber(e.b) ? {
                                    space: "RGB",
                                    r: e.r,
                                    g: e.g,
                                    b: e.b
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    r: e.r,
                                    g: e.g,
                                    b: e.b
                                }
                            }
                        },
                        HSVA_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) && t.isNumber(e.a) ? {
                                    space: "HSV",
                                    h: e.h,
                                    s: e.s,
                                    v: e.v,
                                    a: e.a
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    h: e.h,
                                    s: e.s,
                                    v: e.v,
                                    a: e.a
                                }
                            }
                        },
                        HSV_OBJ: {
                            read: function (e) {
                                return t.isNumber(e.h) && t.isNumber(e.s) && t.isNumber(e.v) ? {
                                    space: "HSV",
                                    h: e.h,
                                    s: e.s,
                                    v: e.v
                                } : !1
                            },
                            write: function (e) {
                                return {
                                    h: e.h,
                                    s: e.s,
                                    v: e.v
                                }
                            }
                        }
                    }
                }];
            return i
        }(o.color.toString, o.utils.common), o.GUI = o.gui.GUI = function (e, t, n, o, i, r, a, s, u, l, c, d, f, p, m) {
            function h(e, t, n, r) {
                if (void 0 === t[n]) throw new Error("Object " + t + ' has no property "' + n + '"');
                var a;
                if (r.color) a = new c(t, n);
                else {
                    var s = [t, n].concat(r.factoryArgs);
                    a = o.apply(e, s)
                }
                r.before instanceof i && (r.before = r.before.__li), _(e, a), p.addClass(a.domElement, "c");
                var u = document.createElement("span");
                p.addClass(u, "property-name"), u.innerHTML = a.property;
                var l = document.createElement("div");
                l.appendChild(u), l.appendChild(a.domElement);
                var d = v(e, l, r.before);
                return p.addClass(d, k.CLASS_CONTROLLER_ROW), p.addClass(d, typeof a.getValue()), g(e, d, a), e.__controllers.push(a), a
            }

            function v(e, t, n) {
                var o = document.createElement("li");
                return t && o.appendChild(t), n ? e.__ul.insertBefore(o, params.before) : e.__ul.appendChild(o), e.onResize(), o
            }

            function g(e, t, n) {
                if (n.__li = t, n.__gui = e, m.extend(n, {
                        options: function (t) {
                            return arguments.length > 1 ? (n.remove(), h(e, n.object, n.property, {
                                before: n.__li.nextElementSibling,
                                factoryArgs: [m.toArray(arguments)]
                            })) : m.isArray(t) || m.isObject(t) ? (n.remove(), h(e, n.object, n.property, {
                                before: n.__li.nextElementSibling,
                                factoryArgs: [t]
                            })) : void 0
                        },
                        name: function (e) {
                            return n.__li.firstElementChild.firstElementChild.innerHTML = e, n
                        },
                        listen: function () {
                            return n.__gui.listen(n), n
                        },
                        remove: function () {
                            return n.__gui.remove(n), n
                        }
                    }), n instanceof u) {
                    var o = new s(n.object, n.property, {
                        min: n.__min,
                        max: n.__max,
                        step: n.__step
                    });
                    m.each(["updateDisplay", "onChange", "onFinishChange"], function (e) {
                        var t = n[e],
                            i = o[e];
                        n[e] = o[e] = function () {
                            var e = Array.prototype.slice.call(arguments);
                            return t.apply(n, e), i.apply(o, e)
                        }
                    }), p.addClass(t, "has-slider"), n.domElement.insertBefore(o.domElement, n.domElement.firstElementChild)
                } else if (n instanceof s) {
                    var i = function (t) {
                        return m.isNumber(n.__min) && m.isNumber(n.__max) ? (n.remove(), h(e, n.object, n.property, {
                            before: n.__li.nextElementSibling,
                            factoryArgs: [n.__min, n.__max, n.__step]
                        })) : t
                    };
                    n.min = m.compose(i, n.min), n.max = m.compose(i, n.max)
                } else n instanceof r ? (p.bind(t, "click", function () {
                    p.fakeEvent(n.__checkbox, "click")
                }), p.bind(n.__checkbox, "click", function (e) {
                    e.stopPropagation()
                })) : n instanceof a ? (p.bind(t, "click", function () {
                    p.fakeEvent(n.__button, "click")
                }), p.bind(t, "mouseover", function () {
                    p.addClass(n.__button, "hover")
                }), p.bind(t, "mouseout", function () {
                    p.removeClass(n.__button, "hover")
                })) : n instanceof c && (p.addClass(t, "color"), n.updateDisplay = m.compose(function (e) {
                    return t.style.borderLeftColor = n.__color.toString(), e
                }, n.updateDisplay), n.updateDisplay());
                n.setValue = m.compose(function (t) {
                    return e.getRoot().__preset_select && n.isModified() && A(e.getRoot(), !0), t
                }, n.setValue)
            }

            function _(e, t) {
                var n = e.getRoot(),
                    o = n.__rememberedObjects.indexOf(t.object);
                if (-1 != o) {
                    var i = n.__rememberedObjectIndecesToControllers[o];
                    if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[o] = i), i[t.property] = t, n.load && n.load.remembered) {
                        var r, a = n.load.remembered;
                        if (a[e.preset]) r = a[e.preset];
                        else {
                            if (!a[O]) return;
                            r = a[O]
                        }
                        if (r[o] && void 0 !== r[o][t.property]) {
                            var s = r[o][t.property];
                            t.initialValue = s, t.setValue(s)
                        }
                    }
                }
            }

            function x(e, t) {
                return document.location.href + "." + t
            }

            function b(e) {
                function t() {
                    l.style.display = e.useLocalStorage ? "block" : "none"
                }
                var n = e.__save_row = document.createElement("li");
                p.addClass(e.domElement, "has-save"), e.__ul.insertBefore(n, e.__ul.firstChild), p.addClass(n, "save-row");
                var o = document.createElement("span");
                o.innerHTML = "&nbsp;", p.addClass(o, "button gears");
                var i = document.createElement("span");
                i.innerHTML = "Save", p.addClass(i, "button"), p.addClass(i, "save");
                var r = document.createElement("span");
                r.innerHTML = "New", p.addClass(r, "button"), p.addClass(r, "save-as");
                var a = document.createElement("span");
                a.innerHTML = "Revert", p.addClass(a, "button"), p.addClass(a, "revert");
                var s = e.__preset_select = document.createElement("select");
                if (e.load && e.load.remembered ? m.each(e.load.remembered, function (t, n) {
                        w(e, n, n == e.preset)
                    }) : w(e, O, !1), p.bind(s, "change", function () {
                        for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].innerHTML = e.__preset_select[t].value;
                        e.preset = this.value
                    }), n.appendChild(s), n.appendChild(o), n.appendChild(i), n.appendChild(r), n.appendChild(a), P) {
                    var u = document.getElementById("dg-save-locally"),
                        l = document.getElementById("dg-local-explain");
                    u.style.display = "block";
                    var c = document.getElementById("dg-local-storage");
                    "true" === localStorage.getItem(x(e, "isLocal")) && c.setAttribute("checked", "checked"), t(), p.bind(c, "change", function () {
                        e.useLocalStorage = !e.useLocalStorage, t()
                    })
                }
                var d = document.getElementById("dg-new-constructor");
                p.bind(d, "keydown", function (e) {
                    !e.metaKey || 67 !== e.which && 67 != e.keyCode || D.hide()
                }), p.bind(o, "click", function () {
                    d.innerHTML = JSON.stringify(e.getSaveObject(), void 0, 2), D.show(), d.focus(), d.select()
                }), p.bind(i, "click", function () {
                    e.save()
                }), p.bind(r, "click", function () {
                    var t = prompt("Enter a new preset name.");
                    t && e.saveAs(t)
                }), p.bind(a, "click", function () {
                    e.revert()
                })
            }

            function y(e) {
                function t(t) {
                    return t.preventDefault(), i = t.clientX, p.addClass(e.__closeButton, k.CLASS_DRAG), p.bind(window, "mousemove", n), p.bind(window, "mouseup", o), !1
                }

                function n(t) {
                    return t.preventDefault(), e.width += i - t.clientX, e.onResize(), i = t.clientX, !1
                }

                function o() {
                    p.removeClass(e.__closeButton, k.CLASS_DRAG), p.unbind(window, "mousemove", n), p.unbind(window, "mouseup", o)
                }
                e.__resize_handle = document.createElement("div"), m.extend(e.__resize_handle.style, {
                    width: "6px",
                    marginLeft: "-3px",
                    height: "200px",
                    cursor: "ew-resize",
                    position: "absolute"
                });
                var i;
                p.bind(e.__resize_handle, "mousedown", t), p.bind(e.__closeButton, "mousedown", t), e.domElement.insertBefore(e.__resize_handle, e.domElement.firstElementChild)
            }

            function E(e, t) {
                e.domElement.style.width = t + "px", e.__save_row && e.autoPlace && (e.__save_row.style.width = t + "px"), e.__closeButton && (e.__closeButton.style.width = t + "px")
            }

            function S(e, t) {
                var n = {};
                return m.each(e.__rememberedObjects, function (o, i) {
                    var r = {},
                        a = e.__rememberedObjectIndecesToControllers[i];
                    m.each(a, function (e, n) {
                        r[n] = t ? e.initialValue : e.getValue()
                    }), n[i] = r
                }), n
            }

            function w(e, t, n) {
                var o = document.createElement("option");
                o.innerHTML = t, o.value = t, e.__preset_select.appendChild(o), n && (e.__preset_select.selectedIndex = e.__preset_select.length - 1)
            }

            function C(e) {
                for (var t = 0; t < e.__preset_select.length; t++) e.__preset_select[t].value == e.preset && (e.__preset_select.selectedIndex = t)
            }

            function A(e, t) {
                var n = e.__preset_select[e.__preset_select.selectedIndex];
                t ? n.innerHTML = n.value + "*" : n.innerHTML = n.value
            }

            function T(e) {
                0 != e.length && d(function () {
                    T(e)
                }), m.each(e, function (e) {
                    e.updateDisplay()
                })
            }
            e.inject(n);
            var D, M, R = "dg",
                L = 72,
                N = 20,
                O = "Default",
                P = function () {
                    try {
                        return "localStorage" in window && null !== window.localStorage
                    } catch (e) {
                        return !1
                    }
                }(),
                I = !0,
                F = !1,
                z = [],
                k = function (e) {
                    function t() {
                        localStorage.setItem(x(o, "gui"), JSON.stringify(o.getSaveObject()))
                    }

                    function n() {
                        var e = o.getRoot();
                        e.width += 1, m.defer(function () {
                            e.width -= 1
                        })
                    }
                    var o = this;
                    this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), p.addClass(this.domElement, R), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], e = e || {}, e = m.defaults(e, {
                        autoPlace: !0,
                        width: k.DEFAULT_WIDTH
                    }), e = m.defaults(e, {
                        resizable: e.autoPlace,
                        hideable: e.autoPlace
                    }), m.isUndefined(e.load) ? e.load = {
                        preset: O
                    } : e.preset && (e.load.preset = e.preset), m.isUndefined(e.parent) && e.hideable && z.push(this), e.resizable = m.isUndefined(e.parent) && e.resizable, e.autoPlace && m.isUndefined(e.scrollable) && (e.scrollable = !0);
                    var i = P && "true" === localStorage.getItem(x(this, "isLocal"));
                    if (Object.defineProperties(this, {
                            parent: {
                                get: function () {
                                    return e.parent
                                }
                            },
                            scrollable: {
                                get: function () {
                                    return e.scrollable
                                }
                            },
                            autoPlace: {
                                get: function () {
                                    return e.autoPlace
                                }
                            },
                            preset: {
                                get: function () {
                                    return o.parent ? o.getRoot().preset : e.load.preset
                                },
                                set: function (t) {
                                    o.parent ? o.getRoot().preset = t : e.load.preset = t, C(this), o.revert()
                                }
                            },
                            width: {
                                get: function () {
                                    return e.width
                                },
                                set: function (t) {
                                    e.width = t, E(o, t)
                                }
                            },
                            name: {
                                get: function () {
                                    return e.name
                                },
                                set: function (t) {
                                    e.name = t, a && (a.innerHTML = e.name)
                                }
                            },
                            closed: {
                                get: function () {
                                    return e.closed
                                },
                                set: function (t) {
                                    e.closed = t, e.closed ? p.addClass(o.__ul, k.CLASS_CLOSED) : p.removeClass(o.__ul, k.CLASS_CLOSED), this.onResize(), o.__closeButton && (o.__closeButton.innerHTML = t ? k.TEXT_OPEN : k.TEXT_CLOSED)
                                }
                            },
                            load: {
                                get: function () {
                                    return e.load
                                }
                            },
                            useLocalStorage: {
                                get: function () {
                                    return i
                                },
                                set: function (e) {
                                    P && (i = e, e ? p.bind(window, "unload", t) : p.unbind(window, "unload", t), localStorage.setItem(x(o, "isLocal"), e))
                                }
                            }
                        }), m.isUndefined(e.parent)) {
                        if (e.closed = !1, p.addClass(this.domElement, k.CLASS_MAIN), p.makeSelectable(this.domElement, !1), P && i) {
                            o.useLocalStorage = !0;
                            var r = localStorage.getItem(x(this, "gui"));
                            r && (e.load = JSON.parse(r))
                        }
                        this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = k.TEXT_CLOSED, p.addClass(this.__closeButton, k.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), p.bind(this.__closeButton, "click", function () {
                            o.closed = !o.closed
                        })
                    } else {
                        void 0 === e.closed && (e.closed = !0);
                        var a = document.createTextNode(e.name);
                        p.addClass(a, "controller-name");
                        var s = v(o, a),
                            u = function (e) {
                                return e.preventDefault(), o.closed = !o.closed, !1
                            };
                        p.addClass(this.__ul, k.CLASS_CLOSED), p.addClass(s, "title"), p.bind(s, "click", u), e.closed || (this.closed = !1)
                    }
                    e.autoPlace && (m.isUndefined(e.parent) && (I && (M = document.createElement("div"), p.addClass(M, R), p.addClass(M, k.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(M), I = !1), M.appendChild(this.domElement), p.addClass(this.domElement, k.CLASS_AUTO_PLACE)), this.parent || E(o, e.width)), p.bind(window, "resize", function () {
                        o.onResize()
                    }), p.bind(this.__ul, "webkitTransitionEnd", function () {
                        o.onResize()
                    }), p.bind(this.__ul, "transitionend", function () {
                        o.onResize()
                    }), p.bind(this.__ul, "oTransitionEnd", function () {
                        o.onResize()
                    }), this.onResize(), e.resizable && y(this);
                    o.getRoot();
                    e.parent || n()
                };
            return k.toggleHide = function () {
                F = !F, m.each(z, function (e) {
                    e.domElement.style.zIndex = F ? -999 : 999, e.domElement.style.opacity = F ? 0 : 1
                })
            }, k.CLASS_AUTO_PLACE = "a", k.CLASS_AUTO_PLACE_CONTAINER = "ac", k.CLASS_MAIN = "main", k.CLASS_CONTROLLER_ROW = "cr", k.CLASS_TOO_TALL = "taller-than-window", k.CLASS_CLOSED = "closed", k.CLASS_CLOSE_BUTTON = "close-button", k.CLASS_DRAG = "drag", k.DEFAULT_WIDTH = 245, k.TEXT_CLOSED = "Close Controls", k.TEXT_OPEN = "Open Controls", p.bind(window, "keydown", function (e) {
                "text" === document.activeElement.type || e.which !== L && e.keyCode != L || k.toggleHide()
            }, !1), m.extend(k.prototype, {
                add: function (e, t) {
                    return h(this, e, t, {
                        factoryArgs: Array.prototype.slice.call(arguments, 2)
                    })
                },
                addColor: function (e, t) {
                    return h(this, e, t, {
                        color: !0
                    })
                },
                remove: function (e) {
                    this.__ul.removeChild(e.__li), this.__controllers.slice(this.__controllers.indexOf(e), 1);
                    var t = this;
                    m.defer(function () {
                        t.onResize()
                    })
                },
                destroy: function () {
                    this.autoPlace && M.removeChild(this.domElement)
                },
                addFolder: function (e) {
                    if (void 0 !== this.__folders[e]) throw new Error('You already have a folder in this GUI by the name "' + e + '"');
                    var t = {
                        name: e,
                        parent: this
                    };
                    t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]);
                    var n = new k(t);
                    this.__folders[e] = n;
                    var o = v(this, n.domElement);
                    return p.addClass(o, "folder"), n
                },
                open: function () {
                    this.closed = !1
                },
                close: function () {
                    this.closed = !0
                },
                onResize: function () {
                    var e = this.getRoot();
                    if (e.scrollable) {
                        var t = p.getOffset(e.__ul).top,
                            n = 0;
                        m.each(e.__ul.childNodes, function (t) {
                            e.autoPlace && t === e.__save_row || (n += p.getHeight(t))
                        }), window.innerHeight - t - N < n ? (p.addClass(e.domElement, k.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - N + "px") : (p.removeClass(e.domElement, k.CLASS_TOO_TALL), e.__ul.style.height = "auto")
                    }
                    e.__resize_handle && m.defer(function () {
                        e.__resize_handle.style.height = e.__ul.offsetHeight + "px"
                    }), e.__closeButton && (e.__closeButton.style.width = e.width + "px")
                },
                remember: function () {
                    if (m.isUndefined(D) && (D = new f, D.domElement.innerHTML = t), this.parent) throw new Error("You can only call remember on a top level GUI.");
                    var e = this;
                    m.each(Array.prototype.slice.call(arguments), function (t) {
                        0 == e.__rememberedObjects.length && b(e), -1 == e.__rememberedObjects.indexOf(t) && e.__rememberedObjects.push(t)
                    }), this.autoPlace && E(this, this.width)
                },
                getRoot: function () {
                    for (var e = this; e.parent;) e = e.parent;
                    return e
                },
                getSaveObject: function () {
                    var e = this.load;
                    return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = S(this)), e.folders = {}, m.each(this.__folders, function (t, n) {
                        e.folders[n] = t.getSaveObject()
                    }), e
                },
                save: function () {
                    this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = S(this), A(this, !1)
                },
                saveAs: function (e) {
                    this.load.remembered || (this.load.remembered = {}, this.load.remembered[O] = S(this, !0)), this.load.remembered[e] = S(this), this.preset = e, w(this, e, !0)
                },
                revert: function (e) {
                    m.each(this.__controllers, function (t) {
                        this.getRoot().load.remembered ? _(e || this.getRoot(), t) : t.setValue(t.initialValue)
                    }, this), m.each(this.__folders, function (e) {
                        e.revert(e)
                    }), e || A(this.getRoot(), !1)
                },
                listen: function (e) {
                    var t = 0 == this.__listening.length;
                    this.__listening.push(e), t && T(this.__listening)
                }
            }), k
        }(o.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", o.controllers.factory = function (e, t, n, o, i, r, a) {
            return function (s, u) {
                var l = s[u];
                return a.isArray(arguments[2]) || a.isObject(arguments[2]) ? new e(s, u, arguments[2]) : a.isNumber(l) ? a.isNumber(arguments[2]) && a.isNumber(arguments[3]) ? new n(s, u, arguments[2], arguments[3]) : new t(s, u, {
                    min: arguments[2],
                    max: arguments[3]
                }) : a.isString(l) ? new o(s, u) : a.isFunction(l) ? new i(s, u, "") : a.isBoolean(l) ? new r(s, u) : void 0
            }
        }(o.controllers.OptionController, o.controllers.NumberControllerBox, o.controllers.NumberControllerSlider, o.controllers.StringController = function (e, t, n) {
            var o = function (e, n) {
                function i() {
                    a.setValue(a.__input.value)
                }

                function r() {
                    a.__onFinishChange && a.__onFinishChange.call(a, a.getValue())
                }
                o.superclass.call(this, e, n);
                var a = this;
                this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), t.bind(this.__input, "keyup", i), t.bind(this.__input, "change", i), t.bind(this.__input, "blur", r), t.bind(this.__input, "keydown", function (e) {
                    13 === e.keyCode && this.blur()
                }), this.updateDisplay(), this.domElement.appendChild(this.__input)
            };
            return o.superclass = e, n.extend(o.prototype, e.prototype, {
                updateDisplay: function () {
                    return t.isActive(this.__input) || (this.__input.value = this.getValue()), o.superclass.prototype.updateDisplay.call(this)
                }
            }), o
        }(o.controllers.Controller, o.dom.dom, o.utils.common), o.controllers.FunctionController, o.controllers.BooleanController, o.utils.common), o.controllers.Controller, o.controllers.BooleanController, o.controllers.FunctionController, o.controllers.NumberControllerBox, o.controllers.NumberControllerSlider, o.controllers.OptionController, o.controllers.ColorController = function (e, t, n, o, i) {
            function r(e, t, n, o) {
                e.style.background = "", i.each(u, function (i) {
                    e.style.cssText += "background: " + i + "linear-gradient(" + t + ", " + n + " 0%, " + o + " 100%); "
                })
            }

            function a(e) {
                e.style.background = "", e.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", e.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", e.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"
            }
            var s = function (e, u) {
                function l(e) {
                    p(e), t.bind(window, "mousemove", p), t.bind(window, "mouseup", c)
                }

                function c() {
                    t.unbind(window, "mousemove", p), t.unbind(window, "mouseup", c)
                }

                function d() {
                    var e = o(this.value);
                    e !== !1 ? (h.__color.__state = e, h.setValue(h.__color.toOriginal())) : this.value = h.__color.toString()
                }

                function f() {
                    t.unbind(window, "mousemove", m), t.unbind(window, "mouseup", f)
                }

                function p(e) {
                    e.preventDefault();
                    var n = t.getWidth(h.__saturation_field),
                        o = t.getOffset(h.__saturation_field),
                        i = (e.clientX - o.left + document.body.scrollLeft) / n,
                        r = 1 - (e.clientY - o.top + document.body.scrollTop) / n;
                    return r > 1 ? r = 1 : 0 > r && (r = 0), i > 1 ? i = 1 : 0 > i && (i = 0), h.__color.v = r, h.__color.s = i, h.setValue(h.__color.toOriginal()), !1
                }

                function m(e) {
                    e.preventDefault();
                    var n = t.getHeight(h.__hue_field),
                        o = t.getOffset(h.__hue_field),
                        i = 1 - (e.clientY - o.top + document.body.scrollTop) / n;
                    return i > 1 ? i = 1 : 0 > i && (i = 0), h.__color.h = 360 * i, h.setValue(h.__color.toOriginal()), !1
                }
                s.superclass.call(this, e, u), this.__color = new n(this.getValue()), this.__temp = new n(0);
                var h = this;
                this.domElement = document.createElement("div"), t.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", t.bind(this.__input, "keydown", function (e) {
                    13 === e.keyCode && d.call(this)
                }), t.bind(this.__input, "blur", d), t.bind(this.__selector, "mousedown", function (e) {
                    t.addClass(this, "drag").bind(window, "mouseup", function (e) {
                        t.removeClass(h.__selector, "drag")
                    })
                });
                var v = document.createElement("div");
                i.extend(this.__selector.style, {
                    width: "122px",
                    height: "102px",
                    padding: "3px",
                    backgroundColor: "#222",
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
                }), i.extend(this.__field_knob.style, {
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
                    boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
                    borderRadius: "12px",
                    zIndex: 1
                }), i.extend(this.__hue_knob.style, {
                    position: "absolute",
                    width: "15px",
                    height: "2px",
                    borderRight: "4px solid #fff",
                    zIndex: 1
                }), i.extend(this.__saturation_field.style, {
                    width: "100px",
                    height: "100px",
                    border: "1px solid #555",
                    marginRight: "3px",
                    display: "inline-block",
                    cursor: "pointer"
                }), i.extend(v.style, {
                    width: "100%",
                    height: "100%",
                    background: "none"
                }), r(v, "top", "rgba(0,0,0,0)", "#000"), i.extend(this.__hue_field.style, {
                    width: "15px",
                    height: "100px",
                    display: "inline-block",
                    border: "1px solid #555",
                    cursor: "ns-resize"
                }), a(this.__hue_field), i.extend(this.__input.style, {
                    outline: "none",
                    textAlign: "center",
                    color: "#fff",
                    border: 0,
                    fontWeight: "bold",
                    textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
                }), t.bind(this.__saturation_field, "mousedown", l), t.bind(this.__field_knob, "mousedown", l), t.bind(this.__hue_field, "mousedown", function (e) {
                    m(e), t.bind(window, "mousemove", m), t.bind(window, "mouseup", f)
                }), this.__saturation_field.appendChild(v), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay()
            };
            s.superclass = e, i.extend(s.prototype, e.prototype, {
                updateDisplay: function () {
                    var e = o(this.getValue());
                    if (e !== !1) {
                        var t = !1;
                        i.each(n.COMPONENTS, function (n) {
                            return i.isUndefined(e[n]) || i.isUndefined(this.__color.__state[n]) || e[n] === this.__color.__state[n] ? void 0 : (t = !0, {})
                        }, this), t && i.extend(this.__color.__state, e)
                    }
                    i.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
                    var a = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
                        s = 255 - a;
                    i.extend(this.__field_knob.style, {
                        marginLeft: 100 * this.__color.s - 7 + "px",
                        marginTop: 100 * (1 - this.__color.v) - 7 + "px",
                        backgroundColor: this.__temp.toString(),
                        border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")"
                    }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, r(this.__saturation_field, "left", "#fff", this.__temp.toString()), i.extend(this.__input.style, {
                        backgroundColor: this.__input.value = this.__color.toString(),
                        color: "rgb(" + a + "," + a + "," + a + ")",
                        textShadow: this.__input_textShadow + "rgba(" + s + "," + s + "," + s + ",.7)"
                    })
                }
            });
            var u = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
            return s
        }(o.controllers.Controller, o.dom.dom, o.color.Color = function (e, t, n, o) {
            function i(e, t, n) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return "RGB" === this.__state.space ? this.__state[t] : (a(this, t, n), this.__state[t])
                    },
                    set: function (e) {
                        "RGB" !== this.__state.space && (a(this, t, n), this.__state.space = "RGB"), this.__state[t] = e
                    }
                })
            }

            function r(e, t) {
                Object.defineProperty(e, t, {
                    get: function () {
                        return "HSV" === this.__state.space ? this.__state[t] : (s(this), this.__state[t])
                    },
                    set: function (e) {
                        "HSV" !== this.__state.space && (s(this), this.__state.space = "HSV"), this.__state[t] = e
                    }
                })
            }

            function a(e, n, i) {
                if ("HEX" === e.__state.space) e.__state[n] = t.component_from_hex(e.__state.hex, i);
                else {
                    if ("HSV" !== e.__state.space) throw "Corrupted color state";
                    o.extend(e.__state, t.hsv_to_rgb(e.__state.h, e.__state.s, e.__state.v))
                }
            }

            function s(e) {
                var n = t.rgb_to_hsv(e.r, e.g, e.b);
                o.extend(e.__state, {
                    s: n.s,
                    v: n.v
                }), o.isNaN(n.h) ? o.isUndefined(e.__state.h) && (e.__state.h = 0) : e.__state.h = n.h
            }
            var u = function () {
                if (this.__state = e.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
                this.__state.a = this.__state.a || 1
            };
            return u.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], o.extend(u.prototype, {
                toString: function () {
                    return n(this)
                },
                toOriginal: function () {
                    return this.__state.conversion.write(this)
                }
            }), i(u.prototype, "r", 2), i(u.prototype, "g", 1), i(u.prototype, "b", 0), r(u.prototype, "h"), r(u.prototype, "s"), r(u.prototype, "v"), Object.defineProperty(u.prototype, "a", {
                get: function () {
                    return this.__state.a
                },
                set: function (e) {
                    this.__state.a = e
                }
            }), Object.defineProperty(u.prototype, "hex", {
                get: function () {
                    return "HEX" !== !this.__state.space && (this.__state.hex = t.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex
                },
                set: function (e) {
                    this.__state.space = "HEX", this.__state.hex = e
                }
            }), u
        }(o.color.interpret, o.color.math = function () {
            var e;
            return {
                hsv_to_rgb: function (e, t, n) {
                    var o = Math.floor(e / 60) % 6,
                        i = e / 60 - Math.floor(e / 60),
                        r = n * (1 - t),
                        a = n * (1 - i * t),
                        s = n * (1 - (1 - i) * t),
                        u = [[n, s, r], [a, n, r], [r, n, s], [r, a, n], [s, r, n], [n, r, a]][o];
                    return {
                        r: 255 * u[0],
                        g: 255 * u[1],
                        b: 255 * u[2]
                    }
                },
                rgb_to_hsv: function (e, t, n) {
                    var o, i, r = Math.min(e, t, n),
                        a = Math.max(e, t, n),
                        s = a - r;
                    return 0 == a ? {
                        h: NaN,
                        s: 0,
                        v: 0
                    } : (i = s / a, o = e == a ? (t - n) / s : t == a ? 2 + (n - e) / s : 4 + (e - t) / s, o /= 6, 0 > o && (o += 1), {
                        h: 360 * o,
                        s: i,
                        v: a / 255
                    })
                },
                rgb_to_hex: function (e, t, n) {
                    var o = this.hex_with_component(0, 2, e);
                    return o = this.hex_with_component(o, 1, t), o = this.hex_with_component(o, 0, n)
                },
                component_from_hex: function (e, t) {
                    return e >> 8 * t & 255
                },
                hex_with_component: function (t, n, o) {
                    return o << (e = 8 * n) | t & ~(255 << e)
                }
            }
        }(), o.color.toString, o.utils.common), o.color.interpret, o.utils.common), o.utils.requestAnimationFrame = function () {
            return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, t) {
                window.setTimeout(e, 1e3 / 60)
            }
        }(), o.dom.CenteredDiv = function (e, t) {
            var n = function () {
                this.backgroundElement = document.createElement("div"), t.extend(this.backgroundElement.style, {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    top: 0,
                    left: 0,
                    display: "none",
                    zIndex: "1000",
                    opacity: 0,
                    WebkitTransition: "opacity 0.2s linear"
                }), e.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), t.extend(this.domElement.style, {
                    position: "fixed",
                    display: "none",
                    zIndex: "1001",
                    opacity: 0,
                    WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
                }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
                var n = this;
                e.bind(this.backgroundElement, "click", function () {
                    n.hide()
                })
            };
            return n.prototype.show = function () {
                var e = this;
                this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), t.defer(function () {
                    e.backgroundElement.style.opacity = 1, e.domElement.style.opacity = 1, e.domElement.style.webkitTransform = "scale(1)"
                })
            }, n.prototype.hide = function () {
                var t = this,
                    n = function () {
                        t.domElement.style.display = "none", t.backgroundElement.style.display = "none", e.unbind(t.domElement, "webkitTransitionEnd", n), e.unbind(t.domElement, "transitionend", n), e.unbind(t.domElement, "oTransitionEnd", n)
                    };
                e.bind(this.domElement, "webkitTransitionEnd", n), e.bind(this.domElement, "transitionend", n), e.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)"
            }, n.prototype.layout = function () {
                this.domElement.style.left = window.innerWidth / 2 - e.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - e.getHeight(this.domElement) / 2 + "px"
            }, n
        }(o.dom.dom, o.utils.common), o.dom.dom, o.utils.common)
    }, {}],
    6: [function (e, t, n) {
        function o(e, t, n) {
            var o = l[t];
            if ("undefined" == typeof o && (o = r(t)), o) {
                if (void 0 === n) return e.style[o];
                "number" == typeof n && (n += c[o] || ""), e.style[o] = n
            }
        }

        function i(e, t) {
            for (var n in t) t.hasOwnProperty(n) && o(e, n, t[n])
        }

        function r(e) {
            var t = u(e),
                n = s(t);
            return l[t] = l[e] = l[n] = n, n
        }

        function a() {
            2 === arguments.length ? i(arguments[0], arguments[1]) : o(arguments[0], arguments[1], arguments[2])
        }
        var s = e(7),
            u = e(8),
            l = {
                "float": "cssFloat"
            },
            c = {};
        ["top", "right", "bottom", "left", "width", "height", "fontSize", "paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "padding", "margin", "perspective"].forEach(function (e) {
            c[e] = "px"
        }), t.exports = a, t.exports.set = a, t.exports.get = function (e, t) {
            return Array.isArray(t) ? t.reduce(function (t, n) {
                return t[n] = o(e, n || ""), t
            }, {}) : o(e, t || "")
        }
    }, {
        7: 7,
        8: 8
    }],
    7: [function (e, t, n) {
        var o = null;
        t.exports = function (e) {
            var t = ["Moz", "Khtml", "Webkit", "O", "ms"],
                n = e.charAt(0).toUpperCase() + e.slice(1);
            if (o || (o = document.createElement("div")), e in o.style) return e;
            for (var i = t.length; i--;)
                if (t[i] + n in o.style) return t[i] + n;
            return !1
        }
    }, {}],
    8: [function (e, t, n) {
        function o(e) {
            return i(e).replace(/\s(\w)/g, function (e, t) {
                return t.toUpperCase()
            })
        }
        var i = e(9);
        t.exports = o
    }, {
        9: 9
    }],
    9: [function (e, t, n) {
        function o(e) {
            return i(e).replace(/[\W_]+(.|$)/g, function (e, t) {
                return t ? " " + t : ""
            })
        }
        var i = e(10);
        t.exports = o
    }, {
        10: 10
    }],
    10: [function (e, t, n) {
        function o(e) {
            return a.test(e) ? e.toLowerCase() : (u.test(e) && (e = i(e)), s.test(e) && (e = r(e)), e.toLowerCase())
        }

        function i(e) {
            return e.replace(l, function (e, t) {
                return t ? " " + t : ""
            })
        }

        function r(e) {
            return e.replace(c, function (e, t, n) {
                return t + " " + n.toLowerCase().split("").join(" ")
            })
        }
        t.exports = o;
        var a = /\s/,
            s = /[a-z][A-Z]/,
            u = /[\W_]/,
            l = /[\W_]+(.|$)/g,
            c = /(.)([A-Z]+)/g
    }, {}],
    11: [function (e, t, n) {
        (function (e) {
            function n() {
                this._listeners = []
            }

            function o(e) {
                e.sort(function (e, t) {
                    return e = e.p, t = t.p, e > t ? 1 : e > t ? -1 : 0
                })
            }

            function i(e, t, n, i) {
                if (!e) throw l;
                n = n || 0;
                for (var r, a, s, u = this._listeners, d = u.length; d--;)
                    if (r = u[d], r.f === e && r.c === t) return !1;
                "function" == typeof n && (a = n, n = i, s = 4), u.unshift({
                    f: e,
                    c: t,
                    p: n,
                    r: a || e,
                    a: c.call(arguments, s || 3),
                    j: 0
                }), o(u)
            }

            function r(t, n, o, r) {
                if (!t) throw l;
                var a = this,
                    s = function () {
                        return a.remove.call(a, t, n), t.apply(n, c.call(arguments, 0))
                    };
                r = c.call(arguments, 0), 1 === r.length && r.push(e), r.splice(2, 0, s), i.apply(a, r)
            }

            function a(e, t) {
                if (!e) return this._listeners.length = 0, !0;
                for (var n, o = this._listeners, i = o.length; i--;)
                    if (n = o[i], n.f === e && (!t || n.c === t)) return n.j = 1, o.splice(i, 1), !0;
                return !1
            }

            function s(e) {
                e = c.call(arguments, 0);
                for (var t, n, o = this._listeners, i = o.length; i--;)
                    if (t = o[i], t && !t.j && (t.j = 1, t.r.apply(t.c, t.a.concat(e)) === !1)) {
                        n = t;
                        break
                    } for (o = this._listeners, i = o.length; i--;) o[i].j = 0;
                return n
            }
            var u = n.prototype;
            u.add = i, u.addOnce = r, u.remove = a, u.dispatch = s;
            var l = "Callback function is missing!",
                c = Array.prototype.slice;
            "undefined" != typeof t && (t.exports = n)
        })()
    }, {}],
    12: [function (e, t, n) {
        function o(e, t, n) {
            if (null != e)
                for (var o = -1, i = e.length; ++o < i && t.call(n, e[o], o, e) !== !1;);
        }
        t.exports = o
    }, {}],
    13: [function (e, t, n) {
        function o(e) {
            switch (u(e)) {
                case "Object":
                    return i(e);
                case "Array":
                    return s(e);
                case "RegExp":
                    return r(e);
                case "Date":
                    return a(e);
                default:
                    return e
            }
        }

        function i(e) {
            return l(e) ? c({}, e) : e
        }

        function r(e) {
            var t = "";
            return t += e.multiline ? "m" : "", t += e.global ? "g" : "", t += e.ignoreCase ? "i" : "", new RegExp(e.source, t)
        }

        function a(e) {
            return new Date(+e)
        }

        function s(e) {
            return e.slice()
        }
        var u = e(19),
            l = e(18),
            c = e(25);
        t.exports = o
    }, {
        18: 18,
        19: 19,
        25: 25
    }],
    14: [function (e, t, n) {
        function o(e, t) {
            switch (u(e)) {
                case "Object":
                    return i(e, t);
                case "Array":
                    return r(e, t);
                default:
                    return a(e)
            }
        }

        function i(e, t) {
            if (l(e)) {
                var n = {};
                return s(e, function (e, n) {
                    this[n] = o(e, t)
                }, n), n
            }
            return t ? t(e) : e
        }

        function r(e, t) {
            for (var n = [], i = -1, r = e.length; ++i < r;) n[i] = o(e[i], t);
            return n
        }
        var a = e(13),
            s = e(21),
            u = e(19),
            l = e(18);
        t.exports = o
    }, {
        13: 13,
        18: 18,
        19: 19,
        21: 21
    }],
    15: [function (e, t, n) {
        var o = e(16),
            i = Array.isArray || function (e) {
                return o(e, "Array")
            };
        t.exports = i
    }, {
        16: 16
    }],
    16: [function (e, t, n) {
        function o(e, t) {
            return i(e) === t
        }
        var i = e(19);
        t.exports = o
    }, {
        19: 19
    }],
    17: [function (e, t, n) {
        function o(e) {
            return i(e, "Object")
        }
        var i = e(16);
        t.exports = o
    }, {
        16: 16
    }],
    18: [function (e, t, n) {
        function o(e) {
            return !!e && "object" == typeof e && e.constructor === Object
        }
        t.exports = o
    }, {}],
    19: [function (e, t, n) {
        function o(e) {
            return null === e ? "Null" : e === i ? "Undefined" : r.exec(a.call(e))[1]
        }
        var i, r = /^\[object (.*)\]$/,
            a = Object.prototype.toString;
        t.exports = o
    }, {}],
    20: [function (e, t, n) {
        function o() {
            s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], a = !0;
            for (var e in {
                    toString: null
                }) a = !1
        }

        function i(e, t, n) {
            var i, l = 0;
            null == a && o();
            for (i in e)
                if (r(t, e, i, n) === !1) break;
            if (a)
                for (var c = e.constructor, d = !!c && e === c.prototype;
                    (i = s[l++]) && ("constructor" === i && (d || !u(e, i)) || e[i] === Object.prototype[i] || r(t, e, i, n) !== !1););
        }

        function r(e, t, n, o) {
            return e.call(o, t[n], n, t)
        }
        var a, s, u = e(22);
        t.exports = i
    }, {
        22: 22
    }],
    21: [function (e, t, n) {
        function o(e, t, n) {
            r(e, function (o, r) {
                return i(e, r) ? t.call(n, e[r], r, e) : void 0
            })
        }
        var i = e(22),
            r = e(20);
        t.exports = o
    }, {
        20: 20,
        22: 22
    }],
    22: [function (e, t, n) {
        function o(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        t.exports = o
    }, {}],
    23: [function (e, t, n) {
        var o = e(21),
            i = Object.keys || function (e) {
                var t = [];
                return o(e, function (e, n) {
                    t.push(n)
                }), t
            };
        t.exports = i
    }, {
        21: 21
    }],
    24: [function (e, t, n) {
        function o() {
            var e, t, n, s, u = 1;
            for (s = r(arguments[0]); n = arguments[u++];)
                for (e in n) i(n, e) && (t = n[e], a(t) && a(s[e]) ? s[e] = o(s[e], t) : s[e] = r(t));
            return s
        }
        var i = e(22),
            r = e(14),
            a = e(17);
        t.exports = o
    }, {
        14: 14,
        17: 17,
        22: 22
    }],
    25: [function (e, t, n) {
        function o(e, t) {
            for (var n, o = 0, a = arguments.length; ++o < a;) n = arguments[o], null != n && r(n, i, e);
            return e
        }

        function i(e, t) {
            this[t] = e
        }
        var r = e(21);
        t.exports = o
    }, {
        21: 21
    }],
    26: [function (e, t, n) {
        function o(e, t) {
            for (var n, o, s, u, l = (e || "").replace("?", "").split("&"), c = -1, d = {}; o = l[++c];) n = o.indexOf("="), u = o.substring(0, n), s = decodeURIComponent(o.substring(n + 1)), t !== !1 && (s = i(s)), a(d, u) ? r(d[u]) ? d[u].push(s) : d[u] = [d[u], s] : d[u] = s;
            return d
        }
        var i = e(30),
            r = e(15),
            a = e(22);
        t.exports = o
    }, {
        15: 15,
        22: 22,
        30: 30
    }],
    27: [function (e, t, n) {
        function o(e) {
            var t, n, o = [];
            return i(e, function (e, i) {
                r(e) ? (t = i + "=", n = new RegExp("&" + i + "+=$"), a(e, function (e) {
                    t += encodeURIComponent(e) + "&" + i + "="
                }), o.push(t.replace(n, ""))) : o.push(i + "=" + encodeURIComponent(e))
            }), o.length ? "?" + o.join("&") : ""
        }
        var i = e(21),
            r = e(15),
            a = e(12);
        t.exports = o
    }, {
        12: 12,
        15: 15,
        21: 21
    }],
    28: [function (e, t, n) {
        function o(e) {
            e = e.replace(/#.*/, "");
            var t = /\?[a-zA-Z0-9\=\&\%\$\-\_\.\+\!\*\'\(\)\,]+/.exec(e);
            return t ? decodeURIComponent(t[0].replace(/\+/g, " ")) : ""
        }
        t.exports = o
    }, {}],
    29: [function (e, t, n) {
        function o(e, t) {
            return i(r(e), t)
        }
        var i = e(26),
            r = e(28);
        t.exports = o
    }, {
        26: 26,
        28: 28
    }],
    30: [function (e, t, n) {
        function o(e) {
            var t;
            return t = null === e || "null" === e ? null : "true" === e ? !0 : "false" === e ? !1 : e === i || "undefined" === e ? i : "" === e || isNaN(e) ? e : parseFloat(e)
        }
        var i;
        t.exports = o
    }, {}],
    31: [function (e, t, n) {
        t.exports = e(32), e(38), e(37), e(39), e(35), e(40), e(34), e(36)
    }, {
        32: 32,
        34: 34,
        35: 35,
        36: 36,
        37: 37,
        38: 38,
        39: 39,
        40: 40
    }],
    32: [function (e, t, n) {
        function o() {
            this.isLoading = !1, this.totalWeight = 0, this.loadedWeight = 0, this.itemUrls = {}, this.itemList = [], this.loadingSignal = new b
        }

        function i(e, t) {
            var n, o, i, r, a, s = p(e, t);
            for (n = 0, i = s.length; i > n; n++)
                for (a = s[n], o = 0, r = a.items.length; r > o; o++) this.add(a.items[o], {
                    type: a.type
                });
            return s
        }

        function r(e, t) {
            var n = S[e];
            return n || (n = d(e, t && t.type ? t.type : m(e).type, t)), t && t.onLoad && n.onLoaded.addOnce(t.onLoad), this.itemUrls[e] || (this.itemUrls[e] = n, this.itemList.push(n), this.totalWeight += n.weight), n
        }

        function a(e, t) {
            var n = S[e];
            return n || (n = d(e, t && t.type ? t.type : m(e).type, t)), t && t.onLoad && n.onLoaded.addOnce(t.onLoad), w[e] ? n.dispatch() : n.isStartLoaded || n.load(), n
        }

        function s(e) {
            e && this.loadingSignal.add(e), this.isLoading = !0;
            var t = this.itemList.length;
            if (t)
                for (var n, o = this.itemList.splice(0, this.itemList.length), i = 0; t > i; i++) n = o[i], n.onLoaded.addOnce(c, this, -1024, n, o), n.hasLoading && n.loadingSignal.add(u, this, -1024, n, o, x), w[n.url] ? n.dispatch(c) : n.isStartLoaded || n.load();
            else c.call(this, x, this.itemList)
        }

        function u(e, t, n, o, i) {
            e && !e.isLoaded && 1 === o || (i === x && (this.loadedWeight = l(t), i = this.loadedWeight / this.totalWeight), n = n || this.loadingSignal, n.dispatch(i, e))
        }

        function l(e) {
            for (var t = 0, n = 0, o = e.length; o > n; n++) t += e[n].loadedWeight;
            return t
        }

        function c(e, t) {
            this.loadedWeight = l(t);
            var n = this.loadingSignal;
            this.loadedWeight === this.totalWeight ? (this.isLoading = !1, this.loadedWeight = 0, this.totalWeight = 0, this.loadingSignal = new b, this._onLoading(e, t, n, 1, 1)) : this._onLoading(e, t, n, 1, this.loadedWeight / this.totalWeight)
        }

        function d(e, t, n) {
            return new A[t](e, n)
        }

        function f(e) {
            A[e.type] || (C.push(e), A[e.type] = e)
        }

        function p(e, t) {
            var n, o, i = e.length,
                r = [];
            if (i && "string" != typeof e)
                for (n = 0; i > n; n++) o = m(e[n], t), o && (r = r.concat(o));
            else o = m(e, t), o && (r = r.concat(o));
            return r
        }

        function m(e, t) {
            var n, o, i, r, a;
            if (t) r = A[t], i = r.retrieve(e);
            else
                for (n = 0, o = C.length; o > n; n++) {
                    if (r = C[n], a = r.type, "string" == typeof e) {
                        if (h(e, r)) {
                            i = [e];
                            break
                        }
                    } else if (i = r.retrieve(e), i && i.length && "string" == typeof i[0] && h(i[0], r)) break;
                    i = x, a = x
                }
            return i ? {
                type: t || a,
                items: i
            } : void 0
        }

        function h(e, t) {
            if (e) {
                for (var n = v(e), o = t.extensions, i = o.length; i--;)
                    if (n === o[i]) return !0;
                return !1
            }
        }

        function v(e) {
            return e.split(".").pop().split(/\#|\?/)[0]
        }

        function g() {
            return new o
        }

        function _() {
            var e = [],
                t = [];
            for (var n in S) e.push(n), w[n] || t.push(S[n]);
            console.log({
                added: e,
                notLoaded: t
            })
        }
        var x, b = e(11),
            y = o.prototype;
        y.addChunk = i, y.add = r, y.load = a, y.start = s, y._onLoading = u;
        var E = t.exports = g();
        E.version = "0.1.14", E.register = f, E.retrieveAll = p, E.retrieve = m, E.testExtensions = h, E.create = g, E.load = a, E.check = _;
        var S = E.addedItems = {},
            w = E.loadedItems = {},
            C = E.ITEM_CLASS_LIST = [],
            A = E.ITEM_CLASSES = {}
    }, {
        11: 11
    }],
    33: [function (e, t, n) {
        function o(e, t) {
            if (e) {
                this.url = e, this.loadedWeight = 0, this.weight = 1;
                for (var n in t) this[n] = t[n];
                this.type || (this.type = this.constructor.type), this.hasLoading && (this.loadingSignal = new u, this.loadingSignal.add(a, this), this.onLoading && this.loadingSignal.add(this.onLoading));
                var o = this;
                this.boundOnLoad = function () {
                    o._onLoad()
                }, this.onLoaded = new u, l.addedItems[e] = this
            }
        }

        function i() {
            this.isStartLoaded = !0
        }

        function r() {
            this.isLoaded = !0, this.loadedWeight = this.weight, l.loadedItems[this.url] = this, this.onLoaded.dispatch(this.content)
        }

        function a(e) {
            this.loadedWeight = this.weight * e
        }

        function s() {
            this.hasLoading && this.loadingSignal.remove(), this.onLoaded.dispatch(this.content)
        }
        var u = e(11),
            l = e(32);
        t.exports = o;
        var c = o.prototype;
        c.load = i, c._onLoad = r, c._onLoading = a, c.dispatch = s, o.extensions = [], o.retrieve = function () {
            return !1
        }
    }, {
        11: 11,
        32: 32
    }],
    34: [function (e, t, n) {
        function o(e, t) {
            e && (s.constructor.call(this, e, t), !this.loadFunc && console && console[console.error || console.log]("require loadFunc in the config object."))
        }

        function i() {
            var e = this;
            this.loadFunc(this.url, function (t) {
                e.content = t, s._onLoad.call(e)
            }, this.loadingSignal)
        }
        var r = e(33),
            a = e(32);
        t.exports = o, o.type = "any", o.extensions = [], a.register(o), o.retrieve = function () {
            return !1
        };
        var s = r.prototype,
            u = o.prototype = new r;
        u.constructor = o, u.load = i
    }, {
        32: 32,
        33: 33
    }],
    35: [function (e, t, n) {
        function o(e, t) {
            if (e) {
                this.loadThrough = t && t.loadThrough !== a ? t.loadThrough : !0, l.constructor.apply(this, arguments);
                try {
                    this.content = new Audio
                } catch (n) {
                    this.content = document.createElement("audio")
                }
            }
        }

        function i() {
            l.load.apply(this, arguments);
            var e = this,
                t = e.content;
            t.src = this.url, this.loadThrough ? t.addEventListener("canplaythrough", this.boundOnLoad, !1) : t.addEventListener("canplay", this.boundOnLoad, !1), t.load()
        }

        function r() {
            this.content.removeEventListener("canplaythrough", this.boundOnLoad, !1), this.content.removeEventListener("canplay", this.boundOnLoad, !1), this.isLoaded || l._onLoad.call(this)
        }
        var a, s = e(33),
            u = e(32);
        t.exports = o, o.type = "audio", o.extensions = ["mp3", "ogg"], u.register(o), o.retrieve = function (e) {
            return !1
        };
        var l = s.prototype,
            c = o.prototype = new s;
        c.constructor = o, c.load = i, c._onLoad = r
    }, {
        32: 32,
        33: 33
    }],
    36: [function (e, t, n) {
        function o(e, t) {
            e && (c.constructor.apply(this, arguments), this.content = new Image)
        }

        function i() {
            c.load.apply(this, arguments);
            var e = this.content;
            e.src = this.url, e.complete ? this._onLoad() : e.onload = this.boundOnLoad
        }

        function r() {
            delete this.content.onload, this.width = this.content.width, this.height = this.content.height, c._onLoad.call(this)
        }

        function a(e) {
            return 0 !== e.indexOf("data:")
        }
        var s = e(33),
            u = e(2),
            l = e(32);
        t.exports = o;
        var c = s.prototype,
            d = o.prototype = new s;
        d.constructor = o, d.load = i, d._onLoad = r, o.retrieve = function (e) {
            if (e.nodeType && e.style) {
                var t = [];
                "img" == e.nodeName.toLowerCase() && e.src.indexOf(";") < 0 && t.push(e.src), u(e, "background-image").replace(/s?url\(\s*?[\'\"]?([^;]*?)[\'\"]?\s*?\)/g, function (e, n) {
                    t.push(n)
                });
                for (var n = t.length; n--;) a(t[n]) || t.splice(n, 1);
                return t.length ? t : !1
            }
            return "string" == typeof e ? [e] : !1
        }, o.type = "image", o.extensions = ["jpg", "gif", "png"], l.register(o)
    }, {
        2: 2,
        32: 32,
        33: 33
    }],
    37: [function (require, module, exports) {
        function JSONItem(e) {
            e && _super.constructor.apply(this, arguments)
        }

        function _onLoad() {
            this.content && (this.content = window.JSON && window.JSON.parse ? JSON.parse(this.content.toString()) : eval(this.content.toString())), _super._onLoad.call(this)
        }
        var TextItem = require(39),
            quickLoader = require(32);
        module.exports = JSONItem, JSONItem.type = "json", JSONItem.extensions = ["json"], quickLoader.register(JSONItem), JSONItem.retrieve = function () {
            return !1
        };
        var _super = TextItem.prototype,
            _p = JSONItem.prototype = new TextItem;
        _p.constructor = JSONItem, _p._onLoad = _onLoad
    }, {
        32: 32,
        39: 39
    }],
    38: [function (e, t, n) {
        function o() {
            return "_jsonp" + (new Date).getTime() + ~~(1e8 * Math.random())
        }

        function i(e) {
            e && u.constructor.apply(this, arguments)
        }

        function r(e) {
            u.load.apply(this, arguments);
            var t = this,
                n = this.url.lastIndexOf("=") + 1,
                i = this.url.substr(0, n),
                r = this.url.substr(n);
            0 === r.length ? (r = o(), this.jsonpCallback = e) : this.jsonpCallback = this.jsonpCallback || window[r], window[r] = function (e) {
                a.parentNode && a.parentNode.removeChild(a), t.content = e, t._onLoad()
            };
            var a = document.createElement("script");
            a.type = "text/javascript", a.src = i + r, document.getElementsByTagName("head")[0].appendChild(a)
        }
        var a = e(33),
            s = e(32);
        t.exports = i, i.type = "jsonp", i.extensions = [], s.register(i), i.retrieve = function (e) {
            return "string" == typeof e && e.indexOf("=") > -1 ? [e] : !1
        };
        var u = a.prototype,
            l = i.prototype = new a;
        l.constructor = i, l.load = r
    }, {
        32: 32,
        33: 33
    }],
    39: [function (e, t, n) {
        function o(e) {
            e && f.constructor.apply(this, arguments)
        }

        function i() {
            f.load.apply(this, arguments);
            var e, t = this;
            e = d ? this.xmlhttp = new XMLHttpRequest : this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"), this.hasLoading && (e.onprogress = function (e) {
                t._onXmlHttpProgress(e)
            }), e.onreadystatechange = function () {
                t._onXmlHttpChange()
            }, e.open("GET", this.url, !0), d ? e.send(null) : e.send()
        }

        function r(e) {
            this.loadingSignal.dispatch(e.loaded / e.total)
        }

        function a() {
            4 == this.xmlhttp.readyState && 200 == this.xmlhttp.status && (this.content = this.xmlhttp.responseText, this._onLoad())
        }

        function s() {
            this.content && (this.xmlhttp = u), f._onLoad.call(this)
        }
        var u, l = e(33),
            c = e(32),
            d = !!window.XMLHttpRequest;
        t.exports = o, o.type = "text", o.extensions = ["html", "txt", "svg"], c.register(o), o.retrieve = function () {
            return !1
        };
        var f = l.prototype,
            p = o.prototype = new l;
        p.constructor = o, p.load = i, p._onXmlHttpChange = a, p._onXmlHttpProgress = r, p._onLoad = s
    }, {
        32: 32,
        33: 33
    }],
    40: [function (e, t, n) {
        function o(e, t) {
            if (e) {
                this.loadThrough = t && t.loadThrough !== a ? t.loadThrough : !0, l.constructor.apply(this, arguments);
                try {
                    this.content = new Video
                } catch (n) {
                    this.content = document.createElement("video")
                }
            }
        }

        function i() {
            l.load.apply(this, arguments);
            var e = this.content;
            e.preload = "auto", e.src = this.url, this.loadThrough ? e.addEventListener("canplaythrough", this.boundOnLoad, !1) : e.addEventListener("canplay", this.boundOnLoad, !1), e.load()
        }

        function r() {
            this.content.removeEventListener("canplaythrough", this.boundOnLoad), this.content.removeEventListener("canplay", this.boundOnLoad), this.isLoaded || l._onLoad.call(this)
        }
        var a, s = e(33),
            u = e(32);
        t.exports = o, o.type = "video", o.extensions = ["mp4", "webm", "ogv"], u.register(o), o.retrieve = function (e) {
            return !1
        };
        var l = s.prototype,
            c = o.prototype = new s;
        c.constructor = o, c.load = i, c._onLoad = r
    }, {
        32: 32,
        33: 33
    }],
    41: [function (e, t, n) {
        for (var o = e(42), i = "undefined" == typeof window ? {} : window, r = ["moz", "webkit"], a = "AnimationFrame", s = i["request" + a], u = i["cancel" + a] || i["cancelRequest" + a], l = 0; l < r.length && !s; l++) s = i[r[l] + "Request" + a], u = i[r[l] + "Cancel" + a] || i[r[l] + "CancelRequest" + a];
        if (!s || !u) {
            var c = 0,
                d = 0,
                f = [],
                p = 1e3 / 60;
            s = function (e) {
                if (0 === f.length) {
                    var t = o(),
                        n = Math.max(0, p - (t - c));
                    c = n + t, setTimeout(function () {
                        var e = f.slice(0);
                        f.length = 0;
                        for (var t = 0; t < e.length; t++)
                            if (!e[t].cancelled) try {
                                e[t].callback(c)
                            } catch (n) {
                                setTimeout(function () {
                                    throw n
                                }, 0)
                            }
                    }, Math.round(n))
                }
                return f.push({
                    handle: ++d,
                    callback: e,
                    cancelled: !1
                }), d
            }, u = function (e) {
                for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
            }
        }
        t.exports = function (e) {
            return s.call(i, e)
        }, t.exports.cancel = function () {
            u.apply(i, arguments)
        }
    }, {
        42: 42
    }],
    42: [function (e, t, n) {
        (function (e) {
            (function () {
                var n, o, i;
                "undefined" != typeof performance && null !== performance && performance.now ? t.exports = function () {
                    return performance.now()
                } : "undefined" != typeof e && null !== e && e.hrtime ? (t.exports = function () {
                    return (n() - i) / 1e6
                }, o = e.hrtime, n = function () {
                    var e;
                    return e = o(), 1e9 * e[0] + e[1]
                }, i = n()) : Date.now ? (t.exports = function () {
                    return Date.now() - i
                }, i = Date.now()) : (t.exports = function () {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        }).call(this, e(1))
    }, {
        1: 1
    }],
    43: [function (e, t, n) {
        var o = function () {
            function e(e) {
                return i.appendChild(e.dom), e
            }

            function t(e) {
                for (var t = 0; t < i.children.length; t++) i.children[t].style.display = t === e ? "block" : "none";
                n = e
            }
            var n = 0,
                i = document.createElement("div");
            i.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", i.addEventListener("click", function (e) {
                e.preventDefault(), t(++n % i.children.length)
            }, !1);
            var r = (performance || Date).now(),
                a = r,
                s = 0,
                u = e(new o.Panel("FPS", "#0ff", "#002")),
                l = e(new o.Panel("MS", "#0f0", "#020"));
            if (self.performance && self.performance.memory) var c = e(new o.Panel("MB", "#f08", "#201"));
            return t(0), {
                REVISION: 16,
                dom: i,
                addPanel: e,
                showPanel: t,
                begin: function () {
                    r = (performance || Date).now()
                },
                end: function () {
                    s++;
                    var e = (performance || Date).now();
                    if (l.update(e - r, 200), e > a + 1e3 && (u.update(1e3 * s / (e - a), 100), a = e, s = 0, c)) {
                        var t = performance.memory;
                        c.update(t.usedJSHeapSize / 1048576, t.jsHeapSizeLimit / 1048576)
                    }
                    return e
                },
                update: function () {
                    r = this.end()
                },
                domElement: i,
                setMode: t
            }
        };
        o.Panel = function (e, t, n) {
            var o = 1 / 0,
                i = 0,
                r = Math.round,
                a = r(window.devicePixelRatio || 1),
                s = 80 * a,
                u = 48 * a,
                l = 3 * a,
                c = 2 * a,
                d = 3 * a,
                f = 15 * a,
                p = 74 * a,
                m = 30 * a,
                h = document.createElement("canvas");
            h.width = s, h.height = u, h.style.cssText = "width:80px;height:48px";
            var v = h.getContext("2d");
            return v.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", v.textBaseline = "top", v.fillStyle = n, v.fillRect(0, 0, s, u), v.fillStyle = t, v.fillText(e, l, c), v.fillRect(d, f, p, m), v.fillStyle = n, v.globalAlpha = .9, v.fillRect(d, f, p, m), {
                dom: h,
                update: function (u, g) {
                    o = Math.min(o, u), i = Math.max(i, u), v.fillStyle = n, v.globalAlpha = 1, v.fillRect(0, 0, s, f), v.fillStyle = t, v.fillText(r(u) + " " + e + " (" + r(o) + "-" + r(i) + ")", l, c), v.drawImage(h, d + a, f, p - a, m, d, f, p - a, m), v.fillRect(d + p - a, f, a, m), v.fillStyle = n, v.globalAlpha = .9, v.fillRect(d + p - a, f, a, r((1 - u / g) * m))
                }
            }
        }, "object" == typeof t && (t.exports = o)
    }, {}],
    44: [function (e, t, n) {
        t.exports = window.THREE
    }, {}],
    45: [function (e, t, n) {
        function o(e) {
            c || (c = e, h = n.rawShaderPrefix = "precision " + c.capabilities.precision + " float;\n", f = new m.Scene, p = new m.Camera, p.position.z = 1, g = n.copyMaterial = new m.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: l
                    }
                },
                vertexShader: v = n.vertexShader = h + "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n",
                fragmentShader: h + "#define GLSLIFY 1\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    gl_FragColor = texture2D( u_texture, v_uv );\n}\n"
            }), d = new m.Mesh(new m.PlaneBufferGeometry(2, 2), g), f.add(d))
        }

        function i(e, t) {
            d.material = g, g.uniforms.u_texture.value = e, t ? c.render(f, p, t) : c.render(f, p)
        }

        function r(e, t) {
            d.material = e, t ? c.render(f, p, t) : c.render(f, p)
        }

        function a(e, t, n, o, i, r) {
            var a = new m.WebGLRenderTarget(e || 1, t || 1, {
                format: n || m.RGBFormat,
                type: o || m.UnsignedByteType,
                minFilter: i || m.LinearFilter,
                magFilter: r || m.LinearFilter
            });
            return a.texture.generateMipMaps = !1, a
        }

        function s() {
            return {
                autoClearColor: c.autoClearColor,
                clearColor: c.getClearColor().getHex(),
                clearAlpha: c.getClearAlpha()
            }
        }

        function u(e) {
            c.setClearColor(e.clearColor, e.clearAlpha), c.autoClearColor = e.autoClearColor
        }
        var l, c, d, f, p, m = e(44),
            h = n.rawShaderPrefix = l,
            v = n.vertexShader = l,
            g = n.copyMaterial = l;
        n.init = o, n.copy = i, n.render = r, n.createRenderTarget = a, n.getColorState = s, n.setColorState = u
    }, {
        44: 44
    }],
    46: [function (e, t, n) {
        function o() {
            var e = new r.PlaneBufferGeometry(4500, 4500, 10, 10),
                t = new r.MeshStandardMaterial({
                    color: 16777215,
                    roughness: .4,
                    metalness: .2
                }),
                o = n.mesh = new r.Mesh(e, t);
            o.rotation.x = -1.57
        }
        var i, r = (e(60), e(44));
        n.mesh = i, n.init = o
    }, {
        44: 44,
        60: 60
    }],
    47: [function (e, t, n) {
        function o() {
            s = n.mesh = new a.Object3D, s.position.set(0, 500, 0);
            var e = new a.AmbientLight(3355443);
            s.add(e), u = n.pointLight = new a.PointLight(16777215, 1, 800), s.add(u)
        }

        function i(e, t) {
            l += 1 * e
        }
        var r, a = (e(60), e(44)),
            s = n.mesh = r,
            u = n.pointLight = r;
        n.init = o, n.update = i;
        var l = 0
    }, {
        44: 44,
        60: 60
    }],
    48: [function (e, t, n) {
        function o(e, t) {
            k = m.simulatorTextureWidth, B = m.simulatorTextureHeight, U = k * B, z = m.inset, A = new h.Camera, A.position.z = 1, M = new h.Scene, C = new h.Scene, E = t, S = e, P = new h.Vector2, a(), s(), u(), l(), T = new h.Points(w, R.material), T.frustumCulled = !1, M.add(T), i("default", x.add("images/cropped-favicon-512x512.png", {
                onLoad: r.bind("default")
            }).content), i("metal", m.sphereMap), i("plastic", x.add("images/cropped-favicon-01-512x512.png", {
                onLoad: r.bind("plastic")
            }).content), H.metal.needsUpdate = !0, x.start();
            var o = new h.PlaneBufferGeometry(2, 2);
            D = new h.ShaderMaterial({
                uniforms: {
                    uDepth: {
                        type: "t",
                        value: y
                    },
                    uInset: {
                        type: "f",
                        value: 0
                    },
                    uWashout: {
                        type: "f",
                        value: 0
                    },
                    uAdditive: {
                        type: "t",
                        value: R
                    },
                    uSphereMap: {
                        type: "t",
                        value: H["default"]
                    },
                    uResolution: {
                        type: "v2",
                        value: P
                    },
                    uFogColor: {
                        type: "c",
                        value: new h.Color
                    }
                },
                transparent: !0,
                depthWrite: !1,
                vertexShader: v("#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"),
                fragmentShader: v("#define GLSLIFY 1\nuniform vec2 uResolution;\nuniform vec3 uFogColor;\nuniform float uInset;\nuniform float uWashout;\n\nuniform sampler2D uDepth;\nuniform sampler2D uAdditive;\nuniform sampler2D uSphereMap;\nvarying vec2 vUv;\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n#define LOG2 1.442695\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n    return mix(1.0 - 2.0 * (1.0 - base) * (1.0 - blend), 2.0 * base * blend, step(base, vec3(0.5)));\n}\n\nvoid main() {\n\n    vec4 merged = texture2D( uAdditive, vUv );\n\n    float alpha = smoothstep(0.0, 1.0, merged.w);\n\n    if(alpha < 0.001) discard;\n\n    vec4 outer = merged;\n\n    merged.xy /= merged.z;\n    merged.z = sqrt(1.0 - merged.x * merged.x - merged.y * merged.y);\n\n    vec4 color =  texture2D( uSphereMap, merged.xy * 0.5 + 0.5 );\n\n    outer.xy /= -outer.z * (1.0 + uInset);\n    outer.z = sqrt(1.0 - outer.x * outer.x - outer.y * outer.y);\n    outer.xyz = normalize(outer.xyz);\n    vec4 blend =  texture2D( uSphereMap, outer.xy * 0.5 + 0.5 );\n\n    float centerZ = texture2D( uDepth, gl_FragCoord.xy  / uResolution ).a;\n    centerZ = max(0.0, centerZ - 120.0);\n\n    float fogFactor = whiteCompliment( exp2( - 0.0015  * 0.0015     * centerZ *centerZ * LOG2 ) );\n\n    color.xyz = min(vec3(1.0), mix(blendOverlay(color.xyz,  blend.xyz), max(color.xyz,  blend.xyz), uWashout));\n\n    gl_FragColor = min(vec4(1.0), vec4(color.xyz, alpha * (1.0 - fogFactor )));\n\n}\n\n")
            }), b = n.mesh = new h.Mesh(o, D), C.add(b)
        }

        function i(e, t) {
            var n = H[e] = new h.Texture(t);
            return n.anisotropy = S.getMaxAnisotropy(), n.flipY = !1, n
        }

        function r() {
            H[this].needsUpdate = !0
        }

        function a() {
            for (var e, t = new Float32Array(3 * U), n = 0; U > n; n++) e = 3 * n, t[e + 0] = (n % k + .5) / k, t[e + 1] = (~~(n / k) + .5) / B, t[e + 2] = 400 + 750 * Math.pow(Math.random(), 5);
            w = new h.BufferGeometry, w.addAttribute("position", new h.BufferAttribute(t, 3))
        }

        function s() {
            var e = new h.ShaderMaterial({
                uniforms: {
                    uParticleSize: {
                        type: "f",
                        value: m.particleSize
                    },
                    uTexturePosition: {
                        type: "t",
                        value: p
                    },
                    uTexturePrevPosition: {
                        type: "t",
                        value: p
                    },
                    uCameraPosition: {
                        type: "v3",
                        value: E.position
                    },
                    uPrevModelViewMatrix: {
                        type: "m4",
                        value: new h.Matrix4
                    },
                    uMotionMultiplier: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: v("#define GLSLIFY 1\nuniform sampler2D uTexturePosition;\nuniform sampler2D uTexturePrevPosition;\nuniform vec3 uCameraPosition;\nuniform float uParticleSize;\n\nuniform mat4 uPrevModelViewMatrix;\n\nvarying float vHalfSize;\nvarying float vDepth;\nvarying vec2 vMotion;\n\nvoid main() {\n\n    vec4 positionInfo = texture2D( uTexturePosition, position.xy );\n    vec4 prevPositionInfo = texture2D( uTexturePrevPosition, position.xy );\n\n    vec4 mvPosition = modelViewMatrix * vec4( positionInfo.xyz, 1.0 );\n\n    vDepth = -mvPosition.z;\n    gl_PointSize = position.z / length( mvPosition.xyz ) * smoothstep(0.0, 0.2, positionInfo.w) * uParticleSize;\n    vHalfSize = gl_PointSize * 0.5;\n    gl_Position = projectionMatrix * mvPosition;\n\n    vec4 pos = projectionMatrix * mvPosition;\n    vec4 prevPos = projectionMatrix * uPrevModelViewMatrix * vec4( prevPositionInfo.xyz, 1.0 );\n    vMotion = (pos.xy / pos.w - prevPos.xy / prevPos.w) * 0.5 * step(positionInfo.w, prevPositionInfo.w);\n\n    gl_Position = pos;\n    gl_Position.y += step(200.0, gl_PointSize) * 8192.0;\n\n}\n"),
                fragmentShader: v("#define GLSLIFY 1\nvarying float vDepth;\nvarying float vHalfSize;\nvarying vec2 vMotion;\n\nuniform float uMotionMultiplier;\n\nconst float EPS = 0.001;\n\nvoid main() {\n\n    vec2 toCenter = (gl_PointCoord.xy - 0.5) * 2.0;\n    float isVisible = step(-1.0 + EPS, -length(toCenter));\n    if(isVisible < 0.5) discard;\n    gl_FragColor = vec4(vMotion * uMotionMultiplier, gl_FragCoord.z, vDepth);\n    // gl_FragColor = vec4(vDepth, smoothstep(vHalfSize - 6.0, vHalfSize, d * vHalfSize), 0.0, 1.0);\n\n}\n"),
                blending: h.NoBlending
            });
            y = new h.WebGLRenderTarget(1, 1, {
                minFilter: h.NearestFilter,
                magFilter: h.NearestFilter,
                format: h.RGBAFormat,
                type: h.FloatType,
                stencilBuffer: !1
            }), y.material = e, m.distanceMap = y
        }

        function u() {
            var e = new h.ShaderMaterial({
                uniforms: {
                    uParticleSize: {
                        type: "f",
                        value: m.particleSize
                    },
                    uTexturePosition: {
                        type: "t",
                        value: p
                    },
                    uDepth: {
                        type: "t",
                        value: y
                    },
                    uInset: {
                        type: "f",
                        value: 0
                    },
                    uResolution: {
                        type: "v2",
                        value: P
                    },
                    uCameraPosition: {
                        type: "v3",
                        value: E.position
                    }
                },
                vertexShader: v("#define GLSLIFY 1\nuniform sampler2D uTexturePosition;\nuniform vec3 uCameraPosition;\nuniform float uParticleSize;\n\nvarying float vHalfSize;\nvarying float vLife;\nvarying float vDepth;\n\nvoid main() {\n\n    vec4 positionInfo = texture2D( uTexturePosition, position.xy );\n\n    vec4 worldPosition = modelMatrix * vec4( positionInfo.xyz, 1.0 );\n    vec4 mvPosition = viewMatrix * worldPosition;\n\n    vDepth = -mvPosition.z;\n    gl_PointSize = position.z / length( mvPosition.xyz ) * smoothstep(0.0, 0.2, positionInfo.w) * uParticleSize;\n    vHalfSize = gl_PointSize * 0.5;\n    vLife = positionInfo.w;\n\n    gl_Position = projectionMatrix * mvPosition;\n\n    gl_Position.y += step(200.0, gl_PointSize) * 8192.0;\n\n}\n"),
                fragmentShader: v("#define GLSLIFY 1\nvarying float vHalfSize;\nvarying float vDepth;\nvarying float vLife;\n\nuniform float uInset;\nuniform vec2 uResolution;\nuniform sampler2D uDepth;\n\nconst float EPS = 0.001;\n\nvoid main() {\n\n    vec2 toCenter = (gl_PointCoord.xy - 0.5) * 2.0;\n    float isVisible = step(-1.0 + EPS, -length(toCenter));\n    if(isVisible < 0.5) discard;\n\n    float centerZ = texture2D( uDepth, gl_FragCoord.xy  / uResolution ).a;\n    float zLength = sqrt(1.0 - toCenter.x * toCenter.x - toCenter.y * toCenter.y) * vHalfSize;\n    float z = centerZ - vDepth + zLength;\n\n    isVisible *= step(EPS, z);\n    toCenter.xy *= z * (1.0 + uInset * vLife);\n    gl_FragColor = vec4(toCenter, z, z / zLength ) * isVisible;\n\n}\n\n"),
                blending: h.CustomBlending,
                blendEquation: h.AddEquation,
                blendSrc: h.OneFactor,
                blendDst: h.OneFactor,
                blendEquationAlpha: h.AddEquation,
                blendSrcAlpha: h.OneFactor,
                blendDstAlpha: h.OneFactor,
                transparent: !0
            });
            R = new h.WebGLRenderTarget(1, 1, {
                minFilter: h.NearestFilter,
                magFilter: h.NearestFilter,
                format: h.RGBAFormat,
                type: h.FloatType,
                depthWrite: !1,
                depthBuffer: !1,
                stencilBuffer: !1
            }), R.material = e
        }

        function l() {
            L = new h.ShaderMaterial({
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: R
                    },
                    uResolution: {
                        type: "v2",
                        value: P
                    },
                    uOffset: {
                        type: "f",
                        value: 0
                    },
                    uBlurZ: {
                        type: "f",
                        value: 0
                    }
                },
                vertexShader: v("#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"),
                fragmentShader: v("#define GLSLIFY 1\nuniform sampler2D tDiffuse;\nuniform float uOffset;\nuniform float uBlurZ;\nuniform vec2 uResolution;\nvarying vec2 vUv;\n\nconst float EPS = 0.01;\n\nvoid main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    vec4 center = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * uOffset, vUv.y ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * uOffset, vUv.y ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * uOffset, vUv.y ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * uOffset, vUv.y ) ) * 0.1531;\n    sum += center * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * uOffset, vUv.y ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * uOffset, vUv.y ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * uOffset, vUv.y ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * uOffset, vUv.y ) ) * 0.051;\n\n    center.xy = sum.xy;\n    center.z = mix(center.z, sum.z, step(EPS, center.w) * uBlurZ);\n\n    gl_FragColor = center;\n\n}\n"),
                transparent: !0,
                blending: h.NoBlending
            }), O = new h.WebGLRenderTarget(1, 1, {
                minFilter: h.NearestFilter,
                magFilter: h.NearestFilter,
                format: h.RGBAFormat,
                type: h.FloatType,
                stencilBuffer: !1
            }), N = new h.ShaderMaterial({
                uniforms: {
                    tDiffuse: {
                        type: "t",
                        value: O
                    },
                    uResolution: {
                        type: "v2",
                        value: P
                    },
                    uOffset: {
                        type: "f",
                        value: 0
                    },
                    uBlurZ: {
                        type: "f",
                        value: 0
                    }
                },
                vertexShader: v("#define GLSLIFY 1\nvarying vec2 vUv;\n\nvoid main() {\n\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n"),
                fragmentShader: v("#define GLSLIFY 1\nuniform sampler2D tDiffuse;\nuniform float uOffset;\nuniform float uBlurZ;\nuniform vec2 uResolution;\nvarying vec2 vUv;\n\nconst float EPS = 0.01;\n\nvoid main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    vec4 center = texture2D( tDiffuse, vec2( vUv.x, vUv.y ) );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * uOffset ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * uOffset ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * uOffset ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * uOffset ) ) * 0.1531;\n    sum += center * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * uOffset ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * uOffset ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * uOffset ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * uOffset ) ) * 0.051;\n\n    center.xy = sum.xy;\n    center.z = mix(center.z, sum.z, step(EPS, center.w) * uBlurZ);\n\n    gl_FragColor = center;\n\n}\n"),
                transparent: !0,
                blending: h.NoBlending
            })
        }

        function c(e, t) {
            I = e, F = t, P.set(e, t), y.setSize(e, t), R.setSize(e, t), O.setSize(e, t)
        }

        function d() {
            var e = S.autoClearColor,
                t = S.getClearColor().getHex(),
                n = S.getClearAlpha();
            S.setClearColor(0, 1), S.clearTarget(y, !0, !0, !0), T.material = y.material, y.material.uniforms.uTexturePrevPosition.value = _.prevPositionRenderTarget, y.material.uniforms.uTexturePosition.value = _.positionRenderTarget, y.material.uniforms.uParticleSize.value = m.particleSize, S.render(M, E, y), g.skipMatrixUpdate || y.material.uniforms.uPrevModelViewMatrix.value.copy(T.modelViewMatrix), z += .05 * (m.inset - z), S.setClearColor(0, 0), S.clearTarget(R, !0, !0, !0), T.material = R.material, R.material.uniforms.uInset.value = z + m.insetExtra, R.material.uniforms.uParticleSize.value = m.particleSize, R.material.uniforms.uTexturePosition.value = _.positionRenderTarget, S.render(M, E, R);
            var o = m.blur;
            if (o) {
                var i = L.uniforms;
                i.uOffset.value += .05 * (o / I - i.uOffset.value), i.uBlurZ.value += .05 * (m.blurZ - i.uBlurZ.value), i = N.uniforms, i.uOffset.value += .05 * (o / F - i.uOffset.value), i.uBlurZ.value += .05 * (m.blurZ - i.uBlurZ.value), S.clearTarget(O, !0, !0, !0), b.material = L, S.render(C, A, O), S.clearTarget(R, !0, !0, !0), b.material = N, S.render(C, A, R), b.material = D
            }
            S.setClearColor(t, n), S.autoClearColor = e, S.setViewport(0, 0, I, F)
        }

        function f(e) {
            var t = S.autoClearColor,
                n = S.getClearColor().getHex(),
                o = S.getClearAlpha();
            S.autoClearColor = !1;
            var i = D.uniforms;
            i.uSphereMap.value = H[m.matcap], i.uInset.value = R.material.uniforms.uInset.value, i.uWashout.value += .05 * (m.washout - i.uWashout.value), S.render(C, A, e), S.setClearColor(n, o), S.autoClearColor = t
        }
        var p, m = e(60),
            h = e(44),
            v = e(62),
            g = e(54),
            _ = e(58),
            x = e(31),
            b = n.mesh = p;
        n.init = o, n.resize = c, n.preRender = d, n.update = f;
        var y, E, S, w, C, A, T, D, M, R, L, N, O, P, I, F, z, k, B, U, H = {}
    }, {
        31: 31,
        44: 44,
        54: 54,
        58: 58,
        60: 60,
        62: 62
    }],
    49: [function (e, t, n) {
        function o() {}

        function i(e) {
            d(this, {
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: s
                    },
                    u_resolution: {
                        type: "v2",
                        value: l.resolution
                    },
                    u_aspect: {
                        type: "f",
                        value: 1
                    }
                },
                enabled: !0,
                vertexShader: "",
                fragmentShader: "",
                isRawMaterial: !0,
                addRawShaderPrefix: !0
            }, e), this.vertexShader || (this.vertexShader = this.isRawMaterial ? c.vertexShader : p), this.addRawShaderPrefix && this.isRawMaterial && (this.vertexShader = c.rawShaderPrefix + this.vertexShader, this.fragmentShader = c.rawShaderPrefix + this.fragmentShader), this.material = new u[this.isRawMaterial ? "RawShaderMaterial" : "ShaderMaterial"]({
                uniforms: this.uniforms,
                vertexShader: this.vertexShader,
                fragmentShader: this.fragmentShader
            })
        }

        function r(e, t) {}

        function a(e, t, n) {
            return this.uniforms.u_texture.value = t, this.uniforms.u_aspect.value = this.uniforms.u_resolution.value.x / this.uniforms.u_resolution.value.y, l.render(this.material, n)
        }
        var s, u = e(44),
            l = e(52),
            c = e(45),
            d = e(24);
        t.exports = o;
        var f = o.prototype;
        f.init = i, f.resize = r, f.render = a;
        var p = "#define GLSLIFY 1\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n"
    }, {
        24: 24,
        44: 44,
        45: 45,
        52: 52
    }],
    50: [function (e, t, n) {
        function o() {
            c.init.call(this, {
                uniforms: {
                    u_blurTexture: {
                        type: "t",
                        value: r
                    },
                    u_amount: {
                        type: "f",
                        value: 0
                    }
                },
                fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform sampler2D u_blurTexture;\n\nuniform float u_amount;\n\nvarying vec2 v_uv;\n\nvoid main()\n{\n\n    vec3 baseColor = texture2D(u_texture, v_uv).rgb;\n    vec3 blurColor = texture2D(u_blurTexture, v_uv).rgb;\n    vec3 color = mix(baseColor, 1.0 - ((1.0 - baseColor) * (1.0 - blurColor)), u_amount);\n    // vec3 color = mix(baseColor, max(baseColor, blurColor), u_amount);\n\n    gl_FragColor = vec4(color, 1.0);\n\n}\n"
            }), d = new l.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: r
                    },
                    u_delta: {
                        type: "v2",
                        value: new l.Vector2
                    }
                },
                vertexShader: u.vertexShader,
                fragmentShader: u.rawShaderPrefix + "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\n\nvarying vec2 v_uv;\n\nvoid main()\n{\n\n    vec3 color = texture2D( u_texture, v_uv ).rgb * 0.1633;\n\n    vec2 delta = u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.1531;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.1531;\n\n    delta += u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.12245;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.12245;\n\n    delta += u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.0918;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.0918;\n\n    delta += u_delta;\n    color += texture2D( u_texture,  v_uv - delta ).rgb * 0.051;\n    color += texture2D( u_texture,  v_uv + delta ).rgb * 0.051;\n\n    gl_FragColor = vec4(color, 1.0);\n\n}\n"
            })
        }

        function i(e, t, o) {
            var i = s.getRenderTarget(f),
                r = s.getRenderTarget(f);
            s.releaseRenderTarget(i, r);
            var a = n.blurRadius;
            d.uniforms.u_texture.value = t, d.uniforms.u_delta.value.set(a / s.resolution.x, 0), u.render(d, i), a = n.blurRadius, d.uniforms.u_texture.value = i, d.uniforms.u_delta.value.set(0, a / s.resolution.y), u.render(d, r), this.uniforms.u_blurTexture.value = r, this.uniforms.u_amount.value = n.amount, c.render.call(this, e, t, o)
        }
        var r, a = e(49),
            s = e(52),
            u = e(45),
            l = e(44),
            n = t.exports = new a,
            c = a.prototype;
        n.init = o, n.render = i, n.blurRadius = 1, n.amount = .3;
        var d, f = 1
    }, {
        44: 44,
        45: 45,
        49: 49,
        52: 52
    }],
    51: [function (e, t, n) {
        function o() {
            p = l.createRenderTarget(1, 1, c.RGBAFormat, c.FloatType), d.init.call(this, {
                uniforms: {
                    u_distance: {
                        type: "t",
                        value: r
                    },
                    u_dofDistance: {
                        type: "f",
                        value: 0
                    },
                    u_delta: {
                        type: "v2",
                        value: new c.Vector2
                    },
                    u_mouse: {
                        type: "v2",
                        value: a.mouse
                    },
                    u_amount: {
                        type: "f",
                        value: 1
                    }
                },
                fragmentShader: "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform sampler2D u_texture;\nuniform sampler2D u_distance;\nuniform vec2 u_mouse;\nuniform float u_dofDistance;\nuniform vec2 u_delta;\nuniform float u_amount;\n\nvoid main() {\n\n    vec2 resolutionInverted = 1.0 / u_resolution;\n    vec2 uv = gl_FragCoord.xy * resolutionInverted;\n\n    float centerZ = texture2D( u_distance, uv ).a;\n    // float mouseCenterZ = texture2D( u_distance, (u_mouse + 1.0) * 0.5 ).r;\n    // mouseCenterZ = mix(mouseCenterZ, uCameraDistance, step(-0.1, -mouseCenterZ));\n    // float bias = smoothstep(0.0, 300.0, distance(centerZ, mouseCenterZ));\n\n    float bias = smoothstep(0.0, 300.0, distance(centerZ, u_dofDistance));\n\n    vec2 d = u_delta * resolutionInverted * bias * u_amount;\n\n    vec4 sum = vec4(0.0);\n    vec4 center = texture2D( u_texture, uv );\n    d *= length(center.xyz);\n    sum += texture2D( u_texture, ( uv - d * 4. ) ) * 0.051;\n    sum += texture2D( u_texture, ( uv - d * 3. ) ) * 0.0918;\n    sum += texture2D( u_texture, ( uv - d * 2. ) ) * 0.12245;\n    sum += texture2D( u_texture, ( uv - d * 1. ) ) * 0.1531;\n    sum += center * 0.1633;\n    sum += texture2D( u_texture, ( uv + d * 1. ) ) * 0.1531;\n    sum += texture2D( u_texture, ( uv + d * 2. ) ) * 0.12245;\n    sum += texture2D( u_texture, ( uv + d * 3. ) ) * 0.0918;\n    sum += texture2D( u_texture, ( uv + d * 4. ) ) * 0.051;\n\n    gl_FragColor = sum;\n}\n"
            }), m = new Float32Array(4), f = new c.RawShaderMaterial({
                uniforms: {
                    u_distance: {
                        type: "t",
                        value: r
                    },
                    u_mouse: {
                        type: "v2",
                        value: a.mouse
                    }
                },
                transparent: !0,
                blending: c.NoBlending,
                vertexShader: this.vertexShader,
                fragmentShader: l.rawShaderPrefix + "#define GLSLIFY 1\nuniform vec2 u_mouse;\n\nuniform sampler2D u_distance;\n\nvoid main() {\n\n    gl_FragColor = vec4(texture2D( u_distance, (u_mouse + 1.0) * 0.5).a, 0.0, 0.0, 1.0);\n\n}\n"
            })
        }

        function i(e, t, n) {
            var o = u.camera.position.length(),
                i = o;
            a.dofMouse && (f.uniforms.u_distance.value = a.distanceMap, l.render(f, p), u.renderer.readRenderTargetPixels(p, 0, 0, 1, 1, m), i = m[0] || i);
            var r = this.uniforms,
                s = r.u_dofDistance.value;
            r.u_dofDistance.value += .1 * (i - s), r.u_amount.value = a.dof, r.u_distance.value = a.distanceMap, r.u_delta.value.set(1, 0), t = d.render.call(this, e, t), r.u_delta.value.set(0, 1), d.render.call(this, e, t, n)
        }
        var r, a = e(60),
            s = e(49),
            u = e(52),
            l = e(45),
            c = e(44),
            n = t.exports = new s,
            d = s.prototype;
        n.init = o, n.render = i;
        var f, p, m
    }, {
        44: 44,
        45: 45,
        49: 49,
        52: 52,
        60: 60
    }],
    52: [function (e, t, n) {
        function o(e, t, o) {
            _ = n.fromRenderTarget = h.createRenderTarget(), x = n.toRenderTarget = h.createRenderTarget(), b = n.resolution = new m.Vector2, n.renderer = e, n.scene = t, n.camera = o
        }

        function i(e, t) {
            b.set(e, t), _.setSize(e, t), x.setSize(e, t), n.camera.aspect = e / t, n.camera.updateProjectionMatrix(), n.renderer.setSize(e, t);
            for (var o = 0, i = g.length; i > o; o++) g[o].resize(e, t)
        }

        function r(e) {
            return e.enabled
        }

        function a(e) {
            var t = g.filter(r);
            if (t.length) {
                x.depthBuffer = !0, x.stencilBuffer = !0, n.renderer.render(n.scene, n.camera, x), l();
                for (var o, i = 0, a = t.length; a > i; i++) o = t[i], o.render(e, _, i === a - 1)
            } else n.renderer.render(n.scene, n.camera)
        }

        function s(e, t, o) {
            t = t || n.scene, o = o || n.camera, e ? n.renderer.render(t, o, e) : n.renderer.render(t, o)
        }

        function u(e, t) {
            return h.render(e, t ? p : x), l(), _
        }

        function l() {
            var e = x;
            x = n.toRenderTarget = _, _ = n.fromRenderTarget = e
        }

        function c(e, t) {
            e = e || 0, t = +(t || 0);
            var n, o = b.x >> e,
                i = b.y >> e,
                r = e + "_" + t,
                a = f(r);
            return a.length ? (n = a.pop(), v(n, S)) : (n = h.createRenderTarget(o, i, t ? m.RGBAFormat : m.RGBFormat), n._listId = r, E[r] = E[r] || 0), E[r]++, n.width === o && n.height === i || n.setSize(o, i), n
        }

        function d(e) {
            for (var t, n, o, i, r, a = arguments, s = 0, u = a.length; u > s; s++) {
                for (e = a[s], i = e._listId, r = f(i), t = !1, E[i]--, n = 0, o = r.length; o > n; n++)
                    if (r[n] === e) {
                        t = !0;
                        break
                    } t || r.push(e)
            }
        }

        function f(e) {
            return y[e] || (y[e] = [])
        }
        var p, m = e(44),
            h = e(45),
            v = e(24);
        n.init = o, n.resize = i, n.renderQueue = a, n.renderScene = s, n.render = u, n.swapRenderTarget = l, n.getRenderTarget = c, n.releaseRenderTarget = d, n.resolution = p;
        var g = n.queue = [],
            _ = n.fromRenderTarget = p,
            x = n.toRenderTarget = p,
            b = n.resolution = p,
            y = {},
            E = {},
            S = {
                depthBuffer: !1,
                texture: {
                    generateMipmaps: !1
                }
            };
        n.renderer = p, n.scene = p, n.camera = p
    }, {
        24: 24,
        44: 44,
        45: 45
    }],
    53: [function (e, t, n) {
        function o(e) {
            var t = e ? "#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_resolution;\n\nvarying vec2 v_uv;\n\n//To save 9 dependent texture reads, you can compute\n//these in the vertex shader and use the optimized\n//frag.glsl function in your frag shader. \n\n//This is best suited for mobile devices, like iOS.\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n			out vec2 v_rgbNW, out vec2 v_rgbNE,\n			out vec2 v_rgbSW, out vec2 v_rgbSE,\n			out vec2 v_rgbM) {\n	vec2 inverseVP = 1.0 / resolution.xy;\n	v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n	v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n	v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n	v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n	v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main() {\n\n   vec2 fragCoord = uv * u_resolution;\n   texcoords(fragCoord, u_resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n\n}\n" : "",
                n = e ? '#define GLSLIFY 1\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec2 u_resolution;\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n    vec2 fragCoord = v_uv * u_resolution;\n\n    gl_FragColor = fxaa(u_texture, fragCoord, u_resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n' : '#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform sampler2D u_texture;\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent \n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE, \n            vec2 v_rgbSW, vec2 v_rgbSE, \n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n//To save 9 dependent texture reads, you can compute\n//these in the vertex shader and use the optimized\n//frag.glsl function in your frag shader. \n\n//This is best suited for mobile devices, like iOS.\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n			out vec2 v_rgbNW, out vec2 v_rgbNE,\n			out vec2 v_rgbSW, out vec2 v_rgbSE,\n			out vec2 v_rgbM) {\n	vec2 inverseVP = 1.0 / resolution.xy;\n	v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n	v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n	v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n	v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n	v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvec4 apply(sampler2D tex, vec2 fragCoord, vec2 resolution) {\n	mediump vec2 v_rgbNW;\n	mediump vec2 v_rgbNE;\n	mediump vec2 v_rgbSW;\n	mediump vec2 v_rgbSE;\n	mediump vec2 v_rgbM;\n\n	//compute the texture coords\n	texcoords(fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n	\n	//compute FXAA\n	return fxaa(tex, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n\nvoid main() {\n    gl_FragColor = apply(u_texture, gl_FragCoord.xy, u_resolution);\n}\n';
            r.init.call(this, {
                uniforms: {},
                vertexShader: t,
                fragmentShader: n
            })
        }
        var i = e(49);
        t.exports = new i;
        var r = i.prototype;
        t.exports.init = o
    }, {
        49: 49
    }],
    54: [function (e, t, n) {
        function o(e) {
            var t = c.renderer.getContext();
            t.getExtension("OES_texture_float") && t.getExtension("OES_texture_float_linear") || alert("no float linear support"), m = d.createRenderTarget(1, 1, f.RGBAFormat, f.FloatType), v = new f.Camera, v.position.z = 1, g = new f.Scene, p.init.call(this, {
                uniforms: {
                    u_lineAlphaMultiplier: {
                        type: "f",
                        value: 1
                    },
                    u_linesTexture: {
                        type: "t",
                        value: m
                    },
                    u_motionTexture: {
                        type: "t",
                        value: u.distanceMap
                    }
                },
                fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform sampler2D u_linesTexture;\nuniform float u_lineAlphaMultiplier;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n    vec3 base = texture2D( u_texture, v_uv.xy ).rgb;\n    vec4 lines = texture2D( u_linesTexture, v_uv.xy );\n\n    vec3 color = (base + lines.rgb * u_lineAlphaMultiplier) / (lines.a * u_lineAlphaMultiplier + 1.0);\n\n    gl_FragColor = vec4( color, 1.0 );\n\n}\n"
            }), _ = [], b = new f.BufferGeometry, y = new f.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: s
                    },
                    u_motionTexture: {
                        type: "t",
                        value: u.distanceMap
                    },
                    u_resolution: {
                        type: "v2",
                        value: c.resolution
                    },
                    u_maxDistance: {
                        type: "f",
                        value: 1
                    },
                    u_jitter: {
                        type: "f",
                        value: .3
                    },
                    u_fadeStrength: {
                        type: "f",
                        value: 1
                    },
                    u_motionMultiplier: {
                        type: "f",
                        value: 1
                    },
                    u_depthTest: {
                        type: "f",
                        value: 0
                    },
                    u_opacity: {
                        type: "f",
                        value: 1
                    },
                    u_leaning: {
                        type: "f",
                        value: .5
                    },
                    u_depthBias: {
                        type: "f",
                        value: .01
                    }
                },
                vertexShader: d.rawShaderPrefix + "#define GLSLIFY 1\nattribute vec3 position;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_motionTexture;\n\nuniform vec2 u_resolution;\nuniform float u_maxDistance;\nuniform float u_jitter;\nuniform float u_motionMultiplier;\nuniform float u_leaning;\n\nvarying vec3 v_color;\nvarying float v_ratio;\nvarying float v_depth;\nvarying vec2 v_uv;\n\nvoid main() {\n\n    v_color = texture2D( u_texture, position.xy ).rgb;\n\n    float side = step(0.001, position.z);\n\n    v_ratio = side;\n\n    vec3 motion = texture2D( u_motionTexture, position.xy ).xyz;\n    v_depth = motion.z;\n\n    vec2 offset = motion.xy * u_resolution * u_motionMultiplier;\n    float offsetDistance = length(offset);\n    if(offsetDistance > u_maxDistance) {\n        offset = normalize(offset) * u_maxDistance;\n    }\n\n    vec2 pos = position.xy * 2.0 - 1.0 - offset / u_resolution * 2.0 * (1.0 - position.z * u_jitter) * (side - u_leaning);\n    v_uv = pos * 0.5 + 0.5;\n\n    gl_Position = vec4( pos, 0.0, 1.0 );\n\n}\n",
                fragmentShader: d.rawShaderPrefix + "#define GLSLIFY 1\nuniform sampler2D u_motionTexture;\nuniform float u_depthTest;\nuniform float u_opacity;\nuniform float u_leaning;\nuniform float u_fadeStrength;\nuniform float u_depthBias;\nuniform float u_useDepthWeight;\n\nvarying vec3 v_color;\nvarying float v_ratio;\nvarying float v_depth;\nvarying vec2 v_uv;\n\nvoid main() {\n\n    vec3 motion = texture2D( u_motionTexture, v_uv ).xyz;\n\n    float alpha = smoothstep(0.0, u_leaning, v_ratio) * (1.0 - smoothstep (u_leaning, 1.0, v_ratio));\n\n    alpha = pow(alpha, u_fadeStrength) * u_opacity;\n\n    if(alpha < 0.00392157) {\n        discard;\n    }\n\n    float threshold = v_depth * step(0.0001, motion.z);\n    alpha *= max(1.0 - u_depthTest, smoothstep(threshold - u_depthBias, threshold, motion.z));\n\n    gl_FragColor = vec4( v_color * alpha, alpha );\n\n}\n",
                blending: f.CustomBlending,
                blendEquation: f.AddEquation,
                blendSrc: f.OneFactor,
                blendDst: f.OneFactor,
                blendEquationAlpha: f.AddEquation,
                blendSrcAlpha: f.OneFactor,
                blendDstAlpha: f.OneFactor,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            }), h = new f.LineSegments(b, y), g.add(h), E = new f.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        type: "t",
                        value: s
                    },
                    u_motionTexture: {
                        type: "t",
                        value: u.distanceMap
                    },
                    u_resolution: {
                        type: "v2",
                        value: c.resolution
                    },
                    u_maxDistance: {
                        type: "f",
                        value: 1
                    },
                    u_fadeStrength: {
                        type: "f",
                        value: 1
                    },
                    u_motionMultiplier: {
                        type: "f",
                        value: 1
                    },
                    u_leaning: {
                        type: "f",
                        value: .5
                    }
                },
                defines: {
                    SAMPLE_COUNT: e || 21
                },
                vertexShader: this.material.vertexShader,
                fragmentShader: d.rawShaderPrefix + "#define SAMPLE_COUNT " + (e || 21) + "\n#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform sampler2D u_motionTexture;\n\nuniform vec2 u_resolution;\nuniform float u_maxDistance;\nuniform float u_motionMultiplier;\nuniform float u_leaning;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n    vec2 motion = texture2D( u_motionTexture, v_uv ).xy;\n\n    vec2 offset = motion * u_resolution * u_motionMultiplier;\n    float offsetDistance = length(offset);\n    if(offsetDistance > u_maxDistance) {\n        offset = normalize(offset) * u_maxDistance;\n    }\n    vec2 delta = - offset / u_resolution * 2.0 / float(SAMPLE_COUNT);\n    vec2 pos = v_uv - delta * u_leaning * float(SAMPLE_COUNT);\n    vec3 color = vec3(0.0);\n\n    for(int i = 0; i < SAMPLE_COUNT; i++) {\n        color += texture2D( u_texture, pos ).rgb;\n        pos += delta;\n    }\n\n    gl_FragColor = vec4( color / float(SAMPLE_COUNT), 1.0 );\n\n}\n"
            })
        }

        function i(e, t) {
            if (e ? (C = e, A = t) : (e = C, t = A), !n.useSampling) {
                var o = ~~(e * n.linesRenderTargetScale),
                    i = ~~(t * n.linesRenderTargetScale);
                m.setSize(o, i);
                var a, s = !n.useDithering,
                    u = s ? o * i : r(o, i),
                    l = _.length / 6;
                u > l && (_ = new Float32Array(6 * u), x = new f.BufferAttribute(_, 3), b.removeAttribute("position"), b.addAttribute("position", x));
                var c, d, p = 0,
                    h = o * i;
                for (a = 0; h > a; a++) c = a % o, d = ~~(a / o), (s || c + (1 & d) & 1) && (_[p + 0] = _[p + 3] = (c + .5) / o, _[p + 1] = _[p + 4] = (d + .5) / i, _[p + 2] = 0, _[p + 5] = .001 + .999 * Math.random(), p += 6);
                x.needsUpdate = !0, b.drawRange.count = 2 * u
            }
            S = n.useDithering, w = n.useSampling
        }

        function r(e, t) {
            return 1 & e && 1 & t ? ((e - 1) * (t - 1) >> 1) + (e >> 1) + (t >> 1) : e * t >> 1
        }

        function a(e, t, o) {
            S !== n.useDithering ? i() : w !== n.useSampling && i();
            var r = n.useSampling,
                a = d.getColorState();
            c.renderer.setClearColor(0, 1), r || (y.uniforms.u_maxDistance.value = n.maxDistance, y.uniforms.u_jitter.value = n.jitter, y.uniforms.u_fadeStrength.value = n.fadeStrength, y.uniforms.u_motionMultiplier.value = n.motionMultiplier, y.uniforms.u_depthTest.value = n.depthTest, y.uniforms.u_opacity.value = n.opacity, y.uniforms.u_leaning.value = Math.max(.001, Math.min(.999, n.leaning)), y.uniforms.u_depthBias.value = Math.max(1e-5, n.depthBias), y.uniforms.u_texture.value = t, c.renderer.setClearColor(0, 0), c.renderer.clearTarget(m, !0, !0, !0), c.renderer.render(g, v, m)), d.setColorState(a), r ? (E.uniforms.u_maxDistance.value = n.maxDistance, E.uniforms.u_fadeStrength.value = n.fadeStrength, E.uniforms.u_motionMultiplier.value = n.motionMultiplier, E.uniforms.u_leaning.value = Math.max(.001, Math.min(.999, n.leaning)), E.uniforms.u_texture.value = t, c.render(E, o)) : (this.uniforms.u_lineAlphaMultiplier.value = 1 + n.useDithering, p.render.call(this, e, t, o))
        }
        var s, u = e(60),
            l = e(49),
            c = e(52),
            d = e(45),
            f = e(44),
            n = t.exports = new l,
            p = l.prototype;
        n.init = o, n.resize = i, n.render = a, n.useSampling = !1, n.skipMatrixUpdate = !1, n.fadeStrength = 1, n.motionMultiplier = 1, n.maxDistance = 100, n.leaning = .5, n.jitter = 0, n.opacity = 1, n.depthBias = .002, n.depthTest = !1, n.useDithering = !1, n.linesRenderTargetScale = 1 / 3;
        var m, h, v, g, _, x, b, y, E, S, w, C, A
    }, {
        44: 44,
        45: 45,
        49: 49,
        52: 52,
        60: 60
    }],
    55: [function (e, t, n) {
        function o() {
            s.init.call(this)
        }

        function i(e, t, n) {
            a.update(t)
        }
        var r = e(49),
            a = (e(52), e(45), e(48)),
            n = (e(44), t.exports = new r),
            s = r.prototype;
        n.init = o, n.render = i
    }, {
        44: 44,
        45: 45,
        48: 48,
        49: 49,
        52: 52
    }],
    56: [function (e, t, n) {
        function o(e, t, n) {
            h = e, v = t, g = g, s.init(e, t, n), p.init(), s.queue.push(p), u.init(), s.queue.push(u), f.init(), s.queue.push(f), d.init(), s.queue.push(d), l.init(), s.queue.push(l), c.init(), s.queue.push(c)
        }

        function i(e, t) {
            s.resize(e, t)
        }

        function r(e) {
            s.renderQueue(e), n.visualizeTarget && m.copy(n.visualizeTarget)
        }
        var a, s = e(52),
            u = e(53),
            l = e(50),
            c = e(57),
            d = e(54),
            f = e(51),
            p = e(55),
            m = e(45);
        n.init = o, n.resize = i, n.render = r, n.visualizeTarget = a;
        var h, v, g
    }, {
        45: 45,
        50: 50,
        51: 51,
        52: 52,
        53: 53,
        54: 54,
        55: 55,
        57: 57
    }],
    57: [function (e, t, n) {
        function o() {
            r.init.call(this, {
                uniforms: {
                    u_reduction: {
                        type: "f",
                        value: .3
                    },
                    u_boost: {
                        type: "f",
                        value: 1.2
                    }
                },
                fragmentShader: "#define GLSLIFY 1\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform float u_aspect;\n\nuniform float u_reduction;\nuniform float u_boost;\n\nvarying vec2 v_uv;\n\nfloat range(float vmin, float vmax, float value) {\n  return (value - vmin) / (vmax - vmin);\n}\n\nvoid main() {\n\n  vec4 color = texture2D( u_texture, v_uv );\n\n  vec2 center = u_resolution * 0.5;\n  float vignette = range(0.25, 1.0, length( v_uv - vec2(0.5) ));\n  vignette = u_boost - vignette * u_reduction;\n\n  color.rgb *= vignette;\n  gl_FragColor = color;\n\n}\n"
            })
        }
        var i = e(49);
        t.exports = new i;
        var r = i.prototype;
        t.exports.init = o
    }, {
        49: 49
    }],
    58: [function (e, t, n) {
        function o(e) {
            _ = n.TEXTURE_WIDTH = y.simulatorTextureWidth, x = n.TEXTURE_HEIGHT = y.simulatorTextureHeight, b = n.AMOUNT = _ * x, m = e;
            var t = "precision " + e.capabilities.precision + " float;\n",
                o = m.getContext();
            return o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? o.getExtension("OES_texture_float") ? (v = new E.Scene, g = new E.Camera, g.position.z = 1, l = new E.RawShaderMaterial({
                uniforms: {
                    resolution: {
                        type: "v2",
                        value: new E.Vector2(_, x)
                    },
                    texture: {
                        type: "t",
                        value: u
                    }
                },
                vertexShader: t + S("#define GLSLIFY 1\nattribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"),
                fragmentShader: t + S("#define GLSLIFY 1\nuniform vec2 resolution;\nuniform sampler2D texture;\n\nvoid main() {\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n    gl_FragColor = texture2D( texture, uv );\n}\n")
            }), c = new E.RawShaderMaterial({
                uniforms: {
                    resolution: {
                        type: "v2",
                        value: new E.Vector2(_, x)
                    },
                    texturePosition: {
                        type: "t",
                        value: u
                    },
                    textureDefaultPosition: {
                        type: "t",
                        value: u
                    },
                    mouse3d: {
                        type: "v3",
                        value: new E.Vector3
                    },
                    speed: {
                        type: "f",
                        value: 0
                    },
                    dieSpeed: {
                        type: "f",
                        value: 0
                    },
                    deltaDistance: {
                        type: "f",
                        value: 0
                    },
                    radius: {
                        type: "f",
                        value: 0
                    },
                    attraction: {
                        type: "f",
                        value: 0
                    },
                    time: {
                        type: "f",
                        value: 0
                    },
                    initAnimation: {
                        type: "f",
                        value: 0
                    },
                    curlSize: {
                        type: "f",
                        value: .015
                    }
                },
                vertexShader: t + S("#define GLSLIFY 1\nattribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"),
                fragmentShader: t + S("#define GLSLIFY 1\nuniform vec2 resolution;\nuniform sampler2D texturePosition;\nuniform sampler2D textureDefaultPosition;\nuniform float time;\nuniform float speed;\nuniform float dieSpeed;\nuniform float radius;\nuniform float attraction;\nuniform float initAnimation;\nuniform float deltaDistance;\nuniform float curlSize;\nuniform vec3 mouse3d;\n\nvec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n}\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 3; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(persistence, float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        zNoisePotentialDerivatives += simplexNoiseDerivatives(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n\n}\n\nconst float DEFAULT_Y = 1000.0;\n\nvoid main() {\n\n    vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n    vec4 positionInfo = texture2D( texturePosition, uv );\n    vec3 position = mix(vec3(0.0, DEFAULT_Y, 0.0), positionInfo.xyz, smoothstep(0.0, 0.3, initAnimation));\n    float life = positionInfo.a - dieSpeed;\n    vec3 followPosition = mix(vec3(0.0, (1.0 - initAnimation) * DEFAULT_Y, 0.0), mouse3d, smoothstep(0.2, 0.7, initAnimation));\n\n    if(life < 0.0) {\n        positionInfo = texture2D( textureDefaultPosition, uv );\n        position = positionInfo.xyz * (1.0 + sin(time * 15.0) * 0.2) * 0.4 * radius;\n        position.y += (1.0 - smoothstep(0.0, 0.7, initAnimation)) * DEFAULT_Y;\n        position += mouse3d;\n        life = 0.5 + fract(positionInfo.w * 21.4131 + time);\n        // position.z -= 8192.9 * (step(-0.001, -deltaDistance) + step(-positionInfo.w, -deltaDistance * 3.5));\n    } else {\n        vec3 delta = followPosition - position;\n        float deltaLength = length(delta);\n        position += delta * (0.005 + life * 0.01) * attraction * (1.0 - smoothstep(100.0, 500.0, deltaLength));\n        position += curl(position * curlSize, time * 0.2, 0.2) * speed;\n\n    }\n\n    gl_FragColor = vec4(position, life);\n\n}\n"),
                blending: E.NoBlending,
                transparent: !1,
                depthWrite: !1,
                depthTest: !1
            }), h = new E.Mesh(new E.PlaneBufferGeometry(2, 2), l), v.add(h), f = new E.WebGLRenderTarget(_, x, {
                wrapS: E.ClampToEdgeWrapping,
                wrapT: E.ClampToEdgeWrapping,
                minFilter: E.NearestFilter,
                magFilter: E.NearestFilter,
                format: E.RGBAFormat,
                type: E.FloatType,
                depthWrite: !1,
                depthBuffer: !1,
                stencilBuffer: !1
            }), p = f.clone(), i(a(), f), void i(f, p)) : void alert("No OES_texture_float support for float textures!") : void alert("No support for vertex shader textures!")
        }

        function i(e, t) {
            h.material = l, l.uniforms.texture.value = e, m.render(v, g, t)
        }

        function r(e) {
            var t = f;
            f = p, p = t, h.material = c, c.uniforms.textureDefaultPosition.value = d, c.uniforms.texturePosition.value = p, c.uniforms.deltaDistance.value = y.deltaDistance, c.uniforms.time.value += .001 * e, m.render(v, g, f)
        }

        function a() {
            for (var e, t, n, o, i = new Float32Array(4 * b), r = 0; b > r; r++) e = 4 * r, t = 75 * (.5 + .5 * Math.random()), n = (Math.random() - .5) * Math.PI, o = Math.random() * Math.PI * 2, i[e + 0] = t * Math.cos(o) * Math.cos(n), i[e + 1] = t * Math.sin(n), i[e + 2] = t * Math.sin(o) * Math.cos(n), i[e + 3] = Math.random();
            var a = new E.DataTexture(i, _, x, E.RGBAFormat, E.FloatType);
            return a.minFilter = E.NearestFilter, a.magFilter = E.NearestFilter, a.needsUpdate = !0, a.generateMipmaps = !1, a.flipY = !1, d = a, a
        }

        function s(e) {
            var t = e / 16.6667;
            if (e *= y.speed, y.speed || y.dieSpeed) {
                var o = m.autoClearColor,
                    i = m.getClearColor().getHex(),
                    a = m.getClearAlpha();
                m.autoClearColor = !1, c.uniforms.curlSize.value = y.curlSize, c.uniforms.dieSpeed.value = y.dieSpeed * t, c.uniforms.radius.value = y.radius, c.uniforms.attraction.value = y.attraction * y.speed * t, c.uniforms.speed.value = y.speed * t, c.uniforms.initAnimation.value = n.initAnimation, c.uniforms.mouse3d.value.copy(y.mouse3d), r(e), m.setClearColor(i, a), m.autoClearColor = o, n.positionRenderTarget = f, n.prevPositionRenderTarget = p
            }
        }
        var u, l, c, d, f, p, m, h, v, g, _, x, b, y = e(60),
            E = e(44),
            S = e(62);
        n.init = o, n.update = s, n.positionRenderTarget = u, n.prevPositionRenderTarget = u, n.initAnimation = 0
    }, {
        44: 44,
        60: 60,
        62: 62
    }],
    59: [function (e, t, n) {
        THREE.OrbitControls = function (e, t) {
            function n() {
                return 2 * Math.PI / 60 / 60 * m.autoRotateSpeed
            }

            function o() {
                return Math.pow(.95, m.zoomSpeed)
            }

            function i(e) {
                if (m.enabled !== !1) {
                    if (e.preventDefault(), e.button === m.mouseButtons.ORBIT) {
                        if (m.noRotate === !0) return;
                        P = O.ROTATE, v.set(e.clientX, e.clientY)
                    } else if (e.button === m.mouseButtons.ZOOM) {
                        if (m.noZoom === !0) return;
                        P = O.DOLLY, w.set(e.clientX, e.clientY)
                    } else if (e.button === m.mouseButtons.PAN) {
                        if (m.noPan === !0) return;
                        P = O.PAN, x.set(e.clientX, e.clientY)
                    }
                    P !== O.NONE && (document.addEventListener("mousemove", r, !1), document.addEventListener("mouseup", a, !1), m.dispatchEvent(k))
                }
            }

            function r(e) {
                if (m.enabled !== !1) {
                    e.preventDefault();
                    var t = m.domElement === document ? m.domElement.body : m.domElement;
                    if (P === O.ROTATE) {
                        if (m.noRotate === !0) return;
                        g.set(e.clientX, e.clientY), _.subVectors(g, v), m.rotateLeft(2 * Math.PI * _.x / t.clientWidth * m.rotateSpeed), m.rotateUp(2 * Math.PI * _.y / t.clientHeight * m.rotateSpeed), v.copy(g)
                    } else if (P === O.DOLLY) {
                        if (m.noZoom === !0) return;
                        C.set(e.clientX, e.clientY), A.subVectors(C, w), A.y > 0 ? m.dollyIn() : A.y < 0 && m.dollyOut(), w.copy(C)
                    } else if (P === O.PAN) {
                        if (m.noPan === !0) return;
                        b.set(e.clientX, e.clientY), y.subVectors(b, x), m.pan(y.x, y.y), x.copy(b)
                    }
                    P !== O.NONE && m.update()
                }
            }

            function a() {
                m.enabled !== !1 && (document.removeEventListener("mousemove", r, !1), document.removeEventListener("mouseup", a, !1), m.dispatchEvent(B), P = O.NONE)
            }

            function s(e) {
                if (m.enabled !== !1 && m.noZoom !== !0 && P === O.NONE) {
                    e.preventDefault(), e.stopPropagation();
                    var t = 0;
                    void 0 !== e.wheelDelta ? t = e.wheelDelta : void 0 !== e.detail && (t = -e.detail), t > 0 ? m.dollyOut() : 0 > t && m.dollyIn(), m.update(), m.dispatchEvent(k), m.dispatchEvent(B)
                }
            }

            function u(e) {
                if (m.enabled !== !1 && m.noKeys !== !0 && m.noPan !== !0) switch (e.keyCode) {
                    case m.keys.UP:
                        m.pan(0, m.keyPanSpeed), m.update();
                        break;
                    case m.keys.BOTTOM:
                        m.pan(0, -m.keyPanSpeed), m.update();
                        break;
                    case m.keys.LEFT:
                        m.pan(m.keyPanSpeed, 0), m.update();
                        break;
                    case m.keys.RIGHT:
                        m.pan(-m.keyPanSpeed, 0), m.update()
                }
            }

            function l(e) {
                if (m.enabled !== !1) {
                    switch (e.touches.length) {
                        case 1:
                            if (m.noRotate === !0) return;
                            P = O.TOUCH_ROTATE, v.set(e.touches[0].pageX, e.touches[0].pageY);
                            break;
                        case 2:
                            if (m.noZoom === !0) return;
                            P = O.TOUCH_DOLLY;
                            var t = e.touches[0].pageX - e.touches[1].pageX,
                                n = e.touches[0].pageY - e.touches[1].pageY,
                                o = Math.sqrt(t * t + n * n);
                            w.set(0, o);
                            break;
                        case 3:
                            if (m.noPan === !0) return;
                            P = O.TOUCH_PAN, x.set(e.touches[0].pageX, e.touches[0].pageY);
                            break;
                        default:
                            P = O.NONE
                    }
                    P !== O.NONE && m.dispatchEvent(k)
                }
            }

            function c(e) {
                if (m.enabled !== !1) {
                    e.preventDefault(), e.stopPropagation();
                    var t = m.domElement === document ? m.domElement.body : m.domElement;
                    switch (e.touches.length) {
                        case 1:
                            if (m.noRotate === !0) return;
                            if (P !== O.TOUCH_ROTATE) return;
                            g.set(e.touches[0].pageX, e.touches[0].pageY), _.subVectors(g, v), m.rotateLeft(2 * Math.PI * _.x / t.clientWidth * m.rotateSpeed), m.rotateUp(2 * Math.PI * _.y / t.clientHeight * m.rotateSpeed), v.copy(g), m.update();
                            break;
                        case 2:
                            if (m.noZoom === !0) return;
                            if (P !== O.TOUCH_DOLLY) return;
                            var n = e.touches[0].pageX - e.touches[1].pageX,
                                o = e.touches[0].pageY - e.touches[1].pageY,
                                i = Math.sqrt(n * n + o * o);
                            C.set(0, i), A.subVectors(C, w), A.y > 0 ? m.dollyOut() : A.y < 0 && m.dollyIn(), w.copy(C), m.update();
                            break;
                        case 3:
                            if (m.noPan === !0) return;
                            if (P !== O.TOUCH_PAN) return;
                            b.set(e.touches[0].pageX, e.touches[0].pageY), y.subVectors(b, x), m.pan(y.x, y.y), x.copy(b), m.update();
                            break;
                        default:
                            P = O.NONE
                    }
                }
            }

            function d() {
                m.enabled !== !1 && (m.dispatchEvent(B), P = O.NONE)
            }
            this.object = e, this.domElement = void 0 !== t ? t : document, this.rotateEaseRatio = .02, this.zoomEaseRatio = .05, this.enabled = !0, this.target = new THREE.Vector3, this.center = this.target, this.noZoom = !1, this.zoomSpeed = 1, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.noRotate = !1, this.rotateSpeed = 1, this.noPan = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.noKeys = !1, this.keys = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                BOTTOM: 40
            }, this.mouseButtons = {
                ORBIT: THREE.MOUSE.LEFT,
                ZOOM: THREE.MOUSE.MIDDLE,
                PAN: THREE.MOUSE.RIGHT
            };
            var f, p, m = this,
                h = 1e-6,
                v = new THREE.Vector2,
                g = new THREE.Vector2,
                _ = new THREE.Vector2,
                x = new THREE.Vector2,
                b = new THREE.Vector2,
                y = new THREE.Vector2,
                E = new THREE.Vector3,
                S = new THREE.Vector3,
                w = new THREE.Vector2,
                C = new THREE.Vector2,
                A = new THREE.Vector2,
                T = 0,
                D = 0,
                M = 1,
                R = new THREE.Vector3,
                L = new THREE.Vector3,
                N = new THREE.Quaternion,
                O = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_DOLLY: 4,
                    TOUCH_PAN: 5
                },
                P = O.NONE;
            this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom;
            var I = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)),
                F = I.clone().inverse(),
                z = {
                    type: "change"
                },
                k = {
                    type: "start"
                },
                B = {
                    type: "end"
                };
            this.rotateLeft = function (e) {
                void 0 === e && (e = n()), D -= e
            }, this.rotateUp = function (e) {
                void 0 === e && (e = n()), T -= e
            }, this.panLeft = function (e) {
                var t = this.object.matrix.elements;
                E.set(t[0], t[1], t[2]), E.multiplyScalar(-e), R.add(E)
            }, this.panUp = function (e) {
                var t = this.object.matrix.elements;
                E.set(t[4], t[5], t[6]), E.multiplyScalar(e), R.add(E)
            }, this.pan = function (e, t) {
                var n = m.domElement === document ? m.domElement.body : m.domElement;
                if (m.object instanceof THREE.PerspectiveCamera) {
                    var o = m.object.position,
                        i = o.clone().sub(m.target),
                        r = i.length();
                    r *= Math.tan(m.object.fov / 2 * Math.PI / 180), m.panLeft(2 * e * r / n.clientHeight), m.panUp(2 * t * r / n.clientHeight)
                } else m.object instanceof THREE.OrthographicCamera ? (m.panLeft(e * (m.object.right - m.object.left) / n.clientWidth), m.panUp(t * (m.object.top - m.object.bottom) / n.clientHeight)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
            }, this.dollyIn = function (e) {
                void 0 === e && (e = o()), m.object instanceof THREE.PerspectiveCamera ? M /= e : m.object instanceof THREE.OrthographicCamera ? (m.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * e)), m.object.updateProjectionMatrix(), m.dispatchEvent(z)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
            }, this.dollyOut = function (e) {
                void 0 === e && (e = o()), m.object instanceof THREE.PerspectiveCamera ? M *= e : m.object instanceof THREE.OrthographicCamera ? (m.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / e)), m.object.updateProjectionMatrix(), m.dispatchEvent(z)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
            }, this.update = function () {
                var e = this.object.position;
                S.copy(e).sub(this.target), S.applyQuaternion(I), f = Math.atan2(S.x, S.z), p = Math.atan2(Math.sqrt(S.x * S.x + S.z * S.z), S.y), this.autoRotate && P === O.NONE && this.rotateLeft(n());
                var t = D * this.rotateEaseRatio,
                    o = T * this.rotateEaseRatio,
                    i = (M - 1) * this.zoomEaseRatio;
                f += t, p += o, f = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, f)), p = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, p)), p = Math.max(h, Math.min(Math.PI - h, p));
                var r = S.length() * (1 + i);
                r = Math.max(this.minDistance, Math.min(this.maxDistance, r)), this.target.add(R), S.x = r * Math.sin(p) * Math.sin(f), S.y = r * Math.cos(p), S.z = r * Math.sin(p) * Math.cos(f), S.applyQuaternion(F), e.copy(this.target).add(S), this.object.lookAt(this.target), D -= t, T -= o, M /= 1 + i, R.set(0, 0, 0), (L.distanceToSquared(this.object.position) > h || 8 * (1 - N.dot(this.object.quaternion)) > h) && (this.dispatchEvent(z), L.copy(this.object.position), N.copy(this.object.quaternion))
            }, this.reset = function () {
                P = O.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(z), this.update()
            }, this.getPolarAngle = function () {
                return p
            }, this.getAzimuthalAngle = function () {
                return f
            }, this.domElement.addEventListener("contextmenu", function (e) {
                e.preventDefault()
            }, !1), this.domElement.addEventListener("mousedown", i, !1), this.domElement.addEventListener("mousewheel", s, !1), this.domElement.addEventListener("DOMMouseScroll", s, !1), this.domElement.addEventListener("touchstart", l, !1), this.domElement.addEventListener("touchend", d, !1), this.domElement.addEventListener("touchmove", c, !1), window.addEventListener("keydown", u, !1), this.update()
        }, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, t.exports = THREE.OrbitControls
    }, {}],
    60: [function (e, t, n) {
        var o = e(29),
            i = e(23),
            r = n.query = o(window.location.href.replace("#", "?"));
        n.useStats = !1;
        var a = {
            "4k": [64, 64],
            "8k": [128, 64],
            "16k": [128, 128],
            "32k": [256, 128],
            "65k": [256, 256],
            "131k": [512, 256],
            "252k": [512, 512],
            "524k": [1024, 512],
            "1m": [1024, 1024]
        };
        n.amountList = i(a), r.amount = a[r.amount] ? r.amount : "16k";
        var s = a[r.amount];
        n.simulatorTextureWidth = s[0], n.simulatorTextureHeight = s[1], n.speed = 1, n.curlSize = .02, n.dieSpeed = .015, n.radius = .5, n.attraction = -.5, n.blur = 1, n.insetExtra = 0, n.inset = .5, n.washout = .7, n.brightness = .3, n.blurZ = .8, n.dof = 1, n.dofMouse = !0, n.fxaa = !0, n.particleSize = 21;
        var u = n.motionBlurQualityMap = {
            best: 1,
            high: .5,
            medium: 1 / 3,
            low: .25
        };
        n.motionBlurQualityList = i(u), r.motionBlurQuality = u[r.motionBlurQuality] ? r.motionBlurQuality : "medium", n.motionBlur = !1, n.motionBlurPause = !1, n.bloom = !1, n.vignette = !0, n.vignetteMultiplier = .8, n.bgColor = "#000", n.bgm = !0, n.matcap = "metal"
    }, {
        23: 23,
        29: 29
    }],
    61: [function (e, t, n) {
        function o(e) {
            a ? (s = e, i()) : e()
        }

        function i() {
            u = document.querySelector(".mobile"), u.style.display = "block", l = document.querySelector(".mobile-bypass"), l && l.addEventListener("click", r)
        }

        function r() {
            u.parentNode.removeChild(u), s()
        }
        var a = /(iPad|iPhone|Android)/i.test(navigator.userAgent);
        a && (document.documentElement.className += " is-mobile"), n.pass = o, n.isMobile = a;
        var s, u, l
    }, {}],
    62: [function (e, t, n) {
        function o(e) {
            return c = {}, e.replace(f, a)
        }

        function i(e) {
            return e.replace(p, s)
        }

        function r(e) {
            return e.replace(m, u)
        }

        function a(e, t, n) {
            return c[t.trim()] = n, ""
        }

        function s(e, t) {
            var n = d.ShaderChunk[t] + "\n";
            for (var o in c) n = n.replace(o, c[o]);
            return n
        }

        function u(e, t) {
            return t
        }

        function l(e) {
            return e = o(e), e = i(e), r(e)
        }
        var c, d = e(44),
            f = /\/\/\s?chunk_replace\s(.+)([\d\D]+)\/\/\s?end_chunk_replace/gm,
            p = /\/\/\s?chunk\(\s?(\w+)\s?\);/g,
            m = /GLOBAL_VAR_([^_\.\)\;\,\s]+)(_\d+)?/g;
        t.exports = l
    }, {
        44: 44
    }],
    63: [function (e, t, n) {
        function o(e) {
            var t = document.createElement("audio");
            return w || (w = t.canPlayType("audio/mp3") ? "mp3" : "ogg"), t.src = "audio/" + e + "." + w, t
        }

        function i() {
            function e(e, t) {
                e = e.length ? e : [e];
                for (var n, o = 0, i = e.length; i > o; o++) n = e[o], n.__li.style.pointerEvents = t ? "auto" : "none", n.domElement.parentNode.style.opacity = t ? 1 : .1
            }
            N.useStats && (m = new T, D(m.domElement, {
                position: "absolute",
                left: "0px",
                top: "0px",
                zIndex: 2048
            }), document.body.appendChild(m.domElement)), S = o("bgm"), S.loop = !0, S.volume = 0, S.play(), x = new R.Color(N.bgColor), N.mouseX = 0, N.mouseY = 0, N.prevMouseX = 0, N.prevMouseY = 0, N.mouse = new R.Vector2(0, 0), N.mouse3d = Q.origin, _ = new R.WebGLRenderer({
                premultipliedAlpha: !1,
                preserveDrawingBuffer: !0
            }), F.init(_), _.setClearColor(N.bgColor), document.body.appendChild(_.domElement), P.isMobile && (N.simulatorTextureWidth = 32, N.simulatorTextureHeight = 32, N.particleSize = 16, N.vignetteMultiplier = .5, N.fxaa = !1), g = new R.Scene, g.fog = new R.FogExp2(x, .001), v = N.camera = new R.PerspectiveCamera(45, 1, 10, 5e3), v.position.set(300, 60, 300).normalize().multiplyScalar(500), N.cameraPosition = v.position, z.init(_), k.init(_, v), H.init(_, g, v), B.init(_), g.add(B.mesh), U.init(_), U.mesh.position.y = -20, g.add(U.mesh), h = new L(v, _.domElement), h.maxDistance = 650, h.minPolarAngle = .3, h.maxPolarAngle = Math.PI / 2 - .1, h.noPan = !0, h.update(), p = new A.GUI;
            var t = p.addFolder("Simulator");
            t.add(N.query, "amount", N.amountList).onChange(function () {
                confirm("It will restart the demo") && (window.location.href = window.location.href.split("#")[0] + I(N.query).replace("?", "#"), window.location.reload())
            }), t.add(N, "speed", 0, 2).listen(), t.add(N, "dieSpeed", 0, .05).listen(), t.add(N, "radius", .1, 4).listen(), t.add(N, "curlSize", .001, .05).listen(), t.add(N, "attraction", -2, 2).listen(), t.add({
                toggleMovement: l
            }, "toggleMovement");
            var n = p.addFolder("Rendering");
            n.add(N, "matcap", ["01", "02", "03"]), n.add(N, "particleSize", 16, 48).name("particle size"), n.add(N, "inset", 0, 3, 1e-4).listen(), n.add(N, "washout", 0, 1, 1e-4).step(.001).listen(), n.add(N, "brightness", 0, 1, 1e-4).step(.001).listen();
            var i = n.add(N, "blur", 0, 3, 1e-4).listen(),
                f = n.add(N, "blurZ", 0, 1, 1e-4).step(.001).listen();
            i.onChange(e.bind(this, f)), e(f, N.blur), n.addColor(N, "bgColor").listen();
            var w = p.addFolder("Post-Processing"),
                C = w.add(N, "dof", 0, 3, 1e-4).listen(),
                M = w.add(N, "dofMouse").name("dof on mouse").listen();
            C.onChange(e.bind(this, M)), e(M, N.dof), w.add(N, "fxaa").listen(), j.maxDistance = 120, j.motionMultiplier = 2, j.linesRenderTargetScale = N.motionBlurQualityMap[N.query.motionBlurQuality];
            var O = w.add(N, "motionBlur"),
                W = w.add(j, "maxDistance", 1, 300).name("motion distance").listen(),
                V = w.add(j, "motionMultiplier", .1, 15).name("motion multiplier").listen(),
                G = w.add(N.query, "motionBlurQuality", N.motionBlurQualityList).name("motion quality").onChange(function (e) {
                    j.linesRenderTargetScale = N.motionBlurQualityMap[e], j.resize()
                }),
                Y = [W, V, G];
            O.onChange(e.bind(this, Y)), e(Y, N.motionBlur);
            var q = w.add(N, "bloom"),
                J = w.add(X, "blurRadius", 0, 3).name("bloom radius"),
                $ = w.add(X, "amount", 0, 3).name("bloom amount");
            Y = [J, $], q.onChange(e.bind(this, Y)), e(Y, N.bloom), w.add(N, "vignette"), w.open();
            var ee = function (e) {
                e.preventDefault(), this.blur()
            };
            Array.prototype.forEach.call(p.domElement.querySelectorAll('input[type="checkbox"],select'), function (e) {
                e.onkeyup = e.onkeydown = ee, e.style.color = "#000"
            }), N.isMobile || (t.open(), n.open()), p.add(N, "bgm"), p.add({
                fn: function () {
                    K = !0;
                    var e = document.createElement("a");
                    e.download = "capture.png", e.href = _.domElement.toDataURL(), e.click(), K = !1
                }
            }, "fn").name("save as image"), p.close(), b = document.querySelector(".logo"), y = document.querySelector(".instruction"), P.isMobile && (y.style.visibility = "hidden"), document.querySelector(".footer").style.display = "block", E = document.querySelectorAll(".footer span"), p.domElement.addEventListener("mousedown", r), p.domElement.addEventListener("touchstart", r), window.addEventListener("resize", c), window.addEventListener("mousemove", s), window.addEventListener("touchmove", a(s)), window.addEventListener("keyup", u), N.deltaDistance = 1, N.prevMouse = new R.Vector2(0, 0), Z = Date.now(), c(), d()
        }

        function r(e) {
            e.stopPropagation()
        }

        function a(e) {
            return function (t) {
                e(t.changedTouches[0])
            }
        }

        function s(e) {
            N.mouseX = e.clientX,
                N.mouseY = e.clientY, N.mouse.x = N.mouseX / Y * 2 - 1, N.mouse.y = 2 * -(N.mouseY / q) + 1
        }

        function u(e) {
            32 === e.keyCode && l()
        }

        function l() {
            N.speed = 0 === N.speed ? 1 : 0, N.dieSpeed = 0 === N.dieSpeed ? .015 : 0
        }

        function c() {
            Y = window.innerWidth, q = window.innerHeight, k.resize(Y, q), H.resize(Y, q), v.aspect = Y / q, v.updateProjectionMatrix(), _.setSize(Y, q)
        }

        function d() {
            var e = Date.now();
            M(d), N.useStats && m.begin(), K || f(e - Z, e), N.useStats && m.end(), Z = e
        }

        function f(e, t) {
            j.skipMatrixUpdate = !(N.dieSpeed || N.speed) && N.motionBlurPause, x.setStyle(N.bgColor);
            var n = U.mesh.material.color;
            n.lerp(x, .05), k.mesh.material.uniforms.uFogColor.value.copy(n), g.fog.color.copy(n), _.setClearColor(n.getHex()), J = Math.min(J + 25e-5 * e, 1), z.initAnimation = J, h.update(), B.update(e, v), v.updateMatrixWorld(), Q.origin.setFromMatrixPosition(v.matrixWorld), Q.direction.set(N.mouse.x, N.mouse.y, .5).unproject(v).sub(Q.origin).normalize();
            var o = Q.origin.length() / Math.cos(Math.PI - Q.direction.angleTo(Q.origin));
            Q.origin.add(Q.direction.multiplyScalar(1 * o)), N.deltaDistance = O.distanceTo(N.mouseX - N.prevMouseX, N.mouseY - N.prevMouseY), N.deltaDistance && (N.deltaDistance /= 10), N.prevMouse.copy(N.mouse), N.insetExtra += ((N.speed ? 0 : .25) - N.insetExtra) * e * (N.speed ? .01 : .003), z.update(e), k.preRender(e);
            var i = Math.min(1.2 * (1 - 2 * Math.abs(J - .5)), 1),
                r = 10 * (1 - i);
            b.style.display = i ? "block" : "none", i && (b.style.opacity = i, b.style.webkitFilter = "blur(" + r + "px)", i = .8 + .5 * Math.pow(J, 1.5), 580 > Y && (i *= .5), b.style.transform = "scale3d(" + i + "," + i + ",1)"), i = O.unLerp(.5, .6, J), y.style.display = i ? "block" : "none", y.style.transform = "translate3d(0," + 50 * (1 - i * i) + "px,0)";
            for (var a = 0, s = E.length; s > a; a++) i = O.unLerp(.5 + .01 * a, .6 + .01 * a, J), E[a].style.transform = "translate3d(0," + 50 * (1 - Math.pow(i, 3)) + "px,0)";
            G.enabled = !!N.fxaa, W.enabled = !!N.dof, j.enabled = !!N.motionBlur, V.enabled = !!N.vignette, X.enabled = !!N.bloom;
            var u = V.uniforms,
                l = (1.5 + 1.5 * N.brightness) * N.vignetteMultiplier,
                c = .8 + .55 * N.brightness;
            u.u_reduction.value += .05 * (l - u.u_reduction.value), u.u_boost.value += .05 * (c - u.u_boost.value), H.render(e, t), N.prevMouseX = N.mouseX, N.prevMouseY = N.mouseY, S.volume += .05 * (.5 * +N.bgm - S.volume)
        }
        var p, m, h, v, g, _, x, b, y, E, S, w, C = e(31),
            A = e(3),
            T = e(43),
            D = e(6),
            M = e(41),
            R = e(44),
            L = e(59),
            N = e(60),
            O = e(64),
            P = e(61),
            I = e(27),
            F = e(45),
            z = e(58),
            k = e(48),
            B = e(47),
            U = e(46),
            H = e(56),
            W = e(51),
            V = e(57),
            j = e(54),
            G = e(53),
            V = e(57),
            X = e(50),
            Y = 0,
            q = 0,
            Z = 0,
            Q = new R.Ray,
            J = 0,
            K = !1;
        C.add("images/cropped-favicon-03-512x512.png", {
            onLoad: function (e) {
                N.sphereMap = e
            }
        }), C.start(function (e) {
            1 === e && i()
        })
    }, {
        27: 27,
        3: 3,
        31: 31,
        41: 41,
        43: 43,
        44: 44,
        45: 45,
        46: 46,
        47: 47,
        48: 48,
        50: 50,
        51: 51,
        53: 53,
        54: 54,
        56: 56,
        57: 57,
        58: 58,
        59: 59,
        6: 6,
        60: 60,
        61: 61,
        64: 64
    }],
    64: [function (e, t, n) {
        function o(e, t) {
            return e > t ? 0 : 1
        }

        function i(e, t, n) {
            return n = s(e, t, n), n * n(3 - 2 * n)
        }

        function r(e, t, n) {
            return t > e ? t : e > n ? n : e
        }

        function a(e, t, n) {
            return 0 >= n ? e : n >= 1 ? t : e + (t - e) * n
        }

        function s(e, t, n) {
            return e >= n ? 0 : n >= t ? 1 : (n - e) / (t - e)
        }

        function u(e, t, n) {
            return e + (t - e) * n
        }

        function l(e, t, n) {
            return (n - e) / (t - e)
        }

        function c(e) {
            return e - Math.floor(e)
        }

        function d(e) {
            return c(43758.5453123 * Math.sin(e))
        }

        function f(e, t) {
            return c(43758.5453 * Math.sin(12.9898 * e + 4.1414 * t))
        }

        function p(e) {
            return e ? 0 > e ? -1 : 1 : 0
        }

        function m(e) {
            return (e & -e) == e
        }

        function h(e) {
            return m(e) ? e : (e = Math.pow(2, Math.ceil(Math.log(Math.sqrt(e)) / Math.LN2)), e * e)
        }

        function v(e, t, n, o) {
            var i = Math.sin(o - t) * Math.cos(n),
                r = Math.cos(e) * Math.sin(n) - Math.sin(e) * Math.cos(n) * Math.cos(o - t);
            return Math.atan2(i, r)
        }

        function g(e, t) {
            return Math.sqrt(e * e + t * t)
        }

        function _(e, t) {
            return e * e + t * t
        }

        function x(e, t, n, o) {
            var i = 6371,
                r = Math.PI,
                a = e * r / 180,
                s = n * r / 180,
                u = (n - e) * r / 180,
                l = (o - t) * r / 180,
                c = Math.sin(u / 2) * Math.sin(u / 2) + Math.cos(a) * Math.cos(s) * Math.sin(l / 2) * Math.sin(l / 2),
                d = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
            return i * d
        }
        for (var b in Math) n[b] = Math[b];
        n.step = o, n.smoothstep = i, n.clamp = r, n.mix = n.lerp = a, n.unMix = n.unLerp = s, n.unClampedMix = n.unClampedLerp = u, n.upClampedUnMix = n.unClampedUnLerp = l, n.fract = c, n.hash = d, n.hash2 = f, n.sign = p, n.isPowerOfTwo = m, n.powerTwoCeiling = h, n.latLngBearing = v, n.distanceTo = g, n.distanceSqrTo = _, n.latLngDistance = x;
        var y = Math.PI;
        n.TAU = 2 * y
    }, {}]
}, {}, [63]);
