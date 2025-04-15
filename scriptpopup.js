// Privacy Policy and Terms & Conditions Popup Script

  $(document).ready(function () {
    // Open the popup modal
    $('#privacy-link').click(function (e) {
        e.preventDefault();
        $('#popup-title').text('Privacy Policy');
        $('#popup-text').text('At Lama Restaurant, we value your privacy. Your data is safe, and we don’t share it with anyone unless required by law. We only use cookies to enhance your experience.');
        $('#popup-modal').fadeIn();
    });

    $('#terms-link').click(function (e) {
        e.preventDefault();
        $('#popup-title').text('Terms & Conditions');
        $('#popup-text').text('By using Lama Restaurant’s services, you agree to follow our rules. Be kind, eat good food, and don’t misuse our platform. We reserve the right to update terms anytime.');
        $('#popup-modal').fadeIn();
    });

    // Close the popup modal
    $('#popup-close').click(function () {
        $('#popup-modal').fadeOut();
    });

    // Also close when clicking outside the content
    $(window).click(function (e) {
        if ($(e.target).is('#popup-modal')) {
            $('#popup-modal').fadeOut();
        }
    });
});

// image slider
// This script will create an image slider that changes images every 3 seconds
function startImageSlider(imageElementId, imageArray, intervalTime = 3000) {
    const imageElement = document.getElementById(imageElementId);
    if (!imageElement || !imageArray.length) return;

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imageArray.length;
        imageElement.src = imageArray[currentIndex];
    }, intervalTime);
}

// Call the function with your stuff
const images = [
    "https://th.bing.com/th/id/OIP.6E9wAtATqkbY0MsHc98cpQHaJQ?rs=1&pid=ImgDetMain",
    "https://www.shutterstock.com/image-photo/spicy-thai-curry-pork-meat-600nw-1927740677.jpg",
    "https://th.bing.com/th/id/OIP.79R9vNeEd0djN6RZhTfbAgHaE8?w=2700&h=1800&rs=1&pid=ImgDetMain",
    "https://thebigmansworld.com/wp-content/uploads/2022/08/spicy-noodles-recipe.jpg"
];

startImageSlider("sliderImage", images, 3000);
