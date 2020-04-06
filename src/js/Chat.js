'use strict';

class Chat {
    constructor() {
        const root = $nR('#chat-app');
        root.classList.add('chat-app');
        this.chatWindow = document.createElement('div');
        this.chatWindow.classList.add('chat-app__window');

        this.userInteraction = document.createElement('div');
        this.userInteraction.classList.add('chat-app__user-interaction');

        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('placeholder', 'Message...');
        this.send = document.createElement('input');
        this.send.setAttribute('type', 'button');
        this.send.setAttribute('value', 'Send');

        this.userInteraction.appendChild(this.input);
        this.userInteraction.appendChild(this.send);
        root.appendChild(this.chatWindow);
        root.appendChild(this.userInteraction);
    }

    showMessage() {
        this.chat();
    }

    async randomMessage() {
        const message = [
            'Привет',
            'Куда пропал?',
            'Давно не виделись'
        ][rand(0, 2)];
        return timeout(message, 5);
    }
    
    async chat() {
        const message = await this.randomMessage();
        this.chatWindow.innerHTML = message;
    }
}