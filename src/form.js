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


//var reviewFields = document.querySelector('.review-fields');
var reviewFieldsName = document.querySelector('#review-fields-name');
var reviewFieldsText = document.querySelector('#review-fields-text');

var setRateConstraint = function() {
  var reviewAddition = document.querySelector('#review-submit');
  var reviewDescription = document.querySelector('#review-text');
  reviewDescription.setAttribute('required', true);
  reviewAddition.disabled = true;
};

var doNotSetRateConstraint = function() {
  var reviewAddition = document.querySelector('#review-submit');
  var reviewDescription = document.querySelector('#review-text');
  reviewDescription.removeAttribute('required', 'required');
  reviewAddition.disabled = false;
};



var reviewName = document.querySelector('#review-name');
var reviewText = document.querySelector('#review-text');
var validateForm = function() {
  if (reviewName.value === '' ) {
    reviewFieldsName.classList.remove('invisible');
  } else {
    reviewFieldsName.classList.add('invisible');
  }
  if (reviewText.value === '' ) {
    reviewFieldsText.classList.remove('invisible');
  } else {
    reviewFieldsText.classList.add('invisible');
  }
};



reviewName.addEventListener('change', function() {
  validateForm();
		});

reviewText.addEventListener('change', function() {
  validateForm();
		});


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
