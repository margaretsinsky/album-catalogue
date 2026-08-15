// ===== APP CONFIG =====
// Change ITEM_NAME here to rename "cataloged item" everywhere at once.
const ITEM_NAME = "Album";

const API_URL = "https://script.google.com/macros/s/AKfycbwm3sE3qYU45b-VKAeT7XywuUKAW3nawtXtooKI2IF_hFuKvHAo06aP7N50FvI5ruc_/exec";

// ===== PASSWORD GATE =====
// Checks sessionStorage for a password; if missing, prompts and verifies it
// by making a lightweight request to the backend.
async function ensureAuthenticated() {
  let pw = sessionStorage.getItem("catalogue_pw");

  if (!pw) {
    pw = prompt(`Enter the password to access the ${ITEM_NAME} Catalog:`);
    if (!pw) {
      document.body.innerHTML = "<p>Password required.</p>";
      throw new Error("No password entered");
    }
    sessionStorage.setItem("catalogue_pw", pw);
  }

  return pw;
}
