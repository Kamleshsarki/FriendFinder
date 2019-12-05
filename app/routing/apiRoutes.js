const friends = require('../data/friends')

module.exports = function(app){
    app.get('/api/friends', function(req,res){
      res.json(friends);
    });

    app.post('/api/friends', function (req,res){
        const totalDiffrence = 0;

        const bestMatch = {
            name:'',
            photo:'',
            friendDiffrence:1000
        };

        const userData = req.body;
        const userName = userData.name;
        const userScores = userData.scores;

        const b = userScores.map(function(){
            return parseInt(item,10);
        });

        userData = {
            name: req.body.name,
            photo: req.body.photo,
            scores: b
        };

        console.log('Name:'+userName);
        console.log('User Score'+userScores);

        const sum = b.reduce((a,b)=> a+b, 0);

        console.log('sum of users score'+sum);
        console.log ('Best match friend diff' + bestMatch.friendDiffrence);
        console.log("++++++==========++++++++");

        for (var i = 0; i < friends.length; i++){
            console.log(friends[i] .name);
            totalDifference = 0;
            console.log('Total Diff'+ totalDifference);
            console.log('Best match friend diff'+bestMatch.friendDiffrence);


            const bfriendScore = friend[i].score.reduce ((a,b)=> a+b,0);
            console.log('Total friend score'+ bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log('------------------------------->'+totalDiffrence);

            if (totalDifference <= bestMatch.friendDifference){
                bestMatch.name = friend[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
            console.log(totalDifference +"Total Difference");
        }
console.log(bestMatch);

friends.push(userData);
console.log('New user added');
console.log(userData);
res.json(bestMatch);

  });
};