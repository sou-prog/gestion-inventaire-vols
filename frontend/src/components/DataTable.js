import React, { useState } from "react";
import "./DataTable.css";

export const DataTable = ({ data, columns, onUpdate }) => {
  const [editingRowId, setEditingRowId] = useState(null);

  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[columns[0].key]}>
            {columns.map((col) => (
              <td key={col.key}>
                {editingRowId === row[columns[0].key] && col.editable ? (
                  <input
                    className="editable-input"
                    type="text"
                    value={row[col.key]}
                    onChange={(e) =>
                      onUpdate(row[columns[0].key], col.key, e.target.value)
                    }
                  />
                ) : (
                  row[col.key]
                )}
              </td>
            ))}
            <td>
              {editingRowId === row[columns[0].key] ? (
                <>
                  <button onClick={() => setEditingRowId(null)}>Save</button>
                  <button onClick={() => setEditingRowId(null)}>Cancel</button>
                </>
              ) : (
                <button onClick={() => setEditingRowId(row[columns[0].key])}>Edit</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
