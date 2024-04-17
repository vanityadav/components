type TimerProps = {
  initialTTL?: number;
  interval?: number;
};

type RegexDataType = "text" | "number" | "allow-all";

type KeyboardCommand =
  | "cmd-k"
  | "escape"
  | "down"
  | "up"
  | "enter"
  | "delete"
  | "backspace"
  | "right"
  | "left";

type LoginStep = { step?: "login" | "otp" };
