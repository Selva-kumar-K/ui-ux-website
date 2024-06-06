import Image from "next/image"
import BlueIcon from "../../public/assets/blue-button.svg"
import Gradient from "../../public/assets/Gradient.svg"
import HeroImage from "../../public/assets/Image.svg"
import Google from "../../public/assets/Google.svg"
import Slack from "../../public/assets/Slack.svg"
import CNN from "../../public/assets/CNN.svg"
import TrustPilot from "../../public/assets/Trustpilot.svg"
import Clutch from "../../public/assets/Clutch.svg"
import { url } from "inspector"

export function Hero(){
    return(
        <div className="pt-4">
            <div className="px-[20px]">

                <h1 className="text-[#172026] text-[32px] font-medium leading-[40px] text-center lg:text-[42px] lg:w-[500px] lg:mx-auto">Start monitoring your website like a pro</h1>
            
                <p className="text-[#36485C] leading-6 text-center pt-6 lg:w-[650px] lg:mx-auto">Get a birds eye view with our customizable dashboard. Stay on top of things! Revamp your work process with our game-changing feature. Boost productivity and efficiency!</p>

                <div className="flex w-full gap-2 pt-8 lg:w-[300px] lg:mx-auto">
                    <button className="bg-[#4328EB] px-[32px] py-[16px] text-white rounded-[4px] w-1/2 lg:px-4">Try for free</button>
                    <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-[12px]">View Pricing <span><Image src={BlueIcon} alt="Learn More"/></span></button>
                </div>
            </div>

            <div className="relative mt-5 lg:mt-32">
                <Image src={Gradient} alt="gradeint" className="object-cover h-[600px] lg:w-full lg:h-full"/>
                <Image src={HeroImage} alt="Image" className="absolute top-0 lg:-top-48 -ml-6 lg:w-3/4 lg:ml-28"/>
                <div className="absolute top-2/4 mt-14 left-28 lg:mt-56  lg:flex lg:items-center lg:gap-x-20 lg:ml-48">
                    <p className="text-white">Trusted by these companies</p>
                    <div className="grid grid-cols-3 items-center gap-x-4 justify-center -ml-10 mt-10 lg:flex lg:items-center lg:space-x-10 lg:mt-0">
                        <Image src={Google} alt=""/>
                        <Image src={Slack} alt=""/>
                        <Image src={CNN} alt=""/>
                        <Image src={TrustPilot} alt=""/>
                        <Image src={Clutch} alt=""/>
                    </div>
                </div>
            </div>

        </div>
                

    )
}