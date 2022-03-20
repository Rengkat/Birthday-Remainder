import React, { useState } from "react";
import resurces from "./Resources/Data";

function Display() {
  const [info, setInfo] = useState(resurces);
  const dateGen = (val) => {
    const today = new Date();
    const year = today.getFullYear();
    const birthday = new Date(val);
    const birthYear = birthday.getFullYear();
    return year - birthYear;
  };
  const handleClick = (e) => {
    setInfo([]);
    e.preventDefault();
  };
  return (
    <div className=" shrink-0 md:w-2/6 mb-10 flex mx-auto items-center justify-center h-auto ">
      <div className="w-full mt-10 border-2 bg-white rounded-md shadow-lg shrink-0 drop-shadow-lg">
        {/*h-5/6*/}
        <h1 className="text-center font-bold text-2xl p-0 md:p-3">
          Some Celebrities Birthday this Month
        </h1>
        {/* display data  */}
        <div>
          {info.map((person) => {
            const { name, image, date, id } = person;
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth() + 1;
            const birthMonth = new Date(date).getMonth() + 1;
            if (currentMonth === birthMonth) {
              return (
                <article
                  className="flex gap-4 mt-1 shadow-md p-2 md:p-4 "
                  key={id}>
                  <img
                    className="w-24 h-24 rounded-full object-cover"
                    src={image}
                    alt="image"
                  />
                  <aside className="pt-1">
                    <h1 className="font-bold text-lg">{name}</h1>
                    <p>{new Date(date).toDateString()}</p>
                    <p>{dateGen(date)} years old</p>
                  </aside>
                </article>
              );
            }
          })}
        </div>
        {/* btn container */}
        <div className="w-full flex justify-center">
          <button
            onClick={handleClick}
            className="p-2 bg-[#746CF7] w-4/5 my-3 mx-auto rounded-md shadow-lg hover:bg-[#908beb] text-white font-bold text-xl">
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Display;
