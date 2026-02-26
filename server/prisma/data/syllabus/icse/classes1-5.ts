// ============================================================================
// ICSE Syllabus Data: Classes 1-5 (Primary)
// Based on CISCE (Council for the Indian School Certificate Examinations)
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

export const icseClasses1to5: SyllabusEntry[] = [

  // ==========================================================================
  // CLASS 1
  // ==========================================================================

  // ---- Class 1: Mathematics ----
  {
    board: 'ICSE',
    grade: 1,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Numbers up to 100',
        subtopics: ['Counting objects up to 100', 'Reading and writing numerals 1-100', 'Number names up to twenty', 'Comparing numbers using greater than, less than, equal to', 'Ordering numbers in ascending and descending order'],
        depthLevel: 2,
        learningObjectives: 'Develop number sense for numbers up to 100 including counting, reading, writing, comparing and ordering',
        orderIndex: 1,
      },
      {
        topicName: 'Addition',
        subtopics: ['Concept of addition as combining groups', 'Addition of single-digit numbers', 'Addition of two-digit numbers without regrouping', 'Addition of two-digit numbers with regrouping', 'Word problems involving addition'],
        depthLevel: 2,
        learningObjectives: 'Understand addition as combining quantities and perform addition of numbers up to two digits with and without regrouping',
        orderIndex: 2,
      },
      {
        topicName: 'Subtraction',
        subtopics: ['Concept of subtraction as taking away', 'Subtraction of single-digit numbers', 'Subtraction of two-digit numbers without regrouping', 'Subtraction of two-digit numbers with regrouping', 'Word problems involving subtraction'],
        depthLevel: 2,
        learningObjectives: 'Understand subtraction as removal or difference and perform subtraction of numbers up to two digits',
        orderIndex: 3,
      },
      {
        topicName: 'Shapes and Spatial Understanding',
        subtopics: ['Identifying basic shapes: circle, triangle, square, rectangle', 'Describing properties of shapes (sides, corners)', 'Identifying shapes in the environment', 'Patterns using shapes'],
        depthLevel: 1,
        learningObjectives: 'Recognise and describe basic 2D shapes and observe them in everyday surroundings',
        orderIndex: 4,
      },
      {
        topicName: 'Measurement',
        subtopics: ['Comparing lengths using direct comparison', 'Comparing weights: heavier and lighter', 'Comparing capacities: holds more, holds less', 'Non-standard units of measurement'],
        depthLevel: 1,
        learningObjectives: 'Compare objects by length, weight and capacity using non-standard and direct comparison methods',
        orderIndex: 5,
      },
      {
        topicName: 'Time',
        subtopics: ['Days of the week', 'Months of the year', 'Reading a clock: hours only', 'Sequencing daily events'],
        depthLevel: 1,
        learningObjectives: 'Develop a sense of time by learning days, months and reading hours on a clock',
        orderIndex: 6,
      },
      {
        topicName: 'Money',
        subtopics: ['Identifying Indian coins and notes', 'Understanding the value of coins (1, 2, 5, 10 rupees)', 'Simple transactions using coins'],
        depthLevel: 1,
        learningObjectives: 'Identify Indian currency denominations and understand their values for simple transactions',
        orderIndex: 7,
      },
      {
        topicName: 'Patterns',
        subtopics: ['Identifying repeating patterns in shapes and colours', 'Extending a given pattern', 'Creating simple patterns', 'Number patterns (skip counting by 2s, 5s, 10s)'],
        depthLevel: 2,
        learningObjectives: 'Recognise, extend and create patterns using shapes, colours and numbers',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 1: English ----
  {
    board: 'ICSE',
    grade: 1,
    subject: 'English',
    topics: [
      {
        topicName: 'Alphabet and Phonics',
        subtopics: ['Recognition of uppercase and lowercase letters', 'Letter sounds and phonemes', 'Consonant and vowel identification', 'Blending sounds to form simple words', 'Rhyming words'],
        depthLevel: 2,
        learningObjectives: 'Master letter recognition and phonemic awareness for early reading readiness',
        orderIndex: 1,
      },
      {
        topicName: 'Reading',
        subtopics: ['Reading three-letter and four-letter words', 'Reading simple sentences', 'Picture reading and comprehension', 'Sight words recognition'],
        depthLevel: 2,
        learningObjectives: 'Develop early reading skills through word recognition, simple sentence reading and picture comprehension',
        orderIndex: 2,
      },
      {
        topicName: 'Writing',
        subtopics: ['Writing uppercase and lowercase letters', 'Writing simple words from dictation', 'Copying simple sentences', 'Picture composition (one or two sentences)'],
        depthLevel: 2,
        learningObjectives: 'Build foundational writing skills including letter formation, word writing and simple sentence construction',
        orderIndex: 3,
      },
      {
        topicName: 'Grammar Basics',
        subtopics: ['Naming words (nouns)', 'Action words (verbs)', 'One and many (singular and plural)', 'Use of a, an, the'],
        depthLevel: 1,
        learningObjectives: 'Introduce basic grammar concepts including nouns, verbs, singular-plural and articles',
        orderIndex: 4,
      },
      {
        topicName: 'Oral Communication',
        subtopics: ['Self-introduction', 'Listening to stories and answering questions', 'Reciting poems and rhymes', 'Speaking in complete sentences'],
        depthLevel: 1,
        learningObjectives: 'Develop listening and speaking skills through structured oral activities',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 1: Hindi ----
  {
    board: 'ICSE',
    grade: 1,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Varnamala (Hindi Alphabet)',
        subtopics: ['Swar (vowels) recognition and writing', 'Vyanjan (consonants) recognition and writing', 'Matra (vowel signs) introduction', 'Barakhadi practice'],
        depthLevel: 2,
        learningObjectives: 'Learn to recognise and write Hindi vowels, consonants and basic matra combinations',
        orderIndex: 1,
      },
      {
        topicName: 'Reading in Hindi',
        subtopics: ['Reading two-letter and three-letter words', 'Reading simple sentences', 'Picture-based reading', 'Story reading with illustrations'],
        depthLevel: 1,
        learningObjectives: 'Develop basic Hindi reading skills through graded word and sentence reading',
        orderIndex: 2,
      },
      {
        topicName: 'Writing in Hindi',
        subtopics: ['Writing swar and vyanjan accurately', 'Writing words with matras', 'Copying sentences from the board', 'Picture description in one or two sentences'],
        depthLevel: 1,
        learningObjectives: 'Build Hindi writing skills from letters to words to simple sentences',
        orderIndex: 3,
      },
      {
        topicName: 'Oral Hindi',
        subtopics: ['Reciting Hindi poems', 'Answering simple questions in Hindi', 'Naming common objects in Hindi', 'Listening comprehension from short stories'],
        depthLevel: 1,
        learningObjectives: 'Develop Hindi listening and speaking abilities through poems, stories and conversation',
        orderIndex: 4,
      },
      {
        topicName: 'Basic Hindi Grammar',
        subtopics: ['Sangya (noun) introduction', 'Gender (ling) of common nouns', 'Singular and plural (vachan)'],
        depthLevel: 1,
        learningObjectives: 'Introduce fundamental Hindi grammar concepts of noun, gender and number',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 1: EVS/Science ----
  {
    board: 'ICSE',
    grade: 1,
    subject: 'EVS/Science',
    topics: [
      {
        topicName: 'My Body',
        subtopics: ['Parts of the body and their functions', 'Sense organs and their uses', 'Good habits for personal hygiene', 'Healthy food and nutrition basics'],
        depthLevel: 1,
        learningObjectives: 'Know the parts of the body, understand the five senses and develop personal hygiene habits',
        orderIndex: 1,
      },
      {
        topicName: 'My Family and Home',
        subtopics: ['Members of a family', 'Types of families (joint and nuclear)', 'Different types of houses', 'Keeping our home clean'],
        depthLevel: 1,
        learningObjectives: 'Understand family structure, types of homes and the importance of cleanliness',
        orderIndex: 2,
      },
      {
        topicName: 'Plants Around Us',
        subtopics: ['Parts of a plant (root, stem, leaf, flower, fruit)', 'Types of plants: trees, shrubs, herbs, climbers', 'Uses of plants', 'Taking care of plants'],
        depthLevel: 2,
        learningObjectives: 'Identify parts and types of plants and appreciate their importance in daily life',
        orderIndex: 3,
      },
      {
        topicName: 'Animals Around Us',
        subtopics: ['Domestic and wild animals', 'Animals and their homes', 'Animals and their babies', 'Animals and their food habits'],
        depthLevel: 1,
        learningObjectives: 'Classify animals as domestic or wild and learn about their habitats, young ones and feeding habits',
        orderIndex: 4,
      },
      {
        topicName: 'Weather and Seasons',
        subtopics: ['Different types of weather (sunny, rainy, cloudy, windy)', 'Four seasons in India', 'Clothes we wear in different seasons', 'Activities in different seasons'],
        depthLevel: 1,
        learningObjectives: 'Observe and describe weather changes and relate seasonal variations to clothing and activities',
        orderIndex: 5,
      },
      {
        topicName: 'Water',
        subtopics: ['Sources of water', 'Uses of water', 'Saving water'],
        depthLevel: 1,
        learningObjectives: 'Understand sources and uses of water and the importance of water conservation',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 1: Social Studies ----
  {
    board: 'ICSE',
    grade: 1,
    subject: 'Social Studies',
    topics: [
      {
        topicName: 'About Myself',
        subtopics: ['My name, age and address', 'My likes and dislikes', 'My school and classroom', 'People who help us in school'],
        depthLevel: 1,
        learningObjectives: 'Develop self-awareness and familiarity with school environment',
        orderIndex: 1,
      },
      {
        topicName: 'My Neighbourhood',
        subtopics: ['Places in the neighbourhood (market, hospital, park, post office)', 'Community helpers (doctor, policeman, postman, firefighter)', 'Transport in my area'],
        depthLevel: 1,
        learningObjectives: 'Identify important places and community helpers in the neighbourhood',
        orderIndex: 2,
      },
      {
        topicName: 'Our Country India',
        subtopics: ['India is our country', 'The national flag, emblem and anthem', 'National festivals (Republic Day, Independence Day, Gandhi Jayanti)'],
        depthLevel: 1,
        learningObjectives: 'Develop awareness of national identity through symbols and festivals',
        orderIndex: 3,
      },
      {
        topicName: 'Good Habits and Safety',
        subtopics: ['Good manners and behaviour', 'Road safety rules', 'Safety at home and school', 'Respecting elders and friends'],
        depthLevel: 1,
        learningObjectives: 'Inculcate good habits, manners and awareness of safety in daily life',
        orderIndex: 4,
      },
      {
        topicName: 'Festivals and Celebrations',
        subtopics: ['Major festivals of India (Diwali, Eid, Christmas, Holi, Baisakhi)', 'How festivals are celebrated', 'Unity in diversity'],
        depthLevel: 1,
        learningObjectives: 'Appreciate the diversity of Indian festivals and the spirit of togetherness',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 2
  // ==========================================================================

  // ---- Class 2: Mathematics ----
  {
    board: 'ICSE',
    grade: 2,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Numbers up to 999',
        subtopics: ['Place value: ones, tens, hundreds', 'Reading and writing three-digit numbers', 'Expanded form of numbers', 'Comparing and ordering three-digit numbers', 'Skip counting by 3s, 4s, 6s'],
        depthLevel: 2,
        learningObjectives: 'Extend number sense to three-digit numbers with understanding of place value, expanded form and ordering',
        orderIndex: 1,
      },
      {
        topicName: 'Addition and Subtraction',
        subtopics: ['Addition of three-digit numbers with regrouping', 'Subtraction of three-digit numbers with regrouping', 'Properties of addition (commutative, zero property)', 'Estimating sums and differences', 'Word problems with mixed operations'],
        depthLevel: 2,
        learningObjectives: 'Perform addition and subtraction of three-digit numbers with regrouping and solve related word problems',
        orderIndex: 2,
      },
      {
        topicName: 'Multiplication Introduction',
        subtopics: ['Concept of multiplication as repeated addition', 'Multiplication tables of 2, 3, 4, 5', 'Multiplying single-digit numbers', 'Word problems on multiplication'],
        depthLevel: 2,
        learningObjectives: 'Understand multiplication as repeated addition and memorise multiplication tables up to 5',
        orderIndex: 3,
      },
      {
        topicName: 'Division Introduction',
        subtopics: ['Concept of division as equal sharing', 'Division as grouping', 'Simple division facts related to tables of 2-5', 'Division word problems'],
        depthLevel: 2,
        learningObjectives: 'Understand division as equal sharing and grouping and relate it to multiplication facts',
        orderIndex: 4,
      },
      {
        topicName: 'Fractions Introduction',
        subtopics: ['Concept of half and quarter', 'Identifying halves and quarters of shapes', 'Fraction as part of a whole'],
        depthLevel: 2,
        learningObjectives: 'Develop an intuitive understanding of fractions (half and quarter) using shapes and objects',
        orderIndex: 5,
      },
      {
        topicName: 'Measurement',
        subtopics: ['Measuring length using a ruler (cm)', 'Measuring weight using standard units (kg, g)', 'Measuring capacity (litres)', 'Estimating measurements'],
        depthLevel: 2,
        learningObjectives: 'Measure length, weight and capacity using standard units and develop estimation skills',
        orderIndex: 6,
      },
      {
        topicName: 'Time and Calendar',
        subtopics: ['Reading time to the half hour and quarter hour', 'Using a calendar', 'Calculating duration of simple events', 'AM and PM concept'],
        depthLevel: 2,
        learningObjectives: 'Read time on a clock to the nearest quarter hour and use a calendar for date-related tasks',
        orderIndex: 7,
      },
      {
        topicName: 'Geometry',
        subtopics: ['2D shapes: properties and identification', '3D shapes: cube, cuboid, sphere, cylinder, cone', 'Straight and curved lines', 'Symmetry in shapes'],
        depthLevel: 2,
        learningObjectives: 'Identify and describe 2D and 3D shapes and recognise symmetry and types of lines',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 2: English ----
  {
    board: 'ICSE',
    grade: 2,
    subject: 'English',
    topics: [
      {
        topicName: 'Reading Comprehension',
        subtopics: ['Reading short passages with understanding', 'Answering questions based on passages', 'Sequencing events in a story', 'Identifying main idea of a short text'],
        depthLevel: 2,
        learningObjectives: 'Read and comprehend short passages, identify main ideas and sequence events',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Common and proper nouns', 'Pronouns (he, she, it, they)', 'Verbs: past and present tense introduction', 'Adjectives: describing words', 'Prepositions (in, on, under, behind)'],
        depthLevel: 2,
        learningObjectives: 'Understand and use nouns, pronouns, verbs, adjectives and prepositions correctly in sentences',
        orderIndex: 2,
      },
      {
        topicName: 'Creative Writing',
        subtopics: ['Writing sentences using given words', 'Picture composition (4-5 sentences)', 'Writing a short paragraph', 'Completing a story'],
        depthLevel: 2,
        learningObjectives: 'Express ideas through picture composition, short paragraphs and guided story writing',
        orderIndex: 3,
      },
      {
        topicName: 'Vocabulary Building',
        subtopics: ['Opposites (antonyms)', 'Similar words (synonyms)', 'Naming words for groups (collective nouns)', 'Compound words introduction'],
        depthLevel: 2,
        learningObjectives: 'Expand vocabulary through antonyms, synonyms, collective nouns and compound words',
        orderIndex: 4,
      },
      {
        topicName: 'Spelling and Dictation',
        subtopics: ['Spelling common words correctly', 'Dictation of sentences', 'Silent letters introduction', 'Word families (cat, bat, mat)'],
        depthLevel: 2,
        learningObjectives: 'Improve spelling accuracy through dictation practice and word family patterns',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 2: Hindi ----
  {
    board: 'ICSE',
    grade: 2,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Reading and Comprehension',
        subtopics: ['Reading short passages in Hindi', 'Answering questions from the passage', 'Story reading and retelling', 'Poem recitation and meaning'],
        depthLevel: 2,
        learningObjectives: 'Develop Hindi reading comprehension through passages, stories and poems',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Sangya (nouns) and their types', 'Sarvanaam (pronouns) introduction', 'Ling (gender) and vachan (number)', 'Vilom shabd (opposites)', 'Visheshan (adjectives) introduction'],
        depthLevel: 2,
        learningObjectives: 'Strengthen Hindi grammar through nouns, pronouns, gender, number and adjectives',
        orderIndex: 2,
      },
      {
        topicName: 'Writing Skills',
        subtopics: ['Writing short paragraphs in Hindi', 'Letter writing (informal)', 'Dictation of Hindi sentences', 'Picture description in Hindi'],
        depthLevel: 2,
        learningObjectives: 'Develop Hindi writing skills through paragraphs, informal letters and guided descriptions',
        orderIndex: 3,
      },
      {
        topicName: 'Matras and Conjunct Letters',
        subtopics: ['All matra combinations practice', 'Half letters (aadhe akshar)', 'Conjunct consonants (sanyukt akshar)', 'Words with chandrabindu, anuswar, visarg'],
        depthLevel: 2,
        learningObjectives: 'Master matra usage and conjunct consonants for accurate Hindi reading and writing',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary and Word Knowledge',
        subtopics: ['Paryayvachi shabd (synonyms)', 'Vilom shabd (antonyms)', 'Counting in Hindi up to 50', 'Names of fruits, vegetables, colours, animals in Hindi'],
        depthLevel: 1,
        learningObjectives: 'Expand Hindi vocabulary through synonyms, antonyms and thematic word lists',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 2: EVS/Science ----
  {
    board: 'ICSE',
    grade: 2,
    subject: 'EVS/Science',
    topics: [
      {
        topicName: 'Living and Non-Living Things',
        subtopics: ['Characteristics of living things', 'Examples of non-living things', 'Differences between living and non-living things', 'Natural and man-made things'],
        depthLevel: 2,
        learningObjectives: 'Distinguish between living and non-living things and classify objects as natural or man-made',
        orderIndex: 1,
      },
      {
        topicName: 'Food and Nutrition',
        subtopics: ['Sources of food (plants and animals)', 'Types of food (energy-giving, body-building, protective)', 'Healthy eating habits', 'Cooking and food preservation basics'],
        depthLevel: 2,
        learningObjectives: 'Understand food sources, basic nutrition groups and the importance of healthy eating',
        orderIndex: 2,
      },
      {
        topicName: 'Plants: Growth and Needs',
        subtopics: ['What plants need to grow (water, sunlight, air, soil)', 'Seed germination', 'Parts of a plant and their functions in detail', 'Uses of different parts of plants'],
        depthLevel: 2,
        learningObjectives: 'Understand the needs of plants, the process of germination and functions of plant parts',
        orderIndex: 3,
      },
      {
        topicName: 'Animals: Habits and Habitats',
        subtopics: ['Herbivores, carnivores and omnivores', 'Animals that live in water, on land and in air', 'Animal habitats and adaptation', 'Insects and their features'],
        depthLevel: 2,
        learningObjectives: 'Classify animals by diet and habitat and understand basic adaptations',
        orderIndex: 4,
      },
      {
        topicName: 'Air, Water and Weather',
        subtopics: ['Properties of air', 'Water cycle introduction', 'Weather instruments (thermometer, rain gauge)', 'Effects of weather on daily life'],
        depthLevel: 2,
        learningObjectives: 'Understand basic properties of air and water and relate weather to daily activities',
        orderIndex: 5,
      },
      {
        topicName: 'Our Environment',
        subtopics: ['Keeping surroundings clean', 'Sources of pollution', 'Reduce, reuse, recycle', 'Caring for the Earth'],
        depthLevel: 1,
        learningObjectives: 'Develop environmental awareness and understand simple conservation practices',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 2: Social Studies ----
  {
    board: 'ICSE',
    grade: 2,
    subject: 'Social Studies',
    topics: [
      {
        topicName: 'My School',
        subtopics: ['Parts of the school building', 'People who work in school', 'Rules we follow in school', 'Extra-curricular activities'],
        depthLevel: 1,
        learningObjectives: 'Understand the school as a community with rules, roles and activities',
        orderIndex: 1,
      },
      {
        topicName: 'Means of Transport',
        subtopics: ['Land transport', 'Water transport', 'Air transport', 'Evolution of transport', 'Traffic rules and road safety'],
        depthLevel: 2,
        learningObjectives: 'Identify different modes of transport and understand basic traffic rules',
        orderIndex: 2,
      },
      {
        topicName: 'Means of Communication',
        subtopics: ['Old means of communication (letters, pigeons)', 'Modern means (telephone, internet, email)', 'Mass media (newspaper, TV, radio)', 'Importance of communication'],
        depthLevel: 2,
        learningObjectives: 'Trace the evolution of communication and appreciate modern communication tools',
        orderIndex: 3,
      },
      {
        topicName: 'Maps and Directions',
        subtopics: ['Cardinal directions (North, South, East, West)', 'Reading simple maps', 'Locating places on a map', 'Symbols used on maps'],
        depthLevel: 2,
        learningObjectives: 'Understand cardinal directions and read simple maps with basic symbols',
        orderIndex: 4,
      },
      {
        topicName: 'Our Helpers',
        subtopics: ['Professionals in the community (farmer, teacher, doctor, soldier)', 'Tools used by different workers', 'Interdependence of community members', 'Respecting all occupations'],
        depthLevel: 1,
        learningObjectives: 'Recognise the contribution of various professionals and develop respect for all occupations',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 3
  // ==========================================================================

  // ---- Class 3: Mathematics ----
  {
    board: 'ICSE',
    grade: 3,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Numbers up to 9999',
        subtopics: ['Place value up to thousands', 'Expanded form and standard form', 'Comparing and ordering four-digit numbers', 'Rounding off to nearest 10 and 100', 'Roman numerals I to XX'],
        depthLevel: 2,
        learningObjectives: 'Work with four-digit numbers including place value, comparison, rounding and introduction to Roman numerals',
        orderIndex: 1,
      },
      {
        topicName: 'Addition and Subtraction',
        subtopics: ['Addition of four-digit numbers', 'Subtraction of four-digit numbers', 'Estimating sums and differences', 'Multi-step word problems', 'Checking answers using inverse operations'],
        depthLevel: 2,
        learningObjectives: 'Perform addition and subtraction of four-digit numbers and apply inverse operations to verify results',
        orderIndex: 2,
      },
      {
        topicName: 'Multiplication',
        subtopics: ['Multiplication tables up to 10', 'Multiplying two-digit by one-digit numbers', 'Multiplying by 10 and 100', 'Properties of multiplication', 'Word problems on multiplication'],
        depthLevel: 2,
        learningObjectives: 'Master multiplication tables up to 10 and multiply multi-digit numbers by single-digit numbers',
        orderIndex: 3,
      },
      {
        topicName: 'Division',
        subtopics: ['Division as repeated subtraction', 'Long division by single-digit divisors', 'Division with remainder', 'Relationship between multiplication and division', 'Word problems involving division'],
        depthLevel: 2,
        learningObjectives: 'Perform long division by single-digit divisors and understand the relationship between multiplication and division',
        orderIndex: 4,
      },
      {
        topicName: 'Fractions',
        subtopics: ['Numerator and denominator', 'Types of fractions: proper, improper, unit', 'Comparing like fractions', 'Equivalent fractions introduction', 'Fractions on a number line'],
        depthLevel: 2,
        learningObjectives: 'Understand fraction terminology, compare like fractions and represent fractions on a number line',
        orderIndex: 5,
      },
      {
        topicName: 'Geometry',
        subtopics: ['Point, line, ray, line segment', 'Types of angles (right, acute, obtuse)', 'Perimeter of simple shapes', 'Tangram and tessellation activities'],
        depthLevel: 2,
        learningObjectives: 'Identify geometric elements, classify angles and calculate perimeter of simple shapes',
        orderIndex: 6,
      },
      {
        topicName: 'Measurement',
        subtopics: ['Conversion between cm and m', 'Conversion between g and kg', 'Conversion between mL and L', 'Measuring using appropriate units'],
        depthLevel: 2,
        learningObjectives: 'Convert between standard units of length, weight and capacity',
        orderIndex: 7,
      },
      {
        topicName: 'Data Handling',
        subtopics: ['Collecting and organising data', 'Pictographs', 'Tally marks', 'Reading and interpreting simple bar graphs'],
        depthLevel: 2,
        learningObjectives: 'Collect data, represent it using pictographs and tally marks and interpret simple bar graphs',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 3: English ----
  {
    board: 'ICSE',
    grade: 3,
    subject: 'English',
    topics: [
      {
        topicName: 'Reading and Comprehension',
        subtopics: ['Unseen passage comprehension', 'Identifying facts and opinions in a passage', 'Making inferences from the text', 'Reading aloud with expression'],
        depthLevel: 2,
        learningObjectives: 'Comprehend unseen passages, distinguish facts from opinions and make inferences',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Types of nouns (common, proper, collective, abstract)', 'Types of pronouns (personal, possessive)', 'Tenses: simple present, past and future', 'Conjunctions (and, but, or, because)', 'Punctuation (full stop, comma, question mark, exclamation mark)'],
        depthLevel: 2,
        learningObjectives: 'Apply grammar rules for nouns, pronouns, tenses, conjunctions and punctuation in writing',
        orderIndex: 2,
      },
      {
        topicName: 'Composition',
        subtopics: ['Paragraph writing on given topics', 'Story writing from given outlines', 'Diary entry writing', 'Informal letter writing'],
        depthLevel: 2,
        learningObjectives: 'Write coherent paragraphs, stories, diary entries and informal letters',
        orderIndex: 3,
      },
      {
        topicName: 'Poetry',
        subtopics: ['Reading and understanding poems', 'Identifying rhyming words and rhythm', 'Finding the theme of a poem', 'Appreciation of imagery in poems'],
        depthLevel: 2,
        learningObjectives: 'Appreciate poetry by identifying rhyme, rhythm, theme and imagery',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary Development',
        subtopics: ['Homophones and homonyms', 'Prefixes and suffixes', 'Idioms and proverbs introduction', 'Using a dictionary'],
        depthLevel: 2,
        learningObjectives: 'Expand vocabulary through homophones, affixes, idioms and dictionary skills',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 3: Hindi ----
  {
    board: 'ICSE',
    grade: 3,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Gadyansh)',
        subtopics: ['Reading comprehension from textbook lessons', 'Unseen passage comprehension', 'Answering questions in complete sentences', 'Summary of short passages'],
        depthLevel: 2,
        learningObjectives: 'Read and comprehend Hindi passages and respond to questions accurately',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Sangya ke bhed (types of nouns)', 'Kriya (verbs) and kaal (tenses) introduction', 'Vachan (number) and ling (gender) transformation', 'Sarvnaam (pronouns)', 'Visheshan (adjectives) and visheshya'],
        depthLevel: 2,
        learningObjectives: 'Apply Hindi grammar rules for nouns, verbs, tenses, gender and number transformations',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Lekhan)',
        subtopics: ['Essay writing (nibandh) on simple topics', 'Informal letter writing (patra lekhan)', 'Picture description (chitra varnan)', 'Dictation (shrutlekh)'],
        depthLevel: 2,
        learningObjectives: 'Write essays, letters and descriptions in Hindi with correct grammar',
        orderIndex: 3,
      },
      {
        topicName: 'Poetry (Kavita)',
        subtopics: ['Poem recitation with proper pronunciation', 'Understanding the meaning of poems', 'Question answers based on poems', 'Identifying the central theme'],
        depthLevel: 2,
        learningObjectives: 'Understand and appreciate Hindi poetry through recitation and comprehension',
        orderIndex: 4,
      },
      {
        topicName: 'Word Knowledge (Shabd Gyan)',
        subtopics: ['Paryayvachi shabd (synonyms)', 'Vilom shabd (antonyms)', 'Anekarthi shabd (words with multiple meanings)', 'Muhavare (idioms) introduction'],
        depthLevel: 2,
        learningObjectives: 'Build Hindi vocabulary through synonyms, antonyms, polysemous words and common idioms',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 3: EVS/Science ----
  {
    board: 'ICSE',
    grade: 3,
    subject: 'EVS/Science',
    topics: [
      {
        topicName: 'Food and Digestion',
        subtopics: ['Sources of food', 'Balanced diet and nutrients', 'Food chain introduction', 'Digestive system basics', 'Food hygiene and safety'],
        depthLevel: 2,
        learningObjectives: 'Understand food sources, balanced diet, simple food chains and basic digestion',
        orderIndex: 1,
      },
      {
        topicName: 'The Human Body',
        subtopics: ['Skeletal system basics', 'Major organs and their functions', 'Teeth: types and care', 'Good health practices'],
        depthLevel: 2,
        learningObjectives: 'Learn about the skeletal system, major organs, dental hygiene and health practices',
        orderIndex: 2,
      },
      {
        topicName: 'Animals and Their World',
        subtopics: ['Life cycle of a butterfly and frog', 'Birds: characteristics and types', 'Animals in different habitats (desert, forest, water)', 'Endangered animals awareness'],
        depthLevel: 2,
        learningObjectives: 'Study life cycles, bird classification, animal habitats and endangered species awareness',
        orderIndex: 3,
      },
      {
        topicName: 'Plants and Their World',
        subtopics: ['Photosynthesis simplified', 'Types of roots and stems', 'Seed dispersal methods', 'Medicinal plants'],
        depthLevel: 2,
        learningObjectives: 'Understand plant nutrition, root and stem types, seed dispersal and uses of medicinal plants',
        orderIndex: 4,
      },
      {
        topicName: 'Matter and Materials',
        subtopics: ['Solids, liquids and gases', 'Properties of materials', 'Natural and man-made materials', 'Floating and sinking'],
        depthLevel: 2,
        learningObjectives: 'Classify matter into states, distinguish material properties and explore floating and sinking',
        orderIndex: 5,
      },
      {
        topicName: 'Earth and Sky',
        subtopics: ['The solar system introduction', 'Day and night', 'The moon and its phases', 'Stars and constellations basics'],
        depthLevel: 2,
        learningObjectives: 'Develop a basic understanding of the solar system, rotation of Earth and lunar phases',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 3: Social Studies ----
  {
    board: 'ICSE',
    grade: 3,
    subject: 'Social Studies',
    topics: [
      {
        topicName: 'Our Earth',
        subtopics: ['Shape and structure of the Earth', 'Land and water on the globe', 'Continents and oceans introduction', 'Maps versus globes'],
        depthLevel: 2,
        learningObjectives: 'Understand the shape of Earth, identify continents and oceans and differentiate maps from globes',
        orderIndex: 1,
      },
      {
        topicName: 'India: Physical Features',
        subtopics: ['Mountains, plains, plateaus and deserts of India', 'Major rivers of India', 'Neighbouring countries', 'India on the political map'],
        depthLevel: 2,
        learningObjectives: 'Identify major physical features and rivers of India and locate neighbouring countries',
        orderIndex: 2,
      },
      {
        topicName: 'Early Humans',
        subtopics: ['Life of early humans', 'Discovery of fire and wheel', 'From caves to settlements', 'Early tools and inventions'],
        depthLevel: 2,
        learningObjectives: 'Trace the journey of early humans from hunting-gathering to settled life',
        orderIndex: 3,
      },
      {
        topicName: 'Our Government',
        subtopics: ['Why we need a government', 'Who is the President and Prime Minister', 'The national Parliament', 'Rights and duties of citizens'],
        depthLevel: 2,
        learningObjectives: 'Understand the basic need for governance and know key national leaders and institutions',
        orderIndex: 4,
      },
      {
        topicName: 'Natural Resources and Conservation',
        subtopics: ['Renewable and non-renewable resources', 'Importance of forests and wildlife', 'Water conservation methods', 'Reducing pollution'],
        depthLevel: 2,
        learningObjectives: 'Distinguish resource types and understand the importance of conservation and pollution reduction',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 4
  // ==========================================================================

  // ---- Class 4: Mathematics ----
  {
    board: 'ICSE',
    grade: 4,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Numbers up to 99999',
        subtopics: ['Place value up to ten-thousands', 'Indian and international numbering systems introduction', 'Rounding off to nearest 1000', 'Roman numerals I to L', 'Factors and multiples introduction'],
        depthLevel: 2,
        learningObjectives: 'Extend number sense to five-digit numbers with place value, rounding and introduction to factors and multiples',
        orderIndex: 1,
      },
      {
        topicName: 'Operations on Large Numbers',
        subtopics: ['Addition and subtraction of five-digit numbers', 'Multiplication of three-digit by two-digit numbers', 'Division by two-digit divisors', 'BODMAS rule introduction', 'Multi-step word problems'],
        depthLevel: 2,
        learningObjectives: 'Perform all four operations on larger numbers and apply BODMAS rule for order of operations',
        orderIndex: 2,
      },
      {
        topicName: 'Fractions',
        subtopics: ['Like, unlike and equivalent fractions', 'Comparing and ordering fractions', 'Addition and subtraction of like fractions', 'Mixed numbers and improper fractions conversion', 'Fractions in word problems'],
        depthLevel: 2,
        learningObjectives: 'Compare fractions, convert between mixed and improper forms and perform addition and subtraction of like fractions',
        orderIndex: 3,
      },
      {
        topicName: 'Decimals Introduction',
        subtopics: ['Tenths and hundredths as decimals', 'Relationship between fractions and decimals', 'Place value in decimals', 'Comparing and ordering decimals', 'Addition and subtraction of decimals'],
        depthLevel: 2,
        learningObjectives: 'Understand decimal notation, relate decimals to fractions and perform basic decimal operations',
        orderIndex: 4,
      },
      {
        topicName: 'Geometry',
        subtopics: ['Types of lines: parallel, perpendicular, intersecting', 'Types of triangles by sides and angles', 'Quadrilaterals: properties of rectangle, square, rhombus', 'Circle: radius, diameter, centre', 'Area and perimeter of rectangles and squares'],
        depthLevel: 2,
        learningObjectives: 'Classify lines, triangles and quadrilaterals and calculate area and perimeter of rectangles and squares',
        orderIndex: 5,
      },
      {
        topicName: 'Patterns and Symmetry',
        subtopics: ['Number patterns and sequences', 'Rule-based patterns', 'Line symmetry and mirror images', 'Rotational symmetry introduction'],
        depthLevel: 2,
        learningObjectives: 'Identify and extend number patterns and understand line and rotational symmetry',
        orderIndex: 6,
      },
      {
        topicName: 'Data Handling',
        subtopics: ['Bar graphs: drawing and interpreting', 'Pie chart reading introduction', 'Organising data in tables', 'Mean (average) introduction'],
        depthLevel: 2,
        learningObjectives: 'Create and interpret bar graphs, read pie charts and calculate simple averages',
        orderIndex: 7,
      },
      {
        topicName: 'Measurement',
        subtopics: ['Conversion of units (km-m, kg-g, L-mL)', 'Measuring area using square grids', 'Time: 12-hour and 24-hour clock', 'Calculating duration of time'],
        depthLevel: 2,
        learningObjectives: 'Convert measurement units fluently and work with 12-hour and 24-hour time formats',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 4: English ----
  {
    board: 'ICSE',
    grade: 4,
    subject: 'English',
    topics: [
      {
        topicName: 'Reading and Comprehension',
        subtopics: ['Unseen prose passage comprehension', 'Unseen poem comprehension', 'Inferential and evaluative questions', 'Vocabulary from context', 'Summary writing skills'],
        depthLevel: 2,
        learningObjectives: 'Comprehend unseen prose and poetry passages and answer inferential and evaluative questions',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Degrees of comparison (adjectives)', 'Adverbs: types and usage', 'Simple, compound and complex sentences introduction', 'Direct and indirect speech introduction', 'Subject-verb agreement'],
        depthLevel: 2,
        learningObjectives: 'Use adjective degrees, adverbs, sentence types and reported speech correctly',
        orderIndex: 2,
      },
      {
        topicName: 'Composition and Writing',
        subtopics: ['Essay writing (descriptive and narrative)', 'Formal and informal letter writing', 'Story writing with moral', 'Notice writing introduction', 'Dialogue completion'],
        depthLevel: 2,
        learningObjectives: 'Write structured essays, letters, stories and notices with appropriate format and tone',
        orderIndex: 3,
      },
      {
        topicName: 'Literature',
        subtopics: ['Prose: comprehension and analysis of textbook stories', 'Poetry: theme, imagery and poetic devices', 'Character sketch writing', 'Reference to context passages'],
        depthLevel: 2,
        learningObjectives: 'Analyse prose and poetry from the textbook, identify literary devices and write character sketches',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary and Word Power',
        subtopics: ['One-word substitutions', 'Collective nouns and abstract nouns', 'Phrasal verbs', 'Spelling rules and common errors', 'Figurative language introduction'],
        depthLevel: 2,
        learningObjectives: 'Expand vocabulary through substitutions, phrasal verbs and figurative language awareness',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 4: Hindi ----
  {
    board: 'ICSE',
    grade: 4,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Gadyansh and Padyansh)',
        subtopics: ['Unseen prose passage comprehension', 'Unseen poetry comprehension', 'Summary writing in Hindi', 'Inference-based questions'],
        depthLevel: 2,
        learningObjectives: 'Comprehend unseen Hindi prose and poetry and answer inferential questions',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Kriya ke bhed (types of verbs)', 'Kaal (tenses): vartmaan, bhootkaal, bhavishyat', 'Vakya rachna (sentence formation)', 'Samucchaybodhak (conjunctions)', 'Viram chinh (punctuation marks)'],
        depthLevel: 2,
        learningObjectives: 'Apply verb types, tenses, sentence construction and punctuation rules in Hindi writing',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Lekhan)',
        subtopics: ['Essay writing on descriptive topics', 'Formal letter writing introduction', 'Story writing (kahani lekhan)', 'Paragraph writing', 'Application writing'],
        depthLevel: 2,
        learningObjectives: 'Write essays, formal letters, stories and applications in Hindi with correct grammar',
        orderIndex: 3,
      },
      {
        topicName: 'Literature (Sahitya)',
        subtopics: ['Prose lessons comprehension', 'Poetry analysis and explanation', 'Reference to context from textbook', 'Character analysis from stories'],
        depthLevel: 2,
        learningObjectives: 'Analyse Hindi prose and poetry from the textbook with reference to context',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary (Shabd Bhander)',
        subtopics: ['Muhavare (idioms) and lokoktiyan (proverbs)', 'Samas (compound words) introduction', 'Upsarg and pratyay (prefixes and suffixes)', 'Shabd yugm (word pairs with different meanings)'],
        depthLevel: 2,
        learningObjectives: 'Enrich Hindi vocabulary through idioms, proverbs, compound words and affixes',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 4: EVS/Science ----
  {
    board: 'ICSE',
    grade: 4,
    subject: 'EVS/Science',
    topics: [
      {
        topicName: 'Adaptations in Animals',
        subtopics: ['Terrestrial adaptations', 'Aquatic adaptations', 'Aerial adaptations', 'Camouflage and mimicry', 'Migration and hibernation'],
        depthLevel: 2,
        learningObjectives: 'Understand how animals adapt to different environments through structural and behavioural changes',
        orderIndex: 1,
      },
      {
        topicName: 'Adaptations in Plants',
        subtopics: ['Desert plants and their features', 'Aquatic plants and their features', 'Mountain plants', 'Insectivorous plants', 'Parasitic plants'],
        depthLevel: 2,
        learningObjectives: 'Identify how plants adapt to different habitats including extreme environments',
        orderIndex: 2,
      },
      {
        topicName: 'Human Body Systems',
        subtopics: ['Digestive system in detail', 'Respiratory system basics', 'Circulatory system introduction', 'Nervous system basics', 'Importance of exercise and rest'],
        depthLevel: 2,
        learningObjectives: 'Understand the major organ systems of the human body and their basic functions',
        orderIndex: 3,
      },
      {
        topicName: 'Force, Work and Energy',
        subtopics: ['Types of forces (push, pull, friction, gravity)', 'Simple machines (lever, pulley, wheel and axle)', 'Forms of energy (heat, light, sound)', 'Energy transformation examples'],
        depthLevel: 2,
        learningObjectives: 'Understand different types of forces, simple machines and forms of energy',
        orderIndex: 4,
      },
      {
        topicName: 'Rocks, Soil and Minerals',
        subtopics: ['Types of rocks (igneous, sedimentary, metamorphic)', 'Types of soil and their properties', 'Soil erosion and conservation', 'Uses of minerals in daily life'],
        depthLevel: 2,
        learningObjectives: 'Classify rocks and soil types and understand soil conservation and mineral usage',
        orderIndex: 5,
      },
      {
        topicName: 'Weather and Climate',
        subtopics: ['Difference between weather and climate', 'Factors affecting weather', 'Climatic zones of India', 'Natural disasters: floods, droughts, cyclones'],
        depthLevel: 2,
        learningObjectives: 'Distinguish weather from climate and understand climatic zones and natural disasters',
        orderIndex: 6,
      },
      {
        topicName: 'Environmental Conservation',
        subtopics: ['Deforestation and its effects', 'Wildlife conservation and national parks', 'Waste management (biodegradable and non-biodegradable)', 'Water pollution and purification'],
        depthLevel: 2,
        learningObjectives: 'Understand environmental threats and conservation measures including waste management and water purification',
        orderIndex: 7,
      },
    ],
  },

  // ---- Class 4: Social Studies ----
  {
    board: 'ICSE',
    grade: 4,
    subject: 'Social Studies',
    topics: [
      {
        topicName: 'India: States and Union Territories',
        subtopics: ['States and their capitals', 'Union territories of India', 'Languages and cultures of different states', 'India on the political map'],
        depthLevel: 2,
        learningObjectives: 'Identify all states, union territories and their capitals and appreciate cultural diversity',
        orderIndex: 1,
      },
      {
        topicName: 'Ancient Indian Civilisations',
        subtopics: ['Indus Valley Civilisation', 'Vedic period and life', 'Great rulers: Ashoka and Chandragupta', 'Ancient Indian contributions to science and mathematics'],
        depthLevel: 2,
        learningObjectives: 'Learn about ancient Indian civilisations, their achievements and contributions',
        orderIndex: 2,
      },
      {
        topicName: 'Maps and Globes',
        subtopics: ['Components of a map (title, legend, scale, compass)', 'Types of maps (physical, political, thematic)', 'Grid references and coordinates introduction', 'Locating places using latitude and longitude basics'],
        depthLevel: 2,
        learningObjectives: 'Read and interpret different types of maps and understand basic map components',
        orderIndex: 3,
      },
      {
        topicName: 'Local Self-Government',
        subtopics: ['Panchayati Raj system', 'Municipal corporation and municipality', 'Role of elected representatives', 'How local bodies serve the community'],
        depthLevel: 2,
        learningObjectives: 'Understand the structure and function of local self-government bodies',
        orderIndex: 4,
      },
      {
        topicName: 'Agriculture and Industries',
        subtopics: ['Types of farming in India', 'Major crops of India', 'Types of industries (cottage, small-scale, large-scale)', 'Importance of agriculture and industry to the economy'],
        depthLevel: 2,
        learningObjectives: 'Understand Indian agriculture, major crops and the role of industries in economic development',
        orderIndex: 5,
      },
    ],
  },

  // ==========================================================================
  // CLASS 5
  // ==========================================================================

  // ---- Class 5: Mathematics ----
  {
    board: 'ICSE',
    grade: 5,
    subject: 'Mathematics',
    topics: [
      {
        topicName: 'Large Numbers',
        subtopics: ['Numbers up to 10 lakh (1 million)', 'Indian and international place value systems', 'Roman numerals I to C', 'Prime and composite numbers', 'Highest Common Factor and Lowest Common Multiple'],
        depthLevel: 2,
        learningObjectives: 'Work with numbers up to 10 lakh, understand both numbering systems and find HCF and LCM',
        orderIndex: 1,
      },
      {
        topicName: 'Fractions and Decimals',
        subtopics: ['Addition and subtraction of unlike fractions', 'Multiplication of fractions', 'Decimal operations (all four operations)', 'Converting between fractions, decimals and percentages', 'Word problems involving fractions and decimals'],
        depthLevel: 2,
        learningObjectives: 'Perform all operations on fractions and decimals and convert between different representations',
        orderIndex: 2,
      },
      {
        topicName: 'Percentage',
        subtopics: ['Concept of percentage as per hundred', 'Converting fractions and decimals to percentages', 'Finding percentage of a given number', 'Simple word problems on percentage'],
        depthLevel: 2,
        learningObjectives: 'Understand percentage concept and apply it to conversions and real-world problems',
        orderIndex: 3,
      },
      {
        topicName: 'Geometry',
        subtopics: ['Types of angles and their measurement using protractor', 'Properties of triangles (angle sum property)', 'Congruent and similar shapes introduction', 'Nets of 3D shapes', 'Construction of line segments and angles'],
        depthLevel: 2,
        learningObjectives: 'Measure and construct angles, understand triangle properties and explore 3D shape nets',
        orderIndex: 4,
      },
      {
        topicName: 'Area, Perimeter and Volume',
        subtopics: ['Area and perimeter of triangles', 'Area and perimeter of composite shapes', 'Volume of cubes and cuboids', 'Relationship between area and perimeter'],
        depthLevel: 2,
        learningObjectives: 'Calculate area and perimeter of various shapes and volume of cubes and cuboids',
        orderIndex: 5,
      },
      {
        topicName: 'Profit and Loss',
        subtopics: ['Cost price, selling price and profit/loss', 'Calculating profit and loss', 'Simple interest introduction', 'Real-life money problems'],
        depthLevel: 2,
        learningObjectives: 'Solve problems involving profit, loss and simple interest in everyday contexts',
        orderIndex: 6,
      },
      {
        topicName: 'Data Handling',
        subtopics: ['Bar graphs and double bar graphs', 'Line graphs introduction', 'Mean, median and mode introduction', 'Probability as chance (likely, unlikely, certain, impossible)'],
        depthLevel: 2,
        learningObjectives: 'Create and interpret various graphs and understand basic measures of central tendency and probability',
        orderIndex: 7,
      },
      {
        topicName: 'Algebra Introduction',
        subtopics: ['Using letters for numbers', 'Simple algebraic expressions', 'Evaluating expressions', 'Simple equations'],
        depthLevel: 2,
        learningObjectives: 'Introduce algebraic thinking through variables, simple expressions and equations',
        orderIndex: 8,
      },
    ],
  },

  // ---- Class 5: English ----
  {
    board: 'ICSE',
    grade: 5,
    subject: 'English',
    topics: [
      {
        topicName: 'Reading and Comprehension',
        subtopics: ['Unseen passage: prose and poetry', 'Critical thinking questions', 'Identifying literary devices in passages', 'Summarising a passage', 'Vocabulary in context'],
        depthLevel: 2,
        learningObjectives: 'Analyse unseen passages critically, identify literary devices and demonstrate summary skills',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar',
        subtopics: ['Active and passive voice', 'Direct and indirect speech', 'Conditional sentences introduction', 'Relative clauses', 'Concord (subject-verb agreement in complex sentences)'],
        depthLevel: 2,
        learningObjectives: 'Apply voice, speech, conditional and clause structures correctly in writing',
        orderIndex: 2,
      },
      {
        topicName: 'Composition',
        subtopics: ['Argumentative essay introduction', 'Formal letter and email writing', 'Report writing introduction', 'Diary entry and personal narrative', 'Precis writing introduction'],
        depthLevel: 2,
        learningObjectives: 'Write different types of compositions including arguments, reports and formal correspondence',
        orderIndex: 3,
      },
      {
        topicName: 'Literature',
        subtopics: ['Detailed study of prose texts', 'Poetry appreciation with literary devices', 'Theme and character analysis', 'Reference to context with interpretation'],
        depthLevel: 2,
        learningObjectives: 'Engage deeply with prescribed literature through theme, character and device analysis',
        orderIndex: 4,
      },
      {
        topicName: 'Vocabulary and Language Skills',
        subtopics: ['Analogies and word relationships', 'Root words, prefixes and suffixes', 'Common idioms and phrases', 'Sentence transformation exercises'],
        depthLevel: 2,
        learningObjectives: 'Strengthen vocabulary through analogies, word formation and sentence transformation',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 5: Hindi ----
  {
    board: 'ICSE',
    grade: 5,
    subject: 'Hindi',
    topics: [
      {
        topicName: 'Comprehension (Apathit Gadyansh)',
        subtopics: ['Unseen prose comprehension', 'Unseen poetry comprehension', 'Inference and analysis questions', 'Summary writing in Hindi'],
        depthLevel: 2,
        learningObjectives: 'Independently comprehend unseen Hindi passages and poems with analysis',
        orderIndex: 1,
      },
      {
        topicName: 'Grammar (Vyakaran)',
        subtopics: ['Samas (compound words) introduction', 'Sandhi (word joining) introduction', 'Alankar (figures of speech) introduction', 'Vakya bhed (types of sentences)', 'Karak (case markers)'],
        depthLevel: 2,
        learningObjectives: 'Apply advanced Hindi grammar including compound words, sentence types and case markers',
        orderIndex: 2,
      },
      {
        topicName: 'Writing (Lekhan)',
        subtopics: ['Formal and informal letter writing', 'Essay writing on social topics', 'Story completion', 'Dialogue writing', 'Paragraph writing on current events'],
        depthLevel: 2,
        learningObjectives: 'Write various text types in Hindi with correct format, grammar and expression',
        orderIndex: 3,
      },
      {
        topicName: 'Literature (Sahitya)',
        subtopics: ['Detailed prose comprehension', 'Poetry explanation (bhavarth)', 'Character analysis from stories', 'Theme identification and discussion'],
        depthLevel: 2,
        learningObjectives: 'Analyse Hindi prose and poetry from the textbook for theme, character and meaning',
        orderIndex: 4,
      },
      {
        topicName: 'Advanced Vocabulary',
        subtopics: ['Muhavare aur lokoktiyan (idioms and proverbs)', 'Anekarthi shabd (polysemous words)', 'Shabd shudhi (word correction)', 'Vakya shudhi (sentence correction)'],
        depthLevel: 2,
        learningObjectives: 'Master Hindi idioms, proverbs and error correction in words and sentences',
        orderIndex: 5,
      },
    ],
  },

  // ---- Class 5: EVS/Science ----
  {
    board: 'ICSE',
    grade: 5,
    subject: 'EVS/Science',
    topics: [
      {
        topicName: 'Human Body: Organ Systems',
        subtopics: ['Circulatory system in detail', 'Respiratory system in detail', 'Excretory system', 'Reproductive system introduction (age-appropriate)', 'Diseases and prevention'],
        depthLevel: 2,
        learningObjectives: 'Understand major organ systems in detail and learn about common diseases and prevention',
        orderIndex: 1,
      },
      {
        topicName: 'Plant Life',
        subtopics: ['Photosynthesis in detail', 'Reproduction in plants (sexual and asexual)', 'Pollination and fertilisation', 'Transpiration and respiration in plants', 'Fungi and bacteria introduction'],
        depthLevel: 2,
        learningObjectives: 'Study advanced plant processes including photosynthesis, reproduction, pollination and transpiration',
        orderIndex: 2,
      },
      {
        topicName: 'Matter and Its Properties',
        subtopics: ['States of matter and changes of state', 'Evaporation, condensation, melting, freezing', 'Mixtures and solutions', 'Separation techniques (filtration, evaporation, sieving)', 'Reversible and irreversible changes'],
        depthLevel: 2,
        learningObjectives: 'Understand states of matter, changes of state, mixtures and separation methods',
        orderIndex: 3,
      },
      {
        topicName: 'Light and Sound',
        subtopics: ['Sources of light', 'Transparent, translucent and opaque objects', 'Shadows and eclipses', 'Sound production and propagation', 'Properties of sound (pitch, volume)'],
        depthLevel: 2,
        learningObjectives: 'Understand basic properties of light and sound and how they travel',
        orderIndex: 4,
      },
      {
        topicName: 'Earth and the Universe',
        subtopics: ['Solar system in detail', 'Rotation and revolution of the Earth', 'Seasons and their causes', 'Phases of the moon explained', 'Eclipses: solar and lunar'],
        depthLevel: 2,
        learningObjectives: 'Explain Earth movements, causes of seasons, moon phases and eclipses',
        orderIndex: 5,
      },
      {
        topicName: 'Natural Resources and Energy',
        subtopics: ['Renewable energy sources (solar, wind, hydro)', 'Non-renewable energy sources (coal, petroleum)', 'Conservation of natural resources', 'Global warming and climate change introduction'],
        depthLevel: 2,
        learningObjectives: 'Understand energy sources, conservation needs and basic climate change awareness',
        orderIndex: 6,
      },
    ],
  },

  // ---- Class 5: Social Studies ----
  {
    board: 'ICSE',
    grade: 5,
    subject: 'Social Studies',
    topics: [
      {
        topicName: 'Medieval India',
        subtopics: ['Delhi Sultanate', 'Mughal Empire: Akbar, Shah Jahan', 'Bhakti and Sufi movements', 'Art and architecture of medieval India', 'Trade and commerce in medieval India'],
        depthLevel: 2,
        learningObjectives: 'Study medieval Indian history including major dynasties, cultural movements and architectural achievements',
        orderIndex: 1,
      },
      {
        topicName: 'The Indian Freedom Struggle',
        subtopics: ['British East India Company', 'Revolt of 1857', 'National leaders: Gandhi, Nehru, Subhash Chandra Bose', 'Important events leading to independence', 'Partition and independence 1947'],
        depthLevel: 2,
        learningObjectives: 'Understand the Indian freedom movement, key leaders and events leading to independence',
        orderIndex: 2,
      },
      {
        topicName: 'The Constitution and Government',
        subtopics: ['The Indian Constitution: features', 'Fundamental rights and duties', 'Three branches of government (legislature, executive, judiciary)', 'Elections and democracy', 'National symbols and their significance'],
        depthLevel: 2,
        learningObjectives: 'Understand the Indian Constitution, fundamental rights, branches of government and democratic processes',
        orderIndex: 3,
      },
      {
        topicName: 'Geography of India',
        subtopics: ['Climate zones of India', 'Natural vegetation and wildlife', 'Major rivers and river systems', 'Soil types and agriculture', 'Population distribution'],
        depthLevel: 2,
        learningObjectives: 'Study Indian physical geography including climate, vegetation, rivers, soil and population patterns',
        orderIndex: 4,
      },
      {
        topicName: 'World Geography',
        subtopics: ['Continents and major countries', 'Oceans and water bodies', 'Time zones and the International Date Line', 'Major landforms of the world', 'Global environmental concerns'],
        depthLevel: 2,
        learningObjectives: 'Develop awareness of world geography including continents, oceans, time zones and global issues',
        orderIndex: 5,
      },
    ],
  },
];
