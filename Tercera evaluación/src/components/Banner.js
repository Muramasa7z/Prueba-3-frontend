import bannerImage from '../assets/banner.jpg';
import '../styles.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-container">
        <img 
          src={bannerImage}
          alt="Sistema de Gestión Académica" 
          className="banner-image"
        />
      </div>
    </div>
  );
}

export default Banner;