
// alert("helo")
const ctx = document.getElementById('bookingRequestsChart').getContext('2d');
const bookingRequestsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Booking Requests',
        data: [5, 10, 15, 10, 12, 6],
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
        display: false
      },
      title: {
        display: true,
        text: 'Booking Requests',
        align: 'start',
        padding: {
          top: 10,
          bottom: 30
        },
        font: {
          size: 18,
          weight: 'bold'
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
  }
});