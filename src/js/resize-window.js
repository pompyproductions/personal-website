const resizeDocument = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
}

window.addEventListener("resize", resizeDocument);
resizeDocument();
