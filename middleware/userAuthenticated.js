export let userAuthenticated = (req, res, next) => {
    if (req.user) {
        console.log("User logged in")
        next()
    } else {
        res.sendStatus(403)
    }
};
