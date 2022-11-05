import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Vota Filmes</h1>
                    <a href="https://github.com/Patrick-JVM">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/DevPatrick</p>
<<<<<<< HEAD
=======
                    <a href="https://github.com/Patrick-JVM">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/ZéDoAlho</p>
>>>>>>> 4f023a06018ab4e12990520ba21c94f8534c648b
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