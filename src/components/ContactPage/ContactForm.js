import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import services from "./../../services/services";
import { toast } from "react-toastify";

const inputs = ["name", "email", "subject", "phone", "message"];

const ContactForm = () => {
  const { addContactDetails } = services();
  const [loading, setLoading] = React.useState(false)
  const [details, setDetails] = React.useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();
    let data = await addContactDetails(details);
    if (data.success) {
      toast.success("We'll get in touch with you soon.");
      setDetails({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong. Please try again");
    }
    setLoading(false)
  };

  return (
    <div className="contact-page__form">
      <form
        onSubmit={handleSubmit}
        className="contact-page__main-form contact-form-validated"
      >
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={details.name}
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={details.email}
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
                required
              />
            </div>
          </Col>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={details.subject}
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={details.phone}
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
                pattern="((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}"
                required
              />
            </div>
          </Col>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <textarea
                name="message"
                value={details.message}
                placeholder="Write message"
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.value })
                }
              ></textarea>
            </div>
          </Col>
          <Col>
            <button disabled={loading} type="submit" className="thm-btn contact-page__btn">
              <i className="fas fa-arrow-circle-right"></i>{loading?"Sending....": "Send a Message"}
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ContactForm;
