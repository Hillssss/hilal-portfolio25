import Link from "next/link";

import {FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa"

const social = [
    {icon: <FaGithub />, path: "https://github.com/Hillssss"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/hilal-hibatullah-agus-6556072a1/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/hllhbtllha?igsh=MWZmN3ZsYnZnNGs4Nw%3D%3D&utm_source=qr"},
];


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {social.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials;