const member = require("../db/memberDAO");
const index = () => {
    console.log("service index connecting");
    return member;
}
module.exports = {index};