import React, { useState} from "react";

import Modal from "react-modal";

function Body(props) {
  const item = props.items;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedItem, setselectedItem] = useState("");
  const [selectedProps, setselectedProps] = useState([]);
  
  
    console.log(selectedProps);


  return (
    <>
      <div className="body row">
        {item.map((item1, id) => (
          <div
            className="country-container g-0 col-lg-3"
            onClick={() => {
              setModalIsOpen(true);
              setselectedItem(item1);
              setselectedProps(item1.languages);
            }}
          >
            <div className="country">
              <img src={item1.flags.svg} alt="Country flag" key={id} />

              <div className="details">
                <h5>{item1.demonym}</h5>
                <h6>
                  Population: <span>{item1.population}</span>
                </h6>
                <h6>
                  Region: <span>{item1.region}</span>
                </h6>
                <h6>
                  Capital: <span>{item1.capital}</span>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        selectedItem={selectedItem}
        selectedProps={selectedProps}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div>
          <button onClick={() => setModalIsOpen(false)}>close</button>
          <div>
            <img src={selectedItem.flag} alt="Country flag" />
          </div>
          <h4>{selectedItem.title}</h4>
          <p>Native Name: {selectedItem.nativeName}</p>
          <p>Top Level Domain: {selectedItem.topLevelDomain}</p>
          <p>Borders: {selectedItem.borders}</p>
          <p>Population: {selectedItem.population}</p>
          <p>Region: {selectedItem.region}</p>
          <p>Sub Region: {selectedItem.subregion}</p>
          <p>Capital: {selectedItem.capital}</p>
          {selectedProps.map((itemm, id) => (
          <p key={id}>{itemm.name}</p>

          ))}
        </div>
      </Modal>
    </>
  );
}

export default Body;
