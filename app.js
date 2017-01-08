const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true});

const selector = '.story-body__inner p'

nightmare.goto('http://www.bbc.com/')
  .click('.block-link__overlay-link')
  .evaluate((selector) => {
    return document.querySelector(selector).innerText;
  }, selector)
  .end()
  .then((story) => {
    console.log(story)
  })
  .catch((err) => {
    console.log(err)
  });
