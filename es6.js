/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 15-11-13
 * Time: 下午9:13
 * To change this template use File | Settings | File Templates.
 */
function letTest() {
    let x = 31;
    if (true) {
        let x = 71;  // different variable
        console.log(x);  // 71
    }
    console.log(x);  // 31
}

letTest();

