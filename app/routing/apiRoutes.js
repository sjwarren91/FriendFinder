var friends = require("../data/friends")

module.exports = (app) => {

    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })

    app.post("/api/friends", (req, res) => {
        if (req.body){
            var newSum = getArrayTotal(req.body);
            var match = friendCompare(newSum, friends);
            res.json(match);
            friends.push(req.body);
        } else {
            res.json(false);
        }
        
    })
}

function getArrayTotal(obj) {
    var sum = 0;
    for(i = 0; i < obj.scores.length; i++){
        sum += parseInt(obj.scores[i]);
    }
    return sum;
}

function friendCompare(userScore, others) {
    var diff;
    var bestie = others[0];
    var newDiff = getArrayTotal(others[0]);

    for(let i = 1; i < others.length; i++){
        diff = Math.abs(userScore - getArrayTotal(others[i]));
        if(diff < newDiff) {
            newDiff = diff;
            bestie = others[i];
        }
    }

    return bestie;
}