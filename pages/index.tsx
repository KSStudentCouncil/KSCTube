import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col  justify-center py-2 ">
      <div className="flex">
        {/* <div>
          {user ? (
            <div className="flex items-center p-2">
              <Avatar name={user.uid} className={'pr-2'} />
              <div>{user.displayName}</div>
            </div>
          ) : (
            <></>
          )}
        </div>*/}
        <div className="ml-20 w-full">
          <div className="font-black">
            <p className="text-4xl">海城</p>
            <h3 className="text-5xl">部活紹介動画</h3>
          </div>
          <p className=" my-6 max-w-sm text-sm">
            海城に存在する、さまざまな部活の新入生向け部活紹介動画の閲覧用サイトです。
            利用するには、学校から配られた Microsoft アカウント
            (12340123@stu.kaijo.ed.jp のような) が必要になります。
            自分のアカウントやパスワードがわからない場合は、担任の先生などに直接聞いてください。
          </p>

          <Link href={'/login'}>
            <button className="rounded-sm bg-blue-500 py-3 px-5 font-bold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-blue-500/20">
              ログイン
            </button>
          </Link>
        </div>
        <div className="my-auto mr-20 rotate-6 -skew-y-3 skew-x-3  transition-transform duration-500 ease-in-out hover:rotate-0 hover:skew-x-0 hover:skew-y-0">
          {/* 画像 */}
          <div className="my-auto items-center justify-center ">
            <Image
              src={
                'https://unsplash.com/photos/iKdQCIiSMlQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjUwNjM3MjQ3&force=true'
              }
              width="640px"
              height="420px"
              className="m-auto rounded-lg object-cover shadow-2xl shadow-gray-500/50 saturate-50"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
