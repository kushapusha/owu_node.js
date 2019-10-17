module.exports = (id_1, id_2) => {
    if (+id_1 !== id_2) {
        throw new Error('It is not your account')
    }
};