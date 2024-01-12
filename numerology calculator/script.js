
// Function to calculate Life Path Number and provide insights
function calculateLifePathNumber1() {
    // Get the birthdate value
    var birthdateInput = document.getElementById("birthdate");
    var birthdate = birthdateInput.value;

    // Check if a valid date is entered
    if (!birthdate) {
        alert("Please enter a valid birthdate.");
        return;
    }

    // Convert the birthdate to a numeric string (YYYYMMDD)
    var numericBirthdate = birthdate.split('-').join('');

    // Calculate the Life Path Number
    var lifePathNumber = calculateLifePathNumberFromNumericDate(numericBirthdate);

    // Get insights based on the Life Path Number
    var insights = getLifePathNumberInsights(lifePathNumber);

    // Display the result
    var resultElement = document.getElementById("result1");
    resultElement.innerHTML = `
        Your Life Path Number is: ${lifePathNumber} <br>
        ${insights}
    `;
}

// Function to calculate Life Path Number from a numeric date
function calculateLifePathNumberFromNumericDate(numericBirthdate) {
    var total = 0;

    for (var i = 0; i < numericBirthdate.length; i++) {
        total += parseInt(numericBirthdate[i]);
    }

    // Reduce the total to a single-digit number
    total = reduceToSingleDigit(total);

    return total;
}

// Function to provide insights based on the Life Path Number
function getLifePathNumberInsights(lifePathNumber) {
    var insights = "";

    switch (lifePathNumber) {
        case 1:
            insights = "You are a born leader with a strong sense of individuality and creativity.";
            break;
        case 2:
            insights = "You are a peacemaker, sensitive to the needs of others, and value cooperation.";
            break;
        case 3:
            insights = "You are creative, expressive, and have a natural ability to communicate.";
            break;
        case 4:
            insights = "You are practical, detail-oriented, and have a strong work ethic.";
            break;
        case 5:
            insights = "You are adaptable, curious, and thrive on variety and change.";
            break;
        case 6:
            insights = "You are nurturing, responsible, and value harmony in relationships.";
            break;
        case 7:
            insights = "You are analytical, introspective, and have a deep interest in spirituality.";
            break;
        case 8:
            insights = "You are ambitious, goal-oriented, and have strong leadership qualities.";
            break;
        case 9:
            insights = "You are compassionate, humanitarian, and possess a broad perspective.";
            break;
            case 11:
                insights = "You are an intuitive and spiritual individual with a strong sense of purpose.";
                break;
            case 22:
                insights = "You are a master builder, capable of turning dreams into reality on a large scale.";
                break;    
        default:
            insights = "Your Life Path Number provides insights into your personality and life journey.";
    }

    return insights;
}






function calculateCompatibilityDOB() {
    var person1Birthdate = document.getElementById("birthdate1").value;
    var person2Birthdate = document.getElementById("birthdate2").value;

    if (!person1Birthdate || !person2Birthdate) {
        alert("Please enter both birthdates.");
        return;
    }

    var lifePathNumber1 = calculateLifePathNumber(person1Birthdate);
    var lifePathNumber2 = calculateLifePathNumber(person2Birthdate);

    var compatibility = calculateCompatibilityByLifePath(lifePathNumber1, lifePathNumber2);

    var resultElement = document.getElementById("result2");
    resultElement.innerHTML = `
        Person 1 - Life Path Number: ${lifePathNumber1} <br>
        Person 2 - Life Path Number: ${lifePathNumber2} <br>
        Compatibility: ${compatibility}
    `;
}

function calculateCompatibilityByLifePath(lifePathNumber1, lifePathNumber2) {
    var difference = Math.abs(lifePathNumber1 - lifePathNumber2);

    if (difference === 0) {
        return "Highly Compatible";
    } else if (difference <= 3) {
        return "Compatible";
    } else {
        return "Not Compatible";
    }
}

