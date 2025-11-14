import React from "react";
import { useRootContext } from "@/context/context";
import { DonationForm } from './../HelpingOne/HelpingOne';

export default function Modal() {
  const { notification, handleNotification } = useRootContext();
  React.useEffect(()=>{
    const body = document.querySelector("html");
    if(!notification.length){
      body.style.overflow = "auto";
      return
    }
    body.style.overflow = "hidden";
  },[notification])
  if (!notification.length) return null;
  const { type } = notification[0];


  switch (type) {
    case "userDetailsPopup":
      return (
        <ModalLayout handleNotification={handleNotification}>
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button onClick={()=>handleNotification({}, "remove")} type="button" className="close-btn" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <DonationForm forPayment={true} />
          </div>
        </ModalLayout>
      );

    default:
      return null;
  }
}
const ModalLayout = ({ children, handleNotification }) => {
  return (
    <div className="modal d-flex" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {children}</div>
      </div>
    </div>
  );
};
