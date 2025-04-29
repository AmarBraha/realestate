import React from "react";
import "./Products.css";
const objects = [
  {
    id: 1,
    type: "Banesa",
    name: "Banesa 1",
    image:
      "https://th.bing.com/th/id/OIP.x-s5yi9tPwfF3S_o8rGurwHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    price: "€50,000",
    mapLink: "https://www.google.com/maps?q=41.311,19.818",
  },
  {
    id: 2,
    type: "Shtepi",
    name: "Shtepi 1",
    image: "https://via.placeholder.com/150?text=Shtepi+1",
    price: "€150,000",
    mapLink: "https://www.google.com/maps?q=41.313,19.819",
  },
  {
    id: 3,
    type: "Prona",
    name: "Prona 1",
    image: "https://via.placeholder.com/150?text=Prona+1",
    price: "€200,000",
    mapLink: "https://www.google.com/maps?q=41.315,19.821",
  },
  // {
  //   id: 4,
  //   type: 'Banesa',
  //   name: 'Banesa 2',
  //   image: 'https://via.placeholder.com/150?text=Banesa+2',
  //   price: '€60,000',
  //   mapLink: 'https://www.google.com/maps?q=41.316,19.824',
  // },
  // {
  //   id: 5,
  //   type: 'Shtepi',
  //   name: 'Shtepi 2',
  //   image: 'https://via.placeholder.com/150?text=Shtepi+2',
  //   price: '€120,000',
  //   mapLink: 'https://www.google.com/maps?q=41.319,19.826',
  // },
  // {
  //   id: 6,
  //   type: 'Prona',
  //   name: 'Prona 2',
  //   image: 'https://via.placeholder.com/150?text=Prona+2',
  //   price: '€250,000',
  //   mapLink: 'https://www.google.com/maps?q=41.320,19.829',
  // },
];

function ObjectList({ objects }) {
  return (
    <div id="main-container">
      {/* <h3>Lista e objekteve</h3> */}
      {objects.map((obj) => (
        <div key={obj.id} id="object-list">
          <img src={obj.image} alt={obj.name} />
          <div>
            <h4>{obj.name}</h4>

            <div className="Popular-grid">
              <div className="Split-grid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bed-double-icon lucide-bed-double"
                >
                  <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
                  <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
                  <path d="M12 4v6" />
                  <path d="M2 18h20" />
                  <p>4 rooms</p>
                </svg>
              </div>

              <div className="Split-grid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ratio-icon lucide-ratio"
                >
                  <rect width="12" height="20" x="6" y="2" rx="2" />
                  <rect width="20" height="12" x="2" y="6" rx="2" />
                  <p>90 m2</p>
                </svg>
              </div>
            </div>

            <p>Çmimi: {obj.price}</p>
            <p>
              {/* <a href={obj.mapLink} target="_blank" rel="noopener noreferrer">
                Shiko në hartë
              </a> */}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Products() {
  return (
    <div>
      <h1>Projekti Real Estate</h1>
      <ObjectList objects={objects} />
    </div>
  );
}

export default Products;
