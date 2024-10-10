export const transDate = (date: number) => {
    const dateTans = new Date(date);
    return `${dateTans.getDate()}/${dateTans.getMonth() + 1}/${dateTans.getFullYear()}`;
}