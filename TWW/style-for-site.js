    window.addEventListener('load', function() {
        const savedColor = localStorage.getItem('siteColor');
        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
        }
    });