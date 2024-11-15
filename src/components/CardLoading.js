import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

function CardLoading() {
  return (
    <>
      <div className="flxe items-center justify-center p-4">
        <Skeleton height={150} width={350} /> {/* Shimmer for Image */}
        <Skeleton count={5} height={20} width={350} /> {/* Shimmer for Title */}
      </div>
    </>
  );
}

export default CardLoading;
