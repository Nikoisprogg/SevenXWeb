// 1. Menambahkan animasi fade-in saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".profile-picture, .whatsapp-button");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200); // Delay sedikit untuk efek bertahap
  });
});

// 2. Menambahkan efek hover pada tombol menggunakan JavaScript (opsional)
const whatsappBtn = document.querySelector(".whatsapp-button");

if (whatsappBtn) {
  whatsappBtn.addEventListener("mouseenter", () => {
    whatsappBtn.style.backgroundColor = "#36505f";
  });

  whatsappBtn.addEventListener("mouseleave", () => {
    whatsappBtn.style.backgroundColor = "#416271";
  });
}

// 3. Menampilkan waktu saat ini (opsional)
function updateClock() {
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    clockElement.textContent = now.toLocaleDateString("id-ID", options);
  }
}

// Update waktu setiap detik
setInterval(updateClock, 1000);
updateClock(); // Jalankan langsung saat halaman dimuat