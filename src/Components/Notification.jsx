import { Fragment } from "react";


export default function Notification(props) {

    return(
        <Fragment>
            <figure className="bg-lightGrayishBlue_2">
                <img src={props.data[0].profilePic} alt="User" className="w-[4.5rem] "/>
                <figcaption>
                    <p>{props.data[0].name}</p>
                </figcaption>
                <blockquote>
                    <p>{props.data[0].message} <a href="#">{props.data[0].post}</a> </p>
                </blockquote>
            </figure>
        </Fragment>
    )

}