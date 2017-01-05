let fn = () => {
    console.log(123);
};

fn();

class Student {
    hello () {
        console.log('456');
    }
}
let s = new Student();
s.hello();

class leo extends Student {

}
let l = new leo();
l.hello();







