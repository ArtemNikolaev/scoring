import { Injectable } from '@angular/core';

import _ from 'lodash';

const players: string = 'players';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {

    constructor() {
        if (!localStorage.getItem(players)) {
            localStorage.setItem(players, JSON.stringify([]));
        }
    }

    static saveToLocalStorage(array) {
        localStorage.setItem(players, JSON.stringify(array));
    }

    get() {
        return JSON.parse(localStorage.getItem(players));
    }

    save(array) {
        const savePlayers = _.union(this.get(), array);

        PlayersService.saveToLocalStorage(savePlayers);
    }

    remove(name) {
        const data = this.get();
        const length = data.length;

        for (let i = 0; i < length; i++) {
            if (data[i] === name) {
                data.splice(i, 1);

                break;
            }
        }

        PlayersService.saveToLocalStorage(data);
    }
}
