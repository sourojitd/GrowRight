/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple-inspired neutral palette
        surface: {
          primary: '#FFFFFF',
          secondary: '#F5F5F7',
          tertiary: '#E8E8ED',
        },
        text: {
          primary: '#1D1D1F',
          secondary: '#6E6E73',
          tertiary: '#86868B',
        },
        accent: {
          blue: '#0071E3',
          'blue-hover': '#0077ED',
          green: '#34C759',
          orange: '#FF9500',
          red: '#FF3B30',
          purple: '#AF52DE',
          teal: '#5AC8FA',
        },
        border: {
          light: '#D2D2D7',
          DEFAULT: '#C7C7CC',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display': ['36px', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.015em' }],
        'display-sm': ['28px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'title': ['22px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline': ['17px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '1.5', fontWeight: '400' }],
        'callout': ['16px', { lineHeight: '1.4', fontWeight: '400' }],
        'subhead': ['15px', { lineHeight: '1.4', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '1.4', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.3', fontWeight: '400' }],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
        'modal': '0 20px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.06)',
        'float': '0 8px 30px rgba(0,0,0,0.1)',
        'glow-blue': '0 0 20px rgba(0,113,227,0.3), 0 0 40px rgba(0,113,227,0.1)',
        'glow-purple': '0 0 20px rgba(175,82,222,0.3), 0 0 40px rgba(175,82,222,0.1)',
        'glow-green': '0 0 20px rgba(52,199,89,0.3)',
        'card-elevated': '0 8px 24px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)',
        'card-lifted': '0 12px 40px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'shine': 'shine 2s ease-in-out infinite',
        'shine-once': 'shine 0.8s ease-in-out',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.02)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.01)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
