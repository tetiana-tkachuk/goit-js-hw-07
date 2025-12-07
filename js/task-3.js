const userNameInput = document.getElementById("name-input");
const userNameOutput = document.getElementById("name-output");

userNameInput.addEventListener("input", handleOutputUserName);

function handleOutputUserName(e) {
  let userName = e.currentTarget.value.trim();

  if (!userName) {
    userName = "Anonymous";
  }
  userNameOutput.textContent = userName;
}
