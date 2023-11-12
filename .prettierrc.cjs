module.exports = {
  importOrder: ["___", "__", "<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};
