/*let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');

food1s.addEventListener('click',()=>{
    foods.style.backgroundImage="url()";
})

food2s.addEventListener('click',()=>{
    foods.style.backgroundImage="url()";
})*/

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("NdkdnOXe3m8jLOtWA");

    const modal = document.getElementById("recipe-modal");
    const startHereLink = document.getElementById("start-here-link");
    const closeButton = document.querySelector(".close-button");

    startHereLink.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

function sendRecipe(event) {
    event.preventDefault();

    emailjs.sendForm('service_7dv304p', 'template_vu4f0yf', '#recipe-form')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Recipe submitted successfully!");
            document.getElementById("recipe-form").reset();
            document.getElementById("recipe-modal").style.display = "none";
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to submit recipe. Please try again later.");
        });
}
