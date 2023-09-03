import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("C:/git-desktop/laptrinhquade/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.0.2/node_modules/vuepress-theme-gungnir/lib/client/layouts/404.vue")),
  "HomePage": defineAsyncComponent(() => import("C:/git-desktop/laptrinhquade/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.0.2/node_modules/vuepress-theme-gungnir/lib/client/layouts/HomePage.vue")),
  "Layout": defineAsyncComponent(() => import("C:/git-desktop/laptrinhquade/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.0.2/node_modules/vuepress-theme-gungnir/lib/client/layouts/Layout.vue")),
  "Links": defineAsyncComponent(() => import("C:/git-desktop/laptrinhquade/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.0.2/node_modules/vuepress-theme-gungnir/lib/client/layouts/Links.vue")),
  "Post": defineAsyncComponent(() => import("C:/git-desktop/laptrinhquade/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.0.2/node_modules/vuepress-theme-gungnir/lib/client/layouts/Post.vue")),
  "Tags": defineAsyncComponent(() => import("C:/git-desktop/laptrinhquade/node_modules/.pnpm/vuepress-theme-gungnir@2.0.0-alpha.26_sass-loader@13.0.2/node_modules/vuepress-theme-gungnir/lib/client/layouts/Tags.vue")),
}
