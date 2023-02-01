import React from "react";
import "./Contact.scss";
import {
  CiDeliveryTruck,
  CiCreditCard1,
  CiSettings,
  CiTimer,
  CiUser,
  CiMail,
  CiPhone,
} from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

import { BsBoxSeam } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="faq">
        <div className="faq__title">Frequently Asked Questions</div>
        <div className="faq__elements">
          <div className="category">
            <div className="category__icon">
              <CiTimer />
            </div>
            <div className="category__name">Order Status</div>
          </div>
          <div className="category">
            <div className="category__icon">
              <CiDeliveryTruck />
            </div>
            <div className="category__name">Shipping & Returns</div>
          </div>
          <div className="category">
            <div className="category__icon">
              <CiCreditCard1 />
            </div>
            <div className="category__name">Payment & Promos</div>
          </div>
          <div className="category">
            <div className="category__icon">
              <CiUser />
            </div>
            <div className="category__name">Account</div>
          </div>
          <div className="category">
            <div className="category__icon">
              <CiSettings />
            </div>
            <div className="category__name">Technical Issues</div>
          </div>
          <div className="category">
            <div className="category__icon">
              <BsBoxSeam />
            </div>
            <div className="category__name">Products</div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact__title">Contact Us</div>
        <div className="contact__elements">
          <div className="category">
            <div className="category__icon">
              <CiMail />
            </div>
            <div className="category__btn">EMAIL US</div>
            <div className="category__desc">
              Our team will get back to you in no time
            </div>
          </div>
          <div className="category">
            <div className="category__icon">
              <CiPhone />
            </div>
            <div className="category__btn">416-166-1666</div>
            <div className="category__desc">
              <p>MON-FRI</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="category">
            <div className="category__icon">
              <IoShareSocialOutline />
            </div>
            <div className="category__btn">MESSAGE US</div>
            <div className="category__desc">Message us via social networks</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
