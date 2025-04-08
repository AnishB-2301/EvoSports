import CommonForm from "@/components/common/form ";
import { LoginFormControls } from "@/config";
import { loginUser } from "@/store/auth_slice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSonner } from "sonner";

const initialState = {
    email: '',
    password: ''
}

function AuthLogin() {

    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch();
    const { toast } = useSonner();

    function onSubmit(event) {
        event.preventDefault();
    
        dispatch(loginUser(formData)).then((data) => {
          if (data?.payload?.success) {
            toast({
              title: data?.payload?.message,
            });
          } else {
            toast({
              title: data?.payload?.message,
              variant: "destructive",
            });
          }
        });
      }

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