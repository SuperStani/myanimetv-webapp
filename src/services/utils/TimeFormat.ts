const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC'
    };

    const formattedDateTime = date.toLocaleString('en-GB', options).replace(',', '');

    const [day, month, year, time] = formattedDateTime.split(/\/| /);
    return `${month}/${day}/${year} ${time}`;
}

export default formatDateTime;
