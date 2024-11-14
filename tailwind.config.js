const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        fontFamily: {
            roboto: ['Roboto'],
        },
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                // heading: ['Roboto', ...defaultTheme.fontFamily.heading],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
    content: [],
}
