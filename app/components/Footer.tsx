import Link from 'next/link';
const routes = [
    { label: 'Home', route: '/' },
    { label: 'Contact', route: '/contact' },
    { label: 'Sign in', route: '/signIn' }
]

export const Footer = () => {

    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link className="text-zinc-900 hover:text-zinc-700" href={"/"}>
                    <h3 className="text-2xl font-bold">LOGO</h3>
                </Link>
                <nav className={"md:flex space-x-4"}>
                    {routes.map((route) => (
                        <Link key={route.route} className="text-zinc-900 hover:text-zinc-700" href={route.route}>
                            {route.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}