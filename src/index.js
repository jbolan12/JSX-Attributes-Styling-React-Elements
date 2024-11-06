import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://imgs.search.brave.com/O-Rves_Bn2DambRCltVfMHSHaSgdIODVuwzvFvd5ay4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDk1/MjA0MDMyL3Bob3Rv/L2ZyZXNoLXRhc3R5/LWJ1cmdlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9azZY/X2dTSGxvLVdkS3Nx/VG5mQmpvRWJqZGhy/bHo2Uk5oVXMyM2l2/cEl4az0"
        alt="Tasty burger"
      />
      <img
        className="food-img"
        src="https://imgs.search.brave.com/8KSOwJUW0xPtyGboujoZ7WRGqyCZEbBReMmOsLpZUdI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/OTQ2NzAxL3Bob3Rv/L3BpenphLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05N3Jj/MFZJaS1zM21uNHhl/NHhEeTlTLVhKX09o/Ym45MlhhRU1haUlE/X2VZPQ"
        alt="Truly Italian Pizza"
      />
      <img
        className="food-img"
        src="https://imgs.search.brave.com/Itk7cjzASKFtgyTKeSgp6Bw5SafvLG_d1OijIEsMbPs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/MDkzNzIyL3Bob3Rv/L3N0ZWFrLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz12NUxj/X29ONHRfM2lsSi05/V0VXMXljNHpyeUtJ/eU9US1FReFRaYzdY/MDc0PQ"
        alt="A juicy T-Bone Steak"
      />
    </div>
    <h1>Random Image Ipsum</h1>
    <img src={img}></img>
  </div>,
  document.getElementById("root")
);
