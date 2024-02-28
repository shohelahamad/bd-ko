import React from "react";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  const items_2023 = [];
  for (let i = 1; i <= 12; i++) {
    items_2023.push({
      src: require(`assets/img/2023/${i}.jpg`),
      altText: "",
      caption: "",
    });
  }
  const items_2022 = [];
  for (let i = 1; i <= 5; i++) {
    items_2022.push({
      src: require(`assets/img/2022/${i}.JPG`),
      altText: "",
      caption: "",
    });
  }
  const items_2021 = [];
  for (let i = 1; i <= 2; i++) {
    items_2021.push({
      src: require(`assets/img/2021/${i}.jpg`),
      altText: "",
      caption: "",
    });
  }
  const items_2019 = [];
  for (let i = 1; i <= 10; i++) {
    items_2019.push({
      src: require(`assets/img/2019/${i}.JPG`),
      altText: "",
      caption: "",
    });
  }
  const items_2018 = [];
  for (let i = 1; i <= 7; i++) {
    items_2018.push({
      src: require(`assets/img/2018/${i}.jpg`),
      altText: "",
      caption: "",
    });
  }
  const items_2017 = [];
  for (let i = 1; i <= 3; i++) {
    items_2017.push({
      src: require(`assets/img/2017/${i}.jpg`),
      altText: "",
      caption: "",
    });
  }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center" id="part-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Image gallery 2023</h2>
                <SectionCarousel items={items_2023}/>
                <Button
                  className="btn-outline-danger"
                  color="default"
                  href="https://drive.google.com/drive/folders/1bMXlRQVbzhIKtde1JTgwvwEGAzd_HCOa"
                  target="_blank"
                >
                <i className="nc-icon nc-album-2" />
                  <span> More photos of 2023 on Google Drive</span>
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Image gallery 2022</h2>
                <SectionCarousel items={items_2022}/>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Image gallery 2021</h2>
                <SectionCarousel items={items_2021}/>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Image gallery 2019</h2>
                <SectionCarousel items={items_2019}/>
                <Button
                  className="btn-outline-danger"
                  color="default"
                  href="https://drive.google.com/drive/folders/1o2qrERvJQ61Vn2vmUEQMWpVQkSOyHqZU"
                  target="_blank"
                >
                <i className="nc-icon nc-album-2" />
                  <span> More photos of 2019 on Google Drive</span>
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Image gallery 2018</h2>
                <SectionCarousel items={items_2018}/>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className="ml-auto mr-auto" md="12">
              <h2 className="title">Image gallery 2017</h2>
                <SectionCarousel items={items_2017}/>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
