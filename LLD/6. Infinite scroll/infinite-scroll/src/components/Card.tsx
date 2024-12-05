/* eslint-disable @typescript-eslint/no-explicit-any */
const Card = ({ product }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
      }}
    >
      <div>
        <img src={product?.images[0]} alt={product?.title} height="200px" />
      </div>
      <div>{product?.title}</div>
    </div>
  );
};

export default Card;
