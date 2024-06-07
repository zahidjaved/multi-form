const stepMenuOne = $('.formbold-step-menu1');
const stepMenuTwo = $('.formbold-step-menu2');
const stepMenuThree = $('.formbold-step-menu3');
const stepMenuFour = $('.formbold-step-menu4'); // New step menu

const stepOne = $('.formbold-form-step-1');
const stepTwo = $('.formbold-form-step-2');
const stepThree = $('.formbold-form-step-3');
const stepFour = $('.formbold-form-step-4'); // New form step

const formSubmitBtn = $('.formbold-btn');
const formBackBtn = $('.formbold-back-btn');

formSubmitBtn.on("click", function(event){
  event.preventDefault();
  if(stepMenuOne.hasClass('active')) {
    stepMenuOne.removeClass('active').addClass('completed');
    stepMenuTwo.addClass('active');

    stepOne.removeClass('active');
    stepTwo.addClass('active');

    formBackBtn.addClass('active');
    formBackBtn.off("click").on("click", function(event) {
      event.preventDefault();

      stepMenuOne.addClass('active').removeClass('completed');
      stepMenuTwo.removeClass('active');

      stepOne.addClass('active');
      stepTwo.removeClass('active');

      formBackBtn.removeClass('active');
    });

  } else if(stepMenuTwo.hasClass('active')) {
    stepMenuTwo.removeClass('active').addClass('completed');
    stepMenuThree.addClass('active');

    stepTwo.removeClass('active');
    stepThree.addClass('active');

    formBackBtn.off("click").on("click", function(event) {
      event.preventDefault();

      stepMenuTwo.addClass('active').removeClass('completed');
      stepMenuThree.removeClass('active');

      stepTwo.addClass('active');
      stepThree.removeClass('active');
    });

  } else if(stepMenuThree.hasClass('active')) {
    stepMenuThree.removeClass('active').addClass('completed');
    stepMenuFour.addClass('active'); // Activate new step menu

    stepThree.removeClass('active');
    stepFour.addClass('active'); // Activate new form step

    formBackBtn.off("click").on("click", function(event) {
      event.preventDefault();

      stepMenuThree.addClass('active').removeClass('completed');
      stepMenuFour.removeClass('active');

      stepThree.addClass('active');
      stepFour.removeClass('active');

      formSubmitBtn.text('Next'); // Revert button text if going back from the final step
    });

    formSubmitBtn.text('Submit');
  } else if(stepMenuFour.hasClass('active')) {
    $('form').submit();
  }
});
