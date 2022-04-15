import BAvatar from 'boring-avatars'
import { ComponentProps } from 'react'

type Props = {
  size?: number
  square?: boolean
  name?: string
  variant?: 'marble' | 'beam' | 'pixel' | 'sunset' | 'ring' | 'bauhaus'
  colors?: string[]
} & ComponentProps<'div'>

const Avatar = ({ ...props }: Props) => {
  return (
    //   アホなのでここでProps2回渡してるけどいい方法知らない。もっとマシな方法を知っている人がいたら生徒会室に殴り込んできてください。
    <div {...props}>
      <BAvatar
        size={24}
        square={false}
        colors={['#5EEAD4', '#22D3EE', '#3B82F6', '#0284C7', '#1E293B']}
        variant={'beam'}
        {...props}
      />
    </div>
  )
}

export default Avatar
