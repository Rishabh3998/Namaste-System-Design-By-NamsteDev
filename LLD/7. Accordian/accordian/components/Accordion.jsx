import { useState } from "react";
import { DATA } from "../data/data";
import AccordionSummary from "./AccordionSummary";

const Accordion = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (index) => {
    setOpen((prev) => {
      if (prev === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  return (
    <div>
      {DATA.map(({ title, summary }, index) => {
        return (
          <div key={title}>
            <div
              style={{
                height: "2rem",
                background: "grey",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem",
                border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => handleOpen(index)}
            >
              <div>{title}</div>
              <div>{!open ? "🔽" : "🔼"}</div>
            </div>
            <AccordionSummary summary={summary} open={open === index} />
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
