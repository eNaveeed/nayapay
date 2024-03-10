import { nanoid } from "nanoid";

import {
  // POSMachinesPaymentCards
  visaCardIcon,
  masterCardIcon,
  paypakCardIcon,
  unionPayCardIcon,
  JCBCardIcon,
  jazzcashIcon,
  easypaisaIcon,
  nayapayIcon,
  raastIconComingSoon,

  // footerSocialMedia
  facebookIcon,
  linkedinIcon,
  twitterIcon,
  instagramIcon,
} from "../assets";

// PERSONAL
const headerNavLinks = [
  {
    id: nanoid(6),
    title: "Personal",
    link: "/",
  },
  {
    id: nanoid(6),
    title: "Business",
    link: "/",
  },
  {
    id: nanoid(6),
    title: "Help Center",
    link: "/",
  },
  {
    id: nanoid(6),
    title: "Newsroom",
    link: "/",
  },
  {
    id: nanoid(6),
    title: "Careers",
    link: "/",
  },
];

const stepsCards = [
  {
    id: nanoid(6),
    icon: "",
    iconBgColor: "#FFE4B2",
    number: "1",
    numberBgColor: "#EF8C30",
    description:
      "Download the NayaPay App from App Store or Google Play Store.",
  },
  {
    id: nanoid(6),
    icon: "",
    iconBgColor: "#E1E8BB",
    number: "2",
    numberBgColor: "#E1E8BB",
    description:
      "Sign up for your wallet digitally in a few steps. All you need is your CNIC or NICOP",
  },
  {
    id: nanoid(6),
    icon: "",
    iconBgColor: "#BCF2D7",
    number: "3",
    numberBgColor: "#23D67C",
    description:
      "Our team will verify your details. Your wallet is ready to use within a few minutes",
  },
  {
    id: nanoid(6),
    icon: "",
    iconBgColor: "#FAD1C2",
    number: "4",
    numberBgColor: "#EF6937",
    description:
      "Increase your spending limits through biometric verifications",
  },
];

const personalSliderCards = [
  {
    id: nanoid(6),
    icon: "",
    title: "",
    bulletExpanderColor: "",
    bullets: [
      {
        id: nanoid(6),
        title: "",
      },
    ],
  },
];

// BUSINESS

const POSMachinesCards = [
  {
    id: nanoid(6),
    image: "",
    title: "Tap and Pay and QR Codes",
    description: "Safer and faster payments via NFC.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Reconciliation",
    description:
      "View transactions on the POS and track settlements on NayaPay Arc.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Superior Tech",
    description:
      "Fast, multicore processors, WiFi, and 4G for robust payment experience.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Bill Payment Facility",
    description: "Offer utility and other bill payments to your customers.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Bill Payment Facility",
    description: "Offer utility and other bill payments to your customers.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Bill Payment Facility",
    description: "Offer utility and other bill payments to your customers.",
  },
];

const POSMachinesPaymentCards = [
  {
    id: nanoid(6),
    icon: visaCardIcon,
  },
  {
    id: nanoid(6),
    icon: masterCardIcon,
  },
  {
    id: nanoid(6),
    icon: paypakCardIcon,
  },
  {
    id: nanoid(6),
    icon: unionPayCardIcon,
  },
  {
    id: nanoid(6),
    icon: JCBCardIcon,
  },
  {
    id: nanoid(6),
    icon: jazzcashIcon,
  },
  {
    id: nanoid(6),
    icon: easypaisaIcon,
  },
  {
    id: nanoid(6),
    icon: nayapayIcon,
  },
  {
    id: nanoid(6),
    icon: raastIconComingSoon,
  },
];

const onlineSalesCards = [];

const flauntYourBusinessCards = [
  {
    id: nanoid(6),
    image: "",
    description:
      "Order a free NayaPay Visa debit card within a few clicks and personalize it with your business name!",
  },
  {
    id: nanoid(6),
    image: "",
    description:
      "Separate the professional from the personal. Charge business expenses to your NayaPay Visa debit card.",
  },
  {
    id: nanoid(6),
    image: "",
    description:
      "Use it anywhere - online or in-person, locally or internationally.",
  },
];

