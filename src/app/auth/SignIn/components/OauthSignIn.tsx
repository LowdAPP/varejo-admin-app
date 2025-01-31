import Button from '@/components/ui/Button'
import { useAuth } from '@/auth'
import {
    apiGoogleOauthSignIn,
    apiGithubOauthSignIn,
} from '@/services/OAuthServices'
import Image from 'next/image'
import type { User } from '@/@types/auth'

type OauthSignInProps = {
    setMessage?: (message: string) => void
    disableSubmit?: boolean
}

const OauthSignIn = ({ setMessage, disableSubmit }: OauthSignInProps) => {
    const { oAuthSignIn } = useAuth()

    const handleGoogleSignIn = async () => {
        if (!disableSubmit) {
            oAuthSignIn(async ({ redirect, onSignIn }) => {
                try {
                    const resp = await apiGoogleOauthSignIn()
                    if (resp) {
                        const { token, user } = resp
                        onSignIn({ accessToken: token }, user)
                        redirect()
                    }
                } catch (error) {
                    setMessage?.((error as string)?.toString() || '')
                }
            })
        }
    }

    const handleGithubSignIn = async () => {
        if (!disableSubmit) {
            oAuthSignIn(async ({ 
                redirect, 
                onSignIn 
            }: { 
                redirect: () => void
                onSignIn: (token: { accessToken: string }, user: User) => void 
            }) => {
                try {
                    const resp = await apiGithubOauthSignIn()
                    if (resp) {
                        const { token, user } = resp
                        onSignIn({ accessToken: token }, user)
                        redirect()
                    }
                } catch (error) {
                    setMessage?.((error as string)?.toString() || '')
                }
            })
        }
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                className="flex-1"
                type="button"
                onClick={handleGoogleSignIn}
            >
                <div className="flex items-center justify-center gap-2">
                    <Image
                        width={25}
                        height={25}
                        src="/img/others/google.png"
                        alt="Google sign in"
                    />
                    <span>Google</span>
                </div>
            </Button>
            <Button
                className="flex-1"
                type="button"
                onClick={handleGithubSignIn}
            >
                <div className="flex items-center justify-center gap-2">
                    <Image
                        width={25}
                        height={25}
                        src="/img/others/github.png"
                        alt="Github sign in"
                    />
                    <span>Github</span>
                </div>
            </Button>
        </div>
    )
}

export default OauthSignIn
