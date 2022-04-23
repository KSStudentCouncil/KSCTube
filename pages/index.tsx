import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="justify-cente mb-40 flex h-screen flex-col p-4 py-4 md:p-0">
      <div className="h-full grid-flow-row-dense grid-cols-1 md:mx-auto md:grid md:grid-cols-5">
        <div className="my-auto w-full px-2 sm:ml-20 sm:max-w-sm md:col-span-3">
          <div className="font-black">
            <p className="text-4xl">海城</p>
            <h3 className="text-5xl">部活紹介動画</h3>
          </div>
          <p className=" my-6 text-sm">
            海城に存在する、さまざまな部活の新入生向け部活紹介動画の閲覧用サイトです。
            利用するには、学校から配られた Microsoft
            アカウント、または生徒番号が必要になります。
            (生徒番号でログインする場合は、データが同期されません。)
          </p>
          <div className="hidden md:block">
            <Link href={'/login'}>
              <button className="rounded-sm bg-blue-500 py-3 px-5 font-bold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-blue-500/20">
                ログイン
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-2 my-auto ml-auto mr-10 max-w-md md:mr-0 md:ml-0 md:w-80">
          {/* 画像 */}
          <div className="h-full items-center justify-center ">
            <Image
              src={'/clubs.png'}
              width="800px"
              height="800px"
              className=" m-auto rounded-lg object-contain"
            />
          </div>
        </div>

        <div className="col-span-2 my-auto ml-10 block w-full max-w-sm sm:ml-20  md:hidden">
          <Link href={'/login'}>
            <button className="rounded-sm bg-blue-500 py-3 px-5 font-bold text-white shadow-md transition-all duration-200 ease-in-out hover:shadow-blue-500/20">
              ログインして視聴
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
