import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  setEnableDebug,
  type WebChatConfig,
  WebChatContainer,
  type WebChatInstance,
} from "@ibm-watson/assistant-web-chat-react";
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
  IconButton,
  OverflowMenu,
  OverflowMenuItem,
  RadioButtonGroup,
  RadioButton,
  Theme,
} from "@carbon/react";
import { BrightnessContrast, Flag, Maximize, Renew, ShrinkScreen } from "@carbon/icons-react";

import styles from "~/styles/WAChat.module.scss";

const maximizedStyle: { [key: string]: string } = {
  "BASE-height": "100%",
  "BASE-min-height": "100%",
  "BASE-max-height": "100%",
  "BASE-width": "100%",
  "BASE-font-size-med": "16px",
  "BASE-left-position": "0",
  "BASE-right-position": "0",
  "BASE-bottom-position": "0",
  "BASE-box-shadow": "",
  "CARBON-focus": "#ffffff",
  "CARBON-ui-03": "#f4f4f4",
};

const defaultStyle: { [key: string]: string } = {
  "BASE-height": "640px",
  "BASE-min-height": "640px",
  "BASE-max-height": "640px",
  "BASE-width": "380px",
  "BASE-left-position": "auto",
  "BASE-right-position": "32px",
  "BASE-bottom-position": "32px",
  "BASE-box-shadow": "",
  "CARBON-focus": "#ffffff",
  "CARBON-ui-03": "#f4f4f4",
};

const darkStyle: { [key: string]: string } = {
  "CARBON-text-01": "#f4f4f4",
  "CARBON-text-03": "#f4f4f4",
  "CARBON-ui-background": "#393939",
  "CARBON-ui-01": "#262626",
  "CARBON-ui-03": "#525252",
  "BRANDING-border-color": "#525252",
  "BRANDING-background": "#393939",
  "BRANDING-color-text-01": "#f4f4f4",
  "CARBON-hover-ui": "#525252",
};

const customStyle: { [key: string]: string } = {
  "BASE-z-index": "9000",
  "BASE-border-width-med": "0",
  "BASE-font-size-med": "14px",
};

const integrationID = process.env.NEXT_PUBLIC_INTEGRATION_ID
  ? process.env.NEXT_PUBLIC_INTEGRATION_ID
  : "";
const serviceInstanceID = process.env.NEXT_PUBLIC_SERVICE_INSTANCE_ID
  ? process.env.NEXT_PUBLIC_SERVICE_INSTANCE_ID
  : "";

const webChatConfigs: { [key: string]: WebChatConfig } = {
  RagNova: {
    integrationID: integrationID,
    serviceInstanceID: serviceInstanceID,
    //@ts-ignore
    region: "aws-us-east-1",
    showCloseAndRestartButton: true,
  },
};

const selectWebChatConfig = (key: string): WebChatConfig => {
  return webChatConfigs[key]!;
};

