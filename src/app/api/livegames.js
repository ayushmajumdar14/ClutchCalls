export default function Component() {
      return (
        <div className="flex flex-col bg-black min-h-screen">
          <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">Today's Games</h1>
          <div className="flex flex-col gap-2">
           <p className="text-white font-bold">February 13, 2024</p>
          </div>
          <main className="flex-1 py-4 lg:py-8">
            <div className="container grid gap-4 px-4 md:px-6">
              <LiveGames/>
              <div className="grid w-full grid-cols-6 items-stretch justify-center gap-4 md:grid-cols-6">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white ">BOS</h3>
                  <p className="text-sm text-white">Celtics</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">NYK</h3>
                  <p className="text-sm text-white">Knicks</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">LAL</h3>
                  <p className="text-sm text-white">Lakers</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">MIA</h3>
                  <p className="text-sm text-white">Heat</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">GSW</h3>
                  <p className="text-sm text-black">Warriors</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white">POR</h3>
                  <p className="text-sm text-black">Trail Blazers</p>
                </div>
              </div>
              <div className="grid w-full grid-cols-6 items-stretch justify-center gap-4 md:grid-cols-6">
                <div className="flex flex-col gap-1 text-white">
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Over Correct Calls</button>
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Under Correct Calls</button>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Over Incorrect Calls</button>
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Under Incorrect Calls</button>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Over Correct Calls</button>
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Under Correct Calls</button>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Over Incorrect Calls</button>
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Under Incorrect Calls</button>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Over Correct Calls</button>
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Under Correct Calls</button>
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Over Incorrect Calls</button>
                  <button className='bg-purple-600 text-white rounded-md px-3 py-2' size="sm">Under Incorrect Calls</button>
                </div>
              </div>
              <div className=" items-center space-y-4">
                <h3 className="font-bold items-center text-white">SELECED BETS</h3>
                <div className="grid w-full grid-cols-2 items-stretch justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-white">BOS @ NYK</h4>
                    <p className="text-sm text-white rounded-md px-3 py-2 bg-green-700">Over 200.5</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-white">LAL @ MIA</h4>
                    <p className="text-sm text-white rounded-md px-3 py-2 bg-rose-700">Under 210.5</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-white">GSW @ POR</h4>
                    <p className="text-sm text-white rounded-md px-3 py-2 bg-green-700">Over 220.5</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-white">NYK @ BOS</h4>
                    <p className="text-sm text-white rounded-md px-3 py-2 bg-rose-700">Under 190.5</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )
    }