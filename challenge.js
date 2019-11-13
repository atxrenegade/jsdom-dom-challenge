const startTime = Date.now();
let counterTime;

function addToCounter() {
	counterTime += 1;
	counterDisplay.innerHTML = counterTime;
};

function subtractFromCounter() {
	counterTime -= 1;
	counterDisplay.innerHTML = counterTime;
};

function addCommentToDOM() {
	let commentList = document.querySelector('div#list.comments');
	let comment = document.createElement('LI');
	comment.innerHTML = document.getElementById('comment-input').value;
	commentList.appendChild(comment);
};

function addLike() {
	//add functionality here
	console.log('I like you!');
};

function pauseCounter(){
	//add functionality here
	console.log('paused')
}

function incrementCounter() {
	let elapsedTime = Date.now() - startTime; // milliseconds elapsed since start
	console.log(elapsedTime);
	counterTime = Math.floor(elapsedTime / 1000); // in seconds
	console.log(counterTime);
	counterDisplay.innerHTML = counterTime;
};

let counterDisplay = document.querySelector('h1#counter');
let plusCounter = document.querySelector('button#plus');
let minusCounter = document.querySelector('button#minus');
let commentInput = document.querySelector('button#submit');
let heartButton = document.getElementById('heart');
let pauseButton = document.getElementById('pause');

counterDisplay.addEventListener('click', incrementCounter);
plusCounter.addEventListener('click', addToCounter);
minusCounter.addEventListener('click', subtractFromCounter);
commentInput.addEventListener('click', addCommentToDOM);
heartButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', pauseCounter);

incrementCounter();

// How do I increment update counter every second?
// why are my appended comments diappearing?
// why is the counter resetting when I add comments?
