import { SignUpBase } from '@/app/auth/SignUp'
import Simple from '@/components/layouts/AuthLayout/Simple'

const SignUpDemoSimple = () => {
    return (
        <Simple>
            <SignUpBase disableSubmit={true} signInUrl="/auth/sign-in-simple" />
        </Simple>
    )
}

export default SignUpDemoSimple
