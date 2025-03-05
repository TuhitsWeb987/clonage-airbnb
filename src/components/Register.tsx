import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../db/firebase";
import { Navigate } from "react-router-dom";
import { useState } from "react";


export default function Register() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignUp = () => {
        if(!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <section  className="w-full h-screen flex items-center justify-center">
            <form className="flex flex-col gap-6 bg-slate-50 p-12 rounded-lg shadow-lg w-[400px]">
                <h1 className="text-center text-slate-900 text-4xl mb-3">Inscription</h1>
                <label className="text-slate-900" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleEmailChange} className="h-10 border border-slate-900 rounded p-4"></input>
                <label className="text-slate-900" htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={handlePasswordChange} className="h-10 border border-slate-900 rounded p-4"></input>

                <button onClick={handleSignUp} type="submit" className="bg-slate-900 px-3 py-1.5 text-white my-3 rounded hover:bg-blue-700">Inscription</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vous avez déjà un compte ? <a onClick={() => navigate("/auth")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Connectez-vous</a>
                </p>
            </form>
        </section>    
    )
}
