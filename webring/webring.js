(() => {
    const sites = [
        "milotek.dev",
        "tmkcell.cc",
        "berg.cat",
    ];
    const root = document.getElementById("pawring");
    if (!root) return;

    const styled = root.dataset.pawringCss !== "off";
    if (styled) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("webring.css", document.currentScript.src).href;
        document.head.appendChild(link);
    }

    const i = sites.findIndex(site =>
        location.hostname === site || location.hostname.endsWith("." + site)
    );

    const ring = `<a href="https://pawr.ing">pawring</a>`;
    if (i === -1) {
        root.innerHTML = `<p class="pawringMain">this user is NOT part of the ${ring}!</p>`;
        return;
    }

    const prev = sites.at(i - 1);
    const next = sites[(i + 1) % sites.length];
    root.innerHTML = `
        <a class="pawringLeft" href="https://${prev}" title="${prev}" aria-label="previous site: ${prev}">${styled ? "" : "⇐"}</a>
        <p class="pawringMain">part of the ${ring}!</p>
        <a class="pawringRight" href="https://${next}" title="${next}" aria-label="next site: ${next}">${styled ? "" : "⇒"}</a>`;
})();
