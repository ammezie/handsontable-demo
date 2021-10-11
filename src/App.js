import { useState } from "react";
import { HotTable } from "@handsontable/react";
import Handsontable from "handsontable";

export default function App() {
  const [settings, setSettings] = useState(() => {
    const initialState = {
      data: Handsontable.helper.createSpreadsheetData(15, 20),
      height: 220,
      licenseKey: "non-commercial-and-evaluation"
    };

    return initialState;
  });
  const handleChange = (setting, states) => (event) => {
    setSettings((prevState) => ({
      ...prevState,
      [setting]: states[event.target.checked ? 1 : 0]
    }));
  };
  return (
    <div>
      <div className="controllers">
        <label>
          <input
            onChange={handleChange("fixedRowsTop", [0, 2])}
            type="checkbox"
          />
          Add fixed rows
        </label>
        <br />

        <label>
          <input
            onChange={handleChange("fixedColumnsLeft", [0, 2])}
            type="checkbox"
          />
          Add fixed columns
        </label>
        <br />

        <label>
          <input
            onChange={handleChange("rowHeaders", [false, true])}
            type="checkbox"
          />
          Enable row headers
        </label>
        <br />

        <label>
          <input
            onChange={handleChange("colHeaders", [false, true])}
            type="checkbox"
          />
          Enable column headers
        </label>
        <br />
      </div>

      <HotTable root="hot" settings={settings} />
    </div>
  );
}
