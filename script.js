// Function to post a tweet
function postTweet() {
  // Get the tweet text from the textarea
  var tweetText = document.querySelector("textarea").value;

  if (!tweetText) {
    alert("Please enter a tweet text!");
    return;
  }
  // Create a new div element to hold the tweet
  var newTweet = document.createElement("div");
  newTweet.classList.add("tweet");

  // Create the HTML for the tweet
  var tweetHTML = `
    <img src="https://picsum.photos/50" alt="Profile picture">
    <div class="tweet-content">
      <h3>John Doe</h3>
      <p>${tweetText}</p>
<div class="tweet-actions">
        <i class="fas fa-reply"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </div>
  `;

  // Add the HTML to the new tweet div
  newTweet.innerHTML = tweetHTML;

  // Append the new tweet to the tweet feed
  var tweetFeed = document.querySelector(".tweet-feed");
  tweetFeed.appendChild(newTweet);

  // Clear the textarea
  document.querySelector("textarea").value = "";
}
// Get the tweet button
var tweetButton = document.querySelector("button");

// Add an event listener to the tweet button to post a tweet when clicked
tweetButton.addEventListener("click", postTweet);
