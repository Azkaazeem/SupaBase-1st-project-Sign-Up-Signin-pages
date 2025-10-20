import supaBase from "./config.js"

console.log(supaBase);

let regform = document.getElementById('regform');
let sfullName = document.getElementById('s-full-name');
let sEmail = document.getElementById('s-email');
let spassword = document.getElementById('s-password');
let sPhoneNo = document.getElementById('s-phone-no');

async function signUp(e) {
    e.preventDefault()
    try {

        if (!sEmail.value) {
            alert("Plzzzz Enter Your Email.......");
            return
        }

        if (!spassword.value) {
            alert("Plzzzz Enter Your Password.......");
            return
        }

        const { data, error } = await supaBase.auth.signUp(
            {
                email: sEmail.value,
                password: spassword.value,
                options: {
                    data: {
                        first_name: sfullName.value,
                        PhoneNo: sPhoneNo.value,
                    }
                }
            }
        )

        if (error) {
            console.log(error);
        }
        else {
            location.href = "wel.html";
        }

    } catch (err) {
        console.log(err);
    }
}

regform && regform.addEventListener("submit", signUp);


// ==================================================LOGIN PAGE==================================================

let lSignin = document.getElementById('l-form');
let lEmail = document.getElementById('l-email');
let lpassword = document.getElementById('l-password');

async function SignIn(e) {
    e.preventDefault()
    try {

        if (!lEmail.value) {
            alert("Plzzzz Enter Your Email.......");
            return
        }

        if (!lpassword.value) {
            alert("Plzzzz Enter Your Password.......");
            return
        }

        const { data, error } = await supaBase.auth.signInWithPassword({
            email: lEmail.value,
            password: lpassword.value,
        })

        if (error) {
            console.log(error);
        }
        else {
            location.href = "wel.html";
        }

    } catch (err) {
        console.log(err);
    }
}

lSignin && lSignin.addEventListener("submit", SignIn);

