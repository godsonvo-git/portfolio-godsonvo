// Auto-update copyright year
const year = new Date().getFullYear();
document.getElementById("footerText").innerHTML = `&copy; ${year} Godson V O. All rights reserved.`;

(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');

  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }

  function setTheme(t) {
    root.setAttribute('data-theme', t);
    btn.setAttribute('aria-checked', t === 'dark');
    set('theme', t);
  }

  var saved = get('theme');
  var prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved || (prefersDark ? 'dark' : 'light'));

  btn.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
})();

const report1 = document.getElementById("reported")
const arw1 = document.getElementById("arrow1")

report1.addEventListener("click", () => {
  window.open(" img/GROUP_A4_Project_Report_FINAL_V2.pdf", "_blank")
})
arw1.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/godsonvo", "_blank")
})