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
      <div className="flex h-screen">
        <div className={`pb-30 m-auto`}>
          {/* <Link href={'/'}> */}
          <button
            className="group flex items-center py-2 pr-3 opacity-75"
            onClick={() => {
              back()
            }}
          >
            <Icon icon={'charm:chevron-left'} className={'h-6 w-6'} />
            <span>戻る</span>
          </button>
          {/* </Link> */}

          {/* ボックス */}
          {children}
        </div>
      </div>
    </div>
  )
}

export default SignIn
