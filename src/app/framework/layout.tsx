import Content from "@/components/Content"
import HeadBar from "@/components/Headbar";
import Sidebar from "@/components/Sidebar"

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <HeadBar />
            <div className="flex w-full h-screen">
                <Sidebar />
                <div className="right-container p-4 w-[100%] overflow-y-scroll bg-gray-100">
                    <Content>{children}</Content>
                </div>
            </div>
        </>

    )
};

export default Layout;