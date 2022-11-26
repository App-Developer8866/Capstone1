/* eslint-disable no-alert */
/* eslint-disable no-plusplus */
const body = document.querySelector('body');
const menuBtn = document.querySelector('#menu-btn');
const navContainer = document.querySelector('.nav-container');
const navItems = document.querySelectorAll('.nav-menu a');
const Speaker = document.querySelectorAll('.speaker');

const DISPLAY_MENU = 'mobile-menu';
const FIXED_POS = 'fixed-position';
const CLOSE_ICON = '<i class="fa-regular fa-circle-xmark"></i>';
const MENU_ICON = '<i class="fa-solid fa-bars"></i>';

const isMenuOpen = () => navContainer.classList.contains(DISPLAY_MENU);

function toggleMobileMenu() {
  navContainer.classList.toggle(DISPLAY_MENU);
  body.classList.toggle(FIXED_POS);
  if (isMenuOpen()) {
    menuBtn.innerHTML = CLOSE_ICON;
    body.classList.add(FIXED_POS);
  } else {
    menuBtn.innerHTML = MENU_ICON;
    body.classList.remove(FIXED_POS);
  }
}

menuBtn.addEventListener('click', toggleMobileMenu);

navItems.forEach((item) => item.addEventListener('click', () => {
  if (isMenuOpen()) {
    toggleMobileMenu();
  }
}));

const players = [
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ronnie_O%E2%80%99Sullivan_at_Snooker_German_Masters_%28DerHexer%29_2015-02-06_07.jpg/322px-Ronnie_O%E2%80%99Sullivan_at_Snooker_German_Masters_%28DerHexer%29_2015-02-06_07.jpg',
    name: 'Ronnie O\'Sullivan',
    country: 'England',
    bio: `He is an English professional snooker player who is the current world champion and world number 
    one. Widely recognised as one of the most talented and accomplished players in the sport's history, 
    he has won the World Snooker Championship seven times, a modern-era record he holds jointly with 
    Stephen Hendry. He has won a record seven Masters and a record seven UK Championship titles for a 
    total of 21 Triple Crown titles, the most achieved by any player. He holds the record for the most 
    ranking titles, with 39, and has been world number one on multiple occasions.`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/John_Higgins_PHC_2015.jpg/220px-John_Higgins_PHC_2015.jpg',
    name: 'John Higgins',
    country: 'Scotland',
    bio: `He is a Scottish professional snooker player. He has won 31 career ranking titles, placing him 
    in third position on the all-time list of ranking event winners, behind Ronnie O'Sullivan (39) and 
    Stephen Hendry (36). Since turning professional in 1992, he has won four World Championships, 
    three UK Championships, and two Masters titles for a total of nine Triple Crown titles, putting him 
    on a par with Mark Selby and behind only O'Sullivan (21), Hendry (18) and Steve Davis (15). A 
    prolific break-builder, he has compiled over 900 century breaks and 12 maximum breaks in professional 
    tournaments, in both cases second only to O'Sullivan (who has compiled over 1,100 centuries and 15 
      maximums). Higgins has achieved the world number 1 ranking position on four occasions`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jack_Lisowski_PHC_2016.jpg/220px-Jack_Lisowski_PHC_2016.jpg',
    name: 'Jack Adam Lisowski',
    country: 'England',
    bio: `He is an English professional snooker player from Churchdown, Gloucestershire. He turned 
    professional in 2010 by finishing first in the 2009/2010 PIOS rankings. A left-handed player, he is 
    known for his attacking style of play. Lisowski has reached six ranking finals, but has been 
    runner-up each time, losing three finals to Judd Trump, two to Neil Robertson, and one to Mark Selby. 
    He has made one maximum break in professional competition.`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Judd_Trump_May_2015_%28cropped%29.jpg/220px-Judd_Trump_May_2015_%28cropped%29.jpg',
    name: 'Judd Trump',
    country: 'England',
    bio: `He  is an English professional snooker player from Bristol, a former world champion and former 
    world number one. Widely regarded as one of the sport's most talented players, he is currently sixth 
    on the list of all-time ranking event winners, with 23 ranking titles.`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Stephen_Maguire_at_Snooker_German_Masters_2015-02-04_03.jpg/220px-Stephen_Maguire_at_Snooker_German_Masters_2015-02-04_03.jpg',
    name: 'Stephen Maguire',
    country: 'Scotland',
    bio: `He is a Scottish professional snooker player. He has won six major ranking tournaments, 
    including the 2004 UK Championship, and has twice since reached the finals of that event. Maguire 
    turned professional in 1998 after winning the IBSF World Snooker Championship. He was in the top 16 
    of the snooker world rankings for 11 consecutive years, from 2005 to 2016, twice reaching world no. 
    2. He is a prolific break-builder, having compiled more than 450 century breaks, including three 
    maximums.`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Stuart_Bingham_PHC_2016-1.jpg/220px-Stuart_Bingham_PHC_2016-1.jpg',
    name: 'Stuart Bingham',
    country: 'England',
    bio: `He is an English professional snooker player who is a former world and Masters champion. 
    Bingham won the 1996 World Amateur Championship but enjoyed little sustained success in the early 
    part of his professional career. His form improved in his mid-thirties: at age 35, he won his first 
    ranking title at the 2011 Australian Goldfields Open, which helped him enter the top 16 in the 
    rankings for the first time.`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Mark_Williams_at_Snooker_German_Masters_%28DerHexer%29_2015-02-05_02.jpg/220px-Mark_Williams_at_Snooker_German_Masters_%28DerHexer%29_2015-02-05_02.jpg',
    name: 'Mark James Williams',
    country: 'Wales',
    bio: `He is a Welsh professional snooker player who is a three-time World Champion, winning in 2000, 
    2003 and 2018. Often noted for his single-ball long potting ability, Williams has earned the 
    nickname "The Welsh Potting Machine".`,
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Yan_Bingtao_EuM_2022-1.jpg/220px-Yan_Bingtao_EuM_2022-1.jpg',
    name: 'Yan Bingtao',
    country: 'China',
    bio: `He is a Chinese professional snooker player. He is the youngest player to win the Amateur World 
    Snooker Championship after defeating Muhammad Sajjad 8–7. He won his first Triple Crown event at the 
    2021 Masters, winning in deciding frames in every match up until the final, where he defeated John 
    Higgins 10–8, coming back from 3–5 and 5–7 behind`,
  },
];

for (let i = 0; i < players.length; i++) {
  Speaker[i].innerHTML = `
  <img class="profile-pic" src="${players[i].img}" alt="profile picture" />
          <section class="p-3 player-info">
            <h3 class="player-name">${players[i].name}</h3>
            <h4 class="player-title">${players[i].country}</h4>
            <p class="player-bio">
              ${players[i].bio}
            </p>
          </section>
  `;
}
