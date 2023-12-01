import Link from "next/link";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { HdrOffSelect } from "@mui/icons-material";

export const question = [
  // location empty
  {
    image: "/assets/broken-down-cars.jpg",
    title: "location empty",
    description: (
      <>
        <p>empty</p>
      </>
    ),
  },

  // Question 1
  // {
  //   image: "/assets/locationsImages/sublocation1Images/1.jpg",
  //   title: "What is the process of selling a car for cash in Sydney?",
  //   description: (
  //     <>
  //       <p>
  //         Selling your car for cash in Sydney has never been easier, thanks to{" "}
  //         <Link href={"/"}>Aux Cash for Cars</Link>. Our streamlined process
  //         ensures a hassle-free experience, putting cash in your hands quickly
  //         and efficiently. Here's a step-by-step guide to selling your car with
  //         us:
  //       </p>
  //       <ol>
  //         <h2>
  //           <li>Online Valuation:</li>
  //         </h2>
  //         <p>
  //           Start by filling out our online valuation form. Provide accurate
  //           details about your vehicle, including make, model, year, and
  //           condition. Our experts will assess the information and provide you
  //           with a fair and competitive quote.
  //         </p>
  //         <h2>
  //           <li>Schedule an Inspection:</li>
  //         </h2>
  //         <p>
  //           Once you receive your quote and are satisfied with the offer, our
  //           team will schedule an on-site inspection at a time that suits you.
  //           We'll assess the condition of your car and verify the details
  //           provided.
  //         </p>
  //         <h2>
  //           <li>Receive a Cash Offer:</li>
  //         </h2>
  //         <p>
  //           After the inspection, we'll present you with a final cash offer. If
  //           you accept, we move forward to the next steps. Our offers are
  //           transparent, and there are no hidden fees or last-minute surprises.
  //         </p>
  //         <h2>
  //           <li>Paperwork Simplified:</li>
  //         </h2>
  //         <p>
  //           We take care of all the necessary paperwork, making the process
  //           swift and stress-free. Our team will guide you through the
  //           paperwork, ensuring everything is in order for a smooth transaction.
  //         </p>
  //         <h2>
  //           <li>Get Paid Instantly:</li>
  //         </h2>
  //         <p>
  //           Once the paperwork is complete, we hand you the cash on the spot. No
  //           waiting for bank transfers or checks to clear – you walk away with
  //           money in your pocket.
  //         </p>
  //         <h2>
  //           <li>Free Car Removal:</li>
  //         </h2>
  //         <p>
  //           <Link href={"/"}>Aux Cash for Cars</Link> provides complimentary car
  //           removal services. We'll tow away your vehicle at no extra cost,
  //           saving you time and effort.
  //         </p>
  //         <h2>
  //           <li>Environmentally Friendly Disposal:</li>
  //         </h2>
  //         <p>
  //           Concerned about the environment? We adhere to eco-friendly disposal
  //           practices, recycling and salvaging components to minimize our
  //           environmental impact.
  //         </p>
  //       </ol>
  //       <p>
  //         At <Link href={"/"}>Aux Cash for Cars </Link>, we prioritize customer
  //         satisfaction and strive to make selling your car a seamless
  //         experience. Contact us today to turn your unwanted vehicle into
  //         instant cash.
  //       </p>
  //     </>
  //   ),
  //   tags: (
  //     <>
  //       <h2>Sell car Sydney</h2>, <h2>Cash for cars process</h2>,{" "}
  //       <h2>Sydney car selling steps</h2>, <h2>Instant cash for cars</h2>,{" "}
  //       <h2>Car valuation Sydney</h2>, <h2>Hassle-free car sale</h2>,{" "}
  //       <h2>On-site car inspection</h2>, <h2>Transparent cash offers</h2>,{" "}
  //       <h2>Free car removal Sydney</h2>, <h2>Eco-friendly car disposal</h2>,{" "}
  //       <h2>Quick cash for unwanted cars</h2>, <h2>Sydney car selling guide</h2>
  //       , <h2>Best cash offers for cars</h2>,{" "}
  //       <h2>Streamlined car selling process</h2>,{" "}
  //       <h2>Top car buyers in Sydney</h2>, <h2>Sell my car today for cash</h2>,{" "}
  //       <h2>Efficient car selling Sydney</h2>, <h2>Sydney auto resale</h2>,{" "}
  //       <h2>Fast and easy car cash sale</h2>
  //     </>
  //   ),
  // },

  // Question 2
  {
    image: "/assets/locationsImages/sublocation1Images/2.jpg",
    title:
      "Are there specific requirements for selling a car for cash in Sydney?",
    description: (
      <>
        <p>
          Selling your car for cash in Sydney with{" "}
          <Link href={"/"}>Aux Cash for Cars</Link> is a straightforward process
          designed to provide you with a hassle-free experience. While specific
          requirements may vary, here are the general steps to sell your car:
        </p>
        <ol>
          <h2>
            <li>Vehicle Information:</li>
          </h2>
          <p>
            Provide accurate details about your car, including make, model,
            year, mileage, and overall condition.
          </p>
          <h2>
            <li>Ownership Documentation:</li>
          </h2>
          <p>
            Ensure you have the legal right to sell the vehicle. Have the
            original title and any other relevant ownership documents ready.
          </p>
          <h2>
            <li>Identification:</li>
          </h2>
          <p>
            Bring a valid form of identification, such as a driver's license, to
            verify your identity.
          </p>
          <h2>
            <li>Vehicle Inspection:</li>
          </h2>
          <p>
            <Link href={"/"}>Aux Cash for Cars</Link> may conduct a brief
            inspection of your vehicle to assess its condition. Ensure your car
            is clean and accessible for inspection.
          </p>
          <h2>
            <li>Maintenance Records:</li>
          </h2>
          <p>
            While not always required, having maintenance records can enhance
            the credibility of your vehicle and potentially result in a better
            offer.
          </p>
          <h2>
            <li>Remove Personal Belongings:</li>
          </h2>
          <p>
            Clean out your car and remove personal belongings before the
            transaction.
          </p>
          <h2>
            <li>Negotiation and Agreement:</li>
          </h2>
          <p>
            Once the assessment is complete, Aux Cash for Cars will provide a
            cash offer. Feel free to negotiate, and once an agreement is
            reached, the paperwork can begin.
          </p>
          <h2>
            <li>Paperwork:</li>
          </h2>
          <p>
            Sign the necessary paperwork to transfer ownership.{" "}
            <Link href={"/"}>Aux Cash for Cars</Link> will guide you through
            this process.
          </p>
          <h2>
            <li>Payment:</li>
          </h2>
          <p>
            Receive your cash payment promptly upon completion of the paperwork
            and transfer of ownership.
          </p>
          <h2>
            <li>Towing Service:</li>
          </h2>
          <p>
            If needed, <Link href={"/"}>Aux Cash for Cars</Link> may offer
            towing services to transport the vehicle from your location.
          </p>
        </ol>
        <p>
          Please note that these are general guidelines, and specific
          requirements may vary. It's advisable to contact{" "}
          <Link href={"/"}>Aux Cash for Cars</Link> directly or visit their
          website for the most accurate and up-to-date information.
        </p>
        <p>
          For more information and to initiate the selling process, visit{" "}
          <Link href={"/"}>Aux Cash for Cars Sydney</Link> or contact their
          customer service.
        </p>
      </>
    ),
    tags: (
      <>
        <h2>Sell car for cash Sydney</h2>, <h2>Cash for cars requirements</h2>,{" "}
        <h2>Selling a car in Sydney guidelines</h2>,{" "}
        <h2>Sydney car selling process</h2>,{" "}
        <h2>Cash for cars eligibility criteria</h2>,{" "}
        <h2>Quick cash sale Sydney</h2>,{" "}
        <h2>Selling car without a title Sydney</h2>,{" "}
        <h2>Car selling documentation Sydney</h2>,{" "}
        <h2>Instant cash for cars Sydney</h2>,{" "}
        <h2>Sydney car buyers regulations</h2>,{" "}
        <h2>Selling unregistered car for cash Sydney</h2>,{" "}
        <h2>Best way to sell car for cash in Sydney</h2>,{" "}
        <h2>Cash for cars inspection Sydney</h2>,{" "}
        <h2>Sydney car selling tips</h2>,{" "}
        <h2>Legal aspects of selling a car for cash</h2>,{" "}
        <h2>Selling damaged car for cash Sydney</h2>,{" "}
        <h2>Cash for cars without roadworthy certificate Sydney</h2>,{" "}
        <h2>Sydney scrap car removal cash</h2>,{" "}
        <h2>Get cash for old cars Sydney</h2>,{" "}
      </>
    ),
  },

  // Question 3
  // {
  //   image: "/assets/locationsImages/sublocation1Images/3.jpg",
  //   title: "How can I get a cash quote for my car in Sydney?",
  //   description: (
  //     <>
  //       <p>
  //         To get a cash quote for your car in Sydney through a "
  //         <Link href={"/"}>Cash for Cars</Link>" service, you can follow these
  //         general steps:
  //       </p>
  //       <ol>
  //         <h2>
  //           <li>Research Local Cash for Cars Services:</li>
  //         </h2>
  //         <p>
  //           Start by researching and identifying reputable{" "}
  //           <Link href={"/"}>Cash for Cars services</Link> in Sydney. You can
  //           use online search engines, business directories, or ask for
  //           recommendations from friends and family.
  //         </p>
  //         <h2>
  //           <li>Contact the Service Providers:</li>
  //         </h2>
  //         <p>
  //           Reach out to the selected Cash for Cars companies through phone,
  //           email, or their online contact forms. Provide them with details
  //           about your car, such as its make, model, year, condition, and any
  //           relevant information.
  //         </p>
  //         <h2>
  //           <li>Get a Quote:</li>
  //         </h2>
  //         <p>
  //           Once you've contacted the service providers, they will typically ask
  //           for details about your car to provide you with a cash quote. Be
  //           honest and accurate in your description to get the most accurate
  //           estimate.
  //         </p>
  //         <h2>
  //           <li>Schedule an Inspection:</li>
  //         </h2>
  //         <p>
  //           In many cases, the <Link href={"/"}>Cash for Cars service</Link> may
  //           want to inspect your car in person to assess its condition. They
  //           might do this at your location or ask you to bring the car to their
  //           facility.
  //         </p>
  //         <h2>
  //           <li>Receive the Cash Offer:</li>
  //         </h2>
  //         <p>
  //           After the inspection, the service will present you with a cash offer
  //           for your car. Evaluate the offer and decide whether it meets your
  //           expectations.
  //         </p>
  //         <h2>
  //           <li>Negotiate if Necessary:</li>
  //         </h2>
  //         <p>
  //           If you feel the initial offer is not satisfactory, you can try
  //           negotiating with the <Link href={"/"}>Cash for Cars service</Link>.{" "}
  //           They may be willing to adjust the offer based on factors such as
  //           market conditions, demand for your specific car, and its overall
  //           condition.
  //         </p>
  //         <h2>
  //           <li>Finalize the Deal:</li>
  //         </h2>
  //         <p>
  //           Once you've agreed on a cash offer, finalize the deal. The{" "}
  //           <Link href={"/"}>Cash for Cars service</Link> will typically handle
  //           the necessary paperwork, and you'll receive the agreed-upon cash
  //           amount.
  //         </p>
  //         <h2>
  //           <li>Arrange for Car Removal:</li>
  //         </h2>
  //         <p>
  //           If your car is not in working condition, the service will usually
  //           offer free towing or removal services. Ensure that these logistics
  //           are coordinated smoothly.
  //         </p>
  //       </ol>
  //       <p>
  //         Remember to choose a reputable and licensed{" "}
  //         <Link href={"/"}>Cash for Cars service</Link> to ensure a fair and
  //         transparent transaction. Always read reviews and testimonials to gauge
  //         the experiences of others who have used the service.
  //       </p>
  //     </>
  //   ),
  //   tags: (
  //     <>
  //       <h2>Cash car quote Sydney</h2>, <h2>Car valuation Sydney</h2>,{" "}
  //       <h2>Sell my car for cash Sydney</h2>,{" "}
  //       <h2>Instant cash offer for my car</h2>, <h2>Sydney car buyers</h2>,{" "}
  //       <h2>Get cash for your car today</h2>, <h2>Car selling quotes Sydney</h2>
  //       , <h2>Quick cash quote for my car</h2>, <h2>Sell used car Sydney</h2>,{" "}
  //       <h2>Top cash for cars Sydney</h2>,{" "}
  //       <h2>Cash for unwanted cars Sydney</h2>,{" "}
  //       <h2>Best car valuation service</h2>, <h2>Sell my car fast Sydney</h2>,{" "}
  //       <h2>Free car valuation Sydney</h2>,{" "}
  //       <h2>Cash offer for my car in Sydney</h2>,{" "}
  //       <h2>Sell your car in Sydney for cash</h2>,{" "}
  //       <h2>Instant car appraisal Sydney</h2>,{" "}
  //       <h2>Reliable car selling quotes</h2>,{" "}
  //       <h2>Sydney's best cash for cars</h2>,{" "}
  //       <h2>Quick and easy car valuation Sydney</h2>,{" "}
  //     </>
  //   ),
  // },

  // Question 4
  // {
  //   image: "/assets/locationsImages/sublocation1Images/4.jpg",
  //   title:
  //     "Do I need to provide any documentation when selling my car for cash?",
  //   description: (
  //     <>
  //       <p>
  //         Certainly! When selling your car for cash through{" "}
  //         <Link href={"/"}>Aux Cash for Cars Sydney</Link>, it's important to be
  //         prepared with the necessary documentation to ensure a smooth and
  //         transparent transaction. While specific requirements may vary, the
  //         following documents are commonly needed:
  //       </p>
  //       <ol>
  //         <h2>
  //           <li>Vehicle Title:</li>
  //         </h2>
  //         <p>
  //           Ensure that you have the original title of the vehicle, as it serves
  //           as proof of ownership. If there is a lien on the car, you may need
  //           to coordinate with the lienholder to complete the sale.
  //         </p>
  //         <h2>
  //           <li>Valid ID:</li>
  //         </h2>
  //         <p>
  //           Provide a government-issued identification document, such as a
  //           driver's license or passport. This helps verify your identity as the
  //           legal owner of the vehicle.
  //         </p>
  //         <h2>
  //           <li>Maintenance Records:</li>
  //         </h2>
  //         <p>
  //           While not always required, having maintenance records can add value
  //           to your car and reassure the buyer about its history and condition.
  //         </p>
  //         <h2>
  //           <li>Bill of Sale:</li>
  //         </h2>
  //         <p>
  //           Draft a bill of sale that includes details such as the sale price,
  //           date of sale, your contact information, the buyer's information, and
  //           a description of the vehicle. Both parties should sign this
  //           document.
  //         </p>
  //         <h2>
  //           <li>Release of Liability Form:</li>
  //         </h2>
  //         <p>
  //           Some regions may require you to fill out a release of liability
  //           form. This document informs the relevant authorities that you are no
  //           longer responsible for the vehicle after the sale.
  //         </p>
  //         <h2>
  //           <li>Odometer Disclosure Statement:</li>
  //         </h2>
  //         <p>
  //           If your vehicle is under a certain age, you may need to provide an
  //           odometer disclosure statement, indicating the accurate mileage of
  //           the car at the time of sale.
  //         </p>
  //         <h2>
  //           <li>Smog Certification:</li>
  //         </h2>
  //         <p>
  //           Depending on your location, you might need to provide a recent smog
  //           certification. Ensure that your vehicle complies with local emission
  //           standards.
  //         </p>
  //         <h2>
  //           <li>Any Outstanding Recall Information:</li>
  //         </h2>
  //         <p>
  //           Check if there are any outstanding recalls on your vehicle and
  //           address them before selling. Some buyers may request this
  //           information for safety reasons.
  //         </p>
  //       </ol>
  //       <p>
  //         Before finalizing the sale, it's advisable to contact{" "}
  //         <Link href={"/"}>Aux Cash for Cars Sydney</Link> directly or check
  //         their <Link href={"/"}>website</Link> for any specific requirements
  //         they may have. This will help you streamline the selling process and
  //         avoid any potential complications.
  //       </p>
  //     </>
  //   ),
  //   tags: (
  //     <>
  //       <h2>Car selling documentation</h2>, <h2>Cash car sale requirements</h2>,{" "}
  //       <h2>Selling car paperwork</h2>, <h2>Documentation for selling car</h2>,{" "}
  //       <h2>Cash for cars process</h2>, <h2>Required documents for car sale</h2>
  //       , <h2>Selling car without title</h2>, <h2>Cash offer for my car</h2>,{" "}
  //       <h2>Car selling paperwork checklist</h2>,{" "}
  //       <h2>Selling vehicle for cash tips</h2>,{" "}
  //       <h2>Transfer of ownership for cash sale</h2>,{" "}
  //       <h2>Cash sale car title transfer</h2>,{" "}
  //       <h2>Selling car without a license</h2>, <h2>Selling car with lien</h2>,{" "}
  //       <h2>Cash for cars legal requirements</h2>,{" "}
  //       <h2>Selling car privately documentation</h2>,{" "}
  //       <h2>Car selling transaction paperwork</h2>,{" "}
  //       <h2>Documents needed for cash car sale</h2>,{" "}
  //       <h2>Selling used car paperwork</h2>, <h2>Cash for cars legalities</h2>,{" "}
  //     </>
  //   ),
  // },

  // Question 5
  // {
  //   image: "/assets/locationsImages/sublocation1Images/5.jpg",
  //   title:
  //     "Are there any restrictions on the type or condition of cars that can be sold for cash in Sydney?",
  //   description: (
  //     <>
  //       <p>
  //         As of my last knowledge update in January 2022, there weren't specific
  //         restrictions on the type or condition of cars that can be sold for
  //         cash in Sydney, Australia. However, regulations and requirements may
  //         change, and it's essential to check the most recent information from
  //         local authorities, such as the New South Wales (NSW) government or
  //         relevant municipal authorities.
  //       </p>
  //       <p>Generally, when selling a car, you need to ensure that:</p>
  //       <ol>
  //         <h2>
  //           <li>Ownership and Transfer Documents:</li>
  //         </h2>
  //         <p>
  //           You have clear ownership of the vehicle and can provide the
  //           necessary transfer documents.
  //         </p>
  //         <h2>
  //           <li>Roadworthiness Certificate:</li>
  //         </h2>
  //         <p>
  //           In some cases, you may need a roadworthiness certificate (also known
  //           as a safety certificate) to transfer ownership. This certificate
  //           indicates that the vehicle is safe for use on the road.
  //         </p>
  //         <h2>
  //           <li>Registration Status:</li>
  //         </h2>
  //         <p>
  //           The car should be registered, and the registration details should be
  //           up-to-date. The buyer will need to transfer the registration to
  //           their name.
  //         </p>
  //         <h2>
  //           <li>Pricing and Payment:</li>
  //         </h2>
  //         <p>
  //           Ensure that the payment method is secure and agreed upon by both
  //           parties. Cash transactions are common, but other methods like bank
  //           transfers are also used.
  //         </p>
  //         <h2>
  //           <li>Compliance with Laws:</li>
  //         </h2>
  //         <p>
  //           Adhere to any other relevant laws or regulations that may apply to
  //           vehicle sales in your region.
  //         </p>
  //       </ol>
  //       <p>
  //         Keep in mind that selling a car privately involves various
  //         responsibilities, and both the buyer and the seller should be aware of
  //         their obligations to complete a smooth and legal transaction. Always
  //         consult local authorities or legal professionals for the most
  //         up-to-date information and guidance. Additionally, be cautious of
  //         potential scams or fraudulent activities when selling a car privately.
  //       </p>
  //     </>
  //   ),
  //   tags: (
  //     <>
  //       <h2>Cash for cars Sydney</h2>, <h2>Car selling restrictions Sydney</h2>,{" "}
  //       <h2>Cash sale regulations for cars</h2>,{" "}
  //       <h2>Sydney car selling guidelines</h2>,{" "}
  //       <h2>Restrictions on selling cars for cash</h2>,{" "}
  //       <h2>Cash transactions for used cars Sydney</h2>,{" "}
  //       <h2>Sydney car sales conditions</h2>,{" "}
  //       <h2>Selling cars for cash rules</h2>,{" "}
  //       <h2>Cash offers for used cars Sydney</h2>,{" "}
  //       <h2>Sydney car selling limitations</h2>,{" "}
  //       <h2>Cash transactions for old cars</h2>,{" "}
  //       <h2>Legal guidelines for selling cars in Sydney</h2>,{" "}
  //       <h2>Used car cash sale restrictions</h2>,{" "}
  //       <h2>Sydney car selling terms</h2>,{" "}
  //       <h2>Cash for cars legal requirements Sydney</h2>,{" "}
  //       <h2>Conditions for selling cars for cash</h2>,{" "}
  //       <h2>Sydney car selling laws</h2>,{" "}
  //       <h2>Cash transactions for damaged cars Sydney</h2>,{" "}
  //       <h2>Selling cars for cash tips</h2>,{" "}
  //       <h2>Sydney car resale regulations</h2>,{" "}
  //     </>
  //   ),
  // },

  // // Question simple
  // {
  //   image: "/assets/locationsImages/sublocation1Images/1.jpg",
  //   title: "",
  //   description: <></>,
  //   tags: (
  //     <>
  //       <h2></h2>,{" "}
  //     </>
  //   ),
  // },
];
