module.exports = (req, res) => {
    const {id} = req.house;

    res.redirect(`/houses/${id}`);
};