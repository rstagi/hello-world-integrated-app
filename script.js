// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.getElementById('greeting');
    const clickBtn = document.getElementById('clickBtn');
    const dbStatus = document.getElementById('db-status');
    const backendStatus = document.getElementById('backend-status');
    const monitoringStatus = document.getElementById('monitoring-status');
    
    let clickCount = 0;
    
    // Button click handler
    clickBtn.addEventListener('click', function() {
        clickCount++;
        greeting.textContent = `Hello, World! (Clicked ${clickCount} times)`;
        
        // Add pulse animation
        greeting.classList.add('pulse');
        setTimeout(() => {
            greeting.classList.remove('pulse');
        }, 1000);
        
        // Send analytics event (placeholder for future implementation)
        sendAnalyticsEvent('button_click', { count: clickCount });
    });
    
    // Simulate service connections
    setTimeout(() => {
        checkDatabaseConnection();
    }, 1000);
    
    setTimeout(() => {
        checkBackendConnection();
    }, 2000);
    
    setTimeout(() => {
        checkMonitoringConnection();
    }, 3000);
});

// Placeholder functions for service connections
function checkDatabaseConnection() {
    const dbStatus = document.getElementById('db-status');
    // Simulate MongoDB connection check
    // TODO: Replace with actual MongoDB Atlas connection
    dbStatus.innerHTML = '<span class="status-ok">✓ MongoDB Connected</span>';
}

function checkBackendConnection() {
    const backendStatus = document.getElementById('backend-status');
    // Simulate Supabase connection check
    // TODO: Replace with actual Supabase connection
    backendStatus.innerHTML = '<span class="status-ok">✓ Supabase Connected</span>';
}

function checkMonitoringConnection() {
    const monitoringStatus = document.getElementById('monitoring-status');
    // Simulate Grafana monitoring check
    // TODO: Replace with actual Grafana dashboard integration
    monitoringStatus.innerHTML = '<span class="status-ok">✓ Monitoring Active</span>';
}

function sendAnalyticsEvent(eventName, data) {
    // Placeholder for analytics tracking
    // TODO: Implement actual analytics with Grafana
    console.log(`Analytics Event: ${eventName}`, data);
    
    // Future: Send to Grafana or other monitoring service
    // fetch('/api/analytics', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ event: eventName, data })
    // });
}