
const showGalery = document.querySelector('.show-here');

const bucharest = document.querySelector('[src="images/bucharest_600x400.jpg"]');

const lisabona = document.querySelector('[src="images/lisabona_600x400.jpg"]');

const barcelona = document.querySelector('[src="images/barcelona_600x400.jpg"]');

const ljubljanski= document.querySelector('[src="images/ljubljanski_600x400.jpg"]');

const stockholm = document.querySelector('[src="images/stockholm_600x400.jpg"]');

const nameBucharest = document.querySelector('#names');

bucharest.addEventListener('click', function() {
    showGalery.src = "images/bucharest_600x400.jpg";
    nameBucharest.innerHTML = 'Bucharest';
})

lisabona.addEventListener('click', function() {
    showGalery.src = "images/lisabona_600x400.jpg";
    nameBucharest.innerHTML = 'Lisabona';
})

barcelona.addEventListener('click', function() {
    showGalery.src = "images/barcelona_600x400.jpg";
    nameBucharest.innerHTML = 'Barcelona';
})

ljubljanski.addEventListener('click', function() {
    showGalery.src = "images/ljubljanski_600x400.jpg";
    nameBucharest.innerHTML = 'Ljubljanski';
})

stockholm.addEventListener('click', function() {
    showGalery.src = "images/stockholm_600x400.jpg";
    nameBucharest.innerHTML = 'Stockholm';
})