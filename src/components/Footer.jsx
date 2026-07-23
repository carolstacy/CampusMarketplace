function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Campus Marketplace. All rights reserved.</p>
      <p>Built with React </p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1f2937",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px",
  },
};

export default Footer;