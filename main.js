const API_URL = "https://fhu-faculty-api.netlify.app/fhu-faculty.json"
//const API_URL="/fhu-faculty-api.json"

addAllCards();

async function  addAllCards() {

    // load the data

    let response = await fetch(API_URL);
    let people = await response.json();

    people.forEach(person => {
        console.log( person );
    });
    
    // for each item in data set (each person)
        // add that person's card to the DOM

    people.forEach( person => {

        let div = document.createElement('div');
        let cardInnerHTML = 
      `
        <div class="flexbox max-w-md mx-auto border-8 border-yellow-400 bg-blue-400">
          <div class="flex max-w-md mx-auto justify-between">
              <div>Basic</div>
              <div class="text-2xl mt-2">"${person.NickName}" ${person.FirstName} ${person.LastName}</div>
              <div class="mt-3">HP ${person.HitPoints}</div>
              <div class="m-2">
                  <div class="bg-yellow-500 p-2 rounded-full">
                      <div>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
      
          <div class="flex max-w-md my-2 justify-center">
              <img src="images/headshots/${person.Image}" alt="">
          </div>
      
          <div class="flex max-w-md mx-8 justify-center border-2 border-slate-500 bg-slate-200">
              <div>No.${person.id} ${person.Type} HT. ${person.Height}" S:${person.Stamina} Gender:${person.Gender} </div>
          </div>

          <div class="flex max-w-md px-4 justify-between mt-4">
              <div class="bg-yellow-500 p-2 rounded-full">
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                      </svg>
                  </div>
              </div>
              <div class="text-lg">${person.Attack1}</div>
              <div>${person.Attack1Damage}</div>
          </div>
          <div class="flex max-w-md mx-4 justify-center mb-4">
              <div>Stun the opponent in disbelief. Decrease opponents attacks by 62 and stun them for a turn.</div>
          </div>

          <div class="flex max-w-md px-4 justify-between">
              <div class="bg-yellow-500 p-2 rounded-full">
                  <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                      </svg>
                  </div>
              </div>
              <div class="text-lg">${person.Attack2}</div>
              <div>${person.Attack2Damage}</div>
          </div>
          <div class="flex max-w-md mx-4 justify-center mb-4">
              <div>Stun the opponent in disbelief. Decrease opponents attacks by 62 and stun them for a turn.</div>
          </div>

          <div class="flex max-w-md justify-center">
              <div class="text-xl">Character Attributes</div>
          </div>

          <div class="flex max-w-md mx-4 flex-wrap justify-between mb-8">
              <div>${person.Rank}</div>
              <div>${person.EducationLevel}</div>
              <div>${person.Tenure}</div>
              <div>${person.Department}</div>
          </div>

          <div class="flex max-w-md mx-auto border-4 border-slate-500 bg-slate-100">
              <div>Weaknesses: ${person.Weaknesses}</div>
              <div>Resistance: ${person.Resistances}</div>
              <div>${person.HashTag}</div>
          </div>
        </div>
        `
        
    

        div.innerHTML = cardInnerHTML;

        document.body.appendChild(div);

    });
    
    

}


function addCard(person) {

}