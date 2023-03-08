  // Get references to the form and the meme container
  const form = document.querySelector('#meme-form');
  const memeContainer = document.querySelector('#meme-container');

  // Add an event listener to the form that will run the generateMeme function when the form is submitted
  form.addEventListener('submit', generateMeme);

  // Define the generateMeme function
  function generateMeme(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get the values of the image URL, top text, bottom text, text size and text color from the form
    const imageUrl = form.elements['image-url'].value;
    const topText = form.elements['top-text'].value;
    const bottomText = form.elements['bottom-text'].value;
    const textSize = form.elements['text-size'].value;
    const textColor = form.elements['text-color'].value;

    // Create a new div element to hold the meme
    const memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');

    // Create an img element and set its src to the image URL
    const image = document.createElement('img');
    image.src = imageUrl;

    // Create a top text element and set its text to the top text
    const topTextElement = document.createElement('div');
    topTextElement.classList.add('top-text');
    topTextElement.textContent = topText;

    // Create a bottom text element and set its text to the bottom text
    const bottomTextElement = document.createElement('div');
    bottomTextElement.classList.add('bottom-text');
    bottomTextElement.textContent = bottomText;

    // Set the font size and color of the top and bottom text elements
    topTextElement.style.fontSize = `${textSize}px`;
    topTextElement.style.color = textColor;
    bottomTextElement.style.fontSize = `${textSize}px`;
    bottomTextElement.style.color = textColor;

    // Create a button that can be used to remove the meme from the page
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      memeDiv.remove();
    });

    // Append the image, top text, bottom text, and remove button to the meme div
    memeDiv.appendChild(image);
    memeDiv.appendChild(topTextElement);
    memeDiv.appendChild(bottomTextElement);
    memeDiv.appendChild(removeButton);

    // Append the meme div to the meme container
    memeContainer.appendChild(memeDiv);

    // Clear the values in the form input fields
    form.reset();
  }

