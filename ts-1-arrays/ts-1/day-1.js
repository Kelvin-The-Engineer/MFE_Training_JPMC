var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var FirstUser = {
        name: "Mike Tucker",
        age: 50,
        isLoggedIn: false,
    };
    var SecondUser = {
        name: "Angelica Stard",
        age: 50,
        isLoggedIn: false
    };
    console.log(FirstUser, SecondUser);
    console.log("".concat(SecondUser.name, " ").concat(SecondUser.age));
    var users = [FirstUser, SecondUser];
    console.log(users[0]);
    console.log("".concat(users[1].name));
    var user3 = __assign(__assign({}, FirstUser), { age: 30 });
    var name_1 = user3.name, isLoggedIn = user3.isLoggedIn;
    console.log('-->', name_1, isLoggedIn);
}
