const exposureResults = document.getElementById("exposure-results");
const exposureText = document.getElementById("exposure-text");
const selectFields = document.querySelectorAll("select");

const risks = [
    { severity: "low", color: "green" },
    { severity: "moderate", color: "orange" },
    { severity: "high", color: "red" }
];

exposureResults.style = "display:none;";

function calculateExposure() {
    let exposure = 0;
    selectFields.forEach(field => exposure += parseInt(field.value));

    exposure = Math.min(parseInt(exposure/2), risks.length);
    
    const risk = risks[exposure];
    exposureText.innerText = `Your exposure rating is ${risk.severity}`;
    exposureText.style = `color:${risk.color}`;
    exposureResults.style = "display:block;";
}