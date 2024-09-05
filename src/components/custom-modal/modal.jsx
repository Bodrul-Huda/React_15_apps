export default function Modal({ id, header, body, footer, onclose }) {
  return (
    <div
      id={id || "Modal"}
      className="fixed min-w-full min-h-screen bg-slate-400 left-0 top-0"
    >
      <div className=" relative p-0 border m-auto border-red-500 bg-slate-100 w-11/12">
        <div>
          <span
            onClick={onclose}
            className="text-2xl font-semibold cursor-pointer"
          >
            X
          </span>
          <h1>{header ? header : "Header"}</h1>
        </div>
        <div>
          {body ? (
            body
          ) : (
            <div>
              <p>Model Body</p>
            </div>
          )}
        </div>
        <div>
          {footer ? (
            footer
          ) : (
            <div>
              <h1>Footer</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
