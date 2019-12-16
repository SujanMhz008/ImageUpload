var Sequelize = require('sequelize');

var sequelize = new Sequelize('image','sujan','123456789',{
    host : 'localhost',
    dialect : 'mysql',
    logging : false
});
sequelize.authenticate()
.then(function(){
    console.log('Connected to database successfully');
})
.catch(function(err){
    console.log(err);
})

module.exports = {
    Sequelize,
    sequelize
}