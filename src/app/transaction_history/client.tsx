"use client"

import { BackButton } from "@components/button"
import { Wrapper } from "@components/layout"



const Payment: React.FC<Page> = ({ }) => {

    return <Wrapper className="flex flex-col h-full">
        <div className="flex items-center gap-3">
            <BackButton />
            <h4>Transaction History</h4>
        </div>
        <div className="flex-1">bb</div>
    </Wrapper>
}

export default Payment