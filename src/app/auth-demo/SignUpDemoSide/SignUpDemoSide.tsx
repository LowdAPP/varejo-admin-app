import { SignUpBase } from '@/app/auth/SignUp'
import Side from '@/components/layouts/AuthLayout/Side'

const SignUpDemoSide = () => {
    return (
        <Side>
            <SignUpBase disableSubmit={true} signInUrl="/auth/sign-in-side" />
        </Side>
    )
}

export default SignUpDemoSide
