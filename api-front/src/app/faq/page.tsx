"use client";

import Layouts from "../_layouts/layout";

const Faq: React.FC = () => {
  const faqItems = [
    {
      question: "How do I find the right glasses for me?",
      answer:
        "We offer a wide range of glasses for every style and need. You can use our virtual try-on feature to see how the frames look on you or visit our store for professional assistance from our opticians.",
    },
    {
      question: "Do you offer prescription lenses?",
      answer:
        "Yes, we provide high-quality prescription lenses for all our frames. During checkout, you can upload your prescription details, and we will custom-fit the lenses to your requirements.",
    },
    {
      question: "Can I return or exchange my glasses?",
      answer:
        "We offer a 30-day return or exchange policy. If you are not satisfied with your purchase, you can return the glasses in their original condition for a full refund or exchange.",
    },
    {
      question: "Do you provide free eye exams?",
      answer:
        "Yes, we provide free eye exams at select locations. You can book an appointment through our website or contact your nearest store for availability.",
    },
    {
      question: "How long does it take to receive my glasses?",
      answer:
        "Once your order is confirmed, it typically takes 7-10 business days for your glasses to be delivered. Custom prescription lenses may take slightly longer.",
    },
    {
      question: "Do you have discounts or special offers?",
      answer:
        "Yes, we regularly offer discounts and promotions. Sign up for our newsletter to stay updated on the latest deals or check our promotions page on the website.",
    },
  ];

  return (
    <Layouts>
      <main>
        <div className="relative w-full bg-white px-6 pt-10 pb-8  mt-10 ring-1 ring-gray-900/5 border-gray-200 border sm:mx-auto sm:max-w-2xl sm:rounded-xl sm:px-10">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                FAQ
              </h2>
              <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                Frequently asked questions
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              {faqItems.map((item, index) => (
                <div key={index} className="py-5">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium transition duration-300 ease-in-out">
                      <span>{item.question}</span>
                      <span className="transition-transform duration-300 ease-in-out group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="overflow-hidden transition-all  duration-300 ease-in-out max-h-0 group-open:max-h-[500px] mt-3 text-neutral-600 font-medium">
                      {item.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layouts>
  );
};

export default Faq;
