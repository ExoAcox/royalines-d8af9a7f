import { Responsive } from "@components/layout"
import Image from "next/image"

import Logo from "@images/bitmap/logo-royalines-alt.png"

interface Props {

}

const Footer: React.FC<Props> = ({ }) => {
    return <footer>
        <Responsive className="text-white pt-32 pb-24" parentClassName="bg-[#0A142F]">
            <div className="flex gap-12 mb-24 justify-center">
                <div><Image src={Logo} alt="logo" className="mr-4" /></div>
                <div>
                    <label className="font-bold text-lg">HEADQUARTERS</label>
                    <div className="text-bl max-w-[21.875rem]">
                        JL. ARJUNA UTARA NO.28 KAV.11 RT.11 /
                        RW.2, TANJUNG DUREN, GROGOL,
                        JAKARTA BARAT, 11470
                    </div>
                    <br />
                    <span>+62 852-2442-1212</span>
                    <br />
                    <span>admin@royaljetaviation.com</span>
                </div>
                <div>
                    <label className="font-bold text-lg">BRANCH OFFICE</label>
                    <div className="text-bl max-w-[21.875rem]">
                        JL. RAYA ULUWATU NO. 16 JS JIMBARAN,
                        KUTA SELATAN, BADUNG, 80361
                    </div>
                </div>
                <div className="w-[90px]" />
            </div>
            <div className="text-center w-full text-xs">© 2025 Royal Jet Aviation. All rights reserved.</div>
        </Responsive>

    </footer>
}

export default Footer