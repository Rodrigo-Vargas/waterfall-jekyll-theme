class Collapse {
   constructor() {
      this.panels = [];
      this.lastScrollTop = 0;

      this.init();
   }

   init() {
      var panels =  document.querySelectorAll('[data-collapse]');

      panels.forEach(panel => {
         this.panels.push(panel);
      });

      window.addEventListener('scroll', event => {
         this.panels.forEach(panel => {
            var heightToTrigger = panel.dataset.collapseTriggerHeight;

            var st = window.pageYOffset || document.documentElement.scrollTop;
            
            let downScroll = (st > this.lastScrollTop);
            this.lastScrollTop = st <= 0 ? 0 : st;

            if (window.scrollY > heightToTrigger)
            {
               if (downScroll)
                  panel.style.transform = `translateY(${panel.clientHeight * -1}px)`;
               else
                  panel.style.transform = '';
            }
         })
      });
   }
}


const CollapseInit = () => {
   return new Collapse();
}

export default CollapseInit;