import './Footer.scss';

function Footer() {
   return (
      <footer className="footer">
         <div className="footer__top">
            <div className="footer__top-left">
               <h2 className="footer__title">Get in Touch</h2>
               <div className="footer__socials-container">
                     <a href="https://instagram.com"><img src="./assets/icons/icon-instagram.svg" alt="instagram" className="footer__image" /></a>
                     <a href="https://facebook.com"><img src="./assets/icons/icon-facebook.svg" alt="facebook" className="footer__image" /></a>
                     <a href="https://x.com"><img src="./assets/icons/icon-twitter.svg" alt="twitter" className="footer__image" /></a>
               </div>
            </div>
            <img className="footer__logo footer__logo--top" src="./assets/logo/logo-bandsite.svg" alt="bandsite logo" />
         </div>

         <div className="footer__middle">
            <section className="contact">
               <div className="contact__title">
                     <p>Cam Adams</p>
                     <p>The Bees Knees Management</p>
               </div>
               <div className="contact__location">
                     <p>503 Broadway Penthouse,</p>
                     <p>New York, NY 10012, USA</p>
               </div>
               <a href="mailto:info@thebeesknees.com" className="contact__email">info@thebeesknees.com</a>
            </section>

            <section className="contact">
               <div className="contact__title">
                     <p>Pearl Gregg</p>
                     <p>Limitless Artist Group</p>
               </div>
               <div className="contact__location">
                     <p>Booking Agent for</p>
                     <p>US / South America / Japan</p>
               </div>
               <a href="mailto:pearl.gregg@limitlessag.com" className="contact__email">pearl.gregg@limitlessag.com</a>
            </section>

            <section className="contact">
               <div className="contact__title">
                     <p>Carson Whyte</p>
                     <p>ARCH Entertainment</p>
               </div>
               <div className="contact__location">
                     <p>Booking Agent for </p>
                     <p>UK / EU / AU</p>
               </div>
               <a href="mailto:cwhyte@archentertainment.com" className="contact__email">cwhyte@archentertainment.com</a>
            </section>
         </div>
         
         <div className="footer__bottom">
            <img className="footer__logo footer__logo--bottom" src="./assets/logo/logo-bandsite.svg" alt="bandsite logo" />
            <p className="footer__copyright">Copyright The Bees Knees © 2021 All Rights Reserved</p>
         </div>
      </footer>
);
}

export default Footer;