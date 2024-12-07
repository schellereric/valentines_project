console.log('Script Loaded')

const questions = [
    {
        text: "Wanna go on a valentines date?",
        options: ["Yes", "Also yes but with another cat"],
        images: ["https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    },
    {
        text: "What are we eatinggg?",
        options: ["Korean BBQ", "Hotpot", "Pozang?", "Steak", "Cook at Home"],
        images: [
            "https://images.unsplash.com/photo-1632558610168-8377309e34c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1614104030967-5ca61a54247b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1687966699414-095ca9c35593?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1542365887-1149961dccc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1535186696008-7cba739a3103?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
    },
    {
        text: "What we doing after food?",
        options: ["Going for drinks", "Watch stuff", "Sleep early"],
        images: [
            "https://images.unsplash.com/photo-1528615141309-53f2564d3be8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://i.ytimg.com/vi/LPGwgi1J5m0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDQ4XQo_ig8oCl062uok6O9UDCT2A",
            "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"], // Add image URLs if needed
    },
];

let currentQuestionIndex = 0;
let answers = [];

// Get elements
const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options-form");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const startPage = document.getElementById("start-page");
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container"); // Ensure this is properly defined
const randomizeButton = document.getElementById("randomize-button"); // Randomize button


// Function to show the question and options
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
    optionsForm.innerHTML = ""; // Clear any previous options

    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.classList.add("option");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "options";
        radio.value = option;

        const img = document.createElement("img");
        img.src = question.images[index] || ""; // Use the image URL or leave blank if not provided
        img.alt = option;
        img.classList.add("option-img");

        const text = document.createElement("p");
        text.classList.add("option-text");
        text.textContent = option;

        label.appendChild(radio);
        label.appendChild(img);
        label.appendChild(text);

        optionsForm.appendChild(label);
    });

    nextButton.style.display = "block"; // Show the "Next" button after the options are displayed
    questionContainer.style.display = "block"; // Ensure the question container is shown
}

// Function to handle next question
function nextQuestion() {
    const selectedOption = optionsForm.querySelector("input[name='options']:checked");

    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    answers[currentQuestionIndex] = selectedOption.value;
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        window.scrollTo(0, 0);
    } else {
        showResult();
        window.scrollTo(0, 0);
    }
}

// Function to show result
function showResult() {
    questionElement.style.display = "none";
    optionsForm.style.display = "none";
    nextButton.style.display = "none";

    resultContainer.style.display = "block";
    resultContainer.innerHTML = ""; // Clear any previous content

    const header = document.createElement("h2");
    header.textContent = "Your Valentine's Date Summary:";
    header.style.marginBottom = "20px";
    resultContainer.appendChild(header);

    const tileContainer = document.createElement("div");
    tileContainer.style.display = "flex";
    tileContainer.style.flexWrap = "wrap";
    tileContainer.style.justifyContent = "center";
    tileContainer.style.gap = "20px";
    resultContainer.appendChild(tileContainer);

    answers.forEach((answer, index) => {
        const tile = document.createElement("div");
        tile.classList.add("summary-tile");

        const imgSrc = questions[index].images[questions[index].options.indexOf(answer)];
        if (imgSrc) {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = answer;
            tile.appendChild(img);
        }

        const text = document.createElement("p");
        text.textContent = `${questions[index].text}: ${answer}`;
        tile.appendChild(text);

        tileContainer.appendChild(tile);
    });
    // Add Back to Start button
    const backButton = document.createElement("button");
    backButton.textContent = "Back to Start";
    backButton.style.marginTop = "20px";
    backButton.style.padding = "10px 20px";
    backButton.style.fontSize = "16px";
    backButton.style.cursor = "pointer";
    backButton.style.display = "block"; 
    backButton.style.marginLeft = "auto"; // Center horizontally
    backButton.style.marginRight = "auto"; // Center horizontally
    backButton.addEventListener("click", resetQuiz);
    resultContainer.appendChild(backButton);
    
    const iframe = document.createElement("iframe");
    iframe.src = "https://giphy.com/embed/DyQrKMpqkAhNHZ1iWe"; // Replace with your GIF's iframe embed link
    iframe.width = "400"; // Set your desired width
    iframe.height = "300"; // Set your desired height
    iframe.style.border = "none"; // Optional, remove border
    resultContainer.insertBefore(iframe, backButton);
}

function resetQuiz() {
    location.reload();
}



// Handle "Start" button click
startButton.addEventListener("click", function () {
    startPage.style.display = "none"; // Hide the start page
    questionContainer.style.display = "block"; // Show the question container
    showQuestion(); // Show the first question
});

// Handle "Next" button click
nextButton.addEventListener("click", nextQuestion);

// Initially hide the next button and result container
nextButton.style.display = "none";
resultContainer.style.display = "none";


function randomizeOptions() {
    answers = []; // Reset previous answers
    questions.forEach(question => {
        const randomIndex = Math.floor(Math.random() * question.options.length);
        answers.push(question.options[randomIndex]);
    });

    showResult(); // Immediately show the result with the random answers
}

// Event listeners for buttons
nextButton.addEventListener("click", nextQuestion);
startButton.addEventListener("click", () => {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    showQuestion();
});
randomizeButton.addEventListener("click", randomizeOptions);
