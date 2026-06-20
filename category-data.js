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
      title: "Business And Economics",
      sets: [
        {
          id: "business-brands",
          title: "Popular Brands",
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
          title: "Finance & Economy",
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
        },
        {
          id: "business-marketing",
          title: "Marketing & Strategy",
          questions: mapQuestions([
            ["What is the primary goal of advertising?", ["To raise brand awareness", "To reduce product prices", "To pay taxes", "To hire employees"], 0],
            ["A SWOT analysis stands for Strengths, Weaknesses, Opportunities, and what?", ["Threats", "Taxes", "Time", "Trends"], 0],
            ["Which logo features a bite taken out of a fruit?", ["Apple", "Orange", "Android", "Puma"], 0],
            ["What is B2B short for?", ["Business-to-Business", "Buy-to-Build", "Bank-to-Bank", "Benefit-to-Budget"], 0],
            ["What is the term for a famous person endorsing a product?", ["Endorsement", "Diversification", "Inflation", "Dividends"], 0],
            ["Which social platform is primarily for professional networking?", ["LinkedIn", "Instagram", "Snapchat", "TikTok"], 0],
            ["What describes the set of marketing tools a firm uses to pursue its objectives?", ["Marketing Mix", "Revenue Sheet", "IPO Option", "Interest rate"], 0],
            ["A slogan is a short, memorable phrase used in what?", ["Advertising", "Bookkeeping", "Tax audit", "Asset sheets"], 0],
            ["What is target market?", ["The group of consumers a product is aimed at", "A wholesale warehouse", "The global stock market", "A currency exchange"], 0],
            ["Which brand is famous for a red soda can and a script font?", ["Coca-Cola", "Pepsi", "Red Bull", "Sprite"], 0]
          ])
        }
      ]
    },
    history: {
      title: "History",
      sets: [
        {
          id: "history-ancient",
          title: "Ancient Civilizations",
          questions: mapQuestions([
            ["Which ancient civilization built the Pyramids of Giza?", ["Egyptians", "Romans", "Greeks", "Babylonians"], 0],
            ["Who was the first emperor of the Roman Empire?", ["Augustus", "Julius Caesar", "Nero", "Marcus Aurelius"], 0],
            ["The Code of Hammurabi was written in which ancient empire?", ["Babylonian", "Persian", "Assyrian", "Egyptian"], 0],
            ["Which empire was ruled by Genghis Khan?", ["Mongol Empire", "Ottoman Empire", "Mughal Empire", "Roman Empire"], 0],
            ["The ruins of Pompeii are located in which modern country?", ["Italy", "Greece", "Egypt", "Spain"], 0],
            ["Which queen ruled Egypt and was allied with Mark Antony?", ["Cleopatra", "Nefertiti", "Hatshepsut", "Sobekneferu"], 0],
            ["The Parthenon was built to honor which Greek goddess?", ["Athena", "Hera", "Aphrodite", "Artemis"], 0],
            ["Which empire constructed the Great Wall to fend off invasions?", ["Chinese Empire", "Mongol Empire", "Japanese Empire", "Mughal Empire"], 0],
            ["The ancient city of Troy is located in which modern-day country?", ["Turkey", "Greece", "Italy", "Egypt"], 0],
            ["Which warrior society fought the Persians at the Battle of Thermopylae?", ["Spartans", "Athenians", "Romans", "Carthaginians"], 0]
          ])
        },
        {
          id: "history-world-events",
          title: "World Events",
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
        },
        {
          id: "history-leaders",
          title: "Famous Leaders",
          questions: mapQuestions([
            ["Who was the first Emperor of France?", ["Napoleon Bonaparte", "Louis XIV", "Charlemagne", "Charles de Gaulle"], 0],
            ["Who was the female Prime Minister of the United Kingdom in the 1980s?", ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"], 0],
            ["Which civil rights leader delivered the 'I Have a Dream' speech?", ["Martin Lincoln King Jr.", "Malcolm X", "Nelson Mandela", "Rosa Parks"], 0],
            ["Who was the leader of the Indian Independence Movement?", ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"], 0],
            ["Which Roman general was assassinated on the Ides of March?", ["Julius Caesar", "Augustus", "Mark Antony", "Nero"], 0],
            ["Who was the queen of ancient Egypt famous for her alliance with Julius Caesar?", ["Cleopatra", "Nefertiti", "Hatshepsut", "Sobekneferu"], 0],
            ["Which South African leader spent 27 years in prison before becoming President?", ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Jacob Zuma"], 0],
            ["Who was the legendary king of Macedonia who conquered the Persian Empire?", ["Alexander the Great", "Julius Caesar", "Leonidas", "Xerxes"], 0],
            ["Which US President issued the Emancipation Proclamation during the Civil War?", ["Abraham Lincoln", "George Washington", "Andrew Jackson", "Ulysses S. Grant"], 0],
            ["Who was the first human to travel into outer space in 1961?", ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"], 0]
          ])
        }
      ]
    },
    sports: {
      title: "Sports",
      sets: [
        {
          id: "sports-cricket-champions",
          title: "Cricket Championship",
          questions: mapQuestions([
            ["How many balls are in a standard over in cricket?", ["6", "5", "8", "4"], 0],
            ["Which team won the ICC Men's Cricket World Cup in 2023?", ["Australia", "India", "England", "South Africa"], 0],
            ["Who has scored the most international centuries in cricket history?", ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], 0],
            ["What is the length of a standard cricket pitch in yards?", ["22 yards", "20 yards", "24 yards", "25 yards"], 0],
            ["Which cricket venue is often called the 'Home of Cricket'?", ["Lord's", "MCG", "Eden Gardens", "The Oval"], 0],
            ["Who is known for bowling the fastest delivery in cricket history?", ["Shoaib Akhtar", "Brett Lee", "Shaun Tait", "Mitchell Johnson"], 0],
            ["What is it called when a bowler takes three wickets in three consecutive deliveries?", ["Hat-trick", "Brace", "Triple play", "Five-for"], 0],
            ["Which country won the first ICC T20 World Cup in 2007?", ["India", "Pakistan", "Australia", "West Indies"], 0],
            ["Who is the only batsman to score 400 runs in a single Test match innings?", ["Brian Lara", "Don Bradman", "Matthew Hayden", "Chris Gayle"], 0],
            ["What color ball is traditionally used in day-night Test matches?", ["Pink", "Red", "White", "Orange"], 0]
          ])
        },
        {
          id: "sports-olympics",
          title: "Olympic Games",
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
        },
        {
          id: "sports-football",
          title: "World Football",
          questions: mapQuestions([
            ["How many players are on the field for one team in a standard football match?", ["11", "9", "10", "12"], 0],
            ["Which country has won the most FIFA World Cup titles?", ["Brazil", "Germany", "Italy", "Argentina"], 0],
            ["How long is a standard professional football match?", ["90 minutes", "80 minutes", "100 minutes", "120 minutes"], 0],
            ["Which player has won the most Ballon d'Or awards in history?", ["Lionel Messi", "Cristiano Ronaldo", "Pelé", "Diego Maradona"], 0],
            ["What card does a referee show to expel a player from a match?", ["Red Card", "Yellow Card", "Blue Card", "Green Card"], 0],
            ["In football, what body part are outfield players forbidden to use?", ["Hands", "Head", "Feet", "Chest"], 0],
            ["Which country hosted the 2022 FIFA World Cup?", ["Qatar", "Russia", "Brazil", "South Africa"], 0],
            ["What is it called when a player scores three goals in a single match?", ["Hat-trick", "Brace", "Turkey", "Grand Slam"], 0],
            ["Which famous club plays its home games at the Old Trafford stadium?", ["Manchester United", "Liverpool", "Chelsea", "Arsenal"], 0],
            ["Who is known as 'The King of Football' and won three World Cups?", ["Pelé", "Maradona", "Ronaldo Nazário", "Zico"], 0]
          ])
        }
      ]
    },
    math: {
      title: "Math & Logic",
      sets: [
        {
          id: "math-patterns",
          title: "Puzzles & Patterns",
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
        },
        {
          id: "math-logic",
          title: "Logic Puzzles",
          questions: mapQuestions([
            ["If a clock strikes 6 times in 5 seconds, how many times will it strike in 10 seconds?", ["11", "12", "10", "13"], 0],
            ["What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ...?", ["13", "11", "12", "15"], 0],
            ["How many sides does a dodecahedron have?", ["12", "10", "20", "8"], 0],
            ["If you roll a standard 6-sided die, what is the probability of rolling a prime number?", ["1/2", "1/3", "2/3", "1/6"], 0],
            ["How many seconds are in one hour?", ["3600", "60", "120", "36000"], 0],
            ["Which number is equivalent to 10 to the power of 0?", ["1", "0", "10", "100"], 0],
            ["If a triangle has sides of 3, 4, and 5, what is its area?", ["6", "12", "7.5", "10"], 0],
            ["What is the only even prime number?", ["2", "4", "0", "6"], 0],
            ["If two's company and three's a crowd, what are four and five?", ["Nine", "Ten", "Eight", "Seven"], 0],
            ["A bag has 3 red and 2 blue marbles. What is the chance of picking a blue marble?", ["2/5", "3/5", "1/2", "1/5"], 0]
          ])
        },
        {
          id: "math-geometry",
          title: "Geometry",
          questions: mapQuestions([
            ["How many sides does a hexagon have?", ["6", "5", "8", "10"], 0],
            ["What is a shape with three sides called?", ["Triangle", "Square", "Pentagon", "Hexagon"], 0],
            ["What is the formula for the area of a circle?", ["πr²", "2πr", "πd", "½bh"], 0],
            ["What is a 90-degree angle called?", ["Right Angle", "Acute Angle", "Obtuse Angle", "Straight Angle"], 0],
            ["How many sides does an octagon have?", ["8", "6", "10", "12"], 0],
            ["What is the term for the longest side of a right-angled triangle?", ["Hypotenuse", "Adjacent", "Opposite", "Radius"], 0],
            ["What is the sum of angles in a quadrilateral?", ["360°", "180°", "270°", "540°"], 0],
            ["What is a line segment connecting two points on a circle passing through the center?", ["Diameter", "Radius", "Chord", "Arc"], 0],
            ["An angle less than 90 degrees is called what?", ["Acute Angle", "Obtuse Angle", "Right Angle", "Reflex Angle"], 0],
            ["What is a solid shape with six equal square faces?", ["Cube", "Sphere", "Cylinder", "Cone"], 0]
          ])
        }
      ]
    },
    entertainment: {
      title: "Entertainment",
      sets: [
        {
          id: "entertainment-screen",
          title: "Film & Television",
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
        },
        {
          id: "entertainment-music",
          title: "Pop Music",
          questions: mapQuestions([
            ["Who is known as the 'King of Pop'?", ["Michael Jackson", "Elvis Presley", "Prince", "Freddie Mercury"], 0],
            ["Which British band sang 'Hey Jude' and 'Yesterday'?", ["The Beatles", "The Rolling Stones", "Queen", "Pink Floyd"], 0],
            ["Who sang the hit song 'Thriller' released in 1982?", ["Michael Jackson", "Prince", "David Bowie", "Madonna"], 0],
            ["Who is known as the 'Queen of Pop'?", ["Madonna", "Britney Spears", "Lady Gaga", "Whitney Houston"], 0],
            ["Which singer's fans are affectionately known as 'Swifties'?", ["Taylor Swift", "Ariana Grande", "Selena Gomez", "Billie Eilish"], 0],
            ["Which famous band was fronted by Freddie Mercury?", ["Queen", "Led Zeppelin", "The Who", "U2"], 0],
            ["How many keys are on a standard piano?", ["88", "76", "64", "92"], 0],
            ["Which music genre is associated with Bob Marley?", ["Reggae", "Jazz", "Rock", "Hip Hop"], 0],
            ["Who performed the song 'Rolling in the Deep'?", ["Adele", "Rihanna", "Beyoncé", "Katy Perry"], 0],
            ["What is the name of the popular music television channel launched in 1981?", ["MTV", "VH1", "HBO", "BET"], 0]
          ])
        },
        {
          id: "entertainment-gaming",
          title: "Video Games",
          questions: mapQuestions([
            ["Which video game features the characters Mario and Luigi?", ["Super Mario Bros.", "Sonic the Hedgehog", "The Legend of Zelda", "Minecraft"], 0],
            ["What is the best-selling video game of all time?", ["Minecraft", "Tetris", "GTA V", "Wii Sports"], 0],
            ["In which game do players build structures and survive night monsters like Creepers?", ["Minecraft", "Roblox", "Fortnite", "Terraria"], 0],
            ["Which console is manufactured by Nintendo?", ["Nintendo Switch", "PlayStation 5", "Xbox Series X", "Sega Genesis"], 0],
            ["What is the name of the yellow electric Pokémon who is Ash's partner?", ["Pikachu", "Charizard", "Bulbasaur", "Squirtle"], 0],
            ["Which franchise features the Master Chief as the main protagonist?", ["Halo", "Call of Duty", "Destiny", "Gears of War"], 0],
            ["What is the name of the land where The Legend of Zelda games are set?", ["Hyrule", "Azeroth", "Tamriel", "Kanto"], 0],
            ["Which game category does 'Battle Royale' describe?", ["Last player standing", "Racing simulation", "Role-playing puzzle", "Sports management"], 0],
            ["What is the primary color of the character Sonic the Hedgehog?", ["Blue", "Red", "Yellow", "Green"], 0],
            ["Which company developed the popular Fortnite video game?", ["Epic Games", "EA Sports", "Ubisoft", "Activision"], 0]
          ])
        }
      ]
    },
    world: {
      title: "World",
      sets: [
        {
          id: "world-earth-space",
          title: "Earth & Space",
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
        },
        {
          id: "world-nature",
          title: "Nature & Animals",
          questions: mapQuestions([
            ["Which is the largest animal on Earth?", ["Blue Whale", "African Elephant", "Giraffe", "Colossal Squid"], 0],
            ["What gas do plants absorb from the atmosphere for photosynthesis?", ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 0],
            ["Which is the tallest grass species on Earth?", ["Bamboo", "Wheat", "Sugarcane", "Lemongrass"], 0],
            ["What process do caterpillars undergo to become butterflies?", ["Metamorphosis", "Hibernation", "Photosynthesis", "Migration"], 0],
            ["Which is the only mammal capable of true flight?", ["Bat", "Flying Squirrel", "Sugar Glider", "Owl"], 0],
            ["How many arms does a standard starfish have?", ["5", "6", "8", "10"], 0],
            ["What substance gives plants their green color?", ["Chlorophyll", "Carotene", "Melanin", "Hemoglobin"], 0],
            ["Which is the fastest land animal?", ["Cheetah", "Lion", "Leopard", "Antelope"], 0],
            ["Which bird is famous for its large, colorful tail feathers?", ["Peacock", "Parrot", "Eagle", "Flamingo"], 0],
            ["What is the primary food of giant pandas in the wild?", ["Bamboo", "Fish", "Berries", "Insects"], 0]
          ])
        },
        {
          id: "world-capitals",
          title: "World Capitals",
          questions: mapQuestions([
            ["What is the capital of Japan?", ["Tokyo", "Kyoto", "Osaka", "Seoul"], 0],
            ["What is the capital of the United Kingdom?", ["London", "Edinburgh", "Dublin", "Paris"], 0],
            ["What is the capital of Germany?", ["Berlin", "Munich", "Frankfurt", "Vienna"], 0],
            ["What is the capital of Italy?", ["Rome", "Milan", "Venice", "Florence"], 0],
            ["What is the capital of Spain?", ["Madrid", "Barcelona", "Seville", "Valencia"], 0],
            ["What is the capital of France?", ["Paris", "Lyon", "Marseille", "Nice"], 0],
            ["What is the capital of India?", ["New Delhi", "Mumbai", "Kolkata", "Chennai"], 0],
            ["What is the capital of Brazil?", ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], 0],
            ["What is the capital of Egypt?", ["Cairo", "Alexandria", "Giza", "Luxor"], 0],
            ["What is the capital of South Korea?", ["Seoul", "Busan", "Incheon", "Daegu"], 0]
          ])
        }
      ]
    },
    travel: {
      title: "Travel",
      sets: [
        {
          id: "travel-world-cities",
          title: "World Cities",
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
        },
        {
          id: "travel-wonders",
          title: "World Wonders",
          questions: mapQuestions([
            ["In which country is the ancient city of Petra located?", ["Jordan", "Egypt", "Greece", "Peru"], 0],
            ["Which ancient monument in India is a white marble mausoleum?", ["Taj Mahal", "Red Fort", "Qutub Minar", "Hawa Mahal"], 0],
            ["Where can you visit the ancient amphitheater known as the Colosseum?", ["Rome, Italy", "Athens, Greece", "Paris, France", "Madrid, Spain"], 0],
            ["Which South American country is home to the ruins of Machu Picchu?", ["Peru", "Brazil", "Colombia", "Argentina"], 0],
            ["The Great Wall is a famous tourist landmark in which country?", ["China", "Japan", "India", "Mongolia"], 0],
            ["Which famous statue stands atop the Corcovado mountain in Rio?", ["Christ the Redeemer", "Statue of Liberty", "The Sphinx", "David"], 0],
            ["In which country is the historic Mayan city of Chichén Itzá located?", ["Mexico", "Guatemala", "Honduras", "Belize"], 0],
            ["Which landmark in Giza has the body of a lion and the head of a human?", ["Great Sphinx", "Cheops Pyramid", "Alexandria Lighthouse", "Karnak Temple"], 0],
            ["The Leaning Tower is a famous tourist site in which Italian city?", ["Pisa", "Rome", "Florence", "Venice"], 0],
            ["Which iconic suspension bridge is located in San Francisco?", ["Golden Gate Bridge", "Brooklyn Bridge", "Tower Bridge", "Sydney Harbour Bridge"], 0]
          ])
        },
        {
          id: "travel-adventures",
          title: "Outdoor Adventures",
          questions: mapQuestions([
            ["Which country has the famous Great Barrier Reef?", ["Australia", "Indonesia", "Fiji", "New Zealand"], 0],
            ["In which country can you find Mount Kilimanjaro?", ["Tanzania", "Kenya", "South Africa", "Egypt"], 0],
            ["Which famous canyon is located in Arizona, USA?", ["Grand Canyon", "Colca Canyon", "Copper Canyon", "Verdon Gorge"], 0],
            ["Which country is home to the ancient ruins of Pompeii?", ["Italy", "Greece", "Turkey", "Jordan"], 0],
            ["Which is the largest hot desert on Earth for tourism?", ["Sahara", "Gobi", "Kalahari", "Atacama"], 0],
            ["The Galapagos Islands belong to which country?", ["Ecuador", "Peru", "Chile", "Colombia"], 0],
            ["Which country is famous for its geothermal hot springs and Northern Lights?", ["Iceland", "Greenland", "Norway", "Sweden"], 0],
            ["In which city can you climb the famous Eiffel Tower?", ["Paris", "Rome", "London", "Berlin"], 0],
            ["Which country is home to the Serengeti National Park?", ["Tanzania", "Kenya", "Uganda", "Botswana"], 0],
            ["The historic sanctuary of Machu Picchu is located in which mountain range?", ["Andes", "Himalayas", "Alps", "Rockies"], 0]
          ])
        }
      ]
    }
  };
})();
