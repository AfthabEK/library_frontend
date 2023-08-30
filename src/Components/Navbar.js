import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-xl  bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/This_is_the_logo_of_NIT_Calicut.svg/1200px-This_is_the_logo_of_NIT_Calicut.svg.png"
            class="logo"
            alt="nit logo"
          />
          Central Library{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav navstyle">
            <NavLink to="/" />
            <a class="nav-link" href="https://nitc.ac.in/">
              NITC Website
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Search
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/ebooks">
                    Ebooks
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/pjournals">
                    Print Journals
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ojournals">
                    Online Journals
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/dailies">
                    Dailies & Magazines
                  </NavLink>
                </li>
              </ul>
            </li>
            <a class="nav-link" href="#">
              About US
            </a>
            <a class="nav-link" href="https://nitcc.knimbus.com/user#/home">
              Knimbus
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Digital Library
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="https://eduserver.nitc.ac.in/login/index.php">
                    Eduserver
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="https://mathscinet.ams.org/mathscinet/publications-search">
                    MathSciNet
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="https://jgateplus.com/search/login/">
                    Jgate
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="https://access.clarivate.com/login?app=wos&alternative=true&shibShireURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fauth%3DShibboleth&shibReturnURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fmode%3DNextgen%26action%3Dtransfer%26path%3D%252Fwos%252Fwoscc%252Fbasic-search%26DestApp%3DUA&referrer=mode%3DNextgen%26path%3D%252Fwos%252Fwoscc%252Fbasic-search%26DestApp%3DUA%26action%3Dtransfer&roaming=true">
                    Web Of Science
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="https://id.elsevier.com/as/authorization.oauth2?platSite=SC%2Fscopus&ui_locales=en-US&scope=openid+profile+email+els_auth_info+els_analytics_info+urn%3Acom%3Aelsevier%3Aidp%3Apolicy%3Aproduct%3Aindv_identity&els_policy=idp_policy_indv_identity_plus&response_type=code&redirect_uri=https%3A%2F%2Fwww.scopus.com%2Fauthredirect.uri%3FtxGid%3D80adc403909599d5f68dcd62696a3f0c&state=forceLogin%7CtxId%3D77EBF0FF8FC6C0EC597C6F78C7E4FB4F.i-05b90d2e8b598ae0b%3A6&authType=SINGLE_SIGN_IN&prompt=login&client_id=SCOPUS">
                    Scorpus
                  </NavLink>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Book Recommendations
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="https://docs.google.com/forms/d/e/1FAIpQLScvt0ve3VuiUqC_MQGryzhtrSm_5DhaeUbi19337Y-F2dBT-w/viewform">
                    Print Book Recommendations
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="https://docs.google.com/forms/d/e/1FAIpQLSfg8aV7TTXfOpgDfFmFVvyI0-ZnpprzfdYDqLwvoM0kOzJ2Rw/viewform">
                    Ebook Recommendations
                  </NavLink>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
