import { FC } from "react"

interface Props {
    color: boolean
}

const Footer: FC<Props> = ({ color }) => {
    return (
        <footer className={color ? "text-white" : "text-black text-sm" }>©All Copyright 2023 by<a href="https://www.binasentra.co.id/" target='_blank' className='text-blue-700'> PT Binasentra Purna</a></footer>
    )
};


export default Footer;
