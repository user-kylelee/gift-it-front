import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__col">
          <div className="footer__col-heading">REGISTRY</div>
          <ul>
            <li>
              <a href="#">Find Registry</a>
            </li>
            <li>
              <a href="#">Create Registry</a>
            </li>
            <li>
              <a href="#">Create Registry</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__col-heading">ABOUT US</div>
          <ul>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Notice</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__col-heading">GUIDES </div>
          <ul>
            <li>
              <a href="#">Baby Shower</a>
            </li>
            <li>
              <a href="#">Birthday</a>
            </li>
            <li>
              <a href="#">Wedding</a>
            </li>
            <li>
              <a href="#">Graduation</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <div className="footer__col-heading"> SUPPORT </div>
          <ul>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>{" "}
            <li>
              <a href="#">Return & Exchange</a>
            </li>
          </ul>
        </div>

        <div className="footer__col-2">
          <div className="footer__row">
            <div className="col-heading">CONNECT WITH US</div>
            <ul>
              <li>
                <a href="http://google.com">
                  <FaTwitterSquare className="footer__social-icons" />
                </a>
              </li>
              <li>
                <FaInstagram className="footer__social-icons" />
              </li>
              <li>
                <FaFacebookSquare className="footer__social-icons" />
              </li>
              <li>
                <FaYoutubeSquare className="footer__social-icons" />
              </li>
            </ul>
          </div>
          <div className="footer__row">
            <div className="footer__copyright">&copy; 2022 Giftit, Inc</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
