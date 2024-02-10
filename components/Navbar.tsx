import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container 3xl:px-0 relative z-30 py-5">
        <Link href="/">
            <Image src="/logo.png" alt="logo" width={45.58} height={47}/>
        </Link>
        <ul className="hidden h-full gap-20 lg:flex bg-[#F7F7FD] rounded-[50px] px-16 py-3">
            {NAV_LINKS.map((link)=> (
                <Link className={`text-base font-medium ${link.label == 'Home' ? 'text-[#3056D3]':''}`} key={link.key} href={link.href}>
                 {link.label}
                </Link>
            ))}
        </ul>
        <div className="lg:flexCenter hidden gap-3.5">
            <div className="flexCenter gap-1.5 px-4">
                <label className=" text-sm">EN</label>
                <Image src="/CaretDown.svg" alt="arrow" width={16} height={16}/>
            </div>
            <Button 
                type="button"
                title="Schedule a Call"
                varient="btn_blue"
                padding_varient="padding-small"
             />
        </div>

        <Image className="inline-block cursor-pointer lg:hidden" 
        src="/menu.svg" width={24} height={24} alt="menu"/>
    </nav>
  )
}

export default Navbar