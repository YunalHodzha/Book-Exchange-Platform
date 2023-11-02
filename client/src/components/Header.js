import { NavBar } from "./NavBar"

export const Header = () => {
    return (
        <>
            <NavBar />

            {/* end of menu */}
            <div id="templatemo_header">
                <div id="templatemo_special_offers">
                    <p>
                        <span>25%</span> discounts for purchase over $80
                    </p>
                    <a href="subpage.html" style={{ marginLeft: 50 }}>
                        Read more...
                    </a>
                </div>
                <div id="templatemo_new_books">
                    <ul>
                        <li>Suspen disse</li>
                        <li>Maece nas metus</li>
                        <li>In sed risus ac feli</li>
                    </ul>
                    <a href="subpage.html" style={{ marginLeft: 50 }}>
                        Read more...
                    </a>
                </div>
            </div>{" "}
        </>)
}