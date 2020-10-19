"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return (another !== undefined &&
            another.email === this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "fulano@gmail.com": new User("fulano@gmail.com", "fulano", "fulano123"),
    "ciclano@gmail.com": new User("ciclano@gmail.com", "ciclano", "ciclano123"),
    "beltrano@gmail.com": new User("beltrano@gmail.com", "beltrano", "beltrano123"),
    "teste@gmail.com": new User("teste@gmail.com", "teste", "teste123")
};
