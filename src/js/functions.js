'use strict';

function $nR(selector) {
    const elem = document.querySelector(selector);
    if (elem) {
        return elem;
    }
    return false;
}

function timeout(message, time = 0) {
    return new Promise(done => {
        setTimeout(() => done(message), time * 1000);
    });
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}