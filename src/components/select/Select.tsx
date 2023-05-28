"use client";
import styles from "./select.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowIcon, CloseIcon, SearchIcon } from "@/icons/Icons";

type SelectProps = {
  label?: string;
  placeholder?: string;
  options: unknown[];
  multiple?: boolean;
  defaultValues?: unknown;
  uniqueKey?: string;
  displayKey?: string;
  returnKey?: string;
  searchable?: boolean;
  defaultValueKey?: string;
  onChange?: (value: any) => void;
  keepOpen?: boolean;
  isOpen?: boolean;
};

export default function Select({
  label = "Select",
  placeholder = "Select from list..",
  options,
  multiple = false,
  defaultValues,
  uniqueKey,
  displayKey,
  returnKey,
  searchable = false,
  defaultValueKey,
  keepOpen = false,
  isOpen = false,
  onChange,
}: SelectProps) {
  const [dropdown, setDropdown] = useState(isOpen);
  const [search, setSearch] = useState<string>("");

  const convertedDefault = defaultValues
    ? Array.isArray(defaultValues)
      ? defaultValues
      : [defaultValues]
    : [];

  const defaultState = defaultValueKey
    ? options.filter((option: any) =>
        convertedDefault.find(
          (defaultOption) =>
            option[defaultValueKey] ===
            (defaultOption[defaultValueKey] || defaultOption)
        )
      )
    : convertedDefault;

  const [selectedValues, setSelectedValues] = useState<any[]>(defaultState);

  const optionValues = useMemo(
    () =>
      options?.filter(
        (option: any) =>
          !selectedValues?.find(
            (value) => JSON.stringify(value) === JSON.stringify(option)
          )
      ),
    [options, selectedValues]
  );

  const filteredValues = useMemo(
    () =>
      search
        ? optionValues.filter((ele: any) =>
            displayKey
              ? ele[displayKey]?.toLowerCase().includes(search?.toLowerCase())
              : ele?.toLowerCase().includes(search?.toLowerCase())
          )
        : optionValues,
    [displayKey, optionValues, search]
  );

  const returnSelectedValue = (values: any[]) => {
    if (multiple) {
      if (returnKey) {
        return values.map((ele) => ele?.[returnKey]);
      } else return values;
    } else {
      if (returnKey) {
        return values[0]?.[returnKey];
      } else {
        return values[0];
      }
    }
  };

  const handleChange = (selectedValue: any) => {
    let newValue = multiple
      ? [...selectedValues, selectedValue]
      : [selectedValue];
    setSelectedValues(newValue);
    if (onChange) onChange(returnSelectedValue(newValue));
  };

  const handleRemove = (removedValued: unknown, event?: Event) => {
    event?.stopPropagation();
    const newValue = selectedValues.filter((ele) => ele !== removedValued);
    setSelectedValues(newValue);
    if (onChange) onChange(returnSelectedValue(newValue));
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdown) {
      const handleClose = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setDropdown(false);
        }
      };

      const handleDomClick = (e: Event) => {
        if (!dropdownRef.current?.contains(e.target as Node)) {
          setDropdown(false);
        }
      };

      document.addEventListener("click", handleDomClick);
      document.addEventListener("keydown", handleClose);
      return () => {
        document.removeEventListener("keydown", handleClose);
        document.removeEventListener("click", handleDomClick);
      };
    }
  }, [dropdown]);

  return (
    <label className={styles.dropdown}>
      {label}

      <div
        className={styles.select}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setDropdown(true)}
        onClick={() => setDropdown((prev) => !prev)}
      >
        <div className={styles.selected}>
          {selectedValues?.length > 0 ? (
            <div className={styles.selected_values_list}>
              {selectedValues?.map((ele: any) => (
                <div
                  tabIndex={0}
                  key={
                    uniqueKey ? `selected-${ele[uniqueKey]}` : `selected-${ele}`
                  }
                  onKeyDown={(e) => e.key === "Enter" && handleRemove(ele)}
                  onClick={(event: any) => handleRemove(ele, event)}
                  className={
                    multiple ? styles.selected_values : styles.selected_value
                  }
                >
                  <span>{displayKey ? ele[displayKey] : ele}</span>
                  {multiple && <CloseIcon />}
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.options_label}>{placeholder}</p>
          )}

          <div className={styles.arrow}>
            <ArrowIcon direction="down" />
          </div>
        </div>
        {dropdown && (
          <div
            id="dropdown"
            className={styles.options}
            tabIndex={0}
            ref={dropdownRef}
          >
            {searchable && (
              <div
                className={styles.search}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <SearchIcon />
                <input
                  type="search"
                  value={search}
                  onBlur={(e) => e.stopPropagation()}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  placeholder="Search..."
                  className={styles.search_input}
                />
              </div>
            )}
            {filteredValues?.length > 0 ? (
              <ul className={styles.option_list}>
                {filteredValues?.map((ele: any) => (
                  <li
                    tabIndex={0}
                    key={
                      uniqueKey ? `options-${ele[uniqueKey]}` : `options-${ele}`
                    }
                    onClick={(e) => {
                      handleChange(ele);
                      keepOpen && e.stopPropagation();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleChange(ele);
                        setDropdown(false);
                        !keepOpen && e.stopPropagation();
                      }
                    }}
                    className={styles.option}
                  >
                    {displayKey ? ele[displayKey] : ele}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.option} onClick={(e) => e.stopPropagation()}>
                No items left...
              </p>
            )}
          </div>
        )}
      </div>
    </label>
  );
}
