import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Gstcompany = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {gstregistrationdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    <p>{item.answer}</p>
                    {open && (
                      <ul className="list-disc ml-6">
                        {item.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const gstregistrationdata = [
  {
    question: "Documents for Proposed Proprietors (Indian Nationals)",
    answer: "",
    details: [
      "PAN card",
      "Passport size Photo (not be older than 2 months)",
      "Address Proof (not be older than 2 months)",
      "Aadhaar Card",
      "Electricity Bill",
      "Residential Proof (not be older than 2 months)",
      "Bank Statement",
      "Telephone Bill",
    //   "Electricity Bill",
      "Active Mobile number and Mail Id",
    //   "Resolution (on Firm letterhead) for appointment of partner for GST registration & authorized signatory (Format attached)",
    "Director Identification Number (DIN)",
    "Board Resolution (on Company letter head) for appointment of Director for GST registration & authorized signatory (Format attached)",
    ],
  },
  {
    question: "Documents for Registered Office",
    answer: "",
    details: [
        "Certificates of Incorporation, AOA, MOA issued by MCA.",
        "Business Category or activities in which business deals in.",
        "The registered document of the title of the premises of the registered office in the name of the proprietor; OR",
        // "Business Category or activities in which business deals in.",
        // "The registered document of the title of the premises of the registered office in the name of the Partnership Firm; OR",
        "The notarized copy of lease / rent agreement in the name of the Partnership Firm along with a copy of rent paid receipt not older than one month;",
        "The authorization from the Landlord (Name mentioned in the Electricity Bill or Gas Bill or Water Bill or Property Tax Receipt or Sale Deed) to use the premises by the Partnership Firm as its registered office. This is usually referred to as NOC from Landlord; AND",
        "Proof of evidence of any utility service like telephone, gas, electricity, etc. depicting the address of the premises in the name of the owner or document, which is not older than two months."
      ],
  },
//   {
//     question: "What is your refund policy? ",
//     answer:
//       "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, questions asked.",
//   },
//   {
//     question: "Do you offer technical support? ",
//     answer:
//       "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
//   },
];

export default Gstcompany;
