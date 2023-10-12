/**
 * Converts a JS date object to a custom formatted string.
 *
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date: Date): string {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();
  
    return `${months[monthIndex]} ${day} ${year}`;
  }

/**
 * Checks if a given date has already passed.
 * 
 * @param date - The date to check against.
 * @returns true if the date has passed, false otherwise.
 */
export function hasDatePassed(date: Date): boolean {
    const now = new Date();
    return new Date(date) < now;
  }