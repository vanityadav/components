"use client";

import {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useState,
} from "react";

const list = new Array(1000).fill("Hello");

const VList = ({ rowHeight, offset, newAdd, defaultSize }: any) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(defaultSize);

  const items = list.slice(start, end);
  const height = rowHeight * list.length;

  const refNode = useCallback(
    (node: HTMLDivElement, dir: "top" | "bottom") => {
      const observer = new IntersectionObserver((elements) => {
        if (elements?.[0].isIntersecting) {
          if (dir === "top") {
            let newStart = start,
              newEnd = end;

            if (start === 0) return;
            if (start - newAdd >= 0) {
              newStart = start - newAdd;
              newEnd = end - newAdd;
            }
            if (start - newAdd < 0) {
              newStart = 0;
              newEnd = defaultSize;
            }
            console.log(newStart, newEnd, start, end, dir, node);

            setStart(newStart);
            setEnd(newEnd);
          }

          if (dir === "bottom") {
            let newStart = start,
              newEnd = end;

            const total = list.length;

            if (end === 0) return;
            if (end + newAdd <= total) {
              newStart = start + newAdd;
              newEnd = end + newAdd;
            }
            if (end + newAdd > total) {
              newStart = total - defaultSize;
              newEnd = total;
            }

            console.log(newStart, newEnd, start, end, dir, node);
            setStart(newStart);
            setEnd(newEnd);
          }
        }
      });

      if (node) observer.observe(node);

      return () => observer.unobserve(node);
    },
    [start, end]
  );

  return (
    <div style={{ height, paddingTop: start * rowHeight + "px" }} className="">
      {items.map((item, index, d) => (
        <ListItem
          key={index}
          ref={(node: any) => {
            if (index === offset) refNode(node, "top");
            if (index === d.length - offset) refNode(node, "bottom");
          }}
        >
          {item + (start + index)}
        </ListItem>
      ))}
    </div>
  );
};

const ListItem = forwardRef(
  (props: ComponentPropsWithoutRef<"div">, ref: any) => {
    return <div {...props} ref={ref} />;
  }
);

ListItem.displayName = "ListItem";

export default VList;
