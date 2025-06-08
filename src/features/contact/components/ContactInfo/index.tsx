




interface Props {

}

const ContactInfo: React.FC<Props> = ({ }) => {
    return <div className="flex flex-col text-black max-w-[31.5rem] relative z-[2]">
        <label className="font-semibold">Contact Us</label>
        <h1 className="text-primary mt-2 mb-8">Let us assist you with your next journey.</h1>

        <label className="text-lg font-bold mb-2">HEADQUARTERS</label>
        <p className="text-lg">
            JL. ARJUNA UTARA NO.28 KAV.11 RT.11 /
            RW.2, TANJUNG DUREN, GROGOL,
            JAKARTA BARAT, 11470
        </p>
        <span className="mb-2 mt-6">+62 852-2442-1212</span>
        <span>admin@royaljetaviation.com</span>
        <label className="text-lg font-bold mt-6">BRANCH OFFICE</label>
        <p className="text-lg">
            JL. RAYA ULUWATU NO. 16 JS JIMBARAN,
            KUTA SELATAN, BADUNG, 80361
        </p>
    </div>
}

export default ContactInfo