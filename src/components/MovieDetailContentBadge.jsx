import React from "react";

export default function MovieDetailContentBadge({ text, value }) {
  return (
    <li className="flex gap-2 text-sm">
      <span className="w-36 bg-red-600 rounded-full inline-block text-center">
        {text}
      </span>
      <span>
        {text === "Budget" || text === "Revenue" ? "$" : ""}
        {`${value}`}
        {text === "Time" ? " Minutes" : ""}
      </span>
    </li>
  );
}
