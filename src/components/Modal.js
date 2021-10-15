function Modal(props) {
  function Closehandler() {
    props.oncancel();
  }
  function confirmhandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are u sure?!</p>
      <button className="btn btn--alt" onClick={Closehandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmhandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
