const colors = require('tailwindcss/colors')

module.exports = {
   purge: [],
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors: {
         gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
         },
         primary: colors.indigo,
         white: '#fff'
      },
      container: {
         padding: {
            DEFAULT: '1rem',
            sm: '3rem',
            lg: '5rem',
            xl: '7rem',
            '2xl': '9rem',
         },
      },
      fontFamily: {
         'sans': [ 'Poppins', 'sans-serif' ],
         'body': [ 'Poppins', 'sans-serif' ]
      },
      extend: {
         height: {
            'screen-1/2': '50vh'
         },
         zIndex: {
            '-10': '-10'
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
