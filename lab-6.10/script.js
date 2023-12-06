function isStrongPassword(password) {

    if (password.length < 8) {
        return false;
    }
    if (password.indexOf("password") !== -1) {
        return false;
    }
    
    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (char >= "A" && char <= "Z") {
            return true;
        }
    }
    return false;
}
