// Leaderboard data
let leaderboard = [];

// Function to add medals for a country
function addMedals() {
    // Get input values
    let country = document.getElementById("country").value;
    let gold = parseInt(document.getElementById("gold").value);
    let silver = parseInt(document.getElementById("silver").value);
    let bronze = parseInt(document.getElementById("bronze").value);

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
