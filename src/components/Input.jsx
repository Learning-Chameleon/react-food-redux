export function Input({ label, type = "text", value, onChange }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <label style={{ marginRight: "10px" }}>{label}:</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          minWidth: "150px",
          padding: "5px",
          borderRadius: "4px",
          display: "block",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}
