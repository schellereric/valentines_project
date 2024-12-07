const questions = [
    {
        text: "Do you want to go on a date?",
        options: ["Yes", "No"],
        images: ["", ""], // No images for this question
    },
    {
        text: "What do you want to do?",
        options: ["Watch a movie", "Go for a walk", "Dinner"],
        images: ["", "", ""], // Add image URLs if needed
    },
    {
        text: "What do you want to eat?",
        options: ["Koran BBQ", "Hotpot", "IDK"],
        images: [
            "https://yoonsim.de/wp-content/uploads/Yoonsim-koreanisches-Restaurant-Duesseldorf-tabletop-grill-bbq_04-copy.webp",
            "https://m.media-amazon.com/images/I/71eYTUDu7OL.jpg",
            "https://via.placeholder.com/100?text=Dessert",
        ],
    },
];


let currentQuestionIndex = 0;
let answers = [];

const questionElement = document.getElementById("question");
const optionsForm = document.getElementById("options-form");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const resultElement = document.getElementById("result");

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.text;
    optionsForm.innerHTML = "";

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
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.margin = "10px";

        label.appendChild(radio);
        if (question.images[index]) {
            label.appendChild(img); // Add the image only if it exists
        }
        label.appendChild(document.createTextNode(option));
        optionsForm.appendChild(label);
    });
}


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
    } else {
        showResult();
    }
}

function showResult() {
    // Hide the question and form elements
    questionElement.style.display = "none";
    optionsForm.style.display = "none";
    nextButton.style.display = "none";

    // Update the result container
    resultContainer.style.display = "block";
    resultContainer.innerHTML = ""; // Clear any previous content

    // Add the summary header
    const header = document.createElement("h2");
    header.textContent = "Your Valentine's Date Summary:";
    header.style.marginBottom = "20px";
    resultContainer.appendChild(header);

    // Create a container for the tiles
    const tileContainer = document.createElement("div");
    tileContainer.style.display = "flex";
    tileContainer.style.flexWrap = "wrap";
    tileContainer.style.justifyContent = "center";
    tileContainer.style.gap = "20px";
    resultContainer.appendChild(tileContainer);

    // Add tiles for each answer
    answers.forEach((answer, index) => {
        const tile = document.createElement("div");
        tile.classList.add("option");

        // Add image if available
        const imgSrc = questions[index].images[questions[index].options.indexOf(answer)];
        if (imgSrc) {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = answer;
            img.style.width = "150px";
            img.style.height = "150px";
            img.style.marginBottom = "10px";
            tile.appendChild(img);
        }

        // Add text
        const text = document.createElement("p");
        text.textContent = `${questions[index].text}: ${answer}`;
        tile.appendChild(text);

        // Append tile to the tile container
        tileContainer.appendChild(tile);
    });
}



nextButton.addEventListener("click", nextQuestion);

// Initialize the first question
showQuestion();


