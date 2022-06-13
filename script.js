const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

confirmPassword.addEventListener("input", checkPassword);

function checkPassword(e) {
	if (e.textContent != password.textContent) {
		confirmPassword.classList.toggle("no-match", true);
	} else {
		confirmPassword.classList.toggle("no-match", false);
	}
}
