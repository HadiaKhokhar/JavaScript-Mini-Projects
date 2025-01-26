document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const passwwordEye = document.getElementById('eye-icon');
  passwordInput.addEventListener("keyup", function () {
    const password = this.value;
    if (password) {
      const strength = passwordStrength(password)
      console.log(strength)
      updateBackgroundColor(strength)
      updateStrengthText(strength)
    }
    else {
      updateBackgroundColor('grey')
      updateStrengthText('Type a password')
    }

  })
  passwwordEye.addEventListener('click', () => {
    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
      passwwordEye.classList.remove('fa-eye');
      passwwordEye.classList.add('fa-eye-slash');
    } else {
      passwordInput.setAttribute('type', 'password');
      passwwordEye.classList.remove('fa-eye-slash');
      passwwordEye.classList.add('fa-eye');
    }
  })
})

const passwordStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) {
    strength++;
  }
  if (password.length >= 12) {
    strength++;
  }
  //logic to calculate password strength based on criteria
  haveUppercase = /[A-Z]/.test(password);
  haveLowercase = /[a-z]/.test(password);
  haveNumber = /[0-9]/.test(password);
  haveSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  if (haveUppercase) {
    strength++;
  }
  if (haveLowercase) {
    strength++;
  }
  if (haveNumber) {
    strength++;
  }
  if (haveSpecialChar) {
    strength++;
  }
  // FOR CHECKING POINTS 
  if (strength >= 5) {
    return "strong";
  }
  else if (strength >= 3) {
    return "medium";
  }
  else if (strength <= 2) {
    return "weak";
  }
}
const updateBackgroundColor = (color) => {
  const body = document.body;
  body.style.backgroundImage = `url(./svgs/${color}.svg)`;
}
const updateStrengthText = (strength) => {
  const strengthText = document.getElementById("strength-text");
  strengthText.textContent = `${strength}`;
}
