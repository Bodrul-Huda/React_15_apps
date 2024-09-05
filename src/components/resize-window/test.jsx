import useResizeWindow from ".";

export default function UseWindowResizeTest() {
  const sizeOfWindow = useResizeWindow();
  const { width, height } = sizeOfWindow;

  return (
    <div className="container mx-auto">
      <div className="py-24">
        <h1 className="py-2">Use Window resize hook</h1>
        <p className="py-2">Width of window {width}</p>
        <p className="py-2">Height of window {height}</p>
      </div>
    </div>
  );
}
