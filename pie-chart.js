const pie = document.getElementById('myDonutChart').getContext('2d');
const myDonutChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [30, 50, 20], // Data values
            backgroundColor: [
                '#4BC0C0', // Light Blue
                '#FFCE56', // Yellow
                '#36A2EB', // Blue
                '#FF6384'  // Red
            ],
            hoverBackgroundColor: [
                '#4BC0C0', 
                '#FFCE56',
                '#36A2EB',
                '#FF6384'
            ]
        }],
        labels: [
            'Light Blue',
            'Yellow',
            'Blue',
            'Red'
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true
            }
        }
    }
});
