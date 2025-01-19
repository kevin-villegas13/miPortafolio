import { RedSocialProps } from "@/interface/props/red-social.props";
import { Tooltip } from "@heroui/tooltip";
const SocialPill = ({ href, icono, label }: RedSocialProps) => {
  const isDownloadLink = href.includes("download");

  return (
    <Tooltip content={label}>
      <a
        href={href}
        target={isDownloadLink ? "_self" : "_blank"}
        download={isDownloadLink ? true : undefined} 
        rel="noopener noreferrer"
        role="link"
        className="rounded-full border-2 border-white border-opacity-10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white bg-opacity-5 hover:scale-110 hover:bg-opacity-10 transition"
      >
        {icono}
      </a>
    </Tooltip>
  );
};

export default SocialPill;
