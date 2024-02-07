import { useRef, useState } from "react";
import Avatar from "../../../components/Avatar";
import FormButton from "./FormButton";

// const file = document.getElementById("file");
// file.click

export default function PictureForm({ title, children }) {
  const fileEl = useRef();
  const [file, setFile] = useState(null);
  const render = (src) => (
    <Avatar size={10.5} src={file ? URL.createObjectURL(file) : undefined} />
  );
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
              <FormButton>Save</FormButton>
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
      <div className="flex justify-center pb-4">{render()}</div>
    </div>
  );
}
