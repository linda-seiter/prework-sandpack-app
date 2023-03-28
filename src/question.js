let questionId = new URLSearchParams(window.location.search).get("id");
if (!questionId) questionId = "1"; //default question
export const question = require(`./questions/${questionId}.js`).default;
export default question;
