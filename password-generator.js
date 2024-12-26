function generatePass() {
  let pass = '';

  let long = document.getElementById('length').value;

  let char = 'abcdefghijklmnopqrstuvwxyz';
  char += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  char += '!@#$%^&*`~*()-_=+[]{};:?/';
  char += '0123456789';
if (long <= 200){
  for (i = 0; i < long; i++) {
    let indx = Math.round(Math.random() * char.length - 1);
    pass += char.charAt(indx);
  }
  document.getElementById('pass-output').innerHTML = pass;
}else{
  alert('Password too long\tMaximum : 200 digit')
}
}

function copy() {
  let pass = document.getElementById('pass-output').textContent;
  if (pass.includes('span')) {
    alert('Password has NOT generated yet');
  } else {
    navigator.clipboard.writeText(pass);
    alert(`Password Copied to Clipboard\nPassword : ${pass}`);
  }
}
