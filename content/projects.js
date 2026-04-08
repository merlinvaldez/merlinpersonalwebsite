export const projectStatusOrder = ["in-production", "in-dev", "past-work"];

export const projectStatusMeta = {
  "in-production": {
    label: "In Production",
    description: "Products I am actively operating and improving in public.",
  },
  "in-dev": {
    label: "In Dev",
    description: "Products in active definition, validation, and buildout.",
  },
  "past-work": {
    label: "Past Work",
    description: "Earlier work that still shows how I lead product and engineering.",
  },
};

export const projects = [
  {
    slug: "votefeed",
    name: "VoteFeed",
    status: "in-production",
    headline:
      "A constituent-facing product that turns congressional activity into a feed people can actually follow.",
    role: "Founder, full-stack engineer, and product lead.",
    currentFocus:
      "Improving legislative freshness, bill-result context, and trust surfaces before expanding engagement loops.",
    systemAngle:
      "Legislative data ingestion, district mapping, account systems, and feed UX for constituent action.",
    proofPoints: [
      "Built the product around fresh congressional actions, bill outcomes, and representative context.",
      "Added policy and interest filtering so users can focus the feed around issues they care about.",
      "Shipped trust and compliance surfaces including privacy policy, terms, and account hardening work.",
      "Roadmap work includes notifications, moderation, and clearer representative-alignment feedback.",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Congress.gov", "Census Geocoder"],
    links: {
      live: "https://votefeed.org",
      repo: "https://github.com/merlinvaldez/votefeed.org",
      caseStudy: "/projects/votefeed",
    },
    sourceOfTruth: ["GitHub repo activity", "Notion product brief"],
    caseStudy: {
      description:
        "How I am building VoteFeed into a civic product that makes congressional activity readable, timely, and actionable.",
      intro:
        "VoteFeed started as a way to make Congress feel less opaque. The product maps a constituent to their district, brings legislative activity into a familiar feed format, and creates a clear surface for reacting to bills that matter to them.",
      sections: [
        {
          title: "Problem",
          body:
            "Most people do not have a practical way to follow what their representative is voting on in real time. The product thesis is simple: take the mechanics of congressional activity and turn them into a format that is readable enough to check regularly.",
          points: [
            "Map users to the right district and representative before asking them to engage.",
            "Make bill actions and results understandable without forcing users into raw government interfaces.",
            "Keep the product useful even for people who are not policy experts.",
          ],
        },
        {
          title: "System Design",
          body:
            "The app sits on top of multiple public systems, so the engineering challenge is not just rendering UI. It is normalizing legislative data, tying it to a specific user context, and presenting it with enough clarity and freshness to be trustworthy.",
          points: [
            "District lookup starts with address-to-district resolution through public geocoding.",
            "Representative and bill information are normalized into a feed-first product model.",
            "The platform combines bill detail, result context, and user stance into a single workflow.",
          ],
        },
        {
          title: "Recent Shipping",
          body:
            "The latest work has focused on product maturity rather than surface-level polish. That has meant better bill-result coverage, sharper filtering, and more explicit trust surfaces for people creating accounts and using the product repeatedly.",
          points: [
            "Expanded bill-result handling across feed and bill-detail surfaces.",
            "Improved freshness thinking around legislative actions and scheduled updates.",
            "Added privacy policy and terms pages to support a more production-ready experience.",
          ],
        },
        {
          title: "Next",
          body:
            "The next layer is deeper participation. The roadmap is about turning a readable civic feed into a product that helps constituents stay current, respond consistently, and understand how their representative aligns over time.",
          points: [
            "Notifications when relevant bills move.",
            "Moderation and language controls for user-generated participation.",
            "Clearer representative-alignment and follow-up loops.",
          ],
        },
      ],
    },
  },
  {
    slug: "primematcher",
    name: "PrimeMatcher",
    status: "in-dev",
    headline:
      "A sourcing workflow for MWBE and MBE subcontractors to find awarded prime opportunities and draft targeted outreach.",
    role: "Founder and product engineer.",
    currentFocus:
      "Defining the first usable workflow around capabilities statement upload, profile extraction, and awarded-project matching.",
    systemAngle:
      "Document ingestion, profile extraction, procurement data normalization, and outreach workflow design.",
    proofPoints: [
      "Uploads a capabilities statement and converts it into a structured subcontractor profile.",
      "Matches that profile against awarded public projects across NYS and NYC procurement sources.",
      "Surfaces prime contractor context on project pages so outreach can be specific.",
      "Frames outreach generation as a workflow, not just a single AI text box.",
    ],
    stack: ["Next.js", "Document parsing", "Matching systems", "Public procurement data", "LLM workflows"],
    links: {
      repo: "https://github.com/merlinvaldez/primeMatcher",
      caseStudy: "/projects/primematcher",
    },
    sourceOfTruth: ["GitHub README", "Notion product brief"],
    caseStudy: {
      description:
        "How PrimeMatcher is being defined as a product for subcontractors navigating public procurement opportunities.",
      intro:
        "PrimeMatcher is focused on a specific operational gap: small MWBE and MBE firms often know they should pursue subcontracting opportunities, but the discovery and outreach workflow is scattered, manual, and hard to sustain.",
      sections: [
        {
          title: "Product Thesis",
          body:
            "The product starts from the capabilities statement because that is already the artifact many firms have. Instead of asking users to rebuild their business profile from scratch, the workflow should extract it and use it immediately.",
          points: [
            "Start with the contractor's existing capabilities statement.",
            "Turn it into a structured profile that can power matching and outreach.",
            "Keep the workflow focused on awarded projects where prime relationships are already visible.",
          ],
        },
        {
          title: "V1 Scope",
          body:
            "The first version is intentionally narrow. It is about whether a business can upload one document, see relevant opportunities, understand the prime context, and walk away with a usable next step.",
          points: [
            "Capabilities statement upload and structured profile extraction.",
            "A matched feed of awarded projects.",
            "Project detail pages with prime information and a tailored outreach draft.",
          ],
        },
        {
          title: "System Design",
          body:
            "The system challenge is less about any single model call and more about making messy procurement information operational. That means consistent extraction, normalized project records, and matching logic that is explainable enough to trust.",
          points: [
            "Public source candidates include NYS Contract Reporter, PASSPort, City Record, and supplier directories.",
            "Matching needs to bridge business capabilities, project scope, and awarded-prime context.",
            "Outreach should reuse structured business data instead of starting from zero each time.",
          ],
        },
        {
          title: "Open Questions",
          body:
            "The product is still in active definition, so the remaining work is about choosing the narrowest initial wedge that still creates real value.",
          points: [
            "Whether to stay post-award only or include open opportunities later.",
            "Which industries should get the first tailored experience.",
            "Whether outreach stays export-first or becomes an in-app sending workflow.",
          ],
        },
      ],
    },
  },
  {
    slug: "stringphone",
    name: "StringPhone",
    status: "in-dev",
    headline:
      "A turn-based live translation app designed to keep your own voice in the conversation.",
    role: "Founder and product engineer.",
    currentFocus:
      "Scoping v1 around voice cloning, translation, and a single-phone turn-based conversation loop.",
    systemAngle:
      "Speech translation, voice cloning, conversation state, and language-learning follow-ons.",
    proofPoints: [
      "Uses voice cloning so users can hear themselves in another language instead of a generic synthetic speaker.",
      "Starts with a single-phone, turn-based conversation flow to make the first version operationally simple.",
      "Later iterations add saved voices, conversation history, interlocutors, and preferred languages.",
      "Conversation data can later power personalized language-learning loops.",
    ],
    stack: ["Speech workflows", "Voice cloning", "Translation APIs", "Conversation state", "Learning systems"],
    links: {
      caseStudy: "/projects/stringphone",
    },
    sourceOfTruth: ["Notion product brief"],
    caseStudy: {
      description:
        "How StringPhone is being framed as a voice-preserving translation product instead of a generic interpreter app.",
      intro:
        "StringPhone is built around a specific product idea: live translation should not erase the speaker. The experience is turn-based on purpose so the first version can focus on reliable voice capture, translation, and playback before expanding into more ambient conversation modes.",
      sections: [
        {
          title: "Product Thesis",
          body:
            "Most translation tools help people understand each other, but they do not preserve how someone sounds. StringPhone is focused on the emotional and practical value of hearing your own voice come through in another language.",
          points: [
            "Translation is not the only product value; voice continuity matters too.",
            "The first target is effective communication in another language, not perfect real-time simultaneity.",
            "Turn-based interaction makes the initial UX simpler and more controllable.",
          ],
        },
        {
          title: "V1 Scope",
          body:
            "The first version keeps the workflow narrow: capture a turn, translate it, and play it back in the user's cloned voice for a two-person conversation sharing one device.",
          points: [
            "Clone the user's voice and hear it synthesized in another language.",
            "Support a single-phone, turn-based conversation loop.",
            "Prioritize reliability of the loop before layering on richer account features.",
          ],
        },
        {
          title: "System Design",
          body:
            "The product needs a simple but durable data model because the same conversation artifacts can later support memory, personalization, and learning. The early API shape already reflects that direction.",
          points: [
            "Core entities include users, conversations, and messages.",
            "API surfaces include conversation creation, translation, voice cloning, and speech synthesis.",
            "The system should preserve enough structure to reuse conversation content later.",
          ],
        },
        {
          title: "Expansion Path",
          body:
            "The product has a clear second act beyond translation alone. Once conversations and voices are saved, the system can support continuity, preferences, and lightweight learning experiences anchored in what people actually said.",
          points: [
            "Save voices, conversations, and preferred interlocutors.",
            "Support multi-phone turn-taking in later versions.",
            "Turn conversation history into personalized language lessons.",
          ],
        },
      ],
    },
  },
  {
    slug: "planningperiod",
    name: "PlanningPeriod.io",
    status: "past-work",
    headline:
      "An AI curriculum platform I co-founded to help teachers turn standards and source material into usable lesson plans.",
    role: "Co-founder, product lead, and prompt systems builder.",
    currentFocus:
      "Past work that still shapes how I build AI products: prompt QA, OCR pipelines, and teacher-facing workflow design.",
    systemAngle:
      "Prompt evaluation, curriculum ingestion, QA notebooks, and AI-assisted authoring for educators.",
    proofPoints: [
      "Co-founded PlanningPeriod.io and led product development and sales.",
      "Shipped across more than 65 sprints and three product versions.",
      "Built Python and Jupyter-based QA loops for prompt and output evaluation.",
      "Created curricular PDF-to-markdown pipelines using OCR and document parsing.",
    ],
    stack: ["Python", "Jupyter", "Prompt QA", "OCR pipelines", "Supabase"],
    links: {
      live: "https://planningperiod.io",
      repo: "https://github.com/merlinvaldez/planning-period-AI-prompts",
      caseStudy: "/projects/planningperiod",
    },
    sourceOfTruth: ["Prior case-study copy", "Notion work summary"],
    caseStudy: {
      description:
        "How PlanningPeriod shaped my approach to AI product design, prompt systems, and educational workflows.",
      intro:
        "PlanningPeriod was where my product, domain, and technical work came together most directly. The platform was built for teachers, but the real challenge was operational: how to make AI outputs dependable enough to fit inside real planning workflows.",
      sections: [
        {
          title: "Problem",
          body:
            "Teachers do not need more generic content. They need planning workflows that respect standards, source material, and the realities of the classroom. That meant building a system that treated context and quality as first-order concerns.",
          points: [
            "Keep the product grounded in actual curricular materials and teacher constraints.",
            "Design for repeatable planning workflows rather than one-off AI outputs.",
            "Make the product useful for educators working under time pressure.",
          ],
        },
        {
          title: "What I Owned",
          body:
            "My work sat at the intersection of product leadership and hands-on system building. I helped shape the roadmap, sell the product, and build the internal workflows that made the AI experience more reliable.",
          points: [
            "Led product development across multiple versions of the platform.",
            "Used Python and Jupyter notebooks to evaluate prompts and outputs.",
            "Built internal operating loops that connected product questions to implementation choices.",
          ],
        },
        {
          title: "AI Workflow Design",
          body:
            "The platform depended on turning curricular source material into model-usable inputs and then testing whether outputs were actually useful. That made ingestion and QA just as important as interface design.",
          points: [
            "Created document pipelines that transformed curricular PDFs into machine-readable markdown.",
            "Used OCR and parsing workflows to preserve enough structure for prompting.",
            "Treated QA as an ongoing system, not a one-time review step.",
          ],
        },
        {
          title: "Why It Matters",
          body:
            "PlanningPeriod remains important on this site because it explains how I approach AI products now. The lessons were practical: build around user workflow, create QA loops early, and treat source quality as part of product quality.",
          points: [
            "Teacher-facing UX needs reliability more than novelty.",
            "Prompt systems only work when paired with evaluation habits.",
            "Document-heavy AI products live or die by their ingestion pipeline.",
          ],
        },
      ],
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByStatus(status) {
  return projects.filter((project) => project.status === status);
}
