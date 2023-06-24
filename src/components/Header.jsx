export function Header() {
    return (
        <header className="flex flex-row justify-between gap-3">
            <img src="/logo.svg" alt="logo"/>
            <ul className="flex space-x-12">
                <li className="text-slate-500">Home</li>
                <li className="text-slate-500">New</li>
                <li className="text-slate-500">Popular</li>
                <li className="text-slate-500">Trending</li>
                <li className="text-slate-500">Categories</li>
            </ul>
        </header>
    );
}