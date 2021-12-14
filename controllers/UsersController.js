

exports.getUsers = async(req, res, next) => {
    try {
        const users = await usersDB.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: "Bad request"})
    }
}
