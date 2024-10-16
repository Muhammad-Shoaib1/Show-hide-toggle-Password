document.addEventListener("DOMContentLoaded", () => {
  let password = document.getElementById("password");
  let eyeIcon = document.getElementById("eye-open");

  eyeIcon.onclick = function () {
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.src = "https://static-00.iconduck.com/assets.00/eye-open-icon-512x344-pos22o8k.png";
    } else {
      password.type = "password";
      eyeIcon.src = "https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/eye-close-1.png";
    }
  };
});
