import React from "react";

function Table({ data, columns }) {
  return (
    <div className="overflow-x-auto  rounded-lg border border-gray-200">
      <table className="min-w-full">
        <thead className="">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-3 py-3 text-left text-[12px] font-syne text-gray-500 uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-gray-300   text-white hover:text-gray-600  transition-colors"
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="px-3 py-4 font-code pr-1 text-sm whitespace-nowrap"
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
