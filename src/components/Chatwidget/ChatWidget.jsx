import React, { useState } from "react";

// Components
import ChatPopup from "../ChatPopup/ChatPopup";

// Hooks & Utils
import { defaultThemes } from "../../utils/defaultTheme";
import useThemes from "../../utils/hooks/useThemes";


const ChatWidget = () => {
  const [isShowChat, setShowChat] = useState(false);
  const themes = useThemes(defaultThemes);

  const toggleShowChat = () => {
    setShowChat(!isShowChat);
  };

  return (
    <>
      {isShowChat ? (
        <ChatPopup useShowChat={toggleShowChat} themes={themes} />
      ) : (
        <div className="flex fixed bottom-10 right-10">
          <div
            style={{ backgroundColor: themes.logoBgColor }}
            className="mr-2 rounded-xl flex-shrink-0"
          >
            {themes.imagePath ? (
              <img
                src={themes.imagePath}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
                alt="Chat Widget Logo"
              />
            ) : (
              "null"
            )}
          </div>
          <div
            onClick={toggleShowChat}
            style={{
              backgroundColor: themes.bgColor,
              color: themes.buttonTextColor,
            }}
            className="rounded-xl p-3 font-light text-[1rem] cursor-pointer"
          >
            <div>{themes.buttonText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
