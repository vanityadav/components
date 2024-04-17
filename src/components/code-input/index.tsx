"use client";

import { InputField } from "../input";
import { regexFilter, sliceResult } from "@/utils/code-field";
import { ChangeEvent, ClipboardEvent, useState } from "react";

type OTPFieldProps = {
  fields?: number;
  fieldLength?: number;
  fieldType?: RegexDataType;
};

const OTPField = ({
  fields = 6,
  fieldLength = 1,
  fieldType = "number",
}: OTPFieldProps) => {
  const boxes = new Array(fields).fill(fieldLength);

  const [otp, setOTP] = useState<string[]>([]);
  const [otpError, setOTPError] = useState("");

  const onPaste = (e: ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData.getData("text/plain").trim();
    if (clipboardData.length < 100)
      setOTP(() => {
        return sliceResult(
          regexFilter(clipboardData, fieldType),
          fields,
          fieldLength
        );
      });
    else {
      setOTP([]);
      setOTPError("Please paste the correct OTP");
    }
  };

  const onFieldValueChange = (
    e: ChangeEvent<HTMLInputElement>,
    currentField: number
  ) => {
    const target = e.target;
    const value = regexFilter(target.value, fieldType);
    const valueLength = value.length;

    if (valueLength >= fieldLength && target.nextElementSibling) {
      (target.nextElementSibling as HTMLInputElement).focus();
    }

    if (valueLength > fieldLength) {
      return;
    }

    setOTP((prev) => {
      const arr = [...prev];
      arr?.splice(currentField, 1, value);
      console.log(arr);

      return arr;
    });
  };

  const onKeyDown = (e: KeyboardEvent, currentField: number) => {
    const code = e.key;
    const target = e.target as HTMLInputElement;
    const currentFieldValue = otp[currentField];
    const caret = target.selectionStart;

    switch (code) {
      case "Backspace":
        if (currentFieldValue === "" && target.previousElementSibling) {
          (target.previousElementSibling as HTMLInputElement).focus();
        }
        break;
      case "ArrowLeft":
        if (
          (currentFieldValue === "" || caret === 0) &&
          target.previousElementSibling
        ) {
          (target.previousElementSibling as HTMLInputElement).focus();
          (target.previousElementSibling as HTMLInputElement).setSelectionRange(
            0,
            fieldLength
          );
        }
        break;
      case "ArrowRight":
        console.log(
          currentFieldValue === "",
          currentFieldValue,
          caret,
          fieldLength
        );
        if (
          ((currentFieldValue || "") === "" || caret === fieldLength) &&
          target.nextElementSibling
        ) {
          (target.nextElementSibling as HTMLInputElement).focus();
        }
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="flex gap-2"
      onScrollCapture={(e) => e.preventDefault()}
      onPaste={onPaste}
    >
      {boxes.map((_, currentField) => (
        <InputField
          key={currentField}
          shape="otp"
          variant="otp"
          type="text"
          name="code-value"
          inputMode={fieldType === "number" ? "numeric" : "text"}
          placeholder="-"
          value={otp?.[currentField] || ""}
          onChange={(e) => onFieldValueChange(e, currentField)}
          onKeyDown={(e) => onKeyDown(e, currentField)}
        />
      ))}
    </div>
  );
};
