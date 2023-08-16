document.addEventListener('DOMContentLoaded', function() {
    var structurePlotDiv = document.querySelector('.structure_plot');
    var typingDiv = document.getElementById('typing');

    document.getElementById('showme').addEventListener('click', function() {
        if (structurePlotDiv.style.opacity === '0' || structurePlotDiv.style.opacity === '') {
            structurePlotDiv.style.opacity = '1';
            structurePlotDiv.style.visibility = 'visible';
            typingDiv.style.opacity = '0';
            typingDiv.style.visibility = 'hidden';
        } else {
            structurePlotDiv.style.opacity = '0';
            structurePlotDiv.style.visibility = 'hidden';
            typingDiv.style.opacity = '1';
            typingDiv.style.visibility = 'visible';
        }
    });
});
