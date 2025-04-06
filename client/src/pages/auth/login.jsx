import CommonForm from "@/components/common/form ";
import { LoginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
    email: '',
    password: ''
}

function onSubmit(){}

function AuthLogin() {

    const [formData, setFormData] = useState(initialState)

    return <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-centre">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your Account</h1>
            <p className="mt-2">Don't have an Account?
                <Link
                    className="font-medium ml-2 text-primary hover:underline"
                    to="/auth/register"
                >
                    Register
                </Link>
            </p>
        </div>
        <CommonForm 
        formControls={LoginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
    </div>

}

export default AuthLogin;