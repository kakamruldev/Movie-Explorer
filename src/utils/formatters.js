export function getYear(date) { return date ? new Date(date).getFullYear() : '—'; }

export function cleanSummary(summary = '') {
    return summary.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim();

}
