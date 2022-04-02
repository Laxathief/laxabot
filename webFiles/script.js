

// Shortened version of the document.ready jquery function
$(function(){

// Function that takes in the key pressed from our input box as a parameter as well as the input entered
 $("#userInput").keypress(function(key) {
    
// Assign the input taken by the user to jquery variable called bigInput
const bigList = $("#list-group");
const bigInput = $("#userInput");

// Assign the value from htmlUserInput to a jQuery variable called userText
const userText = bigInput.val();

            // If the user presses the enter key(keycode(13)), execute the following code
            if(key.keyCode == 13) 
            {
                         // Some audio for when the user enters a message
                         var audio = new Audio('voice.mp3');
                         audio.volume = 0.5;                         
                         audio.play()

                        // Stop the page from refreshing
                        event.preventDefault();
            
                        // Test
                        console.log(userText);
                      
                        // Clear the text box
                        bigInput.val(" ");

                        // Append the unordered list in our HTML with OUR response containted with a HTML list element
                         bigList.append("<li class='list-group-item list-group-item bg-dark text-white text-left'>" + "<b>User : </b>" + userText + "</li>");

                        // Keep page scrolling while adding new text
                         $("html, body").scrollTop($("body").height());
                         
                       
            }
            
            // If the user enters another key that's not enter, let them try again
            else
            {
                return;
            }


            // Passing  our input from the textbox into a variable called userText
            const queryParams = {
                "userInput" : userText
            }

            // Our /chat functon
            $.get("/chat", queryParams)
            .done(function(resp) {

                // Append the unordered list in our HTML with ELIZA's response containted with a HTML list element
                const nextListItem = "<li class='list-group-item list-group-item-primary bg-warning text-black text-right'>" + "<b>Hal :</b> " + resp + "</li>";
                
                // Keep page scrolling while adding new text
                $("html, body").scrollTop($("body").height());                
                bigList.append(nextListItem)        
                        
            })
            
            
           
       
    });
   
});


