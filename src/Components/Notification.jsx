import { Fragment } from "react";

export default function Notification(props) {
  //bg-lightGrayishBlue_2
  return (
    <Fragment>
      <figure className={`${props.markedRead? "!bg-inherit" : ""} ${props.data.read? "!bg-inherit" : ""} tracking-normal bg-lightGrayishBlue_2 py-[1.8rem] px-[1.9rem] rounded-[8px]  mb-[0.8rem] items-center text-[1.4rem] md:text-[1.6rem] text-darkGrayishBlue`}>
        <figcaption className="flex">
        <img
          src={props.data.profilePic}
          alt="User"
          className="md:w-[4.5rem] w-[3.9rem] object-contain md:h-[4.5rem] h-[3.9rem] mr-[1.9rem]"
        />
          <p>
            {" "}
            <span className="font-bold text-veryDarkGrayishBlue cursor-pointer hover:text-blue ">
              {props.data.name}
            </span>{" "}
            <span>
              {props.data.message}{" "}
              <a href="#" className=" font-bold hover:text-blue">
                {props.data.post}
              </a>
            </span>
            <span
              className={`w-[0.8rem] h-[0.8rem] rounded-full bg-red inline-block ml-[0.6rem] invisible ${
                props.data.readStatus
              } ${props.markedRead ? "!invisible" : ""}`}
            ></span>
            <span className="block">{props.data.time}</span>
          </p>
        </figcaption>
        <blockquote className={`${props.data.privateMe? "hidden" : ""} ml-[6.5rem] mt-[1.3rem] py-[1.6rem] px-[1.6rem] border-[1px] rounded-[5px] border-lightGrayishBlue_1`}>
          <p className="">
            {props.data.privateMessage}
          </p>
        </blockquote>
      </figure>
    </Fragment>
  );
}
