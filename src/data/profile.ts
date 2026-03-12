export const profile = {
  name: "Swetha Sri Pinnamaneni",
  headline: "Biotechnology Scientist (Small Molecules/QC)",
  location: "Madison, WI",
  summary:
    "Biotechnology Scientist (Small Molecules/QC) with experience in cGMP analytical testing and end-to-end sample prep to analysis to reporting. Skilled in HPLC/Empower, UV/Vis, data review, SOP/report documentation, and microbiology methods (PCR, transformation, biofilm/AMP assays).",
  contacts: {
    phone: "248-657-0635",
    email: "toswethasri@gmail.com",
    linkedin: "linkedin.com/in/pinnamaneni",
    linkedinUrl: "https://www.linkedin.com/in/pinnamaneni/"
  },
  professionalExperience: [
    {
      company: "ThermoFisher Scientific",
      location: "Madison, WI",
      role: "Scientist I",
      period: "Feb 2025 - Present",
      bullets: [
        "Own end-to-end quantitative small-molecule testing (sample prep to run to analysis to reporting), averaging about 12 samples per week across expedited (3-day) and standard (21-day) timelines.",
        "Execute QC, stability, and commercial release testing; compile results and assess against acceptance criteria and specifications.",
        "Perform secondary data review (solution, sample, and standard preparation) to ensure data integrity and reporting readiness.",
        "Author study documentation and reports; coordinate with cross-functional teams to resolve issues and keep deliverables on schedule.",
        "Perform cGMP analytical testing using HPLC (Empower) and UV/Vis (Cary WinUV), plus SoloVPE, IEF, and turbidity, aligned with ICH/USP/JP requirements.",
        "Serve as documentation SME and BIOVIA Workbook (ELN) Superuser; improved study record standardization, traceability, and review readiness."
      ]
    }
  ],
  researchExperience: [
    {
      company: "The Ohio State University",
      location: "Columbus, OH",
      role: "Undergraduate Research Assistant",
      period: "June 2022 - May 2024",
      bullets: [
        "Designed and executed molecular cloning, bacterial transformation, and PCR assays in Bordetella pertussis, generating recombinant constructs across four bacterial strains to support biofilm and antimicrobial resistance studies.",
        "Standardized an electroporation-competent cell preparation SOP adopted for weekly transformations, improving throughput while maintaining high transformation efficiency.",
        "Ran AMP killing assays and biofilm quantification (crystal violet staining, CFU enumeration) and performed hNEC in vitro plus neonatal mouse ex vivo studies across three concurrent projects to evaluate pathogenicity and persistence phenotypes.",
        "Supported conclusions with custom SDS-PAGE and Western blotting (Image Lab); analyzed data in GraphPad Prism (t-tests, ANOVA); produced documentation supporting internal manuscript drafting and trained two undergraduate researchers."
      ]
    }
  ],
  technicalSkills: [
    {
      category: "Laboratory Techniques",
      items: [
        "Molecular cloning",
        "PCR (conventional, qPCR)",
        "Gel electrophoresis",
        "Bacterial transformation",
        "Electroporation",
        "DNA/RNA extraction",
        "Protein purification",
        "Cell culture",
        "Biofilm assays",
        "CFU enumeration",
        "Aseptic technique",
        "Microscopy"
      ]
    },
    {
      category: "Instrumentation",
      items: [
        "Thermal cyclers",
        "Spectrophotometers",
        "Centrifuges",
        "Biosafety cabinets",
        "Incubators",
        "Electroporation systems",
        "HPLC (Empower)",
        "UV/Vis (Cary WinUV)",
        "SoloVPE",
        "IEF",
        "Turbidity"
      ]
    },
    {
      category: "Software & Analysis",
      items: [
        "GraphPad Prism",
        "Microsoft Office Suite",
        "Statistical analysis (t-tests, ANOVA)",
        "Data visualization",
        "BIOVIA Workbook (ELN)"
      ]
    },
    {
      category: "Regulatory & Safety",
      items: ["GLP", "GMP", "cGMP", "BSL-2 protocols", "ICH/USP/JP aligned testing"]
    }
  ],
  education: {
    school: "The Ohio State University",
    location: "Columbus, OH",
    degree: "Bachelor of Science in Biology",
    graduation: "May 2024",
    coursework: [
      "Molecular Biology",
      "Microbiology",
      "Biochemistry",
      "Cell Biology",
      "Genetics",
      "Immunology"
    ]
  },
  additionalResearchHighlights: [
    "Designed and executed molecular cloning experiments using restriction enzymes, ligation, and bacterial transformation for Bordetella pertussis research, achieving a 20% increase in assay accuracy.",
    "Standardized a reproducible electroporation-competent cell preparation SOP adopted for weekly transformations, improving throughput while maintaining high transformation efficiency.",
    "Conducted bacterial killing assays and biofilm formation studies using crystal violet staining and CFU enumeration, improving understanding of antimicrobial resistance mechanisms by 15%.",
    "Performed in vitro assays with human nasal epithelial cells (hNEC) and ex vivo studies using neonatal mouse models to investigate microbial pathogenicity across three concurrent research projects.",
    "Analyzed experimental datasets using GraphPad Prism, performed statistical analyses (t-tests, ANOVA), and presented findings at lab meetings.",
    "Generated experimental datasets and supporting documentation for internal manuscript drafting on microbial biofilm formation; trained two undergraduate researchers in advanced laboratory techniques."
  ]
};

export type Profile = typeof profile;
