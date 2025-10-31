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

/*   let contentDelay;  */

  panels.forEach(panel => {
     /*    const panelContent = panel.querySelector('.panel-content');
    if (panelContent) {
      panelContent.addEventListener('click', e => e.stopPropagation());
    } */
    panel.addEventListener('click', () => {
      panels.forEach(pnl => {
        pnl.classList.remove('active');
        const panelContent = pnl.querySelector('.panel-content');

        if (panelContent) panelContent.classList.remove('visible');

        const tab = pnl.querySelector('.tab-name');
        if (tab) tab.style.opacity = '1';

      }); 
       
      panel.classList.add('active');

      const panelContent = panel.querySelector('.panel-content');
      

/*       if (contentDelay) {
        clearTimeout(contentDelay);
      }
      contentDelay = setTimeout(() => {
      if (panelContent) panelContent.classList.add('visible');
    }, 600); */
      if (panelContent) panelContent.classList.add('visible');
      
    });
  });


});

function toTop() { /* check */
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
})


/* window.addEventListener('load', () => {
  document.querySelector('.home-panel__content').classList.add('visible');
});
 */


/* COPYRIGHT DATE */

const date = document.querySelector('.copyright-date');
date.innerHTML = new Date().getFullYear();


