import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
};

const Content: FC<Props> = ({ children }) => {
    return (
        <div className="min-h-max max-h-screen z-0 ">
            {children}
        </div>
    )
};

export default Content;