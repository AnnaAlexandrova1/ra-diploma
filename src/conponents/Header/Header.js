import HeaderControls from './HeaderControls/SearchBlock'
import './header.css'
import headerLogo from '../../assets/img/header-logo.png'

export default function Header() {
    return (
        <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </a>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog.html">Каталог</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about.html">О магазине</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts.html">Контакты</a>
                </li>
              </ul>
                <div>
                     <HeaderControls />           
                </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    )
}