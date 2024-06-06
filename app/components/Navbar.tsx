import Image from "next/image"
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"

const navLinks = [
    'Features',
    'Pricing',
    'Enterprise',
    'Careers'
]

export function Navbar(){

    return(
        <div className="flex justify-between items-center px-[20px] py-[20px] lg:container lg:mx-auto lg:px-[80px]">
            <div className="flex items-center">
                <Image src={Logo} alt="Logo"/>
                <div className="hidden lg:flex lg:gap-x-[40px] lg:pl-[60px]">
                   {navLinks.map((menu,index) => (
                    <p className="font-semibold text-[#585858]" key={index}>{menu}</p>
                   ))}
                </div>
            </div>
            <div className="flex gap-x-4">
                <p className="hidden lg:block lg:font-semibold lg:text-[#585858] lg:pr-[40px]" >Open an Account</p>
                <Image src={User} alt="User"/>
                <Image src={Menu} alt="Menu" className="lg:hidden"/>
                <span className="hidden lg:block font-semibold text-[#585858]">Sign in</span>
            </div>
        </div>
    )
}