const goCashlessCards = [
  {
    id: nanoid(6),
    icon: "", // keep it empty
    title: "",
    description: "",
    bgColor: "#000", // use color picker extension
  },
];

// HELP-CENTER

const helpCenterLinks = {
  id: nanoid(6),
  personal: [
    {
      id: nanoid(6),
    },
  ],
  business: [
    {
      id: nanoid(6),
    },
  ],
};

const suggestionsAndFeedbackCards = [
  {
    id: nanoid(6),
    image: "",
    title: "Suggestions and feedback",
    description: "We'd love to hear from you at hello@nayapay.com.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Lost and stolen cards",
    description:
      "Card gone missing? Freeze your card instantly in the app or call Customer Service at (021) 111-222-729 to do it for you.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Facing an issue?",
    description:
      "Call us on (021) 111-222-729 Intl: +1 (650) 468 2078      or email us at support@nayapay.com.",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Inquiries",
    description:
      "For media, partnership or any other inquiries, write to us at hello@nayapay.com, and we'll get back to you as soon as possible. Please don't disclose any confidential account details in your email.",
  },
];

// NEWS-ROOM

const articleCards = [
  {
    id: nanoid(6),
    image: "",
    title: "NayaPay, Alipay+ Boost Global Payments into Pakistan",
    date: "24th Jan, 2024",
    description:
      "NayaPay, a rapidly growing financial platform, has partnered with Alipay+, a cross-border digital payments and marketing platform operated by Ant International ...",
  },
  {
    id: nanoid(6),
    image: "",
    date: "27th Nov, 2023",
    title: "NayaPay Awarded 'Best Fintech' at Pakistan Banking Awards 2023",
    description:
      "The recognition of fintech in the Pakistan Banking Awards this year is an important development. It underscores the increasing importance of technology in the financial sector and signals a shift towards a Digital Pakistan ...",
  },
  {
    id: nanoid(6),
    image: "",
    date: "28 Mar, 2023",
    title:
      "Bank of Punjab and NayaPay collaborate to boost digital financial services in Pakistan",
    description:
      "The Bank of Punjab has collaborated with NayaPay as one of its partner banks. The two organizations signed an agreement at BOP's head office Lahore ...",
  },
];

const moreFromNayaPayCards = [
  {
    id: nanoid(6),
    image: "",
    title:
      "HBL and NayaPay collaborate to boost international remittances to Pakistan",
    date: "17 Jan, 2023",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "UBL and NayaPay partner for fast international remittances to Pakistan",
    date: "05 Oct, 2022",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "#BetterTogether for Digitization: StormFiber and NayaPay Come Together",
    date: "13 May, 2022",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay partners with Euronet Pakistan to accelerate digital payment acceptance",
    date: "19 Apr, 2022",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay secures $13m as it rolls out digital payments revolution in Pakistan",
    date: "24 Feb, 2022",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "Askari Bank Limited joins hands with NayaPay as one of its partner banks",
    date: "27 Jan, 2022",
  },
  {
    id: nanoid(6),
    image: "",
    title: "State Bank of Pakistan grants EMI License to NayaPay",
    date: "2 Sept, 2021",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Close the gender gap: NayaPay becomes a Friend of CodeGirls",
    date: "25 Aug, 2021",
  },
  {
    id: nanoid(6),
    image: "",
    title: "JS Bank Partners with NayaPay for Digital Payments",
    date: "13 Aug, 2021",
  },
  {
    id: nanoid(6),
    image: "",
    title: "Jazz and NayaPay team up for digitization of payments",
    date: "11 Jan, 2021",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay and Visa partner to fast-track digital payments in Pakistan",
    date: "29 July, 2020",
  },
  {
    id: nanoid(6),
    image: "",
    title: "NayaPay Greenlighted by SBP for Pilot Operations",
    date: "18 May, 2020",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "Zong 4G Partners with NayaPay to Provide Seamless Digital Experience to Customers",
    date: "19 Mar, 2020",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay and Telenor Pakistan Come Together for Customer Convenience",
    date: "03 Mar, 2020",
  },
  {
    id: nanoid(6),
    image: "",
    title: "NayaPay Partners with Faysal Bank for Digital Payments",
    date: "17 Feb, 2020",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay Integrates World-Check to Strengthen Customer Due Diligence",
    date: "17 Dec, 2019",
  },
  {
    id: nanoid(6),
    image: "",
    title: "NayaPay Receives ISO 27001 Certification",
    date: "11 Dec, 2019",
  },
  {
    id: nanoid(6),
    image: "",
    title: "NayaPay, an upcoming EMI, is now PCI DSS certified",
    date: "18 Oct, 2019",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay becomes 1LINK's PayPak Affiliate Member with Meezan Bank as the Settlement Bank",
    date: "30 Sep, 2019",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "NayaPay becomes 1LINK's PayPak Affiliate Member with Meezan Bank as the Settlement Bank",
    date: "30 May, 2019",
  },
  {
    id: nanoid(6),
    image: "",
    title:
      "Meezan Bank and NayaPay Join Hands to Accelerate Digital Payments in Pakistan",
    date: "14 Nov, 2018",
  },
];

