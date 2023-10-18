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
export function hasDatePassed(date: string): boolean {
    const now = new Date();
    return new Date(date) < now;
  }

	export function convertToHex(rgbStr: string) {
		// Split the string by space, map each value to its hex representation, and join them.
		return (
			'#' +
			rgbStr
				.split(' ')
				.map((value) => {
					// Convert the value to a hexadecimal string and pad with zeros if necessary.
					const hex = parseInt(value).toString(16);
					return hex.length === 1 ? '0' + hex : hex;
				})
				.join('')
		);
	}