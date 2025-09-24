import { Icons } from "@/components/icons"

import smallBusinessImage from "@/public/assets/landing/accountant4-slider-pic1.webp"
import bookkeepingAgenciesImage from "@/public/assets/landing/accountant4-slider-pic2.webp"

export const MarketingContent = {
  hero: {
    title: {
      base: "Bookkeeping services for",
      punchline: "Small Businesses & Bookkeeping agencies",
    },
    cards: [
      {
        title: "For Small Businesses",
        image: smallBusinessImage,
        href: "#",
      },
      {
        title: "For Bookkeeping Agencies",
        image: bookkeepingAgenciesImage,
        href: "#",
      },
    ],
  },
  whatWeOffer: {
    title: {
      base: "Years of experience",
      punchline: "books in order",
    },
    list: [
      {
        title: "Transaction Recording and Reconciliation",
        description:
          "Bookkeepers accurately record all financial transactions, including sales, purchases, receipts, and payments. They ensure that the company’s financial records are up-to-date and complete. Additionally, bookkeepers perform regular reconciliations of bank statements, credit card statements, and other financial accounts to verify that the recorded transactions match the actual account balances.",
        Icon: Icons.landmark,
      },
      {
        title: "Accounts Payable and Receivable Management",
        description:
          "Bookkeepers manage the company’s accounts payable and receivable. This includes tracking and processing incoming invoices from suppliers and vendors, ensuring timely payments, and managing the collection of outstanding invoices from customers. Effective management of these accounts helps maintain healthy cash flow and good relationships with suppliers and customers.",
        Icon: Icons.handCoins,
      },
      {
        title: "Financial Reporting and Statements Preparation",
        description:
          "Bookkeepers prepare various financial reports and statements that provide insights into the company’s financial health. These reports include profit and loss statements, balance sheets, and cash flow statements. Accurate and timely financial reporting helps business owners and management make informed decisions and ensures compliance with regulatory requirements.",
        Icon: Icons.bookOpenCheck,
      },
    ],
  },
  weWillHelp: {
    title: {
      base: "Our team of experts will help you in",
      punchline: "all situations",
    },
    description:
      "We provide a wide range of bookkeeping services to help small businesses and bookkeeping agencies manage their finances effectively. Our team of experienced bookkeepers is dedicated to providing accurate and reliable financial information to support your business growth and success.",
    cta: {
      text: "Read more",
      aria: "Read more about our team of experts",
    },
  },
}
