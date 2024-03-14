import React from "react";
import burgerImage from "../../assets/burger.jpg";
import Navbar from "../../components/navbar";

export default function About() {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <Navbar />
      <section className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <img src={burgerImage} alt="burger" style={{ width: "auto", height: "300px" }} />
        <br />
        <p className="text-lg text-justify">
          Nikmati Fresh Burger kualitas tinggi yang dibuat dengan daging sapi segar pilihan, sayuran segar, dan rempah-rempah terbaik. Setiap gigitan memberikan pengalaman cita rasa yang sempurna, dengan tekstur lembut daging, renyahnya
          sayuran, dan paduan saus yang menggugah selera. Rasakan kenikmatan burger yang luar biasa dengan setiap suapan
        </p>
      </section>
    </div>
  );
}