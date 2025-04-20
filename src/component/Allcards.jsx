
   


function Allcards({data}) {
  console.log(data);
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f0f4f8",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            width: "300px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "460px",
            overflow: "hidden",
          
            textAlign: "center",
          }}
        >
          <img
            src={item.images[0]}
            alt={item.title}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />
          <h3 style={{ margin: "5px 0", color: "#333" }}>{item.title}</h3>
          <h4 style={{ margin: "5px 0", color: "#666", fontWeight: "normal" }}>
            Brand: {item.brand}
          </h4>
          <p style={{ margin: "5px 0", color: "#444", fontSize: "14px", flexGrow: 1 }}>
            {item.description}
          </p>
          <p style={{ margin: "5px 0", fontWeight: "bold", color: "#007bff" }}>
            Price: ${item.price.toFixed(2)}
          </p>
          <p style={{ margin: "5px 0", color: "#555" }}>Category: {item.category}</p>
          <p style={{ margin: "5px 0", color: "#555" }}>
            Minimum Order Quantity: {item.minimumOrderQuantity}
          </p>
          <p style={{ margin: "5px 0", color: "#555" }}>Rating: {item.rating}</p>
          <p style={{ margin: "5px 0", color: "#555" }}>Return Policy: {item.returnPolicy}</p>
          <p style={{ margin: "5px 0", color: "#555" }}>Stock: {item.stock}</p>
        </div>
      ))}
    </div>
  );
}
export default Allcards