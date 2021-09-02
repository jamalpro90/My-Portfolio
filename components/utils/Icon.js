export default function Icon({ type, size, className, href, blank }) {
  const hoverColors = (type) => {
    switch (type) {
      case 'fab fa-whatsapp':
        return 'hover:text-green-600';
        break;
      case 'fab fa-facebook':
        return 'hover:text-blue-600';
        break;
      case 'fab fa-instagram':
        return 'hover:text-pink-500';
        break;
      default:
        return null;
    }
  };

  const chooseHref = (type) => {
    switch (type) {
      case 'fab fa-whatsapp':
        return 'https://wa.me/6281936934925';
        break;
      case 'fab fa-facebook':
        return 'https://www.facebook.com/Jamal.Pebisnis.Sukses/';
        break;
      case 'fab fa-instagram':
        return 'https://www.instagram.com/jamaljenius/';
        break;
      case 'fab fa-github':
        return 'https://github.com/jamalpro90';
        break;
      default:
        return null;
    }
  };
  const hrefLink = href ? href : chooseHref(type);

  return (
    <a href={hrefLink} target={blank && '_blank'} rel="noreferrer">
      <i className={`icon ${type} ${size} text-black-111 ml-6 cursor-pointer hover:scale-150 transition-all ${hoverColors(type)} ${className}`}></i>
    </a>
  );
}
