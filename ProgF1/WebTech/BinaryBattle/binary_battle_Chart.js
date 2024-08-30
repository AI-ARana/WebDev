// Initialize chart variables
let pieChart;
let barChart;


// Function to create and update charts
function updateCharts() {
    let teams = bleaderboard.map(entry => entry.team);
    let cAA = bleaderboard.map(entry => entry.cA);
    let cBB = bleaderboard.map(entry => entry.cB);
    let cCC = bleaderboard.map(entry => entry.cC);
    let totals = bleaderboard.map(entry => entry.cA + entry.cB + entry.cC);

    // Get canvas contexts
    let ctxPie = document.getElementById('pieChart').getContext('2d');
    let ctxBar = document.getElementById('barChart').getContext('2d');

    // Create or update the pie chart
    if (pieChart) {
        pieChart.destroy();
    }
    pieChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: teams,
            datasets: [{
                data: totals,
                backgroundColor: ['#c23030', '#226db4', '#2da02d', '#e28807', '#c2c2f0', '#ffb3e6', '#c4e17f']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ' + context.raw;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });

    // Create or update the bar chart
    if (barChart) {
        barChart.destroy();
    }
    barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: teams,
            datasets: [
                {
                    label: 'Criteria A',
                    data: cAA,
                    backgroundColor: '#b40e0e',
                },
                {
                    label: 'Criteria B',
                    data: cBB,
                    backgroundColor: '#0b60ae',

                },
                {
                    label: 'Criteria C',
                    data: cCC,
                    backgroundColor: '#0a900a',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false // Remove grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false // Remove grid lines
                    }
                }
            },

        }
    });
}

// Call the updateCharts function after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCharts();
});
