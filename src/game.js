window.rps = function () {
    return {
        tab: 'pick',
        choice: 'paper',
        house: 'paper',
        finished: false,
        rules: false,
        ready: false,
        won: false,
        lose: false,
        tie: false,
        score: 12,

        options: [
            {
                name: 'rock',
                image: './images/icon-rock.svg',
                colors: 'from-rock-start via-rock-end to-rock-end shadow-rock-shadow md:shadow-rock-shadow lg:shadow-rock-shadow'
            },
            {
                name: 'paper',
                image: './images/icon-paper.svg',
                colors: 'from-paper-start via-paper-end to-paper-end shadow-paper-shadow md:shadow-paper-shadow lg:shadow-paper-shadow'
            },
            {
                name: 'scissors',
                image: './images/icon-scissors.svg',
                colors: 'from-scissors-start via-scissors-end to-scissors-end shadow-scissors-shadow md:shadow-scissors-shadow lg:shadow-scissors-shadow'
            }
        ],

        get chosen() {
            this.chosenArray = this.options.filter(option => option.name === this.choice);
            setTimeout(function() {this.ready = true}.bind(this) ,1500);
            return this.chosenArray[0];
        },

        get housePick() {
            this.houseArray = this.options.filter(option => option.name === this.house);
            // this.houseArray = this.options.filter(option => option === this.options[Math.floor(Math.random() * this.options.length)]);
            return this.houseArray[0];
        },

        get compare() {
            if (this.chosen.name === this.housePick.name) {
                this.tie = true;
            } else {
                let x = 0
                switch(x) {
                    case this.chosen.name === 'rock' && this.housePick.name === 'scissors':
                        this.won = true;
                        this.score ++;
                        break;
                    case this.chosen.name === 'rock' && this.housePick.name === 'paper':
                        this.lose = true;
                        this.score --;
                        break;
                    case this.chosen.name === 'paper' && this.housePick.name === 'rock':
                        this.won = true;
                        this.score ++;
                        break;
                    case this.chosen.name === 'paper' && this.housePick.name === 'scissors':
                        this.lose = true;
                        this.score --;
                        break;
                    case this.chosen.name === 'scissors' && this.housePick.name === 'paper':
                        this.won = true;
                        this.score ++;
                        break;
                    case this.chosen.name === 'scissors' && this.housePick.name === 'rock':
                        this.lose = true;
                        this.score --;
                        break;
                }
            }
            this.finished = true;
        },

        reset() {
            this.tab = 'pick';
            this.finished = false;
            this.rules = false;
            this.ready = false;
            this.won = false;
            this.lose = false;
            this.tie = false;
        }
        // animate() {
        //     this.animation = true;
        //     setTimeout(function() {this.animation = false}.bind(this) ,1000);
        // },
    }
}