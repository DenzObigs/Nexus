// Script for Nexus FinTech website

document.addEventListener('DOMContentLoaded', function() {
    // Fixed header effect on scroll
    const header = document.querySelector('header');
    const scrollWatcher = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', scrollWatcher);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Initialize data visualization charts
    initCharts();
    
    // Simple form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // This is just a placeholder to demonstrate the UI feedback
            
            const formData = new FormData(this);
            const formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            // Log form data to console (for demonstration purposes)
            console.log('Form submitted with values:', formValues);
            
            // Show success message
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Message Sent!';
            
            // Reset form after delay
            setTimeout(() => {
                this.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                
                // Add a success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Thanks for your message. We\'ll be in touch soon!';
                
                this.parentNode.insertBefore(successMessage, this);
                
                // Remove success message after 5 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    }
    
    // Add a CSS class to indicate that JS is enabled
    document.body.classList.add('js-enabled');
});

// Data Visualization Charts
function initCharts() {
    // Check if Chart.js is available
    if (typeof Chart === 'undefined') return;
    
    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                    family: 'Montserrat',
                    size: 14,
                    weight: 'bold'
                },
                bodyFont: {
                    family: 'Open Sans',
                    size: 13
                },
                padding: 12,
                cornerRadius: 2
            }
        }
    };
    
    // ROI Chart (Line chart)
    const roiChart = document.getElementById('roiChart');
    if (roiChart) {
        const years = ['Year 1', 'Year 2', 'Year 3'];
        new Chart(roiChart, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'ROI %',
                    data: [85, 176, 267],
                    borderColor: '#000000',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    borderWidth: 2,
                    pointBackgroundColor: '#000000',
                    pointRadius: 4,
                    tension: 0.2,
                    fill: true
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Efficiency Chart (Bar chart)
    const efficiencyChart = document.getElementById('efficiencyChart');
    if (efficiencyChart) {
        const departments = ['Risk', 'Operations', 'Compliance', 'Customer Service'];
        new Chart(efficiencyChart, {
            type: 'bar',
            data: {
                labels: departments,
                datasets: [{
                    label: 'Efficiency Improvement',
                    data: [63, 82, 70, 78],
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderRadius: 2
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Adoption Chart (Doughnut chart)
    const adoptionChart = document.getElementById('adoptionChart');
    if (adoptionChart) {
        new Chart(adoptionChart, {
            type: 'doughnut',
            data: {
                labels: ['AI-Enabled', 'In Transition', 'Traditional'],
                datasets: [{
                    data: [42, 35, 23],
                    backgroundColor: [
                        'rgba(0, 0, 0, 0.8)',
                        'rgba(0, 0, 0, 0.5)',
                        'rgba(0, 0, 0, 0.2)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                ...commonOptions,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: {
                                family: 'Open Sans',
                                size: 11
                            }
                        }
                    }
                }
            }
        });
    }
} 