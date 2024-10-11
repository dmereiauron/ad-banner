(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function Ay(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var rh = { exports: {} },
  us = {},
  ih = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Di = Symbol.for("react.element"),
  wy = Symbol.for("react.portal"),
  Sy = Symbol.for("react.fragment"),
  xy = Symbol.for("react.strict_mode"),
  Cy = Symbol.for("react.profiler"),
  ky = Symbol.for("react.provider"),
  Py = Symbol.for("react.context"),
  Ey = Symbol.for("react.forward_ref"),
  Ty = Symbol.for("react.suspense"),
  Dy = Symbol.for("react.memo"),
  My = Symbol.for("react.lazy"),
  wc = Symbol.iterator;
function Ry(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wc && e[wc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var oh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sh = Object.assign,
  ah = {};
function xr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ah),
    (this.updater = n || oh);
}
xr.prototype.isReactComponent = {};
xr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function lh() {}
lh.prototype = xr.prototype;
function Hl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ah),
    (this.updater = n || oh);
}
var Kl = (Hl.prototype = new lh());
Kl.constructor = Hl;
sh(Kl, xr.prototype);
Kl.isPureReactComponent = !0;
var Sc = Array.isArray,
  uh = Object.prototype.hasOwnProperty,
  Gl = { current: null },
  ch = { key: !0, ref: !0, __self: !0, __source: !0 };
