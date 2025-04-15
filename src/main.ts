document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add('dark');

    const btn = document.getElementById('toggle-theme') as HTMLButtonElement | null;
  
    if (btn) {
      btn.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        const isDark = document.body.classList.contains("dark");
        btn.textContent = isDark ? '☀️ Modo claro' : '🌓 Modo oscuro';
      });
    }
  });
  