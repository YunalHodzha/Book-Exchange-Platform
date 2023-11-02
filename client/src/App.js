import './App.css';

function App() {
  return (
    <div >
      <>
        {/*  Free CSS Templates from www.templatemo.com */}
        <div id="templatemo_container">
          <div id="templatemo_menu">
            <ul>
              <li>
                <a href="index.html" className="current">
                  Home
                </a>
              </li>
              <li>
                <a href="subpage.html">Search</a>
              </li>
              <li>
                <a href="subpage.html">Books</a>
              </li>
              <li>
                <a href="subpage.html">New Releases</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>{" "}
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
          {/* end of header */}
          <div id="templatemo_content">
            <div id="templatemo_content_left">
              <div className="templatemo_content_left_section">
                <h1>Categories</h1>
                <ul>
                  <li>
                    <a href="subpage.html">Donec accumsan urna</a>
                  </li>
                  <li>
                    <a href="subpage.html">Proin vulputate justo</a>
                  </li>
                  <li>
                    <a href="#">In sed risus ac feli</a>
                  </li>
                  <li>
                    <a href="#">Aliquam tristique dolor</a>
                  </li>
                  <li>
                    <a href="#">Maece nas metus</a>
                  </li>
                  <li>
                    <a href="#">Sed pellentesque placerat</a>
                  </li>
                  <li>
                    <a href="#">Suspen disse</a>
                  </li>
                  <li>
                    <a href="#">Maece nas metus</a>
                  </li>
                  <li>
                    <a href="#">In sed risus ac feli</a>
                  </li>
                </ul>
              </div>
              <div className="templatemo_content_left_section">
                <h1>Bestsellers</h1>
                <ul>
                  <li>
                    <a href="#">Vestibulum ullamcorper</a>
                  </li>
                  <li>
                    <a href="#">Maece nas metus</a>
                  </li>
                  <li>
                    <a href="#">In sed risus ac feli</a>
                  </li>
                  <li>
                    <a href="#">Praesent mattis varius</a>
                  </li>
                  <li>
                    <a href="#">Maece nas metus</a>
                  </li>
                  <li>
                    <a href="#">In sed risus ac feli</a>
                  </li>
                  <li>
                    <a href="#">Flash Templates</a>
                  </li>
                  <li>
                    <a href="#">CSS Templates</a>
                  </li>
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="http://www.photovaco.com" target="_parent">
                      Free Photos
                    </a>
                  </li>
                </ul>
              </div>
              <div className="templatemo_content_left_section">
                <a href="http://validator.w3.org/check?uri=referer">
                  <img
                    style={{ border: 0, width: 88, height: 31 }}
                    src="http://www.w3.org/Icons/valid-xhtml10"
                    alt="Valid XHTML 1.0 Transitional"
                    width={88}
                    height={31}
                    vspace={8}
                    border={0}
                  />
                </a>
                <a href="http://jigsaw.w3.org/css-validator/check/referer">
                  <img
                    style={{ border: 0, width: 88, height: 31 }}
                    src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                    alt="Valid CSS!"
                    vspace={8}
                    border={0}
                  />
                </a>
              </div>
            </div>{" "}
            {/* end of content left */}
            <div id="templatemo_content_right">
              <div className="templatemo_product_box">
                <h1>
                  Photography <span>(by Best Author)</span>
                </h1>
                <img src="images/templatemo_image_01.jpg" alt="image" />
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
              <div className="cleaner_with_width">&nbsp;</div>
              <div className="templatemo_product_box">
                <h1>
                  Cooking <span>(by New Author)</span>
                </h1>
                <img src="images/templatemo_image_02.jpg" alt="image" />
                <div className="product_info">
                  <p>Aliquam a dui, ac magna quis est eleifend dictum.</p>
                  <h3>$35</h3>
                  <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                  </div>
                  <div className="detail_button">
                    <a href="subpage.html">Detail</a>
                  </div>
                </div>
                <div className="cleaner">&nbsp;</div>
              </div>
              <div className="cleaner_with_height">&nbsp;</div>
              <div className="templatemo_product_box">
                <h1>
                  Gardening <span>(by Famous Author)</span>
                </h1>
                <img src="images/templatemo_image_03.jpg" alt="image" />
                <div className="product_info">
                  <p>Ut fringilla enim sed turpis. Sed justo dolor, convallis at.</p>
                  <h3>$65</h3>
                  <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                  </div>
                  <div className="detail_button">
                    <a href="subpage.html">Detail</a>
                  </div>
                </div>
                <div className="cleaner">&nbsp;</div>
              </div>
              <div className="cleaner_with_width">&nbsp;</div>
              <div className="templatemo_product_box">
                <h1>
                  Sushi Book <span>(by Japanese Name)</span>
                </h1>
                <img src="images/templatemo_image_04.jpg" alt="image" />
                <div className="product_info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  <h3>$45</h3>
                  <div className="buy_now_button">
                    <a href="subpage.html">Buy Now</a>
                  </div>
                  <div className="detail_button">
                    <a href="subpage.html">Detail</a>
                  </div>
                </div>
                <div className="cleaner">&nbsp;</div>
              </div>
              <div className="cleaner_with_height">&nbsp;</div>
              <a href="subpage.html">
                <img src="images/templatemo_ads.jpg" alt="ads" />
              </a>
            </div>{" "}
            {/* end of content right */}
            <div className="cleaner_with_height">&nbsp;</div>
          </div>{" "}
          {/* end of content */}
          <div id="templatemo_footer">
            <a href="subpage.html">Home</a> | <a href="subpage.html">Search</a> |{" "}
            <a href="subpage.html">Books</a> | <a href="#">New Releases</a> |{" "}
            <a href="#">FAQs</a> | <a href="#">Contact Us</a>
            <br />
            Copyright © 2024{" "}
            <a href="#">
              <strong>Your Company Name</strong>
            </a>
            {/* Credit: www.templatemo.com */}{" "}
          </div>
          {/* end of footer */}
          {/*  Free CSS Template www.templatemo.com */}
        </div>{" "}
        {/* end of container */}
        {/* templatemo 086 book store */}
        {/* 
Book Store Template 
http://www.templatemo.com/preview/templatemo_086_book_store 
*/}
      </>

    </div>
  );
}

export default App;
