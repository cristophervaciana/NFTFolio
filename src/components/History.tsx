import React from "react";

const History: React.FC <{transactions:any[]}>= ({transactions}) => {
    return (
        <div
        id="main"
        className="main-content flex-1 w-11/12 pt-3 bg-gray-100 md:mt-2 pb-24 md:pb-5 rounded-xl"
      >
          History
      </div>
      )
};

export default History;
