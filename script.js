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

// Navigate back to Wishlist in index.html
document.getElementById("backToFrame1").addEventListener("click", function () {
  window.location.href = "index.html#frame1";
});
