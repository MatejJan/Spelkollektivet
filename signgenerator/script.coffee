sign = document.querySelector '.paper .sign'

scaleInput = document.getElementById 'scale-input'
centeredInput = document.getElementById 'centered-input'

scaleSign = ->
  html = document.querySelector 'html'
  html.style.fontSize="#{scaleInput.value}px"

centerSign = ->
  if centeredInput.checked
    sign.classList.add 'centered'

  else
    sign.classList.remove 'centered'

scaleInput.addEventListener 'input', scaleSign
centeredInput.addEventListener 'input', centerSign

# Apply dynamic styles the first time.
scaleSign()
centerSign()
