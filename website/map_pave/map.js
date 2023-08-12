var isRUInfoVisible = false;
var isUSAInfoVisible = false;

document.getElementById('RU').addEventListener('click', function() {
    var RUInfo = document.getElementById('RU_info');
    var USAInfo = document.getElementById('USA_info');

    if (isRUInfoVisible) {
        RUInfo.style.display = 'none';
        isRUInfoVisible = false;
    } else {
        RUInfo.style.display = 'block';
        isRUInfoVisible = true;
        USAInfo.style.display = 'none';
        isUSAInfoVisible = false;
    }
});

document.getElementById('US').addEventListener('click', function() {
    var RUInfo = document.getElementById('RU_info');
    var USAInfo = document.getElementById('USA_info');

    if (isUSAInfoVisible) {
        USAInfo.style.display = 'none';
        isUSAInfoVisible = false;
    } else {
        USAInfo.style.display = 'block';
        isUSAInfoVisible = true;
        RUInfo.style.display = 'none';
        isRUInfoVisible = false;
    }
});
