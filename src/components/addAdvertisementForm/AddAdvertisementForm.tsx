import { doc, setDoc } from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../../firebase";
import { Button } from "../button";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { InputField } from "../addBookForm/InputField";

export const AddAdvertisementForm = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const clickHandler = async () => {
    if (validate()) {
      await setDoc(doc(db, "adds", uuid()), {
        name: name,
        link: link,
        imageUrl: image,
      });
      navigate("/");
    } else {
      setError("Something is not right😡");
    }
  };

  const validate = () => {
    if (name.length < 3) {
      return false;
    }
    if (link.length < 3) {
      return false;
    }
    if (image.length < 5) {
      return false;
    }
    return true;
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <h1 className="text-text text-xl mb-4">Add advertisement</h1>
      <div className="flex flex-col gap-4">
        <InputField
          placeholder="Company Name"
          value={name}
          changeHandler={(evt) => {
            setError("");
            setName(evt.currentTarget.value);
          }}
        />
        <InputField
          placeholder="Link to Website"
          value={link}
          changeHandler={(evt) => {
            setError("");
            setLink(evt.currentTarget.value);
          }}
        />
        <InputField
          placeholder="ImageUrl"
          value={image}
          changeHandler={(evt) => {
            setError("");
            setImage(evt.currentTarget.value);
          }}
        />
        <Button label="Add add" clickHandler={clickHandler} />
        {error !== "" && <p className="text-red-600 text-center">{error}</p>}
      </div>
    </div>
  );
};
