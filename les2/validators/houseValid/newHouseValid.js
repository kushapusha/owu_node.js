module.exports = houseObject => {
    const {city, street, rooms} = houseObject;

    if(!city || !street || !rooms) {
        throw new Error('House not valid')
    }
}