import { Fragment, useState, useEffect } from "react";
import Notification from "./Notification";
import profileAngela from "../Assets/images/avatar-angela-gray.webp";
import profileAnna from "../Assets/images//avatar-anna-kim.webp";
import profileJacob from "../Assets/images/avatar-jacob-thompson.webp";
import profileKimberly from "../Assets/images/avatar-kimberly-smith.webp";
import profileMark from "../Assets/images/avatar-mark-webber.webp";
import profileNathan from "../Assets/images/avatar-nathan-peterson.webp";
import profileRizky from "../Assets/images/avatar-rizky-hasanuddin.webp";
import chess from "../Assets/images/image-chess.webp";
import Header from "./Header";

let data = [
  {
    profilePic: profileMark,
    name: "Mark Webber",
    message: "reacted to your recent post",
    post: "My first tournament today!",
    time: "1m ago",
    readStatus: "!visible",
  },
  {
    profilePic: profileAngela,
    name: "Angela Gray",
    message: "followed",
    post: "",
    time: "5m ago",
    readStatus: "!visible",
  },
  {
    profilePic: profileJacob,
    name: "Jacob Thompson",
    post: "Chess Club",
    message: "has joined your group",
    time: "1 day ago",
    readStatus: "!visible",
  },
  {
    profilePic: profileRizky,
    name: "Rizky Hasanuddin",
    message: "sent you a private message",
    privateMessage:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    readStatus: "invisible",
  },
  {
    profilePic: profileKimberly,
    name: "Kimberly Smith",
    message: "commented on your picture",
    picture: chess,
    time: "1 week ago",
    readStatus: "invisible",
  },
  {
    profilePic: profileNathan,
    name: "Nathan Peterson",
    message: "reacted to your recent post",
    post: "5 end-games strategies to increase your win rate",
    time: "2 weeks ago",
    readStatus: "invisible",
  },
  {
    profilePic: profileAnna,
    name: "Anna Kim",
    message: "left the group",
    post: "Chess Club",
    time: "2 weeks ago",
    readStatus: "invisible",
  },
];

export default function Main() {
  return (
    <Fragment>
      <div className="bg-white rounded-[15px] md:py-[3.3rem] md:px-[3.3rem] py-[24px] px-[16px] w-screen lg:w-[73rem]">
        <Header />
        <Notification data={data[0]} />
        <Notification data={data[1]} />
        <Notification data={data[2]} />
        <Notification data={data[3]} />
        <Notification data={data[4]} />
        <Notification data={data[5]} />
        <Notification data={data[6]} />
      </div>
    </Fragment>
  );
}
