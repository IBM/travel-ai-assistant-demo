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
import {
  BrightnessContrast,
  Flag,
  Maximize,
  Renew,
  Settings,
  ShrinkScreen,
} from "@carbon/icons-react";

import styles from "~/styles/WAChat.module.scss";
import { TextInput } from "@carbon/react";
import { Button } from "@carbon/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

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
    headerConfig: { showRestartButton: true },
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
  const [userPosition, setUserPosition] = useState<string>("Vice President");
  const [userName, setUserName] = useState<string>("Joe");

  const onPreSend = (event: any) => {
    if (event.data.input) {
      event.data.context.skills["actions skill"] = event.data.context.skills["actions skill"] || {};
      event.data.context.skills["actions skill"].skill_variables =
        event.data.context.skills["actions skill"].skill_variables || {};
      event.data.context.skills["actions skill"].skill_variables.user_role = userPosition;
      event.data.context.skills["actions skill"].skill_variables.user_name = userName;
    }
  };

  const carouselButtonHandler = (event: any, instance: WebChatInstance) => {
    const { customEventType, messageItem } = event;
    // The 'custom_event_name' property comes from the button response type with button_type of custom_event.
    if (customEventType === "buttonItemClicked") {
      const sendObjectBase = {
        input: {
          message_type: "text",
          text: "",
        },
        context: {
          skills: {
            ["actions skill"]: {
              skill_variables: {
                selected_hotel: 0, // Default value, will be overridden based on the case
                hotel_selection_action: "", // Default value, will be overridden based on the case
              },
            },
          },
        },
      };

      const sendOptions = {
        silent: true,
      };

      switch (messageItem.custom_event_name) {
        case "hotel_1_selection":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 0;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "route";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_1_details":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 0;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "details";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_1_book":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 0;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "book";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_2_selection":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 1;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "route";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_2_details":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 1;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "details";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_2_book":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 1;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "book";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_3_selection":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 2;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "route";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_3_details":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 2;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "details";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_3_book":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 2;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "book";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_4_selection":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 3;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "route";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_4_details":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 3;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "details";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_4_book":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 3;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "book";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_5_selection":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 4;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "route";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_5_details":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 4;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "details";
          instance.send(sendObjectBase, sendOptions);
          break;
        case "hotel_5_book":
          sendObjectBase.context.skills["actions skill"].skill_variables.selected_hotel = 4;
          sendObjectBase.context.skills["actions skill"].skill_variables.hotel_selection_action =
            "book";
          instance.send(sendObjectBase, sendOptions);
          break;
        default:
          break;
      }
    }
  };

  const autoScroll = () => {
    const chatWindow = document.getElementById("WAC__messages");

    if (chatWindow) {
      console.log("Scrolling...");
      chatWindow.scrollTo({
        top: chatWindow.scrollHeight + 1000,
        behavior: "smooth", // Enable smooth scrolling
      });
    }
  };

  const preReceive = (event: any) => {
    const generic = event.data.output.generic;
    for (let i = 0; i < generic.length; i++) {
      const item = generic[i];
      if (item.response_type === "user_defined") {
      
        item.response_type = "conversational_search";
        item.text = event.data.context.skills["actions skill"].skill_variables.generated_output;
        delete item.user_defined;
        (item.citations_title = "How do we know?"), // The title of the citations
          (item.citations = [
            // The citations for the generated response
            {
              title: null,
              text: event.data.context.skills["actions skill"].skill_variables.passage_1,
              body: event.data.context.skills["actions skill"].skill_variables.passage_1,
              search_result_idx: 0,
              range_start: 0,
              range_end: 0,
            },
            {
              title: null,
              text: event.data.context.skills["actions skill"].skill_variables.passage_2,
              body: event.data.context.skills["actions skill"].skill_variables.passage_2,
              search_result_idx: 1,
              range_start: 0,
              range_end: 0,
            },
          ]),
          (item.confidence_scores = {}),
          (item.response_length_option = "concise"), // The response length option
          (item.search_results = [
            // The search results
            {
              result_metadata: {},

              id: "result_1",

              title: null,

              body: event.data.context.skills["actions skill"].skill_variables.passage_1,
            },
            {
              result_metadata: {},

              id: null,

              title: "Test Title",

              body: event.data.context.skills["actions skill"].skill_variables.passage_2,
            },
          ]),
          (item.disclaimer = "Accuracy of generated answers may vary."); // Disclaimer text
        event.updateHistory = true;
      }
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

    setInitialStyle({ ...defaultStyle, ...customStyle });

    instance.on({ type: "messageItemCustom", handler: carouselButtonHandler, instance });

    instance.updateCSSVariables(customStyle);
    instance.on({ type: "pre:receive", handler: preReceive });
    instance.on({ type: "receive", handler: autoScroll });
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

  return (
    <Theme theme={isDarkMode ? "g90" : "white"}>
      <Header aria-label="RAGnova">
        <HeaderName href="/" prefix="IBM |">
          RAGnova
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Settings">
            <Popover>
              <PopoverTrigger>
                <Settings />
              </PopoverTrigger>
              <PopoverContent>
                <>
                  <div className="w-60">
                    <div className="m-4">
                      <RadioButtonGroup
                        legendText="User Position"
                        name="radio-button-group"
                        defaultSelected={userPosition}
                        onChange={(value: any) => {
                          setUserPosition(value);
                        }}
                      >
                        <RadioButton labelText="Team Member" value="Team Member" id="radio-1" />
                        <RadioButton
                          labelText="Vice President"
                          value="Vice President"
                          id="radio-2"
                        />
                      </RadioButtonGroup>
                    </div>
                    <div className="m-4">
                      <TextInput
                        id="text-input-1"
                        type="text"
                        labelText="User Name"
                        helperText=""
                        className="white"
                        value={userName}
                        onChange={(evt: any) => {
                          setUserName(evt.target.value);
                        }}
                      />
                    </div>
                    <div className="mt-4 w-full">
                      <Button
                        labeltext=""
                        className="w-full"
                        onClick={() => {
                          if (instance !== null) {
                            instance.on({
                              type: "pre:send",
                              handler: (event: any) => {
                                if (event.data.input && event.data.input.text === "") {
                                  event.data.context.skills["actions skill"] =
                                    event.data.context.skills["actions skill"] || {};
                                  event.data.context.skills["actions skill"].skill_variables =
                                    event.data.context.skills["actions skill"].skill_variables ||
                                    {};
                                  event.data.context.skills[
                                    "actions skill"
                                  ].skill_variables.user_role = userPosition;
                                  event.data.context.skills[
                                    "actions skill"
                                  ].skill_variables.user_name = userName;
                                }
                              },
                            });
                            instance.restartConversation();
                          }
                        }}
                      >
                        Apply Settings
                      </Button>
                    </div>
                  </div>
                </>
              </PopoverContent>
            </Popover>
          </HeaderGlobalAction>

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
