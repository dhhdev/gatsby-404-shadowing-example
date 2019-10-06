exports.onCreatePage = async ({ page, actions }) => {
  const { deletePage } = actions;
  // Check for /404/ specific path
  // The only way I have found to delete the redundant /404/ creation
  if (page.path.match('^/404/')) {
    deletePage(page);
  }
};
