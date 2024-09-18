// Get the questions and score elements
const questions = document.querySelectorAll(".question");
const scoreElement = document.createElement("div");
scoreElement.className = "score";
document.querySelector(".quiz-container").appendChild(scoreElement);

// Define the correct answers
const correctAnswers = [
	{
		question: 1,
		answer:
			"A) border-image-size, border-image-repeat, border-image-offset, border-image-file, border-image-slice"
	},
	{
		question: 2,
		answer:
			"C) Storing extra information that is not part of standard HTML attributes"
	},
	{ question: 3, answer: "C) background-color" },
	{ question: 4, answer: "B) False" },
	{ question: 5, answer: "A) Document Object Model" }
];

// Add event listener to each question
questions.forEach((question, index) => {
	const radioButtons = question.querySelectorAll('input[type="radio"]');
	radioButtons.forEach((button) => {
		button.addEventListener("click", () => {
			calculateScore();
		});
	});
});

// Calculate the score
function calculateScore() {
	let score = 0;
	questions.forEach((question, index) => {
		const radioButtons = question.querySelectorAll('input[type="radio"]');
		let userAnswer = "";
		radioButtons.forEach((button) => {
			if (button.checked) {
				userAnswer = button.nextElementSibling.textContent;
			}
		});
		if (userAnswer === correctAnswers[index].answer) {
			score++;
		}
	});
	scoreElement.textContent = `Your score is ${score} out of ${questions.length}`;
}
