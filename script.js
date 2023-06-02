$(function () {
    // Add a listener for click events on the save button
    $('.saveBtn').on('click', function () {
      // Get the id of the containing time-block
      const timeBlockId = $(this).parent().attr('id');
      
      // Get the user input from the textarea within the time-block
      const userInput = $(this).siblings('.description').val();
      
      // Save the user input in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, userInput);
    });
  
    // Apply the past, present, or future class to each time block
    $('.time-block').each(function () {
      // Get the id of the time-block
      const timeBlockId = $(this).attr('id');
      
      // Get the current hour using Day.js in 24-hour format
      const currentHour = dayjs().hour();
      
      // Compare the time-block id with the current hour and apply the appropriate class
      if (parseInt(timeBlockId.split('-')[1]) < currentHour) {
        $(this).addClass('past');
      } else if (parseInt(timeBlockId.split('-')[1]) === currentHour) {
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    });
  
    // Get any user input saved in localStorage and set the values of corresponding textarea elements
    $('.time-block').each(function () {
      // Get the id of the time-block
      const timeBlockId = $(this).attr('id');
      
      // Get the user input from localStorage using the time-block id as the key
      const userInput = localStorage.getItem(timeBlockId);
      
      // Set the value of the textarea to the saved user input
      $(this).find('.description').val(userInput);
    });
  
    // Display the current date in the header of the page
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDate);
  });
  