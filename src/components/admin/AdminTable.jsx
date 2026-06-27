export const AdminTable = ({ title, columns, rows }) => (
  <div className="glass overflow-hidden rounded-xl">
    <div className="border-b border-slate-200 p-4 dark:border-white/10">
      <h2 className="text-lg font-extrabold">{title}</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] text-left text-sm">
        <thead className="bg-slate-50 text-slate-500 dark:bg-white/5 dark:text-slate-300">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3 font-bold" key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr className="border-t border-slate-100 dark:border-white/10" key={index}>
              {row.map((cell, cellIndex) => (
                <td className="px-4 py-3" key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
