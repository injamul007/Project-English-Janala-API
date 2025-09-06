//? js file for English Janala with API

const loadLesson = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(res => res.json())
  .then(jsonData => displayLesson(jsonData.data))
}

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(jsData2 => displayLevelWord(jsData2.data))
}

const displayLevelWord = (words) => {
  //? 1.get the container
  const wordContainer = document.getElementById('word_container');
  wordContainer.innerHTML = '';
  
  //? 2. get into every lesson
  words.forEach(word => {
    //? destructuring the array of object
    const {meaning,pronunciation,word:wordName} = word;
    console.log(word)
    //? 3. create element
    const wordCard = document.createElement('div');
    wordCard.innerHTML = `<div class="word_card bg-white text-center rounded-xl shadow-sm py-10 px-5 space-y-3">
        <h2 class="font-bold text-2xl">${wordName}</h2>
        <p class="font-semibold">Meaning/Pronunciation</p>

        <div class="font-bangla text-2xl font-medium">${meaning} / ${pronunciation}</div>
        <div class="flex justify-between items-center mt-6">
          <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff30]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1a91ff10] hover:bg-[#1a91ff30]"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>`;
    //? 4. append into container
    wordContainer.append(wordCard);
  });

}

const displayLesson = (lessons) => {
  //? 1.get the container
  const levelContainer = document.getElementById('level_container');
  levelContainer.innerHTML = '';

  //? 2. get into every lesson
  for(const lesson of lessons) {
   //? 3. create element
   const btnDiv = document.createElement('div')
   btnDiv.innerHTML = `
                      <button onclick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-outline     btn-primary">
                      <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                      </button>`;

   //? 4. append into container
   levelContainer.append(btnDiv)
  }
  
}


loadLesson();