import './styles.css';
import { ReactComponent as YoutubeIcom } from './youtube.svg';
import { ReactComponent as LinkedinIcom } from './linkedin.svg';
import { ReactComponent as InstagramIcom } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="new">
                    <YoutubeIcom/>
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="new">
                    <LinkedinIcom/>
                </a>
                <a href="https://www.instagram.com/devsuperior.ig">
                    <InstagramIcom/>
                </a>

            </div>   
        </footer>
    )
}

export default Footer;