function caesarShift(text, shift, encrypt = true) {
  let result = '';
  shift = parseInt(shift) % 26;
  if (!encrypt) shift = -shift;

  for (let char of text) {
    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase() ? 65 : 97;
      let code = char.charCodeAt(0) - base;
      let shifted = (code + shift + 26) % 26;
      result += String.fromCharCode(shifted + base);
    } else {
      result += char;
    }
  }
  return result;
}

function encrypt() {
  const text = document.getElementById("inputText").value;
  const shift = document.getElementById("shift").value;
  if (text === '' || shift === '') {
    alert("Please enter both text and shift value.");
    return;
  }
  document.getElementById("outputText").value = caesarShift(text, shift, true);
}

function decrypt() {
  const text = document.getElementById("inputText").value;
  const shift = document.getElementById("shift").value;
  if (text === '' || shift === '') {
    alert("Please enter both text and shift value.");
    return;
  }
  document.getElementById("outputText").value = caesarShift(text, shift, false);
}

function clearText() {
  document.getElementById("inputText").value = '';
  document.getElementById("shift").value = '';
  document.getElementById("outputText").value = '';
}
