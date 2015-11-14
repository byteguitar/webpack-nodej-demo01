var express=require("express");

var path=require("path");
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
// Set view path
app.set('views', path.join(__dirname, 'views'));
app.listen(3333);/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-11-13
 * Time: 下午10:17
 * To change this template use File | Settings | File Templates.
 */
