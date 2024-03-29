import React, { useEffect, useRef, useState } from "react";
import "../assets/css/Page5.css";
import { UseInterval } from "../assets/utils";
import page5Object1Img from "../assets/img/p5-object1-img.png";
import page5Object2VideoImg from "../assets/img/p5-object2-video-img2.jpeg";
import page5Object2MainImg from "../assets/img/page5-object2-mainImg.png";
import page5Object3BgImg from "../assets/img/page5-object3-bg-img.png";

function Page5(props) {
  const [page5Start, setPage5Start] = useState("");
  const [page5Object2Start, setPage5Object2Start] = useState("");
  const [page5Object3Start, setPage5Object3Start] = useState("");
  const [page5End, setPage5End] = useState("");
  const [page5Object2Product, setPage5Object2Product] = useState("");

  /**test */
  const page5Ref = useRef(null);
  const page5Object2Ref = useRef(null);
  const page5Object3Ref = useRef(null);
  const page5Object4Ref = useRef(null);
  const menuBar = new Array(9).fill("");

  const onScroll = () => {
    if (page5Ref.current?.getBoundingClientRect().top > 0) {
      setPage5Start("");
    } else {
      setPage5Start("active");
    }

    if (
      page5Object2Ref.current?.getBoundingClientRect().top - 200 > 0 ||
      page5Object3Ref.current?.getBoundingClientRect().top - 200 < 0
    ) {
      setPage5Object2Start("");
    } else {
      setPage5Object2Start("page2Active");
    }

    if (
      page5Object3Ref.current?.getBoundingClientRect().top - 200 > 0 ||
      page5Object3Ref.current?.getBoundingClientRect().bottom < 0
    ) {
      setPage5Object3Start("");
    } else {
      setPage5Object3Start("page3Active");
    }
    if (page5Object3Ref.current?.getBoundingClientRect().bottom > 0) {
      setPage5End("");
    } else {
      setPage5End("end");
    }
  };

  const page5Object2ProductHandle = () => {
    page5Object2Product === ""
      ? setPage5Object2Product("active")
      : setPage5Object2Product("");
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`p5-container ${page5Start} ${page5Object2Start} ${page5End}`}
      ref={page5Ref}
    >
      <div
        className="p5-object3-bgColor"
        style={{ opacity: page5Object3Start === "" ? 0 : 1 }}
      ></div>
      <div className={`p5-bgLight ${page5Start}`}></div>
      <div className="p5-object1">
        <div className={`p5-object1-circle ${page5Start}`}></div>
        <img
          className={`p5-object1-img ${page5Start}`}
          src={page5Object1Img}
          alt="object1-img"
        />
        <ul className={`p5-object1-topBar ${page5Start}`}>
          <li>ZEROART</li>
          <li>home</li>
          <li>about</li>
          <li>products</li>
          <li>contact</li>

          <li className={`p5-object1-menu ${page5Start}`}>
            {menuBar.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className={`p5-object1-menu-item ${page5Start}`}
                ></div>
              );
            })}
          </li>
        </ul>
        <div className={`p5-object1-title ${page5Start}`}>
          <h2>
            Black
            <br /> and White <br />
            <span>Art</span>
          </h2>
        </div>
        <div className={`p5-object1-text ${page5Start}`}>
          <p>Lorem ipsum dolor sit,</p>
          <p>amet consectetur.</p>
          <p> Necessitatibus enim </p>
          <p>maxime quod molestias.</p>
        </div>
      </div>
      <div className="p5-object2" ref={page5Object2Ref}>
        <div className={`p5-object2-border ${page5Object2Start}`}></div>
        <div className="p5-object2-bg">
          <div>PRO</div>
          <div>2024</div>
        </div>
        <div className={`p5-object2-topBar ${page5Object2Start}`}>
          <ul className="p5-object2-topBar-left">
            <li>
              <span>P</span>ro.
            </li>
            <li>Product</li>
            <li>Rank</li>
            <li>Contact</li>
          </ul>
          <ul className="p5-object2-topBar-right">
            <li>Login</li>
            <li>W</li>
            <li>B</li>
          </ul>
        </div>
        <div className={`p2-object2-product ${page5Object2Product}`}>
          <img
            src={page5Object2MainImg}
            alt="page5Object2MainImgs"
            onClick={page5Object2ProductHandle}
          />
          <p>Click</p>
          <div className="p2-object2-product-nameBox">
            <div className="p2-object2-product-nameBox-line1"></div>
            <div className="p2-object2-product-nameBox-line2"></div>
            <div className="p2-object2-product-nameBox-name">
              <div>
                <span></span> Air ZERO Helmet v1
              </div>
            </div>
          </div>
          <div className="p2-object2-product-priceBox">
            <div className="p2-object2-product-priceBox-line1"></div>
            <div className="p2-object2-product-priceBox-line2"></div>
            <div className="p2-object2-product-priceBox-price">
              <div>
                <span></span> $ 500
              </div>
            </div>
          </div>
          <div className="p2-object2-product-DescriptionBox">
            <div className="p2-object2-product-DescriptionBox-line1"></div>
            <div className="p2-object2-product-DescriptionBox-line2"></div>
            <div className="p2-object2-product-DescriptionBox-Description">
              <ul>
                <li>
                  <span></span> Zero v1 is
                </li>
                <li>light as air using titanium and</li>
                <li> has the added rigidity of </li>
                <li>Vibranium.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="p2-object2-text1">
          <p>PRO</p>
          <p>Samsang</p>
          <p>010 - 8006 - 5105</p>
        </div>
        <div className="p2-object2-text2">
          <p>Lorem.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum dolor.</p>
        </div>

        <ul className="p2-object2-text3">
          <li>
            Lorem ipsum dolor, sit amet consectetur adipy <br />
            sicing elit.
          </li>
          <li>01</li>
          <li>
            <span>H</span>
            <span>Y</span>
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            consectetur.
          </li>
        </ul>
        <div className="p2-object2-numLine">
          <div>27</div>
          <div></div>
          <div>28</div>
        </div>
        <div className="p2-object2-title">
          <h2>
            PRO. WORKS <span>TM</span>
          </h2>
          <h3>
            CRAFTED CREATIONS - <span>C</span>2020
          </h3>
          <a className="p2-object2-title-logo" href="#">
            <i className="fa-brands fa-github"></i>
          </a>
          <a className="p2-object2-title-logo" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <p>
            Lorem, <br />
            ipsum dolor. true is
          </p>
        </div>
        <div className="p2-object2-selectBtnBox">
          <button id="p2-object2-selectBtn-1"></button>
          <button id="p2-object2-selectBtn-2"></button>
          <button id="p2-object2-selectBtn-3"></button>
          <button id="p2-object2-selectBtn-4"></button>
        </div>
        <div className="p2-object2-videoWrapper">
          <div className="p2-object2-videoBox">
            <img src={page5Object2VideoImg} alt="page5Object2VideoImg" />
            <p>View</p>
            <p>more</p>
          </div>
        </div>
      </div>
      <div className="p5-object3" ref={page5Object3Ref}>
        <img
          className={`p5-object3-bg ${page5Object3Start}`}
          src={page5Object3BgImg}
          alt="page5Object3BgImg"
        />
        <div className={`p5-object3-start ${page5Object3Start}`}>
          <div className="p5-object3-TitleBox">
            <div className="p5-object3-Title-top">
              <p>NEONLIT</p>
            </div>
            <div className="p5-object3-Title-bottom">
              <p>NEONLIT</p>
            </div>
          </div>
          <div className="p5-object3-text">
            <p>DISCOVER DIGITAL ART AND COLLECT DESIGN</p>
          </div>
          <div className="p5-object3-lets">
            <a href="#">
              LET'S ORBIT
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="p5-object3-tobBar">
            <div className="p5-object3-tobBar-logo">NEO</div>
            <ul>
              <li>home</li>
              <li>about</li>
              <li>token</li>
              <li>loadmap</li>
            </ul>

            <div className="p5-object3-tobBar-join">
              <a href="#">
                <ion-icon name="globe-outline"></ion-icon>
              </a>
              join us
            </div>
          </div>
          <ul className="p5-object3-BottomBar">
            <li>
              <h2>27K+</h2>
              <p>ARTISTS</p>
            </li>
            <li>
              <h2>876K+</h2>
              <p>ARTWORK</p>
            </li>
            <li>
              <h2>20K+</h2>
              <p>AUCTION</p>
            </li>
            <li>
              <span></span>
              <p>PLAY VIDEO</p>
            </li>
            <li>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="p5-object4">
        <div className="p5-object4-text1">
          <h2>Clones</h2>
        </div>
        <div className="p5-object4-text2">
          <h2>Clones</h2>
        </div>
      </div>
    </div>
  );
}

export default Page5;
