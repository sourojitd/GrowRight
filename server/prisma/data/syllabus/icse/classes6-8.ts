// ============================================================================
// ICSE Syllabus Data: Classes 6-8 (Middle School)
// ICSE splits Science into Physics, Chemistry, Biology from Class 6
// ============================================================================

interface SyllabusEntry {
  board: 'ICSE';
  grade: number;
  subject: string;
  topics: {
    topicName: string;
    subtopics: string[];
    depthLevel: number;
    learningObjectives: string;
    orderIndex: number;
  }[];
}

export const icseClasses6to8: SyllabusEntry[] = [

  // ==========================================================================
  // CLASS 6 (Middle School)
  // ==========================================================================

  // ---- Class 6: Mathematics ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Number System',
        subtopics: ['Integers: positive and negative numbers', 'Number line for integers', 'Operations on integers', 'Divisibility rules (2, 3, 4, 5, 6, 8, 9, 10, 11)', 'HCF and LCM using prime factorisation'],
        depthLevel: 2,
        learningObjectives: 'Extend the number system to integers and master divisibility rules, HCF and LCM computations',
        orderIndex: 1,
      },
      {
        topicName: 'Fractions and Decimals',
        subtopics: ['Operations on fractions (all four)', 'Operations on decimals (all four)', 'Word problems involving fractions and decimals', 'Converting recurring decimals to fractions', 'Estimation and rounding'],
        depthLevel: 2,
        learningObjectives: 'Achieve fluency in all operations on fractions and decimals and solve complex word problems',
        orderIndex: 2,
      },
      {
        topicName: 'Ratio and Proportion',
        subtopics: ['Concept of ratio and simplification', 'Equivalent ratios', 'Proportion and unitary method', 'Direct proportion problems', 'Dividing a quantity in a given ratio'],
        depthLevel: 2,
        learningObjectives: 'Understand ratio and proportion and apply unitary method to solve real-world problems',
        orderIndex: 3,
      },
      {
        topicName: 'Algebra',
        subtopics: ['Variables and constants', 'Algebraic expressions: terms, coefficients, degree', 'Addition and subtraction of algebraic expressions', 'Simple linear equations in one variable', 'Substitution in expressions'],
        depthLevel: 2,
        learningObjectives: 'Formulate and simplify algebraic expressions and solve simple linear equations',
        orderIndex: 4,
      },
      {
        topicName: 'Geometry: Basic Concepts',
        subtopics: ['Points, lines, planes and their properties', 'Pairs of angles (complementary, supplementary, adjacent, vertically opposite)', 'Parallel lines cut by a transversal', 'Construction of angles using compass', 'Construction of perpendicular and angle bisectors'],
        depthLevel: 2,
        learningObjectives: 'Understand geometric relationships between angles and lines and perform basic constructions',
        orderIndex: 5,
      },
      {
        topicName: 'Triangles',
        subtopics: ['Classification of triangles', 'Angle sum property of a triangle', 'Exterior angle property', 'Inequality properties of triangles', 'Construction of triangles (SSS, SAS, ASA)'],
        depthLevel: 2,
        learningObjectives: 'Classify triangles, prove angle properties and construct triangles using ruler and compass',
        orderIndex: 6,
      },
      {
        topicName: 'Mensuration',
        subtopics: ['Perimeter and area of parallelograms and trapeziums', 'Circumference and area of circles', 'Surface area of cuboids and cubes', 'Volume of cuboids and cubes'],
        depthLevel: 2,
        learningObjectives: 'Calculate perimeter, area, surface area and volume of standard geometric figures',
        orderIndex: 7,
      },
      {
        topicName: 'Data Handling and Statistics',
        subtopics: ['Collection and tabulation of data', 'Bar graphs and histograms', 'Mean, median and mode', 'Probability: experimental and theoretical basics'],
        depthLevel: 2,
        learningObjectives: 'Organise data, create statistical graphs, compute central tendency measures and understand basic probability',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 6: Physics ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Matter and Its Composition',
        subtopics: ['States of matter: solid, liquid, gas', 'Properties of each state', 'Change of state and latent heat concept', 'Plasma state introduction', 'Interconversion of states'],
        depthLevel: 2,
        learningObjectives: 'Understand the three states of matter, their properties and interconversion processes',
        orderIndex: 1,
      },
      {
        topicName: 'Physical Quantities and Measurement',
        subtopics: ['Fundamental and derived quantities', 'SI units of measurement', 'Measuring instruments (ruler, measuring cylinder, spring balance)', 'Accuracy and precision in measurement', 'Estimation of physical quantities'],
        depthLevel: 2,
        learningObjectives: 'Identify physical quantities, use SI units and perform measurements with appropriate instruments',
        orderIndex: 2,
      },
      {
        topicName: 'Force and Motion',
        subtopics: ['Types of forces: contact and non-contact', 'Effects of force on objects', 'Friction: causes, types and effects', 'Introduction to speed, distance and time', 'Pressure: force per unit area'],
        depthLevel: 2,
        learningObjectives: 'Classify forces, understand friction and pressure and relate speed, distance and time',
        orderIndex: 3,
      },
      {
        topicName: 'Energy',
        subtopics: ['Forms of energy (kinetic, potential, heat, light, sound, electrical)', 'Energy transformations in daily life', 'Conservation of energy principle', 'Renewable and non-renewable energy sources'],
        depthLevel: 2,
        learningObjectives: 'Identify forms of energy, trace energy transformations and understand the principle of energy conservation',
        orderIndex: 4,
      },
      {
        topicName: 'Light',
        subtopics: ['Luminous and non-luminous objects', 'Rectilinear propagation of light', 'Reflection of light: laws of reflection', 'Formation of shadows', 'Eclipses: solar and lunar'],
        depthLevel: 2,
        learningObjectives: 'Understand light propagation, laws of reflection, shadow formation and eclipses',
        orderIndex: 5,
      },
      {
        topicName: 'Magnetism',
        subtopics: ['Natural and artificial magnets', 'Properties of magnets', 'Magnetic and non-magnetic materials', 'Making a magnet', 'Uses of magnets in daily life'],
        depthLevel: 2,
        learningObjectives: 'Explore properties of magnets, magnetic materials and practical applications of magnetism',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 6: Chemistry ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'Matter and Its Classification',
        subtopics: ['Elements, compounds and mixtures', 'Homogeneous and heterogeneous mixtures', 'Separation techniques (filtration, evaporation, distillation, chromatography)', 'Symbols and formulae of common elements'],
        depthLevel: 2,
        learningObjectives: 'Classify matter into elements, compounds and mixtures and apply separation techniques',
        orderIndex: 1,
      },
      {
        topicName: 'Air and Its Composition',
        subtopics: ['Composition of air', 'Properties of oxygen and nitrogen', 'Carbon dioxide and its properties', 'Air pollution: causes and effects', 'Experiments to show composition of air'],
        depthLevel: 2,
        learningObjectives: 'Understand the composition of air, properties of its components and effects of air pollution',
        orderIndex: 2,
      },
      {
        topicName: 'Water',
        subtopics: ['Water as a universal solvent', 'Solutions, suspensions and colloids', 'Water purification methods', 'Water pollution and conservation', 'Hard and soft water'],
        depthLevel: 2,
        learningObjectives: 'Study water as a solvent, understand solution types, purification methods and conservation',
        orderIndex: 3,
      },
      {
        topicName: 'Changes Around Us',
        subtopics: ['Physical and chemical changes', 'Characteristics of chemical changes', 'Reversible and irreversible changes', 'Rusting, burning and cooking as chemical changes', 'Conditions necessary for chemical changes'],
        depthLevel: 2,
        learningObjectives: 'Distinguish between physical and chemical changes and identify conditions for chemical reactions',
        orderIndex: 4,
      },
      {
        topicName: 'Introduction to Atoms and Molecules',
        subtopics: ['What are atoms', 'Atomic structure basics (protons, neutrons, electrons)', 'Molecules and their formation', 'Symbols of common elements', 'Formulae of common compounds'],
        depthLevel: 2,
        learningObjectives: 'Understand atomic structure basics, the concept of molecules and chemical symbols and formulae',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 6: Biology ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'Biology',
    topics: [
      {
        topicName: 'The Cell',
        subtopics: ['Cell as the basic unit of life', 'Plant cell and animal cell structures', 'Cell organelles and their functions', 'Differences between plant and animal cells', 'Unicellular and multicellular organisms'],
        depthLevel: 2,
        learningObjectives: 'Understand cell structure, identify organelles and distinguish plant cells from animal cells',
        orderIndex: 1,
      },
      {
        topicName: 'Tissues',
        subtopics: ['What are tissues', 'Plant tissues: meristematic and permanent', 'Animal tissues: epithelial, connective, muscular, nervous', 'Organ systems from tissues'],
        depthLevel: 2,
        learningObjectives: 'Classify plant and animal tissues and understand how tissues form organs and organ systems',
        orderIndex: 2,
      },
      {
        topicName: 'Plant Life',
        subtopics: ['Photosynthesis: process and importance', 'Respiration in plants', 'Transport of water and minerals in plants', 'Reproduction: vegetative, asexual and sexual', 'Seed structure and germination'],
        depthLevel: 2,
        learningObjectives: 'Study photosynthesis, plant respiration, transport mechanisms and reproduction methods',
        orderIndex: 3,
      },
      {
        topicName: 'Human Body: Nutrition and Digestion',
        subtopics: ['Nutrients and their sources', 'Balanced diet and deficiency diseases', 'Human digestive system: organs and process', 'Enzymes and their role in digestion', 'Absorption and assimilation'],
        depthLevel: 2,
        learningObjectives: 'Understand human nutrition, the digestive process and the role of enzymes',
        orderIndex: 4,
      },
      {
        topicName: 'Classification of Living Organisms',
        subtopics: ['Need for classification', 'Five-kingdom classification', 'Characteristics of each kingdom', 'Naming organisms: binomial nomenclature basics'],
        depthLevel: 2,
        learningObjectives: 'Understand the five-kingdom classification system and the principles of biological nomenclature',
        orderIndex: 5,
      },
      {
        topicName: 'Habitat and Adaptation',
        subtopics: ['Types of habitats (terrestrial, aquatic, aerial)', 'Adaptation in plants and animals', 'Food chains, food webs and ecosystems', 'Biodiversity and its importance'],
        depthLevel: 2,
        learningObjectives: 'Study habitats, adaptations, ecological relationships and the importance of biodiversity',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 6: English ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'English',
    topics: [
      {
        topicName: 'Comprehension and Composition',
        subtopics: ['Unseen prose comprehension with inference', 'Unseen poetry comprehension', 'Essay writing: narrative, descriptive, expository', 'Letter writing: formal and informal', 'Notice and message writing'],
        depthLevel: 2,
        learningObjectives: 'Demonstrate comprehension of unseen texts and write various composition types with correct format',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Tenses: all 12 tense forms', 'Active and passive voice (all tenses)', 'Direct and indirect speech transformations', 'Clauses: main and subordinate', 'Prepositions and phrasal verbs'],
        depthLevel: 2,
        learningObjectives: 'Master all tense forms, voice transformations, speech changes and clause structures',
        orderIndex: 2,
      },
      {
        topicName: 'Literature: Prose',
        subtopics: ['Detailed study of prescribed prose texts', 'Character analysis and development', 'Theme and plot analysis', 'Reference to context questions', 'Critical appreciation of prose'],
        depthLevel: 2,
        learningObjectives: 'Analyse prescribed prose for character, theme, plot and demonstrate critical appreciation',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Poetry',
        subtopics: ['Detailed study of prescribed poems', 'Poetic devices: simile, metaphor, personification, alliteration', 'Theme and mood of poems', 'Reference to context from poems', 'Paraphrasing poetry'],
        depthLevel: 2,
        learningObjectives: 'Analyse prescribed poetry for devices, theme and mood and demonstrate paraphrasing skills',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary and Language Skills',
        subtopics: ['Sentence transformation (simple, compound, complex)', 'One-word substitutions and collective nouns', 'Idioms, phrases and proverbs', 'Spelling and punctuation mastery', 'Dictionary and thesaurus use'],
        depthLevel: 2,
        learningObjectives: 'Transform sentences across types and demonstrate advanced vocabulary and language proficiency',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 6: Hindi ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Apathit Gadyansh and Padyansh)',
        subtopics: ['Unseen prose passage with detailed questions', 'Unseen poetry passage with bhavarth', 'Summary and title suggestion', 'Vocabulary from context'],
        depthLevel: 2,
        learningObjectives: 'Analyse unseen Hindi prose and poetry passages for meaning, vocabulary and interpretation',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Sandhi and sandhi viched', 'Samas and samas vigraha', 'Upsarg, pratyay and dhatu', 'Vakya parivarthan (sentence transformation)', 'Anusvaar and anunasik usage'],
        depthLevel: 2,
        learningObjectives: 'Apply Sandhi, Samas, affixes and sentence transformation rules in Hindi',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Rachnatmak Lekhan)',
        subtopics: ['Formal letter writing (prarthna patra, shikayat patra)', 'Essay writing on social and environmental topics', 'Story writing with moral', 'Dialogue writing (samvad lekhan)', 'Advertisement writing (vigyapan lekhan)'],
        depthLevel: 2,
        learningObjectives: 'Write formal letters, essays, stories, dialogues and advertisements in Hindi',
        orderIndex: 3,
      },
      {
        topicName: 'Literature (Sahitya)',
        subtopics: ['Prose: detailed textbook lesson analysis', 'Poetry: bhavarth and explanation', 'Character and theme analysis', 'Reference to context passages'],
        depthLevel: 2,
        learningObjectives: 'Analyse prescribed Hindi prose and poetry for meaning, themes and characters',
        orderIndex: 4,
      },
      {
        topicName: 'Advanced Vocabulary (Shabd Sampada)',
        subtopics: ['Muhavare aur lokoktiyan with usage in sentences', 'Paryayvachi, vilom and anekarthi shabd', 'Shabd aur pad difference', 'Paryay vachi and samanarthi shabd'],
        depthLevel: 2,
        learningObjectives: 'Demonstrate mastery of Hindi idioms, proverbs, synonyms, antonyms and word-level distinctions',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 6: History & Civics ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'History & Civics',
    topics: [
      {
        topicName: 'Ancient Civilisations',
        subtopics: ['Mesopotamian civilisation', 'Egyptian civilisation', 'Chinese civilisation', 'Indus Valley Civilisation in depth', 'Contributions of ancient civilisations'],
        depthLevel: 2,
        learningObjectives: 'Study major ancient civilisations, compare their features and understand their lasting contributions',
        orderIndex: 1,
      },
      {
        topicName: 'Vedic Period and Early Kingdoms',
        subtopics: ['Early Vedic and Later Vedic periods', 'Rise of Jainism and Buddhism', 'Mauryan Empire: Chandragupta and Ashoka', 'Gupta Empire: golden age of India', 'Administration and society in ancient India'],
        depthLevel: 2,
        learningObjectives: 'Trace the development of Indian civilisation from Vedic period through Mauryan and Gupta empires',
        orderIndex: 2,
      },
      {
        topicName: 'The Indian Constitution',
        subtopics: ['Making of the Indian Constitution', 'Preamble and its significance', 'Fundamental Rights', 'Fundamental Duties', 'Directive Principles of State Policy'],
        depthLevel: 2,
        learningObjectives: 'Understand the making of the Constitution, the Preamble and fundamental rights and duties',
        orderIndex: 3,
      },
      {
        topicName: 'The Union Government',
        subtopics: ['Parliament: Lok Sabha and Rajya Sabha', 'The President and the Prime Minister', 'Law-making process', 'The Judiciary: Supreme Court'],
        depthLevel: 2,
        learningObjectives: 'Understand the structure and functions of the Indian Parliament, executive and judiciary',
        orderIndex: 4,
      },
      {
        topicName: 'Local Self-Government',
        subtopics: ['Rural local bodies: Gram Panchayat, Block Samiti, Zila Parishad', 'Urban local bodies: Municipality, Municipal Corporation', 'Functions and importance of local bodies', 'Participation in local governance'],
        depthLevel: 2,
        learningObjectives: 'Understand the three-tier system of local governance and citizen participation',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 6: Geography ----
  {
    board: 'ICSE',
    grade: 6,
    subject: 'Geography',
    topics: [
      {
        topicName: 'The Earth and the Solar System',
        subtopics: ['Earth as a planet', 'Rotation and revolution of the Earth', 'Latitudes and longitudes', 'Time zones and the International Date Line', 'Seasons and their causes'],
        depthLevel: 2,
        learningObjectives: 'Understand Earth movements, latitude-longitude grid, time zones and causes of seasons',
        orderIndex: 1,
      },
      {
        topicName: 'Maps and Globes',
        subtopics: ['Types of maps and their uses', 'Scale and representation', 'Conventional symbols and colours', 'Map reading and interpretation', 'Topographic map introduction'],
        depthLevel: 2,
        learningObjectives: 'Read and interpret various types of maps using scale, symbols and conventional methods',
        orderIndex: 2,
      },
      {
        topicName: 'Major Landforms',
        subtopics: ['Mountains: fold, block, volcanic', 'Plateaus and their types', 'Plains: types and formation', 'Landform features created by rivers, glaciers and wind'],
        depthLevel: 2,
        learningObjectives: 'Identify and explain the formation of major landforms and erosional features',
        orderIndex: 3,
      },
      {
        topicName: 'India: Physical Features',
        subtopics: ['The Himalayas and northern mountains', 'The Northern Plains', 'The Peninsular Plateau', 'The Coastal Plains and Islands', 'Major rivers and drainage systems'],
        depthLevel: 2,
        learningObjectives: 'Describe the physical divisions of India and trace major river systems',
        orderIndex: 4,
      },
      {
        topicName: 'Climate and Weather',
        subtopics: ['Factors affecting climate', 'Elements of weather', 'Climate of India: seasons and monsoons', 'Rainfall distribution in India', 'Weather instruments and recording'],
        depthLevel: 2,
        learningObjectives: 'Understand factors affecting climate, Indian monsoon system and weather measurement',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 7 (Middle School)
  // ==========================================================================

  // ---- Class 7: Mathematics ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Integers and Rational Numbers',
        subtopics: ['Operations on integers', 'Rational numbers: definition and representation', 'Operations on rational numbers', 'Rational numbers on the number line', 'Properties of rational numbers'],
        depthLevel: 2,
        learningObjectives: 'Perform operations on integers and rational numbers and understand their properties',
        orderIndex: 1,
      },
      {
        topicName: 'Exponents and Powers',
        subtopics: ['Exponents and base', 'Laws of exponents', 'Expressing numbers in standard form', 'Negative exponents introduction', 'Powers of 10 and scientific notation'],
        depthLevel: 2,
        learningObjectives: 'Apply laws of exponents and express numbers in standard and scientific notation',
        orderIndex: 2,
      },
      {
        topicName: 'Algebraic Expressions',
        subtopics: ['Like and unlike terms', 'Addition, subtraction and multiplication of algebraic expressions', 'Algebraic identities: (a+b)^2, (a-b)^2, (a+b)(a-b)', 'Factorisation of simple expressions', 'Solving linear equations and inequalities'],
        depthLevel: 2,
        learningObjectives: 'Manipulate algebraic expressions, apply standard identities and solve linear equations',
        orderIndex: 3,
      },
      {
        topicName: 'Ratio, Proportion and Unitary Method',
        subtopics: ['Direct and inverse proportion', 'Unitary method for complex problems', 'Speed, distance and time problems', 'Time and work problems', 'Partnership problems introduction'],
        depthLevel: 2,
        learningObjectives: 'Solve problems involving direct and inverse proportion including speed, time and work',
        orderIndex: 4,
      },
      {
        topicName: 'Percentage and Its Applications',
        subtopics: ['Percentage increase and decrease', 'Profit, loss and discount', 'Simple interest', 'Sales tax and VAT', 'Applications of percentage in daily life'],
        depthLevel: 2,
        learningObjectives: 'Apply percentage concepts to profit, loss, discount, interest and taxation problems',
        orderIndex: 5,
      },
      {
        topicName: 'Geometry: Lines, Angles and Triangles',
        subtopics: ['Properties of parallel lines and transversals', 'Angle sum property and exterior angle theorem', 'Congruence of triangles (SSS, SAS, ASA, RHS)', 'Pythagoras theorem introduction', 'Construction of triangles and angle bisectors'],
        depthLevel: 2,
        learningObjectives: 'Prove geometric properties, establish triangle congruence and apply Pythagoras theorem',
        orderIndex: 6,
      },
      {
        topicName: 'Mensuration',
        subtopics: ['Area of trapezium, rhombus and general quadrilaterals', 'Circumference and area of circles', 'Surface area and volume of cylinders', 'Surface area and volume of cubes and cuboids', 'Composite figure problems'],
        depthLevel: 2,
        learningObjectives: 'Calculate area, surface area and volume of various 2D and 3D geometric figures',
        orderIndex: 7,
      },
      {
        topicName: 'Data Handling',
        subtopics: ['Frequency distribution tables', 'Histograms and frequency polygons', 'Mean, median, mode for grouped data', 'Probability: theoretical probability', 'Complementary events'],
        depthLevel: 2,
        learningObjectives: 'Construct frequency distributions, draw histograms and compute probability of events',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 7: Physics ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Motion',
        subtopics: ['Types of motion (translatory, rotatory, oscillatory)', 'Speed, velocity and acceleration', 'Distance-time and speed-time graphs', 'Uniform and non-uniform motion', 'Equations of motion introduction'],
        depthLevel: 2,
        learningObjectives: 'Describe types of motion, differentiate speed from velocity and interpret motion graphs',
        orderIndex: 1,
      },
      {
        topicName: 'Force and Pressure',
        subtopics: ['Contact and non-contact forces', 'Pressure in solids, liquids and gases', 'Atmospheric pressure', 'Buoyancy and Archimedes principle', 'Pascal law introduction'],
        depthLevel: 2,
        learningObjectives: 'Understand pressure in different states, atmospheric pressure and buoyancy concepts',
        orderIndex: 2,
      },
      {
        topicName: 'Heat and Temperature',
        subtopics: ['Difference between heat and temperature', 'Thermometer: clinical and laboratory', 'Modes of heat transfer: conduction, convection, radiation', 'Expansion due to heat in solids, liquids and gases', 'Applications of heat transfer'],
        depthLevel: 2,
        learningObjectives: 'Distinguish heat from temperature, explain modes of heat transfer and thermal expansion',
        orderIndex: 3,
      },
      {
        topicName: 'Light: Reflection and Refraction',
        subtopics: ['Laws of reflection (detailed)', 'Regular and diffused reflection', 'Plane mirrors: image formation', 'Spherical mirrors: concave and convex introduction', 'Refraction of light: basic concept'],
        depthLevel: 2,
        learningObjectives: 'Apply laws of reflection, describe image formation by mirrors and introduce refraction',
        orderIndex: 4,
      },
      {
        topicName: 'Sound',
        subtopics: ['Production and propagation of sound', 'Characteristics of sound: pitch, loudness, quality', 'Speed of sound in different media', 'Echo and reverberation', 'Noise pollution and its effects'],
        depthLevel: 2,
        learningObjectives: 'Understand sound production, characteristics, speed in media and effects of noise pollution',
        orderIndex: 5,
      },
      {
        topicName: 'Electricity and Magnetism',
        subtopics: ['Electric current and circuits', 'Conductors and insulators', 'Simple circuit diagrams with symbols', 'Electromagnets and their applications', 'Electric bell and motor working'],
        depthLevel: 2,
        learningObjectives: 'Build and draw circuits, classify materials by conductivity and understand electromagnetic devices',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 7: Chemistry ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'Atoms and Molecules',
        subtopics: ['Dalton atomic theory', 'Atomic number and mass number', 'Isotopes and isobars', 'Molecules: elements and compounds', 'Valency and chemical formulae writing'],
        depthLevel: 2,
        learningObjectives: 'Understand atomic theory, atomic number, mass number and write chemical formulae using valency',
        orderIndex: 1,
      },
      {
        topicName: 'Chemical Reactions',
        subtopics: ['What is a chemical reaction', 'Types of reactions: combination, decomposition, displacement, double displacement', 'Balancing simple chemical equations', 'Indicators of chemical change', 'Exothermic and endothermic reactions'],
        depthLevel: 2,
        learningObjectives: 'Identify types of chemical reactions, balance equations and classify reactions by energy change',
        orderIndex: 2,
      },
      {
        topicName: 'Acids, Bases and Salts',
        subtopics: ['Properties of acids and bases', 'Indicators: litmus, phenolphthalein, methyl orange', 'pH scale introduction', 'Neutralisation reaction', 'Common salts and their uses'],
        depthLevel: 2,
        learningObjectives: 'Test and classify substances as acidic or basic, understand pH and neutralisation',
        orderIndex: 3,
      },
      {
        topicName: 'Metals and Non-Metals',
        subtopics: ['Physical properties of metals and non-metals', 'Chemical properties of metals (reaction with acid, water, oxygen)', 'Reactivity series introduction', 'Alloys and their uses', 'Corrosion and its prevention'],
        depthLevel: 2,
        learningObjectives: 'Compare metals and non-metals, understand reactivity and learn about corrosion prevention',
        orderIndex: 4,
      },
      {
        topicName: 'The Periodic Table',
        subtopics: ['Brief history of classification of elements', 'Modern periodic table structure', 'Groups and periods', 'Metals, non-metals and metalloids on the periodic table', 'Trends in the periodic table (basic)'],
        depthLevel: 2,
        learningObjectives: 'Navigate the periodic table and understand the arrangement of elements into groups and periods',
        orderIndex: 5,
      },
      {
        topicName: 'Hydrogen and Water',
        subtopics: ['Properties of hydrogen', 'Preparation of hydrogen in the laboratory', 'Properties and anomalous expansion of water', 'Hard and soft water: treatment', 'Water of crystallisation'],
        depthLevel: 2,
        learningObjectives: 'Study hydrogen preparation and properties, water anomalies and treatment of hard water',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 7: Biology ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'Biology',
    topics: [
      {
        topicName: 'Plant Physiology',
        subtopics: ['Photosynthesis: detailed process and factors', 'Respiration in plants', 'Transport of water and nutrients (xylem and phloem)', 'Transpiration and its significance', 'Growth regulators in plants'],
        depthLevel: 2,
        learningObjectives: 'Explain photosynthesis, plant respiration, transport systems and transpiration in detail',
        orderIndex: 1,
      },
      {
        topicName: 'Human Body: Circulatory and Respiratory Systems',
        subtopics: ['Heart structure and function', 'Blood composition and types', 'Blood vessels: arteries, veins, capillaries', 'Respiratory organs and breathing mechanism', 'Gaseous exchange in the lungs'],
        depthLevel: 2,
        learningObjectives: 'Describe the circulatory and respiratory systems, heart function and gaseous exchange',
        orderIndex: 2,
      },
      {
        topicName: 'Human Body: Nervous and Endocrine Systems',
        subtopics: ['Structure of a neuron', 'Central and peripheral nervous system', 'Reflex actions and reflex arc', 'Endocrine glands and hormones', 'Coordination between nervous and endocrine systems'],
        depthLevel: 2,
        learningObjectives: 'Understand the nervous system structure, reflex actions and hormonal regulation',
        orderIndex: 3,
      },
      {
        topicName: 'Reproduction in Plants and Animals',
        subtopics: ['Asexual reproduction methods in plants', 'Sexual reproduction in flowering plants', 'Pollination and fertilisation in plants', 'Reproduction in simple animals', 'Metamorphosis in insects and amphibians'],
        depthLevel: 2,
        learningObjectives: 'Compare reproductive methods in plants and animals and understand pollination and fertilisation',
        orderIndex: 4,
      },
      {
        topicName: 'Ecology and Environment',
        subtopics: ['Ecosystem components: biotic and abiotic', 'Food chains, food webs and ecological pyramids', 'Biogeochemical cycles (water, carbon, nitrogen)', 'Environmental pollution and its types', 'Conservation of biodiversity'],
        depthLevel: 2,
        learningObjectives: 'Analyse ecosystem structure, trace biogeochemical cycles and evaluate conservation strategies',
        orderIndex: 5,
      },
      {
        topicName: 'Health and Diseases',
        subtopics: ['Infectious and non-infectious diseases', 'Disease-causing organisms: bacteria, viruses, fungi, protozoa', 'Modes of disease transmission', 'Vaccination and immunisation', 'First aid basics'],
        depthLevel: 2,
        learningObjectives: 'Classify diseases, understand transmission modes, immunity and basic first aid',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 7: English ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'English',
    topics: [
      {
        topicName: 'Comprehension and Composition',
        subtopics: ['Unseen prose: analytical comprehension', 'Unseen poetry: appreciation and analysis', 'Argumentative and persuasive essay writing', 'Formal letter: complaint, enquiry, application', 'Report and article writing'],
        depthLevel: 2,
        learningObjectives: 'Analyse unseen texts critically and write essays, letters, reports and articles with appropriate tone',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Conditional sentences (Type 0, 1, 2, 3)', 'Relative pronouns and relative clauses', 'Gerunds, infinitives and participles', 'Phrasal verbs and idiomatic expressions', 'Error correction and sentence improvement'],
        depthLevel: 2,
        learningObjectives: 'Apply conditional structures, relative clauses, verbals and identify and correct errors',
        orderIndex: 2,
      },
      {
        topicName: 'Literature: Prose',
        subtopics: ['Critical analysis of prescribed prose', 'Themes, motifs and symbolism', 'Character development and motivation', 'Narrative techniques and point of view', 'Short answer and long answer practice'],
        depthLevel: 2,
        learningObjectives: 'Critically analyse prose texts for themes, symbolism, character and narrative technique',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Poetry',
        subtopics: ['Advanced poetic devices: irony, oxymoron, enjambment, imagery', 'Tone and mood analysis in poetry', 'Comparative analysis of poems', 'Reference to context with critical commentary', 'Writing poetry appreciation'],
        depthLevel: 2,
        learningObjectives: 'Identify advanced poetic devices, analyse tone and mood and write critical poetry appreciation',
        orderIndex: 4,
      },
      {
        topicName: 'Literature: Drama and Short Stories',
        subtopics: ['Study of prescribed drama extracts or short stories', 'Dramatic techniques and stage directions', 'Conflict and resolution in narratives', 'Dialogue analysis and character interaction'],
        depthLevel: 2,
        learningObjectives: 'Analyse dramatic techniques, conflicts and character interactions in prescribed texts',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 7: Hindi ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Apathit Bodh)',
        subtopics: ['Unseen prose with analytical questions', 'Unseen poetry with bhavarth and explanation', 'Summary writing and title giving', 'Vocabulary and grammar from context'],
        depthLevel: 2,
        learningObjectives: 'Demonstrate advanced comprehension of unseen Hindi texts with analytical and interpretive skills',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Samas ke bhed (types of compound words) in detail', 'Sandhi ke bhed (vowel, consonant, visarg sandhi)', 'Vachya (voice) parivarthan', 'Alankar: anupras, upama, rupak, utpreksha', 'Pad parichay (word analysis)'],
        depthLevel: 2,
        learningObjectives: 'Apply complex Hindi grammar including compound words, sandhi, voice and figure of speech',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Rachnatmak Lekhan)',
        subtopics: ['Formal letter: official and business', 'Essay writing: argumentative and analytical', 'Report writing (prativedhan lekhan)', 'Suchna lekhan (notice writing)', 'Samvad lekhan (dialogue writing)'],
        depthLevel: 2,
        learningObjectives: 'Write formal letters, analytical essays, reports, notices and dialogues in Hindi',
        orderIndex: 3,
      },
      {
        topicName: 'Literature (Sahitya)',
        subtopics: ['Detailed prose analysis with reference to context', 'Poetry: bhavarth, alankar and central idea', 'Drama or one-act play study', 'Author and poet backgrounds'],
        depthLevel: 2,
        learningObjectives: 'Analyse prescribed Hindi prose, poetry and drama with reference to context and literary devices',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary and Language Proficiency',
        subtopics: ['Muhavare and lokoktiyan in context', 'Anekarthi shabd and samanarthi shabd', 'Shabd shudhi and vakya shudhi', 'Hindi passage translation skills'],
        depthLevel: 2,
        learningObjectives: 'Use Hindi idioms and proverbs in context and demonstrate language correction proficiency',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 7: History & Civics ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'History & Civics',
    topics: [
      {
        topicName: 'Medieval India',
        subtopics: ['The Delhi Sultanate: rulers and administration', 'The Mughal Empire: Babur to Aurangzeb', 'Administration, art and architecture of Mughals', 'Regional kingdoms: Vijayanagara, Marathas', 'Bhakti and Sufi movements in detail'],
        depthLevel: 2,
        learningObjectives: 'Study medieval Indian empires, their administration, cultural contributions and reform movements',
        orderIndex: 1,
      },
      {
        topicName: 'The Modern World',
        subtopics: ['Renaissance and Reformation', 'Age of Exploration and discoveries', 'Industrial Revolution: causes and effects', 'French Revolution: causes and outcomes', 'American War of Independence'],
        depthLevel: 2,
        learningObjectives: 'Understand major modern world developments including Renaissance, revolutions and industrialisation',
        orderIndex: 2,
      },
      {
        topicName: 'The Indian Judiciary',
        subtopics: ['Structure of the Indian judiciary', 'Supreme Court: composition and jurisdiction', 'High Courts and subordinate courts', 'Independence of the judiciary', 'Public Interest Litigation (PIL)'],
        depthLevel: 2,
        learningObjectives: 'Understand the hierarchy, composition and functions of the Indian judicial system',
        orderIndex: 3,
      },
      {
        topicName: 'Fundamental Rights and Directive Principles',
        subtopics: ['Six fundamental rights in detail', 'Right to Constitutional Remedies', 'Directive Principles and their significance', 'Fundamental Duties of citizens', 'Relationship between rights and duties'],
        depthLevel: 2,
        learningObjectives: 'Analyse fundamental rights, duties and directive principles and their interrelationships',
        orderIndex: 4,
      },
      {
        topicName: 'Elections and Democracy',
        subtopics: ['Electoral process in India', 'Election Commission of India', 'Role of political parties', 'Importance of voting', 'Challenges to Indian democracy'],
        depthLevel: 2,
        learningObjectives: 'Understand the electoral process, role of political parties and challenges to democracy',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 7: Geography ----
  {
    board: 'ICSE',
    grade: 7,
    subject: 'Geography',
    topics: [
      {
        topicName: 'Our Environment',
        subtopics: ['Components of the environment', 'Lithosphere, hydrosphere, atmosphere, biosphere', 'Interaction between the spheres', 'Environmental degradation', 'Sustainable development concept'],
        depthLevel: 2,
        learningObjectives: 'Understand Earth spheres, their interactions and the concept of sustainable development',
        orderIndex: 1,
      },
      {
        topicName: 'Atmosphere',
        subtopics: ['Composition and structure of the atmosphere', 'Insolation and heat budget', 'Temperature distribution', 'Atmospheric pressure and winds', 'Cyclones and anticyclones'],
        depthLevel: 2,
        learningObjectives: 'Describe atmospheric composition, heat distribution, pressure systems and wind patterns',
        orderIndex: 2,
      },
      {
        topicName: 'Hydrosphere',
        subtopics: ['Distribution of water on Earth', 'Ocean currents and their effects', 'Tides and their causes', 'Water cycle in detail', 'Ocean floor topography'],
        depthLevel: 2,
        learningObjectives: 'Understand ocean currents, tides, the water cycle and ocean floor features',
        orderIndex: 3,
      },
      {
        topicName: 'India: Soil, Vegetation and Wildlife',
        subtopics: ['Types of soil in India and their distribution', 'Soil erosion and conservation', 'Natural vegetation of India: types and distribution', 'Wildlife of India: national parks and sanctuaries', 'Conservation efforts and Project Tiger'],
        depthLevel: 2,
        learningObjectives: 'Study Indian soil types, vegetation zones, wildlife and conservation programmes',
        orderIndex: 4,
      },
      {
        topicName: 'India: Agriculture and Industry',
        subtopics: ['Types of farming in India', 'Major food and cash crops', 'Green Revolution and its impact', 'Major industries of India', 'Industrial regions and their development'],
        depthLevel: 2,
        learningObjectives: 'Analyse Indian agriculture, crop patterns, the Green Revolution and industrial growth',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 8 (Middle School)
  // ==========================================================================

  // ---- Class 8: Mathematics ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Rational and Irrational Numbers',
        subtopics: ['Properties of rational numbers', 'Irrational numbers and surds', 'Real number system', 'Representing real numbers on the number line', 'Laws of surds'],
        depthLevel: 2,
        learningObjectives: 'Understand the real number system including rational, irrational numbers and operations on surds',
        orderIndex: 1,
      },
      {
        topicName: 'Exponents and Powers',
        subtopics: ['Laws of exponents for integral powers', 'Negative exponents', 'Scientific notation applications', 'Squares and square roots', 'Cubes and cube roots'],
        depthLevel: 2,
        learningObjectives: 'Apply exponent laws, compute square and cube roots and use scientific notation',
        orderIndex: 2,
      },
      {
        topicName: 'Algebraic Expressions and Identities',
        subtopics: ['Multiplication and division of algebraic expressions', 'Standard algebraic identities and their applications', 'Factorisation by grouping, identities and common factors', 'Division of polynomials', 'Remainder theorem introduction'],
        depthLevel: 2,
        learningObjectives: 'Multiply, divide and factorise polynomials using identities and standard methods',
        orderIndex: 3,
      },
      {
        topicName: 'Linear Equations and Inequalities',
        subtopics: ['Linear equations in one variable (complex)', 'Word problems leading to linear equations', 'Linear inequalities and their graphical representation', 'Simultaneous linear equations introduction', 'Graphical method for solving equations'],
        depthLevel: 2,
        learningObjectives: 'Solve complex linear equations and inequalities and introduce simultaneous equations',
        orderIndex: 4,
      },
      {
        topicName: 'Percentage, Profit, Loss and Discount',
        subtopics: ['Compound interest formula and computation', 'Successive discounts', 'Sales tax and GST calculations', 'Applications of percentage in real life', 'Instalment buying'],
        depthLevel: 2,
        learningObjectives: 'Compute compound interest, successive discounts and apply percentage to financial problems',
        orderIndex: 5,
      },
      {
        topicName: 'Geometry: Quadrilaterals and Polygons',
        subtopics: ['Properties of parallelograms, rectangles, rhombuses, squares, trapeziums', 'Angle sum property of quadrilaterals', 'Interior and exterior angle sums of polygons', 'Construction of quadrilaterals', 'Mid-point theorem'],
        depthLevel: 2,
        learningObjectives: 'Prove and apply properties of quadrilaterals and polygons and construct quadrilaterals',
        orderIndex: 6,
      },
      {
        topicName: 'Circles',
        subtopics: ['Parts of a circle (chord, arc, sector, segment)', 'Angle subtended by a chord at the centre', 'Cyclic quadrilaterals introduction', 'Tangent to a circle introduction', 'Construction related to circles'],
        depthLevel: 2,
        learningObjectives: 'Understand circle properties, theorems on chords and arcs and perform circle constructions',
        orderIndex: 7,
      },
      {
        topicName: 'Mensuration: Advanced',
        subtopics: ['Surface area and volume of cones', 'Surface area and volume of spheres', 'Combined solid problems', 'Conversion of units in mensuration', 'Real-world applications of mensuration'],
        depthLevel: 2,
        learningObjectives: 'Calculate surface area and volume of cones, spheres and combined solids',
        orderIndex: 8,
      },
      {
        topicName: 'Data Handling and Probability',
        subtopics: ['Grouped frequency distributions', 'Histograms and ogives', 'Mean of grouped data', 'Probability of compound events', 'Complementary and mutually exclusive events'],
        depthLevel: 2,
        learningObjectives: 'Analyse grouped data, draw ogives and compute probability of compound events',
        orderIndex: 9,
      },
    ],
  },

  // ---- Class 8: Physics ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Force and Laws of Motion',
        subtopics: ['Newton first law of motion and inertia', 'Newton second law: F=ma', 'Newton third law: action and reaction', 'Momentum and its conservation', 'Free body diagrams introduction'],
        depthLevel: 2,
        learningObjectives: 'State and apply Newton three laws of motion and understand momentum conservation',
        orderIndex: 1,
      },
      {
        topicName: 'Gravitation',
        subtopics: ['Universal law of gravitation', 'Acceleration due to gravity (g)', 'Mass and weight distinction', 'Free fall and weightlessness', 'Gravitational force on celestial bodies'],
        depthLevel: 2,
        learningObjectives: 'Understand gravitation, distinguish mass from weight and explain free fall',
        orderIndex: 2,
      },
      {
        topicName: 'Work, Energy and Power',
        subtopics: ['Work done by a force', 'Kinetic and potential energy formulae', 'Conservation of mechanical energy', 'Power: definition and units', 'Efficiency of machines'],
        depthLevel: 2,
        learningObjectives: 'Calculate work, kinetic and potential energy and power and understand energy conservation',
        orderIndex: 3,
      },
      {
        topicName: 'Light: Refraction and Lenses',
        subtopics: ['Refraction of light: laws and Snell law', 'Refractive index', 'Refraction through a glass slab', 'Convex and concave lenses: image formation', 'Lens formula and magnification introduction'],
        depthLevel: 2,
        learningObjectives: 'Apply laws of refraction, trace ray diagrams for lenses and use the lens formula',
        orderIndex: 4,
      },
      {
        topicName: 'Current Electricity',
        subtopics: ['Electric current, potential difference and EMF', 'Ohm law and resistance', 'Factors affecting resistance', 'Series and parallel circuits', 'Heating effect of current and electrical energy'],
        depthLevel: 2,
        learningObjectives: 'Apply Ohm law, analyse series and parallel circuits and calculate electrical energy',
        orderIndex: 5,
      },
      {
        topicName: 'Electromagnetic Induction',
        subtopics: ['Magnetic field due to a current-carrying conductor', 'Electromagnetic induction introduction', 'Faraday experiments', 'Electric generator principle', 'Transformer principle introduction'],
        depthLevel: 2,
        learningObjectives: 'Understand electromagnetic induction, Faraday experiments and the generator principle',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 8: Chemistry ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'Atomic Structure',
        subtopics: ['Sub-atomic particles: proton, neutron, electron', 'Thomson and Rutherford atomic models', 'Bohr model of the atom', 'Electronic configuration (up to element 20)', 'Valence electrons and chemical bonding basics'],
        depthLevel: 2,
        learningObjectives: 'Trace the development of atomic models and write electronic configurations for elements up to 20',
        orderIndex: 1,
      },
      {
        topicName: 'Chemical Bonding',
        subtopics: ['Ionic bonding: formation and properties', 'Covalent bonding: formation and properties', 'Electrovalency and covalency', 'Properties of ionic and covalent compounds', 'Lewis dot structures'],
        depthLevel: 2,
        learningObjectives: 'Explain ionic and covalent bonding, draw Lewis structures and compare compound properties',
        orderIndex: 2,
      },
      {
        topicName: 'The Periodic Table',
        subtopics: ['Mendeleev periodic table', 'Modern periodic table: periods and groups', 'Periodic properties: atomic size, metallic character, electronegativity', 'Alkali metals and halogens', 'Noble gases and their properties'],
        depthLevel: 2,
        learningObjectives: 'Navigate the periodic table and understand periodic trends in element properties',
        orderIndex: 3,
      },
      {
        topicName: 'Chemical Equations and Stoichiometry',
        subtopics: ['Balancing chemical equations', 'Mole concept introduction', 'Atomic and molecular mass', 'Molar mass calculations', 'Simple stoichiometric calculations'],
        depthLevel: 2,
        learningObjectives: 'Balance equations, understand the mole concept and perform basic stoichiometric calculations',
        orderIndex: 4,
      },
      {
        topicName: 'Acids, Bases and Salts: Detailed Study',
        subtopics: ['Strong and weak acids and bases', 'pH scale and its significance', 'Preparation of salts', 'Types of salts: acidic, basic, neutral', 'Applications of acids, bases and salts'],
        depthLevel: 2,
        learningObjectives: 'Classify acids and bases by strength, interpret pH values and prepare different types of salts',
        orderIndex: 5,
      },
      {
        topicName: 'Carbon and Its Compounds',
        subtopics: ['Allotropes of carbon', 'Properties of carbon compounds', 'Hydrocarbons: methane and ethylene basics', 'Fuels and combustion', 'Carbon cycle and greenhouse effect'],
        depthLevel: 2,
        learningObjectives: 'Study carbon allotropes, basic hydrocarbons, fuels and the carbon cycle',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 8: Biology ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'Biology',
    topics: [
      {
        topicName: 'Cell Biology: Detailed Study',
        subtopics: ['Cell organelles: structure and functions in detail', 'Cell division: mitosis and meiosis', 'Differences between plant and animal cells (detailed)', 'Cell membrane: structure and transport', 'Nucleus and DNA introduction'],
        depthLevel: 2,
        learningObjectives: 'Study cell organelles in detail, understand cell division and membrane transport',
        orderIndex: 1,
      },
      {
        topicName: 'Human Body: Excretory and Skeletal Systems',
        subtopics: ['Excretory system: kidneys and nephron', 'Urine formation process', 'Skeletal system: types of joints and bones', 'Muscular system basics', 'Disorders of excretory and skeletal systems'],
        depthLevel: 2,
        learningObjectives: 'Describe excretion, urine formation, skeletal system and associated disorders',
        orderIndex: 2,
      },
      {
        topicName: 'Human Reproduction',
        subtopics: ['Male reproductive system', 'Female reproductive system', 'Menstrual cycle', 'Fertilisation and embryo development', 'Adolescence and puberty changes'],
        depthLevel: 2,
        learningObjectives: 'Understand human reproductive systems, menstrual cycle and development from fertilisation',
        orderIndex: 3,
      },
      {
        topicName: 'Genetics Introduction',
        subtopics: ['Heredity and variation', 'Mendel experiments with peas', 'Dominant and recessive traits', 'Genotype and phenotype', 'Punnett square introduction'],
        depthLevel: 2,
        learningObjectives: 'Introduce heredity concepts through Mendel work and predict traits using Punnett squares',
        orderIndex: 4,
      },
      {
        topicName: 'Microorganisms',
        subtopics: ['Types of microorganisms: bacteria, viruses, fungi, protozoa, algae', 'Useful and harmful microorganisms', 'Diseases caused by microorganisms', 'Antibiotics and vaccines', 'Food preservation methods'],
        depthLevel: 2,
        learningObjectives: 'Classify microorganisms, understand their roles and learn about antibiotics and food preservation',
        orderIndex: 5,
      },
      {
        topicName: 'Pollution and Conservation',
        subtopics: ['Air, water, soil and noise pollution', 'Effects of pollution on health and environment', 'Waste management: reduce, reuse, recycle', 'Conservation of forests and wildlife', 'Sustainable development practices'],
        depthLevel: 2,
        learningObjectives: 'Analyse types of pollution, their effects and conservation and waste management strategies',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 8: English ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'English',
    topics: [
      {
        topicName: 'Comprehension and Composition',
        subtopics: ['Unseen prose: critical analysis and inference', 'Unseen poetry: detailed appreciation', 'Essay writing: discursive, analytical, reflective', 'Formal correspondence: letters, emails, applications', 'Speech writing and debate points'],
        depthLevel: 2,
        learningObjectives: 'Critically analyse unseen texts and write structured essays, formal letters and speeches',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Complex sentences with multiple clauses', 'Reported speech: all forms including questions and commands', 'Passive voice: all tenses and modals', 'Sentence transformation: inter-conversion of sentence types', 'Determiners, articles and quantifiers'],
        depthLevel: 2,
        learningObjectives: 'Demonstrate mastery of complex sentence structures, reported speech and voice transformations',
        orderIndex: 2,
      },
      {
        topicName: 'Literature: Prose',
        subtopics: ['Detailed study of prescribed prose texts', 'Thematic analysis and symbolism', 'Narrative structure and literary techniques', 'Critical commentary and personal response', 'Context-based extract analysis'],
        depthLevel: 2,
        learningObjectives: 'Provide detailed critical analysis of prose texts including theme, symbol and narrative technique',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Poetry',
        subtopics: ['Detailed study of prescribed poems', 'Advanced poetic devices and their effects', 'Comparison across poems and poets', 'Writing a critical appreciation', 'Context-based extract analysis'],
        depthLevel: 2,
        learningObjectives: 'Critically appreciate poetry, compare poets and identify how devices contribute to meaning',
        orderIndex: 4,
      },
      {
        topicName: 'Literature: Drama',
        subtopics: ['Study of a prescribed play or drama extracts', 'Dramatic irony, foreshadowing and conflict', 'Character analysis and motivation', 'Stage directions and their significance', 'Theme and moral exploration'],
        depthLevel: 2,
        learningObjectives: 'Analyse dramatic techniques, character motivations and thematic depth in prescribed drama',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 8: Hindi ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Apathit Bodh)',
        subtopics: ['Unseen prose: detailed analytical comprehension', 'Unseen poetry: bhavarth, saransh and vishleshan', 'Critical thinking and interpretation questions', 'Vocabulary inference from context'],
        depthLevel: 2,
        learningObjectives: 'Critically analyse unseen Hindi prose and poetry with detailed interpretation',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Vakya bhed based on structure (saral, sanyukt, mishrit)', 'Vachya parivarthan (all forms)', 'Alankar: yamak, shlesh, atishyokti, manavikaaran', 'Viram chinh (all punctuation marks)', 'Ashudhi shodhan (comprehensive error correction)'],
        depthLevel: 2,
        learningObjectives: 'Apply advanced Hindi grammar including sentence types, voice, figures of speech and error correction',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Rachnatmak Lekhan)',
        subtopics: ['Formal letters: all types', 'Essay writing: analytical and argumentative', 'Report writing for events and incidents', 'Article and feature writing', 'Anuchhed lekhan (paragraph writing on abstract themes)'],
        depthLevel: 2,
        learningObjectives: 'Write polished formal letters, essays, reports and articles in Hindi',
        orderIndex: 3,
      },
      {
        topicName: 'Literature (Sahitya)',
        subtopics: ['Prose: detailed analysis with author intent', 'Poetry: alankar, ras and bhavarth', 'Drama: dialogue analysis and theme', 'Reference to context with critical response'],
        depthLevel: 2,
        learningObjectives: 'Analyse prescribed Hindi literature for author intent, ras, alankar and thematic depth',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary and Expression',
        subtopics: ['Advanced muhavare and lokoktiyan with contextual usage', 'Samas vigraha and classification', 'Translation skills: English to Hindi', 'Precis writing in Hindi'],
        depthLevel: 2,
        learningObjectives: 'Demonstrate advanced Hindi vocabulary, compound word analysis, translation and precis skills',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 8: History & Civics ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'History & Civics',
    topics: [
      {
        topicName: 'Establishment of British Rule in India',
        subtopics: ['East India Company: trade to power', 'Battle of Plassey and Buxar', 'British policies: Subsidiary Alliance, Doctrine of Lapse', 'Revenue systems: Permanent Settlement, Ryotwari, Mahalwari', 'Social and economic impact of British rule'],
        depthLevel: 2,
        learningObjectives: 'Trace the establishment of British rule, key policies and their socio-economic impact on India',
        orderIndex: 1,
      },
      {
        topicName: 'The Revolt of 1857 and Reform Movements',
        subtopics: ['Causes and course of the Revolt of 1857', 'Leaders of the revolt', 'Consequences and significance', 'Social reform movements: Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar', 'Religious reform: Arya Samaj, Brahmo Samaj, Theosophical Society'],
        depthLevel: 2,
        learningObjectives: 'Analyse the Revolt of 1857 and understand social and religious reform movements of the 19th century',
        orderIndex: 2,
      },
      {
        topicName: 'Indian National Movement',
        subtopics: ['Formation of the Indian National Congress', 'Moderates and Extremists', 'Gandhi and mass movements: Non-Cooperation, Civil Disobedience, Quit India', 'Role of Subhash Chandra Bose and INA', 'Towards independence and partition'],
        depthLevel: 2,
        learningObjectives: 'Study the Indian national movement from its formation through various phases to independence',
        orderIndex: 3,
      },
      {
        topicName: 'The State Government',
        subtopics: ['Governor: role and powers', 'Chief Minister and Council of Ministers', 'State Legislature: Vidhan Sabha and Vidhan Parishad', 'State Judiciary: High Court', 'Centre-State relations'],
        depthLevel: 2,
        learningObjectives: 'Understand the structure and function of state government and centre-state relations',
        orderIndex: 4,
      },
      {
        topicName: 'The United Nations',
        subtopics: ['Formation and objectives of the UN', 'General Assembly and Security Council', 'Specialised agencies: UNESCO, UNICEF, WHO', 'India role in the UN', 'International cooperation and peacekeeping'],
        depthLevel: 2,
        learningObjectives: 'Understand the structure, objectives and functions of the United Nations and India role',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 8: Geography ----
  {
    board: 'ICSE',
    grade: 8,
    subject: 'Geography',
    topics: [
      {
        topicName: 'Interior of the Earth',
        subtopics: ['Structure of the Earth: crust, mantle, core', 'Types of rocks and the rock cycle', 'Earthquakes: causes, measurement, effects', 'Volcanoes: types and distribution', 'Plate tectonics theory'],
        depthLevel: 2,
        learningObjectives: 'Understand Earth internal structure, rock types, plate tectonics and natural disasters',
        orderIndex: 1,
      },
      {
        topicName: 'Population and Urbanisation',
        subtopics: ['Population distribution and density', 'Population growth and its factors', 'Population pyramid and demographic transition', 'Urbanisation: causes and effects', 'Migration: push and pull factors'],
        depthLevel: 2,
        learningObjectives: 'Analyse population patterns, demographic transition and urbanisation trends',
        orderIndex: 2,
      },
      {
        topicName: 'India: Resources and Development',
        subtopics: ['Types of resources: natural, human, economic', 'Mineral resources of India', 'Energy resources: conventional and non-conventional', 'Resource planning and conservation', 'Sustainable resource management'],
        depthLevel: 2,
        learningObjectives: 'Classify and locate Indian resources and understand sustainable resource management',
        orderIndex: 3,
      },
      {
        topicName: 'India: Transport, Communication and Trade',
        subtopics: ['Roadways, railways, waterways and airways in India', 'Importance of transport networks', 'Means of communication: old and new', 'India domestic and international trade', 'Ports and trade routes'],
        depthLevel: 2,
        learningObjectives: 'Understand India transport networks, communication systems and trade patterns',
        orderIndex: 4,
      },
      {
        topicName: 'Map Work and Topographic Maps',
        subtopics: ['Reading topographic maps', 'Identifying features on topographic maps', 'Grid references: four-figure and six-figure', 'Measuring distances and areas on maps', 'Cross-section drawing from contour maps'],
        depthLevel: 2,
        learningObjectives: 'Read and interpret topographic maps using grid references, contours and cross-sections',
        orderIndex: 5,
      },
    ],
  },
];
