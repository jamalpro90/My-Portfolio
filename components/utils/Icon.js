export default function Icon({ type, size, className, href, blank, order }) {
  const hoverColors = type => {
    switch (type) {
      case "fab fa-whatsapp":
        return "hover:text-green-600 dark:hover:text-green-600";
        break;
      case "fab fa-facebook":
        return "hover:text-blue-600 dark:hover:text-blue-600";
        break;
      case "fab fa-instagram":
        return "hover:text-pink-500 dark:hover:text-pink-500";
        break;
      case "fas fa-envelope":
        return "hover:text-yellow-500 dark:hover:text-yellow-500";
        break;
      default:
        return null;
    }
  };

  const chooseHref = type => {
    switch (type) {
      case "fab fa-whatsapp":
        return "https://wa.me/6287834414508";
        break;
      case "fab fa-facebook":
        return "https://www.facebook.com/Jamal.Pebisnis.Sukses/";
        break;
      case "fab fa-instagram":
        return "https://www.instagram.com/jamaljenius/";
        break;
      case "fab fa-github":
        return "https://github.com/jamalpro90";
        break;
      default:
        return null;
    }
  };
  const hrefLink = href ? href : chooseHref(type);

  return (
    <a
      href={hrefLink}
      target={blank && "_blank"}
      rel="noreferrer"
      className={order}
    >
      <i
        className={`icon ${type} ${size} text-black-111 dark:text-gray-50 mx-4 cursor-pointer hover:scale-150 transition-all ${hoverColors(
          type
        )} ${className}`}
      ></i>
    </a>
  );
}

// ${hoverColors(type)}
