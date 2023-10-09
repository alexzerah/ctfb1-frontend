import Link from 'next/link'
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Vous devez tout d'abord :
            <Link href={'/bruteforce/create'}>Créer votre code équipe</Link>

        </main>
    )
}
