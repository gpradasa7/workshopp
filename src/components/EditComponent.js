import { useForm } from "../hooks/useForm";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import { editProductAsync } from "../Redux/actions/actionEditComponent";

const EditComponent = ({ datos }) => {
  const dispatch = useDispatch();

  //-----------Activacion del Modal-----------------------------------//
  const [show, setShow] = useState(true);
  //-----------------cerrar------------------------//
  const handleClose = () => setShow(false);

  //-------------------Manipulación del Formulario y lograr Editar----------------------------//
  const [formValue, handleInputChange, reset] = useForm({
    headline: "",
    category: "",
    contact: "",
    phone: "",
    pay: "",
    comments: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValue);
    dispatch(editProductAsync(formValue));
    handleClose();
    reset();
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Productos Agregados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            style={{ margin: "5%", marginLeft: "10%", marginRight: "10%" }}
          >
            <h1 style={{ textAlign: "center", color: "blue" }}>
              PRODUCTOS PUBLICADOS
            </h1>
            <hr />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>headline</Form.Label>
              <Form.Control
                type="text"
                name="headline"
                value={formValue.headline}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Categoria del producto"
                name="category"
                value={formValue.category}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formValue.contact}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={formValue.phone}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Pago con tarjeta</Form.Label>
              <Form.Control
                type="checkbox"
                name="pay"
                value={formValue.pay}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Detalles producto</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="comments"
                value={formValue.comments}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button type="submit" variant="info">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditComponent;
