function CategoryCard({ title }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "pointer",
  },
};

export default CategoryCard;