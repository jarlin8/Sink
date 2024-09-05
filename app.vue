<script setup>  
import { onMounted, onUnmounted } from 'vue'  
import { useRouter } from 'vue-router'  

const { title, description, image } = useAppConfig()  
useSeoMeta({  
  title: `${title} - ${description}`,  
  description,  
  ogType: 'website',  
  ogTitle: title,  
  ogDescription: description,  
  ogImage: image,  
  twitterTitle: title,  
  twitterDescription: description,  
  twitterImage: image,  
  twitterCard: 'summary_large_image',  
})  

useHead({  
  htmlAttrs: {  
    lang: 'en',  
  },  
  link: [  
    {  
      rel: 'icon',  
      type: 'image/png',  
      href: '/icon-192.png',  
    },  
  ],  
  script: [  
    {  
      innerHTML: `  
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
      `,  
      type: 'text/javascript'  
    }  
  ]  
})  

const router = useRouter()  

onMounted(() => {  
  router.afterEach((to) => {  
    if (window._paq) {  
      window._paq.push(['setCustomUrl', to.fullPath])  
      window._paq.push(['setDocumentTitle', document.title])  
      window._paq.push(['trackPageView'])  
    }  
  })  

  // 添加 Matomo 图像跟踪器  
  const img = document.createElement('img')  
  img.src = "https://mato.ifttt.fun/matomo.php?idsite=9&rec=1"  
  img.style.cssText = "border:0; position: absolute; bottom: 0; right: 0;"  
  img.alt = ""  
  img.setAttribute('referrerpolicy', 'no-referrer-when-downgrade')  
  document.body.appendChild(img)  
})  

onUnmounted(() => {  
  // 如果需要，可以在这里清理图像跟踪器  
  const img = document.querySelector('img[src^="https://mato.ifttt.fun/matomo.php"]')  
  if (img) {  
    img.remove()  
  }  
})  
</script>  

<template>  
  <NuxtLayout>  
    <NuxtLoadingIndicator color="#000" />  
    <NuxtPage />  
    <Toaster />  
  </NuxtLayout>  
</template>
