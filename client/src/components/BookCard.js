export const BookCard = () => {
    return (<>
        <div className="product_box">
            <h1>
                Photography <span>(by Best Author)</span>
            </h1>
            <img src="images/image_01.jpg" alt="image" />
            <div className="product_info">
                <p>Etiam luctus. Quisque facilisis suscipit elit. Curabitur...</p>
                <h3>$55</h3>
                <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                </div>
                <div className="detail_button">
                    <a href="subpage.html">Detail</a>
                </div>
            </div>
            <div className="cleaner">&nbsp;</div>
        </div>
        
    </>)
}