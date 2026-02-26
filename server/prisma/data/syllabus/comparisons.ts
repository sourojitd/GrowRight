export interface BoardComparisonSummary {
  grade: number;
  overview: string;
  boardStrengths: Record<string, string[]>;
  recommendation: string;
}

export const boardComparisons: BoardComparisonSummary[] = [
  {
    grade: 1,
    overview:
      'At the Class 1 level, CBSE uses NCERT textbooks like Math-Magic and Marigold that emphasize play-based numeracy and early literacy through stories and poems. ICSE follows a more structured English-language curriculum with early cursive writing and a slightly broader vocabulary exposure. IB PYP does not use fixed textbooks at all, instead organizing learning around six transdisciplinary themes such as "Who We Are" and "How We Express Ourselves," encouraging exploration through inquiry rather than rote recall.',
    boardStrengths: {
      CBSE: [
        'NCERT Math-Magic textbook introduces numbers through visual puzzles and hands-on activities aligned with NEP 2020 foundational stage goals',
        'Marigold English reader uses Indian cultural stories and poems that build contextual vocabulary for first-generation English learners',
        'Standardized curriculum ensures seamless school transfers across any city in India',
        'Minimal homework burden at this stage, supporting age-appropriate play and rest',
      ],
      ICSE: [
        'Early introduction to cursive handwriting builds fine motor skills and writing fluency ahead of other boards',
        'Broader English vocabulary exposure through supplementary readers alongside the main textbook',
        'Environmental Studies (EVS) content is more detailed, covering topics like community helpers and seasons with greater depth',
        'Internal assessment model reduces exam pressure and evaluates participation, projects, and classroom engagement',
      ],
      IB: [
        'PYP transdisciplinary themes like "Sharing the Planet" and "How the World Works" build curiosity-driven learning habits from day one',
        'Portfolio-based assessment replaces written tests entirely, documenting growth through artwork, observations, and teacher notes',
        'Learner Profile attributes (inquirer, thinker, communicator) are explicitly nurtured, building social-emotional foundations',
        'Multi-sensory learning stations and manipulatives are central to math and language instruction, not supplementary',
        'Multilingual exposure is encouraged, with mother tongue valued alongside English instruction',
      ],
    },
    recommendation:
      'For Class 1, IB PYP is ideal if your child thrives in unstructured, exploratory environments and you can commit to the fee structure long-term. CBSE is the strongest choice for families who may relocate frequently or want a proven, low-pressure foundational curriculum. ICSE suits parents who want slightly more academic rigour and early English fluency without the IB price tag.',
  },
  {
    grade: 2,
    overview:
      'Class 2 continues the foundational stage across all boards, but divergences become visible. CBSE deepens numeracy through Math-Magic Book 2 with multi-digit addition and subtraction via story problems, while Raindrops (English supplementary reader) builds comprehension skills. ICSE introduces more formal grammar concepts and expects paragraph-level writing, pushing literacy benchmarks higher. IB PYP students at this level begin their first structured Units of Inquiry, learning to ask questions, gather information, and present simple findings to peers.',
    boardStrengths: {
      CBSE: [
        'Math-Magic Book 2 uses real-life contexts like shopping and measurement that make abstract number concepts tangible',
        'NEP 2020 foundational literacy and numeracy (FLN) mission directly shapes Class 2 NCERT pedagogy with clear learning outcomes',
        'EVS textbook "Looking Around" integrates science and social studies naturally, avoiding subject silos at this age',
        'Large ecosystem of free NCERT resources, DIKSHA app content, and teacher training materials ensures consistent quality nationwide',
      ],
      ICSE: [
        'Formal grammar instruction (nouns, verbs, adjectives, simple tenses) starts earlier, building a strong syntactic foundation',
        'Separate attention to creative writing through picture composition and short story exercises',
        'Mathematics curriculum includes basic multiplication concepts, slightly ahead of CBSE pacing at this grade',
        'Science content distinguishes between living and non-living things with classification exercises that develop early analytical thinking',
      ],
      IB: [
        'Units of Inquiry teach the research cycle (tuning in, finding out, sorting out, going further) at an age-appropriate level',
        'Student-initiated inquiries are documented, encouraging children to own their learning questions',
        'Arts integration is mandatory, not optional, with music, visual arts, and drama woven into academic units',
        'Collaborative group projects build teamwork and communication skills that most traditional boards defer to later grades',
        'Approaches to Learning (ATL) skills like self-management and social skills are explicitly taught and assessed',
      ],
    },
    recommendation:
      'ICSE is a strong pick at Class 2 for parents who want their child reading and writing confidently in English ahead of peers. CBSE remains the best value option with well-designed NCERT materials that balance learning and play. IB PYP is worth the investment if you prioritize inquiry skills, creativity, and collaborative learning over content coverage at this early stage.',
  },
  {
    grade: 3,
    overview:
      'Class 3 is a transitional year where CBSE introduces the EVS textbook "Looking Around" with more structured science and social content, and math expectations shift to multiplication tables and basic fractions. ICSE schools typically begin formal subject-wise notebooks and more rigorous written assessments, including short-answer and descriptive questions. IB PYP students undertake more complex Units of Inquiry with visible thinking routines (See-Think-Wonder, KWL charts) and begin maintaining structured inquiry journals.',
    boardStrengths: {
      CBSE: [
        'NCERT "Looking Around" textbook uses engaging narratives and activities to teach food, shelter, water, and family concepts without rote memorization',
        'Multiplication tables and basic fractions are introduced through visual models and patterns in Math-Magic Book 3',
        'Continuous and Comprehensive Evaluation (CCE) framework keeps assessment low-stakes with project work and oral tests',
        'NEP 2020 integration means experiential learning, art-integration, and sports are now formally part of the curriculum',
      ],
      ICSE: [
        'Science curriculum introduces plant and animal life cycles with detailed diagrams and labeling exercises that build scientific illustration skills',
        'English literature includes abridged classics and longer reading passages that develop sustained reading stamina',
        'Mathematics covers geometry basics including angles and shapes with more formal vocabulary than CBSE at this stage',
        'Hindi or second language instruction is more intensive, with formal grammar and short essay writing',
        'Regular written assessments build exam familiarity gradually, easing the transition to higher-stakes testing later',
      ],
      IB: [
        'Visible thinking routines (See-Think-Wonder, Think-Pair-Share) become embedded classroom practice, building metacognitive awareness',
        'Student-led conferences replace traditional parent-teacher meetings, giving children agency in communicating their own learning progress',
        'Exhibition-style presentations of inquiry findings develop public speaking and presentation skills years before other boards address them',
        'Formative assessment through learning journals and self-reflection checklists teaches students to evaluate their own growth',
      ],
    },
    recommendation:
      'At Class 3, ICSE is well-suited for children who are strong readers and enjoy structured academic challenges. CBSE works best for a balanced approach where content is introduced gently with room for extracurricular exploration. IB PYP is the strongest option for developing independent thinking and self-assessment habits, particularly for families considering international education pathways.',
  },
  {
    grade: 4,
    overview:
      'Class 4 marks the beginning of more serious academic expectations across boards. CBSE NCERT textbooks now cover multi-step word problems, detailed map reading in EVS, and longer comprehension passages in English. ICSE significantly deepens content breadth with separate science and social studies textbooks, and English literature selections grow substantially in length and complexity. IB PYP students in their penultimate PYP year begin preparing for the Grade 5 Exhibition, working on sustained inquiry projects that require research planning, data collection, and structured argumentation.',
    boardStrengths: {
      CBSE: [
        'Math-Magic Book 4 introduces factors, multiples, and basic data handling through contextual problems rooted in Indian daily life',
        'EVS chapters on governance, natural resources, and historical monuments provide early civic and environmental awareness',
        'NCERT approach of embedding values (gender equality, environmental stewardship) into content rather than treating them as separate moral science lessons',
        'Free digital content through DIKSHA platform offers interactive exercises, videos, and practice tests for self-paced learning',
      ],
      ICSE: [
        'Separate science textbook with dedicated chapters on matter, force, and simple machines introduces formal scientific concepts earlier',
        'Social studies covers ancient Indian civilizations with primary source references, building historical inquiry skills',
        'English curriculum includes poetry appreciation with meter and rhyme scheme identification, developing literary analysis ability',
        'Mathematics introduces basic algebraic thinking through pattern recognition and simple equations with unknowns',
        'Computer studies as a formal subject introduces typing, basic software use, and introductory coding concepts',
      ],
      IB: [
        'Pre-Exhibition inquiry skills including formulating central ideas, developing lines of inquiry, and citing simple sources',
        'Transdisciplinary theme "Where We Are in Place and Time" connects geography, history, and personal narrative in ways that build global awareness',
        'Student agency framework lets learners choose aspects of what, how, and where they learn within structured inquiry units',
        'Assessment criteria are shared with students upfront, developing self-monitoring and goal-setting habits',
      ],
    },
    recommendation:
      'ICSE is excellent at Class 4 for academically motivated children who can handle a heavier workload and benefit from early subject specialization. CBSE is the pragmatic choice for well-rounded development without excessive academic pressure. IB PYP offers unmatched skill development in research, presentation, and self-directed learning, but parents should ensure their child is comfortable with open-ended tasks rather than clearly defined right answers.',
  },
  {
    grade: 5,
    overview:
      'Class 5 is a milestone year. CBSE uses it as the culmination of the foundational-preparatory stage under NEP 2020, with NCERT textbooks completing the EVS cycle and introducing more rigorous math concepts like decimals and percentages. ICSE schools often conduct their first formal board-pattern examinations at this level, testing students across six or more subjects with descriptive answers. IB PYP culminates in the PYP Exhibition, a major collaborative inquiry project where students identify a real-world issue, research it over several weeks, and present findings and proposed actions to the school community.',
    boardStrengths: {
      CBSE: [
        'NEP 2020 preparatory stage completion means students are assessed on conceptual understanding rather than memorization through project-based evaluations',
        'NCERT Math textbook introduces decimals, percentages, and profit-loss concepts that directly connect to real-world financial literacy',
        'Environmental Studies culmination covers ecosystems, pollution, and conservation with action-oriented projects',
        'Smooth transition pathway to Class 6 middle school with NCERT subject-wise textbooks already familiar in format and approach',
      ],
      ICSE: [
        'Board-pattern exam practice develops time management, answer structuring, and revision skills that pay dividends in later years',
        'English literature curriculum includes full short stories and longer poetry that require inference and thematic analysis',
        'Science curriculum covers human body systems (digestive, respiratory, circulatory) with detailed diagrams and terminology',
        'Geography introduces globe, latitude, longitude, and Indian physical features with map-based exercises',
        'GK and current affairs components keep students aware of national and global events, building general awareness early',
      ],
      IB: [
        'PYP Exhibition is a capstone project requiring sustained inquiry, collaboration, time management, and public presentation over 6-8 weeks',
        'Students demonstrate all Learner Profile attributes and Approaches to Learning skills through the Exhibition, making growth tangible',
        'Action component of Exhibition requires students to propose real solutions, connecting learning to community impact',
        'Exhibition experience develops project management skills that most students only encounter in college',
        'Smooth conceptual bridge to MYP as inquiry skills transition from transdisciplinary themes to subject-specific investigations',
      ],
    },
    recommendation:
      'Class 5 is a decision point for many families. If your child is in IB PYP, the Exhibition experience alone is transformative and worth completing before any board switch. ICSE students who handle the Class 5 exam workload well are set up for academic success in middle school. CBSE provides the smoothest, most stress-free transition to Class 6, especially under the NEP 2020 framework that delays high-stakes testing.',
  },
  {
    grade: 6,
    overview:
      'Class 6 is a structural shift across all boards. CBSE introduces separate NCERT textbooks for Science (with the new integrated approach under NEP 2020), Mathematics, History (Our Pasts), Geography (The Earth: Our Habitat), Civics (Social and Political Life), and English (Honeysuckle and A Pact with the Sun). ICSE splits science into Physics, Chemistry, and Biology as separate subjects from this grade itself, each with its own textbook and dedicated teacher, which is a significant differentiator. IB MYP begins with eight subject groups and the introduction of Interdisciplinary Units, Global Contexts, and criterion-referenced assessment.',
    boardStrengths: {
      CBSE: [
        'NCERT Science textbook integrates physics, chemistry, and biology concepts thematically, showing interconnections between disciplines',
        'History textbook "Our Pasts" uses primary source excerpts, timelines, and map-based activities that teach historical thinking, not just facts',
        'NEP 2020 middle stage emphasizes experiential learning with mandated art-integrated and sport-integrated education',
        'Introduction of coding and computational thinking as part of the curriculum through the "Computers and Communication Technology" subject',
        'Affordable textbooks and vast free resource ecosystem (DIKSHA, NCERT official solutions) ensure equitable access',
      ],
      ICSE: [
        'Separate Physics, Chemistry, and Biology subjects from Class 6 provide deeper conceptual understanding and discipline-specific lab work',
        'English literature selections include works by international and Indian authors with formal literary analysis (character study, theme identification)',
        'History and Civics are taught as distinct subjects with dedicated attention, unlike the combined Social Science approach in CBSE',
        'Mathematics introduces set theory, basic number theory, and algebraic expressions with greater formal rigour',
        'Internal assessment contributes meaningfully to final grades, rewarding consistent effort and practical skills over single-exam performance',
      ],
      IB: [
        'MYP Global Contexts (Identities and Relationships, Orientation in Space and Time, etc.) frame every subject in real-world relevance',
        'Criterion-referenced assessment with four criteria per subject provides specific, actionable feedback instead of a single percentage score',
        'Interdisciplinary Units explicitly connect two or more subjects, teaching students to think across disciplines',
        'Service as Action component introduces community engagement requirements that build empathy and civic responsibility',
        'Approaches to Learning (ATL) skills framework covers thinking, communication, social, self-management, and research skills explicitly',
      ],
    },
    recommendation:
      'If your child is inclined toward science and you want early depth, ICSE offers an unmatched advantage with separate science subjects from Class 6. CBSE is ideal for students who benefit from an integrated, less pressured approach and want strong competitive exam foundations built gradually. IB MYP suits globally-minded learners who thrive with project-based work and criterion-referenced feedback, but the transition from a non-IB school can be challenging at this stage.',
  },
  {
    grade: 7,
    overview:
      'Class 7 deepens subject-specific rigour across boards. CBSE NCERT Science covers topics like electric circuits, acids and bases, and reproduction in plants with a balanced theory-and-activity approach. ICSE Physics now covers measurement, motion, and heat with numerical problem-solving, while Chemistry introduces elements, compounds, and chemical reactions with lab practicals. IB MYP students tackle more sophisticated Global Context projects and begin developing their personal project management skills, with assessment criteria becoming more demanding in each subject group.',
    boardStrengths: {
      CBSE: [
        'NCERT Science textbook chapters on weather, climate, and natural disasters build environmental awareness critical for climate-literate citizens',
        'Mathematics covers congruence, symmetry, and algebraic expressions with a strong visual and pattern-based approach',
        'Social Science curriculum introduces concepts of democracy, equality, and media literacy that align with NEP 2020 citizenship goals',
        'Balanced workload allows time for Olympiad preparation (SOF, NTSE foundation) that many students begin at this stage',
        'AI and coding modules are increasingly integrated into the curriculum, introducing computational thinking early',
      ],
      ICSE: [
        'Physics curriculum includes numerical problem-solving with units and significant figures, building quantitative reasoning skills',
        'Chemistry lab practicals such as separation of mixtures and pH testing develop hands-on scientific methodology',
        'Biology covers detailed plant and animal taxonomy with microscope-based observations in well-equipped school labs',
        'English requires essay writing of 250+ words on argumentative and descriptive topics, significantly building writing stamina',
        'Second language (Hindi/French/German) instruction reaches conversational fluency goals with grammar and composition',
      ],
      IB: [
        'Design cycle (Inquiring, Developing, Creating, Evaluating) in MYP Design courses teaches systematic innovation and prototyping thinking',
        'Sciences use the scientific inquiry framework with student-designed experiments, not just prescribed lab procedures',
        'Language and Literature courses introduce media analysis (advertisements, film, digital texts) alongside traditional literary study',
        'MYP assessment rubrics are transparent and shared in advance, teaching students to self-assess against clear criteria',
        'Physical and Health Education focuses on wellness, nutrition, and mental health alongside athletic skills',
      ],
    },
    recommendation:
      'Class 7 in ICSE demands discipline and consistent study habits, making it best for students who are academically self-motivated and enjoy in-depth subject exploration. CBSE strikes an excellent balance for students preparing for future competitive exams while maintaining breadth across interests. IB MYP is the top choice for creative, project-oriented learners who perform better with continuous assessment than periodic exams.',
  },
  {
    grade: 8,
    overview:
      'Class 8 is when academic stakes begin to rise visibly. CBSE NCERT introduces more abstract mathematics (linear equations, quadrilaterals, data handling with probability), while Science covers topics like friction, sound, and the cell. ICSE students face increasingly board-exam-style question papers in school assessments, with Science subjects demanding formal derivations and mathematical applications. IB MYP students begin building toward the MYP Personal Project (completed in Grade 10), developing long-term project planning skills and deepening their engagement with Service as Action.',
    boardStrengths: {
      CBSE: [
        'NCERT Mathematics introduces algebraic identities, factorization, and linear equations with clear, step-by-step worked examples',
        'Science chapters on combustion, metals, and synthetic materials connect chemistry to everyday life and environmental impact',
        'Social Science covers the Indian independence movement, the Constitution, and resource management with document-based questions',
        'NEP 2020 vocational exposure begins, introducing students to fields like agriculture, healthcare, and digital skills through project work',
        'Strong foundation for NTSE (National Talent Search Examination) preparation which many students attempt in Class 10',
      ],
      ICSE: [
        'Physics covers force, pressure, and energy with quantitative problems that develop mathematical physics skills early',
        'Chemistry introduces atomic structure, periodic table basics, and chemical bonding ahead of most CBSE schools',
        'Biology covers the endocrine and nervous systems with detailed diagrams and terminology matching Class 9-10 CBSE depth',
        'English literature includes Shakespearean excerpts and Indian classical authors, building cultural and literary breadth',
        'History covers the Indian national movement with source-based questions that develop critical analysis of historical evidence',
      ],
      IB: [
        'Personal Project groundwork begins with students identifying areas of personal interest and connecting them to Global Contexts',
        'Sciences emphasize experimental design, data analysis, and error evaluation, building genuine scientific literacy',
        'Mathematics explores patterns, algebra, and statistics with real-world data sets and technology-assisted exploration (GeoGebra, Desmos)',
        'Language Acquisition courses target bilingual or trilingual proficiency with cultural immersion and authentic text engagement',
        'Service as Action hours require sustained community engagement, with student reflection journals documenting personal growth',
      ],
    },
    recommendation:
      'Class 8 is the last comfortable year to switch boards. CBSE is optimal for families targeting competitive exams in Class 11-12 as NCERT concepts map directly to JEE/NEET syllabi. ICSE offers the most thorough subject-level preparation for students who want deep academic mastery. IB MYP is best for students committed to the full IB pathway through DP, as its value compounds over time rather than being transferable to other board exam systems.',
  },
  {
    grade: 9,
    overview:
      'Class 9 is a critical year across boards as it forms the first year of the board examination cycle. CBSE Class 9 syllabi directly feed into the Class 10 board exams, with NCERT textbooks covering topics like number systems, Euclidean geometry, motion, and atoms/molecules at a level that mirrors JEE/NEET foundational content. ICSE Class 9 covers substantially more content per subject than CBSE, with separate Physics, Chemistry, and Biology board exam papers each requiring dedicated preparation. IB MYP Year 4 involves criterion-referenced assessments across all eight subject groups with increasing emphasis on analytical writing, conceptual understanding, and interdisciplinary connections.',
    boardStrengths: {
      CBSE: [
        'NCERT Science (Class 9) covers motion, force, gravitation, atoms, and tissues with exactly the depth needed for JEE/NEET foundational understanding',
        'Mathematics introduces Euclid geometry, coordinate geometry, and polynomials with proof-based reasoning that builds logical thinking',
        'Two-year board exam preparation cycle (Class 9-10) allows gradual mastery with clear, well-documented syllabus boundaries',
        'Internal Assessment and Periodic Tests contribute 20 marks, reducing the single-exam pressure of the final board exam',
        'Massive ecosystem of reference materials, previous year papers, and coaching resources specifically aligned to NCERT chapters',
      ],
      ICSE: [
        'Physics covers measurements, force, work-energy-power, and heat with numerical problems requiring multi-step calculations',
        'Chemistry covers the periodic table, chemical bonding, and stoichiometry with formal equation balancing and mole concept introduction',
        'Biology covers cell biology, tissues, and plant/animal physiology with detailed diagrams expected in board exam answers',
        'English Paper 1 (Language) and Paper 2 (Literature) are separate exams, each demanding distinct skills and preparation strategies',
        'Commercial Studies and Economics options provide early exposure to business and financial concepts for commerce-inclined students',
      ],
      IB: [
        'MYP criterion-referenced assessment across all subjects provides granular feedback on knowledge, application, analysis, and evaluation separately',
        'Sciences require the design and execution of original experiments with formal lab reports including hypothesis, methodology, and evaluation',
        'Individuals and Societies courses use structured academic inquiry with primary and secondary source analysis',
        'Language and Literature courses require comparative textual analysis across genres, cultures, and time periods',
        'MYP eAssessment option (on-screen examination) tests conceptual understanding and interdisciplinary thinking, not memorization',
      ],
    },
    recommendation:
      'Class 9 board choice has long-term consequences. CBSE is the clear winner for students aiming at IIT-JEE, NEET, or other Indian competitive exams, as NCERT is the primary source for these tests. ICSE offers superior subject depth and writing skill development, ideal for students considering commerce, humanities, or liberal arts pathways. IB MYP is best for students planning to complete IB DP and apply to international universities, as switching to another board after MYP Year 4 is disruptive.',
  },
  {
    grade: 10,
    overview:
      'Class 10 is the first major high-stakes examination year in India. CBSE Board Exams cover five main subjects with a standardized national paper, and results directly impact Class 11-12 stream selection. ICSE Board Exams are known for their length, detail-oriented questions, and higher word counts in answers, testing both depth of understanding and written articulation. IB MYP culminates with the Personal Project, a self-directed, sustained inquiry project assessed against global MYP criteria, alongside optional MYP eAssessments that some schools use for formal certification.',
    boardStrengths: {
      CBSE: [
        'Board exam syllabus and question pattern directly aligned with JEE Main, NEET, CUET, and other national entrance exam formats',
        'NCERT Solutions are the gold standard reference for board exam answers, with a clear marking scheme publicly available',
        'Term-based or annual exam structure (varies by year) with internal assessment components that provide scoring cushion',
        'Competency-based questions introduced under NEP 2020 test application and analysis, not just recall',
        'Results widely accepted for Class 11 admissions across all school types and state boards nationwide',
      ],
      ICSE: [
        'Board exam questions demand longer, more structured answers that develop academic writing skills valued in college',
        'Separate science papers (Physics, Chemistry, Biology) mean deeper testing of each discipline with practical exam components',
        'English literature paper requires critical essay-style responses to prose and poetry, building analytical writing beyond CBSE expectations',
        'Computer Applications paper covers Java programming fundamentals, providing tangible coding skills',
        'ISC (Class 11-12) transition is seamless for ICSE students, maintaining continuity in depth and assessment style',
      ],
      IB: [
        'Personal Project is a 3,000-4,000 word independent investigation that develops research, writing, and project management skills unmatched at this age',
        'MYP certificate or eAssessment results are recognized by international universities and many progressive Indian institutions',
        'No single high-stakes exam; assessment is distributed across criteria, internal moderation, and the Personal Project',
        'Students develop the IB Learner Profile holistically, with documented evidence of growth in all ten attributes',
        'Direct pathway to IB DP with established skills in inquiry, academic writing, and criterion-referenced self-assessment',
      ],
    },
    recommendation:
      'For Class 10, CBSE is the pragmatic choice for the majority of Indian students, especially those targeting engineering, medicine, or national university admissions. ICSE is superior for students who are strong writers and want thorough subject preparation that translates well to ISC or even a switch to CBSE in Class 11. IB MYP students should strongly consider continuing to IB DP, as the Personal Project and MYP skills are designed to culminate in the Diploma Programme rather than translate directly to Indian board exam systems.',
  },
  {
    grade: 11,
    overview:
      'Class 11 is where board choice directly impacts career trajectory. CBSE Class 11 is universally regarded as the best platform for JEE and NEET preparation, with NCERT textbooks serving as the primary study material for these exams. ISC (the Class 11-12 arm of ICSE) offers a wider range of elective subjects including Biotechnology, Fashion Studies, and Mass Media, with internal assessment contributing to final results. IB DP Year 1 introduces the unique combination of six subject groups (three at Higher Level, three at Standard Level), Theory of Knowledge (TOK), the Extended Essay (EE), and Creativity-Activity-Service (CAS), creating a holistic and internationally recognized diploma.',
    boardStrengths: {
      CBSE: [
        'NCERT Physics, Chemistry, Mathematics, and Biology textbooks are the primary source material for JEE Main, JEE Advanced, and NEET UG',
        'Stream options (Science with Math/Bio, Commerce, Humanities) are well-defined with clear career pathway mapping',
        'Applied Mathematics and Informatics Practices offer modern electives for students not pursuing pure science',
        'Largest coaching ecosystem in India (Kota, online platforms like PW, Unacademy, Allen) aligns directly to CBSE syllabus and NCERT',
        'CUET (Common University Entrance Test) for central university admissions is NCERT-based, giving CBSE students a direct advantage',
      ],
      ICSE: [
        'ISC offers 30+ elective subjects including Biotechnology, Home Science, Fashion Designing, and Electricity and Electronics',
        'English curriculum includes detailed study of prose, poetry, and drama with comparative literature elements',
        'Internal assessment component (project work, practical exams) contributes up to 30% of the final score in some subjects',
        'Science students study all three sciences in greater depth than CBSE, with more extensive lab work requirements',
        'Commerce stream includes dedicated Accounts, Business Studies, and Economics with case-study-based assessment',
      ],
      IB: [
        'IB DP is recognized by top universities globally including Ivy League, Oxbridge, and leading European institutions with course credit for Higher Level scores',
        'Theory of Knowledge (TOK) develops epistemological thinking, teaching students to question how knowledge is constructed across disciplines',
        'Extended Essay (4,000 words) provides genuine research experience that matches undergraduate dissertation skills',
        'CAS (Creativity, Activity, Service) requirement ensures holistic development beyond academics with documented reflection',
        'Higher Level subjects cover content at freshman university depth, with HL Mathematics Analysis and Approaches rivaling first-year college calculus',
      ],
    },
    recommendation:
      'For Class 11, CBSE is the unambiguous best choice for students targeting IIT-JEE, NEET, or CUET-based admissions, as the entire competitive exam infrastructure is built around NCERT. ISC is excellent for students who want strong academics without the single-minded competitive exam focus, or who are interested in niche elective subjects. IB DP is the gold standard for students applying to international universities or top liberal arts programs, but it is demanding, expensive, and not designed for JEE/NEET preparation.',
  },
  {
    grade: 12,
    overview:
      'Class 12 is the culmination of school education and the gateway to higher education. CBSE Board Exams are high-stakes national examinations whose scores feed into CUET, state university admissions, and serve as eligibility criteria for JEE and NEET. ISC Board Exams are known for their rigorous, descriptive format that tests comprehensive understanding and articulation. IB DP final exams are externally assessed by the International Baccalaureate, with the Diploma score (out of 45) used for admissions to universities worldwide, and HL scores of 6 or 7 often earning university course credit.',
    boardStrengths: {
      CBSE: [
        'Board exam scores directly used for CUET ranking, JEE Main eligibility (75% minimum), and NEET qualification',
        'NCERT chapters map one-to-one with JEE Main and NEET syllabus topics, enabling parallel preparation',
        'Standardized national exam ensures uniform assessment, and results are universally accepted across Indian institutions',
        'Practical exam component (30 marks in Science subjects) rewards lab skills and project work with clear rubrics',
        'Most scholarship programs, government entrance exams, and defence service entries recognize and require CBSE Class 12 scores',
      ],
      ICSE: [
        'ISC English proficiency is demonstrably higher, which benefits students in CLAT, law school admissions, and humanities entrance tests',
        'Science board exams test application and problem-solving at a depth that prepares students well for college-level coursework',
        'Project work and internal assessment contribute significantly to final grades, providing a safety net beyond the written exam',
        'ISC pass rates and high-score percentages are competitive, and results are accepted by all major Indian and many international universities',
        'Students develop mature academic writing and structured argumentation skills that directly transfer to university assignments',
      ],
      IB: [
        'IB Diploma scores are directly accepted by 5,000+ universities across 100+ countries, with published score requirements for each program',
        'Higher Level scores of 6 or 7 earn Advanced Placement equivalent credit at universities including Harvard, MIT, Stanford, and UCL',
        'Extended Essay, TOK essay, and CAS portfolio provide a holistic application profile that stands out in university admissions',
        'IB DP graduates demonstrate statistically higher performance in university first-year coursework compared to peers from national curricula',
        'Bilingual Diploma option recognizes proficiency in two languages at an advanced level, valued by multinational employers and global programs',
      ],
    },
    recommendation:
      'For Class 12, CBSE is essential if your child is appearing for JEE, NEET, CUET, or any Indian competitive entrance exam, as the ecosystem is entirely NCERT-aligned. ISC is the better board for students headed to law, humanities, or liberal arts in India, where articulation and breadth matter more than standardized test alignment. IB DP is the optimal choice for students applying to international universities, as the Diploma is the most widely recognized pre-university qualification globally, but families must plan financially and academically for the full two-year DP commitment.',
  },
];
