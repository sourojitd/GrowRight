import { SyllabusEntry } from '../types';

// ============================================================
// CLASSES 6-8: CBSE (NCERT) Syllabus
// Subjects: Mathematics, Science, Social Science (History,
//           Geography, Civics), English, Hindi (Vasant)
// ============================================================

export const classes6to8: SyllabusEntry[] = [

  // ──────────────────────────────────────────────
  // CLASS 6 - Mathematics
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Knowing Our Numbers',
        subtopics: [
          'Comparing and ordering large numbers up to lakhs and crores',
          'Indian and International systems of numeration',
          'Estimation and rounding off numbers',
          'Use of brackets in simplification',
          'Roman numerals and their usage',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare and order large numbers using Indian and International numeration systems; estimate sums, differences, and products; use brackets correctly in numerical expressions.',
        orderIndex: 1,
      },
      {
        topicName: 'Whole Numbers',
        subtopics: [
          'Natural numbers, whole numbers, and the number line',
          'Successor and predecessor of a whole number',
          'Properties of whole numbers: closure, commutativity, associativity, distributivity',
          'Patterns in whole numbers',
          'Identity elements for addition and multiplication',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the number system from natural to whole numbers; represent numbers on a number line; explore and apply properties of whole numbers in computations.',
        orderIndex: 2,
      },
      {
        topicName: 'Playing with Numbers',
        subtopics: [
          'Factors and multiples of a number',
          'Divisibility rules for 2, 3, 4, 5, 6, 8, 9, and 11',
          'Prime and composite numbers; prime factorisation',
          'Highest Common Factor (HCF) and Lowest Common Multiple (LCM)',
          'Applications of HCF and LCM in word problems',
        ],
        depthLevel: 2,
        learningObjectives:
          'Find factors and multiples; apply divisibility tests; identify prime and composite numbers; compute HCF and LCM using prime factorisation and division method.',
        orderIndex: 3,
      },
      {
        topicName: 'Basic Geometrical Ideas',
        subtopics: [
          'Point, line, line segment, and ray',
          'Intersecting lines, parallel lines, and perpendicular lines',
          'Curves, open and closed figures',
          'Polygons and their classification',
          'Angles and their types: acute, right, obtuse, straight, reflex',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify and differentiate between basic geometrical elements; classify lines, angles, and polygons; understand the concept of curves and closed figures.',
        orderIndex: 4,
      },
      {
        topicName: 'Understanding Elementary Shapes',
        subtopics: [
          'Measuring line segments using ruler and divider',
          'Measuring and classifying angles using a protractor',
          'Perpendicular and parallel lines identification',
          'Triangles classified by sides and angles',
          'Quadrilaterals and regular polygons; three-dimensional shapes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Measure line segments and angles accurately; classify triangles and quadrilaterals; recognise and name common 2D and 3D shapes.',
        orderIndex: 5,
      },
      {
        topicName: 'Integers',
        subtopics: [
          'Introduction to negative numbers and integers',
          'Representation of integers on a number line',
          'Ordering and comparing integers',
          'Addition and subtraction of integers',
          'Real-life applications: temperature, sea level, profit and loss',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the need for negative numbers; represent integers on a number line; perform addition and subtraction of integers and apply them to real-life contexts.',
        orderIndex: 6,
      },
      {
        topicName: 'Fractions',
        subtopics: [
          'Revision of fractions: proper, improper, and mixed fractions',
          'Equivalent fractions and simplest form',
          'Comparison and ordering of fractions',
          'Addition and subtraction of fractions (like and unlike)',
          'Fraction as a division and word problems',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify types of fractions; find equivalent fractions; compare, add, and subtract fractions with like and unlike denominators; solve word problems involving fractions.',
        orderIndex: 7,
      },
      {
        topicName: 'Decimals',
        subtopics: [
          'Tenths, hundredths, and thousandths as decimal notation',
          'Representing decimals on a number line',
          'Conversion between fractions and decimals',
          'Comparing and ordering decimal numbers',
          'Addition and subtraction of decimals; using decimals in money and measurement',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand place value in decimals; convert between fractions and decimals; compare, add, and subtract decimals in real-life contexts such as money and length.',
        orderIndex: 8,
      },
      {
        topicName: 'Data Handling',
        subtopics: [
          'Collection and organisation of data',
          'Tally marks and frequency tables',
          'Pictographs: reading and constructing',
          'Bar graphs: reading and constructing',
          'Interpreting data and drawing conclusions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Collect, organise, and represent data using tally marks, frequency tables, pictographs, and bar graphs; interpret data to draw meaningful conclusions.',
        orderIndex: 9,
      },
      {
        topicName: 'Mensuration',
        subtopics: [
          'Concept of perimeter and its computation for various shapes',
          'Perimeter of regular and irregular polygons',
          'Concept of area using square grids',
          'Area of a rectangle and a square using formulae',
          'Applications of perimeter and area in daily life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Calculate the perimeter of polygons and area of rectangles and squares; apply mensuration concepts to solve real-life problems.',
        orderIndex: 10,
      },
      {
        topicName: 'Algebra',
        subtopics: [
          'Introduction to variables and constants',
          'Use of variables in common rules and formulae',
          'Framing algebraic expressions from statements',
          'Simple equations and their solutions by trial-and-error',
          'Applications of algebra in patterns and geometry',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the concept of a variable; translate verbal statements into algebraic expressions; solve simple equations using the trial-and-error method.',
        orderIndex: 11,
      },
      {
        topicName: 'Ratio and Proportion',
        subtopics: [
          'Concept of ratio and its simplest form',
          'Equivalent ratios and comparison of ratios',
          'Concept of proportion and the symbol ::',
          'Unitary method for solving proportion problems',
          'Applications of ratio and proportion in daily life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Express ratios in simplest form; determine whether quantities are in proportion; apply the unitary method to solve real-world problems.',
        orderIndex: 12,
      },
      {
        topicName: 'Symmetry',
        subtopics: [
          'Line of symmetry and symmetrical figures',
          'Identifying lines of symmetry in regular shapes',
          'Multiple lines of symmetry',
          'Reflection symmetry in everyday objects',
          'Constructing symmetrical figures on grid paper',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify lines of symmetry in 2D shapes; determine whether a figure is symmetrical; draw mirror images and complete symmetrical figures.',
        orderIndex: 13,
      },
      {
        topicName: 'Practical Geometry',
        subtopics: [
          'Construction of a circle with given radius using compass',
          'Construction of a line segment of a given length',
          'Constructing a copy of a given line segment',
          'Constructing perpendicular lines and perpendicular bisectors',
          'Constructing angles of given measures and angle bisectors',
        ],
        depthLevel: 2,
        learningObjectives:
          'Use ruler, compass, and protractor to construct line segments, perpendiculars, perpendicular bisectors, and angles of specified measures.',
        orderIndex: 14,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 6 - Science
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'Science',
    topics: [
      {
        topicName: 'Food: Where Does it Come From',
        subtopics: [
          'Sources of food: plants and animals',
          'Plant parts used as food: roots, stems, leaves, flowers, fruits, seeds',
          'Animal products used as food: milk, eggs, meat, honey',
          'Herbivores, carnivores, and omnivores',
          'Food variety across different regions of India',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify plant and animal sources of food; classify animals based on their food habits; appreciate the diversity of food across regions.',
        orderIndex: 1,
      },
      {
        topicName: 'Components of Food',
        subtopics: [
          'Nutrients in food: carbohydrates, proteins, fats, vitamins, minerals',
          'Tests for starch, protein, and fat in food items',
          'Balanced diet and its importance',
          'Deficiency diseases: scurvy, rickets, beri-beri, goitre, anaemia',
          'Role of roughage and water in diet',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify the major nutrients in food and their functions; test for the presence of nutrients; understand the importance of a balanced diet and the consequences of nutritional deficiency.',
        orderIndex: 2,
      },
      {
        topicName: 'Fibre to Fabric',
        subtopics: [
          'Natural fibres: cotton and jute and their sources',
          'Processing of cotton fibre: ginning, spinning, weaving, knitting',
          'Processing of jute and its uses',
          'History of clothing materials',
          'Difference between spinning and weaving',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify natural fibres and their plant sources; describe the process of making yarn from fibre and fabric from yarn; differentiate between weaving and knitting.',
        orderIndex: 3,
      },
      {
        topicName: 'Sorting Materials into Groups',
        subtopics: [
          'Properties of materials: appearance, hardness, solubility, transparency',
          'Grouping objects based on common properties',
          'Materials that float or sink in water',
          'Lustrous and non-lustrous materials',
          'Miscible and immiscible liquids',
        ],
        depthLevel: 2,
        learningObjectives:
          'Group materials based on their physical properties such as transparency, hardness, solubility, and lustre; distinguish between miscible and immiscible liquids.',
        orderIndex: 4,
      },
      {
        topicName: 'Separation of Substances',
        subtopics: [
          'Need for separating mixtures in daily life',
          'Methods of separation: hand-picking, winnowing, sieving, threshing',
          'Sedimentation, decantation, and filtration',
          'Evaporation and condensation as separation techniques',
          'Saturated and unsaturated solutions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify appropriate methods to separate different types of mixtures; perform simple separation techniques; understand the concept of saturated solutions.',
        orderIndex: 5,
      },
      {
        topicName: 'Changes Around Us',
        subtopics: [
          'Reversible and irreversible changes with examples',
          'Physical changes vs chemical changes',
          'Changes caused by heating and cooling',
          'Changes that can be reversed by changing conditions',
          'Expansion and contraction of materials',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify changes as reversible or irreversible; differentiate between physical and chemical changes; identify factors that cause changes in materials.',
        orderIndex: 6,
      },
      {
        topicName: 'Getting to Know Plants',
        subtopics: [
          'Types of plants: herbs, shrubs, trees, creepers, climbers',
          'Parts of a plant: root, stem, leaf, flower, fruit, seed',
          'Functions of roots: tap root and fibrous root systems',
          'Structure of a leaf: venation and transpiration',
          'Parts of a flower and their functions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify plants based on their characteristics; identify parts of a plant and their functions; understand the structure of a leaf and a flower.',
        orderIndex: 7,
      },
      {
        topicName: 'Body Movements',
        subtopics: [
          'Human skeletal system: bones and cartilage',
          'Joints and their types: ball-and-socket, pivot, hinge, fixed',
          'Movement in earthworms, snails, cockroaches, birds, fish, and snakes',
          'X-ray images and understanding the skeleton',
          'Importance of exercise for bones and muscles',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify the major bones and joints in the human body; classify joints by type; describe how different animals move using various body structures.',
        orderIndex: 8,
      },
      {
        topicName: 'The Living Organisms and Their Surroundings',
        subtopics: [
          'Habitat and adaptation: terrestrial and aquatic',
          'Characteristics of living organisms: growth, respiration, response to stimuli',
          'Adaptations of desert, grassland, and aquatic organisms',
          'Biotic and abiotic components of a habitat',
          'Acclimatisation vs adaptation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define habitat and adaptation; identify key characteristics of living organisms; describe how organisms adapt to their environment in terrestrial and aquatic habitats.',
        orderIndex: 9,
      },
      {
        topicName: 'Motion and Measurement of Distances',
        subtopics: [
          'History of transport and modes of travel',
          'Standard units of measurement: SI system and the metre',
          'Correct use of a ruler and measuring tape',
          'Types of motion: rectilinear, circular, rotational, periodic, oscillatory',
          'Examples of different types of motion in daily life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Measure lengths accurately using standard units; classify types of motion; identify examples of rectilinear, circular, rotational, and periodic motion.',
        orderIndex: 10,
      },
      {
        topicName: 'Light Shadows and Reflections',
        subtopics: [
          'Luminous and non-luminous objects',
          'Transparent, translucent, and opaque materials',
          'Formation of shadows: conditions and characteristics',
          'Pinhole camera: construction and image formation',
          'Reflection of light by mirrors',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify objects based on their light properties; explain how shadows are formed; construct a pinhole camera and understand image formation; understand basic reflection.',
        orderIndex: 11,
      },
      {
        topicName: 'Electricity and Circuits',
        subtopics: [
          'Electric cell and its components',
          'Simple electric circuit: bulb, cell, wire, switch',
          'Conductors and insulators of electricity',
          'Open and closed circuits',
          'Electric switches and their role in circuits',
        ],
        depthLevel: 2,
        learningObjectives:
          'Construct a simple electric circuit; identify conductors and insulators; understand the role of a switch in completing or breaking a circuit.',
        orderIndex: 12,
      },
      {
        topicName: 'Fun with Magnets',
        subtopics: [
          'Discovery and history of magnets',
          'Natural and artificial magnets',
          'Magnetic and non-magnetic materials',
          'Poles of a magnet: attraction and repulsion',
          'Making a compass and finding directions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Distinguish between magnetic and non-magnetic materials; identify poles of a magnet; understand attraction and repulsion; use a magnet as a compass.',
        orderIndex: 13,
      },
      {
        topicName: 'Water',
        subtopics: [
          'Water cycle: evaporation, condensation, precipitation',
          'Sources of water: surface and groundwater',
          'Water conservation and rainwater harvesting',
          'Drought and flood: causes and effects',
          'Importance of water for all living beings',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the stages of the water cycle; identify major sources of water; understand the importance of water conservation and the effects of water scarcity.',
        orderIndex: 14,
      },
      {
        topicName: 'Air Around Us',
        subtopics: [
          'Composition of air: nitrogen, oxygen, carbon dioxide, water vapour',
          'Properties of air: occupies space, has weight',
          'Role of air in breathing and combustion',
          'Wind and its uses',
          'Air pollution and its prevention',
        ],
        depthLevel: 2,
        learningObjectives:
          'List the components of air and their proportions; demonstrate that air occupies space and has weight; understand the role of air in sustaining life and combustion.',
        orderIndex: 15,
      },
      {
        topicName: 'Garbage In Garbage Out',
        subtopics: [
          'Types of waste: biodegradable and non-biodegradable',
          'Segregation of waste at source',
          'Composting and vermicomposting',
          'Reduce, reuse, and recycle (3Rs)',
          'Harmful effects of improper waste disposal on the environment',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify waste into biodegradable and non-biodegradable; practice the 3Rs; understand composting; recognise the impact of improper waste management.',
        orderIndex: 16,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 6 - Social Science (History)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'Social Science (History)',
    topics: [
      {
        topicName: 'What Where How and When',
        subtopics: [
          'Understanding the past through sources: manuscripts, inscriptions, archaeology',
          'The significance of dates and timelines in history',
          'Geographical features of the Indian subcontinent',
          'The Narmada valley and the first people',
          'How historians study the past using evidence',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand why and how we study the past; identify different types of historical sources; locate key geographical features on a map of the Indian subcontinent.',
        orderIndex: 1,
      },
      {
        topicName: 'From Hunting-Gathering to Growing Food',
        subtopics: [
          'Life of early hunter-gatherers: tools, food, shelter',
          'Discovery of fire and its impact on early humans',
          'Beginning of farming and domestication of animals',
          'Early settlements near rivers: Mehrgarh',
          'Transition from nomadic to settled life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the life of hunter-gatherers; explain the shift from hunting-gathering to agriculture; identify early farming communities such as Mehrgarh.',
        orderIndex: 2,
      },
      {
        topicName: 'In the Earliest Cities',
        subtopics: [
          'The Harappan civilisation: Harappa, Mohenjo-daro, Lothal',
          'City planning: grid layout, drainage system, Great Bath',
          'Occupations and crafts of the Harappan people',
          'Trade and contact with distant lands',
          'Decline of the Harappan civilisation: possible causes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the urban features of Harappan cities; identify key archaeological sites; understand the economy, trade, and eventual decline of the Indus Valley civilisation.',
        orderIndex: 3,
      },
      {
        topicName: 'What Books and Burials Tell Us',
        subtopics: [
          'The Vedas and their significance as historical sources',
          'Vedic society: social divisions and occupations',
          'Megalithic burials and what they reveal about ancient people',
          'Inamgaon and other archaeological sites',
          'Comparison of literary and archaeological evidence',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the Vedas as historical documents; describe social life during the Vedic period; interpret megalithic burial evidence to draw conclusions about ancient societies.',
        orderIndex: 4,
      },
      {
        topicName: 'Kingdoms Kings and an Early Republic',
        subtopics: [
          'The rise of Janapadas and Mahajanapadas',
          'Magadha as a powerful kingdom: reasons for its rise',
          'Vajji: an early republic and its governance system',
          'Taxation and administration in ancient kingdoms',
          'Role of the army and fortified cities',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the formation of Janapadas and Mahajanapadas; compare monarchies and republics; understand the factors that led to the rise of Magadha.',
        orderIndex: 5,
      },
      {
        topicName: 'New Questions and Ideas',
        subtopics: [
          'Life and teachings of Gautama Buddha',
          'Life and teachings of Mahavira and Jainism',
          'The Upanishads and philosophical questioning',
          'Sangha and monasteries: Buddhist monastic life',
          'Spread of Buddhism and Jainism across India',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the life and core teachings of Buddha and Mahavira; explain the Upanishadic traditions; understand the growth of Buddhism and Jainism.',
        orderIndex: 6,
      },
      {
        topicName: 'Ashoka the Emperor Who Gave Up War',
        subtopics: [
          'The Mauryan Empire: Chandragupta, Bindusara, and Ashoka',
          'The Kalinga war and Ashoka\'s transformation',
          'Ashoka\'s dhamma and his edicts',
          'Administration of the Mauryan Empire',
          'Decline of the Mauryan Empire after Ashoka',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the history of the Mauryan dynasty; explain how the Kalinga war changed Ashoka; describe Ashoka\'s dhamma and its impact on governance.',
        orderIndex: 7,
      },
      {
        topicName: 'Vital Villages Thriving Towns',
        subtopics: [
          'Iron tools and their role in agriculture',
          'Village life: farmers, herders, and craft persons',
          'Growth of towns and trade centres',
          'Mathura, Varanasi, and other important towns',
          'Coins and inscriptions as evidence of trade',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand how iron tools transformed agriculture; describe village and town life; identify the role of trade and crafts in the growth of towns.',
        orderIndex: 8,
      },
      {
        topicName: 'Traders Kings and Pilgrims',
        subtopics: [
          'South Indian kingdoms: Cholas, Cheras, and Pandyas',
          'The Silk Route and long-distance trade',
          'Spread of Buddhism to China and Southeast Asia',
          'Pilgrims and their accounts: Fa Xian and Xuan Zang',
          'Maritime trade and the role of Indian Ocean routes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify major South Indian kingdoms; trace trade routes including the Silk Route; understand the role of pilgrims in spreading culture and religion.',
        orderIndex: 9,
      },
      {
        topicName: 'New Empires and Kingdoms',
        subtopics: [
          'The Gupta Empire: Samudragupta and Chandragupta II',
          'Prashastis and what they tell us about rulers',
          'Harshavardhana and his administration',
          'Pallavas and Chalukyas in South India',
          'Achievements in science, literature, and art during the Gupta period',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the achievements of the Gupta rulers; read and interpret prashastis; understand the political landscape of India under the Guptas, Harshavardhana, and the Pallavas.',
        orderIndex: 10,
      },
      {
        topicName: 'Buildings Paintings and Books',
        subtopics: [
          'Structural and rock-cut temples: Mahabalipuram, Aihole',
          'Stupas and their significance: Sanchi, Amaravati',
          'Paintings of Ajanta: themes and techniques',
          'Literary works: Kalidasa, Aryabhata, and other scholars',
          'Epics and Puranas: Mahabharata, Ramayana, and their retelling',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify different styles of temple architecture; appreciate Ajanta paintings; understand the contributions of ancient Indian scholars in literature, science, and mathematics.',
        orderIndex: 11,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 6 - Social Science (Geography)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'Social Science (Geography)',
    topics: [
      {
        topicName: 'The Earth in the Solar System',
        subtopics: [
          'Celestial bodies: stars, planets, satellites, asteroids, meteors',
          'The Sun and the Solar System: inner and outer planets',
          'The Earth as a unique planet: conditions supporting life',
          'The Moon: phases, eclipses, and Neil Armstrong\'s landing',
          'Constellations: Ursa Major, Orion, and the Pole Star',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify celestial bodies and their characteristics; describe the solar system; explain why Earth is unique among planets; recognise major constellations.',
        orderIndex: 1,
      },
      {
        topicName: 'Globe: Latitudes and Longitudes',
        subtopics: [
          'Globe as a model of the Earth: axis, poles, equator',
          'Latitudes: parallels, important latitudes (Tropics, Arctic and Antarctic Circles)',
          'Heat zones of the Earth: Torrid, Temperate, Frigid',
          'Longitudes: meridians, Prime Meridian, and International Date Line',
          'Time zones and the relationship between longitude and time',
        ],
        depthLevel: 2,
        learningObjectives:
          'Use a globe to locate the equator, tropics, and poles; understand latitudes and longitudes; explain the concept of time zones and heat zones.',
        orderIndex: 2,
      },
      {
        topicName: 'Motions of the Earth',
        subtopics: [
          'Rotation: the Earth spinning on its axis causing day and night',
          'Revolution: the Earth orbiting the Sun causing seasons',
          'Tilt of the Earth\'s axis and its impact on seasons',
          'Equinox and solstice: summer and winter',
          'Leap year and the calendar',
        ],
        depthLevel: 2,
        learningObjectives:
          'Differentiate between rotation and revolution; explain the causes of day and night, and seasons; understand the concepts of solstice and equinox.',
        orderIndex: 3,
      },
      {
        topicName: 'Maps',
        subtopics: [
          'Types of maps: physical, political, thematic',
          'Components of a map: title, scale, direction, symbols, legend',
          'Scale: large-scale and small-scale maps',
          'Compass directions and cardinal points',
          'Plan and sketch: drawing a simple map of a familiar area',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify types of maps and their uses; read and interpret map components; draw a simple plan of a known area using appropriate symbols and scale.',
        orderIndex: 4,
      },
      {
        topicName: 'Major Domains of the Earth',
        subtopics: [
          'Lithosphere: continents and their features',
          'Hydrosphere: oceans, seas, and water distribution',
          'Atmosphere: layers and composition',
          'Biosphere: interaction of land, water, and air supporting life',
          'Seven continents and five oceans: locations and key features',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the four major domains of the Earth; locate continents and oceans on a world map; understand how the biosphere integrates the other three domains.',
        orderIndex: 5,
      },
      {
        topicName: 'Major Landforms of the Earth',
        subtopics: [
          'Mountains: fold, block, and volcanic mountains',
          'Plateaus: Deccan Plateau, Tibetan Plateau, and their uses',
          'Plains: formation and importance for agriculture and settlement',
          'Landforms and people: how terrain affects human life',
          'Erosion and deposition as agents creating landforms',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify major landforms; explain the formation of mountains, plateaus, and plains; understand the relationship between landforms and human activities.',
        orderIndex: 6,
      },
      {
        topicName: 'Our Country India',
        subtopics: [
          'India\'s location: latitude, longitude, and neighbouring countries',
          'Political and administrative divisions: states and union territories',
          'Physical features: Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Islands',
          'Major rivers of India: Ganga, Brahmaputra, Godavari, Krishna',
          'India\'s size, extent, and standard meridian',
        ],
        depthLevel: 2,
        learningObjectives:
          'Locate India on the world map; identify states, union territories, and physical features; describe major river systems of India.',
        orderIndex: 7,
      },
      {
        topicName: 'India: Climate Vegetation and Wildlife',
        subtopics: [
          'Factors affecting India\'s climate: latitude, altitude, distance from sea',
          'Seasons of India: winter, summer, monsoon, retreating monsoon',
          'Natural vegetation types: tropical rainforest, deciduous, thorn, mangrove, alpine',
          'Wildlife of India: national parks, sanctuaries, and endangered species',
          'Conservation of forests and wildlife in India',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the factors affecting climate; describe seasons in India; identify types of natural vegetation and associated wildlife; appreciate the need for conservation.',
        orderIndex: 8,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 6 - Social Science (Civics)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'Social Science (Civics)',
    topics: [
      {
        topicName: 'Understanding Diversity',
        subtopics: [
          'India as a land of diversity: languages, religions, cultures, food',
          'Unity in diversity: festivals, national symbols',
          'Kerala and Ladakh as contrasting examples of diversity',
          'How diversity enriches our lives',
          'Prejudice and the need for respect across communities',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate India\'s cultural, linguistic, and geographical diversity; understand how diversity and unity coexist; develop respect for different ways of life.',
        orderIndex: 1,
      },
      {
        topicName: 'Diversity and Discrimination',
        subtopics: [
          'Prejudice, stereotype, and discrimination in daily life',
          'Caste-based discrimination and the struggle against it',
          'Contribution of B.R. Ambedkar to social justice',
          'Constitutional provisions for equality',
          'The difference between inequality and discrimination',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define prejudice, stereotype, and discrimination; understand caste discrimination and its effects; appreciate the constitutional values of equality and justice.',
        orderIndex: 2,
      },
      {
        topicName: 'What is Government',
        subtopics: [
          'Need for government and its functions',
          'Types of government: democracy and monarchy',
          'Levels of government: local, state, and central',
          'Democratic government: role of citizens and elections',
          'Laws and their importance in society',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain why government is necessary; differentiate between types of government; understand the role of citizens in a democracy and the importance of laws.',
        orderIndex: 3,
      },
      {
        topicName: 'Key Elements of a Democratic Government',
        subtopics: [
          'Participation of people through voting and elections',
          'Need to resolve conflict peacefully in a democracy',
          'Equality and justice as pillars of democracy',
          'Role of the opposition and debate in democracy',
          'South Africa\'s struggle for democracy and apartheid',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify key elements of democracy: participation, conflict resolution, equality; learn from the South African struggle for democracy and the role of Nelson Mandela.',
        orderIndex: 4,
      },
      {
        topicName: 'Panchayati Raj',
        subtopics: [
          'Three levels: Gram Panchayat, Panchayat Samiti, Zila Parishad',
          'Gram Sabha and its functions',
          'Role of the Sarpanch and elected members',
          'Local issues handled by Panchayati Raj',
          'Importance of decentralisation in governance',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the three-tier Panchayati Raj system; explain the functions of Gram Sabha and Gram Panchayat; understand decentralisation and local self-governance.',
        orderIndex: 5,
      },
      {
        topicName: 'Rural Administration',
        subtopics: [
          'Role of the Patwari in land records and revenue',
          'Role of the police in maintaining law and order',
          'How disputes are settled in rural areas',
          'The tehsildar and the role of district administration',
          'Filing an FIR and the process of justice in rural settings',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the roles of Patwari, police, and tehsildar in rural administration; explain how disputes are resolved and law is maintained in villages.',
        orderIndex: 6,
      },
      {
        topicName: 'Urban Administration',
        subtopics: [
          'Municipal Corporation and Municipal Council: structure and functions',
          'Services provided: water supply, sanitation, roads, street lighting',
          'How taxes fund urban services',
          'Role of the Commissioner and ward councillors',
          'Challenges of urban administration: planning, pollution, encroachment',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the structure and functions of urban local bodies; understand how tax revenue funds civic amenities; identify challenges in urban governance.',
        orderIndex: 7,
      },
      {
        topicName: 'Rural Livelihoods',
        subtopics: [
          'Farming as the main rural occupation: small and large farmers',
          'Agricultural labourers and their working conditions',
          'Non-farm activities: dairy, fishing, crafts, small businesses',
          'Challenges faced by rural workers: debt, low wages, drought',
          'Government schemes for rural employment',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify the main occupations in rural India; understand the challenges faced by farmers and labourers; learn about non-farm livelihood activities.',
        orderIndex: 8,
      },
      {
        topicName: 'Urban Livelihoods',
        subtopics: [
          'Employment in the organised sector: factories, offices, government',
          'Employment in the unorganised sector: street vendors, domestic workers',
          'Self-employment and small businesses',
          'Differences between permanent and casual workers',
          'Challenges of urban livelihood: cost of living, housing, job security',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare organised and unorganised sectors of urban employment; identify various urban livelihoods; understand the challenges faced by urban workers.',
        orderIndex: 9,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 6 - English
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'English',
    topics: [
      {
        topicName: 'Who Did Patrick\'s Homework',
        subtopics: [
          'Reading comprehension: understanding the narrative and characters',
          'Vocabulary building: difficult words and their meanings',
          'Grammar focus: sentence types and punctuation',
          'Creative writing: imagining a magical helper',
          'Moral of the story: the importance of doing your own work',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a fantasy narrative; identify characters and sequence of events; discuss the moral lesson about self-reliance and hard work.',
        orderIndex: 1,
      },
      {
        topicName: 'How the Dog Found Himself a New Master',
        subtopics: [
          'Reading the story and understanding the plot',
          'Vocabulary: words related to animals and strength',
          'Grammar focus: nouns and pronouns',
          'Discussion on loyalty and the food chain of power',
          'Retelling the story in own words',
        ],
        depthLevel: 2,
        learningObjectives:
          'Comprehend the narrative about a dog\'s search for the strongest master; identify nouns and pronouns; discuss themes of power and loyalty.',
        orderIndex: 2,
      },
      {
        topicName: 'Taro\'s Reward',
        subtopics: [
          'Reading comprehension of a Japanese folk tale',
          'Character analysis: Taro, his parents, and the neighbours',
          'Vocabulary: words related to nature and kindness',
          'Grammar focus: past tense verbs',
          'Writing: a paragraph about respecting elders',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and understand a folk tale; analyse characters and their motivations; use past tense correctly; appreciate the values of filial devotion and kindness.',
        orderIndex: 3,
      },
      {
        topicName: 'An Indian-American Woman in Space: Kalpana Chawla',
        subtopics: [
          'Reading a biographical narrative',
          'Vocabulary related to space exploration and careers',
          'Grammar focus: adjectives and describing words',
          'Discussion on determination and achieving dreams',
          'Writing: a short biography of an inspiring person',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a biography; build vocabulary related to space; use adjectives effectively; draw inspiration from Kalpana Chawla\'s life and achievements.',
        orderIndex: 4,
      },
      {
        topicName: 'A Different Kind of School',
        subtopics: [
          'Reading about an inclusive school experience',
          'Vocabulary: words related to disability and empathy',
          'Grammar focus: verbs and tenses',
          'Discussion on empathy, inclusion, and understanding differences',
          'Writing: describing an ideal school',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the concept of experiential learning about disability; develop empathy; identify verbs and their tenses in context; write about an ideal school.',
        orderIndex: 5,
      },
      {
        topicName: 'Who I Am',
        subtopics: [
          'Reading about different children and their identities',
          'Vocabulary: feelings, hobbies, and personality traits',
          'Grammar focus: first person narrative and pronouns',
          'Self-expression through writing about oneself',
          'Listening and speaking: introducing yourself',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read narratives of self-expression; build vocabulary of emotions and personality; write a self-introduction using first person narrative.',
        orderIndex: 6,
      },
      {
        topicName: 'Fair Play',
        subtopics: [
          'Reading comprehension of a story about justice and fairness',
          'Character sketch of the main characters',
          'Vocabulary: words related to justice and dispute resolution',
          'Grammar focus: conjunctions and connecting sentences',
          'Discussion on fairness and conflict resolution',
        ],
        depthLevel: 2,
        learningObjectives:
          'Comprehend a narrative on fair play; analyse characters and themes; use conjunctions to connect ideas; discuss justice and integrity.',
        orderIndex: 7,
      },
      {
        topicName: 'A Game of Chance',
        subtopics: [
          'Reading the story set in a village fair',
          'Understanding irony and humour in the narrative',
          'Vocabulary: words related to fairs and games',
          'Grammar focus: direct and indirect speech introduction',
          'Writing: a narrative about a visit to a fair',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and enjoy a humorous narrative; identify irony in a story; build vocabulary related to fairs; begin learning direct and indirect speech.',
        orderIndex: 8,
      },
      {
        topicName: 'Desert Animals',
        subtopics: [
          'Reading an informational text about desert animals',
          'Vocabulary: desert ecosystem and animal adaptations',
          'Grammar focus: prepositions and articles',
          'Understanding how animals adapt to extreme environments',
          'Writing: a factual paragraph about a desert animal',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and extract information from a non-fiction text; understand animal adaptations in deserts; use prepositions and articles correctly.',
        orderIndex: 9,
      },
      {
        topicName: 'The Banyan Tree',
        subtopics: [
          'Reading a descriptive narrative about a fight between a mongoose and a cobra',
          'Vocabulary: nature, wildlife, and action words',
          'Grammar focus: adverbs and descriptive writing',
          'Understanding the narrator\'s perspective',
          'Writing: a vivid description of a scene from nature',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and appreciate descriptive writing; identify adverbs and their use; narrate an event from an observer\'s point of view; describe nature vividly.',
        orderIndex: 10,
      },
      {
        topicName: 'Poetry: A House A Home',
        subtopics: [
          'Reading and reciting the poem with expression',
          'Difference between a house and a home',
          'Vocabulary: words related to family bonds and shelter',
          'Rhyme scheme and poetic devices',
          'Writing: a short poem about home',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem with correct rhythm; distinguish between material structure and emotional bonds; identify rhyme scheme and simple poetic devices.',
        orderIndex: 11,
      },
      {
        topicName: 'Poetry: The Kite',
        subtopics: [
          'Reading the poem and understanding imagery',
          'Vocabulary: words describing movement and flight',
          'Identifying similes and metaphors in the poem',
          'Rhyme and rhythm in poetry',
          'Creative writing: describing a kite in the sky',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and appreciate the poem\'s imagery; identify poetic devices such as simile and metaphor; describe movement using vivid language.',
        orderIndex: 12,
      },
      {
        topicName: 'Poetry: The Quarrel',
        subtopics: [
          'Reading the poem about sibling relationships',
          'Understanding the theme of conflict and reconciliation',
          'Vocabulary: words about emotions and arguments',
          'Grammar in poetry: identifying parts of speech',
          'Discussion on resolving disagreements',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite and understand the poem; discuss themes of quarrel and making up; identify parts of speech within poetic lines.',
        orderIndex: 13,
      },
      {
        topicName: 'Poetry: Beauty',
        subtopics: [
          'Reading the poem about finding beauty in nature and actions',
          'Understanding the poet\'s perspective on beauty',
          'Vocabulary: sensory words describing beauty',
          'Poetic devices: repetition and imagery',
          'Writing: a paragraph on what beauty means to you',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate the poem\'s message about beauty in everyday life; identify imagery and repetition as poetic devices; express personal views on beauty.',
        orderIndex: 14,
      },
      {
        topicName: 'Poetry: Where Do All the Teachers Go',
        subtopics: [
          'Reading a humorous poem about teachers\' lives outside school',
          'Understanding humour and curiosity in poetry',
          'Vocabulary: everyday activities and school life',
          'Rhyme scheme analysis',
          'Writing: imagining a teacher\'s day after school',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and enjoy a humorous poem; understand the child\'s curious perspective; analyse rhyme scheme; write creatively about teachers\' lives.',
        orderIndex: 15,
      },
      {
        topicName: 'Poetry: The Wonderful Words',
        subtopics: [
          'Reading the poem about the power of words and language',
          'Understanding the importance of expressing thoughts',
          'Vocabulary: words about communication and expression',
          'Poetic devices: personification and alliteration',
          'Discussion on the power of language and communication',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate the value of words and self-expression; identify personification and alliteration; discuss the importance of articulating thoughts clearly.',
        orderIndex: 16,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 6 - Hindi (Vasant)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 6,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Vah Chidiya Jo',
        subtopics: [
          'Poem recitation with correct pronunciation and rhythm',
          'Understanding the imagery of a small bird in nature',
          'Vocabulary: nature, birds, and descriptive words in Hindi',
          'Poetic devices: anupras alankar (alliteration)',
          'Creative writing: describing a bird in Hindi',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem with expression; understand the symbolism of the bird; identify poetic devices; build Hindi vocabulary related to nature.',
        orderIndex: 1,
      },
      {
        topicName: 'Bachpan',
        subtopics: [
          'Reading a memoir about childhood experiences',
          'Vocabulary: words related to childhood, nostalgia, and daily life',
          'Grammar: visheshan (adjectives) and their use',
          'Discussion on the importance of childhood memories',
          'Writing: a short essay about one\'s own childhood',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a prose piece on childhood; use adjectives in Hindi; express personal childhood memories through writing.',
        orderIndex: 2,
      },
      {
        topicName: 'Nadan Dost',
        subtopics: [
          'Reading a story about innocent friendship and curiosity',
          'Character analysis of the young protagonists',
          'Vocabulary: words related to animals, empathy, and childhood',
          'Grammar: kriya (verbs) and kaal (tense)',
          'Moral discussion: sensitivity towards living creatures',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and understand a moral story; analyse characters; identify verbs and tenses in Hindi; develop sensitivity towards animals.',
        orderIndex: 3,
      },
      {
        topicName: 'Chand se Thodi Si Gappe',
        subtopics: [
          'Reading a humorous poem about talking to the moon',
          'Understanding personification in Hindi poetry',
          'Vocabulary: celestial bodies and imaginative expressions',
          'Poetic devices: manavikarana (personification) and upama (simile)',
          'Creative writing: an imaginary conversation with a celestial object',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem; appreciate humour and imagination in poetry; identify personification and simile; write an imaginative conversation.',
        orderIndex: 4,
      },
      {
        topicName: 'Aksharon Ka Mahatva',
        subtopics: [
          'Reading about the history and importance of the written script',
          'Evolution of writing from cave paintings to modern scripts',
          'Vocabulary: words related to language, writing, and communication',
          'Grammar: sangya (nouns) and their types',
          'Discussion on the power of literacy and education',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the evolution of writing systems; appreciate the importance of the written word; classify nouns in Hindi; discuss the value of literacy.',
        orderIndex: 5,
      },
      {
        topicName: 'Paar Nazar Ke',
        subtopics: [
          'Reading a story about imagination and looking beyond the obvious',
          'Vocabulary: words related to vision, perspective, and discovery',
          'Grammar: sarvanaam (pronouns) and their types',
          'Discussion on creative thinking and perspective',
          'Writing: a short narrative about discovering something unexpected',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and understand a story about imagination; use pronouns correctly in Hindi; discuss the importance of looking beyond appearances.',
        orderIndex: 6,
      },
      {
        topicName: 'Saathi Haath Badhana',
        subtopics: [
          'Reading a poem on unity and collective effort',
          'Understanding the message of teamwork and cooperation',
          'Vocabulary: words about togetherness, work, and community',
          'Grammar: vachan (number) and ling (gender) in Hindi',
          'Group discussion on the importance of cooperation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem on teamwork; understand its social message; practise vachan and ling in Hindi grammar; discuss the value of collective effort.',
        orderIndex: 7,
      },
      {
        topicName: 'Jhaanse ki Rani',
        subtopics: [
          'Reading the ballad about Rani Lakshmibai of Jhansi',
          'Historical context: the revolt of 1857',
          'Vocabulary: words related to bravery, war, and patriotism',
          'Poetic devices: veer ras (heroic sentiment) in poetry',
          'Writing: a paragraph about a brave person from history',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and appreciate the ballad; understand its historical significance; identify veer ras; build vocabulary related to patriotism and courage.',
        orderIndex: 8,
      },
      {
        topicName: 'Ticket Album',
        subtopics: [
          'Reading a story about hobbies and collecting',
          'Vocabulary: words related to hobbies, travel, and friendship',
          'Grammar: kriya visheshan (adverbs) in Hindi',
          'Discussion on the joy of hobbies and stamp collecting',
          'Writing: describing one\'s favourite hobby in Hindi',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a narrative about hobbies; use adverbs in Hindi; express personal interests through writing.',
        orderIndex: 9,
      },
      {
        topicName: 'Vah Sabse Kathin Samay Tha',
        subtopics: [
          'Reading a poem about enduring difficult times',
          'Understanding themes of resilience and hope',
          'Vocabulary: words related to hardship, perseverance, and strength',
          'Grammar: samuchaya bodhak (conjunctions) in Hindi',
          'Discussion on overcoming challenges in life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and reflect on the poem; understand the themes of resilience and hope; use conjunctions in Hindi sentences; discuss personal experiences of overcoming difficulties.',
        orderIndex: 10,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - Mathematics
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Integers',
        subtopics: [
          'Properties of addition and subtraction of integers',
          'Multiplication of integers: rules for positive and negative numbers',
          'Division of integers and properties of division',
          'Properties of integers: closure, commutativity, associativity, distributivity',
          'Word problems involving operations on integers',
        ],
        depthLevel: 2,
        learningObjectives:
          'Perform all four operations on integers; apply properties of integers in computations; solve word problems involving integers in real-life contexts.',
        orderIndex: 1,
      },
      {
        topicName: 'Fractions and Decimals',
        subtopics: [
          'Multiplication of fractions: fraction by a whole number and by a fraction',
          'Division of fractions: reciprocal and division rules',
          'Multiplication of decimal numbers',
          'Division of decimal numbers by whole numbers and by decimals',
          'Word problems involving fractions and decimals',
        ],
        depthLevel: 2,
        learningObjectives:
          'Multiply and divide fractions and decimals fluently; apply operations on fractions and decimals to solve real-world problems.',
        orderIndex: 2,
      },
      {
        topicName: 'Data Handling',
        subtopics: [
          'Collection and organisation of data',
          'Mean, median, and mode of a data set',
          'Construction and interpretation of bar graphs',
          'Double bar graphs for comparison',
          'Probability: basic understanding of chance and outcomes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Calculate mean, median, and mode; construct and interpret bar graphs and double bar graphs; understand basic probability as a measure of chance.',
        orderIndex: 3,
      },
      {
        topicName: 'Simple Equations',
        subtopics: [
          'Setting up an equation from a word problem',
          'Solving equations by balancing method (transposing)',
          'Verification of solutions by substitution',
          'Equations with variables on both sides (introduction)',
          'Applications of simple equations in daily life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Formulate simple equations from verbal statements; solve equations using transposition; verify solutions by substitution; apply equations to real-life situations.',
        orderIndex: 4,
      },
      {
        topicName: 'Lines and Angles',
        subtopics: [
          'Complementary and supplementary angles',
          'Adjacent angles, linear pair, and vertically opposite angles',
          'Pairs of lines: intersecting and parallel lines with a transversal',
          'Angles formed by a transversal: corresponding, alternate interior, co-interior',
          'Properties of parallel lines cut by a transversal',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify complementary, supplementary, and vertically opposite angles; understand angles formed when a transversal cuts parallel lines; apply angle relationships to solve problems.',
        orderIndex: 5,
      },
      {
        topicName: 'The Triangle and its Properties',
        subtopics: [
          'Medians and altitudes of a triangle',
          'Angle sum property of a triangle (interior angles sum to 180 degrees)',
          'Exterior angle property of a triangle',
          'Inequalities in a triangle: sum of two sides greater than the third',
          'Right-angled triangles and the Pythagoras theorem',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify medians and altitudes; verify the angle sum property; apply the exterior angle property; use the Pythagoras theorem in right-angled triangles.',
        orderIndex: 6,
      },
      {
        topicName: 'Congruence of Triangles',
        subtopics: [
          'Congruence of plane figures and line segments',
          'Criteria for congruence: SSS, SAS, ASA, AAS, RHS',
          'Identifying congruent triangles from given information',
          'Applications of congruence in geometric proofs',
          'Congruence in real-life objects and patterns',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the concept of congruence; apply SSS, SAS, ASA, AAS, and RHS criteria to determine congruent triangles; use congruence to solve geometric problems.',
        orderIndex: 7,
      },
      {
        topicName: 'Comparing Quantities',
        subtopics: [
          'Ratio and proportion: revision and applications',
          'Converting fractions, decimals, and percentages',
          'Finding percentages: increase, decrease, and discount',
          'Profit and loss: cost price, selling price, and percentage calculations',
          'Simple interest: formula and word problems',
        ],
        depthLevel: 2,
        learningObjectives:
          'Convert between fractions, decimals, and percentages; calculate profit, loss, and discount; compute simple interest using the formula.',
        orderIndex: 8,
      },
      {
        topicName: 'Rational Numbers',
        subtopics: [
          'Introduction to rational numbers as p/q where q is not zero',
          'Positive and negative rational numbers',
          'Representation of rational numbers on a number line',
          'Comparison and ordering of rational numbers',
          'Operations on rational numbers: addition, subtraction, multiplication, division',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define rational numbers; represent them on a number line; compare and order rational numbers; perform all four operations on rational numbers.',
        orderIndex: 9,
      },
      {
        topicName: 'Practical Geometry',
        subtopics: [
          'Construction of parallel lines using ruler and compass',
          'Construction of triangles given SSS measurements',
          'Construction of triangles given SAS measurements',
          'Construction of triangles given ASA measurements',
          'Construction of a right-angled triangle (RHS)',
        ],
        depthLevel: 2,
        learningObjectives:
          'Construct parallel lines; construct triangles using SSS, SAS, ASA, and RHS criteria with ruler, compass, and protractor.',
        orderIndex: 10,
      },
      {
        topicName: 'Perimeter and Area',
        subtopics: [
          'Area of a parallelogram and its derivation',
          'Area of a triangle from the area of a parallelogram',
          'Area of a circle using the formula pi r squared',
          'Circumference of a circle',
          'Conversion of units and real-life area and perimeter problems',
        ],
        depthLevel: 2,
        learningObjectives:
          'Derive and apply the area formulae for parallelograms, triangles, and circles; calculate circumference of a circle; solve real-life perimeter and area problems.',
        orderIndex: 11,
      },
      {
        topicName: 'Algebraic Expressions',
        subtopics: [
          'Terms, factors, and coefficients of an algebraic expression',
          'Like and unlike terms',
          'Addition and subtraction of algebraic expressions',
          'Finding the value of an expression by substitution',
          'Using algebraic expressions to write general rules and formulas',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify terms, factors, and coefficients; add and subtract algebraic expressions; evaluate expressions by substitution; formulate general rules using expressions.',
        orderIndex: 12,
      },
      {
        topicName: 'Exponents and Powers',
        subtopics: [
          'Introduction to exponents: base and power',
          'Laws of exponents: multiplication, division, power of a power',
          'Expressing large numbers in standard form (scientific notation)',
          'Comparing numbers written in exponential form',
          'Exponents with negative bases and special cases',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand and apply laws of exponents; express very large numbers in standard form; compare and compute with numbers in exponential notation.',
        orderIndex: 13,
      },
      {
        topicName: 'Symmetry',
        subtopics: [
          'Lines of symmetry in regular polygons',
          'Rotational symmetry: centre, angle, and order of rotation',
          'Figures with both line and rotational symmetry',
          'Symmetry in nature, architecture, and design',
          'Drawing symmetrical figures and finding order of symmetry',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify lines of symmetry in regular polygons; understand rotational symmetry and its order; recognise symmetry in real-world patterns and designs.',
        orderIndex: 14,
      },
      {
        topicName: 'Visualising Solid Shapes',
        subtopics: [
          'Faces, edges, and vertices of 3D shapes',
          'Nets of 3D shapes: cube, cuboid, cylinder, cone, pyramid',
          'Drawing oblique sketches and isometric sketches',
          'Viewing 3D objects from different perspectives: front, side, top',
          'Euler\'s formula for polyhedra: V - E + F = 2',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify faces, edges, and vertices of solids; draw nets and isometric sketches; visualise 3D shapes from different views; apply Euler\'s formula.',
        orderIndex: 15,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - Science
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'Science',
    topics: [
      {
        topicName: 'Nutrition in Plants',
        subtopics: [
          'Autotrophic nutrition: photosynthesis in green plants',
          'Raw materials for photosynthesis: carbon dioxide, water, sunlight, chlorophyll',
          'Heterotrophic plants: parasitic, insectivorous, and saprophytic',
          'Symbiotic relationships: lichens and leguminous plants with Rhizobium',
          'How nutrients are replenished in the soil',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain photosynthesis and its requirements; differentiate between autotrophic and heterotrophic nutrition in plants; understand symbiosis and nutrient cycling.',
        orderIndex: 1,
      },
      {
        topicName: 'Nutrition in Animals',
        subtopics: [
          'Different modes of feeding in animals',
          'Human digestive system: organs and their functions',
          'Digestion in the mouth, stomach, and small intestine',
          'Absorption of nutrients and egestion of waste',
          'Digestion in ruminants (grass-eating animals) and amoeba',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the human digestive system; explain the process of digestion, absorption, and egestion; compare digestion in humans, ruminants, and amoeba.',
        orderIndex: 2,
      },
      {
        topicName: 'Fibre to Fabric',
        subtopics: [
          'Animal fibres: wool from sheep and silk from silkworms',
          'Processing of wool: shearing, scouring, sorting, spinning',
          'Life cycle of the silkworm and silk production (sericulture)',
          'Occupational hazards in the wool and silk industry',
          'Properties of wool and silk as natural fibres',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the sources and processing of wool and silk; explain the life cycle of the silkworm; understand sericulture and the wool industry.',
        orderIndex: 3,
      },
      {
        topicName: 'Heat',
        subtopics: [
          'Temperature and its measurement using a thermometer',
          'Clinical thermometer vs laboratory thermometer',
          'Transfer of heat: conduction, convection, and radiation',
          'Conductors and insulators of heat',
          'Woollen clothes in winter: trapping air as an insulator',
        ],
        depthLevel: 2,
        learningObjectives:
          'Measure temperature correctly; differentiate between conduction, convection, and radiation; identify conductors and insulators of heat; explain everyday thermal phenomena.',
        orderIndex: 4,
      },
      {
        topicName: 'Acids Bases and Salts',
        subtopics: [
          'Indicators: litmus, turmeric, and China rose for testing acids and bases',
          'Natural and synthetic indicators',
          'Properties of acids and bases in everyday substances',
          'Neutralisation reaction: acid plus base gives salt and water',
          'Applications of neutralisation: antacids, soil treatment, factory waste',
        ],
        depthLevel: 2,
        learningObjectives:
          'Test substances using indicators; classify them as acidic, basic, or neutral; understand the neutralisation reaction and its practical applications.',
        orderIndex: 5,
      },
      {
        topicName: 'Physical and Chemical Changes',
        subtopics: [
          'Physical changes: no new substance formed, reversible',
          'Chemical changes: new substance formed, irreversible',
          'Examples: rusting, cooking, dissolving, burning, crystallisation',
          'Conditions for chemical changes: heat, light, electricity',
          'Galvanisation and crystallisation as useful chemical processes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Distinguish between physical and chemical changes; identify examples from daily life; understand rusting and its prevention; explain galvanisation and crystallisation.',
        orderIndex: 6,
      },
      {
        topicName: 'Weather Climate and Adaptations of Animals to Climate',
        subtopics: [
          'Weather vs climate: short-term and long-term conditions',
          'Elements of weather: temperature, humidity, rainfall, wind',
          'Climate of different regions: polar, tropical, temperate',
          'Adaptations of animals in polar regions: polar bear, penguin',
          'Adaptations of animals in tropical rainforests: toucan, monkey, elephant',
        ],
        depthLevel: 2,
        learningObjectives:
          'Differentiate between weather and climate; describe adaptations of animals to polar and tropical climates; relate animal features to their habitats.',
        orderIndex: 7,
      },
      {
        topicName: 'Winds Storms and Cyclones',
        subtopics: [
          'Properties of air: air exerts pressure and expands on heating',
          'Wind currents: caused by uneven heating of the Earth',
          'Monsoon winds and their role in India\'s climate',
          'Thunderstorms, cyclones, and tornadoes: formation and effects',
          'Safety measures during storms and cyclones',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain how wind currents are formed; describe the formation of cyclones and thunderstorms; understand monsoon winds; follow safety measures during storms.',
        orderIndex: 8,
      },
      {
        topicName: 'Soil',
        subtopics: [
          'Soil profile: horizons (O, A, B, C, bedrock)',
          'Types of soil: sandy, clayey, loamy and their properties',
          'Soil and crops: which soil suits which crop',
          'Properties of soil: percolation rate, moisture content',
          'Soil erosion, conservation, and the role of organisms in soil formation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the soil profile and its layers; classify soil types; relate soil properties to their suitability for different crops; understand soil erosion and conservation.',
        orderIndex: 9,
      },
      {
        topicName: 'Respiration in Organisms',
        subtopics: [
          'Breathing vs respiration: mechanical and cellular processes',
          'Human respiratory system: nose, trachea, lungs, diaphragm',
          'Mechanism of breathing: inhalation and exhalation',
          'Aerobic and anaerobic respiration',
          'Breathing in other organisms: insects, earthworms, fish, plants',
        ],
        depthLevel: 2,
        learningObjectives:
          'Differentiate between breathing and respiration; describe the human respiratory system; compare aerobic and anaerobic respiration; explain how different organisms breathe.',
        orderIndex: 10,
      },
      {
        topicName: 'Transportation in Animals and Plants',
        subtopics: [
          'Human circulatory system: heart, blood vessels, blood',
          'Blood components: RBC, WBC, platelets, plasma',
          'Heartbeat, pulse, and blood pressure',
          'Excretory system: kidneys and removal of waste',
          'Transport of water and minerals in plants: xylem and phloem',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the circulatory and excretory systems in humans; understand blood composition; explain transport of water, minerals, and food in plants.',
        orderIndex: 11,
      },
      {
        topicName: 'Reproduction in Plants',
        subtopics: [
          'Vegetative propagation: stems, roots, leaves, and artificial methods',
          'Budding and fragmentation in simple organisms',
          'Sexual reproduction in flowering plants: pollination and fertilisation',
          'Parts of a flower: stamen, pistil, petals, sepals',
          'Seed formation, seed dispersal, and germination',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe modes of asexual reproduction in plants; explain pollination, fertilisation, and seed formation; understand seed dispersal methods.',
        orderIndex: 12,
      },
      {
        topicName: 'Motion and Time',
        subtopics: [
          'Slow and fast motion: speed as distance divided by time',
          'Units of speed: m/s and km/h and conversion between them',
          'Uniform and non-uniform motion',
          'Distance-time graphs for uniform motion',
          'Measurement of time: simple pendulum, sundial, clocks',
        ],
        depthLevel: 2,
        learningObjectives:
          'Calculate speed; distinguish between uniform and non-uniform motion; plot and interpret distance-time graphs; understand time measurement devices.',
        orderIndex: 13,
      },
      {
        topicName: 'Electric Current and its Effects',
        subtopics: [
          'Symbols used in circuit diagrams',
          'Heating effect of electric current: applications in fuse, heater, iron',
          'Magnetic effect of electric current: electromagnet',
          'Making an electromagnet and its uses: electric bell, crane',
          'Electric fuse as a safety device',
        ],
        depthLevel: 2,
        learningObjectives:
          'Draw circuit diagrams using standard symbols; explain the heating and magnetic effects of electric current; construct an electromagnet; understand the role of a fuse.',
        orderIndex: 14,
      },
      {
        topicName: 'Light',
        subtopics: [
          'Reflection of light: laws of reflection',
          'Plane mirrors: image formation, lateral inversion',
          'Spherical mirrors: concave and convex mirrors and their uses',
          'Real and virtual images',
          'Sunlight and the visible spectrum: dispersion through a prism',
        ],
        depthLevel: 2,
        learningObjectives:
          'State and apply the laws of reflection; describe image formation by plane and spherical mirrors; understand dispersion of white light through a prism.',
        orderIndex: 15,
      },
      {
        topicName: 'Water: A Precious Resource',
        subtopics: [
          'Distribution of water on Earth: freshwater vs saltwater',
          'Forms of water: solid, liquid, gas in the water cycle',
          'Groundwater: water table, depletion, and recharge',
          'Effect of increasing population on water availability',
          'Water management: rainwater harvesting, drip irrigation, conservation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the distribution of water; describe the water table and its depletion; explain methods of water conservation including rainwater harvesting.',
        orderIndex: 16,
      },
      {
        topicName: 'Forests: Our Lifeline',
        subtopics: [
          'Forest ecosystem: canopy, understory, and forest floor',
          'Role of forests: oxygen production, habitat, soil conservation',
          'Interdependence of plants and animals in a forest',
          'Decomposers and nutrient recycling in forests',
          'Deforestation and its impact; conservation efforts',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the structure of a forest ecosystem; explain the importance of forests for climate, soil, and biodiversity; understand the impact of deforestation.',
        orderIndex: 17,
      },
      {
        topicName: 'Wastewater Story',
        subtopics: [
          'Sewage and wastewater: sources and contaminants',
          'Wastewater treatment plant (WWTP): processes and stages',
          'Sanitation and hygiene: importance of proper waste disposal',
          'Alternative sewerage arrangements: on-site systems',
          'Individual responsibility in maintaining clean water systems',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the journey of wastewater from homes to treatment plants; describe the stages of wastewater treatment; appreciate the importance of sanitation and personal hygiene.',
        orderIndex: 18,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - Social Science (History)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'Social Science (History)',
    topics: [
      {
        topicName: 'Tracing Changes Through a Thousand Years',
        subtopics: [
          'New and old terminologies: use of historical terms over time',
          'Historians and their sources: manuscripts, coins, inscriptions, chronicles',
          'Changes in maps and cartography from the medieval period',
          'Jatis, social hierarchies, and the changing nature of communities',
          'The role of archives and libraries in preserving history',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand how historians trace changes over centuries; identify different types of medieval sources; appreciate how terminology and social structures evolved.',
        orderIndex: 1,
      },
      {
        topicName: 'New Kings and Kingdoms',
        subtopics: [
          'The emergence of new dynasties: Rajputs, Cholas, and others',
          'Administration and revenue systems of medieval kingdoms',
          'Prashastis and land grants as sources of information',
          'The Chola kingdom: administration, temple building, and irrigation',
          'Warfare, diplomacy, and the expansion of kingdoms',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the rise of new dynasties in the medieval period; explain the administration of the Chola kingdom; analyse prashastis as historical sources.',
        orderIndex: 2,
      },
      {
        topicName: 'The Delhi Sultans',
        subtopics: [
          'Establishment of the Delhi Sultanate: the Slave, Khilji, Tughlaq, Sayyid, and Lodi dynasties',
          'Administration under the Sultans: iqta system, taxation, and military',
          'Alauddin Khilji\'s market reforms and expansion',
          'Muhammad bin Tughlaq\'s administrative experiments',
          'Impact of the Delhi Sultanate on Indian culture and society',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the history of the Delhi Sultanate through five dynasties; understand the iqta system; evaluate the policies of Alauddin Khilji and Muhammad bin Tughlaq.',
        orderIndex: 3,
      },
      {
        topicName: 'The Mughal Empire',
        subtopics: [
          'Establishment of the Mughal dynasty: Babur and the Battle of Panipat',
          'Akbar\'s policies: Mansabdari system, Sulh-i-kul, Din-i-Ilahi',
          'Mughal administration: revenue collection, provincial governance',
          'Jahangir, Shah Jahan, and Aurangzeb: expansion and challenges',
          'Art, architecture, and culture under the Mughals',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the rise and expansion of the Mughal Empire; analyse Akbar\'s administrative innovations; understand the cultural achievements of the Mughal period.',
        orderIndex: 4,
      },
      {
        topicName: 'Rulers and Buildings',
        subtopics: [
          'Engineering skills and construction techniques in the medieval period',
          'Temple architecture: Rajarajeshwara temple and other Chola temples',
          'Indo-Islamic architecture: mosques, tombs, forts, and gardens',
          'Mughal architecture: Taj Mahal, Red Fort, Fatehpur Sikri',
          'Gardens, water systems, and urban planning in medieval India',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate the engineering and architectural achievements of medieval India; compare Hindu temple and Indo-Islamic architectural styles; identify iconic Mughal structures.',
        orderIndex: 5,
      },
      {
        topicName: 'Towns Traders and Craftspersons',
        subtopics: [
          'Growth of towns: administrative, temple, and trade towns',
          'Trade routes and trading communities in medieval India',
          'Handicrafts and craft production: textiles, metalwork, pottery',
          'Hampi, Masulipatnam, and Surat as important trade centres',
          'Role of guilds and merchant associations',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the growth of different types of towns; identify major trade routes and centres; understand the role of craftspersons and traders in the medieval economy.',
        orderIndex: 6,
      },
      {
        topicName: 'Tribes Nomads and Settled Communities',
        subtopics: [
          'Tribal societies in India: Gonds, Ahoms, Bhils',
          'Nomadic pastoralists and their way of life',
          'Interaction between tribal and settled communities',
          'The Ahom kingdom in Assam: administration and culture',
          'Changes in tribal societies during the medieval period',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the social and political organisation of tribal societies; explain the relationship between nomadic and settled communities; study the Ahom and Gond kingdoms.',
        orderIndex: 7,
      },
      {
        topicName: 'Devotional Paths to the Divine',
        subtopics: [
          'The Bhakti movement: origin, philosophy, and spread',
          'Saints of the Bhakti tradition: Kabir, Mirabai, Guru Nanak, Tulsidas',
          'Sufi movement: orders, beliefs, and practices',
          'Impact of Bhakti and Sufi movements on Indian society',
          'Composite culture: interaction between different religious traditions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the Bhakti and Sufi movements; identify key saints and their teachings; appreciate the role of devotional traditions in fostering social harmony.',
        orderIndex: 8,
      },
      {
        topicName: 'The Making of Regional Cultures',
        subtopics: [
          'Development of regional languages and literature',
          'Kathak, Bharatanatyam, and other classical dance forms',
          'Miniature painting traditions: Rajasthani, Pahari, Mughal',
          'Regional festivals and their historical roots',
          'Bengal, Rajasthan, and Kerala as examples of distinct regional cultures',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand how regional cultures developed; identify regional art, dance, and literary traditions; appreciate the diversity of cultural expression across India.',
        orderIndex: 9,
      },
      {
        topicName: 'Eighteenth-Century Political Formations',
        subtopics: [
          'Decline of the Mughal Empire after Aurangzeb',
          'Rise of autonomous states: Awadh, Hyderabad, Bengal',
          'The Maratha Empire: Shivaji, Peshwas, and expansion',
          'The Sikh Empire and Jat kingdoms',
          'Entry of European trading companies and their political ambitions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the causes of the decline of the Mughal Empire; describe the emergence of successor states; understand the rise of the Marathas and the beginnings of European influence.',
        orderIndex: 10,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - Social Science (Geography)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'Social Science (Geography)',
    topics: [
      {
        topicName: 'Environment',
        subtopics: [
          'Components of the environment: natural (lithosphere, hydrosphere, atmosphere, biosphere) and human-made',
          'Interaction between natural and human environment',
          'Ecosystem: biotic and abiotic components',
          'Balance in nature and human impact on the environment',
          'Environmental degradation and the need for conservation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define environment and its components; explain the interaction between natural and human environments; understand the concept of an ecosystem and the need for environmental balance.',
        orderIndex: 1,
      },
      {
        topicName: 'Inside Our Earth',
        subtopics: [
          'Interior of the Earth: crust, mantle, and core',
          'Types of rocks: igneous, sedimentary, and metamorphic',
          'Rock cycle: transformation of one rock type to another',
          'Minerals and their classification',
          'Fossils and what they tell us about Earth\'s history',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the layers of the Earth; classify rocks into igneous, sedimentary, and metamorphic; explain the rock cycle; understand the significance of minerals and fossils.',
        orderIndex: 2,
      },
      {
        topicName: 'Our Changing Earth',
        subtopics: [
          'Endogenic forces: earthquakes and volcanoes',
          'Lithospheric plates and plate tectonics',
          'Exogenic forces: weathering, erosion, and deposition',
          'Work of rivers: waterfalls, meanders, ox-bow lakes, deltas',
          'Work of wind and sea waves: sand dunes, sea arches, stacks',
        ],
        depthLevel: 2,
        learningObjectives:
          'Differentiate between endogenic and exogenic forces; explain how earthquakes and volcanoes occur; describe landforms created by rivers, wind, and sea waves.',
        orderIndex: 3,
      },
      {
        topicName: 'Air',
        subtopics: [
          'Composition of the atmosphere: nitrogen, oxygen, carbon dioxide, and other gases',
          'Structure of the atmosphere: troposphere, stratosphere, mesosphere, thermosphere, exosphere',
          'Weather and climate: temperature, air pressure, wind, humidity, rainfall',
          'Types of rainfall: convectional, orographic, cyclonic',
          'Air pollution: causes, effects, and prevention',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the composition and structure of the atmosphere; explain the factors affecting weather and climate; identify types of rainfall; understand air pollution and its impact.',
        orderIndex: 4,
      },
      {
        topicName: 'Water',
        subtopics: [
          'Distribution of water on Earth: oceans, ice caps, groundwater, freshwater',
          'Ocean circulation: waves, tides, and currents',
          'Tides: causes and types (spring and neap tides)',
          'Ocean currents: warm and cold currents and their effects on climate',
          'Water cycle and the importance of conserving water',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the distribution of water on Earth; explain waves, tides, and ocean currents; describe the water cycle; appreciate the importance of water conservation.',
        orderIndex: 5,
      },
      {
        topicName: 'Natural Vegetation and Wildlife',
        subtopics: [
          'Factors affecting natural vegetation: temperature, moisture, slope, soil',
          'Vegetation types: tropical evergreen, tropical deciduous, temperate, coniferous, tundra',
          'Grasslands of the world: tropical and temperate',
          'Wildlife associated with different vegetation zones',
          'Conservation of natural vegetation and wildlife',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify factors affecting vegetation; describe major vegetation types of the world; relate wildlife to vegetation zones; understand the need for conservation.',
        orderIndex: 6,
      },
      {
        topicName: 'Human Environment – Settlement Transport and Communication',
        subtopics: [
          'Types of settlements: rural and urban; compact and scattered',
          'Factors affecting the location of settlements',
          'Modes of transport: land, water, air and their development',
          'Means of communication: personal and mass communication',
          'Impact of information technology on communication and transport',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify settlements as rural or urban; describe the development of different modes of transport; understand the evolution of communication systems.',
        orderIndex: 7,
      },
      {
        topicName: 'Human Environment Interactions: The Tropical and the Subtropical Region',
        subtopics: [
          'Life in the Amazon basin: climate, vegetation, and tribal communities',
          'Economy of the Amazon region: cultivation, fishing, and deforestation concerns',
          'Life in the Ganga-Brahmaputra basin: population, agriculture, and culture',
          'Economy of the Ganga-Brahmaputra region: farming, industry, tourism',
          'Environmental challenges in tropical and subtropical regions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare life in the Amazon and Ganga-Brahmaputra basins; describe the interaction between humans and their tropical environment; understand the challenges of deforestation and development.',
        orderIndex: 8,
      },
      {
        topicName: 'Life in the Deserts',
        subtopics: [
          'Hot deserts: Sahara Desert — climate, flora, fauna, and human life',
          'Occupations in the Sahara: nomadic herding, trade, oasis farming',
          'Cold deserts: Ladakh — climate, flora, fauna, and human life',
          'Occupations in Ladakh: farming, herding, tourism',
          'Adaptations of humans, animals, and plants in desert environments',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare hot and cold deserts; describe human life in the Sahara and Ladakh; understand how people, animals, and plants adapt to desert conditions.',
        orderIndex: 9,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - Social Science (Civics)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'Social Science (Civics)',
    topics: [
      {
        topicName: 'On Equality',
        subtopics: [
          'Equality in Indian democracy: constitutional provisions',
          'Different forms of inequality: caste, religion, gender, economic',
          'Article 14 and Article 15: Right to Equality',
          'Omprakash Valmiki\'s experience: inequality in practice',
          'Government measures to promote equality: reservations and schemes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the concept of equality as enshrined in the Constitution; identify different forms of inequality in Indian society; appreciate government efforts to promote equality.',
        orderIndex: 1,
      },
      {
        topicName: 'Role of the Government in Health',
        subtopics: [
          'Public and private healthcare in India',
          'Differences between public health centres and private hospitals',
          'Healthcare as a fundamental right',
          'Issues in healthcare: access, cost, and quality in rural and urban areas',
          'Government initiatives for public health: immunisation, sanitation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare public and private healthcare systems; understand the government\'s responsibility in providing healthcare; identify challenges in ensuring health for all.',
        orderIndex: 2,
      },
      {
        topicName: 'How the State Government Works',
        subtopics: [
          'Structure of state government: Legislative Assembly, Governor, Chief Minister',
          'Process of forming a government: elections and majority',
          'Role of the Chief Minister and the Council of Ministers',
          'Relationship between the legislature and the executive',
          'Decision-making and debate in the Legislative Assembly',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the structure of state government; explain the process of government formation; understand the roles of the Governor, Chief Minister, and the Legislative Assembly.',
        orderIndex: 3,
      },
      {
        topicName: 'Growing Up as Boys and Girls',
        subtopics: [
          'Gender roles and stereotypes in families and society',
          'Differences in upbringing of boys and girls',
          'Women\'s work: household and paid labour',
          'Gender inequality in education and opportunities',
          'Efforts to promote gender equality in India',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recognise gender stereotypes and their impact; understand the unequal division of labour; appreciate efforts towards gender equality in Indian society.',
        orderIndex: 4,
      },
      {
        topicName: 'Women Change the World',
        subtopics: [
          'Women\'s contributions to social and political change in India',
          'The women\'s movement: suffrage, education, and legal rights',
          'Struggles against domestic violence and discrimination',
          'Women in education: historical barriers and progress',
          'Inspiring women leaders: Savitribai Phule, Pandita Ramabai, and others',
        ],
        depthLevel: 2,
        learningObjectives:
          'Learn about women who fought for equality and justice; understand the women\'s movement in India; appreciate the progress made in women\'s education and rights.',
        orderIndex: 5,
      },
      {
        topicName: 'Understanding Media',
        subtopics: [
          'Different forms of media: print, electronic, social media',
          'Role of media in a democracy: informing and shaping public opinion',
          'Media and money: advertising revenue and its influence',
          'Setting the agenda: how media decides what is newsworthy',
          'Media censorship and the importance of a free press',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify different forms of media; understand the role of media in democracy; analyse the influence of advertising on media; appreciate the importance of press freedom.',
        orderIndex: 6,
      },
      {
        topicName: 'Understanding Advertising',
        subtopics: [
          'How advertisements work: creating desire and brand identity',
          'Techniques of advertising: emotional appeal, celebrity endorsement',
          'Advertising and consumer rights',
          'Impact of advertising on personal choices and social values',
          'Building awareness: being a critical consumer of advertisements',
        ],
        depthLevel: 2,
        learningObjectives:
          'Analyse advertising techniques; understand how advertisements influence consumer behaviour; develop critical thinking about advertising claims.',
        orderIndex: 7,
      },
      {
        topicName: 'Markets Around Us',
        subtopics: [
          'Different types of markets: weekly, neighbourhood, shopping complex, online',
          'Chain of markets: from producer to consumer',
          'Role of wholesalers and retailers in the market chain',
          'Inequality in the market: rich and poor consumers',
          'How markets serve different sections of society',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify different types of markets; trace the journey of goods from producer to consumer; understand the role of intermediaries and market inequality.',
        orderIndex: 8,
      },
      {
        topicName: 'A Shirt in the Market',
        subtopics: [
          'The story of a shirt: from cotton farmer to consumer',
          'Exploitation in the supply chain: low wages for workers',
          'Role of middlemen, exporters, and multinational companies',
          'Fair trade and its importance for producers',
          'Government policies to protect workers and farmers',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the production chain of a garment; understand the exploitation faced by producers and workers; discuss fair trade and the need for equitable markets.',
        orderIndex: 9,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - English
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'English',
    topics: [
      {
        topicName: 'Three Questions',
        subtopics: [
          'Reading comprehension of a Leo Tolstoy adaptation',
          'Character analysis: the king, the hermit, the wounded man',
          'Vocabulary: words related to wisdom, advice, and priorities',
          'Grammar focus: adverbs and adverb phrases',
          'Discussion on the importance of the present moment and kindness',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and understand the moral story; analyse characters and their roles; identify adverbs; discuss the value of living in the present and helping others.',
        orderIndex: 1,
      },
      {
        topicName: 'A Gift of Chappals',
        subtopics: [
          'Reading a humorous story about children and empathy',
          'Vocabulary: words related to music, cats, and Indian household items',
          'Grammar focus: past continuous tense',
          'Understanding humour and generosity in the narrative',
          'Writing: a narrative about an act of generosity',
        ],
        depthLevel: 2,
        learningObjectives:
          'Comprehend a humorous narrative about children\'s kindness; use past continuous tense; appreciate empathy and generosity in everyday situations.',
        orderIndex: 2,
      },
      {
        topicName: 'Gopal and the Hilsa-fish',
        subtopics: [
          'Reading a comic-strip style story about wit and humour',
          'Understanding the narrative through dialogues and illustrations',
          'Vocabulary: words related to disguise, fish, and markets',
          'Grammar focus: sentence transformation (active to passive)',
          'Discussion on the power of wit and intelligence',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and enjoy a humorous folk tale; understand narrative through dialogue; practise active and passive voice transformation; discuss wit and problem-solving.',
        orderIndex: 3,
      },
      {
        topicName: 'The Ashes That Made Trees Bloom',
        subtopics: [
          'Reading a Japanese folk tale about kindness and greed',
          'Character contrast: the kind old couple vs the greedy neighbour',
          'Vocabulary: words related to nature, magic, and morality',
          'Grammar focus: conditional sentences',
          'Moral discussion: kindness rewarded and greed punished',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a folk tale with a moral; contrast character traits; use conditional sentences; reflect on the themes of honesty and greed.',
        orderIndex: 4,
      },
      {
        topicName: 'Quality',
        subtopics: [
          'Reading a story about craftsmanship and integrity by John Galsworthy',
          'Understanding the theme of dedication to one\'s craft',
          'Vocabulary: words related to shoemaking and craftsmanship',
          'Grammar focus: reported speech',
          'Discussion on quality versus quantity in the modern world',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate the value of craftsmanship and integrity; understand the impact of industrialisation on artisans; practise reported speech; discuss the meaning of quality.',
        orderIndex: 5,
      },
      {
        topicName: 'Expert Detectives',
        subtopics: [
          'Reading a mystery story about children investigating their neighbour',
          'Vocabulary: words related to investigation and suspicion',
          'Grammar focus: modals (can, could, may, might, should)',
          'Understanding observation skills and drawing conclusions',
          'Writing: a short mystery or detective story',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and follow a mystery narrative; build vocabulary of investigation; use modal verbs correctly; discuss the importance of observation and not jumping to conclusions.',
        orderIndex: 6,
      },
      {
        topicName: 'The Invention of Vita-Wonk',
        subtopics: [
          'Reading a Roald Dahl excerpt about a magical invention',
          'Understanding fantasy and imaginative writing',
          'Vocabulary: words related to science fiction, age, and invention',
          'Grammar focus: future tense and predictions',
          'Creative writing: inventing a magical potion or machine',
        ],
        depthLevel: 2,
        learningObjectives:
          'Enjoy a fantasy narrative by Roald Dahl; build vocabulary related to invention and aging; use future tense; write creatively about an imaginary invention.',
        orderIndex: 7,
      },
      {
        topicName: 'Fire: Friend and Foe',
        subtopics: [
          'Reading an informational text about fire and its dual nature',
          'Vocabulary: words related to combustion, fire safety, and elements',
          'Grammar focus: cause and effect sentences',
          'Understanding the science and history of fire',
          'Writing: a factual piece on fire safety measures',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a non-fiction text about fire; understand fire as both useful and dangerous; construct cause-and-effect sentences; write about fire safety.',
        orderIndex: 8,
      },
      {
        topicName: 'A Bicycle in Good Repair',
        subtopics: [
          'Reading a humorous narrative about bicycle repair gone wrong',
          'Understanding situational humour and irony',
          'Vocabulary: words related to bicycles and mechanical parts',
          'Grammar focus: imperative sentences and instructions',
          'Writing: a set of instructions for a simple task',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and appreciate humorous writing; identify irony and exaggeration; use imperative sentences; write clear step-by-step instructions.',
        orderIndex: 9,
      },
      {
        topicName: 'The Story of Cricket',
        subtopics: [
          'Reading about the history and evolution of cricket',
          'Vocabulary: sports terminology and historical vocabulary',
          'Grammar focus: comparative and superlative forms',
          'Understanding how cricket became a global sport from England to India',
          'Discussion on how sports reflect social and cultural history',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the history of cricket from its origins; build sports vocabulary; use comparative and superlative forms; understand the cultural significance of cricket.',
        orderIndex: 10,
      },
      {
        topicName: 'Poetry (Class 7 Collection)',
        subtopics: [
          'The Squirrel: reading and enjoying a poem about nature and observation',
          'The Rebel: understanding the concept of nonconformity through poetry',
          'The Shed: exploring mystery and fear in a poem',
          'Chivvy: analysing a humorous poem about adult instructions to children',
          'Trees: appreciating a poem about nature, freedom, and the environment',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read, recite, and interpret a selection of poems; identify themes of nature, rebellion, fear, and humour; analyse rhyme, rhythm, and poetic devices across multiple poems.',
        orderIndex: 11,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 7 - Hindi (Vasant)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 7,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Hum Panchhi Unmukt Gagan Ke',
        subtopics: [
          'Poem recitation about birds and freedom',
          'Understanding the symbolism of caged birds longing for freedom',
          'Vocabulary: words related to nature, freedom, and captivity',
          'Poetic devices: rupak alankar (metaphor) and upama (simile)',
          'Discussion on freedom and its value in human life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem with expression; understand the metaphor of caged birds for freedom; identify poetic devices; discuss the concept of freedom.',
        orderIndex: 1,
      },
      {
        topicName: 'Dadi Maa',
        subtopics: [
          'Reading a prose piece about the warmth of a grandmother',
          'Vocabulary: family relationships, traditions, and village life',
          'Grammar: visheshan (adjectives) and upsarg-pratyay (prefixes and suffixes)',
          'Character sketch of Dadi Maa',
          'Writing: a descriptive paragraph about a beloved family member',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a narrative about family bonds; build vocabulary of family and tradition; use adjectives and affixes in Hindi; write about family members.',
        orderIndex: 2,
      },
      {
        topicName: 'Himaalaay ki Betiyan',
        subtopics: [
          'Reading an essay personifying rivers as daughters of the Himalayas',
          'Vocabulary: geographical features, rivers, and nature',
          'Grammar: sangya ke bhed (types of nouns) and ling (gender)',
          'Understanding personification in Hindi prose',
          'Writing: an essay about a river or natural feature',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and appreciate an essay on rivers; understand personification in prose; classify nouns in Hindi; write descriptively about natural features.',
        orderIndex: 3,
      },
      {
        topicName: 'Kathaputli',
        subtopics: [
          'Reading a poem about a puppet desiring freedom from strings',
          'Understanding the deeper meaning: control and autonomy',
          'Vocabulary: words about puppetry, control, and self-will',
          'Poetic devices: prateek (symbolism) and vyangya (irony)',
          'Discussion on personal freedom and societal expectations',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite and interpret the poem; understand symbolism of the puppet; identify literary devices; discuss autonomy versus societal control.',
        orderIndex: 4,
      },
      {
        topicName: 'Miti Ki Sondh',
        subtopics: [
          'Reading a prose piece about the fragrance of wet soil and village memories',
          'Vocabulary: seasonal words, farming, and village atmosphere',
          'Grammar: kriya ke bhed (types of verbs) and kaal (tense)',
          'Understanding sensory imagery in Hindi prose',
          'Writing: a descriptive piece using sensory details about a place',
        ],
        depthLevel: 2,
        learningObjectives:
          'Comprehend a sensory prose piece; use sensory vocabulary in Hindi; classify verbs and tenses; write descriptively using sensory details.',
        orderIndex: 5,
      },
      {
        topicName: 'Rahim Ke Dohe',
        subtopics: [
          'Reading and understanding Rahim\'s couplets (dohe)',
          'Vocabulary: moral and philosophical vocabulary in Hindi',
          'Grammar: muhavare (idioms) and lokoktiyan (proverbs) in Hindi',
          'Understanding the moral and philosophical messages in dohe',
          'Writing: explaining the meaning of a doha in one\'s own words',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read, recite, and explain Rahim\'s couplets; understand moral teachings through poetry; learn Hindi idioms and proverbs; write interpretations of dohe.',
        orderIndex: 6,
      },
      {
        topicName: 'Papaharinii Gangaa',
        subtopics: [
          'Reading about the cultural and spiritual significance of the Ganga',
          'Vocabulary: religious, cultural, and environmental terms',
          'Grammar: samas (compound words) in Hindi',
          'Understanding the Ganga as a symbol in Indian culture',
          'Discussion on river pollution and conservation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read about the Ganga\'s significance; build cultural and environmental vocabulary; learn compound words in Hindi; discuss river conservation.',
        orderIndex: 7,
      },
      {
        topicName: 'Shaame Ek Kisaan',
        subtopics: [
          'Reading a poem about a farmer\'s evening and rural life',
          'Vocabulary: farming, nature, and evening imagery',
          'Poetic devices: chhayavaad (romanticism) and chitramayata (visual imagery)',
          'Understanding the portrayal of rural India in poetry',
          'Creative writing: a poem or paragraph about village life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem; appreciate the imagery of rural life; identify romantic and visual poetic devices; write creatively about village scenes.',
        orderIndex: 8,
      },
      {
        topicName: 'Chidiya ki Bacchi',
        subtopics: [
          'Reading a story about innocence and human-nature relationships',
          'Vocabulary: birds, innocence, and human emotions',
          'Grammar: vakya rachna (sentence construction) and viram chinh (punctuation)',
          'Character analysis and theme discussion',
          'Writing: a story involving an interaction with a bird or animal',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend the story; analyse characters and themes of innocence; practise sentence construction and punctuation in Hindi; write creatively.',
        orderIndex: 9,
      },
      {
        topicName: 'Apoorv Anubaav',
        subtopics: [
          'Reading about an extraordinary experience or adventure',
          'Vocabulary: adventure, surprise, and experiential words',
          'Grammar: vachya (voice) — kartri, karma, and bhav vachya',
          'Discussion on unique life experiences and their impact',
          'Writing: narrating a personal extraordinary experience',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and engage with an adventurous narrative; learn voice forms in Hindi grammar; discuss the impact of unique experiences; write about personal adventures.',
        orderIndex: 10,
      },
      {
        topicName: 'Raheem ke Dohe',
        subtopics: [
          'Additional couplets of Rahim with deeper philosophical themes',
          'Understanding themes of friendship, generosity, and worldly wisdom',
          'Vocabulary: abstract concepts and moral vocabulary in Hindi',
          'Grammar: alankar (figures of speech) revision and identification',
          'Writing: composing a short doha or moral verse in Hindi',
        ],
        depthLevel: 2,
        learningObjectives:
          'Deepen understanding of Rahim\'s poetry; explore philosophical themes; revise figures of speech in Hindi; attempt composing moral verses.',
        orderIndex: 11,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - Mathematics
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Rational Numbers',
        subtopics: [
          'Properties of rational numbers: closure, commutativity, associativity',
          'Role of zero (additive identity) and one (multiplicative identity)',
          'Additive inverse and multiplicative inverse of rational numbers',
          'Representation of rational numbers on a number line',
          'Finding rational numbers between two given rational numbers',
        ],
        depthLevel: 2,
        learningObjectives:
          'Apply properties of rational numbers; find additive and multiplicative inverses; represent and locate rational numbers on a number line; find rational numbers between any two rational numbers.',
        orderIndex: 1,
      },
      {
        topicName: 'Linear Equations in One Variable',
        subtopics: [
          'Solving equations with variables on both sides',
          'Reducing equations to simpler form by cross-multiplication',
          'Equations reducible to the linear form',
          'Applications of linear equations to word problems',
          'Verification of solutions in the original equation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Solve linear equations with variables on both sides; simplify and reduce complex equations to linear form; apply linear equations to age, number, and perimeter problems.',
        orderIndex: 2,
      },
      {
        topicName: 'Understanding Quadrilaterals',
        subtopics: [
          'Polygons: classification by number of sides and convexity',
          'Sum of angles of a polygon: interior and exterior angle sum property',
          'Properties of parallelogram, rectangle, square, rhombus, and trapezium',
          'Diagonal properties of special quadrilaterals',
          'Solving problems using properties of quadrilaterals',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify quadrilaterals based on their properties; apply angle sum properties of polygons; use properties of special quadrilaterals to solve problems.',
        orderIndex: 3,
      },
      {
        topicName: 'Practical Geometry',
        subtopics: [
          'Constructing a quadrilateral given four sides and one diagonal',
          'Constructing a quadrilateral given two diagonals and three sides',
          'Constructing a quadrilateral given two adjacent sides and three angles',
          'Constructing a quadrilateral given three sides and two included angles',
          'Special cases: constructing squares, rectangles, and rhombuses',
        ],
        depthLevel: 2,
        learningObjectives:
          'Construct quadrilaterals given different combinations of sides, angles, and diagonals using ruler, compass, and protractor.',
        orderIndex: 4,
      },
      {
        topicName: 'Data Handling',
        subtopics: [
          'Organising data in frequency distribution tables',
          'Constructing and interpreting histograms',
          'Constructing and interpreting pie charts (circle graphs)',
          'Calculating central angle for pie chart sectors',
          'Probability: experimental and theoretical; outcomes and events',
        ],
        depthLevel: 2,
        learningObjectives:
          'Organise data using frequency tables; draw and interpret histograms and pie charts; calculate experimental probability of simple events.',
        orderIndex: 5,
      },
      {
        topicName: 'Squares and Square Roots',
        subtopics: [
          'Properties of perfect squares and patterns in square numbers',
          'Finding square roots by prime factorisation',
          'Finding square roots by long division method',
          'Square roots of decimals and fractions',
          'Estimating square roots of non-perfect squares',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify perfect squares and their properties; find square roots using prime factorisation and long division; estimate square roots of non-perfect squares.',
        orderIndex: 6,
      },
      {
        topicName: 'Cubes and Cube Roots',
        subtopics: [
          'Perfect cubes and patterns in cube numbers',
          'Finding cube roots by prime factorisation',
          'Cube roots of negative numbers',
          'Relationship between cubes and cube roots',
          'Estimating cubes and cube roots',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify perfect cubes; find cube roots by prime factorisation; compute cube roots of negative numbers; estimate cube roots.',
        orderIndex: 7,
      },
      {
        topicName: 'Comparing Quantities',
        subtopics: [
          'Revision of ratios, percentages, profit and loss',
          'Discount: marked price, selling price, and discount percentage',
          'Sales tax and value added tax (VAT) calculations',
          'Compound interest: formula and comparison with simple interest',
          'Applications of compound interest: banking and investment',
        ],
        depthLevel: 2,
        learningObjectives:
          'Calculate discount, sales tax, and VAT; derive and apply the compound interest formula; compare simple and compound interest; solve practical financial problems.',
        orderIndex: 8,
      },
      {
        topicName: 'Algebraic Expressions and Identities',
        subtopics: [
          'Terms, factors, coefficients; monomials, binomials, trinomials, polynomials',
          'Addition and subtraction of algebraic expressions',
          'Multiplication of algebraic expressions: monomial by polynomial',
          'Standard algebraic identities: (a+b)^2, (a-b)^2, (a+b)(a-b), (x+a)(x+b)',
          'Applications of identities in simplification and factorisation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify algebraic expressions; perform operations on them; derive and apply standard algebraic identities for simplification and problem-solving.',
        orderIndex: 9,
      },
      {
        topicName: 'Visualising Solid Shapes',
        subtopics: [
          'Views of 3D shapes: front, side, and top views',
          'Mapping 3D objects to 2D representations',
          'Euler\'s formula for polyhedra: F + V - E = 2',
          'Cross-sections of solid shapes',
          'Identifying and drawing nets of prisms, pyramids, cylinders, and cones',
        ],
        depthLevel: 2,
        learningObjectives:
          'Draw and identify different views of 3D shapes; verify Euler\'s formula; identify cross-sections; relate 3D shapes to their 2D nets.',
        orderIndex: 10,
      },
      {
        topicName: 'Mensuration',
        subtopics: [
          'Area of trapezium, general quadrilateral, and special quadrilaterals',
          'Area of a polygon by splitting into triangles and trapeziums',
          'Surface area of cube, cuboid, and cylinder',
          'Volume of cube, cuboid, and cylinder',
          'Conversion of units and real-life mensuration problems',
        ],
        depthLevel: 2,
        learningObjectives:
          'Calculate areas of trapeziums, quadrilaterals, and polygons; compute surface area and volume of cubes, cuboids, and cylinders; apply mensuration to real-life problems.',
        orderIndex: 11,
      },
      {
        topicName: 'Exponents and Powers',
        subtopics: [
          'Powers with negative exponents',
          'Laws of exponents applied to negative exponents',
          'Use of exponents in expressing very small numbers',
          'Standard form (scientific notation) for very large and very small numbers',
          'Comparing and computing with numbers in standard form',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand and apply negative exponents; use laws of exponents with negative powers; express very small numbers in standard form; compare numbers in scientific notation.',
        orderIndex: 12,
      },
      {
        topicName: 'Direct and Inverse Proportions',
        subtopics: [
          'Direct proportion: meaning, identification, and problems',
          'Inverse proportion: meaning, identification, and problems',
          'Using the unitary method for direct and inverse proportion',
          'Real-life applications: speed-time, workers-days, pipe-filling problems',
          'Comparison of direct and inverse proportions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify direct and inverse proportions; solve problems using the unitary method; apply proportional reasoning to real-world situations.',
        orderIndex: 13,
      },
      {
        topicName: 'Factorisation',
        subtopics: [
          'Factorisation by taking common factors',
          'Factorisation by regrouping terms',
          'Factorisation using standard algebraic identities',
          'Division of algebraic expressions: monomial by monomial, polynomial by monomial',
          'Division of a polynomial by a polynomial',
        ],
        depthLevel: 2,
        learningObjectives:
          'Factorise algebraic expressions by common factors, regrouping, and identities; divide algebraic expressions systematically.',
        orderIndex: 14,
      },
      {
        topicName: 'Introduction to Graphs',
        subtopics: [
          'Types of graphs: bar graph, pie chart, histogram, line graph',
          'Reading and interpreting line graphs',
          'Plotting points on the Cartesian plane',
          'Linear graphs and their interpretation',
          'Applications of graphs: distance-time, temperature-time, quantity-cost',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and draw various types of graphs; plot points on the Cartesian plane; draw and interpret linear graphs; apply graphs to real-world data.',
        orderIndex: 15,
      },
      {
        topicName: 'Playing with Numbers',
        subtopics: [
          'Numbers in generalised form: two-digit and three-digit numbers',
          'Games with numbers: reversing digits and checking divisibility',
          'Divisibility rules revisited with algebraic proofs',
          'Letters for digits puzzles and cryptarithmetic',
          'Tests of divisibility using generalised form',
        ],
        depthLevel: 2,
        learningObjectives:
          'Express numbers in generalised form; solve number puzzles using divisibility rules; apply algebra to prove divisibility tests.',
        orderIndex: 16,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - Science
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'Science',
    topics: [
      {
        topicName: 'Crop Production and Management',
        subtopics: [
          'Agricultural practices: kharif and rabi crops',
          'Basic practices of crop production: preparation of soil, sowing, adding manure and fertilisers',
          'Irrigation methods: traditional and modern',
          'Harvesting, threshing, and storage of grains',
          'Animal husbandry: care of livestock',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the basic agricultural practices; differentiate between kharif and rabi crops; compare traditional and modern irrigation methods; understand grain storage and animal husbandry.',
        orderIndex: 1,
      },
      {
        topicName: 'Microorganisms: Friend and Foe',
        subtopics: [
          'Types of microorganisms: bacteria, viruses, fungi, protozoa, algae',
          'Useful microorganisms: fermentation, antibiotics, nitrogen fixation',
          'Harmful microorganisms: disease-causing pathogens in humans, animals, and plants',
          'Food preservation methods: salting, drying, pasteurisation, canning',
          'Nitrogen cycle and the role of microorganisms',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify microorganisms; describe their useful and harmful effects; explain food preservation methods; understand the nitrogen cycle.',
        orderIndex: 2,
      },
      {
        topicName: 'Synthetic Fibres and Plastics',
        subtopics: [
          'Types of synthetic fibres: rayon, nylon, polyester, acrylic',
          'Characteristics and uses of each synthetic fibre',
          'Plastics: thermoplastics and thermosetting plastics',
          'Properties of plastics: non-reactive, durable, lightweight',
          'Environmental impact of plastics: 5R principle (Refuse, Reduce, Reuse, Repurpose, Recycle)',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify types of synthetic fibres and their properties; differentiate between thermoplastics and thermosetting plastics; understand the environmental impact of plastics.',
        orderIndex: 3,
      },
      {
        topicName: 'Materials: Metals and Non-Metals',
        subtopics: [
          'Physical properties of metals and non-metals: lustre, malleability, ductility, conductivity',
          'Chemical properties: reaction with oxygen, water, acids, and bases',
          'Reactivity series of metals',
          'Uses of metals and non-metals in daily life',
          'Displacement reactions between metals',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare physical and chemical properties of metals and non-metals; understand the reactivity series; describe displacement reactions; identify uses of metals and non-metals.',
        orderIndex: 4,
      },
      {
        topicName: 'Coal and Petroleum',
        subtopics: [
          'Fossil fuels: coal, petroleum, and natural gas as non-renewable resources',
          'Formation of coal: carbonisation over millions of years',
          'Products of coal: coke, coal tar, coal gas',
          'Petroleum refining and its products: petrol, diesel, kerosene, LPG, bitumen',
          'Conservation of fossil fuels and alternative energy sources',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the formation of coal and petroleum; list products obtained from coal and petroleum refining; understand why fossil fuels are non-renewable; appreciate the need for conservation.',
        orderIndex: 5,
      },
      {
        topicName: 'Combustion and Flame',
        subtopics: [
          'Conditions necessary for combustion: fuel, heat, oxygen (fire triangle)',
          'Types of combustion: rapid, spontaneous, and explosion',
          'Ignition temperature and inflammable substances',
          'Structure of a flame: zones and their temperatures',
          'Fuels and their calorific values; fuel efficiency',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain conditions for combustion; classify types of combustion; describe the structure of a flame; compare fuels based on calorific values; understand fire safety.',
        orderIndex: 6,
      },
      {
        topicName: 'Conservation of Plants and Animals',
        subtopics: [
          'Deforestation: causes and consequences',
          'Biodiversity and its importance; endemic and endangered species',
          'Biosphere reserves, national parks, sanctuaries, and zoos',
          'Flora and fauna: Red Data Book and conservation programmes',
          'Reforestation, recycling paper, and individual responsibility',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the causes and effects of deforestation; understand biodiversity and its conservation; identify protected areas; appreciate the role of reforestation.',
        orderIndex: 7,
      },
      {
        topicName: 'Cell: Structure and Functions',
        subtopics: [
          'Discovery of the cell and cell theory',
          'Prokaryotic and eukaryotic cells',
          'Plant cell vs animal cell: similarities and differences',
          'Cell organelles: nucleus, mitochondria, chloroplasts, vacuole, cell membrane, cell wall',
          'Functions of cell organelles; the cell as the basic unit of life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the structure of plant and animal cells; differentiate between prokaryotic and eukaryotic cells; identify cell organelles and their functions.',
        orderIndex: 8,
      },
      {
        topicName: 'Reproduction in Animals',
        subtopics: [
          'Sexual reproduction: male and female reproductive organs',
          'Fertilisation: internal (humans) and external (frogs, fish)',
          'Development of the embryo and foetus',
          'Viviparous and oviparous animals',
          'Asexual reproduction: budding (hydra) and binary fission (amoeba)',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe sexual and asexual reproduction in animals; differentiate between internal and external fertilisation; explain embryo development; compare viviparous and oviparous animals.',
        orderIndex: 9,
      },
      {
        topicName: 'Reaching the Age of Adolescence',
        subtopics: [
          'Puberty and adolescence: physical and hormonal changes',
          'Secondary sexual characters in boys and girls',
          'Role of hormones: testosterone, oestrogen, growth hormone, thyroxine, insulin',
          'Reproductive health: balanced diet, hygiene, and avoiding substance abuse',
          'Determination of sex of the baby: XX and XY chromosomes',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the changes during puberty; identify the role of hormones in growth and reproduction; understand sex determination; appreciate the importance of reproductive health.',
        orderIndex: 10,
      },
      {
        topicName: 'Force and Pressure',
        subtopics: [
          'Force: push or pull; contact and non-contact forces',
          'Effects of force: change in speed, direction, and shape',
          'Pressure: force per unit area',
          'Pressure exerted by liquids and gases',
          'Atmospheric pressure and its everyday effects',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define force and its effects; distinguish between contact and non-contact forces; calculate pressure; explain liquid pressure and atmospheric pressure.',
        orderIndex: 11,
      },
      {
        topicName: 'Friction',
        subtopics: [
          'Friction as a force opposing motion',
          'Factors affecting friction: nature of surfaces, weight of the object',
          'Types of friction: static, sliding, rolling',
          'Advantages and disadvantages of friction',
          'Increasing and reducing friction: treading, lubricants, ball bearings, streamlining',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain friction and the factors affecting it; classify types of friction; identify advantages and disadvantages; describe methods to increase or reduce friction.',
        orderIndex: 12,
      },
      {
        topicName: 'Sound',
        subtopics: [
          'Sound production by vibrating objects',
          'Propagation of sound through a medium: solid, liquid, gas',
          'Characteristics of sound: frequency, amplitude, pitch, loudness',
          'Human ear: structure and hearing mechanism',
          'Noise pollution: sources, harmful effects, and prevention',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain how sound is produced and propagated; relate frequency to pitch and amplitude to loudness; describe the structure of the human ear; understand noise pollution.',
        orderIndex: 13,
      },
      {
        topicName: 'Chemical Effects of Electric Current',
        subtopics: [
          'Conductivity of liquids: good and poor conductors',
          'Electrolysis: chemical effect of electric current on liquids',
          'Electroplating: process, applications, and examples',
          'LED tester for testing conductivity of liquids',
          'Applications of chemical effects: purification of metals, electroplating jewellery',
        ],
        depthLevel: 2,
        learningObjectives:
          'Test liquids for electrical conductivity; explain electrolysis and electroplating; identify practical applications of chemical effects of electric current.',
        orderIndex: 14,
      },
      {
        topicName: 'Some Natural Phenomena',
        subtopics: [
          'Lightning: causes, mechanism, and safety measures',
          'Static electricity: charging by rubbing, types of charges, attraction and repulsion',
          'The electroscope and detecting charges',
          'Earthquakes: causes, seismic waves, and the Richter scale',
          'Protection from earthquakes: earthquake-resistant construction',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the cause of lightning and static electricity; describe how an electroscope works; understand the causes of earthquakes and safety measures.',
        orderIndex: 15,
      },
      {
        topicName: 'Light',
        subtopics: [
          'Laws of reflection: angle of incidence equals angle of reflection',
          'Regular and diffused reflection',
          'Multiple images formed by two plane mirrors',
          'Human eye: structure, function, and care',
          'Visually challenged persons: Braille system and assistive technology',
        ],
        depthLevel: 2,
        learningObjectives:
          'Apply laws of reflection; distinguish between regular and diffused reflection; describe the structure and function of the human eye; understand how Braille assists the visually impaired.',
        orderIndex: 16,
      },
      {
        topicName: 'Stars and the Solar System',
        subtopics: [
          'Celestial objects: stars, constellations, planets, and the Moon',
          'The Solar System: inner and outer planets, asteroids, comets, meteors',
          'Phases of the Moon and eclipses',
          'Artificial satellites and their uses: communication, weather, GPS',
          'Space exploration: ISRO and international space missions',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify celestial objects and constellations; describe the solar system; explain phases of the Moon and eclipses; understand the role of artificial satellites and space agencies.',
        orderIndex: 17,
      },
      {
        topicName: 'Pollution of Air and Water',
        subtopics: [
          'Air pollution: sources, pollutants (CO, SO2, NO2, particulates), and effects',
          'Greenhouse effect, global warming, and acid rain',
          'Water pollution: sources, contaminants, and effects on aquatic life',
          'Purification of water: chlorination, boiling, filtration, RO',
          'Reducing air and water pollution: individual and collective action',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify sources and effects of air and water pollution; explain the greenhouse effect and acid rain; describe water purification methods; suggest ways to reduce pollution.',
        orderIndex: 18,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - Social Science (History)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'Social Science (History)',
    topics: [
      {
        topicName: 'How When and Where',
        subtopics: [
          'Importance of dates and periodisation in history',
          'Sources of modern Indian history: official records, surveys, newspapers',
          'James Mill\'s periodisation and its limitations',
          'The role of archives and museums in preserving modern history',
          'How colonialism shaped the writing of Indian history',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the importance of periodisation; critique James Mill\'s view of Indian history; identify sources used by historians of modern India.',
        orderIndex: 1,
      },
      {
        topicName: 'From Trade to Territory',
        subtopics: [
          'Arrival of the East India Company and early trade',
          'Battle of Plassey (1757) and Battle of Buxar (1764)',
          'Policies of expansion: Doctrine of Lapse, subsidiary alliance',
          'Tipu Sultan and resistance to British expansion',
          'Setting up of a new administration by the Company',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the East India Company\'s transition from trade to territorial control; explain key battles and expansion policies; describe the early British administrative structure.',
        orderIndex: 2,
      },
      {
        topicName: 'Ruling the Countryside',
        subtopics: [
          'Revenue systems: Permanent Settlement, Ryotwari, and Mahalwari',
          'Impact of land revenue policies on peasants and zamindars',
          'Indigo cultivation and the Indigo Rebellion',
          'Commercial crops and the drain of wealth',
          'The Company\'s control over trade and agriculture',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare different land revenue systems; understand the impact on Indian peasants; describe the Indigo Rebellion; analyse the economic exploitation of rural India.',
        orderIndex: 3,
      },
      {
        topicName: 'Tribals Dikus and the Vision of a Golden Age',
        subtopics: [
          'Tribal societies and their way of life: shifting cultivation, hunting, gathering',
          'Impact of colonial policies on tribal communities',
          'Changes in forest laws and loss of tribal lands',
          'Tribal revolts: Birsa Munda and the Munda Ulgulan',
          'The vision of a golden age and resistance to colonial rule',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe tribal lifestyles and their relationship with forests; explain the impact of colonial forest and land policies; study tribal revolts led by Birsa Munda.',
        orderIndex: 4,
      },
      {
        topicName: 'When People Rebel',
        subtopics: [
          'Causes of the Revolt of 1857: political, economic, social, military, religious',
          'Key leaders: Bahadur Shah Zafar, Rani Lakshmibai, Tantia Tope, Nana Sahib',
          'Spread of the revolt: Delhi, Kanpur, Lucknow, Jhansi',
          'Suppression of the revolt and its aftermath',
          'Changes in British administration after 1857',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify the causes of the 1857 revolt; describe the roles of key leaders; explain the spread and suppression of the revolt; understand the administrative changes that followed.',
        orderIndex: 5,
      },
      {
        topicName: 'Civilising the "Native" Educating the Nation',
        subtopics: [
          'British views on Indian education: Orientalists vs Anglicists',
          'Macaulay\'s Minute and the English Education Act of 1835',
          'Spread of Western education and its impact on Indian society',
          'Indian responses to Western education: acceptance and resistance',
          'Mahatma Gandhi\'s views on education and Nai Talim',
        ],
        depthLevel: 2,
        learningObjectives:
          'Compare Orientalist and Anglicist approaches; understand Macaulay\'s role; analyse the impact of Western education; study Gandhi\'s alternative vision for education.',
        orderIndex: 6,
      },
      {
        topicName: 'Women Caste and Reform',
        subtopics: [
          'Social evils: sati, child marriage, untouchability, and caste discrimination',
          'Reformers: Raja Ram Mohan Roy, Ishwar Chandra Vidyasagar, Jyotirao Phule',
          'Laws for social reform: abolition of sati, widow remarriage act',
          'Women\'s education: Savitribai Phule and Pandita Ramabai',
          'Self-respect movement and the struggle against caste discrimination',
        ],
        depthLevel: 2,
        learningObjectives:
          'Identify major social evils of the 19th century; describe the contributions of key social reformers; understand the laws enacted for social change; appreciate women\'s education movement.',
        orderIndex: 7,
      },
      {
        topicName: 'The Making of the National Movement',
        subtopics: [
          'Formation of the Indian National Congress (1885)',
          'Moderate and Extremist phases of the freedom movement',
          'Gandhian era: Non-Cooperation, Civil Disobedience, Quit India movements',
          'Role of Subhas Chandra Bose and the INA',
          'Towards independence: the final push and partition',
        ],
        depthLevel: 2,
        learningObjectives:
          'Trace the evolution of the national movement; compare moderate and extremist approaches; describe Gandhian movements; understand the events leading to independence and partition.',
        orderIndex: 8,
      },
      {
        topicName: 'India After Independence',
        subtopics: [
          'Challenges at independence: integration of princely states, refugees, poverty',
          'Framing of the Indian Constitution and its key features',
          'Jawaharlal Nehru\'s vision: industrialisation and five-year plans',
          'Linguistic reorganisation of states',
          'India\'s foreign policy and role in the non-aligned movement',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the challenges faced by independent India; understand the process of state integration and constitution-making; explain Nehru\'s development strategies.',
        orderIndex: 9,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - Social Science (Geography)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'Social Science (Geography)',
    topics: [
      {
        topicName: 'Resources',
        subtopics: [
          'Types of resources: natural, human-made, and human resources',
          'Classification: renewable and non-renewable; biotic and abiotic',
          'Resource development and sustainable development',
          'Principles of sustainable development: Rio Earth Summit, Agenda 21',
          'Conservation of resources for future generations',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify resources by origin and renewability; understand sustainable development; appreciate the need for resource conservation; learn about global sustainability initiatives.',
        orderIndex: 1,
      },
      {
        topicName: 'Land Soil Water Natural Vegetation and Wildlife Resources',
        subtopics: [
          'Land use patterns and factors affecting land use',
          'Soil: formation, types, and degradation; soil conservation methods',
          'Water resources: freshwater availability, water scarcity, and conservation',
          'Natural vegetation: factors affecting distribution and types',
          'Wildlife conservation: endangered species, national parks, and international efforts',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain land use patterns; describe soil types and conservation methods; understand water scarcity and conservation strategies; appreciate the need for wildlife protection.',
        orderIndex: 2,
      },
      {
        topicName: 'Mineral and Power Resources',
        subtopics: [
          'Types of minerals: metallic (ferrous and non-ferrous) and non-metallic',
          'Distribution of minerals: Asia, Europe, Africa, Americas, Australia',
          'Mining: open-cast and shaft mining',
          'Conventional power resources: coal, petroleum, natural gas, hydroelectricity',
          'Non-conventional power resources: solar, wind, nuclear, geothermal, tidal, biogas',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify minerals and identify their global distribution; describe mining methods; compare conventional and non-conventional energy sources; understand the need for energy conservation.',
        orderIndex: 3,
      },
      {
        topicName: 'Agriculture',
        subtopics: [
          'Types of farming: subsistence, commercial, plantation, mixed',
          'Major crops of the world: food crops (rice, wheat, maize) and fibre crops (cotton, jute)',
          'Agricultural development in India and the world',
          'Green Revolution and its impact on Indian agriculture',
          'Organic farming and sustainable agricultural practices',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify types of farming; identify major crops and their growing conditions; understand the Green Revolution; appreciate organic farming and sustainable practices.',
        orderIndex: 4,
      },
      {
        topicName: 'Industries',
        subtopics: [
          'Classification of industries: by raw material, size, ownership',
          'Factors affecting industrial location: raw material, labour, capital, transport, market',
          'Iron and steel industry: distribution and importance',
          'Textile industry: cotton and jute industries worldwide',
          'IT industry and technology parks: growth and impact',
        ],
        depthLevel: 2,
        learningObjectives:
          'Classify industries and understand factors affecting their location; describe the iron and steel and textile industries globally; understand the growth of the IT sector.',
        orderIndex: 5,
      },
      {
        topicName: 'Human Resources',
        subtopics: [
          'Population distribution: factors affecting population density',
          'Population change: birth rate, death rate, and migration',
          'Population composition: age, sex, literacy, occupation, health',
          'Population pyramid and its interpretation',
          'Human resource development: education, health, and skill development',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain factors affecting population distribution; interpret population pyramids; understand population composition; appreciate human resource development through education and health.',
        orderIndex: 6,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - Social Science (Civics)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'Social Science (Civics)',
    topics: [
      {
        topicName: 'The Indian Constitution',
        subtopics: [
          'Need for a constitution and its importance',
          'Key features: federalism, parliamentary government, separation of powers',
          'Fundamental Rights and their significance',
          'Directive Principles of State Policy',
          'Preamble: sovereignty, socialism, secularism, democracy, republic',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the need for a constitution; describe its key features; list Fundamental Rights; understand the Preamble and Directive Principles.',
        orderIndex: 1,
      },
      {
        topicName: 'Understanding Secularism',
        subtopics: [
          'Meaning of secularism in the Indian context',
          'Separation of religion from the state',
          'Constitutional provisions for secularism: Articles 25-28',
          'Secularism in practice: challenges and debates',
          'Comparison of Indian secularism with Western secularism',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define secularism in the Indian context; explain constitutional provisions; understand challenges in practising secularism; compare Indian and Western models.',
        orderIndex: 2,
      },
      {
        topicName: 'Why Do We Need a Parliament',
        subtopics: [
          'Parliament as the supreme law-making body: Lok Sabha and Rajya Sabha',
          'Role of Parliament: legislation, budget approval, oversight of the executive',
          'How laws are made: the process of passing a bill',
          'Role of the opposition in a democracy',
          'People\'s participation through elections and public debate',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the structure and functions of Parliament; explain the law-making process; understand the role of the opposition; appreciate the importance of citizens\' participation.',
        orderIndex: 3,
      },
      {
        topicName: 'Understanding Laws',
        subtopics: [
          'Rule of law: no one is above the law',
          'How laws evolved from colonial times: example of the Sedition Act',
          'Unpopular and controversial laws and the role of citizens in changing them',
          'Domestic violence law as an example of a new law',
          'Role of Parliament and judiciary in creating and interpreting laws',
        ],
        depthLevel: 2,
        learningObjectives:
          'Understand the concept of rule of law; trace how laws evolve; explain the role of citizens, Parliament, and judiciary in making and changing laws.',
        orderIndex: 4,
      },
      {
        topicName: 'Judiciary',
        subtopics: [
          'Structure of the Indian judiciary: Supreme Court, High Courts, District Courts',
          'Independence of the judiciary and separation of powers',
          'Judicial review and Public Interest Litigation (PIL)',
          'Access to justice: legal aid and Lok Adalats',
          'Role of the judiciary in upholding Fundamental Rights',
        ],
        depthLevel: 2,
        learningObjectives:
          'Describe the structure of the judiciary; explain judicial independence and judicial review; understand PIL and access to justice; appreciate the judiciary\'s role in protecting rights.',
        orderIndex: 5,
      },
      {
        topicName: 'Understanding Our Criminal Justice System',
        subtopics: [
          'Role of the police: FIR, investigation, and arrest procedures',
          'Role of the public prosecutor and defence lawyer',
          'Role of the judge: fair trial, evidence, and sentencing',
          'Rights of the accused: Article 22 and the right to a fair trial',
          'Issues in the criminal justice system: delays, undertrial prisoners',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain the roles of police, lawyers, and judges; understand the rights of the accused; identify issues in the criminal justice system; appreciate the principle of fair trial.',
        orderIndex: 6,
      },
      {
        topicName: 'Understanding Marginalisation',
        subtopics: [
          'Who are the marginalised: Adivasis, Dalits, Muslims, women, disabled persons',
          'Social, economic, and political marginalisation',
          'Marginalisation of Adivasi communities: land, forest, and identity',
          'Marginalisation of minorities: stereotypes and prejudice',
          'Constitutional safeguards for marginalised groups',
        ],
        depthLevel: 2,
        learningObjectives:
          'Define marginalisation and identify marginalised groups; understand the causes and effects of marginalisation; describe constitutional safeguards for marginalised communities.',
        orderIndex: 7,
      },
      {
        topicName: 'Confronting Marginalisation',
        subtopics: [
          'Fundamental Rights as tools against marginalisation',
          'Laws for the protection of marginalised groups: SC/ST Prevention of Atrocities Act',
          'Right to Education and reservation policies',
          'Dalit movements and Adivasi resistance',
          'Role of civil society and NGOs in fighting marginalisation',
        ],
        depthLevel: 2,
        learningObjectives:
          'Explain how Fundamental Rights combat marginalisation; describe protective legislation; understand the significance of reservation; appreciate the role of social movements and civil society.',
        orderIndex: 8,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - English
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'English',
    topics: [
      {
        topicName: 'The Best Christmas Present in the World',
        subtopics: [
          'Reading comprehension of a story set during World War I',
          'Vocabulary: words related to war, peace, and human connection',
          'Grammar focus: tenses revision (past perfect and past continuous)',
          'Understanding themes of hope, peace, and the Christmas truce',
          'Writing: a letter expressing feelings during a difficult time',
        ],
        depthLevel: 2,
        learningObjectives:
          'Comprehend a war-era narrative; understand the historical context of the Christmas truce; use past perfect and past continuous tenses; appreciate themes of peace and hope.',
        orderIndex: 1,
      },
      {
        topicName: 'The Tsunami',
        subtopics: [
          'Reading accounts of the 2004 Indian Ocean tsunami',
          'Vocabulary: disaster, survival, and geographical terms',
          'Grammar focus: reported speech (statements, questions, commands)',
          'Understanding the science of tsunamis and human responses',
          'Writing: a news report on a natural disaster',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and analyse accounts of a real disaster; understand the causes and effects of tsunamis; practise reported speech; write a factual news report.',
        orderIndex: 2,
      },
      {
        topicName: 'Glimpses of the Past',
        subtopics: [
          'Reading a comic-strip narrative about India\'s struggle for independence',
          'Understanding the historical timeline from 1757 to 1857',
          'Vocabulary: colonialism, reform, and resistance',
          'Grammar focus: passive voice and its uses',
          'Discussion on the key events leading to the 1857 revolt',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and interpret a visual narrative of Indian history; understand key events in colonial India; use passive voice correctly; discuss the significance of the 1857 revolt.',
        orderIndex: 3,
      },
      {
        topicName: 'Bepin Choudhury\'s Lapse of Memory',
        subtopics: [
          'Reading a humorous story by Satyajit Ray',
          'Understanding irony, humour, and plot twists',
          'Vocabulary: words related to memory, confusion, and deception',
          'Grammar focus: conditional clauses (if-then statements)',
          'Writing: a humorous narrative involving mistaken identity or memory',
        ],
        depthLevel: 2,
        learningObjectives:
          'Enjoy and analyse a humorous narrative; identify irony and plot twists; use conditional clauses; write a creative story involving humour and deception.',
        orderIndex: 4,
      },
      {
        topicName: 'The Summit Within',
        subtopics: [
          'Reading a narrative about climbing Mount Everest',
          'Understanding the literal and metaphorical meanings of "summit"',
          'Vocabulary: mountaineering, perseverance, and spiritual terms',
          'Grammar focus: relative clauses and complex sentences',
          'Discussion on inner strength and conquering personal challenges',
        ],
        depthLevel: 2,
        learningObjectives:
          'Comprehend a reflective mountaineering narrative; interpret the metaphor of the inner summit; build vocabulary of perseverance; construct complex sentences with relative clauses.',
        orderIndex: 5,
      },
      {
        topicName: 'This is Jody\'s Fawn',
        subtopics: [
          'Reading an excerpt from The Yearling by Marjorie Kinnan Rawlings',
          'Understanding the bond between a boy and a fawn',
          'Vocabulary: words related to wildlife, compassion, and rural life',
          'Grammar focus: question formation and tag questions',
          'Writing: a diary entry from the perspective of a character',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend a narrative about human-animal bonds; analyse the protagonist\'s emotions; use question forms and tag questions; write a reflective diary entry.',
        orderIndex: 6,
      },
      {
        topicName: 'A Visit to Cambridge',
        subtopics: [
          'Reading an account of meeting Stephen Hawking',
          'Understanding disability, determination, and intellectual achievement',
          'Vocabulary: science, disability, and interview-related terms',
          'Grammar focus: direct and indirect speech revision',
          'Discussion on the contributions of Stephen Hawking and overcoming adversity',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read a biographical interview account; understand the achievements of Stephen Hawking; practise direct and indirect speech; discuss overcoming physical limitations.',
        orderIndex: 7,
      },
      {
        topicName: 'A Short Monsoon Diary',
        subtopics: [
          'Reading diary entries about the monsoon season in Mussoorie',
          'Understanding the diary format and descriptive nature writing',
          'Vocabulary: weather, flora, fauna, and sensory words',
          'Grammar focus: present participles and gerunds',
          'Writing: a diary entry describing a season or weather event',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate Ruskin Bond\'s descriptive writing; understand the diary format; build vocabulary of nature and weather; use participles and gerunds; write descriptive diary entries.',
        orderIndex: 8,
      },
      {
        topicName: 'Poetry: The Ant and the Cricket',
        subtopics: [
          'Reading an adaptation of Aesop\'s fable in verse',
          'Understanding the moral: hard work vs laziness',
          'Vocabulary: words related to seasons, work, and survival',
          'Poetic devices: rhyme scheme, rhythm, and personification',
          'Discussion on planning for the future and self-discipline',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite and understand the poem; identify its moral lesson; analyse rhyme scheme and personification; discuss the values of industry and foresight.',
        orderIndex: 9,
      },
      {
        topicName: 'Poetry: Geography Lesson',
        subtopics: [
          'Reading a poem about viewing the Earth from above',
          'Understanding perspective and scale in the poem',
          'Vocabulary: geographical and aerial observation terms',
          'Poetic devices: imagery, contrast, and irony',
          'Discussion on human conflict as seen from a distance',
        ],
        depthLevel: 2,
        learningObjectives:
          'Interpret the poem\'s shifting perspectives; understand how distance changes perception; identify imagery and irony; reflect on human divisions as seen from above.',
        orderIndex: 10,
      },
      {
        topicName: 'Poetry: Macavity: The Mystery Cat',
        subtopics: [
          'Reading a humorous poem by T.S. Eliot about a criminal cat',
          'Understanding characterisation through poetry',
          'Vocabulary: words related to crime, mystery, and feline descriptions',
          'Poetic devices: repetition, hyperbole, and allusion',
          'Creative writing: a character sketch of a mysterious figure in verse',
        ],
        depthLevel: 2,
        learningObjectives:
          'Enjoy and analyse a humorous character poem; identify repetition, hyperbole, and allusion; appreciate Eliot\'s playful use of language; create a character sketch in verse.',
        orderIndex: 11,
      },
      {
        topicName: 'Poetry: The Last Bargain',
        subtopics: [
          'Reading a Rabindranath Tagore poem about the value of freedom',
          'Understanding the metaphor of bargaining for hire',
          'Vocabulary: words about power, beauty, wealth, and freedom',
          'Poetic devices: symbolism, anaphora, and contrast',
          'Discussion on what truly makes a person free and fulfilled',
        ],
        depthLevel: 2,
        learningObjectives:
          'Interpret Tagore\'s poem about freedom and service; identify symbolism and anaphora; discuss what true freedom means beyond power, beauty, and wealth.',
        orderIndex: 12,
      },
      {
        topicName: 'Poetry: The School Boy',
        subtopics: [
          'Reading a William Blake poem about the joy of childhood vs school constraints',
          'Understanding the theme of childhood freedom versus forced learning',
          'Vocabulary: nature, joy, and institutional terms',
          'Poetic devices: metaphor, imagery, and the use of seasons as symbols',
          'Discussion on child-centred education and the joy of learning',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite and interpret Blake\'s poem; understand the contrast between natural joy and institutional learning; analyse metaphor and seasonal imagery; discuss educational philosophy.',
        orderIndex: 13,
      },
      {
        topicName: 'Poetry: When I Set Out for Lyonnesse',
        subtopics: [
          'Reading a Thomas Hardy poem about a transformative journey',
          'Understanding the mystery and magic in the poem',
          'Vocabulary: archaic and literary language, travel and transformation',
          'Poetic devices: refrain, alliteration, and mystique',
          'Writing: a poem or paragraph about a journey that changed you',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and appreciate Hardy\'s poem; understand the transformative nature of the journey; identify refrain and alliteration; write reflectively about personal transformation.',
        orderIndex: 14,
      },
    ],
  },

  // ──────────────────────────────────────────────
  // CLASS 8 - Hindi (Vasant)
  // ──────────────────────────────────────────────
  {
    board: 'CBSE',
    grade: 8,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Dhwani',
        subtopics: [
          'Reading a poem about the power and resonance of sound',
          'Understanding symbolism: sound as a metaphor for awakening',
          'Vocabulary: words related to sound, awakening, and energy',
          'Poetic devices: anupras (alliteration), rupak (metaphor), and punruktiprakash',
          'Discussion on the poet\'s call for action and social awakening',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem with expression; interpret the symbolism of sound as awakening; identify poetic devices; discuss the message of renewal and action.',
        orderIndex: 1,
      },
      {
        topicName: 'Lakh ki Chudiyan',
        subtopics: [
          'Reading a story about a traditional lac bangle artisan',
          'Understanding the impact of modernisation on traditional crafts',
          'Vocabulary: words related to craftsmanship, tradition, and change',
          'Grammar: samas (compound words) and their types',
          'Discussion on preserving traditional crafts in a modern economy',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend the story of a lac bangle maker; understand the conflict between tradition and modernity; learn compound words in Hindi; discuss craft preservation.',
        orderIndex: 2,
      },
      {
        topicName: 'Bus ki Yatra',
        subtopics: [
          'Reading a humorous essay about a bus journey',
          'Understanding satire and humour in Hindi prose',
          'Vocabulary: words related to travel, public transport, and inconvenience',
          'Grammar: vismayadibodhak (interjections) and vyakaran shabd bhed',
          'Writing: a humorous account of a personal travel experience',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and enjoy satirical prose; identify elements of humour and satire; use interjections in Hindi; write a humorous travel narrative.',
        orderIndex: 3,
      },
      {
        topicName: 'Deewano ki Hasti',
        subtopics: [
          'Reading a poem celebrating a carefree and spirited life',
          'Understanding the poet\'s philosophy of living without worldly concerns',
          'Vocabulary: words about joy, wandering, and detachment',
          'Poetic devices: yamak (pun) and anupras (alliteration)',
          'Discussion on the value of joy and simplicity in life',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem; understand the philosophy of joyful detachment; identify pun and alliteration; discuss the merits of a carefree attitude.',
        orderIndex: 4,
      },
      {
        topicName: 'Chitthiyon ki Anoothi Duniya',
        subtopics: [
          'Reading an essay about the unique world of letter writing',
          'Understanding the cultural and emotional value of handwritten letters',
          'Vocabulary: words related to communication, nostalgia, and history',
          'Grammar: patra lekhan (letter writing) — formal and informal',
          'Discussion on letters versus digital communication in the modern era',
        ],
        depthLevel: 2,
        learningObjectives:
          'Appreciate the art and significance of letter writing; build vocabulary of communication; practise formal and informal letter writing in Hindi; compare letters with modern communication.',
        orderIndex: 5,
      },
      {
        topicName: 'Bhagwan ke Daakiye',
        subtopics: [
          'Reading a poem by Ramdhari Singh Dinkar about nature as God\'s messengers',
          'Understanding personification of birds and clouds as mail carriers',
          'Vocabulary: words about nature, messages, and universal brotherhood',
          'Poetic devices: manavikarana (personification) and utpreksha (hyperbole)',
          'Discussion on the interconnectedness of nature and humanity',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite and interpret the poem; appreciate personification of natural elements; identify poetic devices; discuss how nature connects different parts of the world.',
        orderIndex: 6,
      },
      {
        topicName: 'Yeh Sabse Kathin Samay Nahi',
        subtopics: [
          'Reading a poem about hope and resilience during tough times',
          'Understanding the poet\'s optimistic worldview',
          'Vocabulary: words about hardship, hope, courage, and perseverance',
          'Poetic devices: virodhabhash (paradox) and punruktiprakash (repetition)',
          'Discussion on maintaining hope in adversity',
        ],
        depthLevel: 2,
        learningObjectives:
          'Recite the poem; understand the message of hope amidst adversity; identify paradox and repetition; discuss resilience and the human spirit.',
        orderIndex: 7,
      },
      {
        topicName: 'Sudama Charit',
        subtopics: [
          'Reading the story of Sudama and Krishna\'s friendship',
          'Understanding the themes of true friendship and humility',
          'Vocabulary: words related to poverty, devotion, friendship, and divine grace',
          'Grammar: alankar revision — utpreksha, upama, rupak in context',
          'Writing: an essay on the value of true friendship',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and comprehend the story of Sudama and Krishna; discuss themes of friendship, devotion, and humility; revise figures of speech; write about friendship.',
        orderIndex: 8,
      },
      {
        topicName: 'Jaha Pahiya Hai',
        subtopics: [
          'Reading a reportage about the bicycle revolution in Pudukkottai, Tamil Nadu',
          'Understanding women\'s empowerment through mobility',
          'Vocabulary: words related to empowerment, transport, and social change',
          'Grammar: samaas ke bhed (types of compound words) practice',
          'Discussion on simple innovations that transform societies',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read a report on social change; understand how the bicycle empowered women in Pudukkottai; practise compound words; discuss empowerment through simple means.',
        orderIndex: 9,
      },
      {
        topicName: 'Akbari Lota',
        subtopics: [
          'Reading a humorous story about a prized antique water pot',
          'Understanding situational comedy and irony in Hindi prose',
          'Vocabulary: words related to antiques, bargaining, and clever schemes',
          'Grammar: muhavare aur lokoktiyan (idioms and proverbs) practice',
          'Writing: a humorous short story involving a prized possession',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and enjoy a humorous narrative; identify irony and situational comedy; practise idioms and proverbs in Hindi; write a creative humorous story.',
        orderIndex: 10,
      },
      {
        topicName: 'Surdas Ke Pad',
        subtopics: [
          'Reading and understanding Surdas\'s verses about Krishna\'s childhood',
          'Vocabulary: Braj Bhasha words and their modern Hindi equivalents',
          'Understanding vatsalya ras (parental love sentiment) in poetry',
          'Poetic devices: utpreksha, anupras, and ras in Surdas\'s poetry',
          'Discussion on the tradition of devotional poetry in Hindi literature',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read and interpret Surdas\'s verses; understand Braj Bhasha vocabulary; identify vatsalya ras and poetic devices; appreciate the bhakti poetry tradition.',
        orderIndex: 11,
      },
      {
        topicName: 'Pani ki Kahani',
        subtopics: [
          'Reading a scientific narrative told from the perspective of a water drop',
          'Understanding the water cycle through a creative narrative',
          'Vocabulary: scientific terms related to water, evaporation, and states of matter',
          'Grammar: vakya parivartan (sentence transformation) practice',
          'Writing: a narrative from the perspective of a natural element',
        ],
        depthLevel: 2,
        learningObjectives:
          'Read a creative science narrative; understand the water cycle through storytelling; build scientific vocabulary in Hindi; practise sentence transformation; write from an object\'s perspective.',
        orderIndex: 12,
      },
    ],
  },
];