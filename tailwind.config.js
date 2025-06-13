/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // если используешь app router
  ],
  safelist: ['text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl'],
  theme: {
    screens: {
      xl: '1400px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      vsm: '400px',
      '500px': '500px',
      '450px': '450px',
      '640px': '640px',
    },

    borderWidth: {
      sm: '1px',
    },
    borderRadius: {
      sm: '8px',
    },
    extend: {
      transitionDuration: {
        DEFAULT: '0.3s', // установите желаемую продолжительность анимации по умолчанию
      },
      fontSize: {
        sm: '10px',
        base: '12px',
        xl: '14px',
        big: '100px',
        '2xl': '16px',
        '3xl': '18px',
        '4xl': '20px',
        '5xl': '22px',
        '27px': '27px',
        '6xl': '64px',
      },
      colors: {
        destructive_text_color: 'var(--tg-theme-destructive-text-color)',
        subtitle_text_color: 'var(--tg-theme-subtitle-text-color)',
        section_separator_color: 'var(--tg-theme-section-separator-color)',
        section_header_text_color: 'var(--tg-theme-section-header-text-color)',
        section_bg_color: 'var(--tg-theme-section-bg-color)',
        accent_text_color: 'var(--tg-theme-accent-text-color)',
        header_bg_color: 'var(--tg-theme-header-bg-color)',
        secondary_bg_color: 'var(--tg-theme-secondary-bg-color)',
        button_text_color: 'var(--tg-theme-button-text-color)',
        button_color: 'var(--tg-theme-button-color)',
        link_color: 'var(--tg-theme-link-color)',
        hint_color: 'var(--tg-theme-hint-color)',
        text_color: 'var(--tg-theme-text-color)',
        bg_color: 'var(--tg-theme-bg-color)',
        hint_dark: '#AAAAAA',
        dark_secondary: '#1C1C1D',
      },
    },
  },
  plugins: [],
}
