import PaySystemCheck from './PaysystemCheck';

const input = document.getElementById('card_number');
const check = document.getElementById('submitform');
const actionClass = 'cdisabled';

const paySystemCheck = new PaySystemCheck(actionClass, '.card', input, check);
paySystemCheck.addListener();
