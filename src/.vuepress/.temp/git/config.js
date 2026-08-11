import { GitContributors } from "/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/protfolio/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/protfolio/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
