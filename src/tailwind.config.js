tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Barlow Semi Condensed', 'sans-serif']
        },
        extend: {
            fontSize: {
              '4.5xl' : '2.5rem'
            },
            boxShadow: {
              'top-sm' : 'inset 0 4px 2px 0 rgba(96,110,133,0.3)',
              'top' : 'inset 0 5px 2px 0 rgba(96,110,133,0.3)',
              'top-md' : 'inset 0 6px 2px 0 rgba(96,110,133,0.3)',
              'top-lg' : 'inset 0 8px 2px 0 rgba(96,110,133,0.3)',
              'top-xl' : 'inset 0 12px 2px 0 rgba(96,110,133,0.3)',
              'bottom-sm' : 'inset 0 -4px 0 0 rgb(0,0,0)',
              'bottom' : 'inset 0 -5px 0 0 rgb(0,0,0)',
              'bottom-md' : 'inset 0 -6px 0 0 rgb(0,0,0)',
              'bottom-lg' : 'inset 0 -8px 0 0 rgb(0,0,0)',
              'bottom-xl' : 'inset 0 -12px 0 0 rgb(0,0,0)',
              'fade' : '0px 0px 0px 18px rgba(255,255,255,0.04), 0px 0px 0px 46px rgba(255,255,255,0.035), 0px 0px 0px 80px rgba(255,255,255,0.02)'
            },
            keyframes: {
                scale: {
                    '0%, 100%': { transform: 'scale(1.1)' },
                    '50%': { transform: 'scale(0.8)' },
                },
                pulseFade: {
                    '0%, 100%': { transform: 'scale(1.2)', opacity: 1 },
                    '50%': { transform: 'scale(0.8)', opacity: 0.6 },
                }
            },
            animation: {
                scale: 'scale 1s ease-in-out infinite',
                'pulse-fade': 'pulseFade 2s ease-in-out infinite',
            },
            colors: {
                'paper-shadow' : 'rgb(38, 68, 170)',
                'paper-start' : 'hsl(230, 89%, 62%)',
                'paper-end' : 'hsl(230, 89%, 65%)',
                'rock-shadow' : 'rgb(171,37,59)',
                'rock-start' : 'hsl(349, 71%, 52%)',
                'rock-end' : 'hsl(349, 70%, 56%)',
                'scissors-shadow' : 'rgb(200, 108, 46)',
                'scissors-start' : 'hsl(39, 89%, 49%)',
                'scissors-end' : 'hsl(40, 84%, 53%)',
                'lizard-start' : 'hsl(261, 73%, 60%)',
                'lizard-end' : 'hsl(261, 72%, 63%)',
                'lizard-shadow' : 'rgb(93, 52, 162)',
                'spock-start' : 'hsl(189, 59%, 53%)',
                'spock-end' : 'hsl(189, 58%, 57%)',
                'spock-shadow' : 'rgb(0, 143, 170)',

                'light' : 'hsl(0,0%,90%)',
                'dark' : 'hsl(229, 25%, 31%)',
                'score' : 'hsl(229, 64%, 46%)',
                'header-outline' : 'hsl(217, 16%, 45%)',

                'radial-gradient-start' : 'hsl(214, 47%, 23%)',
                'radial-gradient-end' : 'hsl(237, 49%, 15%)',
            }
        }
    }
}