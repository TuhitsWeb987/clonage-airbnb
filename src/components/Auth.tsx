import { useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function Auth() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSignIn = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            
            const data = await response.json();
            if (response.ok) {
                console.log(data.message);
                
                // setMessage(data.message);
              } else {
                console.log(data.error);
                // setError(data.error);
              }
        } catch (err) {
            console.log(err);
            // setError('Error connecting to server');
        }
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
                <h1 className="text-center text-slate-900 text-4xl mb-3">Connexion</h1>
                <label className="text-slate-900" htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleEmailChange} className="h-10 border border-slate-900 rounded p-4"></input>
                <label className="text-slate-900" htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" onChange={handlePasswordChange} className="h-10 border border-slate-900 rounded p-4"></input>

                <button onClick={handleSignIn} type="submit" className="bg-slate-900 px-3 py-1.5 text-white my-3 rounded hover:bg-blue-700">Connexion</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Vous n'êtes pas encore inscrit ? <a onClick={() => navigate("/register")} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Inscrivez-vous</a>
                </p>
            </form>
        </section> 
    )
}
