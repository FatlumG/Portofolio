import React from "react";
import vulumSignIn from "../assets/images/vulum/vulumSignIn.png";
import vulumSignup from "../assets/images/vulum/vulumSignup.png";
import vulumDashboard from "../assets/images/vulum/vulumDashboard.png";
import vulumProducts from "../assets/images/vulum/vulumProducts.png";
import vulumFavProds from "../assets/images/vulum/vulumFavProds.png";
import vulumAddProd from "../assets/images/vulum/vulumAddProd.png";
import vulumProdDetails from "../assets/images/vulum/vulumProdDetails.png";
import vulumCheckout from "../assets/images/vulum/vulumCheckout.png";
import vulumPendingProds from "../assets/images/vulum/vulumPendingProds.png";
import vulumPricing from "../assets/images/vulum/vulumPricing.png";
import vulumSubscribing from "../assets/images/vulum/vulumSubscribing.png";
import vulumSettings from "../assets/images/vulum/vulumSettings.png";

import VulumImage from "../components/vulum/VulumImage";
import Header from "../components/Header.jsx";

import "../styles/App.css";
import "../styles/components/vulum.css";

function Vulum() {
  return (
    <>
      <Header away={true} />
      <section className="min-vh-100 pb-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-primary text-3xl p-5">VULUM</h1>
        <div className="vulum-imgs d-flex flex-column align-items-center">
          <VulumImage img={vulumSignIn} text="Vulum Sign In Form!" />
          <VulumImage
            img={vulumSignup}
            text="Vulum Sign Up Form!"
          />
          <VulumImage
            img={vulumDashboard}
            text="Vulum Dashboard - You can see here your stats!"
          />
          <VulumImage
            img={vulumProducts}
            text="Vulum Products - You can see here your added products!"
          />
          <VulumImage
            img={vulumFavProds}
            text="Vulum Favourite Products - You can see here your favourite products!"
          />
          <VulumImage
            img={vulumAddProd}
            text="Vulum Add Product Form - Add your own product!"
          />
          <VulumImage
            img={vulumProdDetails}
            text="Vulum Product Details - See anyone's product details(also yours, you can't order your own products)! "
          />
          <VulumImage
            img={vulumCheckout}
            text="Vulum Product Checkout(Stripe Checkout) - Enter your details and purchase the product!"
            fromDirection="left"
          />
          <VulumImage
            img={vulumPendingProds}
            text="Vulum Pending Products - Until the admin allows your product in sale, your product is hidden from the market!"
          />
          <VulumImage
            img={vulumPricing}
            text="Vulum Pricing - See your available subscribing methods!"
          />
          <VulumImage
            img={vulumSubscribing}
            text="Vulum Subscribing - Enter necessary details and subscrible the best option for you!"
          />
          <VulumImage
            img={vulumSettings}
            text="Vulum Settings - See your profile data, add, remove, change for the best profile view!"
          />
        </div>
      </section>
    </>
  );
}

export default Vulum;
