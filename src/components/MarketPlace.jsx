import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import styled from "styled-components";
import marketplace1 from "../assets/marketplace1.png";
import marketplace2 from "../assets/marketplace2.png";
import marketplace3 from "../assets/marketplace3.png";
import marketplace4 from "../assets/marketplace4.png";
import marketplace5 from "../assets/marketplace5.png";
import marketplace6 from "../assets/marketplace6.png";
import marketplace7 from "../assets/marketplace7.png";
import marketplace8 from "../assets/marketplace8.png";
import FilterButton from "./FilterButton";

const MarketPlace = () => {
  const marketPlaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
      type: "Art",
    },
    {
      image: marketplace2,
      name: "Pedram-mohamm...",
      type: "Generic",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
      type: "Common",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
      type: "Trading",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
      type: "Rare",
    },
    {
      image: marketplace6,
      name: "Hoang-l-p-solan",
      type: "Generic",
    },
    {
      image: marketplace7,
      name: "Joshua-jay",
      type: "Art",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
      type: "Common",
    },
  ];
  const [filterIndex, setFilterIndex] = useState(0);
  const [filterdCard, setFilteredCard] = useState(marketPlaceData);

  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];
  const changeFilter = (text) => {
    let newIndex = marketPlaceType.indexOf(text);
    setFilterIndex(newIndex);
    filterMarketPlaceCard(text);
  };

  const filterMarketPlaceCard = (text) => {
    if (text === "All") {
      setFilteredCard(marketPlaceData);
      return;
    }

    let filteredData = marketPlaceData.filter((data) => data.type === text);
    setFilteredCard(filteredData);
  };
  return (
    <Section id='nft-marketplace'>
      <div className='title'>
        <h2>NFT Marketplace</h2>
        <p>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <div className='marketPlaceTypes'>
        {marketPlaceType.map((text, index) => {
          return (
            <FilterButton
              text={text}
              key={index}
              blue={index === filterIndex}
              onClick={changeFilter}
            />
          );
        })}
      </div>
      <div className='marketPlaces'>
        {filterdCard.map(({ image, name }) => {
          return (
            <div className='marketplace'>
              <div className='image'>
                <img src={image} alt='marketplace' />
              </div>
              <div className='name'>
                <h4>{name}</h4>
                <BsThreeDots />
              </div>
              <h6 className='username'>@rajeshpoojari39</h6>
              <div className='price-container'>
                <h5 className='price'>5.5ETH</h5>
                <FaEthereum />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: column;
    h2 {
      font-size: 3rem;
    }
    p {
      color: #7b7e86;
    }
  }
  .marketPlaceTypes {
    display: flex;
    justify-content: center;
    gap: 2rem;
    button:not(.blue) {
      color: black;
      border-color: #7b7e86;
    }
  }
  .marketPlaces {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    .marketplace {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 0.5rem;
      border-radius: 1rem;
      width: max-content;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      .image {
        margin-bottom: 1rem;
      }
      .name {
        display: flex;
        color: #222222;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
      }
      .username {
        color: #555555;
        font-size: 0.8rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
      }
      .price-container {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        color: #02204e;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default MarketPlace;
