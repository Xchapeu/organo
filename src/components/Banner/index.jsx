import bannerImg from '../../assets/banner.png';
import './styles.css'

export const Banner = () => {
    return (
        <header className="banner">
            <img src={bannerImg} alt="Banner image" />
        </header>
    );
}