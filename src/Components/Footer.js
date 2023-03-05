import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer + " px-5 row"}>
      <div className="col-sm mx-2">
        <h3>
          <b>Contact US</b>
        </h3>
        <div>Ms.Sobhana J</div>
        <div>Librarian-In-Charge</div>
        <div>
          <img
            src="https://icon-library.com/images/email-white-icon/email-white-icon-28.jpg"
            type="png"
            alt="phone"
            className={classes.mini}
          />
          librarian@nitc.ac.in
        </div>
        <div>
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/14/22/white-phone-icon-vector-7151422.jpg"
            type="png"
            alt="phone"
            className={classes.mini}
          />
          0091 2313 342424
        </div>
      </div>
      <div className="col-sm mx-2">
        <h3>
          <b>Links</b>
        </h3>
        <div>Home</div>
        <div>NITC Website</div>
        <div>Books</div>
        <div>Knimbus</div>
        <div>Digital Library</div>
      </div>
      <div className="col-sm mx-2">
        <img src="../nitc.png" alt="nitc logo" className={classes.logo} />
        <div>NIT Calicut</div>
        <div>NIT Campus PO</div>
        <div>Kozhikode, Kerala</div>
        <div>India 673601</div>
      </div>
    </footer>
  );
};
export default Footer;
