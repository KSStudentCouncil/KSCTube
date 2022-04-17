import { User } from 'firebase/auth'
import CommonHeader from '../common/Header'

type Props = {
  user: User
}

const Header = ({ user }: Props) => {
  return <CommonHeader title={'海城部活紹介動画'} user={user} />
}

export default Header
