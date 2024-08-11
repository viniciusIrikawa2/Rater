export const returnAge = (birthday: string) => {
    const birthDate = new Date(birthday);
    const dateNow = new Date();
    
    let age = dateNow.getFullYear() - birthDate.getFullYear();
    const monthDifference = dateNow.getMonth() - birthDate.getMonth();

    if(monthDifference < 0 || (monthDifference === 0 && dateNow.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
};

export const convertDurationToHours = (time: number): string => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}m`;
};