// plugins/matomo.js  

export default ({ app }) => {  
  if (process.client) {  
    // 添加 Matomo JavaScript 代码  
    var _paq = window._paq = window._paq || [];  
    _paq.push(["setDomains", ["*.ssgg.net","*.ifttt.fun"]]);  
    _paq.push(["enableCrossDomainLinking"]);  
    _paq.push(['trackPageView']);  
    _paq.push(['enableLinkTracking']);  
    (function() {  
      var u="https://mato.ifttt.fun/";  
      _paq.push(['setTrackerUrl', u+'matomo.php']);  
      _paq.push(['setSiteId', '9']);  
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];  
      g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);  
    })();  

    // 添加 Matomo 图像跟踪器  
    var img = document.createElement('img');  
    img.src = "https://mato.ifttt.fun/matomo.php?idsite=9&rec=1";  
    img.style.border = "0";  
    img.setAttribute('alt', '');  
    img.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');  
    document.body.appendChild(img);  

    // 在路由变化时触发 Matomo 页面跟踪  
    app.router.afterEach((to, from) => {  
      _paq.push(['setCustomUrl', to.fullPath]);  
      _paq.push(['setDocumentTitle', document.title]);  
      _paq.push(['trackPageView']);  
    });  
  }  
}
