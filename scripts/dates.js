export default function formatDate(date, format) {
    let options;

    if (format === 'relative') {
        let today = new Date();
        let day = 1000 * 3600 * 24;

        let difference = (today - date) / day;

        if (difference <= 1) {
            return 'Today';
        }
        if (difference <= 7) {
            return `${Math.round(difference)}d`;
        }
        format = 'MM/DD/YYYY';

    }

    if (format === 'MM/DD/YYYY') {
        options = {
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric',
        }
    }

    if (format === 'Week Mon DD YYYY') {
        options = {
            weekday: "short",
            month: "short",
            day: "2-digit",
            year: "numeric",
        };
    }

    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date).replace(/,/g, '');
}