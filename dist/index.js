const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, " hello!");
    });
}
function concatenation(firstWord, secondWord) {
    console.log(`${firstWord} ${secondWord}`);
}
//# sourceMappingURL=index.js.map