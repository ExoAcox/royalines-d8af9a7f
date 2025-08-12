import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { tw } from '@functions/style';
import { When } from 'react-if';

interface Props {
    page: number;
    totalPage: number
    range?: number,
    onChange: (page: number) => void;
    summary?: boolean;
    className?: string;
    parentClassName?: string;
}

const Pagination: React.FC<Props> = ({ page, totalPage, range = 3, onChange, summary = true, className, parentClassName }) => {
    return <div className={tw("mt-2", parentClassName)}>
        <When condition={summary}>
            <label className='text-black font-semibold text-sm'>Showing 3 of 3 results</label>
        </When>
        <ReactPaginate
            className={tw("text-sm text-grey-90 font-semibold flex-center gap-4 mt-4", className)}
            pageClassName="border border-transparent p-2 rounded-lg"
            pageLinkClassName='cursor-pointer'
            activeClassName="bg-primary-bg !border-primary text-primary"
            forcePage={page - 1}
            pageCount={totalPage}
            onPageChange={(e) => onChange(e.selected + 1)}
            pageRangeDisplayed={range}
            marginPagesDisplayed={2}
            previousLabel={<button className='flex items-center gap-1 disabled:text-grey-60' disabled={page <= 1}><MdKeyboardArrowLeft className='size-5' /> Previous</button>}
            nextLabel={<button className='flex items-center gap-1 disabled:text-grey-60' disabled={page >= totalPage}>Next <MdKeyboardArrowRight className='size-5' /></button>}
            renderOnZeroPageCount={null} />
    </div>
}

export default Pagination