// CAREERS

const careersHeroCards = [
  {
    id: nanoid(6),
    title: "Product Manager I",
  },
  {
    id: nanoid(6),
    title: "Associate Product Manager",
  },
  {
    id: nanoid(6),
    title: "Product Designer",
  },
  {
    id: nanoid(6),
    title: "DevOps Engineer",
  },
  {
    id: nanoid(6),
    title: "Android Engineer",
  },
  {
    id: nanoid(6),
    title: "IT Governance Executive",
  },
];

// FOOTER

const footerSocialMedia = [
  {
    id: nanoid(6),
    image: facebookIcon,
  },
  {
    id: nanoid(6),
    image: linkedinIcon,
  },
  {
    id: nanoid(6),
    image: twitterIcon,
  },
  {
    id: nanoid(6),
    image: instagramIcon,
  },
];

const footerLinks = [
  {
    id: nanoid(6),
    title: "General",
    links: [
      {
        id: nanoid(6),
        name: "Personal",
        link: "/",
      },
      {
        id: nanoid(6),
        name: "Personal",
        link: "/",
      },
      {
        id: nanoid(6),
        name: "Business",
        link: "/",
      },
      {
        id: nanoid(6),
        name: "Help Center",
        link: "/",
      },
      {
        id: nanoid(6),
        name: "Newsroom",
        link: "/",
      },
      {
        id: nanoid(6),
        name: "Schedule of charges",
        link: "/",
      },
    ],
  },
  {
    id: nanoid(6),
    title: "Connect",
    links: [
      {
        id: nanoid(6),
        name: "Careers",
        link: "/",
      },
      {
        id: nanoid(6),
        name: "Contact us",
        link: "/",
      },
    ],
  },
  {
    id: nanoid(6),
    title: "Legal",
    links: [
      {
        id: nanoid(6),
        name: "Terms and Conditions",
        link: "/",
      },
    ],
  },
];

const footerCertifications = [
  {
    id: nanoid(6),
    image: "",
  },
  {
    id: nanoid(6),
    image: "",
  },
];

export {
  // PERSONAL
  headerNavLinks,
  stepsCards,
  personalSliderCards,

  // BUSINESS
  POSMachinesCards,
  POSMachinesPaymentCards,
  onlineSalesCards,
  flauntYourBusinessCards,
  goCashlessCards,

  // HELP-CENTER
  helpCenterLinks,
  suggestionsAndFeedbackCards,

  // NEWS-ROOM
  articleCards,
  moreFromNayaPayCards,

  // CAREERS
  careersHeroCards,

  // FOOTER
  footerSocialMedia,
  footerLinks,
  footerCertifications,
};
