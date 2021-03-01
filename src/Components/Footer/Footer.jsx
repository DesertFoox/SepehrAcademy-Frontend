import React, { Component } from "react";

import footers from "./css/footer.module.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id={footers["footer"]}>
            <div className={footers["top-foot"]}>
              <p> ما را در شبکه اجتماعی پیدا کنید :</p>
              <div className={footers["social-media"]}>
                <div className={`${footers.social} ${footers.youtube}`}>
                  <img
                    src={require("../../Assets/images/youtube-1.svg").default}
                  />
                </div>
                <div className={`${footers.social} ${footers.twitter}`}>
                  <img
                    src={require("../../Assets/images/twitter-1.svg").default}
                  />
                </div>
                <div className={`${footers.social} ${footers.telegram}`}>
                  <img
                    src={require("../../Assets/images/telegram-1.svg").default}
                  />
                </div>
                <div className={`${footers.social} ${footers.instagram}`}>
                  <img
                    src={require("../../Assets/images/imstagram.png").default}
                  />
                </div>
                <div className={`${footers.social} ${footers.facebook}`}>
                  <img
                    src={require("../../Assets/images/facebook-1.svg").default}
                  />
                </div>
              </div>
              <div className={footers["blog"]}>
                بلاگ
                <p>درباره ی ما </p>
                <p>تماس با ما</p>
                <p>همکاری با ما</p>
                <p>سوالات متداول</p>
              </div>
              <div className={footers["phone-num"]}>
                شماره تماس :<p>989031471874+</p>
                <p>989031471874+</p>
              </div>
              <div className={footers["address"]}>
                آدرس :<p>ساری، خیابان 18 دی، روبروی خیام،</p>
                <p> ساختمان مازیار واحد 15</p>
              </div>
              <div className={`${footers.pic} ${footers.namad1}`}></div>
              <div className={`${footers.pic} ${footers.namad2}`}></div>
              <div className={`${footers.pic} ${footers.namad3}`}></div>
            </div>
            <div className={footers["bottom-foot"]}>
              <p>تمامی حقوق مادی و معنوی این سایت تیم یانگ ایگلز میباشد</p>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Footer;
