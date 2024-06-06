export function formatDate(dateString) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    
    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    return `${months[parseInt(month, 10) - 1]} ${year}`;
}
