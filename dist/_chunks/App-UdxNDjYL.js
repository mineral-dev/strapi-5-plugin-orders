"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const designSystem = require("@strapi/design-system");
const icons = require("@strapi/icons");
const React = require("react");
const reactIntl = require("react-intl");
const index = require("./index-CK8baswJ.js");
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const React__namespace = /* @__PURE__ */ _interopNamespace(React);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var dayjs_min = { exports: {} };
(function(module2, exports2) {
  !function(t, e) {
    module2.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date()) return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t2) {
      return t2 instanceof _ || !(!t2 || !t2[p]);
    }, w = function t2(e2, n2, r2) {
      var i2;
      if (!e2) return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1) return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, O = function(t2, e2) {
      if (S(t2)) return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t2, e2) {
      return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2) return /* @__PURE__ */ new Date(NaN);
          if (b.u(e2)) return /* @__PURE__ */ new Date();
          if (e2 instanceof Date) return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return b;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = O(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return O(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < O(t2);
      }, m2.$g = function(t2, e2, n2) {
        return b.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
          var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function(t3, e3) {
          return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (f2) {
          case h:
            return r2 ? l2(1, 0) : l2(31, 11);
          case c:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === c || o2 === h) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[b.p(t2)]();
      }, m2.add = function(r2, f2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = b.p(f2), y2 = function(t2) {
          var e2 = O(l2);
          return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === c) return this.set(c, this.$M + r2);
        if ($2 === h) return this.set(h, this.$y + r2);
        if ($2 === a) return y2(1);
        if ($2 === o) return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return b.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid()) return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, d2 = function(t3) {
          return b.s(s2 % 12 || 12, t3, "0");
        }, $2 = f2 || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(y, function(t3, r3) {
          return r3 || function(t4) {
            switch (t4) {
              case "YY":
                return String(e2.$y).slice(-2);
              case "YYYY":
                return b.s(e2.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return b.s(a2 + 1, 2, "0");
              case "MMM":
                return h2(n2.monthsShort, a2, c2, 3);
              case "MMMM":
                return h2(c2, a2);
              case "D":
                return e2.$D;
              case "DD":
                return b.s(e2.$D, 2, "0");
              case "d":
                return String(e2.$W);
              case "dd":
                return h2(n2.weekdaysMin, e2.$W, o2, 2);
              case "ddd":
                return h2(n2.weekdaysShort, e2.$W, o2, 3);
              case "dddd":
                return o2[e2.$W];
              case "H":
                return String(s2);
              case "HH":
                return b.s(s2, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $2(s2, u2, true);
              case "A":
                return $2(s2, u2, false);
              case "m":
                return String(u2);
              case "mm":
                return b.s(u2, 2, "0");
              case "s":
                return String(e2.$s);
              case "ss":
                return b.s(e2.$s, 2, "0");
              case "SSS":
                return b.s(e2.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t3) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
          return b.m(y2, m3);
        };
        switch (M3) {
          case h:
            $2 = D2() / 12;
            break;
          case c:
            $2 = D2();
            break;
          case f:
            $2 = D2() / 3;
            break;
          case o:
            $2 = (g2 - v2) / 6048e5;
            break;
          case a:
            $2 = (g2 - v2) / 864e5;
            break;
          case u:
            $2 = g2 / n;
            break;
          case s:
            $2 = g2 / e;
            break;
          case i:
            $2 = g2 / t;
            break;
          default:
            $2 = g2;
        }
        return l2 ? $2 : b.a($2);
      }, m2.daysInMonth = function() {
        return this.endOf(c).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2) return this.$L;
        var n2 = this.clone(), r2 = w(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return b.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), k = _.prototype;
    return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
      k[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), O.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, O), t2.$i = true), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
      return O(1e3 * t2);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
var utc$1 = { exports: {} };
(function(module2, exports2) {
  !function(t, i) {
    module2.exports = i();
  }(commonjsGlobal, function() {
    var t = "minute", i = /[+-]\d\d(?::?\d\d)?/g, e = /([+-]|\d\d)/g;
    return function(s, f, n) {
      var u = f.prototype;
      n.utc = function(t2) {
        var i2 = { date: t2, utc: true, args: arguments };
        return new f(i2);
      }, u.utc = function(i2) {
        var e2 = n(this.toDate(), { locale: this.$L, utc: true });
        return i2 ? e2.add(this.utcOffset(), t) : e2;
      }, u.local = function() {
        return n(this.toDate(), { locale: this.$L, utc: false });
      };
      var o = u.parse;
      u.parse = function(t2) {
        t2.utc && (this.$u = true), this.$utils().u(t2.$offset) || (this.$offset = t2.$offset), o.call(this, t2);
      };
      var r = u.init;
      u.init = function() {
        if (this.$u) {
          var t2 = this.$d;
          this.$y = t2.getUTCFullYear(), this.$M = t2.getUTCMonth(), this.$D = t2.getUTCDate(), this.$W = t2.getUTCDay(), this.$H = t2.getUTCHours(), this.$m = t2.getUTCMinutes(), this.$s = t2.getUTCSeconds(), this.$ms = t2.getUTCMilliseconds();
        } else r.call(this);
      };
      var a = u.utcOffset;
      u.utcOffset = function(s2, f2) {
        var n2 = this.$utils().u;
        if (n2(s2)) return this.$u ? 0 : n2(this.$offset) ? a.call(this) : this.$offset;
        if ("string" == typeof s2 && (s2 = function(t2) {
          void 0 === t2 && (t2 = "");
          var s3 = t2.match(i);
          if (!s3) return null;
          var f3 = ("" + s3[0]).match(e) || ["-", 0, 0], n3 = f3[0], u3 = 60 * +f3[1] + +f3[2];
          return 0 === u3 ? 0 : "+" === n3 ? u3 : -u3;
        }(s2), null === s2)) return this;
        var u2 = Math.abs(s2) <= 16 ? 60 * s2 : s2, o2 = this;
        if (f2) return o2.$offset = u2, o2.$u = 0 === s2, o2;
        if (0 !== s2) {
          var r2 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (o2 = this.local().add(u2 + r2, t)).$offset = u2, o2.$x.$localOffset = r2;
        } else o2 = this.utc();
        return o2;
      };
      var h = u.format;
      u.format = function(t2) {
        var i2 = t2 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return h.call(this, i2);
      }, u.valueOf = function() {
        var t2 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t2;
      }, u.isUTC = function() {
        return !!this.$u;
      }, u.toISOString = function() {
        return this.toDate().toISOString();
      }, u.toString = function() {
        return this.toDate().toUTCString();
      };
      var l = u.toDate;
      u.toDate = function(t2) {
        return "s" === t2 && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
      };
      var c = u.diff;
      u.diff = function(t2, i2, e2) {
        if (t2 && this.$u === t2.$u) return c.call(this, t2, i2, e2);
        var s2 = this.local(), f2 = n(t2).local();
        return c.call(s2, f2, i2, e2);
      };
    };
  });
})(utc$1);
var utcExports = utc$1.exports;
const utc = /* @__PURE__ */ getDefaultExportFromCjs(utcExports);
var type = TypeError;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace$1 = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat$1 = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
  return O.__proto__;
} : null);
function addNumericSeparator(num, str) {
  if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
    return str;
  }
  var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof num === "number") {
    var int = num < 0 ? -$floor(-num) : $floor(num);
    if (int !== num) {
      var intStr = String(int);
      var dec = $slice.call(str, intStr.length + 1);
      return $replace$1.call(intStr, sepRegex, "$&_") + "." + $replace$1.call($replace$1.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return $replace$1.call(str, sepRegex, "$&_");
}
var utilInspect = require$$0;
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
  __proto__: null,
  "double": '"',
  single: "'"
};
var quoteREs = {
  __proto__: null,
  "double": /(["\\])/g,
  single: /(['\\])/g
};
var objectInspect = function inspect_(obj, options, depth, seen) {
  var opts = options || {};
  if (has$3(opts, "quoteStyle") && !has$3(quotes, opts.quoteStyle)) {
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  }
  if (has$3(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  }
  var customInspect = has$3(opts, "customInspect") ? opts.customInspect : true;
  if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  }
  if (has$3(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  }
  if (has$3(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  }
  var numericSeparator = opts.numericSeparator;
  if (typeof obj === "undefined") {
    return "undefined";
  }
  if (obj === null) {
    return "null";
  }
  if (typeof obj === "boolean") {
    return obj ? "true" : "false";
  }
  if (typeof obj === "string") {
    return inspectString(obj, opts);
  }
  if (typeof obj === "number") {
    if (obj === 0) {
      return Infinity / obj > 0 ? "0" : "-0";
    }
    var str = String(obj);
    return numericSeparator ? addNumericSeparator(obj, str) : str;
  }
  if (typeof obj === "bigint") {
    var bigIntStr = String(obj) + "n";
    return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
  }
  var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
  if (typeof depth === "undefined") {
    depth = 0;
  }
  if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
    return isArray$3(obj) ? "[Array]" : "[Object]";
  }
  var indent = getIndent(opts, depth);
  if (typeof seen === "undefined") {
    seen = [];
  } else if (indexOf(seen, obj) >= 0) {
    return "[Circular]";
  }
  function inspect2(value, from, noIndent) {
    if (from) {
      seen = $arrSlice.call(seen);
      seen.push(from);
    }
    if (noIndent) {
      var newOpts = {
        depth: opts.depth
      };
      if (has$3(opts, "quoteStyle")) {
        newOpts.quoteStyle = opts.quoteStyle;
      }
      return inspect_(value, newOpts, depth + 1, seen);
    }
    return inspect_(value, opts, depth + 1, seen);
  }
  if (typeof obj === "function" && !isRegExp$1(obj)) {
    var name = nameOf(obj);
    var keys = arrObjKeys(obj, inspect2);
    return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
  }
  if (isSymbol(obj)) {
    var symString = hasShammedSymbols ? $replace$1.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
    return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
  }
  if (isElement(obj)) {
    var s = "<" + $toLowerCase.call(String(obj.nodeName));
    var attrs = obj.attributes || [];
    for (var i = 0; i < attrs.length; i++) {
      s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
    }
    s += ">";
    if (obj.childNodes && obj.childNodes.length) {
      s += "...";
    }
    s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
    return s;
  }
  if (isArray$3(obj)) {
    if (obj.length === 0) {
      return "[]";
    }
    var xs = arrObjKeys(obj, inspect2);
    if (indent && !singleLineValues(xs)) {
      return "[" + indentedJoin(xs, indent) + "]";
    }
    return "[ " + $join.call(xs, ", ") + " ]";
  }
  if (isError(obj)) {
    var parts = arrObjKeys(obj, inspect2);
    if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
      return "{ [" + String(obj) + "] " + $join.call($concat$1.call("[cause]: " + inspect2(obj.cause), parts), ", ") + " }";
    }
    if (parts.length === 0) {
      return "[" + String(obj) + "]";
    }
    return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
  }
  if (typeof obj === "object" && customInspect) {
    if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
      return utilInspect(obj, { depth: maxDepth - depth });
    } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
      return obj.inspect();
    }
  }
  if (isMap(obj)) {
    var mapParts = [];
    if (mapForEach) {
      mapForEach.call(obj, function(value, key) {
        mapParts.push(inspect2(key, obj, true) + " => " + inspect2(value, obj));
      });
    }
    return collectionOf("Map", mapSize.call(obj), mapParts, indent);
  }
  if (isSet(obj)) {
    var setParts = [];
    if (setForEach) {
      setForEach.call(obj, function(value) {
        setParts.push(inspect2(value, obj));
      });
    }
    return collectionOf("Set", setSize.call(obj), setParts, indent);
  }
  if (isWeakMap(obj)) {
    return weakCollectionOf("WeakMap");
  }
  if (isWeakSet(obj)) {
    return weakCollectionOf("WeakSet");
  }
  if (isWeakRef(obj)) {
    return weakCollectionOf("WeakRef");
  }
  if (isNumber(obj)) {
    return markBoxed(inspect2(Number(obj)));
  }
  if (isBigInt(obj)) {
    return markBoxed(inspect2(bigIntValueOf.call(obj)));
  }
  if (isBoolean(obj)) {
    return markBoxed(booleanValueOf.call(obj));
  }
  if (isString(obj)) {
    return markBoxed(inspect2(String(obj)));
  }
  if (typeof window !== "undefined" && obj === window) {
    return "{ [object Window] }";
  }
  if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
    return "{ [object globalThis] }";
  }
  if (!isDate(obj) && !isRegExp$1(obj)) {
    var ys = arrObjKeys(obj, inspect2);
    var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
    var protoTag = obj instanceof Object ? "" : "null prototype";
    var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
    var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
    var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat$1.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
    if (ys.length === 0) {
      return tag + "{}";
    }
    if (indent) {
      return tag + "{" + indentedJoin(ys, indent) + "}";
    }
    return tag + "{ " + $join.call(ys, ", ") + " }";
  }
  return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
  var style = opts.quoteStyle || defaultStyle;
  var quoteChar = quotes[style];
  return quoteChar + s + quoteChar;
}
function quote(s) {
  return $replace$1.call(String(s), /"/g, "&quot;");
}
function canTrustToString(obj) {
  return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
}
function isArray$3(obj) {
  return toStr(obj) === "[object Array]" && canTrustToString(obj);
}
function isDate(obj) {
  return toStr(obj) === "[object Date]" && canTrustToString(obj);
}
function isRegExp$1(obj) {
  return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
}
function isError(obj) {
  return toStr(obj) === "[object Error]" && canTrustToString(obj);
}
function isString(obj) {
  return toStr(obj) === "[object String]" && canTrustToString(obj);
}
function isNumber(obj) {
  return toStr(obj) === "[object Number]" && canTrustToString(obj);
}
function isBoolean(obj) {
  return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
}
function isSymbol(obj) {
  if (hasShammedSymbols) {
    return obj && typeof obj === "object" && obj instanceof Symbol;
  }
  if (typeof obj === "symbol") {
    return true;
  }
  if (!obj || typeof obj !== "object" || !symToString) {
    return false;
  }
  try {
    symToString.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
function isBigInt(obj) {
  if (!obj || typeof obj !== "object" || !bigIntValueOf) {
    return false;
  }
  try {
    bigIntValueOf.call(obj);
    return true;
  } catch (e) {
  }
  return false;
}
var hasOwn$1 = Object.prototype.hasOwnProperty || function(key) {
  return key in this;
};
function has$3(obj, key) {
  return hasOwn$1.call(obj, key);
}
function toStr(obj) {
  return objectToString.call(obj);
}
function nameOf(f) {
  if (f.name) {
    return f.name;
  }
  var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
  if (m) {
    return m[1];
  }
  return null;
}
function indexOf(xs, x) {
  if (xs.indexOf) {
    return xs.indexOf(x);
  }
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) {
      return i;
    }
  }
  return -1;
}
function isMap(x) {
  if (!mapSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    mapSize.call(x);
    try {
      setSize.call(x);
    } catch (s) {
      return true;
    }
    return x instanceof Map;
  } catch (e) {
  }
  return false;
}
function isWeakMap(x) {
  if (!weakMapHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakMapHas.call(x, weakMapHas);
    try {
      weakSetHas.call(x, weakSetHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakMap;
  } catch (e) {
  }
  return false;
}
function isWeakRef(x) {
  if (!weakRefDeref || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakRefDeref.call(x);
    return true;
  } catch (e) {
  }
  return false;
}
function isSet(x) {
  if (!setSize || !x || typeof x !== "object") {
    return false;
  }
  try {
    setSize.call(x);
    try {
      mapSize.call(x);
    } catch (m) {
      return true;
    }
    return x instanceof Set;
  } catch (e) {
  }
  return false;
}
function isWeakSet(x) {
  if (!weakSetHas || !x || typeof x !== "object") {
    return false;
  }
  try {
    weakSetHas.call(x, weakSetHas);
    try {
      weakMapHas.call(x, weakMapHas);
    } catch (s) {
      return true;
    }
    return x instanceof WeakSet;
  } catch (e) {
  }
  return false;
}
function isElement(x) {
  if (!x || typeof x !== "object") {
    return false;
  }
  if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
    return true;
  }
  return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
  if (str.length > opts.maxStringLength) {
    var remaining = str.length - opts.maxStringLength;
    var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
    return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
  }
  var quoteRE = quoteREs[opts.quoteStyle || "single"];
  quoteRE.lastIndex = 0;
  var s = $replace$1.call($replace$1.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
  return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
  var n = c.charCodeAt(0);
  var x = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[n];
  if (x) {
    return "\\" + x;
  }
  return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
  return "Object(" + str + ")";
}
function weakCollectionOf(type2) {
  return type2 + " { ? }";
}
function collectionOf(type2, size, entries, indent) {
  var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
  return type2 + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
  for (var i = 0; i < xs.length; i++) {
    if (indexOf(xs[i], "\n") >= 0) {
      return false;
    }
  }
  return true;
}
function getIndent(opts, depth) {
  var baseIndent;
  if (opts.indent === "	") {
    baseIndent = "	";
  } else if (typeof opts.indent === "number" && opts.indent > 0) {
    baseIndent = $join.call(Array(opts.indent + 1), " ");
  } else {
    return null;
  }
  return {
    base: baseIndent,
    prev: $join.call(Array(depth + 1), baseIndent)
  };
}
function indentedJoin(xs, indent) {
  if (xs.length === 0) {
    return "";
  }
  var lineJoiner = "\n" + indent.prev + indent.base;
  return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect2) {
  var isArr = isArray$3(obj);
  var xs = [];
  if (isArr) {
    xs.length = obj.length;
    for (var i = 0; i < obj.length; i++) {
      xs[i] = has$3(obj, i) ? inspect2(obj[i], obj) : "";
    }
  }
  var syms = typeof gOPS === "function" ? gOPS(obj) : [];
  var symMap;
  if (hasShammedSymbols) {
    symMap = {};
    for (var k = 0; k < syms.length; k++) {
      symMap["$" + syms[k]] = syms[k];
    }
  }
  for (var key in obj) {
    if (!has$3(obj, key)) {
      continue;
    }
    if (isArr && String(Number(key)) === key && key < obj.length) {
      continue;
    }
    if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
      continue;
    } else if ($test.call(/[^\w$]/, key)) {
      xs.push(inspect2(key, obj) + ": " + inspect2(obj[key], obj));
    } else {
      xs.push(key + ": " + inspect2(obj[key], obj));
    }
  }
  if (typeof gOPS === "function") {
    for (var j = 0; j < syms.length; j++) {
      if (isEnumerable.call(obj, syms[j])) {
        xs.push("[" + inspect2(syms[j]) + "]: " + inspect2(obj[syms[j]], obj));
      }
    }
  }
  return xs;
}
var inspect$3 = objectInspect;
var $TypeError$5 = type;
var listGetNode = function(list, key, isDelete) {
  var prev = list;
  var curr;
  for (; (curr = prev.next) != null; prev = curr) {
    if (curr.key === key) {
      prev.next = curr.next;
      if (!isDelete) {
        curr.next = /** @type {NonNullable<typeof list.next>} */
        list.next;
        list.next = curr;
      }
      return curr;
    }
  }
};
var listGet = function(objects, key) {
  if (!objects) {
    return void 0;
  }
  var node = listGetNode(objects, key);
  return node && node.value;
};
var listSet = function(objects, key, value) {
  var node = listGetNode(objects, key);
  if (node) {
    node.value = value;
  } else {
    objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
    {
      // eslint-disable-line no-param-reassign, no-extra-parens
      key,
      next: objects.next,
      value
    };
  }
};
var listHas = function(objects, key) {
  if (!objects) {
    return false;
  }
  return !!listGetNode(objects, key);
};
var listDelete = function(objects, key) {
  if (objects) {
    return listGetNode(objects, key, true);
  }
};
var sideChannelList = function getSideChannelList() {
  var $o;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError$5("Side channel does not contain " + inspect$3(key));
      }
    },
    "delete": function(key) {
      var root = $o && $o.next;
      var deletedNode = listDelete($o, key);
      if (deletedNode && root && root === deletedNode) {
        $o = void 0;
      }
      return !!deletedNode;
    },
    get: function(key) {
      return listGet($o, key);
    },
    has: function(key) {
      return listHas($o, key);
    },
    set: function(key, value) {
      if (!$o) {
        $o = {
          next: void 0
        };
      }
      listSet(
        /** @type {NonNullable<typeof $o>} */
        $o,
        key,
        value
      );
    }
  };
  return channel;
};
var esObjectAtoms = Object;
var esErrors = Error;
var _eval = EvalError;
var range = RangeError;
var ref = ReferenceError;
var syntax = SyntaxError;
var uri = URIError;
var abs$1 = Math.abs;
var floor$1 = Math.floor;
var max$1 = Math.max;
var min$1 = Math.min;
var pow$1 = Math.pow;
var round$1 = Math.round;
var _isNaN = Number.isNaN || function isNaN2(a) {
  return a !== a;
};
var $isNaN = _isNaN;
var sign$1 = function sign(number) {
  if ($isNaN(number) || number === 0) {
    return number;
  }
  return number < 0 ? -1 : 1;
};
var gOPD = Object.getOwnPropertyDescriptor;
var $gOPD$1 = gOPD;
if ($gOPD$1) {
  try {
    $gOPD$1([], "length");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var gopd = $gOPD$1;
var $defineProperty$1 = Object.defineProperty || false;
if ($defineProperty$1) {
  try {
    $defineProperty$1({}, "a", { value: 1 });
  } catch (e) {
    $defineProperty$1 = false;
  }
}
var esDefineProperty = $defineProperty$1;
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _ in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams;
}
var hasSymbols$1;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols$1;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams();
  hasSymbols$1 = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols$1;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object2 = esObjectAtoms;
  Object_getPrototypeOf = $Object2.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr2 = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a, b) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
      arr[j + a.length] = b[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind2(that) {
    var target = this;
    if (typeof target !== "function" || toStr2.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
var bind$2 = requireFunctionBind();
var $apply$1 = requireFunctionApply();
var $call$2 = requireFunctionCall();
var $reflectApply = reflectApply;
var actualApply = $reflectApply || bind$2.call($call$2, $apply$1);
var bind$1 = requireFunctionBind();
var $TypeError$4 = type;
var $call$1 = requireFunctionCall();
var $actualApply = actualApply;
var callBindApplyHelpers = function callBindBasic(args) {
  if (args.length < 1 || typeof args[0] !== "function") {
    throw new $TypeError$4("a function is required");
  }
  return $actualApply(bind$1, $call$1, args);
};
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get;
  hasRequiredGet = 1;
  var callBind = callBindApplyHelpers;
  var gOPD2 = gopd;
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object2 = Object;
  var $getPrototypeOf = $Object2.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object2(value));
    }
  ) : false;
  return get;
}
var getProto$1;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto$1;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = requireGet();
  getProto$1 = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto$1;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call2 = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind2 = requireFunctionBind();
  hasown = bind2.call(call2, $hasOwn);
  return hasown;
}
var undefined$1;
var $Object = esObjectAtoms;
var $Error = esErrors;
var $EvalError = _eval;
var $RangeError = range;
var $ReferenceError = ref;
var $SyntaxError = syntax;
var $TypeError$3 = type;
var $URIError = uri;
var abs = abs$1;
var floor = floor$1;
var max = max$1;
var min = min$1;
var pow = pow$1;
var round = round$1;
var sign2 = sign$1;
var $Function = Function;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD = gopd;
var $defineProperty = esDefineProperty;
var throwTypeError = function() {
  throw new $TypeError$3();
};
var ThrowTypeError = $gOPD ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols = requireHasSymbols()();
var getProto = requireGetProto();
var $ObjectGPO = requireObject_getPrototypeOf();
var $ReflectGPO = requireReflect_getPrototypeOf();
var $apply = requireFunctionApply();
var $call = requireFunctionCall();
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": $Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": $EvalError,
  "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": $Object,
  "%Object.getOwnPropertyDescriptor%": $gOPD,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": $RangeError,
  "%ReferenceError%": $ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$3,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": $URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
  "%Function.prototype.call%": $call,
  "%Function.prototype.apply%": $apply,
  "%Object.defineProperty%": $defineProperty,
  "%Object.getPrototypeOf%": $ObjectGPO,
  "%Math.abs%": abs,
  "%Math.floor%": floor,
  "%Math.max%": max,
  "%Math.min%": min,
  "%Math.pow%": pow,
  "%Math.round%": round,
  "%Math.sign%": sign2,
  "%Reflect.getPrototypeOf%": $ReflectGPO
};
if (getProto) {
  try {
    null.error;
  } catch (e) {
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
}
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen && getProto) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind = requireFunctionBind();
var hasOwn = requireHasown();
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace(string, rePropName, function(match2, number, quote2, subString) {
    result[result.length] = quote2 ? $replace(subString, reEscapeChar, "$1") : number || match2;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$3("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError$3("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$3('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$3("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD && i + 1 >= parts.length) {
        var desc = $gOPD(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var GetIntrinsic$2 = getIntrinsic;
var callBindBasic2 = callBindApplyHelpers;
var $indexOf = callBindBasic2([GetIntrinsic$2("%String.prototype.indexOf%")]);
var callBound$2 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = (
    /** @type {Parameters<typeof callBindBasic>[0][0]} */
    GetIntrinsic$2(name, !!allowMissing)
  );
  if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
    return callBindBasic2([intrinsic]);
  }
  return intrinsic;
};
var GetIntrinsic$1 = getIntrinsic;
var callBound$1 = callBound$2;
var inspect$2 = objectInspect;
var $TypeError$2 = type;
var $Map = GetIntrinsic$1("%Map%", true);
var $mapGet = callBound$1("Map.prototype.get", true);
var $mapSet = callBound$1("Map.prototype.set", true);
var $mapHas = callBound$1("Map.prototype.has", true);
var $mapDelete = callBound$1("Map.prototype.delete", true);
var $mapSize = callBound$1("Map.prototype.size", true);
var sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */
function getSideChannelMap() {
  var $m;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError$2("Side channel does not contain " + inspect$2(key));
      }
    },
    "delete": function(key) {
      if ($m) {
        var result = $mapDelete($m, key);
        if ($mapSize($m) === 0) {
          $m = void 0;
        }
        return result;
      }
      return false;
    },
    get: function(key) {
      if ($m) {
        return $mapGet($m, key);
      }
    },
    has: function(key) {
      if ($m) {
        return $mapHas($m, key);
      }
      return false;
    },
    set: function(key, value) {
      if (!$m) {
        $m = new $Map();
      }
      $mapSet($m, key, value);
    }
  };
  return channel;
};
var GetIntrinsic2 = getIntrinsic;
var callBound = callBound$2;
var inspect$1 = objectInspect;
var getSideChannelMap$1 = sideChannelMap;
var $TypeError$1 = type;
var $WeakMap = GetIntrinsic2("%WeakMap%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
var sideChannelWeakmap = $WeakMap ? (
  /** @type {Exclude<import('.'), false>} */
  function getSideChannelWeakMap() {
    var $wm;
    var $m;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError$1("Side channel does not contain " + inspect$1(key));
        }
      },
      "delete": function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapDelete($wm, key);
          }
        } else if (getSideChannelMap$1) {
          if ($m) {
            return $m["delete"](key);
          }
        }
        return false;
      },
      get: function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapGet($wm, key);
          }
        }
        return $m && $m.get(key);
      },
      has: function(key) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if ($wm) {
            return $weakMapHas($wm, key);
          }
        }
        return !!$m && $m.has(key);
      },
      set: function(key, value) {
        if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
          if (!$wm) {
            $wm = new $WeakMap();
          }
          $weakMapSet($wm, key, value);
        } else if (getSideChannelMap$1) {
          if (!$m) {
            $m = getSideChannelMap$1();
          }
          $m.set(key, value);
        }
      }
    };
    return channel;
  }
) : getSideChannelMap$1;
var $TypeError = type;
var inspect = objectInspect;
var getSideChannelList2 = sideChannelList;
var getSideChannelMap2 = sideChannelMap;
var getSideChannelWeakMap2 = sideChannelWeakmap;
var makeChannel = getSideChannelWeakMap2 || getSideChannelMap2 || getSideChannelList2;
var sideChannel = function getSideChannel() {
  var $channelData;
  var channel = {
    assert: function(key) {
      if (!channel.has(key)) {
        throw new $TypeError("Side channel does not contain " + inspect(key));
      }
    },
    "delete": function(key) {
      return !!$channelData && $channelData["delete"](key);
    },
    get: function(key) {
      return $channelData && $channelData.get(key);
    },
    has: function(key) {
      return !!$channelData && $channelData.has(key);
    },
    set: function(key, value) {
      if (!$channelData) {
        $channelData = makeChannel();
      }
      $channelData.set(key, value);
    }
  };
  return channel;
};
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
};
var formats$3 = {
  "default": Format.RFC3986,
  formatters: {
    RFC1738: function(value) {
      return replace.call(value, percentTwenties, "+");
    },
    RFC3986: function(value) {
      return String(value);
    }
  },
  RFC1738: Format.RFC1738,
  RFC3986: Format.RFC3986
};
var formats$2 = formats$3;
var has$2 = Object.prototype.hasOwnProperty;
var isArray$2 = Array.isArray;
var hexTable = function() {
  var array = [];
  for (var i = 0; i < 256; ++i) {
    array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
  }
  return array;
}();
var compactQueue = function compactQueue2(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];
    if (isArray$2(obj)) {
      var compacted = [];
      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== "undefined") {
          compacted.push(obj[j]);
        }
      }
      item.obj[item.prop] = compacted;
    }
  }
};
var arrayToObject = function arrayToObject2(source, options) {
  var obj = options && options.plainObjects ? { __proto__: null } : {};
  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== "undefined") {
      obj[i] = source[i];
    }
  }
  return obj;
};
var merge = function merge2(target, source, options) {
  if (!source) {
    return target;
  }
  if (typeof source !== "object" && typeof source !== "function") {
    if (isArray$2(target)) {
      target.push(source);
    } else if (target && typeof target === "object") {
      if (options && (options.plainObjects || options.allowPrototypes) || !has$2.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }
    return target;
  }
  if (!target || typeof target !== "object") {
    return [target].concat(source);
  }
  var mergeTarget = target;
  if (isArray$2(target) && !isArray$2(source)) {
    mergeTarget = arrayToObject(target, options);
  }
  if (isArray$2(target) && isArray$2(source)) {
    source.forEach(function(item, i) {
      if (has$2.call(target, i)) {
        var targetItem = target[i];
        if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
          target[i] = merge2(targetItem, item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }
  return Object.keys(source).reduce(function(acc, key) {
    var value = source[key];
    if (has$2.call(acc, key)) {
      acc[key] = merge2(acc[key], value, options);
    } else {
      acc[key] = value;
    }
    return acc;
  }, mergeTarget);
};
var assign$1 = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function(acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};
var decode = function(str, defaultDecoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, " ");
  if (charset === "iso-8859-1") {
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  }
  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};
var limit = 1024;
var encode = function encode2(str, defaultEncoder, charset, kind, format2) {
  if (str.length === 0) {
    return str;
  }
  var string = str;
  if (typeof str === "symbol") {
    string = Symbol.prototype.toString.call(str);
  } else if (typeof str !== "string") {
    string = String(str);
  }
  if (charset === "iso-8859-1") {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
      return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
  }
  var out = "";
  for (var j = 0; j < string.length; j += limit) {
    var segment = string.length >= limit ? string.slice(j, j + limit) : string;
    var arr = [];
    for (var i = 0; i < segment.length; ++i) {
      var c = segment.charCodeAt(i);
      if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format2 === formats$2.RFC1738 && (c === 40 || c === 41)) {
        arr[arr.length] = segment.charAt(i);
        continue;
      }
      if (c < 128) {
        arr[arr.length] = hexTable[c];
        continue;
      }
      if (c < 2048) {
        arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
        continue;
      }
      if (c < 55296 || c >= 57344) {
        arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        continue;
      }
      i += 1;
      c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
      arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
    }
    out += arr.join("");
  }
  return out;
};
var compact = function compact2(value) {
  var queue = [{ obj: { o: value }, prop: "o" }];
  var refs = [];
  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);
    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];
      if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
        queue.push({ obj, prop: key });
        refs.push(val);
      }
    }
  }
  compactQueue(queue);
  return value;
};
var isRegExp = function isRegExp2(obj) {
  return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer2(obj) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine2(a, b) {
  return [].concat(a, b);
};
var maybeMap = function maybeMap2(val, fn) {
  if (isArray$2(val)) {
    var mapped = [];
    for (var i = 0; i < val.length; i += 1) {
      mapped.push(fn(val[i]));
    }
    return mapped;
  }
  return fn(val);
};
var utils$2 = {
  arrayToObject,
  assign: assign$1,
  combine,
  compact,
  decode,
  encode,
  isBuffer,
  isRegExp,
  maybeMap,
  merge
};
var getSideChannel2 = sideChannel;
var utils$1 = utils$2;
var formats$1 = formats$3;
var has$1 = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    return prefix + "[]";
  },
  comma: "comma",
  indices: function indices(prefix, key) {
    return prefix + "[" + key + "]";
  },
  repeat: function repeat(prefix) {
    return prefix;
  }
};
var isArray$1 = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
  push.apply(arr, isArray$1(valueOrArray) ? valueOrArray : [valueOrArray]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats$1["default"];
var defaults$1 = {
  addQueryPrefix: false,
  allowDots: false,
  allowEmptyArrays: false,
  arrayFormat: "indices",
  charset: "utf-8",
  charsetSentinel: false,
  commaRoundTrip: false,
  delimiter: "&",
  encode: true,
  encodeDotInKeys: false,
  encoder: utils$1.encode,
  encodeValuesOnly: false,
  filter: void 0,
  format: defaultFormat,
  formatter: formats$1.formatters[defaultFormat],
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
  return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify$1 = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate2, format2, formatter, encodeValuesOnly, charset, sideChannel2) {
  var obj = object;
  var tmpSc = sideChannel2;
  var step = 0;
  var findFlag = false;
  while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
    var pos = tmpSc.get(object);
    step += 1;
    if (typeof pos !== "undefined") {
      if (pos === step) {
        throw new RangeError("Cyclic object value");
      } else {
        findFlag = true;
      }
    }
    if (typeof tmpSc.get(sentinel) === "undefined") {
      step = 0;
    }
  }
  if (typeof filter === "function") {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate2(obj);
  } else if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    obj = utils$1.maybeMap(obj, function(value2) {
      if (value2 instanceof Date) {
        return serializeDate2(value2);
      }
      return value2;
    });
  }
  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults$1.encoder, charset, "key", format2) : prefix;
    }
    obj = "";
  }
  if (isNonNullishPrimitive(obj) || utils$1.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults$1.encoder, charset, "key", format2);
      return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults$1.encoder, charset, "value", format2))];
    }
    return [formatter(prefix) + "=" + formatter(String(obj))];
  }
  var values = [];
  if (typeof obj === "undefined") {
    return values;
  }
  var objKeys;
  if (generateArrayPrefix === "comma" && isArray$1(obj)) {
    if (encodeValuesOnly && encoder) {
      obj = utils$1.maybeMap(obj, encoder);
    }
    objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
  } else if (isArray$1(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }
  var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
  var adjustedPrefix = commaRoundTrip && isArray$1(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
  if (allowEmptyArrays && isArray$1(obj) && obj.length === 0) {
    return adjustedPrefix + "[]";
  }
  for (var j = 0; j < objKeys.length; ++j) {
    var key = objKeys[j];
    var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
    if (skipNulls && value === null) {
      continue;
    }
    var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
    var keyPrefix = isArray$1(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
    sideChannel2.set(object, step);
    var valueSideChannel = getSideChannel2();
    valueSideChannel.set(sentinel, sideChannel2);
    pushToArray(values, stringify(
      value,
      keyPrefix,
      generateArrayPrefix,
      commaRoundTrip,
      allowEmptyArrays,
      strictNullHandling,
      skipNulls,
      encodeDotInKeys,
      generateArrayPrefix === "comma" && encodeValuesOnly && isArray$1(obj) ? null : encoder,
      filter,
      sort,
      allowDots,
      serializeDate2,
      format2,
      formatter,
      encodeValuesOnly,
      charset,
      valueSideChannel
    ));
  }
  return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
  if (!opts) {
    return defaults$1;
  }
  if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
    throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
    throw new TypeError("Encoder has to be a function.");
  }
  var charset = opts.charset || defaults$1.charset;
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  var format2 = formats$1["default"];
  if (typeof opts.format !== "undefined") {
    if (!has$1.call(formats$1.formatters, opts.format)) {
      throw new TypeError("Unknown format option provided.");
    }
    format2 = opts.format;
  }
  var formatter = formats$1.formatters[format2];
  var filter = defaults$1.filter;
  if (typeof opts.filter === "function" || isArray$1(opts.filter)) {
    filter = opts.filter;
  }
  var arrayFormat;
  if (opts.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = opts.arrayFormat;
  } else if ("indices" in opts) {
    arrayFormat = opts.indices ? "indices" : "repeat";
  } else {
    arrayFormat = defaults$1.arrayFormat;
  }
  if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  }
  var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults$1.allowDots : !!opts.allowDots;
  return {
    addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults$1.addQueryPrefix,
    allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults$1.allowEmptyArrays,
    arrayFormat,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults$1.charsetSentinel,
    commaRoundTrip: !!opts.commaRoundTrip,
    delimiter: typeof opts.delimiter === "undefined" ? defaults$1.delimiter : opts.delimiter,
    encode: typeof opts.encode === "boolean" ? opts.encode : defaults$1.encode,
    encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults$1.encodeDotInKeys,
    encoder: typeof opts.encoder === "function" ? opts.encoder : defaults$1.encoder,
    encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults$1.encodeValuesOnly,
    filter,
    format: format2,
    formatter,
    serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults$1.serializeDate,
    skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults$1.skipNulls,
    sort: typeof opts.sort === "function" ? opts.sort : null,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults$1.strictNullHandling
  };
};
var stringify_1 = function(object, opts) {
  var obj = object;
  var options = normalizeStringifyOptions(opts);
  var objKeys;
  var filter;
  if (typeof options.filter === "function") {
    filter = options.filter;
    obj = filter("", obj);
  } else if (isArray$1(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }
  var keys = [];
  if (typeof obj !== "object" || obj === null) {
    return "";
  }
  var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
  var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
  if (!objKeys) {
    objKeys = Object.keys(obj);
  }
  if (options.sort) {
    objKeys.sort(options.sort);
  }
  var sideChannel2 = getSideChannel2();
  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];
    var value = obj[key];
    if (options.skipNulls && value === null) {
      continue;
    }
    pushToArray(keys, stringify$1(
      value,
      key,
      generateArrayPrefix,
      commaRoundTrip,
      options.allowEmptyArrays,
      options.strictNullHandling,
      options.skipNulls,
      options.encodeDotInKeys,
      options.encode ? options.encoder : null,
      options.filter,
      options.sort,
      options.allowDots,
      options.serializeDate,
      options.format,
      options.formatter,
      options.encodeValuesOnly,
      options.charset,
      sideChannel2
    ));
  }
  var joined = keys.join(options.delimiter);
  var prefix = options.addQueryPrefix === true ? "?" : "";
  if (options.charsetSentinel) {
    if (options.charset === "iso-8859-1") {
      prefix += "utf8=%26%2310003%3B&";
    } else {
      prefix += "utf8=%E2%9C%93&";
    }
  }
  return joined.length > 0 ? prefix + joined : "";
};
var utils = utils$2;
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
  allowDots: false,
  allowEmptyArrays: false,
  allowPrototypes: false,
  allowSparse: false,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: false,
  comma: false,
  decodeDotInKeys: false,
  decoder: utils.decode,
  delimiter: "&",
  depth: 5,
  duplicates: "combine",
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1e3,
  parseArrays: true,
  plainObjects: false,
  strictDepth: false,
  strictNullHandling: false,
  throwOnLimitExceeded: false
};
var interpretNumericEntities = function(str) {
  return str.replace(/&#(\d+);/g, function($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
};
var parseArrayValue = function(val, options, currentArrayLength) {
  if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
    return val.split(",");
  }
  if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
    throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
  }
  return val;
};
var isoSentinel = "utf8=%26%2310003%3B";
var charsetSentinel = "utf8=%E2%9C%93";
var parseValues = function parseQueryStringValues(str, options) {
  var obj = { __proto__: null };
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
  cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  var limit2 = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
  var parts = cleanStr.split(
    options.delimiter,
    options.throwOnLimitExceeded ? limit2 + 1 : limit2
  );
  if (options.throwOnLimitExceeded && parts.length > limit2) {
    throw new RangeError("Parameter limit exceeded. Only " + limit2 + " parameter" + (limit2 === 1 ? "" : "s") + " allowed.");
  }
  var skipIndex = -1;
  var i;
  var charset = options.charset;
  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf("utf8=") === 0) {
        if (parts[i] === charsetSentinel) {
          charset = "utf-8";
        } else if (parts[i] === isoSentinel) {
          charset = "iso-8859-1";
        }
        skipIndex = i;
        i = parts.length;
      }
    }
  }
  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }
    var part = parts[i];
    var bracketEqualsPos = part.indexOf("]=");
    var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
    var key;
    var val;
    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset, "key");
      val = options.strictNullHandling ? null : "";
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
      val = utils.maybeMap(
        parseArrayValue(
          part.slice(pos + 1),
          options,
          isArray(obj[key]) ? obj[key].length : 0
        ),
        function(encodedVal) {
          return options.decoder(encodedVal, defaults.decoder, charset, "value");
        }
      );
    }
    if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
      val = interpretNumericEntities(String(val));
    }
    if (part.indexOf("[]=") > -1) {
      val = isArray(val) ? [val] : val;
    }
    var existing = has.call(obj, key);
    if (existing && options.duplicates === "combine") {
      obj[key] = utils.combine(obj[key], val);
    } else if (!existing || options.duplicates === "last") {
      obj[key] = val;
    }
  }
  return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
  var currentArrayLength = 0;
  if (chain.length > 0 && chain[chain.length - 1] === "[]") {
    var parentKey = chain.slice(0, -1).join("");
    currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
  }
  var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];
    if (root === "[]" && options.parseArrays) {
      obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf);
    } else {
      obj = options.plainObjects ? { __proto__: null } : {};
      var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
      var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
      var index2 = parseInt(decodedRoot, 10);
      if (!options.parseArrays && decodedRoot === "") {
        obj = { 0: leaf };
      } else if (!isNaN(index2) && root !== decodedRoot && String(index2) === decodedRoot && index2 >= 0 && (options.parseArrays && index2 <= options.arrayLimit)) {
        obj = [];
        obj[index2] = leaf;
      } else if (decodedRoot !== "__proto__") {
        obj[decodedRoot] = leaf;
      }
    }
    leaf = obj;
  }
  return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
  if (!givenKey) {
    return;
  }
  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
  var brackets2 = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g;
  var segment = options.depth > 0 && brackets2.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key;
  var keys = [];
  if (parent) {
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(parent);
  }
  var i = 0;
  while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;
    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }
    keys.push(segment[1]);
  }
  if (segment) {
    if (options.strictDepth === true) {
      throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
    }
    keys.push("[" + key.slice(segment.index) + "]");
  }
  return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions2(opts) {
  if (!opts) {
    return defaults;
  }
  if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
    throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
  }
  if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
    throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
  }
  if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
    throw new TypeError("Decoder has to be a function.");
  }
  if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  }
  if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
    throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
  }
  var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
  var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
  if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
    throw new TypeError("The duplicates option must be either combine, first, or last");
  }
  var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
  return {
    allowDots,
    allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
    allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
    allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
    arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
    charset,
    charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
    comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
    decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
    decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
    delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
    duplicates,
    ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
    interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
    parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
    parseArrays: opts.parseArrays !== false,
    plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
    strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
    strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
    throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
  };
};
var parse$1 = function(str, opts) {
  var options = normalizeParseOptions(opts);
  if (str === "" || str === null || typeof str === "undefined") {
    return options.plainObjects ? { __proto__: null } : {};
  }
  var tempObj = typeof str === "string" ? parseValues(str, options) : str;
  var obj = options.plainObjects ? { __proto__: null } : {};
  var keys = Object.keys(tempObj);
  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
    obj = utils.merge(obj, newObj, options);
  }
  if (options.allowSparse === true) {
    return obj;
  }
  return utils.compact(obj);
};
var stringify2 = stringify_1;
var parse = parse$1;
var formats = formats$3;
var lib = {
  formats,
  parse,
  stringify: stringify2
};
const qs = /* @__PURE__ */ getDefaultExportFromCjs(lib);
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn2 = {}.hasOwnProperty;
    function classNames2() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames2.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn2.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module2.exports) {
      classNames2.default = classNames2;
      module2.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function useEvent(callback) {
  var fnRef = React__namespace.useRef();
  fnRef.current = callback;
  var memoFn = React__namespace.useCallback(function() {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var useInternalLayoutEffect = process.env.NODE_ENV !== "test" && canUseDom() ? React__namespace.useLayoutEffect : React__namespace.useEffect;
var useLayoutEffect = function useLayoutEffect2(callback, deps) {
  var firstMountRef = React__namespace.useRef(true);
  useInternalLayoutEffect(function() {
    return callback(firstMountRef.current);
  }, deps);
  useInternalLayoutEffect(function() {
    firstMountRef.current = false;
    return function() {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
  useLayoutEffect(function(firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
function useSafeState(defaultValue) {
  var destroyRef = React__namespace.useRef(false);
  var _React$useState = React__namespace.useState(defaultValue), _React$useState2 = _slicedToArray(_React$useState, 2), value = _React$useState2[0], setValue = _React$useState2[1];
  React__namespace.useEffect(function() {
    destroyRef.current = false;
    return function() {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}
function hasValue(value) {
  return value !== void 0;
}
function useMergedState(defaultStateValue, option) {
  var _ref = option || {}, defaultValue = _ref.defaultValue, value = _ref.value, onChange = _ref.onChange, postState = _ref.postState;
  var _useState = useSafeState(function() {
    if (hasValue(value)) {
      return value;
    } else if (hasValue(defaultValue)) {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    } else {
      return typeof defaultStateValue === "function" ? defaultStateValue() : defaultStateValue;
    }
  }), _useState2 = _slicedToArray(_useState, 2), innerValue = _useState2[0], setInnerValue = _useState2[1];
  var mergedValue = value !== void 0 ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;
  var onChangeFn = useEvent(onChange);
  var _useState3 = useSafeState([mergedValue]), _useState4 = _slicedToArray(_useState3, 2), prevValue = _useState4[0], setPrevValue = _useState4[1];
  useLayoutUpdateEffect(function() {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);
  useLayoutUpdateEffect(function() {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);
  var triggerChange = useEvent(function(updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}
var KeyCode = {
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40
};
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = _objectSpread2({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function(key) {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (process.env.NODE_ENV !== "production" && !valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var locale = {
  // Options
  items_per_page: "条/页",
  jump_to: "跳至",
  jump_to_confirm: "确定",
  page: "页",
  // Pagination
  prev_page: "上一页",
  next_page: "下一页",
  prev_5: "向前 5 页",
  next_5: "向后 5 页",
  prev_3: "向前 3 页",
  next_3: "向后 3 页",
  page_size: "页码"
};
var defaultPageSizeOptions = [10, 20, 50, 100];
var Options = function Options2(props) {
  var _props$pageSizeOption = props.pageSizeOptions, pageSizeOptions = _props$pageSizeOption === void 0 ? defaultPageSizeOptions : _props$pageSizeOption, locale2 = props.locale, changeSize = props.changeSize, pageSize = props.pageSize, goButton = props.goButton, quickGo = props.quickGo, rootPrefixCls = props.rootPrefixCls, disabled = props.disabled, buildOptionText = props.buildOptionText, showSizeChanger = props.showSizeChanger, sizeChangerRender = props.sizeChangerRender;
  var _React$useState = React__namespace.default.useState(""), _React$useState2 = _slicedToArray(_React$useState, 2), goInputText = _React$useState2[0], setGoInputText = _React$useState2[1];
  var getValidValue = function getValidValue2() {
    return !goInputText || Number.isNaN(goInputText) ? void 0 : Number(goInputText);
  };
  var mergeBuildOptionText = typeof buildOptionText === "function" ? buildOptionText : function(value) {
    return "".concat(value, " ").concat(locale2.items_per_page);
  };
  var handleChange = function handleChange2(e) {
    setGoInputText(e.target.value);
  };
  var handleBlur = function handleBlur2(e) {
    if (goButton || goInputText === "") {
      return;
    }
    setGoInputText("");
    if (e.relatedTarget && (e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item-link")) >= 0 || e.relatedTarget.className.indexOf("".concat(rootPrefixCls, "-item")) >= 0)) {
      return;
    }
    quickGo === null || quickGo === void 0 || quickGo(getValidValue());
  };
  var go = function go2(e) {
    if (goInputText === "") {
      return;
    }
    if (e.keyCode === KeyCode.ENTER || e.type === "click") {
      setGoInputText("");
      quickGo === null || quickGo === void 0 || quickGo(getValidValue());
    }
  };
  var getPageSizeOptions = function getPageSizeOptions2() {
    if (pageSizeOptions.some(function(option) {
      return option.toString() === pageSize.toString();
    })) {
      return pageSizeOptions;
    }
    return pageSizeOptions.concat([pageSize]).sort(function(a, b) {
      var numberA = Number.isNaN(Number(a)) ? 0 : Number(a);
      var numberB = Number.isNaN(Number(b)) ? 0 : Number(b);
      return numberA - numberB;
    });
  };
  var prefixCls = "".concat(rootPrefixCls, "-options");
  if (!showSizeChanger && !quickGo) {
    return null;
  }
  var changeSelect = null;
  var goInput = null;
  var gotoButton = null;
  if (showSizeChanger && sizeChangerRender) {
    changeSelect = sizeChangerRender({
      disabled,
      size: pageSize,
      onSizeChange: function onSizeChange(nextValue) {
        changeSize === null || changeSize === void 0 || changeSize(Number(nextValue));
      },
      "aria-label": locale2.page_size,
      className: "".concat(prefixCls, "-size-changer"),
      options: getPageSizeOptions().map(function(opt) {
        return {
          label: mergeBuildOptionText(opt),
          value: opt
        };
      })
    });
  }
  if (quickGo) {
    if (goButton) {
      gotoButton = typeof goButton === "boolean" ? /* @__PURE__ */ React__namespace.default.createElement("button", {
        type: "button",
        onClick: go,
        onKeyUp: go,
        disabled,
        className: "".concat(prefixCls, "-quick-jumper-button")
      }, locale2.jump_to_confirm) : /* @__PURE__ */ React__namespace.default.createElement("span", {
        onClick: go,
        onKeyUp: go
      }, goButton);
    }
    goInput = /* @__PURE__ */ React__namespace.default.createElement("div", {
      className: "".concat(prefixCls, "-quick-jumper")
    }, locale2.jump_to, /* @__PURE__ */ React__namespace.default.createElement("input", {
      disabled,
      type: "text",
      value: goInputText,
      onChange: handleChange,
      onKeyUp: go,
      onBlur: handleBlur,
      "aria-label": locale2.page
    }), locale2.page, gotoButton);
  }
  return /* @__PURE__ */ React__namespace.default.createElement("li", {
    className: prefixCls
  }, changeSelect, goInput);
};
if (process.env.NODE_ENV !== "production") {
  Options.displayName = "Options";
}
var Pager = function Pager2(props) {
  var rootPrefixCls = props.rootPrefixCls, page = props.page, active = props.active, className = props.className, showTitle = props.showTitle, onClick = props.onClick, onKeyPress = props.onKeyPress, itemRender = props.itemRender;
  var prefixCls = "".concat(rootPrefixCls, "-item");
  var cls = classNames(prefixCls, "".concat(prefixCls, "-").concat(page), _defineProperty(_defineProperty({}, "".concat(prefixCls, "-active"), active), "".concat(prefixCls, "-disabled"), !page), className);
  var handleClick = function handleClick2() {
    onClick(page);
  };
  var handleKeyPress = function handleKeyPress2(e) {
    onKeyPress(e, onClick, page);
  };
  var pager = itemRender(page, "page", /* @__PURE__ */ React__namespace.default.createElement("a", {
    rel: "nofollow"
  }, page));
  return pager ? /* @__PURE__ */ React__namespace.default.createElement("li", {
    title: showTitle ? String(page) : null,
    className: cls,
    onClick: handleClick,
    onKeyDown: handleKeyPress,
    tabIndex: 0
  }, pager) : null;
};
if (process.env.NODE_ENV !== "production") {
  Pager.displayName = "Pager";
}
var defaultItemRender = function defaultItemRender2(page, type2, element) {
  return element;
};
function noop() {
}
function isInteger(v) {
  var value = Number(v);
  return typeof value === "number" && !Number.isNaN(value) && isFinite(value) && Math.floor(value) === value;
}
function calculatePage(p, pageSize, total) {
  var _pageSize = typeof p === "undefined" ? pageSize : p;
  return Math.floor((total - 1) / _pageSize) + 1;
}
var Pagination = function Pagination2(props) {
  var _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? "rc-pagination" : _props$prefixCls, _props$selectPrefixCl = props.selectPrefixCls, selectPrefixCls = _props$selectPrefixCl === void 0 ? "rc-select" : _props$selectPrefixCl, className = props.className, currentProp = props.current, _props$defaultCurrent = props.defaultCurrent, defaultCurrent = _props$defaultCurrent === void 0 ? 1 : _props$defaultCurrent, _props$total = props.total, total = _props$total === void 0 ? 0 : _props$total, pageSizeProp = props.pageSize, _props$defaultPageSiz = props.defaultPageSize, defaultPageSize = _props$defaultPageSiz === void 0 ? 10 : _props$defaultPageSiz, _props$onChange = props.onChange, onChange = _props$onChange === void 0 ? noop : _props$onChange, hideOnSinglePage = props.hideOnSinglePage, align = props.align, _props$showPrevNextJu = props.showPrevNextJumpers, showPrevNextJumpers = _props$showPrevNextJu === void 0 ? true : _props$showPrevNextJu, showQuickJumper = props.showQuickJumper, showLessItems = props.showLessItems, _props$showTitle = props.showTitle, showTitle = _props$showTitle === void 0 ? true : _props$showTitle, _props$onShowSizeChan = props.onShowSizeChange, onShowSizeChange = _props$onShowSizeChan === void 0 ? noop : _props$onShowSizeChan, _props$locale = props.locale, locale$1 = _props$locale === void 0 ? locale : _props$locale, style = props.style, _props$totalBoundaryS = props.totalBoundaryShowSizeChanger, totalBoundaryShowSizeChanger = _props$totalBoundaryS === void 0 ? 50 : _props$totalBoundaryS, disabled = props.disabled, simple = props.simple, showTotal = props.showTotal, _props$showSizeChange = props.showSizeChanger, showSizeChanger = _props$showSizeChange === void 0 ? total > totalBoundaryShowSizeChanger : _props$showSizeChange, sizeChangerRender = props.sizeChangerRender, pageSizeOptions = props.pageSizeOptions, _props$itemRender = props.itemRender, itemRender = _props$itemRender === void 0 ? defaultItemRender : _props$itemRender, jumpPrevIcon = props.jumpPrevIcon, jumpNextIcon = props.jumpNextIcon, prevIcon = props.prevIcon, nextIcon = props.nextIcon;
  var paginationRef = React__namespace.default.useRef(null);
  var _useMergedState = useMergedState(10, {
    value: pageSizeProp,
    defaultValue: defaultPageSize
  }), _useMergedState2 = _slicedToArray(_useMergedState, 2), pageSize = _useMergedState2[0], setPageSize = _useMergedState2[1];
  var _useMergedState3 = useMergedState(1, {
    value: currentProp,
    defaultValue: defaultCurrent,
    postState: function postState(c) {
      return Math.max(1, Math.min(c, calculatePage(void 0, pageSize, total)));
    }
  }), _useMergedState4 = _slicedToArray(_useMergedState3, 2), current = _useMergedState4[0], setCurrent = _useMergedState4[1];
  var _React$useState = React__namespace.default.useState(current), _React$useState2 = _slicedToArray(_React$useState, 2), internalInputVal = _React$useState2[0], setInternalInputVal = _React$useState2[1];
  React.useEffect(function() {
    setInternalInputVal(current);
  }, [current]);
  var hasOnChange = onChange !== noop;
  var hasCurrent = "current" in props;
  if (process.env.NODE_ENV !== "production") {
    warningOnce(hasCurrent ? hasOnChange : true, "You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");
  }
  var jumpPrevPage = Math.max(1, current - (showLessItems ? 3 : 5));
  var jumpNextPage = Math.min(calculatePage(void 0, pageSize, total), current + (showLessItems ? 3 : 5));
  function getItemIcon(icon, label) {
    var iconNode = icon || /* @__PURE__ */ React__namespace.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: "".concat(prefixCls, "-item-link")
    });
    if (typeof icon === "function") {
      iconNode = /* @__PURE__ */ React__namespace.default.createElement(icon, _objectSpread2({}, props));
    }
    return iconNode;
  }
  function getValidValue(e) {
    var inputValue = e.target.value;
    var allPages2 = calculatePage(void 0, pageSize, total);
    var value;
    if (inputValue === "") {
      value = inputValue;
    } else if (Number.isNaN(Number(inputValue))) {
      value = internalInputVal;
    } else if (inputValue >= allPages2) {
      value = allPages2;
    } else {
      value = Number(inputValue);
    }
    return value;
  }
  function isValid(page) {
    return isInteger(page) && page !== current && isInteger(total) && total > 0;
  }
  var shouldDisplayQuickJumper = total > pageSize ? showQuickJumper : false;
  function handleKeyDown(event) {
    if (event.keyCode === KeyCode.UP || event.keyCode === KeyCode.DOWN) {
      event.preventDefault();
    }
  }
  function handleKeyUp(event) {
    var value = getValidValue(event);
    if (value !== internalInputVal) {
      setInternalInputVal(value);
    }
    switch (event.keyCode) {
      case KeyCode.ENTER:
        handleChange(value);
        break;
      case KeyCode.UP:
        handleChange(value - 1);
        break;
      case KeyCode.DOWN:
        handleChange(value + 1);
        break;
    }
  }
  function handleBlur(event) {
    handleChange(getValidValue(event));
  }
  function changePageSize(size) {
    var newCurrent = calculatePage(size, pageSize, total);
    var nextCurrent = current > newCurrent && newCurrent !== 0 ? newCurrent : current;
    setPageSize(size);
    setInternalInputVal(nextCurrent);
    onShowSizeChange === null || onShowSizeChange === void 0 || onShowSizeChange(current, size);
    setCurrent(nextCurrent);
    onChange === null || onChange === void 0 || onChange(nextCurrent, size);
  }
  function handleChange(page) {
    if (isValid(page) && !disabled) {
      var currentPage = calculatePage(void 0, pageSize, total);
      var newPage = page;
      if (page > currentPage) {
        newPage = currentPage;
      } else if (page < 1) {
        newPage = 1;
      }
      if (newPage !== internalInputVal) {
        setInternalInputVal(newPage);
      }
      setCurrent(newPage);
      onChange === null || onChange === void 0 || onChange(newPage, pageSize);
      return newPage;
    }
    return current;
  }
  var hasPrev = current > 1;
  var hasNext = current < calculatePage(void 0, pageSize, total);
  function prevHandle() {
    if (hasPrev) handleChange(current - 1);
  }
  function nextHandle() {
    if (hasNext) handleChange(current + 1);
  }
  function jumpPrevHandle() {
    handleChange(jumpPrevPage);
  }
  function jumpNextHandle() {
    handleChange(jumpNextPage);
  }
  function runIfEnter(event, callback) {
    if (event.key === "Enter" || event.charCode === KeyCode.ENTER || event.keyCode === KeyCode.ENTER) {
      for (var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        restParams[_key - 2] = arguments[_key];
      }
      callback.apply(void 0, restParams);
    }
  }
  function runIfEnterPrev(event) {
    runIfEnter(event, prevHandle);
  }
  function runIfEnterNext(event) {
    runIfEnter(event, nextHandle);
  }
  function runIfEnterJumpPrev(event) {
    runIfEnter(event, jumpPrevHandle);
  }
  function runIfEnterJumpNext(event) {
    runIfEnter(event, jumpNextHandle);
  }
  function renderPrev(prevPage2) {
    var prevButton = itemRender(prevPage2, "prev", getItemIcon(prevIcon, "prev page"));
    return /* @__PURE__ */ React__namespace.default.isValidElement(prevButton) ? /* @__PURE__ */ React__namespace.default.cloneElement(prevButton, {
      disabled: !hasPrev
    }) : prevButton;
  }
  function renderNext(nextPage2) {
    var nextButton = itemRender(nextPage2, "next", getItemIcon(nextIcon, "next page"));
    return /* @__PURE__ */ React__namespace.default.isValidElement(nextButton) ? /* @__PURE__ */ React__namespace.default.cloneElement(nextButton, {
      disabled: !hasNext
    }) : nextButton;
  }
  function handleGoTO(event) {
    if (event.type === "click" || event.keyCode === KeyCode.ENTER) {
      handleChange(internalInputVal);
    }
  }
  var jumpPrev = null;
  var dataOrAriaAttributeProps = pickAttrs(props, {
    aria: true,
    data: true
  });
  var totalText = showTotal && /* @__PURE__ */ React__namespace.default.createElement("li", {
    className: "".concat(prefixCls, "-total-text")
  }, showTotal(total, [total === 0 ? 0 : (current - 1) * pageSize + 1, current * pageSize > total ? total : current * pageSize]));
  var jumpNext = null;
  var allPages = calculatePage(void 0, pageSize, total);
  if (hideOnSinglePage && total <= pageSize) {
    return null;
  }
  var pagerList = [];
  var pagerProps = {
    rootPrefixCls: prefixCls,
    onClick: handleChange,
    onKeyPress: runIfEnter,
    showTitle,
    itemRender,
    page: -1
  };
  var prevPage = current - 1 > 0 ? current - 1 : 0;
  var nextPage = current + 1 < allPages ? current + 1 : allPages;
  var goButton = showQuickJumper && showQuickJumper.goButton;
  var isReadOnly = _typeof(simple) === "object" ? simple.readOnly : !simple;
  var gotoButton = goButton;
  var simplePager = null;
  if (simple) {
    if (goButton) {
      if (typeof goButton === "boolean") {
        gotoButton = /* @__PURE__ */ React__namespace.default.createElement("button", {
          type: "button",
          onClick: handleGoTO,
          onKeyUp: handleGoTO
        }, locale$1.jump_to_confirm);
      } else {
        gotoButton = /* @__PURE__ */ React__namespace.default.createElement("span", {
          onClick: handleGoTO,
          onKeyUp: handleGoTO
        }, goButton);
      }
      gotoButton = /* @__PURE__ */ React__namespace.default.createElement("li", {
        title: showTitle ? "".concat(locale$1.jump_to).concat(current, "/").concat(allPages) : null,
        className: "".concat(prefixCls, "-simple-pager")
      }, gotoButton);
    }
    simplePager = /* @__PURE__ */ React__namespace.default.createElement("li", {
      title: showTitle ? "".concat(current, "/").concat(allPages) : null,
      className: "".concat(prefixCls, "-simple-pager")
    }, isReadOnly ? internalInputVal : /* @__PURE__ */ React__namespace.default.createElement("input", {
      type: "text",
      "aria-label": locale$1.jump_to,
      value: internalInputVal,
      disabled,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onChange: handleKeyUp,
      onBlur: handleBlur,
      size: 3
    }), /* @__PURE__ */ React__namespace.default.createElement("span", {
      className: "".concat(prefixCls, "-slash")
    }, "/"), allPages);
  }
  var pageBufferSize = showLessItems ? 1 : 2;
  if (allPages <= 3 + pageBufferSize * 2) {
    if (!allPages) {
      pagerList.push(/* @__PURE__ */ React__namespace.default.createElement(Pager, _extends({}, pagerProps, {
        key: "noPager",
        page: 1,
        className: "".concat(prefixCls, "-item-disabled")
      })));
    }
    for (var i = 1; i <= allPages; i += 1) {
      pagerList.push(/* @__PURE__ */ React__namespace.default.createElement(Pager, _extends({}, pagerProps, {
        key: i,
        page: i,
        active: current === i
      })));
    }
  } else {
    var prevItemTitle = showLessItems ? locale$1.prev_3 : locale$1.prev_5;
    var nextItemTitle = showLessItems ? locale$1.next_3 : locale$1.next_5;
    var jumpPrevContent = itemRender(jumpPrevPage, "jump-prev", getItemIcon(jumpPrevIcon, "prev page"));
    var jumpNextContent = itemRender(jumpNextPage, "jump-next", getItemIcon(jumpNextIcon, "next page"));
    if (showPrevNextJumpers) {
      jumpPrev = jumpPrevContent ? /* @__PURE__ */ React__namespace.default.createElement("li", {
        title: showTitle ? prevItemTitle : null,
        key: "prev",
        onClick: jumpPrevHandle,
        tabIndex: 0,
        onKeyDown: runIfEnterJumpPrev,
        className: classNames("".concat(prefixCls, "-jump-prev"), _defineProperty({}, "".concat(prefixCls, "-jump-prev-custom-icon"), !!jumpPrevIcon))
      }, jumpPrevContent) : null;
      jumpNext = jumpNextContent ? /* @__PURE__ */ React__namespace.default.createElement("li", {
        title: showTitle ? nextItemTitle : null,
        key: "next",
        onClick: jumpNextHandle,
        tabIndex: 0,
        onKeyDown: runIfEnterJumpNext,
        className: classNames("".concat(prefixCls, "-jump-next"), _defineProperty({}, "".concat(prefixCls, "-jump-next-custom-icon"), !!jumpNextIcon))
      }, jumpNextContent) : null;
    }
    var left = Math.max(1, current - pageBufferSize);
    var right = Math.min(current + pageBufferSize, allPages);
    if (current - 1 <= pageBufferSize) {
      right = 1 + pageBufferSize * 2;
    }
    if (allPages - current <= pageBufferSize) {
      left = allPages - pageBufferSize * 2;
    }
    for (var _i = left; _i <= right; _i += 1) {
      pagerList.push(/* @__PURE__ */ React__namespace.default.createElement(Pager, _extends({}, pagerProps, {
        key: _i,
        page: _i,
        active: current === _i
      })));
    }
    if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
      pagerList[0] = /* @__PURE__ */ React__namespace.default.cloneElement(pagerList[0], {
        className: classNames("".concat(prefixCls, "-item-after-jump-prev"), pagerList[0].props.className)
      });
      pagerList.unshift(jumpPrev);
    }
    if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
      var lastOne = pagerList[pagerList.length - 1];
      pagerList[pagerList.length - 1] = /* @__PURE__ */ React__namespace.default.cloneElement(lastOne, {
        className: classNames("".concat(prefixCls, "-item-before-jump-next"), lastOne.props.className)
      });
      pagerList.push(jumpNext);
    }
    if (left !== 1) {
      pagerList.unshift(/* @__PURE__ */ React__namespace.default.createElement(Pager, _extends({}, pagerProps, {
        key: 1,
        page: 1
      })));
    }
    if (right !== allPages) {
      pagerList.push(/* @__PURE__ */ React__namespace.default.createElement(Pager, _extends({}, pagerProps, {
        key: allPages,
        page: allPages
      })));
    }
  }
  var prev = renderPrev(prevPage);
  if (prev) {
    var prevDisabled = !hasPrev || !allPages;
    prev = /* @__PURE__ */ React__namespace.default.createElement("li", {
      title: showTitle ? locale$1.prev_page : null,
      onClick: prevHandle,
      tabIndex: prevDisabled ? null : 0,
      onKeyDown: runIfEnterPrev,
      className: classNames("".concat(prefixCls, "-prev"), _defineProperty({}, "".concat(prefixCls, "-disabled"), prevDisabled)),
      "aria-disabled": prevDisabled
    }, prev);
  }
  var next = renderNext(nextPage);
  if (next) {
    var nextDisabled, nextTabIndex;
    if (simple) {
      nextDisabled = !hasNext;
      nextTabIndex = hasPrev ? 0 : null;
    } else {
      nextDisabled = !hasNext || !allPages;
      nextTabIndex = nextDisabled ? null : 0;
    }
    next = /* @__PURE__ */ React__namespace.default.createElement("li", {
      title: showTitle ? locale$1.next_page : null,
      onClick: nextHandle,
      tabIndex: nextTabIndex,
      onKeyDown: runIfEnterNext,
      className: classNames("".concat(prefixCls, "-next"), _defineProperty({}, "".concat(prefixCls, "-disabled"), nextDisabled)),
      "aria-disabled": nextDisabled
    }, next);
  }
  var cls = classNames(prefixCls, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(prefixCls, "-start"), align === "start"), "".concat(prefixCls, "-center"), align === "center"), "".concat(prefixCls, "-end"), align === "end"), "".concat(prefixCls, "-simple"), simple), "".concat(prefixCls, "-disabled"), disabled));
  return /* @__PURE__ */ React__namespace.default.createElement("ul", _extends({
    className: cls,
    style,
    ref: paginationRef
  }, dataOrAriaAttributeProps), totalText, prev, simple ? simplePager : pagerList, next, /* @__PURE__ */ React__namespace.default.createElement(Options, {
    locale: locale$1,
    rootPrefixCls: prefixCls,
    disabled,
    selectPrefixCls,
    changeSize: changePageSize,
    pageSize,
    pageSizeOptions,
    quickGo: shouldDisplayQuickJumper ? handleChange : null,
    goButton: gotoButton,
    showSizeChanger,
    sizeChangerRender
  }));
};
if (process.env.NODE_ENV !== "production") {
  Pagination.displayName = "Pagination";
}
const Status = ({ data }) => {
  const [status, setStatus] = React.useState({
    name: "",
    variant: "success-light"
  });
  React.useEffect(() => {
    const statusMap = {
      0: "Pending Payment",
      1: "Paid",
      2: "Shipped",
      3: "Canceled",
      4: "Expired",
      5: "Canceled by Admin",
      999: "Need Verification"
    };
    if (data in statusMap) {
      setStatus({
        name: statusMap[data],
        variant: "success-light"
        // Optionally vary this based on status
      });
    }
  }, [data]);
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Badge, { children: status.name });
};
var accounting$1 = { exports: {} };
/*!
 * accounting.js v0.4.1
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
(function(module2, exports2) {
  (function(root, undefined$12) {
    var lib2 = {};
    lib2.version = "0.4.1";
    lib2.settings = {
      currency: {
        symbol: "$",
        // default currency symbol is '$'
        format: "%s%v",
        // controls output: %s = symbol, %v = value (can be object, see docs)
        decimal: ".",
        // decimal point separator
        thousand: ",",
        // thousands separator
        precision: 2,
        // decimal places
        grouping: 3
        // digit grouping (not implemented yet)
      },
      number: {
        precision: 0,
        // default precision on numbers is 0
        grouping: 3,
        // digit grouping (not implemented yet)
        thousand: ",",
        decimal: "."
      }
    };
    var nativeMap = Array.prototype.map, nativeIsArray = Array.isArray, toString = Object.prototype.toString;
    function isString2(obj) {
      return !!(obj === "" || obj && obj.charCodeAt && obj.substr);
    }
    function isArray2(obj) {
      return nativeIsArray ? nativeIsArray(obj) : toString.call(obj) === "[object Array]";
    }
    function isObject(obj) {
      return obj && toString.call(obj) === "[object Object]";
    }
    function defaults2(object, defs) {
      var key;
      object = object || {};
      defs = defs || {};
      for (key in defs) {
        if (defs.hasOwnProperty(key)) {
          if (object[key] == null) object[key] = defs[key];
        }
      }
      return object;
    }
    function map2(obj, iterator, context) {
      var results = [], i, j;
      if (!obj) return results;
      if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
      for (i = 0, j = obj.length; i < j; i++) {
        results[i] = iterator.call(context, obj[i], i, obj);
      }
      return results;
    }
    function checkPrecision(val, base) {
      val = Math.round(Math.abs(val));
      return isNaN(val) ? base : val;
    }
    function checkCurrencyFormat(format2) {
      var defaults3 = lib2.settings.currency.format;
      if (typeof format2 === "function") format2 = format2();
      if (isString2(format2) && format2.match("%v")) {
        return {
          pos: format2,
          neg: format2.replace("-", "").replace("%v", "-%v"),
          zero: format2
        };
      } else if (!format2 || !format2.pos || !format2.pos.match("%v")) {
        return !isString2(defaults3) ? defaults3 : lib2.settings.currency.format = {
          pos: defaults3,
          neg: defaults3.replace("%v", "-%v"),
          zero: defaults3
        };
      }
      return format2;
    }
    var unformat2 = lib2.unformat = lib2.parse = function(value, decimal) {
      if (isArray2(value)) {
        return map2(value, function(val) {
          return unformat2(val, decimal);
        });
      }
      value = value || 0;
      if (typeof value === "number") return value;
      decimal = decimal || lib2.settings.number.decimal;
      var regex = new RegExp("[^0-9-" + decimal + "]", ["g"]), unformatted = parseFloat(
        ("" + value).replace(/\((.*)\)/, "-$1").replace(regex, "").replace(decimal, ".")
        // make sure decimal point is standard
      );
      return !isNaN(unformatted) ? unformatted : 0;
    };
    var toFixed = lib2.toFixed = function(value, precision) {
      precision = checkPrecision(precision, lib2.settings.number.precision);
      var power = Math.pow(10, precision);
      return (Math.round(lib2.unformat(value) * power) / power).toFixed(precision);
    };
    var formatNumber = lib2.formatNumber = lib2.format = function(number, precision, thousand, decimal) {
      if (isArray2(number)) {
        return map2(number, function(val) {
          return formatNumber(val, precision, thousand, decimal);
        });
      }
      number = unformat2(number);
      var opts = defaults2(
        isObject(precision) ? precision : {
          precision,
          thousand,
          decimal
        },
        lib2.settings.number
      ), usePrecision = checkPrecision(opts.precision), negative = number < 0 ? "-" : "", base = parseInt(toFixed(Math.abs(number || 0), usePrecision), 10) + "", mod = base.length > 3 ? base.length % 3 : 0;
      return negative + (mod ? base.substr(0, mod) + opts.thousand : "") + base.substr(mod).replace(/(\d{3})(?=\d)/g, "$1" + opts.thousand) + (usePrecision ? opts.decimal + toFixed(Math.abs(number), usePrecision).split(".")[1] : "");
    };
    var formatMoney = lib2.formatMoney = function(number, symbol, precision, thousand, decimal, format2) {
      if (isArray2(number)) {
        return map2(number, function(val) {
          return formatMoney(val, symbol, precision, thousand, decimal, format2);
        });
      }
      number = unformat2(number);
      var opts = defaults2(
        isObject(symbol) ? symbol : {
          symbol,
          precision,
          thousand,
          decimal,
          format: format2
        },
        lib2.settings.currency
      ), formats2 = checkCurrencyFormat(opts.format), useFormat = number > 0 ? formats2.pos : number < 0 ? formats2.neg : formats2.zero;
      return useFormat.replace("%s", opts.symbol).replace("%v", formatNumber(Math.abs(number), checkPrecision(opts.precision), opts.thousand, opts.decimal));
    };
    lib2.formatColumn = function(list, symbol, precision, thousand, decimal, format2) {
      if (!list) return [];
      var opts = defaults2(
        isObject(symbol) ? symbol : {
          symbol,
          precision,
          thousand,
          decimal,
          format: format2
        },
        lib2.settings.currency
      ), formats2 = checkCurrencyFormat(opts.format), padAfterSymbol = formats2.pos.indexOf("%s") < formats2.pos.indexOf("%v") ? true : false, maxLength = 0, formatted = map2(list, function(val, i) {
        if (isArray2(val)) {
          return lib2.formatColumn(val, opts);
        } else {
          val = unformat2(val);
          var useFormat = val > 0 ? formats2.pos : val < 0 ? formats2.neg : formats2.zero, fVal = useFormat.replace("%s", opts.symbol).replace("%v", formatNumber(Math.abs(val), checkPrecision(opts.precision), opts.thousand, opts.decimal));
          if (fVal.length > maxLength) maxLength = fVal.length;
          return fVal;
        }
      });
      return map2(formatted, function(val, i) {
        if (isString2(val) && val.length < maxLength) {
          return padAfterSymbol ? val.replace(opts.symbol, opts.symbol + new Array(maxLength - val.length + 1).join(" ")) : new Array(maxLength - val.length + 1).join(" ") + val;
        }
        return val;
      });
    };
    {
      if (module2.exports) {
        exports2 = module2.exports = lib2;
      }
      exports2.accounting = lib2;
    }
  })();
})(accounting$1, accounting$1.exports);
var accountingExports = accounting$1.exports;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var localeCurrency$1 = {};
var map$1 = {
  AD: "EUR",
  AE: "AED",
  AF: "AFN",
  AG: "XCD",
  AI: "XCD",
  AL: "ALL",
  AM: "AMD",
  AN: "ANG",
  AO: "AOA",
  AR: "ARS",
  AS: "USD",
  AT: "EUR",
  AU: "AUD",
  AW: "AWG",
  AX: "EUR",
  AZ: "AZN",
  BA: "BAM",
  BB: "BBD",
  BD: "BDT",
  BE: "EUR",
  BF: "XOF",
  BG: "BGN",
  BH: "BHD",
  BI: "BIF",
  BJ: "XOF",
  BL: "EUR",
  BM: "BMD",
  BN: "BND",
  BO: "BOB",
  BQ: "USD",
  BR: "BRL",
  BS: "BSD",
  BT: "BTN",
  BV: "NOK",
  BW: "BWP",
  BY: "BYR",
  BZ: "BZD",
  CA: "CAD",
  CC: "AUD",
  CD: "CDF",
  CF: "XAF",
  CG: "XAF",
  CH: "CHF",
  CI: "XOF",
  CK: "NZD",
  CL: "CLP",
  CM: "XAF",
  CN: "CNY",
  CO: "COP",
  CR: "CRC",
  CU: "CUP",
  CV: "CVE",
  CW: "ANG",
  CX: "AUD",
  CY: "EUR",
  CZ: "CZK",
  DE: "EUR",
  DJ: "DJF",
  DK: "DKK",
  DM: "XCD",
  DO: "DOP",
  DZ: "DZD",
  EC: "USD",
  EE: "EUR",
  EG: "EGP",
  EH: "MAD",
  ER: "ERN",
  ES: "EUR",
  ET: "ETB",
  FI: "EUR",
  FJ: "FJD",
  FK: "FKP",
  FM: "USD",
  FO: "DKK",
  FR: "EUR",
  GA: "XAF",
  GB: "GBP",
  GD: "XCD",
  GE: "GEL",
  GF: "EUR",
  GG: "GBP",
  GH: "GHS",
  GI: "GIP",
  GL: "DKK",
  GM: "GMD",
  GN: "GNF",
  GP: "EUR",
  GQ: "XAF",
  GR: "EUR",
  GS: "GBP",
  GT: "GTQ",
  GU: "USD",
  GW: "XOF",
  GY: "GYD",
  HK: "HKD",
  HM: "AUD",
  HN: "HNL",
  HR: "HRK",
  HT: "HTG",
  HU: "HUF",
  ID: "IDR",
  IE: "EUR",
  IL: "ILS",
  IM: "GBP",
  IN: "INR",
  IO: "USD",
  IQ: "IQD",
  IR: "IRR",
  IS: "ISK",
  IT: "EUR",
  JE: "GBP",
  JM: "JMD",
  JO: "JOD",
  JP: "JPY",
  KE: "KES",
  KG: "KGS",
  KH: "KHR",
  KI: "AUD",
  KM: "KMF",
  KN: "XCD",
  KP: "KPW",
  KR: "KRW",
  KW: "KWD",
  KY: "KYD",
  KZ: "KZT",
  LA: "LAK",
  LB: "LBP",
  LC: "XCD",
  LI: "CHF",
  LK: "LKR",
  LR: "LRD",
  LS: "LSL",
  LT: "LTL",
  LU: "EUR",
  LV: "LVL",
  LY: "LYD",
  MA: "MAD",
  MC: "EUR",
  MD: "MDL",
  ME: "EUR",
  MF: "EUR",
  MG: "MGA",
  MH: "USD",
  MK: "MKD",
  ML: "XOF",
  MM: "MMK",
  MN: "MNT",
  MO: "MOP",
  MP: "USD",
  MQ: "EUR",
  MR: "MRO",
  MS: "XCD",
  MT: "EUR",
  MU: "MUR",
  MV: "MVR",
  MW: "MWK",
  MX: "MXN",
  MY: "MYR",
  MZ: "MZN",
  NA: "NAD",
  NC: "XPF",
  NE: "XOF",
  NF: "AUD",
  NG: "NGN",
  NI: "NIO",
  NL: "EUR",
  NO: "NOK",
  NP: "NPR",
  NR: "AUD",
  NU: "NZD",
  NZ: "NZD",
  OM: "OMR",
  PA: "PAB",
  PE: "PEN",
  PF: "XPF",
  PG: "PGK",
  PH: "PHP",
  PK: "PKR",
  PL: "PLN",
  PM: "EUR",
  PN: "NZD",
  PR: "USD",
  PS: "ILS",
  PT: "EUR",
  PW: "USD",
  PY: "PYG",
  QA: "QAR",
  RE: "EUR",
  RO: "RON",
  RS: "RSD",
  RU: "RUB",
  RW: "RWF",
  SA: "SAR",
  SB: "SBD",
  SC: "SCR",
  SD: "SDG",
  SE: "SEK",
  SG: "SGD",
  SH: "SHP",
  SI: "EUR",
  SJ: "NOK",
  SK: "EUR",
  SL: "SLL",
  SM: "EUR",
  SN: "XOF",
  SO: "SOS",
  SR: "SRD",
  ST: "STD",
  SV: "SVC",
  SX: "ANG",
  SY: "SYP",
  SZ: "SZL",
  TC: "USD",
  TD: "XAF",
  TF: "EUR",
  TG: "XOF",
  TH: "THB",
  TJ: "TJS",
  TK: "NZD",
  TL: "USD",
  TM: "TMT",
  TN: "TND",
  TO: "TOP",
  TR: "TRY",
  TT: "TTD",
  TV: "AUD",
  TW: "TWD",
  TZ: "TZS",
  UA: "UAH",
  UG: "UGX",
  UM: "USD",
  US: "USD",
  UY: "UYU",
  UZ: "UZS",
  VA: "EUR",
  VC: "XCD",
  VE: "VEF",
  VG: "USD",
  VI: "USD",
  VN: "VND",
  VU: "VUV",
  WF: "XPF",
  WS: "WST",
  YE: "YER",
  YT: "EUR",
  ZA: "ZAR",
  ZM: "ZMK",
  ZW: "ZWL"
};
var map_1 = map$1;
var map = map_1;
var getCountryCode = function(localeString) {
  var components = localeString.split("_");
  if (components.length == 2) {
    return components.pop();
  }
  components = localeString.split("-");
  if (components.length == 2) {
    return components.pop();
  }
  return localeString;
};
localeCurrency$1.getCurrency = function(locale2) {
  var countryCode2 = getCountryCode(locale2).toUpperCase();
  if (countryCode2 in map) {
    return map[countryCode2];
  }
  return null;
};
localeCurrency$1.getLocales = function(currencyCode) {
  currencyCode = currencyCode.toUpperCase();
  var locales = [];
  for (countryCode in map) {
    if (map[countryCode] === currencyCode) {
      locales.push(countryCode);
    }
  }
  return locales;
};
const AED = {
  code: "AED",
  symbol: "د.إ.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const AFN = {
  code: "AFN",
  symbol: "؋",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const ALL = {
  code: "ALL",
  symbol: "Lek",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const AMD = {
  code: "AMD",
  symbol: "֏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const ANG = {
  code: "ANG",
  symbol: "ƒ",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const AOA = {
  code: "AOA",
  symbol: "Kz",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const ARS = {
  code: "ARS",
  symbol: "$",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const AUD = {
  code: "AUD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const AWG = {
  code: "AWG",
  symbol: "ƒ",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const AZN = {
  code: "AZN",
  symbol: "₼",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BAM = {
  code: "BAM",
  symbol: "КМ",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BBD = {
  code: "BBD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const BDT = {
  code: "BDT",
  symbol: "৳",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 0
};
const BGN = {
  code: "BGN",
  symbol: "лв.",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BHD = {
  code: "BHD",
  symbol: "د.ب.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 3
};
const BIF = {
  code: "BIF",
  symbol: "FBu",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const BMD = {
  code: "BMD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const BND = {
  code: "BND",
  symbol: "$",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const BOB = {
  code: "BOB",
  symbol: "Bs",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BRL = {
  code: "BRL",
  symbol: "R$",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BSD = {
  code: "BSD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const BTC = {
  code: "BTC",
  symbol: "Ƀ",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 8
};
const BTN = {
  code: "BTN",
  symbol: "Nu.",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 1
};
const BWP = {
  code: "BWP",
  symbol: "P",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const BYR = {
  code: "BYR",
  symbol: "р.",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BYN = {
  code: "BYN",
  symbol: "р.",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const BZD = {
  code: "BZD",
  symbol: "BZ$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CAD = {
  code: "CAD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CDF = {
  code: "CDF",
  symbol: "FC",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CHF = {
  code: "CHF",
  symbol: "CHF",
  thousandsSeparator: "'",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const CLP = {
  code: "CLP",
  symbol: "$",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 0
};
const CNY = {
  code: "CNY",
  symbol: "¥",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const COP = {
  code: "COP",
  symbol: "$",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const CRC = {
  code: "CRC",
  symbol: "₡",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CUC = {
  code: "CUC",
  symbol: "CUC",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CUP = {
  code: "CUP",
  symbol: "$MN",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CVE = {
  code: "CVE",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const CZK = {
  code: "CZK",
  symbol: "Kč",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const DJF = {
  code: "DJF",
  symbol: "Fdj",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const DKK = {
  code: "DKK",
  symbol: "kr.",
  thousandsSeparator: "",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const DOP = {
  code: "DOP",
  symbol: "RD$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const DZD = {
  code: "DZD",
  symbol: "د.ج.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const EGP = {
  code: "EGP",
  symbol: "ج.م.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const ERN = {
  code: "ERN",
  symbol: "Nfk",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const ETB = {
  code: "ETB",
  symbol: "ETB",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const EUR = {
  code: "EUR",
  symbol: "€",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const FJD = {
  code: "FJD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const FKP = {
  code: "FKP",
  symbol: "£",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const GBP = {
  code: "GBP",
  symbol: "£",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const GEL = {
  code: "GEL",
  symbol: "GEL",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const GHS = {
  code: "GHS",
  symbol: "₵",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const GIP = {
  code: "GIP",
  symbol: "£",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const GMD = {
  code: "GMD",
  symbol: "D",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const GNF = {
  code: "GNF",
  symbol: "FG",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const GTQ = {
  code: "GTQ",
  symbol: "Q",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const GYD = {
  code: "GYD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const HKD = {
  code: "HKD",
  symbol: "HK$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const HNL = {
  code: "HNL",
  symbol: "L.",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const HRK = {
  code: "HRK",
  symbol: "kn",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const HTG = {
  code: "HTG",
  symbol: "G",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const HUF = {
  code: "HUF",
  symbol: "Ft",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const IDR = {
  code: "IDR",
  symbol: "Rp",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const ILS = {
  code: "ILS",
  symbol: "₪",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const INR = {
  code: "INR",
  symbol: "₹",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const IQD = {
  code: "IQD",
  symbol: "د.ع.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const IRR = {
  code: "IRR",
  symbol: "﷼",
  thousandsSeparator: ",",
  decimalSeparator: "/",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const ISK = {
  code: "ISK",
  symbol: "kr.",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 0
};
const JMD = {
  code: "JMD",
  symbol: "J$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const JOD = {
  code: "JOD",
  symbol: "د.ا.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 3
};
const JPY = {
  code: "JPY",
  symbol: "¥",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const KES = {
  code: "KES",
  symbol: "KSh",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const KGS = {
  code: "KGS",
  symbol: "сом",
  thousandsSeparator: " ",
  decimalSeparator: "-",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const KHR = {
  code: "KHR",
  symbol: "៛",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const KMF = {
  code: "KMF",
  symbol: "CF",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const KPW = {
  code: "KPW",
  symbol: "₩",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const KRW = {
  code: "KRW",
  symbol: "₩",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const KWD = {
  code: "KWD",
  symbol: "د.ك.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 3
};
const KYD = {
  code: "KYD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const KZT = {
  code: "KZT",
  symbol: "₸",
  thousandsSeparator: " ",
  decimalSeparator: "-",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const LAK = {
  code: "LAK",
  symbol: "₭",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const LBP = {
  code: "LBP",
  symbol: "ل.ل.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const LKR = {
  code: "LKR",
  symbol: "₨",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 0
};
const LRD = {
  code: "LRD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const LSL = {
  code: "LSL",
  symbol: "M",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const LYD = {
  code: "LYD",
  symbol: "د.ل.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 3
};
const MAD = {
  code: "MAD",
  symbol: "د.م.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const MDL = {
  code: "MDL",
  symbol: "lei",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const MGA = {
  code: "MGA",
  symbol: "Ar",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const MKD = {
  code: "MKD",
  symbol: "ден.",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const MMK = {
  code: "MMK",
  symbol: "K",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MNT = {
  code: "MNT",
  symbol: "₮",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MOP = {
  code: "MOP",
  symbol: "MOP$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MRO = {
  code: "MRO",
  symbol: "UM",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MTL = {
  code: "MTL",
  symbol: "₤",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MUR = {
  code: "MUR",
  symbol: "₨",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MVR = {
  code: "MVR",
  symbol: "MVR",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 1
};
const MWK = {
  code: "MWK",
  symbol: "MK",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MXN = {
  code: "MXN",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MYR = {
  code: "MYR",
  symbol: "RM",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const MZN = {
  code: "MZN",
  symbol: "MT",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const NAD = {
  code: "NAD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const NGN = {
  code: "NGN",
  symbol: "₦",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const NIO = {
  code: "NIO",
  symbol: "C$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const NOK = {
  code: "NOK",
  symbol: "kr",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const NPR = {
  code: "NPR",
  symbol: "₨",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const NZD = {
  code: "NZD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const OMR = {
  code: "OMR",
  symbol: "﷼",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 3
};
const PAB = {
  code: "PAB",
  symbol: "B/.",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const PEN = {
  code: "PEN",
  symbol: "S/.",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const PGK = {
  code: "PGK",
  symbol: "K",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const PHP = {
  code: "PHP",
  symbol: "₱",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const PKR = {
  code: "PKR",
  symbol: "₨",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const PLN = {
  code: "PLN",
  symbol: "zł",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const PYG = {
  code: "PYG",
  symbol: "₲",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const QAR = {
  code: "QAR",
  symbol: "﷼",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const RON = {
  code: "RON",
  symbol: "L",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const RSD = {
  code: "RSD",
  symbol: "Дин.",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const RUB = {
  code: "RUB",
  symbol: "₽",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const RWF = {
  code: "RWF",
  symbol: "RWF",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const SAR = {
  code: "SAR",
  symbol: "﷼",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const SBD = {
  code: "SBD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SCR = {
  code: "SCR",
  symbol: "₨",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SDD = {
  code: "SDD",
  symbol: "LSd",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SDG = {
  code: "SDG",
  symbol: "£‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SEK = {
  code: "SEK",
  symbol: "kr",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const SGD = {
  code: "SGD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SHP = {
  code: "SHP",
  symbol: "£",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SLL = {
  code: "SLL",
  symbol: "Le",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SOS = {
  code: "SOS",
  symbol: "S",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SRD = {
  code: "SRD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const STD = {
  code: "STD",
  symbol: "Db",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SVC = {
  code: "SVC",
  symbol: "₡",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const SYP = {
  code: "SYP",
  symbol: "£",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const SZL = {
  code: "SZL",
  symbol: "E",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const THB = {
  code: "THB",
  symbol: "฿",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const TJS = {
  code: "TJS",
  symbol: "TJS",
  thousandsSeparator: " ",
  decimalSeparator: ";",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const TMT = {
  code: "TMT",
  symbol: "m",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const TND = {
  code: "TND",
  symbol: "د.ت.‏",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 3
};
const TOP = {
  code: "TOP",
  symbol: "T$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const TRY = {
  code: "TRY",
  symbol: "₺",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const TTD = {
  code: "TTD",
  symbol: "TT$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const TVD = {
  code: "TVD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const TWD = {
  code: "TWD",
  symbol: "NT$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const TZS = {
  code: "TZS",
  symbol: "TSh",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const UAH = {
  code: "UAH",
  symbol: "₴",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const UGX = {
  code: "UGX",
  symbol: "USh",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const USD = {
  code: "USD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const UYU = {
  code: "UYU",
  symbol: "$U",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const UZS = {
  code: "UZS",
  symbol: "сўм",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const VEB = {
  code: "VEB",
  symbol: "Bs.",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const VEF = {
  code: "VEF",
  symbol: "Bs. F.",
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const VND = {
  code: "VND",
  symbol: "₫",
  thousandsSeparator: ".",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 0
};
const VUV = {
  code: "VUV",
  symbol: "VT",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 0
};
const WST = {
  code: "WST",
  symbol: "WS$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const XAF = {
  code: "XAF",
  symbol: "F",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const XCD = {
  code: "XCD",
  symbol: "$",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const XBT = {
  code: "XBT",
  symbol: "Ƀ",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const XOF = {
  code: "XOF",
  symbol: "F",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const XPF = {
  code: "XPF",
  symbol: "F",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const YER = {
  code: "YER",
  symbol: "﷼",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const ZAR = {
  code: "ZAR",
  symbol: "R",
  thousandsSeparator: " ",
  decimalSeparator: ",",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const ZMW = {
  code: "ZMW",
  symbol: "ZK",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const WON = {
  code: "WON",
  symbol: "₩",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
const require$$3 = {
  AED,
  AFN,
  ALL,
  AMD,
  ANG,
  AOA,
  ARS,
  AUD,
  AWG,
  AZN,
  BAM,
  BBD,
  BDT,
  BGN,
  BHD,
  BIF,
  BMD,
  BND,
  BOB,
  BRL,
  BSD,
  BTC,
  BTN,
  BWP,
  BYR,
  BYN,
  BZD,
  CAD,
  CDF,
  CHF,
  CLP,
  CNY,
  COP,
  CRC,
  CUC,
  CUP,
  CVE,
  CZK,
  DJF,
  DKK,
  DOP,
  DZD,
  EGP,
  ERN,
  ETB,
  EUR,
  FJD,
  FKP,
  GBP,
  GEL,
  GHS,
  GIP,
  GMD,
  GNF,
  GTQ,
  GYD,
  HKD,
  HNL,
  HRK,
  HTG,
  HUF,
  IDR,
  ILS,
  INR,
  IQD,
  IRR,
  ISK,
  JMD,
  JOD,
  JPY,
  KES,
  KGS,
  KHR,
  KMF,
  KPW,
  KRW,
  KWD,
  KYD,
  KZT,
  LAK,
  LBP,
  LKR,
  LRD,
  LSL,
  LYD,
  MAD,
  MDL,
  MGA,
  MKD,
  MMK,
  MNT,
  MOP,
  MRO,
  MTL,
  MUR,
  MVR,
  MWK,
  MXN,
  MYR,
  MZN,
  NAD,
  NGN,
  NIO,
  NOK,
  NPR,
  NZD,
  OMR,
  PAB,
  PEN,
  PGK,
  PHP,
  PKR,
  PLN,
  PYG,
  QAR,
  RON,
  RSD,
  RUB,
  RWF,
  SAR,
  SBD,
  SCR,
  SDD,
  SDG,
  SEK,
  SGD,
  SHP,
  SLL,
  SOS,
  SRD,
  STD,
  SVC,
  SYP,
  SZL,
  THB,
  TJS,
  TMT,
  TND,
  TOP,
  TRY,
  TTD,
  TVD,
  TWD,
  TZS,
  UAH,
  UGX,
  USD,
  UYU,
  UZS,
  VEB,
  VEF,
  VND,
  VUV,
  WST,
  XAF,
  XCD,
  XBT,
  XOF,
  XPF,
  YER,
  ZAR,
  ZMW,
  WON
};
const de = {
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const el = {
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  thousandsSeparator: ".",
  decimalSeparator: ",",
  decimalDigits: 2
};
const es = {
  thousandsSeparator: ".",
  decimalSeparator: ",",
  symbolOnLeft: false,
  spaceBetweenAmountAndSymbol: true,
  decimalDigits: 2
};
const it = {
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  thousandsSeparator: ".",
  decimalSeparator: ",",
  decimalDigits: 2
};
const nl = {
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  thousandsSeparator: ".",
  decimalSeparator: ",",
  decimalDigits: 2
};
const require$$4 = {
  de,
  el,
  "en-US": {
    thousandsSeparator: ",",
    decimalSeparator: ".",
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: false,
    decimalDigits: 2
  },
  "en-IE": {
    symbolOnLeft: true,
    thousandsSeparator: ",",
    decimalSeparator: ".",
    spaceBetweenAmountAndSymbol: true,
    decimalDigits: 2
  },
  "zh-CN": {
    thousandsSeparator: ",",
    decimalSeparator: ".",
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: false,
    decimalDigits: 2
  },
  es,
  it,
  nl
};
var accounting = accountingExports;
var assign = objectAssign;
var localeCurrency = localeCurrency$1;
var currencies = require$$3;
var localeFormats = require$$4;
var defaultCurrency = {
  symbol: "",
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbolOnLeft: true,
  spaceBetweenAmountAndSymbol: false,
  decimalDigits: 2
};
var defaultLocaleFormat = {};
var formatMapping = [
  {
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: false,
    format: {
      pos: "%s%v",
      neg: "-%s%v",
      zero: "%s%v"
    }
  },
  {
    symbolOnLeft: true,
    spaceBetweenAmountAndSymbol: true,
    format: {
      pos: "%s %v",
      neg: "-%s %v",
      zero: "%s %v"
    }
  },
  {
    symbolOnLeft: false,
    spaceBetweenAmountAndSymbol: false,
    format: {
      pos: "%v%s",
      neg: "-%v%s",
      zero: "%v%s"
    }
  },
  {
    symbolOnLeft: false,
    spaceBetweenAmountAndSymbol: true,
    format: {
      pos: "%v %s",
      neg: "-%v %s",
      zero: "%v %s"
    }
  }
];
function format(value, options) {
  var code = options.code || options.locale && localeCurrency.getCurrency(options.locale);
  var localeMatch = /^([a-z]+)([_-]([a-z]+))?$/i.exec(options.locale) || [];
  var language = localeMatch[1];
  var region = localeMatch[3];
  var localeFormat = assign(
    {},
    defaultLocaleFormat,
    localeFormats[language] || {},
    localeFormats[language + "-" + region] || {}
  );
  var currency = assign({}, defaultCurrency, findCurrency(code), localeFormat);
  var symbolOnLeft = currency.symbolOnLeft;
  var spaceBetweenAmountAndSymbol = currency.spaceBetweenAmountAndSymbol;
  var format2 = formatMapping.filter(function(f) {
    return f.symbolOnLeft == symbolOnLeft && f.spaceBetweenAmountAndSymbol == spaceBetweenAmountAndSymbol;
  })[0].format;
  return accounting.formatMoney(value, {
    symbol: isUndefined(options.symbol) ? currency.symbol : options.symbol,
    decimal: isUndefined(options.decimal) ? currency.decimalSeparator : options.decimal,
    thousand: isUndefined(options.thousand) ? currency.thousandsSeparator : options.thousand,
    precision: typeof options.precision === "number" ? options.precision : currency.decimalDigits,
    format: ["string", "object"].indexOf(typeof options.format) > -1 ? options.format : format2
  });
}
function findCurrency(currencyCode) {
  return currencies[currencyCode];
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function unformat(value, options) {
  var code = options.code || options.locale && localeCurrency.getCurrency(options.locale);
  var localeFormat = localeFormats[options.locale] || defaultLocaleFormat;
  var currency = assign({}, defaultCurrency, findCurrency(code), localeFormat);
  var decimal = isUndefined(options.decimal) ? currency.decimalSeparator : options.decimal;
  return accounting.unformat(value, decimal);
}
var currencyFormatter = {
  defaultCurrency,
  get currencies() {
    return Object.keys(currencies).map(function(key) {
      return currencies[key];
    });
  },
  findCurrency,
  format,
  unformat
};
const currencies$1 = /* @__PURE__ */ getDefaultExportFromCjs(currencyFormatter);
const money = (data = 0) => {
  return currencies$1.format(data, {
    code: "IDR",
    symbol: "IDR",
    // @ts-ignore
    decimalDigits: 2,
    decimalSeparator: ",",
    thousandsSeparator: ".",
    spaceBetweenAmountAndSymbol: true,
    symbolOnLeft: true,
    format: "%s %v"
  });
};
dayjs.extend(utc);
const HomePage = () => {
  const [searchParams] = reactRouterDom.useSearchParams();
  const [hasPermission, setHasPermission] = React.useState(false);
  const { formatMessage } = reactIntl.useIntl();
  const [orders, setOrders] = React.useState([]);
  const [pagination, setPagination] = React.useState([]);
  const navigate = reactRouterDom.useNavigate();
  const page = searchParams.get("page");
  const status = searchParams.get("status");
  const q = searchParams.get("q");
  const fetchApi = async () => {
    let payload = {
      page: page ?? 0,
      ...status && { status },
      ...q && { q }
    };
    const dataParams = qs.stringify(payload, {
      arrayFormat: "repeat"
    });
    const response = await fetch(
      `/api/strapi-5-orders/orders?${dataParams}`
    );
    const dataJson = await response.json();
    if (dataJson?.data) {
      setOrders(dataJson.data);
    }
    if (dataJson?.pagination) {
      setPagination(dataJson.pagination);
    }
  };
  React.useEffect(() => {
    if (!searchParams.get("page")) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", "0");
      navigate({ search: `?${newParams.toString()}` }, { replace: true });
    }
  }, [searchParams, navigate]);
  React.useEffect(() => {
    if (page !== null) {
      fetchApi();
    }
  }, [page, status, q]);
  const handleSearch = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("q", value);
    } else {
      newParams.delete("q");
    }
    newParams.set("page", "0");
    navigate({ search: `?${newParams.toString()}` });
  };
  const handleStatusChange = (value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "all") {
      newParams.delete("status");
    } else {
      newParams.set("status", value);
    }
    newParams.set("page", "0");
    navigate({ search: `?${newParams.toString()}` });
  };
  const handlePaginate = (page2) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page2);
    navigate({ search: `?${newParams.toString()}` });
  };
  const divItemRender = (current, type2, element) => {
    if (type2 === "prev") {
      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.PreviousLink, {});
    }
    if (type2 === "next") {
      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.NextLink, {});
    }
    if (type2 === "page") {
      return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: current });
    }
    return element;
  };
  return /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Protect, { permissions: index.pluginPermissions.view, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { style: { marginTop: 24, marginLeft: 16, marginRight: 16 }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "alpha", as: "h2", children: "Orders" }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Flex,
      {
        style: {
          width: 350,
          marginBottom: 24,
          marginTop: 24,
          gap: 23,
          position: "relative"
        },
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Searchbar,
            {
              name: "searchbar",
              onChange: (e) => handleSearch(e.target.value),
              value: q || "",
              placeholder: "Search orders...",
              onClear: () => handleSearch("")
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { style: { gap: 12 }, children: [
            /* @__PURE__ */ jsxRuntime.jsx(icons.Filter, {}),
            /* @__PURE__ */ jsxRuntime.jsxs(
              designSystem.SingleSelect,
              {
                style: { width: "100%" },
                value: status || "all",
                onChange: handleStatusChange,
                placeholder: "Filter by status",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "all", children: "All" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "0", children: "Pending Payment" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "1", children: "Paid" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "2", children: "Shipped" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "3", children: "Canceled" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "4", children: "Expired" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "5", children: "Canceled by Admin" }),
                  /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "999", children: "Need Verification" })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Table, { colCount: 20, rowCount: 9, footer: void 0, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Thead, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "No" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Date" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Order Id" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Name" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Email" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Courier" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Airwaybill" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Total" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Status" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Th, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "sigma", children: "Actions" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Tbody, { children: orders && orders.length > 0 && orders.map((item, key) => /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Tr, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: item.id }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: dayjs(item.createdAt).format("DD/MM/YYYY HH:mm") }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: item.order_id }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: item.name }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: item.email }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { style: { textTransform: "uppercase" }, children: item.shipping_service }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: item?.airwaybill_no ?? "-" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: money(item.grand_total) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: /* @__PURE__ */ jsxRuntime.jsx(Status, { data: item.status }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Td, { style: { display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.IconButton, { onClick: () => navigate(`/plugins/${index.PLUGIN_ID}/${item.documentId}`), label: "Edit", noBorder: true, children: /* @__PURE__ */ jsxRuntime.jsx(icons.Eye, {}) }) })
      ] }, key)) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Flex,
      {
        style: {
          justifyContent: "flex-end",
          marginTop: 18
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(
          Pagination,
          {
            onChange: handlePaginate,
            current: pagination?.page ? pagination?.page : 1,
            pageSize: pagination?.pageSize ? pagination?.pageSize : 1,
            total: pagination?.total ? pagination?.total : 0,
            itemRender: divItemRender,
            showTitle: false,
            showLessItems: true,
            defaultCurrent: 1,
            style: {
              display: "flex",
              gap: 8,
              alignItems: "center"
            }
          }
        )
      }
    )
  ] }) }) });
};
function OrderItem({ data, style }) {
  let subtotal = data.regular_price * data.qty;
  if (data?.sale_price) {
    subtotal = data.sale_price * data.qty;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    designSystem.Flex,
    {
      style: {
        ...style,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
        justifyContent: "space-between",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.Box,
          {
            style: {
              display: "flex",
              flexDirection: "column",
              flex: "1 1 0"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h6", children: data.name }),
              data.options && data.options.length > 0 && data.options.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.Typography,
                {
                  style: {
                    textTransform: "capitalize"
                  },
                  children: [
                    item.attribute,
                    " : ",
                    item?.option?.name
                  ]
                },
                i
              )),
              /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
                "SKU : ",
                data.sku
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.Box,
          {
            style: {
              flex: "1 1 0",
              minWidth: "25%"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
                money(data.regular_price),
                " "
              ] }),
              data.sale_price && data.regular_price != data?.sale_price && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
                "- (",
                money(data.sale_price),
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: " x " }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: data.qty })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          designSystem.Box,
          {
            style: {
              paddingLeft: 10,
              paddingRight: 10
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: money(subtotal) })
          }
        )
      ]
    }
  );
}
dayjs.extend(utc);
const OrderSlug = () => {
  const { id } = reactRouterDom.useParams();
  const [order, setOrder] = React.useState(initType);
  React.useEffect(() => {
    if (!id) return;
    const fetchApi = async () => {
      const response = await fetch(`/api/strapi-5-orders/orders/${id}`);
      const data = await response.json();
      const provinceSplit = data.province.split("||");
      const citySplit = data.city.split("||");
      const districtSplit = data.district.split("||");
      const subdistrictSplit = data.subdistrict.split("||");
      data.province = provinceSplit.length > 0 ? provinceSplit[0] : province.city;
      data.city = citySplit.length > 0 ? citySplit[1] : data.city;
      data.district = districtSplit.length > 0 ? districtSplit[1] : data.district;
      data.subdistrict = subdistrictSplit.length > 0 ? subdistrictSplit[1] : data.subdistrict;
      setOrder(data);
    };
    fetchApi();
  }, [id]);
  const subtotal = React.useCallback(() => {
    let count = 0;
    if (order?.order_item?.length > 0) {
      count = order?.order_item?.reduce((acc, prev) => {
        return acc + prev.subtotal;
      }, 0);
    }
    return count;
  }, [order]);
  const subQty = React.useCallback(() => {
    let count = 0;
    if (order?.order_item?.length > 0) {
      count = order?.order_item.reduce((acc, prev) => {
        return acc + prev.qty;
      }, 0);
    }
    return count;
  }, [order]);
  return /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Protect, { permissions: index.pluginPermissions.view, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Main, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { padding: 8, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { style: { gap: "1rem" }, direction: "column", alignItems: "flex-start", children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { variant: "alpha", as: "h2", children: [
        "# ",
        order.order_id
      ] }),
      order.createdAt && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h6", children: dayjs(order.createdAt).utc().format("DD/MM/YYYY HH:mm") })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Flex,
      {
        style: {
          width: "66%"
        },
        direction: "column",
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(
            designSystem.Flex,
            {
              style: {
                width: "100%"
              },
              direction: "column",
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Box,
                  {
                    background: "neutral0",
                    style: {
                      width: "100%",
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                      padding: 16
                    },
                    children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h5", children: "Order Item" })
                  }
                ),
                /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Flex,
                  {
                    style: {
                      flexDirection: "column",
                      borderLeft: "1px",
                      borderRight: "1px",
                      borderBottom: "px",
                      borderColor: "#212134",
                      borderStyle: "solid",
                      width: "100%"
                    },
                    children: order.order_item && order.order_item.length > 0 && order.order_item.map((item, i) => /* @__PURE__ */ jsxRuntime.jsx(
                      OrderItem,
                      {
                        data: item,
                        style: {
                          borderBottom: order.order_item[order.order_item.length - 1] == i ? "0px" : "1px",
                          borderColor: "#212134",
                          borderStyle: "solid"
                        }
                      },
                      i
                    ))
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Flex,
            {
              style: {
                marginTop: 24,
                width: "100%",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.Box,
                {
                  style: {
                    width: "100%"
                  },
                  background: "neutral0",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.Box,
                      {
                        style: { padding: 16 },
                        children: /* @__PURE__ */ jsxRuntime.jsx(Status, { data: order?.status })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsxs(
                      designSystem.Flex,
                      {
                        style: {
                          flexDirection: "column",
                          marginBottom: 16
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { style: {
                            width: "100%",
                            justifyContent: "space-between",
                            paddingLeft: 16,
                            paddingRight: 16,
                            paddingBottom: 8,
                            borderBottom: "1px solid #181826"
                          }, children: [
                            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: "Subtotal" }),
                            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { style: {
                              flex: "1 1 0",
                              paddingLeft: 16,
                              paddingRight: 16
                            }, children: [
                              subQty(),
                              " item"
                            ] }),
                            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: money(subtotal()) })
                          ] }),
                          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { style: {
                            width: "100%",
                            justifyContent: "space-between",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 16,
                            paddingRight: 16,
                            borderBottom: "1px solid #181826"
                          }, children: [
                            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: "Shipping" }),
                            /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { style: {
                              flex: "1 1 0",
                              paddingLeft: 16,
                              paddingRight: 16
                            }, children: [
                              order?.shipping_total_weight_ori,
                              " Kg ~ ",
                              order.shipping_service
                            ] }),
                            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: money(order?.shipping_cost) })
                          ] }),
                          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { style: {
                            width: "100%",
                            justifyContent: "space-between",
                            paddingTop: 8,
                            paddingLeft: 16,
                            paddingRight: 16
                          }, children: [
                            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: "Total" }),
                            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: money(order?.grand_total) })
                          ] })
                        ]
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Flex,
            {
              style: {
                marginTop: 24,
                width: "100%",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.Box,
                {
                  style: {
                    width: "100%"
                  },
                  background: "neutral0",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.Box,
                      {
                        style: { padding: 16 },
                        children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { as: "h6", children: "Shipping Information" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.Flex,
                      {
                        style: {
                          flexDirection: "column",
                          marginBottom: 16
                        },
                        background: "neutral0",
                        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { style: {
                          width: "100%",
                          justifyContent: "space-between",
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingBottom: 8,
                          flexDirection: "column",
                          alignItems: "flex-start"
                        }, children: [
                          /* @__PURE__ */ jsxRuntime.jsx(
                            designSystem.Typography,
                            {
                              as: "h6",
                              style: {
                                textTransform: "uppercase"
                              },
                              children: order?.name
                            }
                          ),
                          /* @__PURE__ */ jsxRuntime.jsx(
                            designSystem.Typography,
                            {
                              as: "h6",
                              style: {
                                textTransform: "uppercase"
                              },
                              children: order.address
                            }
                          ),
                          /* @__PURE__ */ jsxRuntime.jsxs(
                            designSystem.Typography,
                            {
                              as: "h6",
                              style: {
                                textTransform: "uppercase"
                              },
                              children: [
                                ", ",
                                order.subdistrict,
                                ", ",
                                order.district,
                                ", ",
                                order.city,
                                ", ",
                                order.province,
                                " - ",
                                order.country
                              ]
                            }
                          )
                        ] })
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Flex,
            {
              style: {
                marginTop: 24,
                width: "100%",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.Box,
                {
                  style: {
                    width: "100%"
                  },
                  background: "neutral0",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.Box,
                      {
                        style: { padding: 16 },
                        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { as: "h6", children: [
                          "Airwaybill ",
                          order.shipping_service
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      designSystem.Flex,
                      {
                        style: {
                          flexDirection: "column",
                          marginBottom: 16
                        },
                        background: "neutral0",
                        children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { style: {
                          width: "100%",
                          justifyContent: "space-between",
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingBottom: 8,
                          flexDirection: "column",
                          alignItems: "flex-start"
                        }, children: /* @__PURE__ */ jsxRuntime.jsx(
                          designSystem.Typography,
                          {
                            as: "h6",
                            style: {
                              textTransform: "uppercase"
                            },
                            children: order.airwaybill_no ?? "N/A"
                          }
                        ) })
                      }
                    )
                  ]
                }
              )
            }
          )
        ]
      }
    )
  ] }) }) });
};
const initType = {
  id: null,
  uuid: null,
  order_id: null,
  name: null,
  email: null,
  address: null,
  country: null,
  province: null,
  city: null,
  district: null,
  subdistrict: null,
  orderal_code: null,
  mobile: null,
  status: 0,
  total: null,
  discount: null,
  shipping_service: null,
  shipping_total_weight: null,
  shipping_cost: null,
  shipping_cost_ori: null,
  admin_fee: null,
  grand_total: null,
  unique_code: null,
  promo_code: null,
  payment_reminder: false,
  snap_js_json: null,
  snap_trans_id: null,
  snap_callback: null,
  stock_returned: null,
  airwaybill_no: null,
  note: null,
  arrived_at: null,
  payment_confirmed: false,
  payment_type: null,
  cancel_note: null,
  cancelled_at: null,
  settlement_at: null,
  bank: null,
  va_number: null,
  paid_at: null,
  fulfilment_at: null,
  is_po: false,
  is_fulfilled: false,
  midtrans_code_suffix: false,
  is_payment_change: false,
  insurance_ammount: null,
  is_req_pickup: false,
  shippment_response: null,
  shipping_total_weight_ori: null,
  transaction_fee: null,
  snap_token: null,
  origin: null,
  meta: null,
  createdAt: null,
  updatedAt: null,
  user_id: null,
  image_story: null,
  image_validate: {
    id: null,
    name: null,
    alternativeText: null,
    caption: null,
    width: null,
    height: null,
    url: "#"
  },
  order_item: [],
  createdBy: {
    id: null,
    firstname: null,
    lastname: null,
    username: null
  },
  updatedBy: {
    id: null,
    firstname: null,
    lastname: null,
    username: null
  }
};
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: ":id", element: /* @__PURE__ */ jsxRuntime.jsx(OrderSlug, {}) }),
    /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Error, {}) })
  ] });
};
exports.App = App;
