import React from "react";

const MintCard = () => {
  return (
    <>
      <div className="nft">
        <div className="main">
          <img
            className="tokenImage"
            src="https://ivory-injured-gerbil-133.mypinata.cloud/ipfs/QmXLH8WHLkZMdionP7tqJq6H8awW18CgWAdf4zy5YW58Lb"
            alt="NFT"
          />
          <h2 className="mt-3">E2P #4269ID</h2>
          <p className="description">
            Something which be required by everyone , should be decentralised !!!.
          </p>
          <div className="tokenInfo">
            <div className="price">
              <ins className="mx-8">◘</ins>
              <p>0.031 Matic</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>11 days left</p>
            </div>
          </div>
          <hr />
          <div className="creator">
            
            <p>
              <ins>Creation of</ins> E2P
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MintCard;
