module.exports = (req, res) => {
    const houses = req.house;

    res.json(houses);
};