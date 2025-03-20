const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = ["Wilnnie the cat", "Prime Time", "Chappel Roan"]

let insertY = ["the St Louis Arch", "Disneyland", "Canada"]

let insertZ = ["blew up", "fell asleep in class", "grew wings and flew away"]




randomize.addEventListener('click', result);

function result() {


    let newStory = storyText

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);



    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);



    if(customName.value !== '') {
        const name = customName.value;

    
      }
    
      if(document.getElementById("uk").checked) {
        const weight = Math.round(300 / 14);
        const temperature =  Math.round((94 - 32) * (5 / 9));
    
      }
    
      story.textContent = newStory;
      story.style.visibility = 'visible';
    }


