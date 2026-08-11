import { CodeTabs } from "/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/protfolio/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "/home/pandey/Desktop/Ashwani Pandey Resume/vue_press_resume/protfolio/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
