// Generated by CoffeeScript 1.10.0
(function() {
  var centerSign, centeredInput, scaleInput, scaleSign, sign;

  sign = document.querySelector('.paper .sign');

  scaleInput = document.getElementById('scale-input');

  centeredInput = document.getElementById('centered-input');

  scaleSign = function() {
    var html;
    html = document.querySelector('html');
    return html.style.fontSize = scaleInput.value + "px";
  };

  centerSign = function() {
    if (centeredInput.checked) {
      return sign.classList.add('centered');
    } else {
      return sign.classList.remove('centered');
    }
  };

  scaleInput.addEventListener('input', scaleSign);

  centeredInput.addEventListener('input', centerSign);

  scaleSign();

  centerSign();

}).call(this);

//# sourceMappingURL=script.js.map
