import React, { useState } from "react";
import {
  GoogleMap,
  InfoBox,
  InfoWindow,
  LoadScript,
  Marker,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Button, Card } from "react-bootstrap";

const containerStyle = {
  width: "100%",
  height: "400px",
};
//22.294675, 73.118827
const center = {
  position: { lat: 22.73218596727011, lng: 88.49984165677665 },
  label: "Brainware University",
  link: "https://goo.gl/maps/TZHiXDScvEMzNtRu8",
};

const nuv = {
  position: { lat: 22.73218596727011, lng: 88.49984165677665 },
  label: "Brainware University",
  link: "https://goo.gl/maps/TZHiXDScvEMzNtRu8",
};

const GoogleMaps = () => {
  const [centers, setCenter] = useState(center);

  const onLoad = (infoWindow) => {
    console.log("infoWindow: ", infoWindow);
  };

  return (
    <div className="Maps">
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "block" }}>
          <h1 style={{ color: "#f3f3f7" }}>Locations</h1>
        </div>
        <div style={{ display: "block", margin: "10px" }}>
          <Button onClick={() => setCenter(center)} variant="secondary">
            Brainware University
          </Button>{" "}
          <Button onClick={() => setCenter(nuv)} variant="secondary">
            All Events
          </Button>
        </div>
      </div>
      <LoadScript googleMapsApiKey={""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: 22.73218596727011, lng: 88.49984165677665 }}
          zoom={15}
        >
          <OverlayView mapPaneName="floatPane" position={centers.position}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{centers.label}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  All Events
                </Card.Subtitle>

                <Card.Link target={"_blank"} href={centers.link}>
                  Direction
                </Card.Link>
              </Card.Body>
            </Card>
          </OverlayView>
          <Marker position={centers.position} title={"Concert Ground"} />

          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};
export default GoogleMaps;
