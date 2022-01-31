export const getFormattedDate = (sDate: string): string => {
    let date = new Date(sDate);
    let options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
    return (new Intl.DateTimeFormat('en-US', options).format(date)
    );
}