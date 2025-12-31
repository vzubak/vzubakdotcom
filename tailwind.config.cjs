/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,md,mdx,ts}'], // Removed jsx, tsx, svelte, and vue
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: ["lofi", "black"],
        darkTheme: "black",
        logs: false,
    }
}