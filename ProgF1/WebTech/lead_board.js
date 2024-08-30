// Leaderboard data
//let leaderboard = [];
let leaderboard = JSON.parse(sessionStorage.getItem('leaderboard')) || [];

// Function to add medals for a country
function addMedals() {
    // Get input values
    let country = document.getElementById("country").value;
    let gold = parseInt(document.getElementById("gold").value);
    let silver = parseInt(document.getElementById("silver").value);
    let bronze = parseInt(document.getElementById("bronze").value);
    gold = isNaN(gold) ? 0 : gold;
    silver = isNaN(silver) ? 0 : silver;
    bronze = isNaN(bronze) ? 0 : bronze;

    // Check if the country already exists in the leaderboard
    let existingCountry = leaderboard.find(entry => entry.country === country);

    if (existingCountry) {
        // Update the existing country's medal count
        existingCountry.gold += gold;
        existingCountry.silver += silver;
        existingCountry.bronze += bronze;
    } else {
        // Add a new country to the leaderboard
        leaderboard.push({
            country: country,
            gold: gold,
            silver: silver,
            bronze: bronze
        });
    }

    // Sort the leaderboard by gold, then silver, then bronze medals
    leaderboard.sort((a, b) => {
        if (b.gold !== a.gold) return b.gold - a.gold;
        if (b.silver !== a.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
    });
    // Save the updated leaderboard to sessionStorage
    sessionStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    // Update the displayed leaderboard
    displayLeaderboard();

    // Reset the form
    document.getElementById("medalForm").reset();
}

// Function to display the leaderboard
function displayLeaderboard() {
    let leaderboardTable = document.getElementById("leaderboard");
    leaderboardTable.innerHTML = ""; // Clear the current table

    // Populate the table with the updated leaderboard
    leaderboard.forEach(entry => {
        let total = entry.gold + entry.silver + entry.bronze;
        leaderboardTable.innerHTML += `
            <tr>
                <td>${entry.country}</td>
                <td>${entry.gold}</td>
                <td>${entry.silver}</td>
                <td>${entry.bronze}</td>
                <td>${total}</td>
            </tr>
        `;
    });
}
// Function to generate and download the leaderboard report
function generateReport() {
    let reportContent = 'Country,Gold,Silver,Bronze,Total\n';

    leaderboard.forEach(entry => {
        let total = entry.gold + entry.silver + entry.bronze;
        reportContent += `${entry.country},${entry.gold},${entry.silver},${entry.bronze},${total}\n`;
    });

    // Create a blob from the report content
    let blob = new Blob([reportContent], { type: "text/csv" });

    // Create a link to download the blob as a file
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "leaderboard_report.csv"; // File name

    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link after the download
    document.body.removeChild(link);
}

// Call displayLeaderboard after updating leaderboard
displayLeaderboard();
