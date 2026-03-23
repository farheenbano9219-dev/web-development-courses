const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll("#itemList li");
const noResult = document.getElementById("noResult");

searchInput.addEventListener("keyup", function () {
    let filter = searchInput.value.toLowerCase();
    let visibleCount = 0;

    items.forEach(function (item) {
        let text = item.textContent.toLowerCase();

        if (text.includes(filter)) {
            item.style.display = "block";
            visibleCount++;
        } else {
            item.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
});