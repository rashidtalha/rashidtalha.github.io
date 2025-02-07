const opts = { 
    "Food":["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Sandwich", "Salad", "Fried Chicken", "Steak", "Ramen", "Sushi Rolls", "Hot Dog", "Ice Cream", "Chocolate", "Apple", "Banana", "Orange", "Grapes", "Strawberries", "Mango", "Carrot", "Potato", "Tomato", "Lettuce", "Cucumber", "Spinach", "Broccoli", "Onion", "Garlic", "Peas", "Corn", "Rice", "Bread", "Bagel", "Croissant", "Donut", "Pancakes", "Waffles", "Cereal", "Oatmeal", "Cheese", "Yogurt", "Milk", "Butter", "Eggs", "Chicken Breast", "Beef", "Lamb", "Fish", "Shrimp"],
    "Locations":["United States", "Canada", "Mexico", "Brazil", "Argentina", "United Kingdom", "Germany", "France", "Italy", "Spain", "Australia", "New Zealand", "China", "India", "Japan", "South Korea", "Russia", "South Africa", "Egypt", "Nigeria", "Kenya", "Morocco", "Saudi Arabia", "United Arab Emirates", "Qatar", "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia", "Philippines", "Israel", "Turkey", "Greece", "Sweden", "Norway", "Finland", "Denmark", "Poland", "Netherlands", "Belgium", "Switzerland", "Austria", "Czech Republic", "Portugal", "Chile", "Colombia", "Peru", "Venezuela", "Bolivia"],
    "Animals":["Dog", "Cat", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Horse", "Kangaroo", "Panda", "Bear", "Wolf", "Fox", "Rabbit", "Squirrel", "Monkey", "Gorilla", "Chimpanzee", "Koala", "Sloth", "Cheetah", "Leopard", "Jaguar", "Otter", "Raccoon", "Penguin", "Flamingo", "Peacock", "Eagle", "Owl", "Hawk", "Parrot", "Crow", "Bat", "Shark", "Whale", "Dolphin", "Octopus", "Seal", "Turtle", "Crocodile", "Alligator", "Snake", "Frog", "Lizard", "Tortoise", "Horse", "Camel", "Bison", "Buffalo"],
    "classrooms": ["302", "303", "304", "305", "402", "MS Room", "computer lab", "301"],
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
    msg += "<button id='truthbox' onclick='revealTruth()'>Who was out of the loop?</button>"
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

function revealTruth() {
    document.getElementById("truthbox").innerHTML = imposter;
    document.getElementById("truthbox").disabled = true;
}