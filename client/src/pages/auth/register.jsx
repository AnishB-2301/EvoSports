import { Link } from "react-router-dom";

function AuthRegister() {
    return <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-centre">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Create a new Account</h1>
            <p className="mt-2">Already has an account
                <Link
                    className="font-medium ml-2 text-primary hover:underline"
                    to="/auth/login"
                >
                    Login
                </Link>
            </p>
        </div>
    </div>

}

export default AuthRegister;