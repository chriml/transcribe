/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ss(e, t) {
  const s = new Set(e.split(","));
  return (n) => s.has(n);
}
const H = {}, Ye = [], ie = () => {
}, jr = () => !1, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ts = (e) => e.startsWith("onUpdate:"), q = Object.assign, Ps = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Hr = Object.prototype.hasOwnProperty, N = (e, t) => Hr.call(e, t), T = Array.isArray, Ze = (e) => Kt(e) === "[object Map]", In = (e) => Kt(e) === "[object Set]", A = (e) => typeof e == "function", G = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Nn = (e) => (K(e) || A(e)) && A(e.then) && A(e.catch), Mn = Object.prototype.toString, Kt = (e) => Mn.call(e), Vr = (e) => Kt(e).slice(8, -1), Dn = (e) => Kt(e) === "[object Object]", As = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ Ss(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, $r = /-(\w)/g, Oe = Wt((e) => e.replace($r, (t, s) => s ? s.toUpperCase() : "")), Br = /\B([A-Z])/g, _e = Wt(
  (e) => e.replace(Br, "-$1").toLowerCase()
), Fn = Wt((e) => e.charAt(0).toUpperCase() + e.slice(1)), rs = Wt((e) => e ? `on${Fn(e)}` : ""), Le = (e, t) => !Object.is(e, t), os = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Un = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Kr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ys = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Zs;
const Ln = () => Zs || (Zs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rs(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = G(n) ? zr(n) : Rs(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (G(e) || K(e))
    return e;
}
const Wr = /;(?![^(]*\))/g, Gr = /:([^]+)/, kr = /\/\*[^]*?\*\//g;
function zr(e) {
  const t = {};
  return e.replace(kr, "").split(Wr).forEach((s) => {
    if (s) {
      const n = s.split(Gr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Gt(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (T(e))
    for (let s = 0; s < e.length; s++) {
      const n = Gt(e[s]);
      n && (t += n + " ");
    }
  else if (K(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jr = /* @__PURE__ */ Ss(qr);
function jn(e) {
  return !!e || e === "";
}
const $e = (e) => G(e) ? e : e == null ? "" : T(e) || K(e) && (e.toString === Mn || !A(e.toString)) ? JSON.stringify(e, Hn, 2) : String(e), Hn = (e, t) => t && t.__v_isRef ? Hn(e, t.value) : Ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (s, [n, r], o) => (s[is(n, o) + " =>"] = r, s),
    {}
  )
} : In(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((s) => is(s))
} : Je(t) ? is(t) : K(t) && !T(t) && !Dn(t) ? String(t) : t, is = (e, t = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Je(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
  );
};
let he;
class Xr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = he;
      try {
        return he = this, t();
      } finally {
        he = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    he = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    he = this.parent;
  }
  stop(t) {
    if (this._active) {
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.scopes)
        for (s = 0, n = this.scopes.length; s < n; s++)
          this.scopes[s].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Yr(e, t = he) {
  t && t.active && t.effects.push(e);
}
function Zr() {
  return he;
}
let ke;
class Is {
  constructor(t, s, n, r) {
    this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Yr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Pe();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (Qr(s.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ae();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ue, s = ke;
    try {
      return Ue = !0, ke = this, this._runnings++, Qs(this), this.fn();
    } finally {
      en(this), this._runnings--, ke = s, Ue = t;
    }
  }
  stop() {
    this.active && (Qs(this), en(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Qr(e) {
  return e.value;
}
function Qs(e) {
  e._trackId++, e._depsLength = 0;
}
function en(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Vn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Vn(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ue = !0, ps = 0;
const $n = [];
function Pe() {
  $n.push(Ue), Ue = !1;
}
function Ae() {
  const e = $n.pop();
  Ue = e === void 0 ? !0 : e;
}
function Ns() {
  ps++;
}
function Ms() {
  for (ps--; !ps && _s.length; )
    _s.shift()();
}
function Bn(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Vn(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const _s = [];
function Kn(e, t, s) {
  Ns();
  for (const n of e.keys()) {
    let r;
    n._dirtyLevel < t && (r ?? (r = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (r ?? (r = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && _s.push(n.scheduler)));
  }
  Ms();
}
const Wn = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return s.cleanup = e, s.computed = t, s;
}, ms = /* @__PURE__ */ new WeakMap(), ze = Symbol(""), gs = Symbol("");
function ne(e, t, s) {
  if (Ue && ke) {
    let n = ms.get(e);
    n || ms.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || n.set(s, r = Wn(() => n.delete(s))), Bn(
      ke,
      r
    );
  }
}
function Se(e, t, s, n, r, o) {
  const i = ms.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (s === "length" && T(e)) {
    const u = Number(n);
    i.forEach((a, h) => {
      (h === "length" || !Je(h) && h >= u) && c.push(a);
    });
  } else
    switch (s !== void 0 && c.push(i.get(s)), t) {
      case "add":
        T(e) ? As(s) && c.push(i.get("length")) : (c.push(i.get(ze)), Ze(e) && c.push(i.get(gs)));
        break;
      case "delete":
        T(e) || (c.push(i.get(ze)), Ze(e) && c.push(i.get(gs)));
        break;
      case "set":
        Ze(e) && c.push(i.get(ze));
        break;
    }
  Ns();
  for (const u of c)
    u && Kn(
      u,
      4
    );
  Ms();
}
const eo = /* @__PURE__ */ Ss("__proto__,__v_isRef,__isVue"), Gn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
), tn = /* @__PURE__ */ to();
function to() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = D(this);
      for (let o = 0, i = this.length; o < i; o++)
        ne(n, "get", o + "");
      const r = n[t](...s);
      return r === -1 || r === !1 ? n[t](...s.map(D)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      Pe(), Ns();
      const n = D(this)[t].apply(this, s);
      return Ms(), Ae(), n;
    };
  }), e;
}
function so(e) {
  Je(e) || (e = String(e));
  const t = D(this);
  return ne(t, "has", e), t.hasOwnProperty(e);
}
class kn {
  constructor(t = !1, s = !1) {
    this._isReadonly = t, this._isShallow = s;
  }
  get(t, s, n) {
    const r = this._isReadonly, o = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return o;
    if (s === "__v_raw")
      return n === (r ? o ? Zn : Yn : o ? Xn : Jn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = T(t);
    if (!r) {
      if (i && N(tn, s))
        return Reflect.get(tn, s, n);
      if (s === "hasOwnProperty")
        return so;
    }
    const c = Reflect.get(t, s, n);
    return (Je(s) ? Gn.has(s) : eo(s)) || (r || ne(t, "get", s), o) ? c : te(c) ? i && As(s) ? c : c.value : K(c) ? r ? Qn(c) : Fs(c) : c;
  }
}
class zn extends kn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (!this._isShallow) {
      const u = _t(o);
      if (!Lt(n) && !_t(n) && (o = D(o), n = D(n)), !T(t) && te(o) && !te(n))
        return u ? !1 : (o.value = n, !0);
    }
    const i = T(t) && As(s) ? Number(s) < t.length : N(t, s), c = Reflect.set(t, s, n, r);
    return t === D(r) && (i ? Le(n, o) && Se(t, "set", s, n) : Se(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = N(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Se(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!Je(s) || !Gn.has(s)) && ne(t, "has", s), n;
  }
  ownKeys(t) {
    return ne(
      t,
      "iterate",
      T(t) ? "length" : ze
    ), Reflect.ownKeys(t);
  }
}
class qn extends kn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, s) {
    return !0;
  }
  deleteProperty(t, s) {
    return !0;
  }
}
const no = /* @__PURE__ */ new zn(), ro = /* @__PURE__ */ new qn(), oo = /* @__PURE__ */ new zn(
  !0
), io = /* @__PURE__ */ new qn(!0), Ds = (e) => e, kt = (e) => Reflect.getPrototypeOf(e);
function Ot(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = D(e), o = D(t);
  s || (Le(t, o) && ne(r, "get", t), ne(r, "get", o));
  const { has: i } = kt(r), c = n ? Ds : s ? Us : mt;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function St(e, t = !1) {
  const s = this.__v_raw, n = D(s), r = D(e);
  return t || (Le(e, r) && ne(n, "has", e), ne(n, "has", r)), e === r ? s.has(e) : s.has(e) || s.has(r);
}
function Tt(e, t = !1) {
  return e = e.__v_raw, !t && ne(D(e), "iterate", ze), Reflect.get(e, "size", e);
}
function sn(e) {
  e = D(e);
  const t = D(this);
  return kt(t).has.call(t, e) || (t.add(e), Se(t, "add", e, e)), this;
}
function nn(e, t) {
  t = D(t);
  const s = D(this), { has: n, get: r } = kt(s);
  let o = n.call(s, e);
  o || (e = D(e), o = n.call(s, e));
  const i = r.call(s, e);
  return s.set(e, t), o ? Le(t, i) && Se(s, "set", e, t) : Se(s, "add", e, t), this;
}
function rn(e) {
  const t = D(this), { has: s, get: n } = kt(t);
  let r = s.call(t, e);
  r || (e = D(e), r = s.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return r && Se(t, "delete", e, void 0), o;
}
function on() {
  const e = D(this), t = e.size !== 0, s = e.clear();
  return t && Se(e, "clear", void 0, void 0), s;
}
function Pt(e, t) {
  return function(n, r) {
    const o = this, i = o.__v_raw, c = D(i), u = t ? Ds : e ? Us : mt;
    return !e && ne(c, "iterate", ze), i.forEach((a, h) => n.call(r, u(a), u(h), o));
  };
}
function At(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, o = D(r), i = Ze(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, a = r[e](...n), h = s ? Ds : t ? Us : mt;
    return !t && ne(
      o,
      "iterate",
      u ? gs : ze
    ), {
      // iterator protocol
      next() {
        const { value: v, done: C } = a.next();
        return C ? { value: v, done: C } : {
          value: c ? [h(v[0]), h(v[1])] : h(v),
          done: C
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Ie(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function lo() {
  const e = {
    get(o) {
      return Ot(this, o);
    },
    get size() {
      return Tt(this);
    },
    has: St,
    add: sn,
    set: nn,
    delete: rn,
    clear: on,
    forEach: Pt(!1, !1)
  }, t = {
    get(o) {
      return Ot(this, o, !1, !0);
    },
    get size() {
      return Tt(this);
    },
    has: St,
    add: sn,
    set: nn,
    delete: rn,
    clear: on,
    forEach: Pt(!1, !0)
  }, s = {
    get(o) {
      return Ot(this, o, !0);
    },
    get size() {
      return Tt(this, !0);
    },
    has(o) {
      return St.call(this, o, !0);
    },
    add: Ie("add"),
    set: Ie("set"),
    delete: Ie("delete"),
    clear: Ie("clear"),
    forEach: Pt(!0, !1)
  }, n = {
    get(o) {
      return Ot(this, o, !0, !0);
    },
    get size() {
      return Tt(this, !0);
    },
    has(o) {
      return St.call(this, o, !0);
    },
    add: Ie("add"),
    set: Ie("set"),
    delete: Ie("delete"),
    clear: Ie("clear"),
    forEach: Pt(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = At(o, !1, !1), s[o] = At(o, !0, !1), t[o] = At(o, !1, !0), n[o] = At(
      o,
      !0,
      !0
    );
  }), [
    e,
    s,
    t,
    n
  ];
}
const [
  co,
  fo,
  uo,
  ao
] = /* @__PURE__ */ lo();
function zt(e, t) {
  const s = t ? e ? ao : uo : e ? fo : co;
  return (n, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    N(s, r) && r in n ? s : n,
    r,
    o
  );
}
const ho = {
  get: /* @__PURE__ */ zt(!1, !1)
}, po = {
  get: /* @__PURE__ */ zt(!1, !0)
}, _o = {
  get: /* @__PURE__ */ zt(!0, !1)
}, mo = {
  get: /* @__PURE__ */ zt(!0, !0)
}, Jn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap();
function go(e) {
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
function bo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : go(Vr(e));
}
function Fs(e) {
  return _t(e) ? e : qt(
    e,
    !1,
    no,
    ho,
    Jn
  );
}
function vo(e) {
  return qt(
    e,
    !1,
    oo,
    po,
    Xn
  );
}
function Qn(e) {
  return qt(
    e,
    !0,
    ro,
    _o,
    Yn
  );
}
function Rt(e) {
  return qt(
    e,
    !0,
    io,
    mo,
    Zn
  );
}
function qt(e, t, s, n, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = bo(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, c), c;
}
function ut(e) {
  return _t(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive);
}
function _t(e) {
  return !!(e && e.__v_isReadonly);
}
function Lt(e) {
  return !!(e && e.__v_isShallow);
}
function er(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function yo(e) {
  return Object.isExtensible(e) && Un(e, "__v_skip", !0), e;
}
const mt = (e) => K(e) ? Fs(e) : e, Us = (e) => K(e) ? Qn(e) : e;
class tr {
  constructor(t, s, n, r) {
    this.getter = t, this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Is(
      () => t(this._value),
      () => Nt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = D(this);
    return (!t._cacheable || t.effect.dirty) && Le(t._value, t._value = t.effect.run()) && Nt(t, 4), sr(t), t.effect._dirtyLevel >= 2 && Nt(t, 2), t._value;
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
function xo(e, t, s = !1) {
  let n, r;
  const o = A(e);
  return o ? (n = e, r = ie) : (n = e.get, r = e.set), new tr(n, r, o || !r, s);
}
function sr(e) {
  var t;
  Ue && ke && (e = D(e), Bn(
    ke,
    (t = e.dep) != null ? t : e.dep = Wn(
      () => e.dep = void 0,
      e instanceof tr ? e : void 0
    )
  ));
}
function Nt(e, t = 4, s) {
  e = D(e);
  const n = e.dep;
  n && Kn(
    n,
    t
  );
}
function te(e) {
  return !!(e && e.__v_isRef === !0);
}
function rt(e) {
  return wo(e, !1);
}
function wo(e, t) {
  return te(e) ? e : new Eo(e, t);
}
class Eo {
  constructor(t, s) {
    this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : D(t), this._value = s ? t : mt(t);
  }
  get value() {
    return sr(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Lt(t) || _t(t);
    t = s ? t : D(t), Le(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : mt(t), Nt(this, 4));
  }
}
function Co(e) {
  return te(e) ? e.value : e;
}
const Oo = {
  get: (e, t, s) => Co(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return te(r) && !te(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function nr(e) {
  return ut(e) ? e : new Proxy(e, Oo);
}
var Ne = { NVM_INC: "/Users/cm/.nvm/versions/node/v22.0.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v22.0.0/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v22.0.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v22.0.0", TERM_PROGRAM_VERSION: "1.88.1", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v22.0.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v22.0.0/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "10.5.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v22.0.0/bin", npm_config_user_agent: "npm/10.5.1 node/v22.0.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v22.0.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v22.0.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
const at = [];
function So(e, ...t) {
  Pe();
  const s = at.length ? at[at.length - 1].component : null, n = s && s.appContext.config.warnHandler, r = To();
  if (n)
    Te(
      n,
      s,
      11,
      [
        e + t.map((o) => {
          var i, c;
          return (c = (i = o.toString) == null ? void 0 : i.call(o)) != null ? c : JSON.stringify(o);
        }).join(""),
        s && s.proxy,
        r.map(
          ({ vnode: o }) => `at <${Dr(s, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Po(r)), console.warn(...o);
  }
  Ae();
}
function To() {
  let e = at[at.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const s = t[0];
    s && s.vnode === e ? s.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const n = e.component && e.component.parent;
    e = n && n.vnode;
  }
  return t;
}
function Po(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...Ao(s));
  }), t;
}
function Ao({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, r = ` at <${Dr(
    e.component,
    e.type,
    n
  )}`, o = ">" + s;
  return e.props ? [r, ...Ro(e.props), o] : [r + o];
}
function Ro(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...rr(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function rr(e, t, s) {
  return G(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : te(t) ? (t = rr(e, D(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = D(t), s ? t : [`${e}=`, t]);
}
function Te(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Jt(r, t, s);
  }
}
function ge(e, t, s, n) {
  if (A(e)) {
    const r = Te(e, t, s, n);
    return r && Nn(r) && r.catch((o) => {
      Jt(o, t, s);
    }), r;
  }
  if (T(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(ge(e[o], t, s, n));
    return r;
  }
}
function Jt(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; o; ) {
      const a = o.ec;
      if (a) {
        for (let h = 0; h < a.length; h++)
          if (a[h](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Pe(), Te(
        u,
        null,
        10,
        [e, i, c]
      ), Ae();
      return;
    }
  }
  Io(e, s, r, n);
}
function Io(e, t, s, n = !0) {
  console.error(e);
}
let gt = !1, bs = !1;
const Z = [];
let we = 0;
const Qe = [];
let Me = null, We = 0;
const or = /* @__PURE__ */ Promise.resolve();
let Ls = null;
function ir(e) {
  const t = Ls || or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function No(e) {
  let t = we + 1, s = Z.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = Z[n], o = bt(r);
    o < e || o === e && r.pre ? t = n + 1 : s = n;
  }
  return t;
}
function js(e) {
  (!Z.length || !Z.includes(
    e,
    gt && e.allowRecurse ? we + 1 : we
  )) && (e.id == null ? Z.push(e) : Z.splice(No(e.id), 0, e), lr());
}
function lr() {
  !gt && !bs && (bs = !0, Ls = or.then(fr));
}
function Mo(e) {
  const t = Z.indexOf(e);
  t > we && Z.splice(t, 1);
}
function Do(e) {
  T(e) ? Qe.push(...e) : (!Me || !Me.includes(
    e,
    e.allowRecurse ? We + 1 : We
  )) && Qe.push(e), lr();
}
function ln(e, t, s = gt ? we + 1 : 0) {
  for (; s < Z.length; s++) {
    const n = Z[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Z.splice(s, 1), s--, n();
    }
  }
}
function cr(e) {
  if (Qe.length) {
    const t = [...new Set(Qe)].sort(
      (s, n) => bt(s) - bt(n)
    );
    if (Qe.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, We = 0; We < Me.length; We++)
      Me[We]();
    Me = null, We = 0;
  }
}
const bt = (e) => e.id == null ? 1 / 0 : e.id, Fo = (e, t) => {
  const s = bt(e) - bt(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function fr(e) {
  bs = !1, gt = !0, Z.sort(Fo);
  const t = ie;
  try {
    for (we = 0; we < Z.length; we++) {
      const s = Z[we];
      s && s.active !== !1 && (Ne.NODE_ENV !== "production" && t(s), Te(s, null, 14));
    }
  } finally {
    we = 0, Z.length = 0, cr(), gt = !1, Ls = null, (Z.length || Qe.length) && fr();
  }
}
function Uo(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || H;
  let r = s;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in n) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: v, trim: C } = n[h] || H;
    C && (r = s.map((w) => G(w) ? w.trim() : w)), v && (r = s.map(Kr));
  }
  let c, u = n[c = rs(t)] || // also try camelCase event handler (#2249)
  n[c = rs(Oe(t))];
  !u && o && (u = n[c = rs(_e(t))]), u && ge(
    u,
    e,
    6,
    r
  );
  const a = n[c + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ge(
      a,
      e,
      6,
      r
    );
  }
}
function ur(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!A(e)) {
    const u = (a) => {
      const h = ur(a, t, !0);
      h && (c = !0, q(i, h));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (K(e) && n.set(e, null), null) : (T(o) ? o.forEach((u) => i[u] = null) : q(i, o), K(e) && n.set(e, i), i);
}
function Xt(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, _e(t)) || N(e, t));
}
let le = null, ar = null;
function jt(e) {
  const t = le;
  return le = e, ar = e && e.type.__scopeId || null, t;
}
function Lo(e, t = le, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && bn(-1);
    const o = jt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      jt(o), n._d && bn(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ls(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: u,
    render: a,
    renderCache: h,
    props: v,
    data: C,
    setupState: w,
    ctx: F,
    inheritAttrs: R
  } = e, V = jt(e);
  let k, Y;
  try {
    if (s.shapeFlag & 4) {
      const z = r || n, ce = Ne.NODE_ENV !== "production" && w.__isScriptSetup ? new Proxy(z, {
        get(M, ue, ae) {
          return So(
            `Property '${String(
              ue
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(M, ue, ae);
        }
      }) : z;
      k = xe(
        a.call(
          ce,
          z,
          h,
          Ne.NODE_ENV !== "production" ? Rt(v) : v,
          w,
          C,
          F
        )
      ), Y = c;
    } else {
      const z = t;
      Ne.NODE_ENV, k = xe(
        z.length > 1 ? z(
          Ne.NODE_ENV !== "production" ? Rt(v) : v,
          Ne.NODE_ENV !== "production" ? {
            get attrs() {
              return Rt(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : z(
          Ne.NODE_ENV !== "production" ? Rt(v) : v,
          null
        )
      ), Y = t.props ? c : jo(c);
    }
  } catch (z) {
    pt.length = 0, Jt(z, e, 1), k = Ee(qe);
  }
  let L = k;
  if (Y && R !== !1) {
    const z = Object.keys(Y), { shapeFlag: ce } = L;
    z.length && ce & 7 && (o && z.some(Ts) && (Y = Ho(
      Y,
      o
    )), L = et(L, Y, !1, !0));
  }
  return s.dirs && (L = et(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(s.dirs) : s.dirs), s.transition && (L.transition = s.transition), k = L, jt(V), k;
}
const jo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Bt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Ho = (e, t) => {
  const s = {};
  for (const n in e)
    (!Ts(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Vo(e, t, s) {
  const { props: n, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, a = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? cn(n, i, a) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let v = 0; v < h.length; v++) {
        const C = h[v];
        if (i[C] !== n[C] && !Xt(a, C))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? i ? cn(n, i, a) : !0 : !!i;
  return !1;
}
function cn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !Xt(s, o))
      return !0;
  }
  return !1;
}
function $o({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Bo = Symbol.for("v-ndc"), Ko = (e) => e.__isSuspense;
function Wo(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Do(e);
}
const Go = Symbol.for("v-scx"), ko = () => Dt(Go), It = {};
function cs(e, t, s) {
  return dr(e, t, s);
}
function dr(e, t, {
  immediate: s,
  deep: n,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: c
} = H) {
  if (t && o) {
    const M = t;
    t = (...ue) => {
      M(...ue), ce();
    };
  }
  const u = X, a = (M) => n === !0 ? M : (
    // for deep: false, only traverse root-level properties
    Ge(M, n === !1 ? 1 : void 0)
  );
  let h, v = !1, C = !1;
  if (te(e) ? (h = () => e.value, v = Lt(e)) : ut(e) ? (h = () => a(e), v = !0) : T(e) ? (C = !0, v = e.some((M) => ut(M) || Lt(M)), h = () => e.map((M) => {
    if (te(M))
      return M.value;
    if (ut(M))
      return a(M);
    if (A(M))
      return Te(M, u, 2);
  })) : A(e) ? t ? h = () => Te(e, u, 2) : h = () => (w && w(), ge(
    e,
    u,
    3,
    [F]
  )) : h = ie, t && n) {
    const M = h;
    h = () => Ge(M());
  }
  let w, F = (M) => {
    w = L.onStop = () => {
      Te(M, u, 4), w = L.onStop = void 0;
    };
  }, R;
  if (Qt)
    if (F = ie, t ? s && ge(t, u, 3, [
      h(),
      C ? [] : void 0,
      F
    ]) : h(), r === "sync") {
      const M = ko();
      R = M.__watcherHandles || (M.__watcherHandles = []);
    } else
      return ie;
  let V = C ? new Array(e.length).fill(It) : It;
  const k = () => {
    if (!(!L.active || !L.dirty))
      if (t) {
        const M = L.run();
        (n || v || (C ? M.some((ue, ae) => Le(ue, V[ae])) : Le(M, V))) && (w && w(), ge(t, u, 3, [
          M,
          // pass undefined as the old value when it's changed for the first time
          V === It ? void 0 : C && V[0] === It ? [] : V,
          F
        ]), V = M);
      } else
        L.run();
  };
  k.allowRecurse = !!t;
  let Y;
  r === "sync" ? Y = k : r === "post" ? Y = () => se(k, u && u.suspense) : (k.pre = !0, u && (k.id = u.uid), Y = () => js(k));
  const L = new Is(h, ie, Y), z = Zr(), ce = () => {
    L.stop(), z && Ps(z.effects, L);
  };
  return t ? s ? k() : V = L.run() : r === "post" ? se(
    L.run.bind(L),
    u && u.suspense
  ) : L.run(), R && R.push(ce), ce;
}
function zo(e, t, s) {
  const n = this.proxy, r = G(e) ? e.includes(".") ? hr(n, e) : () => n[e] : e.bind(n, n);
  let o;
  A(t) ? o = t : (o = t.handler, s = t);
  const i = yt(this), c = dr(r, o.bind(n), s);
  return i(), c;
}
function hr(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
function Ge(e, t = 1 / 0, s) {
  if (t <= 0 || !K(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, te(e))
    Ge(e.value, t, s);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      Ge(e[n], t, s);
  else if (In(e) || Ze(e))
    e.forEach((n) => {
      Ge(n, t, s);
    });
  else if (Dn(e))
    for (const n in e)
      Ge(e[n], t, s);
  return e;
}
function qo(e, t) {
  if (le === null)
    return e;
  const s = es(le) || le.proxy, n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, c, u = H] = t[r];
    o && (A(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Ge(i), n.push({
      dir: o,
      instance: s,
      value: i,
      oldValue: void 0,
      arg: c,
      modifiers: u
    }));
  }
  return e;
}
function Be(e, t, s, n) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[n];
    u && (Pe(), ge(u, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Ae());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function pr(e, t) {
  return A(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    q({ name: e.name }, t, { setup: e })
  ) : e;
}
const Mt = (e) => !!e.type.__asyncLoader, _r = (e) => e.type.__isKeepAlive;
function Jo(e, t) {
  mr(e, "a", t);
}
function Xo(e, t) {
  mr(e, "da", t);
}
function mr(e, t, s = X) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Yt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      _r(r.parent.vnode) && Yo(n, t, s, r), r = r.parent;
  }
}
function Yo(e, t, s, n) {
  const r = Yt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  gr(() => {
    Ps(n[t], r);
  }, s);
}
function Yt(e, t, s = X, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (s.isUnmounted)
        return;
      Pe();
      const c = yt(s), u = ge(t, s, e, i);
      return c(), Ae(), u;
    });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const Re = (e) => (t, s = X) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Qt || e === "sp") && Yt(e, (...n) => t(...n), s)
), Zo = Re("bm"), Qo = Re("m"), ei = Re("bu"), ti = Re("u"), si = Re("bum"), gr = Re("um"), ni = Re("sp"), ri = Re(
  "rtg"
), oi = Re(
  "rtc"
);
function ii(e, t = X) {
  Yt("ec", e, t);
}
function fn(e, t, s, n) {
  let r;
  const o = s;
  if (T(e) || G(e)) {
    r = new Array(e.length);
    for (let i = 0, c = e.length; i < c; i++)
      r[i] = t(e[i], i, void 0, o);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, o);
  } else if (K(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, c) => t(i, c, void 0, o)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let c = 0, u = i.length; c < u; c++) {
        const a = i[c];
        r[c] = t(e[a], a, c, o);
      }
    }
  else
    r = [];
  return r;
}
const vs = (e) => e ? Nr(e) ? es(e) || e.proxy : vs(e.parent) : null, dt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vs(e.parent),
    $root: (e) => vs(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Hs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, js(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ir.bind(e.proxy)),
    $watch: (e) => zo.bind(e)
  })
), fs = (e, t) => e !== H && !e.__isScriptSetup && N(e, t), li = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return n[t];
          case 2:
            return r[t];
          case 4:
            return s[t];
          case 3:
            return o[t];
        }
      else {
        if (fs(n, t))
          return i[t] = 1, n[t];
        if (r !== H && N(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && N(a, t)
        )
          return i[t] = 3, o[t];
        if (s !== H && N(s, t))
          return i[t] = 4, s[t];
        ys && (i[t] = 0);
      }
    }
    const h = dt[t];
    let v, C;
    if (h)
      return t === "$attrs" && ne(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (v = c.__cssModules) && (v = v[t])
    )
      return v;
    if (s !== H && N(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      C = u.config.globalProperties, N(C, t)
    )
      return C[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: o } = e;
    return fs(r, t) ? (r[t] = s, !0) : n !== H && N(n, t) ? (n[t] = s, !0) : N(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!s[i] || e !== H && N(e, i) || fs(t, i) || (c = o[0]) && N(c, i) || N(n, i) || N(dt, i) || N(r.config.globalProperties, i);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : N(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function un(e) {
  return T(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ys = !0;
function ci(e) {
  const t = Hs(e), s = e.proxy, n = e.ctx;
  ys = !1, t.beforeCreate && an(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: a,
    // lifecycle
    created: h,
    beforeMount: v,
    mounted: C,
    beforeUpdate: w,
    updated: F,
    activated: R,
    deactivated: V,
    beforeDestroy: k,
    beforeUnmount: Y,
    destroyed: L,
    unmounted: z,
    render: ce,
    renderTracked: M,
    renderTriggered: ue,
    errorCaptured: ae,
    serverPrefetch: ts,
    // public API
    expose: je,
    inheritAttrs: tt,
    // assets
    components: xt,
    directives: wt,
    filters: ss
  } = t;
  if (a && fi(a, n, null), i)
    for (const B in i) {
      const j = i[B];
      A(j) && (n[B] = j.bind(s));
    }
  if (r) {
    const B = r.call(s, s);
    K(B) && (e.data = Fs(B));
  }
  if (ys = !0, o)
    for (const B in o) {
      const j = o[B], He = A(j) ? j.bind(s, s) : A(j.get) ? j.get.bind(s, s) : ie, Et = !A(j) && A(j.set) ? j.set.bind(s) : ie, Ve = Ki({
        get: He,
        set: Et
      });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (be) => Ve.value = be
      });
    }
  if (c)
    for (const B in c)
      br(c[B], n, s, B);
  if (u) {
    const B = A(u) ? u.call(s) : u;
    Reflect.ownKeys(B).forEach((j) => {
      _i(j, B[j]);
    });
  }
  h && an(h, e, "c");
  function Q(B, j) {
    T(j) ? j.forEach((He) => B(He.bind(s))) : j && B(j.bind(s));
  }
  if (Q(Zo, v), Q(Qo, C), Q(ei, w), Q(ti, F), Q(Jo, R), Q(Xo, V), Q(ii, ae), Q(oi, M), Q(ri, ue), Q(si, Y), Q(gr, z), Q(ni, ts), T(je))
    if (je.length) {
      const B = e.exposed || (e.exposed = {});
      je.forEach((j) => {
        Object.defineProperty(B, j, {
          get: () => s[j],
          set: (He) => s[j] = He
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ce && e.render === ie && (e.render = ce), tt != null && (e.inheritAttrs = tt), xt && (e.components = xt), wt && (e.directives = wt);
}
function fi(e, t, s = ie) {
  T(e) && (e = xs(e));
  for (const n in e) {
    const r = e[n];
    let o;
    K(r) ? "default" in r ? o = Dt(
      r.from || n,
      r.default,
      !0
    ) : o = Dt(r.from || n) : o = Dt(r), te(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[n] = o;
  }
}
function an(e, t, s) {
  ge(
    T(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function br(e, t, s, n) {
  const r = n.includes(".") ? hr(s, n) : () => s[n];
  if (G(e)) {
    const o = t[e];
    A(o) && cs(r, o);
  } else if (A(e))
    cs(r, e.bind(s));
  else if (K(e))
    if (T(e))
      e.forEach((o) => br(o, t, s, n));
    else {
      const o = A(e.handler) ? e.handler.bind(s) : t[e.handler];
      A(o) && cs(r, o, e);
    }
}
function Hs(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (a) => Ht(u, a, i, !0)
  ), Ht(u, t, i)), K(t) && o.set(t, u), u;
}
function Ht(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Ht(e, o, s, !0), r && r.forEach(
    (i) => Ht(e, i, s, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const c = ui[i] || s && s[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ui = {
  data: dn,
  props: hn,
  emits: hn,
  // objects
  methods: ct,
  computed: ct,
  // lifecycle
  beforeCreate: ee,
  created: ee,
  beforeMount: ee,
  mounted: ee,
  beforeUpdate: ee,
  updated: ee,
  beforeDestroy: ee,
  beforeUnmount: ee,
  destroyed: ee,
  unmounted: ee,
  activated: ee,
  deactivated: ee,
  errorCaptured: ee,
  serverPrefetch: ee,
  // assets
  components: ct,
  directives: ct,
  // watch
  watch: di,
  // provide / inject
  provide: dn,
  inject: ai
};
function dn(e, t) {
  return t ? e ? function() {
    return q(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ai(e, t) {
  return ct(xs(e), xs(t));
}
function xs(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function ee(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hn(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    un(e),
    un(t ?? {})
  ) : t;
}
function di(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = q(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = ee(e[n], t[n]);
  return s;
}
function vr() {
  return {
    app: null,
    config: {
      isNativeTag: jr,
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
let hi = 0;
function pi(e, t) {
  return function(n, r = null) {
    A(n) || (n = q({}, n)), r != null && !K(r) && (r = null);
    const o = vr(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: hi++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Wi,
      get config() {
        return o.config;
      },
      set config(a) {
      },
      use(a, ...h) {
        return i.has(a) || (a && A(a.install) ? (i.add(a), a.install(u, ...h)) : A(a) && (i.add(a), a(u, ...h))), u;
      },
      mixin(a) {
        return o.mixins.includes(a) || o.mixins.push(a), u;
      },
      component(a, h) {
        return h ? (o.components[a] = h, u) : o.components[a];
      },
      directive(a, h) {
        return h ? (o.directives[a] = h, u) : o.directives[a];
      },
      mount(a, h, v) {
        if (!c) {
          const C = Ee(n, r);
          return C.appContext = o, v === !0 ? v = "svg" : v === !1 && (v = void 0), h && t ? t(C, a) : e(C, a, v), c = !0, u._container = a, a.__vue_app__ = u, es(C.component) || C.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(a, h) {
        return o.provides[a] = h, u;
      },
      runWithContext(a) {
        const h = ht;
        ht = u;
        try {
          return a();
        } finally {
          ht = h;
        }
      }
    };
    return u;
  };
}
let ht = null;
function _i(e, t) {
  if (X) {
    let s = X.provides;
    const n = X.parent && X.parent.provides;
    n === s && (s = X.provides = Object.create(n)), s[e] = t;
  }
}
function Dt(e, t, s = !1) {
  const n = X || le;
  if (n || ht) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : ht._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && A(t) ? t.call(n && n.proxy) : t;
  }
}
const yr = {}, xr = () => Object.create(yr), wr = (e) => Object.getPrototypeOf(e) === yr;
function mi(e, t, s, n = !1) {
  const r = {}, o = xr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Er(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  s ? e.props = n ? r : vo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function gi(e, t, s, n) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = D(r), [u] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let v = 0; v < h.length; v++) {
        let C = h[v];
        if (Xt(e.emitsOptions, C))
          continue;
        const w = t[C];
        if (u)
          if (N(o, C))
            w !== o[C] && (o[C] = w, a = !0);
          else {
            const F = Oe(C);
            r[F] = ws(
              u,
              c,
              F,
              w,
              e,
              !1
            );
          }
        else
          w !== o[C] && (o[C] = w, a = !0);
      }
    }
  } else {
    Er(e, t, r, o) && (a = !0);
    let h;
    for (const v in c)
      (!t || // for camelCase
      !N(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = _e(v)) === v || !N(t, h))) && (u ? s && // for camelCase
      (s[v] !== void 0 || // for kebab-case
      s[h] !== void 0) && (r[v] = ws(
        u,
        c,
        v,
        void 0,
        e,
        !0
      )) : delete r[v]);
    if (o !== c)
      for (const v in o)
        (!t || !N(t, v)) && (delete o[v], a = !0);
  }
  a && Se(e.attrs, "set", "");
}
function Er(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (ft(u))
        continue;
      const a = t[u];
      let h;
      r && N(r, h = Oe(u)) ? !o || !o.includes(h) ? s[h] = a : (c || (c = {}))[h] = a : Xt(e.emitsOptions, u) || (!(u in n) || a !== n[u]) && (n[u] = a, i = !0);
    }
  if (o) {
    const u = D(s), a = c || H;
    for (let h = 0; h < o.length; h++) {
      const v = o[h];
      s[v] = ws(
        r,
        u,
        v,
        a[v],
        e,
        !N(a, v)
      );
    }
  }
  return i;
}
function ws(e, t, s, n, r, o) {
  const i = e[s];
  if (i != null) {
    const c = N(i, "default");
    if (c && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && A(u)) {
        const { propsDefaults: a } = r;
        if (s in a)
          n = a[s];
        else {
          const h = yt(r);
          n = a[s] = u.call(
            null,
            t
          ), h();
        }
      } else
        n = u;
    }
    i[
      0
      /* shouldCast */
    ] && (o && !c ? n = !1 : i[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === _e(s)) && (n = !0));
  }
  return n;
}
function Cr(e, t, s = !1) {
  const n = t.propsCache, r = n.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!A(e)) {
    const h = (v) => {
      u = !0;
      const [C, w] = Cr(v, t, !0);
      q(i, C), w && c.push(...w);
    };
    !s && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !u)
    return K(e) && n.set(e, Ye), Ye;
  if (T(o))
    for (let h = 0; h < o.length; h++) {
      const v = Oe(o[h]);
      pn(v) && (i[v] = H);
    }
  else if (o)
    for (const h in o) {
      const v = Oe(h);
      if (pn(v)) {
        const C = o[h], w = i[v] = T(C) || A(C) ? { type: C } : q({}, C);
        if (w) {
          const F = gn(Boolean, w.type), R = gn(String, w.type);
          w[
            0
            /* shouldCast */
          ] = F > -1, w[
            1
            /* shouldCastTrue */
          ] = R < 0 || F < R, (F > -1 || N(w, "default")) && c.push(v);
        }
      }
    }
  const a = [i, c];
  return K(e) && n.set(e, a), a;
}
function pn(e) {
  return e[0] !== "$" && !ft(e);
}
function _n(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function mn(e, t) {
  return _n(e) === _n(t);
}
function gn(e, t) {
  return T(t) ? t.findIndex((s) => mn(s, e)) : A(t) && mn(t, e) ? 0 : -1;
}
const Or = (e) => e[0] === "_" || e === "$stable", Vs = (e) => T(e) ? e.map(xe) : [xe(e)], bi = (e, t, s) => {
  if (t._n)
    return t;
  const n = Lo((...r) => (Ne.NODE_ENV !== "production" && X && (!s || (s.root, X.root)), Vs(t(...r))), s);
  return n._c = !1, n;
}, Sr = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (Or(r))
      continue;
    const o = e[r];
    if (A(o))
      t[r] = bi(r, o, n);
    else if (o != null) {
      const i = Vs(o);
      t[r] = () => i;
    }
  }
}, Tr = (e, t) => {
  const s = Vs(t);
  e.slots.default = () => s;
}, vi = (e, t) => {
  const s = e.slots = xr();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (q(s, t), Un(s, "_", n, !0)) : Sr(t, s);
  } else
    t && Tr(e, t);
}, yi = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let o = !0, i = H;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? o = !1 : (q(r, t), !s && c === 1 && delete r._) : (o = !t.$stable, Sr(t, r)), i = t;
  } else
    t && (Tr(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !Or(c) && i[c] == null && delete r[c];
};
function Es(e, t, s, n, r = !1) {
  if (T(e)) {
    e.forEach(
      (C, w) => Es(
        C,
        t && (T(t) ? t[w] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Mt(n) && !r)
    return;
  const o = n.shapeFlag & 4 ? es(n.component) || n.component.proxy : n.el, i = r ? null : o, { i: c, r: u } = e, a = t && t.r, h = c.refs === H ? c.refs = {} : c.refs, v = c.setupState;
  if (a != null && a !== u && (G(a) ? (h[a] = null, N(v, a) && (v[a] = null)) : te(a) && (a.value = null)), A(u))
    Te(u, c, 12, [i, h]);
  else {
    const C = G(u), w = te(u);
    if (C || w) {
      const F = () => {
        if (e.f) {
          const R = C ? N(v, u) ? v[u] : h[u] : u.value;
          r ? T(R) && Ps(R, o) : T(R) ? R.includes(o) || R.push(o) : C ? (h[u] = [o], N(v, u) && (v[u] = h[u])) : (u.value = [o], e.k && (h[e.k] = u.value));
        } else
          C ? (h[u] = i, N(v, u) && (v[u] = i)) : w && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? (F.id = -1, se(F, s)) : F();
    }
  }
}
const se = Wo;
function xi(e) {
  return wi(e);
}
function wi(e, t) {
  const s = Ln();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: a,
    setElementText: h,
    parentNode: v,
    nextSibling: C,
    setScopeId: w = ie,
    insertStaticContent: F
  } = e, R = (l, f, d, p = null, _ = null, b = null, x = void 0, g = null, y = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !ot(l, f) && (p = Ct(l), be(l, _, b, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: m, ref: E, shapeFlag: S } = f;
    switch (m) {
      case Zt:
        V(l, f, d, p);
        break;
      case qe:
        k(l, f, d, p);
        break;
      case as:
        l == null && Y(f, d, p, x);
        break;
      case pe:
        xt(
          l,
          f,
          d,
          p,
          _,
          b,
          x,
          g,
          y
        );
        break;
      default:
        S & 1 ? ce(
          l,
          f,
          d,
          p,
          _,
          b,
          x,
          g,
          y
        ) : S & 6 ? wt(
          l,
          f,
          d,
          p,
          _,
          b,
          x,
          g,
          y
        ) : (S & 64 || S & 128) && m.process(
          l,
          f,
          d,
          p,
          _,
          b,
          x,
          g,
          y,
          st
        );
    }
    E != null && _ && Es(E, l && l.ref, b, f || l, !f);
  }, V = (l, f, d, p) => {
    if (l == null)
      n(
        f.el = c(f.children),
        d,
        p
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && a(_, f.children);
    }
  }, k = (l, f, d, p) => {
    l == null ? n(
      f.el = u(f.children || ""),
      d,
      p
    ) : f.el = l.el;
  }, Y = (l, f, d, p) => {
    [l.el, l.anchor] = F(
      l.children,
      f,
      d,
      p,
      l.el,
      l.anchor
    );
  }, L = ({ el: l, anchor: f }, d, p) => {
    let _;
    for (; l && l !== f; )
      _ = C(l), n(l, d, p), l = _;
    n(f, d, p);
  }, z = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = C(l), r(l), l = d;
    r(f);
  }, ce = (l, f, d, p, _, b, x, g, y) => {
    f.type === "svg" ? x = "svg" : f.type === "math" && (x = "mathml"), l == null ? M(
      f,
      d,
      p,
      _,
      b,
      x,
      g,
      y
    ) : ts(
      l,
      f,
      _,
      b,
      x,
      g,
      y
    );
  }, M = (l, f, d, p, _, b, x, g) => {
    let y, m;
    const { props: E, shapeFlag: S, transition: O, dirs: P } = l;
    if (y = l.el = i(
      l.type,
      b,
      E && E.is,
      E
    ), S & 8 ? h(y, l.children) : S & 16 && ae(
      l.children,
      y,
      null,
      p,
      _,
      us(l, b),
      x,
      g
    ), P && Be(l, null, p, "created"), ue(y, l, l.scopeId, x, p), E) {
      for (const U in E)
        U !== "value" && !ft(U) && o(
          y,
          U,
          null,
          E[U],
          b,
          l.children,
          p,
          _,
          Ce
        );
      "value" in E && o(y, "value", null, E.value, b), (m = E.onVnodeBeforeMount) && ye(m, p, l);
    }
    P && Be(l, null, p, "beforeMount");
    const I = Ei(_, O);
    I && O.beforeEnter(y), n(y, f, d), ((m = E && E.onVnodeMounted) || I || P) && se(() => {
      m && ye(m, p, l), I && O.enter(y), P && Be(l, null, p, "mounted");
    }, _);
  }, ue = (l, f, d, p, _) => {
    if (d && w(l, d), p)
      for (let b = 0; b < p.length; b++)
        w(l, p[b]);
    if (_) {
      let b = _.subTree;
      if (f === b) {
        const x = _.vnode;
        ue(
          l,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, ae = (l, f, d, p, _, b, x, g, y = 0) => {
    for (let m = y; m < l.length; m++) {
      const E = l[m] = g ? De(l[m]) : xe(l[m]);
      R(
        null,
        E,
        f,
        d,
        p,
        _,
        b,
        x,
        g
      );
    }
  }, ts = (l, f, d, p, _, b, x) => {
    const g = f.el = l.el;
    let { patchFlag: y, dynamicChildren: m, dirs: E } = f;
    y |= l.patchFlag & 16;
    const S = l.props || H, O = f.props || H;
    let P;
    if (d && Ke(d, !1), (P = O.onVnodeBeforeUpdate) && ye(P, d, f, l), E && Be(f, l, d, "beforeUpdate"), d && Ke(d, !0), m ? je(
      l.dynamicChildren,
      m,
      g,
      d,
      p,
      us(f, _),
      b
    ) : x || j(
      l,
      f,
      g,
      null,
      d,
      p,
      us(f, _),
      b,
      !1
    ), y > 0) {
      if (y & 16)
        tt(
          g,
          f,
          S,
          O,
          d,
          p,
          _
        );
      else if (y & 2 && S.class !== O.class && o(g, "class", null, O.class, _), y & 4 && o(g, "style", S.style, O.style, _), y & 8) {
        const I = f.dynamicProps;
        for (let U = 0; U < I.length; U++) {
          const $ = I[U], J = S[$], de = O[$];
          (de !== J || $ === "value") && o(
            g,
            $,
            J,
            de,
            _,
            l.children,
            d,
            p,
            Ce
          );
        }
      }
      y & 1 && l.children !== f.children && h(g, f.children);
    } else
      !x && m == null && tt(
        g,
        f,
        S,
        O,
        d,
        p,
        _
      );
    ((P = O.onVnodeUpdated) || E) && se(() => {
      P && ye(P, d, f, l), E && Be(f, l, d, "updated");
    }, p);
  }, je = (l, f, d, p, _, b, x) => {
    for (let g = 0; g < f.length; g++) {
      const y = l[g], m = f[g], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === pe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ot(y, m) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? v(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      R(
        y,
        m,
        E,
        null,
        p,
        _,
        b,
        x,
        !0
      );
    }
  }, tt = (l, f, d, p, _, b, x) => {
    if (d !== p) {
      if (d !== H)
        for (const g in d)
          !ft(g) && !(g in p) && o(
            l,
            g,
            d[g],
            null,
            x,
            f.children,
            _,
            b,
            Ce
          );
      for (const g in p) {
        if (ft(g))
          continue;
        const y = p[g], m = d[g];
        y !== m && g !== "value" && o(
          l,
          g,
          m,
          y,
          x,
          f.children,
          _,
          b,
          Ce
        );
      }
      "value" in p && o(l, "value", d.value, p.value, x);
    }
  }, xt = (l, f, d, p, _, b, x, g, y) => {
    const m = f.el = l ? l.el : c(""), E = f.anchor = l ? l.anchor : c("");
    let { patchFlag: S, dynamicChildren: O, slotScopeIds: P } = f;
    P && (g = g ? g.concat(P) : P), l == null ? (n(m, d, p), n(E, d, p), ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      E,
      _,
      b,
      x,
      g,
      y
    )) : S > 0 && S & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (je(
      l.dynamicChildren,
      O,
      d,
      _,
      b,
      x,
      g
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && Pr(
      l,
      f,
      !0
      /* shallow */
    )) : j(
      l,
      f,
      d,
      E,
      _,
      b,
      x,
      g,
      y
    );
  }, wt = (l, f, d, p, _, b, x, g, y) => {
    f.slotScopeIds = g, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      d,
      p,
      x,
      y
    ) : ss(
      f,
      d,
      p,
      _,
      b,
      x,
      y
    ) : Ks(l, f, y);
  }, ss = (l, f, d, p, _, b, x) => {
    const g = l.component = Di(
      l,
      p,
      _
    );
    if (_r(l) && (g.ctx.renderer = st), Fi(g), g.asyncDep) {
      if (_ && _.registerDep(g, Q), !l.el) {
        const y = g.subTree = Ee(qe);
        k(null, y, f, d);
      }
    } else
      Q(
        g,
        l,
        f,
        d,
        _,
        b,
        x
      );
  }, Ks = (l, f, d) => {
    const p = f.component = l.component;
    if (Vo(l, f, d))
      if (p.asyncDep && !p.asyncResolved) {
        B(p, f, d);
        return;
      } else
        p.next = f, Mo(p.update), p.effect.dirty = !0, p.update();
    else
      f.el = l.el, p.vnode = f;
  }, Q = (l, f, d, p, _, b, x) => {
    const g = () => {
      if (l.isMounted) {
        let { next: E, bu: S, u: O, parent: P, vnode: I } = l;
        {
          const Xe = Ar(l);
          if (Xe) {
            E && (E.el = I.el, B(l, E, x)), Xe.asyncDep.then(() => {
              l.isUnmounted || g();
            });
            return;
          }
        }
        let U = E, $;
        Ke(l, !1), E ? (E.el = I.el, B(l, E, x)) : E = I, S && os(S), ($ = E.props && E.props.onVnodeBeforeUpdate) && ye($, P, E, I), Ke(l, !0);
        const J = ls(l), de = l.subTree;
        l.subTree = J, R(
          de,
          J,
          // parent may have changed if it's in a teleport
          v(de.el),
          // anchor may have changed if it's in a fragment
          Ct(de),
          l,
          _,
          b
        ), E.el = J.el, U === null && $o(l, J.el), O && se(O, _), ($ = E.props && E.props.onVnodeUpdated) && se(
          () => ye($, P, E, I),
          _
        );
      } else {
        let E;
        const { el: S, props: O } = f, { bm: P, m: I, parent: U } = l, $ = Mt(f);
        if (Ke(l, !1), P && os(P), !$ && (E = O && O.onVnodeBeforeMount) && ye(E, U, f), Ke(l, !0), S && zs) {
          const J = () => {
            l.subTree = ls(l), zs(
              S,
              l.subTree,
              l,
              _,
              null
            );
          };
          $ ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && J()
          ) : J();
        } else {
          const J = l.subTree = ls(l);
          R(
            null,
            J,
            d,
            p,
            l,
            _,
            b
          ), f.el = J.el;
        }
        if (I && se(I, _), !$ && (E = O && O.onVnodeMounted)) {
          const J = f;
          se(
            () => ye(E, U, J),
            _
          );
        }
        (f.shapeFlag & 256 || U && Mt(U.vnode) && U.vnode.shapeFlag & 256) && l.a && se(l.a, _), l.isMounted = !0, f = d = p = null;
      }
    }, y = l.effect = new Is(
      g,
      ie,
      () => js(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => {
      y.dirty && y.run();
    };
    m.id = l.uid, Ke(l, !0), m();
  }, B = (l, f, d) => {
    f.component = l;
    const p = l.vnode.props;
    l.vnode = f, l.next = null, gi(l, f.props, p, d), yi(l, f.children, d), Pe(), ln(l), Ae();
  }, j = (l, f, d, p, _, b, x, g, y = !1) => {
    const m = l && l.children, E = l ? l.shapeFlag : 0, S = f.children, { patchFlag: O, shapeFlag: P } = f;
    if (O > 0) {
      if (O & 128) {
        Et(
          m,
          S,
          d,
          p,
          _,
          b,
          x,
          g,
          y
        );
        return;
      } else if (O & 256) {
        He(
          m,
          S,
          d,
          p,
          _,
          b,
          x,
          g,
          y
        );
        return;
      }
    }
    P & 8 ? (E & 16 && Ce(m, _, b), S !== m && h(d, S)) : E & 16 ? P & 16 ? Et(
      m,
      S,
      d,
      p,
      _,
      b,
      x,
      g,
      y
    ) : Ce(m, _, b, !0) : (E & 8 && h(d, ""), P & 16 && ae(
      S,
      d,
      p,
      _,
      b,
      x,
      g,
      y
    ));
  }, He = (l, f, d, p, _, b, x, g, y) => {
    l = l || Ye, f = f || Ye;
    const m = l.length, E = f.length, S = Math.min(m, E);
    let O;
    for (O = 0; O < S; O++) {
      const P = f[O] = y ? De(f[O]) : xe(f[O]);
      R(
        l[O],
        P,
        d,
        null,
        _,
        b,
        x,
        g,
        y
      );
    }
    m > E ? Ce(
      l,
      _,
      b,
      !0,
      !1,
      S
    ) : ae(
      f,
      d,
      p,
      _,
      b,
      x,
      g,
      y,
      S
    );
  }, Et = (l, f, d, p, _, b, x, g, y) => {
    let m = 0;
    const E = f.length;
    let S = l.length - 1, O = E - 1;
    for (; m <= S && m <= O; ) {
      const P = l[m], I = f[m] = y ? De(f[m]) : xe(f[m]);
      if (ot(P, I))
        R(
          P,
          I,
          d,
          null,
          _,
          b,
          x,
          g,
          y
        );
      else
        break;
      m++;
    }
    for (; m <= S && m <= O; ) {
      const P = l[S], I = f[O] = y ? De(f[O]) : xe(f[O]);
      if (ot(P, I))
        R(
          P,
          I,
          d,
          null,
          _,
          b,
          x,
          g,
          y
        );
      else
        break;
      S--, O--;
    }
    if (m > S) {
      if (m <= O) {
        const P = O + 1, I = P < E ? f[P].el : p;
        for (; m <= O; )
          R(
            null,
            f[m] = y ? De(f[m]) : xe(f[m]),
            d,
            I,
            _,
            b,
            x,
            g,
            y
          ), m++;
      }
    } else if (m > O)
      for (; m <= S; )
        be(l[m], _, b, !0), m++;
    else {
      const P = m, I = m, U = /* @__PURE__ */ new Map();
      for (m = I; m <= O; m++) {
        const re = f[m] = y ? De(f[m]) : xe(f[m]);
        re.key != null && U.set(re.key, m);
      }
      let $, J = 0;
      const de = O - I + 1;
      let Xe = !1, qs = 0;
      const nt = new Array(de);
      for (m = 0; m < de; m++)
        nt[m] = 0;
      for (m = P; m <= S; m++) {
        const re = l[m];
        if (J >= de) {
          be(re, _, b, !0);
          continue;
        }
        let ve;
        if (re.key != null)
          ve = U.get(re.key);
        else
          for ($ = I; $ <= O; $++)
            if (nt[$ - I] === 0 && ot(re, f[$])) {
              ve = $;
              break;
            }
        ve === void 0 ? be(re, _, b, !0) : (nt[ve - I] = m + 1, ve >= qs ? qs = ve : Xe = !0, R(
          re,
          f[ve],
          d,
          null,
          _,
          b,
          x,
          g,
          y
        ), J++);
      }
      const Js = Xe ? Ci(nt) : Ye;
      for ($ = Js.length - 1, m = de - 1; m >= 0; m--) {
        const re = I + m, ve = f[re], Xs = re + 1 < E ? f[re + 1].el : p;
        nt[m] === 0 ? R(
          null,
          ve,
          d,
          Xs,
          _,
          b,
          x,
          g,
          y
        ) : Xe && ($ < 0 || m !== Js[$] ? Ve(ve, d, Xs, 2) : $--);
      }
    }
  }, Ve = (l, f, d, p, _ = null) => {
    const { el: b, type: x, transition: g, children: y, shapeFlag: m } = l;
    if (m & 6) {
      Ve(l.component.subTree, f, d, p);
      return;
    }
    if (m & 128) {
      l.suspense.move(f, d, p);
      return;
    }
    if (m & 64) {
      x.move(l, f, d, st);
      return;
    }
    if (x === pe) {
      n(b, f, d);
      for (let S = 0; S < y.length; S++)
        Ve(y[S], f, d, p);
      n(l.anchor, f, d);
      return;
    }
    if (x === as) {
      L(l, f, d);
      return;
    }
    if (p !== 2 && m & 1 && g)
      if (p === 0)
        g.beforeEnter(b), n(b, f, d), se(() => g.enter(b), _);
      else {
        const { leave: S, delayLeave: O, afterLeave: P } = g, I = () => n(b, f, d), U = () => {
          S(b, () => {
            I(), P && P();
          });
        };
        O ? O(b, I, U) : U();
      }
    else
      n(b, f, d);
  }, be = (l, f, d, p = !1, _ = !1) => {
    const {
      type: b,
      props: x,
      ref: g,
      children: y,
      dynamicChildren: m,
      shapeFlag: E,
      patchFlag: S,
      dirs: O
    } = l;
    if (g != null && Es(g, null, d, l, !0), E & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const P = E & 1 && O, I = !Mt(l);
    let U;
    if (I && (U = x && x.onVnodeBeforeUnmount) && ye(U, f, l), E & 6)
      Lr(l.component, d, p);
    else {
      if (E & 128) {
        l.suspense.unmount(d, p);
        return;
      }
      P && Be(l, null, f, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        f,
        d,
        _,
        st,
        p
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== pe || S > 0 && S & 64) ? Ce(
        m,
        f,
        d,
        !1,
        !0
      ) : (b === pe && S & 384 || !_ && E & 16) && Ce(y, f, d), p && Ws(l);
    }
    (I && (U = x && x.onVnodeUnmounted) || P) && se(() => {
      U && ye(U, f, l), P && Be(l, null, f, "unmounted");
    }, d);
  }, Ws = (l) => {
    const { type: f, el: d, anchor: p, transition: _ } = l;
    if (f === pe) {
      Ur(d, p);
      return;
    }
    if (f === as) {
      z(l);
      return;
    }
    const b = () => {
      r(d), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: g } = _, y = () => x(d, b);
      g ? g(l.el, b, y) : y();
    } else
      b();
  }, Ur = (l, f) => {
    let d;
    for (; l !== f; )
      d = C(l), r(l), l = d;
    r(f);
  }, Lr = (l, f, d) => {
    const { bum: p, scope: _, update: b, subTree: x, um: g } = l;
    p && os(p), _.stop(), b && (b.active = !1, be(x, l, f, d)), g && se(g, f), se(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Ce = (l, f, d, p = !1, _ = !1, b = 0) => {
    for (let x = b; x < l.length; x++)
      be(l[x], f, d, p, _);
  }, Ct = (l) => l.shapeFlag & 6 ? Ct(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : C(l.anchor || l.el);
  let ns = !1;
  const Gs = (l, f, d) => {
    l == null ? f._vnode && be(f._vnode, null, null, !0) : R(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), ns || (ns = !0, ln(), cr(), ns = !1), f._vnode = l;
  }, st = {
    p: R,
    um: be,
    m: Ve,
    r: Ws,
    mt: ss,
    mc: ae,
    pc: j,
    pbc: je,
    n: Ct,
    o: e
  };
  let ks, zs;
  return {
    render: Gs,
    hydrate: ks,
    createApp: pi(Gs, ks)
  };
}
function us({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function Ke({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function Ei(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Pr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (T(n) && T(r))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = De(r[o]), c.el = i.el), s || Pr(i, c)), c.type === Zt && (c.el = i.el);
    }
}
function Ci(e) {
  const t = e.slice(), s = [0];
  let n, r, o, i, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const a = e[n];
    if (a !== 0) {
      if (r = s[s.length - 1], e[r] < a) {
        t[n] = r, s.push(n);
        continue;
      }
      for (o = 0, i = s.length - 1; o < i; )
        c = o + i >> 1, e[s[c]] < a ? o = c + 1 : i = c;
      a < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, i = s[o - 1]; o-- > 0; )
    s[o] = i, i = t[i];
  return s;
}
function Ar(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ar(t);
}
const Oi = (e) => e.__isTeleport, pe = Symbol.for("v-fgt"), Zt = Symbol.for("v-txt"), qe = Symbol.for("v-cmt"), as = Symbol.for("v-stc"), pt = [];
let me = null;
function oe(e = !1) {
  pt.push(me = e ? null : []);
}
function Si() {
  pt.pop(), me = pt[pt.length - 1] || null;
}
let vt = 1;
function bn(e) {
  vt += e;
}
function Rr(e) {
  return e.dynamicChildren = vt > 0 ? me || Ye : null, Si(), vt > 0 && me && me.push(e), e;
}
function fe(e, t, s, n, r, o) {
  return Rr(
    W(
      e,
      t,
      s,
      n,
      r,
      o,
      !0
    )
  );
}
function Ti(e, t, s, n, r) {
  return Rr(
    Ee(
      e,
      t,
      s,
      n,
      r,
      !0
    )
  );
}
function Pi(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ot(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ir = ({ key: e }) => e ?? null, Ft = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || te(e) || A(e) ? { i: le, r: e, k: t, f: !!s } : e : null);
function W(e, t = null, s = null, n = 0, r = null, o = e === pe ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ir(t),
    ref: t && Ft(t),
    scopeId: ar,
    slotScopeIds: null,
    children: s,
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
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: le
  };
  return c ? ($s(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= G(s) ? 8 : 16), vt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && me.push(u), u;
}
const Ee = Ai;
function Ai(e, t = null, s = null, n = 0, r = null, o = !1) {
  if ((!e || e === Bo) && (e = qe), Pi(e)) {
    const c = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && $s(c, s), vt > 0 && !o && me && (c.shapeFlag & 6 ? me[me.indexOf(e)] = c : me.push(c)), c.patchFlag |= -2, c;
  }
  if (Bi(e) && (e = e.__vccOpts), t) {
    t = Ri(t);
    let { class: c, style: u } = t;
    c && !G(c) && (t.class = Gt(c)), K(u) && (er(u) && !T(u) && (u = q({}, u)), t.style = Rs(u));
  }
  const i = G(e) ? 1 : Ko(e) ? 128 : Oi(e) ? 64 : K(e) ? 4 : A(e) ? 2 : 0;
  return W(
    e,
    t,
    s,
    n,
    r,
    i,
    o,
    !0
  );
}
function Ri(e) {
  return e ? er(e) || wr(e) ? q({}, e) : e : null;
}
function et(e, t, s = !1, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: u } = e, a = t ? Ii(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ir(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? T(o) ? o.concat(Ft(t)) : [o, Ft(t)] : Ft(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== pe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && (h.transition = u.clone(h)), h;
}
function Cs(e = " ", t = 0) {
  return Ee(Zt, null, e, t);
}
function it(e = "", t = !1) {
  return t ? (oe(), Ti(qe, null, e)) : Ee(qe, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? Ee(qe) : T(e) ? Ee(
    pe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? De(e) : Ee(Zt, null, String(e));
}
function De(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function $s(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (T(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), $s(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !wr(t) ? t._ctx = le : r === 3 && le && (le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    A(t) ? (t = { default: t, _ctx: le }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [Cs(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Ii(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Gt([t.class, n.class]));
      else if (r === "style")
        t.style = Rs([t.style, n.style]);
      else if (Bt(r)) {
        const o = t[r], i = n[r];
        i && o !== i && !(T(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
function ye(e, t, s, n = null) {
  ge(e, t, 7, [
    s,
    n
  ]);
}
const Ni = vr();
let Mi = 0;
function Di(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Ni, o = {
    uid: Mi++,
    vnode: e,
    type: n,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Xr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Cr(n, r),
    emitsOptions: ur(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: H,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Uo.bind(null, o), e.ce && e.ce(o), o;
}
let X = null, Vt, Os;
{
  const e = Ln(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Vt = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => X = s
  ), Os = t(
    "__VUE_SSR_SETTERS__",
    (s) => Qt = s
  );
}
const yt = (e) => {
  const t = X;
  return Vt(e), e.scope.on(), () => {
    e.scope.off(), Vt(t);
  };
}, vn = () => {
  X && X.scope.off(), Vt(null);
};
function Nr(e) {
  return e.vnode.shapeFlag & 4;
}
let Qt = !1;
function Fi(e, t = !1) {
  t && Os(t);
  const { props: s, children: n } = e.vnode, r = Nr(e);
  mi(e, s, r, t), vi(e, n);
  const o = r ? Ui(e, t) : void 0;
  return t && Os(!1), o;
}
function Ui(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, li);
  const { setup: n } = s;
  if (n) {
    const r = e.setupContext = n.length > 1 ? ji(e) : null, o = yt(e);
    Pe();
    const i = Te(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (Ae(), o(), Nn(i)) {
      if (i.then(vn, vn), t)
        return i.then((c) => {
          yn(e, c, t);
        }).catch((c) => {
          Jt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      yn(e, i, t);
  } else
    Mr(e, t);
}
function yn(e, t, s) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = nr(t)), Mr(e, s);
}
let xn;
function Mr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && xn && !n.render) {
      const r = n.template || Hs(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = n, a = q(
          q(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        n.render = xn(r, a);
      }
    }
    e.render = n.render || ie;
  }
  {
    const r = yt(e);
    Pe();
    try {
      ci(e);
    } finally {
      Ae(), r();
    }
  }
}
const Li = {
  get(e, t) {
    return ne(e, "get", ""), e[t];
  }
};
function ji(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Li),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function es(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(nr(yo(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in dt)
          return dt[s](e);
      },
      has(t, s) {
        return s in t || s in dt;
      }
    }));
}
const Hi = /(?:^|[-_])(\w)/g, Vi = (e) => e.replace(Hi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function $i(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Dr(e, t, s = !1) {
  let n = $i(t);
  if (!n && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (n = r[1]);
  }
  if (!n && e && e.parent) {
    const r = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    n = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return n ? Vi(n) : s ? "App" : "Anonymous";
}
function Bi(e) {
  return A(e) && "__vccOpts" in e;
}
const Ki = (e, t) => xo(e, t, Qt), Wi = "3.4.26", Gi = "http://www.w3.org/2000/svg", ki = "http://www.w3.org/1998/Math/MathML", Fe = typeof document < "u" ? document : null, wn = Fe && /* @__PURE__ */ Fe.createElement("template"), zi = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Fe.createElementNS(Gi, e) : t === "mathml" ? Fe.createElementNS(ki, e) : Fe.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Fe.createTextNode(e),
  createComment: (e) => Fe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Fe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, s, n, r, o) {
    const i = s ? s.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), s), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      wn.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const c = wn.content;
      if (n === "svg" || n === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, s);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      s ? s.previousSibling : t.lastChild
    ];
  }
}, qi = Symbol("_vtc");
function Ji(e, t, s) {
  const n = e[qi];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const $t = Symbol("_vod"), Fr = Symbol("_vsh"), Xi = {
  beforeMount(e, { value: t }, { transition: s }) {
    e[$t] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : lt(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), lt(e, !0), n.enter(e)) : n.leave(e, () => {
      lt(e, !1);
    }) : lt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    lt(e, t);
  }
};
function lt(e, t) {
  e.style.display = t ? e[$t] : "none", e[Fr] = !t;
}
const Yi = Symbol(""), Zi = /(^|;)\s*display\s*:/;
function Qi(e, t, s) {
  const n = e.style, r = G(s);
  let o = !1;
  if (s && !r) {
    if (t)
      if (G(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          s[c] == null && Ut(n, c, "");
        }
      else
        for (const i in t)
          s[i] == null && Ut(n, i, "");
    for (const i in s)
      i === "display" && (o = !0), Ut(n, i, s[i]);
  } else if (r) {
    if (t !== s) {
      const i = n[Yi];
      i && (s += ";" + i), n.cssText = s, o = Zi.test(s);
    }
  } else
    t && e.removeAttribute("style");
  $t in e && (e[$t] = o ? n.display : "", e[Fr] && (n.display = "none"));
}
const En = /\s*!important$/;
function Ut(e, t, s) {
  if (T(s))
    s.forEach((n) => Ut(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = el(e, t);
    En.test(s) ? e.setProperty(
      _e(n),
      s.replace(En, ""),
      "important"
    ) : e[n] = s;
  }
}
const Cn = ["Webkit", "Moz", "ms"], ds = {};
function el(e, t) {
  const s = ds[t];
  if (s)
    return s;
  let n = Oe(t);
  if (n !== "filter" && n in e)
    return ds[t] = n;
  n = Fn(n);
  for (let r = 0; r < Cn.length; r++) {
    const o = Cn[r] + n;
    if (o in e)
      return ds[t] = o;
  }
  return t;
}
const On = "http://www.w3.org/1999/xlink";
function tl(e, t, s, n, r) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(On, t.slice(6, t.length)) : e.setAttributeNS(On, t, s);
  else {
    const o = Jr(t);
    s == null || o && !jn(s) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : s);
  }
}
function sl(e, t, s, n, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, r, o), e[t] = s ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const a = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = s ?? "";
    (a !== h || !("_value" in e)) && (e.value = h), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const a = typeof e[t];
    a === "boolean" ? s = jn(s) : s == null && a === "string" ? (s = "", u = !0) : a === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  u && e.removeAttribute(t);
}
function nl(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function rl(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const Sn = Symbol("_vei");
function ol(e, t, s, n, r = null) {
  const o = e[Sn] || (e[Sn] = {}), i = o[t];
  if (n && i)
    i.value = n;
  else {
    const [c, u] = il(t);
    if (n) {
      const a = o[t] = fl(
        n,
        r
      );
      nl(e, c, a, u);
    } else
      i && (rl(e, c, i, u), o[t] = void 0);
  }
}
const Tn = /(?:Once|Passive|Capture)$/;
function il(e) {
  let t;
  if (Tn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(Tn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
let hs = 0;
const ll = /* @__PURE__ */ Promise.resolve(), cl = () => hs || (ll.then(() => hs = 0), hs = Date.now());
function fl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    ge(
      ul(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = cl(), s;
}
function ul(e, t) {
  if (T(t)) {
    const s = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      s.call(e), e._stopped = !0;
    }, t.map(
      (n) => (r) => !r._stopped && n && n(r)
    );
  } else
    return t;
}
const Pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, al = (e, t, s, n, r, o, i, c, u) => {
  const a = r === "svg";
  t === "class" ? Ji(e, n, a) : t === "style" ? Qi(e, s, n) : Bt(t) ? Ts(t) || ol(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dl(e, t, n, a)) ? sl(
    e,
    t,
    n,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), tl(e, t, n, a));
};
function dl(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Pn(t) && A(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Pn(t) && G(s) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function hl(e, t) {
  const s = /* @__PURE__ */ pr(e);
  class n extends Bs {
    constructor(o) {
      super(s, o, t);
    }
  }
  return n.def = s, n;
}
const pl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Bs extends pl {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), ir(() => {
      this._connected || (Rn(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver((n) => {
      for (const r of n)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (n, r = !1) => {
      const { props: o, styles: i } = n;
      let c;
      if (o && !T(o))
        for (const u in o) {
          const a = o[u];
          (a === Number || a && a.type === Number) && (u in this._props && (this._props[u] = Ys(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Oe(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(n), this._applyStyles(i), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = T(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of n.map(Oe))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let s = this.hasAttribute(t) ? this.getAttribute(t) : void 0;
    const n = Oe(t);
    this._numberProps && this._numberProps[n] && (s = Ys(s)), this._setProp(n, s, !1);
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
  _setProp(t, s, n = !0, r = !0) {
    s !== this._props[t] && (this._props[t] = s, r && this._instance && this._update(), n && (s === !0 ? this.setAttribute(_e(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(_e(t), s + "") : s || this.removeAttribute(_e(t))));
  }
  _update() {
    Rn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Ee(this._def, q({}, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.isCE = !0;
      const n = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(o, {
            detail: i
          })
        );
      };
      s.emit = (o, ...i) => {
        n(o, i), _e(o) !== o && n(_e(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Bs) {
          s.parent = r._instance, s.provides = r._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((s) => {
      const n = document.createElement("style");
      n.textContent = s, this.shadowRoot.appendChild(n);
    });
  }
}
const _l = /* @__PURE__ */ q({ patchProp: al }, zi);
let An;
function ml() {
  return An || (An = xi(_l));
}
const Rn = (...e) => {
  ml().render(...e);
}, gl = { class: "mt-4 h-full w-full items-center" }, bl = /* @__PURE__ */ W("h1", { class: "text-4xl" }, "Transcribe your files", -1), vl = {
  for: "fileInput",
  class: "text-2xl"
}, yl = { key: 0 }, xl = {
  key: 1,
  class: "mb-2 mt-auto"
}, wl = /* @__PURE__ */ W("u", null, "click here", -1), El = {
  key: 0,
  class: "mb-auto"
}, Cl = { class: "" }, Ol = ["onClick"], Sl = /* @__PURE__ */ W("span", null, "Delete", -1), Tl = [
  Sl
], Pl = { class: "flex flex-row" }, Al = ["disabled"], Rl = ["disabled"], Il = /* @__PURE__ */ W("span", null, "Transcribe Parts", -1), Nl = [
  Il
], Ml = {
  key: 0,
  class: "m-4"
}, Dl = { class: "w-full items-center justify-between flex flex-row" }, Fl = { class: "" }, Ul = { class: "text-left p-4 w-full mb-6 border rounded-2xl" }, Ll = /* @__PURE__ */ pr({
  __name: "FileUpload.ce",
  setup(e) {
    const t = rt(!1), s = rt(!1), n = rt([]), r = rt(), o = rt([]);
    function i() {
      var F;
      const w = Array.from(((F = r.value) == null ? void 0 : F.files) || []);
      n.value.push(...w);
    }
    function c(w) {
      w.preventDefault(), t.value = !0;
    }
    function u() {
      t.value = !1;
    }
    function a(w) {
      w.preventDefault(), r.value && (r.value.files = w.dataTransfer.files), i(), t.value = !1;
    }
    function h(w) {
      n.value.splice(w, 1);
    }
    async function v() {
      if (s.value = !s.value, s.value)
        for (let w = 0; w < n.value.length; w++) {
          o.value.push({
            file: n.value[w],
            status: "transcribing...",
            text: "",
            duration: ""
          });
          const F = new FormData();
          F.append("file", n.value[w]), fetch("https://transcribe-test.fly.dev/uploadFull", {
            method: "POST",
            body: F
          }).then(async (R) => {
            let V = await R.json();
            o.value[w].text = V.transcript, o.value[w].status = "Done (" + Math.round(V.time / 1e3) + "sec)";
          });
        }
      else
        o.value = [];
    }
    async function C() {
      if (s.value = !s.value, s.value)
        for (let w = 0; w < n.value.length; w++) {
          o.value.push({
            file: n.value[w],
            status: "transcribing...",
            text: "",
            duration: ""
          });
          const F = new FormData();
          F.append("file", n.value[w]), fetch("https://transcribe-test.fly.dev/uploadParts", {
            method: "POST",
            body: F
          }).then(async (R) => {
            let V = await R.json();
            o.value[w].text = V.transcript, o.value[w].status = "Completed (" + Math.round(V.time / 1e3) + "sec)";
          });
        }
      else
        o.value = [];
    }
    return (w, F) => (oe(), fe("div", gl, [
      W("div", {
        class: Gt(["main flex flex-col gap-4 justify-items-stretch", { "h-5/6": !s.value }])
      }, [
        bl,
        s.value ? it("", !0) : (oe(), fe("div", {
          key: 0,
          class: "rounded-3xl dropzone-container shadow-inner h-5/6 w-full pt-2 px-4 overflow-scroll",
          onDragover: c,
          onDragleave: u,
          onDrop: a
        }, [
          qo(W("input", {
            type: "file",
            multiple: "",
            name: "file",
            id: "fileInput",
            onChange: i,
            ref_key: "file",
            ref: r,
            accept: "audio/*, video/*"
          }, null, 544), [
            [Xi, !1]
          ]),
          W("label", vl, [
            t.value ? (oe(), fe("div", yl, "Release to drop files here.")) : (oe(), fe("div", xl, [
              Cs("Drop files here or "),
              wl,
              Cs(" to upload.")
            ]))
          ]),
          t.value ? it("", !0) : (oe(), fe("div", El, [
            (oe(!0), fe(pe, null, fn(n.value, (R, V) => (oe(), fe("div", {
              key: V,
              class: "w-full p-2 items-center justify-between flex flex-row"
            }, [
              W("div", Cl, $e(R.name), 1),
              W("div", null, $e(Math.round(R.size / 1024 / 1024)) + " MB ", 1),
              W("button", {
                class: "button-39",
                onClick: (k) => h(V)
              }, Tl, 8, Ol)
            ]))), 128))
          ]))
        ], 32)),
        W("div", Pl, [
          W("button", {
            disabled: n.value.length == 0,
            class: "button-39",
            onClick: v
          }, [
            W("span", null, $e(s.value ? "Cancel" : "Transcribe Complete"), 1)
          ], 8, Al),
          s.value ? it("", !0) : (oe(), fe("button", {
            key: 0,
            disabled: n.value.length == 0,
            class: "button-39",
            onClick: C
          }, Nl, 8, Rl))
        ]),
        s.value ? (oe(), fe("div", {
          key: 1,
          class: "shadow-md border rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll",
          onDragover: c,
          onDragleave: u,
          onDrop: a
        }, [
          t.value ? it("", !0) : (oe(), fe("div", Ml, [
            (oe(!0), fe(pe, null, fn(o.value, (R, V) => (oe(), fe("div", {
              key: V,
              class: "w-full gap-1 items-center justify-between flex flex-col"
            }, [
              W("div", Dl, [
                W("div", Fl, $e(R.file.name), 1),
                W("div", null, $e(Math.round(R.file.size / 1024 / 1024)) + " MB ", 1),
                W("span", null, $e(R.status), 1)
              ]),
              W("div", Ul, [
                W("span", null, $e(R.text), 1)
              ])
            ]))), 128))
          ]))
        ], 32)) : it("", !0)
      ], 2)
    ]));
  }
}), jl = ".main{align-items:center;justify-content:center;text-align:center}.dropzone-container{border:2px solid #e2e8f0}.hidden-input{opacity:0;overflow:hidden;position:absolute;width:1px;height:1px}.file-label{font-size:20px;display:block;cursor:pointer}.preview-container{display:flex;margin-top:2rem}.preview-card{display:flex;border:1px solid #a2a2a2;padding:5px;margin-left:5px}.preview-img{width:50px;height:50px;border-radius:5px;border:1px solid #a2a2a2;background-color:#a2a2a2}.button-39{background-color:#fff;border:1px solid rgb(209,213,219);border-radius:.5rem;box-sizing:border-box;color:#111827;font-size:.875rem;font-weight:600;line-height:1.25rem;padding:.75rem 1rem;text-align:center;-webkit-text-decoration:none #D1D5DB solid;text-decoration:none #D1D5DB solid;text-decoration-thickness:auto;box-shadow:0 1px 2px #0000000d;cursor:pointer;-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button-39:hover{background-color:#f9fafb}.button-39:focus{outline:2px solid transparent;outline-offset:2px}.button-39:focus-visible{box-shadow:none}", Hl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, Vl = /* @__PURE__ */ Hl(Ll, [["styles", [jl]]]), $l = /* @__PURE__ */ hl(Vl);
customElements.define("file-upload", $l);
