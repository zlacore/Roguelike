import { Link } from "react-router-dom"


export const Nav = () => {
    return (
        <header>
            <nav>
                <Link to="/dungeon">Dungeon</Link>
                <Link to="/town">Town</Link>
                <Link to="/shop">Shop</Link>
            </nav>
        </header>
    )
}