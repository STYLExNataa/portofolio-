document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Simulasi pengiriman form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Pesan berhasil dikirim!";
  this.reset();
});
//simpan prefensi
if (body.classList.contains('dark')){
  localstorage.setItem('mode','dark');
} else {
  localstorage.setItem('mode','light');
}

//cek saat awal
if (localstorage.getItem('mode') === 'dark') {body.classList.add('dark');
}