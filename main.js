document.addEventListener("keydown", function(e) {
    let active = document.activeElement;

    // Prevent HTML shortcuts like refresh, copy, paste from being blocked
    if (e.ctrlKey || e.metaKey) return;

    if (active && (active.tagName === "TEXTAREA" || active.tagName === "INPUT")) {
        active.value += e.key;
        e.preventDefault();
    }
});
