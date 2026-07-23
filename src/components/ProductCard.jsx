function ProductCard({ name, price, seller }) {
  return (
    <div style={styles.card}>
      <img
        src="https://via.placeholder.com/250x180"
        alt={name}
        style={styles.image}
      />

      <h3>{name}</h3>

      <p><strong>KSh {price}</strong></p>

      <p>Seller: {seller}</p>

      <button style={styles.button}>View Details</button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  image: {
    width: "100%",
    borderRadius: "8px",
  },

  button: {
    marginTop: "10px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProductCard;