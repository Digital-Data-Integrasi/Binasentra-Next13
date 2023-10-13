import Content from "@/components/Content"
import HeadBar from "@/components/Headbar";
import Sidebar from "@/components/SidebarNsb";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeadBar />
            <Sidebar />
            <div className="flex w-full h-screen">
                <div className="right-container p-4 w-[100%] overflow-y-scroll bg-gray-100 ml-[15%]">
                    <Content>{children}</Content>
                </div>
            </div>
        </>

    )
};

export default Layout;