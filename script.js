// Script for Nexus FinTech website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Fixed header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };
            
            // Here you would normally send the data to a server
            console.log('Form submitted:', formData);
            
            // Show success message
            contactForm.reset();
            successMessage.style.display = 'block';
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // Add a CSS class to indicate that JS is enabled
    document.body.classList.add('js-enabled');
});

// Initialize data visualization charts
function initCharts() {
    // ROI Chart
    const roiCtx = document.getElementById('roiChart');
    if (roiCtx) {
        new Chart(roiCtx, {
            type: 'line',
            data: {
                labels: ['Year 1', 'Year 2', 'Year 3'],
                datasets: [{
                    label: 'ROI %',
                    data: [120, 190, 267],
                    fill: true,
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    borderColor: '#00FFFF',
                    tension: 0.4,
                    pointBackgroundColor: '#00FFFF',
                    pointBorderColor: '#00FFFF',
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(11, 19, 64, 0.9)',
                        titleColor: '#00FFFF',
                        bodyColor: '#ffffff',
                        borderColor: 'rgba(0, 255, 255, 0.3)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Efficiency Chart
    const efficiencyCtx = document.getElementById('efficiencyChart');
    if (efficiencyCtx) {
        new Chart(efficiencyCtx, {
            type: 'bar',
            data: {
                labels: ['Operations', 'Trading', 'Analysis', 'Compliance'],
                datasets: [{
                    label: 'Efficiency Gain %',
                    data: [35, 47, 62, 43],
                    backgroundColor: [
                        'rgba(0, 255, 255, 0.7)',
                        'rgba(0, 255, 255, 0.5)',
                        'rgba(0, 255, 255, 0.3)',
                        'rgba(0, 255, 255, 0.6)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 255, 255, 1)'
                    ],
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(11, 19, 64, 0.9)',
                        titleColor: '#00FFFF',
                        bodyColor: '#ffffff',
                        borderColor: 'rgba(0, 255, 255, 0.3)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + '% efficiency improvement';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)'
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.7)',
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    // Adoption Chart
    const adoptionCtx = document.getElementById('adoptionChart');
    if (adoptionCtx) {
        new Chart(adoptionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Fully Adopted', 'In Progress', 'Planning Stage'],
                datasets: [{
                    data: [38, 40, 22],
                    backgroundColor: [
                        'rgba(0, 255, 255, 0.8)',
                        'rgba(0, 255, 255, 0.4)',
                        'rgba(0, 255, 255, 0.1)'
                    ],
                    borderColor: [
                        'rgba(0, 255, 255, 1)',
                        'rgba(0, 255, 255, 0.6)',
                        'rgba(0, 255, 255, 0.3)'
                    ],
                    borderWidth: 1,
                    cutout: '70%',
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(11, 19, 64, 0.9)',
                        titleColor: '#00FFFF',
                        bodyColor: '#ffffff',
                        borderColor: 'rgba(0, 255, 255, 0.3)',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
} 