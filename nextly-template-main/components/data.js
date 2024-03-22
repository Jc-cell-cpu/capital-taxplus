import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "File income tax & GST effortlessly with Tax Plus. Save time, maximize deductions, and stay GST compliant - all in one place",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your requirements",
      desc: "Then explain it breifly.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More benefits",
  desc: "Ditch tax season stress! Tax Plus: Streamline income tax & GST filing, maximize deductions & stay compliant.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "ITR Filing",
      desc: "TaxPlus is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "GST apply and fileing",
      desc: "This Site is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "TaxPlus comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
