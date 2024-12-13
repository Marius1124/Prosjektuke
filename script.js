// This makes it so that when I press my buttons I go from frame1 to frame2
document.getElementById("goToFrame2").addEventListener("click", function () {
  document.getElementById("frame1").classList.add("hidden");
  document.getElementById("frame2").classList.remove("hidden");
});

// This is to take me back to frame1 from frame2
document.getElementById("goToFrame1").addEventListener("click", function () {
  document.getElementById("frame2").classList.add("hidden");
  document.getElementById("frame1").classList.remove("hidden");
});

if (window.location.hash === "#frame2") {
  document.getElementById("frame2").scrollIntoView({ behavior: "smooth" });
}

// Navigate to End Page
document.getElementById("goToEndPage").addEventListener("click", function () {
  window.location.href = "end.html";
});

// // Navigate back to frame1
// document.getElementById("backToFrame1").addEventListener("click", function () {
//   window.location.href = "index.html#frame1";
// });

// All code below here will be relevant to the functions of the wishlist on frame2
const itemNameInput = document.getElementById("itemName");
const itemPriceInput = document.getElementById("itemPrice");
const addItemButton = document.getElementById("addItem");
const wishlist = document.getElementById("wishlist");
const totalDisplay = document.getElementById("total");

let totalPrice = 0;

function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function addItem() {
  const itemName = itemNameInput.value.trim();
  const itemPrice = itemPriceInput.value.trim();

  if (!itemName) {
    alert("Please enter an item name.");
    return;
  }

  const price = itemPrice ? parseFloat(itemPrice) : 0;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <span>${itemName} - $${formatPrice(price)}</span>
    <button class="removeItem">Remove</button>
  `;

  wishlist.appendChild(listItem);

  totalPrice += price;
  updateTotal();

  itemNameInput.value = "";
  itemPriceInput.value = "";

  listItem.querySelector(".removeItem").addEventListener("click", () => {
    wishlist.removeChild(listItem);
    totalPrice -= price;
    updateTotal();
  });
}

function updateTotal() {
  totalDisplay.textContent = formatPrice(totalPrice);
}

addItemButton.addEventListener("click", addItem);

// Underneath here will be everything that deals with turning the wishlist into a .txt
function exportWishlistToText() {
  const wishlistItems = Array.from(wishlist.querySelectorAll("li span"));
  const wishlistText = wishlistItems.map((item) => item.textContent).join("\n");

  localStorage.setItem("wishlistData", wishlistText); // Save to localStorage
  window.location.href = "end.html"; // Navigate to the end page
}

document
  .getElementById("goToEndPage")
  .addEventListener("click", exportWishlistToText);
