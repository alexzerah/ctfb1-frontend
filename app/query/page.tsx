'use client';

const HOST = "http://localhost:3010";

import {useEffect, useState} from "react";
import {handleFetch} from "next/dist/experimental/testmode/proxy/fetch-api";

export default function Home() {

    const [message, setMessage] = useState('')

    useEffect(() => {
    }, [])

    const handleCode = () => {

        const code = document.querySelectorAll<HTMLSelectElement>('#choices select');
        let arr: string[] = [];
        code.forEach((item: HTMLSelectElement) => {
            arr.push(item.value);
        })
        console.log(arr);

        fetch(`${HOST}/api/bruteforce/guess`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "code": arr
            })
        })
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => setMessage(error.toString()))
    }

    const handleFetch = () => {
        fetch(`${HOST}/api/bruteforce/guess`)
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => setMessage(error.toString()))
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-6xl font-bold text-center">Récupérez la bonne ressource</h1>
            <select className="p-4 text-cyan-800">
                <option value="1">Equipe 1</option>
                <option value="2">Equipe 2</option>
                <option value="3">Equipe 3</option>
            </select>
            <div className="flex flex-col flex-wrap justify-center max-w-4xl mt-6 sm:w-full">
                <div id="choices" className="flex flex-row items-center w-1/2 p-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div className="flex flex-col items-center justify-center w-1/2 p-4">
                            <select key={index} className="bg-blue-700 p-2.5 text-2xl mt-4">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    ))}

                </div>
                <button onClick={() => {handleCode()}} className="bg-blue-700 p-4 ">Tester</button>
                <p>{message}</p>
            </div>
        </main>
    )
}
