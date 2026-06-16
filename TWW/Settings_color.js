function changeColor(color) {
    localStorage.setItem('siteColor', color);
    
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({
            type: 'changeColor',
            color: color
        }, '*');
    }
    
    document.body.style.backgroundColor = color;
}

window.addEventListener('load', function() {
    const savedColor = localStorage.getItem('siteColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});