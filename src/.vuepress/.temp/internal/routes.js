export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/README.md"), meta: {"title":""} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/about.md"), meta: {"title":"About Me"} }],
  ["/certifications.html", { loader: () => import(/* webpackChunkName: "certifications.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/certifications.md"), meta: {"title":"Certifications & Training"} }],
  ["/education.html", { loader: () => import(/* webpackChunkName: "education.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/education.md"), meta: {"title":"Education"} }],
  ["/experience.html", { loader: () => import(/* webpackChunkName: "experience.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/experience.md"), meta: {"title":"Work Experience"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/projects.md"), meta: {"title":"Key Projects"} }],
  ["/skills.html", { loader: () => import(/* webpackChunkName: "skills.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/skills.md"), meta: {"title":"Technical Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/pandey/Desktop/Folders/Ashwani Pandey Resume/vue_press_resume/protfolio/src/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
