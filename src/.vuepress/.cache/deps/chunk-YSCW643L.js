import {
  C,
  E
} from "./chunk-ZUTOARWW.js";
import {
  Ax,
  Bx,
  Fx,
  Lx,
  Sn,
  So,
  Sx,
  To,
  Tx,
  bx,
  kx,
  vx,
  wx
} from "./chunk-5KIEU262.js";

// node_modules/.pnpm/mermaid@10.2.2/node_modules/mermaid/dist/arc-2c65c00d.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, q, E2, h, v, J, a) {
  var s = q - l, n = E2 - x, m = J - h, i = a - v, r = i * s - m * n;
  if (!(r * r < To))
    return r = (m * (x - v) - i * (l - h)) / r, [l + r * s, x + r * n];
}
function V(l, x, q, E2, h, v, J) {
  var a = l - q, s = x - E2, n = (J ? v : -v) / Bx(a * a + s * s), m = n * s, i = -n * a, r = l + m, f = x + i, c = q + m, w = E2 + i, o = (r + c) / 2, B = (f + w) / 2, p = c - r, g = w - f, A = p * p + g * g, C2 = h - v, P = r * w - c * f, F = (g < 0 ? -1 : 1) * Bx(kx(0, C2 * C2 * A - P * P)), G = (P * g - p * F) / A, d = (-P * p - g * F) / A, R = (P * g + p * F) / A, T = (-P * p + g * F) / A, e = G - o, u = d - B, K = R - o, L = T - B;
  return e * e + u * u > K * K + L * L && (G = R, d = T), {
    cx: G,
    cy: d,
    x01: -m,
    y01: -i,
    x11: G * (h / C2 - 1),
    y11: d * (h / C2 - 1)
  };
}
function hn() {
  var l = fn, x = cn, q = E(0), E2 = null, h = yn, v = gn, J = mn, a = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), r = +x.apply(this, arguments), f = h.apply(this, arguments) - So, c = v.apply(this, arguments) - So, w = bx(c - f), o = c > f;
    if (a || (a = n = C()), r < i && (m = r, r = i, i = m), !(r > To))
      a.moveTo(0, 0);
    else if (w > Fx - To)
      a.moveTo(r * Sx(f), r * wx(f)), a.arc(0, 0, r, f, c, !o), i > To && (a.moveTo(i * Sx(c), i * wx(c)), a.arc(0, 0, i, c, f, o));
    else {
      var B = f, p = c, g = f, A = c, C2 = w, P = w, F = J.apply(this, arguments) / 2, G = F > To && (E2 ? +E2.apply(this, arguments) : Bx(i * i + r * r)), d = vx(bx(r - i) / 2, +q.apply(this, arguments)), R = d, T = d, e, u;
      if (G > To) {
        var K = Ax(G / i * wx(F)), L = Ax(G / r * wx(F));
        (C2 -= K * 2) > To ? (K *= o ? 1 : -1, g += K, A -= K) : (C2 = 0, g = A = (f + c) / 2), (P -= L * 2) > To ? (L *= o ? 1 : -1, B += L, p -= L) : (P = 0, B = p = (f + c) / 2);
      }
      var O = r * Sx(B), Q = r * wx(B), j = i * Sx(A), z = i * wx(A);
      if (d > To) {
        var N = r * Sx(p), U = r * wx(p), W = i * Sx(g), X = i * wx(g), I;
        if (w < Sn && (I = pn(O, Q, W, X, N, U, j, z))) {
          var Y = O - I[0], Z = Q - I[1], $ = N - I[0], k = U - I[1], _ = 1 / wx(Lx((Y * $ + Z * k) / (Bx(Y * Y + Z * Z) * Bx($ * $ + k * k))) / 2), nn = Bx(I[0] * I[0] + I[1] * I[1]);
          R = vx(d, (i - nn) / (_ - 1)), T = vx(d, (r - nn) / (_ + 1));
        }
      }
      P > To ? T > To ? (e = V(W, X, O, Q, r, T, o), u = V(N, U, j, z, r, T, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? a.arc(e.cx, e.cy, T, Tx(e.y01, e.x01), Tx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, T, Tx(e.y01, e.x01), Tx(e.y11, e.x11), !o), a.arc(0, 0, r, Tx(e.cy + e.y11, e.cx + e.x11), Tx(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, T, Tx(u.y11, u.x11), Tx(u.y01, u.x01), !o))) : (a.moveTo(O, Q), a.arc(0, 0, r, B, p, !o)) : a.moveTo(O, Q), !(i > To) || !(C2 > To) ? a.lineTo(j, z) : R > To ? (e = V(j, z, N, U, i, -R, o), u = V(O, Q, W, X, i, -R, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? a.arc(e.cx, e.cy, R, Tx(e.y01, e.x01), Tx(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, R, Tx(e.y01, e.x01), Tx(e.y11, e.x11), !o), a.arc(0, 0, i, Tx(e.cy + e.y11, e.cx + e.x11), Tx(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, R, Tx(u.y11, u.x11), Tx(u.y01, u.x01), !o))) : a.arc(0, 0, i, A, g, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - Sn / 2;
    return [Sx(m) * n, wx(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (q = typeof n == "function" ? n : E(+n), s) : q;
  }, s.padRadius = function(n) {
    return arguments.length ? (E2 = n == null ? null : typeof n == "function" ? n : E(+n), s) : E2;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (J = typeof n == "function" ? n : E(+n), s) : J;
  }, s.context = function(n) {
    return arguments.length ? (a = n ?? null, s) : a;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-YSCW643L.js.map
