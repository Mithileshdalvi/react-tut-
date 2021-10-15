import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalisopen, setModalisopen] = useState(false);

  function deletehandler() {
    setModalisopen(true);
  }

  function Closehandler() {
    setModalisopen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deletehandler}>
          Delete
        </button>
      </div>
      {modalisopen && (
        <Modal oncancel={Closehandler} onConfirm={Closehandler} />
      )}
      {/*another way to write above statemnt = {modalisopen ? <Modal /> : null} */}
      {modalisopen && <Backdrop oncancel={Closehandler} />}
    </div>
  );
}

export default Todo;
