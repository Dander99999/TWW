
 function applyColorToAllFrames(color) {
    var frames = document.querySelectorAll('frame');
    frames.forEach(function(frame) {
        try {
            var frameDoc = frame.contentDocument || frame.contentWindow.document;
            if (frameDoc && frameDoc.body) {
                // Изменяем фон body
                frameDoc.body.style.backgroundColor = color;
            }
        } catch (e) {

        }
    });
}

window.addEventListener('load', function() {
    const savedColor = localStorage.getItem('siteColor');
    if (savedColor) {
        applyColorToAllFrames(savedColor);
    }
});

window.addEventListener('message', function(event) {
    if (event.data.type === 'changeColor') {
        var color = event.data.color;
        applyColorToAllFrames(color);
    }
});