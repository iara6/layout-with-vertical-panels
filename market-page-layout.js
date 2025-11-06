/* VERTICAL PANELS */

const panels = document.querySelectorAll('.panel');
const homePanel = document.querySelector('.home-panel');
const mainContainer = document.querySelector('.main-container');

document.addEventListener('DOMContentLoaded', () => {
  if (homePanel) {
    homePanel.classList.add('active');
    const homeContent = homePanel.querySelector('.panel-content');

    if (homeContent) homeContent.classList.add('visible');
  };

  let contentDelay; 

  panels.forEach(panel => {
    const panelContent = panel.querySelector('.panel-content');

    if (panelContent) {
      panelContent.addEventListener('click', e => e.stopPropagation());
    }

    panel.addEventListener('click', (e) => {
      const clickedTab = e.target.closest('.tab-name');

      if (clickedTab && panel.classList.contains('active')) {
        if (mainContainer) {
          mainContainer.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        return; 
      } 

      panels.forEach(pnl => {
        pnl.classList.remove('active');
        const panelContent = pnl.querySelector('.panel-content');

        if (panelContent) panelContent.classList.remove('visible');

        const tab = pnl.querySelector('.tab-name');
        if (tab) tab.style.opacity = '1';
      }); 
       
      panel.classList.add('active');

      const panelContent = panel.querySelector('.panel-content');
      
      if (contentDelay) {
        clearTimeout(contentDelay);
      }

      contentDelay = setTimeout(() => {
        if (panelContent) panelContent.classList.add('visible');
      }, 500);
    });
  });
});

/* function toTop() { 
  const mainContainer = document.querySelector('.main-container');
  if (mainContainer) {
    mainContainer.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

const tabNames = document.querySelectorAll('.tab-name');
tabNames.forEach(tab => {
  tab.addEventListener('click', toTop);
}) */


/* COPYRIGHT DATE */

const date = document.querySelectorAll('.copyright-date');
const year = new Date().getFullYear();

date.forEach(d => {
  d.textContent = year;
});


