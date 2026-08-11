export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/README.md"), meta: {"title":""} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/about.md"), meta: {"title":"About Me"} }],
  ["/certifications.html", { loader: () => import(/* webpackChunkName: "certifications.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/certifications.md"), meta: {"title":"Certifications"} }],
  ["/education.html", { loader: () => import(/* webpackChunkName: "education.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/education.md"), meta: {"title":"Education"} }],
  ["/experience.html", { loader: () => import(/* webpackChunkName: "experience.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/experience.md"), meta: {"title":"Work Experience"} }],
  ["/projects.html", { loader: () => import(/* webpackChunkName: "projects.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/projects.md"), meta: {"title":"Key Projects"} }],
  ["/skills.html", { loader: () => import(/* webpackChunkName: "skills.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/skills.md"), meta: {"title":"Technical Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/portfolio/src/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);
