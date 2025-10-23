/* VERTICAL PANELS */

const panels = document.querySelectorAll('.panel');
const homePanel = document.querySelector('.home-panel');
const mainContainer = document.querySelector('.main-container');

document.addEventListener('DOMContentLoaded', () => {
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      panels.forEach(pnl => {
        pnl.classList.remove('active');
        const tab = pnl.querySelector('.tab-name');
        if (tab) tab.style.opacity = '1';

        mainContainer.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }) 

      panel.classList.add('active');
      
    });
  });


  if (homePanel) homePanel.classList.add('active');

  mainContainer.addEventListener('scroll', () => {
    const activePanel = document.querySelector('.panel.active');
    if (!activePanel) return;

    const tabName = activePanel.querySelector('.tab-name');
    if (!tabName) return;

    if (mainContainer.scrollTop > 150) {
      tabName.style.opacity = '0';
    } else {
      tabName.style.opacity = '1';
    }
  });
  
});



/* document.addEventListener('DOMContentLoaded', () => {
  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      panels.forEach(panel => panel.classList.remove('active'));
      panel.classList.toggle('active');
    });
    const isActive = panel.classList.contains('active');
    const scrollHeight = window.pageYOffset;

    if (isActive && scrollHeight > 100) {
      console.log('hello');
      
    }
  });

 
  if (homePanel) homePanel.classList.add('active');
  
}); */


window.addEventListener('load', () => {
  document.querySelector('.home-panel__content').classList.add('visible');
});


