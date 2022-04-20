import { useState } from "react";

export default function PrivatePage(props) {
  const [image, setImage] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);
    body.append("test", image);
    const response = await fetch("/api/hello", {
      method: "POST",
      body,
    });
    console.log(response);
  };

  return (
    <div>
      <div>
        <h4>Select Image</h4>
        <input type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}
