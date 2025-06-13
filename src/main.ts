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

window.addEventListener('DOMContentLoaded', () => {
  const downloadCVButton = document.getElementById('download-cv');

  if (downloadCVButton) {
    downloadCVButton.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'assets/cv.pdf'; // Ruta del archivo PDF
      link.download = 'DiegoEsparza_CV.pdf'; // Nombre con el que se descargará
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const downloadCVButton = document.getElementById('descargarLlave()');

  if (downloadCVButton) {
    downloadCVButton.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'assets/pub.pem';
      link.download = 'DiegoEsparza_PublicKey.pem';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
  