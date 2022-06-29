function PasswordGen() {

    let Passwordlen = 16
    // let Char = `1]24e5~}69Q0>WERIO7LcJHgFDS8TAZXCVBNMqazxswUvYfrbGtyhnmPjuiklop!3@#$%^&*()_-+={\K|'";[d:.,</?`;
    let Char = `1234567890abcdefghijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ!@$$%^&*()_-+={}[];':><,./|`;
    var Password = ""

    for (let index = 0; index < Passwordlen; index++) {
        let min = 0
        let max = 87
        var Randomnum = Math.round(min + (max - min) * Math.random())
        RandomChar = Char[Randomnum]
        var Password = Password + RandomChar

    }
    document.getElementById(`text`).value = Password
    
}

function Clear() {
    document.getElementById(`text`).value = ""
    
    
}
