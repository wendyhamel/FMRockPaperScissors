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
              'top' : 'inset 0 5px 2px 0 rgb(0,0,0)',
              'bottom' : 'inset 0 -5px 0 0 rgb(0,0,0)',
              'fade' : '0px 0px 0px 18px rgba(255,255,255,0.04), 0px 0px 0px 46px rgba(255,255,255,0.035), 0px 0px 0px 80px rgba(255,255,255,0.02)'
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
                'cyan-start' : 'hsl(189, 59%, 53%)',
                'cyan-end' : 'hsl(189, 58%, 57%)',

                'light' : 'hsl(220,27%,94%)',
                'dark' : 'hsl(229, 25%, 31%)',
                'score' : 'hsl(229, 64%, 46%)',
                'header-outline' : 'hsl(217, 16%, 45%)',

                'radial-gradient-start' : 'hsl(214, 47%, 23%)',
                'radial-gradient-end' : 'hsl(237, 49%, 15%)',
            }
        }
    }
}