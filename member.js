function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        greeting: function() {
            console.log('Hello, I am ' + this.name + '!');
        }
    };
    return member;
}