;(function (d) {
  // eslint-disable-next-line one-var, no-var
  var config = {
      kitId: 'rbi8zqv',
      scriptTimeout: 3000,
      async: true,
    },
    h = d.documentElement,
    t = setTimeout(function () {
      h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
    }, config.scriptTimeout),
    tk = d.createElement('script'),
    f = false,
    s = d.getElementsByTagName('script')[0],
    a
  h.className += ' wf-loading'
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
  tk.async = true
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState
    // eslint-disable-next-line eqeqeq
    if (f || (a && a != 'complete' && a != 'loaded')) return
    f = true
    clearTimeout(t)
    try {
      // eslint-disable-next-line no-undef
      Typekit.load(config)
    } catch (e) {}
  }
  s.parentNode.insertBefore(tk, s)
})(document)
