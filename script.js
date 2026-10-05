// Tahun otomatis pada footer
document.getElementById("year").textContent = new Date().getFullYear();

// Efek sederhana ketika elemen masuk ke layar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".info-item, .activity-card").forEach((item) => {
    observer.observe(item);
});
