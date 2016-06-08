'use strict';

(function() {
  var formContainer = document.querySelector('.overlay-container');
  var formOpenButton = document.querySelector('.reviews-controls-new');
  var formCloseButton = document.querySelector('.review-form-close');

  formOpenButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.remove('invisible');
  };

  formCloseButton.onclick = function(evt) {
    evt.preventDefault();
    formContainer.classList.add('invisible');
  };
})();


var reviewFields = document.querySelector('.review-fields');
var reviewFieldsName = document.querySelector('#review-fields-name');
var reviewFieldsText = document.querySelector('#review-fields-text');

var setRateConstraint = function() {
  var reviewAddition = document.querySelector('#review-submit');
  var reviewDescription = document.querySelector('#review-text');
  reviewDescription.setAttribute('required', true);
  if(reviewName.value === '' || reviewText.value === '') {
    reviewAddition.disabled = true;
  }
};

var doNotSetRateConstraint = function() {
  var reviewAddition = document.querySelector('#review-submit');
  var reviewDescription = document.querySelector('#review-text');
  reviewDescription.removeAttribute('required', 'required');
  if (reviewName.value !== '' ) {
    reviewAddition.disabled = false;
  }
};

var reviewName = document.querySelector('#review-name');
var reviewText = document.querySelector('#review-text');
var reviewAddition = document.querySelector('#review-submit');


function setReviewFieldsVisibility() {
  if (reviewFieldsName.classList.contains('invisible') && reviewFieldsText.classList.contains('invisible')) {
    reviewFields.classList.add('invisible');
  } else {
    reviewFields.classList.remove('invisible');
  }
}

reviewName.oninput = function() {
  if (reviewName.value === '' ) {
    reviewFieldsName.classList.remove('invisible');
    reviewAddition.disabled = true;
  } else {
    reviewFieldsName.classList.add('invisible');
    reviewAddition.disabled = false;
  }
  setReviewFieldsVisibility();
};

	reviewText.oninput = function() {
  if (reviewText.value === '') {
    reviewFieldsText.classList.remove('invisible');
  } else {
    reviewFieldsText.classList.add('invisible');
  }
  if(reviewName.value !== '') {
    reviewAddition.disabled = false;
  }
  setReviewFieldsVisibility();
};



	var estimate1 = document.querySelector('#review-mark-1');
estimate1.addEventListener('click', function() {
  setRateConstraint();
});


	var estimate2 = document.querySelector('#review-mark-2');
estimate2.addEventListener('click', function() {
  setRateConstraint();
});


	var estimate3 = document.querySelector('#review-mark-3');
estimate3.addEventListener('click', function() {
  doNotSetRateConstraint();
});

	var estimate4 = document.querySelector('#review-mark-4');
estimate4.addEventListener('click', function() {
  doNotSetRateConstraint();
});

	var estimate5 = document.querySelector('#review-mark-5');
estimate5.addEventListener('click', function() {
  doNotSetRateConstraint();
});
