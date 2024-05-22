import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast, ToastHeader, ToastBody, Button } from "react-bootstrap";

const MyToast = () => {
    return (
        <div
            className="position-fixed bottom-0 end-0 p-3"
            style={{ zIndex: 11 }}
        >
            <Toast
                id="liveToast"
                className="hide"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
            >
                <ToastHeader>
                    <img src="..." className="rounded me-2" alt="..." />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <Button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></Button>
                </ToastHeader>
                <ToastBody>Hello, world! This is a toast message.</ToastBody>
            </Toast>
        </div>
    );
};

export default MyToast;