const WAChat = () => {
  const [instance, setInstance] = useState<WebChatInstance | null>(null);
  const [initialStyle, setInitialStyle] = useState<object | null>(null);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [userPosition, setUserPosition] = useState<string>("non-manager");

  const onPreSend = (event: any) => {
    if (event.data.input && event.data.input.text === "") {
      event.data.context.skills["actions skill"] = event.data.context.skills["actions skill"] || {};
      event.data.context.skills["actions skill"].skill_variables =
        event.data.context.skills["actions skill"].skill_variables || {};
      event.data.context.skills["actions skill"].skill_variables.employee_position = userPosition;
    }
  };

  const carouselButtonHandler = (event: any) => {
    const { customEventType, messageItem } = event;
    // The 'custom_event_name' property comes from the button response type with button_type of custom_event.
    if (
      customEventType === "buttonItemClicked" &&
      messageItem.custom_event_name === "hotel_1_selection"
    ) {
      alert("THIS IS AN ALERT!!!");
    }
  };

  const onBeforeRender: any = (instance: WebChatInstance) => {
    setInstance(instance);
    const computedStyle = getComputedStyle(document.body);

    const newObj: { [key: string]: string } = {};
    Object.keys(maximizedStyle).forEach((key) => {
      newObj[key] = computedStyle.getPropertyValue(`--WatsonAssistantChat-${key}`);
    });
    Object.keys(darkStyle).forEach((key) => {
      newObj[key] = computedStyle.getPropertyValue(`--WatsonAssistantChat-${key}`);
    });
    console.log(newObj);

    setInitialStyle({ ...defaultStyle, ...customStyle });

    instance.on({ type: "messageItemCustom", handler: carouselButtonHandler });

    instance.updateCSSVariables(customStyle);

    instance.on({ type: "pre:send", handler: onPreSend });
    instance.on({
      type: "window:open",
      handler: () => {
        setIsChatOpen(true);
      },
    });
    instance.on({
      type: "window:close",
      handler: () => {
        setIsChatOpen(false);
      },
    });
  };

  const ifUserPosition = (position: string) => {
    return userPosition == position;
  };

  const chooseUserPosition = (position: string) => {
    setIsChatOpen(false);
    setUserPosition(position);
  };

  return (
    <Theme theme={isDarkMode ? "g90" : "white"}>
      <Header aria-label="RAGstar">
        <HeaderName href="/" prefix="IBM |">
          RAGstar
        </HeaderName>
        <HeaderGlobalBar>
          <RadioButtonGroup
            style={{ marginLeft: "100px" }}
            legendText="User Position"
            name="radio-button-group"
            defaultSelected="non-manager"
            onChange={(value: any) => {
              setUserPosition(value);
              if (instance !== null) {
                instance.on({
                  type: "pre:send",
                  handler: (event: any) => {
                    if (event.data.input && event.data.input.text === "") {
                      event.data.context.skills["actions skill"] =
                        event.data.context.skills["actions skill"] || {};
                      event.data.context.skills["actions skill"].skill_variables =
                        event.data.context.skills["actions skill"].skill_variables || {};
                      event.data.context.skills["actions skill"].skill_variables.employee_position =
                        value;
                    }
                  },
                });
                instance.restartConversation();
              }
            }}
          >
            <RadioButton labelText="Manager" value="manager" id="radio-1" />
            <RadioButton labelText="Non-Manager" value="non-manager" id="radio-2" />
          </RadioButtonGroup>
          <HeaderGlobalAction aria-label="Mode switch">
            <BrightnessContrast
              size={20}
              onClick={() => {
                setIsDarkMode((isDarkMode) => {
                  if (instance) {
                    if (isDarkMode) {
                      instance.updateCSSVariables(initialStyle);
                    } else {
                      instance.updateCSSVariables(darkStyle);
                    }
                  }
                  return !isDarkMode;
                });
              }}
            />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
      <img src="/RAGstar_background.png" style={{ marginTop: "-60px", width: "100%" }}></img>

      <WebChatContainer
        config={selectWebChatConfig("RagNova")}
        onBeforeRender={(instance: WebChatInstance) => onBeforeRender(instance)}
      />
      {isChatOpen && (
        <IconButton
          label="Restart conversation"
          className={
            isFullScreen
              ? isDarkMode
                ? styles.restartButtonMaximizedDark
                : styles.restartButtonMaximizedLight
              : isDarkMode
              ? styles.restartButtonShrinkedDark
              : styles.restartButtonShrinkedLight
          }
          onClick={() => {
            if (instance !== null) {
              instance.restartConversation();
            }
          }}
        >
          <Renew size={20} />
        </IconButton>
      )}
      {isChatOpen &&
        (isFullScreen ? (
          <IconButton
            label="Shrink screen"
            className={isDarkMode ? styles.shrinkScreenButtonDark : styles.shrinkScreenButtonLight}
            onClick={() => {
              if (instance !== null) {
                setIsFullScreen(false);
                instance.updateCSSVariables({ ...initialStyle, ...(isDarkMode ? darkStyle : {}) });
              }
            }}
          >
            <ShrinkScreen size={20} />
          </IconButton>
        ) : (
          <IconButton
            label="Maximize screen"
            className={isDarkMode ? styles.maximizeButtonDark : styles.maximizeButtonLight}
            onClick={() => {
              if (instance !== null) {
                setIsFullScreen(true);
                instance.updateCSSVariables({
                  ...maximizedStyle,
                  ...(isDarkMode ? darkStyle : {}),
                });
              }
            }}
          >
            <Maximize size={16} />
          </IconButton>
        ))}
    </Theme>
  );
};

export default WAChat;
