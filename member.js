function skillMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        // Method
        getSkills: function () {
            return this.skills;
        }
    };
    return member;
}