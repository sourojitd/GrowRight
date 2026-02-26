/**
 * Comprehensive Indian-Context Developmental Activities (0–72 months)
 * Categories: MOTOR, COGNITIVE, SPEECH, SOCIAL, EMOTIONAL
 * Aligned with Indian Academy of Pediatrics (IAP) guidelines
 * Activities use Indian materials, games, food, and cultural references
 */

export interface ActivityData {
  category: 'MOTOR' | 'COGNITIVE' | 'SPEECH' | 'SOCIAL' | 'EMOTIONAL';
  title: string;
  description: string;
  instructions: string;
  minAgeMonths: number;
  maxAgeMonths: number;
  durationMinutes: number;
  materials: string[];
}

export const activities: ActivityData[] = [
  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    MOTOR SKILLS                             ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Tummy Time on Gadda',
    description: 'Place baby on a firm cotton gadda (mattress) on their tummy to build neck and shoulder strength.',
    instructions: 'Spread a clean cotton gadda or chatai (mat) on the floor. Place baby on their tummy. Get down to their eye level and talk, sing, or shake a colourful rattle to encourage them to lift their head. Start with 2-3 minutes per session, 3-4 times a day. Always supervise closely. If baby fusses, try placing a small rolled muslin cloth under their chest for support.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 3,
    materials: ['Cotton gadda or chatai', 'Colourful rattle', 'Muslin cloth']
  },
  {
    category: 'MOTOR',
    title: 'Malish and Leg Cycling',
    description: 'Gentle oil massage (malish) followed by bicycle leg movements to strengthen leg muscles and improve digestion.',
    instructions: 'Warm a small amount of coconut or sesame oil in your palms. Gently massage baby\'s legs from thigh to ankle in smooth strokes. After massage, hold baby\'s ankles and gently move their legs in a cycling motion — push one knee towards the tummy while extending the other leg, then alternate. Do 10-15 cycles gently. This also helps relieve gas. Sing softly while doing this to keep baby calm and engaged.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 10,
    materials: ['Coconut oil or sesame oil', 'Soft towel', 'Cotton gadda']
  },
  {
    category: 'MOTOR',
    title: 'Ghungroo Wrist Rattle Play',
    description: 'Tie soft ghungroo (anklet bells) on baby\'s wrist to encourage arm movement and hand awareness.',
    instructions: 'Take a soft fabric ghungroo band (available at any Indian toy shop) and gently tie it around baby\'s wrist — not too tight. The tinkling sound when baby moves their arm will encourage more arm movements and help them discover their hands. Switch wrists after a few minutes. Always remove the ghungroo after the activity and never leave baby unsupervised with it.',
    minAgeMonths: 1,
    maxAgeMonths: 3,
    durationMinutes: 5,
    materials: ['Soft fabric ghungroo band', 'Cotton gadda']
  },

  // ── 3–6 months ────────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Dupatta Peek and Reach',
    description: 'Use a light dupatta to play peek-a-boo and encourage reaching and grasping.',
    instructions: 'Lay baby on their back on a soft mat. Hold a lightweight dupatta above them and let it float down gently over their face. Say "Kahan gaya baby?" (Where did baby go?) and let them try to pull it off. This encourages reaching and grasping. You can also dangle the dupatta within reach so they try to grab it. Repeat 5-6 times. The light fabric is safe and easy for small hands to grasp.',
    minAgeMonths: 3,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['Lightweight cotton dupatta', 'Soft mat or gadda']
  },
  {
    category: 'MOTOR',
    title: 'Steel Katori Banging',
    description: 'Let baby hold and bang a small steel katori (bowl) with a wooden spoon to build grip strength and hand-eye coordination.',
    instructions: 'Seat baby in a supported sitting position (on your lap or propped with pillows). Give them a small steel katori in one hand and a wooden chamcha (spoon) in the other. Show them how to bang the spoon on the katori. The sound feedback encourages repetition and builds grip strength. Let them explore — they may try to mouth the spoon, which is fine if it is clean. Supervise at all times.',
    minAgeMonths: 4,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['Small steel katori', 'Wooden chamcha (spoon)']
  },

  // ── 6–9 months ────────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Makhana Pincer Grasp Practice',
    description: 'Use roasted makhana (fox nuts) to practise the pincer grasp — picking up small items between thumb and forefinger.',
    instructions: 'Place baby in a high chair or seated safely on a mat. Scatter a few roasted plain makhana on their steel thali or plate. Show them how to pick up one makhana using thumb and forefinger. Let them try on their own. Makhana is an ideal first finger food — it dissolves easily, is low choking risk, and is nutritious. Stay close and watch for any difficulty. Praise each successful pick-up with clapping and encouraging words.',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 10,
    materials: ['Roasted plain makhana', 'Steel thali or plate', 'High chair or mat']
  },
  {
    category: 'MOTOR',
    title: 'Crawling Obstacle Course with Takia',
    description: 'Create a simple crawling obstacle course using takias (cushions) and bolsters to encourage movement.',
    instructions: 'Arrange 3-4 takias (small Indian cushions) and a bolster in a line on the floor with small gaps between them. Place a favourite toy at the end. Encourage baby to crawl over, around, and between the cushions to reach the toy. You can sit at the far end and call out to them. This builds core strength, coordination, and spatial awareness. Make it fun by cheering them on: "Aa jao, aa jao!" (Come on, come on!).',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 10,
    materials: ['Takias (cushions)', 'Bolster', 'Favourite toy']
  },

  // ── 9–12 months ───────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Dabba Mein Daalo (Put in the Box)',
    description: 'Drop objects into a steel dabba (container) to practise grasp-and-release and hand-eye coordination.',
    instructions: 'Take a medium steel dabba with a wide opening and 5-6 small safe objects (wooden blocks, large plastic bottle caps, cloth balls). Sit with baby on the floor. Show them how to pick up an object and drop it into the dabba — say "Daalo!" (Put it in!) each time. The metallic clang provides satisfying sound feedback. Once all items are in, dump them out and start again. Count the items as they go in: "Ek, do, teen..."',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 10,
    materials: ['Steel dabba (container)', 'Wooden blocks', 'Large plastic bottle caps', 'Cloth balls']
  },
  {
    category: 'MOTOR',
    title: 'Roti Tearing Practice',
    description: 'Give baby a soft roti or chapati to tear into pieces, building finger strength and bilateral coordination.',
    instructions: 'During mealtime, give baby a small piece of soft roti or phulka. Show them how to hold it with both hands and tear it into smaller pieces. This exercises the pincer grasp and bilateral hand coordination. Let them dip the torn pieces in dal or dahi if they want. It is messy but excellent for fine motor development. Sit with them and tear your own roti alongside to model the action.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 10,
    materials: ['Soft roti or phulka', 'Dal or dahi for dipping', 'Steel thali']
  },

  // ── 12–18 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Lota Water Pouring',
    description: 'Use a small brass or steel lota (water vessel) to practise pouring water, building wrist control and coordination.',
    instructions: 'Set up the activity outdoors or in the bathroom. Fill a small steel lota with water halfway. Place an empty steel katori next to it. Show baby how to hold the lota with both hands and pour water into the katori. Let them try. Water will spill — that is perfectly fine. This builds wrist rotation, bilateral coordination, and concentration. Repeat several times. Talk about the water: "Pani dekho! Pani gir raha hai!" (Look at the water! Water is falling!).',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 10,
    materials: ['Small steel lota', 'Steel katori', 'Water', 'Towel']
  },
  {
    category: 'MOTOR',
    title: 'Climbing the Gaddi Stack',
    description: 'Stack floor cushions (gaddis) to create a soft climbing structure for gross motor development.',
    instructions: 'Stack 3-4 thick floor gaddis (the kind used for sitting on the floor during meals) to make a small mound. Encourage toddler to climb up and slide or roll down. Stay right beside them for safety. This builds leg strength, balance, and confidence. Say "Upar jao!" (Go up!) and "Neeche aao!" (Come down!). You can place a favourite toy at the top for motivation.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 15,
    materials: ['Floor gaddis (3-4)', 'Favourite toy']
  },

  // ── 18–24 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Chakla-Belan Atta Play',
    description: 'Use a small chakla-belan (rolling board and pin) with atta (wheat dough) to strengthen hands and improve coordination.',
    instructions: 'Prepare a small ball of soft atta (wheat flour dough) with a little oil so it does not stick. Give toddler a child-sized or small chakla and belan. Show them how to press the dough flat and roll the belan over it. Let them poke, press, tear, and roll the dough freely. Name the actions: "Dabao" (press), "Belo" (roll), "Todo" (tear). This is wonderful for hand strength and imitating real kitchen activities. If no child-sized set is available, use the regular chakla-belan under supervision.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 15,
    materials: ['Small chakla-belan set', 'Atta (wheat flour dough)', 'Oil', 'Old cloth or newspaper for the surface']
  },
  {
    category: 'MOTOR',
    title: 'Ball Kick in the Gali',
    description: 'Kick a soft ball back and forth in the gali (lane) or courtyard to develop leg coordination and balance.',
    instructions: 'Take toddler to a safe open area — courtyard, terrace, or gali. Place a soft lightweight ball on the ground in front of them. Show them how to kick it gently by swinging one foot forward. Stand a few feet away and kick it back to them. Take turns kicking. Count how many kicks: "Ek, do, teen!" This develops balance (standing on one foot briefly), leg strength, and turn-taking. Use a soft ball to avoid injury.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 10,
    materials: ['Soft lightweight ball']
  },

  // ── 24–36 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Rangoli Dot Joining',
    description: 'Create a simple dot grid and let the child join dots with chalk or crayon to make rangoli patterns, building fine motor control.',
    instructions: 'On a slate or large paper, draw a grid of dots (3x3 to start, then 5x5 for older children). Show the child how to connect dots with straight lines to make simple rangoli patterns — squares, diamonds, triangles. Let them try with chalk or thick crayons. Guide their hand initially if needed. Praise their patterns. Talk about rangoli and how it decorates our homes during festivals. Gradually increase the complexity of the dot grids.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 15,
    materials: ['Slate or large paper', 'Chalk or thick crayons']
  },
  {
    category: 'MOTOR',
    title: 'Dal Sorting Activity',
    description: 'Sort different dals (lentils) by type to refine the pincer grasp and develop concentration.',
    instructions: 'Mix a small amount of two visually different dals — for example, chana dal (yellow, large) and masoor dal (orange, small). Place the mix in a steel thali. Give the child two small katoris, one for each type. Show them how to pick up one dal at a time and place it in the correct katori. Start with just 10-15 pieces of each. This builds fine motor precision, visual discrimination, and patience. Always supervise to ensure dals are not put in mouth or nose.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 15,
    materials: ['Chana dal', 'Masoor dal', 'Steel thali', 'Two small katoris']
  },

  // ── 36–48 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Stapu (Hopscotch) Beginner',
    description: 'Play a simplified version of stapu (hopscotch) to develop hopping, balance, and leg strength.',
    instructions: 'Draw a simple stapu grid with 4-5 squares using chalk on the floor or ground. Number the squares 1 to 5. Show the child how to toss a flat stone (gitti) into square 1, then hop on one foot over that square and land in the next. For beginners, allow two-foot jumping instead of hopping. Take turns. Call out the numbers as they jump. Make it fun by clapping when they complete the course. Gradually introduce the one-foot hop as they gain balance.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 15,
    materials: ['Chalk', 'Flat stone (gitti)']
  },
  {
    category: 'MOTOR',
    title: 'Cutting Vegetables with Toy Knife',
    description: 'Use a toy knife or blunt butter knife to cut soft vegetables, practising hand-eye coordination and knife skills.',
    instructions: 'Place a cutting board on the table. Provide soft pre-cooked vegetables — boiled carrot rounds, cucumber slices, banana pieces, or paneer cubes. Give the child a toy knife or blunt butter knife. Show them how to hold the food with one hand and cut with the other using a sawing motion. Talk about each food item: colour, name, taste. This builds bilateral coordination, fine motor strength, and kitchen confidence. Always supervise closely.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 15,
    materials: ['Toy knife or blunt butter knife', 'Cutting board', 'Soft boiled vegetables', 'Banana', 'Paneer cubes']
  },

  // ── 48–60 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Gilli-Danda Introduction',
    description: 'Introduce the traditional Indian game of gilli-danda to develop hand-eye coordination, striking skills, and spatial judgement.',
    instructions: 'Use a short stick (danda, about 30 cm) and a smaller pointed piece (gilli, about 10 cm). Place the gilli on the ground with one end tilted up on a small stone. Show the child how to strike the raised end of the gilli with the danda to flip it into the air. Initially just practise flipping — do not worry about hitting it further while airborne. This develops timing, hand-eye coordination, and wrist strength. Play in a safe open area away from windows and people. Take turns and praise each attempt.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 20,
    materials: ['Gilli (small stick, 10 cm)', 'Danda (stick, 30 cm)', 'Small stone']
  },
  {
    category: 'MOTOR',
    title: 'Skipping Rope (Rassi Kood)',
    description: 'Learn to skip rope (rassi kood) for rhythm, coordination, timing, and cardiovascular fitness.',
    instructions: 'Use a lightweight cotton rope of appropriate length (handles should reach the child\'s armpits when standing on the middle of the rope). Start by teaching them to swing the rope overhead and step over it one swing at a time. Count each successful jump: "Ek, do, teen..." Once they can do single jumps, try continuous skipping. Sing a rassi kood rhyme to set the rhythm. Play in an open space with good footwear. Start with 10 jumps and build up gradually.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 15,
    materials: ['Lightweight cotton skipping rope']
  },

  // ── 60–72 months ──────────────────────────────────────────────
  {
    category: 'MOTOR',
    title: 'Kho-Kho Running Game',
    description: 'Play a simplified version of Kho-Kho to develop sprinting, agility, dodging, and teamwork.',
    instructions: 'You need at least 4-5 children. Have 3 children sit in a line on the ground with gaps between them, alternating the direction they face. One child is the chaser, one is the runner. The chaser must run around the seated players to tag the runner. The runner dodges and weaves around the seated players. When the chaser taps a seated player and says "Kho!", that player becomes the new chaser. Explain the rules simply and demonstrate first. Play in an open, safe area. Keep rounds short (2-3 minutes) and rotate roles so everyone participates.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 20,
    materials: ['Open play area', 'At least 4-5 children']
  },
  {
    category: 'MOTOR',
    title: 'Rangoli Freehand Drawing',
    description: 'Create freehand rangoli patterns with dry rangoli powder or chalk to develop fine motor precision and creativity.',
    instructions: 'Spread a dark cloth or use the courtyard floor. Provide rangoli powder in a small katori or use chalk. Show the child how to pinch rangoli powder between thumb and forefinger and let it fall in a controlled line to create patterns. Start with simple shapes — circles, petals, diyas. For chalk, draw on the ground directly. Demonstrate how to make a flower with a circle centre and teardrop petals. Let them create their own designs. Discuss festival rangoli traditions. Display their work proudly at the entrance.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 20,
    materials: ['Rangoli powder or chalk', 'Small katori', 'Dark cloth or courtyard floor']
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                   COGNITIVE SKILLS                          ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Black and White Pattern Cards',
    description: 'Show high-contrast black and white pattern cards to stimulate visual tracking and cognitive development.',
    instructions: 'Hold a black and white pattern card (you can draw bold stripes, circles, or a simple face on white paper with a black marker) about 20-25 cm from baby\'s face. Slowly move it left to right and back. Watch baby\'s eyes follow the card. Show 2-3 different patterns per session. Newborns see high-contrast patterns best. Do this during alert, wakeful periods. Talk softly about what you are showing: "Dekho, gol gol!" (Look, round round!).',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 5,
    materials: ['White paper', 'Black marker']
  },
  {
    category: 'COGNITIVE',
    title: 'Diya Flame Gazing (Supervised)',
    description: 'Let baby visually track a safely placed diya flame to practise sustained attention and visual focus.',
    instructions: 'Light a traditional diya and place it safely on an elevated surface well out of baby\'s reach (at least 1 metre away). Hold baby in your arms at a safe distance so they can see the gentle flickering flame. Let them gaze at the flame for 1-2 minutes. The gentle movement of the flame captures attention and practises visual focus. Talk softly: "Dekho, diya jal raha hai" (Look, the diya is lit). Never leave the diya unattended or within baby\'s reach. This can be done during evening puja or Diwali time.',
    minAgeMonths: 1,
    maxAgeMonths: 3,
    durationMinutes: 3,
    materials: ['Traditional diya', 'Mustard oil or ghee', 'Cotton batti (wick)']
  },

  // ── 3–6 months ────────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Dupatta Peek-a-Boo (Object Permanence)',
    description: 'Play peek-a-boo with a dupatta to begin teaching object permanence — that things still exist when hidden.',
    instructions: 'Sit facing baby. Drape a light dupatta over your face. Say in a playful voice: "Mamma kahan gayi?" (Where did Mamma go?). After 2-3 seconds, pull the dupatta away and say "Yeh hoon main!" (Here I am!) with a big smile. Baby will show delight and eventually begin to anticipate the reveal. After a few rounds, try draping the dupatta over baby\'s head and help them pull it off. This builds the understanding that objects (and people) exist even when not visible.',
    minAgeMonths: 4,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['Lightweight dupatta']
  },
  {
    category: 'COGNITIVE',
    title: 'Texture Touch Basket',
    description: 'Let baby explore a basket of items with different textures to develop sensory awareness and early categorization.',
    instructions: 'Fill a tokri (basket) with 5-6 items of varied textures: a silk dupatta piece, a rough jute piece, a smooth steel katori, a soft cotton ball, a bumpy rubber ball, and a wooden block. Place baby on your lap or seated with support. Let them reach into the tokri and explore each item. Describe what they are touching: "Yeh soft hai" (This is soft), "Yeh rough hai" (This is rough). Let them mouth items if clean. Rotate items weekly to keep it fresh.',
    minAgeMonths: 4,
    maxAgeMonths: 6,
    durationMinutes: 10,
    materials: ['Tokri (basket)', 'Silk cloth piece', 'Jute piece', 'Steel katori', 'Cotton ball', 'Rubber ball', 'Wooden block']
  },

  // ── 6–9 months ────────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Steel Katori Stacking and Nesting',
    description: 'Stack and nest steel katoris of different sizes to teach size comparison and spatial relationships.',
    instructions: 'Gather 3-4 steel katoris of different sizes (most Indian kitchens have these). Show baby how the small one fits inside the bigger one. Then show stacking — placing one upside down on another to build a tower. Let them try. They will mostly knock them down, and that is the fun part. Name the sizes: "Bada" (big), "Chhota" (small). The metallic clang when they fall is engaging. This teaches size discrimination, cause-and-effect, and spatial nesting concepts.',
    minAgeMonths: 6,
    maxAgeMonths: 9,
    durationMinutes: 10,
    materials: ['Steel katoris of different sizes (3-4)']
  },
  {
    category: 'COGNITIVE',
    title: 'Hidden Toy Under Dupatta',
    description: 'Hide a toy under a cloth and let baby find it to strengthen object permanence understanding.',
    instructions: 'Show baby a favourite toy. While they watch, place the toy on the mat and cover it with a muslin cloth or small dupatta. Ask excitedly: "Toy kahan gaya?" (Where did the toy go?). Encourage them to pull the cloth away. When they find it, cheer: "Mil gaya!" (Found it!). Start with partially covering the toy so an edge peeks out. As baby masters this, cover it completely. Then try hiding under one of two cloths and see if they remember which one.',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 5,
    materials: ['Small toy', 'Muslin cloth or dupatta']
  },

  // ── 9–12 months ───────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Dabba Kholo-Bandh Karo (Open-Close Box)',
    description: 'Practise opening and closing different dabbas (containers) to learn cause-and-effect and problem-solving.',
    instructions: 'Collect 3-4 dabbas of different types — a screw-lid steel dabba, a snap-lid plastic container, a hinged tin box, and a simple open dabba. Place a small toy or snack inside each. Show baby how to open each one using different actions (twist, pull, flip, lift). Let them try. They will be motivated by the surprise inside. Talk through each action: "Ghumao" (twist), "Kheencho" (pull), "Uthao" (lift). This teaches problem-solving and motor planning.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 10,
    materials: ['Screw-lid steel dabba', 'Snap-lid plastic container', 'Hinged tin box', 'Small toys or snacks']
  },
  {
    category: 'COGNITIVE',
    title: 'Pointing Game — Ghar Ki Cheezein',
    description: 'Point to and name common household items to build vocabulary and cognitive mapping of the environment.',
    instructions: 'Carry baby around the house and point to common items: "Yeh pankha hai" (This is a fan), "Yeh ghadi hai" (This is a clock), "Yeh khidki hai" (This is a window). Pause at each item and let baby look at it. After naming 4-5 items, go back and ask: "Pankha kahan hai?" (Where is the fan?) and see if they look towards it. Do this daily, adding new items gradually. This builds receptive vocabulary and spatial memory.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 10,
    materials: ['Common household items (no special materials needed)']
  },

  // ── 12–18 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Shape Sorting with Kitchen Items',
    description: 'Sort kitchen items by shape — round rotis vs square biscuits vs cylindrical rolling pins — to build shape recognition.',
    instructions: 'Gather items of different shapes from the kitchen: round items (steel thali, roti, katori), rectangular items (biscuit, soap bar), cylindrical items (belan, bottle). Lay them on the floor. Pick up the thali and say "Gol!" (Round!) then pick up the biscuit and say "Chauras!" (Square/Rectangle!). Group them by shape. Now give the child an item and ask "Yeh gol hai ya chauras?" (Is this round or square?). Let them place it in the right group. Start with 2 shapes, then add cylindrical.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 10,
    materials: ['Steel thali', 'Katori', 'Biscuit', 'Belan (rolling pin)', 'Small bottle']
  },
  {
    category: 'COGNITIVE',
    title: 'Colour Matching with Bangles',
    description: 'Match colourful plastic bangles by colour to develop colour recognition and sorting skills.',
    instructions: 'Collect 8-10 plastic bangles in 3-4 different colours (red, green, blue, yellow — easily available from any Indian bangle shop). Mix them up on the floor. Place one bangle of each colour in separate katoris. Show the child how to pick a bangle, identify its colour, and place it in the matching katori. Say the colour names in Hindi and English: "Laal — Red", "Hara — Green". Let the child sort independently. Cheer for correct matches. This is also great for fine motor as they handle the thin bangles.',
    minAgeMonths: 14,
    maxAgeMonths: 18,
    durationMinutes: 10,
    materials: ['Plastic bangles in 3-4 colours (8-10 total)', 'Small katoris (3-4)']
  },

  // ── 18–24 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Matching Pairs — Jodiyan Banao',
    description: 'Find matching pairs from a set of common Indian items to develop memory and visual discrimination.',
    instructions: 'Gather pairs of identical small items: two spoons, two red bangles, two identical socks, two similar katoris. Mix them on the floor. Pick up one spoon and say "Iska joda kahan hai?" (Where is its pair?). Help the child find the matching spoon. Place them together. Continue with other pairs. For older toddlers, lay items face-up and take turns finding matches. This develops visual discrimination, memory, and the concept of same/different.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 10,
    materials: ['Pairs of identical items (spoons, bangles, socks, katoris)']
  },
  {
    category: 'COGNITIVE',
    title: 'Counting Rotis with Amma',
    description: 'Count rotis during mealtime to introduce early number concepts in a real-life context.',
    instructions: 'During roti-making or mealtime, count the rotis aloud as you serve them: "Ek roti Papa ke liye, do roti Mamma ke liye, teen roti Dadi ke liye." Point to each roti as you count. Ask the child: "Kitni roti chahiye?" (How many rotis do you want?). Count on fingers. You can also count roti pieces on the child\'s thali. Use this daily routine to naturally build counting skills from 1-5. The child learns that numbers have meaning in everyday life.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 5,
    materials: ['Rotis', 'Steel thali']
  },

  // ── 24–36 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Sabzi Mandi Pretend Play',
    description: 'Set up a pretend sabzi mandi (vegetable market) to practise counting, naming, and basic transactions.',
    instructions: 'Arrange real or toy vegetables in a basket: aloo, tamatar, pyaaz, bhindi, gobhi. Give the child a cloth bag and some play coins (or real one-rupee coins). You play the sabziwala. The child comes to buy: "Bhaiya, do aloo dena" (Brother, give me two potatoes). Count out two potatoes and put them in their bag. Ask for payment: "Das rupaye" (Ten rupees). The child counts out coins. Swap roles — let the child be the sabziwala. This builds counting, vocabulary, social scripting, and role-playing skills.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 20,
    materials: ['Real or toy vegetables', 'Cloth bag', 'Play coins or one-rupee coins', 'Small basket']
  },
  {
    category: 'COGNITIVE',
    title: 'Big-Small Sorting with Chappal',
    description: 'Sort family footwear by size to understand the concept of big, medium, and small.',
    instructions: 'Collect 4-5 pairs of chappals/shoes from family members — Papa\'s big chappal, Mamma\'s medium sandal, child\'s small shoe, baby brother\'s tiny jutti. Line them up mixed together. Ask: "Sabse bada chappal kiska hai?" (Whose is the biggest chappal?). Help the child arrange them from biggest to smallest. Ask: "Yeh chhota chappal kiska hai?" (Whose is this small chappal?). This teaches size comparison, seriation, and family member identification. Make it fun — try wearing Papa\'s big chappal!',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 10,
    materials: ['Family chappals/shoes of different sizes (4-5 pairs)']
  },

  // ── 36–48 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Dukaan-Dukaan (Shop-Shop) with Play Money',
    description: 'Play shopkeeper with real items and play money to practise counting, addition, and social skills.',
    instructions: 'Set up a mini shop on a chowki (low table) with household items: biscuit packets, soap, toothpaste, dal packet (all real but you are not selling them for real). Label prices with sticky notes: 2 rupees, 5 rupees, 10 rupees. Give the child play money or real coins. They come to your shop, choose items, and you add up: "Biscuit 5 rupaye, sabun 2 rupaye, total kitna hua?" (Total?). Help them count. Swap roles. This teaches early maths, social interaction, and language in a deeply Indian context.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 20,
    materials: ['Household items for the shop', 'Sticky notes', 'Marker', 'Play money or coins', 'Low table (chowki)']
  },
  {
    category: 'COGNITIVE',
    title: 'Pattern Making with Flower Petals',
    description: 'Create repeating patterns using flower petals and leaves to build early maths pattern recognition.',
    instructions: 'Collect petals from marigold (genda), rose (gulab), and some small leaves from the garden or a nearby phoolwala. Lay out a pattern: marigold-rose-leaf, marigold-rose-leaf. Point to each element and name the pattern. Ask the child: "Aage kya aayega?" (What comes next?). Let them continue the pattern. Start with AB patterns (two elements), then progress to ABC patterns. You can also create patterns on the ground as rangoli borders. The natural textures and colours make it very engaging.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 15,
    materials: ['Marigold petals', 'Rose petals', 'Small leaves', 'Flat surface or ground']
  },

  // ── 48–60 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Recipe Following — Mango Lassi',
    description: 'Follow a simple recipe step-by-step to build sequencing, measurement, and instruction-following skills.',
    instructions: 'Write the recipe steps on a paper with pictures: 1) Take 1 cup dahi (curd), 2) Add half cup mango pulp, 3) Add 2 spoons sugar, 4) Pour into mixer, 5) Blend, 6) Pour into glass. Read each step with the child and let them do the actions (you handle the mixer). Emphasise the sequence: "Pehle kya karenge?" (What do we do first?), "Uske baad?" (After that?). They practise counting, measuring, sequencing, and following multi-step instructions. And you both enjoy the lassi at the end!',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 20,
    materials: ['Dahi (curd)', 'Mango pulp', 'Sugar', 'Measuring cup and spoon', 'Mixer grinder', 'Glass', 'Paper and marker for recipe chart']
  },
  {
    category: 'COGNITIVE',
    title: 'Map of My House',
    description: 'Draw a simple map of the house to develop spatial awareness and representational thinking.',
    instructions: 'Give the child a large paper and crayons. Walk through the house together and name each room: rasoi (kitchen), baithak (living room), sone ka kamra (bedroom), snanghar (bathroom). Then sit down and draw a simple bird\'s-eye-view map together. Draw rectangles for rooms and label them. Ask: "Rasoi ke bagal mein kya hai?" (What is next to the kitchen?). Add simple icons — a bed in the bedroom, a stove in the kitchen. This builds spatial reasoning, memory, and drawing skills. Hang the finished map on the wall.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 20,
    materials: ['Large paper', 'Crayons or markers']
  },

  // ── 60–72 months ──────────────────────────────────────────────
  {
    category: 'COGNITIVE',
    title: 'Pitthu Tower Building and Maths',
    description: 'Use flat stones stacked as a pitthu tower to practise counting, addition, and subtraction in a game context.',
    instructions: 'Collect 7-10 flat stones and stack them into a pitthu (lagori) tower. Instead of throwing a ball, use this as a counting and maths activity. Stack the stones and count together: "Ek, do, teen..." up to the full number. Remove 3 stones and ask: "Kitne bache?" (How many are left?). Add 2 back: "Ab kitne hain?" (Now how many?). You can also sort stones by size before stacking. For the game version with older children, play the full pitthu game where one team stacks while the other throws a ball to knock it down.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 20,
    materials: ['Flat stones (7-10)', 'Soft ball (for game version)']
  },
  {
    category: 'COGNITIVE',
    title: 'Calendar and Weather Chart',
    description: 'Maintain a daily calendar and weather chart to learn days, months, seasons, and weather vocabulary.',
    instructions: 'Create a simple chart on cardboard with spaces for: Aaj ka din (Today\'s day), Tareekh (Date), Mahina (Month), Mausam (Weather). Each morning, fill it out together. Ask: "Aaj kya din hai?" (What day is it today?). Use picture cards for weather: dhoop (sunny), baarish (rainy), badal (cloudy), thand (cold). Over weeks, the child learns the sequence of days and months. Discuss seasons: "Garmi mein kya hota hai?" (What happens in summer?). This builds time concepts, routine, and Hindi vocabulary.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 10,
    materials: ['Cardboard chart', 'Markers', 'Weather picture cards', 'Velcro strips or tape']
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    SPEECH & LANGUAGE                        ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Lori (Lullaby) Singing',
    description: 'Sing traditional Indian lullabies to expose baby to language rhythm, tones, and bonding through voice.',
    instructions: 'Hold baby comfortably in your arms or let them lie on the gadda. Sing a traditional lori such as "Chanda hai tu, mera suraj hai tu" or "So ja rajkumari" softly and rhythmically. Maintain eye contact when possible. Vary your pitch — soft for soothing parts, slightly animated for lively parts. Sing the same lori repeatedly over days so baby becomes familiar with the pattern. Even newborns benefit from hearing melodic speech — it tunes their ears to the sounds of their mother tongue.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'SPEECH',
    title: 'Narrating the Malish Routine',
    description: 'Talk to baby throughout the oil massage, describing each body part and action to build language exposure.',
    instructions: 'During the daily malish (oil massage), narrate everything you do: "Ab hum pair ki malish karenge" (Now we will massage the legs), "Yeh tumhara pair hai" (This is your foot), "Yeh ungli hai" (This is a toe). Touch each body part as you name it. Use a warm, animated voice. Repeat the same words daily. Babies absorb language from birth even though they cannot respond yet. This consistent narration during a familiar routine builds a strong foundation for language comprehension.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 10,
    materials: ['Massage oil (coconut or sesame)', 'Soft towel']
  },

  // ── 3–6 months ────────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Conversational Cooing — Baby Ki Baatein',
    description: 'Respond to baby\'s coos and gurgles as if having a conversation to encourage vocal turn-taking.',
    instructions: 'When baby makes cooing sounds like "aah", "ooh", "goo", respond as if they just said something meaningful: "Achha? Phir kya hua?" (Really? Then what happened?). Pause and wait for them to coo again. Then respond again. This back-and-forth "conversation" teaches turn-taking, the foundation of all communication. Keep your face animated and voice expressive. Even copy their sounds back to them. Do this during diaper changes, feeding, or any calm alert time. 5-10 exchanges per session is wonderful.',
    minAgeMonths: 3,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'SPEECH',
    title: 'Machli Jal Ki Rani Hai — Action Rhyme',
    description: 'Sing the classic Hindi rhyme with hand actions to build language, rhythm, and gesture association.',
    instructions: 'Sit baby on your lap facing you. Sing "Machli jal ki rani hai, jeevan uska pani hai" with animated expressions. Make a fish swimming motion with your hand. Continue: "Haath lagao, dar jayegi, bahar nikalo, mar jayegi." Mime touching the fish, the fish getting scared, and then flopping. Use big facial expressions for each part. Repeat several times — babies love repetition. The combination of melody, words, and gestures helps build language comprehension and the connection between words and meaning.',
    minAgeMonths: 4,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['No materials needed']
  },

  // ── 6–9 months ────────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Lakdi Ki Kathi with Clapping',
    description: 'Sing "Lakdi Ki Kathi" with rhythmic clapping to develop babbling, rhythm sense, and anticipation.',
    instructions: 'Sit with baby facing you. Clap rhythmically and sing: "Lakdi ki kathi, kathi pe ghoda, ghode ki dum pe jo mara hathoda, daura daura daura ghoda dum utha ke daura!" Clap baby\'s hands together on the beat. Baby will start moving and bouncing to the rhythm. They may try to babble along. Pause before the last word of each line to see if baby vocalises in anticipation. This builds rhythm, anticipation, and the desire to vocalise along with music.',
    minAgeMonths: 6,
    maxAgeMonths: 9,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'SPEECH',
    title: 'Family Name Game — Yeh Kaun Hai?',
    description: 'Point to family members and name them to build recognition and early word association.',
    instructions: 'During a family gathering or looking at family photos, point to each person and say their name/relation clearly: "Yeh Papa hain", "Yeh Dadi hain", "Yeh Chachu hain", "Yeh Bua hain". Then ask: "Papa kahan hain?" (Where is Papa?) and wait for baby to look towards that person. Cheer when they look correctly. Repeat daily with the same family members. Indian joint family settings are perfect for this because baby hears many names regularly. Use both the relation name and the person\'s name.',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 5,
    materials: ['Family members or family photos']
  },

  // ── 9–12 months ───────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Animal Sound Matching — Janwar Ki Awaaz',
    description: 'Show animal pictures and make their sounds to teach association between images and words/sounds.',
    instructions: 'Use a picture book or flashcards with common Indian animals: gaay (cow), kutte (dog), billi (cat), murgi (hen), kabutar (pigeon), morni (peacock). Point to each animal and make its sound: "Gaay: Moo!", "Kutte: Bhow bhow!", "Billi: Meow!", "Murgi: Kukdoo koo!" Then ask: "Kutte kaise bolta hai?" (How does the dog speak?). Baby may try to imitate the sounds. These animal sounds are often among a child\'s first vocalisations and build the connection between images and sounds.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 10,
    materials: ['Animal picture book or flashcards']
  },
  {
    category: 'SPEECH',
    title: 'Action Words During Play — Karo Aur Bolo',
    description: 'Name actions as baby performs them to build a vocabulary of verbs in context.',
    instructions: 'During regular play, consistently name the actions baby does: "Utha raha hai!" (You are picking up!), "Gira diya!" (You dropped it!), "Khol raha hai!" (You are opening!), "Band karo!" (Close it!). Use animated expressions and pair each word with a gesture. When baby crawls say "Chal rahe ho!" (You are moving!). When they clap say "Taali baja rahe ho!". Over time, baby starts linking words to actions. This is more effective than drilling isolated words because the child learns language in context.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 10,
    materials: ['Toys for play']
  },

  // ── 12–18 months ──────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Body Parts Song — Yeh Hai Naak, Yeh Hai Kaan',
    description: 'Sing a body parts song while pointing to each part to teach body part vocabulary.',
    instructions: 'Sit facing the child. Point to your nose and sing: "Yeh hai naak, yeh hai kaan, yeh hai muh, yeh hai aankh!" Touch each body part as you name it. Then touch the child\'s body parts while naming them. Now ask: "Naak kahan hai?" (Where is the nose?). Wait for the child to point to their nose. Cheer when correct. Add more parts over days: haath (hand), pair (foot), pet (tummy), sar (head). You can also use "Head Shoulders Knees and Toes" with Hindi names. Daily repetition is key.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'SPEECH',
    title: 'Picture Book Narration — Yeh Kya Hai?',
    description: 'Read a simple Hindi or bilingual picture book, pointing and naming objects on each page.',
    instructions: 'Choose a simple picture book with bright illustrations of everyday Indian objects or animals. Sit the child on your lap. Point to each picture and ask: "Yeh kya hai?" (What is this?). If they cannot answer, provide the word: "Yeh gaay hai" (This is a cow). If they say a part of the word or a sound, praise it and model the full word. Do not rush through pages — spend time on each picture. Ask simple questions: "Gaay kya khati hai?" (What does the cow eat?). Read the same book repeatedly as toddlers learn through repetition.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 10,
    materials: ['Hindi or bilingual picture book']
  },

  // ── 18–24 months ──────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Rasoi Mein Kya Hai (What Is in the Kitchen)',
    description: 'Name and describe kitchen items to expand vocabulary using everyday Indian kitchen context.',
    instructions: 'Take the toddler on a "kitchen tour." Open dabbas and show contents: "Yeh chawal hai — white, chhoti chhoti" (This is rice — white, small small). Show the belan: "Isse roti belte hain" (We roll roti with this). Open the masala dabba: "Isko sungho — haldi hai, peela peela" (Smell this — it is turmeric, yellow yellow). Name 5-6 items per session. Let them touch safe items. Ask them to bring you things: "Chamcha lao" (Bring the spoon). This real-context vocabulary building is more effective than flashcards.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 10,
    materials: ['Kitchen items (dabbas, chawal, belan, masala dabba, chamcha)']
  },
  {
    category: 'SPEECH',
    title: 'Two-Word Phrase Modelling',
    description: 'Model two-word phrases during daily activities to help toddler advance from single words to short sentences.',
    instructions: 'When the child says a single word, expand it into a two-word phrase. If they say "Pani" (water), you say "Pani chahiye" (want water) or "Thanda pani" (cold water). If they say "Ball", you say "Laal ball" (red ball) or "Ball do" (give ball). Do not correct them; simply model the expanded version naturally. Throughout the day, use two-word phrases describing their actions: "Khana kha" (eat food), "Bahar chalo" (go outside), "Neeche baitho" (sit down). This scaffolding helps toddlers bridge from single words to combinations.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 10,
    materials: ['No materials needed']
  },

  // ── 24–36 months ──────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Dadi/Nani Ki Kahani (Grandmother\'s Story)',
    description: 'Listen to and retell simple folk stories from grandparents to build narrative comprehension and expression.',
    instructions: 'Ask Dadi or Nani (or you can be the storyteller) to tell a short, simple folk tale — the thirsty crow (pyasa kauwa), the lion and the mouse (sher aur chuha), or the monkey and the crocodile (bandar aur magarmach). Use animated voices for different characters. Keep it under 3-4 minutes. After the story, ask simple questions: "Kauwe ko kya chahiye tha?" (What did the crow want?), "Usne kya kiya?" (What did he do?). Encourage the child to retell the story in their own words. Even partial retelling builds narrative skills.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 15,
    materials: ['A folk story (no materials needed, or a story picture book)']
  },
  {
    category: 'SPEECH',
    title: 'Aaj Kya Khaya — Mealtime Talk',
    description: 'Describe each food during meals to practise sentences, adjectives, and food vocabulary.',
    instructions: 'During every meal, make it a habit to describe the food: "Yeh dal hai. Peeli hai. Garam hai. Namkeen hai." (This is dal. It is yellow. It is hot. It is salty.). Ask the child: "Roti kaisi hai?" (How is the roti?). Help them form sentences: "Roti naram hai" (The roti is soft). Talk about the process: "Dal kaise bani?" (How was dal made?). "Pehle dhuli, phir ubli, phir tadka lagaya." (First washed, then boiled, then tempered). This daily routine builds adjectives, sequencing language, and food vocabulary.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 10,
    materials: ['Mealtime foods (dal, roti, sabzi, chawal, dahi)']
  },

  // ── 36–48 months ──────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Hindi Rhyme Recitation with Actions',
    description: 'Learn and perform Hindi rhymes with full actions to develop articulation, memory, and performance confidence.',
    instructions: 'Choose 2-3 Hindi nursery rhymes the child enjoys: "Machli jal ki rani hai", "Lakdi ki kathi", "Chun chun karti aayi chidiya", "Twinkle twinkle chhota tara". Recite each rhyme slowly with clear pronunciation and full body actions. Then invite the child to recite along with you. Gradually let them take the lead while you just do the actions. Encourage them to perform in front of family members (Dadi, Nana, visiting relatives). Applaud their performance. Performing builds confidence, articulation, and memorisation skills.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 10,
    materials: ['No materials needed']
  },
  {
    category: 'SPEECH',
    title: 'Puppet Show Storytelling',
    description: 'Use simple sock puppets or finger puppets to enact a story, encouraging dialogue and character voices.',
    instructions: 'Make two simple sock puppets by drawing faces on old socks with a marker, or use ready-made finger puppets. Choose a familiar story like "Sher aur Chuha" (The Lion and the Mouse). Put a puppet on each hand. Use different voices for each character — deep voice for the lion, squeaky for the mouse. Act out the story. Then give the child a puppet and let them be one character while you are the other. Encourage them to make up dialogue: "Sher ne kya bola?" (What did the lion say?). This builds narrative skills, voice modulation, and creative expression.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 15,
    materials: ['Sock puppets or finger puppets', 'Marker (if making sock puppets)']
  },

  // ── 48–60 months ──────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Letter Sound Exploration — Akshar Ki Awaaz',
    description: 'Learn Hindi letter sounds (not just names) and find objects starting with each sound to build phonemic awareness.',
    instructions: 'Choose 2-3 Hindi letters per session from the varnamala. For "क" (ka), make the sound "kuh" clearly. Then go on a sound hunt around the house: "Kuh se kya kya milega? Kamra! Katori! Kursi! Kitaab!" (What starts with kuh? Room! Bowl! Chair! Book!). Write the letter on a slate while making the sound. Let the child trace it. For "म" (ma): "Muh se kya milega? Mummy! Masala! Mirchi! Mez!" This phonemic approach helps with reading readiness more than just reciting the alphabet.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 15,
    materials: ['Slate and chalk', 'Objects around the house']
  },
  {
    category: 'SPEECH',
    title: 'Story Sequencing with Picture Cards',
    description: 'Arrange picture cards in order and narrate a story to build sequencing and narrative skills.',
    instructions: 'Draw or print 4 simple picture cards telling a story — for example: (1) A girl wakes up, (2) She brushes her teeth, (3) She eats breakfast (paratha and dahi), (4) She goes to school. Mix up the cards. Ask the child: "Pehle kya hua? Phir kya hua?" (What happened first? Then what?). Let them arrange the cards in order and narrate the story. Make different story sets: making chai, going to the mandir, celebrating Holi. This develops sequencing, temporal language (pehle, phir, uske baad), and narrative structure.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 15,
    materials: ['Picture story cards (hand-drawn or printed)', 'Paper', 'Markers']
  },

  // ── 60–72 months ──────────────────────────────────────────────
  {
    category: 'SPEECH',
    title: 'Hindi-English Word Pairing Game',
    description: 'Match Hindi words with their English equivalents to build bilingual vocabulary.',
    instructions: 'Create flashcards with a picture, the Hindi word, and the English word. For example: a picture of the sun with "Suraj" and "Sun" written below. Show 5-6 cards per session. Say both words clearly: "Hindi mein Suraj, English mein Sun." Then play a game: show the picture and ask "Hindi mein kya bolte hain?" and "English mein kya bolte hain?" Focus on everyday words: paani/water, dudh/milk, ghar/house, phool/flower, kitaab/book. This systematic bilingual exposure prepares them for school where both languages are used.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 15,
    materials: ['Bilingual flashcards (hand-made or printed)', 'Markers', 'Card paper']
  },
  {
    category: 'SPEECH',
    title: 'Aaj Ka Din Batao (Tell Me About Your Day)',
    description: 'Ask the child to narrate their day in sequence to practise extended narrative and temporal language.',
    instructions: 'Every evening, sit with the child and ask: "Aaj tumhara din kaisa raha? Subah kya kiya?" (How was your day? What did you do in the morning?). Help them structure their response: "Pehle main utha, phir maine brush kiya, phir naashta kiya..." (First I woke up, then I brushed, then I had breakfast...). Ask follow-up questions: "School mein kya kiya? Kiske saath khele?" (What did you do at school? Who did you play with?). Prompt for details and feelings: "Kaisa laga?" (How did it feel?). This builds narrative structure, temporal vocabulary, and emotional expression.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 10,
    materials: ['No materials needed']
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                    SOCIAL SKILLS                            ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Nazar Milao — Eye Contact During Feeding',
    description: 'Establish and maintain eye contact during feeding to build the first social bond and attachment.',
    instructions: 'Whether breastfeeding or bottle-feeding, hold baby so your face is about 20-25 cm from theirs — the ideal distance for newborn vision. Look into their eyes and smile warmly. Talk softly: "Mamma yahan hai, dudh piyo" (Mamma is here, drink your milk). Stroke their cheek gently. Baby will start to associate your face with comfort and nourishment. This eye contact during feeding is the foundation of secure attachment and all future social development. Minimise phone and screen distractions during feeding time.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 15,
    materials: ['No materials needed']
  },
  {
    category: 'SOCIAL',
    title: 'Godi Mein Baitho — Lap Time with Family',
    description: 'Pass baby around to close family members for holding and cuddling to build familiarity with multiple caregivers.',
    instructions: 'In a joint family setting, let close family members — Dadi, Nana, Bua, Chachu — each hold the baby for a few minutes during their calm, alert periods. Each person should talk to baby, make eye contact, and gently interact. Show baby that multiple people are safe and loving. However, always respect baby\'s cues — if they cry or turn away, return them to the primary caregiver. This builds social awareness that there are multiple trustworthy people in their world, which is a natural benefit of the Indian joint family system.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 10,
    materials: ['No materials needed']
  },

  // ── 3–6 months ────────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Social Smile Practice — Hasao Baby Ko',
    description: 'Engage baby with animated faces and voices to encourage social smiling and joyful interaction.',
    instructions: 'Sit face-to-face with baby. Make exaggerated happy faces — big smiles, raised eyebrows, wide eyes. Say in a high-pitched playful tone: "Hasooo! Kitne pyare ho!" (Smile! You are so cute!). Tickle their chin or tummy gently. Wait for the smile — and when it comes, mirror it back with great enthusiasm. Try different things that make your baby smile — funny sounds, raspberries, peek-a-boo. Each baby has their own smile triggers. The goal is reciprocal smiling — you smile, they smile, building the joy of social connection.',
    minAgeMonths: 3,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'SOCIAL',
    title: 'Mirror Play — Aaina Dekho',
    description: 'Let baby look at themselves in a mirror to develop self-recognition and social engagement with their reflection.',
    instructions: 'Hold baby in front of a large mirror (or use a baby-safe unbreakable mirror). Point to their reflection: "Dekho kaun hai? Baby hai!" (Look who is it? It is baby!). Touch their nose in the reflection: "Yeh baby ki naak!" (This is baby\'s nose!). Make faces in the mirror together. Wave at the reflection. Baby will be fascinated and may try to touch or reach for the reflection. This is an early step in self-awareness and social understanding. Do this for a few minutes daily. They will start recognising themselves around 18 months.',
    minAgeMonths: 4,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['Large mirror or baby-safe mirror']
  },

  // ── 6–9 months ────────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Tali Bajao — Clapping Game with Dadi',
    description: 'Play clapping games with a grandparent to strengthen intergenerational bonding and social imitation.',
    instructions: 'Have Dadi (or Nani, Dada, Nana) sit with baby. Dadi claps her hands and says "Tali bajao!" (Clap your hands!). Then she gently takes baby\'s hands and claps them together. Repeat several times until baby starts clapping independently. Dadi can sing "Tali bajao, tali bajao, zor se tali bajao!" to make it rhythmic. This simple game strengthens the bond between baby and grandparent while teaching imitation, a crucial social skill. Grandparents often have more patience for repetitive games, making them ideal play partners.',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'SOCIAL',
    title: 'Bye-Bye Wave Practice',
    description: 'Teach baby to wave bye-bye when someone leaves to practise social gestures and greetings.',
    instructions: 'Every time someone leaves the house — Papa going to work, Dadi going to the mandir, a visitor leaving — stand at the door with baby in your arms. Wave and say "Bye-bye! Tata!" while waving your hand. Take baby\'s hand and make the waving motion for them. Over days, baby will start waving on their own when they hear "bye-bye." Praise enthusiastically when they wave independently. Also practise greetings: "Namaste!" with folded hands when someone arrives. These social rituals teach babies about greetings and social conventions.',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 3,
    materials: ['No materials needed']
  },

  // ── 9–12 months ───────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Namaste Practice',
    description: 'Teach baby to fold hands and say Namaste to develop cultural greeting behaviour and social awareness.',
    instructions: 'When guests arrive or during phone/video calls with family, show baby how to fold hands in a Namaste gesture. Gently bring their hands together and say "Namaste!" with a warm smile. Praise them when they try on their own, even if the gesture is imperfect. Practise with family members at home — every morning, baby can do Namaste to Dadi, Dada, etc. In Indian culture, this is often one of the first social gestures taught and babies find it delightful when adults respond with their own Namaste back.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 3,
    materials: ['No materials needed']
  },
  {
    category: 'SOCIAL',
    title: 'Sharing Khana — First Turn-Taking',
    description: 'Practise giving and receiving food to teach early sharing and turn-taking.',
    instructions: 'During snack time, take a piece of biscuit or fruit. Offer it to baby: "Yeh lo" (Take this). Then extend your hand and ask: "Mujhe do" (Give it to me). When baby gives you the piece, say "Thank you! Bahut achha!" (Thank you! Very good!) and then give it back. This give-and-take builds the foundation of sharing. You can also do this with Dadi, siblings, or even a stuffed toy: "Teddy ko do khilao" (Feed teddy bear). Do not force sharing — keep it playful and positive.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 5,
    materials: ['Biscuit or fruit pieces', 'Stuffed toy (optional)']
  },

  // ── 12–18 months ──────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Parallel Play at the Park',
    description: 'Take toddler to a neighbourhood park to play alongside other children, building comfort with peers.',
    instructions: 'Visit a local park or neighbourhood maidan where other children play. Sit near other parent-child pairs. Let your toddler play with their own toys alongside other children. Do not force interaction — at this age, parallel play (playing near but not with others) is developmentally appropriate. Narrate what other children are doing: "Dekho, woh baby ball se khel raha hai" (Look, that baby is playing with a ball). If another child comes close, facilitate: "Hi! Baby ka naam kya hai?" This builds comfort in social settings.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 20,
    materials: ['Toys for the park (ball, bucket)']
  },
  {
    category: 'SOCIAL',
    title: 'Helping Amma — Simple Chores',
    description: 'Involve toddler in simple household chores to build a sense of contribution and social responsibility.',
    instructions: 'Give toddler a simple task during your daily routine: "Yeh kapda dhobi mein daal do" (Put this cloth in the laundry basket), "Yeh chamcha kitchen mein rakh do" (Put this spoon in the kitchen). Show them where, walk with them, and praise: "Bahut achha! Amma ki help ki!" (Very good! You helped Amma!). Other tasks: wiping the table with a cloth, putting shoes on the chappal stand, giving something to Dadi. This teaches contribution to the household, following instructions, and builds self-esteem through helping.',
    minAgeMonths: 14,
    maxAgeMonths: 18,
    durationMinutes: 5,
    materials: ['Household items for chores (cloth, spoon, laundry basket)']
  },

  // ── 18–24 months ──────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Phone Pe Baat — Pretend Phone Conversation',
    description: 'Use a pretend or old phone to practise conversational turn-taking and social language.',
    instructions: 'Give the toddler a toy phone or an old non-working mobile phone. Pretend to call them: ring-ring! Pick up your phone and say "Hello? Baby se baat karni hai!" (Hello? I want to talk to baby!). Encourage them to hold the phone to their ear and say "Hello!" Have a simple conversation: "Kya kar rahe ho?" (What are you doing?), "Khana khaya?" (Did you eat?). Then pretend to call Dadi, Nana, Papa. Toddlers love imitating adult phone behaviour. This practises conversational structure, turn-taking, and social language.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 5,
    materials: ['Toy phone or old non-working mobile']
  },
  {
    category: 'SOCIAL',
    title: 'Ghar-Ghar (House-House) Pretend Play',
    description: 'Play ghar-ghar (house) with the toddler, assigning family roles to practise social roles and interaction.',
    instructions: 'Set up a simple ghar-ghar play area with a few kitchen toys, a doll (gudiya), and a cloth as a blanket. Assign roles: "Main Mamma hoon, tum Papa ho" (I am Mamma, you are Papa) or "Gudiya baby hai, isko khana khilao" (The doll is the baby, feed her food). Act out daily routines: cooking, feeding the baby, going to work, coming home. Talk through each action. This is the beginning of role play — the child practises social roles, empathy (caring for the doll), and social scripts they observe at home.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 15,
    materials: ['Kitchen toy set', 'Doll (gudiya)', 'Small cloth or blanket']
  },

  // ── 24–36 months ──────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Rakshabandhan Rakhi Making',
    description: 'Make a simple rakhi together to learn about sibling bonds, sharing, and Indian festival traditions.',
    instructions: 'Take a piece of thread or ribbon. Help the child glue or tie small decorative items — beads, sequins, or small flower cutouts — onto the thread to make a simple rakhi. Talk about Rakshabandhan: "Behen bhai ko rakhi bandhti hai, pyaar ka bandhan" (Sister ties rakhi to brother, it is a bond of love). The child can make rakhis for siblings, cousins, or friends. Practice the tying motion. On the festival day, let them tie it themselves. This teaches cultural traditions, sibling love, fine motor skills, and the joy of giving.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 20,
    materials: ['Thread or ribbon', 'Beads or sequins', 'Glue', 'Scissors (adult use)', 'Small flower cutouts']
  },
  {
    category: 'SOCIAL',
    title: 'Turn-Taking Board Game — Simple Ludo',
    description: 'Play a simplified Ludo game to practise waiting, turn-taking, and following rules.',
    instructions: 'Use a Ludo board but simplify the rules for a young child. Use one token each. Roll the dice and count the spaces aloud: "Tumhari baari! Pasa phenk!" (Your turn! Roll the dice!). Move the token together and count. Then say: "Ab meri baari" (Now my turn). The key learning is waiting for your turn and not grabbing the dice. Celebrate both your moves. It is okay if the child does not follow all rules perfectly — the point is practising turn-taking, counting, and patience. Keep the game to 10 minutes.',
    minAgeMonths: 30,
    maxAgeMonths: 36,
    durationMinutes: 15,
    materials: ['Ludo board', 'Dice', 'Game tokens']
  },

  // ── 36–48 months ──────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Diwali Lantern Making with Friends',
    description: 'Make paper lanterns (aakash kandil) collaboratively with peers to build teamwork and festival spirit.',
    instructions: 'Invite 2-3 neighbourhood children for a lantern-making session. Provide each child with coloured chart paper, glue, scissors (child-safe), and string. Show them step by step: fold paper, cut slits, open into a cylinder, attach a handle. Encourage them to help each other: "Usko glue pakda do" (Pass the glue to them), "Milke karo" (Do it together). Decorate with sequins and stickers. Hang the lanterns together. Talk about Diwali: lights, diyas, sweets, family. This builds teamwork, sharing, and cultural pride.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 30,
    materials: ['Coloured chart paper', 'Child-safe scissors', 'Glue', 'String', 'Sequins and stickers']
  },
  {
    category: 'SOCIAL',
    title: 'Doctor-Doctor Pretend Play',
    description: 'Play doctor-patient to understand social roles, empathy, and reduce fear of medical visits.',
    instructions: 'Set up a pretend doctor\'s clinic with a toy stethoscope (or a dupatta rolled up), a small torch, bandages, and a notepad. Let the child be the doctor first — a stuffed toy or you can be the patient. Come to the "doctor" and say: "Doctor sahab, mera pet dard ho raha hai" (Doctor, my stomach hurts). The child examines, pretends to prescribe medicine, and says "Dawai lo, theek ho jaoge" (Take medicine, you will be fine). Swap roles. This builds empathy, social role understanding, and reduces real doctor visit anxiety.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 15,
    materials: ['Toy stethoscope or dupatta', 'Small torch', 'Bandages', 'Notepad and crayon']
  },

  // ── 48–60 months ──────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Holi Colour Play with Rules',
    description: 'Play Holi colours with rules about consent and boundaries to teach fun social interaction with respect.',
    instructions: 'During Holi (or any time with washable colours), establish clear rules before playing: "Sirf gaalo pe lagayenge" (Only on cheeks), "Pehle puchho — lagaoon kya?" (First ask — may I apply colour?), "Koi mana kare toh mat lagao" (If someone says no, do not apply). Use natural colours — haldi paste, beetroot, etc. Model asking consent: "Kya main tumhare gaalo pe rang lagaoon?" Play with siblings and friends. After play, discuss: "Sabko mazaa aaya?" (Did everyone enjoy?). This teaches consent, boundaries, and joyful social interaction.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 30,
    materials: ['Natural Holi colours (haldi paste, beetroot)', 'Old clothes', 'Water', 'Towels']
  },
  {
    category: 'SOCIAL',
    title: 'Cooperative Rangoli Making',
    description: 'Create a rangoli together with siblings or friends where each person contributes a section.',
    instructions: 'Draw a large rangoli outline on the floor with chalk. Divide it into sections — one for each child participating. Assign colours: "Tum yahan laal bharo, main yahan peela" (You fill red here, I will fill yellow there). Each child fills their section with rangoli powder, flower petals, or chalk. If two sections meet, they must coordinate: "Yahan pe tumhara aur mera milega, kaise karein?" (Our sections meet here, how should we do it?). Discuss the final result together. This teaches collaboration, territory negotiation, and collective pride in a shared creation.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 20,
    materials: ['Chalk', 'Rangoli powder in different colours', 'Flower petals']
  },

  // ── 60–72 months ──────────────────────────────────────────────
  {
    category: 'SOCIAL',
    title: 'Kabaddi — Beginner Team Game',
    description: 'Play simplified kabaddi to develop team coordination, strategy, and sportsmanship.',
    instructions: 'You need at least 6 children. Divide into two teams of 3. Draw a line in the middle of a safe play area. One team sends a "raider" who crosses the line, tries to tag someone on the other team, and returns while chanting "Kabaddi kabaddi kabaddi." The other team tries to hold the raider. For young children, simplify: the raider just has to tag and run back; no physical holding. Focus on taking turns raiding, cheering for your team, and being a good sport whether you win or lose. Play short rounds (2 minutes each).',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 20,
    materials: ['Open play area', 'Chalk for line', 'At least 6 children']
  },
  {
    category: 'SOCIAL',
    title: 'Langdi (One-Leg Tag)',
    description: 'Play langdi, a traditional Indian one-leg tag game, to develop balance and social game-playing skills.',
    instructions: 'Mark a large square playing area with chalk (about 5m x 5m). One child is "it" and must hop on one foot (langdi) to tag others. The other children run within the square trying to avoid being tagged. If tagged, the child becomes the new "it." Rules: the tagger must keep one foot up at all times — if they put it down, they must restart from the centre. Others must stay within the boundary. This teaches rule-following, fair play, strategy, and is vigorous exercise. Keep rounds short and rotate the "it" role frequently.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 15,
    materials: ['Chalk for marking boundary', 'Open play area', 'At least 3-4 children']
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║                   EMOTIONAL SKILLS                          ║
  // ╚══════════════════════════════════════════════════════════════╝

  // ── 0–3 months ────────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Responsive Soothing — Chup Chup',
    description: 'Respond consistently to baby\'s cries with soothing actions to build emotional security and trust.',
    instructions: 'When baby cries, respond within a minute. Pick them up, hold them close against your chest so they can hear your heartbeat. Say softly "Chup chup, Mamma aa gayi" (Hush hush, Mamma is here). Rock gently side to side. Try the 5 S\'s adapted to Indian context: Swaddle (potli mein lapetna), Side position, Shushing (shh shh), Swinging (jhulana), Sucking (feed or offer clean finger). The goal is to communicate that their needs will always be met. This builds secure attachment — the foundation of all emotional development.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 5,
    materials: ['Soft muslin swaddle cloth']
  },
  {
    category: 'EMOTIONAL',
    title: 'Skin-to-Skin Cuddling — Kangaroo Care',
    description: 'Hold baby skin-to-skin against your chest to regulate their emotions, temperature, and build deep bonding.',
    instructions: 'Undress baby down to their diaper. Hold them against your bare chest and cover both of you with a soft dupatta or blanket. The warmth, heartbeat, and smell of your skin regulates baby\'s emotions, breathing, and temperature. This is especially calming for fussy babies. Do this for 15-20 minutes during calm times. Both mothers and fathers can do this. Talk or sing softly. This practice, known as Kangaroo Mother Care, is especially recommended by Indian paediatricians for premature babies but benefits all newborns.',
    minAgeMonths: 0,
    maxAgeMonths: 3,
    durationMinutes: 20,
    materials: ['Soft dupatta or light blanket']
  },

  // ── 3–6 months ────────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Mood Mirroring — Baby Ka Chehra Padho',
    description: 'Mirror baby\'s facial expressions back to them to validate their emotions and build emotional connection.',
    instructions: 'When baby smiles, smile back enthusiastically: "Khush ho! Mamma bhi khush hai!" (You are happy! Mamma is also happy!). When baby looks concerned or about to cry, make a concerned face: "Kya hua? Pareshaan ho?" (What happened? Are you upset?). When they look surprised, make a surprised face: "Oh! Kya dekha?" (Oh! What did you see?). This emotional mirroring shows baby that their feelings are seen and understood. It is the earliest form of emotional validation and helps them learn to identify emotions through your responsive expressions.',
    minAgeMonths: 3,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'EMOTIONAL',
    title: 'Comfort Object Introduction — Gudda/Guddi',
    description: 'Introduce a consistent soft toy or blanket as a comfort object that baby can associate with security.',
    instructions: 'Choose a small, safe, washable soft toy (gudda or guddi) or a small soft muslin cloth. Include this object during soothing routines — hold it near during feeding, place it near during sleep, include it during cuddle time. Over time, baby will associate this object with comfort and security. When you are briefly away (in another room), the comfort object can provide some reassurance. Do not force attachment — let it develop naturally. Keep a second identical one as backup. Ensure the toy has no small detachable parts.',
    minAgeMonths: 4,
    maxAgeMonths: 6,
    durationMinutes: 5,
    materials: ['Small soft toy (gudda/guddi) or muslin cloth']
  },

  // ── 6–9 months ────────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Separation Practice — Chhoti Dur',
    description: 'Practise brief separations to help baby cope with separation anxiety that typically starts around 8 months.',
    instructions: 'When you need to leave the room briefly, do not sneak away. Instead, say clearly: "Mamma abhi aayi, ek minute" (Mamma will be right back, one minute). Leave the room for 30 seconds, then return with a smile: "Dekho, Mamma aa gayi!" (See, Mamma is back!). Gradually increase the time to 1-2 minutes. Leave baby with a familiar family member (Dadi, Papa). Always say goodbye; always come back when you said you would. This builds trust that separations are temporary and you will always return.',
    minAgeMonths: 7,
    maxAgeMonths: 9,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'EMOTIONAL',
    title: 'Jhula Ride — Gentle Swinging for Calm',
    description: 'Use a traditional ghodiyu or jhula (baby swing/hammock) for gentle rhythmic swinging to soothe emotions.',
    instructions: 'Place baby safely in a jhula (cloth hammock) or ghodiyu (traditional Gujarati baby swing) that is securely hung. Swing gently and rhythmically while singing a lori: "Hush little baby" or "So ja rajkumari." The rhythmic motion activates the vestibular system and has a calming effect. This is perfect for fussy evenings or when baby is overstimulated. If you do not have a jhula, hold baby in your arms and sway side to side. The combination of rhythmic movement and singing is one of the most effective calming techniques across Indian cultures.',
    minAgeMonths: 6,
    maxAgeMonths: 9,
    durationMinutes: 10,
    materials: ['Jhula (cloth hammock) or ghodiyu', 'Alternatively, just your arms']
  },

  // ── 9–12 months ───────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Emotion Naming During the Day',
    description: 'Name baby\'s emotions throughout the day to build early emotional vocabulary and awareness.',
    instructions: 'Whenever you observe baby experiencing an emotion, name it clearly. When they laugh: "Tum khush ho! Mazaa aa raha hai!" (You are happy! You are having fun!). When they cry after a toy is taken away: "Tum udaas ho, toy chala gaya" (You are sad, the toy is gone). When they look scared of a loud noise: "Darr gaye? Aawaaz se darr laga?" (Got scared? The sound was scary?). When frustrated: "Gussa aa raha hai? Nahi ho raha?" (Feeling angry? It is not working?). This continuous narration of emotions teaches baby that feelings have names and are normal.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 5,
    materials: ['No materials needed']
  },
  {
    category: 'EMOTIONAL',
    title: 'Cuddle and Story Bedtime Routine',
    description: 'Establish a consistent bedtime routine of cuddling and a short story to create emotional security around sleep.',
    instructions: 'Every night, follow the same sequence: warm milk, brush teeth (or gum wipe for younger babies), change into night clothes, dim the lights, sit on the bed together, and read or tell one short story. Hold baby close. After the story, say goodnight to favourite things: "Good night chand mama (moon uncle), good night teddy, good night diya." Then place baby in their sleeping position with their comfort object. Sing a lori softly. This predictable routine makes bedtime feel safe and emotionally secure, reducing bedtime resistance.',
    minAgeMonths: 9,
    maxAgeMonths: 12,
    durationMinutes: 15,
    materials: ['Story book', 'Comfort toy', 'Warm milk']
  },

  // ── 12–18 months ──────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Feeling Faces on Paper Plates',
    description: 'Draw different emotion faces on paper plates and play a recognition game to build emotional literacy.',
    instructions: 'Draw 4 simple faces on paper plates: happy (big smile), sad (turned down mouth), angry (frown with eyebrows), scared (round mouth, wide eyes). Show each face and name the emotion with an exaggerated expression: hold up the happy plate and grin: "Yeh khush hai! Dekho Mamma bhi khush!" Show the sad plate and pout: "Yeh udaas hai." Ask the child: "Tum abhi kaise feel kar rahe ho? Khush ya udaas?" (How do you feel right now? Happy or sad?). Let them point to a plate. Use these plates during the day when emotions come up.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 10,
    materials: ['Paper plates (4)', 'Markers']
  },
  {
    category: 'EMOTIONAL',
    title: 'Pyaar Ka Gaana — Love Song Ritual',
    description: 'Sing a special "love song" to the child daily to create an emotional anchor of unconditional love.',
    instructions: 'Choose or create a simple song that you will sing only to your child as a special love ritual. It can be as simple as singing their name with "I love you": "Aarav mera pyara, Aarav mera pyara, duniya mein sabse achha, mera Aarav pyara." Sing this same song every day — during cuddle time, when they are upset, before sleep. Over time, this song becomes an emotional anchor — hearing it instantly provides comfort and reassurance of your love. It becomes your unique bond. Even older children find comfort in their special song.',
    minAgeMonths: 12,
    maxAgeMonths: 18,
    durationMinutes: 3,
    materials: ['No materials needed']
  },

  // ── 18–24 months ──────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Gussa Aaya Toh — Anger Management for Toddlers',
    description: 'Teach simple anger management techniques when toddler has tantrums to build emotional regulation.',
    instructions: 'When the toddler starts getting angry or has a tantrum, get down to their eye level. Acknowledge the feeling first: "Bahut gussa aa raha hai. Mamma samajh rahi hai" (You are very angry. Mamma understands). Then offer a coping strategy: "Chalo zor se pair maaro" (Let\'s stomp our feet hard) — stomp together. Or "Takia pe maar lo" (Hit the cushion) — let them punch a takia. Or deep breaths: "Phool sungho" (Smell the flower — breathe in) and "Mombatti bujhao" (Blow out the candle — breathe out). Always validate the emotion while redirecting the behaviour.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 5,
    materials: ['Takia (cushion)']
  },
  {
    category: 'EMOTIONAL',
    title: 'Gudiya Ki Seva — Caring for a Doll',
    description: 'Nurture a doll (gudiya) by feeding, bathing, and putting it to sleep to develop empathy and caregiving.',
    instructions: 'Give the toddler a doll (gudiya) and simple care items: a small cloth for a blanket, a toy katori and chamcha for feeding, a small cloth for wiping. Show them how to care for the doll: "Gudiya ko bhookh lagi hai, khana khilao" (Doll is hungry, feed her). "Gudiya so rahi hai, chup se" (Doll is sleeping, be quiet). "Gudiya gir gayi, pyaar se uthao" (Doll fell, pick her up lovingly). The child practises empathy, gentle touch, and caregiving language. Both boys and girls benefit from this nurturing play.',
    minAgeMonths: 18,
    maxAgeMonths: 24,
    durationMinutes: 10,
    materials: ['Doll (gudiya)', 'Small cloth blanket', 'Toy katori and chamcha']
  },

  // ── 24–36 months ──────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Feelings Thermometer — Mood Check',
    description: 'Use a visual feelings thermometer to help the child identify and communicate their daily emotional state.',
    instructions: 'Draw a large thermometer shape on chart paper. At the bottom draw a happy face (green — "Bahut achha lag raha hai"), in the middle a neutral face (yellow — "Theek theek"), and at the top an upset face (red — "Achha nahi lag raha"). Each morning, ask: "Aaj kaisa feel ho raha hai?" (How are you feeling today?). The child points to or places a sticker on their current level. Talk about why: "Khush kyun ho?" (Why are you happy?). Check in again at bedtime. Over time, this builds the habit of emotional self-awareness and communication.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 5,
    materials: ['Chart paper', 'Markers', 'Stickers']
  },
  {
    category: 'EMOTIONAL',
    title: 'Diya Lighting for Calm — Shanti Ka Diya',
    description: 'Light a diya together during evening time as a calming ritual to develop emotional regulation and mindfulness.',
    instructions: 'In the evening, sit with the child in a quiet space. Together, place a cotton batti (wick) in a small diya, pour a little mustard oil or ghee. Light the diya together (adult lights it while child watches). Sit quietly and watch the flame for 1-2 minutes. Speak softly: "Dekho diya kitna shaant hai. Hum bhi shaant hain" (Look how peaceful the diya is. We are also peaceful). Take 3 deep breaths together. This ritual becomes a transition from active play to calm evening time. It teaches mindfulness, stillness, and emotional regulation through a deeply Indian cultural practice.',
    minAgeMonths: 24,
    maxAgeMonths: 36,
    durationMinutes: 5,
    materials: ['Small diya', 'Cotton batti (wick)', 'Mustard oil or ghee', 'Matchbox (adult use only)']
  },

  // ── 36–48 months ──────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Emotion Story Cards — Kya Feel Hua?',
    description: 'Use picture story cards showing emotional situations to discuss feelings, causes, and appropriate responses.',
    instructions: 'Create or buy picture cards showing emotional situations: a child whose toy is broken (sad), a child getting a gift (happy), a child lost in a mela (scared), a child whose friend took their sweet (angry), a child performing on stage (proud). Show one card at a time. Ask: "Isko kaisa lag raha hai?" (How is this person feeling?). "Kyun?" (Why?). "Tumhe kabhi aisa laga?" (Have you ever felt like this?). "Agar tumhare saath hota toh kya karte?" (What would you do if this happened to you?). This builds emotional recognition, empathy, and problem-solving.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 15,
    materials: ['Emotion story picture cards (hand-made or printed)']
  },
  {
    category: 'EMOTIONAL',
    title: 'Gratitude Practice — Shukriya Bolna',
    description: 'Practise saying thank you and expressing gratitude daily to develop appreciation and positive emotional habits.',
    instructions: 'Start a daily gratitude practice. At dinner or bedtime, each family member shares one thing they are thankful for: "Aaj kiske liye shukriya bologe?" (Who will you thank today?). Model it yourself: "Mamma ko shukriya Papa ka jo khana banaya" (I am thankful to Papa for making food). Help the child think of something: "Kya achha hua aaj?" (What good thing happened today?). It can be simple: "Shukriya Dadi ne kahani sunayi" (Thank you Dadi for telling a story). Write it on a "Shukriya Chart" on the wall. This builds positive emotional habits and family connection.',
    minAgeMonths: 36,
    maxAgeMonths: 48,
    durationMinutes: 5,
    materials: ['Shukriya Chart (paper on wall)', 'Markers']
  },

  // ── 48–60 months ──────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Deep Breathing — Phool Aur Mombatti',
    description: 'Teach deep breathing using the flower-and-candle technique to manage stress and strong emotions.',
    instructions: 'Teach the child the "Phool aur Mombatti" (flower and candle) breathing technique. Hold up one hand as a pretend flower: "Phool ko sungho — naak se andar lo" (Smell the flower — breathe in through the nose). Hold up the other hand with an extended index finger as a candle: "Mombatti bujhao — muh se bahar nikalo" (Blow out the candle — breathe out through the mouth). Do 5 rounds together. Practise when calm so it becomes automatic during stress. When the child gets upset, remind them: "Phool aur Mombatti yaad hai? Chalo karte hain." This is a lifelong emotional regulation tool.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 5,
    materials: ['No materials needed (optionally a real flower and candle for first demonstration)']
  },
  {
    category: 'EMOTIONAL',
    title: 'Problem-Solving Role Play — Kya Karein?',
    description: 'Act out common social-emotional problems and practise solutions through role play.',
    instructions: 'Present a scenario through role play. Example: "Pretend karo ki tumhara dost tumhara toy le gaya bina puchhe. Kya karoge?" (Pretend your friend took your toy without asking. What will you do?). Let the child respond. If they say "marunga" (I will hit), calmly say: "Aur kya kar sakte ho?" (What else could you do?). Guide them to solutions: "Bol sakte ho — mujhe achha nahi laga, please wapas do" (You can say — I did not like that, please give it back). Act it out together. Do different scenarios: someone calling names, feeling left out, making a mistake. This builds problem-solving and emotional intelligence.',
    minAgeMonths: 48,
    maxAgeMonths: 60,
    durationMinutes: 15,
    materials: ['Toys as props (optional)']
  },

  // ── 60–72 months ──────────────────────────────────────────────
  {
    category: 'EMOTIONAL',
    title: 'Feelings Journal — Meri Diary',
    description: 'Maintain a simple feelings journal with drawings and words to develop emotional expression and self-reflection.',
    instructions: 'Give the child a dedicated notebook — their "Feelings Diary" (Meri Diary). Every evening, they draw how they felt that day. They can draw a face, a scene, or use colours to represent emotions (red for angry, yellow for happy, blue for sad). Help them write 1-2 sentences: "Aaj main khush tha kyunki park gaya" (Today I was happy because I went to the park). Or "Aaj mujhe gussa aaya jab bhai ne mara" (Today I was angry when brother hit me). Review past entries sometimes: "Dekho, pichhle hafte tum kitne khush the!" (Look, last week you were so happy!). This builds self-reflection and emotional processing.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 10,
    materials: ['Notebook (diary)', 'Crayons or colour pencils', 'Pencil']
  },
  {
    category: 'EMOTIONAL',
    title: 'Empathy Stories — Doosron Ki Feelings',
    description: 'Read or tell stories focusing on characters\' feelings to build empathy and perspective-taking.',
    instructions: 'Choose stories from Indian folk tales where characters face emotional situations: the lonely elephant who found a friend, the kind bird who shared its nest, the boy who helped the old woman cross the road. After the story, ask empathy-building questions: "Hathi ko kaisa laga jab koi uska dost nahi tha?" (How did the elephant feel when he had no friends?), "Tumhe kabhi akela laga hai?" (Have you ever felt lonely?), "Usne kya kiya? Tum kya karte?" (What did he do? What would you do?). This develops the ability to understand and share others\' feelings — the core of empathy.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 15,
    materials: ['Story book with emotional themes or oral storytelling']
  },
  {
    category: 'EMOTIONAL',
    title: 'My Worry Box — Chinta Dabba',
    description: 'Create a "Worry Box" where the child can write or draw their worries and deposit them to manage anxiety.',
    instructions: 'Decorate a small cardboard box together — this is the "Chinta Dabba" (Worry Box). Explain: "Jab bhi koi baat se darr lage ya chinta ho, ek kagaz pe likho ya draw karo, aur dabba mein daal do" (Whenever something worries or scares you, write or draw it on paper and put it in the box). The child writes or draws their worry on a small piece of paper — "school mein test se darr lagta hai" (I am scared of the test at school) — folds it, and puts it in the box. Once a week, open the box together and discuss: "Kya yeh chinta abhi bhi hai?" (Is this worry still there?). Many worries will have resolved. This externalises anxiety and makes it manageable.',
    minAgeMonths: 60,
    maxAgeMonths: 72,
    durationMinutes: 10,
    materials: ['Small cardboard box', 'Decorating materials (stickers, colour paper)', 'Small paper slips', 'Pencil or crayons']
  },
];
