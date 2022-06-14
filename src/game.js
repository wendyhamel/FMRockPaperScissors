window.rps = function () {
    return {

        tab: 'pick',
        picked: [],
        house: [],
        finished: false,
        rules: false,
        ready: false,
        game: null,
        score: Alpine.$persist(12),
        options: {
            paper:
                {
                    name: 'paper',
                    image: './images/icon-paper.svg',
                    colors: 'from-paper-start via-paper-end to-paper-end shadow-paper-shadow md:shadow-paper-shadow lg:shadow-paper-shadow',
                    defeats: 'rock',
                },
            scissors:
                {
                    name: 'scissors',
                    image: './images/icon-scissors.svg',
                    colors: 'from-scissors-start via-scissors-end to-scissors-end shadow-scissors-shadow md:shadow-scissors-shadow lg:shadow-scissors-shadow',
                    defeats: 'paper',
                },
            rock:
                {
                    name: 'rock',
                    image: './images/icon-rock.svg',
                    colors: 'from-rock-start via-rock-end to-rock-end shadow-rock-shadow md:shadow-rock-shadow lg:shadow-rock-shadow',
                    defeats: 'scissors',
                },
        },

        pick(choice) {
            this.tab = 'picked';
            this.housePick()
            return this.picked = choice;
        },

        housePick() {
            let randomPickOptionNames = Object.keys(this.options);
            let randomPick = Math.floor(Math.random() * randomPickOptionNames.length );
            setTimeout(function() { this.showHousePick() }.bind(this) ,500);
            return this.house = this.options[randomPickOptionNames[randomPick]];
        },

        showHousePick() {
            this.ready = true;
            setTimeout(function() { this.compare(this.picked, this.house) }.bind(this) ,1000);
        },

        compare(player, house) {
            if (player.name === house.name) {
                this.game = 'tie';
                this.finished = true;
                return this.score;
            }
            if (player.defeats === house.name) {
                this.game = 'won';
                this.score ++;
                this.finished = true;
                return this.score;
            } else {
                this.game = 'lost';
                this.score --;
                this.finished = true;
                return this.score;
            }
        },

        // get tiedGame() {
        //     this.options.filter(option => option.name === this.house.name);
        //     return this.score;
        // },
        // get wonGame() {
        //     this.options.filter(option => option.defeats === this.house.name);
        //     return this.score ++;
        // },
        // get lostGame() {
        //     this.options.filter(option => ! option.defeats === this.house.name && option.name === this.house.name);
        //     return this.score --;
        // },

        reset() {
            this.tab = false;
            this.finished = false;
            this.rules = false;
            this.ready = false;
            this.game = null;
            setTimeout(function() { this.tab = 'pick'; }.bind(this) ,750);
        },
    }
}