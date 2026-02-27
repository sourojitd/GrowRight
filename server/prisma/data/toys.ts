/**
 * Comprehensive Indian-Context Toy Recommendations (0–60 months)
 * Categories: MOTOR, COGNITIVE, SPEECH, SOCIAL, EMOTIONAL
 * Includes Amazon.in / Flipkart purchase links
 * Indian-market friendly brands and locally available toys
 */

export interface ToyData {
  category: 'MOTOR' | 'COGNITIVE' | 'SPEECH' | 'SOCIAL' | 'EMOTIONAL';
  title: string;
  description: string;
  minAgeMonths: number;
  maxAgeMonths: number;
  suggestedActivities: string[];
  materials: string[];
  purchaseUrl?: string;
  imageUrl?: string;
}

export const toys: ToyData[] = [

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    MOTOR SKILLS                             ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–6 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Soft Fabric Rattle Set',
    description: 'Lightweight cloth rattles with gentle sounds help babies practise grasping and wrist movement. Available from brands like Funskool and Giggles.',
    minAgeMonths: 0,
    maxAgeMonths: 6,
    suggestedActivities: [
      'Place the rattle in baby\'s palm and let them grip it',
      'Shake it gently near each ear to encourage head turning',
      'Tie to a play gym bar for batting practice',
    ],
    materials: ['Soft cotton fabric', 'Non-toxic filling', 'Small bell insert'],
    purchaseUrl: 'https://www.amazon.in/s?k=soft+fabric+rattle+set+baby',
    imageUrl: 'https://images.pexels.com/photos/1661912/pexels-photo-1661912.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'MOTOR',
    title: 'Play Gym with Hanging Toys',
    description: 'A padded mat with an overhead arch and dangling toys encourages reaching, batting, and tummy-time play.',
    minAgeMonths: 1,
    maxAgeMonths: 8,
    suggestedActivities: [
      'Place baby on back to bat at hanging toys',
      'During tummy time, position mirror attachment at eye level',
      'Detach individual toys for standalone grasping practice',
    ],
    materials: ['Padded cotton mat', 'Plastic arches', 'Detachable plush toys'],
    purchaseUrl: 'https://www.amazon.in/s?k=baby+play+gym+mat',
    imageUrl: 'https://images.pexels.com/photos/3661335/pexels-photo-3661335.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 6–12 months ─────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Stacking Rings (Arihant/Giggles)',
    description: 'Classic colourful stacking rings build hand-eye coordination and fine motor control. Widely available in Indian toy shops.',
    minAgeMonths: 6,
    maxAgeMonths: 18,
    suggestedActivities: [
      'Show baby how to slide rings onto the post',
      'Name each colour as they stack',
      'Roll individual rings across the floor for crawl-chase play',
    ],
    materials: ['BIS-certified plastic', 'Rocking base'],
    purchaseUrl: 'https://www.amazon.in/s?k=stacking+rings+baby+toy',
    imageUrl: 'https://images.pexels.com/photos/6692878/pexels-photo-6692878.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'MOTOR',
    title: 'Push Walker with Blocks',
    description: 'A sturdy push walker with built-in shape sorter and storage for blocks. Helps early walkers build balance and leg strength.',
    minAgeMonths: 9,
    maxAgeMonths: 18,
    suggestedActivities: [
      'Hold the walker handle and practise walking on flat surfaces',
      'Sort the included shape blocks into matching holes',
      'Load and unload blocks from the storage tray',
    ],
    materials: ['Smooth-finish wood or BPA-free plastic', 'Rubber wheel grips'],
    purchaseUrl: 'https://www.flipkart.com/search?q=baby+push+walker+with+blocks',
    imageUrl: 'https://images.pexels.com/photos/7269688/pexels-photo-7269688.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 12–24 months ────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Wooden Hammer and Peg Bench',
    description: 'A colourful peg-and-hammer bench develops grip strength and bilateral coordination. Available from Skillofun and similar Indian brands.',
    minAgeMonths: 12,
    maxAgeMonths: 30,
    suggestedActivities: [
      'Hammer pegs down one side, flip the bench, repeat',
      'Name colours of each peg before hammering',
      'Count pegs together after each round',
    ],
    materials: ['Non-toxic painted wood', 'Wooden mallet'],
    purchaseUrl: 'https://www.amazon.in/s?k=wooden+hammer+peg+bench+toddler',
    imageUrl: 'https://images.pexels.com/photos/3933039/pexels-photo-3933039.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'MOTOR',
    title: 'Tricycle / Push Ride-on',
    description: 'A low-seat push tricycle builds leg strength, steering control, and outdoor confidence. Brands like Dash, Baybee are popular in India.',
    minAgeMonths: 18,
    maxAgeMonths: 48,
    suggestedActivities: [
      'Push with feet on flat ground before pedalling',
      'Ride along a chalk-drawn path for steering practice',
      'Play traffic signals — stop on red, go on green',
    ],
    materials: ['Steel or plastic frame', 'Wide-grip handlebars', 'Parent push handle'],
    purchaseUrl: 'https://www.amazon.in/s?k=kids+tricycle+1-3+years',
    imageUrl: 'https://images.pexels.com/photos/4563678/pexels-photo-4563678.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 24–60 months ────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Lacing and Threading Beads',
    description: 'Large wooden beads with a threading lace refine pincer grip and hand-eye coordination — ideal pre-writing preparation.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Thread beads in a colour pattern (red-blue-red-blue)',
      'Count beads after threading a full lace',
      'Sort beads by shape before threading',
    ],
    materials: ['Large wooden beads', 'Cotton lacing cord with stiff tip'],
    purchaseUrl: 'https://www.amazon.in/s?k=wooden+lacing+threading+beads+kids',
    imageUrl: 'https://images.pexels.com/photos/3662945/pexels-photo-3662945.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'MOTOR',
    title: 'Scissors Skills Activity Set',
    description: 'Child-safe scissors with guided cutting sheets develop fine motor control and bilateral hand coordination needed for school readiness.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Start with cutting straight lines on thick paper',
      'Progress to cutting curves and zig-zag patterns',
      'Cut out shapes and paste them to create a collage',
    ],
    materials: ['Child-safe rounded scissors', 'Printed activity sheets', 'Glue stick'],
    purchaseUrl: 'https://www.amazon.in/s?k=kids+scissors+cutting+activity+set',
    imageUrl: 'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    COGNITIVE / EDUCATIONAL                   ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–6 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'High-Contrast Flash Cards',
    description: 'Black-and-white pattern cards stimulate early visual tracking for newborns. Locally printed sets available on Firstcry and Amazon India.',
    minAgeMonths: 0,
    maxAgeMonths: 4,
    suggestedActivities: [
      'Hold a card 20–30 cm from baby\'s face and move slowly side to side',
      'Tape cards to the cot rail at eye level',
      'Alternate patterns during each feed-wake cycle',
    ],
    materials: ['Thick cardstock', 'Non-toxic ink'],
    purchaseUrl: 'https://www.amazon.in/s?k=high+contrast+flash+cards+newborn',
    imageUrl: 'https://images.pexels.com/photos/6849283/pexels-photo-6849283.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 6–12 months ─────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Nesting Cups Set',
    description: 'Graduated cups that nest inside each other or stack into a tower teach size ordering and cause-and-effect.',
    minAgeMonths: 6,
    maxAgeMonths: 18,
    suggestedActivities: [
      'Stack cups into a tower and let baby knock them down',
      'Use during bath time as pouring and scooping cups',
      'Hide a small object under one cup for a find-it game',
    ],
    materials: ['BPA-free plastic', 'Drainage holes for bath play'],
    purchaseUrl: 'https://www.amazon.in/s?k=nesting+stacking+cups+baby',
    imageUrl: 'https://images.pexels.com/photos/8504276/pexels-photo-8504276.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Shape Sorter Box',
    description: 'A wooden or plastic shape sorter with 4–8 shapes teaches spatial reasoning, shape recognition, and trial-and-error thinking.',
    minAgeMonths: 9,
    maxAgeMonths: 24,
    suggestedActivities: [
      'Demonstrate matching one shape, then let child try',
      'Name each shape aloud — "circle", "triangle", "star"',
      'Hide a small toy inside and ask child to open the correct lid',
    ],
    materials: ['BPA-free plastic or non-toxic wood', 'Multiple shape blocks'],
    purchaseUrl: 'https://www.flipkart.com/search?q=shape+sorter+toy+baby',
    imageUrl: 'https://images.pexels.com/photos/7269674/pexels-photo-7269674.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 12–24 months ────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Wooden Jigsaw Puzzle (Chunky Knob)',
    description: 'Chunky-knob puzzles with Indian themes (animals, fruits, vehicles) build problem-solving and categorisation skills.',
    minAgeMonths: 12,
    maxAgeMonths: 30,
    suggestedActivities: [
      'Remove one piece and ask "Where does the mango go?"',
      'Name each picture while placing pieces',
      'Time the puzzle completion and celebrate improvements',
    ],
    materials: ['MDF or plywood', 'Non-toxic paint', 'Large wooden knobs'],
    purchaseUrl: 'https://www.amazon.in/s?k=wooden+knob+puzzle+toddler',
    imageUrl: 'https://images.pexels.com/photos/6692843/pexels-photo-6692843.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Colour and Shape Sorting Clock',
    description: 'A wooden clock with removable number blocks teaches number recognition, colour matching, and the concept of time in one toy.',
    minAgeMonths: 18,
    maxAgeMonths: 48,
    suggestedActivities: [
      'Match numbered blocks to the correct slot on the clock face',
      'Sort blocks by colour before placing them',
      'Move the clock hands and talk about daily routines — "At 8 we eat breakfast"',
    ],
    materials: ['Non-toxic painted wood', 'Removable number blocks', 'Movable hands'],
    purchaseUrl: 'https://www.amazon.in/s?k=wooden+shape+sorting+clock+toddler',
    imageUrl: 'https://images.pexels.com/photos/311269/pexels-photo-311269.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 18–60 months ────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Building Blocks Set (50+ pieces)',
    description: 'Open-ended wooden or interlocking blocks develop spatial thinking, creativity, and early maths concepts.',
    minAgeMonths: 18,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Build a tower together and count the blocks',
      'Create patterns — two red, one blue, two red, one blue',
      'Challenge child to copy a simple structure you build',
    ],
    materials: ['Smooth wooden blocks or Mega Bloks-style interlocking bricks'],
    purchaseUrl: 'https://www.amazon.in/s?k=building+blocks+set+kids+wooden',
    imageUrl: 'https://images.pexels.com/photos/7269687/pexels-photo-7269687.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Magnetic Drawing Board (Magic Slate)',
    description: 'A reusable drawing board lets toddlers practise pre-writing strokes, shapes, and free drawing without mess.',
    minAgeMonths: 18,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Draw basic shapes and ask child to copy them',
      'Practise writing first letter of child\'s name',
      'Play Pictionary — draw an animal for child to guess',
    ],
    materials: ['Magnetic drawing surface', 'Stylus pen', 'Stamp shapes'],
    purchaseUrl: 'https://www.flipkart.com/search?q=magnetic+drawing+board+kids',
    imageUrl: 'https://images.pexels.com/photos/8501525/pexels-photo-8501525.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Wooden Abacus (Counting Frame)',
    description: 'A classic 10-row abacus with colourful beads makes counting, addition, and subtraction tangible for early learners.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Slide beads one by one while counting aloud together',
      'Use two rows to demonstrate simple addition — "3 and 2 makes 5"',
      'Sort beads by colour and count how many of each',
    ],
    materials: ['Smooth wooden frame', 'Coloured wooden beads', 'Metal rods'],
    purchaseUrl: 'https://www.amazon.in/s?k=wooden+abacus+counting+frame+kids',
    imageUrl: 'https://images.pexels.com/photos/1019470/pexels-photo-1019470.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Montessori Number Rods',
    description: 'Graduated red-and-blue rods help children understand quantity, length comparison, and number concepts the Montessori way.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Arrange rods from shortest to longest — introduce ordinal concepts',
      'Count the sections on each rod together',
      'Use rods to compare lengths — "Which one is longer?"',
    ],
    materials: ['Painted smooth wood', '10 graduated rods'],
    purchaseUrl: 'https://www.amazon.in/s?k=montessori+number+rods',
    imageUrl: 'https://images.pexels.com/photos/5412109/pexels-photo-5412109.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Tangram Puzzle Set',
    description: 'A seven-piece tangram develops spatial reasoning, geometry awareness, and creative problem solving. A timeless educational classic.',
    minAgeMonths: 36,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Start with simple 2–3 piece shapes using the pattern cards',
      'Challenge child to make a house, boat, or animal',
      'Create your own design and ask child to replicate it',
    ],
    materials: ['Wooden or magnetic tangram pieces', 'Pattern cards'],
    purchaseUrl: 'https://www.amazon.in/s?k=tangram+puzzle+set+kids+wooden',
    imageUrl: 'https://images.pexels.com/photos/7605993/pexels-photo-7605993.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Alphabet and Number Tracing Board',
    description: 'Grooved wooden boards for tracing A–Z and 1–10 with a stylus or finger. Builds letter recognition and pre-writing muscle memory.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Trace each letter with a finger, saying its sound aloud',
      'Use a chalk or dry-erase marker on the board for writing practice',
      'Match letter cards to the correct groove on the board',
    ],
    materials: ['MDF or plywood tracing board', 'Wooden stylus'],
    purchaseUrl: 'https://www.amazon.in/s?k=alphabet+number+tracing+board+kids',
    imageUrl: 'https://images.pexels.com/photos/8923557/pexels-photo-8923557.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Fraction Learning Puzzle',
    description: 'Colourful circular fraction puzzles introduce halves, thirds, and quarters through hands-on play — great for early maths foundations.',
    minAgeMonths: 36,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Match fraction pieces to complete each circle',
      'Compare piece sizes — "Which is bigger, half or quarter?"',
      'Use pieces as pretend pizza slices for sharing games',
    ],
    materials: ['Non-toxic painted wood', 'Segmented circle pieces', 'Base board'],
    purchaseUrl: 'https://www.amazon.in/s?k=fraction+puzzle+kids+wooden+educational',
    imageUrl: 'https://images.pexels.com/photos/5412226/pexels-photo-5412226.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Solar System Model Kit',
    description: 'A build-and-paint solar system model introduces planets, order from the sun, and basic space concepts for curious preschoolers.',
    minAgeMonths: 42,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Paint each planet together and name them in order',
      'Hang the model and quiz each other — "Which planet is red?"',
      'Watch a short planet video and match to the model',
    ],
    materials: ['Foam or plastic planet balls', 'Paint set', 'Wire arm frame'],
    purchaseUrl: 'https://www.amazon.in/s?k=solar+system+model+kit+kids',
    imageUrl: 'https://images.pexels.com/photos/2869085/pexels-photo-2869085.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Magnetic India Map Puzzle',
    description: 'A magnetic jigsaw of India with state-shaped pieces teaches geography, state names, and spatial awareness in an engaging format.',
    minAgeMonths: 36,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Place your home state first, then build outwards',
      'Name each state and its capital while placing pieces',
      'Use the map to talk about family trips or relatives\' cities',
    ],
    materials: ['Magnetic board', 'State-shaped magnetic pieces', 'Labels'],
    purchaseUrl: 'https://www.amazon.in/s?k=magnetic+india+map+puzzle+kids',
    imageUrl: 'https://images.pexels.com/photos/8087869/pexels-photo-8087869.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Pattern Block Set with Activity Cards',
    description: 'Colourful geometric blocks with guided pattern cards teach symmetry, shapes, and design thinking. A Montessori/STEM favourite.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Follow an activity card to complete a pattern mosaic',
      'Free-build a flower, house, or animal using the blocks',
      'Sort blocks by shape and colour before building',
    ],
    materials: ['Wooden geometric blocks (hexagons, triangles, rhombuses)', 'Activity cards'],
    purchaseUrl: 'https://www.flipkart.com/search?q=pattern+block+set+kids+educational',
    imageUrl: 'https://images.pexels.com/photos/3933030/pexels-photo-3933030.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Counting Bears with Sorting Cups',
    description: 'Colourful bear counters with matching cups teach counting, sorting, colour recognition, and early addition — a preschool maths essential.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Sort bears into matching-colour cups',
      'Count bears in each cup and compare — "Which has more?"',
      'Line up bears and practise skip-counting (2, 4, 6…)',
    ],
    materials: ['Plastic counting bears (multiple colours/sizes)', 'Sorting cups', 'Activity cards'],
    purchaseUrl: 'https://www.amazon.in/s?k=counting+bears+sorting+cups+kids',
    imageUrl: 'https://images.pexels.com/photos/6692940/pexels-photo-6692940.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'COGNITIVE',
    title: 'Spelling and Word Building Kit',
    description: 'Wooden letter tiles with picture cards help pre-schoolers learn phonics, letter recognition, and simple three-letter word building.',
    minAgeMonths: 36,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Place a picture card (e.g., CAT) and find the matching letters',
      'Sound out each letter while placing it — "C-A-T, cat!"',
      'Mix up letters and race to spell the word first',
    ],
    materials: ['Wooden letter tiles', 'Illustrated word cards', 'Tile tray'],
    purchaseUrl: 'https://www.amazon.in/s?k=spelling+word+building+kit+kids+wooden',
    imageUrl: 'https://images.pexels.com/photos/8612931/pexels-photo-8612931.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    SPEECH & LANGUAGE                        ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–12 months ─────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Cloth Book with Crinkle Pages',
    description: 'Tactile fabric books with crinkle sounds and bright images encourage babbling and early word association.',
    minAgeMonths: 0,
    maxAgeMonths: 12,
    suggestedActivities: [
      'Point to each picture and name it slowly — "Look, a dog!"',
      'Let baby feel the crinkle pages and imitate the sound',
      'Read aloud during bedtime to build a reading routine',
    ],
    materials: ['Soft cotton or polyester fabric', 'Crinkle insert', 'Non-toxic dyes'],
    purchaseUrl: 'https://www.amazon.in/s?k=cloth+book+crinkle+baby',
    imageUrl: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 6–24 months ─────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Musical Rhyme Phone / Toy Phone',
    description: 'A toy phone with Hindi and English rhymes encourages babbling, turn-taking, and pretend conversation. Available from brands like Vtech, Mitashi.',
    minAgeMonths: 6,
    maxAgeMonths: 24,
    suggestedActivities: [
      'Pretend to call grandma — model "Hello! How are you?"',
      'Press buttons together and sing along to rhymes',
      'Ask child to "call" a family member and narrate',
    ],
    materials: ['BPA-free plastic', 'Speaker', 'LED buttons'],
    purchaseUrl: 'https://www.flipkart.com/search?q=musical+rhyme+phone+toy+baby',
    imageUrl: 'https://images.pexels.com/photos/5471946/pexels-photo-5471946.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SPEECH',
    title: 'Picture Board Books (Bilingual)',
    description: 'Sturdy board books with Hindi-English labels for fruits, animals, vehicles, and body parts — a vocabulary-building essential.',
    minAgeMonths: 8,
    maxAgeMonths: 36,
    suggestedActivities: [
      'Point and name pictures in both Hindi and English',
      'Ask "Where is the cat?" and let child point',
      'Make animal sounds together for each animal page',
    ],
    materials: ['Thick cardboard pages', 'Glossy print'],
    purchaseUrl: 'https://www.amazon.in/s?k=bilingual+board+books+hindi+english+baby',
    imageUrl: 'https://images.pexels.com/photos/5608541/pexels-photo-5608541.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 12–36 months ────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Interactive Sound Book (Animals/Vehicles)',
    description: 'Press-and-hear sound books with real animal or vehicle sounds link words to auditory cues and boost vocabulary retention.',
    minAgeMonths: 12,
    maxAgeMonths: 36,
    suggestedActivities: [
      'Press each button and repeat the animal name — "Cow says moo!"',
      'Ask child to find a specific sound — "Can you press the lion?"',
      'Imitate the sounds together without pressing the button first',
    ],
    materials: ['Board book with embedded speaker module', 'Button-activated sounds'],
    purchaseUrl: 'https://www.amazon.in/s?k=interactive+sound+book+animals+kids',
    imageUrl: 'https://images.pexels.com/photos/7296290/pexels-photo-7296290.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 18–60 months ────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Hand Puppet Set',
    description: 'Animal or family-member hand puppets bring storytelling to life and encourage expressive language and dialogue.',
    minAgeMonths: 18,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Act out a short story like "The Hungry Caterpillar"',
      'Let child use a puppet to tell you about their day',
      'Sing nursery rhymes with puppet actions',
    ],
    materials: ['Soft fabric or felt', 'Embroidered features'],
    purchaseUrl: 'https://www.amazon.in/s?k=hand+puppet+set+kids',
    imageUrl: 'https://images.pexels.com/photos/4604/pexels-photo-4604.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SPEECH',
    title: 'Phonics Learning Toy (LeapFrog / Mitashi)',
    description: 'An electronic phonics toy that says letter sounds when pressed, helping children connect letters with their phonetic sounds.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Press letters and repeat the sound together',
      'Ask child to find the letter their name starts with',
      'Play "I spy a letter" — find objects starting with that letter sound',
    ],
    materials: ['BPA-free plastic', 'Speaker module', 'LED display'],
    purchaseUrl: 'https://www.amazon.in/s?k=phonics+learning+toy+kids',
    imageUrl: 'https://images.pexels.com/photos/8294806/pexels-photo-8294806.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SPEECH',
    title: 'Story Dice / Picture Cards',
    description: 'Dice or cards with images that prompt storytelling build narrative skills, sequencing, and creative language.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Roll 3 dice and make up a story with those images',
      'Lay out 4 cards in order and narrate a sequence',
      'Take turns adding sentences to a shared story',
    ],
    materials: ['Wooden or foam dice', 'Illustrated cards'],
    purchaseUrl: 'https://www.amazon.in/s?k=story+dice+picture+cards+kids',
    imageUrl: 'https://images.pexels.com/photos/8111328/pexels-photo-8111328.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SPEECH',
    title: 'Hindi Varnamala Learning Chart (Interactive)',
    description: 'A wall-mounted interactive chart with Hindi letters that speaks the letter and a word when pressed. Builds Hindi literacy alongside English.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Press a letter and repeat the word together in Hindi',
      'Play "Find the letter" — say a Hindi letter and let child press it',
      'Pair with a Hindi board book for reading reinforcement',
    ],
    materials: ['Laminated wall chart', 'Speaker module', 'Battery compartment'],
    purchaseUrl: 'https://www.amazon.in/s?k=hindi+varnamala+interactive+chart+kids',
    imageUrl: 'https://images.pexels.com/photos/1576288/pexels-photo-1576288.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    SOCIAL SKILLS                            ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 3–12 months ─────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Peek-a-Boo Blanket / Dupatta',
    description: 'A soft muslin dupatta or blanket for peek-a-boo games — the simplest toy for building social bonding and object permanence.',
    minAgeMonths: 3,
    maxAgeMonths: 12,
    suggestedActivities: [
      'Cover your face, say "Kahan gaya?" then reveal with "Peek-a-boo!"',
      'Cover baby\'s favourite toy and ask "Where did it go?"',
      'Drape over baby\'s head gently and let them pull it off',
    ],
    materials: ['Soft muslin cloth or light dupatta'],
    purchaseUrl: 'https://www.amazon.in/s?k=muslin+cloth+baby+blanket',
    imageUrl: 'https://images.pexels.com/photos/8504269/pexels-photo-8504269.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 18–60 months ────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Play Kitchen Set',
    description: 'A miniature kitchen set with Indian utensils (tawa, kadhai, rolling pin) encourages imaginative role play and social interaction.',
    minAgeMonths: 18,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Pretend to cook roti together — roll, flip, serve',
      'Set up a pretend tea party and invite stuffed animals',
      'Take turns being the cook and the customer',
    ],
    materials: ['Stainless steel or plastic utensils', 'Play food items'],
    purchaseUrl: 'https://www.amazon.in/s?k=kids+play+kitchen+set+indian',
    imageUrl: 'https://images.pexels.com/photos/4868313/pexels-photo-4868313.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SOCIAL',
    title: 'Grocery Shop Pretend Play Set',
    description: 'A miniature shop set with play fruits, vegetables, a cash register, and pretend money teaches social exchange, counting, and vocabulary.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Take turns being shopkeeper and customer — "How much for the tomatoes?"',
      'Count play money and make change',
      'Sort items by category — fruits, vegetables, snacks',
    ],
    materials: ['Play fruits/vegetables', 'Toy cash register', 'Play money/coins'],
    purchaseUrl: 'https://www.amazon.in/s?k=grocery+shop+pretend+play+set+kids',
    imageUrl: 'https://images.pexels.com/photos/3772534/pexels-photo-3772534.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 24–60 months ────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Doctor Play Kit',
    description: 'A toy stethoscope, thermometer, and syringe set helps children process doctor visits and practise caring behaviour.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Role-play a check-up — "Let me listen to your heart"',
      'Take turns being doctor and patient',
      'Include stuffed animals as patients to extend the play',
    ],
    materials: ['Plastic stethoscope', 'Toy thermometer', 'Carry bag'],
    purchaseUrl: 'https://www.flipkart.com/search?q=doctor+play+kit+kids',
    imageUrl: 'https://images.pexels.com/photos/31247025/pexels-photo-31247025.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SOCIAL',
    title: 'Dress-Up Costume Box',
    description: 'A box of simple costumes (dupatta, hat, cape, badge) inspires imaginative play and social role exploration.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Assign roles — "You are the shopkeeper, I am the customer"',
      'Re-enact a favourite story with costumes',
      'Organise a dress-up fashion show with siblings or friends',
    ],
    materials: ['Old dupatta/saree pieces', 'Hats', 'Fabric capes', 'Stick-on badges'],
    purchaseUrl: 'https://www.amazon.in/s?k=kids+dress+up+costume+set',
    imageUrl: 'https://images.pexels.com/photos/8501420/pexels-photo-8501420.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 36–60 months ────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Simple Board Game (Snakes & Ladders)',
    description: 'Classic Indian board game teaches turn-taking, counting, winning, and losing gracefully.',
    minAgeMonths: 36,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Roll the dice and count squares together',
      'Practise saying "good game" whether winning or losing',
      'Make up rules for a simpler version for younger children',
    ],
    materials: ['Printed board', 'Dice', 'Coloured pawns'],
    purchaseUrl: 'https://www.amazon.in/s?k=snakes+and+ladders+board+game+kids',
    imageUrl: 'https://images.pexels.com/photos/9090534/pexels-photo-9090534.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'SOCIAL',
    title: 'Memory Matching Card Game',
    description: 'Flip-and-match card pairs improve memory, concentration, and turn-taking skills while building vocabulary through themed picture sets.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Start with 6 pairs face-down and take turns flipping two',
      'Name each picture aloud when flipped',
      'Increase to 12–15 pairs as memory improves',
    ],
    materials: ['Thick cardstock cards', 'Illustrated matching pairs'],
    purchaseUrl: 'https://www.amazon.in/s?k=memory+matching+card+game+kids',
    imageUrl: 'https://images.pexels.com/photos/8111367/pexels-photo-8111367.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    EMOTIONAL DEVELOPMENT                    ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 3–24 months ─────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Soft Lovey / Security Blanket',
    description: 'A small, soft lovey or muslin square becomes a comforting companion that helps babies self-soothe.',
    minAgeMonths: 3,
    maxAgeMonths: 24,
    suggestedActivities: [
      'Introduce during calm moments — feeding, nap time',
      'Give the lovey a name and talk to it with baby',
      'Include it in the bedtime routine for sleep association',
    ],
    materials: ['Ultra-soft cotton or velour', 'Lightweight stuffing'],
    purchaseUrl: 'https://www.amazon.in/s?k=baby+lovey+security+blanket',
    imageUrl: 'https://images.pexels.com/photos/860882/pexels-photo-860882.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 12–48 months ────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Calm-Down Sensory Bottle',
    description: 'A sealed bottle filled with glitter, beads, and water that swirls slowly — a visual self-regulation tool for tantrums.',
    minAgeMonths: 12,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Shake the bottle and watch glitter settle — "Let\'s calm down together"',
      'Use during transitions — "When the glitter settles, it\'s bath time"',
      'Make one together as a craft activity for older toddlers',
    ],
    materials: ['Clear plastic bottle', 'Glitter', 'Water', 'Glycerine', 'Super glue for cap'],
    purchaseUrl: 'https://www.amazon.in/s?k=calm+down+sensory+bottle+kids',
    imageUrl: 'https://images.pexels.com/photos/4022247/pexels-photo-4022247.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'EMOTIONAL',
    title: 'Stuffed Animal Family Set',
    description: 'A set of plush animals (mama, papa, baby) for nurturing play, which builds empathy and emotional expression.',
    minAgeMonths: 12,
    maxAgeMonths: 48,
    suggestedActivities: [
      'Encourage child to feed, rock, and put the baby animal to sleep',
      'Act out scenarios — "Baby elephant is sad, what should we do?"',
      'Use animals to rehearse upcoming events like a new sibling',
    ],
    materials: ['Soft polyester plush', 'Embroidered features', 'Machine washable'],
    purchaseUrl: 'https://www.amazon.in/s?k=stuffed+animal+family+set+kids',
    imageUrl: 'https://images.pexels.com/photos/37158/pexels-photo-37158.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 18–60 months ────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Feelings Faces Flashcards',
    description: 'Cards showing happy, sad, angry, scared, and surprised faces help toddlers identify and name emotions.',
    minAgeMonths: 18,
    maxAgeMonths: 48,
    suggestedActivities: [
      'Show a card and ask "How does this face feel?"',
      'Ask child to match a card to how they feel right now',
      'Act out each emotion together in front of a mirror',
    ],
    materials: ['Thick cardstock', 'Illustrated emotion faces'],
    purchaseUrl: 'https://www.amazon.in/s?k=feelings+emotions+flashcards+kids',
    imageUrl: 'https://images.pexels.com/photos/6437505/pexels-photo-6437505.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'EMOTIONAL',
    title: 'Play Dough Set (Homemade or Funskool)',
    description: 'Squeezing, rolling, and shaping dough is a proven sensory-calming activity that also supports emotional regulation.',
    minAgeMonths: 18,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Make faces in the dough showing different emotions',
      'Squeeze and pound dough when feeling frustrated — a safe anger outlet',
      'Create food items for pretend play — roti, ladoo, samosa',
    ],
    materials: ['Atta (wheat flour) dough or commercial play dough', 'Rolling pin', 'Cookie cutters'],
    purchaseUrl: 'https://www.amazon.in/s?k=play+dough+set+kids+funskool',
    imageUrl: 'https://images.pexels.com/photos/8422174/pexels-photo-8422174.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'EMOTIONAL',
    title: 'Feelings Wheel / Emotion Spinner',
    description: 'A spinning wheel with emotion faces lets children identify and discuss what they\'re feeling. A great daily check-in tool.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Spin the wheel at breakfast — "How are you feeling today?"',
      'When child is upset, spin to help them name the feeling',
      'Act out each emotion and guess what the other person is showing',
    ],
    materials: ['Printed cardboard wheel', 'Spinner arrow', 'Emotion illustrations'],
    purchaseUrl: 'https://www.amazon.in/s?k=emotion+feelings+wheel+kids',
    imageUrl: 'https://images.pexels.com/photos/8535592/pexels-photo-8535592.jpeg?auto=compress&cs=tinysrgb&w=400',
  },

  // ── 24–60 months ────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'My Feelings Storybook Set',
    description: 'A set of illustrated storybooks about emotions (anger, fear, joy, jealousy) with Indian characters and settings.',
    minAgeMonths: 24,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Read one story at bedtime and discuss "Have you ever felt like this?"',
      'Ask child to draw what makes them happy/sad after reading',
      'Re-read favourite emotion books during actual emotional moments',
    ],
    materials: ['Paperback or board books', 'Colour illustrations'],
    purchaseUrl: 'https://www.amazon.in/s?k=feelings+emotions+storybook+set+kids',
    imageUrl: 'https://images.pexels.com/photos/8613093/pexels-photo-8613093.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    category: 'EMOTIONAL',
    title: 'Mindfulness Breathing Buddy (Plush)',
    description: 'A weighted plush toy placed on the tummy during deep breathing exercises helps children practise mindfulness and body awareness.',
    minAgeMonths: 30,
    maxAgeMonths: 60,
    suggestedActivities: [
      'Lie down and place the buddy on the tummy — "Breathe in to make it rise"',
      'Count breaths together — "In 1-2-3, out 1-2-3"',
      'Use before bedtime as a wind-down routine',
    ],
    materials: ['Soft weighted plush', 'Hypoallergenic filling'],
    purchaseUrl: 'https://www.amazon.in/s?k=weighted+stuffed+animal+kids+calming',
    imageUrl: 'https://images.pexels.com/photos/3693367/pexels-photo-3693367.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];
