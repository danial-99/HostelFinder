const chart = document.getElementById('bookingRateChart').getContext('2d');
const bookingRateChart = new Chart(chart, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', '', '', '', '', '', '', ''],
    datasets: [
      {
        label: '2023',
        data: [10, 20, 15, 30, 40, 35, 50, 45, 30, 25, 40, 35],
        backgroundColor: 'rgba(38, 198, 218, 0.8)', /* Teal color */
        borderColor: 'rgba(38, 198, 218, 1)',
        borderWidth: 1
      },
      {
        label: '2024',
        data: [15, 10, 25, 20, 30, 25, 40, 35, 25, 20, 30, 25],
        backgroundColor: 'rgba(255, 152, 0, 0.8)', /* Orange color */
        borderColor: 'rgba(255, 152, 0, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)' /* Light grid lines */
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)' /* Light grid lines */
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});