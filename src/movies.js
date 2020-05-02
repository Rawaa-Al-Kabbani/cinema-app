const MOVIES = [
  {
    title: 'JOKER',
    src:
      'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg ',
    story:
      'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker',
    directors: ['Todd Phillips'],
    writers: ['Todd Phillips', 'Scott Silver'],
    stars: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
  },
  {
    title: 'CAPTAIN MARVEL',
    src:
      'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,675,1000_AL_.jpg ',
    story:
      'Carol Danvers becomes one of the universe most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.',
    directors: ['Anna Boden', 'Ryan Fleck'],
    writers: ['Anna Boden', 'Ryan Fleck'],
    stars: ['Brie Larson', 'Samuel L. Jackson', 'Ben Mendelsohn'],
  },
  {
    title: 'THE INFORMER',
    src:
      'https://m.media-amazon.com/images/M/MV5BZGM1MGI4MzctY2I0Mi00ZTMzLTgxMmUtMzRiYjAyNmUyOGZkXkEyXkFqcGdeQXVyMzg1ODQ3NDY@._V1_SY1000_CR0,0,683,1000_AL_.jpg',
    story:
      'An ex-convict working undercover intentionally gets himself incarcerated again in order to infiltrate the mob at a maximum security prison.',
    directors: ['Andrea Di Stefano'],
    writers: ['Rowan Joffe', 'Andrea Di Stefano'],
    stars: ['Ana de Armas', 'Rosamund Pike', 'Joel Kinnaman'],
  },
  {
    title: 'AVENGERS',
    src:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    story:
      'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    directors: ['Anthony Russo', 'Joe Russo'],
    writers: ['Christopher Markus', 'Stephen McFeely'],
    stars: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo'],
  },
  {
    title: 'TERMINATOR',
    src:
      'https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX640_CR0,0,640,999_AL_.jpg',
    story:
      'An augmented human and Sarah Connor must stop an advanced liquid Terminator, from hunting down a young girl, whose fate is critical to the human race.',
    directors: ['Tim Miller'],
    writers: ['James Cameron', 'Charles H. Eglee'],
    stars: ['Linda Hamilton', 'Arnold Schwarzenegger', 'Mackenzie Davis'],
  },
  {
    title: 'BOMBSHELL',
    src:
      'https://m.media-amazon.com/images/M/MV5BZjlhOWE3YjktY2MzOC00ZmQ1LWIwNjgtZmVhZmFjZGExMzgyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SY1000_CR0,0,648,1000_AL_.jpg',
    story:
      'A group of women take on Fox News head Roger Ailes and the toxic atmosphere he presided over at the network.',
    directors: ['Jay Roach'],
    writers: ['Charles Randolph'],
    stars: ['Charlize Theron', 'Nicole Kidman', 'Margot Robbie'],
  },
  {
    title: 'LITTLE MONSTERS',
    src:
      'https://m.media-amazon.com/images/M/MV5BMjkxMDIyNTAtYjgwZC00YmIwLWFmZTEtZTIzOWZhZjNiZDQwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SY1000_SX675_AL_.jpg',
    story:
      'A washed-up musician teams up with a teacher and a kids show personality to protect young children from a sudden outbreak of zombies.',
    directors: ['Abe Forsythe'],
    writers: ['Abe Forsythe'],
    stars: ['Lupita Nyongo', 'Alexander England', 'Josh Gad'],
  },
  {
    title: 'CODE 8',
    src:
      'https://m.media-amazon.com/images/M/MV5BNmQ2NWMyZDgtNWQ5My00ZmQwLWE0MTQtN2ZiNjY2ODc0Y2YxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX674_AL_.jpg',
    story:
      'A super-powered construction worker falls in with a group of criminals in order to raise the funds to help his ill mother.',
    directors: ['Jeff Chan'],
    writers: ['Chris Pare', 'Jeff Chan'],
    stars: ['Stephen Amell', 'Laysla De Oliveira', 'Robbie Amell'],
  },
  {
    title: 'BOOKSMART',
    src:
      'https://m.media-amazon.com/images/M/MV5BMjEzMjcxNjA2Nl5BMl5BanBnXkFtZTgwMjAxMDM2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    story:
      'On the eve of their high school graduation, two academic superstars and best friends realize they should have worked less and played more. Determined not to fall short of their peers, the girls try to cram four years of fun into one night.',
    directors: ['Olivia Wilde'],
    writers: ['Emily Halpern', 'Sarah Haskins'],
    stars: ['Kaitlyn Dever', 'Beanie Feldstein', 'Jessica Williams'],
  },
  {
    title: 'STAR WARS',
    src:
      'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    story:
      'The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.',
    directors: ['J.J. Abrams'],
    writers: ['Chris Terrio', 'J.J. Abrams'],
    stars: ['Carrie Fisher', 'Mark Hamill', 'Adam Driver'],
  },
  {
    title: 'JUMANJI',
    src:
      'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    story:
      'In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world most dangerous game.',
    directors: ['Jake Kasdan'],
    writers: ['Jake Kasdan', 'Jeff Pinkner'],
    stars: ['Dwayne Johnson', 'Jack Black', 'Kevin Hart'],
  },
  {
    title: 'READY or NOT',
    src:
      'https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,670,1000_AL_.jpg',
    story:
      'A bride wedding night takes a sinister turn when her eccentric new in laws force her to take part in a terrifying game.',
    directors: ['Matt Bettinelli-Olpin', 'Tyler Gillett'],
    writers: ['Guy Busick', 'R. Christopher Murphy'],
    stars: ['Samara Weav'],
  },
  {
    title: 'Pokemon Detective Pikachu',
    src:
      'https://m.media-amazon.com/images/M/MV5BNDU4Mzc3NzE5NV5BMl5BanBnXkFtZTgwMzE1NzI1NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    story:
      'In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.',
    directors: ['Rob Letterman'],
    writers: ['Dan Hernandez', 'Benji Samit'],
    stars: ['Ryan Reynolds', 'Justice Smith', 'Kathryn Newton'],
  },
  {
    title: 'PATMAN vs TURTELS',
    src:
      'https://m.media-amazon.com/images/M/MV5BNzk3MGZlYWQtNDU4Ny00Y2I5LTk2YmItM2QxYjFiMjM0ZmQxXkEyXkFqcGdeQXVyNDUzMTkzMDI@._V1_.jpg',
    story:
      'Batman, Batgirl and Robin forge an alliance with The Teenage Mutant Ninja Turtles to fight against the Turtles sworn enemy, The Shredder, who has teamed up with Ra Al Ghul and The League Of Assassins.',
    directors: ['Jake Castorena'],
    writers: ['Marly Halpern-Graser', 'James Tynion IV'],
    stars: ['Troy Baker', 'Eric Bauza', 'Darren Criss'],
  },
  {
    title: 'TOY STORY 4',
    src:
      'https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
    story:
      'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.',
    directors: ['Josh Cooly'],
    writers: ['John Lasseter', 'Andrew Stanton'],
    stars: ['Tom Hanks', 'Tim Allen', 'Annie Potts'],
  },
  {
    title: 'The Angry Birds 2',
    src:
      'https://m.media-amazon.com/images/M/MV5BYzdkNGJhNzQtMjY1OC00MDI3LTk0ZDUtNzU0MGZiY2YwZGUxXkEyXkFqcGdeQXVyNzMxNjQxMTk@._V1_.jpg',
    story: 'The flightless birds and scheming green pigs take their feud to the next level.',
    directors: ['Thurop Van Orman', 'John Rice'],
    writers: ['Peter Ackerman', 'Eyal Podell'],
    stars: ['Jason Sudeikis', 'Josh Gad', 'Leslie Jones'],
  },
  {
    title: 'Spies in Disguise',
    src:
      'https://m.media-amazon.com/images/M/MV5BNzg1MzM3OWUtNjgzZC00NjMzLWE1NzAtOThiMDgyMjhhZDBhXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SY1000_SX675_AL_.jpg',
    story:
      'When the world best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.',
    directors: ['Nick Bruno', 'Troy Quane'],
    writers: ['Brad Copeland', 'Lloyd Taylor'],
    stars: ['Rachel Brosnahan', 'Jarrett Bruno', 'Claire Crosby'],
  },
  {
    title: 'FROZEN 2',
    src:
      'https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SY1000_SX675_AL_.jpg',
    story:
      'Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa powers in order to save their kingdom.',
    directors: ['Chris Buck', 'Jennifer Lee'],
    writers: ['Jennifer Lee'],
    stars: ['Kristen Bell', 'Idina Menzel', 'Josh Gad'],
  },
];

export default MOVIES;
