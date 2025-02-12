opts = { 
    "Food" : ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Sandwich", "Salad", "Fried Chicken", "Steak", "Ramen", "Biryani", "Pulao", "Ice Cream", "Chocolate", "Apple", "Banana", "Orange", "Grapes", "Strawberries", "Mango", "Carrot", "Potato", "Tomato", "Lettuce", "Cucumber", "Spinach", "Broccoli", "Onion", "Garlic", "Peas", "Corn", "Rice", "Bread", "Bagel", "Croissant", "Donut", "Pancakes", "Waffles", "Cereal", "Nihari", "Cheese", "Yogurt", "Milk", "Butter", "Eggs", "Chicken Breast", "Croissant", "Lamb", "Fish", "Shrimp"],
    "Animals" : ["Dog", "Cat", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Horse", "Kangaroo", "Panda", "Bear", "Wolf", "Fox", "Rabbit", "Squirrel", "Monkey", "Gorilla", "Chimpanzee", "Koala", "Sloth", "Cheetah", "Leopard", "Jaguar", "Raccoon", "Penguin", "Flamingo", "Peacock", "Eagle", "Owl", "Hawk", "Parrot", "Crow", "Bat", "Shark", "Whale", "Dolphin", "Octopus", "Seal", "Turtle", "Crocodile", "Chicken", "Snake", "Frog", "Lizard", "Tortoise", "Horse", "Camel", "Bison", "Buffalo", "Human"],
    "Countries" : ["United States", "Canada", "Mexico", "Brazil", "Argentina", "United Kingdom", "Germany", "France", "Italy", "Spain", "Australia", "New Zealand", "China", "India", "Japan", "South Korea", "Russia", "South Africa", "Egypt", "Nigeria", "Kenya", "Morocco", "Saudi Arabia", "United Arab Emirates", "Qatar", "India", "Pakistan", "Bangladesh", "Sri Lanka", "Nepal", "Thailand", "Vietnam", "Malaysia", "Singapore", "Indonesia", "Philippines", "Israel", "Turkey", "Greece", "Sweden", "Norway", "Finland", "Denmark", "Poland", "Netherlands", "Belgium", "Switzerland", "Austria", "Czech Republic", "Portugal", "Chile", "Colombia", "Pakistan", "Venezuela"],
    "Household Items" : ["Table", "Chair", "Sofa", "Bed", "Pillow", "Blanket", "Mattress", "Wardrobe", "Drawer", "Shelf", "Cupboard", "Mirror", "Clock", "Lamp", "Fan", "Air Conditioner", "Heater", "Refrigerator", "Microwave", "Oven", "Toaster", "Blender", "Kettle", "Stove", "Dishwasher", "Washing Machine", "Iron", "Vacuum Cleaner", "Broom", "Mop", "Bucket", "Dustpan", "Trash Can", "Tissue Box", "Soap Dispenser", "Toilet Paper", "Shampoo Bottle", "Towel", "Toothbrush", "Comb", "Hairdryer", "Scissors", "Knife", "Spoon", "Fork", "Plate", "Bowl", "Cup", "Glass", "Water Bottle", "Jug", "Saucepan", "Frying Pan", "Door Mat", "Curtains", "Cushion", "Remote Control"],
    // "SNS Rooms" : ["302", "303", "304", "305", "402", "MS Room", "Computer Lab", "301"],
    // "NUST People" : ["Rashid", "Azka", "Aroob", "Aasiya", "Zeenia", "Mudassir", "Hasan", "Abdullah", "Zaurayz", "Sana", "Afifa"],
    // "SNS Teachers" : ["Dr Meraj", "Dr Asif", "Dr Tooba", "Dr Rizwan", "Dr Ishaq", "Dr Tahir", "Dr Firdos", "Dr Fahad", "Dr Matloob", "Dr Mubashir", "Dr Ahmad Javid", "Dr Tajamul", "Dr Ilyas", "Dr Tufail", "Dr Ali Paracha", "Dr Rashid", "Dr Mujeeb", "Miss Kubra", "Dr Adnan", "Chaudry Sahib"],
};

window.onload = function() {
    listbox = document.getElementById('fcat')
    for (j in opts) {
        const option = new Option(j, j);
        listbox.add(option, undefined);
    }
};

form = document.getElementById('stage-1');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = form.elements['fname'];
    const categoryField = form.elements['fcat'];

    names_orig = nameField.value.split(", ");
    if (names_orig.length < 3) { alert("Enter at least 3 names!"); return };

    names = nameField.value.split(", ");
    shuffleArray(names);
    imposter = names[0];

    foods = opts[categoryField.value];
    shuffleArray(foods);
    correct = foods[0];
    wrong = foods[1];

    sub = foods.slice(0,5);
    shuffleArray(sub);

    document.getElementById("guessing").innerHTML = "<span class='vspace'></span><button onclick='genGuessing()'>Ready to Guess?</button>";
    genViewing();
});

function shuffleArray(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function genViewing() {
    msg = "<span class='vspace'></span>";
    for (i in names_orig) {
        cls = '"btn' + i + '"'
        if (names_orig[i] == imposter) { mark = false } else { mark = true };
        msg = msg + "<button id='btn" + i + "' onclick='showHide("+mark+","+ cls +")'>" + names_orig[i] +" (Click to Show)</button>";
        msg += "<span class='vspace'></span>"
    }
    msg += "<br><br><button id='truthbox' onclick='revealTruth()'>Who was out of the loop?</button>"
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
    document.getElementById(cls).onclick = function() {
        document.getElementById(cls).innerHTML = "---- ( 0_0 ) ----";
        document.getElementById(cls).disabled = true;
    };
}

function revealTruth() {
    document.getElementById("truthbox").innerHTML = imposter;
    document.getElementById("truthbox").disabled = true;
}