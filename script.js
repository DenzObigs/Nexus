// Script for Nexus FinTech website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission (in a real application, this would send data to a server)
            setTimeout(() => {
                contactForm.reset();
                successMessage.style.display = 'block';
                
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }
    
    // Fixed header on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

// Initialize charts
function initCharts() {
    // Customer Service Analysis Chart
    const roiCtx = document.getElementById('roiChart');
    if (roiCtx) {
        new Chart(roiCtx, {
            type: 'bar',
            data: {
                labels: ['Email', 'Phone', 'Chat', 'In-Person', 'Social Media'],
                datasets: [{
                    label: 'Inquiry Volume',
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: 'rgba(57, 83, 161, 0.7)',
                    borderColor: 'rgba(57, 83, 161, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(200, 200, 200, 0.8)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(200, 200, 200, 0.8)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgba(200, 200, 200, 0.8)'
                        }
                    }
                }
            }
        });
    }
    
    // Service Efficiency Assessment Chart
    const efficiencyCtx = document.getElementById('efficiencyChart');
    if (efficiencyCtx) {
        new Chart(efficiencyCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Avg. Response Time (min)',
                    data: [28, 25, 22, 20, 18, 15],
                    backgroundColor: 'rgba(0, 210, 255, 0.2)',
                    borderColor: 'rgba(0, 210, 255, 1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(200, 200, 200, 0.8)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(200, 200, 200, 0.1)'
                        },
                        ticks: {
                            color: 'rgba(200, 200, 200, 0.8)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: 'rgba(200, 200, 200, 0.8)'
                        }
                    }
                }
            }
        });
    }
    
    // Customer Sentiment Tracking Chart
    const adoptionCtx = document.getElementById('adoptionChart');
    if (adoptionCtx) {
        new Chart(adoptionCtx, {
            type: 'doughnut',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [{
                    data: [55, 30, 15],
                    backgroundColor: [
                        'rgba(46, 196, 182, 0.7)',
                        'rgba(231, 231, 231, 0.7)',
                        'rgba(231, 76, 60, 0.7)'
                    ],
                    borderColor: [
                        'rgba(46, 196, 182, 1)',
                        'rgba(231, 231, 231, 1)',
                        'rgba(231, 76, 60, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: 'rgba(200, 200, 200, 0.8)',
                            padding: 20
                        }
                    }
                }
            }
        });
    }
} 