import React from "react";
import { useState } from "react";
import Cards from "./component/Cards";

function App() {
  const [modalOpen, setModalOpen] = useState();
  const [modalImage, setModalImage] = useState();

  const items = [
    {
      title: "Macbook",
      img: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
      price: "$2000",
      id: 1,
    },
    {
      title: "Macbook White",
      img: "https://plus.unsplash.com/premium_photo-1682023587356-86065925727a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 2,
    },
    {
      title: "Macbook Black",
      img: "https://images.unsplash.com/photo-1660833638050-41f95d8b94e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMGFpcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 3,
    },
    {
      title: "Macbook Silver",
      img: "https://images.unsplash.com/photo-1606248896999-387b3a9f621c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8fDA%3D",
      price: "$2000",
      id: 4,
    },
    {
      title: "Samsung",
      img: "https://plus.unsplash.com/premium_photo-1706548331122-8ac9455da8e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 5,
    },
    {
      title: "Samsung Mobile",
      img: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: "$2000",
      id: 6,
    },
  ];

  const showModal = (imageSrc) => {
    setModalImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {items.map((data) => (
            <Cards
              key={data.id}
              img={data.img}
              title={data.title}
              price={data.price}
              onPress={() => showModal(data.img)}
            />
          ))}
        </div>

        {modalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <img
              src={modalImage}
              alt="Enlarged view"
              style={{ maxWidth: "80vw", maxHeight: "80vh" }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
