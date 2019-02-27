
export const isAdult = (age) => {
    if(age >= 18) {
        return `You are adult`;
    } else {
        return `You are a youngster`;
    }

}

export const canDrink = (age) => {
    if(age >= 20) {
        return `You can drink.`;
    } else {
        return `You are not allowed to drink.`;
    }
}

const isSenior = (age) => age >= 65;

export default isSenior;