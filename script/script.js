//? js file for English Janala with API

const loadLesson = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
  .then(res => res.json())
  .then(jsonData => displayLesson(jsonData.data))
}

const displayLesson = (lessons) => {
  //? 1.get the container
  const levelContainer = document.getElementById('level_container');
  levelContainer.innerHTML = '';

  //? 2. get into every lessons
  for(const lesson of lessons) {
    console.log(lesson)
   //? 3. create element
   const btnDiv = document.createElement('div')
   btnDiv.innerHTML = `
                      <button href="" class="btn btn-outline       btn-primary">
                      <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
                      </button>`;

   //? 4. appned into container
   levelContainer.append(btnDiv)
  }
  
}


loadLesson()