function calculateLifePathNumber(birthdate) {
    var [year, month, day] = birthdate.split('-').map(Number);
    var total = day + month + year;

    while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
        total = sumDigits(total);
    }

    return total;
}

function sumDigits(number) {
    return number.toString().split('').reduce(function (acc, digit) {
        return acc + parseInt(digit);
    }, 0);
}






function calculateCompatibility() {
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;

    if (!name1 || !name2) {
        alert("Please enter both names.");
        return;
    }

    var compatibility = calculateNameCompatibility(name1, name2);

    var resultElement = document.getElementById("result3");
    resultElement.innerHTML = `Compatibility score: ${compatibility.toFixed(2)}%`;
}

function calculateNameCompatibility(name1, name2) {
    var processedName1 = name1.toLowerCase().replace(/\s/g, '');
    var processedName2 = name2.toLowerCase().replace(/\s/g, '');

    var numericValue1 = calculateNumericValue(processedName1);
    var numericValue2 = calculateNumericValue(processedName2);

    var compatibilityScore = calculateCompatibilityScore(numericValue1, numericValue2);

    return compatibilityScore;
}

function calculateNumericValue(name) {
    var numericValue = 0;

    for (var i = 0; i < name.length; i++) {
        var charCode = name.charCodeAt(i) - 96;
        numericValue += charCode;
    }

    return numericValue;
}

function calculateCompatibilityScore(value1, value2) {
    var absoluteDifference = Math.abs(value1 - value2);
    var percentage = (absoluteDifference / 26) * 100;

    return 100 - percentage;
}





function calculateSoulUrgeNumber() {
    var fullName = document.getElementById("fullname").value;

    if (!fullName) {
        alert("Please enter your full name.");
        return;
    }

    var soulUrgeNumber = calculateSoulUrgeNumberFromName(fullName);

    var resultElement = document.getElementById("result4");
    resultElement.innerHTML = "Your Soul Urge Number is: " + soulUrgeNumber;
}

function calculateSoulUrgeNumberFromName(name) {
    // Convert the name to uppercase and remove spaces
    var processedName = name.toUpperCase().replace(/\s/g, '');

    // Assign numerical values to vowels (excluding 'Y')
    var vowels = ['A', 'E', 'I', 'O', 'U'];
    var soulUrgeNumber = 0;

    for (var i = 0; i < processedName.length; i++) {
        if (vowels.includes(processedName[i])) {
            soulUrgeNumber += parseInt(processedName.charCodeAt(i) - 64);
        }
    }

    // Reduce the soulUrgeNumber to a single-digit (if not a master number)
    while (soulUrgeNumber > 9 && soulUrgeNumber !== 11 && soulUrgeNumber !== 22 && soulUrgeNumber !== 33) {
        soulUrgeNumber = sumDigits(soulUrgeNumber);
    }

    return soulUrgeNumber;
}

function sumDigits(number) {
    return number.toString().split('').reduce(function (acc, digit) {
        return acc + parseInt(digit);
    }, 0);
}




// script.js

function calculateLifePathNumberEvolution() {
    // Get the birthdate value
    var birthdateInput = document.getElementById("pathdate1");
    var birthdate = birthdateInput.value;

    // Check if a valid date is entered
    if (!birthdate) {
        alert("Please enter a valid birthdate.");
        return;
    }

    // Convert the birthdate to a numeric string (YYYYMMDD)
    var numericBirthdate = birthdate.split('-').join('');

    // Calculate the initial Life Path Number
    var initialLifePathNumber = calculateLifePathNumberFromNumericDate(numericBirthdate);

    // Display the initial Life Path Number
    var resultElement = document.getElementById("lifePathResult");
    resultElement.innerHTML = "Your Initial Life Path Number is: " + initialLifePathNumber;

    // Simulate Life Path Number evolution over the next 3 decades (30 years)
    var evolutionResults = simulateLifePathNumberEvolution(initialLifePathNumber, 30);

    // Display the Life Path Number evolution results
    displayEvolutionResults(evolutionResults);
}

