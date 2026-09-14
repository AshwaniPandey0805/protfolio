export const siteData = JSON.parse("{\"base\":\"/protfolio/\",\"lang\":\"en-US\",\"title\":\"Ashwani Kumar Pandey\",\"description\":\"Backend Software Developer Portfolio - Node.js, AI & RAG Systems, Laravel\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://img.icons8.com/color/48/developer.png\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Ashwani Kumar Pandey\",\"description\":\"Backend Software Developer Portfolio - Node.js, AI & RAG Systems, Laravel\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
