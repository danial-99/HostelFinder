document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");
  const sidebarTabs = document.querySelectorAll(".btn");
  const pages = document.querySelectorAll(".page");
  const selectedCards = document.querySelectorAll(".page-3 .card");

  // Toggle sidebar visibility
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("sidebaractive");
  });

  // Handle sidebar tab click events
  sidebarTabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      setActiveTab(index);
    });
  });

  function setActiveTab(index) {
    sidebarTabs.forEach((tab) => tab.classList.remove("active"));
    sidebarTabs[index].classList.add("active");
    sidebar.classList.remove("active");

    pages.forEach((page) => page.classList.remove("page-active"));
    const target = sidebarTabs[index].querySelector("a").dataset.target;
    document.querySelector(target).classList.add("page-active");

    localStorage.setItem("activeTabIndex", index);
  }

  // Restore active tab from localStorage
  const activeTabIndex = localStorage.getItem("activeTabIndex");
  if (activeTabIndex !== null) {
    setActiveTab(Number(activeTabIndex));
  }

  // Close sidebar on outside click
  document.addEventListener("click", function (e) {
    if (e.target.id !== "sidebarToggle" && window.innerWidth < 1200) {
      sidebar.classList.remove("sidebaractive");
    }
  });

  // Initialize circle progress bars
  document.querySelectorAll(".progress-circle").forEach((circle) => {
    const progress = circle.getAttribute("data-progress");
    const left = circle.querySelector(".progress-circle-left");
    const right = circle.querySelector(".progress-circle-right");
    const percent = circle.querySelector(".progress-percent");

    if (progress <= 50) {
      right.style.transform = `rotate(${progress * 2}deg)`;
      left.style.transform = "rotate(0deg)";
    } else {
      right.style.transform = "rotate(360deg)";
      left.style.transform = `rotate(${(progress - 50) * 3.6}deg)`;
    }

    percent.innerText = `${progress}%`;
  });

  // Handle card selection
  selectedCards.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.toggle("card-selected");
    });
  });
});

// chart
const ctx = document.getElementById("bookingRequestsChart").getContext("2d");
const bookingRequestsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        data: [5, 10, 15, 10, 12, 6],
        backgroundColor: "rgba(255, 152, 0, 0.8)" /* Orange color */,
        borderColor: "rgba(255, 152, 0, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.1)" /* Light grid lines */,
        },
      },
      x: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)" /* Light grid lines */,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Booking Requests",
        align: "start",
        padding: {
          top: 10,
          bottom: 30,
        },
        font: {
          size: 18,
          weight: "bold",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true, // Ensure the chart maintains its aspect ratio
  },
});
