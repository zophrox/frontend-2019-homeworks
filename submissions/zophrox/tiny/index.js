var Being = function(kind, who, legs, hands, name, gender, say, friend ){
            this.kind = kind;
            this.who = who;
            this.legs = legs;
            this.hands = hands;
            this.name = name;
            this.gender = gender;
            this.say = say;
            this.friend = friend;
            
};

var dog = new Being('animal', 'dog', '4', '0', 'Rex', 'male', 'woof-woof!', 'Mary, Jon'); 

var cat = new Being('animal', 'cat', '4', '0', 'Lisa', 'female', 'meow!'); 

var woman = new Being('human', 'woman', '2', '2', 'Mary', 'female', 'Hello Jon!', 'Jon, Rex');
           
var man = new Being('human', 'man', '2', '2', 'Jon', 'female', 'Hello Mary!', 'Mary, Rex');

var  inhabitantes = [dog, cat, woman, man];

inhabitantes.forEach(function(element){
    var personArr = [element.kind, element.who, element.legs, element.hands, element.name, element.gender, element.say];
    var personStr = "";
    personStr = personArr.join(";");
    personStr += (element.friend !== undefined) ?  ("; " + element.friend): "";

    print(personStr);
});
