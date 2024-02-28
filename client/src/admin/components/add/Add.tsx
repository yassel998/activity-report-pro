import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const [inputs, setInputs] = useState({});

  const [err, setError] = useState(null);

  const showSuccessMessage = () => {
    props.setOpen(false); // Close the modal
    Swal.fire({
      title: "Opération réussie!",
      text: "Le collaborateur a été enregistré avec succès!",
      icon: "success",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      showSuccessMessage();
    } catch (err) {
      setError((err as any).response?.data);
    }
  };

  console.log(err);

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Ajouter un nouveau {props.slug}</h1>
        <form>
          {props.columns
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "avatar" &&
                item.field !== "joinedAt" &&
                item.field !== "createdAt" &&
                item.field !== "status" &&
                item.field !== "invoice" &&
                item.field !== "affect" &&
                item.field !== "joined_at"
            )
            .map((column) => (
              <div key={column.field} className="item">
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  name={column.field}
                  onChange={handleChange}
                />
              </div>
            ))}
          <button onClick={handleSubmit}>Envoyer</button>
          {err && <p>{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default Add;
