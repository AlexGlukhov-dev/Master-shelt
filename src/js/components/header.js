import {locoScroll} from '../_functions';

const toAbout = document.getElementById('to-about');
const toServices = document.getElementById('to-services');
const toContacts = document.getElementById('to-contacts');

toAbout.addEventListener('click', () => {
  locoScroll.scrollTo(document.querySelector('#about'))
})
toServices.addEventListener('click', () => {
  locoScroll.scrollTo(document.querySelector('#services'))
})
toContacts.addEventListener('click', () => {
  locoScroll.scrollTo(document.querySelector('#contacts'), {
    duration: 3000,
  })
})
