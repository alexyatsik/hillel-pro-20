'use strict';

class Chat {
    constructor() {
        this.isActive = true;
        const root = $nR('#chat-app');
        root.classList.add('chat-app');
        this.chatWindow = document.createElement('div');
        this.chatWindow.classList.add('chat-app__window');
        this.chatText = document.createElement('ul');

        this.userInteraction = document.createElement('div');
        this.userInteraction.classList.add('chat-app__user-interaction');

        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('placeholder', 'Message...');

        this.send = document.createElement('input');
        this.send.setAttribute('type', 'button');
        this.send.setAttribute('value', 'Send');
        this.send.addEventListener('click', () => {
            if (!this.input.value) {
                this.input.value = '';
                return;
            }

            if (this.input.value === 'My watch has ended') {
                this.showMessage(this.input.value);
                this.input.value = '';
                clearInterval(this.booring);
                this.isActive = false;
                this.showMessage('До встречи!');
                return;
            }
            
            clearInterval(this.booring);
            this.showMessage(this.input.value);
            this.input.value = '';
            if (this.isActive) {
                this.answer();
            }
        });

        this.chatWindow.appendChild(this.chatText);
        this.userInteraction.appendChild(this.input);
        this.userInteraction.appendChild(this.send);
        root.appendChild(this.chatWindow);
        root.appendChild(this.userInteraction);
    }

    showMessage(value) {
        const message = document.createElement('li');
        message.textContent = value;
        this.chatText.appendChild(message);
    }

    async answers() {
        const message = [
            'Привет',
            'Куда пропал?',
            'Давно не виделись',
            'Как жизнь?',
            'Как семья?',
            'Хорошо выглядишь!'
        ][rand(0, 5)];
        return timeout(message, rand(0, 10));
    }
    
    async answer(bye = false) {
        const message = await this.answers();
        this.showMessage(message);
        this.booring = setTimeout(() => {
            if (!this.isActive) {
                return;
            }
            this.showMessage(`Мне пора. Увидимся позже.`);
            this.isActive = false;
        }, 10000);
    }
}