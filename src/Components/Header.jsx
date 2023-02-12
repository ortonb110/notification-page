import { Fragment } from "react";

export default function Header(props) {
  const markAllAsRead = () => {
    props.setMarkedRead(true);
  };

  return (
    <Fragment>
      <div className="flex justify-between mb-[3.1rem]">
        <div className="flex">
          <h1 className="mr-[9px] font-extrabold text-[2rem]">
            Notifications{" "}
          </h1>
          <span
            className={`py-[1] px-[11px] bg-blue text-white rounded-[6px] font-bold flex items-center transition ease-in-out duration-300 `}
          >
            {props.markedRead? 0 : 3}
          </span>
        </div>
        <button onClick={markAllAsRead}>Mark all as read</button>
      </div>
    </Fragment>
  );
}
