document.addEventListener('DOMContentLoaded', function () {

    const popupOverlay = document.getElementById('popupOverlay');

    const mainDoc = document.getElementById('main');

    const popup = document.getElementById('popup');

    const closePopup = document.getElementById('closePopup');
	
	const redirectMe = document.getElementById('redirectMe');

    // Function to open the popup

    function openPopup() {
        mainDoc.style.filter= 'blur(10px)';
        popupOverlay.style.display = 'block';
        


    }

    // Function to close the popup

    function closePopupFunc() {

        
        mainDoc.style.filter= 'blur(0px)';
        popupOverlay.style.display = 'none';

    }
	
	function redirectMeFunc() {

        window.location.href = "test";

    }

    // Function to submit the signup form


    // Event listeners

    // Trigger the popup to open (you can call this function on a button click or any other event)

    openPopup(); 

    // Close the popup when the close button is clicked

    closePopup.addEventListener('click', closePopupFunc);
	
	redirectMe.addEventListener('click', redirectMeFunc);

    // Close the popup when clicking outside the popup content

    popupOverlay.addEventListener('click', function (event) {

        if (event.target === popupOverlay) {

            closePopupFunc();

        }

    });


});