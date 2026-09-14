export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"Ashwani Kumar Pandey\",\"description\":\"Backend Software Engineer Portfolio - Specialized in PHP, Laravel & Magento 2\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"https://img.icons8.com/color/48/developer.png\"}]],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"Ashwani Kumar Pandey\",\"description\":\"Backend Software Engineer Portfolio - Specialized in PHP, Laravel & Magento 2\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
