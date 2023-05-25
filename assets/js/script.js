// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function buildCalender(time, timePeriod, divClass) {

  //jquery dom traversal 
    var rootEl = $('#root');
    var div1El = $('<div>');
    var div2El = $('<div>');
    var textAreaEl = $('<textarea>');
    var iEl = $('<i>');
    var saveButtonEl = $('<button>');
  
    rootEl.append(div1El);
    div1El.append(div2El, textAreaEl, saveButtonEl);
    saveButtonEl.append(iEl);

  //adding class features
    div1El.addClass("row time-block");
    div1El.addClass(divClass);
    div1El.attr("id",time);
    var savedInStorage = localStorage.getItem(time)
    div2El.text(time + timePeriod);
    div2El.addClass("col-2 col-md-1 hour text-center py-3");
  
    textAreaEl.addClass("col-8 col-md-10 description");
    textAreaEl.attr('rows', "3");
    textAreaEl.val(savedInStorage)
  
    iEl.addClass("fas fa-save")
    iEl.attr('aria-hidden', "true");
  
    saveButtonEl.addClass("btn saveBtn col-2 col-md-1");
    saveButtonEl.attr("aria-label", "save");
  
  //adding even listener
    saveButtonEl.on('click', saveInputSubmit);
  
  }
  
  // Loop to create and append <div> elements
  
  
  for (var i = 9; i <= 17; i++) {
    var timePeriod = "AM";
    var currentHour = dayjs().hour();
    var time = i;
  
    if(currentHour < i){
      divClass = ('past')
    }else if (currentHour == i){
      divClass = ('present')
    }else{
      divClass = ('future')
    }
  
    if (i > 12) {
      time = i - 12;
      timePeriod = "PM"
    }
    buildCalender(time, timePeriod, divClass);
  }
  
  
  function saveInputSubmit(event) {
    event.preventDefault();
    console.log($(this))
    alert($(this).prev().val());
    var valueToSave = $(this).prev().val()
    var keyToSave = $(this).parent().attr("id")
    console.log(keyToSave)
    localStorage.setItem(keyToSave, valueToSave)
  }
  
  //adding current dateto the header
  $(function () {
    var today = dayjs();
    alert(today.hour());
  
    $('#currentDay').text(today.format('MMM D, YYYY'));
  });
  
  
  
   