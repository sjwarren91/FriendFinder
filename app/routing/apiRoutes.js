var friends = require("../data/friends")

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })

    app.post("/api/friends", (req, res) => {

        if (req.body){
            friends.push(req.body);
            res.json(true);
        } else {
            res.json(false);
        }
    })
}