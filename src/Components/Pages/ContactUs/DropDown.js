import { useState } from "react";
import "./ContactUs.css";
import { MdKeyboardArrowDown } from "react-icons/md";
export const DropDownButton = ({ options, name, onChange, lable }) => {
  const [openOption, setOpenOption] = useState(false);
  const [selcted, setSelcted] = useState();
  return (
    <>
      <div className="inputBox">
        <label className="inputFieldTitle">{lable}</label>
        <div className="dropDownElement">
          <div className="SlectCover">
            <div className="selectValue">{selcted || name}</div>
            <MdKeyboardArrowDown
              className="MdKeyboardArrowDown"
              onClick={() => {
                setOpenOption(!openOption);
              }}
            />
          </div>
          {openOption ? (
            <div className="SlectOption">
              {options.map((i) => {
                return (
                  <>
                    <div
                      className="selectOptionValue"
                      onClick={() => {
                        onChange(i);
                        setSelcted(i);
                      }}
                    >
                      {i}
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
