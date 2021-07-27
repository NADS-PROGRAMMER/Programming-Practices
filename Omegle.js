"use strict";

function conversation() {

    setTimeout(() => {

        console.log('Connection Established.\n🇲🇾 Malaysia')
    }, 2000);
    
    setTimeout(() => fromMe('Do you speak english?'), 3000);
    setTimeout(() => monica('Yea'), 4000);
    setTimeout(() => fromMe('I can hear you why are you typing?'), 5000);
    setTimeout(() => monica('Im shy'), 6000);
    setTimeout(() => fromMe('Oh you just wanna type, okay.'), 7000);
    setTimeout(() => fromMe('Whats your name?'), 9000);
    setTimeout(() => monica('moniqa'), 12000);
    setTimeout(() => fromMe('MO-NI-QA...'), 14000);
    setTimeout(() => fromMe('That\'s a beautiful name for a beautiful girl'), 15500);
    setTimeout(() => fromMe('*Background Music*\n Sabihin mo na nilalaman ng puso mo, at nararamdaman......'), 17000);
    setTimeout(() => monica('whts ur name'), 20000);
    setTimeout(() => fromMe('Oh... uhmmmm'), 22000);
    setTimeout(() => fromMe('My name is Baby'), 24000);
    setTimeout(() => monica('sweet talkerrrr'), 27000);
    setTimeout(() => fromMe('No forreal. That\'s my name. Why are you laughing at my name Moniqa? I just said your name is beautiful just like your face, and then you\'re laughing at my name \"Baby\".'), 28000);
}

function monica(message) {

    console.log(message);
}

function typing(from) {

    console.log(`${from} is typing...`);
}

function fromMe(message) {

    console.log(`                    ${message}`);
}
conversation();