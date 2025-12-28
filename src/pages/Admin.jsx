import { useState, useCallback } from "react";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const addFleet = (fleet) => {
    setFleets((prev) => [...prev, fleet]);
  };

  const updateDriver = useCallback((id, name) => {
    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id ? { ...f, available: !f.available } : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar addFleet={addFleet} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "10px" }}>
        {fleets.map((fleet) => (
          <FleetCard
            key={fleet.id}
            fleet={fleet}
            updateDriver={updateDriver}
            toggleAvailability={toggleAvailability}
            deleteFleet={deleteFleet}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
