const playerconfielement = document.getElementById('config-overlay');
const backdropelement = document.getElementById('backdrop');
const cancleoverlay = document.querySelector ('button');
const formelemet = document.querySelector('form')
const error = document.getElementById('erroroutput')


const editplayer1button = document.getElementById('adit-player-1-btn');
const editplayer2button = document.getElementById('adit-player-2-btn');


editplayer1button.addEventListener('click', openplayerconfig);
editplayer2button.addEventListener('click', openplayerconfig); 

cancleoverlay.addEventListener('click',cancelpage);

formelemet.addEventListener('submit', saveplayerconfig );
