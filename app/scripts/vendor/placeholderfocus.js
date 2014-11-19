
/*********************************** Placeholder Focus & Blur JS ***********************************/

function placeholderfocus( event ) {
  // Get event object  if using Internet Explorer
  var e = event || window.event;
  
  // Check the object for W3C DOM event object, if not use IE event object to update the class of the parent element
  if( e.target )
    e.target.parentNode.style.backgroundColor = "#d6eef8";
  else
    e.srcElement.parentNode.style.backgroundColor = "#d6eef8";
  
}

function placeholderblur( event ) {
  // Get event object  if using Internet Explorer
  var e = event || window.event;
    
  // Check the object for W3C DOM event object, if not use IE event object to update the class of the parent element
  if( e.target )
    e.target.parentNode.style.backgroundColor = "";
  else
    e.srcElement.parentNode.style.backgroundColor = "";

} 

/*********************************** End Placeholder Focus & Blur JS ***********************************/

