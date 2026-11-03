// Auto-update copyright year
const year = new Date().getFullYear();
document.getElementById("footerText").innerHTML = `&copy; ${year} Godson V O. All rights reserved.`;



// Social media links
const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/godsonvo" },
  { name: "GitHub", url: "https://github.com/godsonvo-git" },
  { name: "Twitter / X", url: "https://x.com/godson_vo" },
  { name: "Email", url: "mailto:godsonvoofficial@gmail.com" }
];

// Select containers
const heroLinks = document.querySelector("#hero-links");
const contactLinks = document.querySelector("#contact-links");

// Generate links
socialLinks.forEach(link => {
  const button = document.createElement("a");

  button.textContent = link.name;
  button.href = link.url;
  button.classList.add("pill");

  if (!link.url.startsWith("mailto:")) {
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  }

  // Hero: Exclude Instagram
  if (link.name !== "Instagram") {
    heroLinks.appendChild(button.cloneNode(true));
  }

  // Contact: Email uses btn styling
  if (link.name === "Email") {
    button.textContent = "Email me";
    button.classList.replace("pill", "btn");
  }

  contactLinks.appendChild(button);
});

// Resume button
heroLinks.insertAdjacentHTML(
  "afterbegin",
  '<a class="btn" target="_blank" href="img/Godson V O Resume Mechanical.pdf">View my resume</a>'
);




//<!-- Apply saved theme before the page paints (prevents a flash) -->
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", saved || (prefersDark ? "dark" : "light"));
  } catch (e) { }
})();

// Sun / Moon theme toggle
(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    // Moon (dark) = switch on, Sun (light) = switch off
    toggle.setAttribute("aria-checked", theme === "dark" ? "true" : "false");
    try { localStorage.setItem("theme", theme); } catch (e) { }
  }

  // Sync the button with the theme set in <head>
  toggle.setAttribute(
    "aria-checked",
    root.getAttribute("data-theme") === "dark" ? "true" : "false"
  );

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();



// arrow button links

const arrows1 = document.getElementById("arrow1")
const arrows2 = document.getElementById("arrow2")
const arrows3 = document.getElementById("arrow3")

arrows1.addEventListener("click", () => {
  window.open("./project1/index.html", "_blank")
})

arrows2.addEventListener("click", () => {
  window.open("", "_blank")
})

arrows3.addEventListener("click", () => {
  window.open("https://godsonvo-portfolio.vercel.app/", "_blank")
})