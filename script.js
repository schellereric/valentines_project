console.log('Script Loaded')

const questions = [
    {
        text: "Wanna go on a valentines date?",
        options: ["Yes", "Also yes but with another cat", "Maybe"],
        images: ["https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJlM2V0dWpxdGYxZ3I2dTUxZzJ5MnJsODBscDlkZmEzbjNsZ2s1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q6WPVzFU8LcBWWgQE1/giphy.gif",
          "https://media.giphy.com/media/I1nwVpCaB4k36/giphy.gif?cid=790b76117euzwgf73yl1u3bw62bbzl25sypy0x1xithtsrpp&ep=v1_gifs_search&rid=giphy.gif&ct=g",
          "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc200OW12dXZ3YmoyMGIxY2RzMDR0eGdraTh6c2ZraDRwbmNldDYzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YOc9NMQ0WRZ9U08ouL/giphy.gif"
          ],
    },
    {
        text: "What are we eatinggg?",
        options: ["Korean BBQ", "Hotpot", "Pozang/Yogi etc", "Steak", "Cook at Home", "Fine Dining (at a reasonable price)", "Something else (Italian? Mexican?)"],
        images: [
            "https://images.unsplash.com/photo-1632558610168-8377309e34c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1614104030967-5ca61a54247b?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1687966699414-095ca9c35593?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1542365887-1149961dccc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1535186696008-7cba739a3103?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1682097304375-2de9b40b0119?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1680303134459-912abf8efe2f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
    },
    {
        text: "What else are we doing?",
        options: ["Going for drinks", "Watch stuff", "Sleep early/Chill at home", "Paint", "Clay Date","Something Cultured"],
        images: [
            "https://images.unsplash.com/photo-1528615141309-53f2564d3be8?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/377575937_10101996364672689_8358316528040617213_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=50SBrEIShGQQ7kNvgFnCh5d&_nc_zt=23&_nc_ht=scontent-dus1-1.xx&_nc_gid=AA1shUr5Cn0jXaOmwQeSgVr&oh=00_AYDF1WO5I2Pkl21yr7K_FhLLBYslIE9a7eU3IXwWllT4sg&oe=679D3240",
            "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1644864542345-db19d1f6c010?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1604268728238-7e43df92858e?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1661896580759-c9c8f1a4862a?q=80&w=1271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],

    },
    {
        text: "We going on Friday directly? (14th)",
        options: ["Yesh", "Maybe rather on Sat/Sun"],
        images: [
            "https://plus.unsplash.com/premium_photo-1673713732954-74846e74e774?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1628349407899-46565857ab55?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]
    },
    {
        text: "Here are some shrek GIFs",
        options: ["1", "2", "3"],
        images: [
            "https://media.giphy.com/media/10Ug6rDDuG3YoU/giphy.gif?cid=ecf05e47kxtwffac3b8o2y4izqwyn8apxfmb7cmttecze4sw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://media.giphy.com/media/ggv4eJK7WIScDuWupT/giphy.gif?cid=ecf05e47cx744kijwzp8q0djmdzfzn6hehpr6n1yaycryvjs&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGtpd3o2OXA4YmR2aThtMjlyN3hucGVmaWVibDl6ajhmdGc2MWU0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VeOAG5fkGAdEodtKfW/giphy.gif"
        ]
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
const randomizeButton = document.getElementById("randomize-button");


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

        const innerTile = document.createElement("div");
        innerTile.classList.add("inner-tile");

        // Append the radio, image, and text to the inner tile
        innerTile.appendChild(radio);
        innerTile.appendChild(img); // Add the image if it exists
        innerTile.appendChild(text); // Add the text

        // Append the inner tile to the label
        label.appendChild(innerTile);
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

        // Create the inner tile (white background)
        const innerTile = document.createElement("div");
        innerTile.classList.add("inner-tile");

        const imgSrc = questions[index].images[questions[index].options.indexOf(answer)];
        if (imgSrc) {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = answer;
            innerTile.appendChild(img);
        }

        const text = document.createElement("p");
        text.textContent = `${questions[index].text}: ${answer}`;
        innerTile.appendChild(text);

        tile.appendChild(innerTile);

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
    if (resultContainer.style.display === "block") {
        alert("Page needs to reload to start from the beginning, click ok");
        location.reload();
    }
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
