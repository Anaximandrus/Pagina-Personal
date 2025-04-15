document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('dark');
    var btn = document.getElementById('toggle-theme');
    if (btn) {
        btn.addEventListener('click', function () {
            document.body.classList.toggle('dark');
            var isDark = document.body.classList.contains("dark");
            btn.textContent = isDark ? '☀️ Modo claro' : '🌓 Modo oscuro';
        });
    }
});
