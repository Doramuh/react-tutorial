import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

const CollapseComponents = () => {
  const [collapseVisibility, setCollapseVisibility] = useState(false);

  return (
    <>
      <div>
        <div>
          <Button
            onClick={() => setCollapseVisibility(!collapseVisibility)}
            aria-expanded="false"
            aria-controls="collapseID"
          >
            Click to see Collapse Effect!
          </Button>
          <Collapse in={collapseVisibility}>
            <div id="collapseID">
              Greetings from GeeksforGeeks, How are you? Stay safe Always keep
              yourself health. Study and work hard.
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
};

export default CollapseComponents;
