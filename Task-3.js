import { useReducer } from "react";

const initialHolidays = [
  {
    id: 1,
    title: "Christmas",
    complete: true,
  },
  {
    id: 2,
    title: "8th March",
    complete: false,
  },
];

const reducer = (state, action) => {
  console.log("state", JSON.stringify(state));
  console.log("action", JSON.stringify(action));
  switch (action.type) {
    case "COMPLETE":
      return state.map((holiday) => {
        if (action.id === holiday.id) {
          return { ...holiday, complete: action.complete };
        }
        return holiday;
      });
    default:
      return state;
  }
};

function Holidays() {
  const [holidays, dispatch] = useReducer(reducer, initialHolidays);

  const handleComplete = (event, holiday) => {
    dispatch({
      type: "COMPLETE",
      id: holiday.id,
      complete: event.target.checked,
    });
  };

  return (
    <>
      {holidays.map((holiday) => (
        <div key={holiday.id}>
          <label>
            <input
              type="checkbox"
              checked={holiday.complete}
              onChange={(event) => handleComplete(event, holiday)}
            />
            {holiday.title}
          </label>
        </div>
      ))}
    </>
  );
}
