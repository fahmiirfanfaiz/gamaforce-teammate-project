// import React from "react";

// interface CRUDButtonProps {
//   action: "create" | "read" | "update" | "delete";
//   onClick: () => void;
//   isEditing?: boolean;
// }

// const CRUDButton: React.FC<CRUDButtonProps> = ({ action, onClick, isEditing }) => {
//   const renderButtonLabel = () => {
//     switch (action) {
//       case "create":
//         return "Create Mission";
//       case "read":
//         return "Show All Missions";
//       case "update":
//         return isEditing ? "Update Mission" : "Update Mission";
//       case "delete":
//         return "Delete Mission";
//       default:
//         return "Action";
//     }
//   };

//   return (
//     <button onClick={onClick} style={styles.button}>
//       {renderButtonLabel()}
//     </button>
//   );
// };

// // Styling (optional)
// const styles = {
//   button: {
//     padding: "10px 20px",
//     fontSize: "16px",
//     margin: "10px",
//     cursor: "pointer",
//     border: "1px solid #ccc",
//     backgroundColor: "#007bff",
//     color: "white",
//     borderRadius: "5px",
//   },
// };

// export default CRUDButton;
