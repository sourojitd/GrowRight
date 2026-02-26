/**
 * Comprehensive Child Development Milestones (0–72 months)
 * Sources: Indian Academy of Pediatrics (IAP), WHO, CDC developmental guidelines
 * Categories: MOTOR, COGNITIVE, SPEECH, SOCIAL, EMOTIONAL
 */

export interface MilestoneData {
  category: 'MOTOR' | 'COGNITIVE' | 'SPEECH' | 'SOCIAL' | 'EMOTIONAL';
  title: string;
  description: string;
  ageRangeStartMonth: number;
  ageRangeEndMonth: number;
  importanceLevel: 'CRITICAL' | 'NORMAL' | 'OPTIONAL';
  tips?: string;
}

export const milestones: MilestoneData[] = [
  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    MOTOR SKILLS                              ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months (Newborn) ──────────────────────────────────────
  { category: 'MOTOR', title: 'Moves arms and legs actively', description: 'Makes jerky, quivering arm thrusts and leg movements when awake', ageRangeStartMonth: 0, ageRangeEndMonth: 2, importanceLevel: 'CRITICAL', tips: 'Allow free movement without tight swaddling during awake time' },
  { category: 'MOTOR', title: 'Raises head briefly during tummy time', description: 'Can lift head momentarily (1-2 seconds) while lying on stomach', ageRangeStartMonth: 0, ageRangeEndMonth: 3, importanceLevel: 'CRITICAL', tips: 'Start tummy time from day one, 3-5 minutes per session, 2-3 times daily' },
  { category: 'MOTOR', title: 'Opens and closes hands', description: 'Begins to open fists and close them; grasp reflex gradually gives way to voluntary hand opening', ageRangeStartMonth: 0, ageRangeEndMonth: 3, importanceLevel: 'NORMAL', tips: 'Place a rattle or finger in baby\'s palm to encourage grasping' },
  { category: 'MOTOR', title: 'Brings hands to mouth', description: 'Discovers hands and brings them to mouth for self-soothing and exploration', ageRangeStartMonth: 1, ageRangeEndMonth: 4, importanceLevel: 'NORMAL', tips: 'Keep hands clean; this is normal exploration, not a sign of hunger' },
  { category: 'MOTOR', title: 'Holds head steady when upright', description: 'Can hold head steady without support when held in sitting or upright position', ageRangeStartMonth: 2, ageRangeEndMonth: 4, importanceLevel: 'CRITICAL', tips: 'Support neck while carrying but allow head movement practice' },

  // ── 3–6 months ────────────────────────────────────────────────
  { category: 'MOTOR', title: 'Pushes up on arms during tummy time', description: 'Lifts head and chest off the ground using arms while on tummy; mini push-up', ageRangeStartMonth: 3, ageRangeEndMonth: 5, importanceLevel: 'CRITICAL', tips: 'Use a colourful toy in front to motivate pushing up' },
  { category: 'MOTOR', title: 'Rolls from tummy to back', description: 'Can turn over from front (prone) to back (supine) position', ageRangeStartMonth: 3, ageRangeEndMonth: 6, importanceLevel: 'CRITICAL', tips: 'Always place on a safe surface; rolling can be sudden and unexpected' },
  { category: 'MOTOR', title: 'Reaches for and grasps toys', description: 'Coordinates hand-eye to reach towards objects and grasp them with whole hand (palmar grasp)', ageRangeStartMonth: 3, ageRangeEndMonth: 6, importanceLevel: 'CRITICAL', tips: 'Offer toys of different textures — soft blocks, rattles, teethers' },
  { category: 'MOTOR', title: 'Rolls from back to tummy', description: 'Can turn over from supine to prone position', ageRangeStartMonth: 4, ageRangeEndMonth: 7, importanceLevel: 'NORMAL', tips: 'Keep the crib free of pillows and blankets once rolling starts' },
  { category: 'MOTOR', title: 'Supports weight on legs when held standing', description: 'Bears partial weight on legs when held in standing position; may bounce', ageRangeStartMonth: 4, ageRangeEndMonth: 7, importanceLevel: 'NORMAL', tips: 'Hold under arms on a firm surface; bouncing is fun and builds leg strength' },
  { category: 'MOTOR', title: 'Transfers objects between hands', description: 'Can pass a toy or object from one hand to the other', ageRangeStartMonth: 5, ageRangeEndMonth: 8, importanceLevel: 'NORMAL', tips: 'Offer a block and encourage passing it hand to hand' },

  // ── 6–9 months ────────────────────────────────────────────────
  { category: 'MOTOR', title: 'Sits without support', description: 'Can sit independently on the floor without using hands for balance for several minutes', ageRangeStartMonth: 6, ageRangeEndMonth: 9, importanceLevel: 'CRITICAL', tips: 'Place cushions around initially; practice sitting on a mat with toys in front' },
  { category: 'MOTOR', title: 'Creeps or crawls', description: 'Moves forward on hands and knees (or commando crawl on belly)', ageRangeStartMonth: 7, ageRangeEndMonth: 10, importanceLevel: 'CRITICAL', tips: 'Baby-proof the house; place toys slightly out of reach to motivate crawling' },
  { category: 'MOTOR', title: 'Picks up small objects with pincer grasp', description: 'Uses thumb and forefinger to pick up small items like cereal pieces or raisins', ageRangeStartMonth: 7, ageRangeEndMonth: 11, importanceLevel: 'CRITICAL', tips: 'Offer safe finger foods like makhana (puffed lotus seeds) or small pieces of roti' },
  { category: 'MOTOR', title: 'Pulls to standing', description: 'Uses furniture or support to pull themselves up from sitting to standing', ageRangeStartMonth: 8, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Secure furniture to walls; keep sharp-cornered tables padded' },
  { category: 'MOTOR', title: 'Claps hands together', description: 'Can bring both hands together in a clapping motion', ageRangeStartMonth: 7, ageRangeEndMonth: 10, importanceLevel: 'NORMAL', tips: 'Play "Tali bajao" (clap your hands) rhymes; clap along with baby' },

  // ── 9–12 months ───────────────────────────────────────────────
  { category: 'MOTOR', title: 'Cruises along furniture', description: 'Walks sideways while holding onto furniture for support', ageRangeStartMonth: 9, ageRangeEndMonth: 13, importanceLevel: 'NORMAL', tips: 'Arrange furniture close together so baby can cruise from one piece to another' },
  { category: 'MOTOR', title: 'Stands alone briefly', description: 'Can stand without any support for a few seconds', ageRangeStartMonth: 9, ageRangeEndMonth: 14, importanceLevel: 'NORMAL', tips: 'Encourage by holding a favourite toy just out of reach' },
  { category: 'MOTOR', title: 'Takes first independent steps', description: 'Walks 2-3 steps without holding anything', ageRangeStartMonth: 9, ageRangeEndMonth: 15, importanceLevel: 'CRITICAL', tips: 'Let baby walk barefoot indoors; avoid walkers (IAP recommends against baby walkers)' },
  { category: 'MOTOR', title: 'Puts objects into a container', description: 'Can place blocks or small toys into a bowl, box, or container', ageRangeStartMonth: 9, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Use a steel dabba (container) and blocks for a fun drop-in game' },

  // ── 12–18 months ──────────────────────────────────────────────
  { category: 'MOTOR', title: 'Walks independently', description: 'Walks on their own with a wide-based gait, without holding on', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'CRITICAL', tips: 'Allow barefoot walking on varied surfaces; shoes only for outdoor protection' },
  { category: 'MOTOR', title: 'Stacks 2-3 blocks', description: 'Can place one block on top of another to build a small tower', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'NORMAL', tips: 'Start with larger blocks and gradually offer smaller ones' },
  { category: 'MOTOR', title: 'Scribbles with a crayon', description: 'Holds a crayon in fist grip and makes marks or scribbles on paper', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'NORMAL', tips: 'Use thick washable crayons and large sheets; tape paper to the floor' },
  { category: 'MOTOR', title: 'Drinks from a cup with help', description: 'Can hold a small cup (steel tumbler) with both hands and drink with assistance', ageRangeStartMonth: 12, ageRangeEndMonth: 15, importanceLevel: 'NORMAL', tips: 'Start with a small steel glass (Indian style); less spillage than sippy cups' },
  { category: 'MOTOR', title: 'Feeds self with fingers', description: 'Picks up food pieces and puts them in mouth independently', ageRangeStartMonth: 10, ageRangeEndMonth: 14, importanceLevel: 'NORMAL', tips: 'Offer soft idli pieces, small chapati bits, banana slices as finger food' },

  // ── 18–24 months ──────────────────────────────────────────────
  { category: 'MOTOR', title: 'Runs with coordination', description: 'Runs without falling frequently; can stop and change direction', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Let child run in safe open spaces like parks; avoid restricting to strollers' },
  { category: 'MOTOR', title: 'Kicks a ball forward', description: 'Can kick a ball while standing without losing balance', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Use a soft ball; practice in the garden or terrace' },
  { category: 'MOTOR', title: 'Walks up stairs with support', description: 'Climbs stairs while holding a railing or adult\'s hand, placing both feet on each step', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Always supervise on stairs; install safety gates until confident' },
  { category: 'MOTOR', title: 'Stacks 4-6 blocks', description: 'Builds a tower of 4 to 6 blocks', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Use wooden blocks; count out loud as each block is placed' },
  { category: 'MOTOR', title: 'Uses a spoon to feed self', description: 'Holds a spoon and brings food to mouth with some spilling', ageRangeStartMonth: 15, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Let them practice with thick foods like dal-rice or khichdi; expect mess!' },
  { category: 'MOTOR', title: 'Turns pages of a book (2-3 at a time)', description: 'Can turn thick pages of a board book, though may turn several at once', ageRangeStartMonth: 15, ageRangeEndMonth: 20, importanceLevel: 'OPTIONAL', tips: 'Offer sturdy board books; sit together during reading time' },

  // ── 24–36 months ──────────────────────────────────────────────
  { category: 'MOTOR', title: 'Jumps with both feet off the ground', description: 'Can jump up with both feet leaving the floor simultaneously', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Play jumping games on a mattress; sing "Jump jump jump" rhymes' },
  { category: 'MOTOR', title: 'Throws a ball overhand', description: 'Can throw a ball in the intended direction with an overhand motion', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Play catch in the park; start with soft balls' },
  { category: 'MOTOR', title: 'Walks up and down stairs alternating feet', description: 'Climbs stairs placing one foot per step (like an adult) with support', ageRangeStartMonth: 30, ageRangeEndMonth: 42, importanceLevel: 'NORMAL', tips: 'Hold hand initially; count steps together' },
  { category: 'MOTOR', title: 'Turns single pages of a book', description: 'Can turn one page at a time in a regular paper book', ageRangeStartMonth: 24, ageRangeEndMonth: 30, importanceLevel: 'OPTIONAL', tips: 'Read together daily; let child turn the page when you say "next page"' },
  { category: 'MOTOR', title: 'Draws vertical and horizontal lines', description: 'Can copy a straight line (vertical or horizontal) when shown', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Draw lines together; use thick markers on large paper' },
  { category: 'MOTOR', title: 'Stacks 8-10 blocks', description: 'Builds tall towers of 8 or more blocks', ageRangeStartMonth: 30, ageRangeEndMonth: 36, importanceLevel: 'OPTIONAL', tips: 'Challenge to build the tallest tower; celebrate when it falls!' },
  { category: 'MOTOR', title: 'Pedals a tricycle', description: 'Can pedal and steer a three-wheeled cycle', ageRangeStartMonth: 30, ageRangeEndMonth: 42, importanceLevel: 'OPTIONAL', tips: 'Indian-made tricycles are ideal; practice in the colony or park' },
  { category: 'MOTOR', title: 'Threads large beads on a string', description: 'Can string large beads or macaroni onto a shoelace', ageRangeStartMonth: 30, ageRangeEndMonth: 42, importanceLevel: 'OPTIONAL', tips: 'Use large wooden beads; builds fine motor and concentration' },

  // ── 36–48 months ──────────────────────────────────────────────
  { category: 'MOTOR', title: 'Catches a large ball with both hands', description: 'Can catch a ball bounced or gently tossed from a short distance', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Start by rolling, then bouncing, then gentle toss' },
  { category: 'MOTOR', title: 'Hops on one foot', description: 'Can hop forward on one foot 2-3 times', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Play hopscotch (stapu/kit-kit) — a classic Indian game for this skill' },
  { category: 'MOTOR', title: 'Uses scissors to cut paper', description: 'Can hold child-safe scissors and cut along a straight line', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Supervise closely; start with cutting play dough before paper' },
  { category: 'MOTOR', title: 'Draws a circle', description: 'Can copy a circle shape when demonstrated', ageRangeStartMonth: 36, ageRangeEndMonth: 42, importanceLevel: 'NORMAL', tips: 'Draw together; let them trace circles on rangoli patterns' },
  { category: 'MOTOR', title: 'Buttons and unbuttons large buttons', description: 'Can manage large buttons on clothing independently', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Practice with a button board or doll\'s clothes; builds independence' },
  { category: 'MOTOR', title: 'Pours liquid from a jug', description: 'Can pour water from a small jug into a glass with reasonable accuracy', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'OPTIONAL', tips: 'Let them pour their own water at mealtimes using a small lota or jug' },

  // ── 48–60 months ──────────────────────────────────────────────
  { category: 'MOTOR', title: 'Skips on alternate feet', description: 'Can skip with a step-hop pattern alternating feet', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'OPTIONAL', tips: 'Play skipping games with other children in the colony' },
  { category: 'MOTOR', title: 'Balances on one foot for 5+ seconds', description: 'Can stand on one foot steadily for at least 5 seconds', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Play "statue" game; practice yoga tree pose together' },
  { category: 'MOTOR', title: 'Writes some letters and numbers', description: 'Can write a few letters of their name and some numbers (1-5)', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Practice on a slate (tradition in many Indian homes); use chalk first' },
  { category: 'MOTOR', title: 'Dresses and undresses independently', description: 'Can put on and take off most clothing without help', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Choose clothes with easy fastenings; allow extra time for getting ready' },
  { category: 'MOTOR', title: 'Uses a fork and spoon properly', description: 'Eats with utensils with minimal spilling; may use hands for some foods (culturally appropriate)', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'In Indian families, eating with hands is perfectly appropriate; focus on cleanliness' },

  // ── 60–72 months ──────────────────────────────────────────────
  { category: 'MOTOR', title: 'Rides a bicycle with training wheels', description: 'Can pedal and steer a bicycle with stabiliser wheels', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'OPTIONAL', tips: 'Practice in the colony or park; helmet mandatory' },
  { category: 'MOTOR', title: 'Ties shoelaces (beginning)', description: 'Starting to learn to tie shoelaces with adult guidance', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'OPTIONAL', tips: 'Use the "bunny ears" method; most Indian school shoes have velcro at this age' },
  { category: 'MOTOR', title: 'Copies a triangle and square', description: 'Can draw geometric shapes like triangles and squares by copying', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Practice with rangoli patterns; draw shapes together' },
  { category: 'MOTOR', title: 'Writes own name', description: 'Can write their full first name legibly', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Practice on slate, then paper; use dotted letters to trace' },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    COGNITIVE SKILLS                          ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Fixes gaze on faces', description: 'Stares at faces, especially mother\'s face during feeding; focuses at 8-12 inches', ageRangeStartMonth: 0, ageRangeEndMonth: 2, importanceLevel: 'CRITICAL', tips: 'Make eye contact during feeding; keep face close (20-30 cm)' },
  { category: 'COGNITIVE', title: 'Follows moving objects with eyes', description: 'Eyes track a slowly moving object or face from side to side', ageRangeStartMonth: 0, ageRangeEndMonth: 3, importanceLevel: 'CRITICAL', tips: 'Move a colourful toy slowly in an arc; use black and white patterns for newborns' },
  { category: 'COGNITIVE', title: 'Recognises familiar faces and voices', description: 'Shows different response to familiar people (mother, father) vs strangers', ageRangeStartMonth: 2, ageRangeEndMonth: 4, importanceLevel: 'CRITICAL', tips: 'Talk and sing to baby frequently; let grandparents and family interact regularly' },

  // ── 3–6 months ────────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Explores objects with hands and mouth', description: 'Grabs objects and brings to mouth to explore; mouths everything', ageRangeStartMonth: 3, ageRangeEndMonth: 6, importanceLevel: 'NORMAL', tips: 'Offer safe, clean teethers and toys of different textures; keep small objects away' },
  { category: 'COGNITIVE', title: 'Responds to own name', description: 'Turns head and looks when name is called', ageRangeStartMonth: 5, ageRangeEndMonth: 9, importanceLevel: 'CRITICAL', tips: 'Use baby\'s name frequently in conversation; call from different directions' },
  { category: 'COGNITIVE', title: 'Notices cause and effect', description: 'Realises that shaking a rattle makes sound; dropping toy makes parent pick it up', ageRangeStartMonth: 4, ageRangeEndMonth: 7, importanceLevel: 'NORMAL', tips: 'Give rattles, squeaky toys; repeat actions that make baby laugh' },
  { category: 'COGNITIVE', title: 'Shows interest in mirror reflection', description: 'Smiles at and reaches for own reflection in a mirror', ageRangeStartMonth: 4, ageRangeEndMonth: 8, importanceLevel: 'NORMAL', tips: 'Play in front of an unbreakable mirror; point to baby\'s reflection and say their name' },

  // ── 6–12 months ───────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Develops object permanence', description: 'Looks for a toy that has been hidden under a cloth; understands objects exist even when unseen', ageRangeStartMonth: 6, ageRangeEndMonth: 10, importanceLevel: 'CRITICAL', tips: 'Play peek-a-boo and hide toys under a dupatta (scarf) for baby to find' },
  { category: 'COGNITIVE', title: 'Imitates simple actions', description: 'Copies gestures like clapping, waving, or banging two objects together', ageRangeStartMonth: 8, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Demonstrate actions and wait for baby to copy; clap and say "tali bajao"' },
  { category: 'COGNITIVE', title: 'Understands "no"', description: 'Pauses or stops activity when told "no" or "nahi"', ageRangeStartMonth: 8, ageRangeEndMonth: 12, importanceLevel: 'CRITICAL', tips: 'Use a firm but gentle tone; redirect rather than just saying no' },
  { category: 'COGNITIVE', title: 'Finds hidden objects easily', description: 'Can find a toy hidden under a cloth or cup even when moved', ageRangeStartMonth: 10, ageRangeEndMonth: 14, importanceLevel: 'NORMAL', tips: 'Play "cup game" — hide a toy under one of three cups and shuffle' },
  { category: 'COGNITIVE', title: 'Explores objects in new ways', description: 'Shakes, bangs, throws, and drops objects to see what happens', ageRangeStartMonth: 9, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Give pots, pans, spoons — kitchen band! Great for exploration' },

  // ── 12–24 months ──────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Points to body parts when asked', description: 'Can identify and point to eyes (aankh), nose (naak), mouth (munh), ears (kaan)', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'CRITICAL', tips: 'Sing "Head, Shoulders, Knees and Toes" or "Nani teri morni ko mor le gaye" while pointing' },
  { category: 'COGNITIVE', title: 'Matches simple shapes', description: 'Can place circle, square, triangle into a shape sorter', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'NORMAL', tips: 'Start with a simple 3-shape sorter; name each shape' },
  { category: 'COGNITIVE', title: 'Points to objects when named', description: 'Can point to familiar objects like fan (pankha), light (batti), dog (kutte) when named', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'CRITICAL', tips: 'Name objects around the house in both Hindi and English during daily routines' },
  { category: 'COGNITIVE', title: 'Follows simple one-step instructions', description: 'Understands and follows "Give me the ball" or "Yahan aao" (come here)', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'CRITICAL', tips: 'Give clear, simple instructions; praise when followed' },
  { category: 'COGNITIVE', title: 'Identifies common objects in pictures', description: 'Points to animals, vehicles, fruits in a picture book when named', ageRangeStartMonth: 15, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Use colourful picture books; ask "Gaay kahan hai?" (Where is the cow?)' },
  { category: 'COGNITIVE', title: 'Sorts objects by shape or colour', description: 'Can group objects by one characteristic — all red items together, or all circles', ageRangeStartMonth: 18, ageRangeEndMonth: 30, importanceLevel: 'NORMAL', tips: 'Use dal (lentils) of different colours for sorting practice' },
  { category: 'COGNITIVE', title: 'Completes simple 3-4 piece puzzles', description: 'Can fit pieces into a simple knob puzzle or flat jigsaw', ageRangeStartMonth: 18, ageRangeEndMonth: 30, importanceLevel: 'NORMAL', tips: 'Start with peg puzzles; Indian-themed ones with animals or fruits work well' },
  { category: 'COGNITIVE', title: 'Follows two-step instructions', description: 'Understands "Pick up the book AND put it on the table"', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Give instructions during daily routine — "Chappal utaro aur yahan rakho"' },

  // ── 24–36 months ──────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Names common objects and pictures', description: 'Can name everyday objects, animals, and food items when shown', ageRangeStartMonth: 24, ageRangeEndMonth: 30, importanceLevel: 'NORMAL', tips: 'Play naming games during meals, walks, and book reading' },
  { category: 'COGNITIVE', title: 'Understands concept of "two"', description: 'Can give you "two" items when asked; understands basic quantity', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Count during daily activities — "Do roti dena" (give two rotis)' },
  { category: 'COGNITIVE', title: 'Matches colours', description: 'Can match objects of the same colour; knows 3-4 colour names', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Use rangoli colours, building blocks; ask "Lal dikhao" (show me red)' },
  { category: 'COGNITIVE', title: 'Engages in pretend play', description: 'Pretends to feed a doll, talks on a toy phone, plays "cooking"', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'CRITICAL', tips: 'Provide toy kitchen sets, dolls; play along — pretend play builds imagination' },
  { category: 'COGNITIVE', title: 'Understands big vs small', description: 'Can identify and sort objects by size — big (bada) and small (chhota)', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Compare objects during play — "Yeh bada hai, yeh chhota hai"' },
  { category: 'COGNITIVE', title: 'Completes 6-8 piece puzzles', description: 'Can complete more complex flat puzzles with interlocking pieces', ageRangeStartMonth: 30, ageRangeEndMonth: 42, importanceLevel: 'OPTIONAL', tips: 'Indian-themed puzzles (map of India, festivals) make it cultural' },

  // ── 36–48 months ──────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Counts to 10', description: 'Can count objects from 1 to 10 with one-to-one correspondence', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Count stairs, fruits, fingers; use both Hindi and English numbers' },
  { category: 'COGNITIVE', title: 'Names 4-6 colours', description: 'Can correctly name basic colours — red, blue, green, yellow, orange, pink', ageRangeStartMonth: 36, ageRangeEndMonth: 42, importanceLevel: 'NORMAL', tips: 'Point out colours in clothes, food, nature during daily walks' },
  { category: 'COGNITIVE', title: 'Understands time concepts', description: 'Grasps "aaj" (today), "kal" (tomorrow/yesterday), "abhi" (now), "baad mein" (later)', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Use time words in daily conversation — "Abhi khana khate hain, baad mein khelenge"' },
  { category: 'COGNITIVE', title: 'Groups objects by category', description: 'Can sort animals, vehicles, fruits, vegetables into groups', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Sort sabzi (vegetables) while helping in the kitchen; name categories' },
  { category: 'COGNITIVE', title: 'Draws a person with 2-4 body parts', description: 'Draws a recognisable figure with head, body, and some limbs', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Draw people together — "Let\'s draw Amma/Papa with eyes, nose, mouth"' },
  { category: 'COGNITIVE', title: 'Understands same vs different', description: 'Can identify if two objects are the same or different', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Play matching games with socks, shoes, or cards' },

  // ── 48–60 months ──────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Counts to 20 or beyond', description: 'Can count objects accurately up to 20; may rote count higher', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Count items during shopping, cooking, or while climbing stairs' },
  { category: 'COGNITIVE', title: 'Recognises letters of the alphabet', description: 'Identifies most uppercase English letters and some Hindi varnamala', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Use alphabet charts; many Indian homes have "A for Apple" posters — add Hindi ones too' },
  { category: 'COGNITIVE', title: 'Understands positional words', description: 'Knows concepts like upar/neeche (up/down), andar/bahar (in/out), aage/peeche (front/back)', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Play position games — "Ball ko box ke ANDAR dalo"' },
  { category: 'COGNITIVE', title: 'Answers "why" questions', description: 'Can give simple reasons when asked why — "Kyunki bhook lagi hai" (because I\'m hungry)', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Encourage curiosity; ask "Kyun?" (why?) during conversations' },
  { category: 'COGNITIVE', title: 'Draws a person with 6+ body parts', description: 'Draws a detailed person with head, body, arms, legs, hands, feet, and facial features', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Draw family portraits together; label body parts' },

  // ── 60–72 months ──────────────────────────────────────────────
  { category: 'COGNITIVE', title: 'Writes numbers 1-10', description: 'Can write numerals 1 through 10 legibly', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Practice on slate before paper; use dot-to-dot number worksheets' },
  { category: 'COGNITIVE', title: 'Understands basic addition and subtraction', description: 'Can solve simple addition (2+1=3) using fingers or objects', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Use real objects — "Teen aam mein se ek kha liya, kitne bache?" (3 mangoes minus 1)' },
  { category: 'COGNITIVE', title: 'Reads simple sight words', description: 'Recognises and reads common words like cat, dog, red, the, is', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Label objects around the house; use flashcards with pictures' },
  { category: 'COGNITIVE', title: 'Tells left from right', description: 'Can identify left and right hand/direction', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'OPTIONAL', tips: 'Practice with "left hand up, right hand up" during exercise' },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                  SPEECH & LANGUAGE                           ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  { category: 'SPEECH', title: 'Startles to loud sounds', description: 'Shows startle reflex (Moro) in response to sudden loud noises', ageRangeStartMonth: 0, ageRangeEndMonth: 1, importanceLevel: 'CRITICAL', tips: 'If no response to sounds, consult paediatrician for hearing screening' },
  { category: 'SPEECH', title: 'Coos and makes gurgling sounds', description: 'Makes vowel-like sounds — "ooh", "aah", "goo" — especially when content', ageRangeStartMonth: 1, ageRangeEndMonth: 4, importanceLevel: 'CRITICAL', tips: 'Talk back when baby coos; imitate their sounds to encourage "conversation"' },
  { category: 'SPEECH', title: 'Turns head towards sounds', description: 'Turns head in the direction of a voice or noise', ageRangeStartMonth: 2, ageRangeEndMonth: 4, importanceLevel: 'CRITICAL', tips: 'Call baby\'s name from different sides; use toys with gentle sounds' },

  // ── 3–6 months ────────────────────────────────────────────────
  { category: 'SPEECH', title: 'Laughs out loud', description: 'Produces full belly laughs in response to play or funny faces', ageRangeStartMonth: 3, ageRangeEndMonth: 6, importanceLevel: 'NORMAL', tips: 'Play tickling games, make funny sounds; baby\'s first laugh is a joyful milestone!' },
  { category: 'SPEECH', title: 'Makes vowel sounds in sequences', description: 'Produces strings of vowels — "ah-ah-ah", "ooh-ooh"', ageRangeStartMonth: 3, ageRangeEndMonth: 6, importanceLevel: 'NORMAL', tips: 'Repeat baby\'s sounds back; add consonants — if baby says "aah", you say "maa"' },
  { category: 'SPEECH', title: 'Babbles with consonant sounds', description: 'Starts making consonant-vowel combinations — "ba-ba", "da-da", "ma-ma" (without meaning)', ageRangeStartMonth: 5, ageRangeEndMonth: 8, importanceLevel: 'CRITICAL', tips: 'Babble back! Turn it into a game; these sounds are practice for real words' },

  // ── 6–12 months ───────────────────────────────────────────────
  { category: 'SPEECH', title: 'Uses varied babbling (jargon speech)', description: 'Babbles with rhythm and tone that sounds like real conversation, mixing many consonants', ageRangeStartMonth: 7, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Have "conversations" with baby\'s babble; respond as if you understand' },
  { category: 'SPEECH', title: 'Says "mama" or "papa" with meaning', description: 'Uses "mama", "papa", "dada", "nana" specifically for the right person', ageRangeStartMonth: 9, ageRangeEndMonth: 14, importanceLevel: 'CRITICAL', tips: 'Point to people and say "Yeh Papa hai, yeh Mamma hai" consistently' },
  { category: 'SPEECH', title: 'Understands 50+ words', description: 'Recognises names of common objects and people even though may not speak them all', ageRangeStartMonth: 10, ageRangeEndMonth: 14, importanceLevel: 'NORMAL', tips: 'Name everything during daily routines — feeding, bathing, walks' },
  { category: 'SPEECH', title: 'Waves bye-bye and uses gestures', description: 'Uses meaningful gestures — waves "bye-bye" (ta-ta), shakes head for "no", raises arms to be picked up', ageRangeStartMonth: 9, ageRangeEndMonth: 14, importanceLevel: 'CRITICAL', tips: 'Model gestures consistently; wave when leaving; say "Namaste" with folded hands' },
  { category: 'SPEECH', title: 'Says 1-3 words besides mama/papa', description: 'Uses words like "nahi" (no), "de" (give), "paani" (water), or names of family members', ageRangeStartMonth: 10, ageRangeEndMonth: 15, importanceLevel: 'CRITICAL', tips: 'Respond immediately when child uses words; expand — if child says "paani", say "Haan, paani chahiye"' },

  // ── 12–18 months ──────────────────────────────────────────────
  { category: 'SPEECH', title: 'Speaks 5-10 recognisable words', description: 'Vocabulary includes everyday words in Hindi/English/mother tongue', ageRangeStartMonth: 12, ageRangeEndMonth: 18, importanceLevel: 'CRITICAL', tips: 'Don\'t worry about mixing languages; bilingual vocabulary counts together' },
  { category: 'SPEECH', title: 'Points to ask for things', description: 'Points at desired objects and vocalises to request them', ageRangeStartMonth: 12, ageRangeEndMonth: 16, importanceLevel: 'CRITICAL', tips: 'When child points, name the object — "Haan, woh ball hai. Ball chahiye?"' },
  { category: 'SPEECH', title: 'Tries to imitate new words', description: 'Attempts to copy words spoken by adults, even if pronunciation is off', ageRangeStartMonth: 14, ageRangeEndMonth: 20, importanceLevel: 'NORMAL', tips: 'Speak clearly and slowly; praise attempts rather than correcting pronunciation' },

  // ── 18–24 months ──────────────────────────────────────────────
  { category: 'SPEECH', title: 'Vocabulary of 20-50 words', description: 'Uses 20-50 words across languages (Hindi, English, mother tongue all counted)', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'CRITICAL', tips: 'Keep a word diary; read daily in any language — children absorb vocabulary fast' },
  { category: 'SPEECH', title: 'Combines two words', description: 'Makes two-word phrases like "Papa aao", "Doodh do", "More water", "Big car"', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'CRITICAL', tips: 'Model two-word combinations; expand single words — if child says "ball", say "Red ball"' },
  { category: 'SPEECH', title: 'Points to pictures in a book when named', description: 'Can identify and point to common objects/animals in picture books', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Read together daily; ask "Kutta kahan hai?" and let child point' },
  { category: 'SPEECH', title: 'Knows names of family members', description: 'Uses or responds to names of parents, siblings, grandparents (Dadi, Nani, Chacha, etc.)', ageRangeStartMonth: 18, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Use family names frequently; look at family photos together and name everyone' },

  // ── 24–36 months ──────────────────────────────────────────────
  { category: 'SPEECH', title: 'Vocabulary of 200-300 words', description: 'Rapid vocabulary growth; uses hundreds of words across languages', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'This is the "vocabulary explosion" period; talk, read, and describe everything' },
  { category: 'SPEECH', title: 'Uses 3-4 word sentences', description: 'Forms short sentences — "Mujhe yeh chahiye", "Papa ghar aaye", "I want milk"', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'CRITICAL', tips: 'Model complete sentences; gently expand child\'s phrases' },
  { category: 'SPEECH', title: 'Asks "kya" and "kahan" questions', description: 'Asks "what" (kya) and "where" (kahan) questions — "Yeh kya hai?", "Papa kahan?"', ageRangeStartMonth: 24, ageRangeEndMonth: 30, importanceLevel: 'NORMAL', tips: 'Answer every question patiently; this curiosity drives language and learning' },
  { category: 'SPEECH', title: 'Strangers can understand most speech', description: 'About 50-75% of speech is intelligible to unfamiliar adults', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'If strangers struggle to understand, don\'t worry — it improves rapidly' },
  { category: 'SPEECH', title: 'Says own name, age, and gender', description: 'Can tell name, age ("Do saal"), and "boy/girl" or "ladka/ladki" when asked', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Practice — "Aapka naam kya hai? Aap kitne saal ke ho?"' },
  { category: 'SPEECH', title: 'Sings simple rhymes', description: 'Can sing nursery rhymes or Bollywood songs (at least partially)', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'OPTIONAL', tips: 'Sing "Machhli Jal Ki Rani Hai", "Twinkle Twinkle", "Nani Teri Morni" together' },

  // ── 36–48 months ──────────────────────────────────────────────
  { category: 'SPEECH', title: 'Speaks in 5-6 word sentences', description: 'Uses complex sentences — "Main park mein khelna chahta hoon"', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Have real conversations about their day; ask open-ended questions' },
  { category: 'SPEECH', title: 'Tells a simple story', description: 'Can narrate a simple event or retell a known story with a beginning and end', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Ask "Aaj school mein kya hua?" — listen patiently as they narrate' },
  { category: 'SPEECH', title: 'Asks "kyun" (why) questions constantly', description: 'Enters the "why" phase — asks why about everything', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Answer patiently; this is peak curiosity and learning. Say "Bahut achha sawal hai!"' },
  { category: 'SPEECH', title: 'Uses plurals and past tense', description: 'Says "dogs" vs "dog", "I went" vs "I go" — grammar is developing', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Model correct grammar gently; don\'t explicitly correct — just rephrase correctly' },
  { category: 'SPEECH', title: 'Knows several nursery rhymes/poems', description: 'Can recite 3-5 complete nursery rhymes in Hindi and/or English', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'OPTIONAL', tips: 'Build a repertoire of Hindi and English rhymes; recite at bedtime' },

  // ── 48–60 months ──────────────────────────────────────────────
  { category: 'SPEECH', title: 'Speaks clearly — understood by strangers', description: 'Over 90% of speech is clear and intelligible to unfamiliar listeners', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'CRITICAL', tips: 'If speech is still largely unclear at 4, consult a speech therapist' },
  { category: 'SPEECH', title: 'Uses future tense', description: 'Can talk about future events — "Kal hum zoo jayenge"', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Discuss upcoming plans — "Kal kya karenge?"' },
  { category: 'SPEECH', title: 'Tells longer stories with details', description: 'Narrates events with sequence, details, and some dramatic elements', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Encourage storytelling at bedtime; start a story and let child finish it' },
  { category: 'SPEECH', title: 'Understands 2000+ words', description: 'Receptive vocabulary is very large; understands complex instructions', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Read chapter books; explain new words as you encounter them' },

  // ── 60–72 months ──────────────────────────────────────────────
  { category: 'SPEECH', title: 'Uses complex sentences with conjunctions', description: 'Uses "because", "but", "and then", "kyunki", "lekin" in speech', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Model complex sentences in conversation; read books with richer language' },
  { category: 'SPEECH', title: 'Defines common words', description: 'Can explain what a word means — "A ball is round and we play with it"', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'OPTIONAL', tips: 'Play word games — "Aam kya hota hai?" Let child describe' },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    SOCIAL SKILLS                             ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Social smile', description: 'Smiles in response to a face or voice (not just gas) — a genuine social response', ageRangeStartMonth: 1, ageRangeEndMonth: 3, importanceLevel: 'CRITICAL', tips: 'Smile at baby frequently; first social smile usually comes at 6-8 weeks' },
  { category: 'SOCIAL', title: 'Makes eye contact during feeding', description: 'Gazes at mother\'s/father\'s face during breastfeeding or bottle feeding', ageRangeStartMonth: 0, ageRangeEndMonth: 3, importanceLevel: 'CRITICAL', tips: 'Make eye contact and talk gently while feeding; this builds the primary bond' },

  // ── 3–6 months ────────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Enjoys playing with people', description: 'Smiles, squeals, and shows excitement during social interaction; may cry when play stops', ageRangeStartMonth: 3, ageRangeEndMonth: 6, importanceLevel: 'NORMAL', tips: 'Play face-to-face games; include grandparents, siblings in play' },
  { category: 'SOCIAL', title: 'Responds differently to emotions', description: 'Reacts to happy vs angry faces/voices; may cry if someone is stern', ageRangeStartMonth: 4, ageRangeEndMonth: 7, importanceLevel: 'NORMAL', tips: 'Be aware of your emotional tone; baby reads faces very well' },

  // ── 6–12 months ───────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Shows stranger anxiety', description: 'Becomes wary or cries around unfamiliar people; clings to parent', ageRangeStartMonth: 6, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Completely normal! Don\'t force baby to go to strangers; let them warm up gradually' },
  { category: 'SOCIAL', title: 'Shows separation anxiety', description: 'Cries or becomes distressed when primary caregiver leaves the room', ageRangeStartMonth: 8, ageRangeEndMonth: 18, importanceLevel: 'NORMAL', tips: 'Practice brief separations; say "Mamma aaegi" (Mamma will come back) and always return' },
  { category: 'SOCIAL', title: 'Enjoys peek-a-boo and pat-a-cake', description: 'Actively participates in simple social games; anticipates and laughs', ageRangeStartMonth: 7, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Play repeatedly; these games teach turn-taking and social interaction' },
  { category: 'SOCIAL', title: 'Extends toy to show others', description: 'Holds up a toy to show parent (joint attention); may not release it', ageRangeStartMonth: 9, ageRangeEndMonth: 14, importanceLevel: 'CRITICAL', tips: 'Respond with interest — "Wah! Kya dikhaya tumne! Ball hai!" This encourages sharing' },

  // ── 12–24 months ──────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Plays alongside other children (parallel play)', description: 'Plays near other children but not cooperatively; watches others play', ageRangeStartMonth: 12, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Arrange playdates; don\'t force sharing — parallel play is developmentally appropriate' },
  { category: 'SOCIAL', title: 'Imitates adult activities', description: 'Pretends to sweep, cook, talk on phone, mimicking what parents and grandparents do', ageRangeStartMonth: 12, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Give toy broom, toy phone, play kitchen; let them "help" with real tasks' },
  { category: 'SOCIAL', title: 'Shows affection to familiar people', description: 'Hugs, kisses, pats family members; runs to greet parents', ageRangeStartMonth: 12, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Reciprocate affection; model saying "I love you" / "Main tumse pyaar karta/karti hoon"' },
  { category: 'SOCIAL', title: 'Shows possessiveness ("mera!")', description: 'Claims ownership of toys and objects; says "mine/mera"', ageRangeStartMonth: 18, ageRangeEndMonth: 30, importanceLevel: 'NORMAL', tips: 'This is normal! Gently introduce turn-taking rather than forced sharing' },

  // ── 24–36 months ──────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Takes turns in simple games', description: 'Can wait for their turn during simple activities like rolling a ball back and forth', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Play board games, ball rolling; say "Ab tumhari baari" (now your turn)' },
  { category: 'SOCIAL', title: 'Shows empathy when someone is upset', description: 'Notices when others are sad or hurt; may try to comfort by patting or offering a toy', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Name emotions — "Didi ro rahi hai, usko dard ho raha hai"; model comforting' },
  { category: 'SOCIAL', title: 'Plays simple pretend games with others', description: 'Engages in shared pretend play — plays "doctor-doctor", "ghar-ghar" (house)', ageRangeStartMonth: 30, ageRangeEndMonth: 42, importanceLevel: 'NORMAL', tips: 'Join pretend play; playing "ghar-ghar" is a beloved Indian childhood game' },

  // ── 36–48 months ──────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Plays cooperatively with other children', description: 'Engages in cooperative play — builds together, plays games with rules', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Arrange group play; colony (housing society) play areas are great for this' },
  { category: 'SOCIAL', title: 'Shares and takes turns willingly', description: 'Can share toys and wait for turns without much conflict', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Praise sharing behaviour; "Bahut achha! Tune apna toy share kiya!"' },
  { category: 'SOCIAL', title: 'Has preferred friends', description: 'Shows clear preferences for certain playmates; talks about friends by name', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'OPTIONAL', tips: 'Facilitate friendships; invite preferred friends for playdates' },
  { category: 'SOCIAL', title: 'Understands basic rules in games', description: 'Can follow simple rules in group games like "Chor-Police", "Hide and Seek"', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Play traditional Indian games — Chor-Police, Stapu, Pitthu' },

  // ── 48–72 months ──────────────────────────────────────────────
  { category: 'SOCIAL', title: 'Shows concern for fairness', description: 'Notices and complains about unfairness — "That\'s not fair!"', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'OPTIONAL', tips: 'Discuss fairness; use it as a teaching moment for values' },
  { category: 'SOCIAL', title: 'Negotiates with peers', description: 'Can discuss and compromise with friends about play activities', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Coach conflict resolution — "Use your words to tell your friend what you want"' },
  { category: 'SOCIAL', title: 'Shows awareness of gender', description: 'Understands concept of boy/girl; may show gender-typical play preferences', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Allow all types of play regardless of gender; avoid "boys don\'t cry" type messaging' },
  { category: 'SOCIAL', title: 'Enjoys group activities', description: 'Participates in group activities at school/playgroup — circle time, group singing', ageRangeStartMonth: 48, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Enrol in group activities — dance class, art class, sports' },
  { category: 'SOCIAL', title: 'Understands social norms', description: 'Knows basic social expectations — greeting elders, saying please/thank you, not interrupting', ageRangeStartMonth: 54, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Model respectful behaviour; teach "Namaste" to elders, "Please" and "Thank you"' },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                  EMOTIONAL DEVELOPMENT                       ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–6 months ────────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Expresses basic emotions', description: 'Shows contentment (smiles, coos), distress (cries), and interest (stares intently)', ageRangeStartMonth: 0, ageRangeEndMonth: 3, importanceLevel: 'CRITICAL', tips: 'Respond to cries promptly; this builds trust and secure attachment' },
  { category: 'EMOTIONAL', title: 'Self-soothes briefly', description: 'Can calm themselves for short periods by sucking thumb/fingers or looking at something interesting', ageRangeStartMonth: 3, ageRangeEndMonth: 8, importanceLevel: 'NORMAL', tips: 'Allow self-soothing; thumb sucking is normal and not a concern at this age' },
  { category: 'EMOTIONAL', title: 'Shows clear attachment to primary caregiver', description: 'Shows strong preference for mother/primary caregiver; calms more easily with them', ageRangeStartMonth: 4, ageRangeEndMonth: 8, importanceLevel: 'CRITICAL', tips: 'This is the foundation of emotional security; respond consistently to needs' },

  // ── 6–12 months ───────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Shows clear emotional responses', description: 'Displays joy (laughing, bouncing), anger (screeching), fear (clinging), frustration (crying when toy taken)', ageRangeStartMonth: 6, ageRangeEndMonth: 12, importanceLevel: 'NORMAL', tips: 'Name emotions — "Tum khush ho!" (You\'re happy!) or "Lagta hai tum pareshaan ho" (You seem upset)' },
  { category: 'EMOTIONAL', title: 'Uses comfort object (transitional object)', description: 'May develop attachment to a specific blanket, soft toy, or cloth for comfort', ageRangeStartMonth: 8, ageRangeEndMonth: 18, importanceLevel: 'NORMAL', tips: 'A comfort object is healthy; don\'t take it away forcibly; it helps emotional regulation' },

  // ── 12–24 months ──────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Has temper tantrums', description: 'Experiences intense frustration episodes — crying, screaming, falling on floor when upset', ageRangeStartMonth: 12, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Tantrums are NORMAL at this age. Stay calm, ensure safety, and comfort after. Don\'t give in to demands during tantrum.' },
  { category: 'EMOTIONAL', title: 'Expresses multiple distinct emotions', description: 'Shows happiness, sadness, anger, fear, excitement, and frustration clearly', ageRangeStartMonth: 12, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Acknowledge ALL emotions — "Haan, abhi tum gussa ho" (Yes, you\'re angry right now). Don\'t dismiss feelings.' },
  { category: 'EMOTIONAL', title: 'Seeks comfort from parent when upset', description: 'Runs to parent for a hug when scared, hurt, or frustrated', ageRangeStartMonth: 12, ageRangeEndMonth: 24, importanceLevel: 'CRITICAL', tips: 'Always be available for comfort; this builds secure attachment' },
  { category: 'EMOTIONAL', title: 'Shows pride in accomplishments', description: 'Looks for approval after doing something new; smiles and claps for self', ageRangeStartMonth: 15, ageRangeEndMonth: 24, importanceLevel: 'NORMAL', tips: 'Celebrate achievements — "Wah! Tumne tower banaya! Bahut achha!"' },

  // ── 24–36 months ──────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Begins to say how they feel', description: 'Can verbally express some emotions — "Main khush hoon" (I am happy), "Darr lag raha hai" (I am scared)', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Teach emotion words in both Hindi and English; use feeling charts with faces' },
  { category: 'EMOTIONAL', title: 'Shows defiance and independence', description: 'Says "nahi" (no) frequently; insists "Main karunga/karungi" (I will do it myself)', ageRangeStartMonth: 24, ageRangeEndMonth: 36, importanceLevel: 'NORMAL', tips: 'Allow safe independence; offer choices — "Red shirt ya blue shirt?"' },
  { category: 'EMOTIONAL', title: 'Experiences fear of specific things', description: 'May develop fears — darkness (andhera), loud sounds, animals, monsters', ageRangeStartMonth: 24, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Take fears seriously; don\'t dismiss with "Be brave". Comfort and gradually expose to feared thing.' },

  // ── 36–48 months ──────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Understands others\' feelings', description: 'Can identify if someone is happy, sad, or angry and explain why', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Read stories and discuss characters\' emotions — "Sher ko kya feel ho raha hai?"' },
  { category: 'EMOTIONAL', title: 'Manages frustration better', description: 'Can cope with minor frustrations without full tantrum; may whine or ask for help instead', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Teach coping strategies — deep breathing (smell the flower, blow the candle), counting to 5' },
  { category: 'EMOTIONAL', title: 'Shows guilt when does something wrong', description: 'Looks ashamed or says sorry when they know they\'ve done something naughty', ageRangeStartMonth: 36, ageRangeEndMonth: 48, importanceLevel: 'NORMAL', tips: 'Distinguish between guilt (healthy) and shame (harmful); focus on the action, not the child' },

  // ── 48–60 months ──────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Uses words instead of actions for emotions', description: 'Says "I\'m angry" instead of hitting; "I\'m sad" instead of just crying', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Reinforce verbalization — "Bahut achha ki tumne bataya ki tum gussa ho"' },
  { category: 'EMOTIONAL', title: 'Shows patience and delayed gratification', description: 'Can wait for a short time for something they want; understands "after 5 minutes"', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'NORMAL', tips: 'Practice waiting games; use a timer — "Jab ghanti bajegi, tab milega"' },
  { category: 'EMOTIONAL', title: 'Has a sense of humour', description: 'Tells simple jokes, laughs at absurdity, finds things "funny"', ageRangeStartMonth: 48, ageRangeEndMonth: 60, importanceLevel: 'OPTIONAL', tips: 'Laugh together! Shared humour strengthens the parent-child bond' },

  // ── 60–72 months ──────────────────────────────────────────────
  { category: 'EMOTIONAL', title: 'Handles transitions and change better', description: 'Can adapt to new situations (new school, new class) with moderate support', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Prepare for transitions in advance; visit new school, meet new teacher beforehand' },
  { category: 'EMOTIONAL', title: 'Develops self-confidence', description: 'Shows confidence in abilities; says "I can do it" and tries new things willingly', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Praise effort over result — "Tumne bahut mehnat ki!" vs "Tumne jeet liya!"' },
  { category: 'EMOTIONAL', title: 'Understands and follows rules at home and school', description: 'Knows household and school rules; follows them mostly without being reminded', ageRangeStartMonth: 60, ageRangeEndMonth: 72, importanceLevel: 'NORMAL', tips: 'Involve child in making rules; explain reasons behind rules' },
];
