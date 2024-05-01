/**
* @vue/shared v3.4.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ei(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const W = {}, kt = [], be = () => {
}, Oo = () => !1, qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ti = (e) => e.startsWith("onUpdate:"), re = Object.assign, ni = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ko = Object.prototype.hasOwnProperty, H = (e, t) => ko.call(e, t), M = Array.isArray, Ct = (e) => Jn(e) === "[object Map]", $a = (e) => Jn(e) === "[object Set]", U = (e) => typeof e == "function", ne = (e) => typeof e == "string", wt = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Ba = (e) => (q(e) || U(e)) && U(e.then) && U(e.catch), Ka = Object.prototype.toString, Jn = (e) => Ka.call(e), Co = (e) => Jn(e).slice(8, -1), Wa = (e) => Jn(e) === "[object Object]", ri = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ ei(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Po = /-(\w)/g, je = Zn((e) => e.replace(Po, (t, n) => n ? n.toUpperCase() : "")), To = /\B([A-Z])/g, Ae = Zn(
  (e) => e.replace(To, "-$1").toLowerCase()
), Ga = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), hr = Zn((e) => e ? `on${Ga(e)}` : ""), rt = (e, t) => !Object.is(e, t), vr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ya = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Io = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, ji = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Hi;
const Xa = () => Hi || (Hi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ii(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = ne(r) ? Do(r) : ii(r);
      if (i)
        for (const a in i)
          t[a] = i[a];
    }
    return t;
  } else if (ne(e) || q(e))
    return e;
}
const No = /;(?![^(]*\))/g, Ro = /:([^]+)/, Mo = /\/\*[^]*?\*\//g;
function Do(e) {
  const t = {};
  return e.replace(Mo, "").split(No).forEach((n) => {
    if (n) {
      const r = n.split(Ro);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Qn(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const r = Qn(e[n]);
      r && (t += r + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Lo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Uo = /* @__PURE__ */ ei(Lo);
