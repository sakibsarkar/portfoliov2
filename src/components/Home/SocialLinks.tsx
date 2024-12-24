import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const SocialLinks = () => {
  const links = [
    {
      Icon: FaFacebook,
      link: "https://www.facebook.com/me.facebook.id",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/sakibsarkar",
    },
    {
      Icon: FaLinkedin,
      link: "https://www.linkedin.com/in/nazmul-islam-sakib-204938253/",
    },
  ];

  return (
    <div className="fixed z-[50] top-[40%] right-0 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-[50px]">
      {links.map(({ Icon, link }, i) => (
        <Link key={i + "social"} href={link} className="socialIcon text-[50px]">
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
