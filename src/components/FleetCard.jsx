import React from "react";

const FleetCard = React.memo(
  ({ fleet, updateDriver, toggleAvailability, deleteFleet }) => {
    const handleUpdate = () => {
      const name = prompt("New driver name");
      if (name && name.trim()) {
        updateDriver(fleet.id, name);
      }
    };

    return (
      <div style={{ border: "1px solid gray", padding: "10px" }}>
        <p>Reg No: {fleet.regNo}</p>
        <p>Category: {fleet.category}</p>
        <p>Driver: {fleet.driver}</p>
        <p>Status: {fleet.available ? "Available" : "Unavailable"}</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
          width="60"
        />
        <br />
        <button onClick={handleUpdate}>Update Driver</button>
        <button onClick={() => toggleAvailability(fleet.id)}>
          Toggle Status
        </button>
        <button onClick={() => deleteFleet(fleet.id)}>Delete</button>
      </div>
    );
  }
);

export default FleetCard;
