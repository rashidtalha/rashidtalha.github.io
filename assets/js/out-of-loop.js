const opts = { 
    // "Food":["Dog","Cat","Cow","Horse","Pig","Sheep","Goat","Rabbit","Deer","Bear","Lion","Tiger","Elephant","Giraffe","Zebra","Monkey","Gorilla","Kangaroo","Panda","Wolf","Fox","Dolphin","Whale","Bat","Squirrel","Raccoon","Hedgehog","Camel","Hippopotamus","Rhinoceros","Chicken","Duck","Goose","Turkey","Pigeon","Sparrow","Eagle","Hawk","Owl","Parrot","Penguin","Flamingo","Swan","Peacock","Crow","Robin","Seagull","Ostrich","Falcon","Woodpecker","Snake","Lizard","Turtle","Tortoise","Alligator","Crocodile","Gecko","Iguana","Chameleon","Komodo Dragon","Frog","Toad","Salamander","Newt","Axolotl","Goldfish","Salmon","Tuna","Shark","Clownfish","Angelfish","Catfish","Swordfish","Stingray","Seahorse","Ant","Bee","Butterfly","Moth","Dragonfly","Ladybug","Grasshopper","Cricket","Mosquito","Fly","Beetle","Spider","Scorpion","Wasp","Caterpillar","Jellyfish","Starfish","Octopus","Squid","Crab","Lobster","Shrimp","Snail","Worm"],
    "Locations":["United States", "Canada", "Mexico", "Brazil", "Argentina", "United Kingdom", "Germany", "France", "Italy", "Spain", "Australia", "New Zealand", "China", "India", "Japan", "South Korea", "Russia", "South Africa", "Egypt", "Nigeria", "Kenya", "Morocco", "Saudi Arabia", "United Arab Emirates", "Qatar", "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia", "Philippines", "Israel", "Turkey", "Greece", "Sweden", "Norway", "Finland", "Denmark", "Poland", "Netherlands", "Belgium", "Switzerland", "Austria", "Czech Republic", "Portugal", "Chile", "Colombia", "Peru", "Venezuela", "Bolivia"],
    "Animals":["Dog","Cat","Cow","Horse","Pig","Sheep","Goat","Rabbit","Deer","Bear","Lion","Tiger","Elephant","Giraffe","Zebra","Monkey","Gorilla","Kangaroo","Panda","Wolf","Fox","Dolphin","Whale","Bat","Squirrel","Raccoon","Hedgehog","Camel","Hippopotamus","Rhinoceros","Chicken","Duck","Goose","Turkey","Pigeon","Sparrow","Eagle","Hawk","Owl","Parrot","Penguin","Flamingo","Swan","Peacock","Crow","Robin","Seagull","Ostrich","Falcon","Woodpecker","Snake","Lizard","Turtle","Tortoise","Alligator","Crocodile","Gecko","Iguana","Chameleon","Komodo Dragon","Frog","Toad","Salamander","Newt","Axolotl","Goldfish","Salmon","Tuna","Shark","Clownfish","Angelfish","Catfish","Swordfish","Stingray","Seahorse","Ant","Bee","Butterfly","Moth","Dragonfly","Ladybug","Grasshopper","Cricket","Mosquito","Fly","Beetle","Spider","Scorpion","Wasp","Caterpillar","Jellyfish","Starfish","Octopus","Squid","Crab","Lobster","Shrimp","Snail","Worm"],
};

const form = document.getElementById('stage-1');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    document.getElementById("viewing").innerHTML = "Complete the setup.";
    document.getElementById("guessing").innerHTML = "<button onclick='genGuessing()'>Ready to Guess</button>";
    
    const nameField = form.elements['fname'];
    const categoryField = form.elements['fcat'];

    names_orig = nameField.value.split(", ");

    names = nameField.value.split(", ");
    shuffleArray(names);
    imposter = names[0];

    foods = opts[categoryField.value];
    shuffleArray(foods);
    correct = foods[0];
    wrong = foods[1];

    sub = foods.slice(0,5);
    shuffleArray(sub);

    console.log(names_orig);
    console.log(imposter);
    console.log(correct);
    console.log(wrong);
    console.log(sub);

    genViewing();
});

function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function genViewing() {
    msg = "";
    for (i in names_orig) {
        cls = '"btn' + i + '"'
        if (names_orig[i] == imposter) {
            msg = msg + "<p>" + names_orig[i] + ": <button id='btn" + i + "' onclick='showHide(false,"+ cls +")'>SHOW</button>" + "</p>";
        } else {
            msg = msg + "<p>" + names_orig[i] + ": <button id='btn" + i + "' onclick='showHide(true,"+ cls +")'>SHOW</button>" + "</p>";
        };
    }
    document.getElementById("viewing").innerHTML = msg;
}

function genGuessing() {
    msg = "<p>Which one of these was the correct option?</p><ul>";
    for (i in sub) {
        msg = msg + "<li>" + sub[i] + "</li>";
    }
    msg += "</ul>"
    document.getElementById("guessing").innerHTML = msg;
}

function showHide(val,cls) {
    if (val) {
        document.getElementById(cls).innerHTML = correct + " (Click to hide)";
    } else {
        document.getElementById(cls).innerHTML = wrong + " (Click to hide)";
    };
    document.getElementById(cls).onclick = function() { hideMe(cls); };
}

function hideMe(cls) {
    document.getElementById(cls).innerHTML = "---- 0_0 ----";
    document.getElementById(cls).disabled = true;
}