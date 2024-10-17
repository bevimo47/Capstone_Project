// Job Progress Chart
var jobProgressCtx = document.getElementById('jobProgressChart').getContext('2d');
var jobProgressChart = new Chart(jobProgressCtx, {
    type: 'bar',
    data: {
        labels: ['Well A-123', 'Well B-456', 'Well C-789', 'Well D-101', 'Well E-202'],
        datasets: [{
            label: 'Progress (%)',
            data: [65, 100, 0, 30, 80],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Revenue by Client Chart
var revenueByClientCtx = document.getElementById('revenueByClientChart').getContext('2d');
var revenueByClientChart = new Chart(revenueByClientCtx, {
    type: 'pie',
    data: {
        labels: ['TeraGeo', 'PetroTech', 'GeoNav', 'EnergyFlow', 'Other'],
        datasets: [{
            data: [30, 25, 20, 15, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Revenue Distribution'
            }
        }
    }
});