import React from "react";

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {goToPrevPage && <button onClick={goToPrevPage}>PrevPage</button>}
      {goToNextPage && <button onClick={goToNextPage}>NextPage</button>}
    </div>
  );
}
