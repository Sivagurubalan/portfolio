/**
 * Every personal detail on the site lives here.
 * Update this file and the whole portfolio follows.
 */

export interface SocialLink {
  label: string;
  href: string;
}

export interface FocusArea {
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  cats: string[];
}

export interface CaseStep {
  label: string;
  detail: string;
}

export interface TechUse {
  name: string;
  use: string;
}

export interface CaseStudy {
  overview: string;
  reasoning: string;
  problem: string;
  architecture: CaseStep[];
  tech: TechUse[];
  contribution: string[];
  testing: string[];
  caveat?: string;
  future: string[];
}

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  tier: 1 | 2 | 3;
  status: string;
  year: string;
  summary: string;
  problem: string;
  contribution: string;
  image: string;
  tech: string[];
  cats: string[];
  codeUrl?: string;
  liveUrl?: string;
  caseStudy: CaseStudy;
}

export interface Achievement {
  label: string;
  title: string;
  event: string;
  organiser: string;
  date: string;
  teammate: string;
  challenge: string;
  approach: string;
  takeaway: string;
}

export const site = {
  name: "R. Sivagurubalan",
  firstName: "Sivagurubalan",
  role: "Robotics & Automation Engineer · AI Systems Developer",
  shortRole: "Robotics · AI · Software · Automation",
  avatar: "/images/sivagurubalan.jpg",

  metaDescription:
    "R. Sivagurubalan is a Robotics & Automation engineering student and full-stack developer building intelligent systems across AI, software, IoT and industrial automation.",

  email: "sivaguru2008.in@gmail.com",
  location: "Chennai, India",

  githubUrl: "https://github.com/Sivagurubalan",
  linkedinUrl: "https://www.linkedin.com/in/sivagurubalan-r-a0200b380",

  hero: {
    eyebrow: "SIVA / ENGINEERING",
    edition: "Portfolio 2026",
    headlineStart: "Engineering intelligence at the intersection of ",
    headlineAccent: "AI, robotics & software.",
    subheadline:
      "I build intelligent applications, connected systems and experimental engineering solutions by combining artificial intelligence, full-stack development, robotics and automation.",
    tagline: ["Robotics", "AI", "Software", "Automation"],
  },

  focus: [
    {
      title: "Robotics & Automation",
      summary: "Embedded systems, motor control and intelligent machines.",
      detail:
        "Chassis, drivers, sensors and firmware — from a first-year spraying rover to an AI-commanded omnidirectional base.",
      tags: ["Embedded systems", "Motor control", "ESP8266 / ESP32"],
      cats: ["Robotics", "Hardware"],
    },
    {
      title: "Artificial Intelligence",
      summary: "Applied AI, computer vision and intelligent applications.",
      detail:
        "Gemini-powered product features, image-based command recognition and classification models — with the model key kept server-side.",
      tags: ["Gemini API", "Computer vision", "Applied ML"],
      cats: ["AI", "ML"],
    },
    {
      title: "Full-Stack Engineering",
      summary: "Interactive applications and the architecture behind them.",
      detail:
        "React and TypeScript frontends, Express API layers, Tailwind design systems and static-first delivery.",
      tags: ["React", "TypeScript", "Node.js / Express"],
      cats: ["Web"],
    },
    {
      title: "IoT & Industry 4.0",
      summary: "Connected devices, monitoring and intelligent automation.",
      detail:
        "Sensor-to-dashboard pipelines, equipment-health views, alerts and energy insight for industrial operations.",
      tags: ["Telemetry", "Dashboards", "Automation"],
      cats: ["IoT", "Industry 4.0"],
    },
  ] satisfies FocusArea[],

  stack: [
    { file: "javaScript", label: "JavaScript" },
    { file: "typeScript", label: "TypeScript" },
    { file: "react", label: "React" },
    { file: "next", label: "Next.js" },
    { file: "nodejs", label: "Node.js" },
    { file: "tailwindcss", label: "Tailwind CSS" },
    { file: "mysql", label: "MySQL" },
    { file: "git", label: "Git" },
    { file: "vercel", label: "Vercel" },
  ],

  projects: [
    {
      slug: "scamshield-ai",
      title: "ScamShield AI",
      kicker: "AI · Cybersecurity",
      tier: 1,
      status: "Live demo",
      year: "2026",
      summary:
        "A multimodal screener that reads a suspicious URL, email, offer letter or SMS, scores the scam risk and explains the verdict in plain language.",
      problem:
        "Scam messages arrive as polished, plausible copy. Judging them by gut fails exactly when the stakes are highest — a fake internship offer, a lookalike bank link, a courier payment SMS.",
      contribution:
        "Interface, analysis flow and the API boundary that keeps the model key off the client.",
      image: "/projects/scamshield.svg",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Express",
        "Gemini API",
        "Three.js",
      ],
      cats: ["AI", "Web", "Cybersecurity"],
      codeUrl: "https://github.com/Sivagurubalan/scam-detection",
      liveUrl: "https://scamshield-ai-7702.ai.studio",
      caseStudy: {
        overview:
          "ScamShield AI is a threat-screening web app. A visitor pastes whatever they are unsure about — a link, an email, an offer letter, an SMS — and gets back a risk score, the signals behind that score, and a recommended next action.",
        reasoning:
          "I wanted an AI feature that is useful precisely because it explains itself. A verdict a non-technical person can act on is the whole product; a percentage alone is not.",
        problem:
          "Fraud screening tools are built for security teams. The people who actually receive the scam — students, first-job applicants, parents — get a wall of jargon or nothing at all, then decide with the same gut feeling the attacker is targeting.",
        architecture: [
          {
            label: "Input capture",
            detail:
              "Text or URL entry normalised into one analysis payload, so the same flow handles a message, a link or a document.",
          },
          {
            label: "Server-side analysis",
            detail:
              "The browser calls an Express endpoint. The Gemini request and API key stay on the server and never enter the client bundle.",
          },
          {
            label: "Structured verdict",
            detail:
              "The model is asked for a risk score, the specific signals found and a plain-language explanation — not free-form prose that has to be re-parsed.",
          },
          {
            label: "Guided response",
            detail:
              "Every verdict closes with actions: ignore, verify through an official channel, or report.",
          },
          {
            label: "Failure state",
            detail:
              "If the model call fails, the interface says so instead of presenting a confident-looking fake result.",
          },
        ],
        tech: [
          { name: "React + TypeScript", use: "Interface, analysis state and verdict rendering" },
          { name: "Vite", use: "Development and production build" },
          { name: "Tailwind CSS", use: "Dark security-console layout, responsive from mobile up" },
          { name: "Express", use: "Server endpoint that proxies the model call" },
          { name: "Gemini API", use: "Signal extraction, risk scoring and explanation" },
          { name: "Three.js", use: "Ambient 3D layer in the threat console" },
        ],
        contribution: [
          "Built the React + TypeScript interface, including the risk-verdict layout that separates score, evidence and next action.",
          "Built the Express API layer and moved the model call behind it, so no key ships to the browser.",
          "Defined the prompt contract that returns structured signals instead of unstructured text.",
          "Designed the dark console visual language and its 3D/motion layer.",
        ],
        testing: [
          "Ran the flow against phishing SMS, fake offer letters and lookalike domains, and checked verdicts stay readable at mobile widths.",
          "Inspected the built bundle to confirm the API key is not present in client code.",
          "Forced model failures to confirm the error state appears instead of a fabricated verdict.",
        ],
        caveat:
          "This is a working prototype, not a certified detector. Image and audio screening are concept-level, and there is no labelled evaluation set yet, so I do not publish precision or recall numbers for it.",
        future: [
          "A labelled corpus and an evaluation harness, so accuracy claims become measurements.",
          "URL reputation lookups alongside model reasoning.",
          "A browser extension that screens the page you are already on.",
          "OCR for uploaded offer letters and screenshots.",
        ],
      },
    },
    {
      slug: "omnidirectional-robot",
      title: "AI Omnidirectional Robot",
      kicker: "Robotics · Embedded AI",
      tier: 1,
      status: "Hardware prototype",
      year: "2026",
      summary:
        "A four-wheel omnidirectional robot that takes a direction from a recognised image and turns it into physical movement over Wi-Fi.",
      problem:
        "Keyboard and joystick control keep a robot tied to a controller. A robot that reads a visual command closes the full loop from perception to motion.",
      contribution:
        "Chassis and driver wiring, the Wi-Fi command protocol, and the recognition-to-motion pipeline.",
      image: "/projects/omnidirectional-robot.svg",
      tech: [
        "ESP8266",
        "Motor driver",
        "DC gear motors",
        "Embedded C / Arduino",
        "Image classification",
        "Wi-Fi",
      ],
      cats: ["Robotics", "AI", "IoT", "Hardware"],
      caseStudy: {
        overview:
          "A physical robot base controlled by what it sees. An image of a directional sign is classified into a movement command, sent over Wi-Fi, and executed by the motor driver — including diagonal and sideways motion, not just forward turns.",
        reasoning:
          "Software-only projects had taught me the AI side. This was the project where a wrong prediction stops being a bad label and becomes a robot driving into a wall, so it forced me to care about latency, power and failure handling.",
        problem:
          "Most hobby robot control is a joystick app. That keeps a human in the loop for every movement, and it never connects perception to actuation — which is exactly the part I wanted to learn.",
        architecture: [
          {
            label: "Visual command",
            detail:
              "An image of a direction is classified into forward, back, left, right or a diagonal.",
          },
          {
            label: "Wireless transport",
            detail:
              "The recognised label is sent over Wi-Fi to the ESP8266 mounted on the robot.",
          },
          {
            label: "Command decode",
            detail:
              "Firmware maps the label to a wheel-speed vector rather than switching individual motors on and off.",
          },
          {
            label: "Omnidirectional drive",
            detail:
              "Mixed wheel speeds let the base strafe and move diagonally, so all four wheels contribute to the requested direction.",
          },
          {
            label: "Motor execution",
            detail:
              "The driver energises the motors for the command duration and stops the base when a command times out.",
          },
        ],
        tech: [
          { name: "ESP8266", use: "On-board Wi-Fi receiver and control firmware" },
          { name: "Motor driver module", use: "Direction and speed control for four DC motors" },
          { name: "DC gear motors", use: "Omnidirectional wheel drive" },
          { name: "Embedded C / Arduino", use: "Command decoding, timing and motor mixing" },
          { name: "Image classification", use: "Direction recognition from a camera image" },
          { name: "Wi-Fi", use: "Transport between the recognition step and the robot" },
        ],
        contribution: [
          "Assembled the chassis and wired the motor driver, motors and power distribution.",
          "Wrote the firmware that turns a direction label into a four-wheel speed mix.",
          "Built the recognition-to-command bridge that sends labels over Wi-Fi.",
          "Debugged the failures that only appear on hardware: driver heating, supply sag and command latency.",
        ],
        testing: [
          "Bench-tested every command direction and confirmed the wheel mix produces the intended motion, including diagonal movement.",
          "Measured command-to-motion delay over Wi-Fi and logged the cases where recognition failed under poor lighting.",
        ],
        caveat:
          "Recognition accuracy is not benchmarked yet. The current build proves the pipeline end to end; it is not production-grade perception, and there is no closed-loop feedback from the wheels.",
        future: [
          "On-device inference so commands do not depend on a network round trip.",
          "Encoder feedback for closed-loop speed control.",
          "Obstacle sensing and a stop-on-detection safety layer.",
          "Rebuilding the same base in a ROS 2 simulation to test navigation before touching hardware.",
        ],
      },
    },
    {
      slug: "smart-factory-iot",
      title: "Smart Factory IoT",
      kicker: "Industry 4.0 · IoT",
      tier: 1,
      status: "Dashboard + concept",
      year: "2026",
      summary:
        "An Industry 4.0 operations view: machine health, telemetry, energy use, downtime and alerts gathered into one screen.",
      problem:
        "Plant data usually lives in disconnected systems, so a failing machine is discovered when production stops rather than when the vibration changed.",
      contribution:
        "System model, dashboard architecture, alert rules and the decision to label simulated data as simulated.",
      image: "/projects/industry-os.svg",
      tech: ["React", "TypeScript", "Three.js", "Gemini API", "Data visualisation"],
      cats: ["IoT", "Industry 4.0", "Web", "AI"],
      codeUrl: "https://github.com/Sivagurubalan/industry-operating-system",
      caseStudy: {
        overview:
          "An operations dashboard for a production floor: per-machine health, live telemetry, downtime history, energy breakdown and prioritised maintenance alerts in a single view.",
        reasoning:
          "Robotics taught me single machines. Industry 4.0 is the same problem multiplied by a plant — and the interface, not the sensor, is where an operator actually makes the decision.",
        problem:
          "Condition data, energy readings and maintenance logs normally sit in separate tools. Nobody sees the combination that predicts a stoppage, so maintenance stays reactive and downtime is discovered by the production line stopping.",
        architecture: [
          {
            label: "Sensor layer",
            detail:
              "Temperature, vibration and energy readings per machine — currently generated by a simulator rather than real hardware.",
          },
          {
            label: "Machine model",
            detail:
              "Readings normalised into one machine record with a derived health score, so the interface never has to reconcile unit formats.",
          },
          {
            label: "Operations dashboard",
            detail:
              "Live telemetry, downtime timeline, energy breakdown and a plant-level overview built on that model.",
          },
          {
            label: "Alert rules",
            detail:
              "Thresholds become prioritised maintenance alerts instead of raw numbers, so the next action is explicit.",
          },
          {
            label: "AI assist",
            detail:
              "Anomalies are summarised in operator language instead of a chart the operator has to interpret alone.",
          },
        ],
        tech: [
          { name: "React + TypeScript", use: "Dashboard components, state and typed machine model" },
          { name: "Three.js", use: "Spatial plant/machine visualisation" },
          { name: "Data visualisation", use: "Telemetry trends, downtime and energy breakdowns" },
          { name: "Gemini API", use: "Natural-language summaries of anomalies" },
        ],
        contribution: [
          "Designed the machine data model and the health-score logic the dashboard renders.",
          "Built the operations views: telemetry, downtime, energy and alert queue.",
          "Defined alert thresholds and the priority ordering an operator sees first.",
          "Kept simulated readings visibly labelled, so the demo never pretends to be plant data.",
        ],
        testing: [
          "Walked through simulated incidents — rising vibration, an energy spike, an unplanned stop — and checked the alert hierarchy and timeline read correctly.",
          "Verified the dashboard stays usable at laptop and tablet widths, where operators would actually read it.",
        ],
        caveat:
          "All data is simulated. No plant hardware or MQTT/OPC-UA feed is connected in this build, and the dashboard states that directly.",
        future: [
          "MQTT or OPC-UA ingestion from a real sensor rig.",
          "A predictive-maintenance model on vibration and temperature history.",
          "Shift reports and exportable downtime summaries.",
        ],
      },
    },
    {
      slug: "electropro",
      title: "ElectroPro",
      kicker: "Product · Hardware discovery",
      tier: 2,
      status: "Prototype",
      year: "2026",
      summary:
        "Electronics discovery, multi-store price comparison and a project-sized BOM generator for robotics and IoT builds.",
      problem:
        "Choosing parts means ten tabs, mismatched specs and a spreadsheet that goes stale before the build starts.",
      contribution:
        "Product model, comparison flow, BOM generation and the responsive interface.",
      image: "/projects/electropro.svg",
      tech: ["React", "TypeScript", "Express", "Gemini API"],
      cats: ["Web", "Hardware"],
      codeUrl: "https://github.com/Sivagurubalan/electropro",
      caseStudy: {
        overview:
          "A hardware-discovery platform: search components, compare specs and prices side by side, then assemble a bill of materials for a specific project instead of a generic wishlist.",
        reasoning:
          "Every robotics build starts with the same slow research loop. I built the tool I kept wishing existed while sourcing parts for my own projects.",
        problem:
          "Component research is fragmented. Specs live on datasheets, prices are spread across stores, and compatibility knowledge is in forum posts — so beginners overpay, buy incompatible parts, or give up on a build.",
        architecture: [
          {
            label: "Component catalogue",
            detail:
              "Parts described by purpose and specification, not just a name, so a beginner can search by what the part has to do.",
          },
          {
            label: "Comparison view",
            detail:
              "Selected parts aligned on the same spec rows, with price and availability beside them.",
          },
          {
            label: "Project BOM",
            detail:
              "Components grouped into a build list with quantities, so the total cost is visible before ordering.",
          },
          {
            label: "Guidance layer",
            detail:
              "AI-generated explanations of trade-offs between similar parts, grounded in the comparison the user is already looking at.",
          },
        ],
        tech: [
          { name: "React + TypeScript", use: "Search, comparison and BOM interface" },
          { name: "Express", use: "API layer for catalogue and model calls" },
          { name: "Gemini API", use: "Trade-off explanations between candidate parts" },
        ],
        contribution: [
          "Defined the component and BOM data model.",
          "Built the comparison interface and the project BOM flow.",
          "Wired the server-side AI guidance layer with the key kept off the client.",
        ],
        testing: [
          "Ran comparison and BOM flows for small robotics builds (controller, driver, sensors, power) to check quantities and totals.",
          "Checked the layout from phone to desktop, since parts are usually researched on a phone.",
        ],
        caveat:
          "Catalogue and price data are assembled for the prototype. Live retailer integrations and checkout are planned, not built.",
        future: [
          "Retailer APIs for real prices and stock.",
          "Compatibility checks between selected parts.",
          "Saved builds and shareable BOM links.",
        ],
      },
    },
    {
      slug: "ai-engineering-portfolio",
      title: "BloomYourBrain",
      kicker: "Full-stack · Interactive learning",
      tier: 2,
      status: "Running build",
      year: "2026",
      summary:
        "A role-driven quiz platform with ten career tracks, difficulty rounds, hints, streaks and progress analytics — the software foundation this portfolio grew out of.",
      problem:
        "Learning tools test recall in one flat mode, so practice stops being interesting long before it stops being useful.",
      contribution:
        "Question bank, round and scoring logic, streak and analytics views, audio and canvas interactions.",
      image: "/projects/bloomyourbrain.svg",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas", "Web Audio"],
      cats: ["Web", "AI"],
      codeUrl: "https://github.com/Sivagurubalan/AI-based-web-platforms",
      caseStudy: {
        overview:
          "BloomYourBrain turns a quiz into a run: pick a career track, climb through difficulty rounds, use limited hints, keep a streak alive and review an analytics screen at the end.",
        reasoning:
          "I wanted to understand scoring, state and progress feedback without a framework hiding the mechanics — so this one is plain JavaScript, canvas and the Web Audio API.",
        problem:
          "A flat quiz feels like an exam. Without progression, stakes or feedback, people stop after a few questions even when the topic matters to them.",
        architecture: [
          {
            label: "Track and round selection",
            detail:
              "Ten career tracks, each split into difficulty rounds that unlock in order.",
          },
          {
            label: "Question engine",
            detail:
              "Questions carry category, difficulty and explanation, so the same bank supports practice and review.",
          },
          {
            label: "Scoring and streaks",
            detail:
              "Points, hint penalties and streak multipliers tracked per run and surfaced as immediate feedback.",
          },
          {
            label: "Analytics",
            detail:
              "End-of-run accuracy by category shows where the weak areas actually are.",
          },
          {
            label: "Interaction layer",
            detail:
              "Canvas animations and synthesised audio cues built with the Web Audio API, no media downloads.",
          },
        ],
        tech: [
          { name: "HTML5 + CSS3", use: "Layout and the game-like visual system" },
          { name: "JavaScript", use: "Question flow, scoring, streaks and analytics" },
          { name: "Canvas", use: "Animated feedback and progress visuals" },
          { name: "Web Audio API", use: "Synthesised sound cues without audio files" },
        ],
        contribution: [
          "Wrote the question bank and the round/difficulty structure.",
          "Built the scoring, hint and streak logic, including the end-of-run analytics.",
          "Implemented the canvas and audio interaction layer.",
        ],
        testing: [
          "Played every track through its rounds to check unlock order, scoring and analytics totals.",
          "Verified the layout and touch targets on a phone, where most quiz sessions happen.",
        ],
        caveat:
          "It is a browser-only app: progress lives in the browser, with no accounts or server-side score storage yet.",
        future: [
          "Server-side accounts and leaderboards.",
          "Adaptive difficulty based on per-category accuracy.",
          "Authoring tools so the question bank can grow without editing code.",
        ],
      },
    },
    {
      slug: "smart-agriculture-rover",
      title: "Smart Agriculture Rover",
      kicker: "Robotics · Year-one prototype",
      tier: 3,
      status: "Team prototype",
      year: "2025",
      summary:
        "A first-year rover prototype for targeted pesticide spraying: wireless driving, a servo-aimed nozzle and a pump on a four-wheel chassis.",
      problem:
        "Manual spraying exposes the operator to chemicals and wastes solution on rows that do not need it.",
      contribution:
        "Chassis and drive wiring, spray-mount integration, movement and spray testing.",
      image: "/projects/agriculture-rover.svg",
      tech: ["Arduino", "DC motors", "Servo", "Pump", "RF/Wi-Fi remote", "Embedded C"],
      cats: ["Robotics", "IoT", "Hardware"],
      caseStudy: {
        overview:
          "A remote-controlled agricultural rover: four-wheel drive, a tank and pump on board, and a servo that aims the spray nozzle independently of the chassis.",
        reasoning:
          "This was my first build where the deliverable was physical. Everything I learned about power budgets, wiring and mechanical tolerance started here.",
        problem:
          "Knapsack spraying puts the operator in direct contact with pesticide for hours and applies the same volume everywhere, regardless of where the problem actually is.",
        architecture: [
          {
            label: "Drive base",
            detail:
              "Four DC gear motors on a rigid chassis, sized to carry the tank and spray assembly over soil.",
          },
          {
            label: "Wireless control",
            detail:
              "A handheld remote sends drive and spray commands to the on-board receiver.",
          },
          {
            label: "Spray assembly",
            detail:
              "A pump pressurises the line while a servo aims the nozzle, so spray direction can change without turning the rover.",
          },
          {
            label: "Power distribution",
            detail:
              "Separate drive and pump supply paths, because motor stall current was browning out the control electronics.",
          },
        ],
        tech: [
          { name: "Arduino", use: "Command decoding and actuator control" },
          { name: "DC gear motors", use: "Four-wheel drive" },
          { name: "Servo + pump", use: "Aimed spray delivery" },
          { name: "Wireless remote", use: "Driving and spray control" },
        ],
        contribution: [
          "Part of a team build: contributed to chassis assembly and drive wiring.",
          "Integrated the spray mount and servo aiming mechanism.",
          "Ran movement and spray tests, and diagnosed the power-sag failure that reset the controller.",
        ],
        testing: [
          "Bench-tested spray direction and pump flow before mounting the assembly on the chassis.",
          "Drove the rover on level ground to check range, turning and load behaviour with a full tank.",
        ],
        caveat:
          "It is remote-controlled by design at this stage: no autonomy, no crop sensing and no flow feedback.",
        future: [
          "Row following with GPS and a camera.",
          "Tank level and flow sensing so application volume is measured, not estimated.",
          "Spray-only-where-needed logic once sensing exists.",
        ],
      },
    },
    {
      slug: "fraud-detection",
      title: "Fraud Detection System",
      kicker: "Machine learning · Foundation",
      tier: 3,
      status: "Notebook study",
      year: "2025",
      summary:
        "A classification study of online transactions: preprocessing, class-imbalance handling and an honest evaluation of a fraud model.",
      problem:
        "Fraud is rare. A model that answers “legitimate” every time already scores over 99% accuracy and catches nothing.",
      contribution:
        "Data audit, preprocessing pipeline, baseline model and the evaluation that replaced accuracy with precision and recall.",
      image: "/projects/fraud-detection.svg",
      tech: ["Python", "pandas", "scikit-learn", "Logistic regression"],
      cats: ["ML", "AI"],
      caseStudy: {
        overview:
          "A study of online transaction classification: audit the data, handle the imbalance, train a baseline classifier and evaluate it in a way that reflects the cost of missed fraud.",
        reasoning:
          "It was the project that taught me a metric can flatter a model. That lesson changed how I report results in every project after it.",
        problem:
          "Fraud detection is an imbalanced classification problem. Optimising accuracy rewards a model that ignores fraud entirely, which is the opposite of what a payment system needs.",
        architecture: [
          {
            label: "Data audit",
            detail:
              "Class distribution, feature ranges and missing values inspected before any modelling.",
          },
          {
            label: "Preprocessing",
            detail:
              "Stratified split plus scaling of amount and time features so the split keeps the fraud ratio.",
          },
          {
            label: "Imbalance handling",
            detail:
              "Class weighting and resampling compared, because the choice changes which errors the model makes.",
          },
          {
            label: "Model",
            detail:
              "Logistic regression as an interpretable baseline with coefficients that can be read.",
          },
          {
            label: "Evaluation",
            detail:
              "Precision, recall, F1 and a confusion matrix instead of accuracy, with the threshold chosen deliberately.",
          },
        ],
        tech: [
          { name: "Python", use: "Analysis and modelling" },
          { name: "pandas", use: "Cleaning, feature inspection and splits" },
          { name: "scikit-learn", use: "Preprocessing, model training and metrics" },
          { name: "Logistic regression", use: "Interpretable baseline classifier" },
        ],
        contribution: [
          "Built the preprocessing pipeline and the stratified evaluation split.",
          "Trained and compared the baseline with and without imbalance handling.",
          "Reported precision, recall, F1 and the confusion matrix, and documented the threshold trade-off.",
        ],
        testing: [
          "Compared metrics before and after imbalance handling to show why accuracy was misleading.",
          "Inspected false negatives, since a missed fraud is the expensive error here.",
        ],
        caveat:
          "Trained on a public, heavily imbalanced transaction dataset. This is a methodology study, not a deployed fraud system.",
        future: [
          "Gradient-boosted trees as a stronger baseline.",
          "Threshold selection from the precision-recall curve.",
          "Cost-sensitive evaluation and drift monitoring.",
        ],
      },
    },
  ] as Project[],

  achievement: {
    label: "First Prize",
    title: "WEB CRAFT CHALLENGE 2K26",
    event: "Inter-college web development competition",
    organiser:
      "Department of Computer Science and Engineering, Karpaga Vinayaga College of Engineering and Technology",
    date: "7 September 2026",
    teammate: "Kavinash",
    challenge:
      "Build a website with different AI models rather than one, then judge the generated output on design quality, implementation and how much human direction each result actually needed.",
    approach:
      "I split the work by evaluation instead of by feature: generate competing versions, compare them against a fixed brief, then rebuild the strongest direction by hand where the generated code fell short.",
    takeaway:
      "AI made the first draft cheap and the judgement expensive. Knowing what to keep, what to rewrite and what to throw away was the actual skill being tested.",
  } satisfies Achievement,

  arsenal: [
    {
      title: "Programming",
      items: ["Python", "C / C++", "JavaScript", "TypeScript", "SQL (MySQL)"],
    },
    {
      title: "Web & applications",
      items: ["React", "Next.js", "Astro", "Node.js", "Express", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      title: "AI & data",
      items: [
        "Gemini API",
        "Prompt design",
        "Applied ML (scikit-learn)",
        "Computer-vision basics",
        "Data visualisation",
      ],
    },
    {
      title: "Robotics & embedded",
      items: [
        "Arduino",
        "ESP8266 / ESP32",
        "DC motors & drivers",
        "Sensors",
        "Servo & pump control",
        "Embedded C",
      ],
    },
    {
      title: "Tools & workflow",
      items: ["Git / GitHub", "VS Code", "Figma", "Vercel", "pnpm"],
    },
  ],

  journey: [
    {
      period: "2025 · Year one",
      title: "Smart Agriculture Rover",
      detail:
        "First hardware build: chassis, wireless driving and a servo-aimed spray assembly. Learned how power, wiring and firmware failures actually present themselves.",
      tag: "Robotics",
    },
    {
      period: "2025",
      title: "Fraud detection study",
      detail:
        "First serious machine-learning project — and the first time an accuracy number lied to me. Moved to precision, recall, F1 and a confusion matrix.",
      tag: "Machine learning",
    },
    {
      period: "2026",
      title: "BloomYourBrain",
      detail:
        "A game-shaped learning platform in plain JavaScript: ten career tracks, difficulty rounds, hints, streaks and analytics.",
      tag: "Full-stack",
    },
    {
      period: "2026",
      title: "AI Omnidirectional Robot",
      detail:
        "Connected perception to motion: image-based direction recognition, Wi-Fi transport and a four-wheel omni base.",
      tag: "AI + robotics",
    },
    {
      period: "2026",
      title: "Smart Factory IoT",
      detail:
        "Pointed the same dashboard thinking at Industry 4.0: machine health, telemetry, alerts and energy insight in one view.",
      tag: "Industry 4.0",
    },
    {
      period: "7 Sept 2026",
      title: "WEB CRAFT CHALLENGE 2K26 — First Prize",
      detail:
        "Won an inter-college competition built around generating, evaluating and rebuilding websites with AI models, with teammate Kavinash.",
      tag: "Recognition",
    },
    {
      period: "Now · Nov 2026",
      title: "ScamShield AI and this portfolio",
      detail:
        "Current focus: AI features with a server-side key boundary and honest limits, presented as case studies rather than screenshots.",
      tag: "Now",
    },
  ],

  about: {
    lead: "I am a Robotics & Automation engineering student who builds across software and hardware — not one or the other.",
    body: [
      "My work sits between disciplines: an AI screener with a server-side model boundary, a robot that turns a recognised direction into wheel motion, an Industry 4.0 dashboard that separates simulated data from plant data. Each one started as a question about how the pieces fit together, and each one ended with a working system and a clearer list of what still does not work.",
      "My approach is to build the smallest complete version, test it honestly, and write down the limitation before moving on. AI tools are part of how I build — for first drafts, for review, for exploring an unfamiliar API — but the engineering decisions, the debugging and the judgement of what is good enough are mine.",
    ],
    facts: [
      { label: "Studying", value: "Robotics & Automation Engineering, 2nd year" },
      { label: "Based in", value: "Chennai, India" },
      { label: "Focus", value: "AI systems, robotics, full-stack, Industry 4.0" },
      { label: "Open to", value: "Internships, collaborations, robotics & AI projects" },
    ],
    currently:
      "Right now I am extending ScamShield AI's evaluation story and rebuilding my robotics work in simulation so it can be tested before it is wired.",
  },

  contactHeading:
    "Open to internships, technical collaborations, robotics and AI projects, and conversations with people building systems that have to work outside a browser.",
  contactNote: "Email is the fastest way to reach me.",
  availability: ["Internships", "Technical collaborations", "Robotics & AI projects"],

  /**
   * Optional Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz".
   * While this is empty the contact form falls back to opening the visitor's
   * email client with the message pre-filled — so it works with no signup.
   */
  formspreeEndpoint: "",

  currently: {
    label: "Current focus",
    title: "ScamShield AI",
    description:
      "A live AI screener for scam URLs, emails, offer letters and SMS — with the model call kept server-side.",
  },
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: site.githubUrl },
  { label: "LinkedIn", href: site.linkedinUrl },
  { label: "Email", href: `mailto:${site.email}` },
].filter((link) => link.href !== "");

export const featuredProjects = site.projects.filter((project) => project.tier === 1);
export const supportingProjects = site.projects.filter((project) => project.tier > 1);
