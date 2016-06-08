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
var reviewName = document.querySelector('#review-name');
var reviewText = document.querySelector('#review-text');
var reviewAddition = document.querySelector('#review-submit');
var reviewDescription = document.querySelector('#review-text');
var estimateElements = {'mark1': document.querySelector('#review-mark-1'),
                                        'mark2': document.querySelector('#review-mark-2'),
                                        'mark3': document.querySelector('#review-mark-3'),
                                        'mark4': document.querySelector('#review-mark-4'),
                                        'mark5': document.querySelector('#review-mark-5')};

function setRateConstraint() {
  reviewDescription.setAttribute('required', true);
  if(reviewName.value === '' || reviewText.value === '') {
    reviewAddition.disabled = true;
  }
}

function doNotSetRateConstraint() {
  reviewDescription.removeAttribute('required', 'required');
  if (reviewName.value !== '' ) {
    reviewAddition.disabled = false;
  }
}

function setReviewFieldsVisibility() {
  if (reviewFieldsName.classList.contains('invisible') && reviewFieldsText.classList.contains('invisible')) {
    reviewFields.classList.add('invisible');
  } else {
    reviewFields.classList.remove('invisible');
  }
}

reviewName.addEventListener('input', function() {
  if (reviewName.value === '' ) {
    reviewFieldsName.classList.remove('invisible');
    reviewAddition.disabled = true;
  } else {
    reviewFieldsName.classList.add('invisible');
    reviewAddition.disabled = false;
  }
  setReviewFieldsVisibility();
});


reviewText.addEventListener('input', function() {
  if (reviewText.value === '') {
    reviewFieldsText.classList.remove('invisible');
  } else {
    reviewFieldsText.classList.add('invisible');
  }
  if(reviewName.value !== '') {
    reviewAddition.disabled = false;
  }
  setReviewFieldsVisibility();
});


estimateElements.mark1.addEventListener('click', function() {
  setRateConstraint();
});

estimateElements.mark2.addEventListener('click', function() {
  setRateConstraint();
});

estimateElements.mark3.addEventListener('click', function() {
  doNotSetRateConstraint();
});

estimateElements.mark4.addEventListener('click', function() {
  doNotSetRateConstraint();
});

estimateElements.mark5.addEventListener('click', function() {
  doNotSetRateConstraint();
});
