import { Fragment } from "react";

export default function Notification(props) {
  return (
    <Fragment>
      <figure className="bg-lightGrayishBlue_2 flex py-[1.8rem] px-[1.9rem] rounded-[8px] mb-[0.8rem] items-center text-[1.6rem] text-darkGrayishBlue">
        <img
          src={props.data.profilePic}
          alt="User"
          className="w-[4.5rem] mr-[1.9rem]"
        />
        <figcaption>
          <p>
            {" "}
            <span className="font-bold text-veryDarkGrayishBlue">
              {props.data.name}
            </span>{" "}
            <span>
              {props.data.message}{" "}
              <a href="#" className="text-blue font-bold ">
                {props.data.post}
              </a>
            </span>
            <div className={`w-[0.8rem] h-[0.8rem] rounded-full bg-red inline-block ml-[0.6rem] invisible ${props.data.readStatus}`}></div>
            <span className="block">{props.data.time}</span>
          </p>
        </figcaption>
      </figure>
    </Fragment>
  );
}
