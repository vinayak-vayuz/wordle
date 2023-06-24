import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-center items-center pt-4 pb-5 text-[#9e9fb4] text-center wp-footer">
        Built with ❤️ by
        <a
          className=" ml-1 hover:text-red-600 text-blue-600"
          href="https://www.vayuz.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" w-20 "
            src="https://www.vayuz.com/wp-content/uploads/2016/11/VAYUZ_Main-Logo_Ver_201612111-300x70.png"
            alt=""
          />
        </a>
      </div>
    </>
  );
};

export default Footer;
