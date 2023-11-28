function generateStory() {
    var word = document.getElementById("wordInput").value;
    var story = "Once upon a time, there was a " + word + ". It was a magical " + word + " that could do incredible things. One day, the " + word + " went on an adventure and encountered many challenges. But with its extraordinary powers, the " + word + " overcame every obstacle and saved the day. The end.";
  
    document.getElementById("storyOutput").innerText = story;
  }