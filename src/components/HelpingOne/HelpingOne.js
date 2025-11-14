import image from "@/images/resources/helping-one-left-img.jpg";
import React from "react";
import Form, { Col, Container, Image, Row } from "react-bootstrap";
import useRazorpay from "react-razorpay";
import { toast } from "react-toastify";
import services from "./../../services/services";
import { useRootContext } from "./../../context/context";

const HelpingOne = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Latest Causes</span>
          <h2 className="section-title__title">
            Find the popular cause <br />
            and donate them
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                We’re Helping Today. Helping Tommorow
              </h3>
              <p className="helping-one__text">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humou or randomised words even slightly believable. All the
                Lorem Ipsum generators on the Internet tend.
              </p>
              <ul className="helping-one__left-list list-unstyled">
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Making this the first true generator on the Internet</p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Lorem Ipsum is not simply random text</p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>If you are going to use a passage</p>
                  </div>
                </li>
              </ul>
              <div className="helping-one__left-img">
                <Image src={image.src} alt="" />
                <div className="helping-one__left-icon-box">
                  <span className="icon-heart"></span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="helping-one__right">
              <DonationForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export const DonationForm = ({ forPayment }) => {
  const { handleNotification } = useRootContext();
  const [details, setDetails] = React.useState({
    isAnonymous: false,
    name: "",
    email: "",
    phone: "",
    message: "",
    amount: "",
  });
  const { addTempUser, createOrder } = services();
  const Razorpay = useRazorpay();
  const [loading, setLoading] = React.useState(false);

  const handlePayment = async (data) => {
    const options = {
      key_id: "rzp_test_xWfg59s3LN4tXn",
      amount: parseInt(data.amount),
      current: "INR",
      name: details.name,
      description: details.message,
      order_id: data.orderId,
      ondismiss: () => {
        alert();
      },
      handler: function (response) {
        if (response.error) {
          toast.error("Payment failed");
          setLoading(false);
          return;
        }
        handleNotification({ type: "userDetailsPopup" }, "remove");
        toast.success("Payment done. Thank you");
        setDetails({
          ...details,
          name: "",
          email: "",
          phone: "",
          message: "",
          amount: "",
        });
        setLoading(false);
      },
      modal: {
        ondismiss: function () {
          setLoading(false);
        },
      },
      prefill: {
        name: details.name,
        email: details.email,
        contact: details.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzpl = new Razorpay(options);

    rzpl.on("payment.failed", function (response) {
      if (response.error) {
        toast.error("Payment failed");
        setLoading(false);
      }
      toast.success("Check");
    });

    rzpl.open();
  };
  const makeOrder = async (data) => {
    let orderData = await createOrder({
      userId: data.id,
      amount: parseInt(data.amount),
      currency: "INR",
    });
    if (orderData.success) {
      handlePayment(orderData.data);
      return;
    }
    setLoading(false);
    toast.error(data.message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    ["name", "email", "phone", "amount"].map((obj) => {
      if (!details[obj]) {
        toast.error("Please enter " + obj);
        return;
      }
    });
    setLoading(true);
    let data = await addTempUser(details);
    if (data.success) {
      makeOrder(data.data);
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} action="" className="helping-one__right-form">
      <Row>
        <Col lg={12}>
          <div className="helping-one__right-input-box">
            <input
              type="text"
              name="amount"
              placeholder="Enter Donation Amount"
              value={details.amount}
              onChange={(e) =>
                setDetails({ ...details, [e.target.name]: e.target.value })
              }
              pattern="^\d+(\.\d{1,2})?$"
              required
            />
            <div className="helping-one__right-dolar-icon">
              <span>$</span>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <input
            type="text"
            name="name"
            value={details.name}
            placeholder="Your Name"
            onChange={(e) =>
              setDetails({ ...details, [e.target.name]: e.target.value })
            }
            required
          />
        </Col>
        <Col lg={6}>
          <input
            type="email"
            name="email"
            value={details.email}
            placeholder="Email Address"
            onChange={(e) =>
              setDetails({ ...details, [e.target.name]: e.target.value })
            }
            required
          />
        </Col>
        <Col lg={12}>
          <input
            type="text"
            name="phone"
            value={details.phone}
            placeholder="Phone Number"
            onChange={(e) =>
              setDetails({ ...details, [e.target.name]: e.target.value })
            }
            pattern="((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}"
            required
          />
        </Col>
        <Col lg={12}>
          {false && forPayment ? (
            <div className="payment-type_donation-form">
              <label>Payment type </label>
              <div>
                <select className="">
                  <option value="1">One time</option>
                  <option value="2">Every month</option>
                </select>
              </div>
            </div>
          ) : (
            <textarea
              rows={2}
              name="message"
              value={details.message}
              placeholder="Write Message"
              onChange={(e) =>
                setDetails({ ...details, [e.target.name]: e.target.value })
              }
            ></textarea>
          )}
        </Col>
        <Col xs={12}>
          <div key={`default-checkbox`} className="mb-3 default-checkbox">
            <label>
              <input
                name="isAnonymous"
                onChange={(e) =>
                  setDetails({ ...details, [e.target.name]: e.target.checked })
                }
                className="mr-2"
                type="checkbox"
              />
              <span>Pay anonoumously</span>
            </label>
          </div>
        </Col>
        <Col lg={12}>
          <button
            disabled={loading}
            type="submit"
            className="thm-btn helping-one__right-btn"
          >
            <i className="fas fa-arrow-circle-right"></i>
            {loading ? "Processing..." : "Continue Now"}
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default HelpingOne;
