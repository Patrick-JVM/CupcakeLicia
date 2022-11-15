import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>QUAL SEU CUPCAKE FAVORITO ?</h1>
                    <a href="https://github.com/Patrick-JVM">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/DevPatrick</p>
                            <div className="dsmovie-contact-">
                            </div>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;