// Block copy / right-click / print / devtools shortcuts
document.addEventListener('copy',        e => e.preventDefault());
document.addEventListener('cut',         e => e.preventDefault());
document.addEventListener('contextmenu', e => e.preventDefault());
window.addEventListener('beforeprint',   e => e.preventDefault());
document.addEventListener('keydown', e => {
  const ctrl = e.ctrlKey || e.metaKey;
  if (ctrl && ['c','x','u','s','p','a'].includes(e.key.toLowerCase())) e.preventDefault();
  if (e.key === 'F12') e.preventDefault();
});

// Inject PDF download button into MkDocs Material header
document.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.md-header__inner');
  if (!inner) return;

  const btn = document.createElement('button');
  btn.className = 'md-header__pdf-btn';
  btn.innerHTML = '&#8659; 下载 PDF';
  btn.title = '下载带水印 PDF';
  inner.appendChild(btn);

  btn.addEventListener('click', () => {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const stamp = `${now.getFullYear()}${pad(now.getMonth()+1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}`;

    const a = document.createElement('a');
    a.href = '/assets/Acarya_Vani.pdf';
    a.download = `阿阇黎教言_${stamp}.pdf`;
    a.click();
  });
});
