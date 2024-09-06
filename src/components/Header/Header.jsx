import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import classes from "./Header.module.css";
import { IoMdSearch } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import Lowerheader from "./Lowerheader";
import { Link } from "react-router-dom";
import { DataContext } from "../Dataprovider/Dataprovider";
function Header() {
  const [{ basket }, dispach] = useContext(DataContext);

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazone logo"
              />
            </Link>
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
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1024px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* three component */}
            <Link to="">
              <div>
                <p>Sign In</p>
                <span>Account & lists</span>
              </div>
            </Link>

            {/* order */}
            <Link to="/order">
              <p>returns</p>
              <span>& order</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </section>
        <Lowerheader />
      </section>
    </>
  );
}

export default Header;
