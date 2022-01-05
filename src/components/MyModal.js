import { Card, Modal, ModalBody, ModalTitle, Button } from 'react-bootstrap';
import "./MyModal.css"


function MyModal(props) {
  return (
    <div>
      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01" src={props.src}/>
        <div id="caption"></div>
      </div>
    </div>
  )
}

export default MyModal;