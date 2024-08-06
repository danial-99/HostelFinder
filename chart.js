//first one

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');
  
    // Sample data
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: '',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        border:'0',
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
  
    // Chart configuration
    const config = {
      type: 'line',
      data: data,
      options: {
        animations: {
          radius: {
            duration: 400,
            easing: 'linear',
            loop: (context) => context.active
          }
        },
        hoverRadius: 12,
        hoverBackgroundColor: 'yellow',
        interaction: {
          mode: 'nearest',
          intersect: false,
          axis: 'x'
        },
        plugins: {
          tooltip: {
            enabled: false
          }
        }
      }
    };
  
    // Initialize the chart
    const myChart = new Chart(ctx, config);

  });

//   secod one 
  
  

// new charts 
const chrt = document.getElementById('newChart').getContext('2d');
const myChart = new Chart(chrt, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],  // Empty labels for no visible labels
        datasets: [{
            label: '',
            data: [20, 40, 30, 60, 50, 70],  // Example data, replace with your data
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',  // No background color
            borderWidth: 2,
            fill: false,
            tension: 0.4,  // Smoothness of the curve
            pointRadius: 0,  // No points
            pointHoverRadius: 0  // No hover effect
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,  // No legend
            },
        },
        scales: {
            x: {
                display: false,  // No x-axis labels
                grid: {
                    display: false  // No x-axis grid lines
                }
            },
            y: {
                display: false,  // No y-axis labels
                grid: {
                    display: false  // No y-axis grid lines
                }
            }
        }
    }
});
const chrt2 = document.getElementById('newChart2').getContext('2d');
const myChart2 = new Chart(chrt2, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],  // Empty labels for no visible labels
        datasets: [{
            label: '',
            data: [20, 40, 30, 60, 50, 70],  // Example data, replace with your data
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',  // No background color
            borderWidth: 2,
            fill: false,
            tension: 0.4,  // Smoothness of the curve
            pointRadius: 0,  // No points
            pointHoverRadius: 0  // No hover effect
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,  // No legend
            },
        },
        scales: {
            x: {
                display: false,  // No x-axis labels
                grid: {
                    display: false  // No x-axis grid lines
                }
            },
            y: {
                display: false,  // No y-axis labels
                grid: {
                    display: false  // No y-axis grid lines
                }
            }
        }
    }
});
const chrt3 = document.getElementById('newChart3').getContext('2d');
const myChart3 = new Chart(chrt3, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],  // Empty labels for no visible labels
        datasets: [{
            label: '',
            data: [20, 40, 30, 60, 50, 70],  // Example data, replace with your data
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(0, 0, 0, 0)',  // No background color
            borderWidth: 2,
            fill: false,
            tension: 0.4,  // Smoothness of the curve
            pointRadius: 0,  // No points
            pointHoverRadius: 0  // No hover effect
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,  // No legend
            },
        },
        scales: {
            x: {
                display: false,  // No x-axis labels
                grid: {
                    display: false  // No x-axis grid lines
                }
            },
            y: {
                display: false,  // No y-axis labels
                grid: {
                    display: false  // No y-axis grid lines
                }
            }
        }
    }
});