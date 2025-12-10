    /** @type {import('tailwindcss').Config} */
export default {
      content: [
        "./index.html","./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your project structure
      ],
      theme: {
        extend: {
colors:{
    "rabbit-red":"#ea2e0e"
}


        },
      },
      plugins: [],
    }