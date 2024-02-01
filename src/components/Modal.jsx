export default function Modal({ title, children, onClose }) {
  return (
    <>
      <div className="fixed bg-white inset-0 opacity-70"></div>
      <div className="fixed inset-0">
        <div className="flex items-center justify-center min-h-full">
          <div className="bg-white rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)]">
            <div className="border-b flex justify-between p-4">
              <div className="invisible">&#10005;</div>
              <div className="text-3xl font-semibold">{title}</div>
              <button onClick={onClose}>&#10005;</button>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
