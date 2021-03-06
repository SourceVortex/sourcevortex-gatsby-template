const config = require('../gatsby.settings/config')

module.exports = async function (createPage) {
  if (!config.pagesEnabled.blog) return
  return await createPage({
    path: '/blog',
    component: require.resolve(`../src/views/Blog/index.tsx`),
    context: {},
  })
}
