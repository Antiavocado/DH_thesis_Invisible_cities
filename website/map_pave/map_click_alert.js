

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('RU').addEventListener('click', function() {
        showInfo('RU_info');
    });

    document.getElementById('US').addEventListener('click', function() {
        showInfo('USA_info');
    });

    function showInfo(infoId) {
        var infoDivs = document.getElementsByClassName('country_info');

        // Hide all info divs
        for (var i = 0; i < infoDivs.length; i++) {
            infoDivs[i].style.display = 'none';
        }

        // Show the selected info div
        var selectedDiv = document.getElementById(infoId);
        selectedDiv.style.display = 'block';

        // Add click event listeners to the click-text elements
        var clickTexts = selectedDiv.getElementsByClassName('click-text');
        for (var i = 0; i < clickTexts.length; i++) {
            clickTexts[i].addEventListener('click', function() {
                var imgSrc = this.getAttribute('data-img');
                alertImage(imgSrc);
            });
        }
    }

    function alertImage(imgSrc) {
        var img = new Image();
        img.src = imgSrc;
        img.style.maxWidth = '500px';
        img.style.maxHeight = '500px';

        // Create a new div for the alert
        var alertDiv = document.createElement('div');
        alertDiv.style.position = 'fixed';
        alertDiv.style.width = '100%';
        alertDiv.style.height = '100%';
        alertDiv.style.top = '0';
        alertDiv.style.left = '0';
        alertDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        alertDiv.style.display = 'flex';
        alertDiv.style.justifyContent = 'center';
        alertDiv.style.alignItems = 'center';

        var closeAlert = function() {
            document.body.removeChild(alertDiv);
        };

        alertDiv.onclick = closeAlert;
        img.onclick = closeAlert;

        alertDiv.appendChild(img);

        document.body.appendChild(alertDiv);
    }


});


