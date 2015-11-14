/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-11-13
 * Time: 下午10:37
 * To change this template use File | Settings | File Templates.
 */

require("./style.css");  // 命令 --moudle-bind "css=style!css"
document.write("<h1 class='test'>Hello dd xxdsds </h1>");

var $=require("jquery");
$(".test").text("lala");
