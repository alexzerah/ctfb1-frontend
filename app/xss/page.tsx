export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold text-center">Créer votre code équipe</h1>
            <p>Vous devez ... 16 selects html avec 16 possibilites de choix</p>
            <div className="flex flex-col flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
                <div className="flex flex-row items-center w-1/2 p-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-1/2 p-4">
                            <select key={index} className="bg-blue-700 p-2.5 text-2xl mt-4">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                {/* Ajoutez plus d'options ici si nécessaire */}
                            </select>
                        </div>
                    ))}

                </div>
                <button className="bg-blue-700 p-4 ">Valider</button>
            </div>
        </main>
    )
}
