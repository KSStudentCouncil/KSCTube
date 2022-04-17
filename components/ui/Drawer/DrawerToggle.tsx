import { ComponentProps, useContext } from 'react'
import ButtonItem from '../../common/ButtonItem'
import { PlayerContext } from '../../context/player'

type Props = {} & ComponentProps<'button'>

const DrawerToggle = ({ ...props }: Props) => {
  const { toggleDrawer } = useContext(PlayerContext)

  return (
    <ButtonItem
      icon="charm:menu-hamburger"
      onClick={() => {
        toggleDrawer()
      }}
      {...props}
    />
  )
}

export default DrawerToggle
