// setup
let data = {
  labels: ["Djokovic - 23", "Nadal - 22", "Federer - 20"],
  datasets: [
    {
      label: "",
      data: [23, 22, 20],
      backgroundColor: [
        "rgba(54, 162, 235)",
        "rgba(75, 192, 192)",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(54, 162, 235)",
        "rgba(75, 192, 192)",
        "rgba(255, 159, 64)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {},
        },

        grid: {
          display: false,
        },
      },

      x: {
        display: false,

        grid: {
          display: false,
        },
      },
    },

    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// setup
data = {
  labels: ["Djokovic - 387", "Federer - 310", "Sampras - 287"],
  datasets: [
    {
      label: "",
      data: [387, 310, 287],
      backgroundColor: [
        "rgba(54, 162, 235)",
        "rgba(75, 192, 192)",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(54, 162, 235)",
        "rgba(75, 192, 192)",
        "rgba(255, 159, 64)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config2 = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {},
        },

        grid: {
          display: false,
        },
      },

      x: {
        display: false,

        grid: {
          display: false,
        },
      },
    },

    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

// render init block
const myChart2 = new Chart(document.getElementById("myChart2"), config2);

// setup
data = {
  labels: ["Djokovic - 83.4%", "Federer - 82.9%", "Borg - 82.4%"],
  datasets: [
    {
      label: "",
      data: [83.4, 82.9, 82.4],
      backgroundColor: [
        "rgba(54, 162, 235)",
        "rgba(75, 192, 192)",
        "rgba(255, 159, 64)",
      ],
      borderColor: [
        "rgba(54, 162, 235)",
        "rgba(75, 192, 192)",
        "rgba(255, 159, 64)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config3 = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {},
        },

        grid: {
          display: false,
        },
      },

      x: {
        display: false,

        grid: {
          display: false,
        },
      },
    },

    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

// render init block
const myChart3 = new Chart(document.getElementById("myChart3"), config3);
