document.getElementById('storeData').addEventListener('click', function() {
    const teamName = document.getElementById('teamName').value;
    const round = document.getElementById('round').value;
    const criterion1 = document.getElementById('criterion1').value;
    const criterion2 = document.getElementById('criterion2').value;

    const criterion3 = Math.random() * 100; // Example value, replace as needed

    const teamData = {
        teamName: teamName,
        round: parseInt(round, 10),
        criterion1: parseFloat(criterion1),
        criterion2: parseFloat(criterion2),
        criterion3: parseFloat(criterion3)
    };

    sessionStorage.setItem('teamsData', JSON.stringify([teamData]));
    console.log('Stored Data:', JSON.stringify([teamData]));
});

document.getElementById('trainModel').addEventListener('click', async function() {
    await trainModel();
});

document.getElementById('predict').addEventListener('click', async function() {
    const round = parseInt(document.getElementById('predictRound').value, 10);
    const criterion1 = parseFloat(document.getElementById('predictCriterion1').value);
    const criterion2 = parseFloat(document.getElementById('predictCriterion2').value);

    await predictScore(round, criterion1, criterion2);
});

async function trainModel() {
    let storedData = sessionStorage.getItem('teamsData');

    if (!storedData) {
        alert('No data in session storage');
        return;
    }

    const dataToSend = JSON.parse(storedData);

    console.log('Sending Data:', dataToSend); // Debugging line

    try {
        const response = await fetch('http://localhost:5000/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ teamsData: dataToSend })
        });

        console.log('Response Status:', response.status); // Debugging line
        console.log('Response Headers:', [...response.headers]); // Debugging line

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Network response was not ok');
        }

        const result = await response.json();
        console.log('Training Result:', result);
        alert('Model trained successfully');
    } catch (error) {
        console.error('Error:', error.message);
    }
}
