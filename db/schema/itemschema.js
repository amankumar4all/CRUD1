const mongoose=require("../common/connection");
var Schema=mongoose.Schema;
var ItemSchema=new Schema({'id':String,'name':String,'price':String,'url':String});
var ItemModel=mongoose.model('items',ItemSchema);
module.exports=ItemModel;