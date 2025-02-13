import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import SocialIcon from "./social-icon"

export default function SocialList() {
  return (
    <div className="flex items-center gap-6">
      <SocialIcon
        text="Twitter"
        icon={<FaXTwitter className="text-md text-zinc-50/50" />}
        url="https://x.com/Maxime_ELZ"
      />
      <SocialIcon
        text="Github"
        icon={<FaGithub className="text-md text-zinc-50/50" />}
        url="https://github.com/Wakushi"
      />
      <SocialIcon
        text="Linkedin"
        icon={<FaLinkedin className="text-md text-zinc-50/50" />}
        url="https://www.linkedin.com/in/maxime-eliazord-8718ab259/"
      />
    </div>
  )
}
