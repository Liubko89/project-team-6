import icons from '/svg/icons.svg';
const home = document.getElementById('home');
const favorites = document.getElementById('favorites');
const back = document.querySelector('.back-image');
const quote = document.querySelector('.quote');
const text = document.querySelectorAll('.mob-nav-link');
const toDelete = document.querySelector('.content-no-favorites');
const gallery = document.querySelector('.gallery');

back.classList.add('is-hidden');

function onClickChange() {
  home.classList.remove('is-active');
  home.classList.add('no-active');
  favorites.classList.remove('no-active');
  favorites.classList.add('is-active');
  quote.classList.remove('container');

  text[0].classList.remove('is-active');
  text[0].classList.add('no-active');
  text[1].classList.remove('no-active');
  text[1].classList.add('is-active');
}

onClickChange();

const render = JSON.parse(localStorage.getItem('favorites'));

checkContent(render);

function checkContent(arr) {
  arr.length !== 0
    ? toDelete.classList.add('is-hidden')
    : toDelete.classList.remove('is-hidden');
}

function renderContent(arr) {
  return arr
    .map(
      ({
        bodyPart,
        name,
        _id,
        target,
        burnedCalories,
        time,
      }) => `<li class = "list-exercises" id="${_id}" data-filter="${name}"><div class="options">
    <div class="box-up">
    <div class="box-left">
    <div class="work-div"><p class="options-item work-div"> WORKOUT</p></div>
    
    <button class="trash-btn" id="trash" type="button">
    <svg class="icon-trash" width="18" height="18"><use href="${icons}#icon-trash"></use></svg>
    </button>
    
    </div>
  
    
    <button type = "button" class="btn-start-arrow" id="open">Start<svg class="icon-arrow" width="14" height="14"><use href="${icons}#icon-arrow"></use></svg></button>
    </div>
             
              <div class="exercises-par"> 
              <div class="options-item-span"><svg class="icon-men" width="18" height="18"><use href="${icons}#icon-running-man"></use></svg></div>
              <h4 class="ex-name">${name}</h4>
              </div>
              <div class="options-item-wrap">
                <p class="options-item"><span class="hid-txt">Burned calories:</span>${burnedCalories}/${time}</p>
                <p class="options-item"><span class="hid-txt">Body part:</span>${bodyPart}</p>
                <p class="options-item"><span class="hid-txt">Target:</span>${target}</p></div>
              </div>
             </li>`
    )
    .join('');
}

gallery.innerHTML = renderContent(render);

gallery.addEventListener('click', handleRemove);

function handleRemove(event) {
  console.log(event.target.closest('li').id);
  console.dir(event.target.closest('button').id);

  if (event.target.closest('button').id === 'trash') {
    render.find((el, idx, arr) => {
      return el._id === event.target.closest('li').id
        ? arr.splice(idx, 1)
        : null;
    });
    localStorage.setItem('favorites', JSON.stringify(render));
    gallery.innerHTML = renderContent(render);
    checkContent(render);
  }
}
