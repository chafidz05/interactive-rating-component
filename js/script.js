let ratings = document.querySelectorAll('.circle');  //all divs with numbers//
let btn = document.getElementById('btn'); // button //
let evaluation = document.querySelector('.evaluation'); // evalutation div //
let thankyou = document.querySelector('.thankyou'); // thank you div //
let span = document.getElementById('rating');

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', () => {
    let rating = ratings[i].innerHTML;

    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains('selected')
      ratings[i].classList.remove('selected');
    }
    ratings[i].classList.add('selected');

    btn.addEventListener('click', () => {
      evaluation.style.display = 'none';
      thankyou.style.display = 'block';
      span.innerHTML = rating;
    });
  });
};