import React from "react";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import { IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import Lowerheader from "./Lowerheader";
function Header() {
  return (
    <>
      <>
        <section className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazone logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>

              <div>
                {/* deliverd */}
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className={classes.search}>
            {/* search */}

            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            {/* icon */}
            <span>
              <IoMdSearch size={25} />
            </span>
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* three component */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & lists</span>
              </div>
            </a>

            {/* order */}
            <a href="">
              <p>returns</p>
              <span>& order</span>
            </a>

            <a href="" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </section>
        <Lowerheader />
      </>
    </>
  );
}

export default Header;