function simulateLifePathNumberEvolution(initialLifePathNumber, years) {
    var evolutionResults = [];

    for (var i = 0; i <= years; i++) {
        evolutionResults.push({
            year: i,
            lifePathNumber: calculateEvolvedLifePathNumber(initialLifePathNumber, i)
        });
    }

    return evolutionResults;
}

function calculateEvolvedLifePathNumber(initialLifePathNumber, years) {
    // Example: Life Path Number evolves by adding the number of years to the initial Life Path Number
    return initialLifePathNumber + years;
}

function displayEvolutionResults(evolutionResults) {
    var resultElement = document.getElementById("evolutionResult");
    resultElement.innerHTML = "<h2>Life Path Number Evolution</h2>";

    evolutionResults.forEach(function (result) {
        resultElement.innerHTML += `<p>Year ${result.year}: ${result.lifePathNumber}</p>`;
    });
}

function calculateLifePathNumberFromNumericDate(numericBirthdate) {
    var total = 0;

    for (var i = 0; i < numericBirthdate.length; i++) {
        total += parseInt(numericBirthdate[i]);
    }

    while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
        total = sumDigits(total);
    }

    return total;
}

function sumDigits(number) {
    return number.toString().split('').reduce(function (acc, digit) {
        return acc + parseInt(digit);
    }, 0);
}




// Calculate the Balance Number based on the current name
function calculateBalanceNumber(currentName) {
    var numericValue = calculateNumericValue(currentName);
    var balanceNumber = numericValue % 11;

    // Display the Balance Number
    var resultElement = document.getElementById("balanceResult");
    resultElement.innerHTML = "Your Balance Number is: " + balanceNumber;

    // Calculate and display the percentage balance
    var percentageBalance = (balanceNumber / 11) * 100;
    resultElement.innerHTML += "<br>Percentage Balance in Life: " + percentageBalance.toFixed(2) + "%";

    return balanceNumber;
}

// Call this function when the "Calculate Balance Number" button is clicked
function calculateBalanceNumberAndPercentage() {
    var currentNameInput = document.getElementById("currentName");
    var currentName = currentNameInput.value;

    if (!currentName) {
        alert("Please enter a valid name.");
        return;
    }

    calculateBalanceNumber(currentName);
}






// Function to recommend colors and gemstones based on numerology
function recommendColorsAndGemstones() {
    // Get the Life Path Number from the input
    var lifePathNumberInput = document.getElementById("lifePathNumber");
    var lifePathNumber = parseInt(lifePathNumberInput.value);

    // Define associations between Life Path Numbers and colors/gemstones
    var associations = {
        1: { color: "Red", gemstone: "Garnet" },
        2: { color: "Orange", gemstone: "Moonstone" },
        3: { color: "Yellow", gemstone: "Topaz" },
        4: { color: "Green", gemstone: "Emerald" },
        5: { color: "Blue", gemstone: "Sapphire" },
        6: { color: "Indigo", gemstone: "Amethyst" },
        7: { color: "Violet", gemstone: "Lapis Lazuli" },
        8: { color: "Rose", gemstone: "Rose Quartz" },
        9: { color: "Gold", gemstone: "Citrine" },
        // You can extend this list with more associations
    };

    // Check if the provided Life Path Number is valid
    if (!lifePathNumber || isNaN(lifePathNumber) || lifePathNumber < 1 || lifePathNumber > 9) {
        alert("Please enter a valid Life Path Number (1-9).");
        return;
    }

    // Check if the association for the given Life Path Number exists
    if (associations[lifePathNumber]) {
        // Display recommendations
        var resultElement = document.getElementById("colorGemstoneResult");
        resultElement.innerHTML = `
            Recommended Color: ${associations[lifePathNumber].color}<br>
            Recommended Gemstone: ${associations[lifePathNumber].gemstone}
        `;
    } else {
        alert("Invalid Life Path Number for color and gemstone recommendations.");
    }
}



