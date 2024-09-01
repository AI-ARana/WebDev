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
                backgroundColor: [
                    '#ff9999',
                    '#66b3ff',
                    '#99ff99',
                    '#ffcc99',
                    '#ffb3e6',
                    '#c2c2f0',
                    '#ffccff',
                    '#c4e17f',
                    '#ffb3b3',
                    '#66ff66',
                    '#99ccff',
                    '#ffcccc',
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom', // Position of the legend ('top', 'left', 'bottom', 'right')
                    labels: {
                        font: {
                            size: 21, // Font size for legend labels
                            weight: 'bold',
                            family: 'cursive',
                        },
                        color: '#c23030', // Font color for legend labels
                        boxWidth: 20, // Width of the colored box in the legend
                        padding: 15, // Padding between legend items
                    }
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
            labels: teams, // Labels for the x-axis
            datasets: [
                {
                    label: 'Criteria A',
                    data: cAA,
                    backgroundColor: '#5dade2',
                },
                {
                    label: 'Criteria B',
                    data: cBB,
                    backgroundColor: '#f1948a',
                },
                {
                    label: 'Criteria C',
                    data: cCC,
                    backgroundColor: '#58d68d',
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false, // Hide grid lines on x-axis
                    },
                    ticks: {
                        color: '#c23030', // Color of x-axis labels
                        font: {
                            size: 21, // Font size of x-axis labels
                            weight: 'bold', // Font weight of x-axis labels
                            family: 'cursive',
                        },
                        padding: 10, // Padding between the ticks and axis
                        callback: function(value) {
                            // Format the x-axis labels
                            return this.getLabelForValue(value); // Or apply any custom formatting you need
                        }
                    },
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true, // Show grid lines on y-axis
                        color: 'rgba(0,0,0,0.1)', // Grid line color
                    },
                    ticks: {
                        color: '#c23030', // Color of y-axis labels
                        font: {
                            size: 15, // Font size of y-axis labels
                            weight: 'bold', // Font weight of y-axis labels
                            family: 'cursive',
                        },
                        padding: 10, // Padding between the ticks and axis
                        stepSize: 10, // Set the step size between ticks
                        callback: function(value) {
                            // Format the y-axis labels
                            return value + ' pts'; // Add 'pts' suffix to y-axis labels
                        }
                    },
                },
            },
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 21,
                            weight: 'bold',
                            family: 'cursive',
                        },
                        color: '#1542e5',
                    }
                }
            }
        }
    });

}

// Call the updateCharts function after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
    updateCharts();

    // Auto-refresh the charts every 5 seconds
    setInterval(updateCharts, 5000); // 5000 milliseconds = 5 seconds
});
