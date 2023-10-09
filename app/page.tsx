import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-bold text-center">Cyber management scool CTF B1</h1>
        16 selects html avec 16 possibilites de choix
        <div className="flex flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
            <div className="flex flex-col items-center justify-center w-1/2 p-4">

                <select className="mt-4">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 p-4">

                <select className="mt-4">
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
        </div>
    </main>
  )
}
