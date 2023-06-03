/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   darkMode: false,
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// export const purge = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
// export const darkMode = media;
// export const theme = {
//   extend: {},
// };
// export const variants = {
//   extend: {},
// };
// export const plugins = [];


export const purge = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const median = false;
export const content = [
  'node_modules/flowbite-vue/**/*.{js,ts,jsx,tsx,.d.ts}',
  'node_modules/flowbite/**/*.{js,ts,jsx,tsx,.d.ts}'
];
export const theme = {};
export const plugins = [
  require('flowbite/plugin')
];