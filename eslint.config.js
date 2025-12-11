import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
{import('tailwindcss').Config}
export default defineConfig([
  globalIgnores(['dist']),
  {
    
    files: ["./src/**/*.{js,jsx,ts,tsx}"],
    DarkMode: 'class',
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    fontFamily: {
        // Use a generic name, then specify fallback fonts
        sans: ['"Custom Thin Sans"', 'Arial', 'sans-serif'], 
        serif: ['"Custom Serif"', 'Georgia', 'serif'],
       
      },
      // Define custom colors if the green isn't standard Tailwind green-500
      colors: {
        'light-gray-bg': '#f8f8f8', 
      },
  
  plugins: [],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        darkMode: 'class',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
