function convertTemperature() {
    // Get input values
    const temperatureInput = document.getElementById("temperature").value;
    const unitSelect = document.getElementById("unit");
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    // Validate input
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Perform temperature conversion
    let convertedTemperature;
    let resultUnit;

    if (selectedUnit === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * (5 / 9);
        resultUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        resultUnit = "Fahrenheit";
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        resultUnit = "Kelvin";
    }

    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
