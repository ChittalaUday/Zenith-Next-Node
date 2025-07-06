// FAQ and guides data mapped by subService title (slugified)
export const serviceFaqs: Record<string, { question: string; answer: string; label?: string }[]> = {
    "opc-registration": [
        {
            question: "What is an OPC?",
            answer: "An OPC (One Person Company) is a company formed with a single person as both director and shareholder, offering limited liability and a separate legal entity.",
            label: "General"
        },
        {
            question: "Who can register an OPC?",
            answer: "Any Indian citizen, resident in India, can register an OPC. NRIs and foreign nationals are not eligible.",
            label: "Eligibility"
        },
        {
            question: "What documents are required for OPC registration?",
            answer: "You need a PAN Card, Aadhaar Card, and Address Proof. Additional documents may be required based on your case.",
            label: "Documents"
        },
        {
            question: "How long does OPC registration take?",
            answer: "Typically, OPC registration takes 5-7 working days, subject to government processing times.",
            label: "Process"
        },
        {
            question: "Can an OPC be converted to a private limited company?",
            answer: "Yes, an OPC can be converted to a private limited company after meeting certain conditions.",
            label: "Conversion"
        },
        {
            question: "Is there a minimum capital requirement for OPC?",
            answer: "No, there is no minimum capital requirement to start an OPC in India.",
            label: "Capital"
        }
    ],
    "llp-registration": [
        {
            question: "What is an LLP?",
            answer: "A Limited Liability Partnership (LLP) is a partnership with limited liability for all partners.",
            label: "General"
        },
        {
            question: "How many partners are required to form an LLP?",
            answer: "A minimum of two partners are required to form an LLP.",
            label: "Eligibility"
        },
        {
            question: "What are the compliance requirements for an LLP?",
            answer: "LLPs must file annual returns and statements of accounts with the Registrar every year.",
            label: "Compliance"
        },
        {
            question: "Can an LLP be converted to a private limited company?",
            answer: "Yes, an LLP can be converted to a private limited company by following the prescribed process.",
            label: "Conversion"
        }
    ],
    // Add more subService slugs and their FAQs as needed
};

export const serviceGuides: Record<string, { title: string; url: string; label?: string }[]> = {
    "opc-registration": [
        { title: "What is OPC?", url: "/guides/what-is-opc", label: "General" },
        { title: "Who is eligible for OPC?", url: "/guides/opc-eligibility", label: "Eligibility" },
        { title: "How to Register a One Person Company (OPC)", url: "/guides/how-to-register-opc", label: "Process" },
        { title: "Can a person be a member of more than one OPC?", url: "/guides/opc-multiple-members", label: "General" },
        { title: "What are the benefits of OPC?", url: "/guides/opc-benefits", label: "General" },
        { title: "Documents Required for Company Registration", url: "/guides/opc-documents", label: "Documents" },
        { title: "One Person Company in India, Companies Act 2013", url: "/guides/opc-companies-act", label: "Legal" }
    ],
    // Add more subService slugs and their guides as needed
}; 