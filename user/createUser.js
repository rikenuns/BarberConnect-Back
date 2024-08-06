

function ValidationUser(req, res, next) {
    const { name, email, password, dateYears } = req.body;

    if (!name) {
        return res.status(404).json({ msg: 'The name is required' });
    }

    if (!email) {
        return res.status(404).json({ msg: 'The email is required' });
    }

    if (!password) {
        return res.status(404).json({ msg: 'The password is required' });
    }

    if (!dateYears) {
        return res.status(404).json({ msg: 'The dateYears is required' });
    }

    next();
}

module.exports.ValidationUser = ValidationUser;
