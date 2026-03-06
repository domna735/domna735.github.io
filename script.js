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

  const initVisitorCounter = async () => {
    const statsWrap = document.getElementById("visitorStats");
    const el = document.getElementById("visitorCount");
    const showStats = new URLSearchParams(window.location.search).get("stats") === "1";

    const namespace = "domna735";
    const key = "personal-website-total-views";
    const sessionKey = "donovan-visitor-counter-counted-v1";

    let action = "hit";
    try {
      if (sessionStorage.getItem(sessionKey) === "1") action = "get";
    } catch {
      // ignore
    }

    try {
      const url = `https://api.countapi.xyz/${action}/${namespace}/${key}`;
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);

      const data = await response.json();
      if (typeof data.value !== "number") throw new Error("Invalid counter response");

      if (action === "hit") {
        try {
          sessionStorage.setItem(sessionKey, "1");
        } catch {
          // ignore
        }
      }

      if (showStats) {
        if (statsWrap) statsWrap.hidden = false;
        if (el) el.textContent = new Intl.NumberFormat().format(data.value);
      }
    } catch {
      if (showStats) {
        if (statsWrap) statsWrap.hidden = false;
        if (el) el.textContent = el.getAttribute("data-fallback") || "Unavailable";
      }
    }
  };

  initTheme();
  initYear();
  initCopyEmail();
  initThemeToggle();
  initVisitorCounter();
})();
