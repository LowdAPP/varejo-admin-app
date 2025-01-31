import { ResetPasswordBase } from '@/app/auth/ResetPassword'
import Split from '@/components/layouts/AuthLayout/Split'

const ResetPasswordDemoSplit = () => {
    return (
        <Split>
            <ResetPasswordBase signInUrl="/auth/sign-in-split" />
        </Split>
    )
}

export default ResetPasswordDemoSplit
