import luhnAlgoritm from './algoritm';

export default class PaySystemCheck {
  constructor(figthClass, firstClass, input, button) {
    this.class = figthClass,  // eslint-disable-line 
    this.firstClass = firstClass,
    this.input = input,
    this.button = button;
  }

  type(value) { // eslint-disable-line 
    if (value.match(/^5[1-5]/)) {
      return '.master';
    }
    if (value.match(/^4[8-9]/)) {
      return '.visaelectron';
    }
    if (value.match(/^4[0-7]/)) {
      return '.visa';
    }
    if (value.match(/^4/)) {
      return ['.visa', '.visaelectron'];
    }
    if (value.match(/^220/)) {
      return '.mir';
    }
    if (value === '') {
      return false;
    }
  }

  checkType(value, e) {
    const result = this.type(value);

    if (e.key === 'Backspace' || e) {
      document.querySelectorAll(this.firstClass).forEach((i) => i.classList.remove(this.class));
            document.querySelectorAll('.check').forEach((i) => i.style.display = 'none'); // eslint-disable-line  
    }
    if (!result) {
      document.querySelectorAll(this.firstClass).forEach((i) => i.classList.remove(this.class));
    } else if (Array.isArray(result)) {
      document.querySelectorAll(this.firstClass).forEach((i) => i.classList.add(this.class));
      result.forEach((i) => document.querySelector(i).classList.remove(this.class));
    } else if (result === '.visaelectron') {
      document.querySelectorAll(this.firstClass).forEach((i) => i.classList.add(this.class));
      document.querySelector(result).classList.remove(this.class);
    } else {
      document.querySelectorAll(this.firstClass).forEach((i) => i.classList.add(this.class));
      document.querySelector(result).classList.remove(this.class);
    }
  }

  addListener() {
    this.input.addEventListener('keyup', (e) => {
      this.checkType(this.input.value, e);
    });

    this.button.addEventListener('click', () => {
      if (luhnAlgoritm(this.input.value) && this.input.value !== '') {
        document.querySelector('.positive').style.display = 'block';
      } else {
        document.querySelector('.negative').style.display = 'block';
      }
    });
  }
}
