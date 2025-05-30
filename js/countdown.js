// Countdown timer configuration
const COUNTDOWN_CONFIG = {
    targetTime: '21:00', // 9:00 PM EST
    timezone: 'America/New_York', // EST timezone
    interval: 12 * 60 * 60 * 1000 // 12 hours in milliseconds
};

// Get the countdown element
const countdownElement = document.getElementById('new-release-countdown');

// Function to calculate time remaining
function calculateTimeRemaining() {
    const now = new Date();
    
    // Get current time in EST
    const estNow = new Date(now.toLocaleString('en-US', {timeZone: COUNTDOWN_CONFIG.timezone}));
    
    // Calculate today's target time
    const [hours, minutes] = COUNTDOWN_CONFIG.targetTime.split(':').map(Number);
    const target = new Date(estNow);
    target.setHours(hours, minutes, 0, 0);
    
    // If target time has already passed today, calculate for tomorrow
    if (target <= estNow) {
        target.setDate(target.getDate() + 1);
    }
    
    // Calculate remaining time
    const diff = target - estNow;
    
    // Calculate hours, minutes, and seconds
    const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Format the time string
    const timeString = `${hoursLeft.toString().padStart(2, '0')}h ${minutesLeft.toString().padStart(2, '0')}m ${secondsLeft.toString().padStart(2, '0')}s`;
    
    return timeString;
}

// Update the countdown display
function updateCountdown() {
    if (countdownElement) {
        countdownElement.textContent = calculateTimeRemaining();
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();
