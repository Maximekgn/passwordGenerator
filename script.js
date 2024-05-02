function generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) 
{
    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChar = "0123456789";
    const symbolsChar = "!@#$%^&*()_+,./:;<=>+-";

    let allowedChar = "";
    let password = "";

    allowedChar += includeLowerCase ? lowerCaseChar : "";
    allowedChar += includeUpperCase ? upperCaseChar : "";
    allowedChar += includeNumbers ? numbersChar : "";
    allowedChar += includeSymbols ? symbolsChar : "";

    for (let i = 0; i < passwordLength; i++) {
        let index = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[index];
    }

    return password;
}

const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", ()=>
{
    const passwordLength = document.getElementById("passwordLength").value ;
    const includeLowerCase = true;
    const includeUpperCase = true;
    const includeNumbers = true;
    const includeSymbols = true;
    
    password.innerText = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
})