/*
// Function to save the form field values in sessionStorage
function saveFieldValues() {
    const team = document.getElementById('team').value;
    const c1 = document.getElementById('c1').value;
    const c2 = document.getElementById('c2').value;
    const c3 = document.getElementById('c3').value;

    sessionStorage.setItem('team', team);
    sessionStorage.setItem('c1', c1);
    sessionStorage.setItem('c2', c2);
    sessionStorage.setItem('c3', c3);
}

// Function to load the form field values from sessionStorage
function loadFieldValues() {
    const team = sessionStorage.getItem('team');
    const c1 = sessionStorage.getItem('c1');
    const c2 = sessionStorage.getItem('c2');
    const c3 = sessionStorage.getItem('c3');

    if (team !== null) document.getElementById('team').value = team;
    if (c1 !== null) document.getElementById('c1').value = c1;
    if (c2 !== null) document.getElementById('c2').value = c2;
    if (c3 !== null) document.getElementById('c3').value = c3;
}

// Call the loadFieldValues function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadFieldValues();

    // Set up the interval to refresh the page every 5 seconds
    setInterval(() => {
        saveFieldValues();  // Save the field values before refreshing
        window.location.reload();
    },
        10000);
});
*/

// Leaderboard data
//let leaderboard = [];
let bleaderboard = JSON.parse(sessionStorage.getItem('bleaderboard')) || [];

// Function to add medals for a country
function addPoints() {
    // Get input values
    let team = document.getElementById("team").value;
    let cA = parseInt(document.getElementById("c1").value);
    let cB = parseInt(document.getElementById("c2").value);
    let cC = parseInt(document.getElementById("c3").value);
    // If the team name is empty, don't proceed
    if (!team) {
        alert("Please select a team before adding points.");
        return;
    }
    cA = isNaN(cA) ? 0 : cA;
    cB = isNaN(cB) ? 0 : cC;
    cC = isNaN(cC) ? 0 : cC;

    // Check if the team already exists in the leaderboard
    let existingTeam = bleaderboard.find(entry => entry.team === team);

    if (existingTeam) {
        // Update the existing team's points
        existingTeam.cA += cA;
        existingTeam.cB += cB;
        existingTeam.cC += cC;
    } else {
        // Add a new team to the leaderboard
        bleaderboard.push({
            team: team,
            cA: cA,
            cB: cB,
            cC: cC
        });
    }

    // Sort the leaderboard by total points (cA + cB + cC)
    bleaderboard.sort((a, b) => {
        let totalA = a.cA + a.cB + a.cC;
        let totalB = b.cA + b.cB + b.cC;
        return totalB - totalA;
    });
    // Save the updated leaderboard to sessionStorage
    sessionStorage.setItem('bleaderboard', JSON.stringify(bleaderboard));


// Retrieve the leaderboard from sessionStorage
    bleaderboard = JSON.parse(sessionStorage.getItem('bleaderboard')) || [];

    // Update the displayed leaderboard
    displayLeaderboard();

    // Reset the form
    document.getElementById("pointForm").reset();
}

// Function to display the leaderboard
function displayLeaderboard() {
    let leaderboardTable = document.getElementById("bLeaderboard");
    leaderboardTable.innerHTML = ""; // Clear the current table

    // Populate the table with the updated leaderboard
    bleaderboard.forEach(entry => {
        let total = entry.cA + entry.cB + entry.cC;
        leaderboardTable.innerHTML += `
            <tr>
                <td>${entry.team}</td>
                <td>${entry.cA}</td>
                <td>${entry.cB}</td>
                <td>${entry.cC}</td>
                <td>${total}</td>
            </tr>
        `;
    });
}
// Function to generate and download the leaderboard report
function generateReport() {
    let reportContentBB = 'Team,Criteria A,Criteria B,Criteria C,Total\n';

    bleaderboard.forEach(entry => {
        let total = entry.cA + entry.cB + entry.cC;
        reportContentBB += `${entry.team},${entry.cA},${entry.cB},${entry.cC},${total}\n`;
    });

    // Create a blob from the report content
    let blob = new Blob([reportContentBB], { type: "text/csv" });

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
    document.addEventListener('DOMContentLoaded', () => {
        // Call updateCharts after the DOM has loaded
        updateCharts();
    });

}
// Call displayLeaderboard after updating leaderboard
displayLeaderboard();


