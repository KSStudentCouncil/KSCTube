import Link from 'next/link'
import { Icon } from '@iconify/react'
import { ComponentProps, ReactElement } from 'react'
import { useRouter } from 'next/router'

type Props = {
  readonly children: ReactElement | ReactElement[]
  redirectTo?: string
} & ComponentProps<'div'>

const SignIn = ({ children, redirectTo, ...props }: Props) => {
  const { back } = useRouter()

  return (
    <div {...props} className="">
      <div className="flex h-screen">{children}</div>
    </div>
  )
}

export default SignIn
