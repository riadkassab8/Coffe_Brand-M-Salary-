// Coffee Toast Notifications System
class CoffeeToast {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    // Create container if it doesn't exist
    if (!document.getElementById('coffeeToastContainer')) {
      this.container = document.createElement('div');
      this.container.id = 'coffeeToastContainer';
      this.container.className = 'coffee-toast-container';
      document.body.appendChild(this.container);
    } else {
      this.container = document.getElementById('coffeeToastContainer');
    }
  }

  // SVG icons for different toast types
  getIcon(type) {
    const icons = {
      success: `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 21V19H20V21H2ZM4 17C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V15C18 15.55 17.8042 16.0208 17.4125 16.4125C17.0208 16.8042 16.55 17 16 17H4ZM4 15H16V5H4V15ZM6.5 13L9 10.5L11.5 13L6.5 13Z"/>
          <circle cx="10" cy="10" r="3" fill="currentColor"/>
          <path d="M9 9L11 11M11 9L9 11" stroke="white" stroke-width="2"/>
        </svg>
      `,
      error: `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 21V19H20V21H2ZM4 17C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V15C18 15.55 17.8042 16.0208 17.4125 16.4125C17.0208 16.8042 16.55 17 16 17H4ZM4 15H16V5H4V15ZM7 9L9 7L11 9L13 7L15 9L13 11L15 13L13 15L11 13L9 15L7 13L9 11L7 9Z"/>
        </svg>
      `,
      info: `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 21V19H20V21H2ZM4 17C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V15C18 15.55 17.8042 16.0208 17.4125 16.4125C17.0208 16.8042 16.55 17 16 17H4ZM4 15H16V5H4V15ZM10 7C9.45 7 8.97917 6.80417 8.5875 6.4125C8.19583 6.02083 8 5.55 8 5C8 4.45 8.19583 3.97917 8.5875 3.5875C8.97917 3.19583 9.45 3 10 3C10.55 3 11.0208 3.19583 11.4125 3.5875C11.8042 3.97917 12 4.45 12 5C12 5.55 11.8042 6.02083 11.4125 6.4125C11.0208 6.80417 10.55 7 10 7ZM10 13C9.45 13 8.97917 12.8042 8.5875 12.4125C8.19583 12.0208 8 11.55 8 11V9C8 8.45 8.19583 7.97917 8.5875 7.5875C8.97917 7.19583 9.45 7 10 7C10.55 7 11.0208 7.19583 11.4125 7.5875C11.8042 7.97917 12 8.45 12 9V11C12 11.55 11.8042 12.0208 11.4125 12.4125C11.0208 12.8042 10.55 13 10 13Z"/>
        </svg>
      `,
      loading: `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 21V19H20V21H2ZM4 17C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V15C18 15.55 17.8042 16.0208 17.4125 16.4125C17.0208 16.8042 16.55 17 16 17H4ZM4 15H16V5H4V15Z"/>
          <ellipse cx="10" cy="9" rx="3" ry="2" fill="currentColor" opacity="0.5">
            <animate attributeName="ry" values="2;1;2" dur="1s" repeatCount="indefinite"/>
          </ellipse>
        </svg>
      `
    };
    return icons[type] || icons.info;
  }

  show(message, type = 'info', duration = 4000) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `coffee-toast coffee-toast-${type}`;
    
    toast.innerHTML = `
      <div class="coffee-toast-icon">
        <div class="steam"></div>
        ${this.getIcon(type)}
      </div>
      <span class="coffee-toast-message">${message}</span>
      <button class="coffee-toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add to container
    this.container.appendChild(toast);
    
    // Auto-remove after duration
    if (duration > 0) {
      setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => {
          if (toast.parentElement) {
            toast.remove();
          }
        }, 300);
      }, duration);
    }
    
    return toast;
  }

  success(message, duration = 4000) {
    return this.show(message, 'success', duration);
  }

  error(message, duration = 4000) {
    return this.show(message, 'error', duration);
  }

  info(message, duration = 4000) {
    return this.show(message, 'info', duration);
  }

  loading(message, duration = 0) {
    return this.show(message, 'loading', duration);
  }
}

// Initialize and create global instance
const coffeeToast = new CoffeeToast();

// Make it available globally
window.coffeeToast = coffeeToast;
