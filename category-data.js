(function () {
  "use strict";

  function mapQuestions(rows) {
    return rows.map(([q, options, correctIndex]) => ({
      q,
      options,
      answer: options[correctIndex]
    }));
  }

  window.CATEGORY_QUIZZES = {
    business: {
      title: "Business And Economics - Companies",
      questions: mapQuestions([
        ["What does CEO stand for?", ["Chief Executive Officer", "Company Equity Owner", "Central Executive Office", "Chief Economy Officer"], 0],
        ["Which document summarizes a company's assets and liabilities?", ["Invoice", "Balance Sheet", "Receipt", "Prospectus"], 1],
        ["What is inflation?", ["A fall in population", "A general rise in prices", "A rise in exports only", "A fall in wages"], 1],
        ["Which market sells shares of public companies?", ["Labor market", "Stock market", "Commodity warehouse", "Retail market"], 1],
        ["What is revenue?", ["Money a business earns", "Only business debt", "Employee count", "Tax percentage"], 0],
        ["Which company created the iPhone?", ["Microsoft", "Apple", "Samsung", "IBM"], 1],
        ["What does IPO stand for?", ["Initial Public Offering", "International Price Order", "Internal Profit Option", "Investor Purchase Office"], 0],
        ["A monopoly has how many dominant sellers?", ["One", "Two", "Five", "Unlimited"], 0],
        ["What is profit?", ["Revenue minus costs", "Costs minus revenue", "Total debt", "Annual tax"], 0],
        ["Which currency is used in Japan?", ["Won", "Yuan", "Yen", "Euro"], 2]
      ])
    },
    history: {
      title: "History - War And Civilizations",
      questions: mapQuestions([
        ["Who was the first President of the United States?", ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], 1],
        ["In which year did World War II end?", ["1942", "1945", "1948", "1950"], 1],
        ["Which civilization built Machu Picchu?", ["Roman", "Inca", "Egyptian", "Maya"], 1],
        ["The Renaissance began in which country?", ["France", "Italy", "Spain", "Greece"], 1],
        ["Who was known as the Maid of Orléans?", ["Marie Curie", "Joan of Arc", "Cleopatra", "Queen Victoria"], 1],
        ["Which empire used the Colosseum?", ["Roman Empire", "Ottoman Empire", "Mughal Empire", "Aztec Empire"], 0],
        ["The Magna Carta was signed in which country?", ["England", "Germany", "India", "Egypt"], 0],
        ["Who discovered the sea route to India around the Cape of Good Hope?", ["Columbus", "Vasco da Gama", "Magellan", "Cook"], 1],
        ["Which wall fell in 1989?", ["Great Wall", "Hadrian's Wall", "Berlin Wall", "Western Wall"], 2],
        ["Ancient pyramids at Giza were built in which country?", ["Mexico", "Egypt", "Peru", "Sudan"], 1]
      ])
    },
    sports: {
      title: "Sports - ICC World Cup",
      questions: mapQuestions([
        ["How many players are on a cricket team?", ["9", "10", "11", "12"], 2],
        ["Which country won the first Cricket World Cup in 1975?", ["India", "Australia", "West Indies", "England"], 2],
        ["A cricket over normally contains how many legal balls?", ["5", "6", "7", "8"], 1],
        ["What is a score of zero called in cricket?", ["Duck", "Love", "Blank", "Nil ball"], 0],
        ["Which sport uses a shuttlecock?", ["Tennis", "Badminton", "Squash", "Table tennis"], 1],
        ["How many rings are in the Olympic symbol?", ["4", "5", "6", "7"], 1],
        ["Which country hosted the 2016 Summer Olympics?", ["China", "Brazil", "Japan", "UK"], 1],
        ["In football, how many players start for each team?", ["9", "10", "11", "12"], 2],
        ["Wimbledon is associated with which sport?", ["Golf", "Tennis", "Cricket", "Rugby"], 1],
        ["Which chess piece moves in an L shape?", ["Bishop", "Knight", "Rook", "Queen"], 1]
      ])
    },
    math: {
      title: "Math And Logic - Puzzles",
      questions: mapQuestions([
        ["What is 12 × 8?", ["86", "92", "96", "108"], 2],
        ["What is the square root of 144?", ["10", "11", "12", "14"], 2],
        ["Which number is prime?", ["21", "27", "29", "33"], 2],
        ["What is 25% of 200?", ["25", "40", "50", "75"], 2],
        ["What comes next: 2, 4, 8, 16, ...?", ["18", "24", "30", "32"], 3],
        ["How many degrees are in a triangle?", ["90", "180", "270", "360"], 1],
        ["What is 7 squared?", ["14", "42", "49", "56"], 2],
        ["If x + 5 = 12, what is x?", ["5", "6", "7", "8"], 2],
        ["Which fraction equals 0.5?", ["1/4", "1/3", "1/2", "2/3"], 2],
        ["What is the perimeter of a square with side 6?", ["12", "18", "24", "36"], 2]
      ])
    },
    entertainment: {
      title: "Entertainment - Movies",
      questions: mapQuestions([
        ["Who played Jack in Titanic?", ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Matt Damon"], 1],
        ["Which film features the character Harry Potter?", ["The Matrix", "Harry Potter series", "Star Wars", "Avatar"], 1],
        ["Who directed Jurassic Park?", ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"], 1],
        ["Which movie includes the song Let It Go?", ["Moana", "Frozen", "Coco", "Brave"], 1],
        ["Which superhero is also Bruce Wayne?", ["Superman", "Batman", "Iron Man", "Thor"], 1],
        ["The fictional Wakanda appears in which film series?", ["Black Panther", "Transformers", "Mission Impossible", "Shrek"], 0],
        ["Who played Iron Man in the Marvel films?", ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], 1],
        ["Which movie is set on the planet Pandora?", ["Dune", "Avatar", "Gravity", "Interstellar"], 1],
        ["What type of animal is Simba?", ["Tiger", "Lion", "Bear", "Wolf"], 1],
        ["Who starred as Tyler Durden in Fight Club?", ["Brad Pitt", "Tom Hanks", "Will Smith", "Keanu Reeves"], 0]
      ])
    },
    world: {
      title: "World - Geography",
      questions: mapQuestions([
        ["What is the largest ocean?", ["Atlantic", "Indian", "Pacific", "Arctic"], 2],
        ["Which country has the city of Paris?", ["Italy", "France", "Belgium", "Spain"], 1],
        ["Mount Everest lies in which mountain range?", ["Andes", "Alps", "Himalayas", "Rockies"], 2],
        ["What is the capital of Australia?", ["Sydney", "Melbourne", "Canberra", "Perth"], 2],
        ["Which river flows through Egypt?", ["Amazon", "Nile", "Danube", "Thames"], 1],
        ["Brazil is in which continent?", ["Africa", "Asia", "South America", "Europe"], 2],
        ["Which is the largest country by area?", ["Canada", "China", "Russia", "USA"], 2],
        ["What is the capital of Canada?", ["Toronto", "Ottawa", "Vancouver", "Montreal"], 1],
        ["The Sahara Desert is primarily in which continent?", ["Africa", "Asia", "Australia", "South America"], 0],
        ["Which country is shaped like a boot?", ["Portugal", "Italy", "Greece", "Chile"], 1]
      ])
    },
    travel: {
      title: "Travel - Famous Places",
      questions: mapQuestions([
        ["The Eiffel Tower is located in which city?", ["Rome", "Paris", "Berlin", "Madrid"], 1],
        ["The Taj Mahal is in which country?", ["India", "Turkey", "Egypt", "Pakistan"], 0],
        ["Which city is famous for the Colosseum?", ["Athens", "Rome", "Venice", "Milan"], 1],
        ["The Statue of Liberty is in which city?", ["Boston", "New York", "Chicago", "Washington"], 1],
        ["Which country is home to Petra?", ["Jordan", "Greece", "Morocco", "Oman"], 0],
        ["The Burj Khalifa is in which city?", ["Doha", "Dubai", "Riyadh", "Abu Dhabi"], 1],
        ["Which city is known for the Opera House with sail-shaped roofs?", ["Auckland", "Sydney", "Cape Town", "Singapore"], 1],
        ["Angkor Wat is located in which country?", ["Thailand", "Cambodia", "Vietnam", "Laos"], 1],
        ["Santorini is part of which country?", ["Greece", "Italy", "Croatia", "Cyprus"], 0],
        ["Which city contains the landmark Big Ben?", ["London", "Dublin", "Edinburgh", "Manchester"], 0]
      ])
    }
  };

  const business = window.CATEGORY_QUIZZES.business;
  business.sets = [
    {
      id: "business-foundations",
      title: "Business And Economics - Foundations",
      questions: business.questions
    },
    {
      id: "business-brands",
      title: "Business And Economics - Brands",
      questions: mapQuestions([
        ["Which company owns the Android operating system?", ["Apple", "Google", "Microsoft", "Amazon"], 1],
        ["Which company is known for the Windows operating system?", ["Sony", "Microsoft", "Intel", "Oracle"], 1],
        ["Which brand uses the slogan Just Do It?", ["Adidas", "Nike", "Puma", "Reebok"], 1],
        ["Which company operates the AWS cloud platform?", ["Amazon", "Meta", "Netflix", "Adobe"], 0],
        ["LinkedIn is owned by which company?", ["Google", "Microsoft", "Apple", "IBM"], 1],
        ["Which company manufactures the PlayStation?", ["Nintendo", "Sony", "Microsoft", "Sega"], 1],
        ["Which brand is associated with the Model S electric car?", ["Ford", "Toyota", "Tesla", "Honda"], 2],
        ["Instagram is owned by which company?", ["Meta", "Snap", "Alphabet", "ByteDance"], 0],
        ["Which company created the Kindle reader?", ["Amazon", "Apple", "Samsung", "Dell"], 0],
        ["Which company is known for Photoshop?", ["Adobe", "Oracle", "Cisco", "Nvidia"], 0]
      ])
    },
    {
      id: "business-finance",
      title: "Business And Economics - Finance",
      questions: mapQuestions([
        ["What is interest paid on?", ["Borrowed or saved money", "Employee attendance", "Product packaging", "Company logos"], 0],
        ["What does GDP measure?", ["A country's economic output", "Only government debt", "Company share prices", "Population growth"], 0],
        ["What is a dividend?", ["A payment to shareholders", "A bank penalty", "A sales invoice", "An employee tax"], 0],
        ["Which institution usually sets a country's base interest rate?", ["Central bank", "Stock exchange", "Retail store", "Insurance broker"], 0],
        ["What is diversification used to reduce?", ["Investment risk", "Product quality", "Customer service", "Tax records"], 0],
        ["A bull market generally means prices are doing what?", ["Rising", "Falling", "Frozen", "Unlisted"], 0],
        ["What is liquidity?", ["How easily an asset becomes cash", "A company's employee count", "The cost of advertising", "A type of tax"], 0],
        ["What does ROI stand for?", ["Return on Investment", "Rate of Inflation", "Revenue on Invoice", "Risk of Interest"], 0],
        ["Which is normally considered an asset?", ["Cash", "Unpaid expense", "Loan repayment due", "Tax liability"], 0],
        ["What is a budget?", ["A plan for income and spending", "A company logo", "A legal trademark", "A stock certificate"], 0]
      ])
    }
  ];

  const history = window.CATEGORY_QUIZZES.history;
  history.sets = [
    {
      id: "history-civilizations",
      title: "History - War And Civilizations",
      questions: history.questions
    },
    {
      id: "history-world-events",
      title: "History - World Events",
      questions: mapQuestions([
        ["The modern Olympic Games first took place in which city?", ["Paris", "Athens", "London", "Rome"], 1],
        ["Which ancient people developed democracy in Athens?", ["Greeks", "Vikings", "Persians", "Phoenicians"], 0],
        ["Who was the first emperor of Rome?", ["Nero", "Augustus", "Hadrian", "Constantine"], 1],
        ["Which invention is associated with Johannes Gutenberg?", ["Steam engine", "Printing press", "Telephone", "Compass"], 1],
        ["The Industrial Revolution began in which country?", ["Britain", "Brazil", "Japan", "Canada"], 0],
        ["Which explorer completed the first voyage from Europe to India by sea?", ["Vasco da Gama", "James Cook", "Marco Polo", "Amerigo Vespucci"], 0],
        ["Which ancient civilization used hieroglyphs along the Nile?", ["Egyptian", "Roman", "Inca", "Viking"], 0],
        ["The United Nations was founded after which global conflict?", ["Crimean War", "World War I", "World War II", "Cold War"], 2],
        ["Which city was buried by the eruption of Mount Vesuvius in AD 79?", ["Pompeii", "Sparta", "Troy", "Carthage"], 0],
        ["Which empire had Constantinople as its capital?", ["Byzantine Empire", "Aztec Empire", "Mauryan Empire", "Mali Empire"], 0]
      ])
    }
  ];

  const sports = window.CATEGORY_QUIZZES.sports;
  sports.sets = [
    {
      id: "sports-essentials",
      title: "Sports - ICC World Cup",
      questions: sports.questions
    },
    {
      id: "sports-olympics",
      title: "Sports - Olympic Games",
      questions: mapQuestions([
        ["Where were the first modern Summer Olympics held in 1896?", ["Athens", "Paris", "London", "Berlin"], 0],
        ["Where were the first Winter Olympics held in 1924?", ["Oslo", "Chamonix", "Innsbruck", "St. Moritz"], 1],
        ["Which sport uses the terms vault, bars, beam, and floor?", ["Gymnastics", "Fencing", "Swimming", "Rowing"], 0],
        ["How long is an Olympic swimming pool?", ["25 metres", "40 metres", "50 metres", "100 metres"], 2],
        ["Which sport returned to the Olympics in 2016 after a long absence?", ["Golf", "Bowling", "Squash", "Cricket"], 0],
        ["Which winter sport uses stones and sweeping brushes?", ["Curling", "Luge", "Biathlon", "Bobsleigh"], 0],
        ["Which combat sport uses the terms ippon and judogi?", ["Boxing", "Judo", "Wrestling", "Taekwondo"], 1],
        ["What is the standard marathon distance?", ["40 km", "41 km", "42.195 km", "45 km"], 2],
        ["Which sport made its Olympic debut at Paris 2024?", ["Breaking", "Cricket", "Squash", "Baseball"], 0],
        ["Which sport combines cross-country skiing and rifle shooting?", ["Nordic combined", "Biathlon", "Skeleton", "Freestyle skiing"], 1]
      ])
    }
  ];

  const math = window.CATEGORY_QUIZZES.math;
  math.sets = [
    {
      id: "math-foundations",
      title: "Math And Logic - Puzzles",
      questions: math.questions
    },
    {
      id: "math-patterns",
      title: "Math And Logic - Patterns",
      questions: mapQuestions([
        ["What is 15% of 300?", ["30", "35", "45", "60"], 2],
        ["What is the next number: 3, 6, 12, 24, ...?", ["30", "36", "42", "48"], 3],
        ["A rectangle is 8 units long and 5 units wide. What is its area?", ["13", "26", "40", "80"], 2],
        ["What is 2 to the power of 5?", ["10", "16", "25", "32"], 3],
        ["Which number is divisible by both 3 and 4?", ["18", "20", "24", "28"], 2],
        ["What is the average of 10, 20, and 30?", ["15", "20", "25", "30"], 1],
        ["If three notebooks cost 18, what does one notebook cost?", ["4", "5", "6", "9"], 2],
        ["Which angle is greater than 90° but less than 180°?", ["Acute", "Right", "Obtuse", "Reflex"], 2],
        ["What is 1/4 expressed as a percentage?", ["20%", "25%", "40%", "50%"], 1],
        ["A dozen contains how many items?", ["10", "12", "16", "20"], 1]
      ])
    }
  ];

  const entertainment = window.CATEGORY_QUIZZES.entertainment;
  entertainment.sets = [
    {
      id: "entertainment-movies",
      title: "Entertainment - Movies",
      questions: entertainment.questions
    },
    {
      id: "entertainment-screen",
      title: "Entertainment - Film And Television",
      questions: mapQuestions([
        ["Which film series features a school called Hogwarts?", ["The Hunger Games", "Harry Potter", "Twilight", "Narnia"], 1],
        ["What is the name of the cowboy toy in Toy Story?", ["Buzz", "Woody", "Rex", "Slinky"], 1],
        ["Which fictional archaeologist carries a whip and wears a fedora?", ["Indiana Jones", "James Bond", "Rocky Balboa", "Ethan Hunt"], 0],
        ["Which animated film follows a clownfish searching for his son?", ["Finding Nemo", "Shark Tale", "Luca", "Rio"], 0],
        ["Which actor played the title character in the first Iron Man film?", ["Robert Downey Jr.", "Chris Evans", "Hugh Jackman", "Christian Bale"], 0],
        ["Which film franchise includes a character named Darth Vader?", ["Star Trek", "Star Wars", "Dune", "Alien"], 1],
        ["What is the fictional African nation in Black Panther?", ["Genovia", "Wakanda", "Latveria", "Zamunda"], 1],
        ["Which animated character lives in a pineapple under the sea?", ["SpongeBob SquarePants", "Patrick Star", "Nemo", "Popeye"], 0],
        ["Which film features a theme park populated by cloned dinosaurs?", ["King Kong", "Jurassic Park", "Jumanji", "Godzilla"], 1],
        ["Which actor portrayed Jack Sparrow in the Pirates films?", ["Orlando Bloom", "Johnny Depp", "Jude Law", "Colin Farrell"], 1]
      ])
    }
  ];

  const world = window.CATEGORY_QUIZZES.world;
  world.sets = [
    {
      id: "world-geography",
      title: "World - Geography",
      questions: world.questions
    },
    {
      id: "world-earth-space",
      title: "World - Earth And Space",
      questions: mapQuestions([
        ["How many planets orbit the Sun in our Solar System?", ["Seven", "Eight", "Nine", "Ten"], 1],
        ["Which planet is closest to the Sun?", ["Venus", "Earth", "Mercury", "Mars"], 2],
        ["Which is the largest planet in the Solar System?", ["Saturn", "Earth", "Jupiter", "Neptune"], 2],
        ["Which planets are classified as gas giants?", ["Earth and Mars", "Jupiter and Saturn", "Uranus and Neptune", "Mercury and Venus"], 1],
        ["Which planets are classified as ice giants?", ["Jupiter and Saturn", "Earth and Mars", "Uranus and Neptune", "Venus and Mercury"], 2],
        ["What is the name of Earth's natural satellite?", ["Titan", "Europa", "The Moon", "Phobos"], 2],
        ["Which planet is famous for the Great Red Spot?", ["Mars", "Jupiter", "Saturn", "Venus"], 1],
        ["Which planet is known for its prominent ring system?", ["Mercury", "Mars", "Saturn", "Earth"], 2],
        ["What kind of star is at the center of our Solar System?", ["The Sun", "Polaris", "Sirius", "Betelgeuse"], 0],
        ["Which four planets are rocky terrestrial planets?", ["Mercury, Venus, Earth, Mars", "Earth, Mars, Jupiter, Saturn", "Jupiter, Saturn, Uranus, Neptune", "Venus, Earth, Uranus, Neptune"], 0]
      ])
    }
  ];

  const travel = window.CATEGORY_QUIZZES.travel;
  travel.sets = [
    {
      id: "travel-landmarks",
      title: "Travel - Famous Places",
      questions: travel.questions
    },
    {
      id: "travel-world-cities",
      title: "Travel - World Cities",
      questions: mapQuestions([
        ["In which city would you visit the Sagrada Família?", ["Barcelona", "Lisbon", "Madrid", "Seville"], 0],
        ["Which city is famous for canals and gondolas?", ["Milan", "Venice", "Naples", "Turin"], 1],
        ["The Golden Gate Bridge is located in which city?", ["Los Angeles", "Seattle", "San Francisco", "San Diego"], 2],
        ["Which city is home to the Acropolis?", ["Athens", "Istanbul", "Sofia", "Bucharest"], 0],
        ["In which city would you find the CN Tower?", ["Toronto", "Vancouver", "Ottawa", "Montreal"], 0],
        ["Which city is served by Charles de Gaulle Airport?", ["Paris", "Brussels", "Geneva", "Lyon"], 0],
        ["The Marina Bay Sands complex is in which city?", ["Bangkok", "Singapore", "Kuala Lumpur", "Jakarta"], 1],
        ["Which city is known for Table Mountain?", ["Cape Town", "Nairobi", "Casablanca", "Lagos"], 0],
        ["The ancient site of Chichén Itzá is in which country?", ["Mexico", "Peru", "Chile", "Cuba"], 0],
        ["Which city is home to the Christ the Redeemer statue?", ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], 1]
      ])
    }
  ];

  Object.values(window.CATEGORY_QUIZZES).forEach(category => {
    if (!category.sets) {
      category.sets = [{
        id: `${category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-default`,
        title: category.title,
        questions: category.questions
      }];
    }
  });
})();
