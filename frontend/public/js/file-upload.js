/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Es(e, t) {
  const s = new Set(e.split(","));
  return (n) => s.has(n);
}
const j = {}, Ge = [], re = () => {
}, Rr = () => !1, Lt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ws = (e) => e.startsWith("onUpdate:"), W = Object.assign, Cs = (e, t) => {
  const s = e.indexOf(t);
  s > -1 && e.splice(s, 1);
}, Ar = Object.prototype.hasOwnProperty, I = (e, t) => Ar.call(e, t), T = Array.isArray, tt = (e) => jt(e) === "[object Map]", Ir = (e) => jt(e) === "[object Set]", R = (e) => typeof e == "function", q = (e) => typeof e == "string", pt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Tn = (e) => (K(e) || R(e)) && R(e.then) && R(e.catch), Nr = Object.prototype.toString, jt = (e) => Nr.call(e), Mr = (e) => jt(e).slice(8, -1), Dr = (e) => jt(e) === "[object Object]", Os = (e) => q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, st = /* @__PURE__ */ Es(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ht = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (s) => t[s] || (t[s] = e(s));
}, Fr = /-(\w)/g, xe = Ht((e) => e.replace(Fr, (t, s) => s ? s.toUpperCase() : "")), Ur = /\B([A-Z])/g, ae = Ht(
  (e) => e.replace(Ur, "-$1").toLowerCase()
), Pn = Ht((e) => e.charAt(0).toUpperCase() + e.slice(1)), Zt = Ht((e) => e ? `on${Pn(e)}` : ""), De = (e, t) => !Object.is(e, t), Qt = (e, t) => {
  for (let s = 0; s < e.length; s++)
    e[s](t);
}, Rn = (e, t, s, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Lr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Js = (e) => {
  const t = q(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Xs;
const An = () => Xs || (Xs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ss(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s], r = q(n) ? $r(n) : Ss(n);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (q(e) || K(e))
    return e;
}
const jr = /;(?![^(]*\))/g, Hr = /:([^]+)/, Vr = /\/\*[^]*?\*\//g;
function $r(e) {
  const t = {};
  return e.replace(Vr, "").split(jr).forEach((s) => {
    if (s) {
      const n = s.split(Hr);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function Ts(e) {
  let t = "";
  if (q(e))
    t = e;
  else if (T(e))
    for (let s = 0; s < e.length; s++) {
      const n = Ts(e[s]);
      n && (t += n + " ");
    }
  else if (K(e))
    for (const s in e)
      e[s] && (t += s + " ");
  return t.trim();
}
const Kr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Br = /* @__PURE__ */ Es(Kr);
function In(e) {
  return !!e || e === "";
}
let ue;
class Wr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ue, !t && ue && (this.index = (ue.scopes || (ue.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const s = ue;
      try {
        return ue = this, t();
      } finally {
        ue = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ue = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ue = this.parent;
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
function Gr(e, t = ue) {
  t && t.active && t.effects.push(e);
}
function zr() {
  return ue;
}
let Ke;
class Ps {
  constructor(t, s, n, r) {
    this.fn = t, this.trigger = s, this.scheduler = n, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Gr(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ce();
      for (let t = 0; t < this._depsLength; t++) {
        const s = this.deps[t];
        if (s.computed && (qr(s.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Oe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = Ne, s = Ke;
    try {
      return Ne = !0, Ke = this, this._runnings++, Ys(this), this.fn();
    } finally {
      ks(this), this._runnings--, Ke = s, Ne = t;
    }
  }
  stop() {
    this.active && (Ys(this), ks(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function qr(e) {
  return e.value;
}
function Ys(e) {
  e._trackId++, e._depsLength = 0;
}
function ks(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Nn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Nn(e, t) {
  const s = e.get(t);
  s !== void 0 && t._trackId !== s && (e.delete(t), e.size === 0 && e.cleanup());
}
let Ne = !0, us = 0;
const Mn = [];
function Ce() {
  Mn.push(Ne), Ne = !1;
}
function Oe() {
  const e = Mn.pop();
  Ne = e === void 0 ? !0 : e;
}
function Rs() {
  us++;
}
function As() {
  for (us--; !us && as.length; )
    as.shift()();
}
function Dn(e, t, s) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && Nn(n, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const as = [];
function Fn(e, t, s) {
  Rs();
  for (const n of e.keys()) {
    let r;
    n._dirtyLevel < t && (r ?? (r = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (r ?? (r = e.get(n) === n._trackId)) && (n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && as.push(n.scheduler)));
  }
  As();
}
const Un = (e, t) => {
  const s = /* @__PURE__ */ new Map();
  return s.cleanup = e, s.computed = t, s;
}, ds = /* @__PURE__ */ new WeakMap(), Be = Symbol(""), hs = Symbol("");
function te(e, t, s) {
  if (Ne && Ke) {
    let n = ds.get(e);
    n || ds.set(e, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || n.set(s, r = Un(() => n.delete(s))), Dn(
      Ke,
      r
    );
  }
}
function Ee(e, t, s, n, r, o) {
  const i = ds.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (s === "length" && T(e)) {
    const u = Number(n);
    i.forEach((d, h) => {
      (h === "length" || !pt(h) && h >= u) && c.push(d);
    });
  } else
    switch (s !== void 0 && c.push(i.get(s)), t) {
      case "add":
        T(e) ? Os(s) && c.push(i.get("length")) : (c.push(i.get(Be)), tt(e) && c.push(i.get(hs)));
        break;
      case "delete":
        T(e) || (c.push(i.get(Be)), tt(e) && c.push(i.get(hs)));
        break;
      case "set":
        tt(e) && c.push(i.get(Be));
        break;
    }
  Rs();
  for (const u of c)
    u && Fn(
      u,
      4
    );
  As();
}
const Jr = /* @__PURE__ */ Es("__proto__,__v_isRef,__isVue"), Ln = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pt)
), Zs = /* @__PURE__ */ Xr();
function Xr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...s) {
      const n = M(this);
      for (let o = 0, i = this.length; o < i; o++)
        te(n, "get", o + "");
      const r = n[t](...s);
      return r === -1 || r === !1 ? n[t](...s.map(M)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...s) {
      Ce(), Rs();
      const n = M(this)[t].apply(this, s);
      return As(), Oe(), n;
    };
  }), e;
}
function Yr(e) {
  pt(e) || (e = String(e));
  const t = M(this);
  return te(t, "has", e), t.hasOwnProperty(e);
}
class jn {
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
      return n === (r ? o ? Wn : Bn : o ? Kn : $n).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const i = T(t);
    if (!r) {
      if (i && I(Zs, s))
        return Reflect.get(Zs, s, n);
      if (s === "hasOwnProperty")
        return Yr;
    }
    const c = Reflect.get(t, s, n);
    return (pt(s) ? Ln.has(s) : Jr(s)) || (r || te(t, "get", s), o) ? c : Q(c) ? i && Os(s) ? c : c.value : K(c) ? r ? Gn(c) : Ns(c) : c;
  }
}
class Hn extends jn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let o = t[s];
    if (!this._isShallow) {
      const u = ct(o);
      if (!Nt(n) && !ct(n) && (o = M(o), n = M(n)), !T(t) && Q(o) && !Q(n))
        return u ? !1 : (o.value = n, !0);
    }
    const i = T(t) && Os(s) ? Number(s) < t.length : I(t, s), c = Reflect.set(t, s, n, r);
    return t === M(r) && (i ? De(n, o) && Ee(t, "set", s, n) : Ee(t, "add", s, n)), c;
  }
  deleteProperty(t, s) {
    const n = I(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return r && n && Ee(t, "delete", s, void 0), r;
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return (!pt(s) || !Ln.has(s)) && te(t, "has", s), n;
  }
  ownKeys(t) {
    return te(
      t,
      "iterate",
      T(t) ? "length" : Be
    ), Reflect.ownKeys(t);
  }
}
class Vn extends jn {
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
const kr = /* @__PURE__ */ new Hn(), Zr = /* @__PURE__ */ new Vn(), Qr = /* @__PURE__ */ new Hn(
  !0
), eo = /* @__PURE__ */ new Vn(!0), Is = (e) => e, Vt = (e) => Reflect.getPrototypeOf(e);
function yt(e, t, s = !1, n = !1) {
  e = e.__v_raw;
  const r = M(e), o = M(t);
  s || (De(t, o) && te(r, "get", t), te(r, "get", o));
  const { has: i } = Vt(r), c = n ? Is : s ? Ms : ft;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function xt(e, t = !1) {
  const s = this.__v_raw, n = M(s), r = M(e);
  return t || (De(e, r) && te(n, "has", e), te(n, "has", r)), e === r ? s.has(e) : s.has(e) || s.has(r);
}
function Et(e, t = !1) {
  return e = e.__v_raw, !t && te(M(e), "iterate", Be), Reflect.get(e, "size", e);
}
function Qs(e) {
  e = M(e);
  const t = M(this);
  return Vt(t).has.call(t, e) || (t.add(e), Ee(t, "add", e, e)), this;
}
function en(e, t) {
  t = M(t);
  const s = M(this), { has: n, get: r } = Vt(s);
  let o = n.call(s, e);
  o || (e = M(e), o = n.call(s, e));
  const i = r.call(s, e);
  return s.set(e, t), o ? De(t, i) && Ee(s, "set", e, t) : Ee(s, "add", e, t), this;
}
function tn(e) {
  const t = M(this), { has: s, get: n } = Vt(t);
  let r = s.call(t, e);
  r || (e = M(e), r = s.call(t, e)), n && n.call(t, e);
  const o = t.delete(e);
  return r && Ee(t, "delete", e, void 0), o;
}
function sn() {
  const e = M(this), t = e.size !== 0, s = e.clear();
  return t && Ee(e, "clear", void 0, void 0), s;
}
function wt(e, t) {
  return function(n, r) {
    const o = this, i = o.__v_raw, c = M(i), u = t ? Is : e ? Ms : ft;
    return !e && te(c, "iterate", Be), i.forEach((d, h) => n.call(r, u(d), u(h), o));
  };
}
function Ct(e, t, s) {
  return function(...n) {
    const r = this.__v_raw, o = M(r), i = tt(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = r[e](...n), h = s ? Is : t ? Ms : ft;
    return !t && te(
      o,
      "iterate",
      u ? hs : Be
    ), {
      // iterator protocol
      next() {
        const { value: y, done: w } = d.next();
        return w ? { value: y, done: w } : {
          value: c ? [h(y[0]), h(y[1])] : h(y),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Te(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function to() {
  const e = {
    get(o) {
      return yt(this, o);
    },
    get size() {
      return Et(this);
    },
    has: xt,
    add: Qs,
    set: en,
    delete: tn,
    clear: sn,
    forEach: wt(!1, !1)
  }, t = {
    get(o) {
      return yt(this, o, !1, !0);
    },
    get size() {
      return Et(this);
    },
    has: xt,
    add: Qs,
    set: en,
    delete: tn,
    clear: sn,
    forEach: wt(!1, !0)
  }, s = {
    get(o) {
      return yt(this, o, !0);
    },
    get size() {
      return Et(this, !0);
    },
    has(o) {
      return xt.call(this, o, !0);
    },
    add: Te("add"),
    set: Te("set"),
    delete: Te("delete"),
    clear: Te("clear"),
    forEach: wt(!0, !1)
  }, n = {
    get(o) {
      return yt(this, o, !0, !0);
    },
    get size() {
      return Et(this, !0);
    },
    has(o) {
      return xt.call(this, o, !0);
    },
    add: Te("add"),
    set: Te("set"),
    delete: Te("delete"),
    clear: Te("clear"),
    forEach: wt(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    e[o] = Ct(o, !1, !1), s[o] = Ct(o, !0, !1), t[o] = Ct(o, !1, !0), n[o] = Ct(
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
  so,
  no,
  ro,
  oo
] = /* @__PURE__ */ to();
function $t(e, t) {
  const s = t ? e ? oo : ro : e ? no : so;
  return (n, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(
    I(s, r) && r in n ? s : n,
    r,
    o
  );
}
const io = {
  get: /* @__PURE__ */ $t(!1, !1)
}, lo = {
  get: /* @__PURE__ */ $t(!1, !0)
}, co = {
  get: /* @__PURE__ */ $t(!0, !1)
}, fo = {
  get: /* @__PURE__ */ $t(!0, !0)
}, $n = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap();
function uo(e) {
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
function ao(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : uo(Mr(e));
}
function Ns(e) {
  return ct(e) ? e : Kt(
    e,
    !1,
    kr,
    io,
    $n
  );
}
function ho(e) {
  return Kt(
    e,
    !1,
    Qr,
    lo,
    Kn
  );
}
function Gn(e) {
  return Kt(
    e,
    !0,
    Zr,
    co,
    Bn
  );
}
function Ot(e) {
  return Kt(
    e,
    !0,
    eo,
    fo,
    Wn
  );
}
function Kt(e, t, s, n, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = ao(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? n : s
  );
  return r.set(e, c), c;
}
function nt(e) {
  return ct(e) ? nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ct(e) {
  return !!(e && e.__v_isReadonly);
}
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
function zn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function po(e) {
  return Object.isExtensible(e) && Rn(e, "__v_skip", !0), e;
}
const ft = (e) => K(e) ? Ns(e) : e, Ms = (e) => K(e) ? Gn(e) : e;
class qn {
  constructor(t, s, n, r) {
    this.getter = t, this._setter = s, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ps(
      () => t(this._value),
      () => Tt(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = n;
  }
  get value() {
    const t = M(this);
    return (!t._cacheable || t.effect.dirty) && De(t._value, t._value = t.effect.run()) && Tt(t, 4), Jn(t), t.effect._dirtyLevel >= 2 && Tt(t, 2), t._value;
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
function _o(e, t, s = !1) {
  let n, r;
  const o = R(e);
  return o ? (n = e, r = re) : (n = e.get, r = e.set), new qn(n, r, o || !r, s);
}
function Jn(e) {
  var t;
  Ne && Ke && (e = M(e), Dn(
    Ke,
    (t = e.dep) != null ? t : e.dep = Un(
      () => e.dep = void 0,
      e instanceof qn ? e : void 0
    )
  ));
}
function Tt(e, t = 4, s) {
  e = M(e);
  const n = e.dep;
  n && Fn(
    n,
    t
  );
}
function Q(e) {
  return !!(e && e.__v_isRef === !0);
}
function es(e) {
  return mo(e, !1);
}
function mo(e, t) {
  return Q(e) ? e : new go(e, t);
}
class go {
  constructor(t, s) {
    this.__v_isShallow = s, this.dep = void 0, this.__v_isRef = !0, this._rawValue = s ? t : M(t), this._value = s ? t : ft(t);
  }
  get value() {
    return Jn(this), this._value;
  }
  set value(t) {
    const s = this.__v_isShallow || Nt(t) || ct(t);
    t = s ? t : M(t), De(t, this._rawValue) && (this._rawValue = t, this._value = s ? t : ft(t), Tt(this, 4));
  }
}
function bo(e) {
  return Q(e) ? e.value : e;
}
const vo = {
  get: (e, t, s) => bo(Reflect.get(e, t, s)),
  set: (e, t, s, n) => {
    const r = e[t];
    return Q(r) && !Q(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n);
  }
};
function Xn(e) {
  return nt(e) ? e : new Proxy(e, vo);
}
var Pe = { NVM_INC: "/Users/cm/.nvm/versions/node/v22.0.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v22.0.0/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v22.0.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v22.0.0", TERM_PROGRAM_VERSION: "1.88.1", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v22.0.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v22.0.0/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "10.5.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v22.0.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v22.0.0/bin", npm_config_user_agent: "npm/10.5.1 node/v22.0.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v22.0.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v22.0.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
const rt = [];
function yo(e, ...t) {
  Ce();
  const s = rt.length ? rt[rt.length - 1].component : null, n = s && s.appContext.config.warnHandler, r = xo();
  if (n)
    we(
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
          ({ vnode: o }) => `at <${Or(s, o.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    r.length && o.push(`
`, ...Eo(r)), console.warn(...o);
  }
  Oe();
}
function xo() {
  let e = rt[rt.length - 1];
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
function Eo(e) {
  const t = [];
  return e.forEach((s, n) => {
    t.push(...n === 0 ? [] : [`
`], ...wo(s));
  }), t;
}
function wo({ vnode: e, recurseCount: t }) {
  const s = t > 0 ? `... (${t} recursive calls)` : "", n = e.component ? e.component.parent == null : !1, r = ` at <${Or(
    e.component,
    e.type,
    n
  )}`, o = ">" + s;
  return e.props ? [r, ...Co(e.props), o] : [r + o];
}
function Co(e) {
  const t = [], s = Object.keys(e);
  return s.slice(0, 3).forEach((n) => {
    t.push(...Yn(n, e[n]));
  }), s.length > 3 && t.push(" ..."), t;
}
function Yn(e, t, s) {
  return q(t) ? (t = JSON.stringify(t), s ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? s ? t : [`${e}=${t}`] : Q(t) ? (t = Yn(e, M(t.value), !0), s ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), s ? t : [`${e}=`, t]);
}
function we(e, t, s, n) {
  try {
    return n ? e(...n) : e();
  } catch (r) {
    Bt(r, t, s);
  }
}
function he(e, t, s, n) {
  if (R(e)) {
    const r = we(e, t, s, n);
    return r && Tn(r) && r.catch((o) => {
      Bt(o, t, s);
    }), r;
  }
  if (T(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(he(e[o], t, s, n));
    return r;
  }
}
function Bt(e, t, s, n = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let h = 0; h < d.length; h++)
          if (d[h](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Ce(), we(
        u,
        null,
        10,
        [e, i, c]
      ), Oe();
      return;
    }
  }
  Oo(e, s, r, n);
}
function Oo(e, t, s, n = !0) {
  console.error(e);
}
let ut = !1, ps = !1;
const Y = [];
let be = 0;
const ze = [];
let Re = null, Ve = 0;
const kn = /* @__PURE__ */ Promise.resolve();
let Ds = null;
function Zn(e) {
  const t = Ds || kn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function So(e) {
  let t = be + 1, s = Y.length;
  for (; t < s; ) {
    const n = t + s >>> 1, r = Y[n], o = at(r);
    o < e || o === e && r.pre ? t = n + 1 : s = n;
  }
  return t;
}
function Fs(e) {
  (!Y.length || !Y.includes(
    e,
    ut && e.allowRecurse ? be + 1 : be
  )) && (e.id == null ? Y.push(e) : Y.splice(So(e.id), 0, e), Qn());
}
function Qn() {
  !ut && !ps && (ps = !0, Ds = kn.then(tr));
}
function To(e) {
  const t = Y.indexOf(e);
  t > be && Y.splice(t, 1);
}
function Po(e) {
  T(e) ? ze.push(...e) : (!Re || !Re.includes(
    e,
    e.allowRecurse ? Ve + 1 : Ve
  )) && ze.push(e), Qn();
}
function nn(e, t, s = ut ? be + 1 : 0) {
  for (; s < Y.length; s++) {
    const n = Y[s];
    if (n && n.pre) {
      if (e && n.id !== e.uid)
        continue;
      Y.splice(s, 1), s--, n();
    }
  }
}
function er(e) {
  if (ze.length) {
    const t = [...new Set(ze)].sort(
      (s, n) => at(s) - at(n)
    );
    if (ze.length = 0, Re) {
      Re.push(...t);
      return;
    }
    for (Re = t, Ve = 0; Ve < Re.length; Ve++)
      Re[Ve]();
    Re = null, Ve = 0;
  }
}
const at = (e) => e.id == null ? 1 / 0 : e.id, Ro = (e, t) => {
  const s = at(e) - at(t);
  if (s === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return s;
};
function tr(e) {
  ps = !1, ut = !0, Y.sort(Ro);
  const t = re;
  try {
    for (be = 0; be < Y.length; be++) {
      const s = Y[be];
      s && s.active !== !1 && (Pe.NODE_ENV !== "production" && t(s), we(s, null, 14));
    }
  } finally {
    be = 0, Y.length = 0, er(), ut = !1, Ds = null, (Y.length || ze.length) && tr();
  }
}
function Ao(e, t, ...s) {
  if (e.isUnmounted)
    return;
  const n = e.vnode.props || j;
  let r = s;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in n) {
    const h = `${i === "modelValue" ? "model" : i}Modifiers`, { number: y, trim: w } = n[h] || j;
    w && (r = s.map((P) => q(P) ? P.trim() : P)), y && (r = s.map(Lr));
  }
  let c, u = n[c = Zt(t)] || // also try camelCase event handler (#2249)
  n[c = Zt(xe(t))];
  !u && o && (u = n[c = Zt(ae(t))]), u && he(
    u,
    e,
    6,
    r
  );
  const d = n[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, he(
      d,
      e,
      6,
      r
    );
  }
}
function sr(e, t, s = !1) {
  const n = t.emitsCache, r = n.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!R(e)) {
    const u = (d) => {
      const h = sr(d, t, !0);
      h && (c = !0, W(i, h));
    };
    !s && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (K(e) && n.set(e, null), null) : (T(o) ? o.forEach((u) => i[u] = null) : W(i, o), K(e) && n.set(e, i), i);
}
function Wt(e, t) {
  return !e || !Lt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), I(e, t[0].toLowerCase() + t.slice(1)) || I(e, ae(t)) || I(e, t));
}
let oe = null, nr = null;
function Mt(e) {
  const t = oe;
  return oe = e, nr = e && e.type.__scopeId || null, t;
}
function Io(e, t = oe, s) {
  if (!t || e._n)
    return e;
  const n = (...r) => {
    n._d && pn(-1);
    const o = Mt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Mt(o), n._d && pn(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function ts(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: c,
    emit: u,
    render: d,
    renderCache: h,
    props: y,
    data: w,
    setupState: P,
    ctx: $,
    inheritAttrs: D
  } = e, se = Mt(e);
  let G, X;
  try {
    if (s.shapeFlag & 4) {
      const B = r || n, ie = Pe.NODE_ENV !== "production" && P.__isScriptSetup ? new Proxy(B, {
        get(N, le, ce) {
          return yo(
            `Property '${String(
              le
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(N, le, ce);
        }
      }) : B;
      G = ge(
        d.call(
          ie,
          B,
          h,
          Pe.NODE_ENV !== "production" ? Ot(y) : y,
          P,
          w,
          $
        )
      ), X = c;
    } else {
      const B = t;
      Pe.NODE_ENV, G = ge(
        B.length > 1 ? B(
          Pe.NODE_ENV !== "production" ? Ot(y) : y,
          Pe.NODE_ENV !== "production" ? {
            get attrs() {
              return Ot(c);
            },
            slots: i,
            emit: u
          } : { attrs: c, slots: i, emit: u }
        ) : B(
          Pe.NODE_ENV !== "production" ? Ot(y) : y,
          null
        )
      ), X = t.props ? c : No(c);
    }
  } catch (B) {
    lt.length = 0, Bt(B, e, 1), G = Me(dt);
  }
  let U = G;
  if (X && D !== !1) {
    const B = Object.keys(X), { shapeFlag: ie } = U;
    B.length && ie & 7 && (o && B.some(ws) && (X = Mo(
      X,
      o
    )), U = Je(U, X, !1, !0));
  }
  return s.dirs && (U = Je(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(s.dirs) : s.dirs), s.transition && (U.transition = s.transition), G = U, Mt(se), G;
}
const No = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Lt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
}, Mo = (e, t) => {
  const s = {};
  for (const n in e)
    (!ws(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
  return s;
};
function Do(e, t, s) {
  const { props: n, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (s && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return n ? rn(n, i, d) : !!i;
    if (u & 8) {
      const h = t.dynamicProps;
      for (let y = 0; y < h.length; y++) {
        const w = h[y];
        if (i[w] !== n[w] && !Wt(d, w))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? i ? rn(n, i, d) : !0 : !!i;
  return !1;
}
function rn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (t[o] !== e[o] && !Wt(s, o))
      return !0;
  }
  return !1;
}
function Fo({ vnode: e, parent: t }, s) {
  for (; t; ) {
    const n = t.subTree;
    if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
}
const Uo = Symbol.for("v-ndc"), Lo = (e) => e.__isSuspense;
function jo(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Po(e);
}
const Ho = Symbol.for("v-scx"), Vo = () => Rt(Ho), St = {};
function ss(e, t, s) {
  return rr(e, t, s);
}
function rr(e, t, {
  immediate: s,
  deep: n,
  flush: r,
  once: o,
  onTrack: i,
  onTrigger: c
} = j) {
  if (t && o) {
    const N = t;
    t = (...le) => {
      N(...le), ie();
    };
  }
  const u = J, d = (N) => n === !0 ? N : (
    // for deep: false, only traverse root-level properties
    $e(N, n === !1 ? 1 : void 0)
  );
  let h, y = !1, w = !1;
  if (Q(e) ? (h = () => e.value, y = Nt(e)) : nt(e) ? (h = () => d(e), y = !0) : T(e) ? (w = !0, y = e.some((N) => nt(N) || Nt(N)), h = () => e.map((N) => {
    if (Q(N))
      return N.value;
    if (nt(N))
      return d(N);
    if (R(N))
      return we(N, u, 2);
  })) : R(e) ? t ? h = () => we(e, u, 2) : h = () => (P && P(), he(
    e,
    u,
    3,
    [$]
  )) : h = re, t && n) {
    const N = h;
    h = () => $e(N());
  }
  let P, $ = (N) => {
    P = U.onStop = () => {
      we(N, u, 4), P = U.onStop = void 0;
    };
  }, D;
  if (qt)
    if ($ = re, t ? s && he(t, u, 3, [
      h(),
      w ? [] : void 0,
      $
    ]) : h(), r === "sync") {
      const N = Vo();
      D = N.__watcherHandles || (N.__watcherHandles = []);
    } else
      return re;
  let se = w ? new Array(e.length).fill(St) : St;
  const G = () => {
    if (!(!U.active || !U.dirty))
      if (t) {
        const N = U.run();
        (n || y || (w ? N.some((le, ce) => De(le, se[ce])) : De(N, se))) && (P && P(), he(t, u, 3, [
          N,
          // pass undefined as the old value when it's changed for the first time
          se === St ? void 0 : w && se[0] === St ? [] : se,
          $
        ]), se = N);
      } else
        U.run();
  };
  G.allowRecurse = !!t;
  let X;
  r === "sync" ? X = G : r === "post" ? X = () => ee(G, u && u.suspense) : (G.pre = !0, u && (G.id = u.uid), X = () => Fs(G));
  const U = new Ps(h, re, X), B = zr(), ie = () => {
    U.stop(), B && Cs(B.effects, U);
  };
  return t ? s ? G() : se = U.run() : r === "post" ? ee(
    U.run.bind(U),
    u && u.suspense
  ) : U.run(), D && D.push(ie), ie;
}
function $o(e, t, s) {
  const n = this.proxy, r = q(e) ? e.includes(".") ? or(n, e) : () => n[e] : e.bind(n, n);
  let o;
  R(t) ? o = t : (o = t.handler, s = t);
  const i = _t(this), c = rr(r, o.bind(n), s);
  return i(), c;
}
function or(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++)
      n = n[s[r]];
    return n;
  };
}
function $e(e, t = 1 / 0, s) {
  if (t <= 0 || !K(e) || e.__v_skip || (s = s || /* @__PURE__ */ new Set(), s.has(e)))
    return e;
  if (s.add(e), t--, Q(e))
    $e(e.value, t, s);
  else if (T(e))
    for (let n = 0; n < e.length; n++)
      $e(e[n], t, s);
  else if (Ir(e) || tt(e))
    e.forEach((n) => {
      $e(n, t, s);
    });
  else if (Dr(e))
    for (const n in e)
      $e(e[n], t, s);
  return e;
}
function Ko(e, t) {
  if (oe === null)
    return e;
  const s = Jt(oe) || oe.proxy, n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, c, u = j] = t[r];
    o && (R(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && $e(i), n.push({
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
function je(e, t, s, n) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[n];
    u && (Ce(), he(u, s, 8, [
      e.el,
      c,
      e,
      t
    ]), Oe());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
  return R(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    W({ name: e.name }, t, { setup: e })
  ) : e;
}
const Pt = (e) => !!e.type.__asyncLoader, lr = (e) => e.type.__isKeepAlive;
function Bo(e, t) {
  cr(e, "a", t);
}
function Wo(e, t) {
  cr(e, "da", t);
}
function cr(e, t, s = J) {
  const n = e.__wdc || (e.__wdc = () => {
    let r = s;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Gt(t, n, s), s) {
    let r = s.parent;
    for (; r && r.parent; )
      lr(r.parent.vnode) && Go(n, t, s, r), r = r.parent;
  }
}
function Go(e, t, s, n) {
  const r = Gt(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  fr(() => {
    Cs(n[t], r);
  }, s);
}
function Gt(e, t, s = J, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (s.isUnmounted)
        return;
      Ce();
      const c = _t(s), u = he(t, s, e, i);
      return c(), Oe(), u;
    });
    return n ? r.unshift(o) : r.push(o), o;
  }
}
const Se = (e) => (t, s = J) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!qt || e === "sp") && Gt(e, (...n) => t(...n), s)
), zo = Se("bm"), qo = Se("m"), Jo = Se("bu"), Xo = Se("u"), Yo = Se("bum"), fr = Se("um"), ko = Se("sp"), Zo = Se(
  "rtg"
), Qo = Se(
  "rtc"
);
function ei(e, t = J) {
  Gt("ec", e, t);
}
const _s = (e) => e ? wr(e) ? Jt(e) || e.proxy : _s(e.parent) : null, ot = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ W(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Us(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Fs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => $o.bind(e)
  })
), ns = (e, t) => e !== j && !e.__isScriptSetup && I(e, t), ti = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const P = i[t];
      if (P !== void 0)
        switch (P) {
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
        if (ns(n, t))
          return i[t] = 1, n[t];
        if (r !== j && I(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && I(d, t)
        )
          return i[t] = 3, o[t];
        if (s !== j && I(s, t))
          return i[t] = 4, s[t];
        ms && (i[t] = 0);
      }
    }
    const h = ot[t];
    let y, w;
    if (h)
      return t === "$attrs" && te(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (y = c.__cssModules) && (y = y[t])
    )
      return y;
    if (s !== j && I(s, t))
      return i[t] = 4, s[t];
    if (
      // global properties
      w = u.config.globalProperties, I(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, s) {
    const { data: n, setupState: r, ctx: o } = e;
    return ns(r, t) ? (r[t] = s, !0) : n !== j && I(n, t) ? (n[t] = s, !0) : I(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = s, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: o }
  }, i) {
    let c;
    return !!s[i] || e !== j && I(e, i) || ns(t, i) || (c = o[0]) && I(c, i) || I(n, i) || I(ot, i) || I(r.config.globalProperties, i);
  },
  defineProperty(e, t, s) {
    return s.get != null ? e._.accessCache[t] = 0 : I(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s);
  }
};
function on(e) {
  return T(e) ? e.reduce(
    (t, s) => (t[s] = null, t),
    {}
  ) : e;
}
let ms = !0;
function si(e) {
  const t = Us(e), s = e.proxy, n = e.ctx;
  ms = !1, t.beforeCreate && ln(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: h,
    beforeMount: y,
    mounted: w,
    beforeUpdate: P,
    updated: $,
    activated: D,
    deactivated: se,
    beforeDestroy: G,
    beforeUnmount: X,
    destroyed: U,
    unmounted: B,
    render: ie,
    renderTracked: N,
    renderTriggered: le,
    errorCaptured: ce,
    serverPrefetch: Xt,
    // public API
    expose: Fe,
    inheritAttrs: Xe,
    // assets
    components: mt,
    directives: gt,
    filters: Yt
  } = t;
  if (d && ni(d, n, null), i)
    for (const V in i) {
      const L = i[V];
      R(L) && (n[V] = L.bind(s));
    }
  if (r) {
    const V = r.call(s, s);
    K(V) && (e.data = Ns(V));
  }
  if (ms = !0, o)
    for (const V in o) {
      const L = o[V], Ue = R(L) ? L.bind(s, s) : R(L.get) ? L.get.bind(s, s) : re, bt = !R(L) && R(L.set) ? L.set.bind(s) : re, Le = Li({
        get: Ue,
        set: bt
      });
      Object.defineProperty(n, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (pe) => Le.value = pe
      });
    }
  if (c)
    for (const V in c)
      ur(c[V], n, s, V);
  if (u) {
    const V = R(u) ? u.call(s) : u;
    Reflect.ownKeys(V).forEach((L) => {
      fi(L, V[L]);
    });
  }
  h && ln(h, e, "c");
  function k(V, L) {
    T(L) ? L.forEach((Ue) => V(Ue.bind(s))) : L && V(L.bind(s));
  }
  if (k(zo, y), k(qo, w), k(Jo, P), k(Xo, $), k(Bo, D), k(Wo, se), k(ei, ce), k(Qo, N), k(Zo, le), k(Yo, X), k(fr, B), k(ko, Xt), T(Fe))
    if (Fe.length) {
      const V = e.exposed || (e.exposed = {});
      Fe.forEach((L) => {
        Object.defineProperty(V, L, {
          get: () => s[L],
          set: (Ue) => s[L] = Ue
        });
      });
    } else
      e.exposed || (e.exposed = {});
  ie && e.render === re && (e.render = ie), Xe != null && (e.inheritAttrs = Xe), mt && (e.components = mt), gt && (e.directives = gt);
}
function ni(e, t, s = re) {
  T(e) && (e = gs(e));
  for (const n in e) {
    const r = e[n];
    let o;
    K(r) ? "default" in r ? o = Rt(
      r.from || n,
      r.default,
      !0
    ) : o = Rt(r.from || n) : o = Rt(r), Q(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[n] = o;
  }
}
function ln(e, t, s) {
  he(
    T(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    s
  );
}
function ur(e, t, s, n) {
  const r = n.includes(".") ? or(s, n) : () => s[n];
  if (q(e)) {
    const o = t[e];
    R(o) && ss(r, o);
  } else if (R(e))
    ss(r, e.bind(s));
  else if (K(e))
    if (T(e))
      e.forEach((o) => ur(o, t, s, n));
    else {
      const o = R(e.handler) ? e.handler.bind(s) : t[e.handler];
      R(o) && ss(r, o, e);
    }
}
function Us(e) {
  const t = e.type, { mixins: s, extends: n } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !s && !n ? u = t : (u = {}, r.length && r.forEach(
    (d) => Dt(u, d, i, !0)
  ), Dt(u, t, i)), K(t) && o.set(t, u), u;
}
function Dt(e, t, s, n = !1) {
  const { mixins: r, extends: o } = t;
  o && Dt(e, o, s, !0), r && r.forEach(
    (i) => Dt(e, i, s, !0)
  );
  for (const i in t)
    if (!(n && i === "expose")) {
      const c = ri[i] || s && s[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ri = {
  data: cn,
  props: fn,
  emits: fn,
  // objects
  methods: et,
  computed: et,
  // lifecycle
  beforeCreate: Z,
  created: Z,
  beforeMount: Z,
  mounted: Z,
  beforeUpdate: Z,
  updated: Z,
  beforeDestroy: Z,
  beforeUnmount: Z,
  destroyed: Z,
  unmounted: Z,
  activated: Z,
  deactivated: Z,
  errorCaptured: Z,
  serverPrefetch: Z,
  // assets
  components: et,
  directives: et,
  // watch
  watch: ii,
  // provide / inject
  provide: cn,
  inject: oi
};
function cn(e, t) {
  return t ? e ? function() {
    return W(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function oi(e, t) {
  return et(gs(e), gs(t));
}
function gs(e) {
  if (T(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++)
      t[e[s]] = e[s];
    return t;
  }
  return e;
}
function Z(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function et(e, t) {
  return e ? W(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fn(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : W(
    /* @__PURE__ */ Object.create(null),
    on(e),
    on(t ?? {})
  ) : t;
}
function ii(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const s = W(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    s[n] = Z(e[n], t[n]);
  return s;
}
function ar() {
  return {
    app: null,
    config: {
      isNativeTag: Rr,
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
let li = 0;
function ci(e, t) {
  return function(n, r = null) {
    R(n) || (n = W({}, n)), r != null && !K(r) && (r = null);
    const o = ar(), i = /* @__PURE__ */ new WeakSet();
    let c = !1;
    const u = o.app = {
      _uid: li++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: ji,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...h) {
        return i.has(d) || (d && R(d.install) ? (i.add(d), d.install(u, ...h)) : R(d) && (i.add(d), d(u, ...h))), u;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      },
      component(d, h) {
        return h ? (o.components[d] = h, u) : o.components[d];
      },
      directive(d, h) {
        return h ? (o.directives[d] = h, u) : o.directives[d];
      },
      mount(d, h, y) {
        if (!c) {
          const w = Me(n, r);
          return w.appContext = o, y === !0 ? y = "svg" : y === !1 && (y = void 0), h && t ? t(w, d) : e(w, d, y), c = !0, u._container = d, d.__vue_app__ = u, Jt(w.component) || w.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, h) {
        return o.provides[d] = h, u;
      },
      runWithContext(d) {
        const h = it;
        it = u;
        try {
          return d();
        } finally {
          it = h;
        }
      }
    };
    return u;
  };
}
let it = null;
function fi(e, t) {
  if (J) {
    let s = J.provides;
    const n = J.parent && J.parent.provides;
    n === s && (s = J.provides = Object.create(n)), s[e] = t;
  }
}
function Rt(e, t, s = !1) {
  const n = J || oe;
  if (n || it) {
    const r = n ? n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : it._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return s && R(t) ? t.call(n && n.proxy) : t;
  }
}
const dr = {}, hr = () => Object.create(dr), pr = (e) => Object.getPrototypeOf(e) === dr;
function ui(e, t, s, n = !1) {
  const r = {}, o = hr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), _r(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  s ? e.props = n ? r : ho(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ai(e, t, s, n) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, c = M(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const h = e.vnode.dynamicProps;
      for (let y = 0; y < h.length; y++) {
        let w = h[y];
        if (Wt(e.emitsOptions, w))
          continue;
        const P = t[w];
        if (u)
          if (I(o, w))
            P !== o[w] && (o[w] = P, d = !0);
          else {
            const $ = xe(w);
            r[$] = bs(
              u,
              c,
              $,
              P,
              e,
              !1
            );
          }
        else
          P !== o[w] && (o[w] = P, d = !0);
      }
    }
  } else {
    _r(e, t, r, o) && (d = !0);
    let h;
    for (const y in c)
      (!t || // for camelCase
      !I(t, y) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((h = ae(y)) === y || !I(t, h))) && (u ? s && // for camelCase
      (s[y] !== void 0 || // for kebab-case
      s[h] !== void 0) && (r[y] = bs(
        u,
        c,
        y,
        void 0,
        e,
        !0
      )) : delete r[y]);
    if (o !== c)
      for (const y in o)
        (!t || !I(t, y)) && (delete o[y], d = !0);
  }
  d && Ee(e.attrs, "set", "");
}
function _r(e, t, s, n) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (st(u))
        continue;
      const d = t[u];
      let h;
      r && I(r, h = xe(u)) ? !o || !o.includes(h) ? s[h] = d : (c || (c = {}))[h] = d : Wt(e.emitsOptions, u) || (!(u in n) || d !== n[u]) && (n[u] = d, i = !0);
    }
  if (o) {
    const u = M(s), d = c || j;
    for (let h = 0; h < o.length; h++) {
      const y = o[h];
      s[y] = bs(
        r,
        u,
        y,
        d[y],
        e,
        !I(d, y)
      );
    }
  }
  return i;
}
function bs(e, t, s, n, r, o) {
  const i = e[s];
  if (i != null) {
    const c = I(i, "default");
    if (c && n === void 0) {
      const u = i.default;
      if (i.type !== Function && !i.skipFactory && R(u)) {
        const { propsDefaults: d } = r;
        if (s in d)
          n = d[s];
        else {
          const h = _t(r);
          n = d[s] = u.call(
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
    ] && (n === "" || n === ae(s)) && (n = !0));
  }
  return n;
}
function mr(e, t, s = !1) {
  const n = t.propsCache, r = n.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const h = (y) => {
      u = !0;
      const [w, P] = mr(y, t, !0);
      W(i, w), P && c.push(...P);
    };
    !s && t.mixins.length && t.mixins.forEach(h), e.extends && h(e.extends), e.mixins && e.mixins.forEach(h);
  }
  if (!o && !u)
    return K(e) && n.set(e, Ge), Ge;
  if (T(o))
    for (let h = 0; h < o.length; h++) {
      const y = xe(o[h]);
      un(y) && (i[y] = j);
    }
  else if (o)
    for (const h in o) {
      const y = xe(h);
      if (un(y)) {
        const w = o[h], P = i[y] = T(w) || R(w) ? { type: w } : W({}, w);
        if (P) {
          const $ = hn(Boolean, P.type), D = hn(String, P.type);
          P[
            0
            /* shouldCast */
          ] = $ > -1, P[
            1
            /* shouldCastTrue */
          ] = D < 0 || $ < D, ($ > -1 || I(P, "default")) && c.push(y);
        }
      }
    }
  const d = [i, c];
  return K(e) && n.set(e, d), d;
}
function un(e) {
  return e[0] !== "$" && !st(e);
}
function an(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function dn(e, t) {
  return an(e) === an(t);
}
function hn(e, t) {
  return T(t) ? t.findIndex((s) => dn(s, e)) : R(t) && dn(t, e) ? 0 : -1;
}
const gr = (e) => e[0] === "_" || e === "$stable", Ls = (e) => T(e) ? e.map(ge) : [ge(e)], di = (e, t, s) => {
  if (t._n)
    return t;
  const n = Io((...r) => (Pe.NODE_ENV !== "production" && J && (!s || (s.root, J.root)), Ls(t(...r))), s);
  return n._c = !1, n;
}, br = (e, t, s) => {
  const n = e._ctx;
  for (const r in e) {
    if (gr(r))
      continue;
    const o = e[r];
    if (R(o))
      t[r] = di(r, o, n);
    else if (o != null) {
      const i = Ls(o);
      t[r] = () => i;
    }
  }
}, vr = (e, t) => {
  const s = Ls(t);
  e.slots.default = () => s;
}, hi = (e, t) => {
  const s = e.slots = hr();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (W(s, t), Rn(s, "_", n, !0)) : br(t, s);
  } else
    t && vr(e, t);
}, pi = (e, t, s) => {
  const { vnode: n, slots: r } = e;
  let o = !0, i = j;
  if (n.shapeFlag & 32) {
    const c = t._;
    c ? s && c === 1 ? o = !1 : (W(r, t), !s && c === 1 && delete r._) : (o = !t.$stable, br(t, r)), i = t;
  } else
    t && (vr(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !gr(c) && i[c] == null && delete r[c];
};
function vs(e, t, s, n, r = !1) {
  if (T(e)) {
    e.forEach(
      (w, P) => vs(
        w,
        t && (T(t) ? t[P] : t),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Pt(n) && !r)
    return;
  const o = n.shapeFlag & 4 ? Jt(n.component) || n.component.proxy : n.el, i = r ? null : o, { i: c, r: u } = e, d = t && t.r, h = c.refs === j ? c.refs = {} : c.refs, y = c.setupState;
  if (d != null && d !== u && (q(d) ? (h[d] = null, I(y, d) && (y[d] = null)) : Q(d) && (d.value = null)), R(u))
    we(u, c, 12, [i, h]);
  else {
    const w = q(u), P = Q(u);
    if (w || P) {
      const $ = () => {
        if (e.f) {
          const D = w ? I(y, u) ? y[u] : h[u] : u.value;
          r ? T(D) && Cs(D, o) : T(D) ? D.includes(o) || D.push(o) : w ? (h[u] = [o], I(y, u) && (y[u] = h[u])) : (u.value = [o], e.k && (h[e.k] = u.value));
        } else
          w ? (h[u] = i, I(y, u) && (y[u] = i)) : P && (u.value = i, e.k && (h[e.k] = i));
      };
      i ? ($.id = -1, ee($, s)) : $();
    }
  }
}
const ee = jo;
function _i(e) {
  return mi(e);
}
function mi(e, t) {
  const s = An();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: c,
    createComment: u,
    setText: d,
    setElementText: h,
    parentNode: y,
    nextSibling: w,
    setScopeId: P = re,
    insertStaticContent: $
  } = e, D = (l, f, a, p = null, _ = null, b = null, x = void 0, g = null, v = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !Ze(l, f) && (p = vt(l), pe(l, _, b, !0), l = null), f.patchFlag === -2 && (v = !1, f.dynamicChildren = null);
    const { type: m, ref: E, shapeFlag: O } = f;
    switch (m) {
      case zt:
        se(l, f, a, p);
        break;
      case dt:
        G(l, f, a, p);
        break;
      case os:
        l == null && X(f, a, p, x);
        break;
      case ye:
        mt(
          l,
          f,
          a,
          p,
          _,
          b,
          x,
          g,
          v
        );
        break;
      default:
        O & 1 ? ie(
          l,
          f,
          a,
          p,
          _,
          b,
          x,
          g,
          v
        ) : O & 6 ? gt(
          l,
          f,
          a,
          p,
          _,
          b,
          x,
          g,
          v
        ) : (O & 64 || O & 128) && m.process(
          l,
          f,
          a,
          p,
          _,
          b,
          x,
          g,
          v,
          Ye
        );
    }
    E != null && _ && vs(E, l && l.ref, b, f || l, !f);
  }, se = (l, f, a, p) => {
    if (l == null)
      n(
        f.el = c(f.children),
        a,
        p
      );
    else {
      const _ = f.el = l.el;
      f.children !== l.children && d(_, f.children);
    }
  }, G = (l, f, a, p) => {
    l == null ? n(
      f.el = u(f.children || ""),
      a,
      p
    ) : f.el = l.el;
  }, X = (l, f, a, p) => {
    [l.el, l.anchor] = $(
      l.children,
      f,
      a,
      p,
      l.el,
      l.anchor
    );
  }, U = ({ el: l, anchor: f }, a, p) => {
    let _;
    for (; l && l !== f; )
      _ = w(l), n(l, a, p), l = _;
    n(f, a, p);
  }, B = ({ el: l, anchor: f }) => {
    let a;
    for (; l && l !== f; )
      a = w(l), r(l), l = a;
    r(f);
  }, ie = (l, f, a, p, _, b, x, g, v) => {
    f.type === "svg" ? x = "svg" : f.type === "math" && (x = "mathml"), l == null ? N(
      f,
      a,
      p,
      _,
      b,
      x,
      g,
      v
    ) : Xt(
      l,
      f,
      _,
      b,
      x,
      g,
      v
    );
  }, N = (l, f, a, p, _, b, x, g) => {
    let v, m;
    const { props: E, shapeFlag: O, transition: C, dirs: S } = l;
    if (v = l.el = i(
      l.type,
      b,
      E && E.is,
      E
    ), O & 8 ? h(v, l.children) : O & 16 && ce(
      l.children,
      v,
      null,
      p,
      _,
      rs(l, b),
      x,
      g
    ), S && je(l, null, p, "created"), le(v, l, l.scopeId, x, p), E) {
      for (const F in E)
        F !== "value" && !st(F) && o(
          v,
          F,
          null,
          E[F],
          b,
          l.children,
          p,
          _,
          ve
        );
      "value" in E && o(v, "value", null, E.value, b), (m = E.onVnodeBeforeMount) && me(m, p, l);
    }
    S && je(l, null, p, "beforeMount");
    const A = gi(_, C);
    A && C.beforeEnter(v), n(v, f, a), ((m = E && E.onVnodeMounted) || A || S) && ee(() => {
      m && me(m, p, l), A && C.enter(v), S && je(l, null, p, "mounted");
    }, _);
  }, le = (l, f, a, p, _) => {
    if (a && P(l, a), p)
      for (let b = 0; b < p.length; b++)
        P(l, p[b]);
    if (_) {
      let b = _.subTree;
      if (f === b) {
        const x = _.vnode;
        le(
          l,
          x,
          x.scopeId,
          x.slotScopeIds,
          _.parent
        );
      }
    }
  }, ce = (l, f, a, p, _, b, x, g, v = 0) => {
    for (let m = v; m < l.length; m++) {
      const E = l[m] = g ? Ae(l[m]) : ge(l[m]);
      D(
        null,
        E,
        f,
        a,
        p,
        _,
        b,
        x,
        g
      );
    }
  }, Xt = (l, f, a, p, _, b, x) => {
    const g = f.el = l.el;
    let { patchFlag: v, dynamicChildren: m, dirs: E } = f;
    v |= l.patchFlag & 16;
    const O = l.props || j, C = f.props || j;
    let S;
    if (a && He(a, !1), (S = C.onVnodeBeforeUpdate) && me(S, a, f, l), E && je(f, l, a, "beforeUpdate"), a && He(a, !0), m ? Fe(
      l.dynamicChildren,
      m,
      g,
      a,
      p,
      rs(f, _),
      b
    ) : x || L(
      l,
      f,
      g,
      null,
      a,
      p,
      rs(f, _),
      b,
      !1
    ), v > 0) {
      if (v & 16)
        Xe(
          g,
          f,
          O,
          C,
          a,
          p,
          _
        );
      else if (v & 2 && O.class !== C.class && o(g, "class", null, C.class, _), v & 4 && o(g, "style", O.style, C.style, _), v & 8) {
        const A = f.dynamicProps;
        for (let F = 0; F < A.length; F++) {
          const H = A[F], z = O[H], fe = C[H];
          (fe !== z || H === "value") && o(
            g,
            H,
            z,
            fe,
            _,
            l.children,
            a,
            p,
            ve
          );
        }
      }
      v & 1 && l.children !== f.children && h(g, f.children);
    } else
      !x && m == null && Xe(
        g,
        f,
        O,
        C,
        a,
        p,
        _
      );
    ((S = C.onVnodeUpdated) || E) && ee(() => {
      S && me(S, a, f, l), E && je(f, l, a, "updated");
    }, p);
  }, Fe = (l, f, a, p, _, b, x) => {
    for (let g = 0; g < f.length; g++) {
      const v = l[g], m = f[g], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ze(v, m) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? y(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          a
        )
      );
      D(
        v,
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
  }, Xe = (l, f, a, p, _, b, x) => {
    if (a !== p) {
      if (a !== j)
        for (const g in a)
          !st(g) && !(g in p) && o(
            l,
            g,
            a[g],
            null,
            x,
            f.children,
            _,
            b,
            ve
          );
      for (const g in p) {
        if (st(g))
          continue;
        const v = p[g], m = a[g];
        v !== m && g !== "value" && o(
          l,
          g,
          m,
          v,
          x,
          f.children,
          _,
          b,
          ve
        );
      }
      "value" in p && o(l, "value", a.value, p.value, x);
    }
  }, mt = (l, f, a, p, _, b, x, g, v) => {
    const m = f.el = l ? l.el : c(""), E = f.anchor = l ? l.anchor : c("");
    let { patchFlag: O, dynamicChildren: C, slotScopeIds: S } = f;
    S && (g = g ? g.concat(S) : S), l == null ? (n(m, a, p), n(E, a, p), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      a,
      E,
      _,
      b,
      x,
      g,
      v
    )) : O > 0 && O & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Fe(
      l.dynamicChildren,
      C,
      a,
      _,
      b,
      x,
      g
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || _ && f === _.subTree) && yr(
      l,
      f,
      !0
      /* shallow */
    )) : L(
      l,
      f,
      a,
      E,
      _,
      b,
      x,
      g,
      v
    );
  }, gt = (l, f, a, p, _, b, x, g, v) => {
    f.slotScopeIds = g, l == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      a,
      p,
      x,
      v
    ) : Yt(
      f,
      a,
      p,
      _,
      b,
      x,
      v
    ) : Vs(l, f, v);
  }, Yt = (l, f, a, p, _, b, x) => {
    const g = l.component = Pi(
      l,
      p,
      _
    );
    if (lr(l) && (g.ctx.renderer = Ye), Ri(g), g.asyncDep) {
      if (_ && _.registerDep(g, k), !l.el) {
        const v = g.subTree = Me(dt);
        G(null, v, f, a);
      }
    } else
      k(
        g,
        l,
        f,
        a,
        _,
        b,
        x
      );
  }, Vs = (l, f, a) => {
    const p = f.component = l.component;
    if (Do(l, f, a))
      if (p.asyncDep && !p.asyncResolved) {
        V(p, f, a);
        return;
      } else
        p.next = f, To(p.update), p.effect.dirty = !0, p.update();
    else
      f.el = l.el, p.vnode = f;
  }, k = (l, f, a, p, _, b, x) => {
    const g = () => {
      if (l.isMounted) {
        let { next: E, bu: O, u: C, parent: S, vnode: A } = l;
        {
          const We = xr(l);
          if (We) {
            E && (E.el = A.el, V(l, E, x)), We.asyncDep.then(() => {
              l.isUnmounted || g();
            });
            return;
          }
        }
        let F = E, H;
        He(l, !1), E ? (E.el = A.el, V(l, E, x)) : E = A, O && Qt(O), (H = E.props && E.props.onVnodeBeforeUpdate) && me(H, S, E, A), He(l, !0);
        const z = ts(l), fe = l.subTree;
        l.subTree = z, D(
          fe,
          z,
          // parent may have changed if it's in a teleport
          y(fe.el),
          // anchor may have changed if it's in a fragment
          vt(fe),
          l,
          _,
          b
        ), E.el = z.el, F === null && Fo(l, z.el), C && ee(C, _), (H = E.props && E.props.onVnodeUpdated) && ee(
          () => me(H, S, E, A),
          _
        );
      } else {
        let E;
        const { el: O, props: C } = f, { bm: S, m: A, parent: F } = l, H = Pt(f);
        if (He(l, !1), S && Qt(S), !H && (E = C && C.onVnodeBeforeMount) && me(E, F, f), He(l, !0), O && Ws) {
          const z = () => {
            l.subTree = ts(l), Ws(
              O,
              l.subTree,
              l,
              _,
              null
            );
          };
          H ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && z()
          ) : z();
        } else {
          const z = l.subTree = ts(l);
          D(
            null,
            z,
            a,
            p,
            l,
            _,
            b
          ), f.el = z.el;
        }
        if (A && ee(A, _), !H && (E = C && C.onVnodeMounted)) {
          const z = f;
          ee(
            () => me(E, F, z),
            _
          );
        }
        (f.shapeFlag & 256 || F && Pt(F.vnode) && F.vnode.shapeFlag & 256) && l.a && ee(l.a, _), l.isMounted = !0, f = a = p = null;
      }
    }, v = l.effect = new Ps(
      g,
      re,
      () => Fs(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => {
      v.dirty && v.run();
    };
    m.id = l.uid, He(l, !0), m();
  }, V = (l, f, a) => {
    f.component = l;
    const p = l.vnode.props;
    l.vnode = f, l.next = null, ai(l, f.props, p, a), pi(l, f.children, a), Ce(), nn(l), Oe();
  }, L = (l, f, a, p, _, b, x, g, v = !1) => {
    const m = l && l.children, E = l ? l.shapeFlag : 0, O = f.children, { patchFlag: C, shapeFlag: S } = f;
    if (C > 0) {
      if (C & 128) {
        bt(
          m,
          O,
          a,
          p,
          _,
          b,
          x,
          g,
          v
        );
        return;
      } else if (C & 256) {
        Ue(
          m,
          O,
          a,
          p,
          _,
          b,
          x,
          g,
          v
        );
        return;
      }
    }
    S & 8 ? (E & 16 && ve(m, _, b), O !== m && h(a, O)) : E & 16 ? S & 16 ? bt(
      m,
      O,
      a,
      p,
      _,
      b,
      x,
      g,
      v
    ) : ve(m, _, b, !0) : (E & 8 && h(a, ""), S & 16 && ce(
      O,
      a,
      p,
      _,
      b,
      x,
      g,
      v
    ));
  }, Ue = (l, f, a, p, _, b, x, g, v) => {
    l = l || Ge, f = f || Ge;
    const m = l.length, E = f.length, O = Math.min(m, E);
    let C;
    for (C = 0; C < O; C++) {
      const S = f[C] = v ? Ae(f[C]) : ge(f[C]);
      D(
        l[C],
        S,
        a,
        null,
        _,
        b,
        x,
        g,
        v
      );
    }
    m > E ? ve(
      l,
      _,
      b,
      !0,
      !1,
      O
    ) : ce(
      f,
      a,
      p,
      _,
      b,
      x,
      g,
      v,
      O
    );
  }, bt = (l, f, a, p, _, b, x, g, v) => {
    let m = 0;
    const E = f.length;
    let O = l.length - 1, C = E - 1;
    for (; m <= O && m <= C; ) {
      const S = l[m], A = f[m] = v ? Ae(f[m]) : ge(f[m]);
      if (Ze(S, A))
        D(
          S,
          A,
          a,
          null,
          _,
          b,
          x,
          g,
          v
        );
      else
        break;
      m++;
    }
    for (; m <= O && m <= C; ) {
      const S = l[O], A = f[C] = v ? Ae(f[C]) : ge(f[C]);
      if (Ze(S, A))
        D(
          S,
          A,
          a,
          null,
          _,
          b,
          x,
          g,
          v
        );
      else
        break;
      O--, C--;
    }
    if (m > O) {
      if (m <= C) {
        const S = C + 1, A = S < E ? f[S].el : p;
        for (; m <= C; )
          D(
            null,
            f[m] = v ? Ae(f[m]) : ge(f[m]),
            a,
            A,
            _,
            b,
            x,
            g,
            v
          ), m++;
      }
    } else if (m > C)
      for (; m <= O; )
        pe(l[m], _, b, !0), m++;
    else {
      const S = m, A = m, F = /* @__PURE__ */ new Map();
      for (m = A; m <= C; m++) {
        const ne = f[m] = v ? Ae(f[m]) : ge(f[m]);
        ne.key != null && F.set(ne.key, m);
      }
      let H, z = 0;
      const fe = C - A + 1;
      let We = !1, Gs = 0;
      const ke = new Array(fe);
      for (m = 0; m < fe; m++)
        ke[m] = 0;
      for (m = S; m <= O; m++) {
        const ne = l[m];
        if (z >= fe) {
          pe(ne, _, b, !0);
          continue;
        }
        let _e;
        if (ne.key != null)
          _e = F.get(ne.key);
        else
          for (H = A; H <= C; H++)
            if (ke[H - A] === 0 && Ze(ne, f[H])) {
              _e = H;
              break;
            }
        _e === void 0 ? pe(ne, _, b, !0) : (ke[_e - A] = m + 1, _e >= Gs ? Gs = _e : We = !0, D(
          ne,
          f[_e],
          a,
          null,
          _,
          b,
          x,
          g,
          v
        ), z++);
      }
      const zs = We ? bi(ke) : Ge;
      for (H = zs.length - 1, m = fe - 1; m >= 0; m--) {
        const ne = A + m, _e = f[ne], qs = ne + 1 < E ? f[ne + 1].el : p;
        ke[m] === 0 ? D(
          null,
          _e,
          a,
          qs,
          _,
          b,
          x,
          g,
          v
        ) : We && (H < 0 || m !== zs[H] ? Le(_e, a, qs, 2) : H--);
      }
    }
  }, Le = (l, f, a, p, _ = null) => {
    const { el: b, type: x, transition: g, children: v, shapeFlag: m } = l;
    if (m & 6) {
      Le(l.component.subTree, f, a, p);
      return;
    }
    if (m & 128) {
      l.suspense.move(f, a, p);
      return;
    }
    if (m & 64) {
      x.move(l, f, a, Ye);
      return;
    }
    if (x === ye) {
      n(b, f, a);
      for (let O = 0; O < v.length; O++)
        Le(v[O], f, a, p);
      n(l.anchor, f, a);
      return;
    }
    if (x === os) {
      U(l, f, a);
      return;
    }
    if (p !== 2 && m & 1 && g)
      if (p === 0)
        g.beforeEnter(b), n(b, f, a), ee(() => g.enter(b), _);
      else {
        const { leave: O, delayLeave: C, afterLeave: S } = g, A = () => n(b, f, a), F = () => {
          O(b, () => {
            A(), S && S();
          });
        };
        C ? C(b, A, F) : F();
      }
    else
      n(b, f, a);
  }, pe = (l, f, a, p = !1, _ = !1) => {
    const {
      type: b,
      props: x,
      ref: g,
      children: v,
      dynamicChildren: m,
      shapeFlag: E,
      patchFlag: O,
      dirs: C
    } = l;
    if (g != null && vs(g, null, a, l, !0), E & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const S = E & 1 && C, A = !Pt(l);
    let F;
    if (A && (F = x && x.onVnodeBeforeUnmount) && me(F, f, l), E & 6)
      Pr(l.component, a, p);
    else {
      if (E & 128) {
        l.suspense.unmount(a, p);
        return;
      }
      S && je(l, null, f, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        f,
        a,
        _,
        Ye,
        p
      ) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ye || O > 0 && O & 64) ? ve(
        m,
        f,
        a,
        !1,
        !0
      ) : (b === ye && O & 384 || !_ && E & 16) && ve(v, f, a), p && $s(l);
    }
    (A && (F = x && x.onVnodeUnmounted) || S) && ee(() => {
      F && me(F, f, l), S && je(l, null, f, "unmounted");
    }, a);
  }, $s = (l) => {
    const { type: f, el: a, anchor: p, transition: _ } = l;
    if (f === ye) {
      Tr(a, p);
      return;
    }
    if (f === os) {
      B(l);
      return;
    }
    const b = () => {
      r(a), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (l.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: x, delayLeave: g } = _, v = () => x(a, b);
      g ? g(l.el, b, v) : v();
    } else
      b();
  }, Tr = (l, f) => {
    let a;
    for (; l !== f; )
      a = w(l), r(l), l = a;
    r(f);
  }, Pr = (l, f, a) => {
    const { bum: p, scope: _, update: b, subTree: x, um: g } = l;
    p && Qt(p), _.stop(), b && (b.active = !1, pe(x, l, f, a)), g && ee(g, f), ee(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, ve = (l, f, a, p = !1, _ = !1, b = 0) => {
    for (let x = b; x < l.length; x++)
      pe(l[x], f, a, p, _);
  }, vt = (l) => l.shapeFlag & 6 ? vt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : w(l.anchor || l.el);
  let kt = !1;
  const Ks = (l, f, a) => {
    l == null ? f._vnode && pe(f._vnode, null, null, !0) : D(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      a
    ), kt || (kt = !0, nn(), er(), kt = !1), f._vnode = l;
  }, Ye = {
    p: D,
    um: pe,
    m: Le,
    r: $s,
    mt: Yt,
    mc: ce,
    pc: L,
    pbc: Fe,
    n: vt,
    o: e
  };
  let Bs, Ws;
  return {
    render: Ks,
    hydrate: Bs,
    createApp: ci(Ks, Bs)
  };
}
function rs({ type: e, props: t }, s) {
  return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s;
}
function He({ effect: e, update: t }, s) {
  e.allowRecurse = t.allowRecurse = s;
}
function gi(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yr(e, t, s = !1) {
  const n = e.children, r = t.children;
  if (T(n) && T(r))
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = Ae(r[o]), c.el = i.el), s || yr(i, c)), c.type === zt && (c.el = i.el);
    }
}
function bi(e) {
  const t = e.slice(), s = [0];
  let n, r, o, i, c;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const d = e[n];
    if (d !== 0) {
      if (r = s[s.length - 1], e[r] < d) {
        t[n] = r, s.push(n);
        continue;
      }
      for (o = 0, i = s.length - 1; o < i; )
        c = o + i >> 1, e[s[c]] < d ? o = c + 1 : i = c;
      d < e[s[o]] && (o > 0 && (t[n] = s[o - 1]), s[o] = n);
    }
  }
  for (o = s.length, i = s[o - 1]; o-- > 0; )
    s[o] = i, i = t[i];
  return s;
}
function xr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : xr(t);
}
const vi = (e) => e.__isTeleport, ye = Symbol.for("v-fgt"), zt = Symbol.for("v-txt"), dt = Symbol.for("v-cmt"), os = Symbol.for("v-stc"), lt = [];
let de = null;
function is(e = !1) {
  lt.push(de = e ? null : []);
}
function yi() {
  lt.pop(), de = lt[lt.length - 1] || null;
}
let ht = 1;
function pn(e) {
  ht += e;
}
function xi(e) {
  return e.dynamicChildren = ht > 0 ? de || Ge : null, yi(), ht > 0 && de && de.push(e), e;
}
function ls(e, t, s, n, r, o) {
  return xi(
    qe(
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
function Ei(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ze(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Er = ({ key: e }) => e ?? null, At = ({
  ref: e,
  ref_key: t,
  ref_for: s
}) => (typeof e == "number" && (e = "" + e), e != null ? q(e) || Q(e) || R(e) ? { i: oe, r: e, k: t, f: !!s } : e : null);
function qe(e, t = null, s = null, n = 0, r = null, o = e === ye ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Er(t),
    ref: t && At(t),
    scopeId: nr,
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
    ctx: oe
  };
  return c ? (js(u, s), o & 128 && e.normalize(u)) : s && (u.shapeFlag |= q(s) ? 8 : 16), ht > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && de.push(u), u;
}
const Me = wi;
function wi(e, t = null, s = null, n = 0, r = null, o = !1) {
  if ((!e || e === Uo) && (e = dt), Ei(e)) {
    const c = Je(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return s && js(c, s), ht > 0 && !o && de && (c.shapeFlag & 6 ? de[de.indexOf(e)] = c : de.push(c)), c.patchFlag |= -2, c;
  }
  if (Ui(e) && (e = e.__vccOpts), t) {
    t = Ci(t);
    let { class: c, style: u } = t;
    c && !q(c) && (t.class = Ts(c)), K(u) && (zn(u) && !T(u) && (u = W({}, u)), t.style = Ss(u));
  }
  const i = q(e) ? 1 : Lo(e) ? 128 : vi(e) ? 64 : K(e) ? 4 : R(e) ? 2 : 0;
  return qe(
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
function Ci(e) {
  return e ? zn(e) || pr(e) ? W({}, e) : e : null;
}
function Je(e, t, s = !1, n = !1) {
  const { props: r, ref: o, patchFlag: i, children: c, transition: u } = e, d = t ? Oi(r || {}, t) : r, h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Er(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && o ? T(o) ? o.concat(At(t)) : [o, At(t)] : At(t)
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
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && n && (h.transition = u.clone(h)), h;
}
function ys(e = " ", t = 0) {
  return Me(zt, null, e, t);
}
function ge(e) {
  return e == null || typeof e == "boolean" ? Me(dt) : T(e) ? Me(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Ae(e) : Me(zt, null, String(e));
}
function Ae(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Je(e);
}
function js(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (T(t))
    s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), js(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !pr(t) ? t._ctx = oe : r === 3 && oe && (oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: oe }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [ys(t)]) : s = 8);
  e.children = t, e.shapeFlag |= s;
}
function Oi(...e) {
  const t = {};
  for (let s = 0; s < e.length; s++) {
    const n = e[s];
    for (const r in n)
      if (r === "class")
        t.class !== n.class && (t.class = Ts([t.class, n.class]));
      else if (r === "style")
        t.style = Ss([t.style, n.style]);
      else if (Lt(r)) {
        const o = t[r], i = n[r];
        i && o !== i && !(T(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = n[r]);
  }
  return t;
}
function me(e, t, s, n = null) {
  he(e, t, 7, [
    s,
    n
  ]);
}
const Si = ar();
let Ti = 0;
function Pi(e, t, s) {
  const n = e.type, r = (t ? t.appContext : e.appContext) || Si, o = {
    uid: Ti++,
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
    scope: new Wr(
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
    propsOptions: mr(n, r),
    emitsOptions: sr(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: j,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: j,
    data: j,
    props: j,
    attrs: j,
    slots: j,
    refs: j,
    setupState: j,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Ao.bind(null, o), e.ce && e.ce(o), o;
}
let J = null, Ft, xs;
{
  const e = An(), t = (s, n) => {
    let r;
    return (r = e[s]) || (r = e[s] = []), r.push(n), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  Ft = t(
    "__VUE_INSTANCE_SETTERS__",
    (s) => J = s
  ), xs = t(
    "__VUE_SSR_SETTERS__",
    (s) => qt = s
  );
}
const _t = (e) => {
  const t = J;
  return Ft(e), e.scope.on(), () => {
    e.scope.off(), Ft(t);
  };
}, _n = () => {
  J && J.scope.off(), Ft(null);
};
function wr(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function Ri(e, t = !1) {
  t && xs(t);
  const { props: s, children: n } = e.vnode, r = wr(e);
  ui(e, s, r, t), hi(e, n);
  const o = r ? Ai(e, t) : void 0;
  return t && xs(!1), o;
}
function Ai(e, t) {
  const s = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ti);
  const { setup: n } = s;
  if (n) {
    const r = e.setupContext = n.length > 1 ? Ni(e) : null, o = _t(e);
    Ce();
    const i = we(
      n,
      e,
      0,
      [
        e.props,
        r
      ]
    );
    if (Oe(), o(), Tn(i)) {
      if (i.then(_n, _n), t)
        return i.then((c) => {
          mn(e, c, t);
        }).catch((c) => {
          Bt(c, e, 0);
        });
      e.asyncDep = i;
    } else
      mn(e, i, t);
  } else
    Cr(e, t);
}
function mn(e, t, s) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = Xn(t)), Cr(e, s);
}
let gn;
function Cr(e, t, s) {
  const n = e.type;
  if (!e.render) {
    if (!t && gn && !n.render) {
      const r = n.template || Us(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = n, d = W(
          W(
            {
              isCustomElement: o,
              delimiters: c
            },
            i
          ),
          u
        );
        n.render = gn(r, d);
      }
    }
    e.render = n.render || re;
  }
  {
    const r = _t(e);
    Ce();
    try {
      si(e);
    } finally {
      Oe(), r();
    }
  }
}
const Ii = {
  get(e, t) {
    return te(e, "get", ""), e[t];
  }
};
function Ni(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ii),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Jt(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Xn(po(e.exposed)), {
      get(t, s) {
        if (s in t)
          return t[s];
        if (s in ot)
          return ot[s](e);
      },
      has(t, s) {
        return s in t || s in ot;
      }
    }));
}
const Mi = /(?:^|[-_])(\w)/g, Di = (e) => e.replace(Mi, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Fi(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Or(e, t, s = !1) {
  let n = Fi(t);
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
  return n ? Di(n) : s ? "App" : "Anonymous";
}
function Ui(e) {
  return R(e) && "__vccOpts" in e;
}
const Li = (e, t) => _o(e, t, qt), ji = "3.4.26", Hi = "http://www.w3.org/2000/svg", Vi = "http://www.w3.org/1998/Math/MathML", Ie = typeof document < "u" ? document : null, bn = Ie && /* @__PURE__ */ Ie.createElement("template"), $i = {
  insert: (e, t, s) => {
    t.insertBefore(e, s || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, s, n) => {
    const r = t === "svg" ? Ie.createElementNS(Hi, e) : t === "mathml" ? Ie.createElementNS(Vi, e) : Ie.createElement(e, s ? { is: s } : void 0);
    return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (e) => Ie.createTextNode(e),
  createComment: (e) => Ie.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ie.querySelector(e),
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
      bn.innerHTML = n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e;
      const c = bn.content;
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
}, Ki = Symbol("_vtc");
function Bi(e, t, s) {
  const n = e[Ki];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t;
}
const Ut = Symbol("_vod"), Sr = Symbol("_vsh"), Wi = {
  beforeMount(e, { value: t }, { transition: s }) {
    e[Ut] = e.style.display === "none" ? "" : e.style.display, s && t ? s.beforeEnter(e) : Qe(e, t);
  },
  mounted(e, { value: t }, { transition: s }) {
    s && t && s.enter(e);
  },
  updated(e, { value: t, oldValue: s }, { transition: n }) {
    !t != !s && (n ? t ? (n.beforeEnter(e), Qe(e, !0), n.enter(e)) : n.leave(e, () => {
      Qe(e, !1);
    }) : Qe(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Qe(e, t);
  }
};
function Qe(e, t) {
  e.style.display = t ? e[Ut] : "none", e[Sr] = !t;
}
const Gi = Symbol(""), zi = /(^|;)\s*display\s*:/;
function qi(e, t, s) {
  const n = e.style, r = q(s);
  let o = !1;
  if (s && !r) {
    if (t)
      if (q(t))
        for (const i of t.split(";")) {
          const c = i.slice(0, i.indexOf(":")).trim();
          s[c] == null && It(n, c, "");
        }
      else
        for (const i in t)
          s[i] == null && It(n, i, "");
    for (const i in s)
      i === "display" && (o = !0), It(n, i, s[i]);
  } else if (r) {
    if (t !== s) {
      const i = n[Gi];
      i && (s += ";" + i), n.cssText = s, o = zi.test(s);
    }
  } else
    t && e.removeAttribute("style");
  Ut in e && (e[Ut] = o ? n.display : "", e[Sr] && (n.display = "none"));
}
const vn = /\s*!important$/;
function It(e, t, s) {
  if (T(s))
    s.forEach((n) => It(e, t, n));
  else if (s == null && (s = ""), t.startsWith("--"))
    e.setProperty(t, s);
  else {
    const n = Ji(e, t);
    vn.test(s) ? e.setProperty(
      ae(n),
      s.replace(vn, ""),
      "important"
    ) : e[n] = s;
  }
}
const yn = ["Webkit", "Moz", "ms"], cs = {};
function Ji(e, t) {
  const s = cs[t];
  if (s)
    return s;
  let n = xe(t);
  if (n !== "filter" && n in e)
    return cs[t] = n;
  n = Pn(n);
  for (let r = 0; r < yn.length; r++) {
    const o = yn[r] + n;
    if (o in e)
      return cs[t] = o;
  }
  return t;
}
const xn = "http://www.w3.org/1999/xlink";
function Xi(e, t, s, n, r) {
  if (n && t.startsWith("xlink:"))
    s == null ? e.removeAttributeNS(xn, t.slice(6, t.length)) : e.setAttributeNS(xn, t, s);
  else {
    const o = Br(t);
    s == null || o && !In(s) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : s);
  }
}
function Yi(e, t, s, n, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, r, o), e[t] = s ?? "";
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, h = s ?? "";
    (d !== h || !("_value" in e)) && (e.value = h), s == null && e.removeAttribute(t), e._value = s;
    return;
  }
  let u = !1;
  if (s === "" || s == null) {
    const d = typeof e[t];
    d === "boolean" ? s = In(s) : s == null && d === "string" ? (s = "", u = !0) : d === "number" && (s = 0, u = !0);
  }
  try {
    e[t] = s;
  } catch {
  }
  u && e.removeAttribute(t);
}
function ki(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Zi(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const En = Symbol("_vei");
function Qi(e, t, s, n, r = null) {
  const o = e[En] || (e[En] = {}), i = o[t];
  if (n && i)
    i.value = n;
  else {
    const [c, u] = el(t);
    if (n) {
      const d = o[t] = nl(
        n,
        r
      );
      ki(e, c, d, u);
    } else
      i && (Zi(e, c, i, u), o[t] = void 0);
  }
}
const wn = /(?:Once|Passive|Capture)$/;
function el(e) {
  let t;
  if (wn.test(e)) {
    t = {};
    let n;
    for (; n = e.match(wn); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ae(e.slice(2)), t];
}
let fs = 0;
const tl = /* @__PURE__ */ Promise.resolve(), sl = () => fs || (tl.then(() => fs = 0), fs = Date.now());
function nl(e, t) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    he(
      rl(n, s.value),
      t,
      5,
      [n]
    );
  };
  return s.value = e, s.attached = sl(), s;
}
function rl(e, t) {
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
const Cn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ol = (e, t, s, n, r, o, i, c, u) => {
  const d = r === "svg";
  t === "class" ? Bi(e, n, d) : t === "style" ? qi(e, s, n) : Lt(t) ? ws(t) || Qi(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : il(e, t, n, d)) ? Yi(
    e,
    t,
    n,
    o,
    i,
    c,
    u
  ) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Xi(e, t, n, d));
};
function il(e, t, s, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cn(t) && R(s));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Cn(t) && q(s) ? !1 : t in e;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ll(e, t) {
  const s = /* @__PURE__ */ ir(e);
  class n extends Hs {
    constructor(o) {
      super(s, o, t);
    }
  }
  return n.def = s, n;
}
const cl = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Hs extends cl {
  constructor(t, s = {}, n) {
    super(), this._def = t, this._props = s, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && n ? n(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), Zn(() => {
      this._connected || (Sn(null, this.shadowRoot), this._instance = null);
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
          const d = o[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = Js(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[xe(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(n), this._applyStyles(i), this._update();
    }, s = this._def.__asyncLoader;
    s ? s().then((n) => t(n, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: s } = t, n = T(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of n.map(xe))
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
    const n = xe(t);
    this._numberProps && this._numberProps[n] && (s = Js(s)), this._setProp(n, s, !1);
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
    s !== this._props[t] && (this._props[t] = s, r && this._instance && this._update(), n && (s === !0 ? this.setAttribute(ae(t), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(ae(t), s + "") : s || this.removeAttribute(ae(t))));
  }
  _update() {
    Sn(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Me(this._def, W({}, this._props));
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
        n(o, i), ae(o) !== o && n(ae(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Hs) {
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
const fl = /* @__PURE__ */ W({ patchProp: ol }, $i);
let On;
function ul() {
  return On || (On = _i(fl));
}
const Sn = (...e) => {
  ul().render(...e);
}, al = { class: "main" }, dl = {
  for: "fileInput",
  class: "file-label"
}, hl = { key: 0 }, pl = { key: 1 }, _l = /* @__PURE__ */ qe("u", null, "click here", -1), ml = /* @__PURE__ */ ir({
  __name: "FileUpload.ce",
  setup(e) {
    const t = es(!1);
    es([]);
    const s = es([]);
    function n() {
    }
    function r(c) {
      c.preventDefault(), t.value = !0;
    }
    function o() {
      t.value = !1;
    }
    function i(c) {
      c.preventDefault(), t.value = !1;
    }
    return (c, u) => (is(), ls("div", al, [
      qe("div", {
        class: "dropzone-container",
        onDragover: r,
        onDragleave: o,
        onDrop: i
      }, [
        Ko(qe("input", {
          type: "file",
          multiple: "",
          name: "file",
          id: "fileInput",
          onChange: n,
          ref_key: "file",
          ref: s,
          accept: ".pdf,.jpg,.jpeg,.png"
        }, null, 544), [
          [Wi, !1]
        ]),
        qe("label", dl, [
          t.value ? (is(), ls("div", hl, "Release to drop files here.")) : (is(), ls("div", pl, [
            ys("Drop files here or "),
            _l,
            ys(" to upload.")
          ]))
        ])
      ], 32)
    ]));
  }
}), gl = ".main{display:flex;flex-grow:1;align-items:center;height:100vh;justify-content:center;text-align:center}.dropzone-container{padding:4rem;width:100vh;height:200px;background:#f7fafc;border:1px solid #e2e8f0}.hidden-input{opacity:0;overflow:hidden;position:absolute;width:1px;height:1px}.file-label{font-size:20px;display:block;cursor:pointer}.preview-container{display:flex;margin-top:2rem}.preview-card{display:flex;border:1px solid #a2a2a2;padding:5px;margin-left:5px}.preview-img{width:50px;height:50px;border-radius:5px;border:1px solid #a2a2a2;background-color:#a2a2a2}", bl = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, vl = /* @__PURE__ */ bl(ml, [["styles", [gl]]]), yl = /* @__PURE__ */ ll(vl);
customElements.define("file-upload", yl);
