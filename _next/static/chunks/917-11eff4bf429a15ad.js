(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [917],
  {
    1082: function () {},
    9293: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return u;
        },
      });
      var r = n(2813),
        i = n(8155),
        s = n(6766),
        o = n(278);
      function a(e) {
        return 0 === e.length
          ? o.y
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
      var l = n(3912),
        c = n(8474),
        d = n(8846),
        u = (function () {
          function e(e) {
            e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var n = new e();
              return (n.source = this), (n.operator = t), n;
            }),
            (e.prototype.subscribe = function (e, t, n) {
              var s,
                o = this,
                a =
                  ((s = e) && s instanceof r.Lv) ||
                  ((function (e) {
                    return (
                      e &&
                      (0, c.m)(e.next) &&
                      (0, c.m)(e.error) &&
                      (0, c.m)(e.complete)
                    );
                  })(s) &&
                    (0, i.Nn)(s))
                    ? e
                    : new r.Hp(e, t, n);
              return (
                (0, d.x)(function () {
                  var e = o,
                    t = e.operator,
                    n = e.source;
                  a.add(
                    t ? t.call(a, n) : n ? o._subscribe(a) : o._trySubscribe(a)
                  );
                }),
                a
              );
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                e.error(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var n = this;
              return new (t = p(t))(function (t, i) {
                var s = new r.Hp({
                  next: function (t) {
                    try {
                      e(t);
                    } catch (n) {
                      i(n), s.unsubscribe();
                    }
                  },
                  error: i,
                  complete: t,
                });
                n.subscribe(s);
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t;
              return null === (t = this.source) || void 0 === t
                ? void 0
                : t.subscribe(e);
            }),
            (e.prototype[s.L] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return a(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = p(e))(function (e, n) {
                var r;
                t.subscribe(
                  function (e) {
                    return (r = e);
                  },
                  function (e) {
                    return n(e);
                  },
                  function () {
                    return e(r);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function p(e) {
        var t;
        return null !== (t = null !== e && void 0 !== e ? e : l.v.Promise) &&
          void 0 !== t
          ? t
          : Promise;
      }
    },
    2813: function (e, t, n) {
      "use strict";
      n.d(t, {
        Hp: function () {
          return g;
        },
        Lv: function () {
          return f;
        },
      });
      var r = n(655),
        i = n(8474),
        s = n(8155),
        o = n(3912),
        a = n(5);
      function l() {}
      var c = d("C", void 0, void 0);
      function d(e, t, n) {
        return { kind: e, value: t, error: n };
      }
      var u = n(8380),
        p = n(8846),
        f = (function (e) {
          function t(t) {
            var n = e.call(this) || this;
            return (
              (n.isStopped = !1),
              t
                ? ((n.destination = t), (0, s.Nn)(t) && t.add(n))
                : (n.destination = b),
              n
            );
          }
          return (
            (0, r.ZT)(t, e),
            (t.create = function (e, t, n) {
              return new g(e, t, n);
            }),
            (t.prototype.next = function (e) {
              this.isStopped
                ? y(
                    (function (e) {
                      return d("N", e, void 0);
                    })(e),
                    this
                  )
                : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? y(d("E", void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? y(c, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(s.w0),
        h = Function.prototype.bind;
      function m(e, t) {
        return h.call(e, t);
      }
      var v = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (n) {
                  w(n);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (n) {
                  w(n);
                }
              else w(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (t) {
                  w(t);
                }
            }),
            e
          );
        })(),
        g = (function (e) {
          function t(t, n, r) {
            var s,
              a,
              l = e.call(this) || this;
            (0, i.m)(t) || !t
              ? (s = {
                  next: null !== t && void 0 !== t ? t : void 0,
                  error: null !== n && void 0 !== n ? n : void 0,
                  complete: null !== r && void 0 !== r ? r : void 0,
                })
              : l && o.v.useDeprecatedNextContext
              ? (((a = Object.create(t)).unsubscribe = function () {
                  return l.unsubscribe();
                }),
                (s = {
                  next: t.next && m(t.next, a),
                  error: t.error && m(t.error, a),
                  complete: t.complete && m(t.complete, a),
                }))
              : (s = t);
            return (l.destination = new v(s)), l;
          }
          return (0, r.ZT)(t, e), t;
        })(f);
      function w(e) {
        o.v.useDeprecatedSynchronousErrorHandling ? (0, p.O)(e) : (0, a.h)(e);
      }
      function y(e, t) {
        var n = o.v.onStoppedNotification;
        n &&
          u.z.setTimeout(function () {
            return n(e, t);
          });
      }
      var b = {
        closed: !0,
        next: l,
        error: function (e) {
          throw e;
        },
        complete: l,
      };
    },
    8155: function (e, t, n) {
      "use strict";
      n.d(t, {
        w0: function () {
          return a;
        },
        Nn: function () {
          return l;
        },
      });
      var r = n(655),
        i = n(8474);
      var s = (function (e) {
          var t = e(function (e) {
            Error.call(e), (e.stack = new Error().stack);
          });
          return (
            (t.prototype = Object.create(Error.prototype)),
            (t.prototype.constructor = t),
            t
          );
        })(function (e) {
          return function (t) {
            e(this),
              (this.message = t
                ? t.length +
                  " errors occurred during unsubscription:\n" +
                  t
                    .map(function (e, t) {
                      return t + 1 + ") " + e.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t);
          };
        }),
        o = n(3699),
        a = (function () {
          function e(e) {
            (this.initialTeardown = e),
              (this.closed = !1),
              (this._parentage = null),
              (this._finalizers = null);
          }
          return (
            (e.prototype.unsubscribe = function () {
              var e, t, n, o, a;
              if (!this.closed) {
                this.closed = !0;
                var l = this._parentage;
                if (l)
                  if (((this._parentage = null), Array.isArray(l)))
                    try {
                      for (
                        var d = (0, r.XA)(l), u = d.next();
                        !u.done;
                        u = d.next()
                      ) {
                        u.value.remove(this);
                      }
                    } catch (g) {
                      e = { error: g };
                    } finally {
                      try {
                        u && !u.done && (t = d.return) && t.call(d);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  else l.remove(this);
                var p = this.initialTeardown;
                if ((0, i.m)(p))
                  try {
                    p();
                  } catch (w) {
                    a = w instanceof s ? w.errors : [w];
                  }
                var f = this._finalizers;
                if (f) {
                  this._finalizers = null;
                  try {
                    for (
                      var h = (0, r.XA)(f), m = h.next();
                      !m.done;
                      m = h.next()
                    ) {
                      var v = m.value;
                      try {
                        c(v);
                      } catch (y) {
                        (a = null !== a && void 0 !== a ? a : []),
                          y instanceof s
                            ? (a = (0, r.ev)(
                                (0, r.ev)([], (0, r.CR)(a)),
                                (0, r.CR)(y.errors)
                              ))
                            : a.push(y);
                      }
                    }
                  } catch (b) {
                    n = { error: b };
                  } finally {
                    try {
                      m && !m.done && (o = h.return) && o.call(h);
                    } finally {
                      if (n) throw n.error;
                    }
                  }
                }
                if (a) throw new s(a);
              }
            }),
            (e.prototype.add = function (t) {
              var n;
              if (t && t !== this)
                if (this.closed) c(t);
                else {
                  if (t instanceof e) {
                    if (t.closed || t._hasParent(this)) return;
                    t._addParent(this);
                  }
                  (this._finalizers =
                    null !== (n = this._finalizers) && void 0 !== n
                      ? n
                      : []).push(t);
                }
            }),
            (e.prototype._hasParent = function (e) {
              var t = this._parentage;
              return t === e || (Array.isArray(t) && t.includes(e));
            }),
            (e.prototype._addParent = function (e) {
              var t = this._parentage;
              this._parentage = Array.isArray(t)
                ? (t.push(e), t)
                : t
                ? [t, e]
                : e;
            }),
            (e.prototype._removeParent = function (e) {
              var t = this._parentage;
              t === e
                ? (this._parentage = null)
                : Array.isArray(t) && (0, o.P)(t, e);
            }),
            (e.prototype.remove = function (t) {
              var n = this._finalizers;
              n && (0, o.P)(n, t), t instanceof e && t._removeParent(this);
            }),
            (e.EMPTY = (function () {
              var t = new e();
              return (t.closed = !0), t;
            })()),
            e
          );
        })();
      a.EMPTY;
      function l(e) {
        return (
          e instanceof a ||
          (e &&
            "closed" in e &&
            (0, i.m)(e.remove) &&
            (0, i.m)(e.add) &&
            (0, i.m)(e.unsubscribe))
        );
      }
      function c(e) {
        (0, i.m)(e) ? e() : e.unsubscribe();
      }
    },
    3912: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var r = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    1681: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return g;
        },
      });
      var r = n(655),
        i = n(239),
        s = n(9293),
        o = n(6798),
        a = n(2566);
      function l(e, t) {
        return (0, o.e)(function (n, r) {
          var i = 0;
          n.subscribe(
            (0, a.x)(r, function (n) {
              r.next(e.call(t, n, i++));
            })
          );
        });
      }
      var c = n(8474);
      function d(e, t, n) {
        return (
          void 0 === n && (n = 1 / 0),
          (0, c.m)(t)
            ? d(function (n, r) {
                return l(function (e, i) {
                  return t(n, e, r, i);
                })((0, i.Xf)(e(n, r)));
              }, n)
            : ("number" === typeof t && (n = t),
              (0, o.e)(function (t, r) {
                return (function (e, t, n, r, s, o, l, c) {
                  var d = [],
                    u = 0,
                    p = 0,
                    f = !1,
                    h = function () {
                      !f || d.length || u || t.complete();
                    },
                    m = function (e) {
                      return u < r ? v(e) : d.push(e);
                    },
                    v = function (e) {
                      o && t.next(e), u++;
                      var c = !1;
                      (0, i.Xf)(n(e, p++)).subscribe(
                        (0, a.x)(
                          t,
                          function (e) {
                            null === s || void 0 === s || s(e),
                              o ? m(e) : t.next(e);
                          },
                          function () {
                            c = !0;
                          },
                          void 0,
                          function () {
                            if (c)
                              try {
                                u--;
                                for (
                                  var e = function () {
                                    var e = d.shift();
                                    l
                                      ? (function (e, t, n, r, i) {
                                          void 0 === r && (r = 0),
                                            void 0 === i && (i = !1);
                                          var s = t.schedule(function () {
                                            n(),
                                              i
                                                ? e.add(this.schedule(null, r))
                                                : this.unsubscribe();
                                          }, r);
                                          e.add(s);
                                        })(t, l, function () {
                                          return v(e);
                                        })
                                      : v(e);
                                  };
                                  d.length && u < r;

                                )
                                  e();
                                h();
                              } catch (n) {
                                t.error(n);
                              }
                          }
                        )
                      );
                    };
                  return (
                    e.subscribe(
                      (0, a.x)(t, m, function () {
                        (f = !0), h();
                      })
                    ),
                    function () {
                      null === c || void 0 === c || c();
                    }
                  );
                })(t, r, e, n);
              }))
        );
      }
      var u = n(5685),
        p = Array.isArray;
      function f(e) {
        return l(function (t) {
          return (function (e, t) {
            return p(t) ? e.apply(void 0, (0, r.ev)([], (0, r.CR)(t))) : e(t);
          })(e, t);
        });
      }
      var h = ["addListener", "removeListener"],
        m = ["addEventListener", "removeEventListener"],
        v = ["on", "off"];
      function g(e, t, n, o) {
        if (((0, c.m)(n) && ((o = n), (n = void 0)), o))
          return g(e, t, n).pipe(f(o));
        var a = (0, r.CR)(
            (function (e) {
              return (
                (0, c.m)(e.addEventListener) && (0, c.m)(e.removeEventListener)
              );
            })(e)
              ? m.map(function (r) {
                  return function (i) {
                    return e[r](t, i, n);
                  };
                })
              : (function (e) {
                  return (0, c.m)(e.addListener) && (0, c.m)(e.removeListener);
                })(e)
              ? h.map(w(e, t))
              : (function (e) {
                  return (0, c.m)(e.on) && (0, c.m)(e.off);
                })(e)
              ? v.map(w(e, t))
              : [],
            2
          ),
          l = a[0],
          p = a[1];
        if (!l && (0, u.z)(e))
          return d(function (e) {
            return g(e, t, n);
          })((0, i.Xf)(e));
        if (!l) throw new TypeError("Invalid event target");
        return new s.y(function (e) {
          var t = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return e.next(1 < t.length ? t : t[0]);
          };
          return (
            l(t),
            function () {
              return p(t);
            }
          );
        });
      }
      function w(e, t) {
        return function (n) {
          return function (r) {
            return e[n](t, r);
          };
        };
      }
    },
    239: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xf: function () {
          return d;
        },
      });
      var r = n(655),
        i = n(5685),
        s = n(8474);
      var o = n(9293),
        a = n(6766);
      var l =
        "function" === typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      var c = n(5);
      function d(e) {
        if (e instanceof o.y) return e;
        if (null != e) {
          if (
            (function (e) {
              return (0, s.m)(e[a.L]);
            })(e)
          )
            return (
              (f = e),
              new o.y(function (e) {
                var t = f[a.L]();
                if ((0, s.m)(t.subscribe)) return t.subscribe(e);
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              })
            );
          if ((0, i.z)(e))
            return (
              (p = e),
              new o.y(function (e) {
                for (var t = 0; t < p.length && !e.closed; t++) e.next(p[t]);
                e.complete();
              })
            );
          if (((d = e), (0, s.m)(null === d || void 0 === d ? void 0 : d.then)))
            return (
              (n = e),
              new o.y(function (e) {
                n.then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                ).then(null, c.h);
              })
            );
          if (
            (function (e) {
              return (
                Symbol.asyncIterator &&
                (0, s.m)(
                  null === e || void 0 === e ? void 0 : e[Symbol.asyncIterator]
                )
              );
            })(e)
          )
            return u(e);
          if (
            (function (e) {
              return (0, s.m)(null === e || void 0 === e ? void 0 : e[l]);
            })(e)
          )
            return (
              (t = e),
              new o.y(function (e) {
                var n, i;
                try {
                  for (
                    var s = (0, r.XA)(t), o = s.next();
                    !o.done;
                    o = s.next()
                  ) {
                    var a = o.value;
                    if ((e.next(a), e.closed)) return;
                  }
                } catch (l) {
                  n = { error: l };
                } finally {
                  try {
                    o && !o.done && (i = s.return) && i.call(s);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                e.complete();
              })
            );
          if (
            (function (e) {
              return (0, s.m)(
                null === e || void 0 === e ? void 0 : e.getReader
              );
            })(e)
          )
            return u(
              (function (e) {
                return (0, r.FC)(this, arguments, function () {
                  var t, n, i;
                  return (0, r.Jh)(this, function (s) {
                    switch (s.label) {
                      case 0:
                        (t = e.getReader()), (s.label = 1);
                      case 1:
                        s.trys.push([1, , 9, 10]), (s.label = 2);
                      case 2:
                        return [4, (0, r.qq)(t.read())];
                      case 3:
                        return (
                          (n = s.sent()),
                          (i = n.value),
                          n.done ? [4, (0, r.qq)(void 0)] : [3, 5]
                        );
                      case 4:
                        return [2, s.sent()];
                      case 5:
                        return [4, (0, r.qq)(i)];
                      case 6:
                        return [4, s.sent()];
                      case 7:
                        return s.sent(), [3, 2];
                      case 8:
                        return [3, 10];
                      case 9:
                        return t.releaseLock(), [7];
                      case 10:
                        return [2];
                    }
                  });
                });
              })(e)
            );
        }
        var t, n, d, p, f;
        throw (function (e) {
          return new TypeError(
            "You provided " +
              (null !== e && "object" === typeof e
                ? "an invalid object"
                : "'" + e + "'") +
              " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
          );
        })(e);
      }
      function u(e) {
        return new o.y(function (t) {
          (function (e, t) {
            var n, i, s, o;
            return (0, r.mG)(this, void 0, void 0, function () {
              var a, l;
              return (0, r.Jh)(this, function (c) {
                switch (c.label) {
                  case 0:
                    c.trys.push([0, 5, 6, 11]),
                      (n = (0, r.KL)(e)),
                      (c.label = 1);
                  case 1:
                    return [4, n.next()];
                  case 2:
                    if ((i = c.sent()).done) return [3, 4];
                    if (((a = i.value), t.next(a), t.closed)) return [2];
                    c.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (l = c.sent()), (s = { error: l }), [3, 11];
                  case 6:
                    return (
                      c.trys.push([6, , 9, 10]),
                      i && !i.done && (o = n.return) ? [4, o.call(n)] : [3, 8]
                    );
                  case 7:
                    c.sent(), (c.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (s) throw s.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
    },
    2566: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return i;
        },
      });
      var r = n(655);
      function i(e, t, n, r, i) {
        return new s(e, t, n, r, i);
      }
      var s = (function (e) {
        function t(t, n, r, i, s, o) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = s),
            (a.shouldUnsubscribe = o),
            (a._next = n
              ? function (e) {
                  try {
                    n(e);
                  } catch (r) {
                    t.error(r);
                  }
                }
              : e.prototype._next),
            (a._error = i
              ? function (e) {
                  try {
                    i(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = r
              ? function () {
                  try {
                    r();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          (0, r.ZT)(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var n = this.closed;
              e.prototype.unsubscribe.call(this),
                !n &&
                  (null === (t = this.onFinalize) ||
                    void 0 === t ||
                    t.call(this));
            }
          }),
          t
        );
      })(n(2813).Lv);
    },
    2006: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return a;
        },
      });
      var r = n(8474),
        i = n(6798),
        s = n(2566),
        o = n(278);
      function a(e, t, n) {
        var a = (0, r.m)(e) || t || n ? { next: e, error: t, complete: n } : e;
        return a
          ? (0, i.e)(function (e, t) {
              var n;
              null === (n = a.subscribe) || void 0 === n || n.call(a);
              var r = !0;
              e.subscribe(
                (0, s.x)(
                  t,
                  function (e) {
                    var n;
                    null === (n = a.next) || void 0 === n || n.call(a, e),
                      t.next(e);
                  },
                  function () {
                    var e;
                    (r = !1),
                      null === (e = a.complete) || void 0 === e || e.call(a),
                      t.complete();
                  },
                  function (e) {
                    var n;
                    (r = !1),
                      null === (n = a.error) || void 0 === n || n.call(a, e),
                      t.error(e);
                  },
                  function () {
                    var e, t;
                    r &&
                      (null === (e = a.unsubscribe) ||
                        void 0 === e ||
                        e.call(a)),
                      null === (t = a.finalize) || void 0 === t || t.call(a);
                  }
                )
              );
            })
          : o.y;
      }
    },
    7920: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return y;
        },
      });
      var r = n(655),
        i = (function (e) {
          function t(t, n) {
            return e.call(this) || this;
          }
          return (
            (0, r.ZT)(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(n(8155).w0),
        s = {
          setInterval: function (e, t) {
            for (var n = [], i = 2; i < arguments.length; i++)
              n[i - 2] = arguments[i];
            var o = s.delegate;
            return (null === o || void 0 === o ? void 0 : o.setInterval)
              ? o.setInterval.apply(o, (0, r.ev)([e, t], (0, r.CR)(n)))
              : setInterval.apply(void 0, (0, r.ev)([e, t], (0, r.CR)(n)));
          },
          clearInterval: function (e) {
            var t = s.delegate;
            return (
              (null === t || void 0 === t ? void 0 : t.clearInterval) ||
              clearInterval
            )(e);
          },
          delegate: void 0,
        },
        o = n(3699),
        a = (function (e) {
          function t(t, n) {
            var r = e.call(this, t, n) || this;
            return (r.scheduler = t), (r.work = n), (r.pending = !1), r;
          }
          return (
            (0, r.ZT)(t, e),
            (t.prototype.schedule = function (e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id = this.id || this.requestAsyncId(r, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, n) {
              return (
                void 0 === n && (n = 0), s.setInterval(e.flush.bind(e, this), n)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, n) {
              if (
                (void 0 === n && (n = 0),
                null != n && this.delay === n && !1 === this.pending)
              )
                return t;
              s.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(e, t);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var n,
                r = !1;
              try {
                this.work(e);
              } catch (i) {
                (r = !0),
                  (n = i || new Error("Scheduled action threw falsy error"));
              }
              if (r) return this.unsubscribe(), n;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this.id,
                  n = this.scheduler,
                  r = n.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, o.P)(r, this),
                  null != t && (this.id = this.recycleAsyncId(n, t, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(i),
        l = {
          now: function () {
            return (l.delegate || Date).now();
          },
          delegate: void 0,
        },
        c = (function () {
          function e(t, n) {
            void 0 === n && (n = e.now),
              (this.schedulerActionCtor = t),
              (this.now = n);
          }
          return (
            (e.prototype.schedule = function (e, t, n) {
              return (
                void 0 === t && (t = 0),
                new this.schedulerActionCtor(this, e).schedule(n, t)
              );
            }),
            (e.now = l.now),
            e
          );
        })(),
        d = new ((function (e) {
          function t(t, n) {
            void 0 === n && (n = c.now);
            var r = e.call(this, t, n) || this;
            return (
              (r.actions = []), (r._active = !1), (r._scheduled = void 0), r
            );
          }
          return (
            (0, r.ZT)(t, e),
            (t.prototype.flush = function (e) {
              var t = this.actions;
              if (this._active) t.push(e);
              else {
                var n;
                this._active = !0;
                do {
                  if ((n = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this._active = !1), n)) {
                  for (; (e = t.shift()); ) e.unsubscribe();
                  throw n;
                }
              }
            }),
            t
          );
        })(c))(a),
        u = d,
        p = n(6798),
        f = n(2566),
        h = n(239),
        m = { leading: !0, trailing: !1 };
      var v = n(9293),
        g = n(8474);
      function w(e, t, n) {
        void 0 === e && (e = 0), void 0 === n && (n = u);
        var r,
          i = -1;
        return (
          null != t && ((r = t) && (0, g.m)(r.schedule) ? (n = t) : (i = t)),
          new v.y(function (t) {
            var r = (function (e) {
              return e instanceof Date && !isNaN(e);
            })(e)
              ? +e - n.now()
              : e;
            r < 0 && (r = 0);
            var s = 0;
            return n.schedule(function () {
              t.closed ||
                (t.next(s++), 0 <= i ? this.schedule(void 0, i) : t.complete());
            }, r);
          })
        );
      }
      function y(e, t, n) {
        void 0 === t && (t = d), void 0 === n && (n = m);
        var r = w(e, t);
        return (function (e, t) {
          return (
            void 0 === t && (t = m),
            (0, p.e)(function (n, r) {
              var i = t.leading,
                s = t.trailing,
                o = !1,
                a = null,
                l = null,
                c = !1,
                d = function () {
                  null === l || void 0 === l || l.unsubscribe(),
                    (l = null),
                    s && (m(), c && r.complete());
                },
                u = function () {
                  (l = null), c && r.complete();
                },
                p = function (t) {
                  return (l = (0, h.Xf)(e(t)).subscribe((0, f.x)(r, d, u)));
                },
                m = function () {
                  if (o) {
                    o = !1;
                    var e = a;
                    (a = null), r.next(e), !c && p(e);
                  }
                };
              n.subscribe(
                (0, f.x)(
                  r,
                  function (e) {
                    (o = !0), (a = e), (!l || l.closed) && (i ? m() : p(e));
                  },
                  function () {
                    (c = !0), (!(s && o && l) || l.closed) && r.complete();
                  }
                )
              );
            })
          );
        })(function () {
          return r;
        }, n);
      }
    },
    8380: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var r = n(655),
        i = {
          setTimeout: function (e, t) {
            for (var n = [], s = 2; s < arguments.length; s++)
              n[s - 2] = arguments[s];
            var o = i.delegate;
            return (null === o || void 0 === o ? void 0 : o.setTimeout)
              ? o.setTimeout.apply(o, (0, r.ev)([e, t], (0, r.CR)(n)))
              : setTimeout.apply(void 0, (0, r.ev)([e, t], (0, r.CR)(n)));
          },
          clearTimeout: function (e) {
            var t = i.delegate;
            return (
              (null === t || void 0 === t ? void 0 : t.clearTimeout) ||
              clearTimeout
            )(e);
          },
          delegate: void 0,
        };
    },
    6766: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var r =
        ("function" === typeof Symbol && Symbol.observable) || "@@observable";
    },
    3699: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (e) {
          var n = e.indexOf(t);
          0 <= n && e.splice(n, 1);
        }
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    8846: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return o;
        },
        x: function () {
          return s;
        },
      });
      var r = n(3912),
        i = null;
      function s(e) {
        if (r.v.useDeprecatedSynchronousErrorHandling) {
          var t = !i;
          if ((t && (i = { errorThrown: !1, error: null }), e(), t)) {
            var n = i,
              s = n.errorThrown,
              o = n.error;
            if (((i = null), s)) throw o;
          }
        } else e();
      }
      function o(e) {
        r.v.useDeprecatedSynchronousErrorHandling &&
          i &&
          ((i.errorThrown = !0), (i.error = e));
      }
    },
    278: function (e, t, n) {
      "use strict";
      function r(e) {
        return e;
      }
      n.d(t, {
        y: function () {
          return r;
        },
      });
    },
    5685: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return r;
        },
      });
      var r = function (e) {
        return e && "number" === typeof e.length && "function" !== typeof e;
      };
    },
    8474: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" === typeof e;
      }
      n.d(t, {
        m: function () {
          return r;
        },
      });
    },
    6798: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return i;
        },
      });
      var r = n(8474);
      function i(e) {
        return function (t) {
          if (
            (function (e) {
              return (0, r.m)(null === e || void 0 === e ? void 0 : e.lift);
            })(t)
          )
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (n) {
                this.error(n);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    5: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return s;
        },
      });
      var r = n(3912),
        i = n(8380);
      function s(e) {
        i.z.setTimeout(function () {
          var t = r.v.onUnhandledError;
          if (!t) throw e;
          t(e);
        });
      }
    },
    655: function (e, t, n) {
      "use strict";
      n.d(t, {
        CR: function () {
          return l;
        },
        FC: function () {
          return u;
        },
        Jh: function () {
          return o;
        },
        KL: function () {
          return p;
        },
        XA: function () {
          return a;
        },
        ZT: function () {
          return i;
        },
        ev: function () {
          return c;
        },
        mG: function () {
          return s;
        },
        qq: function () {
          return d;
        },
      });
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
      function i(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      function s(e, t, n, r) {
        return new (n || (n = Promise))(function (i, s) {
          function o(e) {
            try {
              l(r.next(e));
            } catch (t) {
              s(t);
            }
          }
          function a(e) {
            try {
              l(r.throw(e));
            } catch (t) {
              s(t);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, a);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function o(e, t) {
        var n,
          r,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" === typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(s) {
          return function (a) {
            return (function (s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return o.label++, { value: s[1], done: !1 };
                    case 5:
                      o.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (6 === s[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = s);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(s);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  s = t.call(e, o);
                } catch (a) {
                  (s = [6, a]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, a]);
          };
        }
      }
      Object.create;
      function a(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function l(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          s = n.call(e),
          o = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = s.next()).done; )
            o.push(r.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            r && !r.done && (n = s.return) && n.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function c(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, s = t.length; i < s; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function d(e) {
        return this instanceof d ? ((this.v = e), this) : new d(e);
      }
      function u(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(e, t || []),
          s = [];
        return (
          (r = {}),
          o("next"),
          o("throw"),
          o("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function o(e) {
          i[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                s.push([e, t, n, r]) > 1 || a(e, t);
              });
            });
        }
        function a(e, t) {
          try {
            (n = i[e](t)).value instanceof d
              ? Promise.resolve(n.value.v).then(l, c)
              : u(s[0][2], n);
          } catch (r) {
            u(s[0][3], r);
          }
          var n;
        }
        function l(e) {
          a("next", e);
        }
        function c(e) {
          a("throw", e);
        }
        function u(e, t) {
          e(t), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function p(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = a(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, i) {
                (function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, i, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      Object.create;
    },
    8352: function (e, t, n) {
      "use strict";
      n.d(t, {
        tq: function () {
          return b;
        },
        o5: function () {
          return S;
        },
      });
      var r = n(7294),
        i = n(965);
      function s(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function o(e, t) {
        const n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => n.indexOf(e) < 0)
          .forEach((n) => {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : s(t[n]) && s(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : o(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function a(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function l(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function d(e) {
        void 0 === e && (e = "");
        const t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          n = [];
        return (
          t.forEach((e) => {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      const u = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function p(e, t) {
        let n = t.slidesPerView;
        if (t.breakpoints) {
          const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
            r = e in t.breakpoints ? t.breakpoints[e] : void 0;
          r && r.slidesPerView && (n = r.slidesPerView);
        }
        let r = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (r += t.loopAdditionalSlides), r > e.length && (r = e.length), r;
      }
      function f(e) {
        const t = [];
        return (
          r.Children.toArray(e).forEach((e) => {
            e.type && "SwiperSlide" === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                f(e.props.children).forEach((e) => t.push(e));
          }),
          t
        );
      }
      function h(e) {
        const t = [],
          n = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          r.Children.toArray(e).forEach((e) => {
            if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
            else if (e.props && e.props.slot && n[e.props.slot])
              n[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              const r = f(e.props.children);
              r.length > 0
                ? r.forEach((e) => t.push(e))
                : n["container-end"].push(e);
            } else n["container-end"].push(e);
          }),
          { slides: t, slots: n }
        );
      }
      function m(e) {
        let {
          swiper: t,
          slides: n,
          passedParams: r,
          changedParams: i,
          nextEl: a,
          prevEl: l,
          scrollbarEl: c,
          paginationEl: d,
        } = e;
        const u = i.filter((e) => "children" !== e && "direction" !== e),
          {
            params: p,
            pagination: f,
            navigation: h,
            scrollbar: m,
            virtual: v,
            thumbs: g,
          } = t;
        let w, y, b, T, S;
        i.includes("thumbs") &&
          r.thumbs &&
          r.thumbs.swiper &&
          p.thumbs &&
          !p.thumbs.swiper &&
          (w = !0),
          i.includes("controller") &&
            r.controller &&
            r.controller.control &&
            p.controller &&
            !p.controller.control &&
            (y = !0),
          i.includes("pagination") &&
            r.pagination &&
            (r.pagination.el || d) &&
            (p.pagination || !1 === p.pagination) &&
            f &&
            !f.el &&
            (b = !0),
          i.includes("scrollbar") &&
            r.scrollbar &&
            (r.scrollbar.el || c) &&
            (p.scrollbar || !1 === p.scrollbar) &&
            m &&
            !m.el &&
            (T = !0),
          i.includes("navigation") &&
            r.navigation &&
            (r.navigation.prevEl || l) &&
            (r.navigation.nextEl || a) &&
            (p.navigation || !1 === p.navigation) &&
            h &&
            !h.prevEl &&
            !h.nextEl &&
            (S = !0);
        if (
          (u.forEach((e) => {
            if (s(p[e]) && s(r[e])) o(p[e], r[e]);
            else {
              const i = r[e];
              (!0 !== i && !1 !== i) ||
              ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
                ? (p[e] = r[e])
                : !1 === i &&
                  t[(n = e)] &&
                  (t[n].destroy(),
                  "navigation" === n
                    ? ((p[n].prevEl = void 0),
                      (p[n].nextEl = void 0),
                      (t[n].prevEl = void 0),
                      (t[n].nextEl = void 0))
                    : ((p[n].el = void 0), (t[n].el = void 0)));
            }
            var n;
          }),
          u.includes("controller") &&
            !y &&
            t.controller &&
            t.controller.control &&
            p.controller &&
            p.controller.control &&
            (t.controller.control = p.controller.control),
          i.includes("children") && v && p.virtual.enabled
            ? ((v.slides = n), v.update(!0))
            : i.includes("children") &&
              t.lazy &&
              t.params.lazy.enabled &&
              t.lazy.load(),
          w)
        ) {
          g.init() && g.update(!0);
        }
        y && (t.controller.control = p.controller.control),
          b && (d && (p.pagination.el = d), f.init(), f.render(), f.update()),
          T &&
            (c && (p.scrollbar.el = c),
            m.init(),
            m.updateSize(),
            m.setTranslate()),
          S &&
            (a && (p.navigation.nextEl = a),
            l && (p.navigation.prevEl = l),
            h.init(),
            h.update()),
          i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
          i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
          i.includes("direction") && t.changeDirection(r.direction, !1),
          t.update();
      }
      function v(e, t) {
        return "undefined" === typeof window
          ? (0, r.useEffect)(e, t)
          : (0, r.useLayoutEffect)(e, t);
      }
      const g = (0, r.createContext)(null),
        w = (0, r.createContext)(null);
      function y() {
        return (
          (y =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          y.apply(this, arguments)
        );
      }
      const b = (0, r.forwardRef)(function (e, t) {
        let {
            className: n,
            tag: f = "div",
            wrapperTag: g = "div",
            children: b,
            onSwiper: T,
            ...S
          } = void 0 === e ? {} : e,
          x = !1;
        const [E, C] = (0, r.useState)("swiper"),
          [M, P] = (0, r.useState)(null),
          [k, _] = (0, r.useState)(!1),
          O = (0, r.useRef)(!1),
          L = (0, r.useRef)(null),
          A = (0, r.useRef)(null),
          I = (0, r.useRef)(null),
          $ = (0, r.useRef)(null),
          z = (0, r.useRef)(null),
          D = (0, r.useRef)(null),
          N = (0, r.useRef)(null),
          G = (0, r.useRef)(null),
          {
            params: B,
            passedParams: j,
            rest: R,
            events: H,
          } = (function (e) {
            void 0 === e && (e = {});
            const t = { on: {} },
              n = {},
              r = {};
            o(t, i.ZP.defaults),
              o(t, i.ZP.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            const a = {},
              l = u.map((e) => e.replace(/_/, ""));
            return (
              Object.keys(e).forEach((i) => {
                l.indexOf(i) >= 0
                  ? s(e[i])
                    ? ((t[i] = {}), (r[i] = {}), o(t[i], e[i]), o(r[i], e[i]))
                    : ((t[i] = e[i]), (r[i] = e[i]))
                  : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i]
                  ? (n[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i])
                  : (a[i] = e[i]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach((e) => {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: r, rest: a, events: n }
            );
          })(S),
          { slides: V, slots: F } = h(b),
          X = () => {
            _(!k);
          };
        Object.assign(B.on, {
          _containerClasses(e, t) {
            C(t);
          },
        });
        const W = () => {
          if (
            (Object.assign(B.on, H),
            (x = !0),
            (A.current = new i.ZP(B)),
            (A.current.loopCreate = () => {}),
            (A.current.loopDestroy = () => {}),
            B.loop && (A.current.loopedSlides = p(V, B)),
            A.current.virtual && A.current.params.virtual.enabled)
          ) {
            A.current.virtual.slides = V;
            const e = {
              cache: !1,
              slides: V,
              renderExternal: P,
              renderExternalUpdate: !1,
            };
            o(A.current.params.virtual, e),
              o(A.current.originalParams.virtual, e);
          }
        };
        L.current || W(), A.current && A.current.on("_beforeBreakpoint", X);
        return (
          (0, r.useEffect)(() => () => {
            A.current && A.current.off("_beforeBreakpoint", X);
          }),
          (0, r.useEffect)(() => {
            !O.current &&
              A.current &&
              (A.current.emitSlidesClasses(), (O.current = !0));
          }),
          v(() => {
            if ((t && (t.current = L.current), L.current))
              return (
                A.current.destroyed && W(),
                (function (e, t) {
                  let {
                    el: n,
                    nextEl: r,
                    prevEl: i,
                    paginationEl: s,
                    scrollbarEl: o,
                    swiper: d,
                  } = e;
                  a(t) &&
                    r &&
                    i &&
                    ((d.params.navigation.nextEl = r),
                    (d.originalParams.navigation.nextEl = r),
                    (d.params.navigation.prevEl = i),
                    (d.originalParams.navigation.prevEl = i)),
                    l(t) &&
                      s &&
                      ((d.params.pagination.el = s),
                      (d.originalParams.pagination.el = s)),
                    c(t) &&
                      o &&
                      ((d.params.scrollbar.el = o),
                      (d.originalParams.scrollbar.el = o)),
                    d.init(n);
                })(
                  {
                    el: L.current,
                    nextEl: z.current,
                    prevEl: D.current,
                    paginationEl: N.current,
                    scrollbarEl: G.current,
                    swiper: A.current,
                  },
                  B
                ),
                T && T(A.current),
                () => {
                  A.current &&
                    !A.current.destroyed &&
                    A.current.destroy(!0, !1);
                }
              );
          }, []),
          v(() => {
            !x &&
              H &&
              A.current &&
              Object.keys(H).forEach((e) => {
                A.current.on(e, H[e]);
              });
            const e = (function (e, t, n, r) {
              const i = [];
              if (!t) return i;
              const o = (e) => {
                  i.indexOf(e) < 0 && i.push(e);
                },
                a = r.map((e) => e.key),
                l = n.map((e) => e.key);
              return (
                a.join("") !== l.join("") && o("children"),
                r.length !== n.length && o("children"),
                u
                  .filter((e) => "_" === e[0])
                  .map((e) => e.replace(/_/, ""))
                  .forEach((n) => {
                    if (n in e && n in t)
                      if (s(e[n]) && s(t[n])) {
                        const r = Object.keys(e[n]),
                          i = Object.keys(t[n]);
                        r.length !== i.length
                          ? o(n)
                          : (r.forEach((r) => {
                              e[n][r] !== t[n][r] && o(n);
                            }),
                            i.forEach((r) => {
                              e[n][r] !== t[n][r] && o(n);
                            }));
                      } else e[n] !== t[n] && o(n);
                  }),
                i
              );
            })(j, I.current, V, $.current);
            return (
              (I.current = j),
              ($.current = V),
              e.length &&
                A.current &&
                !A.current.destroyed &&
                m({
                  swiper: A.current,
                  slides: V,
                  passedParams: j,
                  changedParams: e,
                  nextEl: z.current,
                  prevEl: D.current,
                  scrollbarEl: G.current,
                  paginationEl: N.current,
                }),
              () => {
                H &&
                  A.current &&
                  Object.keys(H).forEach((e) => {
                    A.current.off(e, H[e]);
                  });
              }
            );
          }),
          v(() => {
            var e;
            !(e = A.current) ||
              e.destroyed ||
              !e.params.virtual ||
              (e.params.virtual && !e.params.virtual.enabled) ||
              (e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.lazy && e.params.lazy.enabled && e.lazy.load(),
              e.parallax &&
                e.params.parallax &&
                e.params.parallax.enabled &&
                e.parallax.setTranslate());
          }, [M]),
          r.createElement(
            f,
            y({ ref: L, className: d(`${E}${n ? ` ${n}` : ""}`) }, R),
            r.createElement(
              w.Provider,
              { value: A.current },
              F["container-start"],
              r.createElement(
                g,
                { className: "swiper-wrapper" },
                F["wrapper-start"],
                B.virtual
                  ? (function (e, t, n) {
                      if (!n) return null;
                      const i = e.isHorizontal()
                        ? {
                            [e.rtlTranslate
                              ? "right"
                              : "left"]: `${n.offset}px`,
                          }
                        : { top: `${n.offset}px` };
                      return t
                        .filter((e, t) => t >= n.from && t <= n.to)
                        .map((t) => r.cloneElement(t, { swiper: e, style: i }));
                    })(A.current, V, M)
                  : !B.loop || (A.current && A.current.destroyed)
                  ? V.map((e) => r.cloneElement(e, { swiper: A.current }))
                  : (function (e, t, n) {
                      const i = t.map((t, n) =>
                        r.cloneElement(t, {
                          swiper: e,
                          "data-swiper-slide-index": n,
                        })
                      );
                      function s(e, t, i) {
                        return r.cloneElement(e, {
                          key: `${e.key}-duplicate-${t}-${i}`,
                          className: `${e.props.className || ""} ${
                            n.slideDuplicateClass
                          }`,
                        });
                      }
                      if (n.loopFillGroupWithBlank) {
                        const e =
                          n.slidesPerGroup - (i.length % n.slidesPerGroup);
                        if (e !== n.slidesPerGroup)
                          for (let t = 0; t < e; t += 1) {
                            const e = r.createElement("div", {
                              className: `${n.slideClass} ${n.slideBlankClass}`,
                            });
                            i.push(e);
                          }
                      }
                      "auto" !== n.slidesPerView ||
                        n.loopedSlides ||
                        (n.loopedSlides = i.length);
                      const o = p(i, n),
                        a = [],
                        l = [];
                      return (
                        i.forEach((e, t) => {
                          t < o && l.push(s(e, t, "prepend")),
                            t < i.length &&
                              t >= i.length - o &&
                              a.push(s(e, t, "append"));
                        }),
                        e && (e.loopedSlides = o),
                        [...a, ...i, ...l]
                      );
                    })(A.current, V, B),
                F["wrapper-end"]
              ),
              a(B) &&
                r.createElement(
                  r.Fragment,
                  null,
                  r.createElement("div", {
                    ref: D,
                    className: "swiper-button-prev",
                  }),
                  r.createElement("div", {
                    ref: z,
                    className: "swiper-button-next",
                  })
                ),
              c(B) &&
                r.createElement("div", {
                  ref: G,
                  className: "swiper-scrollbar",
                }),
              l(B) &&
                r.createElement("div", {
                  ref: N,
                  className: "swiper-pagination",
                }),
              F["container-end"]
            )
          )
        );
      });
      function T() {
        return (
          (T =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          T.apply(this, arguments)
        );
      }
      b.displayName = "Swiper";
      const S = (0, r.forwardRef)(function (e, t) {
        let {
          tag: n = "div",
          children: i,
          className: s = "",
          swiper: o,
          zoom: a,
          virtualIndex: l,
          ...c
        } = void 0 === e ? {} : e;
        const u = (0, r.useRef)(null),
          [p, f] = (0, r.useState)("swiper-slide");
        function h(e, t, n) {
          t === u.current && f(n);
        }
        v(() => {
          if ((t && (t.current = u.current), u.current && o)) {
            if (!o.destroyed)
              return (
                o.on("_slideClass", h),
                () => {
                  o && o.off("_slideClass", h);
                }
              );
            "swiper-slide" !== p && f("swiper-slide");
          }
        }),
          v(() => {
            o && u.current && !o.destroyed && f(o.getSlideClasses(u.current));
          }, [o]);
        const m = {
            isActive:
              p.indexOf("swiper-slide-active") >= 0 ||
              p.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: p.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: p.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              p.indexOf("swiper-slide-prev") >= 0 ||
              p.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              p.indexOf("swiper-slide-next") >= 0 ||
              p.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          w = () => ("function" === typeof i ? i(m) : i);
        return r.createElement(
          n,
          T(
            {
              ref: u,
              className: d(`${p}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": l,
            },
            c
          ),
          r.createElement(
            g.Provider,
            { value: m },
            a
              ? r.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof a ? a : void 0,
                  },
                  w()
                )
              : w()
          )
        );
      });
      S.displayName = "SwiperSlide";
    },
    965: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function i(e = {}, t = {}) {
        Object.keys(t).forEach((n) => {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : r(t[n]) &&
              r(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              i(e[n], t[n]);
        });
      }
      n.d(t, {
        Rv: function () {
          return re;
        },
        Gk: function () {
          return ne;
        },
        ZP: function () {
          return te;
        },
      });
      const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function o() {
        const e = "undefined" !== typeof document ? document : {};
        return i(e, s), e;
      }
      const a = {
        document: s,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function l() {
        const e = "undefined" !== typeof window ? window : {};
        return i(e, a), e;
      }
      class c extends Array {
        constructor(e) {
          "number" === typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function d(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...d(e)) : t.push(e);
          }),
          t
        );
      }
      function u(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function p(e, t) {
        const n = l(),
          r = o();
        let i = [];
        if (!t && e instanceof c) return e;
        if (!e) return new c(i);
        if ("string" === typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = r.createElement(e);
            t.innerHTML = n;
            for (let n = 0; n < t.childNodes.length; n += 1)
              i.push(t.childNodes[n]);
          } else
            i = (function (e, t) {
              if ("string" !== typeof e) return [e];
              const n = [],
                r = t.querySelectorAll(e);
              for (let i = 0; i < r.length; i += 1) n.push(r[i]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) i.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof c) return e;
          i = e;
        }
        return new c(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(i)
        );
      }
      p.fn = c.prototype;
      const f = "resize scroll".split(" ");
      function h(e) {
        return function (...t) {
          if ("undefined" === typeof t[0]) {
            for (let t = 0; t < this.length; t += 1)
              f.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      h("click"),
        h("blur"),
        h("focus"),
        h("focusin"),
        h("focusout"),
        h("keyup"),
        h("keydown"),
        h("keypress"),
        h("submit"),
        h("change"),
        h("mousedown"),
        h("mousemove"),
        h("mouseup"),
        h("mouseenter"),
        h("mouseleave"),
        h("mouseout"),
        h("mouseover"),
        h("touchstart"),
        h("touchend"),
        h("touchmove"),
        h("resize"),
        h("scroll");
      const m = {
        addClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          return (
            u(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = d(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, r, i] = e;
          function s(e) {
            const t = e.target;
            if (!t) return;
            const i = e.target.dom7EventData || [];
            if ((i.indexOf(e) < 0 && i.unshift(e), p(t).is(n))) r.apply(t, i);
            else {
              const e = p(t).parents();
              for (let t = 0; t < e.length; t += 1)
                p(e[t]).is(n) && r.apply(e[t], i);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
          }
          "function" === typeof e[1] && (([t, r, i] = e), (n = void 0)),
            i || (i = !1);
          const a = t.split(" ");
          let l;
          for (let c = 0; c < this.length; c += 1) {
            const e = this[c];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const t = a[l];
                e.dom7LiveListeners || (e.dom7LiveListeners = {}),
                  e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []),
                  e.dom7LiveListeners[t].push({
                    listener: r,
                    proxyListener: s,
                  }),
                  e.addEventListener(t, s, i);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const t = a[l];
                e.dom7Listeners || (e.dom7Listeners = {}),
                  e.dom7Listeners[t] || (e.dom7Listeners[t] = []),
                  e.dom7Listeners[t].push({ listener: r, proxyListener: o }),
                  e.addEventListener(t, o, i);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, r, i] = e;
          "function" === typeof e[1] && (([t, r, i] = e), (n = void 0)),
            i || (i = !1);
          const s = t.split(" ");
          for (let o = 0; o < s.length; o += 1) {
            const e = s[o];
            for (let t = 0; t < this.length; t += 1) {
              const s = this[t];
              let o;
              if (
                (!n && s.dom7Listeners
                  ? (o = s.dom7Listeners[e])
                  : n && s.dom7LiveListeners && (o = s.dom7LiveListeners[e]),
                o && o.length)
              )
                for (let t = o.length - 1; t >= 0; t -= 1) {
                  const n = o[t];
                  (r && n.listener === r) ||
                  (r &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === r)
                    ? (s.removeEventListener(e, n.proxyListener, i),
                      o.splice(t, 1))
                    : r ||
                      (s.removeEventListener(e, n.proxyListener, i),
                      o.splice(t, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = l(),
            n = e[0].split(" "),
            r = e[1];
          for (let i = 0; i < n.length; i += 1) {
            const s = n[i];
            for (let n = 0; n < this.length; n += 1) {
              const i = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(s, {
                  detail: r,
                  bubbles: !0,
                  cancelable: !0,
                });
                (i.dom7EventData = e.filter((e, t) => t > 0)),
                  i.dispatchEvent(n),
                  (i.dom7EventData = []),
                  delete i.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = l();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = l(),
              t = o(),
              n = this[0],
              r = n.getBoundingClientRect(),
              i = t.body,
              s = n.clientTop || i.clientTop || 0,
              a = n.clientLeft || i.clientLeft || 0,
              c = n === e ? e.scrollY : n.scrollTop,
              d = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + c - s, left: r.left + d - a };
          }
          return null;
        },
        css: function (e, t) {
          const n = l();
          let r;
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (r = 0; r < this.length; r += 1)
                for (const t in e) this[r].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (r = 0; r < this.length; r += 1) this[r].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = l(),
            n = o(),
            r = this[0];
          let i, s;
          if (!r || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (r.matches) return r.matches(e);
            if (r.webkitMatchesSelector) return r.webkitMatchesSelector(e);
            if (r.msMatchesSelector) return r.msMatchesSelector(e);
            for (i = p(e), s = 0; s < i.length; s += 1)
              if (i[s] === r) return !0;
            return !1;
          }
          if (e === n) return r === n;
          if (e === t) return r === t;
          if (e.nodeType || e instanceof c) {
            for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
              if (i[s] === r) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          const t = this.length;
          if (e > t - 1) return p([]);
          if (e < 0) {
            const n = t + e;
            return p(n < 0 ? [] : [this[n]]);
          }
          return p([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = o();
          for (let r = 0; r < e.length; r += 1) {
            t = e[r];
            for (let e = 0; e < this.length; e += 1)
              if ("string" === typeof t) {
                const r = n.createElement("div");
                for (r.innerHTML = t; r.firstChild; )
                  this[e].appendChild(r.firstChild);
              } else if (t instanceof c)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = o();
          let n, r;
          for (n = 0; n < this.length; n += 1)
            if ("string" === typeof e) {
              const i = t.createElement("div");
              for (i.innerHTML = e, r = i.childNodes.length - 1; r >= 0; r -= 1)
                this[n].insertBefore(i.childNodes[r], this[n].childNodes[0]);
            } else if (e instanceof c)
              for (r = 0; r < e.length; r += 1)
                this[n].insertBefore(e[r], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                p(this[0].nextElementSibling).is(e)
                ? p([this[0].nextElementSibling])
                : p([])
              : this[0].nextElementSibling
              ? p([this[0].nextElementSibling])
              : p([])
            : p([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return p([]);
          for (; n.nextElementSibling; ) {
            const r = n.nextElementSibling;
            e ? p(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return p(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && p(t.previousElementSibling).is(e)
                ? p([t.previousElementSibling])
                : p([])
              : t.previousElementSibling
              ? p([t.previousElementSibling])
              : p([]);
          }
          return p([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return p([]);
          for (; n.previousElementSibling; ) {
            const r = n.previousElementSibling;
            e ? p(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return p(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? p(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return p(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let r = this[n].parentNode;
            for (; r; )
              e ? p(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          }
          return p(t);
        },
        closest: function (e) {
          let t = this;
          return "undefined" === typeof e
            ? p([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].querySelectorAll(e);
            for (let e = 0; e < r.length; e += 1) t.push(r[e]);
          }
          return p(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const r = this[n].children;
            for (let n = 0; n < r.length; n += 1)
              (e && !p(r[n]).is(e)) || t.push(r[n]);
          }
          return p(t);
        },
        filter: function (e) {
          return p(u(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(m).forEach((e) => {
        Object.defineProperty(p.fn, e, { value: m[e], writable: !0 });
      });
      var v = p;
      function g(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function w() {
        return Date.now();
      }
      function y(e, t) {
        void 0 === t && (t = "x");
        const n = l();
        let r, i, s;
        const o = (function (e) {
          const t = l();
          let n;
          return (
            t.getComputedStyle && (n = t.getComputedStyle(e, null)),
            !n && e.currentStyle && (n = e.currentStyle),
            n || (n = e.style),
            n
          );
        })(e);
        return (
          n.WebKitCSSMatrix
            ? ((i = o.transform || o.webkitTransform),
              i.split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (s = new n.WebKitCSSMatrix("none" === i ? "" : i)))
            : ((s =
                o.MozTransform ||
                o.OTransform ||
                o.MsTransform ||
                o.msTransform ||
                o.transform ||
                o
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (r = s.toString().split(","))),
          "x" === t &&
            (i = n.WebKitCSSMatrix
              ? s.m41
              : 16 === r.length
              ? parseFloat(r[12])
              : parseFloat(r[4])),
          "y" === t &&
            (i = n.WebKitCSSMatrix
              ? s.m42
              : 16 === r.length
              ? parseFloat(r[13])
              : parseFloat(r[5])),
          i || 0
        );
      }
      function b(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function T(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function S() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < arguments.length; n += 1) {
          const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !T(r)) {
            const n = Object.keys(Object(r)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, i = n.length; t < i; t += 1) {
              const i = n[t],
                s = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== s &&
                s.enumerable &&
                (b(e[i]) && b(r[i])
                  ? r[i].__swiper__
                    ? (e[i] = r[i])
                    : S(e[i], r[i])
                  : !b(e[i]) && b(r[i])
                  ? ((e[i] = {}),
                    r[i].__swiper__ ? (e[i] = r[i]) : S(e[i], r[i]))
                  : (e[i] = r[i]));
            }
          }
        }
        return e;
      }
      function x(e, t, n) {
        e.style.setProperty(t, n);
      }
      function E(e) {
        let { swiper: t, targetPosition: n, side: r } = e;
        const i = l(),
          s = -t.translate;
        let o,
          a = null;
        const c = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(t.cssModeFrameID);
        const d = n > s ? "next" : "prev",
          u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
          p = () => {
            (o = new Date().getTime()), null === a && (a = o);
            const e = Math.max(Math.min((o - a) / c, 1), 0),
              l = 0.5 - Math.cos(e * Math.PI) / 2;
            let d = s + l * (n - s);
            if ((u(d, n) && (d = n), t.wrapperEl.scrollTo({ [r]: d }), u(d, n)))
              return (
                (t.wrapperEl.style.overflow = "hidden"),
                (t.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ""),
                    t.wrapperEl.scrollTo({ [r]: d });
                }),
                void i.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = i.requestAnimationFrame(p);
          };
        p();
      }
      let C, M, P;
      function k() {
        return (
          C ||
            (C = (function () {
              const e = l(),
                t = o();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (n) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          C
        );
      }
      function _(e) {
        return (
          void 0 === e && (e = {}),
          M ||
            (M = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e;
              const n = k(),
                r = l(),
                i = r.navigator.platform,
                s = t || r.navigator.userAgent,
                o = { ios: !1, android: !1 },
                a = r.screen.width,
                c = r.screen.height,
                d = s.match(/(Android);?[\s\/]+([\d.]+)?/);
              let u = s.match(/(iPad).*OS\s([\d_]+)/);
              const p = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
              let m = "MacIntel" === i;
              return (
                !u &&
                  m &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${c}`) >= 0 &&
                  ((u = s.match(/(Version)\/([\d.]+)/)),
                  u || (u = [0, 1, "13_0_0"]),
                  (m = !1)),
                d && !h && ((o.os = "android"), (o.android = !0)),
                (u || f || p) && ((o.os = "ios"), (o.ios = !0)),
                o
              );
            })(e)),
          M
        );
      }
      function O() {
        return (
          P ||
            (P = (function () {
              const e = l();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          P
        );
      }
      var L = {
        on(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          const i = n ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][i](t);
            }),
            r
          );
        },
        once(e, t, n) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
              s[o] = arguments[o];
            t.apply(r, s);
          }
          return (i.__emitterProxy = t), r.on(e, i, n);
        },
        onAny(e, t) {
          const n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          const r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off(e, t) {
          const n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach((e) => {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach((r, i) => {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(i, 1);
                    });
              }),
              n)
            : n;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, n, r;
          for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
            s[o] = arguments[o];
          "string" === typeof s[0] || Array.isArray(s[0])
            ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
            : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
            n.unshift(r);
          return (
            (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(r, [t, ...n]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(r, n);
                  });
            }),
            e
          );
        },
      };
      var A = {
        updateSize: function () {
          const e = this;
          let t, n;
          const r = e.$el;
          (t =
            "undefined" !== typeof e.params.width && null !== e.params.width
              ? e.params.width
              : r[0].clientWidth),
            (n =
              "undefined" !== typeof e.params.height && null !== e.params.height
                ? e.params.height
                : r[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === n && e.isVertical()) ||
              ((t =
                t -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (n =
                n -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(n) && (n = 0),
              Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          const r = e.params,
            { $wrapperEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
            l = e.virtual && r.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = i.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let p = [];
          const f = [],
            h = [];
          let m = r.slidesOffsetBefore;
          "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
          let v = r.slidesOffsetAfter;
          "function" === typeof v && (v = r.slidesOffsetAfter.call(e));
          const g = e.snapGrid.length,
            w = e.slidesGrid.length;
          let y = r.spaceBetween,
            b = -m,
            T = 0,
            S = 0;
          if ("undefined" === typeof s) return;
          "string" === typeof y &&
            y.indexOf("%") >= 0 &&
            (y = (parseFloat(y.replace("%", "")) / 100) * s),
            (e.virtualSize = -y),
            o
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            r.centeredSlides &&
              r.cssMode &&
              (x(e.wrapperEl, "--swiper-centered-offset-before", ""),
              x(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const E = r.grid && r.grid.rows > 1 && e.grid;
          let C;
          E && e.grid.initSlides(u);
          const M =
            "auto" === r.slidesPerView &&
            r.breakpoints &&
            Object.keys(r.breakpoints).filter(
              (e) => "undefined" !== typeof r.breakpoints[e].slidesPerView
            ).length > 0;
          for (let x = 0; x < u; x += 1) {
            C = 0;
            const i = d.eq(x);
            if (
              (E && e.grid.updateSlide(x, i, u, t), "none" !== i.css("display"))
            ) {
              if ("auto" === r.slidesPerView) {
                M && (d[x].style[t("width")] = "");
                const s = getComputedStyle(i[0]),
                  o = i[0].style.transform,
                  a = i[0].style.webkitTransform;
                if (
                  (o && (i[0].style.transform = "none"),
                  a && (i[0].style.webkitTransform = "none"),
                  r.roundLengths)
                )
                  C = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                else {
                  const e = n(s, "width"),
                    t = n(s, "padding-left"),
                    r = n(s, "padding-right"),
                    o = n(s, "margin-left"),
                    a = n(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + o + a;
                  else {
                    const { clientWidth: n, offsetWidth: s } = i[0];
                    C = e + t + r + o + a + (s - n);
                  }
                }
                o && (i[0].style.transform = o),
                  a && (i[0].style.webkitTransform = a),
                  r.roundLengths && (C = Math.floor(C));
              } else
                (C = (s - (r.slidesPerView - 1) * y) / r.slidesPerView),
                  r.roundLengths && (C = Math.floor(C)),
                  d[x] && (d[x].style[t("width")] = `${C}px`);
              d[x] && (d[x].swiperSlideSize = C),
                h.push(C),
                r.centeredSlides
                  ? ((b = b + C / 2 + T / 2 + y),
                    0 === T && 0 !== x && (b = b - s / 2 - y),
                    0 === x && (b = b - s / 2 - y),
                    Math.abs(b) < 0.001 && (b = 0),
                    r.roundLengths && (b = Math.floor(b)),
                    S % r.slidesPerGroup === 0 && p.push(b),
                    f.push(b))
                  : (r.roundLengths && (b = Math.floor(b)),
                    (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                      e.params.slidesPerGroup ===
                      0 && p.push(b),
                    f.push(b),
                    (b = b + C + y)),
                (e.virtualSize += C + y),
                (T = C),
                (S += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, s) + v),
            o &&
              a &&
              ("slide" === r.effect || "coverflow" === r.effect) &&
              i.css({ width: `${e.virtualSize + r.spaceBetween}px` }),
            r.setWrapperSize &&
              i.css({ [t("width")]: `${e.virtualSize + r.spaceBetween}px` }),
            E && e.grid.updateWrapperSize(C, p, t),
            !r.centeredSlides)
          ) {
            const t = [];
            for (let n = 0; n < p.length; n += 1) {
              let i = p[n];
              r.roundLengths && (i = Math.floor(i)),
                p[n] <= e.virtualSize - s && t.push(i);
            }
            (p = t),
              Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) > 1 &&
                p.push(e.virtualSize - s);
          }
          if ((0 === p.length && (p = [0]), 0 !== r.spaceBetween)) {
            const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !r.cssMode || t !== d.length - 1).css({
              [n]: `${y}px`,
            });
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            h.forEach((t) => {
              e += t + (r.spaceBetween ? r.spaceBetween : 0);
            }),
              (e -= r.spaceBetween);
            const t = e - s;
            p = p.map((e) => (e < 0 ? -m : e > t ? t + v : e));
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (
              (h.forEach((t) => {
                e += t + (r.spaceBetween ? r.spaceBetween : 0);
              }),
              (e -= r.spaceBetween),
              e < s)
            ) {
              const t = (s - e) / 2;
              p.forEach((e, n) => {
                p[n] = e - t;
              }),
                f.forEach((e, n) => {
                  f[n] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: f,
              slidesSizesGrid: h,
            }),
            r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
          ) {
            x(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
              x(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - h[h.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              n = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + n));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            p.length !== g &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            f.length !== w && e.emit("slidesGridLengthChange"),
            r.watchSlidesProgress && e.updateSlidesOffset(),
            !l && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
          ) {
            const t = `${r.containerModifierClass}backface-hidden`,
              n = e.$el.hasClass(t);
            u <= r.maxBackfaceHiddenSlides
              ? n || e.$el.addClass(t)
              : n && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            n = [],
            r = t.virtual && t.params.virtual.enabled;
          let i,
            s = 0;
          "number" === typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const o = (e) =>
            r
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || v([])).each((e) => {
                n.push(e);
              });
            else
              for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                const e = t.activeIndex + i;
                if (e > t.slides.length && !r) break;
                n.push(o(e));
              }
          else n.push(o(t.activeIndex));
          for (i = 0; i < n.length; i += 1)
            if ("undefined" !== typeof n[i]) {
              const e = n[i].offsetHeight;
              s = e > s ? e : s;
            }
          (s || 0 === s) && t.$wrapperEl.css("height", `${s}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let n = 0; n < t.length; n += 1)
            t[n].swiperSlideOffset = e.isHorizontal()
              ? t[n].offsetLeft
              : t[n].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          const t = this,
            n = t.params,
            { slides: r, rtlTranslate: i, snapGrid: s } = t;
          if (0 === r.length) return;
          "undefined" === typeof r[0].swiperSlideOffset &&
            t.updateSlidesOffset();
          let o = -e;
          i && (o = e),
            r.removeClass(n.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let a = 0; a < r.length; a += 1) {
            const e = r[a];
            let l = e.swiperSlideOffset;
            n.cssMode && n.centeredSlides && (l -= r[0].swiperSlideOffset);
            const c =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (e.swiperSlideSize + n.spaceBetween),
              d =
                (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                (e.swiperSlideSize + n.spaceBetween),
              u = -(o - l),
              p = u + t.slidesSizesGrid[a];
            ((u >= 0 && u < t.size - 1) ||
              (p > 1 && p <= t.size) ||
              (u <= 0 && p >= t.size)) &&
              (t.visibleSlides.push(e),
              t.visibleSlidesIndexes.push(a),
              r.eq(a).addClass(n.slideVisibleClass)),
              (e.progress = i ? -c : c),
              (e.originalProgress = i ? -d : d);
          }
          t.visibleSlides = v(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if ("undefined" === typeof e) {
            const n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          const n = t.params,
            r = t.maxTranslate() - t.minTranslate();
          let { progress: i, isBeginning: s, isEnd: o } = t;
          const a = s,
            l = o;
          0 === r
            ? ((i = 0), (s = !0), (o = !0))
            : ((i = (e - t.minTranslate()) / r), (s = i <= 0), (o = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: s, isEnd: o }),
            (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
              t.updateSlidesProgress(e),
            s && !a && t.emit("reachBeginning toEdge"),
            o && !l && t.emit("reachEnd toEdge"),
            ((a && !s) || (l && !o)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: n,
              $wrapperEl: r,
              activeIndex: i,
              realIndex: s,
            } = e,
            o = e.virtual && n.virtual.enabled;
          let a;
          t.removeClass(
            `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
          ),
            (a = o
              ? e.$wrapperEl.find(
                  `.${n.slideClass}[data-swiper-slide-index="${i}"]`
                )
              : t.eq(i)),
            a.addClass(n.slideActiveClass),
            n.loop &&
              (a.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass)
                : r
                    .children(
                      `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s}"]`
                    )
                    .addClass(n.slideDuplicateActiveClass));
          let l = a
            .nextAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slideNextClass);
          n.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(n.slideNextClass));
          let c = a
            .prevAll(`.${n.slideClass}`)
            .eq(0)
            .addClass(n.slidePrevClass);
          n.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
            n.loop &&
              (l.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicateNextClass),
              c.hasClass(n.slideDuplicateClass)
                ? r
                    .children(
                      `.${n.slideClass}:not(.${
                        n.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)
                : r
                    .children(
                      `.${n.slideClass}.${
                        n.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(n.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            n = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: r,
              snapGrid: i,
              params: s,
              activeIndex: o,
              realIndex: a,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if ("undefined" === typeof d) {
            for (let e = 0; e < r.length; e += 1)
              "undefined" !== typeof r[e + 1]
                ? n >= r[e] && n < r[e + 1] - (r[e + 1] - r[e]) / 2
                  ? (d = e)
                  : n >= r[e] && n < r[e + 1] && (d = e + 1)
                : n >= r[e] && (d = e);
            s.normalizeSlideIndex &&
              (d < 0 || "undefined" === typeof d) &&
              (d = 0);
          }
          if (i.indexOf(n) >= 0) c = i.indexOf(n);
          else {
            const e = Math.min(s.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / s.slidesPerGroup);
          }
          if ((c >= i.length && (c = i.length - 1), d === o))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: o,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            a !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            n = t.params,
            r = v(e).closest(`.${n.slideClass}`)[0];
          let i,
            s = !1;
          if (r)
            for (let o = 0; o < t.slides.length; o += 1)
              if (t.slides[o] === r) {
                (s = !0), (i = o);
                break;
              }
          if (!r || !s)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = r),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  v(r).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = i),
            n.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      var I = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          const {
            params: t,
            rtlTranslate: n,
            translate: r,
            $wrapperEl: i,
          } = this;
          if (t.virtualTranslate) return n ? -r : r;
          if (t.cssMode) return r;
          let s = y(i[0], e);
          return n && (s = -s), s || 0;
        },
        setTranslate: function (e, t) {
          const n = this,
            {
              rtlTranslate: r,
              params: i,
              $wrapperEl: s,
              wrapperEl: o,
              progress: a,
            } = n;
          let l,
            c = 0,
            d = 0;
          n.isHorizontal() ? (c = r ? -e : e) : (d = e),
            i.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            i.cssMode
              ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -c : -d)
              : i.virtualTranslate ||
                s.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? c : d);
          const u = n.maxTranslate() - n.minTranslate();
          (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
            l !== a && n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, i) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          const s = this,
            { params: o, wrapperEl: a } = s;
          if (s.animating && o.preventInteractionOnTransition) return !1;
          const l = s.minTranslate(),
            c = s.maxTranslate();
          let d;
          if (
            ((d = r && e > l ? l : r && e < c ? c : e),
            s.updateProgress(d),
            o.cssMode)
          ) {
            const e = s.isHorizontal();
            if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!s.support.smoothScroll)
                return (
                  E({
                    swiper: s,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (s.setTransition(0),
                s.setTranslate(d),
                n &&
                  (s.emit("beforeTransitionStart", t, i),
                  s.emit("transitionEnd")))
              : (s.setTransition(t),
                s.setTranslate(d),
                n &&
                  (s.emit("beforeTransitionStart", t, i),
                  s.emit("transitionStart")),
                s.animating ||
                  ((s.animating = !0),
                  s.onTranslateToWrapperTransitionEnd ||
                    (s.onTranslateToWrapperTransitionEnd = function (e) {
                      s &&
                        !s.destroyed &&
                        e.target === this &&
                        (s.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        s.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          s.onTranslateToWrapperTransitionEnd
                        ),
                        (s.onTranslateToWrapperTransitionEnd = null),
                        delete s.onTranslateToWrapperTransitionEnd,
                        n && s.emit("transitionEnd"));
                    }),
                  s.$wrapperEl[0].addEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  s.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    s.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function $(e) {
        let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
        const { activeIndex: s, previousIndex: o } = t;
        let a = r;
        if (
          (a || (a = s > o ? "next" : s < o ? "prev" : "reset"),
          t.emit(`transition${i}`),
          n && s !== o)
        ) {
          if ("reset" === a) return void t.emit(`slideResetTransition${i}`);
          t.emit(`slideChangeTransition${i}`),
            "next" === a
              ? t.emit(`slideNextTransition${i}`)
              : t.emit(`slidePrevTransition${i}`);
        }
      }
      var z = {
        slideTo: function (e, t, n, r, i) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" === typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const s = this;
          let o = e;
          o < 0 && (o = 0);
          const {
            params: a,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: p,
            wrapperEl: f,
            enabled: h,
          } = s;
          if (
            (s.animating && a.preventInteractionOnTransition) ||
            (!h && !r && !i)
          )
            return !1;
          const m = Math.min(s.params.slidesPerGroupSkip, o);
          let v = m + Math.floor((o - m) / s.params.slidesPerGroup);
          v >= l.length && (v = l.length - 1),
            (u || a.initialSlide || 0) === (d || 0) &&
              n &&
              s.emit("beforeSlideChangeStart");
          const g = -l[v];
          if ((s.updateProgress(g), a.normalizeSlideIndex))
            for (let y = 0; y < c.length; y += 1) {
              const e = -Math.floor(100 * g),
                t = Math.floor(100 * c[y]),
                n = Math.floor(100 * c[y + 1]);
              "undefined" !== typeof c[y + 1]
                ? e >= t && e < n - (n - t) / 2
                  ? (o = y)
                  : e >= t && e < n && (o = y + 1)
                : e >= t && (o = y);
            }
          if (s.initialized && o !== u) {
            if (!s.allowSlideNext && g < s.translate && g < s.minTranslate())
              return !1;
            if (
              !s.allowSlidePrev &&
              g > s.translate &&
              g > s.maxTranslate() &&
              (u || 0) !== o
            )
              return !1;
          }
          let w;
          if (
            ((w = o > u ? "next" : o < u ? "prev" : "reset"),
            (p && -g === s.translate) || (!p && g === s.translate))
          )
            return (
              s.updateActiveIndex(o),
              a.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== a.effect && s.setTranslate(g),
              "reset" !== w && (s.transitionStart(n, w), s.transitionEnd(n, w)),
              !1
            );
          if (a.cssMode) {
            const e = s.isHorizontal(),
              n = p ? g : -g;
            if (0 === t) {
              const t = s.virtual && s.params.virtual.enabled;
              t &&
                ((s.wrapperEl.style.scrollSnapType = "none"),
                (s._immediateVirtual = !0)),
                (f[e ? "scrollLeft" : "scrollTop"] = n),
                t &&
                  requestAnimationFrame(() => {
                    (s.wrapperEl.style.scrollSnapType = ""),
                      (s._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!s.support.smoothScroll)
                return (
                  E({ swiper: s, targetPosition: n, side: e ? "left" : "top" }),
                  !0
                );
              f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
            }
            return !0;
          }
          return (
            s.setTransition(t),
            s.setTranslate(g),
            s.updateActiveIndex(o),
            s.updateSlidesClasses(),
            s.emit("beforeTransitionStart", t, r),
            s.transitionStart(n, w),
            0 === t
              ? s.transitionEnd(n, w)
              : s.animating ||
                ((s.animating = !0),
                s.onSlideToWrapperTransitionEnd ||
                  (s.onSlideToWrapperTransitionEnd = function (e) {
                    s &&
                      !s.destroyed &&
                      e.target === this &&
                      (s.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      s.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        s.onSlideToWrapperTransitionEnd
                      ),
                      (s.onSlideToWrapperTransitionEnd = null),
                      delete s.onSlideToWrapperTransitionEnd,
                      s.transitionEnd(n, w));
                  }),
                s.$wrapperEl[0].addEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                s.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  s.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          const i = this;
          let s = e;
          return i.params.loop && (s += i.loopedSlides), i.slideTo(s, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            { animating: i, enabled: s, params: o } = r;
          if (!s) return r;
          let a = o.slidesPerGroup;
          "auto" === o.slidesPerView &&
            1 === o.slidesPerGroup &&
            o.slidesPerGroupAuto &&
            (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          const l = r.activeIndex < o.slidesPerGroupSkip ? 1 : a;
          if (o.loop) {
            if (i && o.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return o.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + l, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          const r = this,
            {
              params: i,
              animating: s,
              snapGrid: o,
              slidesGrid: a,
              rtlTranslate: l,
              enabled: c,
            } = r;
          if (!c) return r;
          if (i.loop) {
            if (s && i.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? r.translate : -r.translate),
            p = o.map((e) => d(e));
          let f = o[p.indexOf(u) - 1];
          if ("undefined" === typeof f && i.cssMode) {
            let e;
            o.forEach((t, n) => {
              u >= t && (e = n);
            }),
              "undefined" !== typeof e && (f = o[e > 0 ? e - 1 : e]);
          }
          let h = 0;
          if (
            ("undefined" !== typeof f &&
              ((h = a.indexOf(f)),
              h < 0 && (h = r.activeIndex - 1),
              "auto" === i.slidesPerView &&
                1 === i.slidesPerGroup &&
                i.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            i.rewind && r.isBeginning)
          ) {
            const i =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(i, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          const i = this;
          let s = i.activeIndex;
          const o = Math.min(i.params.slidesPerGroupSkip, s),
            a = o + Math.floor((s - o) / i.params.slidesPerGroup),
            l = i.rtlTranslate ? i.translate : -i.translate;
          if (l >= i.snapGrid[a]) {
            const e = i.snapGrid[a];
            l - e > (i.snapGrid[a + 1] - e) * r &&
              (s += i.params.slidesPerGroup);
          } else {
            const e = i.snapGrid[a - 1];
            l - e <= (i.snapGrid[a] - e) * r && (s -= i.params.slidesPerGroup);
          }
          return (
            (s = Math.max(s, 0)),
            (s = Math.min(s, i.slidesGrid.length - 1)),
            i.slideTo(s, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: n } = e,
            r =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let i,
            s = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (i = parseInt(
              v(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? s < e.loopedSlides - r / 2 ||
                  s > e.slides.length - e.loopedSlides + r / 2
                  ? (e.loopFix(),
                    (s = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    g(() => {
                      e.slideTo(s);
                    }))
                  : e.slideTo(s)
                : s > e.slides.length - r
                ? (e.loopFix(),
                  (s = n
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  g(() => {
                    e.slideTo(s);
                  }))
                : e.slideTo(s);
          } else e.slideTo(s);
        },
      };
      var D = {
        loopCreate: function () {
          const e = this,
            t = o(),
            { params: n, $wrapperEl: r } = e,
            i = r.children().length > 0 ? v(r.children()[0].parentNode) : r;
          i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
          let s = i.children(`.${n.slideClass}`);
          if (n.loopFillGroupWithBlank) {
            const e = n.slidesPerGroup - (s.length % n.slidesPerGroup);
            if (e !== n.slidesPerGroup) {
              for (let r = 0; r < e; r += 1) {
                const e = v(t.createElement("div")).addClass(
                  `${n.slideClass} ${n.slideBlankClass}`
                );
                i.append(e);
              }
              s = i.children(`.${n.slideClass}`);
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = s.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > s.length && (e.loopedSlides = s.length);
          const a = [],
            l = [];
          s.each((t, n) => {
            const r = v(t);
            n < e.loopedSlides && l.push(t),
              n < s.length && n >= s.length - e.loopedSlides && a.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (let o = 0; o < l.length; o += 1)
            i.append(v(l[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (let o = a.length - 1; o >= 0; o -= 1)
            i.prepend(v(a[o].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: n,
            loopedSlides: r,
            allowSlidePrev: i,
            allowSlideNext: s,
            snapGrid: o,
            rtlTranslate: a,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -o[t] - e.getTranslate();
          if (t < r) {
            (l = n.length - 3 * r + t), (l += r);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          } else if (t >= n.length - r) {
            (l = -n.length + t + r), (l += r);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((a ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = s), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: n } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            n.removeAttr("data-swiper-slide-index");
        },
      };
      function N(e) {
        const t = this,
          n = o(),
          r = l(),
          i = t.touchEventsData,
          { params: s, touches: a, enabled: c } = t;
        if (!c) return;
        if (t.animating && s.preventInteractionOnTransition) return;
        !t.animating && s.cssMode && s.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let u = v(d.target);
        if ("wrapper" === s.touchEventsTarget && !u.closest(t.wrapperEl).length)
          return;
        if (
          ((i.isTouchEvent = "touchstart" === d.type),
          !i.isTouchEvent && "which" in d && 3 === d.which)
        )
          return;
        if (!i.isTouchEvent && "button" in d && d.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        !!s.noSwipingClass &&
          "" !== s.noSwipingClass &&
          d.target &&
          d.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (u = v(e.path[0]));
        const p = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          f = !(!d.target || !d.target.shadowRoot);
        if (
          s.noSwiping &&
          (f
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(n) {
                    if (!n || n === o() || n === l()) return null;
                    n.assignedSlot && (n = n.assignedSlot);
                    const r = n.closest(e);
                    return r || n.getRootNode
                      ? r || t(n.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, u[0])
            : u.closest(p)[0])
        )
          return void (t.allowClick = !0);
        if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
        (a.currentX =
          "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
          (a.currentY =
            "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
        const h = a.currentX,
          m = a.currentY,
          g = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
          y = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (g && (h <= y || h >= r.innerWidth - y)) {
          if ("prevent" !== g) return;
          e.preventDefault();
        }
        if (
          (Object.assign(i, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (a.startX = h),
          (a.startY = m),
          (i.touchStartTime = w()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          s.threshold > 0 && (i.allowThresholdMove = !1),
          "touchstart" !== d.type)
        ) {
          let e = !0;
          u.is(i.focusableElements) &&
            ((e = !1), "SELECT" === u[0].nodeName && (i.isTouched = !1)),
            n.activeElement &&
              v(n.activeElement).is(i.focusableElements) &&
              n.activeElement !== u[0] &&
              n.activeElement.blur();
          const r = e && t.allowTouchMove && s.touchStartPreventDefault;
          (!s.touchStartForcePreventDefault && !r) ||
            u[0].isContentEditable ||
            d.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !s.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", d);
      }
      function G(e) {
        const t = o(),
          n = this,
          r = n.touchEventsData,
          { params: i, touches: s, rtlTranslate: a, enabled: l } = n;
        if (!l) return;
        let c = e;
        if ((c.originalEvent && (c = c.originalEvent), !r.isTouched))
          return void (
            r.startMoving &&
            r.isScrolling &&
            n.emit("touchMoveOpposite", c)
          );
        if (r.isTouchEvent && "touchmove" !== c.type) return;
        const d =
            "touchmove" === c.type &&
            c.targetTouches &&
            (c.targetTouches[0] || c.changedTouches[0]),
          u = "touchmove" === c.type ? d.pageX : c.pageX,
          p = "touchmove" === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
          return (s.startX = u), void (s.startY = p);
        if (!n.allowTouchMove)
          return (
            v(c.target).is(r.focusableElements) || (n.allowClick = !1),
            void (
              r.isTouched &&
              (Object.assign(s, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p,
              }),
              (r.touchStartTime = w()))
            )
          );
        if (r.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
          if (n.isVertical()) {
            if (
              (p < s.startY && n.translate <= n.maxTranslate()) ||
              (p > s.startY && n.translate >= n.minTranslate())
            )
              return (r.isTouched = !1), void (r.isMoved = !1);
          } else if (
            (u < s.startX && n.translate <= n.maxTranslate()) ||
            (u > s.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          r.isTouchEvent &&
          t.activeElement &&
          c.target === t.activeElement &&
          v(c.target).is(r.focusableElements)
        )
          return (r.isMoved = !0), void (n.allowClick = !1);
        if (
          (r.allowTouchCallbacks && n.emit("touchMove", c),
          c.targetTouches && c.targetTouches.length > 1)
        )
          return;
        (s.currentX = u), (s.currentY = p);
        const f = s.currentX - s.startX,
          h = s.currentY - s.startY;
        if (
          n.params.threshold &&
          Math.sqrt(f ** 2 + h ** 2) < n.params.threshold
        )
          return;
        if ("undefined" === typeof r.isScrolling) {
          let e;
          (n.isHorizontal() && s.currentY === s.startY) ||
          (n.isVertical() && s.currentX === s.startX)
            ? (r.isScrolling = !1)
            : f * f + h * h >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(h), Math.abs(f))) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                ? e > i.touchAngle
                : 90 - e > i.touchAngle));
        }
        if (
          (r.isScrolling && n.emit("touchMoveOpposite", c),
          "undefined" === typeof r.startMoving &&
            ((s.currentX === s.startX && s.currentY === s.startY) ||
              (r.startMoving = !0)),
          r.isScrolling)
        )
          return void (r.isTouched = !1);
        if (!r.startMoving) return;
        (n.allowClick = !1),
          !i.cssMode && c.cancelable && c.preventDefault(),
          i.touchMoveStopPropagation && !i.nested && c.stopPropagation(),
          r.isMoved ||
            (i.loop && !i.cssMode && n.loopFix(),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (r.allowMomentumBounce = !1),
            !i.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", c)),
          n.emit("sliderMove", c),
          (r.isMoved = !0);
        let m = n.isHorizontal() ? f : h;
        (s.diff = m),
          (m *= i.touchRatio),
          a && (m = -m),
          (n.swipeDirection = m > 0 ? "prev" : "next"),
          (r.currentTranslate = m + r.startTranslate);
        let g = !0,
          y = i.resistanceRatio;
        if (
          (i.touchReleaseOnEdges && (y = 0),
          m > 0 && r.currentTranslate > n.minTranslate()
            ? ((g = !1),
              i.resistance &&
                (r.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + r.startTranslate + m) ** y))
            : m < 0 &&
              r.currentTranslate < n.maxTranslate() &&
              ((g = !1),
              i.resistance &&
                (r.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - r.startTranslate - m) ** y)),
          g && (c.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (r.currentTranslate = r.startTranslate),
          i.threshold > 0)
        ) {
          if (!(Math.abs(m) > i.threshold || r.allowThresholdMove))
            return void (r.currentTranslate = r.startTranslate);
          if (!r.allowThresholdMove)
            return (
              (r.allowThresholdMove = !0),
              (s.startX = s.currentX),
              (s.startY = s.currentY),
              (r.currentTranslate = r.startTranslate),
              void (s.diff = n.isHorizontal()
                ? s.currentX - s.startX
                : s.currentY - s.startY)
            );
        }
        i.followFinger &&
          !i.cssMode &&
          (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
            i.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            i.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(r.currentTranslate),
          n.setTranslate(r.currentTranslate));
      }
      function B(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: r,
            touches: i,
            rtlTranslate: s,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && r.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        r.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = w(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = w()),
          g(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === i.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let u;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (u = r.followFinger
            ? s
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          r.cssMode)
        )
          return;
        if (t.params.freeMode && r.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          f = t.slidesSizesGrid[0];
        for (
          let g = 0;
          g < o.length;
          g += g < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
        ) {
          const e = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
          "undefined" !== typeof o[g + e]
            ? u >= o[g] && u < o[g + e] && ((p = g), (f = o[g + e] - o[g]))
            : u >= o[g] && ((p = g), (f = o[o.length - 1] - o[o.length - 2]));
        }
        let h = null,
          m = null;
        r.rewind &&
          (t.isBeginning
            ? (m =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (h = 0));
        const v = (u - o[p]) / f,
          y = p < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (d > r.longSwipesMs) {
          if (!r.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (v >= r.longSwipesRatio
              ? t.slideTo(r.rewind && t.isEnd ? h : p + y)
              : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (v > 1 - r.longSwipesRatio
                ? t.slideTo(p + y)
                : null !== m && v < 0 && Math.abs(v) > r.longSwipesRatio
                ? t.slideTo(m)
                : t.slideTo(p));
        } else {
          if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(p + y)
              : t.slideTo(p)
            : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + y),
              "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
        }
      }
      function j() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = i),
          (e.allowSlideNext = r),
          e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
      }
      function R(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function H() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
        if (!r) return;
        let i;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const s = e.maxTranslate() - e.minTranslate();
        (i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s),
          i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let V = !1;
      function F() {}
      const X = (e, t) => {
        const n = o(),
          {
            params: r,
            touchEvents: i,
            el: s,
            wrapperEl: a,
            device: l,
            support: c,
          } = e,
          d = !!r.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          p = t;
        if (c.touch) {
          const t = !(
            "touchstart" !== i.start ||
            !c.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          s[u](i.start, e.onTouchStart, t),
            s[u](
              i.move,
              e.onTouchMove,
              c.passiveListener ? { passive: !1, capture: d } : d
            ),
            s[u](i.end, e.onTouchEnd, t),
            i.cancel && s[u](i.cancel, e.onTouchEnd, t);
        } else
          s[u](i.start, e.onTouchStart, !1),
            n[u](i.move, e.onTouchMove, d),
            n[u](i.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          s[u]("click", e.onClick, !0),
          r.cssMode && a[u]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[p](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                j,
                !0
              )
            : e[p]("observerUpdate", j, !0);
      };
      var W = {
        attachEvents: function () {
          const e = this,
            t = o(),
            { params: n, support: r } = e;
          (e.onTouchStart = N.bind(e)),
            (e.onTouchMove = G.bind(e)),
            (e.onTouchEnd = B.bind(e)),
            n.cssMode && (e.onScroll = H.bind(e)),
            (e.onClick = R.bind(e)),
            r.touch && !V && (t.addEventListener("touchstart", F), (V = !0)),
            X(e, "on");
        },
        detachEvents: function () {
          X(this, "off");
        },
      };
      const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var q = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: n,
              loopedSlides: r = 0,
              params: i,
              $el: s,
            } = e,
            o = i.breakpoints;
          if (!o || (o && 0 === Object.keys(o).length)) return;
          const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in o ? o[a] : void 0) || e.originalParams,
            c = Y(e, i),
            d = Y(e, l),
            u = i.enabled;
          c && !d
            ? (s.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (s.addClass(`${i.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === i.grid.fill)) &&
                s.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const p = l.direction && l.direction !== i.direction,
            f = i.loop && (l.slidesPerView !== i.slidesPerView || p);
          p && n && e.changeDirection(), S(e.params, l);
          const h = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !h ? e.disable() : !u && h && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            f &&
              n &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - r + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), !e || ("container" === t && !n)))
            return;
          let r = !1;
          const i = l(),
            s = "window" === t ? i.innerHeight : n.clientHeight,
            o = Object.keys(e).map((e) => {
              if ("string" === typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: s * t, point: e };
              }
              return { value: e, point: e };
            });
          o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let a = 0; a < o.length; a += 1) {
            const { point: e, value: s } = o[a];
            "window" === t
              ? i.matchMedia(`(min-width: ${s}px)`).matches && (r = e)
              : s <= n.clientWidth && (r = e);
          }
          return r || "max";
        },
      };
      var Z = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: n,
              rtl: r,
              $el: i,
              device: s,
              support: o,
            } = e,
            a = (function (e, t) {
              const n = [];
              return (
                e.forEach((e) => {
                  "object" === typeof e
                    ? Object.keys(e).forEach((r) => {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !o.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: s.android },
                { ios: s.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push(...a), i.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      var U = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function K(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          const r = Object.keys(n)[0],
            i = n[r];
          "object" === typeof i && null !== i
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in i
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  S(t, n))
                : S(t, n))
            : S(t, n);
        };
      }
      const J = {
          eventsEmitter: L,
          update: A,
          translate: I,
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: r } = n;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                $({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const n = this,
                { params: r } = n;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  $({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: z,
          loop: D,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: W,
          breakpoints: q,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: r } = n;
              if (r) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: Z,
          images: {
            loadImage: function (e, t, n, r, i, s) {
              const o = l();
              let a;
              function c() {
                s && s();
              }
              v(e).parent("picture")[0] || (e.complete && i)
                ? c()
                : t
                ? ((a = new o.Image()),
                  (a.onload = c),
                  (a.onerror = c),
                  r && (a.sizes = r),
                  n && (a.srcset = n),
                  t && (a.src = t))
                : c();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                "undefined" !== typeof e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const r = e.imagesToLoad[n];
                e.loadImage(
                  r,
                  r.currentSrc || r.getAttribute("src"),
                  r.srcset || r.getAttribute("srcset"),
                  r.sizes || r.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        Q = {};
      class ee {
        constructor() {
          let e, t;
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i];
          if (
            (1 === r.length &&
            r[0].constructor &&
            "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
              ? (t = r[0])
              : ([e, t] = r),
            t || (t = {}),
            (t = S({}, t)),
            e && !t.el && (t.el = e),
            t.el && v(t.el).length > 1)
          ) {
            const e = [];
            return (
              v(t.el).each((n) => {
                const r = S({}, t, { el: n });
                e.push(new ee(r));
              }),
              e
            );
          }
          const s = this;
          (s.__swiper__ = !0),
            (s.support = k()),
            (s.device = _({ userAgent: t.userAgent })),
            (s.browser = O()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              s.modules.push(...t.modules);
          const o = {};
          s.modules.forEach((e) => {
            e({
              swiper: s,
              extendParams: K(t, o),
              on: s.on.bind(s),
              once: s.once.bind(s),
              off: s.off.bind(s),
              emit: s.emit.bind(s),
            });
          });
          const a = S({}, U, o);
          return (
            (s.params = S({}, a, Q, t)),
            (s.originalParams = S({}, s.params)),
            (s.passedParams = S({}, t)),
            s.params &&
              s.params.on &&
              Object.keys(s.params.on).forEach((e) => {
                s.on(e, s.params.on[e]);
              }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            (s.$ = v),
            Object.assign(s, {
              enabled: s.params.enabled,
              el: e,
              classNames: [],
              slides: v(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === s.params.direction,
              isVertical: () => "vertical" === s.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: s.params.allowSlideNext,
              allowSlidePrev: s.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (s.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (s.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  s.support.touch || !s.params.simulateTouch
                    ? s.touchEventsTouch
                    : s.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: s.params.focusableElements,
                lastClickTime: w(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: s.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            s.emit("_swiper"),
            s.params.init && s.init(),
            s
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const r = n.minTranslate(),
            i = (n.maxTranslate() - r) * e + r;
          n.translateTo(i, "undefined" === typeof t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const r = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: r }), e.emit("_slideClass", n, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: n,
            slides: r,
            slidesGrid: i,
            slidesSizesGrid: s,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = r[a].swiperSlideSize;
            for (let n = a + 1; n < r.length; n += 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              r[n] &&
                !e &&
                ((t += r[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let c = a + 1; c < r.length; c += 1) {
              (t ? i[c] + s[c] - i[a] < o : i[c] - i[a] < o) && (l += 1);
            }
          else
            for (let c = a - 1; c >= 0; c -= 1) {
              i[a] - i[c] < o && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function r() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let i;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (r(), e.params.autoHeight && e.updateAutoHeight())
              : ((i =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                i || r()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const n = this,
            r = n.params.direction;
          return (
            e || (e = "horizontal" === r ? "vertical" : "horizontal"),
            e === r ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${r}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = v(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const r = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let i = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = v(e.shadowRoot.querySelector(r()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children ? n.children(r()) : v(n).children(r());
          })();
          if (0 === i.length && t.params.createElements) {
            const e = o().createElement("div");
            (i = v(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                i.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: i,
              wrapperEl: i[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === i.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const n = this,
            { params: r, $el: i, $wrapperEl: s, slides: o } = n;
          return (
            "undefined" === typeof n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              r.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                i.removeAttr("style"),
                s.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        r.slideVisibleClass,
                        r.slideActiveClass,
                        r.slideNextClass,
                        r.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (n) {}
                    try {
                      delete t[e];
                    } catch (n) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          S(Q, e);
        }
        static get extendedDefaults() {
          return Q;
        }
        static get defaults() {
          return U;
        }
        static installModule(e) {
          ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
          const t = ee.prototype.__modules__;
          "function" === typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => ee.installModule(e)), ee)
            : (ee.installModule(e), ee);
        }
      }
      Object.keys(J).forEach((e) => {
        Object.keys(J[e]).forEach((t) => {
          ee.prototype[t] = J[e][t];
        });
      }),
        ee.use([
          function (e) {
            let { swiper: t, on: n, emit: r } = e;
            const i = l();
            let s = null,
              o = null;
            const a = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              c = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", () => {
              t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((s = new ResizeObserver((e) => {
                    o = i.requestAnimationFrame(() => {
                      const { width: n, height: r } = t;
                      let i = n,
                        s = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: n,
                          contentRect: r,
                          target: o,
                        } = e;
                        (o && o !== t.el) ||
                          ((i = r ? r.width : (n[0] || n).inlineSize),
                          (s = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (i === n && s === r) || a();
                    });
                  })),
                  s.observe(t.el))
                : (i.addEventListener("resize", a),
                  i.addEventListener("orientationchange", c));
            }),
              n("destroy", () => {
                o && i.cancelAnimationFrame(o),
                  s && s.unobserve && t.el && (s.unobserve(t.el), (s = null)),
                  i.removeEventListener("resize", a),
                  i.removeEventListener("orientationchange", c);
              });
          },
          function (e) {
            let { swiper: t, extendParams: n, on: r, emit: i } = e;
            const s = [],
              o = l(),
              a = function (e, t) {
                void 0 === t && (t = {});
                const n = new (o.MutationObserver || o.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function () {
                      i("observerUpdate", e[0]);
                    };
                    o.requestAnimationFrame
                      ? o.requestAnimationFrame(t)
                      : o.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  s.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) a(e[t]);
                  }
                  a(t.$el[0], { childList: t.params.observeSlideChildren }),
                    a(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      var te = ee;
      function ne(e) {
        let { swiper: t, extendParams: n, on: r, emit: i } = e;
        const s = l();
        let o;
        n({
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarget: "container",
            thresholdDelta: null,
            thresholdTime: null,
          },
        }),
          (t.mousewheel = { enabled: !1 });
        let a,
          c = w();
        const d = [];
        function u() {
          t.enabled && (t.mouseEntered = !0);
        }
        function p() {
          t.enabled && (t.mouseEntered = !1);
        }
        function f(e) {
          return (
            !(
              t.params.mousewheel.thresholdDelta &&
              e.delta < t.params.mousewheel.thresholdDelta
            ) &&
            !(
              t.params.mousewheel.thresholdTime &&
              w() - c < t.params.mousewheel.thresholdTime
            ) &&
            ((e.delta >= 6 && w() - c < 60) ||
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), i("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), i("scroll", e.raw)),
              (c = new s.Date().getTime()),
              !1))
          );
        }
        function h(e) {
          let n = e,
            r = !0;
          if (!t.enabled) return;
          const s = t.params.mousewheel;
          t.params.cssMode && n.preventDefault();
          let l = t.$el;
          if (
            ("container" !== t.params.mousewheel.eventsTarget &&
              (l = v(t.params.mousewheel.eventsTarget)),
            !t.mouseEntered && !l[0].contains(n.target) && !s.releaseOnEdges)
          )
            return !0;
          n.originalEvent && (n = n.originalEvent);
          let c = 0;
          const u = t.rtlTranslate ? -1 : 1,
            p = (function (e) {
              let t = 0,
                n = 0,
                r = 0,
                i = 0;
              return (
                "detail" in e && (n = e.detail),
                "wheelDelta" in e && (n = -e.wheelDelta / 120),
                "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120),
                "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                "axis" in e &&
                  e.axis === e.HORIZONTAL_AXIS &&
                  ((t = n), (n = 0)),
                (r = 10 * t),
                (i = 10 * n),
                "deltaY" in e && (i = e.deltaY),
                "deltaX" in e && (r = e.deltaX),
                e.shiftKey && !r && ((r = i), (i = 0)),
                (r || i) &&
                  e.deltaMode &&
                  (1 === e.deltaMode
                    ? ((r *= 40), (i *= 40))
                    : ((r *= 800), (i *= 800))),
                r && !t && (t = r < 1 ? -1 : 1),
                i && !n && (n = i < 1 ? -1 : 1),
                { spinX: t, spinY: n, pixelX: r, pixelY: i }
              );
            })(n);
          if (s.forceToAxis)
            if (t.isHorizontal()) {
              if (!(Math.abs(p.pixelX) > Math.abs(p.pixelY))) return !0;
              c = -p.pixelX * u;
            } else {
              if (!(Math.abs(p.pixelY) > Math.abs(p.pixelX))) return !0;
              c = -p.pixelY;
            }
          else
            c =
              Math.abs(p.pixelX) > Math.abs(p.pixelY)
                ? -p.pixelX * u
                : -p.pixelY;
          if (0 === c) return !0;
          s.invert && (c = -c);
          let h = t.getTranslate() + c * s.sensitivity;
          if (
            (h >= t.minTranslate() && (h = t.minTranslate()),
            h <= t.maxTranslate() && (h = t.maxTranslate()),
            (r =
              !!t.params.loop ||
              !(h === t.minTranslate() || h === t.maxTranslate())),
            r && t.params.nested && n.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled)
          ) {
            const e = {
                time: w(),
                delta: Math.abs(c),
                direction: Math.sign(c),
              },
              r =
                a &&
                e.time < a.time + 500 &&
                e.delta <= a.delta &&
                e.direction === a.direction;
            if (!r) {
              (a = void 0), t.params.loop && t.loopFix();
              let l = t.getTranslate() + c * s.sensitivity;
              const u = t.isBeginning,
                p = t.isEnd;
              if (
                (l >= t.minTranslate() && (l = t.minTranslate()),
                l <= t.maxTranslate() && (l = t.maxTranslate()),
                t.setTransition(0),
                t.setTranslate(l),
                t.updateProgress(),
                t.updateActiveIndex(),
                t.updateSlidesClasses(),
                ((!u && t.isBeginning) || (!p && t.isEnd)) &&
                  t.updateSlidesClasses(),
                t.params.freeMode.sticky)
              ) {
                clearTimeout(o), (o = void 0), d.length >= 15 && d.shift();
                const n = d.length ? d[d.length - 1] : void 0,
                  r = d[0];
                if (
                  (d.push(e),
                  n && (e.delta > n.delta || e.direction !== n.direction))
                )
                  d.splice(0);
                else if (
                  d.length >= 15 &&
                  e.time - r.time < 500 &&
                  r.delta - e.delta >= 1 &&
                  e.delta <= 6
                ) {
                  const n = c > 0 ? 0.8 : 0.2;
                  (a = e),
                    d.splice(0),
                    (o = g(() => {
                      t.slideToClosest(t.params.speed, !0, void 0, n);
                    }, 0));
                }
                o ||
                  (o = g(() => {
                    (a = e),
                      d.splice(0),
                      t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                  }, 500));
              }
              if (
                (r || i("scroll", n),
                t.params.autoplay &&
                  t.params.autoplayDisableOnInteraction &&
                  t.autoplay.stop(),
                l === t.minTranslate() || l === t.maxTranslate())
              )
                return !0;
            }
          } else {
            const n = {
              time: w(),
              delta: Math.abs(c),
              direction: Math.sign(c),
              raw: e,
            };
            d.length >= 2 && d.shift();
            const r = d.length ? d[d.length - 1] : void 0;
            if (
              (d.push(n),
              r
                ? (n.direction !== r.direction ||
                    n.delta > r.delta ||
                    n.time > r.time + 150) &&
                  f(n)
                : f(n),
              (function (e) {
                const n = t.params.mousewheel;
                if (e.direction < 0) {
                  if (t.isEnd && !t.params.loop && n.releaseOnEdges) return !0;
                } else if (t.isBeginning && !t.params.loop && n.releaseOnEdges)
                  return !0;
                return !1;
              })(n))
            )
              return !0;
          }
          return (
            n.preventDefault ? n.preventDefault() : (n.returnValue = !1), !1
          );
        }
        function m(e) {
          let n = t.$el;
          "container" !== t.params.mousewheel.eventsTarget &&
            (n = v(t.params.mousewheel.eventsTarget)),
            n[e]("mouseenter", u),
            n[e]("mouseleave", p),
            n[e]("wheel", h);
        }
        function y() {
          return t.params.cssMode
            ? (t.wrapperEl.removeEventListener("wheel", h), !0)
            : !t.mousewheel.enabled &&
                (m("on"), (t.mousewheel.enabled = !0), !0);
        }
        function b() {
          return t.params.cssMode
            ? (t.wrapperEl.addEventListener(event, h), !0)
            : !!t.mousewheel.enabled &&
                (m("off"), (t.mousewheel.enabled = !1), !0);
        }
        r("init", () => {
          !t.params.mousewheel.enabled && t.params.cssMode && b(),
            t.params.mousewheel.enabled && y();
        }),
          r("destroy", () => {
            t.params.cssMode && y(), t.mousewheel.enabled && b();
          }),
          Object.assign(t.mousewheel, { enable: y, disable: b });
      }
      function re(e) {
        let { swiper: t, extendParams: n, emit: r, once: i } = e;
        n({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: 0.02,
          },
        }),
          Object.assign(t, {
            freeMode: {
              onTouchStart: function () {
                const e = t.getTranslate();
                t.setTranslate(e),
                  t.setTransition(0),
                  (t.touchEventsData.velocities.length = 0),
                  t.freeMode.onTouchEnd({
                    currentPos: t.rtl ? t.translate : -t.translate,
                  });
              },
              onTouchMove: function () {
                const { touchEventsData: e, touches: n } = t;
                0 === e.velocities.length &&
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "startX" : "startY"],
                    time: e.touchStartTime,
                  }),
                  e.velocities.push({
                    position: n[t.isHorizontal() ? "currentX" : "currentY"],
                    time: w(),
                  });
              },
              onTouchEnd: function (e) {
                let { currentPos: n } = e;
                const {
                    params: s,
                    $wrapperEl: o,
                    rtlTranslate: a,
                    snapGrid: l,
                    touchEventsData: c,
                  } = t,
                  d = w() - c.touchStartTime;
                if (n < -t.minTranslate()) t.slideTo(t.activeIndex);
                else if (n > -t.maxTranslate())
                  t.slides.length < l.length
                    ? t.slideTo(l.length - 1)
                    : t.slideTo(t.slides.length - 1);
                else {
                  if (s.freeMode.momentum) {
                    if (c.velocities.length > 1) {
                      const e = c.velocities.pop(),
                        n = c.velocities.pop(),
                        r = e.position - n.position,
                        i = e.time - n.time;
                      (t.velocity = r / i),
                        (t.velocity /= 2),
                        Math.abs(t.velocity) < s.freeMode.minimumVelocity &&
                          (t.velocity = 0),
                        (i > 150 || w() - e.time > 300) && (t.velocity = 0);
                    } else t.velocity = 0;
                    (t.velocity *= s.freeMode.momentumVelocityRatio),
                      (c.velocities.length = 0);
                    let e = 1e3 * s.freeMode.momentumRatio;
                    const n = t.velocity * e;
                    let d = t.translate + n;
                    a && (d = -d);
                    let u,
                      p = !1;
                    const f =
                      20 *
                      Math.abs(t.velocity) *
                      s.freeMode.momentumBounceRatio;
                    let h;
                    if (d < t.maxTranslate())
                      s.freeMode.momentumBounce
                        ? (d + t.maxTranslate() < -f &&
                            (d = t.maxTranslate() - f),
                          (u = t.maxTranslate()),
                          (p = !0),
                          (c.allowMomentumBounce = !0))
                        : (d = t.maxTranslate()),
                        s.loop && s.centeredSlides && (h = !0);
                    else if (d > t.minTranslate())
                      s.freeMode.momentumBounce
                        ? (d - t.minTranslate() > f &&
                            (d = t.minTranslate() + f),
                          (u = t.minTranslate()),
                          (p = !0),
                          (c.allowMomentumBounce = !0))
                        : (d = t.minTranslate()),
                        s.loop && s.centeredSlides && (h = !0);
                    else if (s.freeMode.sticky) {
                      let e;
                      for (let t = 0; t < l.length; t += 1)
                        if (l[t] > -d) {
                          e = t;
                          break;
                        }
                      (d =
                        Math.abs(l[e] - d) < Math.abs(l[e - 1] - d) ||
                        "next" === t.swipeDirection
                          ? l[e]
                          : l[e - 1]),
                        (d = -d);
                    }
                    if (
                      (h &&
                        i("transitionEnd", () => {
                          t.loopFix();
                        }),
                      0 !== t.velocity)
                    ) {
                      if (
                        ((e = a
                          ? Math.abs((-d - t.translate) / t.velocity)
                          : Math.abs((d - t.translate) / t.velocity)),
                        s.freeMode.sticky)
                      ) {
                        const n = Math.abs((a ? -d : d) - t.translate),
                          r = t.slidesSizesGrid[t.activeIndex];
                        e =
                          n < r
                            ? s.speed
                            : n < 2 * r
                            ? 1.5 * s.speed
                            : 2.5 * s.speed;
                      }
                    } else if (s.freeMode.sticky)
                      return void t.slideToClosest();
                    s.freeMode.momentumBounce && p
                      ? (t.updateProgress(u),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        (t.animating = !0),
                        o.transitionEnd(() => {
                          t &&
                            !t.destroyed &&
                            c.allowMomentumBounce &&
                            (r("momentumBounce"),
                            t.setTransition(s.speed),
                            setTimeout(() => {
                              t.setTranslate(u),
                                o.transitionEnd(() => {
                                  t && !t.destroyed && t.transitionEnd();
                                });
                            }, 0));
                        }))
                      : t.velocity
                      ? (r("_freeModeNoMomentumRelease"),
                        t.updateProgress(d),
                        t.setTransition(e),
                        t.setTranslate(d),
                        t.transitionStart(!0, t.swipeDirection),
                        t.animating ||
                          ((t.animating = !0),
                          o.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          })))
                      : t.updateProgress(d),
                      t.updateActiveIndex(),
                      t.updateSlidesClasses();
                  } else {
                    if (s.freeMode.sticky) return void t.slideToClosest();
                    s.freeMode && r("_freeModeNoMomentumRelease");
                  }
                  (!s.freeMode.momentum || d >= s.longSwipesMs) &&
                    (t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses());
                }
              },
            },
          });
      }
    },
  },
]);
