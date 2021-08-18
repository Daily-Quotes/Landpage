const colorButtons = [
    $('#set-red-button'),
    $('#set-orange-button'),
    $('#set-yellow-button'),
    $('#set-green-button'),
    $('#set-blue-button'),
    $('#set-purple-button')
];

$(".dynamic-color").css("color", `var(--blue) `);
$(".dynamic-bg-color").css("background", `var(--blue) `);

const handleColorClick = (e) => {
    const selectedColor = e.target.value;

    // Restore all buttons
    colorButtons.map(colorButton => {
        if (colorButton.hasClass("active")) {
            colorButton.removeClass("active")
        }
    })

    // Check if selectedColor isn't the current color
    if ($(`#set-${selectedColor}-button`).hasClass("active") !== true) {
        // If not, set as current color
        $(`#set-${selectedColor}-button`).addClass("active");

        // Set selected color to elements with class "dynamic-color"
        $(".dynamic-color").css("color", `var(--${selectedColor}) `);
        $(".dynamic-bg-color").css("background", `var(--${selectedColor}) `);

    }
}

colorButtons.map(colorButton => {
    colorButton.click(handleColorClick);
})