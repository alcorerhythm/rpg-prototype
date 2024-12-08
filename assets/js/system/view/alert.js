//alert
function alertPush(color, message){
	// var toastElList = [].slice.call(document.querySelectorAll('.toast'))
	// var toastList = toastElList.map(function (toastEl) {
	// 	return new bootstrap.Toast(toastEl, option)
	// });

    let alertColor = replaceString(alertComponent, masterHolder[7], color);
    let alertValue = replaceString(alertColor, masterHolder[1], message);
    let html = alertValue;

    $("#alert").html(html);
    $("#alert").show();
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
    // Creates an array of toasts (it only initializes them)
      return new bootstrap.Toast(toastEl) // No need for options; use the default options
    });
    toastList.forEach(toast => toast.show());
}