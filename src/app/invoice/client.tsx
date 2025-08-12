"use client";

import Logo from "@images/bitmap/logo.png"
import Image from "next/image"
import dayjs from "dayjs"

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { SlPhone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";



interface Props {

}

interface Data {
    billTo: string;
    phone: number;
    email: string;
    invoiceNumber: string;
    date: string;
    dueDate: string;
    aircraftCharter: string;
    quantity: number;
    passenger: number;
    price: number;
    route: {
        destination: string
        date: string
    }[]
}

function formatRupiah(number: number) {
    if (!number) return ""

    return (
        "Rp" +
        number
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    );
}

function formatPhone(number: number) {
    // Hilangkan spasi & tanda non-digit

    if (!number) return ""

    let cleaned = number.toString().replace(/\D/g, "");

    // Ubah prefix 0 jadi +62
    if (cleaned.startsWith("0")) {
        cleaned = "+62" + cleaned.slice(1);
    } else if (!cleaned.startsWith("+62")) {
        cleaned = "+62" + cleaned; // fallback kalau tidak ada kode negara
    } else {
        cleaned = "+" + cleaned; // pastikan ada plus
    }

    // Ambil kode negara
    const countryCode = cleaned.slice(0, 3); // +62
    const rest = cleaned.slice(3);

    // Format tiap 4 digit
    const grouped = rest?.match(/.{1,4}/g)?.join("-");

    return `${countryCode}-${grouped}`;
}

const InvoiceClient: React.FC<Props> = ({ }) => {
    const searchParams = useSearchParams();
    const rawData = searchParams.get("data");

    const data = useMemo(() => {
        if (rawData) {
            return JSON.parse(decodeURIComponent(rawData));
        } else {
            return {}
        }
    }, [rawData])

    const price = data?.price ?? 0
    const totalPrice = price * (data?.quantity ?? 1)
    const tax = price / 100 * 11
    const finalPrice = totalPrice + tax


    return <div className="mx-auto bg-white flex flex-col py-8 px-9">
        <div className="flex mb-8">
            <div className="flex items-center px-8">
                <Image src={Logo} alt="logo" className="w-[100px] h-[51px]" />
            </div>
            <div className="flex flex-col gap-3 text-sm">
                <h5>Royal Jet Aviation</h5>
                <p>Jalan Arjuna Utara 28 Kav 11, Desa/Kelurahan Tanjung Duren Selatan<br />
                    Kec. Grogol Petamburan, Kota Adm. Jakarta Barat, Provinsi DKI Jakarta</p>
                <div className="flex gap-12">
                    <div className="flex items-center gap-2"><SlPhone className="fill-blue-400 translate-y-[1px]" />+62 852-2442-1212</div>
                    <div className="flex items-center gap-2"><TfiEmail className="fill-blue-400 translate-y-[1px]" />admin@royaljetaviation.com</div>
                </div>
            </div>
        </div>
        <div className="flex gap-32 mb-6">
            <div className="flex flex-col gap-2 mr-auto">
                <label className="font-bold text-lg">Bill To:</label>
                <span className="font-bold">{data?.billTo ?? ""}</span>
                <div className="flex gap-12 text-sm">
                    <div className="flex items-center gap-2"><SlPhone className="fill-blue-400  translate-y-[1px]" /> {formatPhone(data?.phone)}</div>
                    <div className="flex items-center gap-2"><TfiEmail className="fill-blue-400 translate-y-[1px]" />{data?.email ?? ""}</div>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="font-bold flex-1 text-lg">Invoice</label>
                <div className="flex gap-12">
                    <div className="flex flex-col">
                        <label className="font-bold">No Invoice</label>
                        <span className="text-sm text-nowrap">{data?.invoiceNumber ?? ""}</span>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Date</label>
                        <span className="text-sm text-nowrap">{dayjs(data?.date).format("MMM DD, YYYY")}</span>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Due Date</label>
                        <span className="text-sm text-nowrap">{dayjs(data?.dueDate).format("MMM DD, YYYY")}</span>
                    </div>
                </div>
            </div>
        </div>
        <h5 className="pt-4 border-t mb-4">Description of Services</h5>
        <div className="bg-[#F1F5F8] py-4 px-5">
            <div className="flex justify-between text-sm">
                <div className="flex flex-col gap-4">
                    <span className="text-base">Item No</span>
                    <span>1</span>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-base">Description</span>
                    <div className="flex flex-col">
                        <span className="font-bold">Aircraft Charter:</span>
                        <span>{data?.aircraftCharter ?? ""}</span>
                    </div>
                    <span className="font-bold">Route</span>
                    <div className="flex flex-col">
                        {data?.route.map((route: any, index: number) => {
                            return <div className="flex flex-col" key={index}>
                                <span className="flex items-center gap-2"><div className="bg-black rounded-full size-1" />{route.destination}</span>
                                <span className="ml-3"><b>Departure date:</b> {dayjs(route.date).format("YYYY-MM-DD")}</span>
                                <span className="ml-3">{dayjs(route.date).format("HH:mm:ss")} UTC+7</span>
                            </div>
                        })}

                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Passenger:</span>
                        <span>{data?.passenger ?? 1}</span>
                    </div>
                    <span className="font-bold">Included:</span>
                    <ul className="list-disc pl-8">
                        <li>Passenger insurance</li>
                        <li>In-flight catering</li>
                        <li>Landing & parking</li>
                        <li>Handling fees</li>
                        <li>Fuel surcharge</li>
                        <li>Crew fees</li>
                    </ul>
                </div>
                <div className="flex flex-col text-right gap-4">
                    <span className="text-base">Quantity</span>
                    <span>{data?.quantity ?? 1}</span>
                </div>
                <div className="flex flex-col text-right gap-4">
                    <span className="text-base">Unit Price (IDR)</span>
                    <span>{formatRupiah(price)}</span>
                </div>
                <div className="flex flex-col text-right gap-4">
                    <span className="text-base">Total (IDR)</span>
                    <span>{formatRupiah(totalPrice)}</span>
                </div>
            </div>
            <div className="mt-8 flex flex-col gap-2">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatRupiah(totalPrice)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax (11%)</span>
                    <span>{formatRupiah(tax)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Total amount</span>
                    <span>{formatRupiah(finalPrice)}</span>
                </div>
            </div>
        </div>
        <h5 className="my-4">Notes</h5>
        <ul className="list-disc pl-8">
            <li>Payment due within 7 days from invoice date unless otherwise agreed.</li>
            <li>Cancellation fees apply as per charter agreement terms.</li>
            <li>Payments made via payment gateway may be subject to additional processing fees.</li>
            <li>For assistance, contact our Agent at +62 852-2442-1212 or admin@royaljetaviation.com</li>
        </ul>
    </div>
}

export default InvoiceClient