function qa(e) {
  return !!e || e === "";
}
const Xe = (e) => ne(e) ? e : e == null ? "" : M(e) || q(e) && (e.toString === Ka || !U(e.toString)) ? JSON.stringify(e, Ja, 2) : String(e), Ja = (e, t) => t && t.__v_isRef ? Ja(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, i], a) => (n[gr(r, a) + " =>"] = i, n),
    {}
  )
} : $a(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gr(n))
} : wt(t) ? gr(t) : q(t) && !M(t) && !Wa(t) ? String(t) : t, gr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Se;
class Fo {
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
function jo(e, t = Se) {
  t && t.active && t.effects.push(e);
}
function Ho() {
  return Se;
}
let gt;
class ai {
  constructor(t, n, r, i) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, jo(this, i);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ke();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Vo(n.computed), this._dirtyLevel >= 4))
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
    let t = nt, n = gt;
    try {
      return nt = !0, gt = this, this._runnings++, Vi(this), this.fn();
    } finally {
      zi(this), this._runnings--, gt = n, nt = t;
    }
  }
  stop() {
    this.active && (Vi(this), zi(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Vo(e) {
  return e.value;
}
function Vi(e) {
  e._trackId++, e._depsLength = 0;
}
function zi(e) {
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
let nt = !0, Tr = 0;
const Qa = [];
function Ke() {
  Qa.push(nt), nt = !1;
}
function We() {
  const e = Qa.pop();
  nt = e === void 0 ? !0 : e;
}
function si() {
  Tr++;
}
function oi() {
  for (Tr--; !Tr && Ir.length; )
    Ir.shift()();
}
function es(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Za(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Ir = [];
function ts(e, t, n) {
  si();
  for (const r of e.keys()) {
    let i;
    r._dirtyLevel < t && (i ?? (i = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (i ?? (i = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Ir.push(r.scheduler)));
  }
  oi();
}
const ns = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Nr = /* @__PURE__ */ new WeakMap(), bt = Symbol(""), Rr = Symbol("");
function ve(e, t, n) {
  if (nt && gt) {
    let r = Nr.get(e);
    r || Nr.set(e, r = /* @__PURE__ */ new Map());
    let i = r.get(n);
    i || r.set(n, i = ns(() => r.delete(n))), es(
      gt,
      i
    );
  }
}
function He(e, t, n, r, i, a) {
  const s = Nr.get(e);
  if (!s)
    return;
  let o = [];
  if (t === "clear")
    o = [...s.values()];
  else if (n === "length" && M(e)) {
    const l = Number(r);
    s.forEach((c, u) => {
      (u === "length" || !wt(u) && u >= l) && o.push(c);
    });
  } else
    switch (n !== void 0 && o.push(s.get(n)), t) {
      case "add":
        M(e) ? ri(n) && o.push(s.get("length")) : (o.push(s.get(bt)), Ct(e) && o.push(s.get(Rr)));
        break;
      case "delete":
        M(e) || (o.push(s.get(bt)), Ct(e) && o.push(s.get(Rr)));
        break;
      case "set":
        Ct(e) && o.push(s.get(bt));
        break;
    }
  si();
  for (const l of o)
    l && ts(
      l,
      4
    );
  oi();
}
const zo = /* @__PURE__ */ ei("__proto__,__v_isRef,__isVue"), rs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wt)
), $i = /* @__PURE__ */ $o();
function $o() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = z(this);
      for (let a = 0, s = this.length; a < s; a++)
        ve(r, "get", a + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(z)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ke(), si();
      const r = z(this)[t].apply(this, n);
      return oi(), We(), r;
    };
  }), e;
}
function Bo(e) {
  wt(e) || (e = String(e));
  const t = z(this);
  return ve(t, "has", e), t.hasOwnProperty(e);
}
class is {
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
      return r === (i ? a ? cs : fs : a ? ls : os).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = M(t);
    if (!i) {
      if (s && H($i, n))
        return Reflect.get($i, n, r);
      if (n === "hasOwnProperty")
        return Bo;
    }
    const o = Reflect.get(t, n, r);
    return (wt(n) ? rs.has(n) : zo(n)) || (i || ve(t, "get", n), a) ? o : me(o) ? s && ri(n) ? o : o.value : q(o) ? i ? us(o) : fi(o) : o;
  }
}
class as extends is {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, i) {
    let a = t[n];
    if (!this._isShallow) {
      const l = Zt(a);
      if (!Vn(r) && !Zt(r) && (a = z(a), r = z(r)), !M(t) && me(a) && !me(r))
        return l ? !1 : (a.value = r, !0);
    }
    const s = M(t) && ri(n) ? Number(n) < t.length : H(t, n), o = Reflect.set(t, n, r, i);
    return t === z(i) && (s ? rt(r, a) && He(t, "set", n, r) : He(t, "add", n, r)), o;
  }
  deleteProperty(t, n) {
    const r = H(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && r && He(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!wt(n) || !rs.has(n)) && ve(t, "has", n), r;
  }
  ownKeys(t) {
    return ve(
      t,
      "iterate",
      M(t) ? "length" : bt
    ), Reflect.ownKeys(t);
  }
}
class ss extends is {
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
const Ko = /* @__PURE__ */ new as(), Wo = /* @__PURE__ */ new ss(), Go = /* @__PURE__ */ new as(
  !0
), Yo = /* @__PURE__ */ new ss(!0), li = (e) => e, er = (e) => Reflect.getPrototypeOf(e);
function gn(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = z(e), a = z(t);
  n || (rt(t, a) && ve(i, "get", t), ve(i, "get", a));
  const { has: s } = er(i), o = r ? li : n ? ci : Qt;
  if (s.call(i, t))
    return o(e.get(t));
  if (s.call(i, a))
    return o(e.get(a));
  e !== i && e.get(t);
}
function bn(e, t = !1) {
  const n = this.__v_raw, r = z(n), i = z(e);
  return t || (rt(e, i) && ve(r, "has", e), ve(r, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function _n(e, t = !1) {
  return e = e.__v_raw, !t && ve(z(e), "iterate", bt), Reflect.get(e, "size", e);
}
function Bi(e) {
  e = z(e);
  const t = z(this);
  return er(t).has.call(t, e) || (t.add(e), He(t, "add", e, e)), this;
}
function Ki(e, t) {
  t = z(t);
  const n = z(this), { has: r, get: i } = er(n);
  let a = r.call(n, e);
  a || (e = z(e), a = r.call(n, e));
  const s = i.call(n, e);
  return n.set(e, t), a ? rt(t, s) && He(n, "set", e, t) : He(n, "add", e, t), this;
}
function Wi(e) {
  const t = z(this), { has: n, get: r } = er(t);
  let i = n.call(t, e);
  i || (e = z(e), i = n.call(t, e)), r && r.call(t, e);
  const a = t.delete(e);
  return i && He(t, "delete", e, void 0), a;
}
function Gi() {
  const e = z(this), t = e.size !== 0, n = e.clear();
  return t && He(e, "clear", void 0, void 0), n;
}
function yn(e, t) {
  return function(r, i) {
    const a = this, s = a.__v_raw, o = z(s), l = t ? li : e ? ci : Qt;
    return !e && ve(o, "iterate", bt), s.forEach((c, u) => r.call(i, l(c), l(u), a));
  };
}
function xn(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, a = z(i), s = Ct(a), o = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...r), u = n ? li : t ? ci : Qt;
    return !t && ve(
      a,
      "iterate",
      l ? Rr : bt
    ), {
      // iterator protocol
      next() {
        const { value: m, done: h } = c.next();
        return h ? { value: m, done: h } : {
          value: o ? [u(m[0]), u(m[1])] : u(m),
          done: h
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
function Xo() {
  const e = {
    get(a) {
      return gn(this, a);
    },
    get size() {
      return _n(this);
    },
    has: bn,
    add: Bi,
    set: Ki,
    delete: Wi,
    clear: Gi,
    forEach: yn(!1, !1)
  }, t = {
    get(a) {
      return gn(this, a, !1, !0);
    },
    get size() {
      return _n(this);
    },
    has: bn,
    add: Bi,
    set: Ki,
    delete: Wi,
    clear: Gi,
    forEach: yn(!1, !0)
  }, n = {
    get(a) {
      return gn(this, a, !0);
    },
    get size() {
      return _n(this, !0);
    },
    has(a) {
      return bn.call(this, a, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: yn(!0, !1)
  }, r = {
    get(a) {
      return gn(this, a, !0, !0);
    },
    get size() {
      return _n(this, !0);
    },
    has(a) {
      return bn.call(this, a, !0);
    },
    add: qe("add"),
    set: qe("set"),
    delete: qe("delete"),
    clear: qe("clear"),
    forEach: yn(!0, !0)
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
  qo,
  Jo,
  Zo,
  Qo
] = /* @__PURE__ */ Xo();
function tr(e, t) {
  const n = t ? e ? Qo : Zo : e ? Jo : qo;
  return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(
    H(n, i) && i in r ? n : r,
    i,
    a
  );
}
const el = {
  get: /* @__PURE__ */ tr(!1, !1)
}, tl = {
  get: /* @__PURE__ */ tr(!1, !0)
}, nl = {
  get: /* @__PURE__ */ tr(!0, !1)
}, rl = {
  get: /* @__PURE__ */ tr(!0, !0)
}, os = /* @__PURE__ */ new WeakMap(), ls = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), cs = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : il(Co(e));
}
function fi(e) {
  return Zt(e) ? e : nr(
    e,
    !1,
    Ko,
    el,
    os
  );
}
function sl(e) {
  return nr(
    e,
    !1,
    Go,
    tl,
    ls
  );
}
function us(e) {
  return nr(
    e,
    !0,
    Wo,
    nl,
    fs
  );
}
function wn(e) {
  return nr(
    e,
    !0,
    Yo,
    rl,
    cs
  );
}
function nr(e, t, n, r, i) {
  if (!q(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = i.get(e);
  if (a)
    return a;
  const s = al(e);
  if (s === 0)
    return e;
  const o = new Proxy(
    e,
    s === 2 ? r : n
  );
  return i.set(e, o), o;
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
function ds(e) {
  return e ? !!e.__v_raw : !1;
}
function z(e) {
  const t = e && e.__v_raw;
  return t ? z(t) : e;
}
function ol(e) {
  return Object.isExtensible(e) && Ya(e, "__v_skip", !0), e;
}
const Qt = (e) => q(e) ? fi(e) : e, ci = (e) => q(e) ? us(e) : e;
class ms {
  constructor(t, n, r, i) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new ai(
      () => t(this._value),
      () => Rn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = r;
  }
  get value() {
    const t = z(this);
    return (!t._cacheable || t.effect.dirty) && rt(t._value, t._value = t.effect.run()) && Rn(t, 4), ps(t), t.effect._dirtyLevel >= 2 && Rn(t, 2), t._value;
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
  const a = U(e);
  return a ? (r = e, i = be) : (r = e.get, i = e.set), new ms(r, i, a || !i, n);
}
function ps(e) {
  var t;
  nt && gt && (e = z(e), es(
    gt,
    (t = e.dep) != null ? t : e.dep = ns(
      () => e.dep = void 0,
      e instanceof ms ? e : void 0
    )
  ));
}
function Rn(e, t = 4, n) {
  e = z(e);
  const r = e.dep;
  r && ts(
    r,
    t
  );
}
function me(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ut(e) {
  return fl(e, !1);
}
function fl(e, t) {
  return me(e) ? e : new cl(e, t);
}
class cl {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : z(t), this._value = n ? t : Qt(t);
  }
  get value() {
    return ps(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Vn(t) || Zt(t);
    t = n ? t : z(t), rt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Qt(t), Rn(this, 4));
  }
}
function ut(e) {
  return me(e) ? e.value : e;
}
const ul = {
  get: (e, t, n) => ut(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const i = e[t];
    return me(i) && !me(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function hs(e) {
  return Kt(e) ? e : new Proxy(e, ul);
}
var Ze = { NVM_INC: "/Users/cm/.nvm/versions/node/v19.7.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", TERM_PROGRAM_VERSION: "1.88.1", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "9.8.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v19.7.0/bin", npm_config_user_agent: "npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
const Wt = [];
function dl(e, ...t) {
  Ke();
  const n = Wt.length ? Wt[Wt.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = ml();
  if (r)
    Ve(
      r,
      n,
      11,
      [
        e + t.map((a) => {
          var s, o;
          return (o = (s = a.toString) == null ? void 0 : s.call(a)) != null ? o : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: a }) => `at <${Ks(n, a.type)}>`
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Ks(
    e.component,
    e.type,
    r
  )}`, a = ">" + n;
  return e.props ? [i, ...vl(e.props), a] : [i + a];
}
function vl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...vs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function vs(e, t, n) {
  return ne(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : me(t) ? (t = vs(e, z(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : U(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = z(t), n ? t : [`${e}=`, t]);
}
function Ve(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (i) {
    rr(i, t, n);
  }
}
function Ce(e, t, n, r) {
  if (U(e)) {
    const i = Ve(e, t, n, r);
    return i && Ba(i) && i.catch((a) => {
      rr(a, t, n);
    }), i;
  }
  if (M(e)) {
    const i = [];
    for (let a = 0; a < e.length; a++)
      i.push(Ce(e[a], t, n, r));
    return i;
  }
}
function rr(e, t, n, r = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const s = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, o) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Ke(), Ve(
        l,
        null,
        10,
        [e, s, o]
      ), We();
      return;
    }
  }
  gl(e, n, i, r);
}
function gl(e, t, n, r = !0) {
  console.error(e);
}
let en = !1, Mr = !1;
const oe = [];
let Me = 0;
const Pt = [];
let Qe = null, mt = 0;
const gs = /* @__PURE__ */ Promise.resolve();
let ui = null;
function bs(e) {
  const t = ui || gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bl(e) {
  let t = Me + 1, n = oe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, i = oe[r], a = tn(i);
    a < e || a === e && i.pre ? t = r + 1 : n = r;
  }
  return t;
}
function di(e) {
  (!oe.length || !oe.includes(
    e,
    en && e.allowRecurse ? Me + 1 : Me
  )) && (e.id == null ? oe.push(e) : oe.splice(bl(e.id), 0, e), _s());
}
function _s() {
  !en && !Mr && (Mr = !0, ui = gs.then(xs));
}
function _l(e) {
  const t = oe.indexOf(e);
  t > Me && oe.splice(t, 1);
}
function yl(e) {
  M(e) ? Pt.push(...e) : (!Qe || !Qe.includes(
    e,
    e.allowRecurse ? mt + 1 : mt
  )) && Pt.push(e), _s();
}
function Yi(e, t, n = en ? Me + 1 : 0) {
  for (; n < oe.length; n++) {
    const r = oe[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      oe.splice(n, 1), n--, r();
    }
  }
}
function ys(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, r) => tn(n) - tn(r)
    );
    if (Pt.length = 0, Qe) {
      Qe.push(...t);
      return;
    }
    for (Qe = t, mt = 0; mt < Qe.length; mt++)
      Qe[mt]();
    Qe = null, mt = 0;
  }
}
const tn = (e) => e.id == null ? 1 / 0 : e.id, xl = (e, t) => {
  const n = tn(e) - tn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function xs(e) {
  Mr = !1, en = !0, oe.sort(xl);
  const t = be;
  try {
    for (Me = 0; Me < oe.length; Me++) {
      const n = oe[Me];
      n && n.active !== !1 && (Ze.NODE_ENV !== "production" && t(n), Ve(n, null, 14));
    }
  } finally {
    Me = 0, oe.length = 0, ys(), en = !1, ui = null, (oe.length || Pt.length) && xs();
  }
}
function wl(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || W;
  let i = n;
  const a = t.startsWith("update:"), s = a && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: m, trim: h } = r[u] || W;
    h && (i = n.map((x) => ne(x) ? x.trim() : x)), m && (i = n.map(Io));
  }
  let o, l = r[o = hr(t)] || // also try camelCase event handler (#2249)
  r[o = hr(je(t))];
  !l && a && (l = r[o = hr(Ae(t))]), l && Ce(
    l,
    e,
    6,
    i
  );
  const c = r[o + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[o])
      return;
    e.emitted[o] = !0, Ce(
      c,
      e,
      6,
      i
    );
  }
}
function ws(e, t, n = !1) {
  const r = t.emitsCache, i = r.get(e);
  if (i !== void 0)
    return i;
  const a = e.emits;
  let s = {}, o = !1;
  if (!U(e)) {
    const l = (c) => {
      const u = ws(c, t, !0);
      u && (o = !0, re(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !o ? (q(e) && r.set(e, null), null) : (M(a) ? a.forEach((l) => s[l] = null) : re(s, a), q(e) && r.set(e, s), s);
}
function ir(e, t) {
  return !e || !qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, Ae(t)) || H(e, t));
}
let _e = null, Es = null;
function zn(e) {
  const t = _e;
  return _e = e, Es = e && e.type.__scopeId || null, t;
}
function El(e, t = _e, n) {
  if (!t || e._n)
    return e;
  const r = (...i) => {
    r._d && ia(-1);
    const a = zn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      zn(a), r._d && ia(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function br(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: i,
    propsOptions: [a],
    slots: s,
    attrs: o,
    emit: l,
    render: c,
    renderCache: u,
    props: m,
    data: h,
    setupState: x,
    ctx: P,
    inheritAttrs: T
  } = e, $ = zn(e);
  let E, A;
  try {
    if (n.shapeFlag & 4) {
      const F = i || r, V = Ze.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(F, {
        get(L, J, fe) {
          return dl(
            `Property '${String(
              J
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(L, J, fe);
        }
      }) : F;
      E = Re(
        c.call(
          V,
          F,
          u,
          Ze.NODE_ENV !== "production" ? wn(m) : m,
          x,
          h,
          P
        )
      ), A = o;
    } else {
      const F = t;
      Ze.NODE_ENV, E = Re(
        F.length > 1 ? F(
          Ze.NODE_ENV !== "production" ? wn(m) : m,
          Ze.NODE_ENV !== "production" ? {
            get attrs() {
              return wn(o);
            },
            slots: s,
            emit: l
          } : { attrs: o, slots: s, emit: l }
        ) : F(
          Ze.NODE_ENV !== "production" ? wn(m) : m,
          null
        )
      ), A = t.props ? o : Sl(o);
    }
  } catch (F) {
    Xt.length = 0, rr(F, e, 1), E = le(_t);
  }
  let I = E;
  if (A && T !== !1) {
    const F = Object.keys(A), { shapeFlag: V } = I;
    F.length && V & 7 && (a && F.some(ti) && (A = Al(
      A,
      a
    )), I = It(I, A, !1, !0));
  }
  return n.dirs && (I = It(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && (I.transition = n.transition), E = I, zn($), E;
}
const Sl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Al = (e, t) => {
  const n = {};
  for (const r in e)
    (!ti(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Ol(e, t, n) {
  const { props: r, children: i, component: a } = e, { props: s, children: o, patchFlag: l } = t, c = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Xi(r, s, c) : !!s;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let m = 0; m < u.length; m++) {
        const h = u[m];
        if (s[h] !== r[h] && !ir(c, h))
          return !0;
      }
    }
  } else
    return (i || o) && (!o || !o.$stable) ? !0 : r === s ? !1 : r ? s ? Xi(r, s, c) : !0 : !!s;
  return !1;
}
function Xi(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (t[a] !== e[a] && !ir(n, a))
      return !0;
  }
  return !1;
}
function kl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Cl = Symbol.for("v-ndc"), Pl = (e) => e.__isSuspense;
function Tl(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : yl(e);
}
const Il = Symbol.for("v-scx"), Nl = () => Ln(Il), En = {};
function Mn(e, t, n) {
  return Ss(e, t, n);
}
function Ss(e, t, {
  immediate: n,
  deep: r,
  flush: i,
  once: a,
  onTrack: s,
  onTrigger: o
} = W) {
  if (t && a) {
    const L = t;
    t = (...J) => {
      L(...J), V();
    };
  }
  const l = se, c = (L) => r === !0 ? L : (
    // for deep: false, only traverse root-level properties
    pt(L, r === !1 ? 1 : void 0)
  );
  let u, m = !1, h = !1;
  if (me(e) ? (u = () => e.value, m = Vn(e)) : Kt(e) ? (u = () => c(e), m = !0) : M(e) ? (h = !0, m = e.some((L) => Kt(L) || Vn(L)), u = () => e.map((L) => {
    if (me(L))
      return L.value;
    if (Kt(L))
      return c(L);
    if (U(L))
      return Ve(L, l, 2);
  })) : U(e) ? t ? u = () => Ve(e, l, 2) : u = () => (x && x(), Ce(
    e,
    l,
    3,
    [P]
  )) : u = be, t && r) {
    const L = u;
    u = () => pt(L());
  }
  let x, P = (L) => {
    x = I.onStop = () => {
      Ve(L, l, 4), x = I.onStop = void 0;
    };
  }, T;
  if (or)
    if (P = be, t ? n && Ce(t, l, 3, [
      u(),
      h ? [] : void 0,
      P
    ]) : u(), i === "sync") {
      const L = Nl();
      T = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return be;
  let $ = h ? new Array(e.length).fill(En) : En;
  const E = () => {
    if (!(!I.active || !I.dirty))
      if (t) {
        const L = I.run();
        (r || m || (h ? L.some((J, fe) => rt(J, $[fe])) : rt(L, $))) && (x && x(), Ce(t, l, 3, [
          L,
          // pass undefined as the old value when it's changed for the first time
          $ === En ? void 0 : h && $[0] === En ? [] : $,
          P
        ]), $ = L);
      } else
        I.run();
  };
  E.allowRecurse = !!t;
  let A;
  i === "sync" ? A = E : i === "post" ? A = () => he(E, l && l.suspense) : (E.pre = !0, l && (E.id = l.uid), A = () => di(E));
  const I = new ai(u, be, A), F = Ho(), V = () => {
    I.stop(), F && ni(F.effects, I);
  };
  return t ? n ? E() : $ = I.run() : i === "post" ? he(
    I.run.bind(I),
    l && l.suspense
  ) : I.run(), T && T.push(V), V;
}
function Rl(e, t, n) {
  const r = this.proxy, i = ne(e) ? e.includes(".") ? As(r, e) : () => r[e] : e.bind(r, r);
  let a;
  U(t) ? a = t : (a = t.handler, n = t);
  const s = fn(this), o = Ss(i, a.bind(r), n);
  return s(), o;
}
function As(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let i = 0; i < n.length && r; i++)
      r = r[n[i]];
    return r;
  };
}
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, me(e))
    pt(e.value, t, n);
  else if (M(e))
    for (let r = 0; r < e.length; r++)
      pt(e[r], t, n);
  else if ($a(e) || Ct(e))
    e.forEach((r) => {
      pt(r, t, n);
    });
  else if (Wa(e))
    for (const r in e)
      pt(e[r], t, n);
  return e;
}
function Ml(e, t) {
  if (_e === null)
    return e;
  const n = lr(_e) || _e.proxy, r = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [a, s, o, l = W] = t[i];
    a && (U(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && pt(s), r.push({
      dir: a,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: o,
      modifiers: l
    }));
  }
  return e;
}
function ft(e, t, n, r) {
  const i = e.dirs, a = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    a && (o.oldValue = a[s].value);
    let l = o.dir[r];
    l && (Ke(), Ce(l, n, 8, [
      e.el,
      o,
      e,
      t
    ]), We());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function mi(e, t) {
  return U(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    re({ name: e.name }, t, { setup: e })
  ) : e;
}
const Dn = (e) => !!e.type.__asyncLoader, Os = (e) => e.type.__isKeepAlive;
function Dl(e, t) {
  ks(e, "a", t);
}
function Ll(e, t) {
  ks(e, "da", t);
}
function ks(e, t, n = se) {
  const r = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ar(t, r, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Os(i.parent.vnode) && Ul(r, t, n, i), i = i.parent;
  }
}
function Ul(e, t, n, r) {
  const i = ar(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Cs(() => {
    ni(r[t], i);
  }, n);
}
function ar(e, t, n = se, r = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Ke();
      const o = fn(n), l = Ce(t, n, e, s);
      return o(), We(), l;
    });
    return r ? i.unshift(a) : i.push(a), a;
  }
}
const Ge = (e) => (t, n = se) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!or || e === "sp") && ar(e, (...r) => t(...r), n)
), Fl = Ge("bm"), jl = Ge("m"), Hl = Ge("bu"), Vl = Ge("u"), zl = Ge("bum"), Cs = Ge("um"), $l = Ge("sp"), Bl = Ge(
  "rtg"
), Kl = Ge(
  "rtc"
);
function Wl(e, t = se) {
  ar("ec", e, t);
}
function _r(e, t, n, r) {
  let i;
  const a = n;
  if (M(e) || ne(e)) {
    i = new Array(e.length);
    for (let s = 0, o = e.length; s < o; s++)
      i[s] = t(e[s], s, void 0, a);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let s = 0; s < e; s++)
      i[s] = t(s + 1, s, void 0, a);
  } else if (q(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (s, o) => t(s, o, void 0, a)
      );
    else {
      const s = Object.keys(e);
      i = new Array(s.length);
      for (let o = 0, l = s.length; o < l; o++) {
        const c = s[o];
        i[o] = t(e[c], c, o, a);
      }
    }
  else
    i = [];
  return i;
}
const Dr = (e) => e ? $s(e) ? lr(e) || e.proxy : Dr(e.parent) : null, Gt = (
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
    $parent: (e) => Dr(e.parent),
    $root: (e) => Dr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => pi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, di(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = bs.bind(e.proxy)),
    $watch: (e) => Rl.bind(e)
  })
), yr = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), Gl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: i, props: a, accessCache: s, type: o, appContext: l } = e;
    let c;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
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
        if (yr(r, t))
          return s[t] = 1, r[t];
        if (i !== W && H(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && H(c, t)
        )
          return s[t] = 3, a[t];
        if (n !== W && H(n, t))
          return s[t] = 4, n[t];
        Lr && (s[t] = 0);
      }
    }
    const u = Gt[t];
    let m, h;
    if (u)
      return t === "$attrs" && ve(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (m = o.__cssModules) && (m = m[t])
    )
      return m;
    if (n !== W && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      h = l.config.globalProperties, H(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: i, ctx: a } = e;
    return yr(i, t) ? (i[t] = n, !0) : r !== W && H(r, t) ? (r[t] = n, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, propsOptions: a }
  }, s) {
    let o;
    return !!n[s] || e !== W && H(e, s) || yr(t, s) || (o = a[0]) && H(o, s) || H(r, s) || H(Gt, s) || H(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function qi(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Lr = !0;
function Yl(e) {
  const t = pi(e), n = e.proxy, r = e.ctx;
  Lr = !1, t.beforeCreate && Ji(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: a,
    methods: s,
    watch: o,
    provide: l,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: m,
    mounted: h,
    beforeUpdate: x,
    updated: P,
    activated: T,
    deactivated: $,
    beforeDestroy: E,
    beforeUnmount: A,
    destroyed: I,
    unmounted: F,
    render: V,
    renderTracked: L,
    renderTriggered: J,
    errorCaptured: fe,
    serverPrefetch: xe,
    // public API
    expose: Le,
    inheritAttrs: Mt,
    // assets
    components: mn,
    directives: pn,
    filters: mr
  } = t;
  if (c && Xl(c, r, null), s)
    for (const Z in s) {
      const K = s[Z];
      U(K) && (r[Z] = K.bind(n));
    }
  if (i) {
    const Z = i.call(n, n);
    q(Z) && (e.data = fi(Z));
  }
  if (Lr = !0, a)
    for (const Z in a) {
      const K = a[Z], ot = U(K) ? K.bind(n, n) : U(K.get) ? K.get.bind(n, n) : be, hn = !U(K) && U(K.set) ? K.set.bind(n) : be, lt = dt({
        get: ot,
        set: hn
      });
      Object.defineProperty(r, Z, {
        enumerable: !0,
        configurable: !0,
        get: () => lt.value,
        set: (Pe) => lt.value = Pe
      });
    }
  if (o)
    for (const Z in o)
      Ps(o[Z], r, n, Z);
  if (l) {
    const Z = U(l) ? l.call(n) : l;
    Reflect.ownKeys(Z).forEach((K) => {
      tf(K, Z[K]);
    });
  }
  u && Ji(u, e, "c");
  function ce(Z, K) {
    M(K) ? K.forEach((ot) => Z(ot.bind(n))) : K && Z(K.bind(n));
  }
  if (ce(Fl, m), ce(jl, h), ce(Hl, x), ce(Vl, P), ce(Dl, T), ce(Ll, $), ce(Wl, fe), ce(Kl, L), ce(Bl, J), ce(zl, A), ce(Cs, F), ce($l, xe), M(Le))
    if (Le.length) {
      const Z = e.exposed || (e.exposed = {});
      Le.forEach((K) => {
        Object.defineProperty(Z, K, {
          get: () => n[K],
          set: (ot) => n[K] = ot
        });
      });
    } else
      e.exposed || (e.exposed = {});
  V && e.render === be && (e.render = V), Mt != null && (e.inheritAttrs = Mt), mn && (e.components = mn), pn && (e.directives = pn);
}
function Xl(e, t, n = be) {
  M(e) && (e = Ur(e));
  for (const r in e) {
    const i = e[r];
    let a;
    q(i) ? "default" in i ? a = Ln(
      i.from || r,
      i.default,
      !0
    ) : a = Ln(i.from || r) : a = Ln(i), me(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[r] = a;
  }
}
function Ji(e, t, n) {
  Ce(
    M(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ps(e, t, n, r) {
  const i = r.includes(".") ? As(n, r) : () => n[r];
  if (ne(e)) {
    const a = t[e];
    U(a) && Mn(i, a);
  } else if (U(e))
    Mn(i, e.bind(n));
  else if (q(e))
    if (M(e))
      e.forEach((a) => Ps(a, t, n, r));
    else {
      const a = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(a) && Mn(i, a, e);
    }
}
function pi(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: i,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, o = a.get(t);
  let l;
  return o ? l = o : !i.length && !n && !r ? l = t : (l = {}, i.length && i.forEach(
    (c) => $n(l, c, s, !0)
  ), $n(l, t, s)), q(t) && a.set(t, l), l;
}
function $n(e, t, n, r = !1) {
  const { mixins: i, extends: a } = t;
  a && $n(e, a, n, !0), i && i.forEach(
    (s) => $n(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const o = ql[s] || n && n[s];
      e[s] = o ? o(e[s], t[s]) : t[s];
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
      U(e) ? e.call(this, this) : e,
      U(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Jl(e, t) {
  return Ht(Ur(e), Ur(t));
}
function Ur(e) {
  if (M(e)) {
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
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : re(
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
function Ts() {
  return {
    app: null,
    config: {
      isNativeTag: Oo,
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
function ef(e, t) {
  return function(r, i = null) {
    U(r) || (r = re({}, r)), i != null && !q(i) && (i = null);
    const a = Ts(), s = /* @__PURE__ */ new WeakSet();
    let o = !1;
    const l = a.app = {
      _uid: Ql++,
      _component: r,
      _props: i,
      _container: null,
      _context: a,
      _instance: null,
      version: Pf,
      get config() {
        return a.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && U(c.install) ? (s.add(c), c.install(l, ...u)) : U(c) && (s.add(c), c(l, ...u))), l;
      },
      mixin(c) {
        return a.mixins.includes(c) || a.mixins.push(c), l;
      },
      component(c, u) {
        return u ? (a.components[c] = u, l) : a.components[c];
      },
      directive(c, u) {
        return u ? (a.directives[c] = u, l) : a.directives[c];
      },
      mount(c, u, m) {
        if (!o) {
          const h = le(r, i);
          return h.appContext = a, m === !0 ? m = "svg" : m === !1 && (m = void 0), u && t ? t(h, c) : e(h, c, m), o = !0, l._container = c, c.__vue_app__ = l, lr(h.component) || h.component.proxy;
        }
      },
      unmount() {
        o && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return a.provides[c] = u, l;
      },
      runWithContext(c) {
        const u = Yt;
        Yt = l;
        try {
          return c();
        } finally {
          Yt = u;
        }
      }
    };
    return l;
  };
}
let Yt = null;
function tf(e, t) {
  if (se) {
    let n = se.provides;
    const r = se.parent && se.parent.provides;
    r === n && (n = se.provides = Object.create(r)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const r = se || _e;
  if (r || Yt) {
    const i = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Yt._context.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(r && r.proxy) : t;
  }
}
const Is = {}, Ns = () => Object.create(Is), Rs = (e) => Object.getPrototypeOf(e) === Is;
function nf(e, t, n, r = !1) {
  const i = {}, a = Ns();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ms(e, t, i, a);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  n ? e.props = r ? i : sl(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function rf(e, t, n, r) {
  const {
    props: i,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, o = z(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let m = 0; m < u.length; m++) {
        let h = u[m];
        if (ir(e.emitsOptions, h))
          continue;
        const x = t[h];
        if (l)
          if (H(a, h))
            x !== a[h] && (a[h] = x, c = !0);
          else {
            const P = je(h);
            i[P] = Fr(
              l,
              o,
              P,
              x,
              e,
              !1
            );
          }
        else
          x !== a[h] && (a[h] = x, c = !0);
      }
    }
  } else {
    Ms(e, t, i, a) && (c = !0);
    let u;
    for (const m in o)
      (!t || // for camelCase
      !H(t, m) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ae(m)) === m || !H(t, u))) && (l ? n && // for camelCase
      (n[m] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[m] = Fr(
        l,
        o,
        m,
        void 0,
        e,
        !0
      )) : delete i[m]);
    if (a !== o)
      for (const m in a)
        (!t || !H(t, m)) && (delete a[m], c = !0);
  }
  c && He(e.attrs, "set", "");
}
function Ms(e, t, n, r) {
  const [i, a] = e.propsOptions;
  let s = !1, o;
  if (t)
    for (let l in t) {
      if (Bt(l))
        continue;
      const c = t[l];
      let u;
      i && H(i, u = je(l)) ? !a || !a.includes(u) ? n[u] = c : (o || (o = {}))[u] = c : ir(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (a) {
    const l = z(n), c = o || W;
    for (let u = 0; u < a.length; u++) {
      const m = a[u];
      n[m] = Fr(
        i,
        l,
        m,
        c[m],
        e,
        !H(c, m)
      );
    }
  }
  return s;
}
function Fr(e, t, n, r, i, a) {
  const s = e[n];
  if (s != null) {
    const o = H(s, "default");
    if (o && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && U(l)) {
        const { propsDefaults: c } = i;
        if (n in c)
          r = c[n];
        else {
          const u = fn(i);
          r = c[n] = l.call(
            null,
            t
          ), u();
        }
      } else
        r = l;
    }
    s[
      0
      /* shouldCast */
    ] && (a && !o ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ae(n)) && (r = !0));
  }
  return r;
}
function Ds(e, t, n = !1) {
  const r = t.propsCache, i = r.get(e);
  if (i)
    return i;
  const a = e.props, s = {}, o = [];
  let l = !1;
  if (!U(e)) {
    const u = (m) => {
      l = !0;
      const [h, x] = Ds(m, t, !0);
      re(s, h), x && o.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!a && !l)
    return q(e) && r.set(e, kt), kt;
  if (M(a))
    for (let u = 0; u < a.length; u++) {
      const m = je(a[u]);
      ea(m) && (s[m] = W);
    }
  else if (a)
    for (const u in a) {
      const m = je(u);
      if (ea(m)) {
        const h = a[u], x = s[m] = M(h) || U(h) ? { type: h } : re({}, h);
        if (x) {
          const P = ra(Boolean, x.type), T = ra(String, x.type);
          x[
            0
            /* shouldCast */
          ] = P > -1, x[
            1
            /* shouldCastTrue */
          ] = T < 0 || P < T, (P > -1 || H(x, "default")) && o.push(m);
        }
      }
    }
  const c = [s, o];
  return q(e) && r.set(e, c), c;
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
  return M(t) ? t.findIndex((n) => na(n, e)) : U(t) && na(t, e) ? 0 : -1;
}
const Ls = (e) => e[0] === "_" || e === "$stable", hi = (e) => M(e) ? e.map(Re) : [Re(e)], af = (e, t, n) => {
  if (t._n)
    return t;
  const r = El((...i) => (Ze.NODE_ENV !== "production" && se && (!n || (n.root, se.root)), hi(t(...i))), n);
  return r._c = !1, r;
}, Us = (e, t, n) => {
  const r = e._ctx;
  for (const i in e) {
    if (Ls(i))
      continue;
    const a = e[i];
    if (U(a))
      t[i] = af(i, a, r);
    else if (a != null) {
      const s = hi(a);
      t[i] = () => s;
    }
  }
}, Fs = (e, t) => {
  const n = hi(t);
  e.slots.default = () => n;
}, sf = (e, t) => {
  const n = e.slots = Ns();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (re(n, t), Ya(n, "_", r, !0)) : Us(t, n);
  } else
    t && Fs(e, t);
}, of = (e, t, n) => {
  const { vnode: r, slots: i } = e;
  let a = !0, s = W;
  if (r.shapeFlag & 32) {
    const o = t._;
    o ? n && o === 1 ? a = !1 : (re(i, t), !n && o === 1 && delete i._) : (a = !t.$stable, Us(t, i)), s = t;
  } else
    t && (Fs(e, t), s = { default: 1 });
  if (a)
    for (const o in i)
      !Ls(o) && s[o] == null && delete i[o];
};
function jr(e, t, n, r, i = !1) {
  if (M(e)) {
    e.forEach(
      (h, x) => jr(
        h,
        t && (M(t) ? t[x] : t),
        n,
        r,
        i
      )
    );
    return;
  }
  if (Dn(r) && !i)
    return;
  const a = r.shapeFlag & 4 ? lr(r.component) || r.component.proxy : r.el, s = i ? null : a, { i: o, r: l } = e, c = t && t.r, u = o.refs === W ? o.refs = {} : o.refs, m = o.setupState;
  if (c != null && c !== l && (ne(c) ? (u[c] = null, H(m, c) && (m[c] = null)) : me(c) && (c.value = null)), U(l))
    Ve(l, o, 12, [s, u]);
  else {
    const h = ne(l), x = me(l);
    if (h || x) {
      const P = () => {
        if (e.f) {
          const T = h ? H(m, l) ? m[l] : u[l] : l.value;
          i ? M(T) && ni(T, a) : M(T) ? T.includes(a) || T.push(a) : h ? (u[l] = [a], H(m, l) && (m[l] = u[l])) : (l.value = [a], e.k && (u[e.k] = l.value));
        } else
          h ? (u[l] = s, H(m, l) && (m[l] = s)) : x && (l.value = s, e.k && (u[e.k] = s));
      };
      s ? (P.id = -1, he(P, n)) : P();
    }
  }
}
const he = Tl;
function lf(e) {
  return ff(e);
}
function ff(e, t) {
  const n = Xa();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: i,
    patchProp: a,
    createElement: s,
    createText: o,
    createComment: l,
    setText: c,
    setElementText: u,
    parentNode: m,
    nextSibling: h,
    setScopeId: x = be,
    insertStaticContent: P
  } = e, T = (f, d, p, v = null, g = null, y = null, S = void 0, _ = null, w = !!d.dynamicChildren) => {
    if (f === d)
      return;
    f && !Ft(f, d) && (v = vn(f), Pe(f, g, y, !0), f = null), d.patchFlag === -2 && (w = !1, d.dynamicChildren = null);
    const { type: b, ref: k, shapeFlag: R } = d;
    switch (b) {
      case sr:
        $(f, d, p, v);
        break;
      case _t:
        E(f, d, p, v);
        break;
      case wr:
        f == null && A(d, p, v, S);
        break;
      case we:
        mn(
          f,
          d,
          p,
          v,
          g,
          y,
          S,
          _,
          w
        );
        break;
      default:
        R & 1 ? V(
          f,
          d,
          p,
          v,
          g,
          y,
          S,
          _,
          w
        ) : R & 6 ? pn(
          f,
          d,
          p,
          v,
          g,
          y,
          S,
          _,
          w
        ) : (R & 64 || R & 128) && b.process(
          f,
          d,
          p,
          v,
          g,
          y,
          S,
          _,
          w,
          Dt
        );
    }
    k != null && g && jr(k, f && f.ref, y, d || f, !d);
  }, $ = (f, d, p, v) => {
    if (f == null)
      r(
        d.el = o(d.children),
        p,
        v
      );
    else {
      const g = d.el = f.el;
      d.children !== f.children && c(g, d.children);
    }
  }, E = (f, d, p, v) => {
    f == null ? r(
      d.el = l(d.children || ""),
      p,
      v
    ) : d.el = f.el;
  }, A = (f, d, p, v) => {
    [f.el, f.anchor] = P(
      f.children,
      d,
      p,
      v,
      f.el,
      f.anchor
    );
  }, I = ({ el: f, anchor: d }, p, v) => {
    let g;
    for (; f && f !== d; )
      g = h(f), r(f, p, v), f = g;
    r(d, p, v);
  }, F = ({ el: f, anchor: d }) => {
    let p;
    for (; f && f !== d; )
      p = h(f), i(f), f = p;
    i(d);
  }, V = (f, d, p, v, g, y, S, _, w) => {
    d.type === "svg" ? S = "svg" : d.type === "math" && (S = "mathml"), f == null ? L(
      d,
      p,
      v,
      g,
      y,
      S,
      _,
      w
    ) : xe(
      f,
      d,
      g,
      y,
      S,
      _,
      w
    );
  }, L = (f, d, p, v, g, y, S, _) => {
    let w, b;
    const { props: k, shapeFlag: R, transition: N, dirs: D } = f;
    if (w = f.el = s(
      f.type,
      y,
      k && k.is,
      k
    ), R & 8 ? u(w, f.children) : R & 16 && fe(
      f.children,
      w,
      null,
      v,
      g,
      xr(f, y),
      S,
      _
    ), D && ft(f, null, v, "created"), J(w, f, f.scopeId, S, v), k) {
      for (const B in k)
        B !== "value" && !Bt(B) && a(
          w,
          B,
          null,
          k[B],
          y,
          f.children,
          v,
          g,
          Ue
        );
      "value" in k && a(w, "value", null, k.value, y), (b = k.onVnodeBeforeMount) && Ne(b, v, f);
    }
    D && ft(f, null, v, "beforeMount");
    const j = cf(g, N);
    j && N.beforeEnter(w), r(w, d, p), ((b = k && k.onVnodeMounted) || j || D) && he(() => {
      b && Ne(b, v, f), j && N.enter(w), D && ft(f, null, v, "mounted");
    }, g);
  }, J = (f, d, p, v, g) => {
    if (p && x(f, p), v)
      for (let y = 0; y < v.length; y++)
        x(f, v[y]);
    if (g) {
      let y = g.subTree;
      if (d === y) {
        const S = g.vnode;
        J(
          f,
          S,
          S.scopeId,
          S.slotScopeIds,
          g.parent
        );
      }
    }
  }, fe = (f, d, p, v, g, y, S, _, w = 0) => {
    for (let b = w; b < f.length; b++) {
      const k = f[b] = _ ? et(f[b]) : Re(f[b]);
      T(
        null,
        k,
        d,
        p,
        v,
        g,
        y,
        S,
        _
      );
    }
  }, xe = (f, d, p, v, g, y, S) => {
    const _ = d.el = f.el;
    let { patchFlag: w, dynamicChildren: b, dirs: k } = d;
    w |= f.patchFlag & 16;
    const R = f.props || W, N = d.props || W;
    let D;
    if (p && ct(p, !1), (D = N.onVnodeBeforeUpdate) && Ne(D, p, d, f), k && ft(d, f, p, "beforeUpdate"), p && ct(p, !0), b ? Le(
      f.dynamicChildren,
      b,
      _,
      p,
      v,
      xr(d, g),
      y
    ) : S || K(
      f,
      d,
      _,
      null,
      p,
      v,
      xr(d, g),
      y,
      !1
    ), w > 0) {
      if (w & 16)
        Mt(
          _,
          d,
          R,
          N,
          p,
          v,
          g
        );
      else if (w & 2 && R.class !== N.class && a(_, "class", null, N.class, g), w & 4 && a(_, "style", R.style, N.style, g), w & 8) {
        const j = d.dynamicProps;
        for (let B = 0; B < j.length; B++) {
          const X = j[B], ae = R[X], Ee = N[X];
          (Ee !== ae || X === "value") && a(
            _,
            X,
            ae,
            Ee,
            g,
            f.children,
            p,
            v,
            Ue
          );
        }
      }
      w & 1 && f.children !== d.children && u(_, d.children);
    } else
      !S && b == null && Mt(
        _,
        d,
        R,
        N,
        p,
        v,
        g
      );
    ((D = N.onVnodeUpdated) || k) && he(() => {
      D && Ne(D, p, d, f), k && ft(d, f, p, "updated");
    }, v);
  }, Le = (f, d, p, v, g, y, S) => {
    for (let _ = 0; _ < d.length; _++) {
      const w = f[_], b = d[_], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(w, b) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 70) ? m(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      T(
        w,
        b,
        k,
        null,
        v,
        g,
        y,
        S,
        !0
      );
    }
  }, Mt = (f, d, p, v, g, y, S) => {
    if (p !== v) {
      if (p !== W)
        for (const _ in p)
          !Bt(_) && !(_ in v) && a(
            f,
            _,
            p[_],
            null,
            S,
            d.children,
            g,
            y,
            Ue
          );
      for (const _ in v) {
        if (Bt(_))
          continue;
        const w = v[_], b = p[_];
        w !== b && _ !== "value" && a(
          f,
          _,
          b,
          w,
          S,
          d.children,
          g,
          y,
          Ue
        );
      }
      "value" in v && a(f, "value", p.value, v.value, S);
    }
  }, mn = (f, d, p, v, g, y, S, _, w) => {
    const b = d.el = f ? f.el : o(""), k = d.anchor = f ? f.anchor : o("");
    let { patchFlag: R, dynamicChildren: N, slotScopeIds: D } = d;
    D && (_ = _ ? _.concat(D) : D), f == null ? (r(b, p, v), r(k, p, v), fe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      p,
      k,
      g,
      y,
      S,
      _,
      w
    )) : R > 0 && R & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (Le(
      f.dynamicChildren,
      N,
      p,
      g,
      y,
      S,
      _
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || g && d === g.subTree) && js(
      f,
      d,
      !0
      /* shallow */
    )) : K(
      f,
      d,
      p,
      k,
      g,
      y,
      S,
      _,
      w
    );
  }, pn = (f, d, p, v, g, y, S, _, w) => {
    d.slotScopeIds = _, f == null ? d.shapeFlag & 512 ? g.ctx.activate(
      d,
      p,
      v,
      S,
      w
    ) : mr(
      d,
      p,
      v,
      g,
      y,
      S,
      w
    ) : Ii(f, d, w);
  }, mr = (f, d, p, v, g, y, S) => {
    const _ = f.component = _f(
      f,
      v,
      g
    );
    if (Os(f) && (_.ctx.renderer = Dt), yf(_), _.asyncDep) {
      if (g && g.registerDep(_, ce), !f.el) {
        const w = _.subTree = le(_t);
        E(null, w, d, p);
      }
    } else
      ce(
        _,
        f,
        d,
        p,
        g,
        y,
        S
      );
  }, Ii = (f, d, p) => {
    const v = d.component = f.component;
    if (Ol(f, d, p))
      if (v.asyncDep && !v.asyncResolved) {
        Z(v, d, p);
        return;
      } else
        v.next = d, _l(v.update), v.effect.dirty = !0, v.update();
    else
      d.el = f.el, v.vnode = d;
  }, ce = (f, d, p, v, g, y, S) => {
    const _ = () => {
      if (f.isMounted) {
        let { next: k, bu: R, u: N, parent: D, vnode: j } = f;
        {
          const Et = Hs(f);
          if (Et) {
            k && (k.el = j.el, Z(f, k, S)), Et.asyncDep.then(() => {
              f.isUnmounted || _();
            });
            return;
          }
        }
        let B = k, X;
        ct(f, !1), k ? (k.el = j.el, Z(f, k, S)) : k = j, R && vr(R), (X = k.props && k.props.onVnodeBeforeUpdate) && Ne(X, D, k, j), ct(f, !0);
        const ae = br(f), Ee = f.subTree;
        f.subTree = ae, T(
          Ee,
          ae,
          // parent may have changed if it's in a teleport
          m(Ee.el),
          // anchor may have changed if it's in a fragment
          vn(Ee),
          f,
          g,
          y
        ), k.el = ae.el, B === null && kl(f, ae.el), N && he(N, g), (X = k.props && k.props.onVnodeUpdated) && he(
          () => Ne(X, D, k, j),
          g
        );
      } else {
        let k;
        const { el: R, props: N } = d, { bm: D, m: j, parent: B } = f, X = Dn(d);
        if (ct(f, !1), D && vr(D), !X && (k = N && N.onVnodeBeforeMount) && Ne(k, B, d), ct(f, !0), R && Di) {
          const ae = () => {
            f.subTree = br(f), Di(
              R,
              f.subTree,
              f,
              g,
              null
            );
          };
          X ? d.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !f.isUnmounted && ae()
          ) : ae();
        } else {
          const ae = f.subTree = br(f);
          T(
            null,
            ae,
            p,
            v,
            f,
            g,
            y
          ), d.el = ae.el;
        }
        if (j && he(j, g), !X && (k = N && N.onVnodeMounted)) {
          const ae = d;
          he(
            () => Ne(k, B, ae),
            g
          );
        }
        (d.shapeFlag & 256 || B && Dn(B.vnode) && B.vnode.shapeFlag & 256) && f.a && he(f.a, g), f.isMounted = !0, d = p = v = null;
      }
    }, w = f.effect = new ai(
      _,
      be,
      () => di(b),
      f.scope
      // track it in component's effect scope
    ), b = f.update = () => {
      w.dirty && w.run();
    };
    b.id = f.uid, ct(f, !0), b();
  }, Z = (f, d, p) => {
    d.component = f;
    const v = f.vnode.props;
    f.vnode = d, f.next = null, rf(f, d.props, v, p), of(f, d.children, p), Ke(), Yi(f), We();
  }, K = (f, d, p, v, g, y, S, _, w = !1) => {
    const b = f && f.children, k = f ? f.shapeFlag : 0, R = d.children, { patchFlag: N, shapeFlag: D } = d;
    if (N > 0) {
      if (N & 128) {
        hn(
          b,
          R,
          p,
          v,
          g,
          y,
          S,
          _,
          w
        );
        return;
      } else if (N & 256) {
        ot(
          b,
          R,
          p,
          v,
          g,
          y,
          S,
          _,
          w
        );
        return;
      }
    }
    D & 8 ? (k & 16 && Ue(b, g, y), R !== b && u(p, R)) : k & 16 ? D & 16 ? hn(
      b,
      R,
      p,
      v,
      g,
      y,
      S,
      _,
      w
    ) : Ue(b, g, y, !0) : (k & 8 && u(p, ""), D & 16 && fe(
      R,
      p,
      v,
      g,
      y,
      S,
      _,
      w
    ));
  }, ot = (f, d, p, v, g, y, S, _, w) => {
    f = f || kt, d = d || kt;
    const b = f.length, k = d.length, R = Math.min(b, k);
    let N;
    for (N = 0; N < R; N++) {
      const D = d[N] = w ? et(d[N]) : Re(d[N]);
      T(
        f[N],
        D,
        p,
        null,
        g,
        y,
        S,
        _,
        w
      );
    }
    b > k ? Ue(
      f,
      g,
      y,
      !0,
      !1,
      R
    ) : fe(
      d,
      p,
      v,
      g,
      y,
      S,
      _,
      w,
      R
    );
  }, hn = (f, d, p, v, g, y, S, _, w) => {
    let b = 0;
    const k = d.length;
    let R = f.length - 1, N = k - 1;
    for (; b <= R && b <= N; ) {
      const D = f[b], j = d[b] = w ? et(d[b]) : Re(d[b]);
      if (Ft(D, j))
        T(
          D,
          j,
          p,
          null,
          g,
          y,
          S,
          _,
          w
        );
      else
        break;
      b++;
    }
    for (; b <= R && b <= N; ) {
      const D = f[R], j = d[N] = w ? et(d[N]) : Re(d[N]);
      if (Ft(D, j))
        T(
          D,
          j,
          p,
          null,
          g,
          y,
          S,
          _,
          w
        );
      else
        break;
      R--, N--;
    }
    if (b > R) {
      if (b <= N) {
        const D = N + 1, j = D < k ? d[D].el : v;
        for (; b <= N; )
          T(
            null,
            d[b] = w ? et(d[b]) : Re(d[b]),
            p,
            j,
            g,
            y,
            S,
            _,
            w
          ), b++;
      }
    } else if (b > N)
      for (; b <= R; )
        Pe(f[b], g, y, !0), b++;
    else {
      const D = b, j = b, B = /* @__PURE__ */ new Map();
      for (b = j; b <= N; b++) {
        const ge = d[b] = w ? et(d[b]) : Re(d[b]);
        ge.key != null && B.set(ge.key, b);
      }
      let X, ae = 0;
      const Ee = N - j + 1;
      let Et = !1, Li = 0;
      const Lt = new Array(Ee);
      for (b = 0; b < Ee; b++)
        Lt[b] = 0;
      for (b = D; b <= R; b++) {
        const ge = f[b];
        if (ae >= Ee) {
          Pe(ge, g, y, !0);
          continue;
        }
        let Te;
        if (ge.key != null)
          Te = B.get(ge.key);
        else
          for (X = j; X <= N; X++)
            if (Lt[X - j] === 0 && Ft(ge, d[X])) {
              Te = X;
              break;
            }
        Te === void 0 ? Pe(ge, g, y, !0) : (Lt[Te - j] = b + 1, Te >= Li ? Li = Te : Et = !0, T(
          ge,
          d[Te],
          p,
          null,
          g,
          y,
          S,
          _,
          w
        ), ae++);
      }
      const Ui = Et ? uf(Lt) : kt;
      for (X = Ui.length - 1, b = Ee - 1; b >= 0; b--) {
        const ge = j + b, Te = d[ge], Fi = ge + 1 < k ? d[ge + 1].el : v;
        Lt[b] === 0 ? T(
          null,
          Te,
          p,
          Fi,
          g,
          y,
          S,
          _,
          w
        ) : Et && (X < 0 || b !== Ui[X] ? lt(Te, p, Fi, 2) : X--);
      }
    }
  }, lt = (f, d, p, v, g = null) => {
    const { el: y, type: S, transition: _, children: w, shapeFlag: b } = f;
    if (b & 6) {
      lt(f.component.subTree, d, p, v);
      return;
    }
    if (b & 128) {
      f.suspense.move(d, p, v);
      return;
    }
    if (b & 64) {
      S.move(f, d, p, Dt);
      return;
    }
    if (S === we) {
      r(y, d, p);
      for (let R = 0; R < w.length; R++)
        lt(w[R], d, p, v);
      r(f.anchor, d, p);
      return;
    }
    if (S === wr) {
      I(f, d, p);
      return;
    }
    if (v !== 2 && b & 1 && _)
      if (v === 0)
        _.beforeEnter(y), r(y, d, p), he(() => _.enter(y), g);
      else {
        const { leave: R, delayLeave: N, afterLeave: D } = _, j = () => r(y, d, p), B = () => {
          R(y, () => {
            j(), D && D();
          });
        };
        N ? N(y, j, B) : B();
      }
    else
      r(y, d, p);
  }, Pe = (f, d, p, v = !1, g = !1) => {
    const {
      type: y,
      props: S,
      ref: _,
      children: w,
      dynamicChildren: b,
      shapeFlag: k,
      patchFlag: R,
      dirs: N
    } = f;
    if (_ != null && jr(_, null, p, f, !0), k & 256) {
      d.ctx.deactivate(f);
      return;
    }
    const D = k & 1 && N, j = !Dn(f);
    let B;
    if (j && (B = S && S.onVnodeBeforeUnmount) && Ne(B, d, f), k & 6)
      Ao(f.component, p, v);
    else {
      if (k & 128) {
        f.suspense.unmount(p, v);
        return;
      }
      D && ft(f, null, d, "beforeUnmount"), k & 64 ? f.type.remove(
        f,
        d,
        p,
        g,
        Dt,
        v
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== we || R > 0 && R & 64) ? Ue(
        b,
        d,
        p,
        !1,
        !0
      ) : (y === we && R & 384 || !g && k & 16) && Ue(w, d, p), v && Ni(f);
    }
    (j && (B = S && S.onVnodeUnmounted) || D) && he(() => {
      B && Ne(B, d, f), D && ft(f, null, d, "unmounted");
    }, p);
  }, Ni = (f) => {
    const { type: d, el: p, anchor: v, transition: g } = f;
    if (d === we) {
      So(p, v);
      return;
    }
    if (d === wr) {
      F(f);
      return;
    }
    const y = () => {
      i(p), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (f.shapeFlag & 1 && g && !g.persisted) {
      const { leave: S, delayLeave: _ } = g, w = () => S(p, y);
      _ ? _(f.el, y, w) : w();
    } else
      y();
  }, So = (f, d) => {
    let p;
    for (; f !== d; )
      p = h(f), i(f), f = p;
    i(d);
  }, Ao = (f, d, p) => {
    const { bum: v, scope: g, update: y, subTree: S, um: _ } = f;
    v && vr(v), g.stop(), y && (y.active = !1, Pe(S, f, d, p)), _ && he(_, d), he(() => {
      f.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, Ue = (f, d, p, v = !1, g = !1, y = 0) => {
    for (let S = y; S < f.length; S++)
      Pe(f[S], d, p, v, g);
  }, vn = (f) => f.shapeFlag & 6 ? vn(f.component.subTree) : f.shapeFlag & 128 ? f.suspense.next() : h(f.anchor || f.el);
  let pr = !1;
  const Ri = (f, d, p) => {
    f == null ? d._vnode && Pe(d._vnode, null, null, !0) : T(
      d._vnode || null,
      f,
      d,
      null,
      null,
      null,
      p
    ), pr || (pr = !0, Yi(), ys(), pr = !1), d._vnode = f;
  }, Dt = {
    p: T,
    um: Pe,
    m: lt,
    r: Ni,
    mt: mr,
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
    createApp: ef(Ri, Mi)
  };
}
function xr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ct({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function cf(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function js(e, t, n = !1) {
  const r = e.children, i = t.children;
  if (M(r) && M(i))
    for (let a = 0; a < r.length; a++) {
      const s = r[a];
      let o = i[a];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = i[a] = et(i[a]), o.el = s.el), n || js(s, o)), o.type === sr && (o.el = s.el);
    }
}
function uf(e) {
  const t = e.slice(), n = [0];
  let r, i, a, s, o;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (i = n[n.length - 1], e[i] < c) {
        t[r] = i, n.push(r);
        continue;
      }
      for (a = 0, s = n.length - 1; a < s; )
        o = a + s >> 1, e[n[o]] < c ? a = o + 1 : s = o;
      c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, s = n[a - 1]; a-- > 0; )
    n[a] = s, s = t[s];
  return n;
}
function Hs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Hs(t);
}
const df = (e) => e.__isTeleport, we = Symbol.for("v-fgt"), sr = Symbol.for("v-txt"), _t = Symbol.for("v-cmt"), wr = Symbol.for("v-stc"), Xt = [];
let Oe = null;
function ee(e = !1) {
  Xt.push(Oe = e ? null : []);
}
function mf() {
  Xt.pop(), Oe = Xt[Xt.length - 1] || null;
}
let nn = 1;
function ia(e) {
  nn += e;
}
function Vs(e) {
  return e.dynamicChildren = nn > 0 ? Oe || kt : null, mf(), nn > 0 && Oe && Oe.push(e), e;
}
function ue(e, t, n, r, i, a) {
  return Vs(
    te(
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
  return Vs(
    le(
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
function Ft(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zs = ({ key: e }) => e ?? null, Un = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || me(e) || U(e) ? { i: _e, r: e, k: t, f: !!n } : e : null);
function te(e, t = null, n = null, r = 0, i = null, a = e === we ? 0 : 1, s = !1, o = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zs(t),
    ref: t && Un(t),
    scopeId: Es,
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
    ctx: _e
  };
  return o ? (vi(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= ne(n) ? 8 : 16), nn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Oe.push(l), l;
}
const le = pf;
function pf(e, t = null, n = null, r = 0, i = null, a = !1) {
  if ((!e || e === Cl) && (e = _t), Hr(e)) {
    const o = It(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vi(o, n), nn > 0 && !a && Oe && (o.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = o : Oe.push(o)), o.patchFlag |= -2, o;
  }
  if (kf(e) && (e = e.__vccOpts), t) {
    t = hf(t);
    let { class: o, style: l } = t;
    o && !ne(o) && (t.class = Qn(o)), q(l) && (ds(l) && !M(l) && (l = re({}, l)), t.style = ii(l));
  }
  const s = ne(e) ? 1 : Pl(e) ? 128 : df(e) ? 64 : q(e) ? 4 : U(e) ? 2 : 0;
  return te(
    e,
    t,
    n,
    r,
    i,
    s,
    a,
    !0
  );
}
function hf(e) {
  return e ? ds(e) || Rs(e) ? re({}, e) : e : null;
}
function It(e, t, n = !1, r = !1) {
  const { props: i, ref: a, patchFlag: s, children: o, transition: l } = e, c = t ? vf(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && zs(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? M(a) ? a.concat(Un(t)) : [a, Un(t)] : Un(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && It(e.ssContent),
    ssFallback: e.ssFallback && It(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && (u.transition = l.clone(u)), u;
}
function zt(e = " ", t = 0) {
  return le(sr, null, e, t);
}
function Ie(e = "", t = !1) {
  return t ? (ee(), Vt(_t, null, e)) : le(_t, null, e);
}
function Re(e) {
  return e == null || typeof e == "boolean" ? le(_t) : M(e) ? le(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? et(e) : le(sr, null, String(e));
}
function et(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : It(e);
}
function vi(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), vi(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Rs(t) ? t._ctx = _e : i === 3 && _e && (_e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    U(t) ? (t = { default: t, _ctx: _e }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [zt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vf(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const i in r)
      if (i === "class")
        t.class !== r.class && (t.class = Qn([t.class, r.class]));
      else if (i === "style")
        t.style = ii([t.style, r.style]);
      else if (qn(i)) {
        const a = t[i], s = r[i];
        s && a !== s && !(M(a) && a.includes(s)) && (t[i] = a ? [].concat(a, s) : s);
      } else
        i !== "" && (t[i] = r[i]);
  }
  return t;
}
function Ne(e, t, n, r = null) {
  Ce(e, t, 7, [
    n,
    r
  ]);
}
const gf = Ts();
let bf = 0;
function _f(e, t, n) {
  const r = e.type, i = (t ? t.appContext : e.appContext) || gf, a = {
    uid: bf++,
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
    scope: new Fo(
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
    propsOptions: Ds(r, i),
    emitsOptions: ws(r, i),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = wl.bind(null, a), e.ce && e.ce(a), a;
}
let se = null, Bn, Vr;
{
  const e = Xa(), t = (n, r) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(r), (a) => {
      i.length > 1 ? i.forEach((s) => s(a)) : i[0](a);
    };
  };
  Bn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => se = n
  ), Vr = t(
    "__VUE_SSR_SETTERS__",
    (n) => or = n
  );
}
const fn = (e) => {
  const t = se;
  return Bn(e), e.scope.on(), () => {
    e.scope.off(), Bn(t);
  };
}, aa = () => {
  se && se.scope.off(), Bn(null);
};
function $s(e) {
  return e.vnode.shapeFlag & 4;
}
let or = !1;
function yf(e, t = !1) {
  t && Vr(t);
  const { props: n, children: r } = e.vnode, i = $s(e);
  nf(e, n, i, t), sf(e, r);
  const a = i ? xf(e, t) : void 0;
  return t && Vr(!1), a;
}
function xf(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gl);
  const { setup: r } = n;
  if (r) {
    const i = e.setupContext = r.length > 1 ? Ef(e) : null, a = fn(e);
    Ke();
    const s = Ve(
      r,
      e,
      0,
      [
        e.props,
        i
      ]
    );
    if (We(), a(), Ba(s)) {
      if (s.then(aa, aa), t)
        return s.then((o) => {
          sa(e, o, t);
        }).catch((o) => {
          rr(o, e, 0);
        });
      e.asyncDep = s;
    } else
      sa(e, s, t);
  } else
    Bs(e, t);
}
function sa(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) && (e.setupState = hs(t)), Bs(e, n);
}
let oa;
function Bs(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && oa && !r.render) {
      const i = r.template || pi(e).template;
      if (i) {
        const { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: o, compilerOptions: l } = r, c = re(
          re(
            {
              isCustomElement: a,
              delimiters: o
            },
            s
          ),
          l
        );
        r.render = oa(i, c);
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
const wf = {
  get(e, t) {
    return ve(e, "get", ""), e[t];
  }
};
function Ef(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, wf),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function lr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(hs(ol(e.exposed)), {
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
const Sf = /(?:^|[-_])(\w)/g, Af = (e) => e.replace(Sf, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Of(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ks(e, t, n = !1) {
  let r = Of(t);
  if (!r && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (r = i[1]);
  }
  if (!r && e && e.parent) {
    const i = (a) => {
      for (const s in a)
        if (a[s] === t)
          return s;
    };
    r = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return r ? Af(r) : n ? "App" : "Anonymous";
}
function kf(e) {
  return U(e) && "__vccOpts" in e;
}
const dt = (e, t) => ll(e, t, or);
function Cf(e, t, n) {
  const r = arguments.length;
  return r === 2 ? q(t) && !M(t) ? Hr(t) ? le(e, null, [t]) : le(e, t) : le(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Hr(n) && (n = [n]), le(e, t, n));
}
const Pf = "3.4.26", Tf = "http://www.w3.org/2000/svg", If = "http://www.w3.org/1998/Math/MathML", tt = typeof document < "u" ? document : null, la = tt && /* @__PURE__ */ tt.createElement("template"), Nf = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const i = t === "svg" ? tt.createElementNS(Tf, e) : t === "mathml" ? tt.createElementNS(If, e) : tt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
  },
  createText: (e) => tt.createTextNode(e),
  createComment: (e) => tt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => tt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, i, a) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === a || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)); )
        ;
    else {
      la.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const o = la.content;
      if (r === "svg" || r === "mathml") {
        const l = o.firstChild;
        for (; l.firstChild; )
          o.appendChild(l.firstChild);
        o.removeChild(l);
      }
      t.insertBefore(o, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Rf = Symbol("_vtc");
function Mf(e, t, n) {
  const r = e[Rf];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Kn = Symbol("_vod"), Ws = Symbol("_vsh"), Df = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Kn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : jt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), jt(e, !0), r.enter(e)) : r.leave(e, () => {
      jt(e, !1);
    }) : jt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    jt(e, t);
  }
};
function jt(e, t) {
  e.style.display = t ? e[Kn] : "none", e[Ws] = !t;
}
const Lf = Symbol(""), Uf = /(^|;)\s*display\s*:/;
function Ff(e, t, n) {
  const r = e.style, i = ne(n);
  let a = !1;
  if (n && !i) {
    if (t)
      if (ne(t))
        for (const s of t.split(";")) {
          const o = s.slice(0, s.indexOf(":")).trim();
          n[o] == null && Fn(r, o, "");
        }
      else
        for (const s in t)
          n[s] == null && Fn(r, s, "");
    for (const s in n)
      s === "display" && (a = !0), Fn(r, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = r[Lf];
      s && (n += ";" + s), r.cssText = n, a = Uf.test(n);
    }
  } else
    t && e.removeAttribute("style");
  Kn in e && (e[Kn] = a ? r.display : "", e[Ws] && (r.display = "none"));
}
const fa = /\s*!important$/;
function Fn(e, t, n) {
  if (M(n))
    n.forEach((r) => Fn(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = jf(e, t);
    fa.test(n) ? e.setProperty(
      Ae(r),
      n.replace(fa, ""),
      "important"
    ) : e[r] = n;
  }
}
const ca = ["Webkit", "Moz", "ms"], Er = {};
function jf(e, t) {
  const n = Er[t];
  if (n)
    return n;
  let r = je(t);
  if (r !== "filter" && r in e)
    return Er[t] = r;
  r = Ga(r);
  for (let i = 0; i < ca.length; i++) {
    const a = ca[i] + r;
    if (a in e)
      return Er[t] = a;
  }
  return t;
}
const ua = "http://www.w3.org/1999/xlink";
function Hf(e, t, n, r, i) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ua, t.slice(6, t.length)) : e.setAttributeNS(ua, t, n);
  else {
    const a = Uo(t);
    n == null || a && !qa(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function Vf(e, t, n, r, i, a, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, i, a), e[t] = n ?? "";
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const c = o === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n ?? "";
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = qa(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(t);
}
function zf(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function $f(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const da = Symbol("_vei");
function Bf(e, t, n, r, i = null) {
  const a = e[da] || (e[da] = {}), s = a[t];
  if (r && s)
    s.value = r;
  else {
    const [o, l] = Kf(t);
    if (r) {
      const c = a[t] = Yf(
        r,
        i
      );
      zf(e, o, c, l);
    } else
      s && ($f(e, o, s, l), a[t] = void 0);
  }
}
const ma = /(?:Once|Passive|Capture)$/;
function Kf(e) {
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
const Wf = /* @__PURE__ */ Promise.resolve(), Gf = () => Sr || (Wf.then(() => Sr = 0), Sr = Date.now());
function Yf(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ce(
      Xf(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Gf(), n;
}
function Xf(e, t) {
  if (M(t)) {
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
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qf = (e, t, n, r, i, a, s, o, l) => {
  const c = i === "svg";
  t === "class" ? Mf(e, r, c) : t === "style" ? Ff(e, n, r) : qn(t) ? ti(t) || Bf(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Jf(e, t, r, c)) ? Vf(
    e,
    t,
    r,
    a,
    s,
    o,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Hf(e, t, r, c));
};
function Jf(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pa(t) && U(n));
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
function Zf(e, t) {
  const n = /* @__PURE__ */ mi(e);
  class r extends gi {
    constructor(a) {
      super(n, a, t);
    }
  }
  return r.def = n, r;
}
const Qf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class gi extends Qf {
  constructor(t, n = {}, r) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, this._ob && (this._ob.disconnect(), this._ob = null), bs(() => {
      this._connected || (va(null, this.shadowRoot), this._instance = null);
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
      const { props: a, styles: s } = r;
      let o;
      if (a && !M(a))
        for (const l in a) {
          const c = a[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = ji(this._props[l])), (o || (o = /* @__PURE__ */ Object.create(null)))[je(l)] = !0);
        }
      this._numberProps = o, i && this._resolveProps(r), this._applyStyles(s), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((r) => t(r, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, r = M(n) ? n : Object.keys(n || {});
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
    va(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = le(this._def, re({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const r = (a, s) => {
        this.dispatchEvent(
          new CustomEvent(a, {
            detail: s
          })
        );
      };
      n.emit = (a, ...s) => {
        r(a, s), Ae(a) !== a && r(Ae(a), s);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof gi) {
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
const ec = /* @__PURE__ */ re({ patchProp: qf }, Nf);
let ha;
function tc() {
  return ha || (ha = lf(ec));
}
const va = (...e) => {
  tc().render(...e);
};
var nc = {
  prefix: "fas",
  iconName: "microphone",
  icon: [384, 512, [], "f130", "M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"]
}, rc = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, ic = {
  prefix: "fas",
  iconName: "upload",
  icon: [512, 512, [], "f093", "M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, ac = {
  prefix: "fas",
  iconName: "video",
  icon: [576, 512, ["video-camera"], "f03d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]
}, sc = { NVM_INC: "/Users/cm/.nvm/versions/node/v19.7.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", TERM_PROGRAM_VERSION: "1.88.1", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "9.8.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v19.7.0/bin", npm_config_user_agent: "npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
function ga(e, t) {
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
    t % 2 ? ga(Object(n), !0).forEach(function(r) {
      ie(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ga(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Wn(e) {
  "@babel/helpers - typeof";
  return Wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wn(e);
}
function oc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lc(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function fc(e, t, n) {
  return t && lc(e.prototype, t), Object.defineProperty(e, "prototype", {
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
  return uc(e) || mc(e, t) || Gs(e, t) || hc();
}
function cn(e) {
  return cc(e) || dc(e) || Gs(e) || pc();
}
function cc(e) {
  if (Array.isArray(e))
    return zr(e);
}
function uc(e) {
  if (Array.isArray(e))
    return e;
}
function dc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function mc(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], i = !0, a = !1, s, o;
    try {
      for (n = n.call(e); !(i = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); i = !0)
        ;
    } catch (l) {
      a = !0, o = l;
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (a)
          throw o;
      }
    }
    return r;
  }
}
function Gs(e, t) {
  if (e) {
    if (typeof e == "string")
      return zr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return zr(e, t);
  }
}
function zr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function pc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ba = function() {
}, _i = {}, Ys = {}, Xs = null, qs = {
  mark: ba,
  measure: ba
};
try {
  typeof window < "u" && (_i = window), typeof document < "u" && (Ys = document), typeof MutationObserver < "u" && (Xs = MutationObserver), typeof performance < "u" && (qs = performance);
} catch {
}
var vc = _i.navigator || {}, _a = vc.userAgent, ya = _a === void 0 ? "" : _a, it = _i, Y = Ys, xa = Xs, Sn = qs;
it.document;
var Ye = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", Js = ~ya.indexOf("MSIE") || ~ya.indexOf("Trident/"), An, On, kn, Cn, Pn, ze = "___FONT_AWESOME___", $r = 16, Zs = "fa", Qs = "svg-inline--fa", yt = "data-fa-i2svg", Br = "data-fa-pseudo-element", gc = "data-fa-pseudo-element-pending", yi = "data-prefix", xi = "data-icon", wa = "fontawesome-i2svg", bc = "async", _c = ["HTML", "HEAD", "STYLE", "SCRIPT"], eo = function() {
  try {
    return sc.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), G = "classic", Q = "sharp", wi = [G, Q];
function un(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[G];
    }
  });
}
var rn = un((An = {}, ie(An, G, {
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
}), ie(An, Q, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), An)), an = un((On = {}, ie(On, G, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ie(On, Q, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), On)), sn = un((kn = {}, ie(kn, G, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ie(kn, Q, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), kn)), yc = un((Cn = {}, ie(Cn, G, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ie(Cn, Q, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Cn)), xc = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, to = "fa-layers-text", wc = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, Ec = un((Pn = {}, ie(Pn, G, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ie(Pn, Q, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Pn)), no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Sc = no.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ac = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ht = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, on = /* @__PURE__ */ new Set();
Object.keys(an[G]).map(on.add.bind(on));
Object.keys(an[Q]).map(on.add.bind(on));
var Oc = [].concat(wi, cn(on), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ht.GROUP, ht.SWAP_OPACITY, ht.PRIMARY, ht.SECONDARY]).concat(no.map(function(e) {
  return "".concat(e, "x");
})).concat(Sc.map(function(e) {
  return "w-".concat(e);
})), qt = it.FontAwesomeConfig || {};
function kc(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Cc(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Y && typeof Y.querySelector == "function") {
  var Pc = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Pc.forEach(function(e) {
    var t = bi(e, 2), n = t[0], r = t[1], i = Cc(kc(n));
    i != null && (qt[r] = i);
  });
}
var ro = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Zs,
  replacementClass: Qs,
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
var Nt = O(O({}, ro), qt);
Nt.autoReplaceSvg || (Nt.observeMutations = !1);
var C = {};
Object.keys(ro).forEach(function(e) {
  Object.defineProperty(C, e, {
    enumerable: !0,
    set: function(n) {
      Nt[e] = n, Jt.forEach(function(r) {
        return r(C);
      });
    },
    get: function() {
      return Nt[e];
    }
  });
});
Object.defineProperty(C, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    Nt.cssPrefix = t, Jt.forEach(function(n) {
      return n(C);
    });
  },
  get: function() {
    return Nt.cssPrefix;
  }
});
it.FontAwesomeConfig = C;
var Jt = [];
function Tc(e) {
  return Jt.push(e), function() {
    Jt.splice(Jt.indexOf(e), 1);
  };
}
var Je = $r, De = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Ic(e) {
  if (!(!e || !Ye)) {
    var t = Y.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Y.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var a = n[i], s = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (r = a);
    }
    return Y.head.insertBefore(t, r), e;
  }
}
var Nc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ln() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Nc[Math.random() * 62 | 0];
  return t;
}
function Rt(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Ei(e) {
  return e.classList ? Rt(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function io(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Rc(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(io(e[n]), '" ');
  }, "").trim();
}
function fr(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Si(e) {
  return e.size !== De.size || e.x !== De.x || e.y !== De.y || e.rotate !== De.rotate || e.flipX || e.flipY;
}
function Mc(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), o = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(s, " ").concat(o)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: c
  };
}
function Dc(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? $r : n, i = e.height, a = i === void 0 ? $r : i, s = e.startCentered, o = s === void 0 ? !1 : s, l = "";
  return o && Js ? l += "translate(".concat(t.x / Je - r / 2, "em, ").concat(t.y / Je - a / 2, "em) ") : o ? l += "translate(calc(-50% + ".concat(t.x / Je, "em), calc(-50% + ").concat(t.y / Je, "em)) ") : l += "translate(".concat(t.x / Je, "em, ").concat(t.y / Je, "em) "), l += "scale(".concat(t.size / Je * (t.flipX ? -1 : 1), ", ").concat(t.size / Je * (t.flipY ? -1 : 1), ") "), l += "rotate(".concat(t.rotate, "deg) "), l;
}
var Lc = `:root, :host {
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
function ao() {
  var e = Zs, t = Qs, n = C.cssPrefix, r = C.replacementClass, i = Lc;
  if (n !== e || r !== t) {
    var a = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), o = new RegExp("\\.".concat(t), "g");
    i = i.replace(a, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(o, ".".concat(r));
  }
  return i;
}
var Ea = !1;
function Ar() {
  C.autoAddCss && !Ea && (Ic(ao()), Ea = !0);
}
var Uc = {
  mixout: function() {
    return {
      dom: {
        css: ao,
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
}, $e = it || {};
$e[ze] || ($e[ze] = {});
$e[ze].styles || ($e[ze].styles = {});
$e[ze].hooks || ($e[ze].hooks = {});
$e[ze].shims || ($e[ze].shims = []);
var ke = $e[ze], so = [], Fc = function e() {
  Y.removeEventListener("DOMContentLoaded", e), Gn = 1, so.map(function(t) {
    return t();
  });
}, Gn = !1;
Ye && (Gn = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Gn || Y.addEventListener("DOMContentLoaded", Fc));
function jc(e) {
  Ye && (Gn ? setTimeout(e, 0) : so.push(e));
}
function dn(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, i = e.children, a = i === void 0 ? [] : i;
  return typeof e == "string" ? io(e) : "<".concat(t, " ").concat(Rc(r), ">").concat(a.map(dn).join(""), "</").concat(t, ">");
}
function Sa(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Or = function(t, n, r, i) {
  var a = Object.keys(t), s = a.length, o = n, l, c, u;
  for (r === void 0 ? (l = 1, u = t[a[0]]) : (l = 0, u = r); l < s; l++)
    c = a[l], u = o(u, t[c], c, t);
  return u;
};
function Hc(e) {
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
function Kr(e) {
  var t = Hc(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Vc(e, t) {
  var n = e.length, r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function Aa(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], i = !!r.icon;
    return i ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Wr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, i = r === void 0 ? !1 : r, a = Aa(t);
  typeof ke.hooks.addPack == "function" && !i ? ke.hooks.addPack(e, Aa(t)) : ke.styles[e] = O(O({}, ke.styles[e] || {}), a), e === "fas" && Wr("fa", t);
}
var Tn, In, Nn, At = ke.styles, zc = ke.shims, $c = (Tn = {}, ie(Tn, G, Object.values(sn[G])), ie(Tn, Q, Object.values(sn[Q])), Tn), Ai = null, oo = {}, lo = {}, fo = {}, co = {}, uo = {}, Bc = (In = {}, ie(In, G, Object.keys(rn[G])), ie(In, Q, Object.keys(rn[Q])), In);
function Kc(e) {
  return ~Oc.indexOf(e);
}
function Wc(e, t) {
  var n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Kc(i) ? i : null;
}
var mo = function() {
  var t = function(a) {
    return Or(At, function(s, o, l) {
      return s[l] = Or(o, a, {}), s;
    }, {});
  };
  oo = t(function(i, a, s) {
    if (a[3] && (i[a[3]] = s), a[2]) {
      var o = a[2].filter(function(l) {
        return typeof l == "number";
      });
      o.forEach(function(l) {
        i[l.toString(16)] = s;
      });
    }
    return i;
  }), lo = t(function(i, a, s) {
    if (i[s] = s, a[2]) {
      var o = a[2].filter(function(l) {
        return typeof l == "string";
      });
      o.forEach(function(l) {
        i[l] = s;
      });
    }
    return i;
  }), uo = t(function(i, a, s) {
    var o = a[2];
    return i[s] = s, o.forEach(function(l) {
      i[l] = s;
    }), i;
  });
  var n = "far" in At || C.autoFetchSvg, r = Or(zc, function(i, a) {
    var s = a[0], o = a[1], l = a[2];
    return o === "far" && !n && (o = "fas"), typeof s == "string" && (i.names[s] = {
      prefix: o,
      iconName: l
    }), typeof s == "number" && (i.unicodes[s.toString(16)] = {
      prefix: o,
      iconName: l
    }), i;
  }, {
    names: {},
    unicodes: {}
  });
  fo = r.names, co = r.unicodes, Ai = cr(C.styleDefault, {
    family: C.familyDefault
  });
};
Tc(function(e) {
  Ai = cr(e.styleDefault, {
    family: C.familyDefault
  });
});
mo();
function Oi(e, t) {
  return (oo[e] || {})[t];
}
function Gc(e, t) {
  return (lo[e] || {})[t];
}
function vt(e, t) {
  return (uo[e] || {})[t];
}
function po(e) {
  return fo[e] || {
    prefix: null,
    iconName: null
  };
}
function Yc(e) {
  var t = co[e], n = Oi("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function at() {
  return Ai;
}
var ki = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function cr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? G : n, i = rn[r][e], a = an[r][e] || an[r][i], s = e in ke.styles ? e : null;
  return a || s || null;
}
var Oa = (Nn = {}, ie(Nn, G, Object.keys(sn[G])), ie(Nn, Q, Object.keys(sn[Q])), Nn);
function ur(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, i = r === void 0 ? !1 : r, a = (t = {}, ie(t, G, "".concat(C.cssPrefix, "-").concat(G)), ie(t, Q, "".concat(C.cssPrefix, "-").concat(Q)), t), s = null, o = G;
  (e.includes(a[G]) || e.some(function(c) {
    return Oa[G].includes(c);
  })) && (o = G), (e.includes(a[Q]) || e.some(function(c) {
    return Oa[Q].includes(c);
  })) && (o = Q);
  var l = e.reduce(function(c, u) {
    var m = Wc(C.cssPrefix, u);
    if (At[u] ? (u = $c[o].includes(u) ? yc[o][u] : u, s = u, c.prefix = u) : Bc[o].indexOf(u) > -1 ? (s = u, c.prefix = cr(u, {
      family: o
    })) : m ? c.iconName = m : u !== C.replacementClass && u !== a[G] && u !== a[Q] && c.rest.push(u), !i && c.prefix && c.iconName) {
      var h = s === "fa" ? po(c.iconName) : {}, x = vt(c.prefix, c.iconName);
      h.prefix && (s = null), c.iconName = h.iconName || x || c.iconName, c.prefix = h.prefix || c.prefix, c.prefix === "far" && !At.far && At.fas && !C.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, ki());
  return (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"), !l.prefix && o === Q && (At.fass || C.autoFetchSvg) && (l.prefix = "fass", l.iconName = vt(l.prefix, l.iconName) || l.iconName), (l.prefix === "fa" || s === "fa") && (l.prefix = at() || "fas"), l;
}
var Xc = /* @__PURE__ */ function() {
  function e() {
    oc(this, e), this.definitions = {};
  }
  return fc(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      var s = i.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(o) {
        n.definitions[o] = O(O({}, n.definitions[o] || {}), s[o]), Wr(o, s[o]);
        var l = sn[G][o];
        l && Wr(l, s[o]), mo();
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
        var s = i[a], o = s.prefix, l = s.iconName, c = s.icon, u = c[2];
        n[o] || (n[o] = {}), u.length > 0 && u.forEach(function(m) {
          typeof m == "string" && (n[o][m] = c);
        }), n[o][l] = c;
      }), n;
    }
  }]), e;
}(), ka = [], Ot = {}, Tt = {}, qc = Object.keys(Tt);
function Jc(e, t) {
  var n = t.mixoutsTo;
  return ka = e, Ot = {}, Object.keys(Tt).forEach(function(r) {
    qc.indexOf(r) === -1 && delete Tt[r];
  }), ka.forEach(function(r) {
    var i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach(function(s) {
      typeof i[s] == "function" && (n[s] = i[s]), Wn(i[s]) === "object" && Object.keys(i[s]).forEach(function(o) {
        n[s] || (n[s] = {}), n[s][o] = i[s][o];
      });
    }), r.hooks) {
      var a = r.hooks();
      Object.keys(a).forEach(function(s) {
        Ot[s] || (Ot[s] = []), Ot[s].push(a[s]);
      });
    }
    r.provides && r.provides(Tt);
  }), n;
}
function Gr(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var a = Ot[e] || [];
  return a.forEach(function(s) {
    t = s.apply(null, [t].concat(r));
  }), t;
}
function xt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var i = Ot[e] || [];
  i.forEach(function(a) {
    a.apply(null, n);
  });
}
function Be() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Tt[e] ? Tt[e].apply(null, t) : void 0;
}
function Yr(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || at();
  if (t)
    return t = vt(n, t) || t, Sa(ho.definitions, n, t) || Sa(ke.styles, n, t);
}
var ho = new Xc(), Zc = function() {
  C.autoReplaceSvg = !1, C.observeMutations = !1, xt("noAuto");
}, Qc = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Ye ? (xt("beforeI2svg", t), Be("pseudoElements2svg", t), Be("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    C.autoReplaceSvg === !1 && (C.autoReplaceSvg = !0), C.observeMutations = !0, jc(function() {
      tu({
        autoReplaceSvgRoot: n
      }), xt("watch", t);
    });
  }
}, eu = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Wn(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: vt(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = cr(t[0]);
      return {
        prefix: r,
        iconName: vt(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(C.cssPrefix, "-")) > -1 || t.match(xc))) {
      var i = ur(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: i.prefix || at(),
        iconName: vt(i.prefix, i.iconName) || i.iconName
      };
    }
    if (typeof t == "string") {
      var a = at();
      return {
        prefix: a,
        iconName: vt(a, t) || t
      };
    }
  }
}, ye = {
  noAuto: Zc,
  config: C,
  dom: Qc,
  parse: eu,
  library: ho,
  findIconDefinition: Yr,
  toHtml: dn
}, tu = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? Y : n;
  (Object.keys(ke.styles).length > 0 || C.autoFetchSvg) && Ye && C.autoReplaceSvg && ye.dom.i2svg({
    node: r
  });
};
function dr(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return dn(r);
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
function nu(e) {
  var t = e.children, n = e.main, r = e.mask, i = e.attributes, a = e.styles, s = e.transform;
  if (Si(s) && n.found && !r.found) {
    var o = n.width, l = n.height, c = {
      x: o / l / 2,
      y: 0.5
    };
    i.style = fr(O(O({}, a), {}, {
      "transform-origin": "".concat(c.x + s.x / 16, "em ").concat(c.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function ru(e) {
  var t = e.prefix, n = e.iconName, r = e.children, i = e.attributes, a = e.symbol, s = a === !0 ? "".concat(t, "-").concat(C.cssPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: O(O({}, i), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function Ci(e) {
  var t = e.icons, n = t.main, r = t.mask, i = e.prefix, a = e.iconName, s = e.transform, o = e.symbol, l = e.title, c = e.maskId, u = e.titleId, m = e.extra, h = e.watchable, x = h === void 0 ? !1 : h, P = r.found ? r : n, T = P.width, $ = P.height, E = i === "fak", A = [C.replacementClass, a ? "".concat(C.cssPrefix, "-").concat(a) : ""].filter(function(xe) {
    return m.classes.indexOf(xe) === -1;
  }).filter(function(xe) {
    return xe !== "" || !!xe;
  }).concat(m.classes).join(" "), I = {
    children: [],
    attributes: O(O({}, m.attributes), {}, {
      "data-prefix": i,
      "data-icon": a,
      class: A,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(T, " ").concat($)
    })
  }, F = E && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(T / $ * 16 * 0.0625, "em")
  } : {};
  x && (I.attributes[yt] = ""), l && (I.children.push({
    tag: "title",
    attributes: {
      id: I.attributes["aria-labelledby"] || "title-".concat(u || ln())
    },
    children: [l]
  }), delete I.attributes.title);
  var V = O(O({}, I), {}, {
    prefix: i,
    iconName: a,
    main: n,
    mask: r,
    maskId: c,
    transform: s,
    symbol: o,
    styles: O(O({}, F), m.styles)
  }), L = r.found && n.found ? Be("generateAbstractMask", V) || {
    children: [],
    attributes: {}
  } : Be("generateAbstractIcon", V) || {
    children: [],
    attributes: {}
  }, J = L.children, fe = L.attributes;
  return V.children = J, V.attributes = fe, o ? ru(V) : nu(V);
}
function Ca(e) {
  var t = e.content, n = e.width, r = e.height, i = e.transform, a = e.title, s = e.extra, o = e.watchable, l = o === void 0 ? !1 : o, c = O(O(O({}, s.attributes), a ? {
    title: a
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  l && (c[yt] = "");
  var u = O({}, s.styles);
  Si(i) && (u.transform = Dc({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), u["-webkit-transform"] = u.transform);
  var m = fr(u);
  m.length > 0 && (c.style = m);
  var h = [];
  return h.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), a && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), h;
}
function iu(e) {
  var t = e.content, n = e.title, r = e.extra, i = O(O(O({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = fr(r.styles);
  a.length > 0 && (i.style = a);
  var s = [];
  return s.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
var kr = ke.styles;
function Xr(e) {
  var t = e[0], n = e[1], r = e.slice(4), i = bi(r, 1), a = i[0], s = null;
  return Array.isArray(a) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(C.cssPrefix, "-").concat(ht.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(C.cssPrefix, "-").concat(ht.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(C.cssPrefix, "-").concat(ht.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
var au = {
  found: !1,
  width: 512,
  height: 512
};
function su(e, t) {
  !eo && !C.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function qr(e, t) {
  var n = t;
  return t === "fa" && C.styleDefault !== null && (t = at()), new Promise(function(r, i) {
    if (Be("missingIconAbstract"), n === "fa") {
      var a = po(e) || {};
      e = a.iconName || e, t = a.prefix || t;
    }
    if (e && t && kr[t] && kr[t][e]) {
      var s = kr[t][e];
      return r(Xr(s));
    }
    su(e, t), r(O(O({}, au), {}, {
      icon: C.showMissingIcons && e ? Be("missingIconAbstract") || {} : {}
    }));
  });
}
var Pa = function() {
}, Jr = C.measurePerformance && Sn && Sn.mark && Sn.measure ? Sn : {
  mark: Pa,
  measure: Pa
}, $t = 'FA "6.5.2"', ou = function(t) {
  return Jr.mark("".concat($t, " ").concat(t, " begins")), function() {
    return vo(t);
  };
}, vo = function(t) {
  Jr.mark("".concat($t, " ").concat(t, " ends")), Jr.measure("".concat($t, " ").concat(t), "".concat($t, " ").concat(t, " begins"), "".concat($t, " ").concat(t, " ends"));
}, Pi = {
  begin: ou,
  end: vo
}, jn = function() {
};
function Ta(e) {
  var t = e.getAttribute ? e.getAttribute(yt) : null;
  return typeof t == "string";
}
function lu(e) {
  var t = e.getAttribute ? e.getAttribute(yi) : null, n = e.getAttribute ? e.getAttribute(xi) : null;
  return t && n;
}
function fu(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(C.replacementClass);
}
function cu() {
  if (C.autoReplaceSvg === !0)
    return Hn.replace;
  var e = Hn[C.autoReplaceSvg];
  return e || Hn.replace;
}
function uu(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function du(e) {
  return Y.createElement(e);
}
function go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? uu : du : n;
  if (typeof e == "string")
    return Y.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    i.setAttribute(s, e.attributes[s]);
  });
  var a = e.children || [];
  return a.forEach(function(s) {
    i.appendChild(go(s, {
      ceFn: r
    }));
  }), i;
}
function mu(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Hn = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(i) {
        n.parentNode.insertBefore(go(i), n);
      }), n.getAttribute(yt) === null && C.keepOriginalSource) {
        var r = Y.createComment(mu(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Ei(n).indexOf(C.replacementClass))
      return Hn.replace(t);
    var i = new RegExp("".concat(C.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var a = r[0].attributes.class.split(" ").reduce(function(o, l) {
        return l === C.replacementClass || l.match(i) ? o.toSvg.push(l) : o.toNode.push(l), o;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "));
    }
    var s = r.map(function(o) {
      return dn(o);
    }).join(`
`);
    n.setAttribute(yt, ""), n.innerHTML = s;
  }
};
function Ia(e) {
  e();
}
function bo(e, t) {
  var n = typeof t == "function" ? t : jn;
  if (e.length === 0)
    n();
  else {
    var r = Ia;
    C.mutateApproach === bc && (r = it.requestAnimationFrame || Ia), r(function() {
      var i = cu(), a = Pi.begin("mutate");
      e.map(i), a(), n();
    });
  }
}
var Ti = !1;
function _o() {
  Ti = !0;
}
function Zr() {
  Ti = !1;
}
var Yn = null;
function Na(e) {
  if (xa && C.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? jn : t, r = e.nodeCallback, i = r === void 0 ? jn : r, a = e.pseudoElementsCallback, s = a === void 0 ? jn : a, o = e.observeMutationsRoot, l = o === void 0 ? Y : o;
    Yn = new xa(function(c) {
      if (!Ti) {
        var u = at();
        Rt(c).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !Ta(m.addedNodes[0]) && (C.searchPseudoElements && s(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && C.searchPseudoElements && s(m.target.parentNode), m.type === "attributes" && Ta(m.target) && ~Ac.indexOf(m.attributeName))
            if (m.attributeName === "class" && lu(m.target)) {
              var h = ur(Ei(m.target)), x = h.prefix, P = h.iconName;
              m.target.setAttribute(yi, x || u), P && m.target.setAttribute(xi, P);
            } else
              fu(m.target) && i(m.target);
        });
      }
    }), Ye && Yn.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function pu() {
  Yn && Yn.disconnect();
}
function hu(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, i) {
    var a = i.split(":"), s = a[0], o = a.slice(1);
    return s && o.length > 0 && (r[s] = o.join(":").trim()), r;
  }, {})), n;
}
function vu(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", i = ur(Ei(e));
  return i.prefix || (i.prefix = at()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Gc(i.prefix, e.innerText) || Oi(i.prefix, Kr(e.innerText))), !i.iconName && C.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function gu(e) {
  var t = Rt(e.attributes).reduce(function(i, a) {
    return i.name !== "class" && i.name !== "style" && (i[a.name] = a.value), i;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return C.autoA11y && (n ? t["aria-labelledby"] = "".concat(C.replacementClass, "-title-").concat(r || ln()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function bu() {
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
  }, n = vu(e), r = n.iconName, i = n.prefix, a = n.rest, s = gu(e), o = Gr("parseNodeAttributes", {}, e), l = t.styleParser ? hu(e) : [];
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
      attributes: s
    }
  }, o);
}
var _u = ke.styles;
function yo(e) {
  var t = C.autoReplaceSvg === "nest" ? Ra(e, {
    styleParser: !1
  }) : Ra(e);
  return ~t.extra.classes.indexOf(to) ? Be("generateLayersText", e, t) : Be("generateSvgReplacementMutation", e, t);
}
var st = /* @__PURE__ */ new Set();
wi.map(function(e) {
  st.add("fa-".concat(e));
});
Object.keys(rn[G]).map(st.add.bind(st));
Object.keys(rn[Q]).map(st.add.bind(st));
st = cn(st);
function Ma(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Ye)
    return Promise.resolve();
  var n = Y.documentElement.classList, r = function(m) {
    return n.add("".concat(wa, "-").concat(m));
  }, i = function(m) {
    return n.remove("".concat(wa, "-").concat(m));
  }, a = C.autoFetchSvg ? st : wi.map(function(u) {
    return "fa-".concat(u);
  }).concat(Object.keys(_u));
  a.includes("fa") || a.push("fa");
  var s = [".".concat(to, ":not([").concat(yt, "])")].concat(a.map(function(u) {
    return ".".concat(u, ":not([").concat(yt, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var o = [];
  try {
    o = Rt(e.querySelectorAll(s));
  } catch {
  }
  if (o.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  var l = Pi.begin("onTree"), c = o.reduce(function(u, m) {
    try {
      var h = yo(m);
      h && u.push(h);
    } catch (x) {
      eo || x.name === "MissingIcon" && console.error(x);
    }
    return u;
  }, []);
  return new Promise(function(u, m) {
    Promise.all(c).then(function(h) {
      bo(h, function() {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(h) {
      l(), m(h);
    });
  });
}
function yu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  yo(e).then(function(n) {
    n && bo([n], t);
  });
}
function xu(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Yr(t || {}), i = n.mask;
    return i && (i = (i || {}).icon ? i : Yr(i || {})), e(r, O(O({}, n), {}, {
      mask: i
    }));
  };
}
var wu = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, i = r === void 0 ? De : r, a = n.symbol, s = a === void 0 ? !1 : a, o = n.mask, l = o === void 0 ? null : o, c = n.maskId, u = c === void 0 ? null : c, m = n.title, h = m === void 0 ? null : m, x = n.titleId, P = x === void 0 ? null : x, T = n.classes, $ = T === void 0 ? [] : T, E = n.attributes, A = E === void 0 ? {} : E, I = n.styles, F = I === void 0 ? {} : I;
  if (t) {
    var V = t.prefix, L = t.iconName, J = t.icon;
    return dr(O({
      type: "icon"
    }, t), function() {
      return xt("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), C.autoA11y && (h ? A["aria-labelledby"] = "".concat(C.replacementClass, "-title-").concat(P || ln()) : (A["aria-hidden"] = "true", A.focusable = "false")), Ci({
        icons: {
          main: Xr(J),
          mask: l ? Xr(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: V,
        iconName: L,
        transform: O(O({}, De), i),
        symbol: s,
        title: h,
        maskId: u,
        titleId: P,
        extra: {
          attributes: A,
          styles: F,
          classes: $
        }
      });
    });
  }
}, Eu = {
  mixout: function() {
    return {
      icon: xu(wu)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = Ma, n.nodeCallback = yu, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, i = r === void 0 ? Y : r, a = n.callback, s = a === void 0 ? function() {
      } : a;
      return Ma(i, s);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var i = r.iconName, a = r.title, s = r.titleId, o = r.prefix, l = r.transform, c = r.symbol, u = r.mask, m = r.maskId, h = r.extra;
      return new Promise(function(x, P) {
        Promise.all([qr(i, o), u.iconName ? qr(u.iconName, u.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(T) {
          var $ = bi(T, 2), E = $[0], A = $[1];
          x([n, Ci({
            icons: {
              main: E,
              mask: A
            },
            prefix: o,
            iconName: i,
            transform: l,
            symbol: c,
            maskId: m,
            title: a,
            titleId: s,
            extra: h,
            watchable: !0
          })]);
        }).catch(P);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, i = n.attributes, a = n.main, s = n.transform, o = n.styles, l = fr(o);
      l.length > 0 && (i.style = l);
      var c;
      return Si(s) && (c = Be("generateAbstractTransformGrouping", {
        main: a,
        transform: s,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(c || a.icon), {
        children: r,
        attributes: i
      };
    };
  }
}, Su = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.classes, a = i === void 0 ? [] : i;
        return dr({
          type: "layer"
        }, function() {
          xt("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var s = [];
          return n(function(o) {
            Array.isArray(o) ? o.map(function(l) {
              s = s.concat(l.abstract);
            }) : s = s.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(C.cssPrefix, "-layers")].concat(cn(a)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, Au = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.title, a = i === void 0 ? null : i, s = r.classes, o = s === void 0 ? [] : s, l = r.attributes, c = l === void 0 ? {} : l, u = r.styles, m = u === void 0 ? {} : u;
        return dr({
          type: "counter",
          content: n
        }, function() {
          return xt("beforeDOMElementCreation", {
            content: n,
            params: r
          }), iu({
            content: n.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: m,
              classes: ["".concat(C.cssPrefix, "-layers-counter")].concat(cn(o))
            }
          });
        });
      }
    };
  }
}, Ou = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.transform, a = i === void 0 ? De : i, s = r.title, o = s === void 0 ? null : s, l = r.classes, c = l === void 0 ? [] : l, u = r.attributes, m = u === void 0 ? {} : u, h = r.styles, x = h === void 0 ? {} : h;
        return dr({
          type: "text",
          content: n
        }, function() {
          return xt("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Ca({
            content: n,
            transform: O(O({}, De), a),
            title: o,
            extra: {
              attributes: m,
              styles: x,
              classes: ["".concat(C.cssPrefix, "-layers-text")].concat(cn(c))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var i = r.title, a = r.transform, s = r.extra, o = null, l = null;
      if (Js) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), u = n.getBoundingClientRect();
        o = u.width / c, l = u.height / c;
      }
      return C.autoA11y && !i && (s.attributes["aria-hidden"] = "true"), Promise.resolve([n, Ca({
        content: n.innerHTML,
        width: o,
        height: l,
        transform: a,
        title: i,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, ku = new RegExp('"', "ug"), Da = [1105920, 1112319];
function Cu(e) {
  var t = e.replace(ku, ""), n = Vc(t, 0), r = n >= Da[0] && n <= Da[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Kr(i ? t[0] : t),
    isSecondary: r || i
  };
}
function La(e, t) {
  var n = "".concat(gc).concat(t.replace(":", "-"));
  return new Promise(function(r, i) {
    if (e.getAttribute(n) !== null)
      return r();
    var a = Rt(e.children), s = a.filter(function(J) {
      return J.getAttribute(Br) === t;
    })[0], o = it.getComputedStyle(e, t), l = o.getPropertyValue("font-family").match(wc), c = o.getPropertyValue("font-weight"), u = o.getPropertyValue("content");
    if (s && !l)
      return e.removeChild(s), r();
    if (l && u !== "none" && u !== "") {
      var m = o.getPropertyValue("content"), h = ~["Sharp"].indexOf(l[2]) ? Q : G, x = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? an[h][l[2].toLowerCase()] : Ec[h][c], P = Cu(m), T = P.value, $ = P.isSecondary, E = l[0].startsWith("FontAwesome"), A = Oi(x, T), I = A;
      if (E) {
        var F = Yc(T);
        F.iconName && F.prefix && (A = F.iconName, x = F.prefix);
      }
      if (A && !$ && (!s || s.getAttribute(yi) !== x || s.getAttribute(xi) !== I)) {
        e.setAttribute(n, I), s && e.removeChild(s);
        var V = bu(), L = V.extra;
        L.attributes[Br] = t, qr(A, x).then(function(J) {
          var fe = Ci(O(O({}, V), {}, {
            icons: {
              main: J,
              mask: ki()
            },
            prefix: x,
            iconName: I,
            extra: L,
            watchable: !0
          })), xe = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(xe, e.firstChild) : e.appendChild(xe), xe.outerHTML = fe.map(function(Le) {
            return dn(Le);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function Pu(e) {
  return Promise.all([La(e, "::before"), La(e, "::after")]);
}
function Tu(e) {
  return e.parentNode !== document.head && !~_c.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Br) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Ua(e) {
  if (Ye)
    return new Promise(function(t, n) {
      var r = Rt(e.querySelectorAll("*")).filter(Tu).map(Pu), i = Pi.begin("searchPseudoElements");
      _o(), Promise.all(r).then(function() {
        i(), Zr(), t();
      }).catch(function() {
        i(), Zr(), n();
      });
    });
}
var Iu = {
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
      C.searchPseudoElements && Ua(i);
    };
  }
}, Fa = !1, Nu = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          _o(), Fa = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Na(Gr("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        pu();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        Fa ? Zr() : Na(Gr("mutationObserverCallbacks", {
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
    var a = i.toLowerCase().split("-"), s = a[0], o = a.slice(1).join("-");
    if (s && o === "h")
      return r.flipX = !0, r;
    if (s && o === "v")
      return r.flipY = !0, r;
    if (o = parseFloat(o), isNaN(o))
      return r;
    switch (s) {
      case "grow":
        r.size = r.size + o;
        break;
      case "shrink":
        r.size = r.size - o;
        break;
      case "left":
        r.x = r.x - o;
        break;
      case "right":
        r.x = r.x + o;
        break;
      case "up":
        r.y = r.y - o;
        break;
      case "down":
        r.y = r.y + o;
        break;
      case "rotate":
        r.rotate = r.rotate + o;
        break;
    }
    return r;
  }, n);
}, Ru = {
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
      var r = n.main, i = n.transform, a = n.containerWidth, s = n.iconWidth, o = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "), c = "scale(".concat(i.size / 16 * (i.flipX ? -1 : 1), ", ").concat(i.size / 16 * (i.flipY ? -1 : 1), ") "), u = "rotate(".concat(i.rotate, " 0 0)"), m = {
        transform: "".concat(l, " ").concat(c, " ").concat(u)
      }, h = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, x = {
        outer: o,
        inner: m,
        path: h
      };
      return {
        tag: "g",
        attributes: O({}, x.outer),
        children: [{
          tag: "g",
          attributes: O({}, x.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: O(O({}, r.icon.attributes), x.path)
          }]
        }]
      };
    };
  }
}, Cr = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Ha(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Mu(e) {
  return e.tag === "g" ? e.children : [e];
}
var Du = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-mask"), a = i ? ur(i.split(" ").map(function(s) {
          return s.trim();
        })) : ki();
        return a.prefix || (a.prefix = at()), n.mask = a, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, i = n.attributes, a = n.main, s = n.mask, o = n.maskId, l = n.transform, c = a.width, u = a.icon, m = s.width, h = s.icon, x = Mc({
        transform: l,
        containerWidth: m,
        iconWidth: c
      }), P = {
        tag: "rect",
        attributes: O(O({}, Cr), {}, {
          fill: "white"
        })
      }, T = u.children ? {
        children: u.children.map(Ha)
      } : {}, $ = {
        tag: "g",
        attributes: O({}, x.inner),
        children: [Ha(O({
          tag: u.tag,
          attributes: O(O({}, u.attributes), x.path)
        }, T))]
      }, E = {
        tag: "g",
        attributes: O({}, x.outer),
        children: [$]
      }, A = "mask-".concat(o || ln()), I = "clip-".concat(o || ln()), F = {
        tag: "mask",
        attributes: O(O({}, Cr), {}, {
          id: A,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, E]
      }, V = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: I
          },
          children: Mu(h)
        }, F]
      };
      return r.push(V, {
        tag: "rect",
        attributes: O({
          fill: "currentColor",
          "clip-path": "url(#".concat(I, ")"),
          mask: "url(#".concat(A, ")")
        }, Cr)
      }), {
        children: r,
        attributes: i
      };
    };
  }
}, Lu = {
  provides: function(t) {
    var n = !1;
    it.matchMedia && (n = it.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
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
      var s = O(O({}, a), {}, {
        attributeName: "opacity"
      }), o = {
        tag: "circle",
        attributes: O(O({}, i), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || o.children.push({
        tag: "animate",
        attributes: O(O({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: O(O({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(o), r.push({
        tag: "path",
        attributes: O(O({}, i), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: O(O({}, s), {}, {
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
          attributes: O(O({}, s), {}, {
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
}, Uu = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var i = r.getAttribute("data-fa-symbol"), a = i === null ? !1 : i === "" ? !0 : i;
        return n.symbol = a, n;
      }
    };
  }
}, Fu = [Uc, Eu, Su, Au, Ou, Iu, Nu, Ru, Du, Lu, Uu];
Jc(Fu, {
  mixoutsTo: ye
});
ye.noAuto;
ye.config;
var ju = ye.library;
ye.dom;
var Qr = ye.parse;
ye.findIconDefinition;
ye.toHtml;
var Hu = ye.icon;
ye.layer;
ye.text;
ye.counter;
var Vu = { NVM_INC: "/Users/cm/.nvm/versions/node/v19.7.0/include/node", MANPATH: "/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man:/usr/share/man:/usr/local/share/man:/Users/cm/.nvm/versions/node/v19.7.0/share/man:/opt/homebrew/share/man::", TERM_PROGRAM: "vscode", NODE: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", INIT_CWD: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_CD_FLAGS: "-q", TERM: "xterm-256color", SHELL: "/bin/zsh", npm_config_metrics_registry: "https://registry.npmjs.org/", HOMEBREW_REPOSITORY: "/opt/homebrew", TMPDIR: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/", npm_config_global_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", TERM_PROGRAM_VERSION: "1.88.1", ZDOTDIR: "/Users/cm", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", MallocNanoZone: "0", COLOR: "1", npm_config_noproxy: "", npm_config_local_prefix: "/Users/cm/Documents/workspace/transcribe/frontend", NVM_DIR: "/Users/cm/.nvm", USER: "cm", COMMAND_MODE: "unix2003", npm_config_globalconfig: "/Users/cm/.nvm/versions/node/v19.7.0/etc/npmrc", SSH_AUTH_SOCK: "/private/tmp/com.apple.launchd.UYM6WsU7zK/Listeners", __CF_USER_TEXT_ENCODING: "0x1F5:0x0:0x0", npm_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/bin/npm-cli.js", npm_config_fetch_retry_mintimeout: "20000", PATH: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin:/Users/cm/Documents/workspace/transcribe/node_modules/.bin:/Users/cm/Documents/workspace/node_modules/.bin:/Users/cm/Documents/node_modules/.bin:/Users/cm/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/Library/Apple/usr/bin:/Users/cm/.nvm/versions/node/v19.7.0/bin:/opt/homebrew/opt/postgresql@13/bin:/Library/Frameworks/Python.framework/Versions/3.10/bin:/opt/homebrew/bin:/opt/homebrew/sbin:/Users/cm/SDKs/flutter 2/bin:/Users/cm/SDKs/flutter 2/bin", npm_package_json: "/Users/cm/Documents/workspace/transcribe/frontend/package.json", npm_config_userconfig: "/Users/cm/.npmrc", npm_config_init_module: "/Users/cm/.npm-init.js", USER_ZDOTDIR: "/Users/cm", __CFBundleIdentifier: "com.microsoft.VSCode", npm_command: "run-script", PWD: "/Users/cm/Documents/workspace/transcribe/frontend", npm_lifecycle_event: "build:components", EDITOR: "vi", npm_package_name: "frontend", LANG: "en_US.UTF-8", npm_config_npm_version: "9.8.1", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", XPC_FLAGS: "0x0", npm_config_node_gyp: "/Users/cm/.nvm/versions/node/v19.7.0/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", npm_package_version: "0.1.0", XPC_SERVICE_NAME: "0", VSCODE_INJECTION: "1", SHLVL: "2", HOME: "/Users/cm", npm_config_fetch_retry_maxtimeout: "120000", VSCODE_GIT_ASKPASS_MAIN: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js", HOMEBREW_PREFIX: "/opt/homebrew", npm_config_cache: "/Users/cm/.npm", LOGNAME: "cm", npm_lifecycle_script: "vue-tsc --noEmit && vite build --config vite.comp.config.js", VSCODE_GIT_IPC_HANDLE: "/var/folders/fy/f51x8m3d5p57t2pm2n7jw4pw0000gn/T/vscode-git-bfa6a0c0b1.sock", NVM_BIN: "/Users/cm/.nvm/versions/node/v19.7.0/bin", npm_config_user_agent: "npm/9.8.1 node/v19.7.0 darwin arm64 workspaces/false", VSCODE_GIT_ASKPASS_NODE: "/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)", GIT_ASKPASS: "/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh", INFOPATH: "/opt/homebrew/share/info:/opt/homebrew/share/info:", HOMEBREW_CELLAR: "/opt/homebrew/Cellar", npm_node_execpath: "/Users/cm/.nvm/versions/node/v19.7.0/bin/node", npm_config_prefix: "/Users/cm/.nvm/versions/node/v19.7.0", COLORTERM: "truecolor", _: "/Users/cm/Documents/workspace/transcribe/frontend/node_modules/.bin/vite", NODE_ENV: "production" };
function Va(e, t) {
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
    t % 2 ? Va(Object(n), !0).forEach(function(r) {
      pe(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Va(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Xn(e) {
  "@babel/helpers - typeof";
  return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xn(e);
}
function pe(e, t, n) {
  return t = Ku(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function zu(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function $u(e, t) {
  if (e == null)
    return {};
  var n = zu(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      r = a[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Bu(e, t) {
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
function Ku(e) {
  var t = Bu(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Wu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xo = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(E, A, I) {
      if (!c(A) || m(A) || h(A) || x(A) || l(A))
        return A;
      var F, V = 0, L = 0;
      if (u(A))
        for (F = [], L = A.length; V < L; V++)
          F.push(n(E, A[V], I));
      else {
        F = {};
        for (var J in A)
          Object.prototype.hasOwnProperty.call(A, J) && (F[E(J, I)] = n(E, A[J], I));
      }
      return F;
    }, r = function(E, A) {
      A = A || {};
      var I = A.separator || "_", F = A.split || /(?=[A-Z])/;
      return E.split(F).join(I);
    }, i = function(E) {
      return P(E) ? E : (E = E.replace(/[\-_\s]+(.)?/g, function(A, I) {
        return I ? I.toUpperCase() : "";
      }), E.substr(0, 1).toLowerCase() + E.substr(1));
    }, a = function(E) {
      var A = i(E);
      return A.substr(0, 1).toUpperCase() + A.substr(1);
    }, s = function(E, A) {
      return r(E, A).toLowerCase();
    }, o = Object.prototype.toString, l = function(E) {
      return typeof E == "function";
    }, c = function(E) {
      return E === Object(E);
    }, u = function(E) {
      return o.call(E) == "[object Array]";
    }, m = function(E) {
      return o.call(E) == "[object Date]";
    }, h = function(E) {
      return o.call(E) == "[object RegExp]";
    }, x = function(E) {
      return o.call(E) == "[object Boolean]";
    }, P = function(E) {
      return E = E - 0, E === E;
    }, T = function(E, A) {
      var I = A && "process" in A ? A.process : A;
      return typeof I != "function" ? E : function(F, V) {
        return I(F, E, V);
      };
    }, $ = {
      camelize: i,
      decamelize: s,
      pascalize: a,
      depascalize: s,
      camelizeKeys: function(E, A) {
        return n(T(i, A), E);
      },
      decamelizeKeys: function(E, A) {
        return n(T(s, A), E, A);
      },
      pascalizeKeys: function(E, A) {
        return n(T(a, A), E);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = $ : t.humps = $;
  })(Wu);
})(xo);
var Gu = xo.exports, Yu = ["class", "style"];
function Xu(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = Gu.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return t[i] = a, t;
  }, {});
}
function qu(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function wo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(l) {
    return wo(l);
  }), i = Object.keys(e.attributes || {}).reduce(function(l, c) {
    var u = e.attributes[c];
    switch (c) {
      case "class":
        l.class = qu(u);
        break;
      case "style":
        l.style = Xu(u);
        break;
      default:
        l.attrs[c] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, s = a === void 0 ? {} : a, o = $u(n, Yu);
  return Cf(e.tag, Fe(Fe(Fe({}, t), {}, {
    class: i.class,
    style: Fe(Fe({}, i.style), s)
  }, i.attrs), o), r);
}
var Eo = !1;
try {
  Eo = Vu.NODE_ENV === "production";
} catch {
}
function Ju() {
  if (!Eo && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Pr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? pe({}, e, t) : {};
}
function Zu(e) {
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
function za(e) {
  if (e && Xn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Qr.icon)
    return Qr.icon(e);
  if (e === null)
    return null;
  if (Xn(e) === "object" && e.prefix && e.iconName)
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
var St = /* @__PURE__ */ mi({
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
    var r = n.attrs, i = dt(function() {
      return za(t.icon);
    }), a = dt(function() {
      return Pr("classes", Zu(t));
    }), s = dt(function() {
      return Pr("transform", typeof t.transform == "string" ? Qr.transform(t.transform) : t.transform);
    }), o = dt(function() {
      return Pr("mask", za(t.mask));
    }), l = dt(function() {
      return Hu(i.value, Fe(Fe(Fe(Fe({}, a.value), s.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title,
        titleId: t.titleId,
        maskId: t.maskId
      }));
    });
    Mn(l, function(u) {
      if (!u)
        return Ju("Could not find one or more icon(s)", i.value, o.value);
    }, {
      immediate: !0
    });
    var c = dt(function() {
      return l.value ? wo(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return c.value;
    };
  }
});
const Qu = { class: "mt-4 h-full w-full items-center" }, ed = /* @__PURE__ */ te("h1", { class: "text-4xl" }, [
  /* @__PURE__ */ te("b", null, "Transcribe your files")
], -1), td = {
  for: "fileInput",
  class: "text-2xl my-4"
}, nd = { key: 0 }, rd = {
  key: 1,
  class: ""
}, id = /* @__PURE__ */ te("u", null, "click here", -1), ad = {
  key: 0,
  class: "w-full"
}, sd = { class: "flex flex-row items-center gap-3" }, od = { class: "" }, ld = ["onClick"], fd = /* @__PURE__ */ te("span", null, "Delete", -1), cd = { class: "flex flex-row gap-2" }, ud = ["disabled"], dd = {
  key: 0,
  class: "m-4"
}, md = { class: "w-full items-center justify-between flex flex-row mb-2" }, pd = { class: "flex flex-row items-center gap-3" }, hd = { class: "" }, vd = { class: "text-left p-4 w-full mb-6 border rounded-2xl" }, gd = {
  key: 0,
  class: "flex flex-row gap-2 mb-lg mb-5"
}, bd = { class: "tag rounded-lg p-1 w-auto" }, _d = {
  key: 1,
  class: ""
}, yd = /* @__PURE__ */ mi({
  __name: "FileUpload.ce",
  setup(e) {
    ju.add(ac, nc, rc, ic);
    const t = Ut(!1), n = Ut(!1), r = Ut([]), i = Ut(), a = Ut([]);
    function s() {
      var x;
      const h = Array.from(((x = i.value) == null ? void 0 : x.files) || []);
      r.value.push(...h);
    }
    function o(h) {
      h.preventDefault(), t.value = !0;
    }
    function l() {
      t.value = !1;
    }
    function c(h) {
      h.preventDefault(), i.value && (i.value.files = h.dataTransfer.files), s(), t.value = !1;
    }
    function u(h) {
      r.value.splice(h, 1);
    }
    async function m() {
      if (n.value = !n.value, n.value)
        for (let h = 0; h < r.value.length; h++) {
          a.value.push({
            file: r.value[h],
            status: "transcribing...",
            text: "",
            duration: ""
          });
          const x = new FormData();
          x.append("file", r.value[h]), fetch("https://transcribe-test.fly.dev/uploadFull", {
            method: "POST",
            body: x
          }).then(async (P) => {
            let T = await P.json();
            a.value[h].text = T.transcript, a.value[h].status = "Done (" + Math.round(T.time / 1e3) + "sec)";
          });
        }
      else
        a.value = [];
    }
    return (h, x) => (ee(), ue("div", Qu, [
      te("div", {
        class: Qn(["main flex flex-col gap-4 justify-items-stretch", { "h-5/6": !n.value }])
      }, [
        ed,
        n.value ? Ie("", !0) : (ee(), ue("div", {
          key: 0,
          class: "flex flex-col justify-center items-center rounded-3xl dropzone-container shadow-inner h-5/6 w-full p-4 overflow-scroll",
          onDragover: o,
          onDragleave: l,
          onDrop: c
        }, [
          Ml(te("input", {
            type: "file",
            multiple: "",
            name: "file",
            id: "fileInput",
            onChange: s,
            ref_key: "file",
            ref: i,
            accept: "audio/*, video/*"
          }, null, 544), [
            [Df, !1]
          ]),
          te("label", td, [
            t.value ? (ee(), ue("div", nd, "Release to drop files here.")) : (ee(), ue("div", rd, [
              zt("Drop files here or "),
              id,
              zt(" to upload.")
            ]))
          ]),
          t.value ? Ie("", !0) : (ee(), ue("div", ad, [
            (ee(!0), ue(we, null, _r(r.value, (P, T) => (ee(), ue("div", {
              key: T,
              class: "w-full p-2 items-center justify-evenly flex flex-row"
            }, [
              te("div", sd, [
                P.type.includes("audio") ? (ee(), Vt(ut(St), {
                  key: 0,
                  icon: "microphone"
                })) : Ie("", !0),
                P.type.includes("video") ? (ee(), Vt(ut(St), {
                  key: 1,
                  icon: "video"
                })) : Ie("", !0),
                te("div", od, Xe(P.name) + " (" + Xe(Math.round(P.size / 1024 / 1024)) + " MB)", 1)
              ]),
              te("button", {
                class: "delete",
                onClick: ($) => u(T)
              }, [
                le(ut(St), {
                  class: "mr-2",
                  icon: "trash"
                }),
                fd
              ], 8, ld)
            ]))), 128))
          ]))
        ], 32)),
        te("div", cd, [
          te("button", {
            disabled: r.value.length == 0,
            class: "button-39",
            style: {},
            onClick: m
          }, [
            le(ut(St), {
              class: "mr-2",
              icon: "upload"
            }),
            zt(" " + Xe(n.value ? "Cancel" : "Transcribe"), 1)
          ], 8, ud)
        ]),
        n.value ? (ee(), ue("div", {
          key: 1,
          class: "shadow-md border rounded-3xl h-5/6 w-full pt-2 px-4 overflow-scroll",
          onDragover: o,
          onDragleave: l,
          onDrop: c
        }, [
          t.value ? Ie("", !0) : (ee(), ue("div", dd, [
            (ee(!0), ue(we, null, _r(a.value, (P, T) => (ee(), ue("div", {
              key: T,
              class: "w-full gap-1 items-center justify-between flex flex-col"
            }, [
              te("div", md, [
                te("div", pd, [
                  P.file.type.includes("audio") ? (ee(), Vt(ut(St), {
                    key: 0,
                    icon: "microphone"
                  })) : Ie("", !0),
                  P.file.type.includes("video") ? (ee(), Vt(ut(St), {
                    key: 1,
                    icon: "video"
                  })) : Ie("", !0),
                  te("div", hd, Xe(P.file.name) + " (" + Xe(Math.round(P.file.size / 1024 / 1024)) + " MB)", 1)
                ]),
                te("span", null, Xe(P.status), 1)
              ]),
              te("div", vd, [
                P.keywords ? (ee(), ue("div", gd, [
                  zt(" Keywords: "),
                  (ee(!0), ue(we, null, _r(P.keywords, ($) => (ee(), ue("div", { key: T }, [
                    te("span", bd, Xe($), 1)
                  ]))), 128))
                ])) : Ie("", !0),
                P.text ? (ee(), ue("div", _d, Xe(P.text), 1)) : Ie("", !0)
              ])
            ]))), 128))
          ]))
        ], 32)) : Ie("", !0)
      ], 2)
    ]));
  }
}), xd = ".main{--primary: rgb(255, 54, 165);align-items:center;justify-content:center;text-align:center}.tag{border:2px solid var(--primary)}.dropzone-container{border:2px solid #e2e8f0}.hidden-input{opacity:0;overflow:hidden;position:absolute;width:1px;height:1px}.file-label{font-size:20px;display:block;cursor:pointer}.preview-container{display:flex;margin-top:2rem}.preview-card{display:flex;border:1px solid #a2a2a2;padding:5px;margin-left:5px}.preview-img{width:50px;height:50px;border-radius:5px;border:1px solid #a2a2a2;background-color:#a2a2a2}.delete{background-color:#fd6868!important}button:hover{box-shadow:0 0 14px #00000080!important;filter:saturate(140%)}button{transition:box-shadow .2s,background-color .5s;filter:.2s;background-color:#ff36a5;border-radius:10px;color:#111827;line-height:1.25rem;padding:.75rem 1rem;text-align:center;cursor:pointer;-moz-user-select:none;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button-39:focus{outline:2px solid transparent;outline-offset:2px}.button-39:focus-visible{box-shadow:none}", wd = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, Ed = /* @__PURE__ */ wd(yd, [["styles", [xd]]]), Sd = /* @__PURE__ */ Zf(Ed);
customElements.define("file-upload", Sd);
