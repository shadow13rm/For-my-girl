// الصفحة الأولى
document.getElementById("gift").onclick = () => {
    showPage("page2");
};

// الصفحة الثانية
document.getElementById("open2").onclick = () => {
    showPage("page3");
};

function showPage(id) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

// الصفحة الثالثة - البطاقات
let openedCards = 0;
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        if (!card.classList.contains("flipped")) {
            card.classList.add("flipped");
            card.textContent = card.dataset.text;
            openedCards++;
        }

        if (openedCards === cards.length) {
            setTimeout(() => {
                document.getElementById("finalMessage").classList.add("show");
            }, 5000);
        }
    });
});
