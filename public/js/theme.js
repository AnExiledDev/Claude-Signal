(() => {
	const STORAGE_KEY = "theme";

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
	const root = document.documentElement;

	function applyTheme(theme) {
		// Default to dark mode
		const isDark = theme === "dark" || theme === "system" || !theme;

		root.classList.toggle("dark", isDark);
	}

	const savedTheme = localStorage.getItem(STORAGE_KEY) || "dark";
	applyTheme(savedTheme);

	prefersDark.addEventListener("change", () => {
		if (localStorage.getItem(STORAGE_KEY) === "system") {
			applyTheme("system");
		}
	});

	document.addEventListener("astro:after-swap", () => {
		applyTheme(localStorage.getItem(STORAGE_KEY) || "system");
	});
})();