// Function to calculate Soul Urge Number
function calculateSoulUrgeNumber(fullname) {
    var numericValue = calculateNumericValue(fullname);
    return reduceToSingleDigit(numericValue);
}

// Function to calculate and compare Soul Urge Numbers
function calculateAndCompareSoulUrgeNumbers() {
    var fullname1 = document.getElementById("fullname1").value;
    var fullname2 = document.getElementById("fullname2").value;

    // Check if both names are entered
    if (!fullname1 || !fullname2) {
        alert("Please enter both names.");
        return;
    }

    // Calculate Soul Urge Numbers
    var soulUrgeNumber1 = calculateSoulUrgeNumber(fullname1);
    var soulUrgeNumber2 = calculateSoulUrgeNumber(fullname2);

    // Display the result
    var resultElement = document.getElementById("result4");
    resultElement.innerHTML = `
        Person 1 Soul Urge Number: ${soulUrgeNumber1} <br>
        Person 2 Soul Urge Number: ${soulUrgeNumber2} <br>
        Compatibility: ${compareSoulUrgeNumbers(soulUrgeNumber1, soulUrgeNumber2)}
    `;
}

// Function to compare Soul Urge Numbers
function compareSoulUrgeNumbers(soulUrgeNumber1, soulUrgeNumber2) {
    if (soulUrgeNumber1 === soulUrgeNumber2) {
        return "Highly Compatible";
    } else if (soulUrgeNumber1 % 3 === soulUrgeNumber2 % 3) {
        return "Compatible";
    } else {
        return "Not Compatible";
    }
}

// Function to calculate numeric value of a name
function calculateNumericValue(name) {
    var numericValue = 0;

    for (var i = 0; i < name.length; i++) {
        var charCode = name.charCodeAt(i) - 96;
        numericValue += charCode;
    }

    return numericValue;
}

// Function to reduce a number to a single digit
function reduceToSingleDigit(number) {
    while (number > 9 && number !== 11 && number !== 22 && number !== 33) {
        number = sumDigits(number);
    }

    return number;
}

// Function to sum the digits of a number
function sumDigits(number) {
    return number
        .toString()
        .split('')
        .reduce(function (acc, digit) {
            return acc + parseInt(digit);
        }, 0);
}










function checkNameDOBCompatibility() {
    // Get the birthdate
    var birthdate = document.getElementById("birthdatec").value;

    // Get the name
    var name = document.getElementById("namec").value;

    // Check if both birthdate and name are entered
    if (!birthdate || !name) {
        alert("Please enter both your birthdate and name.");
        return;
    }

    // Calculate Life Path Number from DOB
    var lifePathNumber = calculateLifePathNumber(birthdate);

    // Calculate Soul Urge Number from name
    var soulUrgeNumber = calculateSoulUrgeNumber(name);

    // Check compatibility
    var compatibilityMessage = checkCompatibility(lifePathNumber, soulUrgeNumber);

    // Display the result
    var resultElement = document.getElementById("compatibilityResult");
    resultElement.innerHTML = compatibilityMessage;
}


function calculateSoulUrgeNumber(name) {
    // Implement the calculation logic for Soul Urge Number
    // You can use the existing logic or customize it based on your requirements
    // For simplicity, let's assume the name is the same as the birthdate for now
    return calculateNumericValue(name);
}

function checkCompatibility(lifePathNumber, soulUrgeNumber) {
    // Customize the compatibility check based on your criteria
    // For example, you can check if the numbers are equal or have a specific relationship
    if (lifePathNumber === soulUrgeNumber) {
        return "Your name is compatible with your date of birth!";
    } else {
        return "Your name is not fully compatible with your date of birth.";
    }
}





























