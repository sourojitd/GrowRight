// ============================================================================
// ICSE/ISC Syllabus Data: Classes 9-12
// Classes 9-10: ICSE Board | Classes 11-12: ISC Board
// Deeper treatment reflecting ICSE's advanced curriculum
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

export const icseClasses9to12: SyllabusEntry[] = [

  // ==========================================================================
  // CLASS 9 (ICSE Board)
  // ==========================================================================

  // ---- Class 9: Mathematics ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Rational and Irrational Numbers',
        subtopics: ['Rational numbers and their decimal expansions', 'Irrational numbers: surds and their properties', 'Rationalising the denominator', 'Real numbers on the number line', 'Laws of exponents for real numbers'],
        depthLevel: 3,
        learningObjectives: 'Master the real number system including surds, rationalisation and exponent laws for real numbers',
        orderIndex: 1,
      },
      {
        topicName: 'Compound Interest',
        subtopics: ['Compound interest formula derivation', 'Computing CI when interest is compounded annually, half-yearly, quarterly', 'Growth and depreciation using CI', 'Difference between SI and CI', 'Application problems on investments and population'],
        depthLevel: 2,
        learningObjectives: 'Derive and apply compound interest formulae for various compounding periods and real-world scenarios',
        orderIndex: 2,
      },
      {
        topicName: 'Expansions and Factorisation',
        subtopics: ['Expansion using algebraic identities', 'Factorisation of polynomials by splitting middle term', 'Factorisation using identities', 'Factor theorem and remainder theorem', 'Division of polynomials'],
        depthLevel: 3,
        learningObjectives: 'Expand and factorise polynomials using identities, factor theorem and remainder theorem',
        orderIndex: 3,
      },
      {
        topicName: 'Simultaneous Linear Equations',
        subtopics: ['Solving by elimination method', 'Solving by substitution method', 'Cross-multiplication method', 'Graphical method of solving', 'Word problems leading to simultaneous equations'],
        depthLevel: 2,
        learningObjectives: 'Solve simultaneous linear equations using multiple methods and apply them to word problems',
        orderIndex: 4,
      },
      {
        topicName: 'Indices and Logarithms',
        subtopics: ['Laws of indices for rational exponents', 'Introduction to logarithms', 'Laws of logarithms', 'Common and natural logarithms', 'Solving equations using logarithms'],
        depthLevel: 3,
        learningObjectives: 'Apply laws of indices and logarithms to simplify expressions and solve equations',
        orderIndex: 5,
      },
      {
        topicName: 'Triangles and Congruency',
        subtopics: ['Congruence criteria: SAS, ASA, SSS, RHS, AAS', 'Properties of isosceles and equilateral triangles', 'Inequalities in triangles', 'Mid-point theorem and its converse', 'Intercept theorem'],
        depthLevel: 3,
        learningObjectives: 'Prove triangle congruence using all criteria and apply mid-point and intercept theorems',
        orderIndex: 6,
      },
      {
        topicName: 'Rectilinear Figures',
        subtopics: ['Properties of parallelogram and its special types', 'Theorems on parallelograms (proofs)', 'Area theorem for parallelograms on same base', 'Construction of quadrilaterals', 'Polygons: interior and exterior angles'],
        depthLevel: 3,
        learningObjectives: 'Prove and apply theorems on parallelograms and compute angle sums in polygons',
        orderIndex: 7,
      },
      {
        topicName: 'Circle',
        subtopics: ['Arc, chord, segment and sector', 'Angle subtended by an arc at the centre and circumference', 'Cyclic quadrilateral properties and proofs', 'Tangent-radius relationship', 'Intersecting chords and secants'],
        depthLevel: 3,
        learningObjectives: 'Prove and apply circle theorems on arcs, chords, cyclic quadrilaterals and tangents',
        orderIndex: 8,
      },
      {
        topicName: 'Statistics',
        subtopics: ['Mean, median and mode for grouped and ungrouped data', 'Cumulative frequency distribution and ogive', 'Graphical representation of data', 'Quartiles and inter-quartile range', 'Choosing appropriate measures of central tendency'],
        depthLevel: 2,
        learningObjectives: 'Compute statistical measures for grouped data, draw ogives and interpret data distributions',
        orderIndex: 9,
      },
      {
        topicName: 'Trigonometry',
        subtopics: ['Trigonometric ratios of standard angles (0, 30, 45, 60, 90)', 'Trigonometric identities', 'Complementary angles in trigonometry', 'Simple problems on heights and distances', 'Proving trigonometric identities'],
        depthLevel: 3,
        learningObjectives: 'Compute trigonometric ratios, prove identities and solve simple height and distance problems',
        orderIndex: 10,
      },
      {
        topicName: 'Coordinate Geometry',
        subtopics: ['Cartesian coordinate system', 'Distance formula', 'Section formula (internal division)', 'Mid-point formula', 'Equation of a line: slope-intercept form'],
        depthLevel: 2,
        learningObjectives: 'Apply distance, section and mid-point formulae and write equations of lines',
        orderIndex: 11,
      },
    ],
  },

  // ---- Class 9: Physics ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Measurements and Experimentation',
        subtopics: ['International System of Units', 'Measurement of length, mass and time', 'Vernier callipers and screw gauge', 'Simple pendulum: time period and factors', 'Graphical analysis of experimental data'],
        depthLevel: 3,
        learningObjectives: 'Use precision instruments for measurement and analyse simple pendulum experiments graphically',
        orderIndex: 1,
      },
      {
        topicName: 'Motion in One Dimension',
        subtopics: ['Scalar and vector quantities', 'Distance, displacement, speed, velocity, acceleration', 'Equations of motion (three kinematic equations)', 'Distance-time and velocity-time graphs', 'Free fall under gravity'],
        depthLevel: 3,
        learningObjectives: 'Apply equations of motion to solve problems on straight-line motion and interpret motion graphs',
        orderIndex: 2,
      },
      {
        topicName: 'Laws of Motion',
        subtopics: ['Newton first law and inertia with examples', 'Newton second law: force, mass, acceleration', 'Newton third law: action-reaction pairs', 'Momentum and impulse', 'Conservation of momentum with numerical problems'],
        depthLevel: 3,
        learningObjectives: 'Apply Newton laws to solve force and momentum problems with numerical calculations',
        orderIndex: 3,
      },
      {
        topicName: 'Fluids',
        subtopics: ['Pressure in fluids and Pascal law', 'Upthrust and Archimedes principle', 'Flotation: conditions for floating and sinking', 'Density and relative density', 'Atmospheric pressure and its measurement'],
        depthLevel: 3,
        learningObjectives: 'Apply fluid pressure principles, Archimedes principle and understand flotation conditions',
        orderIndex: 4,
      },
      {
        topicName: 'Heat and Energy',
        subtopics: ['Concept of heat as energy transfer', 'Specific heat capacity and calorimetry', 'Change of state: latent heat of fusion and vaporisation', 'Thermal expansion: linear, area and volume', 'Numerical problems on heat energy'],
        depthLevel: 3,
        learningObjectives: 'Calculate heat energy using specific heat and latent heat and solve calorimetry problems',
        orderIndex: 5,
      },
      {
        topicName: 'Light',
        subtopics: ['Reflection at plane and curved surfaces', 'Spherical mirrors: image formation and ray diagrams', 'Mirror formula and magnification', 'Refraction through glass slab and prisms', 'Total internal reflection and critical angle'],
        depthLevel: 3,
        learningObjectives: 'Draw ray diagrams for mirrors, apply mirror formula and explain total internal reflection',
        orderIndex: 6,
      },
      {
        topicName: 'Sound',
        subtopics: ['Wave motion: longitudinal and transverse waves', 'Characteristics of sound waves (frequency, amplitude, wavelength)', 'Speed of sound in different media', 'Reflection of sound: echoes and reverberation', 'Resonance and musical instruments'],
        depthLevel: 2,
        learningObjectives: 'Describe sound waves, calculate speed of sound and explain echo, resonance and musical sounds',
        orderIndex: 7,
      },
      {
        topicName: 'Current Electricity',
        subtopics: ['Electric current, EMF and potential difference', 'Ohm law: verification and applications', 'Resistance: factors and combinations (series and parallel)', 'Electrical energy and power', 'Household electricity and safety devices'],
        depthLevel: 3,
        learningObjectives: 'Apply Ohm law, calculate equivalent resistance and solve problems on electrical energy and power',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 9: Chemistry ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'The Language of Chemistry',
        subtopics: ['Chemical symbols, formulae and equations', 'Balancing chemical equations', 'Types of chemical reactions with examples', 'Information conveyed by a chemical equation', 'Molecular and ionic equations'],
        depthLevel: 3,
        learningObjectives: 'Write and balance chemical equations and identify different types of chemical reactions',
        orderIndex: 1,
      },
      {
        topicName: 'Chemical Changes and Reactions',
        subtopics: ['Combination and decomposition reactions', 'Displacement and double displacement reactions', 'Redox reactions: oxidation and reduction', 'Energy changes in chemical reactions', 'Catalysis and catalysts'],
        depthLevel: 3,
        learningObjectives: 'Classify chemical reactions, identify redox changes and understand the role of catalysts',
        orderIndex: 2,
      },
      {
        topicName: 'Water',
        subtopics: ['Structure and properties of water', 'Water as a solvent and its role in reactions', 'Electrolysis of water', 'Soft and hard water: types and treatment', 'Water pollution and purification methods'],
        depthLevel: 2,
        learningObjectives: 'Understand water properties, electrolysis, hardness treatment and purification methods',
        orderIndex: 3,
      },
      {
        topicName: 'Atomic Structure and Chemical Bonding',
        subtopics: ['Bohr model of the atom', 'Electronic configuration and shell filling', 'Ionic bond formation and properties of ionic compounds', 'Covalent bond formation: single, double, triple', 'Coordinate (dative) bond introduction', 'Metallic bonding basics'],
        depthLevel: 3,
        learningObjectives: 'Draw electronic configurations, explain ionic and covalent bonding and predict compound properties',
        orderIndex: 4,
      },
      {
        topicName: 'The Periodic Table',
        subtopics: ['Modern periodic law and table', 'Periodicity of properties: atomic size, ionisation energy, electron affinity', 'Groups I, VII and 0 (noble gases)', 'Transition elements introduction', 'Metallic and non-metallic character trends'],
        depthLevel: 3,
        learningObjectives: 'Explain periodic trends and relate element position to electronic configuration and properties',
        orderIndex: 5,
      },
      {
        topicName: 'Study of Gas Laws',
        subtopics: ['Boyle law, Charles law and Avogadro law', 'Combined gas equation', 'Ideal gas equation introduction', 'Gay-Lussac law of combining volumes', 'Mole concept and Avogadro number'],
        depthLevel: 3,
        learningObjectives: 'Apply gas laws to solve numerical problems and use the mole concept for calculations',
        orderIndex: 6,
      },
      {
        topicName: 'Hydrogen',
        subtopics: ['Position of hydrogen in the periodic table', 'Laboratory preparation of hydrogen', 'Properties and uses of hydrogen', 'Isotopes of hydrogen', 'Hydrogen as a fuel'],
        depthLevel: 2,
        learningObjectives: 'Describe hydrogen preparation, properties, isotopes and potential as a clean fuel',
        orderIndex: 7,
      },
    ],
  },

  // ---- Class 9: Biology ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Biology',
    topics: [
      {
        topicName: 'Cell: The Unit of Life',
        subtopics: ['Cell theory and its postulates', 'Prokaryotic and eukaryotic cells', 'Structure and functions of cell organelles (detailed)', 'Cell division: mitosis stages and significance', 'Cell division: meiosis stages and significance'],
        depthLevel: 3,
        learningObjectives: 'Explain cell theory, compare prokaryotic and eukaryotic cells and describe mitosis and meiosis in detail',
        orderIndex: 1,
      },
      {
        topicName: 'Tissues, Organs and Organ Systems',
        subtopics: ['Plant tissues: meristematic and permanent (detailed)', 'Animal tissues: epithelial, connective, muscular, nervous (detailed)', 'Organ and organ system concept', 'Histology: preparing and observing tissue slides'],
        depthLevel: 3,
        learningObjectives: 'Classify tissues in detail, understand organ system organisation and prepare histological slides',
        orderIndex: 2,
      },
      {
        topicName: 'The Flower',
        subtopics: ['Structure of a flower: calyx, corolla, androecium, gynoecium', 'Types of pollination: self and cross', 'Agents of pollination', 'Fertilisation and post-fertilisation changes', 'Fruit and seed formation'],
        depthLevel: 2,
        learningObjectives: 'Describe flower structure, pollination mechanisms and the process from fertilisation to seed formation',
        orderIndex: 3,
      },
      {
        topicName: 'Plant Physiology',
        subtopics: ['Photosynthesis: light and dark reactions', 'Factors affecting photosynthesis', 'Transpiration: process, types and factors', 'Absorption and conduction of water', 'Translocation of food in phloem'],
        depthLevel: 3,
        learningObjectives: 'Explain photosynthesis reactions, transpiration mechanisms and transport in plants in detail',
        orderIndex: 4,
      },
      {
        topicName: 'Human Anatomy and Physiology',
        subtopics: ['Digestive system: detailed mechanism and enzymes', 'Respiratory system: mechanism of breathing and gaseous exchange', 'Circulatory system: heart cycle, blood pressure, lymphatic system', 'Excretory system: nephron structure and urine formation', 'Nervous system: brain, spinal cord, reflex arc'],
        depthLevel: 3,
        learningObjectives: 'Describe all major human body systems with detailed mechanisms and physiological processes',
        orderIndex: 5,
      },
      {
        topicName: 'Health and Hygiene',
        subtopics: ['Communicable diseases: causative organisms and prevention', 'Non-communicable diseases: causes and management', 'Immunity: innate and acquired', 'Vaccination and its importance', 'Substance abuse: effects of drugs, alcohol, tobacco'],
        depthLevel: 2,
        learningObjectives: 'Understand communicable and non-communicable diseases, immunity and substance abuse effects',
        orderIndex: 6,
      },
      {
        topicName: 'Pollution',
        subtopics: ['Sources and effects of air pollution', 'Sources and effects of water pollution', 'Soil pollution and land degradation', 'Noise pollution', 'Measures to control pollution'],
        depthLevel: 2,
        learningObjectives: 'Analyse causes and effects of all types of pollution and propose control measures',
        orderIndex: 7,
      },
    ],
  },

  // ---- Class 9: English (Language + Literature) ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'English',
    topics: [
      {
        topicName: 'English Language: Composition',
        subtopics: ['Essay writing: argumentative, descriptive, narrative, expository, reflective', 'Letter writing: formal (business, editor, official)', 'Email writing for professional contexts', 'Report writing and article writing', 'Speech writing and debate composition'],
        depthLevel: 3,
        learningObjectives: 'Write various essay types, formal letters, reports, articles and speeches with mature expression',
        orderIndex: 1,
      },
      {
        topicName: 'English Language: Grammar and Vocabulary',
        subtopics: ['Comprehensive tense usage in context', 'Voice transformation across all structures', 'Reported speech: statements, questions, commands, exclamations', 'Sentence transformation: simple, compound, complex', 'Idioms, phrasal verbs and one-word substitutions'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate mastery of advanced grammar transformations and rich vocabulary usage',
        orderIndex: 2,
      },
      {
        topicName: 'English Language: Comprehension',
        subtopics: ['Unseen prose: inference, analysis and evaluation', 'Unseen poetry: devices, tone, mood, paraphrase', 'Note-making and summarising', 'Vocabulary from context', 'Critical response to passages'],
        depthLevel: 3,
        learningObjectives: 'Critically analyse unseen prose and poetry and demonstrate summarising and note-making skills',
        orderIndex: 3,
      },
      {
        topicName: 'English Literature: Prose',
        subtopics: ['Detailed study of prescribed short stories and novels', 'Theme, character and setting analysis', 'Narrative structure and literary techniques', 'Extract-based questions with critical response', 'Essay-type questions on prescribed texts'],
        depthLevel: 3,
        learningObjectives: 'Provide detailed literary analysis of prescribed prose works with supported critical arguments',
        orderIndex: 4,
      },
      {
        topicName: 'English Literature: Poetry',
        subtopics: ['Detailed study of prescribed poems', 'Poetic devices and their effects on meaning', 'Thematic connections across poems', 'Critical appreciation writing', 'Extract-based questions with interpretation'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed poetry in depth for devices, themes and provide personal critical responses',
        orderIndex: 5,
      },
      {
        topicName: 'English Literature: Drama',
        subtopics: ['Detailed study of prescribed play (e.g., Shakespeare)', 'Dramatic devices: soliloquy, aside, dramatic irony', 'Character study and relationships', 'Theme and social context of the play', 'Extract-based and essay-type analysis'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed drama for dramatic techniques, character, theme and social context',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 9: Hindi ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Apathit Bodh)',
        subtopics: ['Unseen prose: critical analysis with detailed questions', 'Unseen poetry: bhavarth, vishleshan and saransh', 'Inference and evaluation-based questions', 'Vocabulary and grammar from context'],
        depthLevel: 3,
        learningObjectives: 'Critically analyse unseen Hindi passages and poetry with detailed inference and interpretation',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Sandhi: swar, vyanjan and visarg sandhi (detailed)', 'Samas: all types with vigraha', 'Alankar: shabdalankar and arthalankar', 'Vakya parivarthan: saral, sanyukt, mishrit', 'Vachya parivarthan: kartri, karma, bhav'],
        depthLevel: 3,
        learningObjectives: 'Apply advanced Hindi grammar including all sandhi, samas, alankar and sentence transformations',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Rachnatmak Lekhan)',
        subtopics: ['Formal and informal letters (all types)', 'Essay writing on social, philosophical and current topics', 'Report and article writing in Hindi', 'Dialogue and advertisement writing', 'Laghu katha lekhan (short story writing)'],
        depthLevel: 3,
        learningObjectives: 'Write sophisticated formal and creative compositions in Hindi across multiple formats',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Prose and Poetry',
        subtopics: ['Detailed prose comprehension and analysis', 'Poetry: bhavarth with alankar identification', 'Theme, character and author purpose analysis', 'Reference to context with critical commentary', 'Comparative analysis of literary pieces'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed Hindi literature with critical depth, identifying literary devices and themes',
        orderIndex: 4,
      },
      {
        topicName: 'Advanced Vocabulary and Usage',
        subtopics: ['Muhavare aur lokoktiyan: advanced usage', 'Samas, upsarg, pratyay for word formation', 'Ashudhi shodhan (comprehensive error correction)', 'Hindi translation skills', 'Precis and summary writing in Hindi'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate comprehensive mastery of Hindi vocabulary, word formation and language accuracy',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 9: History & Civics ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'History & Civics',
    topics: [
      {
        topicName: 'The Harappan Civilisation',
        subtopics: ['Discovery and extent of the civilisation', 'Town planning: Mohenjo-daro and Harappa', 'Economic life: agriculture, trade and crafts', 'Social and religious life', 'Decline theories and legacy'],
        depthLevel: 3,
        learningObjectives: 'Analyse the Harappan Civilisation in depth including urban planning, economy and theories of decline',
        orderIndex: 1,
      },
      {
        topicName: 'The Vedic Period',
        subtopics: ['Early Vedic society and polity', 'Later Vedic period: changes in society', 'Vedic literature and philosophy', 'Position of women in Vedic period', 'Economic life and occupations'],
        depthLevel: 2,
        learningObjectives: 'Compare early and later Vedic periods and analyse social, political and economic developments',
        orderIndex: 2,
      },
      {
        topicName: 'Rise of Buddhism and Jainism',
        subtopics: ['Life and teachings of Gautama Buddha', 'Buddhist councils and spread of Buddhism', 'Life and teachings of Mahavira', 'Jain philosophy and its influence', 'Comparison between Buddhism and Jainism'],
        depthLevel: 2,
        learningObjectives: 'Study the rise of Buddhism and Jainism, their teachings and their impact on Indian society',
        orderIndex: 3,
      },
      {
        topicName: 'The Mauryan Empire',
        subtopics: ['Chandragupta Maurya and Chanakya', 'Ashoka: administration, dhamma and edicts', 'Mauryan art and architecture', 'Economy and trade during Mauryan period', 'Decline of the Mauryan Empire'],
        depthLevel: 3,
        learningObjectives: 'Analyse Mauryan administration, Ashoka reforms and the factors behind the empire decline',
        orderIndex: 4,
      },
      {
        topicName: 'The Constitution of India',
        subtopics: ['Salient features of the Indian Constitution', 'Preamble: detailed analysis', 'Fundamental Rights (Articles 14-32)', 'Directive Principles of State Policy', 'Amendment process and important amendments'],
        depthLevel: 3,
        learningObjectives: 'Analyse the Indian Constitution in depth including Preamble, rights and amendment processes',
        orderIndex: 5,
      },
      {
        topicName: 'The Union Legislature',
        subtopics: ['Parliament: composition and functions of both Houses', 'Legislative process: how a bill becomes law', 'Powers and privileges of Parliament', 'Parliamentary committees', 'Question hour and zero hour'],
        depthLevel: 3,
        learningObjectives: 'Understand parliamentary structure, legislative process and oversight mechanisms in detail',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 9: Geography ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Geography',
    topics: [
      {
        topicName: 'Earth as a Planet',
        subtopics: ['Origin and evolution of the Earth', 'Earth motions: rotation, revolution, inclination of axis', 'Latitude, longitude and time calculations', 'Standard time and International Date Line', 'Geological time scale overview'],
        depthLevel: 3,
        learningObjectives: 'Understand Earth origin, motions, coordinate systems and time zone calculations in depth',
        orderIndex: 1,
      },
      {
        topicName: 'Geographic Terms and Features',
        subtopics: ['Major landforms and their formation', 'Weathering, erosion and deposition', 'Work of rivers: stages and associated landforms', 'Work of glaciers and wind', 'Earthquakes and volcanoes: distribution and effects'],
        depthLevel: 3,
        learningObjectives: 'Explain the formation of landforms through various geomorphic processes',
        orderIndex: 2,
      },
      {
        topicName: 'India: Location, Extent and Physical Features',
        subtopics: ['Location, size and extent of India', 'Physical divisions of India (detailed)', 'The Himalayan region in detail', 'The Northern Plains and their subdivisions', 'Peninsular Plateau, coastal plains and islands'],
        depthLevel: 3,
        learningObjectives: 'Describe India physical features in detail with regional subdivisions and characteristics',
        orderIndex: 3,
      },
      {
        topicName: 'India: Climate, Soil and Natural Vegetation',
        subtopics: ['Factors affecting India climate', 'Indian monsoon mechanism', 'Seasons of India in detail', 'Types of soil: formation, distribution and conservation', 'Natural vegetation types and their distribution'],
        depthLevel: 3,
        learningObjectives: 'Analyse India climate system, monsoon mechanism, soil types and vegetation zones',
        orderIndex: 4,
      },
      {
        topicName: 'Map Work',
        subtopics: ['Reading and interpretation of topographic maps', 'Identification of physical and cultural features on maps', 'Four-figure and six-figure grid references', 'Contour lines: interpretation and cross-section drawing', 'Conventional signs and symbols on Survey of India maps'],
        depthLevel: 3,
        learningObjectives: 'Read and interpret topographic maps with grid references, contours and cross-sections',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 9: Computer Applications ----
  {
    board: 'ICSE',
    grade: 9,
    subject: 'Computer Applications',
    topics: [
      {
        topicName: 'Introduction to Object-Oriented Programming',
        subtopics: ['Basics of OOP: objects, classes, methods', 'Principles of OOP: encapsulation, abstraction, inheritance, polymorphism', 'Procedural vs object-oriented approach', 'Introduction to Java programming', 'JDK, JRE and JVM concepts'],
        depthLevel: 2,
        learningObjectives: 'Understand object-oriented programming concepts and set up the Java development environment',
        orderIndex: 1,
      },
      {
        topicName: 'Elementary Concepts of Objects and Classes',
        subtopics: ['Defining a class in Java', 'Creating objects and invoking methods', 'Data types: primitive and reference', 'Variables: local, instance and class', 'Type casting and type promotion'],
        depthLevel: 2,
        learningObjectives: 'Define classes and objects in Java and work with data types, variables and type casting',
        orderIndex: 2,
      },
      {
        topicName: 'Values and Data Types',
        subtopics: ['Primitive data types: byte, short, int, long, float, double, char, boolean', 'Strings: declaration and basic operations', 'Operators: arithmetic, relational, logical, assignment', 'Operator precedence and associativity', 'Expressions and evaluation'],
        depthLevel: 2,
        learningObjectives: 'Work with Java data types, operators and expressions for computations',
        orderIndex: 3,
      },
      {
        topicName: 'Conditional Constructs',
        subtopics: ['if, if-else and nested if-else statements', 'Ternary operator', 'switch-case statement', 'Logical operators in conditions', 'Programming problems using conditional logic'],
        depthLevel: 2,
        learningObjectives: 'Implement decision-making logic using conditional constructs in Java programs',
        orderIndex: 4,
      },
      {
        topicName: 'Iterative Constructs (Loops)',
        subtopics: ['for loop: syntax, flowchart, applications', 'while loop: syntax and applications', 'do-while loop: syntax and applications', 'Nested loops', 'Loop control: break and continue'],
        depthLevel: 2,
        learningObjectives: 'Write programs using iterative constructs including nested loops and loop control statements',
        orderIndex: 5,
      },
      {
        topicName: 'Input in Java',
        subtopics: ['Scanner class for input', 'BufferedReader for input', 'Command-line arguments', 'Input validation basics', 'Formatted output'],
        depthLevel: 2,
        learningObjectives: 'Accept and process user input in Java using Scanner and BufferedReader classes',
        orderIndex: 6,
      },
      {
        topicName: 'Mathematical Library Methods',
        subtopics: ['Math class methods: pow, sqrt, abs, ceil, floor, round', 'Random number generation', 'Trigonometric methods', 'min and max methods', 'Application problems using Math library'],
        depthLevel: 2,
        learningObjectives: 'Use Java Math library methods to solve computational problems',
        orderIndex: 7,
      },
    ],
  },

  // ==========================================================================
  // CLASS 10 (ICSE Board)
  // ==========================================================================

  // ---- Class 10: Mathematics ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Commercial Mathematics',
        subtopics: ['GST (Goods and Services Tax) calculation', 'Banking: recurring deposits and fixed deposits', 'Shares and dividends', 'Linear inequations and their solution sets', 'Compound interest applications'],
        depthLevel: 3,
        learningObjectives: 'Apply mathematical concepts to GST, banking, shares and dividends with numerical problem-solving',
        orderIndex: 1,
      },
      {
        topicName: 'Algebra',
        subtopics: ['Quadratic equations: factorisation, completing the square, formula method', 'Nature of roots using discriminant', 'Ratio and proportion theorems', 'Matrices: introduction, types, operations', 'Arithmetic and geometric progressions'],
        depthLevel: 3,
        learningObjectives: 'Solve quadratic equations using multiple methods and work with matrices and progressions',
        orderIndex: 2,
      },
      {
        topicName: 'Coordinate Geometry',
        subtopics: ['Slope of a line and conditions for parallel and perpendicular lines', 'Equation of a line in various forms (slope-intercept, point-slope, two-point)', 'Distance of a point from a line', 'Section and mid-point formulae', 'Centroid of a triangle'],
        depthLevel: 3,
        learningObjectives: 'Write equations of lines, determine slope relationships and apply coordinate geometry formulae',
        orderIndex: 3,
      },
      {
        topicName: 'Geometry: Similarity',
        subtopics: ['Similar triangles: criteria (AA, SAS, SSS)', 'Basic Proportionality Theorem (Thales theorem) and converse', 'Areas of similar triangles', 'Similarity in right triangles', 'Applications of similarity in construction'],
        depthLevel: 3,
        learningObjectives: 'Prove and apply similarity criteria, proportionality theorems and area relationships',
        orderIndex: 4,
      },
      {
        topicName: 'Geometry: Circles',
        subtopics: ['Tangent and secant properties', 'Angle properties of circles (detailed proofs)', 'Cyclic quadrilateral theorems', 'Tangent from an external point', 'Constructions involving tangents to circles'],
        depthLevel: 3,
        learningObjectives: 'Prove and apply advanced circle theorems and construct tangents to circles',
        orderIndex: 5,
      },
      {
        topicName: 'Mensuration',
        subtopics: ['Area and circumference of circles: sectors and segments', 'Surface area and volume of cylinders, cones and spheres', 'Combined solids and conversion of solids', 'Volume and surface area problems in context', 'Frustum of a cone'],
        depthLevel: 3,
        learningObjectives: 'Compute area, surface area and volume of complex solids including combined and converted shapes',
        orderIndex: 6,
      },
      {
        topicName: 'Trigonometry',
        subtopics: ['Trigonometric identities: proofs and applications', 'Heights and distances: angle of elevation and depression', 'Problems on two-dimensional situations', 'Complementary angle relationships', 'Trigonometric tables and interpolation'],
        depthLevel: 3,
        learningObjectives: 'Prove trigonometric identities and solve practical problems on heights and distances',
        orderIndex: 7,
      },
      {
        topicName: 'Statistics and Probability',
        subtopics: ['Mean, median, mode for grouped data', 'Cumulative frequency distribution and ogive', 'Quartiles and estimation from ogive', 'Probability: theoretical, single and combined events', 'Addition theorem of probability'],
        depthLevel: 3,
        learningObjectives: 'Compute central tendency for grouped data, draw ogives and calculate probabilities of events',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 10: Physics ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Force, Work, Energy and Power',
        subtopics: ['Turning effect of force: moment and couple', 'Principle of moments and equilibrium', 'Work-energy theorem', 'Conservation of energy with numerical applications', 'Power and efficiency of machines'],
        depthLevel: 3,
        learningObjectives: 'Apply moments, work-energy theorem and conservation of energy to solve problems',
        orderIndex: 1,
      },
      {
        topicName: 'Machines',
        subtopics: ['Mechanical advantage, velocity ratio and efficiency', 'Levers: classes and applications', 'Pulleys: single fixed, single movable, combination', 'Inclined plane', 'Numerical problems on machines'],
        depthLevel: 3,
        learningObjectives: 'Calculate MA, VR and efficiency of levers, pulleys and inclined planes',
        orderIndex: 2,
      },
      {
        topicName: 'Refraction of Light at Plane Surfaces',
        subtopics: ['Laws of refraction and Snell law', 'Refractive index: relative and absolute', 'Refraction through a rectangular glass slab', 'Apparent depth and real depth', 'Total internal reflection: critical angle and applications'],
        depthLevel: 3,
        learningObjectives: 'Apply Snell law, calculate refractive index and solve problems on total internal reflection',
        orderIndex: 3,
      },
      {
        topicName: 'Refraction through Lenses',
        subtopics: ['Types of lenses and ray diagrams', 'Image formation by convex and concave lenses', 'Lens formula: 1/v - 1/u = 1/f', 'Power of a lens', 'The human eye: defects and corrections'],
        depthLevel: 3,
        learningObjectives: 'Draw ray diagrams, apply lens formula and explain eye defects and their corrections',
        orderIndex: 4,
      },
      {
        topicName: 'Sound',
        subtopics: ['Nature of sound waves: longitudinal waves', 'Characteristics: frequency, wavelength, amplitude, velocity', 'Relationship: v = f x wavelength', 'Reflection of sound: echo and SONAR', 'Loudness, pitch, quality and musical scale'],
        depthLevel: 3,
        learningObjectives: 'Apply wave equations for sound, explain echo and SONAR and differentiate sound characteristics',
        orderIndex: 5,
      },
      {
        topicName: 'Current Electricity',
        subtopics: ['Ohm law: detailed applications', 'Resistance: resistivity, temperature dependence', 'EMF, terminal voltage and internal resistance', 'Electrical circuits: Kirchhoff laws introduction', 'Household circuits: earthing, fuse, MCB'],
        depthLevel: 3,
        learningObjectives: 'Solve advanced circuit problems using Ohm law and understand household electrical safety',
        orderIndex: 6,
      },
      {
        topicName: 'Electromagnetism',
        subtopics: ['Magnetic field due to a current-carrying conductor', 'Force on a current-carrying conductor in a magnetic field', 'Fleming left-hand and right-hand rules', 'Electric motor and generator principles', 'Transformer: step-up and step-down'],
        depthLevel: 3,
        learningObjectives: 'Apply Fleming rules, explain motor and generator working and understand transformers',
        orderIndex: 7,
      },
      {
        topicName: 'Heat',
        subtopics: ['Calorimetry: principle and numerical problems', 'Specific heat capacity and heat capacity', 'Change of state: latent heat calculations', 'Heat transfer: conduction, convection, radiation', 'Thermos flask and greenhouse effect'],
        depthLevel: 3,
        learningObjectives: 'Solve calorimetry problems, calculate latent heat and explain heat transfer mechanisms',
        orderIndex: 8,
      },
      {
        topicName: 'Modern Physics',
        subtopics: ['Structure of the atom: nucleus and electrons', 'Radioactivity: alpha, beta, gamma radiation', 'Nuclear fission and fusion', 'Peaceful uses of nuclear energy', 'Safety measures and nuclear hazards'],
        depthLevel: 2,
        learningObjectives: 'Understand radioactivity, nuclear reactions and applications of nuclear energy',
        orderIndex: 9,
      },
    ],
  },

  // ---- Class 10: Chemistry ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'Periodic Properties and Variations',
        subtopics: ['Periodicity of atomic size, ionisation potential, electron affinity', 'Electronegativity: Pauling scale', 'Metallic and non-metallic character variations', 'Diagonal relationship', 'Periodic trends across periods and down groups'],
        depthLevel: 3,
        learningObjectives: 'Analyse periodic trends in atomic properties and predict element behaviour from position',
        orderIndex: 1,
      },
      {
        topicName: 'Chemical Bonding',
        subtopics: ['Ionic bonding: electron transfer and lattice structure', 'Covalent bonding: shared pairs and polar bonds', 'Coordinate bonding in common molecules', 'Properties related to bonding type', 'VSEPR theory basics for molecular shape'],
        depthLevel: 3,
        learningObjectives: 'Explain bonding types in depth, predict molecular polarity and relate bonding to properties',
        orderIndex: 2,
      },
      {
        topicName: 'Acids, Bases and Salts',
        subtopics: ['Definitions: Arrhenius, Bronsted-Lowry', 'pH and indicators', 'Strong and weak acids/bases with examples', 'Preparation and properties of salts', 'Action of acids on metals, carbonates and bases'],
        depthLevel: 3,
        learningObjectives: 'Apply acid-base theories, use pH concepts and prepare salts through various methods',
        orderIndex: 3,
      },
      {
        topicName: 'Analytical Chemistry',
        subtopics: ['Identification of cations and anions in salt analysis', 'Tests for hydrogen, oxygen, carbon dioxide, ammonia', 'Flame test for metal ions', 'Action of NaOH and NH4OH on salt solutions', 'Systematic qualitative analysis procedure'],
        depthLevel: 3,
        learningObjectives: 'Perform systematic qualitative analysis for identification of salts and gases',
        orderIndex: 4,
      },
      {
        topicName: 'Mole Concept and Stoichiometry',
        subtopics: ['Mole concept: Avogadro number and molar mass', 'Percentage composition of compounds', 'Empirical and molecular formulae', 'Stoichiometric calculations from balanced equations', 'Gay-Lussac law and Avogadro law applications'],
        depthLevel: 3,
        learningObjectives: 'Apply the mole concept to stoichiometric calculations and determine empirical/molecular formulae',
        orderIndex: 5,
      },
      {
        topicName: 'Electrolysis',
        subtopics: ['Electrolytes: strong, weak and non-electrolytes', 'Mechanism of electrolysis', 'Electrolysis of acidified water, copper sulphate solution', 'Selective discharge of ions', 'Applications: electroplating, electrorefining'],
        depthLevel: 3,
        learningObjectives: 'Explain electrolysis mechanisms, predict ion discharge and describe industrial applications',
        orderIndex: 6,
      },
      {
        topicName: 'Metallurgy',
        subtopics: ['Occurrence of metals: ores and minerals', 'Extraction of metals: concentration, reduction, refining', 'Extraction of aluminium and iron', 'Alloys: composition and properties', 'Corrosion: causes and prevention'],
        depthLevel: 3,
        learningObjectives: 'Describe metal extraction processes and explain alloy formation and corrosion prevention',
        orderIndex: 7,
      },
      {
        topicName: 'Organic Chemistry',
        subtopics: ['Introduction to organic chemistry and carbon compounds', 'Hydrocarbons: alkanes, alkenes, alkynes (nomenclature and properties)', 'Functional groups introduction', 'Alcohols and carboxylic acids basics', 'Structural isomerism'],
        depthLevel: 3,
        learningObjectives: 'Name and describe organic compounds, identify functional groups and understand isomerism basics',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 10: Biology ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Biology',
    topics: [
      {
        topicName: 'Genetics',
        subtopics: ['Mendel laws of inheritance (detailed)', 'Monohybrid and dihybrid crosses', 'Genotype, phenotype and Punnett squares', 'Sex determination in humans', 'Genetic disorders: colour blindness, haemophilia'],
        depthLevel: 3,
        learningObjectives: 'Apply Mendel laws to predict inheritance patterns and understand sex-linked traits and disorders',
        orderIndex: 1,
      },
      {
        topicName: 'Human Evolution',
        subtopics: ['Evidences of evolution: fossils, homologous and analogous organs', 'Darwin theory of natural selection', 'Human evolution timeline', 'Variation and speciation', 'Molecular evidence for evolution'],
        depthLevel: 3,
        learningObjectives: 'Evaluate evidence for evolution and explain Darwin theory and human evolutionary history',
        orderIndex: 2,
      },
      {
        topicName: 'Human Nervous System',
        subtopics: ['Brain: structure, lobes and functions', 'Spinal cord: structure and reflex action', 'Autonomic nervous system: sympathetic and parasympathetic', 'Sense organs: eye and ear (detailed structure and function)', 'Disorders of the nervous system'],
        depthLevel: 3,
        learningObjectives: 'Describe brain and spinal cord structure in detail and explain sense organ function and disorders',
        orderIndex: 3,
      },
      {
        topicName: 'Endocrine System',
        subtopics: ['Endocrine glands and their hormones', 'Role of hormones in growth, metabolism and reproduction', 'Feedback mechanisms', 'Disorders: diabetes, goitre, dwarfism, acromegaly', 'Difference between nervous and endocrine coordination'],
        depthLevel: 3,
        learningObjectives: 'Explain hormonal regulation, feedback mechanisms and endocrine disorders in detail',
        orderIndex: 4,
      },
      {
        topicName: 'Reproductive System',
        subtopics: ['Male reproductive system: structure and function', 'Female reproductive system: structure and function', 'Menstrual cycle in detail', 'Fertilisation, implantation and embryonic development', 'Contraception methods and family planning'],
        depthLevel: 3,
        learningObjectives: 'Describe human reproductive anatomy, menstrual cycle and development from fertilisation to birth',
        orderIndex: 5,
      },
      {
        topicName: 'Population and Environment',
        subtopics: ['Population explosion: causes and effects', 'Biodiversity and its conservation', 'Ecosystem: energy flow and nutrient cycling', 'Environmental issues: global warming, ozone depletion, acid rain', 'Sustainable development goals'],
        depthLevel: 2,
        learningObjectives: 'Analyse population issues, biodiversity conservation needs and global environmental challenges',
        orderIndex: 6,
      },
      {
        topicName: 'Cell Cycle and Cell Division',
        subtopics: ['Cell cycle: interphase, mitosis, cytokinesis', 'Stages of mitosis with diagrams', 'Stages of meiosis with diagrams', 'Significance of mitosis and meiosis', 'Comparison between mitosis and meiosis'],
        depthLevel: 3,
        learningObjectives: 'Draw and describe all stages of mitosis and meiosis and explain their biological significance',
        orderIndex: 7,
      },
    ],
  },

  // ---- Class 10: English ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'English',
    topics: [
      {
        topicName: 'English Language Paper: Composition',
        subtopics: ['Essay writing: all types with sophisticated expression', 'Formal letter writing: editor, authority, business', 'Report writing: newspaper and school', 'Speech and debate writing', 'Email writing for formal contexts'],
        depthLevel: 3,
        learningObjectives: 'Write polished compositions across all formats with appropriate register, tone and structure',
        orderIndex: 1,
      },
      {
        topicName: 'English Language Paper: Grammar',
        subtopics: ['Sentence correction and transformation', 'Active-passive voice: all complex forms', 'Direct-indirect speech: all complex forms', 'Fill in blanks: prepositions, tenses, articles', 'Joining sentences and rewriting as directed'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate complete mastery of English grammar through transformation and correction exercises',
        orderIndex: 2,
      },
      {
        topicName: 'English Language Paper: Comprehension',
        subtopics: ['Unseen prose: detailed comprehension with critical questions', 'Unseen poetry: paraphrase, devices and critical response', 'Note-making from passages', 'Summary writing (precis)', 'Vocabulary in context'],
        depthLevel: 3,
        learningObjectives: 'Critically analyse unseen texts and produce effective summaries and note-making',
        orderIndex: 3,
      },
      {
        topicName: 'English Literature: Prose',
        subtopics: ['Detailed study of prescribed short stories and novel', 'Extract-based questions with interpretation', 'Character study and theme analysis', 'Literary techniques and narrative voice', 'Essay-type critical responses'],
        depthLevel: 3,
        learningObjectives: 'Provide nuanced literary analysis of prescribed prose works for ICSE board examination',
        orderIndex: 4,
      },
      {
        topicName: 'English Literature: Poetry',
        subtopics: ['Detailed study of prescribed poems', 'Comprehensive poetic device identification', 'Theme, tone and imagery analysis', 'Personal critical response to poems', 'Comparative analysis across poems'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed poetry with depth and provide well-supported personal interpretations',
        orderIndex: 5,
      },
      {
        topicName: 'English Literature: Drama',
        subtopics: ['Detailed study of prescribed play', 'Character analysis with textual evidence', 'Dramatic techniques and stagecraft', 'Theme and social relevance', 'Extract-based and long answer questions'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate thorough understanding of prescribed drama through detailed character and theme analysis',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 10: Hindi ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Apathit Bodh)',
        subtopics: ['Unseen prose: detailed critical comprehension', 'Unseen poetry: bhavarth and saransh', 'Inference, analysis and evaluation questions', 'Vocabulary and grammar from context'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate board-level mastery of unseen Hindi comprehension with critical analysis',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Comprehensive sandhi, samas, upsarg, pratyay', 'Alankar identification and creation', 'Vakya parivarthan (all types)', 'Vachya parivarthan (all forms)', 'Ashudhi shodhan (comprehensive)'],
        depthLevel: 3,
        learningObjectives: 'Apply all Hindi grammar concepts comprehensively at board examination level',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Lekhan)',
        subtopics: ['Formal letters for all contexts', 'Essay writing on abstract and philosophical topics', 'Advertisement and notice writing', 'Dialogue writing for given situations', 'Laghu katha lekhan (short story writing)'],
        depthLevel: 3,
        learningObjectives: 'Write sophisticated Hindi compositions across all formats required for ICSE board examination',
        orderIndex: 3,
      },
      {
        topicName: 'Literature (Sahitya)',
        subtopics: ['Detailed analysis of prescribed prose (gadya)', 'Detailed analysis of prescribed poetry (padya)', 'Prescribed drama (natak) analysis', 'Reference to context with critical commentary', 'Essay-type answers on literary themes'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed Hindi literature with critical depth for board examination',
        orderIndex: 4,
      },
      {
        topicName: 'Advanced Language Skills',
        subtopics: ['Muhavare, lokoktiyan and samanarthi shabd (exhaustive)', 'Translation: English to Hindi and Hindi to English', 'Precis writing in Hindi', 'Summary and critical commentary', 'Error correction across all grammar areas'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate comprehensive Hindi language proficiency including translation, precis and vocabulary',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 10: History & Civics ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'History & Civics',
    topics: [
      {
        topicName: 'The First War of Independence (1857)',
        subtopics: ['Political, economic, social and military causes', 'Course of the revolt: major centres and leaders', 'Failure and consequences', 'Changes in British policy after 1857', 'Legacy and significance of the revolt'],
        depthLevel: 3,
        learningObjectives: 'Critically analyse the causes, course, failure and significance of the 1857 revolt',
        orderIndex: 1,
      },
      {
        topicName: 'Growth of Nationalism and Independence Movement',
        subtopics: ['Formation and phases of the Indian National Congress', 'Gandhian era: major movements and their impact', 'Revolutionary movement: Bhagat Singh, Chandrashekhar Azad', 'Subhash Chandra Bose and the INA', 'Independence and Partition'],
        depthLevel: 3,
        learningObjectives: 'Trace the growth of Indian nationalism from Congress formation to independence and partition',
        orderIndex: 2,
      },
      {
        topicName: 'World Wars and Their Aftermath',
        subtopics: ['First World War: causes, course and consequences', 'Rise of dictatorships: Nazism and Fascism', 'Second World War: causes, course and consequences', 'Formation of the United Nations', 'Cold War and Non-Aligned Movement'],
        depthLevel: 3,
        learningObjectives: 'Analyse both World Wars, the rise of dictatorships and the post-war international order',
        orderIndex: 3,
      },
      {
        topicName: 'The Union Executive and Legislature',
        subtopics: ['President: election, powers (executive, legislative, judicial, emergency)', 'Vice President and Council of Ministers', 'Prime Minister: powers and position', 'Parliament: composition, powers and functions', 'Legislative procedures and financial powers'],
        depthLevel: 3,
        learningObjectives: 'Analyse the Union executive and legislature in depth including powers and procedures',
        orderIndex: 4,
      },
      {
        topicName: 'The Judiciary',
        subtopics: ['Supreme Court: composition, jurisdiction and powers', 'High Court: composition and jurisdiction', 'Subordinate courts', 'Judicial review and judicial activism', 'Lok Adalat and PIL'],
        depthLevel: 3,
        learningObjectives: 'Understand the Indian judicial system including judicial review, activism and alternative dispute resolution',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 10: Geography ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Geography',
    topics: [
      {
        topicName: 'India: Climate and Soil',
        subtopics: ['Factors influencing India climate', 'Monsoon mechanism in detail', 'Distribution of rainfall in India', 'Types of soil and their distribution', 'Soil erosion and conservation measures'],
        depthLevel: 3,
        learningObjectives: 'Analyse Indian monsoon system, rainfall patterns and soil types with conservation measures',
        orderIndex: 1,
      },
      {
        topicName: 'India: Natural Vegetation and Water Resources',
        subtopics: ['Types of natural vegetation and their distribution', 'Importance of forests and deforestation', 'Water resources: rivers, lakes, underground water', 'Irrigation methods and multipurpose river valley projects', 'Water conservation and rainwater harvesting'],
        depthLevel: 3,
        learningObjectives: 'Study India vegetation zones, water resources and conservation strategies in depth',
        orderIndex: 2,
      },
      {
        topicName: 'India: Agriculture',
        subtopics: ['Types of farming: subsistence, commercial, plantation', 'Major food crops: rice, wheat, millets', 'Major cash crops: tea, coffee, sugarcane, cotton, jute', 'Agricultural problems and reforms', 'Green Revolution and its impact'],
        depthLevel: 3,
        learningObjectives: 'Analyse Indian agriculture including crop patterns, problems and reform initiatives',
        orderIndex: 3,
      },
      {
        topicName: 'India: Minerals and Energy Resources',
        subtopics: ['Metallic minerals: iron ore, manganese, bauxite, copper', 'Non-metallic minerals: mica, limestone', 'Conventional energy: coal, petroleum, natural gas', 'Non-conventional energy: solar, wind, nuclear, biogas', 'Conservation of minerals and energy'],
        depthLevel: 3,
        learningObjectives: 'Locate and describe India mineral and energy resources and understand conservation needs',
        orderIndex: 4,
      },
      {
        topicName: 'India: Manufacturing Industries',
        subtopics: ['Agro-based industries: cotton textiles, sugar, paper', 'Mineral-based industries: iron and steel, petrochemicals', 'IT and software industry', 'Industrial regions of India', 'Industrial pollution and waste management'],
        depthLevel: 3,
        learningObjectives: 'Analyse India major industries, industrial distribution and environmental impact',
        orderIndex: 5,
      },
      {
        topicName: 'India: Transport and Communication',
        subtopics: ['Roadways: national highways and expressways', 'Railways: zones and important routes', 'Waterways: inland and sea routes', 'Airways: domestic and international', 'Modern communication: IT and digital India'],
        depthLevel: 2,
        learningObjectives: 'Understand India transport network and modern communication infrastructure',
        orderIndex: 6,
      },
      {
        topicName: 'Map Work',
        subtopics: ['Topographic map reading and interpretation', 'Identifying physical and man-made features', 'Grid references and direction finding', 'Contour interpretation and cross-section drawing', 'Locating important geographical features on India map'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate mastery of topographic map interpretation and India map work for board examination',
        orderIndex: 7,
      },
    ],
  },

  // ---- Class 10: Computer Applications ----
  {
    board: 'ICSE',
    grade: 10,
    subject: 'Computer Applications',
    topics: [
      {
        topicName: 'Class as Basis of All Computation',
        subtopics: ['Class definition: data members and methods', 'Access specifiers: public, private, protected', 'Constructors: default, parameterised, overloaded', 'Static members and methods', 'this keyword and its usage'],
        depthLevel: 3,
        learningObjectives: 'Design and implement Java classes with proper access control, constructors and static members',
        orderIndex: 1,
      },
      {
        topicName: 'User-Defined Methods',
        subtopics: ['Method definition, declaration and invocation', 'Method parameters: actual and formal', 'Return types and void methods', 'Method overloading', 'Pure and impure functions'],
        depthLevel: 3,
        learningObjectives: 'Create and use methods with parameters, return values and overloading in Java programs',
        orderIndex: 2,
      },
      {
        topicName: 'Iteration (Loops) - Advanced',
        subtopics: ['Nested loops: complex patterns', 'Loop invariants and optimisation', 'Menu-driven programs using loops', 'Recursion introduction', 'Applications: series computation, patterns, digit manipulation'],
        depthLevel: 3,
        learningObjectives: 'Implement complex iterative solutions including nested loops and introductory recursion',
        orderIndex: 3,
      },
      {
        topicName: 'Arrays',
        subtopics: ['Single-dimensional arrays: declaration, initialisation, traversal', 'Searching: linear and binary search', 'Sorting: selection sort and bubble sort', 'Array operations: insertion, deletion, merging', 'Double-dimensional arrays: matrix operations'],
        depthLevel: 3,
        learningObjectives: 'Implement array operations including searching, sorting and matrix manipulation in Java',
        orderIndex: 4,
      },
      {
        topicName: 'String Handling',
        subtopics: ['String class methods: length, charAt, indexOf, substring, equals, compareTo', 'String manipulation programs', 'StringBuffer class introduction', 'Character analysis: isLetter, isDigit, toUpperCase, toLowerCase', 'String-based algorithmic problems'],
        depthLevel: 3,
        learningObjectives: 'Use String class methods to implement text processing and string manipulation algorithms',
        orderIndex: 5,
      },
      {
        topicName: 'Library Classes',
        subtopics: ['Wrapper classes: Integer, Float, Double, Character', 'Autoboxing and unboxing', 'Math class methods in detail', 'Scanner class for formatted input', 'Using packages and importing classes'],
        depthLevel: 2,
        learningObjectives: 'Utilise Java library classes including wrapper classes, Math class and input handling',
        orderIndex: 6,
      },
      {
        topicName: 'Encapsulation and Scope',
        subtopics: ['Encapsulation: data hiding and abstraction', 'Access modifiers and their scope', 'Scope of variables: local, instance, class', 'Passing parameters: pass by value', 'Object composition basics'],
        depthLevel: 2,
        learningObjectives: 'Apply encapsulation principles and understand variable scope and parameter passing in Java',
        orderIndex: 7,
      },
    ],
  },

  // ==========================================================================
  // CLASS 11 (ISC Board)
  // ==========================================================================

  // ---- Class 11: Mathematics ----
  {
    board: 'ICSE',
    grade: 11,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Sets, Relations and Functions',
        subtopics: ['Types of sets and set operations', 'Venn diagrams and their applications', 'Cartesian product and relations', 'Types of relations and functions', 'Domain, codomain and range'],
        depthLevel: 3,
        learningObjectives: 'Define and operate on sets, establish relations and identify types of functions',
        orderIndex: 1,
      },
      {
        topicName: 'Trigonometry',
        subtopics: ['Trigonometric functions of any angle', 'Trigonometric identities and conditional identities', 'Trigonometric equations', 'Properties of triangles: sine and cosine rule', 'Inverse trigonometric functions introduction'],
        depthLevel: 3,
        learningObjectives: 'Solve trigonometric equations, prove identities and apply sine and cosine rules to triangles',
        orderIndex: 2,
      },
      {
        topicName: 'Complex Numbers',
        subtopics: ['Complex numbers: algebra of complex numbers', 'Argand plane and polar representation', 'Modulus, conjugate and argument', 'Square root of complex numbers', 'Cube roots of unity'],
        depthLevel: 3,
        learningObjectives: 'Perform operations on complex numbers and represent them geometrically on the Argand plane',
        orderIndex: 3,
      },
      {
        topicName: 'Quadratic Equations and Inequalities',
        subtopics: ['Quadratic equations with complex roots', 'Nature of roots and discriminant analysis', 'Relationship between roots and coefficients', 'Forming equations with given roots', 'Quadratic and linear inequalities'],
        depthLevel: 3,
        learningObjectives: 'Solve quadratic equations with complex roots and analyse root-coefficient relationships',
        orderIndex: 4,
      },
      {
        topicName: 'Permutations and Combinations',
        subtopics: ['Fundamental counting principle', 'Permutations: formula and applications', 'Combinations: formula and applications', 'Permutations with repetition and restrictions', 'Combination problems in geometry'],
        depthLevel: 3,
        learningObjectives: 'Apply permutation and combination formulae to counting problems with and without restrictions',
        orderIndex: 5,
      },
      {
        topicName: 'Binomial Theorem',
        subtopics: ['Binomial theorem for positive integral index', 'General and middle terms', 'Binomial coefficients and their properties', 'Pascal triangle', 'Applications of binomial theorem'],
        depthLevel: 3,
        learningObjectives: 'Expand binomial expressions, find specific terms and apply binomial coefficient properties',
        orderIndex: 6,
      },
      {
        topicName: 'Sequences and Series',
        subtopics: ['Arithmetic progression: nth term and sum', 'Geometric progression: nth term and sum', 'Arithmetic-geometric series', 'Infinite geometric series and convergence', 'Special series: sum of n, n^2, n^3'],
        depthLevel: 3,
        learningObjectives: 'Analyse arithmetic and geometric progressions and compute sums of special series',
        orderIndex: 7,
      },
      {
        topicName: 'Straight Lines',
        subtopics: ['Slope of a line and angle between two lines', 'Various forms of equation of a line', 'General equation of a line', 'Distance of a point from a line', 'Family of lines and concurrent lines'],
        depthLevel: 3,
        learningObjectives: 'Write equations of lines in various forms and solve problems on distance and concurrency',
        orderIndex: 8,
      },
      {
        topicName: 'Conic Sections',
        subtopics: ['Circle: standard and general equations', 'Parabola: standard equations and properties', 'Ellipse: standard equations and properties', 'Hyperbola: standard equations and properties', 'Tangent and normal to conics'],
        depthLevel: 3,
        learningObjectives: 'Derive and apply equations of conics and determine tangent and normal properties',
        orderIndex: 9,
      },
      {
        topicName: 'Introduction to Calculus',
        subtopics: ['Limits: intuitive concept and algebraic evaluation', 'Standard limits and L Hopital rule introduction', 'Continuity of functions', 'Differentiation: first principles and standard formulae', 'Derivatives of polynomial, trigonometric and exponential functions'],
        depthLevel: 3,
        learningObjectives: 'Evaluate limits, test continuity and differentiate standard functions from first principles',
        orderIndex: 10,
      },
      {
        topicName: 'Statistics and Probability',
        subtopics: ['Measures of dispersion: range, mean deviation, variance, standard deviation', 'Correlation and regression introduction', 'Probability: axiomatic approach', 'Conditional probability introduction', 'Bayes theorem introduction'],
        depthLevel: 3,
        learningObjectives: 'Calculate measures of dispersion, understand correlation and apply probability axioms',
        orderIndex: 11,
      },
      {
        topicName: 'Mathematical Reasoning',
        subtopics: ['Statements and logical connectives', 'Converse, inverse and contrapositive', 'Methods of proof: direct, contradiction, counterexample', 'Mathematical induction', 'Validity of arguments'],
        depthLevel: 3,
        learningObjectives: 'Apply logical reasoning, construct proofs and use mathematical induction',
        orderIndex: 12,
      },
    ],
  },

  // ---- Class 11: Physics ----
  {
    board: 'ICSE',
    grade: 11,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Physical World and Measurement',
        subtopics: ['Nature of physical laws', 'Fundamental and derived units', 'Dimensional analysis and its applications', 'Significant figures and error analysis', 'Measurement instruments and their precision'],
        depthLevel: 3,
        learningObjectives: 'Apply dimensional analysis, perform error analysis and understand measurement precision',
        orderIndex: 1,
      },
      {
        topicName: 'Kinematics',
        subtopics: ['Motion in a straight line: calculus-based approach', 'Projectile motion: equations and analysis', 'Relative motion', 'Uniform circular motion: centripetal acceleration', 'Motion in two dimensions'],
        depthLevel: 3,
        learningObjectives: 'Solve kinematics problems using calculus, analyse projectile and circular motion',
        orderIndex: 2,
      },
      {
        topicName: 'Laws of Motion',
        subtopics: ['Newton laws: advanced applications', 'Free body diagrams for complex systems', 'Friction: static, kinetic and rolling', 'Circular motion dynamics', 'Impulse-momentum theorem'],
        depthLevel: 3,
        learningObjectives: 'Apply Newton laws to complex systems with free body diagrams and friction analysis',
        orderIndex: 3,
      },
      {
        topicName: 'Work, Energy and Power',
        subtopics: ['Work done by constant and variable forces', 'Work-energy theorem: proof and applications', 'Conservative and non-conservative forces', 'Potential energy: gravitational and elastic', 'Collisions: elastic, inelastic and perfectly inelastic'],
        depthLevel: 3,
        learningObjectives: 'Apply work-energy theorem and conservation of energy to collision and force problems',
        orderIndex: 4,
      },
      {
        topicName: 'System of Particles and Rotational Motion',
        subtopics: ['Centre of mass: definition and calculation', 'Torque and angular momentum', 'Moment of inertia: calculation for standard shapes', 'Rotational kinematic equations', 'Conservation of angular momentum'],
        depthLevel: 3,
        learningObjectives: 'Calculate centre of mass, moment of inertia and solve rotational dynamics problems',
        orderIndex: 5,
      },
      {
        topicName: 'Gravitation',
        subtopics: ['Newton law of universal gravitation', 'Gravitational field and potential', 'Kepler laws and satellite motion', 'Orbital velocity and escape velocity', 'Geostationary and polar satellites'],
        depthLevel: 3,
        learningObjectives: 'Apply gravitational theory to planetary motion, satellite mechanics and escape velocity',
        orderIndex: 6,
      },
      {
        topicName: 'Properties of Bulk Matter',
        subtopics: ['Elasticity: stress, strain and Hooke law', 'Young modulus, bulk modulus and shear modulus', 'Fluid mechanics: Bernoulli theorem and viscosity', 'Surface tension and capillarity', 'Thermal properties: expansion, specific heat, calorimetry'],
        depthLevel: 3,
        learningObjectives: 'Apply elasticity, fluid mechanics and thermal properties to solve advanced problems',
        orderIndex: 7,
      },
      {
        topicName: 'Thermodynamics',
        subtopics: ['Laws of thermodynamics (zeroth, first, second)', 'Thermodynamic processes: isothermal, adiabatic, isobaric, isochoric', 'Heat engines and efficiency', 'Carnot cycle', 'Entropy and second law implications'],
        depthLevel: 3,
        learningObjectives: 'Apply thermodynamic laws and processes to heat engine and entropy problems',
        orderIndex: 8,
      },
      {
        topicName: 'Kinetic Theory of Gases',
        subtopics: ['Ideal gas equation: derivation and applications', 'Kinetic interpretation of temperature', 'RMS, average and most probable speeds', 'Degrees of freedom and law of equipartition', 'Mean free path'],
        depthLevel: 3,
        learningObjectives: 'Derive gas laws from kinetic theory and apply equipartition of energy',
        orderIndex: 9,
      },
      {
        topicName: 'Oscillations and Waves',
        subtopics: ['Simple harmonic motion: equations and energy', 'Damped, forced oscillations and resonance', 'Wave motion: transverse and longitudinal waves', 'Superposition principle and standing waves', 'Doppler effect in sound'],
        depthLevel: 3,
        learningObjectives: 'Analyse SHM mathematically, solve wave problems and apply the Doppler effect',
        orderIndex: 10,
      },
    ],
  },

  // ---- Class 11: Chemistry ----
  {
    board: 'ICSE',
    grade: 11,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'Some Basic Concepts of Chemistry',
        subtopics: ['Mole concept and molar mass', 'Stoichiometry and limiting reagent', 'Percentage composition and empirical/molecular formulae', 'Concentration terms: molarity, molality, normality, mole fraction', 'Laws of chemical combination'],
        depthLevel: 3,
        learningObjectives: 'Apply mole concept to stoichiometric calculations with various concentration terms',
        orderIndex: 1,
      },
      {
        topicName: 'Atomic Structure',
        subtopics: ['Bohr model and its limitations', 'Quantum mechanical model: orbitals and quantum numbers', 'Electronic configuration rules: Aufbau, Pauli, Hund', 'Shapes of s, p, d orbitals', 'Stability of half-filled and fully-filled subshells'],
        depthLevel: 3,
        learningObjectives: 'Apply quantum mechanical model to write electronic configurations and predict atomic properties',
        orderIndex: 2,
      },
      {
        topicName: 'Chemical Bonding and Molecular Structure',
        subtopics: ['VSEPR theory and molecular geometry', 'Valence Bond Theory and hybridisation (sp, sp2, sp3)', 'Molecular Orbital Theory basics', 'Bond parameters: bond length, order, energy', 'Hydrogen bonding and van der Waals forces'],
        depthLevel: 3,
        learningObjectives: 'Predict molecular geometry using VSEPR and hybridisation and explain intermolecular forces',
        orderIndex: 3,
      },
      {
        topicName: 'States of Matter',
        subtopics: ['Gas laws and ideal gas equation', 'Kinetic molecular theory', 'Real gases: van der Waals equation', 'Liquefaction of gases and critical constants', 'Liquid state: vapour pressure and surface tension'],
        depthLevel: 3,
        learningObjectives: 'Apply gas laws, distinguish ideal from real gas behaviour and explain liquid properties',
        orderIndex: 4,
      },
      {
        topicName: 'Thermodynamics',
        subtopics: ['First law of thermodynamics: internal energy and enthalpy', 'Hess law and enthalpy calculations', 'Bond enthalpy and lattice enthalpy', 'Spontaneity: Gibbs free energy', 'Entropy and second law of thermodynamics'],
        depthLevel: 3,
        learningObjectives: 'Apply thermodynamic laws to calculate enthalpy changes and predict reaction spontaneity',
        orderIndex: 5,
      },
      {
        topicName: 'Chemical Equilibrium',
        subtopics: ['Law of mass action and equilibrium constant', 'Le Chatelier principle and factors affecting equilibrium', 'Ionic equilibrium: acids, bases and buffers', 'Solubility product and common ion effect', 'pH calculations for various solutions'],
        depthLevel: 3,
        learningObjectives: 'Apply equilibrium concepts, Le Chatelier principle and calculate pH of solutions',
        orderIndex: 6,
      },
      {
        topicName: 'Redox Reactions',
        subtopics: ['Oxidation number concept and rules', 'Balancing redox equations: ion-electron method', 'Types of redox reactions', 'Electrochemical cells introduction', 'Standard electrode potential'],
        depthLevel: 3,
        learningObjectives: 'Assign oxidation numbers, balance redox equations and understand electrochemical cell basics',
        orderIndex: 7,
      },
      {
        topicName: 'Organic Chemistry: Basic Principles',
        subtopics: ['Classification and nomenclature of organic compounds (IUPAC)', 'Isomerism: structural and stereoisomerism', 'Electronic effects: inductive, resonance, hyperconjugation', 'Reaction intermediates: carbocations, carbanions, free radicals', 'Types of organic reactions: substitution, addition, elimination'],
        depthLevel: 3,
        learningObjectives: 'Name organic compounds using IUPAC, classify isomers and explain electronic effects and reaction types',
        orderIndex: 8,
      },
      {
        topicName: 'Hydrocarbons',
        subtopics: ['Alkanes: preparation, properties and conformations', 'Alkenes: preparation, properties and Markovnikov rule', 'Alkynes: preparation and properties', 'Aromatic hydrocarbons: benzene structure and reactions', 'Electrophilic aromatic substitution'],
        depthLevel: 3,
        learningObjectives: 'Describe hydrocarbon chemistry including preparation, reactions and aromaticity',
        orderIndex: 9,
      },
      {
        topicName: 's-Block and p-Block Elements',
        subtopics: ['Group 1 and Group 2 elements: properties and compounds', 'Diagonal relationship: Li-Mg, Be-Al', 'Group 13 and 14 elements: general properties', 'Important compounds: NaOH, Na2CO3, borax, silicones', 'Anomalous behaviour of first elements in each group'],
        depthLevel: 3,
        learningObjectives: 'Analyse properties and compounds of s-block and p-block elements with periodic trends',
        orderIndex: 10,
      },
    ],
  },

  // ---- Class 11: Biology ----
  {
    board: 'ICSE',
    grade: 11,
    subject: 'Biology',
    topics: [
      {
        topicName: 'The Living World and Biological Classification',
        subtopics: ['Characteristics of living organisms', 'Taxonomy and systematics', 'Five-kingdom classification (detailed)', 'Binomial nomenclature and taxonomic hierarchy', 'Viruses, viroids and prions'],
        depthLevel: 3,
        learningObjectives: 'Classify living organisms using five-kingdom system and understand taxonomic methodology',
        orderIndex: 1,
      },
      {
        topicName: 'Plant Kingdom',
        subtopics: ['Algae: types and characteristics', 'Bryophytes: characteristics and life cycle', 'Pteridophytes: characteristics and life cycle', 'Gymnosperms and angiosperms', 'Alternation of generations'],
        depthLevel: 3,
        learningObjectives: 'Classify plant groups, describe their characteristics and explain alternation of generations',
        orderIndex: 2,
      },
      {
        topicName: 'Animal Kingdom',
        subtopics: ['Basis of classification: symmetry, coelom, notochord', 'Invertebrate phyla: Porifera through Echinodermata', 'Chordata: classes Pisces through Mammalia', 'Distinguishing features of each phylum and class', 'Examples from Indian fauna'],
        depthLevel: 3,
        learningObjectives: 'Classify animals into phyla and classes and describe distinguishing characteristics',
        orderIndex: 3,
      },
      {
        topicName: 'Cell: The Unit of Life',
        subtopics: ['Prokaryotic and eukaryotic cells (detailed comparison)', 'Cell membrane: fluid mosaic model and transport', 'Cell organelles: detailed structure and function', 'Cytoskeleton and cell inclusions', 'Nucleus: chromatin, chromosomes and nucleolus'],
        depthLevel: 3,
        learningObjectives: 'Describe cell ultrastructure in detail and explain membrane transport and organelle functions',
        orderIndex: 4,
      },
      {
        topicName: 'Biomolecules',
        subtopics: ['Carbohydrates: classification, structure and function', 'Proteins: amino acids, peptide bond, levels of structure', 'Lipids: types and biological significance', 'Nucleic acids: DNA and RNA structure', 'Enzymes: mechanism, kinetics and factors'],
        depthLevel: 3,
        learningObjectives: 'Describe the structure and function of major biomolecules and enzyme kinetics',
        orderIndex: 5,
      },
      {
        topicName: 'Cell Cycle and Cell Division',
        subtopics: ['Cell cycle: phases and regulation', 'Mitosis: detailed stages and significance', 'Meiosis: detailed stages including crossing over', 'Significance of meiosis in evolution', 'Comparison of mitosis and meiosis'],
        depthLevel: 3,
        learningObjectives: 'Explain cell cycle regulation, describe mitosis and meiosis in detail and understand their significance',
        orderIndex: 6,
      },
      {
        topicName: 'Plant Anatomy and Morphology',
        subtopics: ['Morphology of root, stem, leaf, flower, fruit, seed', 'Tissue system: epidermal, ground, vascular', 'Anatomy of dicot and monocot root, stem and leaf', 'Secondary growth in dicots', 'Floral diagram and floral formula'],
        depthLevel: 3,
        learningObjectives: 'Describe plant morphology and internal anatomy and distinguish monocot from dicot structures',
        orderIndex: 7,
      },
      {
        topicName: 'Plant Physiology',
        subtopics: ['Transport in plants: water, minerals and food', 'Mineral nutrition: essential elements and deficiency', 'Photosynthesis: light reactions and Calvin cycle', 'Respiration: glycolysis, Krebs cycle, ETC', 'Plant growth and development: hormones'],
        depthLevel: 3,
        learningObjectives: 'Explain plant transport, mineral nutrition, photosynthesis and respiration at the biochemical level',
        orderIndex: 8,
      },
      {
        topicName: 'Human Physiology',
        subtopics: ['Digestive system: detailed mechanism and hormonal control', 'Breathing and exchange of gases', 'Body fluids and circulation: cardiac cycle, ECG', 'Excretory system: nephron function and counter-current mechanism', 'Locomotion and movement: skeletal and muscular systems'],
        depthLevel: 3,
        learningObjectives: 'Describe human organ systems in biochemical detail including cardiac cycle and nephron function',
        orderIndex: 9,
      },
      {
        topicName: 'Neural Control and Chemical Coordination',
        subtopics: ['Nervous system: neuron, synapse, neurotransmitters', 'Brain: detailed structure and functional areas', 'Sense organs: eye and ear physiology', 'Endocrine glands: hormones and feedback regulation', 'Mechanism of hormone action'],
        depthLevel: 3,
        learningObjectives: 'Explain neural transmission, brain function and hormonal regulation mechanisms in detail',
        orderIndex: 10,
      },
    ],
  },

  // ---- Class 11: English ----
  {
    board: 'ICSE',
    grade: 11,
    subject: 'English',
    topics: [
      {
        topicName: 'Composition',
        subtopics: ['Essay writing: argumentative, analytical, reflective, discursive', 'Formal letter and official correspondence', 'Proposal and report writing', 'Article and speech writing', 'Creative writing: short story and descriptive pieces'],
        depthLevel: 3,
        learningObjectives: 'Write sophisticated compositions across formats with nuanced argumentation and expression',
        orderIndex: 1,
      },
      {
        topicName: 'Directed Writing',
        subtopics: ['Data interpretation and report writing', 'Summary writing from long passages', 'Note-making and note-taking', 'Expansion of ideas from given themes', 'Responding to visual stimuli'],
        depthLevel: 3,
        learningObjectives: 'Interpret data, summarise complex passages and respond to various stimuli in writing',
        orderIndex: 2,
      },
      {
        topicName: 'Grammar and Vocabulary',
        subtopics: ['Advanced sentence structures and transformations', 'Nuances of tense usage in academic writing', 'Sophisticated vocabulary usage and connotation', 'Error correction at advanced level', 'Register and tone in different contexts'],
        depthLevel: 3,
        learningObjectives: 'Apply advanced grammar and vocabulary with awareness of register and tone',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Prose',
        subtopics: ['Detailed study of prescribed prose works', 'Critical analysis: theme, structure, style, technique', 'Socio-historical context of texts', 'Personal response with textual evidence', 'Comparative literary analysis'],
        depthLevel: 3,
        learningObjectives: 'Critically analyse prescribed prose works with socio-historical awareness and comparative insights',
        orderIndex: 4,
      },
      {
        topicName: 'Literature: Poetry',
        subtopics: ['Study of prescribed poems across traditions', 'Advanced poetic analysis: form, structure, language', 'Critical appreciation with awareness of poetic traditions', 'Comparative analysis of poems and poets', 'Personal interpretation supported by evidence'],
        depthLevel: 3,
        learningObjectives: 'Analyse poetry across traditions with sophisticated understanding of form, language and context',
        orderIndex: 5,
      },
      {
        topicName: 'Literature: Drama',
        subtopics: ['Study of prescribed play (e.g., Shakespeare)', 'Dramatic conventions and their effects', 'Character analysis with psychological insight', 'Theme and social commentary in drama', 'Performance aspects and stage interpretation'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed drama with psychological and social insight including performance dimensions',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 11: Hindi ----
  {
    board: 'ICSE',
    grade: 11,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension and Summary',
        subtopics: ['Unseen prose: advanced critical analysis', 'Unseen poetry: detailed bhavarth and vishleshan', 'Summary and precis writing in Hindi', 'Note-making from Hindi passages', 'Critical response and personal opinion'],
        depthLevel: 3,
        learningObjectives: 'Critically analyse complex unseen Hindi texts and produce sophisticated summaries and responses',
        orderIndex: 1,
      },
      {
        topicName: 'Advanced Grammar',
        subtopics: ['Comprehensive sandhi, samas and alankar', 'Ras: sthayibhav, vibhav, anubhav, sanchari bhav', 'Chhand (metre): doha, chaupai, sortha, saviya', 'Vakya vishleshan (sentence analysis)', 'Advanced error correction and language refinement'],
        depthLevel: 3,
        learningObjectives: 'Apply ISC-level Hindi grammar including ras, chhand and comprehensive sentence analysis',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Rachnatmak Abhivyakti)',
        subtopics: ['Essay writing on philosophical and literary topics', 'Formal correspondence: all types', 'Report writing and article writing in Hindi', 'Feature writing and editorial style', 'Creative writing: kahani, kavita, natak'],
        depthLevel: 3,
        learningObjectives: 'Write sophisticated Hindi compositions including philosophical essays and creative pieces',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Prose (Gadya)',
        subtopics: ['Detailed study of prescribed prose texts', 'Literary criticism and analysis', 'Author study and literary context', 'Reference to context with critical interpretation', 'Comparative study of prose works'],
        depthLevel: 3,
        learningObjectives: 'Provide advanced literary criticism of prescribed Hindi prose texts with contextual understanding',
        orderIndex: 4,
      },
      {
        topicName: 'Literature: Poetry (Padya)',
        subtopics: ['Detailed study of prescribed Hindi poetry', 'Alankar, ras, chhand identification and analysis', 'Poet study and literary movement context', 'Comparative poetry analysis', 'Critical appreciation of Hindi kavita'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed Hindi poetry with understanding of literary movements and critical apparatus',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 12 (ISC Board)
  // ==========================================================================

  // ---- Class 12: Mathematics ----
  {
    board: 'ICSE',
    grade: 12,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Relations and Functions',
        subtopics: ['Types of relations: reflexive, symmetric, transitive, equivalence', 'Types of functions: injective, surjective, bijective', 'Composition of functions and inverse functions', 'Binary operations', 'Graphs of functions'],
        depthLevel: 3,
        learningObjectives: 'Classify relations and functions, find inverses and analyse function compositions',
        orderIndex: 1,
      },
      {
        topicName: 'Inverse Trigonometric Functions',
        subtopics: ['Domain, range and principal value branch', 'Properties of inverse trigonometric functions', 'Simplification using properties', 'Proving identities involving inverse functions', 'Solving equations with inverse trigonometric functions'],
        depthLevel: 3,
        learningObjectives: 'Apply properties of inverse trigonometric functions to simplify and solve problems',
        orderIndex: 2,
      },
      {
        topicName: 'Matrices and Determinants',
        subtopics: ['Types of matrices and matrix operations', 'Determinants: properties and evaluation', 'Adjoint and inverse of a matrix', 'Solving systems of linear equations using matrices', 'Application of determinants: area of triangle, collinearity'],
        depthLevel: 3,
        learningObjectives: 'Perform matrix operations, evaluate determinants and solve linear systems using matrices',
        orderIndex: 3,
      },
      {
        topicName: 'Continuity and Differentiability',
        subtopics: ['Continuity of functions and types of discontinuities', 'Differentiability and its relation to continuity', 'Derivatives of composite, implicit and parametric functions', 'Logarithmic differentiation', 'Higher order derivatives'],
        depthLevel: 3,
        learningObjectives: 'Determine continuity and differentiability and find derivatives of complex functions',
        orderIndex: 4,
      },
      {
        topicName: 'Applications of Derivatives',
        subtopics: ['Rate of change and related rates', 'Increasing and decreasing functions', 'Maxima and minima: first and second derivative tests', 'Tangent and normal to curves', 'Rolle theorem and Mean Value Theorem'],
        depthLevel: 3,
        learningObjectives: 'Apply derivatives to rates, optimisation, tangent/normal problems and mean value theorems',
        orderIndex: 5,
      },
      {
        topicName: 'Integrals',
        subtopics: ['Indefinite integrals: standard formulae and methods', 'Integration by substitution, parts and partial fractions', 'Definite integrals: properties and evaluation', 'Fundamental Theorem of Calculus', 'Numerical integration: trapezoidal and Simpson rule'],
        depthLevel: 3,
        learningObjectives: 'Evaluate integrals using various methods and apply the Fundamental Theorem of Calculus',
        orderIndex: 6,
      },
      {
        topicName: 'Applications of Integrals',
        subtopics: ['Area under curves', 'Area between two curves', 'Volume of revolution (disc and shell methods)', 'Applications in physics and engineering contexts'],
        depthLevel: 3,
        learningObjectives: 'Calculate areas and volumes using integration and apply to real-world contexts',
        orderIndex: 7,
      },
      {
        topicName: 'Differential Equations',
        subtopics: ['Order and degree of differential equations', 'Formation of differential equations', 'Variable separable method', 'Homogeneous differential equations', 'Linear differential equations'],
        depthLevel: 3,
        learningObjectives: 'Classify and solve differential equations using standard methods',
        orderIndex: 8,
      },
      {
        topicName: 'Vectors and Three-Dimensional Geometry',
        subtopics: ['Vectors: types, addition, scalar and vector products', 'Section formula in 3D', 'Direction cosines and ratios', 'Equation of a line in 3D', 'Equation of a plane and distance from a point to a plane'],
        depthLevel: 3,
        learningObjectives: 'Perform vector operations and solve 3D geometry problems involving lines and planes',
        orderIndex: 9,
      },
      {
        topicName: 'Probability',
        subtopics: ['Conditional probability and multiplication theorem', 'Independent events and Bayes theorem', 'Random variables and probability distributions', 'Binomial distribution', 'Mean and variance of random variables'],
        depthLevel: 3,
        learningObjectives: 'Apply conditional probability, Bayes theorem and binomial distribution to problems',
        orderIndex: 10,
      },
      {
        topicName: 'Linear Programming',
        subtopics: ['Formulation of linear programming problems', 'Graphical method for optimisation', 'Corner point method', 'Feasible region and optimal solutions', 'Applications in real-world optimisation'],
        depthLevel: 3,
        learningObjectives: 'Formulate and solve linear programming problems using graphical methods',
        orderIndex: 11,
      },
    ],
  },

  // ---- Class 12: Physics ----
  {
    board: 'ICSE',
    grade: 12,
    subject: 'Physics',
    topics: [
      {
        topicName: 'Electrostatics',
        subtopics: ['Coulomb law and superposition principle', 'Electric field: due to point charge, dipole and continuous distributions', 'Gauss law and its applications', 'Electric potential and potential energy', 'Capacitors: parallel plate, combinations, energy stored'],
        depthLevel: 3,
        learningObjectives: 'Apply Coulomb law, Gauss law and electric potential concepts to electrostatic problems',
        orderIndex: 1,
      },
      {
        topicName: 'Current Electricity',
        subtopics: ['Drift velocity and current density', 'Kirchhoff laws and Wheatstone bridge', 'Metre bridge and potentiometer', 'Internal resistance and EMF', 'Temperature dependence of resistance'],
        depthLevel: 3,
        learningObjectives: 'Apply Kirchhoff laws, analyse bridge circuits and use potentiometer for measurements',
        orderIndex: 2,
      },
      {
        topicName: 'Magnetic Effects of Current and Magnetism',
        subtopics: ['Biot-Savart law and its applications', 'Ampere circuital law', 'Force on a moving charge and current-carrying conductor', 'Galvanometer: conversion to ammeter and voltmeter', 'Magnetic properties of materials: dia, para, ferromagnetic'],
        depthLevel: 3,
        learningObjectives: 'Apply Biot-Savart and Ampere laws and classify magnetic materials',
        orderIndex: 3,
      },
      {
        topicName: 'Electromagnetic Induction and AC',
        subtopics: ['Faraday law and Lenz law', 'Motional EMF and eddy currents', 'Self-inductance and mutual inductance', 'AC circuits: LCR series circuit and resonance', 'Transformers and power transmission'],
        depthLevel: 3,
        learningObjectives: 'Apply electromagnetic induction laws and analyse AC circuits with LCR components',
        orderIndex: 4,
      },
      {
        topicName: 'Electromagnetic Waves',
        subtopics: ['Displacement current and Maxwell equations (qualitative)', 'Electromagnetic spectrum: properties and uses', 'Nature of electromagnetic waves', 'Energy and momentum of EM waves', 'Applications in communication'],
        depthLevel: 3,
        learningObjectives: 'Describe EM waves, their spectrum properties and applications in communication',
        orderIndex: 5,
      },
      {
        topicName: 'Optics',
        subtopics: ['Ray optics: reflection and refraction at curved surfaces', 'Thin lens and mirror formulae', 'Optical instruments: microscope and telescope', 'Wave optics: interference (Young double slit)', 'Diffraction and polarisation'],
        depthLevel: 3,
        learningObjectives: 'Apply ray and wave optics to solve problems on lenses, interference and diffraction',
        orderIndex: 6,
      },
      {
        topicName: 'Dual Nature of Radiation and Matter',
        subtopics: ['Photoelectric effect: laws and Einstein equation', 'de Broglie hypothesis and matter waves', 'Davisson-Germer experiment', 'Photon model of light', 'Wave-particle duality'],
        depthLevel: 3,
        learningObjectives: 'Apply photoelectric effect equations and de Broglie wavelength to quantum problems',
        orderIndex: 7,
      },
      {
        topicName: 'Atoms and Nuclei',
        subtopics: ['Rutherford model and Bohr model of hydrogen atom', 'Energy levels and spectral series', 'Nuclear composition, size and mass-energy relation', 'Radioactivity: decay law and half-life', 'Nuclear fission and fusion: energy calculations'],
        depthLevel: 3,
        learningObjectives: 'Apply Bohr model, radioactive decay law and nuclear energy calculations',
        orderIndex: 8,
      },
      {
        topicName: 'Electronic Devices',
        subtopics: ['Semiconductor physics: intrinsic and extrinsic', 'p-n junction diode: characteristics and applications', 'Zener diode and photodiode', 'Transistor: characteristics and as an amplifier', 'Logic gates: basic and universal gates'],
        depthLevel: 3,
        learningObjectives: 'Explain semiconductor devices, diode applications and transistor operation',
        orderIndex: 9,
      },
      {
        topicName: 'Communication Systems',
        subtopics: ['Elements of a communication system', 'Bandwidth and signal types', 'Modulation: AM and FM', 'Propagation of radio waves', 'Satellite communication basics'],
        depthLevel: 2,
        learningObjectives: 'Describe communication system elements, modulation techniques and signal propagation',
        orderIndex: 10,
      },
    ],
  },

  // ---- Class 12: Chemistry ----
  {
    board: 'ICSE',
    grade: 12,
    subject: 'Chemistry',
    topics: [
      {
        topicName: 'Solid State',
        subtopics: ['Classification of solids: crystalline and amorphous', 'Crystal lattices and unit cells', 'Packing efficiency and coordination number', 'Imperfections in solids: point defects', 'Electrical and magnetic properties of solids'],
        depthLevel: 3,
        learningObjectives: 'Classify solids, analyse crystal structures and understand defects and their effects on properties',
        orderIndex: 1,
      },
      {
        topicName: 'Solutions',
        subtopics: ['Types of solutions and concentration terms', 'Colligative properties: vapour pressure lowering, boiling point elevation, freezing point depression, osmotic pressure', 'Raoult law and its deviations', 'Van Hoff factor and abnormal molecular masses', 'Henry law and gas solubility'],
        depthLevel: 3,
        learningObjectives: 'Apply colligative property equations and Raoult law to determine molecular masses',
        orderIndex: 2,
      },
      {
        topicName: 'Electrochemistry',
        subtopics: ['Electrochemical cells: galvanic and electrolytic', 'Nernst equation and its applications', 'Conductance: specific, molar and equivalent', 'Kohlrausch law', 'Batteries, fuel cells and corrosion'],
        depthLevel: 3,
        learningObjectives: 'Apply Nernst equation, calculate conductance and explain electrochemical cell functioning',
        orderIndex: 3,
      },
      {
        topicName: 'Chemical Kinetics',
        subtopics: ['Rate of reaction: average and instantaneous', 'Rate law and order of reaction', 'Integrated rate equations: zero, first and second order', 'Activation energy and Arrhenius equation', 'Collision theory and transition state theory'],
        depthLevel: 3,
        learningObjectives: 'Determine reaction order, apply integrated rate laws and use Arrhenius equation',
        orderIndex: 4,
      },
      {
        topicName: 'Surface Chemistry',
        subtopics: ['Adsorption: physical and chemical', 'Catalysis: homogeneous and heterogeneous', 'Colloids: preparation, properties and applications', 'Emulsions and gels', 'Enzyme catalysis'],
        depthLevel: 3,
        learningObjectives: 'Explain adsorption, catalysis types and colloidal properties with applications',
        orderIndex: 5,
      },
      {
        topicName: 'd-Block and f-Block Elements',
        subtopics: ['Electronic configuration and general properties of transition elements', 'Colour, magnetic properties and catalytic activity', 'Important compounds: KMnO4, K2Cr2O7', 'Lanthanoids and actinoids', 'Lanthanoid contraction'],
        depthLevel: 3,
        learningObjectives: 'Analyse transition metal properties, prepare important compounds and explain lanthanoid contraction',
        orderIndex: 6,
      },
      {
        topicName: 'Coordination Compounds',
        subtopics: ['Werner theory and IUPAC nomenclature', 'Isomerism in coordination compounds', 'Bonding: VBT and CFT', 'Colour and magnetic properties explanation', 'Applications of coordination compounds'],
        depthLevel: 3,
        learningObjectives: 'Name coordination compounds, predict properties using bonding theories and explain isomerism',
        orderIndex: 7,
      },
      {
        topicName: 'Organic Chemistry: Haloalkanes, Alcohols, Phenols and Ethers',
        subtopics: ['Haloalkanes: preparation, properties and SN1/SN2 mechanisms', 'Alcohols: preparation, properties and reactions', 'Phenols: acidity, reactions and uses', 'Ethers: preparation and properties', 'Environmental effects of organic halides'],
        depthLevel: 3,
        learningObjectives: 'Describe reaction mechanisms for haloalkanes and properties of alcohols, phenols and ethers',
        orderIndex: 8,
      },
      {
        topicName: 'Organic Chemistry: Aldehydes, Ketones, Carboxylic Acids and Amines',
        subtopics: ['Aldehydes and ketones: nucleophilic addition reactions', 'Carboxylic acids: acidity, preparation and reactions', 'Amines: classification, preparation and reactions', 'Diazonium salts and coupling reactions', 'Named reactions: Aldol, Cannizzaro, Kolbe, Hofmann'],
        depthLevel: 3,
        learningObjectives: 'Explain carbonyl and amine chemistry with named reactions and reaction mechanisms',
        orderIndex: 9,
      },
      {
        topicName: 'Biomolecules and Polymers',
        subtopics: ['Carbohydrates: structure of glucose and fructose', 'Proteins: primary to quaternary structure', 'Nucleic acids: DNA replication and protein synthesis', 'Polymers: types, preparation and uses', 'Biodegradable polymers and environmental concerns'],
        depthLevel: 3,
        learningObjectives: 'Describe biomolecule structures, DNA replication and polymer classification with applications',
        orderIndex: 10,
      },
    ],
  },

  // ---- Class 12: Biology ----
  {
    board: 'ICSE',
    grade: 12,
    subject: 'Biology',
    topics: [
      {
        topicName: 'Reproduction in Organisms',
        subtopics: ['Asexual reproduction: modes and significance', 'Sexual reproduction in flowering plants (detailed)', 'Pollination: types, agents and mechanisms', 'Double fertilisation and post-fertilisation events', 'Seed and fruit development'],
        depthLevel: 3,
        learningObjectives: 'Explain reproductive strategies, double fertilisation and seed development in angiosperms',
        orderIndex: 1,
      },
      {
        topicName: 'Human Reproduction',
        subtopics: ['Male and female reproductive systems in detail', 'Gametogenesis: spermatogenesis and oogenesis', 'Menstrual cycle: hormonal regulation', 'Fertilisation, implantation and pregnancy', 'Parturition, lactation and embryonic development'],
        depthLevel: 3,
        learningObjectives: 'Describe gametogenesis, fertilisation and embryonic development with hormonal regulation',
        orderIndex: 2,
      },
      {
        topicName: 'Reproductive Health',
        subtopics: ['Reproductive health and programmes', 'Contraceptive methods: types and effectiveness', 'Sexually transmitted diseases', 'Infertility and assisted reproductive technologies (IVF, ZIFT)', 'Population control measures'],
        depthLevel: 3,
        learningObjectives: 'Analyse reproductive health issues, contraceptive methods and assisted reproductive technologies',
        orderIndex: 3,
      },
      {
        topicName: 'Genetics and Evolution',
        subtopics: ['Mendelian inheritance: mono and dihybrid crosses', 'Chromosomal theory of inheritance', 'Sex determination and sex-linked inheritance', 'Mutation: types and significance', 'Hardy-Weinberg principle and evolution'],
        depthLevel: 3,
        learningObjectives: 'Apply Mendelian genetics, explain sex-linked traits and understand evolutionary principles',
        orderIndex: 4,
      },
      {
        topicName: 'Molecular Biology',
        subtopics: ['DNA structure: Watson-Crick model', 'DNA replication: semi-conservative mechanism', 'Transcription: process in prokaryotes and eukaryotes', 'Translation: protein synthesis mechanism', 'Gene regulation: lac operon model'],
        depthLevel: 3,
        learningObjectives: 'Describe DNA replication, transcription and translation at the molecular level',
        orderIndex: 5,
      },
      {
        topicName: 'Biotechnology',
        subtopics: ['Principles and processes of biotechnology', 'Recombinant DNA technology: tools and techniques', 'Polymerase Chain Reaction (PCR)', 'Applications in agriculture: Bt crops, GMOs', 'Applications in medicine: gene therapy, DNA fingerprinting'],
        depthLevel: 3,
        learningObjectives: 'Explain biotechnology principles, rDNA technology and its applications in agriculture and medicine',
        orderIndex: 6,
      },
      {
        topicName: 'Human Health and Disease',
        subtopics: ['Common diseases: pathogen, symptoms, prevention', 'Immunity: innate and adaptive (humoral and cell-mediated)', 'Vaccination and immunisation programmes', 'Cancer: types, causes and treatment', 'Drugs and alcohol abuse'],
        depthLevel: 3,
        learningObjectives: 'Analyse immune mechanisms, disease pathology and the impact of substance abuse',
        orderIndex: 7,
      },
      {
        topicName: 'Ecology and Environment',
        subtopics: ['Organisms and populations: adaptations and population attributes', 'Ecosystem: structure, function, productivity', 'Energy flow, decomposition and nutrient cycling', 'Biodiversity: patterns, conservation strategies', 'Environmental issues: pollution, climate change, conservation'],
        depthLevel: 3,
        learningObjectives: 'Analyse ecosystem function, biodiversity conservation and environmental issues at ISC level',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 12: English ----
  {
    board: 'ICSE',
    grade: 12,
    subject: 'English',
    topics: [
      {
        topicName: 'Composition',
        subtopics: ['Essay writing: all types with sophisticated argumentation', 'Proposal writing for academic and professional contexts', 'Article writing for publication', 'Speech and debate writing with persuasive techniques', 'Review writing: book, film, event'],
        depthLevel: 3,
        learningObjectives: 'Write polished compositions with sophisticated argumentation and varied rhetorical strategies',
        orderIndex: 1,
      },
      {
        topicName: 'Directed Writing',
        subtopics: ['Data analysis and response', 'Summary and precis from complex passages', 'Note-making from academic texts', 'Synthesising information from multiple sources', 'Responding to hypothetical scenarios'],
        depthLevel: 3,
        learningObjectives: 'Synthesise, summarise and respond to complex textual and data stimuli',
        orderIndex: 2,
      },
      {
        topicName: 'Grammar and Vocabulary',
        subtopics: ['Advanced grammar in context', 'Nuances of meaning and connotation', 'Academic vocabulary and register', 'Stylistic devices in writing', 'Idiomatic and figurative language mastery'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate mastery of English at ISC board level with sophisticated grammar and vocabulary',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Prose',
        subtopics: ['Critical study of prescribed prose texts', 'Advanced thematic and stylistic analysis', 'Socio-political and historical context', 'Comparative study across texts', 'Extended critical essays on prescribed works'],
        depthLevel: 3,
        learningObjectives: 'Produce sophisticated critical analyses of prescribed prose with contextual and comparative depth',
        orderIndex: 4,
      },
      {
        topicName: 'Literature: Poetry',
        subtopics: ['Advanced study of prescribed poetry', 'Form, structure and language analysis', 'Poetic traditions and movements', 'Inter-textual and comparative analysis', 'Extended critical appreciation essays'],
        depthLevel: 3,
        learningObjectives: 'Analyse prescribed poetry with knowledge of poetic traditions and sophisticated critical tools',
        orderIndex: 5,
      },
      {
        topicName: 'Literature: Drama',
        subtopics: ['Detailed study of prescribed play', 'Advanced dramatic analysis: structure, stagecraft, language', 'Historical and cultural context of the play', 'Character study with psychological depth', 'Extended essay responses on dramatic themes'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate comprehensive understanding of prescribed drama with psychological and cultural insight',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 12: Hindi ----
  {
    board: 'ICSE',
    grade: 12,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension and Analysis',
        subtopics: ['Unseen prose: advanced critical and analytical comprehension', 'Unseen poetry: detailed bhavarth, ras, alankar identification', 'Summary and precis of complex passages', 'Critical opinion and personal response', 'Vocabulary inference and usage'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate ISC-level mastery of unseen Hindi comprehension with critical depth',
        orderIndex: 1,
      },
      {
        topicName: 'Advanced Grammar and Language',
        subtopics: ['Complete sandhi, samas, upsarg, pratyay', 'Ras: all nine ras with examples and identification', 'Chhand: all prescribed metres with scansion', 'Alankar: complete shabdalankar and arthalankar', 'Comprehensive ashudhi shodhan and vakya vishleshan'],
        depthLevel: 3,
        learningObjectives: 'Apply complete Hindi grammar apparatus including ras, chhand and alankar at ISC board level',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Rachna)',
        subtopics: ['Essay writing: philosophical, literary, social and abstract topics', 'Formal letters and professional correspondence', 'Report and feature writing', 'Creative writing: kahani, kavita, natak', 'Translation and transcreation skills'],
        depthLevel: 3,
        learningObjectives: 'Write sophisticated Hindi compositions at ISC examination level across all formats',
        orderIndex: 3,
      },
      {
        topicName: 'Literature: Prose (Gadya Sahitya)',
        subtopics: ['Detailed critical study of prescribed gadya', 'Sahityik aalochna (literary criticism)', 'Lekhak parichay aur rachna kaal (author context)', 'Reference to context with deep critical analysis', 'Extended essay-type responses on themes and characters'],
        depthLevel: 3,
        learningObjectives: 'Provide advanced literary criticism of prescribed Hindi prose at ISC board examination level',
        orderIndex: 4,
      },
      {
        topicName: 'Literature: Poetry (Padya Sahitya)',
        subtopics: ['Detailed study of prescribed padya', 'Kavi parichay aur kaavya dhara (poet and poetic tradition)', 'Ras, alankar, chhand analysis in prescribed kavita', 'Comparative analysis of poems and poets', 'Extended critical appreciation of Hindi kavita'],
        depthLevel: 3,
        learningObjectives: 'Demonstrate comprehensive analysis of prescribed Hindi poetry within literary traditions at ISC level',
        orderIndex: 5,
      },
    ],
  },
];
