'use strict';

module.exports = function(app) {
    var thoughts = [];
    app.locals.thoughts = thoughts;
    
    app.get('/', function(req, res) {
        res.render('index');
    });
    app.get('/new', function(req, res) {
        res.render('new');
    });

    app.post('/form', function(req, res){
        if(!req.body.subject || !req.body.content){
            res.status(400).send("fields can't be blank");
            return;
        } else {
            var currentTime  = new Date(),
                date = String(currentTime.getDate()) + '/' + String(currentTime.getMonth() + 1) + '/' +String(currentTime.getFullYear()),
                time = String(currentTime.getHours()) + ':' + String(currentTime.getMinutes()) + ':' + String(currentTime.getSeconds()),
                created_at = time + ' ' + date;
            thoughts.push({
                "subject":req.body.subject,
                "content":req.body.content,
                "created_at": created_at
            });
            res.redirect("/all");
        }    
    });
    app.get('/all', function(req, res) {
        res.render('all');
    });  
};