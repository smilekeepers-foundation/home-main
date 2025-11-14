// import eventsDetails from "@/data/eventsDetails";
// import detailEventsPage from "@/data/detailEventsPage";
// import DetailEvent from "../EventsOne/DetailEvent";

// import React from "react";
// import { Col, Container, Image, Row } from "react-bootstrap";

// const {
//   image,
//   date1,
//   title,
//   texts,
//   requirements,
//   startingTime,
//   date,
//   category,
//   phone,
//   website,
//   location,
// } = eventsDetails;

// const EventsDetailsPage = () => {
//   return (
//     <section className="events-page">
//       <Container>
//         <Row>
//           {detailEventsPage.map((event) => (
//             <Col xl={3} lg={6} md={6} key={event.id}>
//               <DetailEvent event={event} detailEventsPage />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default EventsDetailsPage;

// import { useRouter } from "next/router";
// import detailEventsPage from "@/data/detailEventsPage";
// import React, { useEffect, useState } from "react";
// import { Container, Row, Col, Image, Modal } from "react-bootstrap";

// const EventsDetailsPage = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get event ID from URL
//   const [event, setEvent] = useState(null);
//   const [showPreview, setShowPreview] = useState(false);
//   const [previewImage, setPreviewImage] = useState("");

//   useEffect(() => {
//     if (id) {
//       // Find the specific event once the ID is available
//       const foundEvent = detailEventsPage.find((event) => event.id === parseInt(id));
//       setEvent(foundEvent);
//     }
//   }, [id]);

//   const handleImageClick = (image) => {
//     setPreviewImage(image);
//     setShowPreview(true);
//   };

//   const handleClosePreview = () => setShowPreview(false);

//   if (!id) {
//     // While the ID is loading
//     return <div>Loading...</div>;
//   }

//   if (!event) {
//     // Handle case when event is not found or undefined
//     return (
//       <section className="events-page">
//         <Container>
//           <Row>
//             <Col>
//               <h2>Event Not Found</h2>
//               <p>The event you are looking for does not exist or is unavailable.</p>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     );
//   }

//   return (
//     <section className="events-page">
//       <Container>
//         <Row>
//           {/* Render all images for the event */}
//           {event.images.map((image, index) => (
//             <Col xl={3} lg={4} md={6} sm={12} key={index} className="mb-4">
//               <Image
//                 src={require(`@/images/resources/${image}`).default.src}
//                 alt={`Event Image ${index + 1}`}
//                 className="event-detail-image"
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                   cursor: "pointer",
//                 }}
//                 onClick={() => handleImageClick(require(`@/images/resources/${image}`).default.src)}
//               />
//             </Col>
//           ))}
//         </Row>

//         {/* Modal for Image Preview */}
//         <Modal show={showPreview} onHide={handleClosePreview} centered>
//           <Modal.Body>
//             <Image
//               src={previewImage}
//               alt="Preview"
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 borderRadius: "8px",
//               }}
//             />
//           </Modal.Body>
//         </Modal>
//       </Container>
//     </section>
//   );
// };

// export default EventsDetailsPage;

import { useRouter } from "next/router";
import detailEventsPage from "@/data/detailEventsPage";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";

const EventsDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [images, setImages] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (id) {
      const event = detailEventsPage.find((event) => event.id === parseInt(id));
      if (event) {
        fetch(`/api/get-images?folder=${event.folder}`)
          .then((res) => res.json())
          .then((data) => setImages(data))
          .catch((err) => console.error("Error loading images:", err));
      }
    }
  }, [id]);

  const handleImageClick = (image) => {
    setPreviewImage(image);
    setShowPreview(true);
  };

  const handleClosePreview = () => setShowPreview(false);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <section className="events-page">
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col xl={3} lg={4} md={6} sm={12} key={index} className="mb-4">
              <Image
                src={image}
                alt={`Event Image ${index + 1}`}
                className="event-detail-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(image)}
              />
            </Col>
          ))}
        </Row>

        <Modal show={showPreview} onHide={handleClosePreview} centered>
          <Modal.Body>
            <Image
              src={previewImage}
              alt="Preview"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default EventsDetailsPage;
