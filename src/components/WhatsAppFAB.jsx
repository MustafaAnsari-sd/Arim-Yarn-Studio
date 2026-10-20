import siteConfig, { getWhatsAppUrl } from '../data/siteConfig';
import { WhatsAppIcon } from './SocialIcons';

function WhatsAppFAB() {
  if (!siteConfig.whatsappNumber) return null;

  const url = getWhatsAppUrl(siteConfig.whatsappMessages.general);

  return (
    <a
      href={url}
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      id="whatsapp-fab"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

export default WhatsAppFAB;
