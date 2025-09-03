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

interface Route {
    destination: string
    date: string
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
    route: Route[]
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

    return `${countryCode} ${grouped}`;
}

const InvoiceClient: React.FC<Props> = ({ }) => {
    const searchParams = useSearchParams();
    const rawData = searchParams.get("data");

    const data: Data = useMemo(() => {
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


    return <div className="mx-auto bg-white flex flex-col text-sm">
        <div className="flex mb-8 gap-12">
            <div className="flex items-center ml-12">
                <Image src={Logo} alt="logo" className="w-[100px] h-[51px]" />
            </div>
            <div className="flex flex-col gap-3 text-xs">
                <label className="text-lg font-bold">Royal Jet Aviation</label>
                <p>Jalan Arjuna Utara 28 Kav 11, Desa/Kelurahan Tanjung Duren Selatan<br />
                    Kec. Grogol Petamburan, Kota Adm. Jakarta Barat, Provinsi DKI Jakarta</p>
                <div className="flex gap-12">
                    <div className="flex items-center gap-2"><SlPhone className="fill-blue-400" />+62 852-2442-1212</div>
                    <div className="flex items-center gap-2"><TfiEmail className="fill-blue-400" />admin@royaljetaviation.com</div>
                </div>
            </div>
        </div>
        <div className="flex mb-6 justify-between">
            <div className="flex flex-col gap-2 mr-auto">
                <label className="font-bold text-lg">Bill To:</label>
                <span className="font-bold text-base">{data?.billTo ?? ""}</span>
                <div className="flex gap-x-8 text-xs flex-wrap gap-y-4">
                    <div className="flex items-center gap-2 text-nowrap"><SlPhone className="fill-blue-400 " /> {formatPhone(data?.phone)}</div>
                    <div className="flex items-center gap-2 text-nowrap"><TfiEmail className="fill-blue-400" />{data?.email ?? ""}</div>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="font-bold flex-1 text-lg">Invoice</label>
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <label className="font-bold">No Invoice</label>
                        <span className="text-xs text-nowrap">{data?.invoiceNumber ?? ""}</span>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Date</label>
                        <span className="text-xs text-nowrap">{dayjs(data?.date).format("MMM DD, YYYY")}</span>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Due Date</label>
                        <span className="text-xs text-nowrap">{dayjs(data?.dueDate).format("MMM DD, YYYY")}</span>
                    </div>
                </div>
            </div>
        </div>
        <label className="pt-4 font-bold text-lg border-t mb-4">Description of Services</label>
        <div className="flex justify-between text-xs">
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
                <div className="flex flex-col gap-4 -mt-1">
                    {data?.route?.map((route, index) => {
                        return <ul className="flex flex-col list-disc pl-8" key={index}>
                            <li>{route.destination}</li>
                            <span><b>Departure date:</b> {dayjs(route.date).format("YYYY-MM-DD")}</span>
                            <span>{dayjs(route.date).format("HH:mm:ss")} UTC+7</span>
                        </ul>
                    })}

                </div>
                <div className="flex flex-col">
                    <span className="font-bold">Passenger:</span>
                    <span>{data?.passenger ?? 1}</span>
                </div>
                <span className="font-bold">Included:</span>
                <ul className="list-disc pl-8 -mt-1">
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
        <div className="mt-4 flex flex-col gap-2">
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
        <label className="my-4 font-bold text-lg">Notes</label>
        <ul className="list-disc pl-8">
            <li>Payment due within 7 days from invoice date unless otherwise agreed.</li>
            <li>Cancellation fees apply as per charter agreement terms.</li>
            <li>Payments made via payment gateway may be subject to additional processing fees.</li>
            <li>For assistance, contact our Agent at +62 852-2442-1212 or admin@royaljetaviation.com</li>
        </ul>
    </div>
}

export default InvoiceClient