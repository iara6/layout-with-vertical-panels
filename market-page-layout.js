/* VERTICAL PANELS */

const panels = document.querySelectorAll('.panel');
const homePanel = document.querySelector('.home-panel');

document.addEventListener('DOMContentLoaded', () => {
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      panels.forEach(panel => panel.classList.remove('active'));
      panel.classList.toggle('active');
    });
  });

  if (homePanel) homePanel.classList.add('active');
});