window.rps = function () {
    return {
        tab: 'pick',
        choice: 'paper',
        house: 'paper',
        finished: false,
        rules: false,
        ready: false,
        game: null,
        score: 12,

        options: [
            {
                name: 'rock',
                image: './images/icon-rock.svg',
                colors: 'from-rock-start via-rock-end to-rock-end shadow-rock-shadow md:shadow-rock-shadow lg:shadow-rock-shadow',
                defeats: 'scissors',
                loses: 'paper',
            },
            {
                name: 'paper',
                image: './images/icon-paper.svg',
                colors: 'from-paper-start via-paper-end to-paper-end shadow-paper-shadow md:shadow-paper-shadow lg:shadow-paper-shadow',
                defeats: 'rock',
                loses: 'scissors',
            },
            {
                name: 'scissors',
                image: './images/icon-scissors.svg',
                colors: 'from-scissors-start via-scissors-end to-scissors-end shadow-scissors-shadow md:shadow-scissors-shadow lg:shadow-scissors-shadow',
                defeats: 'paper',
                loses: 'rock',
            }
        ],

        pick(choice) {
            this.choice = choice;
            this.tab = 'picked';
            this.chosen()
        },

        chosen() {
            this.chosenArray = this.options.filter(option => option.name === this.choice);
            return this.chosenArray[0];
        },

        housePick() {
            this.houseArray = this.options.filter(option => option.name === this.house);
            // this.houseArray = this.options.filter(option => option === this.options[Math.floor(Math.random() * this.options.length)]);
            return this.houseArray[0];
        },

        wait() {
            setTimeout(function() {this.ready = true; }.bind(this) ,1500);
        },

        compare(player, house, score) {
            console.log('here')
            // if (player.name === house.name) {
            //    return {
            //        game : 'tie',
            //        finished : true,
            //    }
            // }
            // if (player.defeats === house.name) {
            //     return {
            //         game : 'won',
            //         newScore : score ++,
            //         finished : true,
            //     }
            // }
            // if (player.loses === house.name) {
            //    return {
            //        game : 'lost',
            //        newScore : score --,
            //        finished : true,
            //    }
            // }
        },

        reset() {
            this.tab = 'pick';
            this.finished = false;
            this.rules = false;
            this.ready = false;
            this.won = false;
            this.lost = false;
            this.tie = false;
        }
        // animate() {
        //     this.animation = true;
        //     setTimeout(function() {this.animation = false}.bind(this) ,1000);
        // },
    }
}