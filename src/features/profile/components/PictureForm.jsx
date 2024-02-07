import { useRef, useState } from "react";
import FormButton from "./FormButton";

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const handleClickSave = () => {
    onSave(file);
  };

  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={fileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-between items-center p-4">
        <h5 className="text-xl font-semibold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton onClick={handleClickSave}>Save</FormButton>
              <FormButton
                onClick={() => {
                  setFile(null);
                  fileEl.current.value = "";
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => fileEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        {children(file ? URL.createObjectURL(file) : initialSrc)}
      </div>
    </div>
  );
}
