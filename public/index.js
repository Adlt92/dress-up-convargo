/* global CONVARGO*/
'use strict';

(() => {
  const render = (actors) => {
    const fragment = document.createDocumentFragment();
    const div = document.createElement('div');
    const template = actors.map(actor => {
      return `
        <div class="actor">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>
      `;
    }).join('');

    div.innerHTML = template;
    fragment.appendChild(div);
    document.querySelector('#actors').innerHTML = '';
    document.querySelector('#actors').appendChild(fragment);
  };

  const button = document.querySelector('#compute');

  button.addEventListener('click', function onClick () {
    document.getElementById("estimate").style.visibility = "visible";
    const trucker = CONVARGO.getTrucker();
    const distance = document.getElementById('shiperdistance').value;
    const volume = document.getElementById('shipervolume').value;
    const option = document.getElementById('shiperoption').checked;
    const actors = CONVARGO.payActors(trucker, distance, volume, option);

    render(actors);

    return;
  });
})();
