/* eslint-disable react/prop-types */
const AccordionSummary = ({ summary, open }) => {
  return (
    open && (
      <div
        style={{
          background: "lightgrey",
          color: "#000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          border: "1px solid black",
        }}
      >
        {summary}
      </div>
    )
  );
};

export default AccordionSummary;
