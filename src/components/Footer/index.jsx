import './index.scss';

function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <footer>
            <p className='text-footer'>&copy; {thisYear} Gurvan Bourgeron - Tous droits réservés.</p>
        </footer>
    )
}

export default Footer;