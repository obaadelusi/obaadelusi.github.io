'use strict';
function _createForOfIteratorHelper(e, t) {
  var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
  if (!r) {
    if (Array.isArray(e) || (r = _unsupportedIterableToArray(e)) || (t && e && 'number' == typeof e.length)) {
      r && (e = r);
      var n = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (e) {
          throw e;
        },
        f: o,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var a,
    l = !0,
    i = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var e = r.next();
      return (l = e.done), e;
    },
    e: function (e) {
      (i = !0), (a = e);
    },
    f: function () {
      try {
        l || null == r.return || r.return();
      } finally {
        if (i) throw a;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ('string' == typeof e) return _arrayLikeToArray(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    return (
      'Object' === r && e.constructor && (r = e.constructor.name),
      'Map' === r || 'Set' === r
        ? Array.from(e)
        : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? _arrayLikeToArray(e, t)
          : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function load() {
  var e = document.getElementById('menu-icon'),
    t = document.getElementById('mobile-menu');
  e.addEventListener('click', function () {
    t.classList.toggle('active');
  }),
    document.getElementById('reset').addEventListener('click', clearFields),
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault(), hideErrors(), formHasErrors() || showModal();
    }),
    hideErrors();
}
function showModal() {
  var e = document.getElementById('modal'),
    t = document.getElementById('name').value;
  (document.getElementById('modal-wrapper').innerHTML = '<h3>Hey '.concat(
    t,
    ' ✅,</h3> <p>Thank you for saying hi. <br> Will respond by email shortly.</p><button class="btn--black" id="close-modal">Close</button>'
  )),
    e.classList.add('show'),
    document.getElementById('close-modal').addEventListener('click', function () {
      e.classList.remove('show'), window.location.replace('https://obaadelusi.github.io');
    });
}
function formHasErrors() {
  var e = !1,
    t = document.getElementById('email').value;
  formInputIsEmpty() && (e = !0);
  var r = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(trim(t));
  return (
    trim(t).length > 0 && !r && ((document.getElementById('emailformat_error').style.display = 'block'), (e = !0)), e
  );
}
function formInputIsEmpty() {
  for (
    var e = !1,
      t = document.getElementById('name'),
      r = document.getElementById('email'),
      n = 0,
      o = [document.getElementById('message'), r, t];
    n < o.length;
    n++
  ) {
    var a = o[n];
    0 == trim(a.value).length &&
      ((document.getElementById(''.concat(a.id, '_error')).style.display = 'block'), (e = !0), a.focus());
  }
  return e;
}
function clearFields() {
  var e,
    t = _createForOfIteratorHelper(document.getElementsByTagName('input'));
  try {
    for (t.s(); !(e = t.n()).done; ) {
      e.value.value = '';
    }
  } catch (e) {
    t.e(e);
  } finally {
    t.f();
  }
}
function hideErrors() {
  var e,
    t = _createForOfIteratorHelper(document.getElementsByClassName('input-error'));
  try {
    for (t.s(); !(e = t.n()).done; ) {
      e.value.style.display = 'none';
    }
  } catch (e) {
    t.e(e);
  } finally {
    t.f();
  }
}
function trim(e) {
  return e.replace(/^\s+|\s+$/g, '');
}
document.addEventListener('DOMContentLoaded', load);
//# sourceMappingURL=index.js.map
