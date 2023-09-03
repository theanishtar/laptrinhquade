export const categoryMap = {"tag":{"/":{"path":"/tags/","map":{"Data structures":{"path":"/tags/data-structures/","keys":["v-5663e3fd","v-5663e41c","v-5663e43b"]},"Algorithms":{"path":"/tags/algorithms/","keys":["v-5663e3fd"]},"DSA":{"path":"/tags/dsa/","keys":["v-5663e3fd","v-5663e41c","v-5663e43b"]},"Giới thiệu":{"path":"/tags/gi%E1%BB%9Bi-thi%E1%BB%87u/","keys":["v-0df3c318","v-66a4fd02"]},"Backend":{"path":"/tags/backend/","keys":["v-77e2f3a3"]},"Authentication":{"path":"/tags/authentication/","keys":["v-77e2f3a3"]},"Authoriztion":{"path":"/tags/authoriztion/","keys":["v-77e2f3a3"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