function fh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      uh.call(t, r) && !ch.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Di,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Gl.current,
  };
}
function By(e, t) {
  return {
    $$typeof: Di,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Di;
}
function Vy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var xc = /\/+/g;
function js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Vy("" + e.key)
    : t.toString(36);
}
function ao(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Di:
          case wy:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + js(s, 0) : r),
      Sc(i)
        ? ((n = ""),
          e != null && (n = e.replace(xc, "$&/") + "/"),
          ao(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Yl(i) &&
            (i = By(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(xc, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Sc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + js(o, a);
      s += ao(o, t, n, l, i);
    }
  else if (((l = Ry(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + js(o, a++)), (s += ao(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return s;
}
function zi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ao(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Ny(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Pe = { current: null },
  lo = { transition: null },
  Iy = {
    ReactCurrentDispatcher: Pe,
    ReactCurrentBatchConfig: lo,
    ReactCurrentOwner: Gl,
  };
function dh() {
  throw Error("act(...) is not supported in production builds of React.");
}
F.Children = {
  map: zi,
  forEach: function (e, t, n) {
    zi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      zi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      zi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
F.Component = xr;
F.Fragment = Sy;
F.Profiler = Cy;
F.PureComponent = Hl;
F.StrictMode = xy;
F.Suspense = Ty;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iy;
F.act = dh;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = sh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Gl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      uh.call(t, l) &&
        !ch.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Di, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: Py,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ky, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = fh;
F.createFactory = function (e) {
  var t = fh.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Ey, render: e };
};
F.isValidElement = Yl;
F.lazy = function (e) {
  return { $$typeof: My, _payload: { _status: -1, _result: e }, _init: Ny };
};
F.memo = function (e, t) {
  return { $$typeof: Dy, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = lo.transition;
  lo.transition = {};
  try {
    e();
  } finally {
    lo.transition = t;
  }
};
F.unstable_act = dh;
F.useCallback = function (e, t) {
  return Pe.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Pe.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Pe.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Pe.current.useEffect(e, t);
};
F.useId = function () {
  return Pe.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Pe.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Pe.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Pe.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Pe.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Pe.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Pe.current.useRef(e);
};
F.useState = function (e) {
  return Pe.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Pe.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Pe.current.useTransition();
};
F.version = "18.3.1";
ih.exports = F;
var N = ih.exports;
const At = Ay(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ly = N,
  Fy = Symbol.for("react.element"),
  Oy = Symbol.for("react.fragment"),
  jy = Object.prototype.hasOwnProperty,
  zy = Ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Uy = { key: !0, ref: !0, __self: !0, __source: !0 };
function hh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) jy.call(t, r) && !Uy.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Fy,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: zy.current,
  };
}
us.Fragment = Oy;
us.jsx = hh;
us.jsxs = hh;
rh.exports = us;
var D = rh.exports,
  ph = { exports: {} },
  ze = {},
  mh = { exports: {} },
  gh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, M) {
    var V = E.length;
    E.push(M);
    e: for (; 0 < V; ) {
      var Q = (V - 1) >>> 1,
        _ = E[Q];
      if (0 < i(_, M)) (E[Q] = M), (E[V] = _), (V = Q);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var M = E[0],
      V = E.pop();
    if (V !== M) {
      E[0] = V;
      e: for (var Q = 0, _ = E.length, fn = _ >>> 1; Q < fn; ) {
        var Je = 2 * (Q + 1) - 1,
          Nt = E[Je],
          Ve = Je + 1,
          mt = E[Ve];
        if (0 > i(Nt, V))
          Ve < _ && 0 > i(mt, Nt)
            ? ((E[Q] = mt), (E[Ve] = V), (Q = Ve))
            : ((E[Q] = Nt), (E[Je] = V), (Q = Je));
        else if (Ve < _ && 0 > i(mt, V)) (E[Q] = mt), (E[Ve] = V), (Q = Ve);
        else break e;
      }
    }
    return M;
  }
  function i(E, M) {
    var V = E.sortIndex - M.sortIndex;
    return V !== 0 ? V : E.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= E)
        r(u), (M.sortIndex = M.expirationTime), t(l, M);
      else break;
      M = n(u);
    }
  }
  function A(E) {
    if (((v = !1), m(E), !y))
      if (n(l) !== null) (y = !0), In(w);
      else {
        var M = n(u);
        M !== null && X(A, M.startTime - E);
      }
  }
  function w(E, M) {
    (y = !1), v && ((v = !1), p(P), (P = -1)), (g = !0);
    var V = d;
    try {
      for (
        m(M), f = n(l);
        f !== null && (!(f.expirationTime > M) || (E && !re()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var _ = Q(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof _ == "function" ? (f.callback = _) : f === n(l) && r(l),
            m(M);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var fn = !0;
      else {
        var Je = n(u);
        Je !== null && X(A, Je.startTime - M), (fn = !1);
      }
      return fn;
    } finally {
      (f = null), (d = V), (g = !1);
    }
  }
  var x = !1,
    S = null,
    P = -1,
    L = 5,
    R = -1;
  function re() {
    return !(e.unstable_now() - R < L);
  }
  function ot() {
    if (S !== null) {
      var E = e.unstable_now();
      R = E;
      var M = !0;
      try {
        M = S(!0, E);
      } finally {
        M ? pt() : ((x = !1), (S = null));
      }
    } else x = !1;
  }
  var pt;
  if (typeof h == "function")
    pt = function () {
      h(ot);
    };
  else if (typeof MessageChannel < "u") {
    var cn = new MessageChannel(),
      Oi = cn.port2;
    (cn.port1.onmessage = ot),
      (pt = function () {
        Oi.postMessage(null);
      });
  } else
    pt = function () {
      C(ot, 0);
    };
  function In(E) {
    (S = E), x || ((x = !0), pt());
  }
  function X(E, M) {
    P = C(function () {
      E(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), In(w));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (L = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var V = d;
      d = M;
      try {
        return E();
      } finally {
        d = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, M) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var V = d;
      d = E;
      try {
        return M();
      } finally {
        d = V;
      }
    }),
    (e.unstable_scheduleCallback = function (E, M, V) {
      var Q = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? Q + V : Q))
          : (V = Q),
        E)
      ) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return (
        (_ = V + _),
        (E = {
          id: c++,
          callback: M,
          priorityLevel: E,
          startTime: V,
          expirationTime: _,
          sortIndex: -1,
        }),
        V > Q
          ? ((E.sortIndex = V),
            t(u, E),
            n(l) === null &&
              E === n(u) &&
              (v ? (p(P), (P = -1)) : (v = !0), X(A, V - Q)))
          : ((E.sortIndex = _), t(l, E), y || g || ((y = !0), In(w))),
        E
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (E) {
      var M = d;
      return function () {
        var V = d;
        d = M;
        try {
          return E.apply(this, arguments);
        } finally {
          d = V;
        }
      };
    });
})(gh);
mh.exports = gh;
var Qy = mh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _y = N,
  Oe = Qy;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var yh = new Set(),
  ii = {};
function Vn(e, t) {
  ar(e, t), ar(e + "Capture", t);
}
function ar(e, t) {
  for (ii[e] = t, e = 0; e < t.length; e++) yh.add(t[e]);
}
var Dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ta = Object.prototype.hasOwnProperty,
  Wy =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Cc = {},
  kc = {};
function Hy(e) {
  return Ta.call(kc, e)
    ? !0
    : Ta.call(Cc, e)
      ? !1
      : Wy.test(e)
        ? (kc[e] = !0)
        : ((Cc[e] = !0), !1);
}
function Ky(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gy(e, t, n, r) {
  if (t === null || typeof t > "u" || Ky(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ee(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var pe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ee(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  pe[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  pe[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  pe[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    pe[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  pe[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  pe[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  pe[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  pe[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Xl = /[\-:]([a-z])/g;
function Zl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xl, Zl);
    pe[t] = new Ee(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Xl, Zl);
    pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Xl, Zl);
  pe[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
pe.xlinkHref = new Ee(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  pe[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Jl(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Gy(t, n, i, r) && (n = null),
    r || i === null
      ? Hy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Vt = _y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ui = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  jn = Symbol.for("react.fragment"),
  ql = Symbol.for("react.strict_mode"),
  Da = Symbol.for("react.profiler"),
  vh = Symbol.for("react.provider"),
  Ah = Symbol.for("react.context"),
  $l = Symbol.for("react.forward_ref"),
  Ma = Symbol.for("react.suspense"),
  Ra = Symbol.for("react.suspense_list"),
  bl = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  wh = Symbol.for("react.offscreen"),
  Pc = Symbol.iterator;
function Mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Pc && e[Pc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  zs;
function jr(e) {
  if (zs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zs = (t && t[1]) || "";
    }
  return (
    `
` +
    zs +
    e
  );
}
var Us = !1;
function Qs(e, t) {
  if (!e || Us) return "";
  Us = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Us = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? jr(e) : "";
}
function Yy(e) {
  switch (e.tag) {
    case 5:
      return jr(e.type);
    case 16:
      return jr("Lazy");
    case 13:
      return jr("Suspense");
    case 19:
      return jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qs(e.type, !1)), e;
    case 11:
      return (e = Qs(e.type.render, !1)), e;
    case 1:
      return (e = Qs(e.type, !0)), e;
    default:
      return "";
  }
}
function Ba(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case On:
      return "Portal";
    case Da:
      return "Profiler";
    case ql:
      return "StrictMode";
    case Ma:
      return "Suspense";
    case Ra:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ah:
        return (e.displayName || "Context") + ".Consumer";
      case vh:
        return (e._context.displayName || "Context") + ".Provider";
      case $l:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bl:
        return (
          (t = e.displayName || null), t !== null ? t : Ba(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return Ba(e(t));
        } catch {}
    }
  return null;
}
function Xy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ba(t);
    case 8:
      return t === ql ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function bt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Sh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zy(e) {
  var t = Sh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qi(e) {
  e._valueTracker || (e._valueTracker = Zy(e));
}
function xh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Sh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Do(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Va(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ec(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = bt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ch(e, t) {
  (t = t.checked), t != null && Jl(e, "checked", t, !1);
}
function Na(e, t) {
  Ch(e, t);
  var n = bt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ia(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ia(e, t.type, bt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ia(e, t, n) {
  (t !== "number" || Do(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zr = Array.isArray;
function tr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + bt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function La(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Dc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: bt(n) };
}
function kh(e, t) {
  var n = bt(t.value),
    r = bt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Mc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ph(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fa(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ph(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var _i,
  Eh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        _i = _i || document.createElement("div"),
          _i.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = _i.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function oi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Kr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Jy = ["Webkit", "ms", "Moz", "O"];
Object.keys(Kr).forEach(function (e) {
  Jy.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Kr[t] = Kr[e]);
  });
});
function Th(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Kr.hasOwnProperty(e) && Kr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Dh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Th(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var qy = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Oa(e, t) {
  if (t) {
    if (qy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function ja(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var za = null;
function eu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ua = null,
  nr = null,
  rr = null;
function Rc(e) {
  if ((e = Bi(e))) {
    if (typeof Ua != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = ps(t)), Ua(e.stateNode, e.type, t));
  }
}
function Mh(e) {
  nr ? (rr ? rr.push(e) : (rr = [e])) : (nr = e);
}
function Rh() {
  if (nr) {
    var e = nr,
      t = rr;
    if (((rr = nr = null), Rc(e), t)) for (e = 0; e < t.length; e++) Rc(t[e]);
  }
}
function Bh(e, t) {
  return e(t);
}
function Vh() {}
var _s = !1;
function Nh(e, t, n) {
  if (_s) return e(t, n);
  _s = !0;
  try {
    return Bh(e, t, n);
  } finally {
    (_s = !1), (nr !== null || rr !== null) && (Vh(), Rh());
  }
}
function si(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ps(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var Qa = !1;
if (Dt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, "passive", {
      get: function () {
        Qa = !0;
      },
    }),
      window.addEventListener("test", Rr, Rr),
      window.removeEventListener("test", Rr, Rr);
  } catch {
    Qa = !1;
  }
function $y(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Gr = !1,
  Mo = null,
  Ro = !1,
  _a = null,
  by = {
    onError: function (e) {
      (Gr = !0), (Mo = e);
    },
  };
function e0(e, t, n, r, i, o, s, a, l) {
  (Gr = !1), (Mo = null), $y.apply(by, arguments);
}
function t0(e, t, n, r, i, o, s, a, l) {
  if ((e0.apply(this, arguments), Gr)) {
    if (Gr) {
      var u = Mo;
      (Gr = !1), (Mo = null);
    } else throw Error(k(198));
    Ro || ((Ro = !0), (_a = u));
  }
}
function Nn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ih(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bc(e) {
  if (Nn(e) !== e) throw Error(k(188));
}
function n0(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Bc(i), e;
        if (o === r) return Bc(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Lh(e) {
  return (e = n0(e)), e !== null ? Fh(e) : null;
}
function Fh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Fh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Oh = Oe.unstable_scheduleCallback,
  Vc = Oe.unstable_cancelCallback,
  r0 = Oe.unstable_shouldYield,
  i0 = Oe.unstable_requestPaint,
  ne = Oe.unstable_now,
  o0 = Oe.unstable_getCurrentPriorityLevel,
  tu = Oe.unstable_ImmediatePriority,
  jh = Oe.unstable_UserBlockingPriority,
  Bo = Oe.unstable_NormalPriority,
  s0 = Oe.unstable_LowPriority,
  zh = Oe.unstable_IdlePriority,
  cs = null,
  ct = null;
function a0(e) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(cs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : c0,
  l0 = Math.log,
  u0 = Math.LN2;
function c0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((l0(e) / u0) | 0)) | 0;
}
var Wi = 64,
  Hi = 4194304;
function Ur(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ur(a)) : ((o &= s), o !== 0 && (r = Ur(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ur(s)) : o !== 0 && (r = Ur(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function f0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function d0(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - tt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = f0(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Wa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Uh() {
  var e = Wi;
  return (Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e;
}
function Ws(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function h0(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - tt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function nu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function Qh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var _h,
  ru,
  Wh,
  Hh,
  Kh,
  Ha = !1,
  Ki = [],
  Ht = null,
  Kt = null,
  Gt = null,
  ai = new Map(),
  li = new Map(),
  Ut = [],
  p0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Nc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ht = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      ai.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      li.delete(t.pointerId);
  }
}
function Br(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Bi(t)), t !== null && ru(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function m0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ht = Br(Ht, e, t, n, r, i)), !0;
    case "dragenter":
      return (Kt = Br(Kt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Gt = Br(Gt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ai.set(o, Br(ai.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), li.set(o, Br(li.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Gh(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ih(n)), t !== null)) {
          (e.blockedOn = t),
            Kh(e.priority, function () {
              Wh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ka(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (za = r), n.target.dispatchEvent(r), (za = null);
    } else return (t = Bi(n)), t !== null && ru(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ic(e, t, n) {
  uo(e) && n.delete(t);
}
function g0() {
  (Ha = !1),
    Ht !== null && uo(Ht) && (Ht = null),
    Kt !== null && uo(Kt) && (Kt = null),
    Gt !== null && uo(Gt) && (Gt = null),
    ai.forEach(Ic),
    li.forEach(Ic);
}
function Vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ha ||
      ((Ha = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, g0)));
}
function ui(e) {
  function t(i) {
    return Vr(i, e);
  }
  if (0 < Ki.length) {
    Vr(Ki[0], e);
    for (var n = 1; n < Ki.length; n++) {
      var r = Ki[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ht !== null && Vr(Ht, e),
      Kt !== null && Vr(Kt, e),
      Gt !== null && Vr(Gt, e),
      ai.forEach(t),
      li.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Gh(n), n.blockedOn === null && Ut.shift();
}
var ir = Vt.ReactCurrentBatchConfig,
  No = !0;
function y0(e, t, n, r) {
  var i = z,
    o = ir.transition;
  ir.transition = null;
  try {
    (z = 1), iu(e, t, n, r);
  } finally {
    (z = i), (ir.transition = o);
  }
}
function v0(e, t, n, r) {
  var i = z,
    o = ir.transition;
  ir.transition = null;
  try {
    (z = 4), iu(e, t, n, r);
  } finally {
    (z = i), (ir.transition = o);
  }
}
function iu(e, t, n, r) {
  if (No) {
    var i = Ka(e, t, n, r);
    if (i === null) bs(e, t, r, Io, n), Nc(e, r);
    else if (m0(i, e, t, n, r)) r.stopPropagation();
    else if ((Nc(e, r), t & 4 && -1 < p0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Bi(i);
        if (
          (o !== null && _h(o),
          (o = Ka(e, t, n, r)),
          o === null && bs(e, t, r, Io, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else bs(e, t, r, null, n);
  }
}
var Io = null;
function Ka(e, t, n, r) {
  if (((Io = null), (e = eu(r)), (e = vn(e)), e !== null))
    if (((t = Nn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ih(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Io = e), null;
}
function Yh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (o0()) {
        case tu:
          return 1;
        case jh:
          return 4;
        case Bo:
        case s0:
          return 16;
        case zh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var _t = null,
  ou = null,
  co = null;
function Xh() {
  if (co) return co;
  var e,
    t = ou,
    n = t.length,
    r,
    i = "value" in _t ? _t.value : _t.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (co = i.slice(e, 1 < r ? 1 - r : void 0));
}
function fo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Gi() {
  return !0;
}
function Lc() {
  return !1;
}
function Ue(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Gi
        : Lc),
      (this.isPropagationStopped = Lc),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gi));
      },
      persist: function () {},
      isPersistent: Gi,
    }),
    t
  );
}
var Cr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  su = Ue(Cr),
  Ri = $({}, Cr, { view: 0, detail: 0 }),
  A0 = Ue(Ri),
  Hs,
  Ks,
  Nr,
  fs = $({}, Ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: au,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Nr &&
            (Nr && e.type === "mousemove"
              ? ((Hs = e.screenX - Nr.screenX), (Ks = e.screenY - Nr.screenY))
              : (Ks = Hs = 0),
            (Nr = e)),
          Hs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ks;
    },
  }),
  Fc = Ue(fs),
  w0 = $({}, fs, { dataTransfer: 0 }),
  S0 = Ue(w0),
  x0 = $({}, Ri, { relatedTarget: 0 }),
  Gs = Ue(x0),
  C0 = $({}, Cr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  k0 = Ue(C0),
  P0 = $({}, Cr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  E0 = Ue(P0),
  T0 = $({}, Cr, { data: 0 }),
  Oc = Ue(T0),
  D0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  M0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  R0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function B0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = R0[e]) ? !!t[e] : !1;
}
function au() {
  return B0;
}
var V0 = $({}, Ri, {
    key: function (e) {
      if (e.key) {
        var t = D0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = fo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? M0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: au,
    charCode: function (e) {
      return e.type === "keypress" ? fo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? fo(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  N0 = Ue(V0),
  I0 = $({}, fs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  jc = Ue(I0),
  L0 = $({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: au,
  }),
  F0 = Ue(L0),
  O0 = $({}, Cr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  j0 = Ue(O0),
  z0 = $({}, fs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  U0 = Ue(z0),
  Q0 = [9, 13, 27, 32],
  lu = Dt && "CompositionEvent" in window,
  Yr = null;
Dt && "documentMode" in document && (Yr = document.documentMode);
var _0 = Dt && "TextEvent" in window && !Yr,
  Zh = Dt && (!lu || (Yr && 8 < Yr && 11 >= Yr)),
  zc = " ",
  Uc = !1;
function Jh(e, t) {
  switch (e) {
    case "keyup":
      return Q0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function qh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function W0(e, t) {
  switch (e) {
    case "compositionend":
      return qh(t);
    case "keypress":
      return t.which !== 32 ? null : ((Uc = !0), zc);
    case "textInput":
      return (e = t.data), e === zc && Uc ? null : e;
    default:
      return null;
  }
}
function H0(e, t) {
  if (zn)
    return e === "compositionend" || (!lu && Jh(e, t))
      ? ((e = Xh()), (co = ou = _t = null), (zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Zh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var K0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Qc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!K0[e.type] : t === "textarea";
}
function $h(e, t, n, r) {
  Mh(r),
    (t = Lo(t, "onChange")),
    0 < t.length &&
      ((n = new su("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Xr = null,
  ci = null;
function G0(e) {
  up(e, 0);
}
function ds(e) {
  var t = _n(e);
  if (xh(t)) return e;
}
function Y0(e, t) {
  if (e === "change") return t;
}
var bh = !1;
if (Dt) {
  var Ys;
  if (Dt) {
    var Xs = "oninput" in document;
    if (!Xs) {
      var _c = document.createElement("div");
      _c.setAttribute("oninput", "return;"),
        (Xs = typeof _c.oninput == "function");
    }
    Ys = Xs;
  } else Ys = !1;
  bh = Ys && (!document.documentMode || 9 < document.documentMode);
}
function Wc() {
  Xr && (Xr.detachEvent("onpropertychange", ep), (ci = Xr = null));
}
function ep(e) {
  if (e.propertyName === "value" && ds(ci)) {
    var t = [];
    $h(t, ci, e, eu(e)), Nh(G0, t);
  }
}
function X0(e, t, n) {
  e === "focusin"
    ? (Wc(), (Xr = t), (ci = n), Xr.attachEvent("onpropertychange", ep))
    : e === "focusout" && Wc();
}
function Z0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ds(ci);
}
function J0(e, t) {
  if (e === "click") return ds(t);
}
function q0(e, t) {
  if (e === "input" || e === "change") return ds(t);
}
function $0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var it = typeof Object.is == "function" ? Object.is : $0;
function fi(e, t) {
  if (it(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ta.call(t, i) || !it(e[i], t[i])) return !1;
  }
  return !0;
}
function Hc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Kc(e, t) {
  var n = Hc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hc(n);
  }
}
function tp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? tp(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function np() {
  for (var e = window, t = Do(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Do(e.document);
  }
  return t;
}
function uu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function b0(e) {
  var t = np(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    tp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && uu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Kc(n, o));
        var s = Kc(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ev = Dt && "documentMode" in document && 11 >= document.documentMode,
  Un = null,
  Ga = null,
  Zr = null,
  Ya = !1;
function Gc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ya ||
    Un == null ||
    Un !== Do(r) ||
    ((r = Un),
    "selectionStart" in r && uu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zr && fi(Zr, r)) ||
      ((Zr = r),
      (r = Lo(Ga, "onSelect")),
      0 < r.length &&
        ((t = new su("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Un))));
}
function Yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Qn = {
    animationend: Yi("Animation", "AnimationEnd"),
    animationiteration: Yi("Animation", "AnimationIteration"),
    animationstart: Yi("Animation", "AnimationStart"),
    transitionend: Yi("Transition", "TransitionEnd"),
  },
  Zs = {},
  rp = {};
Dt &&
  ((rp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Qn.animationend.animation,
    delete Qn.animationiteration.animation,
    delete Qn.animationstart.animation),
  "TransitionEvent" in window || delete Qn.transitionend.transition);
function hs(e) {
  if (Zs[e]) return Zs[e];
  if (!Qn[e]) return e;
  var t = Qn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in rp) return (Zs[e] = t[n]);
  return e;
}
var ip = hs("animationend"),
  op = hs("animationiteration"),
  sp = hs("animationstart"),
  ap = hs("transitionend"),
  lp = new Map(),
  Yc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function on(e, t) {
  lp.set(e, t), Vn(t, [e]);
}
for (var Js = 0; Js < Yc.length; Js++) {
  var qs = Yc[Js],
    tv = qs.toLowerCase(),
    nv = qs[0].toUpperCase() + qs.slice(1);
  on(tv, "on" + nv);
}
on(ip, "onAnimationEnd");
on(op, "onAnimationIteration");
on(sp, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(ap, "onTransitionEnd");
ar("onMouseEnter", ["mouseout", "mouseover"]);
ar("onMouseLeave", ["mouseout", "mouseover"]);
ar("onPointerEnter", ["pointerout", "pointerover"]);
ar("onPointerLeave", ["pointerout", "pointerover"]);
Vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Qr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  rv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));
function Xc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), t0(r, t, void 0, e), (e.currentTarget = null);
}
function up(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Xc(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Xc(i, a, u), (o = l);
        }
    }
  }
  if (Ro) throw ((e = _a), (Ro = !1), (_a = null), e);
}
function H(e, t) {
  var n = t[$a];
  n === void 0 && (n = t[$a] = new Set());
  var r = e + "__bubble";
  n.has(r) || (cp(t, e, 2, !1), n.add(r));
}
function $s(e, t, n) {
  var r = 0;
  t && (r |= 4), cp(n, e, r, t);
}
var Xi = "_reactListening" + Math.random().toString(36).slice(2);
function di(e) {
  if (!e[Xi]) {
    (e[Xi] = !0),
      yh.forEach(function (n) {
        n !== "selectionchange" && (rv.has(n) || $s(n, !1, e), $s(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xi] || ((t[Xi] = !0), $s("selectionchange", !1, t));
  }
}
function cp(e, t, n, r) {
  switch (Yh(t)) {
    case 1:
      var i = y0;
      break;
    case 4:
      i = v0;
      break;
    default:
      i = iu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
}
function bs(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = vn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Nh(function () {
    var u = o,
      c = eu(n),
      f = [];
    e: {
      var d = lp.get(e);
      if (d !== void 0) {
        var g = su,
          y = e;
        switch (e) {
          case "keypress":
            if (fo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = N0;
            break;
          case "focusin":
            (y = "focus"), (g = Gs);
            break;
          case "focusout":
            (y = "blur"), (g = Gs);
            break;
          case "beforeblur":
          case "afterblur":
            g = Gs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Fc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = S0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = F0;
            break;
          case ip:
          case op:
          case sp:
            g = k0;
            break;
          case ap:
            g = j0;
            break;
          case "scroll":
            g = A0;
            break;
          case "wheel":
            g = U0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = E0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = jc;
        }
        var v = (t & 4) !== 0,
          C = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var A = m.stateNode;
          if (
            (m.tag === 5 &&
              A !== null &&
              ((m = A),
              p !== null && ((A = si(h, p)), A != null && v.push(hi(h, A, m)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== za &&
            (y = n.relatedTarget || n.fromElement) &&
            (vn(y) || y[Mt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? vn(y) : null),
              y !== null &&
                ((C = Nn(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Fc),
            (A = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = jc),
              (A = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (C = g == null ? d : _n(g)),
            (m = y == null ? d : _n(y)),
            (d = new v(A, h + "leave", g, n, c)),
            (d.target = C),
            (d.relatedTarget = m),
            (A = null),
            vn(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = C),
              (A = v)),
            (C = A),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = Ln(m)) h++;
              for (m = 0, A = p; A; A = Ln(A)) m++;
              for (; 0 < h - m; ) (v = Ln(v)), h--;
              for (; 0 < m - h; ) (p = Ln(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Ln(v)), (p = Ln(p));
              }
              v = null;
            }
          else v = null;
          g !== null && Zc(f, d, g, v, !1),
            y !== null && C !== null && Zc(f, C, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? _n(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var w = Y0;
        else if (Qc(d))
          if (bh) w = q0;
          else {
            w = Z0;
            var x = X0;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = J0);
        if (w && (w = w(e, u))) {
          $h(f, w, n, c);
          break e;
        }
        x && x(e, d, u),
          e === "focusout" &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === "number" &&
            Ia(d, "number", d.value);
      }
      switch (((x = u ? _n(u) : window), e)) {
        case "focusin":
          (Qc(x) || x.contentEditable === "true") &&
            ((Un = x), (Ga = u), (Zr = null));
          break;
        case "focusout":
          Zr = Ga = Un = null;
          break;
        case "mousedown":
          Ya = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ya = !1), Gc(f, n, c);
          break;
        case "selectionchange":
          if (ev) break;
        case "keydown":
        case "keyup":
          Gc(f, n, c);
      }
      var S;
      if (lu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        zn
          ? Jh(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (Zh &&
          n.locale !== "ko" &&
          (zn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && zn && (S = Xh())
            : ((_t = c),
              (ou = "value" in _t ? _t.value : _t.textContent),
              (zn = !0))),
        (x = Lo(u, P)),
        0 < x.length &&
          ((P = new Oc(P, e, null, n, c)),
          f.push({ event: P, listeners: x }),
          S ? (P.data = S) : ((S = qh(n)), S !== null && (P.data = S)))),
        (S = _0 ? W0(e, n) : H0(e, n)) &&
          ((u = Lo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Oc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = S)));
    }
    up(f, t);
  });
}
function hi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Lo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = si(e, n)),
      o != null && r.unshift(hi(e, o, i)),
      (o = si(e, t)),
      o != null && r.push(hi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = si(n, o)), l != null && s.unshift(hi(n, l, a)))
        : i || ((l = si(n, o)), l != null && s.push(hi(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var iv = /\r\n?/g,
  ov = /\u0000|\uFFFD/g;
function Jc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      iv,
      `
`,
    )
    .replace(ov, "");
}
function Zi(e, t, n) {
  if (((t = Jc(t)), Jc(e) !== t && n)) throw Error(k(425));
}
function Fo() {}
var Xa = null,
  Za = null;
function Ja(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qa = typeof setTimeout == "function" ? setTimeout : void 0,
  sv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  qc = typeof Promise == "function" ? Promise : void 0,
  av =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof qc < "u"
        ? function (e) {
            return qc.resolve(null).then(e).catch(lv);
          }
        : qa;
function lv(e) {
  setTimeout(function () {
    throw e;
  });
}
function ea(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ui(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ui(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $c(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var kr = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + kr,
  pi = "__reactProps$" + kr,
  Mt = "__reactContainer$" + kr,
  $a = "__reactEvents$" + kr,
  uv = "__reactListeners$" + kr,
  cv = "__reactHandles$" + kr;
function vn(e) {
  var t = e[ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $c(e); e !== null; ) {
          if ((n = e[ut])) return n;
          e = $c(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Bi(e) {
  return (
    (e = e[ut] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function _n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function ps(e) {
  return e[pi] || null;
}
var ba = [],
  Wn = -1;
function sn(e) {
  return { current: e };
}
function G(e) {
  0 > Wn || ((e.current = ba[Wn]), (ba[Wn] = null), Wn--);
}
function W(e, t) {
  Wn++, (ba[Wn] = e.current), (e.current = t);
}
var en = {},
  xe = sn(en),
  Me = sn(!1),
  Tn = en;
function lr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return en;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Re(e) {
  return (e = e.childContextTypes), e != null;
}
function Oo() {
  G(Me), G(xe);
}
function bc(e, t, n) {
  if (xe.current !== en) throw Error(k(168));
  W(xe, t), W(Me, n);
}
function fp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, Xy(e) || "Unknown", i));
  return $({}, n, r);
}
function jo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || en),
    (Tn = xe.current),
    W(xe, e),
    W(Me, Me.current),
    !0
  );
}
function ef(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = fp(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Me),
      G(xe),
      W(xe, e))
    : G(Me),
    W(Me, n);
}
var vt = null,
  ms = !1,
  ta = !1;
function dp(e) {
  vt === null ? (vt = [e]) : vt.push(e);
}
function fv(e) {
  (ms = !0), dp(e);
}
function an() {
  if (!ta && vt !== null) {
    ta = !0;
    var e = 0,
      t = z;
    try {
      var n = vt;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (vt = null), (ms = !1);
    } catch (i) {
      throw (vt !== null && (vt = vt.slice(e + 1)), Oh(tu, an), i);
    } finally {
      (z = t), (ta = !1);
    }
  }
  return null;
}
var Hn = [],
  Kn = 0,
  zo = null,
  Uo = 0,
  We = [],
  He = 0,
  Dn = null,
  wt = 1,
  St = "";
function pn(e, t) {
  (Hn[Kn++] = Uo), (Hn[Kn++] = zo), (zo = e), (Uo = t);
}
function hp(e, t, n) {
  (We[He++] = wt), (We[He++] = St), (We[He++] = Dn), (Dn = e);
  var r = wt;
  e = St;
  var i = 32 - tt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - tt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (wt = (1 << (32 - tt(t) + i)) | (n << i) | r),
      (St = o + e);
  } else (wt = (1 << o) | (n << i) | r), (St = e);
}
function cu(e) {
  e.return !== null && (pn(e, 1), hp(e, 1, 0));
}
function fu(e) {
  for (; e === zo; )
    (zo = Hn[--Kn]), (Hn[Kn] = null), (Uo = Hn[--Kn]), (Hn[Kn] = null);
  for (; e === Dn; )
    (Dn = We[--He]),
      (We[He] = null),
      (St = We[--He]),
      (We[He] = null),
      (wt = We[--He]),
      (We[He] = null);
}
var Fe = null,
  Le = null,
  Y = !1,
  et = null;
function pp(e, t) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function tf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Fe = e), (Le = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Fe = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dn !== null ? { id: wt, overflow: St } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Fe = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function el(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tl(e) {
  if (Y) {
    var t = Le;
    if (t) {
      var n = t;
      if (!tf(e, t)) {
        if (el(e)) throw Error(k(418));
        t = Yt(n.nextSibling);
        var r = Fe;
        t && tf(e, t)
          ? pp(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Y = !1), (Fe = e));
      }
    } else {
      if (el(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (Y = !1), (Fe = e);
    }
  }
}
function nf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Fe = e;
}
function Ji(e) {
  if (e !== Fe) return !1;
  if (!Y) return nf(e), (Y = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ja(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (el(e)) throw (mp(), Error(k(418)));
    for (; t; ) pp(e, t), (t = Yt(t.nextSibling));
  }
  if ((nf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = Fe ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function mp() {
  for (var e = Le; e; ) e = Yt(e.nextSibling);
}
function ur() {
  (Le = Fe = null), (Y = !1);
}
function du(e) {
  et === null ? (et = [e]) : et.push(e);
}
var dv = Vt.ReactCurrentBatchConfig;
function Ir(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function qi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function rf(e) {
  var t = e._init;
  return t(e._payload);
}
function gp(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = qt(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, A) {
    return h === null || h.tag !== 6
      ? ((h = la(m, p.mode, A)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, A) {
    var w = m.type;
    return w === jn
      ? c(p, h, m.props.children, A, m.key)
      : h !== null &&
          (h.elementType === w ||
            (typeof w == "object" &&
              w !== null &&
              w.$$typeof === jt &&
              rf(w) === h.type))
        ? ((A = i(h, m.props)), (A.ref = Ir(p, h, m)), (A.return = p), A)
        : ((A = Ao(m.type, m.key, m.props, null, p.mode, A)),
          (A.ref = Ir(p, h, m)),
          (A.return = p),
          A);
  }
  function u(p, h, m, A) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = ua(m, p.mode, A)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, A, w) {
    return h === null || h.tag !== 7
      ? ((h = kn(m, p.mode, A, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = la("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ui:
          return (
            (m = Ao(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = Ir(p, null, h)),
            (m.return = p),
            m
          );
        case On:
          return (h = ua(h, p.mode, m)), (h.return = p), h;
        case jt:
          var A = h._init;
          return f(p, A(h._payload), m);
      }
      if (zr(h) || Mr(h))
        return (h = kn(h, p.mode, m, null)), (h.return = p), h;
      qi(p, h);
    }
    return null;
  }
  function d(p, h, m, A) {
    var w = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return w !== null ? null : a(p, h, "" + m, A);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ui:
          return m.key === w ? l(p, h, m, A) : null;
        case On:
          return m.key === w ? u(p, h, m, A) : null;
        case jt:
          return (w = m._init), d(p, h, w(m._payload), A);
      }
      if (zr(m) || Mr(m)) return w !== null ? null : c(p, h, m, A, null);
      qi(p, m);
    }
    return null;
  }
  function g(p, h, m, A, w) {
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return (p = p.get(m) || null), a(h, p, "" + A, w);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case Ui:
          return (p = p.get(A.key === null ? m : A.key) || null), l(h, p, A, w);
        case On:
          return (p = p.get(A.key === null ? m : A.key) || null), u(h, p, A, w);
        case jt:
          var x = A._init;
          return g(p, h, m, x(A._payload), w);
      }
      if (zr(A) || Mr(A)) return (p = p.get(m) || null), c(h, p, A, w, null);
      qi(h, A);
    }
    return null;
  }
  function y(p, h, m, A) {
    for (
      var w = null, x = null, S = h, P = (h = 0), L = null;
      S !== null && P < m.length;
      P++
    ) {
      S.index > P ? ((L = S), (S = null)) : (L = S.sibling);
      var R = d(p, S, m[P], A);
      if (R === null) {
        S === null && (S = L);
        break;
      }
      e && S && R.alternate === null && t(p, S),
        (h = o(R, h, P)),
        x === null ? (w = R) : (x.sibling = R),
        (x = R),
        (S = L);
    }
    if (P === m.length) return n(p, S), Y && pn(p, P), w;
    if (S === null) {
      for (; P < m.length; P++)
        (S = f(p, m[P], A)),
          S !== null &&
            ((h = o(S, h, P)), x === null ? (w = S) : (x.sibling = S), (x = S));
      return Y && pn(p, P), w;
    }
    for (S = r(p, S); P < m.length; P++)
      (L = g(S, p, P, m[P], A)),
        L !== null &&
          (e && L.alternate !== null && S.delete(L.key === null ? P : L.key),
          (h = o(L, h, P)),
          x === null ? (w = L) : (x.sibling = L),
          (x = L));
    return (
      e &&
        S.forEach(function (re) {
          return t(p, re);
        }),
      Y && pn(p, P),
      w
    );
  }
  function v(p, h, m, A) {
    var w = Mr(m);
    if (typeof w != "function") throw Error(k(150));
    if (((m = w.call(m)), m == null)) throw Error(k(151));
    for (
      var x = (w = null), S = h, P = (h = 0), L = null, R = m.next();
      S !== null && !R.done;
      P++, R = m.next()
    ) {
      S.index > P ? ((L = S), (S = null)) : (L = S.sibling);
      var re = d(p, S, R.value, A);
      if (re === null) {
        S === null && (S = L);
        break;
      }
      e && S && re.alternate === null && t(p, S),
        (h = o(re, h, P)),
        x === null ? (w = re) : (x.sibling = re),
        (x = re),
        (S = L);
    }
    if (R.done) return n(p, S), Y && pn(p, P), w;
    if (S === null) {
      for (; !R.done; P++, R = m.next())
        (R = f(p, R.value, A)),
          R !== null &&
            ((h = o(R, h, P)), x === null ? (w = R) : (x.sibling = R), (x = R));
      return Y && pn(p, P), w;
    }
    for (S = r(p, S); !R.done; P++, R = m.next())
      (R = g(S, p, P, R.value, A)),
        R !== null &&
          (e && R.alternate !== null && S.delete(R.key === null ? P : R.key),
          (h = o(R, h, P)),
          x === null ? (w = R) : (x.sibling = R),
          (x = R));
    return (
      e &&
        S.forEach(function (ot) {
          return t(p, ot);
        }),
      Y && pn(p, P),
      w
    );
  }
  function C(p, h, m, A) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === jn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ui:
          e: {
            for (var w = m.key, x = h; x !== null; ) {
              if (x.key === w) {
                if (((w = m.type), w === jn)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (h = i(x, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  x.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === jt &&
                    rf(w) === x.type)
                ) {
                  n(p, x.sibling),
                    (h = i(x, m.props)),
                    (h.ref = Ir(p, x, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            m.type === jn
              ? ((h = kn(m.props.children, p.mode, A, m.key)),
                (h.return = p),
                (p = h))
              : ((A = Ao(m.type, m.key, m.props, null, p.mode, A)),
                (A.ref = Ir(p, h, m)),
                (A.return = p),
                (p = A));
          }
          return s(p);
        case On:
          e: {
            for (x = m.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = ua(m, p.mode, A)), (h.return = p), (p = h);
          }
          return s(p);
        case jt:
          return (x = m._init), C(p, h, x(m._payload), A);
      }
      if (zr(m)) return y(p, h, m, A);
      if (Mr(m)) return v(p, h, m, A);
      qi(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = la(m, p.mode, A)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return C;
}
var cr = gp(!0),
  yp = gp(!1),
  Qo = sn(null),
  _o = null,
  Gn = null,
  hu = null;
function pu() {
  hu = Gn = _o = null;
}
function mu(e) {
  var t = Qo.current;
  G(Qo), (e._currentValue = t);
}
function nl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function or(e, t) {
  (_o = e),
    (hu = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Ye(e) {
  var t = e._currentValue;
  if (hu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (_o === null) throw Error(k(308));
      (Gn = e), (_o.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var An = null;
function gu(e) {
  An === null ? (An = [e]) : An.push(e);
}
function vp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), gu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Rt(e, r)
  );
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var zt = !1;
function yu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ap(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), gu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Rt(e, n)
  );
}
function ho(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n);
  }
}
function of(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Wo(e, t, n, r) {
  var i = e.updateQueue;
  zt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = $({}, f, d);
              break e;
            case 2:
              zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Rn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function sf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Vi = {},
  ft = sn(Vi),
  mi = sn(Vi),
  gi = sn(Vi);
function wn(e) {
  if (e === Vi) throw Error(k(174));
  return e;
}
function vu(e, t) {
  switch ((W(gi, t), W(mi, e), W(ft, Vi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Fa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Fa(t, e));
  }
  G(ft), W(ft, t);
}
function fr() {
  G(ft), G(mi), G(gi);
}
function wp(e) {
  wn(gi.current);
  var t = wn(ft.current),
    n = Fa(t, e.type);
  t !== n && (W(mi, e), W(ft, n));
}
function Au(e) {
  mi.current === e && (G(ft), G(mi));
}
var Z = sn(0);
function Ho(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var na = [];
function wu() {
  for (var e = 0; e < na.length; e++)
    na[e]._workInProgressVersionPrimary = null;
  na.length = 0;
}
var po = Vt.ReactCurrentDispatcher,
  ra = Vt.ReactCurrentBatchConfig,
  Mn = 0,
  q = null,
  se = null,
  le = null,
  Ko = !1,
  Jr = !1,
  yi = 0,
  hv = 0;
function me() {
  throw Error(k(321));
}
function Su(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1;
  return !0;
}
function xu(e, t, n, r, i, o) {
  if (
    ((Mn = o),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (po.current = e === null || e.memoizedState === null ? yv : vv),
    (e = n(r, i)),
    Jr)
  ) {
    o = 0;
    do {
      if (((Jr = !1), (yi = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (le = se = null),
        (t.updateQueue = null),
        (po.current = Av),
        (e = n(r, i));
    } while (Jr);
  }
  if (
    ((po.current = Go),
    (t = se !== null && se.next !== null),
    (Mn = 0),
    (le = se = q = null),
    (Ko = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Cu() {
  var e = yi !== 0;
  return (yi = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (q.memoizedState = le = e) : (le = le.next = e), le;
}
function Xe() {
  if (se === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = le === null ? q.memoizedState : le.next;
  if (t !== null) (le = t), (se = e);
  else {
    if (e === null) throw Error(k(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      le === null ? (q.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function vi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ia(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Mn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (q.lanes |= c),
          (Rn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      it(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (q.lanes |= o), (Rn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oa(e) {
  var t = Xe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    it(o, t.memoizedState) || (De = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Sp() {}
function xp(e, t) {
  var n = q,
    r = Xe(),
    i = t(),
    o = !it(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (De = !0)),
    (r = r.queue),
    ku(Pp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ai(9, kp.bind(null, n, r, i, t), void 0, null),
      ce === null)
    )
      throw Error(k(349));
    Mn & 30 || Cp(n, t, i);
  }
  return i;
}
function Cp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ep(t) && Tp(e);
}
function Pp(e, t, n) {
  return n(function () {
    Ep(t) && Tp(e);
  });
}
function Ep(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !it(e, n);
  } catch {
    return !0;
  }
}
function Tp(e) {
  var t = Rt(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function af(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gv.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function Ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Dp() {
  return Xe().memoizedState;
}
function mo(e, t, n, r) {
  var i = at();
  (q.flags |= e),
    (i.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r));
}
function gs(e, t, n, r) {
  var i = Xe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var s = se.memoizedState;
    if (((o = s.destroy), r !== null && Su(r, s.deps))) {
      i.memoizedState = Ai(t, n, o, r);
      return;
    }
  }
  (q.flags |= e), (i.memoizedState = Ai(1 | t, n, o, r));
}
function lf(e, t) {
  return mo(8390656, 8, e, t);
}
function ku(e, t) {
  return gs(2048, 8, e, t);
}
function Mp(e, t) {
  return gs(4, 2, e, t);
}
function Rp(e, t) {
  return gs(4, 4, e, t);
}
function Bp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), gs(4, 4, Bp.bind(null, t, e), n)
  );
}
function Pu() {}
function Np(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ip(e, t) {
  var n = Xe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Su(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Lp(e, t, n) {
  return Mn & 21
    ? (it(n, t) || ((n = Uh()), (q.lanes |= n), (Rn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function pv(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ra.transition;
  ra.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (ra.transition = r);
  }
}
function Fp() {
  return Xe().memoizedState;
}
function mv(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Op(e))
  )
    jp(t, n);
  else if (((n = vp(e, t, n, r)), n !== null)) {
    var i = ke();
    nt(n, e, r, i), zp(n, t, r);
  }
}
function gv(e, t, n) {
  var r = Jt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Op(e)) jp(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), it(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), gu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = vp(e, t, i, r)),
      n !== null && ((i = ke()), nt(n, e, r, i), zp(n, t, r));
  }
}
function Op(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function jp(e, t) {
  Jr = Ko = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function zp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n);
  }
}
var Go = {
    readContext: Ye,
    useCallback: me,
    useContext: me,
    useEffect: me,
    useImperativeHandle: me,
    useInsertionEffect: me,
    useLayoutEffect: me,
    useMemo: me,
    useReducer: me,
    useRef: me,
    useState: me,
    useDebugValue: me,
    useDeferredValue: me,
    useTransition: me,
    useMutableSource: me,
    useSyncExternalStore: me,
    useId: me,
    unstable_isNewReconciler: !1,
  },
  yv = {
    readContext: Ye,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ye,
    useEffect: lf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        mo(4194308, 4, Bp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return mo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return mo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = mv.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: af,
    useDebugValue: Pu,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = af(!1),
        t = e[0];
      return (e = pv.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        i = at();
      if (Y) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ce === null)) throw Error(k(349));
        Mn & 30 || Cp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        lf(Pp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ai(9, kp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = ce.identifierPrefix;
      if (Y) {
        var n = St,
          r = wt;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = yi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = hv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vv = {
    readContext: Ye,
    useCallback: Np,
    useContext: Ye,
    useEffect: ku,
    useImperativeHandle: Vp,
    useInsertionEffect: Mp,
    useLayoutEffect: Rp,
    useMemo: Ip,
    useReducer: ia,
    useRef: Dp,
    useState: function () {
      return ia(vi);
    },
    useDebugValue: Pu,
    useDeferredValue: function (e) {
      var t = Xe();
      return Lp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = ia(vi)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Sp,
    useSyncExternalStore: xp,
    useId: Fp,
    unstable_isNewReconciler: !1,
  },
  Av = {
    readContext: Ye,
    useCallback: Np,
    useContext: Ye,
    useEffect: ku,
    useImperativeHandle: Vp,
    useInsertionEffect: Mp,
    useLayoutEffect: Rp,
    useMemo: Ip,
    useReducer: oa,
    useRef: Dp,
    useState: function () {
      return oa(vi);
    },
    useDebugValue: Pu,
    useDeferredValue: function (e) {
      var t = Xe();
      return se === null ? (t.memoizedState = e) : Lp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(vi)[0],
        t = Xe().memoizedState;
      return [e, t];
    },
    useMutableSource: Sp,
    useSyncExternalStore: xp,
    useId: Fp,
    unstable_isNewReconciler: !1,
  };
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function rl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ys = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Jt(e),
      o = Ct(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, i)),
      t !== null && (nt(t, e, i, r), ho(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Jt(e),
      o = Ct(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, i)),
      t !== null && (nt(t, e, i, r), ho(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Jt(e),
      i = Ct(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Xt(e, i, r)),
      t !== null && (nt(t, e, r, n), ho(t, e, r));
  },
};
function uf(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !fi(n, r) || !fi(i, o)
        : !0
  );
}
function Up(e, t, n) {
  var r = !1,
    i = en,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ye(o))
      : ((i = Re(t) ? Tn : xe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? lr(e, i) : en)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ys),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function cf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ys.enqueueReplaceState(t, t.state, null);
}
function il(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), yu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ye(o))
    : ((o = Re(t) ? Tn : xe.current), (i.context = lr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (rl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ys.enqueueReplaceState(i, i.state, null),
      Wo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Yy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function sa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ol(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wv = typeof WeakMap == "function" ? WeakMap : Map;
function Qp(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xo || ((Xo = !0), (ml = r)), ol(e, t);
    }),
    n
  );
}
function _p(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ol(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ol(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ff(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Iv.bind(null, e, t, n)), t.then(e, e));
}
function df(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Sv = Vt.ReactCurrentOwner,
  De = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? yp(t, null, n, r) : cr(t, e.child, n, r);
}
function pf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    or(t, i),
    (r = xu(e, t, n, r, o, i)),
    (n = Cu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (Y && n && cu(t), (t.flags |= 1), Ce(e, t, r, i), t.child)
  );
}
function mf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Nu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Wp(e, t, o, r, i))
      : ((e = Ao(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : fi), n(s, r) && e.ref === t.ref)
    )
      return Bt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = qt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Wp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (fi(o, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), Bt(e, t, i);
  }
  return sl(e, t, n, r, i);
}
function Hp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(Xn, Ie),
        (Ie |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(Xn, Ie),
          (Ie |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        W(Xn, Ie),
        (Ie |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(Xn, Ie),
      (Ie |= r);
  return Ce(e, t, i, n), t.child;
}
function Kp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function sl(e, t, n, r, i) {
  var o = Re(n) ? Tn : xe.current;
  return (
    (o = lr(t, o)),
    or(t, i),
    (n = xu(e, t, n, r, o, i)),
    (r = Cu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (Y && r && cu(t), (t.flags |= 1), Ce(e, t, n, i), t.child)
  );
}
function gf(e, t, n, r, i) {
  if (Re(n)) {
    var o = !0;
    jo(t);
  } else o = !1;
  if ((or(t, i), t.stateNode === null))
    go(e, t), Up(t, n, r), il(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ye(u))
      : ((u = Re(n) ? Tn : xe.current), (u = lr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && cf(t, s, r, u)),
      (zt = !1);
    var d = t.memoizedState;
    (s.state = d),
      Wo(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Me.current || zt
        ? (typeof c == "function" && (rl(t, n, c, r), (l = t.memoizedState)),
          (a = zt || uf(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ap(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : $e(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Ye(l))
        : ((l = Re(n) ? Tn : xe.current), (l = lr(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && cf(t, s, r, l)),
      (zt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Wo(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Me.current || zt
      ? (typeof g == "function" && (rl(t, n, g, r), (y = t.memoizedState)),
        (u = zt || uf(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return al(e, t, n, r, o, i);
}
function al(e, t, n, r, i, o) {
  Kp(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ef(t, n, !1), Bt(e, t, o);
  (r = t.stateNode), (Sv.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = cr(t, e.child, null, o)), (t.child = cr(t, null, a, o)))
      : Ce(e, t, a, o),
    (t.memoizedState = r.state),
    i && ef(t, n, !0),
    t.child
  );
}
function Gp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? bc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && bc(e, t.context, !1),
    vu(e, t.containerInfo);
}
function yf(e, t, n, r, i) {
  return ur(), du(i), (t.flags |= 256), Ce(e, t, n, r), t.child;
}
var ll = { dehydrated: null, treeContext: null, retryLane: 0 };
function ul(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yp(e, t, n) {
  var r = t.pendingProps,
    i = Z.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(Z, i & 1),
    e === null)
  )
    return (
      tl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = ws(s, r, 0, null)),
              (e = kn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ul(n)),
              (t.memoizedState = ll),
              e)
            : Eu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return xv(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = qt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = qt(a, o)) : ((o = kn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ul(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ll),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = qt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eu(e, t) {
  return (
    (t = ws({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function $i(e, t, n, r) {
  return (
    r !== null && du(r),
    cr(t, e.child, null, n),
    (e = Eu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function xv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = sa(Error(k(422)))), $i(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ws({ mode: "visible", children: r.children }, i, 0, null)),
          (o = kn(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && cr(t, e.child, null, s),
          (t.child.memoizedState = ul(s)),
          (t.memoizedState = ll),
          o);
  if (!(t.mode & 1)) return $i(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(k(419))), (r = sa(o, r, void 0)), $i(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), De || a)) {
    if (((r = ce), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Rt(e, i), nt(r, e, i, -1));
    }
    return Vu(), (r = sa(Error(k(421)))), $i(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Lv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Le = Yt(i.nextSibling)),
      (Fe = t),
      (Y = !0),
      (et = null),
      e !== null &&
        ((We[He++] = wt),
        (We[He++] = St),
        (We[He++] = Dn),
        (wt = e.id),
        (St = e.overflow),
        (Dn = t)),
      (t = Eu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function vf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nl(e.return, t, n);
}
function aa(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Xp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ce(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vf(e, n, t);
        else if (e.tag === 19) vf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((W(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ho(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          aa(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ho(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        aa(t, !0, n, null, o);
        break;
      case "together":
        aa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function go(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Rn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cv(e, t, n) {
  switch (t.tag) {
    case 3:
      Gp(t), ur();
      break;
    case 5:
      wp(t);
      break;
    case 1:
      Re(t.type) && jo(t);
      break;
    case 4:
      vu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      W(Qo, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Yp(e, t, n)
            : (W(Z, Z.current & 1),
              (e = Bt(e, t, n)),
              e !== null ? e.sibling : null);
      W(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Xp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Hp(e, t, n);
  }
  return Bt(e, t, n);
}
var Zp, cl, Jp, qp;
Zp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cl = function () {};
Jp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), wn(ft.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Va(e, i)), (r = Va(e, r)), (o = []);
        break;
      case "select":
        (i = $({}, i, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = La(e, i)), (r = La(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fo);
    }
    Oa(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ii.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ii.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && H("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
qp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
  if (!Y)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function kv(e, t, n) {
  var r = t.pendingProps;
  switch ((fu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return Re(t.type) && Oo(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fr(),
        G(Me),
        G(xe),
        wu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ji(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (vl(et), (et = null)))),
        cl(e, t),
        ge(t),
        null
      );
    case 5:
      Au(t);
      var i = wn(gi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Jp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ge(t), null;
        }
        if (((e = wn(ft.current)), Ji(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ut] = t), (r[pi] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Qr.length; i++) H(Qr[i], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Ec(r, o), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Dc(r, o), H("invalid", r);
          }
          Oa(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Zi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Zi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ii.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Qi(r), Tc(r, o, !0);
              break;
            case "textarea":
              Qi(r), Mc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ph(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ut] = t),
            (e[pi] = r),
            Zp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ja(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Qr.length; i++) H(Qr[i], e);
                i = r;
                break;
              case "source":
                H("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (i = r);
                break;
              case "details":
                H("toggle", e), (i = r);
                break;
              case "input":
                Ec(e, r), (i = Va(e, r)), H("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = $({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                Dc(e, r), (i = La(e, r)), H("invalid", e);
                break;
              default:
                i = r;
            }
            Oa(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Dh(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Eh(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && oi(e, l)
                        : typeof l == "number" && oi(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ii.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && H("scroll", e)
                          : l != null && Jl(e, o, l, s));
              }
            switch (n) {
              case "input":
                Qi(e), Tc(e, r, !1);
                break;
              case "textarea":
                Qi(e), Mc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + bt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? tr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      tr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Fo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) qp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = wn(gi.current)), wn(ft.current), Ji(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ut] = t),
            (o = r.nodeValue !== n) && ((e = Fe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Zi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Zi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (G(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Y && Le !== null && t.mode & 1 && !(t.flags & 128))
          mp(), ur(), (t.flags |= 98560), (o = !1);
        else if (((o = Ji(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[ut] = t;
          } else
            ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (o = !1);
        } else et !== null && (vl(et), (et = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ae === 0 && (ae = 3) : Vu())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        fr(), cl(e, t), e === null && di(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return mu(t.type._context), ge(t), null;
    case 17:
      return Re(t.type) && Oo(), ge(t), null;
    case 19:
      if ((G(Z), (o = t.memoizedState), o === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Lr(o, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Ho(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Lr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return W(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ne() > hr &&
            ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ho(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Y)
            )
              return ge(t), null;
          } else
            2 * ne() - o.renderingStartTime > hr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ne()),
          (t.sibling = null),
          (n = Z.current),
          W(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Bu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ie & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Pv(e, t) {
  switch ((fu(t), t.tag)) {
    case 1:
      return (
        Re(t.type) && Oo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fr(),
        G(Me),
        G(xe),
        wu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Au(t), null;
    case 13:
      if ((G(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(Z), null;
    case 4:
      return fr(), null;
    case 10:
      return mu(t.type._context), null;
    case 22:
    case 23:
      return Bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var bi = !1,
  ve = !1,
  Ev = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function Yn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function fl(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var Af = !1;
function Tv(e, t) {
  if (((Xa = No), (e = np()), uu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Za = { focusedElem: e, selectionRange: n }, No = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    C = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : $e(t.type, v),
                      C,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (A) {
          b(t, t.return, A);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (y = Af), (Af = !1), y;
}
function qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && fl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function vs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function dl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function $p(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), $p(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ut], delete t[pi], delete t[$a], delete t[uv], delete t[cv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function bp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hl(e, t, n), e = e.sibling; e !== null; ) hl(e, t, n), (e = e.sibling);
}
function pl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pl(e, t, n), e = e.sibling; e !== null; ) pl(e, t, n), (e = e.sibling);
}
var fe = null,
  be = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) em(e, t, n), (n = n.sibling);
}
function em(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(cs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || Yn(n, t);
    case 6:
      var r = fe,
        i = be;
      (fe = null),
        Lt(e, t, n),
        (fe = r),
        (be = i),
        fe !== null &&
          (be
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode));
      break;
    case 18:
      fe !== null &&
        (be
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ea(e.parentNode, n)
              : e.nodeType === 1 && ea(e, n),
            ui(e))
          : ea(fe, n.stateNode));
      break;
    case 4:
      (r = fe),
        (i = be),
        (fe = n.stateNode.containerInfo),
        (be = !0),
        Lt(e, t, n),
        (fe = r),
        (be = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && fl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (Yn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          b(n, t, a);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Lt(e, t, n), (ve = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function Sf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ev()),
      t.forEach(function (r) {
        var i = Fv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (fe = a.stateNode), (be = !1);
              break e;
            case 3:
              (fe = a.stateNode.containerInfo), (be = !0);
              break e;
            case 4:
              (fe = a.stateNode.containerInfo), (be = !0);
              break e;
          }
          a = a.return;
        }
        if (fe === null) throw Error(k(160));
        em(o, s, i), (fe = null), (be = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        b(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) tm(t, e), (t = t.sibling);
}
function tm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(t, e), st(e), r & 4)) {
        try {
          qr(3, e, e.return), vs(3, e);
        } catch (v) {
          b(e, e.return, v);
        }
        try {
          qr(5, e, e.return);
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 1:
      qe(t, e), st(e), r & 512 && n !== null && Yn(n, n.return);
      break;
    case 5:
      if (
        (qe(t, e),
        st(e),
        r & 512 && n !== null && Yn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          oi(i, "");
        } catch (v) {
          b(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Ch(i, o),
              ja(a, s);
            var u = ja(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Dh(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Eh(i, f)
                  : c === "children"
                    ? oi(i, f)
                    : Jl(i, c, f, u);
            }
            switch (a) {
              case "input":
                Na(i, o);
                break;
              case "textarea":
                kh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? tr(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? tr(i, !!o.multiple, o.defaultValue, !0)
                      : tr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[pi] = o;
          } catch (v) {
            b(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((qe(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          b(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (qe(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ui(t.containerInfo);
        } catch (v) {
          b(e, e.return, v);
        }
      break;
    case 4:
      qe(t, e), st(e);
      break;
    case 13:
      qe(t, e),
        st(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Mu = ne())),
        r & 4 && Sf(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || c), qe(t, e), (ve = u)) : qe(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (T = e, c = e.child; c !== null; ) {
            for (f = T = c; T !== null; ) {
              switch (((d = T), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  qr(4, d, d.return);
                  break;
                case 1:
                  Yn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      b(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Yn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Cf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (T = g)) : Cf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Th("display", s)));
              } catch (v) {
                b(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                b(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      qe(t, e), st(e), r & 4 && Sf(e);
      break;
    case 21:
      break;
    default:
      qe(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (bp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (oi(i, ""), (r.flags &= -33));
          var o = wf(e);
          pl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = wf(e);
          hl(e, a, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      b(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dv(e, t, n) {
  (T = e), nm(e);
}
function nm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var i = T,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || bi;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ve;
        a = bi;
        var u = ve;
        if (((bi = s), (ve = l) && !u))
          for (T = i; T !== null; )
            (s = T),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? kf(i)
                : l !== null
                  ? ((l.return = s), (T = l))
                  : kf(i);
        for (; o !== null; ) (T = o), nm(o), (o = o.sibling);
        (T = i), (bi = a), (ve = u);
      }
      xf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (T = o)) : xf(e);
  }
}
function xf(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || vs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && sf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                sf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && ui(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ve || (t.flags & 512 && dl(t));
      } catch (d) {
        b(t, t.return, d);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Cf(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function kf(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            vs(4, t);
          } catch (l) {
            b(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              b(t, i, l);
            }
          }
          var o = t.return;
          try {
            dl(t);
          } catch (l) {
            b(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            dl(t);
          } catch (l) {
            b(t, s, l);
          }
      }
    } catch (l) {
      b(t, t.return, l);
    }
    if (t === e) {
      T = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (T = a);
      break;
    }
    T = t.return;
  }
}
var Mv = Math.ceil,
  Yo = Vt.ReactCurrentDispatcher,
  Tu = Vt.ReactCurrentOwner,
  Ge = Vt.ReactCurrentBatchConfig,
  O = 0,
  ce = null,
  oe = null,
  he = 0,
  Ie = 0,
  Xn = sn(0),
  ae = 0,
  wi = null,
  Rn = 0,
  As = 0,
  Du = 0,
  $r = null,
  Te = null,
  Mu = 0,
  hr = 1 / 0,
  gt = null,
  Xo = !1,
  ml = null,
  Zt = null,
  eo = !1,
  Wt = null,
  Zo = 0,
  br = 0,
  gl = null,
  yo = -1,
  vo = 0;
function ke() {
  return O & 6 ? ne() : yo !== -1 ? yo : (yo = ne());
}
function Jt(e) {
  return e.mode & 1
    ? O & 2 && he !== 0
      ? he & -he
      : dv.transition !== null
        ? (vo === 0 && (vo = Uh()), vo)
        : ((e = z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Yh(e.type))),
          e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < br) throw ((br = 0), (gl = null), Error(k(185)));
  Mi(e, n, r),
    (!(O & 2) || e !== ce) &&
      (e === ce && (!(O & 2) && (As |= n), ae === 4 && Qt(e, he)),
      Be(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((hr = ne() + 500), ms && an()));
}
function Be(e, t) {
  var n = e.callbackNode;
  d0(e, t);
  var r = Vo(e, e === ce ? he : 0);
  if (r === 0)
    n !== null && Vc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vc(n), t === 1))
      e.tag === 0 ? fv(Pf.bind(null, e)) : dp(Pf.bind(null, e)),
        av(function () {
          !(O & 6) && an();
        }),
        (n = null);
    else {
      switch (Qh(r)) {
        case 1:
          n = tu;
          break;
        case 4:
          n = jh;
          break;
        case 16:
          n = Bo;
          break;
        case 536870912:
          n = zh;
          break;
        default:
          n = Bo;
      }
      n = cm(n, rm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function rm(e, t) {
  if (((yo = -1), (vo = 0), O & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = Vo(e, e === ce ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Jo(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = om();
    (ce !== e || he !== t) && ((gt = null), (hr = ne() + 500), Cn(e, t));
    do
      try {
        Vv();
        break;
      } catch (a) {
        im(e, a);
      }
    while (!0);
    pu(),
      (Yo.current = o),
      (O = i),
      oe !== null ? (t = 0) : ((ce = null), (he = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Wa(e)), i !== 0 && ((r = i), (t = yl(e, i)))), t === 1)
    )
      throw ((n = wi), Cn(e, 0), Qt(e, r), Be(e, ne()), n);
    if (t === 6) Qt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Rv(i) &&
          ((t = Jo(e, r)),
          t === 2 && ((o = Wa(e)), o !== 0 && ((r = o), (t = yl(e, o)))),
          t === 1))
      )
        throw ((n = wi), Cn(e, 0), Qt(e, r), Be(e, ne()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          mn(e, Te, gt);
          break;
        case 3:
          if (
            (Qt(e, r), (r & 130023424) === r && ((t = Mu + 500 - ne()), 10 < t))
          ) {
            if (Vo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qa(mn.bind(null, e, Te, gt), t);
            break;
          }
          mn(e, Te, gt);
          break;
        case 4:
          if ((Qt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - tt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ne() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * Mv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qa(mn.bind(null, e, Te, gt), r);
            break;
          }
          mn(e, Te, gt);
          break;
        case 5:
          mn(e, Te, gt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Be(e, ne()), e.callbackNode === n ? rm.bind(null, e) : null;
}
function yl(e, t) {
  var n = $r;
  return (
    e.current.memoizedState.isDehydrated && (Cn(e, t).flags |= 256),
    (e = Jo(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && vl(t)),
    e
  );
}
function vl(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function Rv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!it(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Qt(e, t) {
  for (
    t &= ~Du,
      t &= ~As,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Pf(e) {
  if (O & 6) throw Error(k(327));
  sr();
  var t = Vo(e, 0);
  if (!(t & 1)) return Be(e, ne()), null;
  var n = Jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Wa(e);
    r !== 0 && ((t = r), (n = yl(e, r)));
  }
  if (n === 1) throw ((n = wi), Cn(e, 0), Qt(e, t), Be(e, ne()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mn(e, Te, gt),
    Be(e, ne()),
    null
  );
}
function Ru(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((hr = ne() + 500), ms && an());
  }
}
function Bn(e) {
  Wt !== null && Wt.tag === 0 && !(O & 6) && sr();
  var t = O;
  O |= 1;
  var n = Ge.transition,
    r = z;
  try {
    if (((Ge.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ge.transition = n), (O = t), !(O & 6) && an();
  }
}
function Bu() {
  (Ie = Xn.current), G(Xn);
}
function Cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), sv(n)), oe !== null))
    for (n = oe.return; n !== null; ) {
      var r = n;
      switch ((fu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oo();
          break;
        case 3:
          fr(), G(Me), G(xe), wu();
          break;
        case 5:
          Au(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          G(Z);
          break;
        case 19:
          G(Z);
          break;
        case 10:
          mu(r.type._context);
          break;
        case 22:
        case 23:
          Bu();
      }
      n = n.return;
    }
  if (
    ((ce = e),
    (oe = e = qt(e.current, null)),
    (he = Ie = t),
    (ae = 0),
    (wi = null),
    (Du = As = Rn = 0),
    (Te = $r = null),
    An !== null)
  ) {
    for (t = 0; t < An.length; t++)
      if (((n = An[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    An = null;
  }
  return e;
}
function im(e, t) {
  do {
    var n = oe;
    try {
      if ((pu(), (po.current = Go), Ko)) {
        for (var r = q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ko = !1;
      }
      if (
        ((Mn = 0),
        (le = se = q = null),
        (Jr = !1),
        (yi = 0),
        (Tu.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (wi = t), (oe = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = he),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = df(s);
          if (g !== null) {
            (g.flags &= -257),
              hf(g, s, a, o, t),
              g.mode & 1 && ff(o, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ff(o, u, t), Vu();
              break e;
            }
            l = Error(k(426));
          }
        } else if (Y && a.mode & 1) {
          var C = df(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              hf(C, s, a, o, t),
              du(dr(l, a));
            break e;
          }
        }
        (o = l = dr(l, a)),
          ae !== 4 && (ae = 2),
          $r === null ? ($r = [o]) : $r.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = Qp(o, l, t);
              of(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var A = _p(o, a, t);
                of(o, A);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      am(n);
    } catch (w) {
      (t = w), oe === n && n !== null && (oe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function om() {
  var e = Yo.current;
  return (Yo.current = Go), e === null ? Go : e;
}
function Vu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    ce === null || (!(Rn & 268435455) && !(As & 268435455)) || Qt(ce, he);
}
function Jo(e, t) {
  var n = O;
  O |= 2;
  var r = om();
  (ce !== e || he !== t) && ((gt = null), Cn(e, t));
  do
    try {
      Bv();
      break;
    } catch (i) {
      im(e, i);
    }
  while (!0);
  if ((pu(), (O = n), (Yo.current = r), oe !== null)) throw Error(k(261));
  return (ce = null), (he = 0), ae;
}
function Bv() {
  for (; oe !== null; ) sm(oe);
}
function Vv() {
  for (; oe !== null && !r0(); ) sm(oe);
}
function sm(e) {
  var t = um(e.alternate, e, Ie);
  (e.memoizedProps = e.pendingProps),
    t === null ? am(e) : (oe = t),
    (Tu.current = null);
}
function am(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Pv(n, t)), n !== null)) {
        (n.flags &= 32767), (oe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (oe = null);
        return;
      }
    } else if (((n = kv(n, t, Ie)), n !== null)) {
      oe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      oe = t;
      return;
    }
    oe = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function mn(e, t, n) {
  var r = z,
    i = Ge.transition;
  try {
    (Ge.transition = null), (z = 1), Nv(e, t, n, r);
  } finally {
    (Ge.transition = i), (z = r);
  }
  return null;
}
function Nv(e, t, n, r) {
  do sr();
  while (Wt !== null);
  if (O & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (h0(e, o),
    e === ce && ((oe = ce = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      eo ||
      ((eo = !0),
      cm(Bo, function () {
        return sr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ge.transition), (Ge.transition = null);
    var s = z;
    z = 1;
    var a = O;
    (O |= 4),
      (Tu.current = null),
      Tv(e, n),
      tm(n, e),
      b0(Za),
      (No = !!Xa),
      (Za = Xa = null),
      (e.current = n),
      Dv(n),
      i0(),
      (O = a),
      (z = s),
      (Ge.transition = o);
  } else e.current = n;
  if (
    (eo && ((eo = !1), (Wt = e), (Zo = i)),
    (o = e.pendingLanes),
    o === 0 && (Zt = null),
    a0(n.stateNode),
    Be(e, ne()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Xo) throw ((Xo = !1), (e = ml), (ml = null), e);
  return (
    Zo & 1 && e.tag !== 0 && sr(),
    (o = e.pendingLanes),
    o & 1 ? (e === gl ? br++ : ((br = 0), (gl = e))) : (br = 0),
    an(),
    null
  );
}
function sr() {
  if (Wt !== null) {
    var e = Qh(Zo),
      t = Ge.transition,
      n = z;
    try {
      if (((Ge.transition = null), (z = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (Zo = 0), O & 6)) throw Error(k(331));
        var i = O;
        for (O |= 4, T = e.current; T !== null; ) {
          var o = T,
            s = o.child;
          if (T.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (T = u; T !== null; ) {
                  var c = T;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (T = f);
                  else
                    for (; T !== null; ) {
                      c = T;
                      var d = c.sibling,
                        g = c.return;
                      if (($p(c), c === u)) {
                        T = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (T = d);
                        break;
                      }
                      T = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var C = v.sibling;
                    (v.sibling = null), (v = C);
                  } while (v !== null);
                }
              }
              T = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (T = s);
          else
            e: for (; T !== null; ) {
              if (((o = T), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    qr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (T = p);
                break e;
              }
              T = o.return;
            }
        }
        var h = e.current;
        for (T = h; T !== null; ) {
          s = T;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (T = m);
          else
            e: for (s = h; T !== null; ) {
              if (((a = T), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vs(9, a);
                  }
                } catch (w) {
                  b(a, a.return, w);
                }
              if (a === s) {
                T = null;
                break e;
              }
              var A = a.sibling;
              if (A !== null) {
                (A.return = a.return), (T = A);
                break e;
              }
              T = a.return;
            }
        }
        if (
          ((O = i), an(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(cs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Ge.transition = t);
    }
  }
  return !1;
}
function Ef(e, t, n) {
  (t = dr(n, t)),
    (t = Qp(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = ke()),
    e !== null && (Mi(e, 1, t), Be(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) Ef(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ef(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = dr(n, e)),
            (e = _p(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = ke()),
            t !== null && (Mi(t, 1, e), Be(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Iv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ce === e &&
      (he & n) === n &&
      (ae === 4 || (ae === 3 && (he & 130023424) === he && 500 > ne() - Mu)
        ? Cn(e, 0)
        : (Du |= n)),
    Be(e, t);
}
function lm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Hi), (Hi <<= 1), !(Hi & 130023424) && (Hi = 4194304))
      : (t = 1));
  var n = ke();
  (e = Rt(e, t)), e !== null && (Mi(e, t, n), Be(e, n));
}
function Lv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), lm(e, n);
}
function Fv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), lm(e, n);
}
var um;
um = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Me.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), Cv(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), Y && t.flags & 1048576 && hp(t, Uo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      go(e, t), (e = t.pendingProps);
      var i = lr(t, xe.current);
      or(t, n), (i = xu(null, t, r, e, i, n));
      var o = Cu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Re(r) ? ((o = !0), jo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            yu(t),
            (i.updater = ys),
            (t.stateNode = i),
            (i._reactInternals = t),
            il(t, r, e, n),
            (t = al(null, t, r, !0, o, n)))
          : ((t.tag = 0), Y && o && cu(t), Ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (go(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = jv(r)),
          (e = $e(r, e)),
          i)
        ) {
          case 0:
            t = sl(null, t, r, e, n);
            break e;
          case 1:
            t = gf(null, t, r, e, n);
            break e;
          case 11:
            t = pf(null, t, r, e, n);
            break e;
          case 14:
            t = mf(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        sl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        gf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Gp(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ap(e, t),
          Wo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = dr(Error(k(423)), t)), (t = yf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = dr(Error(k(424)), t)), (t = yf(e, t, r, n, i));
            break e;
          } else
            for (
              Le = Yt(t.stateNode.containerInfo.firstChild),
                Fe = t,
                Y = !0,
                et = null,
                n = yp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === i)) {
            t = Bt(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        wp(t),
        e === null && tl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ja(r, i) ? (s = null) : o !== null && Ja(r, o) && (t.flags |= 32),
        Kp(e, t),
        Ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && tl(t), null;
    case 13:
      return Yp(e, t, n);
    case 4:
      return (
        vu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cr(t, null, r, n)) : Ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        pf(e, t, r, i, n)
      );
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          W(Qo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (it(o.value, s)) {
            if (o.children === i.children && !Me.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Ct(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      nl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  nl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (i = Ye(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = $e(r, t.pendingProps)),
        (i = $e(r.type, i)),
        mf(e, t, r, i, n)
      );
    case 15:
      return Wp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : $e(r, i)),
        go(e, t),
        (t.tag = 1),
        Re(r) ? ((e = !0), jo(t)) : (e = !1),
        or(t, n),
        Up(t, r, i),
        il(t, r, i, n),
        al(null, t, r, !0, e, n)
      );
    case 19:
      return Xp(e, t, n);
    case 22:
      return Hp(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function cm(e, t) {
  return Oh(e, t);
}
function Ov(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ke(e, t, n, r) {
  return new Ov(e, t, n, r);
}
function Nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jv(e) {
  if (typeof e == "function") return Nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === $l)) return 11;
    if (e === bl) return 14;
  }
  return 2;
}
function qt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ke(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ao(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Nu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case jn:
        return kn(n.children, i, o, t);
      case ql:
        (s = 8), (i |= 8);
        break;
      case Da:
        return (
          (e = Ke(12, n, t, i | 2)), (e.elementType = Da), (e.lanes = o), e
        );
      case Ma:
        return (e = Ke(13, n, t, i)), (e.elementType = Ma), (e.lanes = o), e;
      case Ra:
        return (e = Ke(19, n, t, i)), (e.elementType = Ra), (e.lanes = o), e;
      case wh:
        return ws(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case vh:
              s = 10;
              break e;
            case Ah:
              s = 9;
              break e;
            case $l:
              s = 11;
              break e;
            case bl:
              s = 14;
              break e;
            case jt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ke(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function kn(e, t, n, r) {
  return (e = Ke(7, e, r, t)), (e.lanes = n), e;
}
function ws(e, t, n, r) {
  return (
    (e = Ke(22, e, r, t)),
    (e.elementType = wh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function la(e, t, n) {
  return (e = Ke(6, e, null, t)), (e.lanes = n), e;
}
function ua(e, t, n) {
  return (
    (t = Ke(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function zv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ws(0)),
    (this.expirationTimes = Ws(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ws(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Iu(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new zv(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ke(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    yu(o),
    e
  );
}
function Uv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function fm(e) {
  if (!e) return en;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Re(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Re(n)) return fp(e, n, t);
  }
  return t;
}
function dm(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Iu(n, r, !0, e, i, o, s, a, l)),
    (e.context = fm(null)),
    (n = e.current),
    (r = ke()),
    (i = Jt(n)),
    (o = Ct(r, i)),
    (o.callback = t ?? null),
    Xt(n, o, i),
    (e.current.lanes = i),
    Mi(e, i, r),
    Be(e, r),
    e
  );
}
function Ss(e, t, n, r) {
  var i = t.current,
    o = ke(),
    s = Jt(i);
  return (
    (n = fm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(i, t, s)),
    e !== null && (nt(e, i, s, o), ho(e, i, s)),
    s
  );
}
function qo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Tf(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lu(e, t) {
  Tf(e, t), (e = e.alternate) && Tf(e, t);
}
function Qv() {
  return null;
}
var hm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Fu(e) {
  this._internalRoot = e;
}
xs.prototype.render = Fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ss(e, t, null, null);
};
xs.prototype.unmount = Fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bn(function () {
      Ss(null, e, null, null);
    }),
      (t[Mt] = null);
  }
};
function xs(e) {
  this._internalRoot = e;
}
xs.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Hh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Gh(e);
  }
};
function Ou(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Df() {}
function _v(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = qo(s);
        o.call(u);
      };
    }
    var s = dm(t, r, e, 0, null, !1, !1, "", Df);
    return (
      (e._reactRootContainer = s),
      (e[Mt] = s.current),
      di(e.nodeType === 8 ? e.parentNode : e),
      Bn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = qo(l);
      a.call(u);
    };
  }
  var l = Iu(e, 0, !1, null, null, !1, !1, "", Df);
  return (
    (e._reactRootContainer = l),
    (e[Mt] = l.current),
    di(e.nodeType === 8 ? e.parentNode : e),
    Bn(function () {
      Ss(t, l, n, r);
    }),
    l
  );
}
function ks(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = qo(s);
        a.call(l);
      };
    }
    Ss(t, s, e, i);
  } else s = _v(n, t, e, i, r);
  return qo(s);
}
_h = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ur(t.pendingLanes);
        n !== 0 &&
          (nu(t, n | 1), Be(t, ne()), !(O & 6) && ((hr = ne() + 500), an()));
      }
      break;
    case 13:
      Bn(function () {
        var r = Rt(e, 1);
        if (r !== null) {
          var i = ke();
          nt(r, e, 1, i);
        }
      }),
        Lu(e, 1);
  }
};
ru = function (e) {
  if (e.tag === 13) {
    var t = Rt(e, 134217728);
    if (t !== null) {
      var n = ke();
      nt(t, e, 134217728, n);
    }
    Lu(e, 134217728);
  }
};
Wh = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = Rt(e, t);
    if (n !== null) {
      var r = ke();
      nt(n, e, t, r);
    }
    Lu(e, t);
  }
};
Hh = function () {
  return z;
};
Kh = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Ua = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Na(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ps(r);
            if (!i) throw Error(k(90));
            xh(r), Na(r, i);
          }
        }
      }
      break;
    case "textarea":
      kh(e, n);
      break;
    case "select":
      (t = n.value), t != null && tr(e, !!n.multiple, t, !1);
  }
};
Bh = Ru;
Vh = Bn;
var Wv = { usingClientEntryPoint: !1, Events: [Bi, _n, ps, Mh, Rh, Ru] },
  Fr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hv = {
    bundleType: Fr.bundleType,
    version: Fr.version,
    rendererPackageName: Fr.rendererPackageName,
    rendererConfig: Fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Lh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fr.findFiberByHostInstance || Qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var to = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!to.isDisabled && to.supportsFiber)
    try {
      (cs = to.inject(Hv)), (ct = to);
    } catch {}
}
ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wv;
ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ou(t)) throw Error(k(200));
  return Uv(e, t, null, n);
};
ze.createRoot = function (e, t) {
  if (!Ou(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = hm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Iu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Mt] = t.current),
    di(e.nodeType === 8 ? e.parentNode : e),
    new Fu(t)
  );
};
ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Lh(t)), (e = e === null ? null : e.stateNode), e;
};
ze.flushSync = function (e) {
  return Bn(e);
};
ze.hydrate = function (e, t, n) {
  if (!Cs(t)) throw Error(k(200));
  return ks(null, e, t, !0, n);
};
ze.hydrateRoot = function (e, t, n) {
  if (!Ou(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = hm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = dm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Mt] = t.current),
    di(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new xs(t);
};
ze.render = function (e, t, n) {
  if (!Cs(t)) throw Error(k(200));
  return ks(null, e, t, !1, n);
};
ze.unmountComponentAtNode = function (e) {
  if (!Cs(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Bn(function () {
        ks(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Mt] = null);
        });
      }),
      !0)
    : !1;
};
ze.unstable_batchedUpdates = Ru;
ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cs(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return ks(e, t, n, !1, r);
};
ze.version = "18.3.1-next-f1338f8080-20240426";
function pm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pm);
    } catch (e) {
      console.error(e);
    }
}
pm(), (ph.exports = ze);
var Kv = ph.exports,
  mm,
  Mf = Kv;
(mm = Mf.createRoot), Mf.hydrateRoot;
function Gv(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function Si(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Al = (e) => Array.isArray(e);
function gm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function xi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Rf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function ju(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Rf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Rf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Ps(e, t, n) {
  const r = e.getProps();
  return ju(r, t, n !== void 0 ? n : r.custom, e);
}
const zu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Uu = ["initial", ...zu],
  Ni = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ln = new Set(Ni),
  kt = (e) => e * 1e3,
  Pt = (e) => e / 1e3,
  Yv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Xv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Zv = { type: "keyframes", duration: 0.8 },
  Jv = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  qv = (e, { keyframes: t }) =>
    t.length > 2
      ? Zv
      : ln.has(e)
        ? e.startsWith("scale")
          ? Xv(t[1])
          : Yv
        : Jv;
function Qu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const $v = { skipAnimations: !1, useManualTiming: !1 },
  bv = (e) => e !== null;
function Es(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(bv),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Se = (e) => e;
function e1(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const no = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  t1 = 40;
function ym(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = no.reduce((p, h) => ((p[h] = e1(o)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, t1), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: no.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (A, w = !1, x = !1) => (n || y(), m.schedule(A, w, x))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < no.length; h++) s[no[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: U,
    cancel: tn,
    state: de,
    steps: ca,
  } = ym(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Se, !0),
  vm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  n1 = 1e-7,
  r1 = 12;
function i1(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = vm(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > n1 && ++a < r1);
  return s;
}
function Ii(e, t, n, r) {
  if (e === t && n === r) return Se;
  const i = (o) => i1(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : vm(i(o), t, r));
}
const Am = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  wm = (e) => (t) => 1 - e(1 - t),
  Sm = Ii(0.33, 1.53, 0.69, 0.99),
  _u = wm(Sm),
  xm = Am(_u),
  Cm = (e) =>
    (e *= 2) < 1 ? 0.5 * _u(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Wu = (e) => 1 - Math.sin(Math.acos(e)),
  km = wm(Wu),
  Pm = Am(Wu),
  Em = (e) => /^0[^.\s]+$/u.test(e);
function o1(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Em(e)
      : !0;
}
let wl = Se;
const Tm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Dm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Mm = Dm("--"),
  s1 = Dm("var(--"),
  Hu = (e) => (s1(e) ? a1.test(e.split("/*")[0].trim()) : !1),
  a1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  l1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function u1(e) {
  const t = l1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Rm(e, t, n = 1) {
  const [r, i] = u1(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Tm(s) ? parseFloat(s) : s;
  }
  return Hu(i) ? Rm(i, t, n + 1) : i;
}
const nn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Pr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ci = { ...Pr, transform: (e) => nn(0, 1, e) },
  ro = { ...Pr, default: 1 },
  Li = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ft = Li("deg"),
  dt = Li("%"),
  B = Li("px"),
  c1 = Li("vh"),
  f1 = Li("vw"),
  Bf = {
    ...dt,
    parse: (e) => dt.parse(e) / 100,
    transform: (e) => dt.transform(e * 100),
  },
  d1 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Vf = (e) => e === Pr || e === B,
  Nf = (e, t) => parseFloat(e.split(", ")[t]),
  If =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Nf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Nf(o[1], e) : 0;
      }
    },
  h1 = new Set(["x", "y", "z"]),
  p1 = Ni.filter((e) => !h1.has(e));
function m1(e) {
  const t = [];
  return (
    p1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const pr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: If(4, 13),
  y: If(5, 14),
};
pr.translateX = pr.x;
pr.translateY = pr.y;
const Bm = (e) => (t) => t.test(e),
  g1 = { test: (e) => e === "auto", parse: (e) => e },
  Vm = [Pr, B, dt, Ft, f1, c1, g1],
  Lf = (e) => Vm.find(Bm(e)),
  Pn = new Set();
let Sl = !1,
  xl = !1;
function Nm() {
  if (xl) {
    const e = Array.from(Pn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = m1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (xl = !1), (Sl = !1), Pn.forEach((e) => e.complete()), Pn.clear();
}
function Im() {
  Pn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (xl = !0);
  });
}
function y1() {
  Im(), Nm();
}
class Ku {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Pn.add(this), Sl || ((Sl = !0), U.read(Im), U.resolveKeyframes(Nm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Pn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Pn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const ei = (e) => Math.round(e * 1e5) / 1e5,
  Gu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function v1(e) {
  return e == null;
}
const A1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Yu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && A1.test(n) && n.startsWith(e)) ||
      (t && !v1(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Lm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Gu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  w1 = (e) => nn(0, 255, e),
  fa = { ...Pr, transform: (e) => Math.round(w1(e)) },
  Sn = {
    test: Yu("rgb", "red"),
    parse: Lm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      fa.transform(e) +
      ", " +
      fa.transform(t) +
      ", " +
      fa.transform(n) +
      ", " +
      ei(Ci.transform(r)) +
      ")",
  };
function S1(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Cl = { test: Yu("#"), parse: S1, transform: Sn.transform },
  Zn = {
    test: Yu("hsl", "hue"),
    parse: Lm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      dt.transform(ei(t)) +
      ", " +
      dt.transform(ei(n)) +
      ", " +
      ei(Ci.transform(r)) +
      ")",
  },
  ye = {
    test: (e) => Sn.test(e) || Cl.test(e) || Zn.test(e),
    parse: (e) =>
      Sn.test(e) ? Sn.parse(e) : Zn.test(e) ? Zn.parse(e) : Cl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Sn.transform(e)
          : Zn.transform(e),
  },
  x1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function C1(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Gu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(x1)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Fm = "number",
  Om = "color",
  k1 = "var",
  P1 = "var(",
  Ff = "${}",
  E1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ki(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      E1,
      (l) => (
        ye.test(l)
          ? (r.color.push(o), i.push(Om), n.push(ye.parse(l)))
          : l.startsWith(P1)
            ? (r.var.push(o), i.push(k1), n.push(l))
            : (r.number.push(o), i.push(Fm), n.push(parseFloat(l))),
        ++o,
        Ff
      ),
    )
    .split(Ff);
  return { values: n, split: a, indexes: r, types: i };
}
function jm(e) {
  return ki(e).values;
}
function zm(e) {
  const { split: t, types: n } = ki(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Fm
          ? (o += ei(i[s]))
          : a === Om
            ? (o += ye.transform(i[s]))
            : (o += i[s]);
      }
    return o;
  };
}
const T1 = (e) => (typeof e == "number" ? 0 : e);
function D1(e) {
  const t = jm(e);
  return zm(e)(t.map(T1));
}
const rn = {
    test: C1,
    parse: jm,
    createTransformer: zm,
    getAnimatableNone: D1,
  },
  M1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function R1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Gu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = M1.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const B1 = /\b([a-z-]*)\(.*?\)/gu,
  kl = {
    ...rn,
    getAnimatableNone: (e) => {
      const t = e.match(B1);
      return t ? t.map(R1).join(" ") : e;
    },
  },
  V1 = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
  },
  N1 = {
    rotate: Ft,
    rotateX: Ft,
    rotateY: Ft,
    rotateZ: Ft,
    scale: ro,
    scaleX: ro,
    scaleY: ro,
    scaleZ: ro,
    skew: Ft,
    skewX: Ft,
    skewY: Ft,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Ci,
    originX: Bf,
    originY: Bf,
    originZ: B,
  },
  Of = { ...Pr, transform: Math.round },
  Xu = {
    ...V1,
    ...N1,
    zIndex: Of,
    size: B,
    fillOpacity: Ci,
    strokeOpacity: Ci,
    numOctaves: Of,
  },
  I1 = {
    ...Xu,
    color: ye,
    backgroundColor: ye,
    outlineColor: ye,
    fill: ye,
    stroke: ye,
    borderColor: ye,
    borderTopColor: ye,
    borderRightColor: ye,
    borderBottomColor: ye,
    borderLeftColor: ye,
    filter: kl,
    WebkitFilter: kl,
  },
  Zu = (e) => I1[e];
function Um(e, t) {
  let n = Zu(e);
  return (
    n !== kl && (n = rn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const L1 = new Set(["auto", "none", "0"]);
function F1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !L1.has(o) && ki(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Um(n, i);
}
class Qm extends Ku {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Hu(u))) {
        const c = Rm(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !d1.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = Lf(i),
      a = Lf(o);
    if (s !== a)
      if (Vf(s) && Vf(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) o1(t[i]) && r.push(i);
    r.length && F1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = pr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = pr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ju(e) {
  return typeof e == "function";
}
let wo;
function O1() {
  wo = void 0;
}
const ht = {
    now: () => (
      wo === void 0 &&
        ht.set(
          de.isProcessing || $v.useManualTiming
            ? de.timestamp
            : performance.now(),
        ),
      wo
    ),
    set: (e) => {
      (wo = e), queueMicrotask(O1);
    },
  },
  jf = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (rn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function j1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function z1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = jf(i, t),
    a = jf(o, t);
  return !s || !a ? !1 : j1(e) || ((n === "spring" || Ju(n)) && r);
}
const U1 = 40;
class _m {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = ht.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > U1
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && y1(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = ht.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !z1(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Es(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Wm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Q1 = 5;
function Hm(e, t, n) {
  const r = Math.max(t - Q1, 0);
  return Wm(n - e(r), t - r);
}
const da = 0.001,
  _1 = 0.01,
  W1 = 10,
  H1 = 0.05,
  K1 = 1;
function G1({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = nn(H1, K1, s)),
    (e = nn(_1, W1, Pt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = Pl(u, s),
            y = Math.exp(-f);
          return da - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Pl(Math.pow(u, 2), s);
          return ((-i(u) + da > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -da + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = X1(i, o, a);
  if (((e = kt(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Y1 = 12;
function X1(e, t, n) {
  let r = n;
  for (let i = 1; i < Y1; i++) r = r - e(r) / t(r);
  return r;
}
function Pl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Z1 = ["duration", "bounce"],
  J1 = ["stiffness", "damping", "mass"];
function zf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function q1(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!zf(e, J1) && zf(e, Z1)) {
    const n = G1(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Km({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = q1({ ...r, velocity: -Pt(r.velocity || 0) }),
    g = f || 0,
    y = l / (2 * Math.sqrt(a * u)),
    v = o - i,
    C = Pt(Math.sqrt(a / u)),
    p = Math.abs(v) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const m = Pl(C, y);
    h = (A) => {
      const w = Math.exp(-y * C * A);
      return (
        o - w * (((g + y * C * v) / m) * Math.sin(m * A) + v * Math.cos(m * A))
      );
    };
  } else if (y === 1) h = (m) => o - Math.exp(-C * m) * (v + (g + C * v) * m);
  else {
    const m = C * Math.sqrt(y * y - 1);
    h = (A) => {
      const w = Math.exp(-y * C * A),
        x = Math.min(m * A, 300);
      return (
        o - (w * ((g + y * C * v) * Math.sinh(x) + m * v * Math.cosh(x))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const A = h(m);
      if (d) s.done = m >= c;
      else {
        let w = 0;
        y < 1 && (w = m === 0 ? kt(g) : Hm(h, m, A));
        const x = Math.abs(w) <= n,
          S = Math.abs(o - A) <= t;
        s.done = x && S;
      }
      return (s.value = s.done ? o : A), s;
    },
  };
}
function Uf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    y = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
          ? a
          : l;
  let v = n * t;
  const C = f + v,
    p = s === void 0 ? C : s(C);
  p !== C && (v = p - f);
  const h = (P) => -v * Math.exp(-P / r),
    m = (P) => p + h(P),
    A = (P) => {
      const L = h(P),
        R = m(P);
      (d.done = Math.abs(L) <= u), (d.value = d.done ? p : R);
    };
  let w, x;
  const S = (P) => {
    g(d.value) &&
      ((w = P),
      (x = Km({
        keyframes: [d.value, y(d.value)],
        velocity: Hm(m, P, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    S(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let L = !1;
        return (
          !x && w === void 0 && ((L = !0), A(P), S(P)),
          w !== void 0 && P >= w ? x.next(P - w) : (!L && A(P), d)
        );
      },
    }
  );
}
const $1 = Ii(0.42, 0, 1, 1),
  b1 = Ii(0, 0, 0.58, 1),
  Gm = Ii(0.42, 0, 0.58, 1),
  eA = (e) => Array.isArray(e) && typeof e[0] != "number",
  qu = (e) => Array.isArray(e) && typeof e[0] == "number",
  Qf = {
    linear: Se,
    easeIn: $1,
    easeInOut: Gm,
    easeOut: b1,
    circIn: Wu,
    circInOut: Pm,
    circOut: km,
    backIn: _u,
    backInOut: xm,
    backOut: Sm,
    anticipate: Cm,
  },
  _f = (e) => {
    if (qu(e)) {
      wl(e.length === 4);
      const [t, n, r, i] = e;
      return Ii(t, n, r, i);
    } else if (typeof e == "string") return wl(Qf[e] !== void 0), Qf[e];
    return e;
  },
  tA = (e, t) => (n) => t(e(n)),
  Et = (...e) => e.reduce(tA),
  mr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  J = (e, t, n) => e + (t - e) * n;
function ha(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function nA({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = ha(l, a, e + 1 / 3)), (o = ha(l, a, e)), (s = ha(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function $o(e, t) {
  return (n) => (n > 0 ? t : e);
}
const pa = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  rA = [Cl, Sn, Zn],
  iA = (e) => rA.find((t) => t.test(e));
function Wf(e) {
  const t = iA(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Zn && (n = nA(n)), n;
}
const Hf = (e, t) => {
    const n = Wf(e),
      r = Wf(t);
    if (!n || !r) return $o(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = pa(n.red, r.red, o)),
      (i.green = pa(n.green, r.green, o)),
      (i.blue = pa(n.blue, r.blue, o)),
      (i.alpha = J(n.alpha, r.alpha, o)),
      Sn.transform(i)
    );
  },
  El = new Set(["none", "hidden"]);
function oA(e, t) {
  return El.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function sA(e, t) {
  return (n) => J(e, t, n);
}
function $u(e) {
  return typeof e == "number"
    ? sA
    : typeof e == "string"
      ? Hu(e)
        ? $o
        : ye.test(e)
          ? Hf
          : uA
      : Array.isArray(e)
        ? Ym
        : typeof e == "object"
          ? ye.test(e)
            ? Hf
            : aA
          : $o;
}
function Ym(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => $u(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function aA(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = $u(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function lA(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const uA = (e, t) => {
  const n = rn.createTransformer(t),
    r = ki(e),
    i = ki(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (El.has(e) && !i.values.length) || (El.has(t) && !r.values.length)
      ? oA(e, t)
      : Et(Ym(lA(r, i), i.values), n)
    : $o(e, t);
};
function Xm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? J(e, t, n)
    : $u(e)(e, t);
}
function cA(e, t, n) {
  const r = [],
    i = n || Xm,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Se : t;
      a = Et(l, a);
    }
    r.push(a);
  }
  return r;
}
function fA(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((wl(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = cA(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = mr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(nn(e[0], e[o - 1], u)) : l;
}
function dA(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = mr(0, t, r);
    e.push(J(n, 1, i));
  }
}
function hA(e) {
  const t = [0];
  return dA(t, e.length - 1), t;
}
function pA(e, t) {
  return e.map((n) => n * t);
}
function mA(e, t) {
  return e.map(() => t || Gm).splice(0, e.length - 1);
}
function bo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = eA(r) ? r.map(_f) : _f(r),
    o = { done: !1, value: t[0] },
    s = pA(n && n.length === t.length ? n : hA(t), e),
    a = fA(s, t, { ease: Array.isArray(i) ? i : mA(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const Kf = 2e4;
function gA(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Kf; ) (t += n), (r = e.next(t));
  return t >= Kf ? 1 / 0 : t;
}
const yA = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => tn(t),
      now: () => (de.isProcessing ? de.timestamp : ht.now()),
    };
  },
  vA = { decay: Uf, inertia: Uf, tween: bo, keyframes: bo, spring: Km },
  AA = (e) => e / 100;
class bu extends _m {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || Ku,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = Ju(n) ? n : vA[n] || bo;
    let l, u;
    a !== bo &&
      typeof t[0] != "number" &&
      ((l = Et(AA, Xm(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = gA(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: C,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      A = o;
    if (g) {
      const P = Math.min(this.currentTime, c) / f;
      let L = Math.floor(P),
        R = P % 1;
      !R && P >= 1 && (R = 1),
        R === 1 && L--,
        (L = Math.min(L, g + 1)),
        !!(L % 2) &&
          (y === "reverse"
            ? ((R = 1 - R), v && (R -= v / f))
            : y === "mirror" && (A = s)),
        (m = nn(0, 1, R) * f);
    }
    const w = h ? { done: !1, value: l[0] } : A.next(m);
    a && (w.value = a(w.value));
    let { done: x } = w;
    !h &&
      u !== null &&
      (x = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const S =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && x));
    return (
      S && i !== void 0 && (w.value = Es(l, this.options, i)),
      C && C(w.value),
      S && this.finish(),
      w
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Pt(t.calculatedDuration) : 0;
  }
  get time() {
    return Pt(this.currentTime);
  }
  set time(t) {
    (t = kt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Pt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = yA, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Zm = new Set(["opacity", "clipPath", "filter", "transform"]),
  wA = 10,
  SA = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / wA), 2);
    for (let i = 0; i < r; i++) n += e(mr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function ec(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const xA = { linearEasing: void 0 };
function CA(e, t) {
  const n = ec(e);
  return () => {
    var r;
    return (r = xA[t]) !== null && r !== void 0 ? r : n();
  };
}
const es = CA(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Jm(e) {
  return !!(
    (typeof e == "function" && es()) ||
    !e ||
    (typeof e == "string" && (e in Tl || es())) ||
    qu(e) ||
    (Array.isArray(e) && e.every(Jm))
  );
}
const _r = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Tl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: _r([0, 0.65, 0.55, 1]),
    circOut: _r([0.55, 0, 1, 0.45]),
    backIn: _r([0.31, 0.01, 0.66, -0.59]),
    backOut: _r([0.33, 1.53, 0.69, 0.99]),
  };
function qm(e, t) {
  if (e)
    return typeof e == "function" && es()
      ? SA(e, t)
      : qu(e)
        ? _r(e)
        : Array.isArray(e)
          ? e.map((n) => qm(n, t) || Tl.easeOut)
          : Tl[e];
}
function kA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = qm(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Gf(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const PA = ec(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ts = 10,
  EA = 2e4;
function TA(e) {
  return Ju(e.type) || e.type === "spring" || !Jm(e.ease);
}
function DA(e, t) {
  const n = new bu({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < EA; ) (r = n.sample(o)), i.push(r.value), (o += ts);
  return { times: void 0, keyframes: i, duration: o - ts, ease: "linear" };
}
const $m = { anticipate: Cm, backInOut: xm, circInOut: Pm };
function MA(e) {
  return e in $m;
}
class Yf extends _m {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new Qm(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && es() && MA(s) && (s = $m[s]), TA(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...C
        } = this.options,
        p = DA(t, C);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (a = "keyframes");
    }
    const f = kA(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Gf(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Es(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return Pt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return Pt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = kt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Se;
      const { animation: r } = n;
      Gf(r, t);
    }
    return Se;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        y = new bu({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        v = kt(this.time);
      u.setWithVelocity(y.sample(v - ts).value, y.sample(v).value, ts);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      PA() &&
      r &&
      Zm.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const RA = ec(() => window.ScrollTimeline !== void 0);
class BA {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      RA() && i.attachTimeline ? i.attachTimeline(t) : n(i),
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function VA({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const tc =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const a = Qu(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - kt(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      VA(a) || (c = { ...c, ...qv(e, c) }),
        c.duration && (c.duration = kt(c.duration)),
        c.repeatDelay && (c.repeatDelay = kt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !o && t.get() !== void 0)
      ) {
        const d = Es(c.keyframes, a);
        if (d !== void 0)
          return (
            U.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new BA([])
          );
      }
      return !o && Yf.supports(c) ? new Yf(c) : new bu(c);
    },
  NA = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  IA = (e) => (Al(e) ? e[e.length - 1] || 0 : e);
function nc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function rc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ic {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return nc(this.subscriptions, t), () => rc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Xf = 30,
  LA = (e) => !isNaN(parseFloat(e));
class FA {
  constructor(t, n = {}) {
    (this.version = "11.11.7"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = ht.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = ht.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = LA(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ic());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = ht.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Xf
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Xf);
    return Wm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Pi(e, t) {
  return new FA(e, t);
}
function OA(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pi(n));
}
function jA(e, t) {
  const n = Ps(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = IA(o[s]);
    OA(e, s, a);
  }
}
const Ts = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  zA = "framerAppearId",
  bm = "data-" + Ts(zA);
function eg(e) {
  return e.props[bm];
}
const Ae = (e) => !!(e && e.getVelocity);
function UA(e) {
  return !!(Ae(e) && e.add);
}
function tg(e) {
  if (ln.has(e)) return "transform";
  if (Zm.has(e)) return Ts(e);
}
function Dl(e, t) {
  var n;
  if (!e.applyWillChange) return;
  const r = e.getValue("willChange");
  if (UA(r)) return r.add(t);
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
    tg(t) &&
    e.setStaticValue("willChange", "transform");
}
function QA({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function ng(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null,
      ),
      g = l[f];
    if (g === void 0 || (c && QA(c, f))) continue;
    const y = { delay: n, ...Qu(s || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = eg(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, U);
        h !== null && ((y.startTime = h), (v = !0));
      }
    }
    Dl(e, f),
      d.start(
        tc(f, d, g, e.shouldReduceMotion && ln.has(f) ? { type: !1 } : y, e, v),
      );
    const C = d.animation;
    C && u.push(C);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        U.update(() => {
          a && jA(e, a);
        });
      }),
    u
  );
}
function Ml(e, t, n = {}) {
  var r;
  const i = Ps(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(ng(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return _A(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function _A(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(WA)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Ml(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          );
      }),
    Promise.all(s)
  );
}
function WA(e, t) {
  return e.sortNodePosition(t);
}
function HA(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Ml(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Ml(e, t, n);
  else {
    const i = typeof t == "function" ? Ps(e, t, n.custom) : t;
    r = Promise.all(ng(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const KA = Uu.length;
function rg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? rg(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < KA; n++) {
    const r = Uu[n],
      i = e.props[r];
    (xi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const GA = [...zu].reverse(),
  YA = zu.length;
function XA(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => HA(e, n, r)));
}
function ZA(e) {
  let t = XA(e),
    n = Zf(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Ps(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = rg(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      y = 1 / 0;
    for (let C = 0; C < YA; C++) {
      const p = GA[C],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        A = xi(m),
        w = p === l ? h.isActive : null;
      w === !1 && (y = C);
      let x = m === c[p] && m !== u[p] && A;
      if (
        (x && r && e.manuallyAnimateOnMount && (x = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && w === null) ||
          (!m && !h.prevProp) ||
          Si(m) ||
          typeof m == "boolean")
      )
        continue;
      const S = JA(h.prevProp, m);
      let P = S || (p === l && h.isActive && !x && A) || (C > y && A),
        L = !1;
      const R = Array.isArray(m) ? m : [m];
      let re = R.reduce(i(p), {});
      w === !1 && (re = {});
      const { prevResolvedValues: ot = {} } = h,
        pt = { ...ot, ...re },
        cn = (X) => {
          (P = !0),
            d.has(X) && ((L = !0), d.delete(X)),
            (h.needsAnimating[X] = !0);
          const E = e.getValue(X);
          E && (E.liveStyle = !1);
        };
      for (const X in pt) {
        const E = re[X],
          M = ot[X];
        if (g.hasOwnProperty(X)) continue;
        let V = !1;
        Al(E) && Al(M) ? (V = !gm(E, M)) : (V = E !== M),
          V
            ? E != null
              ? cn(X)
              : d.add(X)
            : E !== void 0 && d.has(X)
              ? cn(X)
              : (h.protectedKeys[X] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = re),
        h.isActive && (g = { ...g, ...re }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(x && S) || L) &&
          f.push(...R.map((X) => ({ animation: X, options: { type: p } })));
    }
    if (d.size) {
      const C = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (C[p] = h ?? null);
      }),
        f.push({ animation: C });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Zf()), (r = !0);
    },
  };
}
function JA(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !gm(t, e) : !1;
}
function hn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Zf() {
  return {
    animate: hn(!0),
    whileInView: hn(),
    whileHover: hn(),
    whileTap: hn(),
    whileDrag: hn(),
    whileFocus: hn(),
    exit: hn(),
  };
}
class un {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class qA extends un {
  constructor(t) {
    super(t), t.animationState || (t.animationState = ZA(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Si(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let $A = 0;
class bA extends un {
  constructor() {
    super(...arguments), (this.id = $A++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const ew = { animation: { Feature: qA }, exit: { Feature: bA } },
  ig = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Ds(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const tw = (e) => (t) => ig(t) && e(t, Ds(t));
function xt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Tt(e, t, n, r) {
  return xt(e, t, tw(n), r);
}
const Jf = (e, t) => Math.abs(e - t);
function nw(e, t) {
  const n = Jf(e.x, t.x),
    r = Jf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class og {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = ga(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = nw(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = f,
          { timestamp: v } = de;
        this.history.push({ ...y, timestamp: v });
        const { onStart: C, onMove: p } = this.handlers;
        d ||
          (C && C(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ma(d, this.transformPagePoint)),
          U.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const C = ga(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ma(d, this.transformPagePoint),
          this.history,
        );
        this.startEvent && g && g(f, C), y && y(f, C);
      }),
      !ig(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Ds(t),
      a = ma(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = de;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, ga(a, this.history)),
      (this.removeListeners = Et(
        Tt(this.contextWindow, "pointermove", this.handlePointerMove),
        Tt(this.contextWindow, "pointerup", this.handlePointerUp),
        Tt(this.contextWindow, "pointercancel", this.handlePointerUp),
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), tn(this.updatePoint);
  }
}
function ma(e, t) {
  return t ? { point: t(e.point) } : e;
}
function qf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ga({ point: e }, t) {
  return {
    point: e,
    delta: qf(e, sg(t)),
    offset: qf(e, rw(t)),
    velocity: iw(t, 0.1),
  };
}
function rw(e) {
  return e[0];
}
function sg(e) {
  return e[e.length - 1];
}
function iw(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = sg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > kt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Pt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function ag(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const $f = ag("dragHorizontal"),
  bf = ag("dragVertical");
function lg(e) {
  let t = !1;
  if (e === "y") t = bf();
  else if (e === "x") t = $f();
  else {
    const n = $f(),
      r = bf();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function ug() {
  const e = lg(!0);
  return e ? (e(), !1) : !0;
}
function Jn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const cg = 1e-4,
  ow = 1 - cg,
  sw = 1 + cg,
  fg = 0.01,
  aw = 0 - fg,
  lw = 0 + fg;
function je(e) {
  return e.max - e.min;
}
function uw(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ed(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = J(t.min, t.max, e.origin)),
    (e.scale = je(n) / je(t)),
    (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= ow && e.scale <= sw) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= aw && e.translate <= lw) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function ti(e, t, n, r) {
  ed(e.x, t.x, n.x, r ? r.originX : void 0),
    ed(e.y, t.y, n.y, r ? r.originY : void 0);
}
function td(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + je(t));
}
function cw(e, t, n) {
  td(e.x, t.x, n.x), td(e.y, t.y, n.y);
}
function nd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + je(t));
}
function ni(e, t, n) {
  nd(e.x, t.x, n.x), nd(e.y, t.y, n.y);
}
function fw(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? J(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function rd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function dw(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: rd(e.x, n, i), y: rd(e.y, t, r) };
}
function id(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function hw(e, t) {
  return { x: id(e.x, t.x), y: id(e.y, t.y) };
}
function pw(e, t) {
  let n = 0.5;
  const r = je(e),
    i = je(t);
  return (
    i > r
      ? (n = mr(t.min, t.max - r, e.min))
      : r > i && (n = mr(e.min, e.max - i, t.min)),
    nn(0, 1, n)
  );
}
function mw(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Rl = 0.35;
function gw(e = Rl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Rl),
    { x: od(e, "left", "right"), y: od(e, "top", "bottom") }
  );
}
function od(e, t, n) {
  return { min: sd(e, t), max: sd(e, n) };
}
function sd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ad = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  qn = () => ({ x: ad(), y: ad() }),
  ld = () => ({ min: 0, max: 0 }),
  ee = () => ({ x: ld(), y: ld() });
function _e(e) {
  return [e("x"), e("y")];
}
function dg({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function yw({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function vw(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function ya(e) {
  return e === void 0 || e === 1;
}
function Bl({ scale: e, scaleX: t, scaleY: n }) {
  return !ya(e) || !ya(t) || !ya(n);
}
function gn(e) {
  return (
    Bl(e) ||
    hg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function hg(e) {
  return ud(e.x) || ud(e.y);
}
function ud(e) {
  return e && e !== "0%";
}
function ns(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function cd(e, t, n, r, i) {
  return i !== void 0 && (e = ns(e, i, r)), ns(e, n, r) + t;
}
function Vl(e, t = 0, n = 1, r, i) {
  (e.min = cd(e.min, t, n, r, i)), (e.max = cd(e.max, t, n, r, i));
}
function pg(e, { x: t, y: n }) {
  Vl(e.x, t.translate, t.scale, t.originPoint),
    Vl(e.y, n.translate, n.scale, n.originPoint);
}
const fd = 0.999999999999,
  dd = 1.0000000000001;
function Aw(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        bn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), pg(e, s)),
      r && gn(o.latestValues) && bn(e, o.latestValues));
  }
  t.x < dd && t.x > fd && (t.x = 1), t.y < dd && t.y > fd && (t.y = 1);
}
function $n(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function hd(e, t, n, r, i = 0.5) {
  const o = J(e.min, e.max, i);
  Vl(e, t, n, o, r);
}
function bn(e, t) {
  hd(e.x, t.x, t.scaleX, t.scale, t.originX),
    hd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function mg(e, t) {
  return dg(vw(e.getBoundingClientRect(), t));
}
function ww(e, t, n) {
  const r = mg(e, n),
    { scroll: i } = t;
  return i && ($n(r.x, i.offset.x), $n(r.y, i.offset.y)), r;
}
const gg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Sw = new WeakMap();
class xw {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ee()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ds(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = lg(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          _e((C) => {
            let p = this.getAxisMotionValue(C).get() || 0;
            if (dt.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[C];
                m && (p = je(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[C] = p;
          }),
          y && U.postRender(() => y(c, f)),
          Dl(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: C } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = Cw(C)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, C),
          this.updateAxis("y", f.point, C),
          this.visualElement.render(),
          v && v(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        _e((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new og(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: gg(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && U.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !io(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = fw(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    n && Jn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = dw(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = gw(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        _e((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = mw(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Jn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = ww(r, i.root, this.visualElement.getTransformPagePoint());
    let s = hw(i.layout.layoutBox, o);
    if (n) {
      const a = n(yw(s));
      (this.hasMutatedConstraints = !!a), a && (s = dg(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = _e((c) => {
        if (!io(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Dl(this.visualElement, t), r.start(tc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    _e((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    _e((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    _e((n) => {
      const { drag: r } = this.getProps();
      if (!io(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - J(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Jn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    _e((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = pw({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      _e((s) => {
        if (!io(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(J(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    Sw.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Tt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Jn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      U.read(r);
    const s = xt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (_e((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Rl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function io(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Cw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class kw extends un {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Se),
      (this.removeListeners = Se),
      (this.controls = new xw(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Se);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const pd = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class Pw extends un {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Se);
  }
  onPointerDown(t) {
    this.session = new og(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: gg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: pd(t),
      onStart: pd(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && U.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Tt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const oc = N.createContext(null);
function Ew() {
  const e = N.useContext(oc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = N.useId();
  N.useEffect(() => r(i), []);
  const o = N.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const yg = N.createContext({}),
  vg = N.createContext({}),
  So = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function md(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Or = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (B.test(e)) e = parseFloat(e);
        else return e;
      const n = md(e, t.target.x),
        r = md(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  Tw = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = rn.parse(e);
      if (i.length > 5) return r;
      const o = rn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = J(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  rs = {};
function Dw(e) {
  Object.assign(rs, e);
}
const { schedule: sc, cancel: UC } = ym(queueMicrotask, !1);
class Mw extends N.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Dw(Rw),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (So.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              U.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      sc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ag(e) {
  const [t, n] = Ew(),
    r = N.useContext(yg);
  return D.jsx(Mw, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: N.useContext(vg),
    isPresent: t,
    safeToRemove: n,
  });
}
const Rw = {
    borderRadius: {
      ...Or,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Or,
    borderTopRightRadius: Or,
    borderBottomLeftRadius: Or,
    borderBottomRightRadius: Or,
    boxShadow: Tw,
  },
  wg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  Bw = wg.length,
  gd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  yd = (e) => typeof e == "number" || B.test(e);
function Vw(e, t, n, r, i, o) {
  i
    ? ((e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, Nw(r))),
      (e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, Iw(r))))
    : o &&
      (e.opacity = J(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < Bw; s++) {
    const a = `border${wg[s]}Radius`;
    let l = vd(t, a),
      u = vd(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || yd(l) === yd(u)
        ? ((e[a] = Math.max(J(gd(l), gd(u), r), 0)),
          (dt.test(u) || dt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function vd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Nw = Sg(0, 0.5, km),
  Iw = Sg(0.5, 0.95, Se);
function Sg(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(mr(e, t, r)));
}
function Ad(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Qe(e, t) {
  Ad(e.x, t.x), Ad(e.y, t.y);
}
function wd(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Sd(e, t, n, r, i) {
  return (
    (e -= t), (e = ns(e, 1 / n, r)), i !== void 0 && (e = ns(e, 1 / i, r)), e
  );
}
function Lw(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (dt.test(t) &&
      ((t = parseFloat(t)), (t = J(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = J(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Sd(e.min, t, n, a, i)),
    (e.max = Sd(e.max, t, n, a, i));
}
function xd(e, t, [n, r, i], o, s) {
  Lw(e, t[n], t[r], t[i], t.scale, o, s);
}
const Fw = ["x", "scaleX", "originX"],
  Ow = ["y", "scaleY", "originY"];
function Cd(e, t, n, r) {
  xd(e.x, t, Fw, n ? n.x : void 0, r ? r.x : void 0),
    xd(e.y, t, Ow, n ? n.y : void 0, r ? r.y : void 0);
}
function kd(e) {
  return e.translate === 0 && e.scale === 1;
}
function xg(e) {
  return kd(e.x) && kd(e.y);
}
function Pd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function jw(e, t) {
  return Pd(e.x, t.x) && Pd(e.y, t.y);
}
function Ed(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function Cg(e, t) {
  return Ed(e.x, t.x) && Ed(e.y, t.y);
}
function Td(e) {
  return je(e.x) / je(e.y);
}
function Dd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class zw {
  constructor() {
    this.members = [];
  }
  add(t) {
    nc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (rc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Uw(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Qw = (e, t) => e.depth - t.depth;
class _w {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    nc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    rc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Qw),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function xo(e) {
  const t = Ae(e) ? e.get() : e;
  return NA(t) ? t.toValue() : t;
}
function Ww(e, t) {
  const n = ht.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (tn(r), e(o - t));
    };
  return U.read(r, !0), () => tn(r);
}
function Hw(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Kw(e, t, n) {
  const r = Ae(e) ? e : Pi(e);
  return r.start(tc("", r, t, n)), r.animation;
}
const yn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Wr = typeof window < "u" && window.MotionDebug !== void 0,
  va = ["", "X", "Y", "Z"],
  Gw = { visibility: "hidden" },
  Md = 1e3;
let Yw = 0;
function Aa(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function kg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = eg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && kg(r);
}
function Pg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = Yw++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Wr &&
              (yn.totalNodes =
                yn.resolvedTargetDeltas =
                yn.recalculatedProjection =
                  0),
            this.nodes.forEach(Jw),
            this.nodes.forEach(tS),
            this.nodes.forEach(nS),
            this.nodes.forEach(qw),
            Wr && window.MotionDebug.record(yn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _w());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ic()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Hw(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Ww(d, 250)),
            So.hasAnimatedSinceResize &&
              ((So.hasAnimatedSinceResize = !1), this.nodes.forEach(Bd));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || aS,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !Cg(this.targetLayout, y) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const A = { ...Qu(v, "layout"), onPlay: C, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A);
              } else
                d || Bd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            },
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        tn(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(rS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          kg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Rd);
        return;
      }
      this.isUpdating || this.nodes.forEach(bw),
        (this.isUpdating = !1),
        this.nodes.forEach(eS),
        this.nodes.forEach(Xw),
        this.nodes.forEach(Zw),
        this.clearAllSnapshots();
      const a = ht.now();
      (de.delta = nn(0, 1e3 / 60, a - de.timestamp)),
        (de.timestamp = a),
        (de.isProcessing = !0),
        ca.update.process(de),
        ca.preRender.process(de),
        ca.render.process(de),
        (de.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), sc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach($w), this.sharedNodes.forEach(iS);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ee()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !xg(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || gn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        lS(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return ee();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(uS)
        )
      ) {
        const { scroll: c } = this.root;
        c && ($n(l.x, c.offset.x), $n(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = ee();
      if (
        (Qe(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Qe(l, s), $n(l.x, f.offset.x), $n(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = ee();
      Qe(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          bn(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          gn(c.latestValues) && bn(l, c.latestValues);
      }
      return gn(this.latestValues) && bn(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ee();
      Qe(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gn(u.latestValues)) continue;
        Bl(u.latestValues) && u.updateSnapshot();
        const c = ee(),
          f = u.measurePageBox();
        Qe(c, f),
          Cd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return gn(this.latestValues) && Cd(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== de.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = de.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ee()),
              (this.relativeTargetOrigin = ee()),
              ni(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              Qe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ee()), (this.targetWithTransforms = ee())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                cw(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Qe(this.target, this.layout.layoutBox),
                  pg(this.target, this.targetDelta))
                : Qe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ee()),
                (this.relativeTargetOrigin = ee()),
                ni(this.relativeTargetOrigin, this.target, g.target),
                Qe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Wr && yn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Bl(this.parent.latestValues) ||
          hg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === de.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Qe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      Aw(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = ee()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (wd(this.prevProjectionDelta.x, this.projectionDelta.x),
          wd(this.prevProjectionDelta.y, this.projectionDelta.y)),
        ti(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !Dd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Dd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Wr && yn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = qn()),
        (this.projectionDelta = qn()),
        (this.projectionDeltaWithTransform = qn());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = qn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = ee(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        C = this.getStack(),
        p = !C || C.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(sS));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (A) => {
        const w = A / 1e3;
        Vd(f.x, s.x, w),
          Vd(f.y, s.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ni(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            oS(this.relativeTarget, this.relativeTargetOrigin, d, w),
            m && jw(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = ee()),
            Qe(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), Vw(c, u, this.latestValues, w, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (tn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          (So.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Kw(0, Md, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Md),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Eg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ee();
          const f = je(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = je(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        Qe(a, l),
          bn(a, c),
          ti(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new zw()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Aa("z", s, u, this.animationValues);
      for (let c = 0; c < va.length; c++)
        Aa(`rotate${va[c]}`, s, u, this.animationValues),
          Aa(`skew${va[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Gw;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = xo(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = xo(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !gn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = Uw(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
      for (const v in rs) {
        if (d[v] === void 0) continue;
        const { correct: C, applyTo: p } = rs[v],
          h = u.transform === "none" ? d[v] : C(d[v], f);
        if (p) {
          const m = p.length;
          for (let A = 0; A < m; A++) u[p[A]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? xo(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Rd),
        this.root.sharedNodes.clear();
    }
  };
}
function Xw(e) {
  e.updateLayout();
}
function Zw(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? _e((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = je(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Eg(o, n.layoutBox, r) &&
        _e((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = je(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = qn();
    ti(a, r, n.layoutBox);
    const l = qn();
    s ? ti(l, e.applyTransform(i, !0), n.measuredBox) : ti(l, r, n.layoutBox);
    const u = !xg(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = ee();
          ni(y, n.layoutBox, d.layoutBox);
          const v = ee();
          ni(v, r, g.layoutBox),
            Cg(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Jw(e) {
  Wr && yn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function qw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function $w(e) {
  e.clearSnapshot();
}
function Rd(e) {
  e.clearMeasurements();
}
function bw(e) {
  e.isLayoutDirty = !1;
}
function eS(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Bd(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function tS(e) {
  e.resolveTargetDelta();
}
function nS(e) {
  e.calcProjection();
}
function rS(e) {
  e.resetSkewAndRotation();
}
function iS(e) {
  e.removeLeadSnapshot();
}
function Vd(e, t, n) {
  (e.translate = J(t.translate, 0, n)),
    (e.scale = J(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Nd(e, t, n, r) {
  (e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r));
}
function oS(e, t, n, r) {
  Nd(e.x, t.x, n.x, r), Nd(e.y, t.y, n.y, r);
}
function sS(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const aS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Id = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ld = Id("applewebkit/") && !Id("chrome/") ? Math.round : Se;
function Fd(e) {
  (e.min = Ld(e.min)), (e.max = Ld(e.max));
}
function lS(e) {
  Fd(e.x), Fd(e.y);
}
function Eg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !uw(Td(t), Td(n), 0.2))
  );
}
function uS(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const cS = Pg({
    attachResizeListener: (e, t) => xt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  wa = { current: void 0 },
  Tg = Pg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!wa.current) {
        const e = new cS({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (wa.current = e);
      }
      return wa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  fS = {
    pan: { Feature: Pw },
    drag: { Feature: kw, ProjectionNode: Tg, MeasureLayout: Ag },
  };
function Od(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || ug()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && U.postRender(() => l(o, s));
    };
  return Tt(e.current, n, i, { passive: !e.getProps()[r] });
}
class dS extends un {
  mount() {
    this.unmount = Et(Od(this.node, !0), Od(this.node, !1));
  }
  unmount() {}
}
class hS extends un {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Et(
      xt(this.node.current, "focus", () => this.onFocus()),
      xt(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const Dg = (e, t) => (t ? (e === t ? !0 : Dg(e, t.parentElement)) : !1);
function Sa(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ds(n));
}
class pS extends un {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Se),
      (this.removeEndListeners = Se),
      (this.removeAccessibleListeners = Se),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = Tt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Dg(this.node.current, a.target) ? c : u;
              d && U.update(() => d(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = Tt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = Et(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Sa("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && U.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = xt(this.node.current, "keyup", s)),
              Sa("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = xt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Sa("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = xt(this.node.current, "blur", r);
        this.removeAccessibleListeners = Et(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && U.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !ug()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && U.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Tt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = xt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Et(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Nl = new WeakMap(),
  xa = new WeakMap(),
  mS = (e) => {
    const t = Nl.get(e.target);
    t && t(e);
  },
  gS = (e) => {
    e.forEach(mS);
  };
function yS({ root: e, ...t }) {
  const n = e || document;
  xa.has(n) || xa.set(n, {});
  const r = xa.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(gS, { root: e, ...t })), r[i];
}
function vS(e, t, n) {
  const r = yS(t);
  return (
    Nl.set(e, n),
    r.observe(e),
    () => {
      Nl.delete(e), r.unobserve(e);
    }
  );
}
const AS = { some: 0, all: 1 };
class wS extends un {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : AS[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return vS(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(SS(t, n)) && this.startObserver();
  }
  unmount() {}
}
function SS({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const xS = {
    inView: { Feature: wS },
    tap: { Feature: pS },
    focus: { Feature: hS },
    hover: { Feature: dS },
  },
  CS = { layout: { ProjectionNode: Tg, MeasureLayout: Ag } },
  Mg = N.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ms = N.createContext({}),
  ac = typeof window < "u",
  kS = ac ? N.useLayoutEffect : N.useEffect,
  Rg = N.createContext({ strict: !1 });
function PS(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = N.useContext(Ms),
    l = N.useContext(Rg),
    u = N.useContext(oc),
    c = N.useContext(Mg).reducedMotion,
    f = N.useRef();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    g = N.useContext(vg);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    ES(f.current, n, i, g),
    N.useInsertionEffect(() => {
      d && d.update(n, u);
    });
  const y = n[bm],
    v = N.useRef(
      !!y &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, y)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, y)),
    );
  return (
    kS(() => {
      d &&
        ((window.MotionIsMounted = !0),
        d.updateFeatures(),
        sc.render(d.render),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    N.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) === null ||
              C === void 0 ||
              C.call(window, y);
          }),
          (v.current = !1)));
    }),
    d
  );
}
function ES(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Bg(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && Jn(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function Bg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Bg(e.parent);
}
function TS(e, t, n) {
  return N.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Jn(n) && (n.current = r));
    },
    [t],
  );
}
function Rs(e) {
  return Si(e.animate) || Uu.some((t) => xi(e[t]));
}
function Vg(e) {
  return !!(Rs(e) || e.variants);
}
function DS(e, t) {
  if (Rs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || xi(n) ? n : void 0,
      animate: xi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function MS(e) {
  const { initial: t, animate: n } = DS(e, N.useContext(Ms));
  return N.useMemo(() => ({ initial: t, animate: n }), [jd(t), jd(n)]);
}
function jd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const zd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  gr = {};
for (const e in zd) gr[e] = { isEnabled: (t) => zd[e].some((n) => !!t[n]) };
function RS(e) {
  for (const t in e) gr[t] = { ...gr[t], ...e[t] };
}
const BS = Symbol.for("motionComponentSymbol");
function VS({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && RS(e);
  function o(a, l) {
    let u;
    const c = { ...N.useContext(Mg), ...a, layoutId: NS(a) },
      { isStatic: f } = c,
      d = MS(a),
      g = r(a, f);
    if (!f && ac) {
      IS();
      const y = LS(c);
      (u = y.MeasureLayout),
        (d.visualElement = PS(i, g, c, t, y.ProjectionNode));
    }
    return D.jsxs(Ms.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? D.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, a, TS(g, d.visualElement, l), g, f, d.visualElement),
      ],
    });
  }
  const s = N.forwardRef(o);
  return (s[BS] = i), s;
}
function NS({ layoutId: e }) {
  const t = N.useContext(yg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function IS(e, t) {
  N.useContext(Rg).strict;
}
function LS(e) {
  const { drag: t, layout: n } = gr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const FS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function lc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(FS.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Ng(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Ig = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Lg(e, t, n, r) {
  Ng(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ig.has(i) ? i : Ts(i), t.attrs[i]);
}
function Fg(e, { layout: t, layoutId: n }) {
  return (
    ln.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!rs[e] || e === "opacity"))
  );
}
function uc(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (Ae(i[s]) ||
      (t.style && Ae(t.style[s])) ||
      Fg(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
  );
}
function Og(e, t, n) {
  const r = uc(e, t, n);
  for (const i in e)
    if (Ae(e[i]) || Ae(t[i])) {
      const o =
        Ni.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function OS(e) {
  const t = N.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function jS(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  o,
  s,
  a,
) {
  const l = { latestValues: zS(i, o, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (u) => r(i, u, l)), l;
}
const jg = (e) => (t, n) => {
  const r = N.useContext(Ms),
    i = N.useContext(oc),
    o = () => jS(e, t, r, i, n);
  return n ? o() : OS(o);
};
function Ud(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    const o = ju(e, r[i]);
    if (o) {
      const { transitionEnd: s, transition: a, ...l } = o;
      n(l, s);
    }
  }
}
function zS(e, t, n, r, i) {
  var o;
  const s = {};
  let a =
    r &&
    ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) === void 0;
  const l = i(e, {});
  for (const v in l) s[v] = xo(l[v]);
  let { initial: u, animate: c } = e;
  const f = Rs(e),
    d = Vg(e);
  t &&
    d &&
    !f &&
    e.inherit !== !1 &&
    (u === void 0 && (u = t.initial), c === void 0 && (c = t.animate));
  let g = n ? n.initial === !1 : !1;
  g = g || u === !1;
  const y = g ? c : u;
  return (
    y &&
      typeof y != "boolean" &&
      !Si(y) &&
      Ud(e, y, (v, C) => {
        for (const p in v) {
          let h = v[p];
          if (Array.isArray(h)) {
            const m = g ? h.length - 1 : 0;
            h = h[m];
          }
          h !== null && (s[p] = h);
        }
        for (const p in C) s[p] = C[p];
      }),
    a &&
      c &&
      u !== !1 &&
      !Si(c) &&
      Ud(e, c, (v) => {
        for (const C in v)
          if (tg(C)) {
            s.willChange = "transform";
            return;
          }
      }),
    s
  );
}
const cc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  zg = () => ({ ...cc(), attrs: {} }),
  Ug = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  US = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  QS = Ni.length;
function _S(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < QS; o++) {
    const s = Ni[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = Ug(a, Xu[s]);
      if (!l) {
        i = !1;
        const c = US[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function fc(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (ln.has(l)) {
      s = !0;
      continue;
    } else if (Mm(l)) {
      i[l] = u;
      continue;
    } else {
      const c = Ug(u, Xu[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = _S(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Qd(e, t, n) {
  return typeof e == "string" ? e : B.transform(t + n * e);
}
function WS(e, t, n) {
  const r = Qd(t, e.x, e.width),
    i = Qd(n, e.y, e.height);
  return `${r} ${i}`;
}
const HS = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  KS = { offset: "strokeDashoffset", array: "strokeDasharray" };
function GS(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? HS : KS;
  e[o.offset] = B.transform(-r);
  const s = B.transform(t),
    a = B.transform(n);
  e[o.array] = `${s} ${a}`;
}
function dc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
) {
  if ((fc(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = WS(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && GS(d, s, a, l, !1);
}
const hc = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  YS = {
    useVisualState: jg({
      scrapeMotionValuesFromProps: Og,
      createRenderState: zg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        U.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          U.render(() => {
            dc(n, r, hc(t.tagName), e.transformTemplate), Lg(t, n);
          });
      },
    }),
  },
  XS = {
    useVisualState: jg({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: uc,
      createRenderState: cc,
    }),
  };
function Qg(e, t, n) {
  for (const r in t) !Ae(t[r]) && !Fg(r, n) && (e[r] = t[r]);
}
function ZS({ transformTemplate: e }, t) {
  return N.useMemo(() => {
    const n = cc();
    return fc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function JS(e, t) {
  const n = e.style || {},
    r = {};
  return Qg(r, n, e), Object.assign(r, ZS(e, t)), r;
}
function qS(e, t) {
  const n = {},
    r = JS(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const $S = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function is(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    $S.has(e)
  );
}
let _g = (e) => !is(e);
function bS(e) {
  e && (_g = (t) => (t.startsWith("on") ? !is(t) : e(t)));
}
try {
  bS(require("@emotion/is-prop-valid").default);
} catch {}
function ex(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((_g(i) ||
        (n === !0 && is(i)) ||
        (!t && !is(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function tx(e, t, n, r) {
  const i = N.useMemo(() => {
    const o = zg();
    return (
      dc(o, t, hc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Qg(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function nx(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (lc(n) ? tx : qS)(r, o, s, n),
      u = ex(r, typeof n == "string", e),
      c = n !== N.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = N.useMemo(() => (Ae(f) ? f.get() : f), [f]);
    return N.createElement(n, { ...c, children: d });
  };
}
function rx(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(lc(r) ? YS : XS),
      preloadedFeatures: e,
      useRender: nx(i),
      createVisualElement: t,
      Component: r,
    };
    return VS(s);
  };
}
const Il = { current: null },
  Wg = { current: !1 };
function ix() {
  if (((Wg.current = !0), !!ac))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Il.current = e.matches);
      e.addListener(t), t();
    } else Il.current = !1;
}
function ox(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (Ae(i)) e.addValue(r, i);
    else if (Ae(o)) e.addValue(r, Pi(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Pi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const _d = new WeakMap(),
  sx = [...Vm, ye, rn],
  ax = (e) => sx.find(Bm(e)),
  Wd = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class lx {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {},
  ) {
    (this.applyWillChange = !1),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Ku),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = ht.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), U.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Rs(n)),
      (this.isVariantNode = Vg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const d in f) {
      const g = f[d];
      l[d] !== void 0 && Ae(g) && g.set(l[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      _d.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Wg.current || ix(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Il.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    _d.delete(this.current),
      this.projection && this.projection.unmount(),
      tn(this.notifyUpdate),
      tn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ln.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && U.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in gr) {
      const n = gr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ee();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Wd.length; r++) {
      const i = Wd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = ox(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Pi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Tm(i) || Em(i))
          ? (i = parseFloat(i))
          : !ax(i) && rn.test(n) && (i = Um(t, n)),
        this.setBaseTarget(t, Ae(i) ? i.get() : i)),
      Ae(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = ju(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Ae(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ic()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Hg extends lx {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Qm);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function ux(e) {
  return window.getComputedStyle(e);
}
class cx extends Hg {
  constructor() {
    super(...arguments),
      (this.type = "html"),
      (this.applyWillChange = !0),
      (this.renderInstance = Ng);
  }
  readValueFromInstance(t, n) {
    if (ln.has(n)) {
      const r = Zu(n);
      return (r && r.default) || 0;
    } else {
      const r = ux(t),
        i = (Mm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return mg(t, n);
  }
  build(t, n, r) {
    fc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return uc(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ae(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class fx extends Hg {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ee);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ln.has(n)) {
      const r = Zu(n);
      return (r && r.default) || 0;
    }
    return (n = Ig.has(n) ? n : Ts(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Og(t, n, r);
  }
  build(t, n, r) {
    dc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Lg(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = hc(t.tagName)), super.mount(t);
  }
}
const dx = (e, t) =>
    lc(e) ? new fx(t) : new cx(t, { allowProjection: e !== N.Fragment }),
  hx = rx({ ...ew, ...xS, ...fS, ...CS }, dx),
  te = Gv(hx),
  px =
    "data:image/png;base64,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";
var we = function () {
  return (
    (we =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    we.apply(this, arguments)
  );
};
function Ei(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var K = "-ms-",
  ri = "-moz-",
  j = "-webkit-",
  Kg = "comm",
  Bs = "rule",
  pc = "decl",
  mx = "@import",
  Gg = "@keyframes",
  gx = "@layer",
  Yg = Math.abs,
  mc = String.fromCharCode,
  Ll = Object.assign;
function yx(e, t) {
  return ue(e, 0) ^ 45
    ? (((((((t << 2) ^ ue(e, 0)) << 2) ^ ue(e, 1)) << 2) ^ ue(e, 2)) << 2) ^
        ue(e, 3)
    : 0;
}
function Xg(e) {
  return e.trim();
}
function yt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function Co(e, t, n) {
  return e.indexOf(t, n);
}
function ue(e, t) {
  return e.charCodeAt(t) | 0;
}
function yr(e, t, n) {
  return e.slice(t, n);
}
function lt(e) {
  return e.length;
}
function Zg(e) {
  return e.length;
}
function Hr(e, t) {
  return t.push(e), e;
}
function vx(e, t) {
  return e.map(t).join("");
}
function Hd(e, t) {
  return e.filter(function (n) {
    return !yt(n, t);
  });
}
var Vs = 1,
  vr = 1,
  Jg = 0,
  Ze = 0,
  ie = 0,
  Er = "";
function Ns(e, t, n, r, i, o, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Vs,
    column: vr,
    length: s,
    return: "",
    siblings: a,
  };
}
function Ot(e, t) {
  return Ll(
    Ns("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t,
  );
}
function Fn(e) {
  for (; e.root; ) e = Ot(e.root, { children: [e] });
  Hr(e, e.siblings);
}
function Ax() {
  return ie;
}
function wx() {
  return (
    (ie = Ze > 0 ? ue(Er, --Ze) : 0), vr--, ie === 10 && ((vr = 1), Vs--), ie
  );
}
function rt() {
  return (
    (ie = Ze < Jg ? ue(Er, Ze++) : 0), vr++, ie === 10 && ((vr = 1), Vs++), ie
  );
}
function En() {
  return ue(Er, Ze);
}
function ko() {
  return Ze;
}
function Is(e, t) {
  return yr(Er, e, t);
}
function Fl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Sx(e) {
  return (Vs = vr = 1), (Jg = lt((Er = e))), (Ze = 0), [];
}
function xx(e) {
  return (Er = ""), e;
}
function Ca(e) {
  return Xg(Is(Ze - 1, Ol(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Cx(e) {
  for (; (ie = En()) && ie < 33; ) rt();
  return Fl(e) > 2 || Fl(ie) > 3 ? "" : " ";
}
function kx(e, t) {
  for (
    ;
    --t &&
    rt() &&
    !(ie < 48 || ie > 102 || (ie > 57 && ie < 65) || (ie > 70 && ie < 97));

  );
  return Is(e, ko() + (t < 6 && En() == 32 && rt() == 32));
}
function Ol(e) {
  for (; rt(); )
    switch (ie) {
      case e:
        return Ze;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ol(ie);
        break;
      case 40:
        e === 41 && Ol(e);
        break;
      case 92:
        rt();
        break;
    }
  return Ze;
}
function Px(e, t) {
  for (; rt() && e + ie !== 57; ) if (e + ie === 84 && En() === 47) break;
  return "/*" + Is(t, Ze - 1) + "*" + mc(e === 47 ? e : rt());
}
function Ex(e) {
  for (; !Fl(En()); ) rt();
  return Is(e, Ze);
}
function Tx(e) {
  return xx(Po("", null, null, null, [""], (e = Sx(e)), 0, [0], e));
}
function Po(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      g = 0,
      y = 0,
      v = 1,
      C = 1,
      p = 1,
      h = 0,
      m = "",
      A = i,
      w = o,
      x = r,
      S = m;
    C;

  )
    switch (((y = h), (h = rt()))) {
      case 40:
        if (y != 108 && ue(S, f - 1) == 58) {
          Co((S += I(Ca(h), "&", "&\f")), "&\f", Yg(u ? a[u - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += Ca(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += Cx(y);
        break;
      case 92:
        S += kx(ko() - 1, 7);
        continue;
      case 47:
        switch (En()) {
          case 42:
          case 47:
            Hr(Dx(Px(rt(), ko()), t, n, l), l);
            break;
          default:
            S += "/";
        }
        break;
      case 123 * v:
        a[u++] = lt(S) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + c:
            p == -1 && (S = I(S, /\f/g, "")),
              g > 0 &&
                lt(S) - f &&
                Hr(
                  g > 32
                    ? Gd(S + ";", r, n, f - 1, l)
                    : Gd(I(S, " ", "") + ";", r, n, f - 2, l),
                  l,
                );
            break;
          case 59:
            S += ";";
          default:
            if (
              (Hr(
                (x = Kd(S, t, n, u, c, i, a, m, (A = []), (w = []), f, o)),
                o,
              ),
              h === 123)
            )
              if (c === 0) Po(S, t, x, x, A, o, f, a, w);
              else
                switch (d === 99 && ue(S, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Po(
                      e,
                      x,
                      x,
                      r && Hr(Kd(e, x, x, 0, 0, i, a, m, i, (A = []), f, w), w),
                      i,
                      w,
                      f,
                      a,
                      r ? A : w,
                    );
                    break;
                  default:
                    Po(S, x, x, x, [""], w, 0, a, w);
                }
        }
        (u = c = g = 0), (v = p = 1), (m = S = ""), (f = s);
        break;
      case 58:
        (f = 1 + lt(S)), (g = y);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && wx() == 125) continue;
        }
        switch (((S += mc(h)), h * v)) {
          case 38:
            p = c > 0 ? 1 : ((S += "\f"), -1);
            break;
          case 44:
            (a[u++] = (lt(S) - 1) * p), (p = 1);
            break;
          case 64:
            En() === 45 && (S += Ca(rt())),
              (d = En()),
              (c = f = lt((m = S += Ex(ko())))),
              h++;
            break;
          case 45:
            y === 45 && lt(S) == 2 && (v = 0);
        }
    }
  return o;
}
function Kd(e, t, n, r, i, o, s, a, l, u, c, f) {
  for (
    var d = i - 1, g = i === 0 ? o : [""], y = Zg(g), v = 0, C = 0, p = 0;
    v < r;
    ++v
  )
    for (var h = 0, m = yr(e, d + 1, (d = Yg((C = s[v])))), A = e; h < y; ++h)
      (A = Xg(C > 0 ? g[h] + " " + m : I(m, /&\f/g, g[h]))) && (l[p++] = A);
  return Ns(e, t, n, i === 0 ? Bs : a, l, u, c, f);
}
function Dx(e, t, n, r) {
  return Ns(e, t, n, Kg, mc(Ax()), yr(e, 2, -2), 0, r);
}
function Gd(e, t, n, r, i) {
  return Ns(e, t, n, pc, yr(e, 0, r), yr(e, r + 1, -1), r, i);
}
function qg(e, t, n) {
  switch (yx(e, t)) {
    case 5103:
      return j + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return j + e + e;
    case 4789:
      return ri + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + ri + e + K + e + e;
    case 5936:
      switch (ue(e, t + 11)) {
        case 114:
          return j + e + K + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + K + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + K + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return j + e + K + e + e;
    case 6165:
      return j + e + K + "flex-" + e + e;
    case 5187:
      return (
        j + e + I(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + K + "flex-$1$2") + e
      );
    case 5443:
      return (
        j +
        e +
        K +
        "flex-item-" +
        I(e, /flex-|-self/g, "") +
        (yt(e, /flex-|baseline/)
          ? ""
          : K + "grid-row-" + I(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        j +
        e +
        K +
        "flex-line-pack" +
        I(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return j + e + K + I(e, "shrink", "negative") + e;
    case 5292:
      return j + e + K + I(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        j +
        "box-" +
        I(e, "-grow", "") +
        j +
        e +
        K +
        I(e, "grow", "positive") +
        e
      );
    case 4554:
      return j + I(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return (
        I(I(I(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return (
        I(
          I(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + K + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify",
        ) +
        j +
        e +
        e
      );
    case 4200:
      if (!yt(e, /flex-|baseline/))
        return K + "grid-column-align" + yr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return K + I(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), yt(r.props, /grid-\w+-end/);
        })
        ? ~Co(e + (n = n[t].value), "span", 0)
          ? e
          : K +
            I(e, "-start", "") +
            e +
            K +
            "grid-row-span:" +
            (~Co(n, "span", 0) ? yt(n, /\d+/) : +yt(n, /\d+/) - +yt(e, /\d+/)) +
            ";"
        : K + I(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return yt(r.props, /grid-\w+-start/);
        })
        ? e
        : K + I(I(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, j + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (lt(e) - 1 - t > 6)
        switch (ue(e, t + 1)) {
          case 109:
            if (ue(e, t + 4) !== 45) break;
          case 102:
            return (
              I(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  j +
                  "$2-$3$1" +
                  ri +
                  (ue(e, t + 3) == 108 ? "$3" : "$2-$3"),
              ) + e
            );
          case 115:
            return ~Co(e, "stretch", 0)
              ? qg(I(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return I(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, s, a, l, u) {
          return (
            K +
            i +
            ":" +
            o +
            u +
            (s ? K + i + "-span:" + (a ? l : +l - +o) + u : "") +
            e
          );
        },
      );
    case 4949:
      if (ue(e, t + 6) === 121) return I(e, ":", ":" + j) + e;
      break;
    case 6444:
      switch (ue(e, ue(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            I(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                j +
                (ue(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                j +
                "$2$3$1" +
                K +
                "$2box$3",
            ) + e
          );
        case 100:
          return I(e, ":", ":" + K) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return I(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function os(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Mx(e, t, n, r) {
  switch (e.type) {
    case gx:
      if (e.children.length) break;
    case mx:
    case pc:
      return (e.return = e.return || e.value);
    case Kg:
      return "";
    case Gg:
      return (e.return = e.value + "{" + os(e.children, r) + "}");
    case Bs:
      if (!lt((e.value = e.props.join(",")))) return "";
  }
  return lt((n = os(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Rx(e) {
  var t = Zg(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function Bx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function Vx(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case pc:
        e.return = qg(e.value, e.length, n);
        return;
      case Gg:
        return os([Ot(e, { value: I(e.value, "@", "@" + j) })], r);
      case Bs:
        if (e.length)
          return vx((n = e.props), function (i) {
            switch (yt(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Fn(Ot(e, { props: [I(i, /:(read-\w+)/, ":" + ri + "$1")] })),
                  Fn(Ot(e, { props: [i] })),
                  Ll(e, { props: Hd(n, r) });
                break;
              case "::placeholder":
                Fn(
                  Ot(e, { props: [I(i, /:(plac\w+)/, ":" + j + "input-$1")] }),
                ),
                  Fn(Ot(e, { props: [I(i, /:(plac\w+)/, ":" + ri + "$1")] })),
                  Fn(Ot(e, { props: [I(i, /:(plac\w+)/, K + "input-$1")] })),
                  Fn(Ot(e, { props: [i] })),
                  Ll(e, { props: Hd(n, r) });
                break;
            }
            return "";
          });
    }
}
var Nx = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ne = {},
  Ar =
    (typeof process < "u" &&
      Ne !== void 0 &&
      (Ne.REACT_APP_SC_ATTR || Ne.SC_ATTR)) ||
    "data-styled",
  $g = "active",
  bg = "data-styled-version",
  Ls = "6.1.13",
  gc = `/*!sc*/
`,
  ss = typeof window < "u" && "HTMLElement" in window,
  Ix = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        Ne !== void 0 &&
        Ne.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        Ne.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? Ne.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        Ne.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        Ne !== void 0 &&
        Ne.SC_DISABLE_SPEEDY !== void 0 &&
        Ne.SC_DISABLE_SPEEDY !== "" &&
        Ne.SC_DISABLE_SPEEDY !== "false" &&
        Ne.SC_DISABLE_SPEEDY),
  Lx = {},
  Fs = Object.freeze([]),
  wr = Object.freeze({});
function ey(e, t, n) {
  return (
    n === void 0 && (n = wr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var ty = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Fx = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Ox = /(^-|-$)/g;
function Yd(e) {
  return e.replace(Fx, "-").replace(Ox, "");
}
var jx = /(a)(d)/gi,
  oo = 52,
  Xd = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function jl(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > oo; t = (t / oo) | 0) n = Xd(t % oo) + n;
  return (Xd(t % oo) + n).replace(jx, "$1-$2");
}
var ka,
  ny = 5381,
  er = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  ry = function (e) {
    return er(ny, e);
  };
function iy(e) {
  return jl(ry(e) >>> 0);
}
function zx(e) {
  return e.displayName || e.name || "Component";
}
function Pa(e) {
  return typeof e == "string" && !0;
}
var oy = typeof Symbol == "function" && Symbol.for,
  sy = oy ? Symbol.for("react.memo") : 60115,
  Ux = oy ? Symbol.for("react.forward_ref") : 60112,
  Qx = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  _x = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  ay = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Wx =
    (((ka = {})[Ux] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (ka[sy] = ay),
    ka);
function Zd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === sy
    ? ay
    : "$$typeof" in e
      ? Wx[e.$$typeof]
      : Qx;
  var t;
}
var Hx = Object.defineProperty,
  Kx = Object.getOwnPropertyNames,
  Jd = Object.getOwnPropertySymbols,
  Gx = Object.getOwnPropertyDescriptor,
  Yx = Object.getPrototypeOf,
  qd = Object.prototype;
function ly(e, t, n) {
  if (typeof t != "string") {
    if (qd) {
      var r = Yx(t);
      r && r !== qd && ly(e, r, n);
    }
    var i = Kx(t);
    Jd && (i = i.concat(Jd(t)));
    for (var o = Zd(e), s = Zd(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in _x || (n && n[l]) || (s && l in s) || (o && l in o))) {
        var u = Gx(t, l);
        try {
          Hx(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Sr(e) {
  return typeof e == "function";
}
function yc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function xn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function zl(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Ti(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Ul(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Ti(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Ul(e[r], t[r]);
  else if (Ti(t)) for (var r in t) e[r] = Ul(e[r], t[r]);
  return e;
}
function vc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Fi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : ""),
  );
}
var Xx = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw Fi(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            s = i;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(gc);
        return n;
      }),
      e
    );
  })(),
  Eo = new Map(),
  as = new Map(),
  To = 1,
  so = function (e) {
    if (Eo.has(e)) return Eo.get(e);
    for (; as.has(To); ) To++;
    var t = To++;
    return Eo.set(e, t), as.set(t, e), t;
  },
  Zx = function (e, t) {
    (To = t + 1), Eo.set(e, t), as.set(t, e);
  },
  Jx = "style[".concat(Ar, "][").concat(bg, '="').concat(Ls, '"]'),
  qx = new RegExp(
    "^".concat(Ar, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  ),
  $x = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  bx = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(gc),
        i = [],
        o = 0,
        s = r.length;
      o < s;
      o++
    ) {
      var a = r[o].trim();
      if (a) {
        var l = a.match(qx);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (Zx(c, u), $x(e, c, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  },
  $d = function (e) {
    for (
      var t = document.querySelectorAll(Jx), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var i = t[n];
      i &&
        i.getAttribute(Ar) !== $g &&
        (bx(e, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function eC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var uy = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Ar, "]")));
        return l[l.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Ar, $g), r.setAttribute(bg, Ls);
    var s = eC();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
  },
  tC = (function () {
    function e(t) {
      (this.element = uy(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var s = r[i];
            if (s.ownerNode === n) return s;
          }
          throw Fi(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  nC = (function () {
    function e(t) {
      (this.element = uy(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  rC = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  bd = ss,
  iC = { isServer: !ss, useCSSOMInjection: !Ix },
  ls = (function () {
    function e(t, n, r) {
      t === void 0 && (t = wr), n === void 0 && (n = {});
      var i = this;
      (this.options = we(we({}, iC), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && ss && bd && ((bd = !1), $d(this)),
        vc(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                l = "",
                u = function (f) {
                  var d = (function (p) {
                    return as.get(p);
                  })(f);
                  if (d === void 0) return "continue";
                  var g = o.names.get(d),
                    y = s.getGroup(f);
                  if (g === void 0 || !g.size || y.length === 0)
                    return "continue";
                  var v = ""
                      .concat(Ar, ".g")
                      .concat(f, '[id="')
                      .concat(d, '"]'),
                    C = "";
                  g !== void 0 &&
                    g.forEach(function (p) {
                      p.length > 0 && (C += "".concat(p, ","));
                    }),
                    (l += ""
                      .concat(y)
                      .concat(v, '{content:"')
                      .concat(C, '"}')
                      .concat(gc));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return so(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && ss && $d(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            we(we({}, this.options), t),
            this.gs,
            (n && this.names) || void 0,
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new rC(i) : r ? new tC(i) : new nC(i);
            })(this.options)),
            new Xx(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((so(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(so(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(so(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  oC = /&/g,
  sC = /^\s*\/\/.*$/gm;
function cy(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = cy(n.children, t)),
      n
    );
  });
}
function aC(e) {
  var t,
    n,
    r,
    i = wr,
    o = i.options,
    s = o === void 0 ? wr : o,
    a = i.plugins,
    l = a === void 0 ? Fs : a,
    u = function (d, g, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : d;
    },
    c = l.slice();
  c.push(function (d) {
    d.type === Bs &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(oC, n).replace(r, u));
  }),
    s.prefix && c.push(Vx),
    c.push(Mx);
  var f = function (d, g, y, v) {
    g === void 0 && (g = ""),
      y === void 0 && (y = ""),
      v === void 0 && (v = "&"),
      (t = v),
      (n = g),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var C = d.replace(sC, ""),
      p = Tx(y || g ? "".concat(y, " ").concat(g, " { ").concat(C, " }") : C);
    s.namespace && (p = cy(p, s.namespace));
    var h = [];
    return (
      os(
        p,
        Rx(
          c.concat(
            Bx(function (m) {
              return h.push(m);
            }),
          ),
        ),
      ),
      h
    );
  };
  return (
    (f.hash = l.length
      ? l
          .reduce(function (d, g) {
            return g.name || Fi(15), er(d, g.name);
          }, ny)
          .toString()
      : ""),
    f
  );
}
var lC = new ls(),
  Ql = aC(),
  fy = At.createContext({
    shouldForwardProp: void 0,
    styleSheet: lC,
    stylis: Ql,
  });
fy.Consumer;
At.createContext(void 0);
function _l() {
  return N.useContext(fy);
}
var uC = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = Ql);
        var s = r.name + o.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        vc(this, function () {
          throw Fi(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ql), this.name + t.hash;
      }),
      e
    );
  })(),
  cC = function (e) {
    return e >= "A" && e <= "Z";
  };
function eh(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    cC(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var dy = function (e) {
    return e == null || e === !1 || e === "";
  },
  hy = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !dy(o) &&
        ((Array.isArray(o) && o.isCss) || Sr(o)
          ? r.push("".concat(eh(i), ":"), o, ";")
          : Ti(o)
            ? r.push.apply(
                r,
                Ei(Ei(["".concat(i, " {")], hy(o), !1), ["}"], !1),
              )
            : r.push(
                ""
                  .concat(eh(i), ": ")
                  .concat(
                    ((t = i),
                    (n = o) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" ||
                          n === 0 ||
                          t in Nx ||
                          t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";",
                  ),
              ));
    }
    return r;
  };
function $t(e, t, n, r) {
  if (dy(e)) return [];
  if (yc(e)) return [".".concat(e.styledComponentId)];
  if (Sr(e)) {
    if (!Sr((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return $t(i, t, n, r);
  }
  var o;
  return e instanceof uC
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Ti(e)
      ? hy(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            Fs,
            e.map(function (s) {
              return $t(s, t, n, r);
            }),
          )
        : [e.toString()];
}
function py(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Sr(n) && !yc(n)) return !1;
  }
  return !0;
}
var fC = ry(Ls),
  dC = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && py(t)),
        (this.componentId = n),
        (this.baseHash = er(fC, n)),
        (this.baseStyle = r),
        ls.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = xn(i, this.staticRulesId);
          else {
            var o = zl($t(this.rules, t, n, r)),
              s = jl(er(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = r(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            (i = xn(i, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var l = er(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var f = this.rules[c];
            if (typeof f == "string") u += f;
            else if (f) {
              var d = zl($t(f, t, n, r));
              (l = er(l, d + c)), (u += d);
            }
          }
          if (u) {
            var g = jl(l >>> 0);
            n.hasNameForId(this.componentId, g) ||
              n.insertRules(
                this.componentId,
                g,
                r(u, ".".concat(g), void 0, this.componentId),
              ),
              (i = xn(i, g));
          }
        }
        return i;
      }),
      e
    );
  })(),
  Ac = At.createContext(void 0);
Ac.Consumer;
var Ea = {};
function hC(e, t, n) {
  var r = yc(e),
    i = e,
    o = !Pa(e),
    s = t.attrs,
    a = s === void 0 ? Fs : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (A, w) {
            var x = typeof A != "string" ? "sc" : Yd(A);
            Ea[x] = (Ea[x] || 0) + 1;
            var S = "".concat(x, "-").concat(iy(Ls + x + Ea[x]));
            return w ? "".concat(w, "-").concat(S) : S;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName,
    f =
      c === void 0
        ? (function (A) {
            return Pa(A) ? "styled.".concat(A) : "Styled(".concat(zx(A), ")");
          })(e)
        : c,
    d =
      t.displayName && t.componentId
        ? "".concat(Yd(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    g = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    y = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var v = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var C = t.shouldForwardProp;
      y = function (A, w) {
        return v(A, w) && C(A, w);
      };
    } else y = v;
  }
  var p = new dC(n, d, r ? i.componentStyle : void 0);
  function h(A, w) {
    return (function (x, S, P) {
      var L = x.attrs,
        R = x.componentStyle,
        re = x.defaultProps,
        ot = x.foldedComponentIds,
        pt = x.styledComponentId,
        cn = x.target,
        Oi = At.useContext(Ac),
        In = _l(),
        X = x.shouldForwardProp || In.shouldForwardProp,
        E = ey(S, Oi, re) || wr,
        M = (function (Nt, Ve, mt) {
          for (
            var Dr,
              dn = we(we({}, Ve), { className: void 0, theme: mt }),
              Os = 0;
            Os < Nt.length;
            Os += 1
          ) {
            var ji = Sr((Dr = Nt[Os])) ? Dr(dn) : Dr;
            for (var It in ji)
              dn[It] =
                It === "className"
                  ? xn(dn[It], ji[It])
                  : It === "style"
                    ? we(we({}, dn[It]), ji[It])
                    : ji[It];
          }
          return (
            Ve.className && (dn.className = xn(dn.className, Ve.className)), dn
          );
        })(L, S, E),
        V = M.as || cn,
        Q = {};
      for (var _ in M)
        M[_] === void 0 ||
          _[0] === "$" ||
          _ === "as" ||
          (_ === "theme" && M.theme === E) ||
          (_ === "forwardedAs"
            ? (Q.as = M.forwardedAs)
            : (X && !X(_, V)) || (Q[_] = M[_]));
      var fn = (function (Nt, Ve) {
          var mt = _l(),
            Dr = Nt.generateAndInjectStyles(Ve, mt.styleSheet, mt.stylis);
          return Dr;
        })(R, M),
        Je = xn(ot, pt);
      return (
        fn && (Je += " " + fn),
        M.className && (Je += " " + M.className),
        (Q[Pa(V) && !ty.has(V) ? "class" : "className"] = Je),
        (Q.ref = P),
        N.createElement(V, Q)
      );
    })(m, A, w);
  }
  h.displayName = f;
  var m = At.forwardRef(h);
  return (
    (m.attrs = g),
    (m.componentStyle = p),
    (m.displayName = f),
    (m.shouldForwardProp = y),
    (m.foldedComponentIds = r
      ? xn(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (m.styledComponentId = d),
    (m.target = r ? i.target : e),
    Object.defineProperty(m, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (A) {
        this._foldedDefaultProps = r
          ? (function (w) {
              for (var x = [], S = 1; S < arguments.length; S++)
                x[S - 1] = arguments[S];
              for (var P = 0, L = x; P < L.length; P++) Ul(w, L[P], !0);
              return w;
            })({}, i.defaultProps, A)
          : A;
      },
    }),
    vc(m, function () {
      return ".".concat(m.styledComponentId);
    }),
    o &&
      ly(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    m
  );
}
function th(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var nh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function my(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Sr(e) || Ti(e)) return nh($t(th(Fs, Ei([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? $t(r)
    : nh($t(th(r, t)));
}
function Wl(e, t, n) {
  if ((n === void 0 && (n = wr), !t)) throw Fi(1, t);
  var r = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, my.apply(void 0, Ei([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return Wl(
        e,
        t,
        we(we({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        }),
      );
    }),
    (r.withConfig = function (i) {
      return Wl(e, t, we(we({}, n), i));
    }),
    r
  );
}
var gy = function (e) {
    return Wl(hC, e);
  },
  Tr = gy;
ty.forEach(function (e) {
  Tr[e] = gy(e);
});
var pC = (function () {
  function e(t, n) {
    (this.rules = t),
      (this.componentId = n),
      (this.isStatic = py(t)),
      ls.registerId(this.componentId + 1);
  }
  return (
    (e.prototype.createStyles = function (t, n, r, i) {
      var o = i(zl($t(this.rules, n, r, i)), ""),
        s = this.componentId + t;
      r.insertRules(s, s, o);
    }),
    (e.prototype.removeStyles = function (t, n) {
      n.clearRules(this.componentId + t);
    }),
    (e.prototype.renderStyles = function (t, n, r, i) {
      t > 2 && ls.registerId(this.componentId + t),
        this.removeStyles(t, r),
        this.createStyles(t, n, r, i);
    }),
    e
  );
})();
function mC(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = my.apply(void 0, Ei([e], t, !1)),
    i = "sc-global-".concat(iy(JSON.stringify(r))),
    o = new pC(r, i),
    s = function (l) {
      var u = _l(),
        c = At.useContext(Ac),
        f = At.useRef(u.styleSheet.allocateGSInstance(i)).current;
      return (
        u.styleSheet.server && a(f, l, u.styleSheet, c, u.stylis),
        At.useLayoutEffect(
          function () {
            if (!u.styleSheet.server)
              return (
                a(f, l, u.styleSheet, c, u.stylis),
                function () {
                  return o.removeStyles(f, u.styleSheet);
                }
              );
          },
          [f, l, u.styleSheet, c, u.stylis],
        ),
        null
      );
    };
  function a(l, u, c, f, d) {
    if (o.isStatic) o.renderStyles(l, Lx, c, d);
    else {
      var g = we(we({}, u), { theme: ey(u, f, s.defaultProps) });
      o.renderStyles(l, g, c, d);
    }
  }
  return At.memo(s);
}
const gC = Tr.div`
	width: 100%;
	position: relative;
	overflow: hidden;
	min-width: 320px;
	min-height: 480px;
	max-width: 640px;
	max-height: 960px;

	.footer {
		width: 100%;
		img {
			width: 100%;
			height: auto;
		}
	}
`;
Tr(te.div)`
	height: 100%;
`;
Tr.button`
	&:hover {
		opacity: 0.8;
		cursor: pointer;
		transition: opacity 0.3s ease;
	}
`;
const yC = "/assets/arrow-CKnUkY23.png",
  yy = "/assets/cta-oWH9dLlK.png",
  vC = "/assets/gesture-ClSZz0Jc.png",
  AC =
    "data:image/png;base64,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",
  wC = "/assets/hl2-B1uudXNd.png",
  SC = "/assets/packshots-DPv6J_tG.png",
  xC =
    "data:image/png;base64,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",
  vy = "/assets/bg-BdgBzEnX.png",
  CC = Tr.div`
	width: 100%;
	height: 100%;
	background-image: url(${vy});
	padding-top: 5%;
	padding-bottom: 7%;
	position: relative;
	.title,
	.subtitle,
	.products,
	.sl,
	.buttons {
		img {
			width: 100%;
			height: auto;
		}
	}
	.subtitle {
		padding-top: 1%;
	}
	.products {
		padding-top: 4%;
	}
	.sl {
		padding-top: 1%;
	}
	.cta {
		display: flex;
		justify-content: center;
		padding-top: 3%;
		margin-left: -1%;
		width: 100%;
		cursor: pointer;
		&:hover {
			img {
				opacity: 0.8;
				transition: opacity 0.3s ease;
			}
		}
		a {
			display: flex;
			justify-content: center;
			width: 100%;
			img {
				width: 67%;
			}
		}
	}
	.arrow {
		cursor: pointer;
		&:hover {
			img {
				opacity: 0.8;
				transition: opacity 0.3s ease;
			}
		}
	}
	.gesture {
		position: relative;
		right: -34%;
		bottom: 13%;
		img {
			width: 51%;
		}
	}
	.buttons {
		position: absolute;
		right: 1%;
		bottom: 10%;
		width: 28%;
	}
`,
  kC = ({ setNewSlide: e }) =>
    D.jsxs(CC, {
      children: [
        D.jsx(te.div, {
          className: "title",
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.8 },
          children: D.jsx("img", { src: AC, alt: "title" }),
        }),
        D.jsx(te.div, {
          className: "subtitle",
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          transition: { duration: 0.8, delay: 0.3 },
          children: D.jsx("img", { src: wC, alt: "subtitle" }),
        }),
        D.jsx(te.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.6, delay: 0.5 },
          className: "products",
          children: D.jsx("img", { src: SC, alt: "products" }),
        }),
        D.jsx(te.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.6, delay: 0.6 },
          className: "sl",
          children: D.jsx("img", { src: xC, alt: "sl" }),
        }),
        D.jsx(te.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.6, delay: 0.7 },
          className: "cta",
          children: D.jsx("a", {
            href: "https://example.com",
            target: "_blank",
            children: D.jsx("img", { src: yy, alt: "cta" }),
          }),
        }),
        D.jsxs(te.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, delay: 0.9 },
          className: "buttons",
          children: [
            D.jsx(te.div, {
              className: "arrow",
              onClick: () => e(),
              initial: { scale: 0 },
              animate: { scale: [1, 1.2, 1] },
              transition: { duration: 1.5, repeat: 1 / 0 },
              children: D.jsx("img", { src: yC, alt: "arrow" }),
            }),
            D.jsx(te.div, {
              className: "gesture",
              initial: { scale: 0 },
              animate: { scale: [1, 1.2, 1] },
              transition: { duration: 1.5, repeat: 1 / 0 },
              children: D.jsx("img", { src: vC, alt: "gesture" }),
            }),
          ],
        }),
      ],
    }),
  PC =
    "data:image/png;base64,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",
  EC = "/assets/hl2-DmsJGqcq.png",
  TC = "/assets/img1-DMmyj_kA.png",
  DC = "/assets/img2-CTvAOkls.png",
  MC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABRCAMAAAD8SZhGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAfJQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wqO2VgAAAKZ0Uk5TAAZV84sr+f8brN4BHUFWZneAcGpXRS4ND/tQIF6Xz/fow5hiAkbsBCjQ8K5kX4TAyG4YRBUz3P2zRwnuoQrB2WiM/uYh/MbM4ORbpl1C67GFNBkTTG+f1co558lxLQw/fsWUqIoHhyYQ4SX675wOjaC6+N9P6SmWSIGZxPYSHqq0ogOvzU2r1FO5sGsjeRxK3biT29YymjziWtIwCD22Ioi77X2tC+jS4FwAAAMdSURBVHicY2SgB2ActWXUllFbRm0ZtWXUllFbRm0ZtWXUFlJN+08HW5gYGf/Q3BZWRkYGxh+0toXzHwMD8zfybeFmBIP/TGDqJXZFEozvgKTwM7JskQYZ/AJZRBIo8Ej+DrpC1UcgUp7xJsm2aLyUuIddRpmR8cEXFBHdW2BK/RJptnDzi97A6wZNRsZzCJ7xFTAlIXqGFFtMGS/itQMEDBgZL32Fsq0YIcabHiHeFlvGkwTtAAMLxoPQvOh4DExZfz5NrC1MrMTZAQI25zXA5rswHgLz7Y9+RVOB3RZbrgOoAn8cWBkfShzFZY8T40GQwd57IFzXLcTY4rsLznRnZPzFzngJkmyDN/kDE/GDC1i0BDIuB2Z+W4g7gveiZSkstnCLP4WyQhgZ16F7noEhDmjTNQybrBX+LGJIXgLhxM4hZEvqtzVgWtmGcSYWR0NAxpM359C1Ju25ncUIMT7l5h78tsT9BVuS+oVjBk47wEDiu+d6NKE0RkaopswJeG1hLJgGVn8cM2thArFw1qkoAjmMjJPADDvDLny2lIMcYWPaQYQdIGDiuvEuMt9afR6EUdyGxxavvUCiZPs5BqJBxkrJu1iESxmbcdpS18rCwFDRhKNexQFqP03HklJDl+C0paGdgaGKsY4kS4DAxb4F0+4aXLa0NjEw1P8h2RIgqNiHUbIqIpXnyLaoJDcwaHIdI9bkDkbGpzLrgmeDay3b446HUKXbirHbwveTQT6jiFhL+isgtJ03I+MpzcU3A5xKUOQ1kHyHbEv0GgbfNcRaEnfoOQrfWl27GEVA6B+iMEOyZWoRepbFB7prCKlAamcg2SL4zVFtEtG2gJIjftCfhc2Wto0JmURbwjClmJCKiRnYbJGuSyfeEoZZuQSVtMNTEtltS9+PunMIKJmSSrEtwCzy7bdvNz79rfCkTWE7eQ7jB8G5OCqJvPXw5ic1WuPzk+cxMqZiCFvthzOp1ubnqZRjfL8EqTngHh5NfVvAYM7/9WxWXJMEgZZNrEdqx9CmX2n1S34tMn8o9l5HbRm1ZdSWUVtGbRm1ZfjZAgCvBbtSoG/WJQAAAABJRU5ErkJggg==",
  RC = "/assets/img4-D3I8WCny.png",
  BC = "/assets/img5-Qa_YTb67.png",
  VC =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAABMCAMAAABtRKiRAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAgdQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ZmztfQAAAK10Uk5TABUb/2JFwWH1exCSJ60w0QX3MyRyEbnxEvvNa54B1WRKH8rZX28T6Aenm2UNPPqiVZnLgi3uDD+GzP4664wZZq/yoDgGdcbcXWAofdPw2CnjKs4gHM+3fvhaD2fA80+JHpD0cUDCl5g2BFilNfy+Co3iIgOF/fmoRgIUQ3y45+RcNCY7c5W6GCvsXu2Kq93aeuWB7/ZuvCNIcFlQ14cIu0HflDLH6ZGzCSXELyHF3b1MAAADV0lEQVR4nO3YbUgTYRwA8OdviKmkQyVXttAwTbSCGs36oFBipUiES0LMooTK2QSlF18Igsg+mBWC+KmMICnRNEszKkoxW1RaqcSyMq2wwnLie8N6Nuc2d8/d7Xbs+XTPh7v//Z/n7sft7p6XAaJdQBIlURIlURIlkfPy/yiLHgBGuqLn7KIZuqKX0XOKrug9g7wmqIq+U8h7jKq4ZAL5jlIV/ccoizIYpSwGGLA6TFMM+oPVXzTFpcMo6Idj0p2iHH6i4O80xZAhhJZ9pSgq4BtCK75QFEMH8WblZ3qiwhPfXuhHRt59Yrjp7lZ9oCdGQB/ern5PT4zS401kL7PCXWK0+eaiuqmJa6EHb2PeEKpcECN8AOAVZxMlvDbtNr4QL8oisabDQWw7F7i4w7Tb0kaqFCLGYa3VEsc/Zm+3bdoMqnweihIDN8CYznaY0MLacodubhBObCZWOycmATicntTI0lT21zJfTO4cdFXcZXTkcEmpJzfeDQ1zgd/WWnILPlFtkNWR8qm3SNk166HGEqZVs1yRU0wH+KQj13S9I2Qz2/vnw4xrbBflEA8AsJy2M7hNz8xmwRVrfKiZ/BC5xLDEjh5iRdByVSUzexTu2429R+6wgqxiDlQQ8xp95GVmVhn9vM/u8FgtO8gmKhSk56dtjS9jJPMfbNffs0/k1TMHRX5RfZt5ZdzjlDjkCnGu/8bCXFEL+WXjEbOuOmaKAQyVlpVZQnc21KoBps8yzyz0KeAE2cTzReR8nmnYCyU/YlM5Bye4PVYxX36K70xCyZYXM/9pcFJEpScFe6rU8dNONGMT05XHhXl73g44roaFiSgwh/BasJZSmOR5YfhFAWRZ77MRjk/eadE50m+8VN/gPMctzk9XzOVSI6TkLqzeHOWxrg6IMwtXRaTcl2eNy+82xWh6Yp6OBMQhTQVUqZqY023xIgorOmyNo3PhoGuGEBHJS7JsB8njj9wvovwnXbaDbP/JC24XEaqy/zHLNfzdmGgRbcqptI0/2raX7hcRug77rXG4YYiCiBReZzLn44taGiJemBV2WiYcIQN0RNyfJczNtlW/Xfz0BYtIMVtg7udmxb2ugtaPubEZ+B61e+mJCN00ZlaniQKFr8prQE1ZFF0k0R3lPzzPzU0v0Bm6AAAAAElFTkSuQmCC",
  NC = "/assets/img7-BSUT5Y_S.png",
  IC =
    "data:image/png;base64,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",
  LC = Tr.div`
	width: 100%;
	height: 100%;
	background-image: url(${vy});
	.title,
	.subtitle {
		img {
			width: 100%;
			height: auto;
		}
	}
	.subtitle {
		margin-top: -1.1%;
	}
	.top-images {
		min-height: 30%;
		display: flex;
	}
	.top-images__img1 {
		width: 35%;
		min-width: 27%;
		margin-top: -2%;
		img {
			width: 138.5%;
			height: auto;
		}
	}

	.top-images__img2 {
		width: 25%;
		min-width: 25%;
		margin-top: 4%;
		margin-left: 2%;
		img {
			width: 84.5%;
			height: auto;
		}
	}

	.top-images__img3 {
		width: 20%;
		min-width: 15%;
		margin-top: 4%;
		margin-left: -2%;
		img {
			width: 100%;
			height: auto;
		}
	}

	.top-images__img4 {
		width: 46%;
		min-width: 37%;
		margin-left: -4%;
		margin-top: 5%;
		img {
			width: 100%;
			height: auto;
		}
	}

	.bottom-images {
		min-height: 30%;
		margin-top: -4%;
		display: flex;
		justify-content: space-between;
		flex-direction: row-reverse;
	}

	.bottom-images__img1 {
		margin-left: -17%;
		margin-top: -13%;
		min-width: 43%;
		width: 40%;
		img {
			width: 100%;
			height: auto;
		}
	}

	.bottom-images__img2 {
		max-width: 113px;
		max-height: 75px;
		min-width: 22%;
		width: 22%;
		margin-top: 32%;
		margin-left: -15%;
		img {
			width: 100%;
			height: auto;
		}
	}

	.bottom-images__img3 {
		margin-top: -8%;
		min-width: 52%;
		width: 52%;
		img {
			width: 100%;
			height: auto;
		}
	}

	.cta {
		display: flex;
		justify-content: center;
		margin-left: -1%;
		margin-top: -1%;
		width: 100%;
		cursor: pointer;
		&:hover {
			img {
				opacity: 0.8;
				transition: opacity 0.3s ease;
			}
		}
		a {
			display: flex;
			justify-content: center;
			width: 100%;
			img {
				width: 67%;
			}
		}
	}

	.legal {
		padding-top: 1.5%;
		img {
			width: 100%;
			height: auto;
		}
	}
`,
  FC = () =>
    D.jsxs(LC, {
      children: [
        D.jsx(te.div, {
          className: "title",
          initial: { y: -100, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.8, delay: 0.5 },
          children: D.jsx("img", { src: PC, alt: "title" }),
        }),
        D.jsx(te.div, {
          className: "subtitle",
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          transition: { duration: 0.8, delay: 0.8 },
          children: D.jsx("img", { src: EC, alt: "subtitle" }),
        }),
        D.jsxs("div", {
          className: "top-images",
          children: [
            D.jsx(te.div, {
              className: "top-images__img1",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { duration: 0.6, delay: 0.7 },
              children: D.jsx("img", { src: TC, alt: "img1" }),
            }),
            D.jsx(te.div, {
              className: "top-images__img2",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { duration: 0.6, delay: 1 },
              children: D.jsx("img", { src: DC, alt: "img2" }),
            }),
            D.jsx(te.div, {
              initial: { scale: 0, rotate: -45 },
              animate: { scale: 1, rotate: 0 },
              transition: { duration: 0.6, delay: 1.4 },
              className: "top-images__img3",
              children: D.jsx("img", { src: MC, alt: "img3" }),
            }),
            D.jsx(te.div, {
              className: "top-images__img4",
              initial: { x: 100, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              transition: { duration: 0.6, delay: 1.5 },
              children: D.jsx("img", { src: RC, alt: "img4" }),
            }),
          ],
        }),
        D.jsxs("div", {
          className: "bottom-images",
          children: [
            D.jsx(te.div, {
              className: "bottom-images__img1",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { duration: 0.6, delay: 1.8 },
              children: D.jsx("img", { src: BC, alt: "img5" }),
            }),
            D.jsx(te.div, {
              className: "bottom-images__img2",
              initial: { scale: 0, rotate: -45 },
              animate: { scale: 1, rotate: 0 },
              transition: { duration: 0.8, delay: 2 },
              children: D.jsx("img", { src: VC, alt: "img6" }),
            }),
            D.jsx(te.div, {
              className: "bottom-images__img3",
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: { duration: 0.6, delay: 2.3 },
              children: D.jsx("img", { src: NC, alt: "img7" }),
            }),
          ],
        }),
        D.jsx(te.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.6, delay: 2.6 },
          className: "cta",
          children: D.jsx("a", {
            href: "https://example.com",
            target: "_blank",
            children: D.jsx("img", { src: yy, alt: "cta" }),
          }),
        }),
        D.jsx(te.div, {
          initial: { scale: 0 },
          animate: { scale: 1 },
          transition: { duration: 0.6, delay: 2.7 },
          className: "legal",
          children: D.jsx("img", { src: IC, alt: "legal" }),
        }),
      ],
    }),
  OC = () => {
    const [e, t] = N.useState(0);
    return D.jsxs(gC, {
      children: [
        D.jsxs(te.div, {
          style: { display: "flex", width: "200%" },
          initial: { x: 0 },
          animate: { x: e === 0 ? 0 : "-50%" },
          transition: { duration: 1 },
          children: [
            D.jsx("div", {
              style: { width: "50%" },
              children: D.jsx(kC, { setNewSlide: () => t(1) }),
            }),
            D.jsx("div", {
              style: { width: "50%" },
              children: e === 1 && D.jsx(FC, {}),
            }),
          ],
        }),
        D.jsx("div", {
          className: "footer",
          children: D.jsx("img", { src: px, alt: "Footer logo" }),
        }),
      ],
    });
  },
  jC = mC`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Asket', sans-serif;
    background-color: #fff;
  }

	h1 {
		font-size: 50px;
		color: black;
	}

`;
function zC() {
  return D.jsxs(D.Fragment, { children: [D.jsx(jC, {}), D.jsx(OC, {})] });
}
mm(document.getElementById("root")).render(
  D.jsx(N.StrictMode, { children: D.jsx(zC, {}) }),
);
