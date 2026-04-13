// THEME TOGGLE
function toggleTheme() {
  const body = document.getElementById("body");

  if (body.classList.contains("bg-gray-900")) {
    body.classList.remove("bg-gray-900", "text-white");
    body.classList.add("bg-white", "text-black");
  } else {
    body.classList.remove("bg-white", "text-black");
    body.classList.add("bg-gray-900", "text-white");
  }
}

// VISITOR COUNTER (LOCAL STORAGE)
let count = localStorage.getItem("visits");

if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}

localStorage.setItem("visits", count);

document.getElementById("visitorCount").innerText =
  "You are visitor number: " + count;
