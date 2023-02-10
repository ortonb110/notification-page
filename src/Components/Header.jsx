import { Fragment } from "react";

export default function Header() {
    return(
        <Fragment>
            <div className="flex justify-between">
                    <div className="flex">
                        <h1 className="mr-[9px] font-extrabold text-[2rem]">Notifications </h1>
                        <span className="py-[1] px-[11px] bg-blue text-white rounded-[6px] font-bold flex items-center transition ease-in-out duration-300">3</span>
                    </div>
                    <button>Mark all as read</button>
                </div>
        </Fragment>
    )
}