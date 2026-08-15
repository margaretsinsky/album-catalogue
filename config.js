// ===== APP CONFIG =====
// Change ITEM_NAME here to rename "catalogued item" everywhere at once.
const ITEM_NAME = "Album";
const ITEM_NAME_PLURAL = "Albums";

const API_URL = "PASTE_YOUR_EXEC_URL_HERE";

// ===== PASSWORD GATE =====
// Checks sessionStorage for a password; if missing, prompts and verifies it
// by making a lightweight request to the backend.
async function ensureAuthenticated() {
  let pw = sessionStorage.getItem("catalogue_pw");

  if (!pw) {
    pw = prompt(`Enter the password to access the ${ITEM_NAME} Catalogue:`);
    if (!pw) {
      document.body.innerHTML = "<p>Password required.</p>";
      throw new Error("No password entered");
    }
    sessionStorage.setItem("catalogue_pw", pw);
  }

  return pw;
}
