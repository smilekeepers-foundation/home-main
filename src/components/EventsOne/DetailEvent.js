import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const DetailEvent = ({ event = {}, eventsPage }) => {
  const { id, date, time, title, image } = event;

  return (
    <div>
      <div
        className="events-one__detail"
        style={{ userSelect: eventsPage ? "unset" : "none" }}
      >
        <div className="events-one__img">
          <Image
            src={require(`@/images/resources/${image}`).default.src}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DetailEvent;
