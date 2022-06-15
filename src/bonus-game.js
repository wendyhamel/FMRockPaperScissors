window.rpsls = function () {
    return {
        tab: 'pick',
        picked: [],
        house: [],
        finished: false,
        rules: false,
        ready: false,
        bonusGame: null,
        bonusScore: Alpine.$persist(0),
        bonusOptions: {
            scissors:
                {
                    name: 'scissors',
                    image: './images/icon-scissors.svg',
                    colors: 'from-scissors-start via-scissors-end to-scissors-end shadow-scissors-shadow md:shadow-scissors-shadow lg:shadow-scissors-shadow',
                    defeats: ['paper', 'lizard'],
                    position: 'col-span-2 place-self-center translate-y-6',
                },
            spock:
                {
                    name: 'spock',
                    image: './images/icon-spock.svg',
                    colors: 'from-spock-start via-spock-end to-spock-end shadow-spock-shadow md:shadow-spock-shadow lg:shadow-spock-shadow',
                    defeats: ['scissors', 'rock'],
                    position: 'place-self-start md:-translate-y-4',
                },
            paper:
                {
                    name: 'paper',
                    image: './images/icon-paper.svg',
                    colors: 'from-paper-start via-paper-end to-paper-end shadow-paper-shadow md:shadow-paper-shadow lg:shadow-paper-shadow',
                    defeats: ['rock', 'spock'],
                    position: 'place-self-end md:-translate-y-4',
                },
            lizard:
                {
                    name: 'lizard',
                    image: './images/icon-lizard.svg',
                    colors: 'from-lizard-start via-lizard-end to-lizard-end shadow-lizard-shadow md:shadow-lizard-shadow lg:shadow-lizard-shadow',
                    defeats: ['spock', 'paper'],
                    position: 'place-self-end mr-2',
                },
            rock:
                {
                    name: 'rock',
                    image: './images/icon-rock.svg',
                    colors: 'from-rock-start via-rock-end to-rock-end shadow-rock-shadow md:shadow-rock-shadow lg:shadow-rock-shadow',
                    defeats: ['scissors', 'lizard'],
                    position: 'place-self-start ml-2',
                },
        },

        pick(choice) {
            this.tab = 'picked';
            this.housePick()
            return this.picked = choice;
        },

        housePick() {
            let randomPickOptionNames = Object.keys(this.bonusOptions);
            let randomPick = Math.floor(Math.random() * randomPickOptionNames.length );
            setTimeout(function() { this.showHousePick() }.bind(this) ,1500);
            return this.house = this.bonusOptions[randomPickOptionNames[randomPick]];
        },

        showHousePick() {
            this.ready = true;
            setTimeout(function() { this.compare(this.picked, this.house) }.bind(this) ,1000);
        },

        compare(player, house) {
            this.finished = true;
            if (player.name === house.name) {
                this.bonusGame = 'tie';
                return this.bonusScore;
            } else if (player.defeats.find(option => option === house.name)) {
                this.bonusGame = 'win';
                return this.bonusScore ++;
            } else {
                this.bonusGame = 'lose';
                this.bonusScore --;
                return this.bonusScore < 0 ? this.bonusScore = 0 : this.bonusScore;
            }
        },

        reset() {
            this.tab = false;
            this.finished = false;
            this.rules = false;
            this.ready = false;
            this.bonusGame = null;
            setTimeout(function() { this.tab = 'pick'; }.bind(this) ,750);
        },
    }
}