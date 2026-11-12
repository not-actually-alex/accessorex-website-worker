// Single source of truth for the support / privacy contact address.
// Change this value to update every mailto link and visible email on the site.
const SUPPORT_EMAIL = "support@accessorex.app";

// Single source of truth for the App Store link + badge state.
// When the app ships, set APP_STORE_URL to the real URL and APP_STORE_LIVE to true.
const APP_STORE_URL = "#";
const APP_STORE_LIVE = false;

document.addEventListener("DOMContentLoaded", () => {
  // Fill every element marked with data-email: sets href and text to SUPPORT_EMAIL.
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.setAttribute("href", "mailto:" + SUPPORT_EMAIL);
    el.textContent = SUPPORT_EMAIL;
  });

  // App Store badges / links.
  document.querySelectorAll("[data-appstore]").forEach((el) => {
    if (APP_STORE_LIVE) {
      el.setAttribute("href", APP_STORE_URL);
      el.setAttribute("aria-label", "Download on the App Store");
      el.removeAttribute("aria-disabled");
      el.classList.remove("is-coming-soon");
    }
  });

  // Current year in footer.
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
});
