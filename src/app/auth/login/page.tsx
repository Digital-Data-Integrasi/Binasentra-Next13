import Image from "next/image";
import bsImage from "../../../../public/bina-sentra.svg"
import FormLogin from "./formLogin";
import Footer from "@/components/Footer";

export default function Page () {
    return (
        <div className="bg-gray-200 flex flex-col justify-center items-center h-screen">
            <Image src={bsImage} alt="bs-logo" width={400} height={70}/>
            <div className="p-1 w-2/6 mt-4">
                <FormLogin />
            </div>
            <Footer color={false}/>
        </div>
    )
}