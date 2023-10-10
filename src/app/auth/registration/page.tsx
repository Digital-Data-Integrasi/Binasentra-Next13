import Image from "next/image";
import bsImage from "../../../../public/bina-sentra.svg"
import FormRegis from "./formRegis";
import Footer from "@/components/Footer";

export default function Page() {
    return (
        <div className="bg-gray-200 flex flex-col justify-center items-center h-screen">
            <Image src={bsImage} alt="bs-logo" width={300} height={70}/>
            <div className="p-1 w-3/6 mt-4">
                <FormRegis />
            </div>
            <Footer color={false}/>
        </div>





    )
}