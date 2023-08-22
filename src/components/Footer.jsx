import "../styles/Footer.css";
import logoFacebook from "../assets/social/facebook-white.svg";
import logoInstagram from "../assets/social/instagram-white.svg";
import logoTwitter from "../assets/social/twitter-white.svg";
import logoAppStore from "../assets/store/app-store.svg";
import logoPlayStore from "../assets/store/play-store.svg";
import logoWindowStore from "../assets/store/windows-store.svg";
export function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>Home</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>Collection Statement</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
        <p>Copyright 2016 Demo Streaming. All Rights Reserved</p>
        <div className="container-icons">
          <div className="container-icons-social">
            <img src={logoFacebook} alt="facebook" />
            <img src={logoTwitter} alt="twitter" />
            <img src={logoInstagram} alt="instagram" />
          </div>
          <div className="container-icons-store">
            <img src={logoAppStore} alt="AppStore" />
            <img src={logoPlayStore} alt="PlayStore" />
            <img src={logoWindowStore} alt="WindowStore" />
          </div>
        </div>
      </div>
    </footer>
  );
}
