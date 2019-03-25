const role = document.getElementById('role'),
  roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Team Leader',
    'Frontend Developer',
    'Entrepreneur',
    'Backend Developer',
    'IoT Maker',
    'Coffee Addict',
    'Youtuber (viewer)'
  ];

const TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = this.txt + '&nbsp;';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 3; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

new TxtType(role, roles);

const links = document.getElementsByTagName('a'),
  tracking = ['mouseover', 'click'];

for (let i=0; i<links.length; i++){
  const link = links.item(i);

  if (link.title) {
    tracking.forEach(track => link.addEventListener(track, () => ga('send', 'event', 'link', track, link.title), false));
  }
}


const age = document.getElementById('age');
const birth = 607842000;
const date = new Date();
let years = date.getFullYear() - 1989;
if (date.getMonth() < 3) years--;

age.title = `Around ${years} years`;

setInterval(() => {
  age.innerText = Math.ceil(Date.now()/1000) - birth;
}, 1000);
