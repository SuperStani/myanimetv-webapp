const getTimeDifference = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const secondsInMonth = 30 * 24 * 3600;
    const months = Math.floor(seconds / secondsInMonth);

    return {
        months,
        days: days % 30, // Remaining days after subtracting months
        hours
    };
}
export default getTimeDifference;