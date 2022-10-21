module.exports = {
  root: true,
  def: {
    node: true,
  },
  extends: [
    'eslint:recommend',
    'plugin:@typescript-eslint/recommend',
    'plugin:react/recommend',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
};
