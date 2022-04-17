import { Menu, Transition } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { userInfo } from 'os'
import { ComponentProps, Fragment } from 'react'
import { useUser } from '../../../hooks/useUser'

import Avatar from '../Avatar'

type Props = {
  user: User
} & ComponentProps<'div'>

const UserMenu = ({ user, ...props }: Props) => {
  const { signOut } = useUser()
  const { push } = useRouter()

  return (
    <div {...props}>
      <Menu>
        <Menu.Button
          className={
            'mt-1 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          }
        >
          <div className="m-auto rounded-md p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            {user ? (
              <Avatar name={user.uid} />
            ) : (
              <Icon icon="ri:loader-5-fill" className="animate-spin" />
            )}
          </div>
        </Menu.Button>
        <Menu.Items>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-700 dark:bg-slate-800">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      設定
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      仮
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      仮
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-blue-500 text-white'
                          : 'text-gray-900 dark:text-white'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      ) : (
                        <div className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      仮
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active
                          ? 'bg-red-500 text-white'
                          : 'text-red-600 dark:text-red-400'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => {
                        signOut()
                        push('/login')
                      }}
                    >
                      {active ? (
                        <Icon
                          icon="ic:round-logout"
                          className="mr-2 h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      ) : (
                        <Icon
                          icon="ic:round-logout"
                          className="mr-2 h-5 w-5 text-red-400"
                          aria-hidden="true"
                        />
                      )}
                      ログアウト
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default UserMenu
