/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ti(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const W = {}, Ot = [], be = () => {
}, As = () => !1, Jn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ni = (e) => e.startsWith("onUpdate:"), re = Object.assign, ri = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Os = Object.prototype.hasOwnProperty, H = (e, t) => Os.call(e, t), R = Array.isArray, Ct = (e) => Zn(e) === "[object Map]", $a = (e) => Zn(e) === "[object Set]", L = (e) => typeof e == "function", ne = (e) => typeof e == "string", kt = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Ba = (e) => (q(e) || L(e)) && L(e.then) && L(e.catch), Ka = Object.prototype.toString, Zn = (e) => Ka.call(e), Cs = (e) => Zn(e).slice(8, -1), Wa = (e) => Zn(e) === "[object Object]", ii = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ ti(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ps = /-(\w)/g, je = Qn((e) => e.replace(Ps, (t, n) => n ? n.toUpperCase() : "")), Is = /\B([A-Z])/g, Ae = Qn(
  (e) => e.replace(Is, "-$1").toLowerCase()
), Ga = Qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), gr = Qn((e) => e ? `on${Ga(e)}` : ""), it = (e, t) => !Object.is(e, t), vr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ya = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ts = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ji = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let zi;
const Xa = () => zi || (zi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = ne(r) ? Ds(r) : Pt(r);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (ne(e) || q(e))
    return e;
}
const Ns = /;(?![^(]*\))/g, Rs = /:([^]+)/, Ms = /\/\*[^]*?\*\//g;
function Ds(e) {
  const t = {};
  return e.replace(Ms, "").split(Ns).forEach((n) => {
    if (n) {
      const r = n.split(Rs);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function er(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const r = er(e[n]);
      r && (t += r + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ls = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Us = /* @__PURE__ */ ti(Ls);
function qa(e) {
  return !!e || e === "";
}
const Xe = (e) => ne(e) ? e : e == null ? "" : R(e) || q(e) && (e.toString === Ka || !L(e.toString)) ? JSON.stringify(e, Ja, 2) : String(e), Ja = (e, t) => t && t.__v_isRef ? Ja(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], a) => (n[br(r, a) + " =>"] = i, n),
    {}
  )
} : $a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => br(n))
} : kt(t) ? br(t) : q(t) && !R(t) && !Wa(t) ? String(t) : t, br = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    kt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Se;
class Fs {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Se, !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Se;
      try {
        return Se = this, t();
      } finally {
        Se = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Se = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Se = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function js(e, t = Se) {
  t && t.active && t.effects.push(e);
}
function zs() {
  return Se;
}
let bt;
class ai {
  constructor(t, n, r, i) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, js(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ke();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Hs(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), We();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = rt, n = bt;
    try {
      return rt = !0, bt = this, this._runnings++, Hi(this), this.fn();
    } finally {
      Vi(this), this._runnings--, bt = n, rt = t;
    }
  }
  stop() {
    this.active && (Hi(this), Vi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Hs(e) {
  return e.value;
}
function Hi(e) {
  e._trackId++, e._depsLength = 0;
}
function Vi(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Za(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Za(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let rt = !0, Tr = 0;
const Qa = [];
function Ke() {
  Qa.push(rt), rt = !1;
}
function We() {
  const e = Qa.pop();
  rt = e === void 0 ? !0 : e;
}
function oi() {
  Tr++;
}
function si() {
  for (Tr--; !Tr && Nr.length; )
    Nr.shift()();
}
function eo(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Za(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Nr = [];
function to(e, t, n) {
  oi();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Nr.push(r.scheduler)));
  }
  si();
}
const no = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Rr = /* @__PURE__ */ new WeakMap(), yt = Symbol(""), Mr = Symbol("");
function ge(e, t, n) {
  if (rt && bt) {
    let r = Rr.get(e);
    r || Rr.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = no(() => r.delete(n))), eo(
      bt,
      i
    );
  }
}
function ze(e, t, n, r, i, a) {
  const o = Rr.get(e);
  if (!o)
    return;
  let s = [];
  if (t === "clear")
    s = [...o.values()];
  else if (n === "length" && R(e)) {
    const l = Number(r);
    o.forEach((f, u) => {
      (u === "length" || !kt(u) && u >= l) && s.push(f);
    });
  } else
    switch (n !== void 0 && s.push(o.get(n)), t) {
      case "add":
        R(e) ? ii(n) && s.push(o.get("length")) : (s.push(o.get(yt)), Ct(e) && s.push(o.get(Mr)));
        break;
      case "delete":
        R(e) || (s.push(o.get(yt)), Ct(e) && s.push(o.get(Mr)));
        break;
      case "set":
        Ct(e) && s.push(o.get(yt));
        break;
    }
  oi();
  for (const l of s)
    l && to(
      l,
      4
    );
  si();
}
const Vs = /* @__PURE__ */ ti("__proto__,__v_isRef,__isVue"), ro = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kt)
), $i = /* @__PURE__ */ $s();
function $s() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = $(this);
      for (let a = 0, o = this.length; a < o; a++)
        ge(r, "get", a + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map($)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ke(), oi();
      const r = $(this)[t].apply(this, n);
      return si(), We(), r;
    };
  }), e;
}
function Bs(e) {
  kt(e) || (e = String(e));
  const t = $(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class io {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const i = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (i ? a ? fo : co : a ? lo : so).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = R(t);
    if (!i) {
      if (o && H($i, n))
        return Reflect.get($i, n, r);
      if (n === "hasOwnProperty")
        return Bs;
    }
    const s = Reflect.get(t, n, r);
    return (kt(n) ? ro.has(n) : Vs(n)) || (i || ge(t, "get", n), a) ? s : me(s) ? o && ii(n) ? s : s.value : q(s) ? i ? uo(s) : ci(s) : s;
  }
}
class ao extends io {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let a = t[n];
    if (!this._isShallow) {
      const l = Zt(a);
      if (!Vn(r) && !Zt(r) && (a = $(a), r = $(r)), !R(t) && me(a) && !me(r))
        return l ? !1 : (a.value = r, !0);
    }
    const o = R(t) && ii(n) ? Number(n) < t.length : H(t, n), s = Reflect.set(t, n, r, i);
    return t === $(i) && (o ? it(r, a) && ze(t, "set", n, r) : ze(t, "add", n, r)), s;
  }
  deleteProperty(t, n) {
    const r = H(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && ze(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!kt(n) || !ro.has(n)) && ge(t, "has", n), r;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      R(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class oo extends io {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ks = /* @__PURE__ */ new ao(), Ws = /* @__PURE__ */ new oo(), Gs = /* @__PURE__ */ new ao(
  !0
), Ys = /* @__PURE__ */ new oo(!0), li = (e) => e, tr = (e) => Reflect.getPrototypeOf(e);
function bn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = $(e), a = $(t);
  n || (it(t, a) && ge(i, "get", t), ge(i, "get", a));
  const { has: o } = tr(i), s = r ? li : n ? fi : Qt;
  if (o.call(i, t))
    return s(e.get(t));
  if (o.call(i, a))
    return s(e.get(a));
  e !== i && e.get(t);
}
function yn(e, t = !1) {
  const n = this.__v_raw, r = $(n), i = $(e);
  return t || (it(e, i) && ge(r, "has", e), ge(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function _n(e, t = !1) {
  return e = e.__v_raw, !t && ge($(e), "iterate", yt), Reflect.get(e, "size", e);
}
function Bi(e) {
  e = $(e);
  const t = $(this);
  return tr(t).has.call(t, e) || (t.add(e), ze(t, "add", e, e)), this;
}
function Ki(e, t) {
  t = $(t);
  const n = $(this), { has: r, get: i } = tr(n);
  let a = r.call(n, e);
  a || (e = $(e), a = r.call(n, e));
  const o = i.call(n, e);
  return n.set(e, t), a ? it(t, o) && ze(n, "set", e, t) : ze(n, "add", e, t), this;
}
function Wi(e) {
  const t = $(this), { has: n, get: r } = tr(t);
  let i = n.call(t, e);
  i || (e = $(e), i = n.call(t, e)), r && r.call(t, e);
  const a = t.delete(e);
  return i && ze(t, "delete", e, void 0), a;
}
function Gi() {
  const e = $(this), t = e.size !== 0, n = e.clear();
  return t && ze(e, "clear", void 0, void 0), n;
}
function wn(e, t) {
  return function(r, i) {
    const a = this, o = a.__v_raw, s = $(o), l = t ? li : e ? fi : Qt;
    return !e && ge(s, "iterate", yt), o.forEach((f, u) => r.call(i, l(f), l(u), a));
  };
}
function xn(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, a = $(i), o = Ct(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, f = i[e](...r), u = n ? li : t ? fi : Qt;
    return !t && ge(
      a,
      "iterate",
      l ? Mr : yt
    ), {
      // iterator protocol
      next() {
        const { value: m, done: v } = f.next();
        return v ? { value: m, done: v } : {
          value: s ? [u(m[0]), u(m[1])] : u(m),
          done: v
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function qe(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xs() {
  const e = {
    get(a) {
      return bn(this, a);
    },
    get size() {
      return _n(this);
    },
    has: yn,
    add: Bi,
    set: Ki,
    delete: Wi,
    clear: Gi,
    forEach: wn(!1, !1)
  }, t = {
    get(a) {
      return bn(this, a, !1, !0);
    },
    get size() {
      return _n(this);
    },
    has: yn,
    add: Bi,
    set: Ki,
    delete: Wi,
    clear: Gi,
    forEach: wn(!1, !0)
  }, n = {
    get(a) {
      return bn(this, a, !0);
    },
    get size() {
      return _n(this, !0);
    },
    has(a) {
      return yn.call(this, a, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: wn(!0, !1)
  }, r = {
    get(a) {
      return bn(this, a, !0, !0);
    },
    get size() {
      return _n(this, !0);
    },
    has(a) {
      return yn.call(this, a, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: wn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    e[a] = xn(a, !1, !1), n[a] = xn(a, !0, !1), t[a] = xn(a, !1, !0), r[a] = xn(
      a,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  qs,
  Js,
  Zs,
  Qs
] = /* @__PURE__ */ Xs();
function nr(e, t) {
  const n = t ? e ? Qs : Zs : e ? Js : qs;
  return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    H(n, i) && i in r ? n : r,
    i,
    a
  );
}
const el = {
  get: /* @__PURE__ */ nr(!1, !1)
}, tl = {
  get: /* @__PURE__ */ nr(!1, !0)
}, nl = {
  get: /* @__PURE__ */ nr(!0, !1)
}, rl = {
  get: /* @__PURE__ */ nr(!0, !0)
}, so = /* @__PURE__ */ new WeakMap(), lo = /* @__PURE__ */ new WeakMap(), co = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap();
function il(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function al(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : il(Cs(e));
}
function ci(e) {
  return Zt(e) ? e : rr(
    e,
    !1,
    Ks,
    el,
    so
  );
}
function ol(e) {
  return rr(
    e,
    !1,
    Gs,
    tl,
    lo
  );
}
function uo(e) {
  return rr(
    e,
    !0,
    Ws,
    nl,
    co
  );
}
function kn(e) {
  return rr(
    e,
    !0,
    Ys,
    rl,
    fo
  );
}
function rr(e, t, n, r, i) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const o = al(e);
  if (o === 0)
    return e;
  const s = new Proxy(
    e,
    o === 2 ? r : n
  );
  return i.set(e, s), s;
}
function Kt(e) {
  return Zt(e) ? Kt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Zt(e) {
  return !!(e && e.__v_isReadonly);
}
function Vn(e) {
  return !!(e && e.__v_isShallow);
}
function mo(e) {
  return e ? !!e.__v_raw : !1;
}
function $(e) {
  const t = e && e.__v_raw;
  return t ? $(t) : e;
}
function sl(e) {
  return Object.isExtensible(e) && Ya(e, "__v_skip", !0), e;
}
const Qt = (e) => q(e) ? ci(e) : e, fi = (e) => q(e) ? uo(e) : e;
class po {
  constructor(t, n, r, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ai(
      () => t(this._value),
      () => Mn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const t = $(this);
    return (!t._cacheable || t.effect.dirty) && it(t._value, t._value = t.effect.run()) && Mn(t, 4), ho(t), t.effect._dirtyLevel >= 2 && Mn(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function ll(e, t, n = !1) {
  let r, i;
  const a = L(e);
  return a ? (r = e, i = be) : (r = e.get, i = e.set), new po(r, i, a || !i, n);
}
function ho(e) {
  var t;
  rt && bt && (e = $(e), eo(
    bt,
    (t = e.dep) != null ? t : e.dep = no(
      () => e.dep = void 0,
      e instanceof po ? e : void 0
    )
  ));
}
function Mn(e, t = 4, n) {
  e = $(e);
  const r = e.dep;
  r && to(
    r,
    t
  );
}
function me(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ft(e) {
  return cl(e, !1);
}
function cl(e, t) {
  return me(e) ? e : new fl(e, t);
}
class fl {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : $(t), this._value = n ? t : Qt(t);
  }
  get value() {
    return ho(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Vn(t) || Zt(t);
    t = n ? t : $(t), it(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Qt(t), Mn(this, 4));
  }
}
function Ze(e) {
  return me(e) ? e.value : e;
}
const ul = {
  get: (e, t, n) => Ze(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return me(i) && !me(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function go(e) {
  return Kt(e) ? e : new Proxy(e, ul);
}
var Qe = { NVM_INC: "/Users/cm/.nvm/versions/node/v19.7.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", TERM_PROGRAM_VERSION: "1.89.0", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "9.8.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v19.7.0/bin", npm_config_user_agent: "npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
const Wt = [];
function dl(e, ...t) {
  Ke();
  const n = Wt.length ? Wt[Wt.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = ml();
  if (r)
    He(
      r,
      n,
      11,
      [
        e + t.map((a) => {
          var o, s;
          return (s = (o = a.toString) == null ? void 0 : o.call(a)) != null ? s : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: a }) => `at <${Wo(n, a.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    i.length && a.push(`
`, ...pl(i)), console.warn(...a);
  }
  We();
}
function ml() {
  let e = Wt[Wt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function pl(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...hl(n));
  }), t;
}
function hl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Wo(
    e.component,
    e.type,
    r
  )}`, a = ">" + n;
  return e.props ? [i, ...gl(e.props), a] : [i + a];
}
function gl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...vo(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function vo(e, t, n) {
  return ne(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : me(t) ? (t = vo(e, $(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = $(t), n ? t : [`${e}=`, t]);
}
function He(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    ir(i, t, n);
  }
}
function Pe(e, t, n, r) {
  if (L(e)) {
    const i = He(e, t, n, r);
    return i && Ba(i) && i.catch((a) => {
      ir(a, t, n);
    }), i;
  }
  if (R(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(Pe(e[a], t, n, r));
    return i;
  }
}
function ir(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const o = t.proxy, s = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, o, s) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ke(), He(
        l,
        null,
        10,
        [e, o, s]
      ), We();
      return;
    }
  }
  vl(e, n, i, r);
}
function vl(e, t, n, r = !0) {
  console.error(e);
}
let en = !1, Dr = !1;
const ce = [];
let Me = 0;
const It = [];
let et = null, pt = 0;
const bo = /* @__PURE__ */ Promise.resolve();
let ui = null;
function yo(e) {
  const t = ui || bo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bl(e) {
  let t = Me + 1, n = ce.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = ce[r], a = tn(i);
    a < e || a === e && i.pre ? t = r + 1 : n = r;
  }
  return t;
}
function di(e) {
  (!ce.length || !ce.includes(
    e,
    en && e.allowRecurse ? Me + 1 : Me
  )) && (e.id == null ? ce.push(e) : ce.splice(bl(e.id), 0, e), _o());
}
function _o() {
  !en && !Dr && (Dr = !0, ui = bo.then(xo));
}
function yl(e) {
  const t = ce.indexOf(e);
  t > Me && ce.splice(t, 1);
}
function _l(e) {
  R(e) ? It.push(...e) : (!et || !et.includes(
    e,
    e.allowRecurse ? pt + 1 : pt
  )) && It.push(e), _o();
}
function Yi(e, t, n = en ? Me + 1 : 0) {
  for (; n < ce.length; n++) {
    const r = ce[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      ce.splice(n, 1), n--, r();
    }
  }
}
function wo(e) {
  if (It.length) {
    const t = [...new Set(It)].sort(
      (n, r) => tn(n) - tn(r)
    );
    if (It.length = 0, et) {
      et.push(...t);
      return;
    }
    for (et = t, pt = 0; pt < et.length; pt++)
      et[pt]();
    et = null, pt = 0;
  }
}
const tn = (e) => e.id == null ? 1 / 0 : e.id, wl = (e, t) => {
  const n = tn(e) - tn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function xo(e) {
  Dr = !1, en = !0, ce.sort(wl);
  const t = be;
  try {
    for (Me = 0; Me < ce.length; Me++) {
      const n = ce[Me];
      n && n.active !== !1 && (Qe.NODE_ENV !== "production" && t(n), He(n, null, 14));
    }
  } finally {
    Me = 0, ce.length = 0, wo(), en = !1, ui = null, (ce.length || It.length) && xo();
  }
}
function xl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || W;
  let i = n;
  const a = t.startsWith("update:"), o = a && t.slice(7);
  if (o && o in r) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`, { number: m, trim: v } = r[u] || W;
    v && (i = n.map((E) => ne(E) ? E.trim() : E)), m && (i = n.map(Ts));
  }
  let s, l = r[s = gr(t)] || // also try camelCase event handler (#2249)
  r[s = gr(je(t))];
  !l && a && (l = r[s = gr(Ae(t))]), l && Pe(
    l,
    e,
    6,
    i
  );
  const f = r[s + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[s])
      return;
    e.emitted[s] = !0, Pe(
      f,
      e,
      6,
      i
    );
  }
}
function ko(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let o = {}, s = !1;
  if (!L(e)) {
    const l = (f) => {
      const u = ko(f, t, !0);
      u && (s = !0, re(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !s ? (q(e) && r.set(e, null), null) : (R(a) ? a.forEach((l) => o[l] = null) : re(o, a), q(e) && r.set(e, o), o);
}
function ar(e, t) {
  return !e || !Jn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ae(t)) || H(e, t));
}
let ye = null, Eo = null;
function $n(e) {
  const t = ye;
  return ye = e, Eo = e && e.type.__scopeId || null, t;
}
function kl(e, t = ye, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ia(-1);
    const a = $n(t);
    let o;
    try {
      o = e(...i);
    } finally {
      $n(a), r._d && ia(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function yr(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [a],
    slots: o,
    attrs: s,
    emit: l,
    render: f,
    renderCache: u,
    props: m,
    data: v,
    setupState: E,
    ctx: U,
    inheritAttrs: S
  } = e, z = $n(e);
  let b, x;
  try {
    if (n.shapeFlag & 4) {
      const F = i || r, V = Qe.NODE_ENV !== "production" && E.__isScriptSetup ? new Proxy(F, {
        get(D, J, fe) {
          return dl(
            `Property '${String(
              J
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(D, J, fe);
        }
      }) : F;
      b = Re(
        f.call(
          V,
          F,
          u,
          Qe.NODE_ENV !== "production" ? kn(m) : m,
          E,
          v,
          U
        )
      ), x = s;
    } else {
      const F = t;
      Qe.NODE_ENV, b = Re(
        F.length > 1 ? F(
          Qe.NODE_ENV !== "production" ? kn(m) : m,
          Qe.NODE_ENV !== "production" ? {
            get attrs() {
              return kn(s);
            },
            slots: o,
            emit: l
          } : { attrs: s, slots: o, emit: l }
        ) : F(
          Qe.NODE_ENV !== "production" ? kn(m) : m,
          null
        )
      ), x = t.props ? s : El(s);
    }
  } catch (F) {
    Xt.length = 0, ir(F, e, 1), b = se(_t);
  }
  let I = b;
  if (x && S !== !1) {
    const F = Object.keys(x), { shapeFlag: V } = I;
    F.length && V & 7 && (a && F.some(ni) && (x = Sl(
      x,
      a
    )), I = Nt(I, x, !1, !0));
  }
  return n.dirs && (I = Nt(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && (I.transition = n.transition), b = I, $n(z), b;
}
const El = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Jn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sl = (e, t) => {
  const n = {};
  for (const r in e)
    (!ni(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Al(e, t, n) {
  const { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: l } = t, f = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Xi(r, o, f) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let m = 0; m < u.length; m++) {
        const v = u[m];
        if (o[v] !== r[v] && !ar(f, v))
          return !0;
      }
    }
  } else
    return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? Xi(r, o, f) : !0 : !!o;
  return !1;
}
function Xi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (t[a] !== e[a] && !ar(n, a))
      return !0;
  }
  return !1;
}
function Ol({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Cl = Symbol.for("v-ndc"), Pl = (e) => e.__isSuspense;
function Il(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : _l(e);
}
const Tl = Symbol.for("v-scx"), Nl = () => Un(Tl), En = {};
function Dn(e, t, n) {
  return So(e, t, n);
}
function So(e, t, {
  immediate: n,
  deep: r,
  flush: i,
  once: a,
  onTrack: o,
  onTrigger: s
} = W) {
  if (t && a) {
    const D = t;
    t = (...J) => {
      D(...J), V();
    };
  }
  const l = oe, f = (D) => r === !0 ? D : (
    // for deep: false, only traverse root-level properties
    ht(D, r === !1 ? 1 : void 0)
  );
  let u, m = !1, v = !1;
  if (me(e) ? (u = () => e.value, m = Vn(e)) : Kt(e) ? (u = () => f(e), m = !0) : R(e) ? (v = !0, m = e.some((D) => Kt(D) || Vn(D)), u = () => e.map((D) => {
    if (me(D))
      return D.value;
    if (Kt(D))
      return f(D);
    if (L(D))
      return He(D, l, 2);
  })) : L(e) ? t ? u = () => He(e, l, 2) : u = () => (E && E(), Pe(
    e,
    l,
    3,
    [U]
  )) : u = be, t && r) {
    const D = u;
    u = () => ht(D());
  }
  let E, U = (D) => {
    E = I.onStop = () => {
      He(D, l, 4), E = I.onStop = void 0;
    };
  }, S;
  if (lr)
    if (U = be, t ? n && Pe(t, l, 3, [
      u(),
      v ? [] : void 0,
      U
    ]) : u(), i === "sync") {
      const D = Nl();
      S = D.__watcherHandles || (D.__watcherHandles = []);
    } else
      return be;
  let z = v ? new Array(e.length).fill(En) : En;
  const b = () => {
    if (!(!I.active || !I.dirty))
      if (t) {
        const D = I.run();
        (r || m || (v ? D.some((J, fe) => it(J, z[fe])) : it(D, z))) && (E && E(), Pe(t, l, 3, [
          D,
          // pass undefined as the old value when it's changed for the first time
          z === En ? void 0 : v && z[0] === En ? [] : z,
          U
        ]), z = D);
      } else
        I.run();
  };
  b.allowRecurse = !!t;
  let x;
  i === "sync" ? x = b : i === "post" ? x = () => he(b, l && l.suspense) : (b.pre = !0, l && (b.id = l.uid), x = () => di(b));
  const I = new ai(u, be, x), F = zs(), V = () => {
    I.stop(), F && ri(F.effects, I);
  };
  return t ? n ? b() : z = I.run() : i === "post" ? he(
    I.run.bind(I),
    l && l.suspense
  ) : I.run(), S && S.push(V), V;
}
function Rl(e, t, n) {
  const r = this.proxy, i = ne(e) ? e.includes(".") ? Ao(r, e) : () => r[e] : e.bind(r, r);
  let a;
  L(t) ? a = t : (a = t.handler, n = t);
  const o = fn(this), s = So(i, a.bind(r), n);
  return o(), s;
}
function Ao(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function ht(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, me(e))
    ht(e.value, t, n);
  else if (R(e))
    for (let r = 0; r < e.length; r++)
      ht(e[r], t, n);
  else if ($a(e) || Ct(e))
    e.forEach((r) => {
      ht(r, t, n);
    });
  else if (Wa(e))
    for (const r in e)
      ht(e[r], t, n);
  return e;
}
function Ml(e, t) {
  if (ye === null)
    return e;
  const n = cr(ye) || ye.proxy, r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, o, s, l = W] = t[i];
    a && (L(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && ht(o), r.push({
      dir: a,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: s,
      modifiers: l
    }));
  }
  return e;
}
function ft(e, t, n, r) {
  const i = e.dirs, a = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const s = i[o];
    a && (s.oldValue = a[o].value);
    let l = s.dir[r];
    l && (Ke(), Pe(l, n, 8, [
      e.el,
      s,
      e,
      t
    ]), We());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function mi(e, t) {
  return L(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
const Ln = (e) => !!e.type.__asyncLoader, Oo = (e) => e.type.__isKeepAlive;
function Dl(e, t) {
  Co(e, "a", t);
}
function Ll(e, t) {
  Co(e, "da", t);
}
function Co(e, t, n = oe) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (or(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Oo(i.parent.vnode) && Ul(r, t, n, i), i = i.parent;
  }
}
function Ul(e, t, n, r) {
  const i = or(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Po(() => {
    ri(r[t], i);
  }, n);
}
function or(e, t, n = oe, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...o) => {
      if (n.isUnmounted)
        return;
      Ke();
      const s = fn(n), l = Pe(t, n, e, o);
      return s(), We(), l;
    });
    return r ? i.unshift(a) : i.push(a), a;
  }
}
const Ge = (e) => (t, n = oe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!lr || e === "sp") && or(e, (...r) => t(...r), n)
), Fl = Ge("bm"), jl = Ge("m"), zl = Ge("bu"), Hl = Ge("u"), Vl = Ge("bum"), Po = Ge("um"), $l = Ge("sp"), Bl = Ge(
  "rtg"
), Kl = Ge(
  "rtc"
);
function Wl(e, t = oe) {
  or("ec", e, t);
}
function _r(e, t, n, r) {
  let i;
  const a = n;
  if (R(e) || ne(e)) {
    i = new Array(e.length);
    for (let o = 0, s = e.length; o < s; o++)
      i[o] = t(e[o], o, void 0, a);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++)
      i[o] = t(o + 1, o, void 0, a);
  } else if (q(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (o, s) => t(o, s, void 0, a)
      );
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let s = 0, l = o.length; s < l; s++) {
        const f = o[s];
        i[s] = t(e[f], f, s, a);
      }
    }
  else
    i = [];
  return i;
}
const Lr = (e) => e ? Bo(e) ? cr(e) || e.proxy : Lr(e.parent) : null, Gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ re(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Lr(e.parent),
    $root: (e) => Lr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => pi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, di(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = yo.bind(e.proxy)),
    $watch: (e) => Rl.bind(e)
  })
), wr = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), Gl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: l } = e;
    let f;
    if (t[0] !== "$") {
      const E = o[t];
      if (E !== void 0)
        switch (E) {
          case 1:
            return r[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (wr(r, t))
          return o[t] = 1, r[t];
        if (i !== W && H(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && H(f, t)
        )
          return o[t] = 3, a[t];
        if (n !== W && H(n, t))
          return o[t] = 4, n[t];
        Ur && (o[t] = 0);
      }
    }
    const u = Gt[t];
    let m, v;
    if (u)
      return t === "$attrs" && ge(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (m = s.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== W && H(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      v = l.config.globalProperties, H(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: a } = e;
    return wr(i, t) ? (i[t] = n, !0) : r !== W && H(r, t) ? (r[t] = n, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: a }
  }, o) {
    let s;
    return !!n[o] || e !== W && H(e, o) || wr(t, o) || (s = a[0]) && H(s, o) || H(r, o) || H(Gt, o) || H(i.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qi(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ur = !0;
function Yl(e) {
  const t = pi(e), n = e.proxy, r = e.ctx;
  Ur = !1, t.beforeCreate && Ji(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: o,
    watch: s,
    provide: l,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: m,
    mounted: v,
    beforeUpdate: E,
    updated: U,
    activated: S,
    deactivated: z,
    beforeDestroy: b,
    beforeUnmount: x,
    destroyed: I,
    unmounted: F,
    render: V,
    renderTracked: D,
    renderTriggered: J,
    errorCaptured: fe,
    serverPrefetch: we,
    // public API
    expose: Le,
    inheritAttrs: Dt,
    // assets
    components: pn,
    directives: hn,
    filters: pr
  } = t;
  if (f && Xl(f, r, null), o)
    for (const Z in o) {
      const K = o[Z];
      L(K) && (r[Z] = K.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    q(Z) && (e.data = ci(Z));
  }
  if (Ur = !0, a)
    for (const Z in a) {
      const K = a[Z], lt = L(K) ? K.bind(n, n) : L(K.get) ? K.get.bind(n, n) : be, gn = !L(K) && L(K.set) ? K.set.bind(n) : be, ct = mt({
        get: lt,
        set: gn
      });
      Object.defineProperty(r, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => ct.value,
        set: (Ie) => ct.value = Ie
      });
    }
  if (s)
    for (const Z in s)
      Io(s[Z], r, n, Z);
  if (l) {
    const Z = L(l) ? l.call(n) : l;
    Reflect.ownKeys(Z).forEach((K) => {
      tc(K, Z[K]);
    });
  }
  u && Ji(u, e, "c");
  function ue(Z, K) {
    R(K) ? K.forEach((lt) => Z(lt.bind(n))) : K && Z(K.bind(n));
  }
  if (ue(Fl, m), ue(jl, v), ue(zl, E), ue(Hl, U), ue(Dl, S), ue(Ll, z), ue(Wl, fe), ue(Kl, D), ue(Bl, J), ue(Vl, x), ue(Po, F), ue($l, we), R(Le))
    if (Le.length) {
      const Z = e.exposed || (e.exposed = {});
      Le.forEach((K) => {
        Object.defineProperty(Z, K, {
          get: () => n[K],
          set: (lt) => n[K] = lt
        });
      });
    } else
      e.exposed || (e.exposed = {});
  V && e.render === be && (e.render = V), Dt != null && (e.inheritAttrs = Dt), pn && (e.components = pn), hn && (e.directives = hn);
}
function Xl(e, t, n = be) {
  R(e) && (e = Fr(e));
  for (const r in e) {
    const i = e[r];
    let a;
    q(i) ? "default" in i ? a = Un(
      i.from || r,
      i.default,
      !0
    ) : a = Un(i.from || r) : a = Un(i), me(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (o) => a.value = o
    }) : t[r] = a;
  }
}
function Ji(e, t, n) {
  Pe(
    R(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Io(e, t, n, r) {
  const i = r.includes(".") ? Ao(n, r) : () => n[r];
  if (ne(e)) {
    const a = t[e];
    L(a) && Dn(i, a);
  } else if (L(e))
    Dn(i, e.bind(n));
  else if (q(e))
    if (R(e))
      e.forEach((a) => Io(a, t, n, r));
    else {
      const a = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(a) && Dn(i, a, e);
    }
}
function pi(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: o }
  } = e.appContext, s = a.get(t);
  let l;
  return s ? l = s : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (f) => Bn(l, f, o, !0)
  ), Bn(l, t, o)), q(t) && a.set(t, l), l;
}
function Bn(e, t, n, r = !1) {
  const { mixins: i, extends: a } = t;
  a && Bn(e, a, n, !0), i && i.forEach(
    (o) => Bn(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const s = ql[o] || n && n[o];
      e[o] = s ? s(e[o], t[o]) : t[o];
    }
  return e;
}
const ql = {
  data: Zi,
  props: Qi,
  emits: Qi,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Zl,
  // provide / inject
  provide: Zi,
  inject: Jl
};
function Zi(e, t) {
  return t ? e ? function() {
    return re(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Jl(e, t) {
  return Ht(Fr(e), Fr(t));
}
function Fr(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? re(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Qi(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
    /* @__PURE__ */ Object.create(null),
    qi(e),
    qi(t ?? {})
  ) : t;
}
function Zl(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = re(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = de(e[r], t[r]);
  return n;
}
function To() {
  return {
    app: null,
    config: {
      isNativeTag: As,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ql = 0;
function ec(e, t) {
  return function(r, i = null) {
    L(r) || (r = re({}, r)), i != null && !q(i) && (i = null);
    const a = To(), o = /* @__PURE__ */ new WeakSet();
    let s = !1;
    const l = a.app = {
      _uid: Ql++,
      _component: r,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Cc,
      get config() {
        return a.config;
      },
      set config(f) {
      },
      use(f, ...u) {
        return o.has(f) || (f && L(f.install) ? (o.add(f), f.install(l, ...u)) : L(f) && (o.add(f), f(l, ...u))), l;
      },
      mixin(f) {
        return a.mixins.includes(f) || a.mixins.push(f), l;
      },
      component(f, u) {
        return u ? (a.components[f] = u, l) : a.components[f];
      },
      directive(f, u) {
        return u ? (a.directives[f] = u, l) : a.directives[f];
      },
      mount(f, u, m) {
        if (!s) {
          const v = se(r, i);
          return v.appContext = a, m === !0 ? m = "svg" : m === !1 && (m = void 0), u && t ? t(v, f) : e(v, f, m), s = !0, l._container = f, f.__vue_app__ = l, cr(v.component) || v.component.proxy;
        }
      },
      unmount() {
        s && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(f, u) {
        return a.provides[f] = u, l;
      },
      runWithContext(f) {
        const u = Yt;
        Yt = l;
        try {
          return f();
        } finally {
          Yt = u;
        }
      }
    };
    return l;
  };
}
let Yt = null;
function tc(e, t) {
  if (oe) {
    let n = oe.provides;
    const r = oe.parent && oe.parent.provides;
    r === n && (n = oe.provides = Object.create(r)), n[e] = t;
  }
}
function Un(e, t, n = !1) {
  const r = oe || ye;
  if (r || Yt) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Yt._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
  }
}
const No = {}, Ro = () => Object.create(No), Mo = (e) => Object.getPrototypeOf(e) === No;
function nc(e, t, n, r = !1) {
  const i = {}, a = Ro();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Do(e, t, i, a);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = r ? i : ol(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function rc(e, t, n, r) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: o }
  } = e, s = $(i), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let m = 0; m < u.length; m++) {
        let v = u[m];
        if (ar(e.emitsOptions, v))
          continue;
        const E = t[v];
        if (l)
          if (H(a, v))
            E !== a[v] && (a[v] = E, f = !0);
          else {
            const U = je(v);
            i[U] = jr(
              l,
              s,
              U,
              E,
              e,
              !1
            );
          }
        else
          E !== a[v] && (a[v] = E, f = !0);
      }
    }
  } else {
    Do(e, t, i, a) && (f = !0);
    let u;
    for (const m in s)
      (!t || // for camelCase
      !H(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ae(m)) === m || !H(t, u))) && (l ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[m] = jr(
        l,
        s,
        m,
        void 0,
        e,
        !0
      )) : delete i[m]);
    if (a !== s)
      for (const m in a)
        (!t || !H(t, m)) && (delete a[m], f = !0);
  }
  f && ze(e.attrs, "set", "");
}
function Do(e, t, n, r) {
  const [i, a] = e.propsOptions;
  let o = !1, s;
  if (t)
    for (let l in t) {
      if (Bt(l))
        continue;
      const f = t[l];
      let u;
      i && H(i, u = je(l)) ? !a || !a.includes(u) ? n[u] = f : (s || (s = {}))[u] = f : ar(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, o = !0);
    }
  if (a) {
    const l = $(n), f = s || W;
    for (let u = 0; u < a.length; u++) {
      const m = a[u];
      n[m] = jr(
        i,
        l,
        m,
        f[m],
        e,
        !H(f, m)
      );
    }
  }
  return o;
}
function jr(e, t, n, r, i, a) {
  const o = e[n];
  if (o != null) {
    const s = H(o, "default");
    if (s && r === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && L(l)) {
        const { propsDefaults: f } = i;
        if (n in f)
          r = f[n];
        else {
          const u = fn(i);
          r = f[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
    }
    o[
      0
      /* shouldCast */
    ] && (a && !s ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ae(n)) && (r = !0));
  }
  return r;
}
function Lo(e, t, n = !1) {
  const r = t.propsCache, i = r.get(e);
  if (i)
    return i;
  const a = e.props, o = {}, s = [];
  let l = !1;
  if (!L(e)) {
    const u = (m) => {
      l = !0;
      const [v, E] = Lo(m, t, !0);
      re(o, v), E && s.push(...E);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !l)
    return q(e) && r.set(e, Ot), Ot;
  if (R(a))
    for (let u = 0; u < a.length; u++) {
      const m = je(a[u]);
      ea(m) && (o[m] = W);
    }
  else if (a)
    for (const u in a) {
      const m = je(u);
      if (ea(m)) {
        const v = a[u], E = o[m] = R(v) || L(v) ? { type: v } : re({}, v);
        if (E) {
          const U = ra(Boolean, E.type), S = ra(String, E.type);
          E[
            0
            /* shouldCast */
          ] = U > -1, E[
            1
            /* shouldCastTrue */
          ] = S < 0 || U < S, (U > -1 || H(E, "default")) && s.push(m);
        }
      }
    }
  const f = [o, s];
  return q(e) && r.set(e, f), f;
}
function ea(e) {
  return e[0] !== "$" && !Bt(e);
}
function ta(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function na(e, t) {
  return ta(e) === ta(t);
}
function ra(e, t) {
  return R(t) ? t.findIndex((n) => na(n, e)) : L(t) && na(t, e) ? 0 : -1;
}
const Uo = (e) => e[0] === "_" || e === "$stable", hi = (e) => R(e) ? e.map(Re) : [Re(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const r = kl((...i) => (Qe.NODE_ENV !== "production" && oe && (!n || (n.root, oe.root)), hi(t(...i))), n);
  return r._c = !1, r;
}, Fo = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Uo(i))
      continue;
    const a = e[i];
    if (L(a))
      t[i] = ic(i, a, r);
    else if (a != null) {
      const o = hi(a);
      t[i] = () => o;
    }
  }
}, jo = (e, t) => {
  const n = hi(t);
  e.slots.default = () => n;
}, ac = (e, t) => {
  const n = e.slots = Ro();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (re(n, t), Ya(n, "_", r, !0)) : Fo(t, n);
  } else
    t && jo(e, t);
}, oc = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let a = !0, o = W;
  if (r.shapeFlag & 32) {
    const s = t._;
    s ? n && s === 1 ? a = !1 : (re(i, t), !n && s === 1 && delete i._) : (a = !t.$stable, Fo(t, i)), o = t;
  } else
    t && (jo(e, t), o = { default: 1 });
  if (a)
    for (const s in i)
      !Uo(s) && o[s] == null && delete i[s];
};
function zr(e, t, n, r, i = !1) {
  if (R(e)) {
    e.forEach(
      (v, E) => zr(
        v,
        t && (R(t) ? t[E] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Ln(r) && !i)
    return;
  const a = r.shapeFlag & 4 ? cr(r.component) || r.component.proxy : r.el, o = i ? null : a, { i: s, r: l } = e, f = t && t.r, u = s.refs === W ? s.refs = {} : s.refs, m = s.setupState;
  if (f != null && f !== l && (ne(f) ? (u[f] = null, H(m, f) && (m[f] = null)) : me(f) && (f.value = null)), L(l))
    He(l, s, 12, [o, u]);
  else {
    const v = ne(l), E = me(l);
    if (v || E) {
      const U = () => {
        if (e.f) {
          const S = v ? H(m, l) ? m[l] : u[l] : l.value;
          i ? R(S) && ri(S, a) : R(S) ? S.includes(a) || S.push(a) : v ? (u[l] = [a], H(m, l) && (m[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value));
        } else
          v ? (u[l] = o, H(m, l) && (m[l] = o)) : E && (l.value = o, e.k && (u[e.k] = o));
      };
      o ? (U.id = -1, he(U, n)) : U();
    }
  }
}
const he = Il;
function sc(e) {
  return lc(e);
}
function lc(e, t) {
  const n = Xa();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: a,
    createElement: o,
    createText: s,
    createComment: l,
    setText: f,
    setElementText: u,
    parentNode: m,
    nextSibling: v,
    setScopeId: E = be,
    insertStaticContent: U
  } = e, S = (c, d, p, h = null, g = null, w = null, A = void 0, _ = null, k = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !jt(c, d) && (h = vn(c), Ie(c, g, w, !0), c = null), d.patchFlag === -2 && (k = !1, d.dynamicChildren = null);
    const { type: y, ref: C, shapeFlag: N } = d;
    switch (y) {
      case sr:
        z(c, d, p, h);
        break;
      case _t:
        b(c, d, p, h);
        break;
      case kr:
        c == null && x(d, p, h, A);
        break;
      case xe:
        pn(
          c,
          d,
          p,
          h,
          g,
          w,
          A,
          _,
          k
        );
        break;
      default:
        N & 1 ? V(
          c,
          d,
          p,
          h,
          g,
          w,
          A,
          _,
          k
        ) : N & 6 ? hn(
          c,
          d,
          p,
          h,
          g,
          w,
          A,
          _,
          k
        ) : (N & 64 || N & 128) && y.process(
          c,
          d,
          p,
          h,
          g,
          w,
          A,
          _,
          k,
          Lt
        );
    }
    C != null && g && zr(C, c && c.ref, w, d || c, !d);
  }, z = (c, d, p, h) => {
    if (c == null)
      r(
        d.el = s(d.children),
        p,
        h
      );
    else {
      const g = d.el = c.el;
      d.children !== c.children && f(g, d.children);
    }
  }, b = (c, d, p, h) => {
    c == null ? r(
      d.el = l(d.children || ""),
      p,
      h
    ) : d.el = c.el;
  }, x = (c, d, p, h) => {
    [c.el, c.anchor] = U(
      c.children,
      d,
      p,
      h,
      c.el,
      c.anchor
    );
  }, I = ({ el: c, anchor: d }, p, h) => {
    let g;
    for (; c && c !== d; )
      g = v(c), r(c, p, h), c = g;
    r(d, p, h);
  }, F = ({ el: c, anchor: d }) => {
    let p;
    for (; c && c !== d; )
      p = v(c), i(c), c = p;
    i(d);
  }, V = (c, d, p, h, g, w, A, _, k) => {
    d.type === "svg" ? A = "svg" : d.type === "math" && (A = "mathml"), c == null ? D(
      d,
      p,
      h,
      g,
      w,
      A,
      _,
      k
    ) : we(
      c,
      d,
      g,
      w,
      A,
      _,
      k
    );
  }, D = (c, d, p, h, g, w, A, _) => {
    let k, y;
    const { props: C, shapeFlag: N, transition: T, dirs: M } = c;
    if (k = c.el = o(
      c.type,
      w,
      C && C.is,
      C
    ), N & 8 ? u(k, c.children) : N & 16 && fe(
      c.children,
      k,
      null,
      h,
      g,
      xr(c, w),
      A,
      _
    ), M && ft(c, null, h, "created"), J(k, c, c.scopeId, A, h), C) {
      for (const B in C)
        B !== "value" && !Bt(B) && a(
          k,
          B,
          null,
          C[B],
          w,
          c.children,
          h,
          g,
          Ue
        );
      "value" in C && a(k, "value", null, C.value, w), (y = C.onVnodeBeforeMount) && Ne(y, h, c);
    }
    M && ft(c, null, h, "beforeMount");
    const j = cc(g, T);
    j && T.beforeEnter(k), r(k, d, p), ((y = C && C.onVnodeMounted) || j || M) && he(() => {
      y && Ne(y, h, c), j && T.enter(k), M && ft(c, null, h, "mounted");
    }, g);
  }, J = (c, d, p, h, g) => {
    if (p && E(c, p), h)
      for (let w = 0; w < h.length; w++)
        E(c, h[w]);
    if (g) {
      let w = g.subTree;
      if (d === w) {
        const A = g.vnode;
        J(
          c,
          A,
          A.scopeId,
          A.slotScopeIds,
          g.parent
        );
      }
    }
  }, fe = (c, d, p, h, g, w, A, _, k = 0) => {
    for (let y = k; y < c.length; y++) {
      const C = c[y] = _ ? tt(c[y]) : Re(c[y]);
      S(
        null,
        C,
        d,
        p,
        h,
        g,
        w,
        A,
        _
      );
    }
  }, we = (c, d, p, h, g, w, A) => {
    const _ = d.el = c.el;
    let { patchFlag: k, dynamicChildren: y, dirs: C } = d;
    k |= c.patchFlag & 16;
    const N = c.props || W, T = d.props || W;
    let M;
    if (p && ut(p, !1), (M = T.onVnodeBeforeUpdate) && Ne(M, p, d, c), C && ft(d, c, p, "beforeUpdate"), p && ut(p, !0), y ? Le(
      c.dynamicChildren,
      y,
      _,
      p,
      h,
      xr(d, g),
      w
    ) : A || K(
      c,
      d,
      _,
      null,
      p,
      h,
      xr(d, g),
      w,
      !1
    ), k > 0) {
      if (k & 16)
        Dt(
          _,
          d,
          N,
          T,
          p,
          h,
          g
        );
      else if (k & 2 && N.class !== T.class && a(_, "class", null, T.class, g), k & 4 && a(_, "style", N.style, T.style, g), k & 8) {
        const j = d.dynamicProps;
        for (let B = 0; B < j.length; B++) {
          const X = j[B], ae = N[X], ke = T[X];
          (ke !== ae || X === "value") && a(
            _,
            X,
            ae,
            ke,
            g,
            c.children,
            p,
            h,
            Ue
          );
        }
      }
      k & 1 && c.children !== d.children && u(_, d.children);
    } else
      !A && y == null && Dt(
        _,
        d,
        N,
        T,
        p,
        h,
        g
      );
    ((M = T.onVnodeUpdated) || C) && he(() => {
      M && Ne(M, p, d, c), C && ft(d, c, p, "updated");
    }, h);
  }, Le = (c, d, p, h, g, w, A) => {
    for (let _ = 0; _ < d.length; _++) {
      const k = c[_], y = d[_], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(k, y) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 70) ? m(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      S(
        k,
        y,
        C,
        null,
        h,
        g,
        w,
        A,
        !0
      );
    }
  }, Dt = (c, d, p, h, g, w, A) => {
    if (p !== h) {
      if (p !== W)
        for (const _ in p)
          !Bt(_) && !(_ in h) && a(
            c,
            _,
            p[_],
            null,
            A,
            d.children,
            g,
            w,
            Ue
          );
      for (const _ in h) {
        if (Bt(_))
          continue;
        const k = h[_], y = p[_];
        k !== y && _ !== "value" && a(
          c,
          _,
          y,
          k,
          A,
          d.children,
          g,
          w,
          Ue
        );
      }
      "value" in h && a(c, "value", p.value, h.value, A);
    }
  }, pn = (c, d, p, h, g, w, A, _, k) => {
    const y = d.el = c ? c.el : s(""), C = d.anchor = c ? c.anchor : s("");
    let { patchFlag: N, dynamicChildren: T, slotScopeIds: M } = d;
    M && (_ = _ ? _.concat(M) : M), c == null ? (r(y, p, h), r(C, p, h), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      C,
      g,
      w,
      A,
      _,
      k
    )) : N > 0 && N & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Le(
      c.dynamicChildren,
      T,
      p,
      g,
      w,
      A,
      _
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || g && d === g.subTree) && zo(
      c,
      d,
      !0
      /* shallow */
    )) : K(
      c,
      d,
      p,
      C,
      g,
      w,
      A,
      _,
      k
    );
  }, hn = (c, d, p, h, g, w, A, _, k) => {
    d.slotScopeIds = _, c == null ? d.shapeFlag & 512 ? g.ctx.activate(
      d,
      p,
      h,
      A,
      k
    ) : pr(
      d,
      p,
      h,
      g,
      w,
      A,
      k
    ) : Ti(c, d, k);
  }, pr = (c, d, p, h, g, w, A) => {
    const _ = c.component = bc(
      c,
      h,
      g
    );
    if (Oo(c) && (_.ctx.renderer = Lt), yc(_), _.asyncDep) {
      if (g && g.registerDep(_, ue), !c.el) {
        const k = _.subTree = se(_t);
        b(null, k, d, p);
      }
    } else
      ue(
        _,
        c,
        d,
        p,
        g,
        w,
        A
      );
  }, Ti = (c, d, p) => {
    const h = d.component = c.component;
    if (Al(c, d, p))
      if (h.asyncDep && !h.asyncResolved) {
        Z(h, d, p);
        return;
      } else
        h.next = d, yl(h.update), h.effect.dirty = !0, h.update();
    else
      d.el = c.el, h.vnode = d;
  }, ue = (c, d, p, h, g, w, A) => {
    const _ = () => {
      if (c.isMounted) {
        let { next: C, bu: N, u: T, parent: M, vnode: j } = c;
        {
          const Et = Ho(c);
          if (Et) {
            C && (C.el = j.el, Z(c, C, A)), Et.asyncDep.then(() => {
              c.isUnmounted || _();
            });
            return;
          }
        }
        let B = C, X;
        ut(c, !1), C ? (C.el = j.el, Z(c, C, A)) : C = j, N && vr(N), (X = C.props && C.props.onVnodeBeforeUpdate) && Ne(X, M, C, j), ut(c, !0);
        const ae = yr(c), ke = c.subTree;
        c.subTree = ae, S(
          ke,
          ae,
          // parent may have changed if it's in a teleport
          m(ke.el),
          // anchor may have changed if it's in a fragment
          vn(ke),
          c,
          g,
          w
        ), C.el = ae.el, B === null && Ol(c, ae.el), T && he(T, g), (X = C.props && C.props.onVnodeUpdated) && he(
          () => Ne(X, M, C, j),
          g
        );
      } else {
        let C;
        const { el: N, props: T } = d, { bm: M, m: j, parent: B } = c, X = Ln(d);
        if (ut(c, !1), M && vr(M), !X && (C = T && T.onVnodeBeforeMount) && Ne(C, B, d), ut(c, !0), N && Di) {
          const ae = () => {
            c.subTree = yr(c), Di(
              N,
              c.subTree,
              c,
              g,
              null
            );
          };
          X ? d.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !c.isUnmounted && ae()
          ) : ae();
        } else {
          const ae = c.subTree = yr(c);
          S(
            null,
            ae,
            p,
            h,
            c,
            g,
            w
          ), d.el = ae.el;
        }
        if (j && he(j, g), !X && (C = T && T.onVnodeMounted)) {
          const ae = d;
          he(
            () => Ne(C, B, ae),
            g
          );
        }
        (d.shapeFlag & 256 || B && Ln(B.vnode) && B.vnode.shapeFlag & 256) && c.a && he(c.a, g), c.isMounted = !0, d = p = h = null;
      }
    }, k = c.effect = new ai(
      _,
      be,
      () => di(y),
      c.scope
      // track it in component's effect scope
    ), y = c.update = () => {
      k.dirty && k.run();
    };
    y.id = c.uid, ut(c, !0), y();
  }, Z = (c, d, p) => {
    d.component = c;
    const h = c.vnode.props;
    c.vnode = d, c.next = null, rc(c, d.props, h, p), oc(c, d.children, p), Ke(), Yi(c), We();
  }, K = (c, d, p, h, g, w, A, _, k = !1) => {
    const y = c && c.children, C = c ? c.shapeFlag : 0, N = d.children, { patchFlag: T, shapeFlag: M } = d;
    if (T > 0) {
      if (T & 128) {
        gn(
          y,
          N,
          p,
          h,
          g,
          w,
          A,
          _,
          k
        );
        return;
      } else if (T & 256) {
        lt(
          y,
          N,
          p,
          h,
          g,
          w,
          A,
          _,
          k
        );
        return;
      }
    }
    M & 8 ? (C & 16 && Ue(y, g, w), N !== y && u(p, N)) : C & 16 ? M & 16 ? gn(
      y,
      N,
      p,
      h,
      g,
      w,
      A,
      _,
      k
    ) : Ue(y, g, w, !0) : (C & 8 && u(p, ""), M & 16 && fe(
      N,
      p,
      h,
      g,
      w,
      A,
      _,
      k
    ));
  }, lt = (c, d, p, h, g, w, A, _, k) => {
    c = c || Ot, d = d || Ot;
    const y = c.length, C = d.length, N = Math.min(y, C);
    let T;
    for (T = 0; T < N; T++) {
      const M = d[T] = k ? tt(d[T]) : Re(d[T]);
      S(
        c[T],
        M,
        p,
        null,
        g,
        w,
        A,
        _,
        k
      );
    }
    y > C ? Ue(
      c,
      g,
      w,
      !0,
      !1,
      N
    ) : fe(
      d,
      p,
      h,
      g,
      w,
      A,
      _,
      k,
      N
    );
  }, gn = (c, d, p, h, g, w, A, _, k) => {
    let y = 0;
    const C = d.length;
    let N = c.length - 1, T = C - 1;
    for (; y <= N && y <= T; ) {
      const M = c[y], j = d[y] = k ? tt(d[y]) : Re(d[y]);
      if (jt(M, j))
        S(
          M,
          j,
          p,
          null,
          g,
          w,
          A,
          _,
          k
        );
      else
        break;
      y++;
    }
    for (; y <= N && y <= T; ) {
      const M = c[N], j = d[T] = k ? tt(d[T]) : Re(d[T]);
      if (jt(M, j))
        S(
          M,
          j,
          p,
          null,
          g,
          w,
          A,
          _,
          k
        );
      else
        break;
      N--, T--;
    }
    if (y > N) {
      if (y <= T) {
        const M = T + 1, j = M < C ? d[M].el : h;
        for (; y <= T; )
          S(
            null,
            d[y] = k ? tt(d[y]) : Re(d[y]),
            p,
            j,
            g,
            w,
            A,
            _,
            k
          ), y++;
      }
    } else if (y > T)
      for (; y <= N; )
        Ie(c[y], g, w, !0), y++;
    else {
      const M = y, j = y, B = /* @__PURE__ */ new Map();
      for (y = j; y <= T; y++) {
        const ve = d[y] = k ? tt(d[y]) : Re(d[y]);
        ve.key != null && B.set(ve.key, y);
      }
      let X, ae = 0;
      const ke = T - j + 1;
      let Et = !1, Li = 0;
      const Ut = new Array(ke);
      for (y = 0; y < ke; y++)
        Ut[y] = 0;
      for (y = M; y <= N; y++) {
        const ve = c[y];
        if (ae >= ke) {
          Ie(ve, g, w, !0);
          continue;
        }
        let Te;
        if (ve.key != null)
          Te = B.get(ve.key);
        else
          for (X = j; X <= T; X++)
            if (Ut[X - j] === 0 && jt(ve, d[X])) {
              Te = X;
              break;
            }
        Te === void 0 ? Ie(ve, g, w, !0) : (Ut[Te - j] = y + 1, Te >= Li ? Li = Te : Et = !0, S(
          ve,
          d[Te],
          p,
          null,
          g,
          w,
          A,
          _,
          k
        ), ae++);
      }
      const Ui = Et ? fc(Ut) : Ot;
      for (X = Ui.length - 1, y = ke - 1; y >= 0; y--) {
        const ve = j + y, Te = d[ve], Fi = ve + 1 < C ? d[ve + 1].el : h;
        Ut[y] === 0 ? S(
          null,
          Te,
          p,
          Fi,
          g,
          w,
          A,
          _,
          k
        ) : Et && (X < 0 || y !== Ui[X] ? ct(Te, p, Fi, 2) : X--);
      }
    }
  }, ct = (c, d, p, h, g = null) => {
    const { el: w, type: A, transition: _, children: k, shapeFlag: y } = c;
    if (y & 6) {
      ct(c.component.subTree, d, p, h);
      return;
    }
    if (y & 128) {
      c.suspense.move(d, p, h);
      return;
    }
    if (y & 64) {
      A.move(c, d, p, Lt);
      return;
    }
    if (A === xe) {
      r(w, d, p);
      for (let N = 0; N < k.length; N++)
        ct(k[N], d, p, h);
      r(c.anchor, d, p);
      return;
    }
    if (A === kr) {
      I(c, d, p);
      return;
    }
    if (h !== 2 && y & 1 && _)
      if (h === 0)
        _.beforeEnter(w), r(w, d, p), he(() => _.enter(w), g);
      else {
        const { leave: N, delayLeave: T, afterLeave: M } = _, j = () => r(w, d, p), B = () => {
          N(w, () => {
            j(), M && M();
          });
        };
        T ? T(w, j, B) : B();
      }
    else
      r(w, d, p);
  }, Ie = (c, d, p, h = !1, g = !1) => {
    const {
      type: w,
      props: A,
      ref: _,
      children: k,
      dynamicChildren: y,
      shapeFlag: C,
      patchFlag: N,
      dirs: T
    } = c;
    if (_ != null && zr(_, null, p, c, !0), C & 256) {
      d.ctx.deactivate(c);
      return;
    }
    const M = C & 1 && T, j = !Ln(c);
    let B;
    if (j && (B = A && A.onVnodeBeforeUnmount) && Ne(B, d, c), C & 6)
      Ss(c.component, p, h);
    else {
      if (C & 128) {
        c.suspense.unmount(p, h);
        return;
      }
      M && ft(c, null, d, "beforeUnmount"), C & 64 ? c.type.remove(
        c,
        d,
        p,
        g,
        Lt,
        h
      ) : y && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (w !== xe || N > 0 && N & 64) ? Ue(
        y,
        d,
        p,
        !1,
        !0
      ) : (w === xe && N & 384 || !g && C & 16) && Ue(k, d, p), h && Ni(c);
    }
    (j && (B = A && A.onVnodeUnmounted) || M) && he(() => {
      B && Ne(B, d, c), M && ft(c, null, d, "unmounted");
    }, p);
  }, Ni = (c) => {
    const { type: d, el: p, anchor: h, transition: g } = c;
    if (d === xe) {
      Es(p, h);
      return;
    }
    if (d === kr) {
      F(c);
      return;
    }
    const w = () => {
      i(p), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (c.shapeFlag & 1 && g && !g.persisted) {
      const { leave: A, delayLeave: _ } = g, k = () => A(p, w);
      _ ? _(c.el, w, k) : k();
    } else
      w();
  }, Es = (c, d) => {
    let p;
    for (; c !== d; )
      p = v(c), i(c), c = p;
    i(d);
  }, Ss = (c, d, p) => {
    const { bum: h, scope: g, update: w, subTree: A, um: _ } = c;
    h && vr(h), g.stop(), w && (w.active = !1, Ie(A, c, d, p)), _ && he(_, d), he(() => {
      c.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, Ue = (c, d, p, h = !1, g = !1, w = 0) => {
    for (let A = w; A < c.length; A++)
      Ie(c[A], d, p, h, g);
  }, vn = (c) => c.shapeFlag & 6 ? vn(c.component.subTree) : c.shapeFlag & 128 ? c.suspense.next() : v(c.anchor || c.el);
  let hr = !1;
  const Ri = (c, d, p) => {
    c == null ? d._vnode && Ie(d._vnode, null, null, !0) : S(
      d._vnode || null,
      c,
      d,
      null,
      null,
      null,
      p
    ), hr || (hr = !0, Yi(), wo(), hr = !1), d._vnode = c;
  }, Lt = {
    p: S,
    um: Ie,
    m: ct,
    r: Ni,
    mt: pr,
    mc: fe,
    pc: K,
    pbc: Le,
    n: vn,
    o: e
  };
  let Mi, Di;
  return {
    render: Ri,
    hydrate: Mi,
    createApp: ec(Ri, Mi)
  };
}
function xr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function cc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function zo(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (R(r) && R(i))
    for (let a = 0; a < r.length; a++) {
      const o = r[a];
      let s = i[a];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = i[a] = tt(i[a]), s.el = o.el), n || zo(o, s)), s.type === sr && (s.el = o.el);
    }
}
function fc(e) {
  const t = e.slice(), n = [0];
  let r, i, a, o, s;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (i = n[n.length - 1], e[i] < f) {
        t[r] = i, n.push(r);
        continue;
      }
      for (a = 0, o = n.length - 1; a < o; )
        s = a + o >> 1, e[n[s]] < f ? a = s + 1 : o = s;
      f < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, o = n[a - 1]; a-- > 0; )
    n[a] = o, o = t[o];
  return n;
}
function Ho(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ho(t);
}
const uc = (e) => e.__isTeleport, xe = Symbol.for("v-fgt"), sr = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), kr = Symbol.for("v-stc"), Xt = [];
let Oe = null;
function te(e = !1) {
  Xt.push(Oe = e ? null : []);
}
function dc() {
  Xt.pop(), Oe = Xt[Xt.length - 1] || null;
}
let nn = 1;
function ia(e) {
  nn += e;
}
function Vo(e) {
  return e.dynamicChildren = nn > 0 ? Oe || Ot : null, dc(), nn > 0 && Oe && Oe.push(e), e;
}
function le(e, t, n, r, i, a) {
  return Vo(
    Q(
      e,
      t,
      n,
      r,
      i,
      a,
      !0
    )
  );
}
function Vt(e, t, n, r, i) {
  return Vo(
    se(
      e,
      t,
      n,
      r,
      i,
      !0
    )
  );
}
function Hr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $o = ({ key: e }) => e ?? null, Fn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || me(e) || L(e) ? { i: ye, r: e, k: t, f: !!n } : e : null);
function Q(e, t = null, n = null, r = 0, i = null, a = e === xe ? 0 : 1, o = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $o(t),
    ref: t && Fn(t),
    scopeId: Eo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ye
  };
  return s ? (gi(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= ne(n) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Oe.push(l), l;
}
const se = mc;
function mc(e, t = null, n = null, r = 0, i = null, a = !1) {
  if ((!e || e === Cl) && (e = _t), Hr(e)) {
    const s = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && gi(s, n), nn > 0 && !a && Oe && (s.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = s : Oe.push(s)), s.patchFlag |= -2, s;
  }
  if (Ac(e) && (e = e.__vccOpts), t) {
    t = pc(t);
    let { class: s, style: l } = t;
    s && !ne(s) && (t.class = er(s)), q(l) && (mo(l) && !R(l) && (l = re({}, l)), t.style = Pt(l));
  }
  const o = ne(e) ? 1 : Pl(e) ? 128 : uc(e) ? 64 : q(e) ? 4 : L(e) ? 2 : 0;
  return Q(
    e,
    t,
    n,
    r,
    i,
    o,
    a,
    !0
  );
}
function pc(e) {
  return e ? mo(e) || Mo(e) ? re({}, e) : e : null;
}
function Nt(e, t, n = !1, r = !1) {
  const { props: i, ref: a, patchFlag: o, children: s, transition: l } = e, f = t ? hc(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && $o(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? R(a) ? a.concat(Fn(t)) : [a, Fn(t)] : Fn(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && (u.transition = l.clone(u)), u;
}
function rn(e = " ", t = 0) {
  return se(sr, null, e, t);
}
function Ee(e = "", t = !1) {
  return t ? (te(), Vt(_t, null, e)) : se(_t, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? se(_t) : R(e) ? se(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? tt(e) : se(sr, null, String(e));
}
function tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function gi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), gi(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Mo(t) ? t._ctx = ye : i === 3 && ye && (ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    L(t) ? (t = { default: t, _ctx: ye }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [rn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function hc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = er([t.class, r.class]));
      else if (i === "style")
        t.style = Pt([t.style, r.style]);
      else if (Jn(i)) {
        const a = t[i], o = r[i];
        o && a !== o && !(R(a) && a.includes(o)) && (t[i] = a ? [].concat(a, o) : o);
      } else
        i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Ne(e, t, n, r = null) {
  Pe(e, t, 7, [
    n,
    r
  ]);
}
const gc = To();
let vc = 0;
function bc(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || gc, a = {
    uid: vc++,
    vnode: e,
    type: r,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Fs(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Lo(r, i),
    emitsOptions: ko(r, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = xl.bind(null, a), e.ce && e.ce(a), a;
}
let oe = null, Kn, Vr;
{
  const e = Xa(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (a) => {
      i.length > 1 ? i.forEach((o) => o(a)) : i[0](a);
    };
  };
  Kn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => oe = n
  ), Vr = t(
    "__VUE_SSR_SETTERS__",
    (n) => lr = n
  );
}
const fn = (e) => {
  const t = oe;
  return Kn(e), e.scope.on(), () => {
    e.scope.off(), Kn(t);
  };
}, aa = () => {
  oe && oe.scope.off(), Kn(null);
};
function Bo(e) {
  return e.vnode.shapeFlag & 4;
}
let lr = !1;
function yc(e, t = !1) {
  t && Vr(t);
  const { props: n, children: r } = e.vnode, i = Bo(e);
  nc(e, n, i, t), ac(e, r);
  const a = i ? _c(e, t) : void 0;
  return t && Vr(!1), a;
}
function _c(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gl);
  const { setup: r } = n;
  if (r) {
    const i = e.setupContext = r.length > 1 ? xc(e) : null, a = fn(e);
    Ke();
    const o = He(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    );
    if (We(), a(), Ba(o)) {
      if (o.then(aa, aa), t)
        return o.then((s) => {
          oa(e, s, t);
        }).catch((s) => {
          ir(s, e, 0);
        });
      e.asyncDep = o;
    } else
      oa(e, o, t);
  } else
    Ko(e, t);
}
function oa(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = go(t)), Ko(e, n);
}
let sa;
function Ko(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && sa && !r.render) {
      const i = r.template || pi(e).template;
      if (i) {
        const { isCustomElement: a, compilerOptions: o } = e.appContext.config, { delimiters: s, compilerOptions: l } = r, f = re(
          re(
            {
              isCustomElement: a,
              delimiters: s
            },
            o
          ),
          l
        );
        r.render = sa(i, f);
      }
    }
    e.render = r.render || be;
  }
  {
    const i = fn(e);
    Ke();
    try {
      Yl(e);
    } finally {
      We(), i();
    }
  }
}
const wc = {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function xc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, wc),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(go(sl(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Gt)
          return Gt[n](e);
      },
      has(t, n) {
        return n in t || n in Gt;
      }
    }));
}
const kc = /(?:^|[-_])(\w)/g, Ec = (e) => e.replace(kc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Sc(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wo(e, t, n = !1) {
  let r = Sc(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (a) => {
      for (const o in a)
        if (a[o] === t)
          return o;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? Ec(r) : n ? "App" : "Anonymous";
}
function Ac(e) {
  return L(e) && "__vccOpts" in e;
}
const mt = (e, t) => ll(e, t, lr);
function Oc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? q(t) && !R(t) ? Hr(t) ? se(e, null, [t]) : se(e, t) : se(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Hr(n) && (n = [n]), se(e, t, n));
}
const Cc = "3.4.26", Pc = "http://www.w3.org/2000/svg", Ic = "http://www.w3.org/1998/Math/MathML", nt = typeof document < "u" ? document : null, la = nt && /* @__PURE__ */ nt.createElement("template"), Tc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? nt.createElementNS(Pc, e) : t === "mathml" ? nt.createElementNS(Ic, e) : nt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, a) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      la.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const s = la.content;
      if (r === "svg" || r === "mathml") {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      t.insertBefore(s, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Nc = Symbol("_vtc");
function Rc(e, t, n) {
  const r = e[Nc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Wn = Symbol("_vod"), Go = Symbol("_vsh"), Mc = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Wn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : zt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), zt(e, !0), r.enter(e)) : r.leave(e, () => {
      zt(e, !1);
    }) : zt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    zt(e, t);
  }
};
function zt(e, t) {
  e.style.display = t ? e[Wn] : "none", e[Go] = !t;
}
const Dc = Symbol(""), Lc = /(^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const r = e.style, i = ne(n);
  let a = !1;
  if (n && !i) {
    if (t)
      if (ne(t))
        for (const o of t.split(";")) {
          const s = o.slice(0, o.indexOf(":")).trim();
          n[s] == null && jn(r, s, "");
        }
      else
        for (const o in t)
          n[o] == null && jn(r, o, "");
    for (const o in n)
      o === "display" && (a = !0), jn(r, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = r[Dc];
      o && (n += ";" + o), r.cssText = n, a = Lc.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Wn in e && (e[Wn] = a ? r.display : "", e[Go] && (r.display = "none"));
}
const ca = /\s*!important$/;
function jn(e, t, n) {
  if (R(n))
    n.forEach((r) => jn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Fc(e, t);
    ca.test(n) ? e.setProperty(
      Ae(r),
      n.replace(ca, ""),
      "important"
    ) : e[r] = n;
  }
}
const fa = ["Webkit", "Moz", "ms"], Er = {};
function Fc(e, t) {
  const n = Er[t];
  if (n)
    return n;
  let r = je(t);
  if (r !== "filter" && r in e)
    return Er[t] = r;
  r = Ga(r);
  for (let i = 0; i < fa.length; i++) {
    const a = fa[i] + r;
    if (a in e)
      return Er[t] = a;
  }
  return t;
}
const ua = "http://www.w3.org/1999/xlink";
function jc(e, t, n, r, i) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ua, t.slice(6, t.length)) : e.setAttributeNS(ua, t, n);
  else {
    const a = Us(t);
    n == null || a && !qa(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function zc(e, t, n, r, i, a, o) {
  if (t === "innerHTML" || t === "textContent") {
    r && o(r, i, a), e[t] = n ?? "";
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n ?? "";
    (f !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = qa(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function Hc(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Vc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const da = Symbol("_vei");
function $c(e, t, n, r, i = null) {
  const a = e[da] || (e[da] = {}), o = a[t];
  if (r && o)
    o.value = r;
  else {
    const [s, l] = Bc(t);
    if (r) {
      const f = a[t] = Gc(
        r,
        i
      );
      Hc(e, s, f, l);
    } else
      o && (Vc(e, s, o, l), a[t] = void 0);
  }
}
const ma = /(?:Once|Passive|Capture)$/;
function Bc(e) {
  let t;
  if (ma.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ma); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ae(e.slice(2)), t];
}
let Sr = 0;
const Kc = /* @__PURE__ */ Promise.resolve(), Wc = () => Sr || (Kc.then(() => Sr = 0), Sr = Date.now());
function Gc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Pe(
      Yc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Wc(), n;
}
function Yc(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (i) => !i._stopped && r && r(i)
    );
  } else
    return t;
}
const pa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, r, i, a, o, s, l) => {
  const f = i === "svg";
  t === "class" ? Rc(e, r, f) : t === "style" ? Uc(e, n, r) : Jn(t) ? ni(t) || $c(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, r, f)) ? zc(
    e,
    t,
    r,
    a,
    o,
    s,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), jc(e, t, r, f));
};
function qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pa(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return pa(t) && ne(n) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jc(e, t) {
  const n = /* @__PURE__ */ mi(e);
  class r extends vi {
    constructor(a) {
      super(n, a, t);
    }
  }
  return r.def = n, r;
}
const Zc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class vi extends Zc {
  constructor(t, n = {}, r) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), yo(() => {
      this._connected || (ga(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const i of r)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, i = !1) => {
      const { props: a, styles: o } = r;
      let s;
      if (a && !R(a))
        for (const l in a) {
          const f = a[l];
          (f === Number || f && f.type === Number) && (l in this._props && (this._props[l] = ji(this._props[l])), (s || (s = /* @__PURE__ */ Object.create(null)))[je(l)] = !0);
        }
      this._numberProps = s, i && this._resolveProps(r), this._applyStyles(o), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, r = R(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && r.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of r.map(je))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(a) {
          this._setProp(i, a);
        }
      });
  }
  _setAttr(t) {
    let n = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const r = je(t);
    this._numberProps && this._numberProps[r] && (n = ji(n)), this._setProp(r, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, r = !0, i = !0) {
    n !== this._props[t] && (this._props[t] = n, i && this._instance && this._update(), r && (n === !0 ? this.setAttribute(Ae(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ae(t), n + "") : n || this.removeAttribute(Ae(t))));
  }
  _update() {
    ga(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = se(this._def, re({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const r = (a, o) => {
        this.dispatchEvent(
          new CustomEvent(a, {
            detail: o
          })
        );
      };
      n.emit = (a, ...o) => {
        r(a, o), Ae(a) !== a && r(Ae(a), o);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof vi) {
          n.parent = i._instance, n.provides = i._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n, this.shadowRoot.appendChild(r);
    });
  }
}
const Qc = ["ctrl", "shift", "alt", "meta"], ef = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Qc.some((n) => e[`${n}Key`] && !t.includes(n))
}, tf = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (i, ...a) => {
    for (let o = 0; o < t.length; o++) {
      const s = ef[t[o]];
      if (s && s(i, t))
        return;
    }
    return e(i, ...a);
  });
}, nf = /* @__PURE__ */ re({ patchProp: Xc }, Tc);
let ha;
function rf() {
  return ha || (ha = sc(nf));
}
const ga = (...e) => {
  rf().render(...e);
};
var af = {
  prefix: "fas",
  iconName: "ban",
  icon: [512, 512, [128683, "cancel"], "f05e", "M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]
}, of = af, sf = {
  prefix: "fas",
  iconName: "microphone",
  icon: [384, 512, [], "f130", "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]
}, lf = {
  prefix: "fas",
  iconName: "file-import",
  icon: [512, 512, ["arrow-right-to-file"], "f56f", "M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"]
}, cf = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, ff = {
  prefix: "fas",
  iconName: "upload",
  icon: [512, 512, [], "f093", "M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, uf = {
  prefix: "fas",
  iconName: "video",
  icon: [576, 512, ["video-camera"], "f03d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]
}, df = { NVM_INC: "/Users/cm/.nvm/versions/node/v19.7.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", TERM_PROGRAM_VERSION: "1.89.0", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "9.8.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v19.7.0/bin", npm_config_user_agent: "npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
function va(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? va(Object(n), !0).forEach(function(r) {
      ie(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : va(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Gn(e) {
  "@babel/helpers - typeof";
  return Gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gn(e);
}
function mf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function hf(e, t, n) {
  return t && pf(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ie(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function bi(e, t) {
  return vf(e) || yf(e, t) || Yo(e, t) || wf();
}
function un(e) {
  return gf(e) || bf(e) || Yo(e) || _f();
}
function gf(e) {
  if (Array.isArray(e))
    return $r(e);
}
function vf(e) {
  if (Array.isArray(e))
    return e;
}
function bf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function yf(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, a = !1, o, s;
    try {
      for (n = n.call(e); !(i = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); i = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return r;
  }
}
function Yo(e, t) {
  if (e) {
    if (typeof e == "string")
      return $r(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $r(e, t);
  }
}
function $r(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function _f() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ba = function() {
}, yi = {}, Xo = {}, qo = null, Jo = {
  mark: ba,
  measure: ba
};
try {
  typeof window < "u" && (yi = window), typeof document < "u" && (Xo = document), typeof MutationObserver < "u" && (qo = MutationObserver), typeof performance < "u" && (Jo = performance);
} catch {
}
var xf = yi.navigator || {}, ya = xf.userAgent, _a = ya === void 0 ? "" : ya, at = yi, Y = Xo, wa = qo, Sn = Jo;
at.document;
var Ye = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", Zo = ~_a.indexOf("MSIE") || ~_a.indexOf("Trident/"), An, On, Cn, Pn, In, Ve = "___FONT_AWESOME___", Br = 16, Qo = "fa", es = "svg-inline--fa", wt = "data-fa-i2svg", Kr = "data-fa-pseudo-element", kf = "data-fa-pseudo-element-pending", _i = "data-prefix", wi = "data-icon", xa = "fontawesome-i2svg", Ef = "async", Sf = ["HTML", "HEAD", "STYLE", "SCRIPT"], ts = function() {
  try {
    return df.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), G = "classic", ee = "sharp", xi = [G, ee];
function dn(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[G];
    }
  });
}
var an = dn((An = {}, ie(An, G, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), ie(An, ee, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), An)), on = dn((On = {}, ie(On, G, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ie(On, ee, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), On)), sn = dn((Cn = {}, ie(Cn, G, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ie(Cn, ee, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Cn)), Af = dn((Pn = {}, ie(Pn, G, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ie(Pn, ee, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Pn)), Of = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, ns = "fa-layers-text", Cf = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Pf = dn((In = {}, ie(In, G, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ie(In, ee, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), In)), rs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], If = rs.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Tf = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], gt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, ln = /* @__PURE__ */ new Set();
Object.keys(on[G]).map(ln.add.bind(ln));
Object.keys(on[ee]).map(ln.add.bind(ln));
var Nf = [].concat(xi, un(ln), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", gt.GROUP, gt.SWAP_OPACITY, gt.PRIMARY, gt.SECONDARY]).concat(rs.map(function(e) {
  return "".concat(e, "x");
})).concat(If.map(function(e) {
  return "w-".concat(e);
})), qt = at.FontAwesomeConfig || {};
function Rf(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Mf(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Y && typeof Y.querySelector == "function") {
  var Df = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Df.forEach(function(e) {
    var t = bi(e, 2), n = t[0], r = t[1], i = Mf(Rf(n));
    i != null && (qt[r] = i);
  });
}
var is = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Qo,
  replacementClass: es,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
qt.familyPrefix && (qt.cssPrefix = qt.familyPrefix);
var Rt = O(O({}, is), qt);
Rt.autoReplaceSvg || (Rt.observeMutations = !1);
var P = {};
Object.keys(is).forEach(function(e) {
  Object.defineProperty(P, e, {
    enumerable: !0,
    set: function(n) {
      Rt[e] = n, Jt.forEach(function(r) {
        return r(P);
      });
    },
    get: function() {
      return Rt[e];
    }
  });
});
Object.defineProperty(P, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    Rt.cssPrefix = t, Jt.forEach(function(n) {
      return n(P);
    });
  },
  get: function() {
    return Rt.cssPrefix;
  }
});
at.FontAwesomeConfig = P;
var Jt = [];
function Lf(e) {
  return Jt.push(e), function() {
    Jt.splice(Jt.indexOf(e), 1);
  };
}
var Je = Br, De = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Uf(e) {
  if (!(!e || !Ye)) {
    var t = Y.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Y.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i], o = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = a);
    }
    return Y.head.insertBefore(t, r), e;
  }
}
var Ff = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function cn() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Ff[Math.random() * 62 | 0];
  return t;
}
function Mt(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function ki(e) {
  return e.classList ? Mt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function as(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function jf(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(as(e[n]), '" ');
  }, "").trim();
}
function fr(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Ei(e) {
  return e.size !== De.size || e.x !== De.x || e.y !== De.y || e.rotate !== De.rotate || e.flipX || e.flipY;
}
function zf(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(o, " ").concat(s)
  }, f = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: f
  };
}
function Hf(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Br : n, i = e.height, a = i === void 0 ? Br : i, o = e.startCentered, s = o === void 0 ? !1 : o, l = "";
  return s && Zo ? l += "translate(".concat(t.x / Je - r / 2, "em, ").concat(t.y / Je - a / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(t.x / Je, "em), calc(-50% + ").concat(t.y / Je, "em)) ") : l += "translate(".concat(t.x / Je, "em, ").concat(t.y / Je, "em) "), l += "scale(".concat(t.size / Je * (t.flipX ? -1 : 1), ", ").concat(t.size / Je * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Vf = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function os() {
  var e = Qo, t = es, n = P.cssPrefix, r = P.replacementClass, i = Vf;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
var ka = !1;
function Ar() {
  P.autoAddCss && !ka && (Uf(os()), ka = !0);
}
var $f = {
  mixout: function() {
    return {
      dom: {
        css: os,
        insertCss: Ar
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Ar();
      },
      beforeI2svg: function() {
        Ar();
      }
    };
  }
}, $e = at || {};
$e[Ve] || ($e[Ve] = {});
$e[Ve].styles || ($e[Ve].styles = {});
$e[Ve].hooks || ($e[Ve].hooks = {});
$e[Ve].shims || ($e[Ve].shims = []);
var Ce = $e[Ve], ss = [], Bf = function e() {
  Y.removeEventListener("DOMContentLoaded", e), Yn = 1, ss.map(function(t) {
    return t();
  });
}, Yn = !1;
Ye && (Yn = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Yn || Y.addEventListener("DOMContentLoaded", Bf));
function Kf(e) {
  Ye && (Yn ? setTimeout(e, 0) : ss.push(e));
}
function mn(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
  return typeof e == "string" ? as(e) : "<".concat(t, " ").concat(jf(r), ">").concat(a.map(mn).join(""), "</").concat(t, ">");
}
function Ea(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Or = function(t, n, r, i) {
  var a = Object.keys(t), o = a.length, s = n, l, f, u;
  for (r === void 0 ? (l = 1, u = t[a[0]]) : (l = 0, u = r); l < o; l++)
    f = a[l], u = s(u, t[f], f, t);
  return u;
};
function Wf(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var a = e.charCodeAt(n++);
      (a & 64512) == 56320 ? t.push(((i & 1023) << 10) + (a & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function Wr(e) {
  var t = Wf(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Gf(e, t) {
  var n = e.length, r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Sa(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], i = !!r.icon;
    return i ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Gr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, i = r === void 0 ? !1 : r, a = Sa(t);
  typeof Ce.hooks.addPack == "function" && !i ? Ce.hooks.addPack(e, Sa(t)) : Ce.styles[e] = O(O({}, Ce.styles[e] || {}), a), e === "fas" && Gr("fa", t);
}
var Tn, Nn, Rn, St = Ce.styles, Yf = Ce.shims, Xf = (Tn = {}, ie(Tn, G, Object.values(sn[G])), ie(Tn, ee, Object.values(sn[ee])), Tn), Si = null, ls = {}, cs = {}, fs = {}, us = {}, ds = {}, qf = (Nn = {}, ie(Nn, G, Object.keys(an[G])), ie(Nn, ee, Object.keys(an[ee])), Nn);
function Jf(e) {
  return ~Nf.indexOf(e);
}
function Zf(e, t) {
  var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Jf(i) ? i : null;
}
var ms = function() {
  var t = function(a) {
    return Or(St, function(o, s, l) {
      return o[l] = Or(s, a, {}), o;
    }, {});
  };
  ls = t(function(i, a, o) {
    if (a[3] && (i[a[3]] = o), a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        i[l.toString(16)] = o;
      });
    }
    return i;
  }), cs = t(function(i, a, o) {
    if (i[o] = o, a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        i[l] = o;
      });
    }
    return i;
  }), ds = t(function(i, a, o) {
    var s = a[2];
    return i[o] = o, s.forEach(function(l) {
      i[l] = o;
    }), i;
  });
  var n = "far" in St || P.autoFetchSvg, r = Or(Yf, function(i, a) {
    var o = a[0], s = a[1], l = a[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (i.names[o] = {
      prefix: s,
      iconName: l
    }), typeof o == "number" && (i.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: l
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  fs = r.names, us = r.unicodes, Si = ur(P.styleDefault, {
    family: P.familyDefault
  });
};
Lf(function(e) {
  Si = ur(e.styleDefault, {
    family: P.familyDefault
  });
});
ms();
function Ai(e, t) {
  return (ls[e] || {})[t];
}
function Qf(e, t) {
  return (cs[e] || {})[t];
}
function vt(e, t) {
  return (ds[e] || {})[t];
}
function ps(e) {
  return fs[e] || {
    prefix: null,
    iconName: null
  };
}
function eu(e) {
  var t = us[e], n = Ai("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ot() {
  return Si;
}
var Oi = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ur(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? G : n, i = an[r][e], a = on[r][e] || on[r][i], o = e in Ce.styles ? e : null;
  return a || o || null;
}
var Aa = (Rn = {}, ie(Rn, G, Object.keys(sn[G])), ie(Rn, ee, Object.keys(sn[ee])), Rn);
function dr(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, a = (t = {}, ie(t, G, "".concat(P.cssPrefix, "-").concat(G)), ie(t, ee, "".concat(P.cssPrefix, "-").concat(ee)), t), o = null, s = G;
  (e.includes(a[G]) || e.some(function(f) {
    return Aa[G].includes(f);
  })) && (s = G), (e.includes(a[ee]) || e.some(function(f) {
    return Aa[ee].includes(f);
  })) && (s = ee);
  var l = e.reduce(function(f, u) {
    var m = Zf(P.cssPrefix, u);
    if (St[u] ? (u = Xf[s].includes(u) ? Af[s][u] : u, o = u, f.prefix = u) : qf[s].indexOf(u) > -1 ? (o = u, f.prefix = ur(u, {
      family: s
    })) : m ? f.iconName = m : u !== P.replacementClass && u !== a[G] && u !== a[ee] && f.rest.push(u), !i && f.prefix && f.iconName) {
      var v = o === "fa" ? ps(f.iconName) : {}, E = vt(f.prefix, f.iconName);
      v.prefix && (o = null), f.iconName = v.iconName || E || f.iconName, f.prefix = v.prefix || f.prefix, f.prefix === "far" && !St.far && St.fas && !P.autoFetchSvg && (f.prefix = "fas");
    }
    return f;
  }, Oi());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && s === ee && (St.fass || P.autoFetchSvg) && (l.prefix = "fass", l.iconName = vt(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || o === "fa") && (l.prefix = ot() || "fas"), l;
}
var tu = /* @__PURE__ */ function() {
  function e() {
    mf(this, e), this.definitions = {};
  }
  return hf(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      var o = i.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = O(O({}, n.definitions[s] || {}), o[s]), Gr(s, o[s]);
        var l = sn[G][s];
        l && Gr(l, o[s]), ms();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var i = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(i).map(function(a) {
        var o = i[a], s = o.prefix, l = o.iconName, f = o.icon, u = f[2];
        n[s] || (n[s] = {}), u.length > 0 && u.forEach(function(m) {
          typeof m == "string" && (n[s][m] = f);
        }), n[s][l] = f;
      }), n;
    }
  }]), e;
}(), Oa = [], At = {}, Tt = {}, nu = Object.keys(Tt);
function ru(e, t) {
  var n = t.mixoutsTo;
  return Oa = e, At = {}, Object.keys(Tt).forEach(function(r) {
    nu.indexOf(r) === -1 && delete Tt[r];
  }), Oa.forEach(function(r) {
    var i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach(function(o) {
      typeof i[o] == "function" && (n[o] = i[o]), Gn(i[o]) === "object" && Object.keys(i[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = i[o][s];
      });
    }), r.hooks) {
      var a = r.hooks();
      Object.keys(a).forEach(function(o) {
        At[o] || (At[o] = []), At[o].push(a[o]);
      });
    }
    r.provides && r.provides(Tt);
  }), n;
}
function Yr(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var a = At[e] || [];
  return a.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function xt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = At[e] || [];
  i.forEach(function(a) {
    a.apply(null, n);
  });
}
function Be() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Tt[e] ? Tt[e].apply(null, t) : void 0;
}
function Xr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || ot();
  if (t)
    return t = vt(n, t) || t, Ea(hs.definitions, n, t) || Ea(Ce.styles, n, t);
}
var hs = new tu(), iu = function() {
  P.autoReplaceSvg = !1, P.observeMutations = !1, xt("noAuto");
}, au = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ye ? (xt("beforeI2svg", t), Be("pseudoElements2svg", t), Be("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    P.autoReplaceSvg === !1 && (P.autoReplaceSvg = !0), P.observeMutations = !0, Kf(function() {
      su({
        autoReplaceSvgRoot: n
      }), xt("watch", t);
    });
  }
}, ou = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Gn(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: vt(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = ur(t[0]);
      return {
        prefix: r,
        iconName: vt(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(P.cssPrefix, "-")) > -1 || t.match(Of))) {
      var i = dr(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || ot(),
        iconName: vt(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof t == "string") {
      var a = ot();
      return {
        prefix: a,
        iconName: vt(a, t) || t
      };
    }
  }
}, _e = {
  noAuto: iu,
  config: P,
  dom: au,
  parse: ou,
  library: hs,
  findIconDefinition: Xr,
  toHtml: mn
}, su = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? Y : n;
  (Object.keys(Ce.styles).length > 0 || P.autoFetchSvg) && Ye && P.autoReplaceSvg && _e.dom.i2svg({
    node: r
  });
};
function mr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return mn(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Ye) {
        var r = Y.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function lu(e) {
  var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, o = e.transform;
  if (Ei(o) && n.found && !r.found) {
    var s = n.width, l = n.height, f = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = fr(O(O({}, a), {}, {
      "transform-origin": "".concat(f.x + o.x / 16, "em ").concat(f.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function cu(e) {
  var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, o = a === !0 ? "".concat(t, "-").concat(P.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: O(O({}, i), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function Ci(e) {
  var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, o = e.transform, s = e.symbol, l = e.title, f = e.maskId, u = e.titleId, m = e.extra, v = e.watchable, E = v === void 0 ? !1 : v, U = r.found ? r : n, S = U.width, z = U.height, b = i === "fak", x = [P.replacementClass, a ? "".concat(P.cssPrefix, "-").concat(a) : ""].filter(function(we) {
    return m.classes.indexOf(we) === -1;
  }).filter(function(we) {
    return we !== "" || !!we;
  }).concat(m.classes).join(" "), I = {
    children: [],
    attributes: O(O({}, m.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: x,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(S, " ").concat(z)
    })
  }, F = b && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(S / z * 16 * 0.0625, "em")
  } : {};
  E && (I.attributes[wt] = ""), l && (I.children.push({
    tag: "title",
    attributes: {
      id: I.attributes["aria-labelledby"] || "title-".concat(u || cn())
    },
    children: [l]
  }), delete I.attributes.title);
  var V = O(O({}, I), {}, {
    prefix: i,
    iconName: a,
    main: n,
    mask: r,
    maskId: f,
    transform: o,
    symbol: s,
    styles: O(O({}, F), m.styles)
  }), D = r.found && n.found ? Be("generateAbstractMask", V) || {
    children: [],
    attributes: {}
  } : Be("generateAbstractIcon", V) || {
    children: [],
    attributes: {}
  }, J = D.children, fe = D.attributes;
  return V.children = J, V.attributes = fe, s ? cu(V) : lu(V);
}
function Ca(e) {
  var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.title, o = e.extra, s = e.watchable, l = s === void 0 ? !1 : s, f = O(O(O({}, o.attributes), a ? {
    title: a
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  l && (f[wt] = "");
  var u = O({}, o.styles);
  Ei(i) && (u.transform = Hf({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var m = fr(u);
  m.length > 0 && (f.style = m);
  var v = [];
  return v.push({
    tag: "span",
    attributes: f,
    children: [t]
  }), a && v.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), v;
}
function fu(e) {
  var t = e.content, n = e.title, r = e.extra, i = O(O(O({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = fr(r.styles);
  a.length > 0 && (i.style = a);
  var o = [];
  return o.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var Cr = Ce.styles;
function qr(e) {
  var t = e[0], n = e[1], r = e.slice(4), i = bi(r, 1), a = i[0], o = null;
  return Array.isArray(a) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(P.cssPrefix, "-").concat(gt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(P.cssPrefix, "-").concat(gt.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(P.cssPrefix, "-").concat(gt.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
var uu = {
  found: !1,
  width: 512,
  height: 512
};
function du(e, t) {
  !ts && !P.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Jr(e, t) {
  var n = t;
  return t === "fa" && P.styleDefault !== null && (t = ot()), new Promise(function(r, i) {
    if (Be("missingIconAbstract"), n === "fa") {
      var a = ps(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && Cr[t] && Cr[t][e]) {
      var o = Cr[t][e];
      return r(qr(o));
    }
    du(e, t), r(O(O({}, uu), {}, {
      icon: P.showMissingIcons && e ? Be("missingIconAbstract") || {} : {}
    }));
  });
}
var Pa = function() {
}, Zr = P.measurePerformance && Sn && Sn.mark && Sn.measure ? Sn : {
  mark: Pa,
  measure: Pa
}, $t = 'FA "6.5.2"', mu = function(t) {
  return Zr.mark("".concat($t, " ").concat(t, " begins")), function() {
    return gs(t);
  };
}, gs = function(t) {
  Zr.mark("".concat($t, " ").concat(t, " ends")), Zr.measure("".concat($t, " ").concat(t), "".concat($t, " ").concat(t, " begins"), "".concat($t, " ").concat(t, " ends"));
}, Pi = {
  begin: mu,
  end: gs
}, zn = function() {
};
function Ia(e) {
  var t = e.getAttribute ? e.getAttribute(wt) : null;
  return typeof t == "string";
}
function pu(e) {
  var t = e.getAttribute ? e.getAttribute(_i) : null, n = e.getAttribute ? e.getAttribute(wi) : null;
  return t && n;
}
function hu(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(P.replacementClass);
}
function gu() {
  if (P.autoReplaceSvg === !0)
    return Hn.replace;
  var e = Hn[P.autoReplaceSvg];
  return e || Hn.replace;
}
function vu(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function bu(e) {
  return Y.createElement(e);
}
function vs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? vu : bu : n;
  if (typeof e == "string")
    return Y.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    i.setAttribute(o, e.attributes[o]);
  });
  var a = e.children || [];
  return a.forEach(function(o) {
    i.appendChild(vs(o, {
      ceFn: r
    }));
  }), i;
}
function yu(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Hn = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(i) {
        n.parentNode.insertBefore(vs(i), n);
      }), n.getAttribute(wt) === null && P.keepOriginalSource) {
        var r = Y.createComment(yu(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~ki(n).indexOf(P.replacementClass))
      return Hn.replace(t);
    var i = new RegExp("".concat(P.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var a = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === P.replacementClass || l.match(i) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return mn(s);
    }).join(`
`);
    n.setAttribute(wt, ""), n.innerHTML = o;
  }
};
function Ta(e) {
  e();
}
function bs(e, t) {
  var n = typeof t == "function" ? t : zn;
  if (e.length === 0)
    n();
  else {
    var r = Ta;
    P.mutateApproach === Ef && (r = at.requestAnimationFrame || Ta), r(function() {
      var i = gu(), a = Pi.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
var Ii = !1;
function ys() {
  Ii = !0;
}
function Qr() {
  Ii = !1;
}
var Xn = null;
function Na(e) {
  if (wa && P.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? zn : t, r = e.nodeCallback, i = r === void 0 ? zn : r, a = e.pseudoElementsCallback, o = a === void 0 ? zn : a, s = e.observeMutationsRoot, l = s === void 0 ? Y : s;
    Xn = new wa(function(f) {
      if (!Ii) {
        var u = ot();
        Mt(f).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !Ia(m.addedNodes[0]) && (P.searchPseudoElements && o(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && P.searchPseudoElements && o(m.target.parentNode), m.type === "attributes" && Ia(m.target) && ~Tf.indexOf(m.attributeName))
            if (m.attributeName === "class" && pu(m.target)) {
              var v = dr(ki(m.target)), E = v.prefix, U = v.iconName;
              m.target.setAttribute(_i, E || u), U && m.target.setAttribute(wi, U);
            } else
              hu(m.target) && i(m.target);
        });
      }
    }), Ye && Xn.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function _u() {
  Xn && Xn.disconnect();
}
function wu(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, i) {
    var a = i.split(":"), o = a[0], s = a.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function xu(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", i = dr(ki(e));
  return i.prefix || (i.prefix = ot()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Qf(i.prefix, e.innerText) || Ai(i.prefix, Wr(e.innerText))), !i.iconName && P.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function ku(e) {
  var t = Mt(e.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return P.autoA11y && (n ? t["aria-labelledby"] = "".concat(P.replacementClass, "-title-").concat(r || cn()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function Eu() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: De,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Ra(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = xu(e), r = n.iconName, i = n.prefix, a = n.rest, o = ku(e), s = Yr("parseNodeAttributes", {}, e), l = t.styleParser ? wu(e) : [];
  return O({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: i,
    transform: De,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: o
    }
  }, s);
}
var Su = Ce.styles;
function _s(e) {
  var t = P.autoReplaceSvg === "nest" ? Ra(e, {
    styleParser: !1
  }) : Ra(e);
  return ~t.extra.classes.indexOf(ns) ? Be("generateLayersText", e, t) : Be("generateSvgReplacementMutation", e, t);
}
var st = /* @__PURE__ */ new Set();
xi.map(function(e) {
  st.add("fa-".concat(e));
});
Object.keys(an[G]).map(st.add.bind(st));
Object.keys(an[ee]).map(st.add.bind(st));
st = un(st);
function Ma(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ye)
    return Promise.resolve();
  var n = Y.documentElement.classList, r = function(m) {
    return n.add("".concat(xa, "-").concat(m));
  }, i = function(m) {
    return n.remove("".concat(xa, "-").concat(m));
  }, a = P.autoFetchSvg ? st : xi.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(Su));
  a.includes("fa") || a.push("fa");
  var o = [".".concat(ns, ":not([").concat(wt, "])")].concat(a.map(function(u) {
    return ".".concat(u, ":not([").concat(wt, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Mt(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  var l = Pi.begin("onTree"), f = s.reduce(function(u, m) {
    try {
      var v = _s(m);
      v && u.push(v);
    } catch (E) {
      ts || E.name === "MissingIcon" && console.error(E);
    }
    return u;
  }, []);
  return new Promise(function(u, m) {
    Promise.all(f).then(function(v) {
      bs(v, function() {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(v) {
      l(), m(v);
    });
  });
}
function Au(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  _s(e).then(function(n) {
    n && bs([n], t);
  });
}
function Ou(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Xr(t || {}), i = n.mask;
    return i && (i = (i || {}).icon ? i : Xr(i || {})), e(r, O(O({}, n), {}, {
      mask: i
    }));
  };
}
var Cu = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? De : r, a = n.symbol, o = a === void 0 ? !1 : a, s = n.mask, l = s === void 0 ? null : s, f = n.maskId, u = f === void 0 ? null : f, m = n.title, v = m === void 0 ? null : m, E = n.titleId, U = E === void 0 ? null : E, S = n.classes, z = S === void 0 ? [] : S, b = n.attributes, x = b === void 0 ? {} : b, I = n.styles, F = I === void 0 ? {} : I;
  if (t) {
    var V = t.prefix, D = t.iconName, J = t.icon;
    return mr(O({
      type: "icon"
    }, t), function() {
      return xt("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), P.autoA11y && (v ? x["aria-labelledby"] = "".concat(P.replacementClass, "-title-").concat(U || cn()) : (x["aria-hidden"] = "true", x.focusable = "false")), Ci({
        icons: {
          main: qr(J),
          mask: l ? qr(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: V,
        iconName: D,
        transform: O(O({}, De), i),
        symbol: o,
        title: v,
        maskId: u,
        titleId: U,
        extra: {
          attributes: x,
          styles: F,
          classes: z
        }
      });
    });
  }
}, Pu = {
  mixout: function() {
    return {
      icon: Ou(Cu)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Ma, n.nodeCallback = Au, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, i = r === void 0 ? Y : r, a = n.callback, o = a === void 0 ? function() {
      } : a;
      return Ma(i, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var i = r.iconName, a = r.title, o = r.titleId, s = r.prefix, l = r.transform, f = r.symbol, u = r.mask, m = r.maskId, v = r.extra;
      return new Promise(function(E, U) {
        Promise.all([Jr(i, s), u.iconName ? Jr(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(S) {
          var z = bi(S, 2), b = z[0], x = z[1];
          E([n, Ci({
            icons: {
              main: b,
              mask: x
            },
            prefix: s,
            iconName: i,
            transform: l,
            symbol: f,
            maskId: m,
            title: a,
            titleId: o,
            extra: v,
            watchable: !0
          })]);
        }).catch(U);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, i = n.attributes, a = n.main, o = n.transform, s = n.styles, l = fr(s);
      l.length > 0 && (i.style = l);
      var f;
      return Ei(o) && (f = Be("generateAbstractTransformGrouping", {
        main: a,
        transform: o,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(f || a.icon), {
        children: r,
        attributes: i
      };
    };
  }
}, Iu = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.classes, a = i === void 0 ? [] : i;
        return mr({
          type: "layer"
        }, function() {
          xt("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              o = o.concat(l.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(P.cssPrefix, "-layers")].concat(un(a)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Tu = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.title, a = i === void 0 ? null : i, o = r.classes, s = o === void 0 ? [] : o, l = r.attributes, f = l === void 0 ? {} : l, u = r.styles, m = u === void 0 ? {} : u;
        return mr({
          type: "counter",
          content: n
        }, function() {
          return xt("beforeDOMElementCreation", {
            content: n,
            params: r
          }), fu({
            content: n.toString(),
            title: a,
            extra: {
              attributes: f,
              styles: m,
              classes: ["".concat(P.cssPrefix, "-layers-counter")].concat(un(s))
            }
          });
        });
      }
    };
  }
}, Nu = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.transform, a = i === void 0 ? De : i, o = r.title, s = o === void 0 ? null : o, l = r.classes, f = l === void 0 ? [] : l, u = r.attributes, m = u === void 0 ? {} : u, v = r.styles, E = v === void 0 ? {} : v;
        return mr({
          type: "text",
          content: n
        }, function() {
          return xt("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ca({
            content: n,
            transform: O(O({}, De), a),
            title: s,
            extra: {
              attributes: m,
              styles: E,
              classes: ["".concat(P.cssPrefix, "-layers-text")].concat(un(f))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var i = r.title, a = r.transform, o = r.extra, s = null, l = null;
      if (Zo) {
        var f = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        s = u.width / f, l = u.height / f;
      }
      return P.autoA11y && !i && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, Ca({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: a,
        title: i,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, Ru = new RegExp('"', "ug"), Da = [1105920, 1112319];
function Mu(e) {
  var t = e.replace(Ru, ""), n = Gf(t, 0), r = n >= Da[0] && n <= Da[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Wr(i ? t[0] : t),
    isSecondary: r || i
  };
}
function La(e, t) {
  var n = "".concat(kf).concat(t.replace(":", "-"));
  return new Promise(function(r, i) {
    if (e.getAttribute(n) !== null)
      return r();
    var a = Mt(e.children), o = a.filter(function(J) {
      return J.getAttribute(Kr) === t;
    })[0], s = at.getComputedStyle(e, t), l = s.getPropertyValue("font-family").match(Cf), f = s.getPropertyValue("font-weight"), u = s.getPropertyValue("content");
    if (o && !l)
      return e.removeChild(o), r();
    if (l && u !== "none" && u !== "") {
      var m = s.getPropertyValue("content"), v = ~["Sharp"].indexOf(l[2]) ? ee : G, E = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? on[v][l[2].toLowerCase()] : Pf[v][f], U = Mu(m), S = U.value, z = U.isSecondary, b = l[0].startsWith("FontAwesome"), x = Ai(E, S), I = x;
      if (b) {
        var F = eu(S);
        F.iconName && F.prefix && (x = F.iconName, E = F.prefix);
      }
      if (x && !z && (!o || o.getAttribute(_i) !== E || o.getAttribute(wi) !== I)) {
        e.setAttribute(n, I), o && e.removeChild(o);
        var V = Eu(), D = V.extra;
        D.attributes[Kr] = t, Jr(x, E).then(function(J) {
          var fe = Ci(O(O({}, V), {}, {
            icons: {
              main: J,
              mask: Oi()
            },
            prefix: E,
            iconName: I,
            extra: D,
            watchable: !0
          })), we = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(we, e.firstChild) : e.appendChild(we), we.outerHTML = fe.map(function(Le) {
            return mn(Le);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function Du(e) {
  return Promise.all([La(e, "::before"), La(e, "::after")]);
}
function Lu(e) {
  return e.parentNode !== document.head && !~Sf.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Kr) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ua(e) {
  if (Ye)
    return new Promise(function(t, n) {
      var r = Mt(e.querySelectorAll("*")).filter(Lu).map(Du), i = Pi.begin("searchPseudoElements");
      ys(), Promise.all(r).then(function() {
        i(), Qr(), t();
      }).catch(function() {
        i(), Qr(), n();
      });
    });
}
var Uu = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Ua, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, i = r === void 0 ? Y : r;
      P.searchPseudoElements && Ua(i);
    };
  }
}, Fa = !1, Fu = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ys(), Fa = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Na(Yr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        _u();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        Fa ? Qr() : Na(Yr("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, ja = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, i) {
    var a = i.toLowerCase().split("-"), o = a[0], s = a.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, ju = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return ja(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-transform");
        return i && (n.transform = ja(i)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, i = n.transform, a = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), f = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), u = "rotate(".concat(i.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(f, " ").concat(u)
      }, v = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, E = {
        outer: s,
        inner: m,
        path: v
      };
      return {
        tag: "g",
        attributes: O({}, E.outer),
        children: [{
          tag: "g",
          attributes: O({}, E.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: O(O({}, r.icon.attributes), E.path)
          }]
        }]
      };
    };
  }
}, Pr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function zu(e) {
  return e.tag === "g" ? e.children : [e];
}
var Hu = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-mask"), a = i ? dr(i.split(" ").map(function(o) {
          return o.trim();
        })) : Oi();
        return a.prefix || (a.prefix = ot()), n.mask = a, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, i = n.attributes, a = n.main, o = n.mask, s = n.maskId, l = n.transform, f = a.width, u = a.icon, m = o.width, v = o.icon, E = zf({
        transform: l,
        containerWidth: m,
        iconWidth: f
      }), U = {
        tag: "rect",
        attributes: O(O({}, Pr), {}, {
          fill: "white"
        })
      }, S = u.children ? {
        children: u.children.map(za)
      } : {}, z = {
        tag: "g",
        attributes: O({}, E.inner),
        children: [za(O({
          tag: u.tag,
          attributes: O(O({}, u.attributes), E.path)
        }, S))]
      }, b = {
        tag: "g",
        attributes: O({}, E.outer),
        children: [z]
      }, x = "mask-".concat(s || cn()), I = "clip-".concat(s || cn()), F = {
        tag: "mask",
        attributes: O(O({}, Pr), {}, {
          id: x,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [U, b]
      }, V = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: zu(v)
        }, F]
      };
      return r.push(V, {
        tag: "rect",
        attributes: O({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(x, ")")
        }, Pr)
      }), {
        children: r,
        attributes: i
      };
    };
  }
}, Vu = {
  provides: function(t) {
    var n = !1;
    at.matchMedia && (n = at.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], i = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: O(O({}, i), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = O(O({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: O(O({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: O(O({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: O(O({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: O(O({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: O(O({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: O(O({}, i), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: O(O({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, $u = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return n.symbol = a, n;
      }
    };
  }
}, Bu = [$f, Pu, Iu, Tu, Nu, Uu, Fu, ju, Hu, Vu, $u];
ru(Bu, {
  mixoutsTo: _e
});
_e.noAuto;
_e.config;
var Ku = _e.library;
_e.dom;
var ei = _e.parse;
_e.findIconDefinition;
_e.toHtml;
var Wu = _e.icon;
_e.layer;
_e.text;
_e.counter;
var Gu = { NVM_INC: "/Users/cm/.nvm/versions/node/v19.7.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", TERM_PROGRAM_VERSION: "1.89.0", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "9.8.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v19.7.0/bin", npm_config_user_agent: "npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
function Ha(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Fe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ha(Object(n), !0).forEach(function(r) {
      pe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ha(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function qn(e) {
  "@babel/helpers - typeof";
  return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qn(e);
}
function pe(e, t, n) {
  return t = Ju(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Yu(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function Xu(e, t) {
  if (e == null)
    return {};
  var n = Yu(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function qu(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ju(e) {
  var t = qu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Zu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ws = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(b, x, I) {
      if (!f(x) || m(x) || v(x) || E(x) || l(x))
        return x;
      var F, V = 0, D = 0;
      if (u(x))
        for (F = [], D = x.length; V < D; V++)
          F.push(n(b, x[V], I));
      else {
        F = {};
        for (var J in x)
          Object.prototype.hasOwnProperty.call(x, J) && (F[b(J, I)] = n(b, x[J], I));
      }
      return F;
    }, r = function(b, x) {
      x = x || {};
      var I = x.separator || "_", F = x.split || /(?=[A-Z])/;
      return b.split(F).join(I);
    }, i = function(b) {
      return U(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function(x, I) {
        return I ? I.toUpperCase() : "";
      }), b.substr(0, 1).toLowerCase() + b.substr(1));
    }, a = function(b) {
      var x = i(b);
      return x.substr(0, 1).toUpperCase() + x.substr(1);
    }, o = function(b, x) {
      return r(b, x).toLowerCase();
    }, s = Object.prototype.toString, l = function(b) {
      return typeof b == "function";
    }, f = function(b) {
      return b === Object(b);
    }, u = function(b) {
      return s.call(b) == "[object Array]";
    }, m = function(b) {
      return s.call(b) == "[object Date]";
    }, v = function(b) {
      return s.call(b) == "[object RegExp]";
    }, E = function(b) {
      return s.call(b) == "[object Boolean]";
    }, U = function(b) {
      return b = b - 0, b === b;
    }, S = function(b, x) {
      var I = x && "process" in x ? x.process : x;
      return typeof I != "function" ? b : function(F, V) {
        return I(F, b, V);
      };
    }, z = {
      camelize: i,
      decamelize: o,
      pascalize: a,
      depascalize: o,
      camelizeKeys: function(b, x) {
        return n(S(i, x), b);
      },
      decamelizeKeys: function(b, x) {
        return n(S(o, x), b, x);
      },
      pascalizeKeys: function(b, x) {
        return n(S(a, x), b);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = z : t.humps = z;
  })(Zu);
})(ws);
var Qu = ws.exports, ed = ["class", "style"];
function td(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = Qu.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[i] = a, t;
  }, {});
}
function nd(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function xs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return xs(l);
  }), i = Object.keys(e.attributes || {}).reduce(function(l, f) {
    var u = e.attributes[f];
    switch (f) {
      case "class":
        l.class = nd(u);
        break;
      case "style":
        l.style = td(u);
        break;
      default:
        l.attrs[f] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, o = a === void 0 ? {} : a, s = Xu(n, ed);
  return Oc(e.tag, Fe(Fe(Fe({}, t), {}, {
    class: i.class,
    style: Fe(Fe({}, i.style), o)
  }, i.attrs), s), r);
}
var ks = !1;
try {
  ks = Gu.NODE_ENV === "production";
} catch {
}
function rd() {
  if (!ks && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ir(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? pe({}, e, t) : {};
}
function id(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, pe(t, "fa-".concat(e.size), e.size !== null), pe(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), pe(t, "fa-pull-".concat(e.pull), e.pull !== null), pe(t, "fa-swap-opacity", e.swapOpacity), pe(t, "fa-bounce", e.bounce), pe(t, "fa-shake", e.shake), pe(t, "fa-beat", e.beat), pe(t, "fa-fade", e.fade), pe(t, "fa-beat-fade", e.beatFade), pe(t, "fa-flash", e.flash), pe(t, "fa-spin-pulse", e.spinPulse), pe(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Va(e) {
  if (e && qn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (ei.icon)
    return ei.icon(e);
  if (e === null)
    return null;
  if (qn(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var dt = /* @__PURE__ */ mi({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, i = mt(function() {
      return Va(t.icon);
    }), a = mt(function() {
      return Ir("classes", id(t));
    }), o = mt(function() {
      return Ir("transform", typeof t.transform == "string" ? ei.transform(t.transform) : t.transform);
    }), s = mt(function() {
      return Ir("mask", Va(t.mask));
    }), l = mt(function() {
      return Wu(i.value, Fe(Fe(Fe(Fe({}, a.value), o.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Dn(l, function(u) {
      if (!u)
        return rd("Could not find one or more icon(s)", i.value, s.value);
    }, {
      immediate: !0
    });
    var f = mt(function() {
      return l.value ? xs(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return f.value;
    };
  }
});
const ad = { class: "flex mt-4 h-full w-full justify-center" }, od = /* @__PURE__ */ Q("h1", { class: "text-4xl" }, [
  /* @__PURE__ */ Q("b", null, "Transcribe your files")
], -1), sd = { key: 0 }, ld = {
  key: 1,
  class: "flex flex-col"
}, cd = /* @__PURE__ */ Q("span", null, [
  /* @__PURE__ */ rn("Drop files here or "),
  /* @__PURE__ */ Q("u", null, "click here"),
  /* @__PURE__ */ rn(" to upload.")
], -1), fd = { class: "flex flex-row items-center gap-3" }, ud = { class: "" }, dd = ["onClick"], md = /* @__PURE__ */ Q("span", null, "Delete", -1), pd = { class: "flex flex-row gap-2" }, hd = ["disabled"], gd = {
  key: 1,
  class: "shadow-md border rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll mb-2"
}, vd = {
  key: 0,
  class: "m-4"
}, bd = { class: "w-full items-center justify-between flex flex-row mb-2" }, yd = { class: "flex flex-row items-center gap-3" }, _d = { class: "" }, wd = { class: "text-left p-4 w-full mb-6 border rounded-2xl" }, xd = {
  key: 0,
  class: "flex w-full text-center justify-center"
}, kd = /* @__PURE__ */ Q("div", {
  style: { color: "var(--primary)" },
  class: "text-center h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
  role: "status"
}, null, -1), Ed = [
  kd
], Sd = {
  key: 1,
  class: "flex flex-row flex-wrap max-w-full h-auto items-center w-full gap-2 mb-lg mb-5"
}, Ad = { class: "tag rounded-lg p-1 px-2 w-auto text-nowrap" }, Od = {
  key: 2,
  class: ""
}, Cd = /* @__PURE__ */ mi({
  __name: "FileUpload.ce",
  emits: ["transcription"],
  setup(e, { emit: t }) {
    Ku.add(uf, sf, cf, ff, of, lf);
    const n = t, r = Ft(!1), i = Ft(!1), a = Ft([]), o = Ft(), s = Ft([]);
    function l() {
      var z;
      let S = Array.from(((z = o.value) == null ? void 0 : z.files) || []);
      S = S.filter((b) => b.type.includes("audio") || b.type.includes("video")), a.value.push(...S);
    }
    function f(S) {
      S.preventDefault(), r.value = !0;
    }
    function u() {
      r.value = !1;
    }
    function m(S) {
      S.preventDefault(), o.value && (o.value.files = S.dataTransfer.files, l()), r.value = !1;
    }
    function v(S) {
      a.value.splice(S, 1);
    }
    function E(S) {
      return S.length > 5 && window.innerWidth < 300 ? S.substring(0, 5) + "..." : S.length > 10 && window.innerWidth < 400 ? S.substring(0, 7) + "..." : S.length > 20 && window.innerWidth < 500 ? S.substring(0, 10) + "..." : S;
    }
    async function U() {
      if (i.value = !i.value, i.value)
        for (let S = 0; S < a.value.length; S++) {
          s.value.push({
            file: a.value[S],
            status: "transcribing...",
            text: "",
            duration: ""
          });
          const z = new FormData();
          z.append("file", a.value[S]), fetch("https://transcribe-test.fly.dev/uploadFull", {
            method: "POST",
            body: z
          }).then(async (b) => {
            let x = await b.json();
            s.value[S].text = x.text, s.value[S].keywords = x.keywords, s.value[S].status = "Done (" + Math.round(x.time / 1e3) + "sec)", n("transcription", s.value[S]);
          });
        }
      else
        s.value = [];
    }
    return (S, z) => (te(), le("div", ad, [
      Q("div", {
        class: er(["main flex flex-col grow gap-4 justify-items-stretch max-w-4xl", { "h-5/6": !i.value }])
      }, [
        od,
        i.value ? Ee("", !0) : (te(), le("div", {
          key: 0,
          class: "flex flex-col justify-center items-center rounded-3xl dropzone-container shadow-inner h-5/6 w-full p-4",
          onDragover: f,
          onDragleave: tf(u, ["prevent", "stop"]),
          onDrop: m
        }, [
          Ml(Q("input", {
            type: "file",
            multiple: "",
            name: "file",
            id: "fileInput",
            onChange: l,
            ref_key: "file",
            ref: o,
            accept: "audio/*, video/*",
            style: Pt({ "pointer-events": r.value ? "none" : "auto" })
          }, null, 36), [
            [Mc, !1]
          ]),
          Q("label", {
            style: Pt({ "pointer-events": r.value ? "none" : "auto" }),
            for: "fileInput",
            class: "text-2xl my-4"
          }, [
            r.value ? (te(), le("div", sd, "Release to drop files here.")) : (te(), le("div", ld, [
              se(Ze(dt), {
                style: { height: "50px" },
                icon: "file-import"
              }),
              cd
            ]))
          ], 4),
          r.value ? Ee("", !0) : (te(), le("div", {
            key: 0,
            style: Pt({ "pointer-events": r.value ? "none" : "auto" }),
            class: "w-full overflow-scroll"
          }, [
            (te(!0), le(xe, null, _r(a.value, (b, x) => (te(), le("div", {
              key: x,
              class: "w-full p-2 items-center justify-between flex flex-row"
            }, [
              Q("div", fd, [
                b.type.includes("audio") ? (te(), Vt(Ze(dt), {
                  key: 0,
                  style: { height: "20px" },
                  icon: "microphone"
                })) : Ee("", !0),
                b.type.includes("video") ? (te(), Vt(Ze(dt), {
                  key: 1,
                  style: { height: "20px" },
                  icon: "video"
                })) : Ee("", !0),
                Q("div", ud, Xe(E(b.name)) + " (" + Xe(Math.round(b.size / 1024 / 1024)) + " MB) ", 1)
              ]),
              Q("button", {
                class: "delete",
                onClick: (I) => v(x)
              }, [
                se(Ze(dt), {
                  style: { height: "15px" },
                  class: "mr-2",
                  icon: "trash"
                }),
                md
              ], 8, dd)
            ]))), 128))
          ], 4))
        ], 32)),
        Q("div", pd, [
          Q("button", {
            disabled: a.value.length == 0,
            class: "button-39",
            style: {},
            onClick: U
          }, [
            se(Ze(dt), {
              style: { height: "15px" },
              class: "mr-2",
              icon: i.value ? "cancel" : "upload"
            }, null, 8, ["icon"]),
            rn(" " + Xe(i.value ? "Cancel" : "Transcribe"), 1)
          ], 8, hd)
        ]),
        i.value ? (te(), le("div", gd, [
          r.value ? Ee("", !0) : (te(), le("div", vd, [
            (te(!0), le(xe, null, _r(s.value, (b, x) => (te(), le("div", {
              key: x,
              class: "w-full gap-1 items-center justify-between flex flex-col"
            }, [
              Q("div", bd, [
                Q("div", yd, [
                  b.file.type.includes("audio") ? (te(), Vt(Ze(dt), {
                    key: 0,
                    style: { height: "20px" },
                    icon: "microphone"
                  })) : Ee("", !0),
                  b.file.type.includes("video") ? (te(), Vt(Ze(dt), {
                    key: 1,
                    style: { height: "20px" },
                    icon: "video"
                  })) : Ee("", !0),
                  Q("div", _d, Xe(b.file.name) + " (" + Xe(Math.round(b.file.size / 1024 / 1024)) + " MB)", 1)
                ]),
                Q("span", null, Xe(b.status), 1)
              ]),
              Q("div", wd, [
                !b.keywords || !b.text ? (te(), le("div", xd, Ed)) : Ee("", !0),
                b.keywords ? (te(), le("div", Sd, [
                  rn(" Keywords: "),
                  (te(!0), le(xe, null, _r(b.keywords, (I) => (te(), le("div", {
                    class: "my-1",
                    key: x
                  }, [
                    Q("span", Ad, Xe(I), 1)
                  ]))), 128))
                ])) : Ee("", !0),
                b.text ? (te(), le("div", Od, Xe(b.text), 1)) : Ee("", !0)
              ])
            ]))), 128))
          ]))
        ])) : Ee("", !0)
      ], 2)
    ]));
  }
}), Pd = '@import"https://fonts.googleapis.com/css?family=Inter";*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.absolute{position:absolute}.m-4{margin:1rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.my-4{margin-top:1rem;margin-bottom:1rem}.mb-2{margin-bottom:.5rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mr-2{margin-right:.5rem}.mt-4{margin-top:1rem}.block{display:block}.flex{display:flex}.hidden{display:none}.h-5\\/6{height:83.333333%}.h-8{height:2rem}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.w-8{width:2rem}.w-auto{width:auto}.w-full{width:100%}.max-w-4xl{max-width:56rem}.max-w-full{max-width:100%}.grow{flex-grow:1}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-stretch{justify-items:stretch}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.overflow-scroll{overflow:scroll}.text-nowrap{text-wrap:nowrap}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.border{border-width:1px}.border-4{border-width:4px}.border-solid{border-style:solid}.border-current{border-color:currentColor}.border-e-transparent{border-inline-end-color:transparent}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-4{padding:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.pt-2{padding-top:.5rem}.text-left{text-align:left}.text-center{text-align:center}.align-\\[-0\\.125em\\]{vertical-align:-.125em}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow-inner{--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.grayscale{--tw-grayscale: grayscale(100%);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.main{font-weight:400;line-height:1;font-size:15px;font-family:Inter,"sans-serif";text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;--primary: rgb(255, 54, 165);align-items:center;justify-content:center;text-align:center}.tag{border:2px solid var(--primary)}.dropzone-container{border:2px solid #e2e8f0}.hidden-input{opacity:0;overflow:hidden;position:absolute;width:1px;height:1px}.file-label{font-size:20px;display:block;cursor:pointer}.preview-container{display:flex;margin-top:2rem}.preview-card{display:flex;border:1px solid #a2a2a2;padding:5px;margin-left:5px}.preview-img{width:50px;height:50px;border-radius:5px;border:1px solid #a2a2a2;background-color:#a2a2a2}.delete{background-color:#fd6868!important}button:hover{box-shadow:0 0 14px #00000080!important;filter:saturate(140%)}button{transition:box-shadow .2s,background-color .5s;filter:.2s;background-color:#ff36a5;border-radius:10px;color:#111827;line-height:1.25rem;padding:.75rem 1rem;text-align:center;cursor:pointer;-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation;display:flex;align-items:center;justify-items:center}.button-39:focus{outline:2px solid transparent;outline-offset:2px}.button-39:disabled{background-color:#c2c2c2}.button-39:disabled:hover{background-color:#c2c2c2;box-shadow:none!important}.button-39:focus-visible{box-shadow:none}@media (prefers-reduced-motion: reduce){@keyframes spin{to{transform:rotate(360deg)}}.motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\]{animation:spin 1.5s linear infinite}}', Id = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Td = /* @__PURE__ */ Id(Cd, [["styles", [Pd]]]), Nd = /* @__PURE__ */ Jc(Td);
customElements.define("file-upload", Nd);
