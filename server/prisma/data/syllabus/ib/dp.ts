import { SyllabusEntry } from '../types';

// ============================================================================
// IB Diploma Programme (DP) — Classes 11-12
// Based on International Baccalaureate Diploma Programme curriculum
// Subjects: Group 1-6 subjects + Core (TOK, EE, CAS)
// ============================================================================

export const ibDP: SyllabusEntry[] = [

  // ==========================================================================
  // CLASS 11 — DP Year 1
  // ==========================================================================

  // ──────────────────────────────────────────────
  // CLASS 11 — English A: Language and Literature (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'English A: Language and Literature (HL/SL)',
    topics: [
      {
        topicName: 'Readers, Writers and Texts',
        subtopics: [
          'The relationship between reader, writer and text',
          'Authorial choices: purpose, audience and context',
          'Analysing how meaning is constructed through language and style',
          'The role of cultural and historical context in shaping texts',
          'Reader response theory and subjective interpretation',
          'Studying a range of literary and non-literary texts in this area of exploration',
        ],
        depthLevel: 3,
        learningObjectives:
          'Examine the nature of language and literature through the study of a range of texts; analyse how audience, purpose and context shape the construction and reception of meaning.',
        orderIndex: 1,
      },
      {
        topicName: 'Time and Space',
        subtopics: [
          'How texts reflect and represent the values of their time and place',
          'Transformation of texts across different cultural contexts',
          'The influence of geography, era and social conditions on literary production',
          'Comparing texts from different periods and traditions',
          'Representation of identity through temporal and spatial lens',
          'Studying works that explore displacement, migration and belonging',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explore how texts are shaped by cultural, historical and social contexts; analyse the relationship between a text and the time and place in which it was produced and received.',
        orderIndex: 2,
      },
      {
        topicName: 'Intertextuality: Connecting Texts',
        subtopics: [
          'Understanding intertextual references and allusions',
          'How texts influence and respond to one another across genres and periods',
          'Comparative study of texts sharing thematic or stylistic connections',
          'Adaptation, parody and reinterpretation of source texts',
          'The role of genre conventions in creating meaning',
          'Synthesising ideas across multiple texts to build an argument',
        ],
        depthLevel: 3,
        learningObjectives:
          'Investigate connections between and among texts; understand how intertextual references enrich meaning and how texts exist within broader literary and cultural traditions.',
        orderIndex: 3,
      },
      {
        topicName: 'Non-Literary Text Analysis',
        subtopics: [
          'Analysing advertisements, speeches, editorials and opinion pieces',
          'Visual literacy: images, graphics, layout and design choices',
          'Persuasive techniques: ethos, pathos, logos in media texts',
          'Digital and multimodal texts: blogs, podcasts, social media',
          'Bias, propaganda and representation in mass media',
          'Guided textual analysis (Paper 1) practice with unseen non-literary texts',
        ],
        depthLevel: 3,
        learningObjectives:
          'Develop skills in analysing non-literary texts including media, visual and digital forms; identify and evaluate persuasive and rhetorical strategies.',
        orderIndex: 4,
      },
      {
        topicName: 'Literary Analysis Techniques',
        subtopics: [
          'Close reading and annotation of prose, poetry and drama',
          'Identifying and analysing literary devices: imagery, symbolism, motif, irony',
          'Narrative techniques: point of view, structure, pacing, foreshadowing',
          'Analysing poetic form, metre, rhyme and sound devices',
          'Character development, dialogue and dramatic conventions',
          'Developing a personal literary vocabulary and critical toolkit',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply a range of analytical techniques to literary texts across genres; develop the ability to construct well-supported interpretations using literary terminology.',
        orderIndex: 5,
      },
      {
        topicName: 'Writing Skills',
        subtopics: [
          'Comparative essay writing: structuring arguments across two or more texts',
          'Guided textual analysis: writing under timed conditions for Paper 1',
          'Commentary writing on literary and non-literary passages',
          'Creative writing: crafting original pieces inspired by studied texts',
          'Developing a clear thesis and sustaining an argument with textual evidence',
          'Editing, revising and refining academic prose',
        ],
        depthLevel: 3,
        learningObjectives:
          'Produce a variety of written work including essays, commentaries and creative pieces; demonstrate clarity, coherence and effective use of evidence in all forms of writing.',
        orderIndex: 6,
      },
      {
        topicName: 'Oral Skills and the Individual Oral',
        subtopics: [
          'Understanding the Individual Oral (IO) assessment criteria',
          'Selecting a global issue and connecting it to a literary and non-literary text',
          'Constructing a focused 10-minute oral presentation with clear line of inquiry',
          'Analysing extracts and connecting them to broader textual and global themes',
          'Practising oral delivery: clarity, pace, engagement and confidence',
          'Responding to follow-up questions from the teacher',
        ],
        depthLevel: 3,
        learningObjectives:
          'Prepare for and practise the Individual Oral assessment; develop the ability to analyse texts in relation to a global issue and present ideas clearly and persuasively in spoken form.',
        orderIndex: 7,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Hindi B (SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Hindi B (SL)',
    topics: [
      {
        topicName: 'Communication and Media',
        subtopics: [
          'Understanding various forms of Hindi media: newspapers, magazines, digital platforms',
          'Analysing advertisements and public announcements in Hindi',
          'The role of social media and technology in Hindi communication',
          'Writing formal and informal correspondence: letters, emails, blog posts',
          'Discussing media influence on Indian society and youth culture',
          'Vocabulary building related to media, journalism and digital communication',
        ],
        depthLevel: 3,
        learningObjectives:
          'Engage with Hindi media texts across formats; develop the ability to analyse, critique and produce media-related content in Hindi with appropriate register and vocabulary.',
        orderIndex: 1,
      },
      {
        topicName: 'Social Relationships',
        subtopics: [
          'Family structures and dynamics in Indian society',
          'Friendship, peer relationships and social expectations',
          'Gender roles and evolving social norms in India',
          'Inter-generational communication and cultural values',
          'Festivals, traditions and their role in building community bonds',
          'Discussing social themes through Hindi literature and film excerpts',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explore social relationships in the Indian context through Hindi language; develop communicative competence to discuss family, friendships, traditions and societal changes.',
        orderIndex: 2,
      },
      {
        topicName: 'Global Issues',
        subtopics: [
          'Environmental challenges: pollution, climate change and sustainability in India',
          'Health and well-being: public health issues discussed in Hindi media',
          'Education and access: discussing the right to education in India',
          'Poverty, inequality and social justice themes in Hindi discourse',
          'Human rights and the role of civil society',
          'Globalisation and its impact on Indian culture and language',
        ],
        depthLevel: 3,
        learningObjectives:
          'Discuss global and local issues in Hindi with appropriate vocabulary and argumentative skills; understand diverse perspectives on environmental, social and health-related challenges.',
        orderIndex: 3,
      },
      {
        topicName: 'Reading Comprehension',
        subtopics: [
          'Reading and understanding authentic Hindi texts: articles, stories, essays',
          'Identifying main ideas, supporting details and implied meaning',
          'Analysing tone, purpose and audience in Hindi written texts',
          'Expanding vocabulary through contextual reading',
          'Summarising and paraphrasing Hindi texts accurately',
          'Preparing for Paper 1 receptive skills: reading section',
        ],
        depthLevel: 3,
        learningObjectives:
          'Develop reading skills in Hindi through engagement with a variety of authentic texts; demonstrate understanding of explicit and implicit meaning, tone and purpose.',
        orderIndex: 4,
      },
      {
        topicName: 'Written Production',
        subtopics: [
          'Writing diary entries, articles, reports and speeches in Hindi',
          'Narrative and descriptive writing in Hindi',
          'Argumentative and persuasive writing on social and cultural topics',
          'Using correct Hindi grammar, punctuation and script conventions',
          'Structuring written responses with introduction, body and conclusion',
          'Preparing for Paper 2 productive skills: writing section',
        ],
        depthLevel: 3,
        learningObjectives:
          'Produce a range of written text types in Hindi with accuracy and coherence; demonstrate command of grammar, vocabulary and appropriate register for different audiences.',
        orderIndex: 5,
      },
      {
        topicName: 'Listening and Speaking',
        subtopics: [
          'Listening to Hindi audio and video clips: news, interviews, conversations',
          'Understanding spoken Hindi across registers and accents',
          'Participating in class discussions and debates in Hindi',
          'Oral presentation skills: individual and group formats',
          'Preparing for the Individual Oral assessment in Hindi B',
          'Pronunciation, intonation and fluency development',
        ],
        depthLevel: 3,
        learningObjectives:
          'Develop listening comprehension and oral communication skills in Hindi; participate actively in spoken interactions and deliver structured oral presentations.',
        orderIndex: 6,
      },
      {
        topicName: 'Grammar and Vocabulary',
        subtopics: [
          'Verb conjugations: tenses (present, past, future, subjunctive, imperative)',
          'Postpositions, case markers and sentence structure in Hindi',
          'Complex sentence construction: relative clauses, conditionals, passive voice',
          'Formal and informal registers: honorifics and levels of politeness',
          'Idiomatic expressions, proverbs and culturally specific vocabulary',
          'Spelling conventions and Devanagari script accuracy',
        ],
        depthLevel: 3,
        learningObjectives:
          'Build a strong grammatical foundation in Hindi including verb forms, sentence patterns and register; expand vocabulary to communicate effectively across themes.',
        orderIndex: 7,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Mathematics: Analysis and Approaches (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Mathematics: Analysis and Approaches (HL/SL)',
    topics: [
      {
        topicName: 'Number and Algebra',
        subtopics: [
          'Arithmetic and geometric sequences and series; sigma notation',
          'Exponents and logarithms: laws, equations and applications',
          'Binomial theorem for positive integer powers and expansion',
          'Introduction to complex numbers: Cartesian form, operations and conjugates',
          'Proof by mathematical induction (HL introduction)',
          'Counting principles: permutations and combinations',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply the concepts of sequences, series, exponents and logarithms to solve problems; use the binomial theorem; understand complex numbers in Cartesian form and foundational proof techniques.',
        orderIndex: 1,
      },
      {
        topicName: 'Functions',
        subtopics: [
          'Concept of a function: domain, range, notation and composite functions',
          'Inverse functions and their graphical relationship',
          'Transformations of graphs: translations, reflections, stretches and compressions',
          'Quadratic functions: vertex form, completing the square, discriminant analysis',
          'Polynomial functions: factor and remainder theorems, graphing behaviour',
          'Rational functions: asymptotes, intercepts and sketching',
        ],
        depthLevel: 3,
        learningObjectives:
          'Understand the properties of functions including domain, range, composition and inverse; analyse and graph quadratic, polynomial and rational functions using algebraic and graphical methods.',
        orderIndex: 2,
      },
      {
        topicName: 'Geometry and Trigonometry',
        subtopics: [
          'Radian measure and the unit circle',
          'Trigonometric functions: sine, cosine and tangent — definitions, graphs and properties',
          'Trigonometric identities: Pythagorean, double angle and compound angle formulae',
          'Solving trigonometric equations in given domains',
          'Sine rule, cosine rule and area of a triangle',
          'Circles: arc length, sector area and their applications',
        ],
        depthLevel: 3,
        learningObjectives:
          'Work with radian measure and the unit circle; graph and transform trigonometric functions; prove and apply trigonometric identities; solve triangles using the sine and cosine rules.',
        orderIndex: 3,
      },
      {
        topicName: 'Statistics and Probability',
        subtopics: [
          'Descriptive statistics: measures of central tendency and dispersion',
          'Cumulative frequency, box plots and outlier identification',
          'Probability: sample spaces, combined events, conditional probability',
          'Discrete random variables and expected value',
          'Binomial distribution: mean, variance and probability calculations',
          'Normal distribution: standardisation, z-scores and probability using GDC',
        ],
        depthLevel: 3,
        learningObjectives:
          'Collect, organise and analyse data using statistical measures and representations; apply probability rules including conditional probability; model real-world situations using binomial and normal distributions.',
        orderIndex: 4,
      },
      {
        topicName: 'Calculus',
        subtopics: [
          'Limits and continuity: informal understanding and limit notation',
          'Differentiation from first principles and standard derivative rules',
          'Derivatives of polynomial, trigonometric, exponential and logarithmic functions',
          'Product rule, quotient rule and chain rule',
          'Applications of derivatives: tangent lines, rates of change, optimisation',
          'Introduction to integration: anti-differentiation and definite integrals',
        ],
        depthLevel: 3,
        learningObjectives:
          'Understand the concept of limits and differentiation; apply derivative rules to a variety of functions; solve problems involving rates of change and optimisation; introduce integration as the reverse of differentiation.',
        orderIndex: 5,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Physics (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Physics (HL/SL)',
    topics: [
      {
        topicName: 'Measurements and Uncertainties',
        subtopics: [
          'SI units, fundamental and derived quantities',
          'Order of magnitude estimation and significant figures',
          'Random and systematic errors in experimental measurements',
          'Absolute, fractional and percentage uncertainties',
          'Propagation of uncertainties in calculations',
          'Graphical techniques: best-fit lines, gradients, intercepts and error bars',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply SI units and significant figures correctly; distinguish between random and systematic errors; propagate uncertainties through calculations and represent data graphically with appropriate error analysis.',
        orderIndex: 1,
      },
      {
        topicName: 'Mechanics',
        subtopics: [
          'Kinematics: displacement, velocity, acceleration; equations of uniform motion',
          'Projectile motion: horizontal and vertical components',
          'Newton\'s laws of motion: force, mass, acceleration and free-body diagrams',
          'Work, energy and power: kinetic energy, potential energy, conservation of energy',
          'Linear momentum: impulse, conservation of momentum, elastic and inelastic collisions',
          'Translational equilibrium and torque',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse motion using kinematic equations and graphs; apply Newton\'s laws to solve force problems; use work-energy and momentum conservation principles to analyse physical systems.',
        orderIndex: 2,
      },
      {
        topicName: 'Thermal Physics',
        subtopics: [
          'Temperature, heat and internal energy; thermal equilibrium',
          'Specific heat capacity and calorimetry',
          'Phase changes and latent heat',
          'Ideal gas model: pressure, volume, temperature relationships',
          'Ideal gas law (PV = nRT) and kinetic molecular theory',
          'First law of thermodynamics: internal energy, work and heat',
        ],
        depthLevel: 3,
        learningObjectives:
          'Distinguish between temperature and heat; apply calorimetry and latent heat concepts; model ideal gases using the gas laws and kinetic theory; relate the first law of thermodynamics to energy transfers.',
        orderIndex: 3,
      },
      {
        topicName: 'Waves',
        subtopics: [
          'Wave properties: wavelength, frequency, amplitude, period, wave speed',
          'Transverse and longitudinal waves; electromagnetic spectrum overview',
          'Superposition principle: constructive and destructive interference',
          'Standing waves on strings and in pipes; harmonics and resonance',
          'Reflection, refraction and Snell\'s law',
          'Diffraction and single-slit diffraction patterns',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe and compare wave types; apply the superposition principle to explain interference and standing waves; analyse reflection, refraction and diffraction phenomena.',
        orderIndex: 4,
      },
      {
        topicName: 'Electricity and Magnetism',
        subtopics: [
          'Electric charge, Coulomb\'s law and electric fields',
          'Electric potential, potential difference and electron volt',
          'Current, resistance, Ohm\'s law and resistivity',
          'Series and parallel circuits: analysis of current, voltage and resistance',
          'Kirchhoff\'s circuit laws and internal resistance of cells',
          'Power dissipation in circuits and practical circuit applications',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse electric fields and forces between charges; apply Ohm\'s law and Kirchhoff\'s laws to solve circuit problems; calculate power and energy dissipation in electrical circuits.',
        orderIndex: 5,
      },
      {
        topicName: 'Circular Motion and Gravitation',
        subtopics: [
          'Uniform circular motion: angular velocity, centripetal acceleration and force',
          'Applications: banked curves, vertical circles, satellites in orbit',
          'Newton\'s law of universal gravitation',
          'Gravitational field strength and its variation with distance',
          'Orbital motion: satellite speed, period and geostationary orbits',
          'Gravitational potential energy in a radial field',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse uniform circular motion and identify centripetal forces; apply Newton\'s law of gravitation to calculate gravitational fields and orbital parameters.',
        orderIndex: 6,
      },
      {
        topicName: 'Atomic, Nuclear and Particle Physics',
        subtopics: [
          'Atomic structure: Rutherford model, energy levels, emission and absorption spectra',
          'Radioactive decay: alpha, beta and gamma radiation; half-life',
          'Nuclear reactions: fission and fusion; mass-energy equivalence (E = mc²)',
          'Fundamental particles: quarks, leptons, exchange bosons',
          'The Standard Model of particle physics',
          'Conservation laws in particle interactions: charge, baryon number, lepton number',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe atomic structure and energy levels; analyse radioactive decay processes and nuclear reactions; understand the Standard Model and conservation laws governing particle interactions.',
        orderIndex: 7,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Chemistry (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Chemistry (HL/SL)',
    topics: [
      {
        topicName: 'Stoichiometric Relationships',
        subtopics: [
          'The mole concept: Avogadro\'s number, molar mass and molar volume',
          'Empirical and molecular formulae from experimental data',
          'Balancing chemical equations and state symbols',
          'Mass, mole and volume calculations in chemical reactions',
          'Limiting and excess reagents; theoretical and percentage yield',
          'Solution concentration: molarity, dilution and titration calculations',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply the mole concept to perform stoichiometric calculations; determine empirical and molecular formulae; calculate yields and solution concentrations.',
        orderIndex: 1,
      },
      {
        topicName: 'Atomic Structure',
        subtopics: [
          'Subatomic particles: protons, neutrons, electrons; isotopes and relative atomic mass',
          'Mass spectrometry: determining isotopic composition and relative atomic mass',
          'Electron configuration: energy levels, subshells (s, p, d) and orbital notation',
          'The electromagnetic spectrum and atomic emission spectra',
          'Ionisation energy trends and successive ionisation energies',
          'The wave-particle duality and the Heisenberg uncertainty principle (HL introduction)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe atomic structure and electron configuration using quantum mechanical models; interpret mass spectra and emission spectra; explain periodic trends in ionisation energy.',
        orderIndex: 2,
      },
      {
        topicName: 'Periodicity',
        subtopics: [
          'The periodic table: periods, groups and blocks (s, p, d)',
          'Periodic trends: atomic radius, ionic radius, electronegativity',
          'Trends in ionisation energy and electron affinity across periods and groups',
          'Physical and chemical properties of Period 3 elements and their oxides',
          'Transition metals: variable oxidation states, coloured complexes, catalytic behaviour',
          'First-row d-block elements and their characteristic properties',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explain periodic trends in atomic and ionic radius, ionisation energy and electronegativity; describe properties of Period 3 elements and transition metals.',
        orderIndex: 3,
      },
      {
        topicName: 'Chemical Bonding and Structure',
        subtopics: [
          'Ionic bonding: formation, properties and lattice structures',
          'Covalent bonding: Lewis structures, bond polarity and coordinate bonds',
          'VSEPR theory: predicting molecular geometry and bond angles',
          'Intermolecular forces: van der Waals, dipole-dipole and hydrogen bonding',
          'Metallic bonding: delocalised electrons and properties of metals',
          'Allotropes of carbon (diamond, graphite, fullerenes) and giant covalent structures',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe ionic, covalent and metallic bonding; predict molecular shapes using VSEPR theory; explain how intermolecular forces determine physical properties of substances.',
        orderIndex: 4,
      },
      {
        topicName: 'Energetics/Thermochemistry',
        subtopics: [
          'Enthalpy changes: standard enthalpy of formation, combustion and reaction',
          'Exothermic and endothermic reactions; energy profile diagrams',
          'Calorimetry: measuring enthalpy changes experimentally',
          'Hess\'s law and enthalpy cycle calculations',
          'Bond enthalpy: average bond enthalpies and their use in calculations',
          'Spontaneity and introduction to Gibbs free energy (HL preview)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Calculate enthalpy changes using calorimetry, Hess\'s law and bond enthalpies; distinguish between exothermic and endothermic processes; interpret energy profile diagrams.',
        orderIndex: 5,
      },
      {
        topicName: 'Chemical Kinetics',
        subtopics: [
          'Rate of reaction: measurement methods and rate expressions',
          'Collision theory: activation energy, orientation and frequency of collisions',
          'Factors affecting rate: concentration, temperature, surface area, catalysts',
          'Maxwell-Boltzmann energy distribution curves',
          'Catalysts: homogeneous and heterogeneous; mechanism of catalytic action',
          'Rate equations and order of reaction (HL introduction)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Measure and describe rates of reaction; apply collision theory to explain the effects of changing conditions; interpret Maxwell-Boltzmann distributions and the role of catalysts.',
        orderIndex: 6,
      },
      {
        topicName: 'Equilibrium',
        subtopics: [
          'Dynamic equilibrium: characteristics and conditions for equilibrium',
          'The equilibrium constant (Kc) and its expression from balanced equations',
          'Le Chatelier\'s principle: predicting the effect of changes in conditions',
          'The relationship between Kc and the position of equilibrium',
          'Equilibrium calculations: ICE tables and solving for unknowns',
          'Industrial applications: the Haber process, the Contact process',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explain dynamic equilibrium and write equilibrium expressions; apply Le Chatelier\'s principle to predict shifts; perform equilibrium calculations using ICE tables.',
        orderIndex: 7,
      },
      {
        topicName: 'Acids and Bases',
        subtopics: [
          'Brønsted-Lowry theory: proton donors and acceptors; conjugate acid-base pairs',
          'Strong and weak acids and bases; degree of ionisation',
          'The pH scale: calculating pH from hydrogen ion concentration',
          'Properties of acids and bases: reactions with metals, carbonates and indicators',
          'Acid-base titration curves and choice of indicators',
          'Buffer solutions: composition, action and importance (HL introduction)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply the Brønsted-Lowry theory to identify acids, bases and conjugate pairs; calculate pH values; interpret titration curves and understand buffer systems.',
        orderIndex: 8,
      },
      {
        topicName: 'Redox Processes',
        subtopics: [
          'Oxidation and reduction: electron transfer and oxidation state changes',
          'Assigning oxidation numbers in compounds and ions',
          'Balancing redox equations using the half-equation method',
          'The reactivity series and displacement reactions',
          'Electrochemical cells: voltaic (galvanic) cells, electrode potentials',
          'Electrolysis: principles, products of electrolysis of aqueous solutions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Define oxidation and reduction in terms of electron transfer and oxidation states; balance redox equations; describe the construction and operation of electrochemical and electrolytic cells.',
        orderIndex: 9,
      },
      {
        topicName: 'Organic Chemistry',
        subtopics: [
          'Nomenclature: IUPAC naming of alkanes, alkenes, alcohols, halogenoalkanes and carboxylic acids',
          'Structural isomerism and functional group identification',
          'Alkanes: combustion, free-radical substitution mechanism',
          'Alkenes: addition reactions (hydrogenation, halogenation, hydration) and polymerisation',
          'Alcohols: classification, oxidation reactions and esterification',
          'Introduction to reaction mechanisms: curly arrow notation, nucleophilic substitution',
        ],
        depthLevel: 3,
        learningObjectives:
          'Name and draw organic compounds using IUPAC conventions; identify functional groups and types of isomerism; describe key reactions and mechanisms of alkanes, alkenes and alcohols.',
        orderIndex: 10,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Biology (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Biology (HL/SL)',
    topics: [
      {
        topicName: 'Cell Biology',
        subtopics: [
          'Cell theory and its evolution; cell size and surface area to volume ratio',
          'Prokaryotic and eukaryotic cells: ultrastructure and organelle functions',
          'Membrane structure: the fluid mosaic model and membrane proteins',
          'Transport across membranes: diffusion, osmosis, active transport, endocytosis and exocytosis',
          'Cell division: mitosis, the cell cycle and its regulation',
          'Stem cells: types, therapeutic uses and ethical considerations',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explain cell theory and compare prokaryotic and eukaryotic cells; describe membrane structure and transport mechanisms; outline the stages of mitosis and the role of stem cells.',
        orderIndex: 1,
      },
      {
        topicName: 'Molecular Biology',
        subtopics: [
          'Water: properties (cohesion, adhesion, thermal) and biological significance',
          'Carbohydrates, lipids, proteins and nucleic acids: structure and function',
          'Enzymes: mechanism of action, factors affecting activity, inhibition',
          'DNA structure and replication: semi-conservative replication model',
          'Transcription and translation: the central dogma of molecular biology',
          'Cellular respiration: glycolysis, Krebs cycle and oxidative phosphorylation (overview)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe the structure and function of biological molecules; explain enzyme kinetics and inhibition; outline DNA replication, transcription, translation and cellular respiration.',
        orderIndex: 2,
      },
      {
        topicName: 'Genetics',
        subtopics: [
          'Genes, alleles and the genome; gene mutations',
          'Meiosis: stages, crossing over and independent assortment',
          'Mendelian inheritance: monohybrid and dihybrid crosses, Punnett squares',
          'Co-dominance, multiple alleles (ABO blood groups) and sex-linked inheritance',
          'Genetic modification and biotechnology: PCR, gel electrophoresis, gene transfer',
          'Karyotyping and chromosomal abnormalities (e.g. Down syndrome)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Define key genetic terms; explain meiosis and its role in genetic variation; solve inheritance problems using Punnett squares; describe genetic modification techniques and their applications.',
        orderIndex: 3,
      },
      {
        topicName: 'Ecology',
        subtopics: [
          'Species, communities and ecosystems; biotic and abiotic factors',
          'Energy flow: food chains, food webs, trophic levels and ecological pyramids',
          'Carbon and nitrogen cycles: key processes and human impacts',
          'Population ecology: growth curves, carrying capacity and limiting factors',
          'Biodiversity: measurement (Simpson\'s index), importance and threats',
          'Climate change: greenhouse effect, evidence, causes and consequences',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe ecosystem structure and energy flow; explain nutrient cycling; analyse population dynamics; assess biodiversity and the causes and impacts of climate change.',
        orderIndex: 4,
      },
      {
        topicName: 'Evolution and Biodiversity',
        subtopics: [
          'Evidence for evolution: fossils, comparative anatomy, molecular biology',
          'Natural selection: variation, adaptation, fitness and speciation',
          'Classification of biodiversity: the binomial naming system and cladistics',
          'The five kingdoms and the three-domain system of classification',
          'Patterns of evolution: convergent, divergent and co-evolution',
          'Human impact on biodiversity: habitat loss, invasive species, conservation strategies',
        ],
        depthLevel: 3,
        learningObjectives:
          'Evaluate evidence for evolution by natural selection; classify organisms using taxonomic systems and cladograms; discuss patterns of evolution and conservation of biodiversity.',
        orderIndex: 5,
      },
      {
        topicName: 'Human Physiology',
        subtopics: [
          'Digestive system: structure, enzymes, absorption and assimilation',
          'Circulatory system: heart structure, cardiac cycle, blood vessels and blood',
          'Gas exchange: structure and function of the lungs; ventilation mechanism',
          'Immune system: innate and adaptive immunity, antibodies, vaccination',
          'Nervous system: neuron structure, synaptic transmission, reflex arcs',
          'Endocrine system: hormones, homeostasis, blood glucose regulation and reproduction',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe the structure and function of major human organ systems; explain digestion, gas exchange, immunity, nervous coordination and hormonal regulation.',
        orderIndex: 6,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Theory of Knowledge (TOK)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Theory of Knowledge (TOK)',
    topics: [
      {
        topicName: 'Knowledge and the Knower',
        subtopics: [
          'What counts as knowledge: justified true belief and its challenges',
          'The role of perspective, bias and assumptions in shaping knowledge',
          'Personal and shared knowledge: distinctions and interactions',
          'The influence of culture, education and experience on what we know',
          'Epistemic responsibility: the ethics of knowing and claiming knowledge',
          'Scope and limitations of different types of knowledge',
        ],
        depthLevel: 3,
        learningObjectives:
          'Examine the nature of knowledge and the role of the knower; distinguish between personal and shared knowledge; critically evaluate how perspective and bias influence knowledge claims.',
        orderIndex: 1,
      },
      {
        topicName: 'Knowledge and Technology',
        subtopics: [
          'The impact of digital technology on the production and sharing of knowledge',
          'Algorithms, artificial intelligence and their role in shaping what we know',
          'Misinformation and disinformation in the digital age',
          'Big data, surveillance and the ethics of data collection',
          'The relationship between technology and truth: filter bubbles and echo chambers',
          'Technology as a tool and as a way of knowing',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse the relationship between technology and knowledge; evaluate how digital tools and AI influence the creation, distribution and reliability of knowledge.',
        orderIndex: 2,
      },
      {
        topicName: 'Knowledge and Language',
        subtopics: [
          'Language as a way of knowing: how language shapes thought and perception',
          'The Sapir-Whorf hypothesis and linguistic relativity',
          'Ambiguity, metaphor and the limits of language in conveying meaning',
          'Translation, interpretation and loss of meaning across languages',
          'The role of language in constructing and transmitting cultural knowledge',
          'Scientific, mathematical and artistic uses of language',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explore the role of language in shaping and limiting knowledge; consider how linguistic structures influence perception, thought and cross-cultural understanding.',
        orderIndex: 3,
      },
      {
        topicName: 'Knowledge and Politics',
        subtopics: [
          'The role of power in determining what counts as knowledge',
          'Propaganda, censorship and the control of information',
          'Political ideologies and their influence on the production of knowledge',
          'Evidence-based policy versus ideology-driven decision-making',
          'The responsibility of citizens in evaluating political claims',
          'Historical revisionism and the politics of memory',
        ],
        depthLevel: 3,
        learningObjectives:
          'Investigate how political power structures influence the production, validation and dissemination of knowledge; evaluate the tension between evidence and ideology.',
        orderIndex: 4,
      },
      {
        topicName: 'Knowledge and Religion',
        subtopics: [
          'Faith as a way of knowing: the relationship between belief and evidence',
          'Religious knowledge systems: revelation, scripture and tradition',
          'The relationship between science and religion: conflict or complementarity',
          'Religious pluralism and the challenge of competing truth claims',
          'Ethics, morality and the role of religion in knowledge about right and wrong',
          'Secularism and the role of religion in public knowledge',
        ],
        depthLevel: 3,
        learningObjectives:
          'Examine religion as a knowledge system; compare faith-based and evidence-based approaches to truth; consider the role of religious knowledge in ethical and social contexts.',
        orderIndex: 5,
      },
      {
        topicName: 'Areas of Knowledge',
        subtopics: [
          'The Natural Sciences: methodology, objectivity and the role of paradigms',
          'The Human Sciences: challenges of studying human behaviour, ethics in research',
          'Mathematics: certainty, proof and the nature of mathematical truth',
          'The Arts: knowledge through aesthetic experience, interpretation and creativity',
          'History: evidence, narrative, bias and the construction of historical knowledge',
          'Comparing methodologies across different areas of knowledge',
        ],
        depthLevel: 3,
        learningObjectives:
          'Compare and contrast the nature, scope and methodology of different areas of knowledge; evaluate the strengths and limitations of each in producing reliable knowledge.',
        orderIndex: 6,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — CAS (Creativity, Activity, Service)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'CAS (Creativity, Activity, Service)',
    topics: [
      {
        topicName: 'Creative Projects',
        subtopics: [
          'Exploring and developing artistic skills: visual arts, music, drama, creative writing',
          'Designing and executing an original creative project',
          'Collaboration in creative endeavours: group performances, exhibitions, publications',
          'Learning a new creative skill outside one\'s comfort zone',
          'Documenting the creative process: planning, drafts, revisions and final product',
          'Reflecting on personal growth through creative expression',
        ],
        depthLevel: 3,
        learningObjectives:
          'Engage in sustained creative activities that develop new skills; plan, execute and reflect on creative projects that demonstrate initiative and personal growth.',
        orderIndex: 1,
      },
      {
        topicName: 'Physical Activities',
        subtopics: [
          'Regular participation in sports, fitness or outdoor adventure activities',
          'Setting personal fitness goals and tracking progress',
          'Learning a new physical skill or sport',
          'Team sports and the development of teamwork and leadership',
          'Physical challenges: trekking, marathon training, swimming goals',
          'Understanding the connection between physical well-being and academic performance',
        ],
        depthLevel: 3,
        learningObjectives:
          'Participate regularly in physical activities that promote a healthy lifestyle; set goals, monitor progress and reflect on the benefits of physical engagement.',
        orderIndex: 2,
      },
      {
        topicName: 'Community Service',
        subtopics: [
          'Identifying genuine community needs through research and engagement',
          'Planning and implementing a service initiative with measurable impact',
          'Working with NGOs, local organisations or school-led community projects',
          'Understanding ethical considerations in service: reciprocity, respect and sustainability',
          'Developing empathy, responsibility and global awareness through service',
          'Documenting service experiences and their personal and community impact',
        ],
        depthLevel: 3,
        learningObjectives:
          'Engage in meaningful community service that addresses real needs; develop awareness of social responsibility, ethical engagement and the impact of service on self and community.',
        orderIndex: 3,
      },
      {
        topicName: 'CAS Project',
        subtopics: [
          'Designing a collaborative CAS project involving creativity, activity or service',
          'Working with peers to plan, implement and evaluate the project over an extended period',
          'Addressing a community need or personal challenge through the project',
          'Demonstrating initiative, perseverance and problem-solving in project execution',
          'Integrating at least one CAS strand (creativity, activity or service) into the project',
          'Presenting the project outcomes and reflecting on the experience',
        ],
        depthLevel: 3,
        learningObjectives:
          'Plan and complete a sustained collaborative CAS project that demonstrates initiative, collaboration and engagement with at least one CAS strand over an extended period.',
        orderIndex: 4,
      },
      {
        topicName: 'Reflections and CAS Portfolio',
        subtopics: [
          'Writing reflections that address the seven CAS learning outcomes',
          'Maintaining a CAS portfolio with evidence of activities and experiences',
          'Demonstrating growth in each CAS strand through documented reflections',
          'Using reflective models: What? So What? Now What?',
          'Meeting with CAS coordinator for periodic reviews and guidance',
          'Connecting CAS experiences to the IB Learner Profile attributes',
        ],
        depthLevel: 3,
        learningObjectives:
          'Maintain a comprehensive CAS portfolio with meaningful reflections; demonstrate achievement of the seven CAS learning outcomes through documented evidence and self-evaluation.',
        orderIndex: 5,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 11 — Extended Essay (EE)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 11,
    subject: 'Extended Essay (EE)',
    topics: [
      {
        topicName: 'Research Question Development',
        subtopics: [
          'Choosing a subject area aligned with personal academic interests',
          'Exploring potential topics through preliminary reading and brainstorming',
          'Formulating a focused, arguable and researchable research question',
          'Narrowing the scope of the question to fit the 4,000-word limit',
          'Evaluating the feasibility of the research question with available resources',
          'Discussing and refining the question with the EE supervisor',
        ],
        depthLevel: 3,
        learningObjectives:
          'Develop a clear, focused and original research question that is appropriate for the chosen subject; refine the question through discussion with the supervisor.',
        orderIndex: 1,
      },
      {
        topicName: 'Research Methodology',
        subtopics: [
          'Primary and secondary research methods appropriate to the subject',
          'Designing a research plan with clear steps and timelines',
          'Gathering evidence: library research, databases, interviews, experiments',
          'Ethical considerations in research: informed consent, plagiarism, data integrity',
          'Organising and categorising research notes and sources',
          'Adapting methodology based on preliminary findings',
        ],
        depthLevel: 3,
        learningObjectives:
          'Plan and execute a systematic research methodology; gather evidence from appropriate sources while maintaining ethical standards and academic integrity.',
        orderIndex: 2,
      },
      {
        topicName: 'Academic Writing Skills',
        subtopics: [
          'Structure of the Extended Essay: introduction, body, conclusion, bibliography',
          'Developing a sustained and coherent argument across 4,000 words',
          'Integrating evidence: quotations, data, paraphrasing and synthesis',
          'Academic register: formal tone, third person, clarity and precision',
          'Drafting, revising and editing the essay with supervisor feedback',
          'Formatting requirements: title page, table of contents, headers and appendices',
        ],
        depthLevel: 3,
        learningObjectives:
          'Write a well-structured, coherent and persuasive Extended Essay of up to 4,000 words; integrate evidence effectively and maintain an academic register throughout.',
        orderIndex: 3,
      },
      {
        topicName: 'Source Evaluation and Referencing',
        subtopics: [
          'Evaluating source credibility: authority, accuracy, currency and bias',
          'Distinguishing between primary and secondary sources',
          'Proper citation and referencing using a consistent style (MLA, APA or Chicago)',
          'Avoiding plagiarism: paraphrasing, quoting and attributing ideas correctly',
          'Creating a complete and correctly formatted bibliography',
          'Using academic databases and digital libraries for source material',
        ],
        depthLevel: 3,
        learningObjectives:
          'Evaluate sources critically for reliability and relevance; apply a consistent referencing style; demonstrate academic honesty through proper citation and attribution.',
        orderIndex: 4,
      },
      {
        topicName: 'Reflection Sessions (RPPF)',
        subtopics: [
          'Understanding the Researcher\'s Planning and Progress Form (RPPF)',
          'First reflection: planning stage, initial ideas and research direction',
          'Second reflection: interim progress, challenges encountered and adaptations',
          'Third reflection (viva voce): final reflection on the research process and outcomes',
          'Connecting the research experience to personal intellectual growth',
          'Developing metacognitive skills through structured self-reflection',
        ],
        depthLevel: 3,
        learningObjectives:
          'Complete three structured reflections documenting the research journey; demonstrate engagement with the process, intellectual growth and the ability to evaluate one\'s own learning.',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 12 — DP Year 2
  // ==========================================================================

  // ──────────────────────────────────────────────
  // CLASS 12 — English A: Language and Literature (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'English A: Language and Literature (HL/SL)',
    topics: [
      {
        topicName: 'Advanced Textual Analysis',
        subtopics: [
          'Deepening close reading skills across poetry, prose, drama and non-literary texts',
          'Analysing complex literary techniques: unreliable narration, stream of consciousness, metafiction',
          'Evaluating the relationship between form and content in unseen texts',
          'Developing sophistication in stylistic analysis and authorial intent',
          'Practising timed analysis under Paper 1 examination conditions',
          'Integrating knowledge of literary movements and periods into analysis',
        ],
        depthLevel: 3,
        learningObjectives:
          'Perform advanced textual analysis on unseen literary and non-literary texts; demonstrate sophisticated understanding of how form, style and content interact to produce meaning.',
        orderIndex: 1,
      },
      {
        topicName: 'Comparative Essay Techniques',
        subtopics: [
          'Structuring comparative essays: integrated, alternating and block methods',
          'Identifying meaningful points of comparison between two or more texts',
          'Developing a thesis that goes beyond surface-level comparison',
          'Using transitional language and connectives to link comparative ideas',
          'Balancing analysis of both texts to demonstrate equal engagement',
          'Practising Paper 2 comparative essay writing under timed conditions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Write sophisticated comparative essays that analyse connections and contrasts between texts; develop strong thesis statements and sustain balanced arguments across multiple works.',
        orderIndex: 2,
      },
      {
        topicName: 'Higher Level Essay (HL)',
        subtopics: [
          'Selecting a line of inquiry for the 1,200-1,500 word essay',
          'Choosing a studied literary text for in-depth analysis',
          'Developing an original and insightful argument supported by close textual analysis',
          'Maintaining academic register and formal essay conventions',
          'Drafting, revising and polishing the essay with teacher guidance',
          'Meeting assessment criteria: knowledge, analysis, focus, organisation and language',
        ],
        depthLevel: 3,
        learningObjectives:
          'Produce an independent, well-argued Higher Level Essay of 1,200-1,500 words on a studied literary text; demonstrate originality, depth of analysis and adherence to assessment criteria.',
        orderIndex: 3,
      },
      {
        topicName: 'Individual Oral — Final Preparation',
        subtopics: [
          'Finalising the global issue and the literary and non-literary text pairing',
          'Refining the line of inquiry and structuring the 10-minute presentation',
          'Selecting and analysing specific extracts from both texts',
          'Rehearsing delivery: timing, transitions, clarity and engagement',
          'Anticipating and preparing for follow-up questions',
          'Completing the IO under formal assessment conditions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Deliver a polished Individual Oral that connects a literary and non-literary text through a global issue; demonstrate strong analytical skills, clear communication and effective use of evidence.',
        orderIndex: 4,
      },
      {
        topicName: 'Paper 1 and Paper 2 Preparation',
        subtopics: [
          'Paper 1 practice: guided textual analysis of unseen literary and non-literary texts',
          'Paper 2 practice: comparative essay on at least two studied works',
          'Time management strategies for both examination papers',
          'Revision of key texts, themes, techniques and critical approaches',
          'Understanding assessment criteria and examiner expectations',
          'Building a bank of textual references and quotations for examination use',
        ],
        depthLevel: 3,
        learningObjectives:
          'Prepare systematically for Paper 1 and Paper 2 examinations; develop time management, revision strategies and examination techniques aligned with IB assessment criteria.',
        orderIndex: 5,
      },
      {
        topicName: 'Portfolio Work',
        subtopics: [
          'Compiling a portfolio of written work produced throughout the course',
          'Selecting pieces that demonstrate range, growth and analytical depth',
          'Revising and editing portfolio entries for clarity and coherence',
          'Reflecting on personal development as a reader, writer and critical thinker',
          'Ensuring the portfolio meets course requirements and deadlines',
          'Using the portfolio as evidence of engagement with all areas of exploration',
        ],
        depthLevel: 3,
        learningObjectives:
          'Compile a portfolio that reflects growth and engagement across all areas of exploration; demonstrate the ability to revise, reflect and present a body of work that meets course standards.',
        orderIndex: 6,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Hindi B (SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Hindi B (SL)',
    topics: [
      {
        topicName: 'Advanced Reading and Writing',
        subtopics: [
          'Analysing complex authentic Hindi texts: literary excerpts, investigative journalism, academic articles',
          'Advanced writing tasks: opinion essays, formal reports, proposals in Hindi',
          'Developing argumentation skills in written Hindi with evidence and reasoning',
          'Expanding vocabulary for abstract and academic discourse',
          'Synthesising information from multiple Hindi sources into a coherent written response',
          'Refining accuracy in grammar, punctuation and stylistic conventions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Demonstrate advanced reading comprehension and writing proficiency in Hindi; produce well-structured, accurate and persuasive written texts on complex themes.',
        orderIndex: 1,
      },
      {
        topicName: 'Cultural Identity and Diversity',
        subtopics: [
          'Exploring Indian cultural identity through Hindi literature and cinema',
          'Regional diversity in India: languages, traditions and cultural practices discussed in Hindi',
          'Migration, diaspora and the Hindi-speaking community abroad',
          'The impact of globalisation on Indian cultural identity',
          'Stereotypes, prejudice and cultural sensitivity in Hindi media',
          'Celebrating cultural heritage through festivals, art and food — discussed in Hindi',
        ],
        depthLevel: 3,
        learningObjectives:
          'Discuss cultural identity and diversity in the Indian and global context using Hindi; develop intercultural understanding and the ability to express nuanced views on cultural themes.',
        orderIndex: 2,
      },
      {
        topicName: 'Science and Technology',
        subtopics: [
          'Discussing scientific innovations and their impact on Indian society in Hindi',
          'Digital India and technology access: the digital divide and e-governance',
          'Social media, internet safety and responsible digital citizenship',
          'Environmental technology and sustainable development in the Indian context',
          'Ethical debates around technology: privacy, AI, automation — discussed in Hindi',
          'Building technical vocabulary in Hindi related to science and technology',
        ],
        depthLevel: 3,
        learningObjectives:
          'Engage with science and technology themes in Hindi; develop the vocabulary and communicative skills to discuss innovations, ethical issues and their societal impact.',
        orderIndex: 3,
      },
      {
        topicName: 'Exam Preparation (Paper 1 and Paper 2)',
        subtopics: [
          'Paper 1 (Receptive Skills): practising reading comprehension with a variety of text types',
          'Paper 1 listening component: understanding spoken Hindi in diverse contexts',
          'Paper 2 (Productive Skills): writing in different text types (article, letter, speech, diary)',
          'Revision of all five prescribed themes and their related vocabulary',
          'Time management and exam strategies for both papers',
          'Mock examinations and detailed feedback sessions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Prepare thoroughly for Paper 1 and Paper 2 of Hindi B SL; demonstrate competence in receptive and productive skills across all prescribed themes under examination conditions.',
        orderIndex: 4,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Mathematics: Analysis and Approaches (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Mathematics: Analysis and Approaches (HL/SL)',
    topics: [
      {
        topicName: 'Advanced Algebra',
        subtopics: [
          'Proof by mathematical induction: sum formulae, divisibility and inequality proofs (HL)',
          'Proof by contradiction and counterexample',
          'Systems of linear equations: solving by elimination, substitution and matrices',
          'Partial fractions and their applications (HL)',
          'The fundamental theorem of algebra and polynomial roots over complex numbers (HL)',
          'Logical structure of mathematical arguments: converse, inverse and contrapositive',
        ],
        depthLevel: 3,
        learningObjectives:
          'Construct rigorous mathematical proofs using induction, contradiction and counterexample; solve systems of equations and decompose rational expressions into partial fractions.',
        orderIndex: 1,
      },
      {
        topicName: 'Advanced Calculus',
        subtopics: [
          'Integration techniques: substitution, integration by parts, and partial fractions (HL)',
          'Definite integrals: areas between curves, volumes of revolution',
          'Differential equations: separable and first-order linear; modelling growth and decay',
          'Maclaurin series and Taylor series expansions (HL)',
          'L\'Hopital\'s rule for evaluating indeterminate limits (HL)',
          'Kinematics: displacement, velocity and acceleration using calculus',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply advanced integration techniques and solve differential equations; use Maclaurin and Taylor series for function approximation; model real-world phenomena using calculus.',
        orderIndex: 2,
      },
      {
        topicName: 'Vectors and Vector Spaces',
        subtopics: [
          'Vectors in two and three dimensions: notation, magnitude and direction',
          'Vector operations: addition, scalar multiplication, dot product and cross product',
          'Vector equations of lines in two and three dimensions',
          'Vector equations of planes and the intersection of lines and planes',
          'Angle between lines, between planes and between a line and a plane',
          'Applications of vectors in geometry and physics',
        ],
        depthLevel: 3,
        learningObjectives:
          'Perform vector operations in two and three dimensions; find equations of lines and planes using vectors; solve geometric problems involving angles, intersections and distances.',
        orderIndex: 3,
      },
      {
        topicName: 'Complex Numbers',
        subtopics: [
          'Complex numbers in polar (modulus-argument) form',
          'Multiplication and division of complex numbers in polar form',
          'De Moivre\'s theorem and its applications (HL)',
          'Finding nth roots of complex numbers (HL)',
          'Euler\'s form: e^(iθ) and its connection to polar form (HL)',
          'The Argand diagram: geometric interpretation of complex number operations',
        ],
        depthLevel: 3,
        learningObjectives:
          'Convert between Cartesian and polar forms of complex numbers; apply De Moivre\'s theorem to find powers and roots; represent and interpret complex number operations geometrically.',
        orderIndex: 4,
      },
      {
        topicName: 'Advanced Statistics',
        subtopics: [
          'Poisson distribution: probability calculations, mean and variance (HL)',
          'Hypothesis testing: null and alternative hypotheses, significance levels and p-values',
          'Chi-squared test for independence and goodness of fit',
          't-test for comparing means (HL)',
          'Correlation and regression: Pearson\'s r, least-squares regression, prediction',
          'Understanding Type I and Type II errors in hypothesis testing',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply the Poisson distribution; perform hypothesis tests using chi-squared and t-tests; analyse bivariate data using correlation and regression; understand errors in statistical inference.',
        orderIndex: 5,
      },
      {
        topicName: 'Mathematical Exploration (Internal Assessment)',
        subtopics: [
          'Choosing a topic of personal interest that allows for mathematical exploration',
          'Formulating a clear aim and applying appropriate mathematical processes',
          'Using technology (GDC, spreadsheets, software) to support the investigation',
          'Demonstrating personal engagement and reflection throughout the exploration',
          'Structuring the 6-12 page report: introduction, development, conclusion',
          'Meeting assessment criteria: presentation, mathematical communication, personal engagement, reflection and use of mathematics',
        ],
        depthLevel: 3,
        learningObjectives:
          'Produce an independent Mathematical Exploration (IA) of 6-12 pages; demonstrate personal engagement, mathematical rigour and the ability to communicate mathematical ideas effectively.',
        orderIndex: 6,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Physics (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Physics (HL/SL)',
    topics: [
      {
        topicName: 'Energy Production',
        subtopics: [
          'Primary energy sources: fossil fuels, nuclear, solar, wind, hydroelectric and geothermal',
          'Thermal energy transfer: conduction, convection and radiation',
          'Sankey diagrams and energy efficiency calculations',
          'Electricity generation: power stations, transformers and the grid',
          'Renewable vs non-renewable energy: environmental impact and sustainability',
          'The global energy crisis and future energy strategies',
        ],
        depthLevel: 3,
        learningObjectives:
          'Compare energy sources and their environmental impacts; calculate energy efficiency; analyse the global energy landscape and evaluate sustainable energy strategies.',
        orderIndex: 1,
      },
      {
        topicName: 'Wave Phenomena (HL)',
        subtopics: [
          'Simple harmonic motion (SHM): characteristics, equations and energy in SHM',
          'Single-slit diffraction: intensity patterns and the diffraction equation',
          'Double-slit interference: Young\'s experiment and the interference pattern equation',
          'Resolution: the Rayleigh criterion and resolving power of instruments',
          'The Doppler effect for sound and light; applications in astronomy and medicine',
          'Polarisation: Malus\'s law, polarising filters and applications',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse simple harmonic motion and its energy transformations; explain diffraction and interference patterns quantitatively; apply the Doppler effect and polarisation concepts.',
        orderIndex: 2,
      },
      {
        topicName: 'Fields (HL)',
        subtopics: [
          'Gravitational fields: field strength, potential, equipotential surfaces and orbital mechanics',
          'Electric fields: field strength, potential, equipotential surfaces and charged particle motion',
          'Magnetic fields: force on moving charges and current-carrying conductors',
          'Comparison of gravitational and electric fields: inverse square laws and potential energy',
          'Field lines and equipotential surfaces: graphical representation and interpretation',
          'Escape velocity and orbital energy calculations',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe and compare gravitational, electric and magnetic fields; calculate field strengths, potentials and forces; analyse motion of particles in uniform and radial fields.',
        orderIndex: 3,
      },
      {
        topicName: 'Electromagnetic Induction (HL)',
        subtopics: [
          'Magnetic flux and Faraday\'s law of electromagnetic induction',
          'Lenz\'s law and the direction of induced EMF and current',
          'Applications of electromagnetic induction: generators and transformers',
          'Self-induction and inductance; energy stored in an inductor',
          'Alternating current: RMS values, peak values and AC circuits',
          'Power transmission: the role of transformers in reducing energy loss',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply Faraday\'s and Lenz\'s laws to calculate induced EMF; analyse generators, transformers and AC circuits; explain the principles of efficient power transmission.',
        orderIndex: 4,
      },
      {
        topicName: 'Quantum and Nuclear Physics (HL)',
        subtopics: [
          'The photoelectric effect: Einstein\'s explanation and the photon model of light',
          'Wave-particle duality: de Broglie wavelength and the electron diffraction evidence',
          'The Bohr model and energy level transitions in hydrogen',
          'Quantum tunnelling and the Heisenberg uncertainty principle',
          'Nuclear physics: binding energy, mass defect and the binding energy per nucleon curve',
          'Nuclear fission and fusion: conditions, energy release and applications',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explain the photoelectric effect and wave-particle duality; apply the Bohr model; calculate binding energies and analyse fission and fusion processes.',
        orderIndex: 5,
      },
      {
        topicName: 'Astrophysics (Option)',
        subtopics: [
          'Stellar quantities: luminosity, apparent brightness and the inverse square law',
          'Stellar spectra and the Hertzsprung-Russell diagram',
          'Stellar evolution: main sequence, red giants, white dwarfs, neutron stars and black holes',
          'The Big Bang model: cosmic microwave background radiation and redshift evidence',
          'Hubble\'s law and the expanding universe',
          'Dark matter and dark energy: evidence and open questions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Classify stars using spectra and the HR diagram; describe stellar evolution for different mass stars; explain evidence for the Big Bang and the expanding universe.',
        orderIndex: 6,
      },
      {
        topicName: 'Internal Assessment (Experimental Investigation)',
        subtopics: [
          'Designing an original experimental investigation with a clear research question',
          'Identifying and controlling variables: independent, dependent and controlled',
          'Collecting and processing raw data with appropriate uncertainty analysis',
          'Presenting data: tables, graphs with error bars and lines of best fit',
          'Evaluating the investigation: strengths, weaknesses and suggested improvements',
          'Writing the IA report: personal engagement, exploration, analysis, evaluation and communication',
        ],
        depthLevel: 3,
        learningObjectives:
          'Design and carry out an independent experimental investigation; collect and analyse data with rigorous uncertainty treatment; write a comprehensive IA report meeting all assessment criteria.',
        orderIndex: 7,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Chemistry (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Chemistry (HL/SL)',
    topics: [
      {
        topicName: 'Measurement and Data Processing',
        subtopics: [
          'Qualitative and quantitative data in chemistry experiments',
          'Uncertainties in measurement: absolute, percentage and propagated uncertainties',
          'Significant figures and decimal places in calculated results',
          'Graphical techniques: constructing and interpreting graphs with error bars',
          'Correlation vs causation in experimental chemistry',
          'Spectroscopic identification: IR spectroscopy, mass spectrometry, 1H NMR (HL)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Process experimental data with appropriate uncertainty treatment; construct and interpret graphs; use spectroscopic techniques (IR, MS, NMR) to identify unknown compounds.',
        orderIndex: 1,
      },
      {
        topicName: 'Advanced Organic Chemistry (HL)',
        subtopics: [
          'Reaction mechanisms: SN1 and SN2 nucleophilic substitution in detail',
          'Electrophilic addition mechanisms for alkenes',
          'Elimination reactions: E1 and E2 pathways and competition with substitution',
          'Stereochemistry: chirality, optical isomerism and enantiomers',
          'Condensation reactions: formation of esters, amides and peptide bonds',
          'Synthetic routes: multi-step organic synthesis and retrosynthetic analysis',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe and compare organic reaction mechanisms (SN1, SN2, electrophilic addition, elimination); analyse stereochemistry and chirality; design multi-step synthetic routes.',
        orderIndex: 2,
      },
      {
        topicName: 'Advanced Energetics (HL)',
        subtopics: [
          'Lattice enthalpy and its calculation using the Born-Haber cycle',
          'Enthalpy of solution, hydration and atomisation',
          'Entropy: the second law of thermodynamics and entropy change calculations',
          'Gibbs free energy: ΔG = ΔH - TΔS and spontaneity predictions',
          'Standard electrode potentials and their relationship to Gibbs free energy',
          'Thermodynamic feasibility vs kinetic stability of reactions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Construct Born-Haber cycles and calculate lattice enthalpies; determine entropy changes and use Gibbs free energy to predict spontaneity; relate electrode potentials to thermodynamic data.',
        orderIndex: 3,
      },
      {
        topicName: 'Advanced Equilibrium (HL)',
        subtopics: [
          'The ionisation of water: Kw and its temperature dependence',
          'pH calculations for strong and weak acids, strong and weak bases',
          'Ka, Kb and pKa: acid and base dissociation constants',
          'Buffer solutions: Henderson-Hasselbalch equation and buffer capacity',
          'Acid-base titrations: pH curves for strong/weak acid-base combinations',
          'Indicators: selection based on pKa and pH range at equivalence point',
        ],
        depthLevel: 3,
        learningObjectives:
          'Perform pH calculations for strong and weak acids and bases; apply Ka and Kb to quantify acid-base strength; design and analyse buffer solutions and titration curves.',
        orderIndex: 4,
      },
      {
        topicName: 'Advanced Redox (HL)',
        subtopics: [
          'Standard electrode potentials and the electrochemical series',
          'Electrochemical cells: calculating cell EMF from standard electrode potentials',
          'Predicting feasibility of redox reactions using electrode potentials',
          'Electrolysis: quantitative electrolysis and Faraday\'s laws',
          'Rechargeable batteries, fuel cells and their chemical principles',
          'Corrosion: the electrochemical basis of rusting and corrosion prevention',
        ],
        depthLevel: 3,
        learningObjectives:
          'Use standard electrode potentials to calculate cell EMF and predict reaction feasibility; apply Faraday\'s laws to electrolysis; explain the chemistry of batteries and corrosion.',
        orderIndex: 5,
      },
      {
        topicName: 'Option: Medicinal Chemistry or Biochemistry',
        subtopics: [
          'Medicinal Chemistry: pharmaceutical drugs — aspirin, penicillin, opiates and their mechanisms',
          'Drug design: structure-activity relationships and bioavailability',
          'Biochemistry: proteins, enzymes, carbohydrates, lipids and vitamins in metabolism',
          'DNA and RNA: structure, function and the molecular basis of inheritance',
          'Environmental chemistry: ozone depletion, acid rain and water treatment (if applicable)',
          'Ethical considerations in drug testing, genetic engineering and environmental policy',
        ],
        depthLevel: 3,
        learningObjectives:
          'Study one option topic in depth: understand drug mechanisms and design (Medicinal Chemistry) or molecular biology of metabolism (Biochemistry); evaluate ethical and societal implications.',
        orderIndex: 6,
      },
      {
        topicName: 'Internal Assessment',
        subtopics: [
          'Selecting a chemistry research question suitable for experimental investigation',
          'Designing a methodology with clear variables and controlled conditions',
          'Collecting raw data with accurate measurements and appropriate uncertainties',
          'Processing data: calculations, graphs, statistical analysis and error propagation',
          'Evaluating the investigation: strengths, limitations, random and systematic errors',
          'Writing the IA report (6-12 pages): personal engagement, exploration, analysis, evaluation and communication',
        ],
        depthLevel: 3,
        learningObjectives:
          'Design and conduct an independent chemistry investigation; collect, process and analyse data rigorously; write a complete IA report demonstrating personal engagement and scientific methodology.',
        orderIndex: 7,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Biology (HL/SL)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Biology (HL/SL)',
    topics: [
      {
        topicName: 'Nucleic Acids (HL)',
        subtopics: [
          'DNA replication in detail: helicase, DNA polymerase, primase, ligase and Okazaki fragments',
          'Transcription: RNA polymerase, promoter regions, mRNA processing (introns and exons)',
          'Translation: ribosomes, tRNA, codons and anticodons, polypeptide synthesis',
          'Gene regulation: operons (lac operon), transcription factors and epigenetics',
          'DNA profiling: gel electrophoresis, PCR and short tandem repeats (STRs)',
          'Bioinformatics: genome sequencing, databases and applications in medicine',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe DNA replication, transcription and translation in molecular detail; explain gene regulation mechanisms; apply DNA profiling and bioinformatics techniques.',
        orderIndex: 1,
      },
      {
        topicName: 'Metabolism, Cell Respiration and Photosynthesis (HL)',
        subtopics: [
          'Metabolic pathways: anabolic and catabolic reactions; the role of ATP',
          'Cell respiration in detail: glycolysis, link reaction, Krebs cycle, oxidative phosphorylation',
          'Chemiosmosis and the electron transport chain: ATP synthase mechanism',
          'Photosynthesis in detail: light-dependent reactions, photolysis and the Calvin cycle',
          'Factors affecting photosynthesis: light intensity, CO₂ concentration and temperature',
          'Chloroplast and mitochondrial structure related to their functions',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explain the biochemistry of cell respiration and photosynthesis in detail; describe the role of electron carriers and chemiosmosis; analyse factors affecting photosynthetic rate.',
        orderIndex: 2,
      },
      {
        topicName: 'Plant Biology (HL)',
        subtopics: [
          'Plant structure: xylem, phloem, root, stem and leaf anatomy',
          'Transport in plants: transpiration, translocation and the cohesion-tension theory',
          'Plant hormones: auxins, gibberellins, cytokinins and their roles in growth',
          'Phototropism and gravitropism: mechanisms of plant responses to stimuli',
          'Plant reproduction: flower structure, pollination, fertilisation and seed dispersal',
          'Xerophytes, halophytes and hydrophytes: adaptations to different environments',
        ],
        depthLevel: 3,
        learningObjectives:
          'Describe plant anatomy and transport mechanisms; explain the roles of plant hormones in growth and tropisms; analyse plant reproduction and adaptations to diverse environments.',
        orderIndex: 3,
      },
      {
        topicName: 'Genetics and Evolution (HL)',
        subtopics: [
          'Gene linkage, crossing over and recombination frequency',
          'Chi-squared test for analysing genetic ratios and linkage',
          'Polygenic inheritance and continuous variation',
          'Hardy-Weinberg equilibrium: allele frequency calculations and conditions',
          'Speciation: allopatric and sympatric mechanisms; reproductive isolation',
          'Evolution of antibiotic resistance: natural selection in action',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse gene linkage and recombination; apply the chi-squared test to genetic data; use Hardy-Weinberg equations to study population genetics; explain mechanisms of speciation.',
        orderIndex: 4,
      },
      {
        topicName: 'Animal Physiology (HL)',
        subtopics: [
          'Synaptic transmission: excitatory and inhibitory neurotransmitters, summation',
          'The human brain: structure and functions of the cerebral cortex, cerebellum, medulla and hypothalamus',
          'Hormonal regulation: the hypothalamus-pituitary axis, feedback loops',
          'Reproduction: gametogenesis, fertilisation, pregnancy and hormonal control of the menstrual cycle',
          'Kidney function: ultrafiltration, selective reabsorption, osmoregulation and ADH',
          'Movement: the structure and function of skeletal muscle, the sliding filament model',
        ],
        depthLevel: 3,
        learningObjectives:
          'Explain synaptic transmission and brain function; describe hormonal regulation and reproductive physiology; analyse kidney function and the mechanism of muscle contraction.',
        orderIndex: 5,
      },
      {
        topicName: 'Ecology and Conservation (Option)',
        subtopics: [
          'Species interactions: competition, predation, mutualism and parasitism',
          'Community ecology: succession, zonation and the niche concept',
          'Population dynamics: carrying capacity, predator-prey cycles and human population growth',
          'Conservation biology: threatened species, habitat restoration and protected areas',
          'Biodiversity hotspots and strategies for in-situ and ex-situ conservation',
          'International agreements: CITES, CBD and the role of organisations in conservation',
        ],
        depthLevel: 3,
        learningObjectives:
          'Analyse species interactions and community ecology; evaluate population dynamics and conservation strategies; discuss the role of international agreements in protecting biodiversity.',
        orderIndex: 6,
      },
      {
        topicName: 'Internal Assessment',
        subtopics: [
          'Selecting a biological research question suitable for experimental or field investigation',
          'Designing a controlled experiment or ecological study with clear methodology',
          'Collecting primary data using appropriate biological techniques and equipment',
          'Processing and presenting data: statistical analysis, graphs and tables with uncertainties',
          'Evaluating the investigation: reliability, validity, limitations and improvements',
          'Writing the IA report (6-12 pages): personal engagement, exploration, analysis, evaluation and communication',
        ],
        depthLevel: 3,
        learningObjectives:
          'Design and conduct an independent biology investigation; collect, analyse and evaluate data using appropriate biological and statistical methods; produce a comprehensive IA report.',
        orderIndex: 7,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Theory of Knowledge (TOK)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Theory of Knowledge (TOK)',
    topics: [
      {
        topicName: 'TOK Exhibition',
        subtopics: [
          'Understanding the TOK Exhibition assessment: 3 objects linked to an IA prompt',
          'Selecting three objects that illuminate a chosen IA prompt',
          'Justifying the real-world significance of each object in relation to the prompt',
          'Connecting objects to knowledge questions and TOK concepts',
          'Writing the exhibition commentary (950 words maximum)',
          'Meeting assessment criteria: understanding the prompt, linking objects to knowledge, clarity and coherence',
        ],
        depthLevel: 3,
        learningObjectives:
          'Create a TOK Exhibition linking three real-world objects to an IA prompt; demonstrate understanding of how knowledge manifests in the world and articulate connections clearly.',
        orderIndex: 1,
      },
      {
        topicName: 'TOK Essay',
        subtopics: [
          'Understanding the six prescribed essay titles and selecting the most suitable one',
          'Developing a clear, focused and arguable thesis in response to the title',
          'Exploring knowledge questions across at least two areas of knowledge',
          'Using real-life examples and case studies to support arguments',
          'Considering counterclaims and alternative perspectives',
          'Structuring the 1,600-word essay: introduction, development, counterclaim, conclusion',
        ],
        depthLevel: 3,
        learningObjectives:
          'Write a well-structured TOK Essay of 1,600 words in response to a prescribed title; develop arguments and counterclaims using evidence from multiple areas of knowledge.',
        orderIndex: 2,
      },
      {
        topicName: 'Knowledge Frameworks',
        subtopics: [
          'Scope and applications of different areas of knowledge',
          'Methodology: how knowledge is produced and validated in each area',
          'Historical development of key ideas within areas of knowledge',
          'Links between areas of knowledge: interdisciplinary connections',
          'Ethical considerations within and across areas of knowledge',
          'Evaluating the reliability and certainty of knowledge in different areas',
        ],
        depthLevel: 3,
        learningObjectives:
          'Apply knowledge frameworks to analyse and compare areas of knowledge; evaluate how methodology, scope and ethics differ across disciplines and how they interconnect.',
        orderIndex: 3,
      },
      {
        topicName: 'Integration of TOK with Subject Areas',
        subtopics: [
          'Connecting TOK concepts to the IB subjects studied: sciences, mathematics, literature, languages',
          'Identifying knowledge questions that arise within specific subject contexts',
          'The role of assumptions, models and paradigms in subject-specific knowledge',
          'How different subjects handle evidence, proof and justification',
          'Reflecting on how TOK has influenced understanding of one\'s own IB subjects',
          'Preparing for the connection between TOK and the Extended Essay (EE)',
        ],
        depthLevel: 3,
        learningObjectives:
          'Integrate TOK thinking into the study of IB subjects; identify and explore knowledge questions that arise from subject-specific content; reflect on the interdisciplinary nature of knowledge.',
        orderIndex: 4,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — CAS (Creativity, Activity, Service)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'CAS (Creativity, Activity, Service)',
    topics: [
      {
        topicName: 'Creative Projects',
        subtopics: [
          'Deepening engagement with an ongoing creative pursuit or starting a new one',
          'Mentoring younger students in creative skills developed during DP Year 1',
          'Organising or contributing to a school-wide creative event: exhibition, concert, literary festival',
          'Collaborating with community organisations on creative initiatives',
          'Reflecting on creative growth over the two-year CAS programme',
          'Documenting the creative journey: portfolios, recordings, publications',
        ],
        depthLevel: 3,
        learningObjectives:
          'Sustain creative engagement over DP Year 2; demonstrate leadership and mentoring in creative activities; reflect meaningfully on personal growth and artistic development.',
        orderIndex: 1,
      },
      {
        topicName: 'Physical Activities',
        subtopics: [
          'Maintaining regular physical activity and fitness goals through DP Year 2',
          'Taking on a leadership role in a sports team or fitness programme',
          'Completing a significant physical challenge: long-distance event, adventure expedition',
          'Exploring mind-body practices: yoga, martial arts, meditation',
          'Balancing physical well-being with academic demands of DP Year 2',
          'Reflecting on the role of physical activity in overall well-being and resilience',
        ],
        depthLevel: 3,
        learningObjectives:
          'Maintain a commitment to physical activity throughout DP Year 2; demonstrate perseverance and leadership; reflect on the connection between physical health and academic success.',
        orderIndex: 2,
      },
      {
        topicName: 'Community Service',
        subtopics: [
          'Sustaining or expanding a service initiative begun in DP Year 1',
          'Evaluating the impact of service activities on the community and self',
          'Addressing systemic issues through sustained engagement and advocacy',
          'Building partnerships with local organisations for long-term service',
          'Developing ethical awareness: reciprocity, sustainability and empowerment',
          'Preparing a final reflection on the service component of CAS',
        ],
        depthLevel: 3,
        learningObjectives:
          'Deepen community service engagement in DP Year 2; evaluate the impact of sustained service; demonstrate ethical awareness and a commitment to social responsibility.',
        orderIndex: 3,
      },
      {
        topicName: 'CAS Project — Completion',
        subtopics: [
          'Completing and evaluating the collaborative CAS project initiated in DP Year 1',
          'Assessing outcomes against initial objectives and success criteria',
          'Presenting the CAS project to the school community or external stakeholders',
          'Identifying lessons learned and transferable skills gained',
          'Connecting the CAS project experience to the IB Learner Profile',
          'Documenting the project with evidence and detailed reflections',
        ],
        depthLevel: 3,
        learningObjectives:
          'Complete the collaborative CAS project; evaluate outcomes and present findings; reflect on personal growth, collaboration and the skills developed through the project.',
        orderIndex: 4,
      },
      {
        topicName: 'Final Reflections and CAS Portfolio',
        subtopics: [
          'Completing the CAS portfolio with evidence from all three strands',
          'Demonstrating achievement of all seven CAS learning outcomes',
          'Writing a final summative reflection on the two-year CAS experience',
          'Meeting with the CAS coordinator for the final review interview',
          'Connecting CAS experiences to personal values and future aspirations',
          'Preparing for the CAS completion requirements for the IB Diploma',
        ],
        depthLevel: 3,
        learningObjectives:
          'Finalise the CAS portfolio with comprehensive evidence and reflections; demonstrate fulfilment of all seven learning outcomes; complete all CAS requirements for the IB Diploma.',
        orderIndex: 5,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 12 — Extended Essay (EE)
  // ──────────────────────────────────────────────
  {
    board: 'IB',
    grade: 12,
    subject: 'Extended Essay (EE)',
    topics: [
      {
        topicName: 'Research Question Development',
        subtopics: [
          'Finalising and refining the research question based on DP Year 1 groundwork',
          'Ensuring the research question is sufficiently focused for a 4,000-word essay',
          'Aligning the research question with available evidence and methodology',
          'Consulting with the EE supervisor for final approval of the question',
          'Articulating the significance and originality of the research question',
          'Revising the question if initial research reveals the need for adjustment',
        ],
        depthLevel: 3,
        learningObjectives:
          'Finalise a well-defined research question that is feasible, focused and aligned with the chosen subject; demonstrate the ability to refine the question through the research process.',
        orderIndex: 1,
      },
      {
        topicName: 'Methodology',
        subtopics: [
          'Completing primary and secondary research as planned',
          'Analysing and synthesising evidence from diverse sources',
          'Applying subject-specific methodology: experimental, analytical, comparative or field research',
          'Addressing challenges and limitations encountered during the research process',
          'Ensuring ethical standards: proper attribution, informed consent, data integrity',
          'Organising findings into a logical structure supporting the argument',
        ],
        depthLevel: 3,
        learningObjectives:
          'Execute the research methodology effectively; analyse and synthesise evidence; address challenges encountered during research while maintaining ethical standards.',
        orderIndex: 2,
      },
      {
        topicName: 'Academic Writing',
        subtopics: [
          'Completing the first full draft of the 4,000-word Extended Essay',
          'Integrating evidence seamlessly: quotations, data, analysis and synthesis',
          'Writing a compelling introduction with a clear thesis and rationale',
          'Developing a logical and coherent argument in the body paragraphs',
          'Writing a conclusion that evaluates the significance of findings and answers the research question',
          'Revising, editing and proofreading the final draft for submission',
        ],
        depthLevel: 3,
        learningObjectives:
          'Write a complete 4,000-word Extended Essay with a clear thesis, coherent argument and well-integrated evidence; revise and polish the essay to meet the highest academic standards.',
        orderIndex: 3,
      },
      {
        topicName: 'Source Evaluation',
        subtopics: [
          'Critically evaluating the reliability, relevance and bias of all sources used',
          'Ensuring a balanced and diverse range of sources (primary and secondary)',
          'Completing a properly formatted bibliography using a consistent citation style',
          'Cross-referencing sources to verify accuracy and identify contradictions',
          'Acknowledging limitations of sources and their impact on conclusions',
          'Demonstrating academic integrity throughout the research and writing process',
        ],
        depthLevel: 3,
        learningObjectives:
          'Evaluate sources critically and demonstrate academic integrity; compile a comprehensive bibliography; acknowledge the limitations and strengths of the evidence base.',
        orderIndex: 4,
      },
      {
        topicName: 'Reflection Sessions (RPPF)',
        subtopics: [
          'Completing the third and final reflection (viva voce) with the EE supervisor',
          'Reflecting on the entire research journey: challenges, breakthroughs and intellectual growth',
          'Discussing how the research process has deepened understanding of the subject',
          'Evaluating what could have been done differently and lessons learned',
          'Connecting the EE experience to broader academic and personal development',
          'Submitting the completed RPPF alongside the final Extended Essay',
        ],
        depthLevel: 3,
        learningObjectives:
          'Complete the final reflection and viva voce; demonstrate genuine intellectual engagement with the research process; submit the RPPF as evidence of personal growth and reflective practice.',
        orderIndex: 5,
      },
    ],
  },
];
