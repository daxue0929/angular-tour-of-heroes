import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    messages: String[] = [];

    constructor() {
    }

    add(msg: String): void {
        this.messages.push(msg);
    }

    clear(): void {
        this.messages = [];
    }
}
