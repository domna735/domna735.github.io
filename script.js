(() => {
  const storageKey = "donovan-site-theme";
  const root = document.documentElement;

  const setTheme = (theme) => {
    if (!theme) {
      root.removeAttribute("data-theme");
      return;
    }
    root.setAttribute("data-theme", theme);
  };

  const getStoredTheme = () => {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  };

  const storeTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // ignore
    }
  };

  const preferLight = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  const initTheme = () => {
    const stored = getStoredTheme();
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    setTheme(preferLight() ? "light" : "dark");
  };

  const toggleTheme = () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    setTheme(next);
    storeTheme(next);
  };

  const initYear = () => {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  };

  const initCopyEmail = () => {
    const copy = document.getElementById("copyEmail");
    if (!copy) return;

    const defaultLabel = copy.getAttribute("data-label-default") || "Copy email";
    const copiedLabel = copy.getAttribute("data-label-copied") || "Copied";

    copy.addEventListener("click", async (e) => {
      e.preventDefault();
      const email = "donovan.ma.info@gmail.com";

      try {
        await navigator.clipboard.writeText(email);
        copy.textContent = copiedLabel;
        setTimeout(() => (copy.textContent = defaultLabel), 1200);
      } catch {
        // fallback: open mail client
        window.location.href = `mailto:${email}`;
      }
    });
  };

  const initThemeToggle = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", toggleTheme);
  };

  initTheme();
  initYear();
  initCopyEmail();
  initThemeToggle();
})();
