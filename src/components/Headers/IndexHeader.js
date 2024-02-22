/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Bangladeshi Koblenzer</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Bridging Cultures, Embracing Unity: Bangladeshi Spirit in Koblenz City!
            </h2>

          </Container>
        </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
        <Button
          className="btn-round btn-lg"
          color="danger"
          href="/image-gallery"
        >
          <i className="nc-icon nc-image"></i> Image Gallery
        </Button>
        </h6>

      </div>
    </>
  );
}

export default IndexHeader;
