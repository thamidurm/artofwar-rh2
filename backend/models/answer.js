var mongoose = require('mongoose');
var Schema = mongoose.Schema;

answerSchema = new Schema( {

    answer:String,
    user : {type:Schema.Types.ObjectId, ref:'User'},
    time : Date
	
}),
Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;