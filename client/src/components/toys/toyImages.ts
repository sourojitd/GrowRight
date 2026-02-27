/**
 * Maps toy titles to descriptive search keywords for image lookup.
 * Uses source.unsplash.com for free, keyword-based stock images.
 */

const toyKeywordMap: Record<string, string> = {
  // MOTOR
  'Soft Fabric Rattle Set': 'baby rattle colorful toy',
  'Play Gym with Hanging Toys': 'baby play gym mat',
  'Stacking Rings (Arihant/Giggles)': 'stacking rings toy colorful',
  'Push Walker with Blocks': 'baby push walker toy',
  'Wooden Hammer and Peg Bench': 'wooden peg hammer toy',
  'Tricycle / Push Ride-on': 'kids tricycle colorful',
  'Lacing and Threading Beads': 'wooden threading beads kids',
  'Scissors Skills Activity Set': 'kids safety scissors craft',

  // COGNITIVE
  'High-Contrast Flash Cards': 'baby flash cards black white',
  'Nesting Cups Set': 'nesting stacking cups baby',
  'Shape Sorter Box': 'shape sorter toy colorful',
  'Wooden Jigsaw Puzzle (Chunky Knob)': 'wooden jigsaw puzzle kids',
  'Colour and Shape Sorting Clock': 'wooden clock toy kids',
  'Building Blocks Set (50+ pieces)': 'building blocks colorful kids',
  'Magnetic Drawing Board (Magic Slate)': 'magnetic drawing board kids',
  'Wooden Abacus (Counting Frame)': 'wooden abacus colorful',
  'Montessori Number Rods': 'montessori number rods',
  'Tangram Puzzle Set': 'tangram puzzle colorful',
  'Alphabet and Number Tracing Board': 'alphabet tracing board wooden',
  'Fraction Learning Puzzle': 'fraction puzzle kids colorful',
  'Solar System Model Kit': 'solar system model kids',
  'Magnetic India Map Puzzle': 'india map puzzle kids',
  'Pattern Block Set with Activity Cards': 'pattern blocks geometric kids',
  'Counting Bears with Sorting Cups': 'counting bears sorting cups',
  'Spelling and Word Building Kit': 'spelling tiles wooden kids',

  // SPEECH
  'Cloth Book with Crinkle Pages': 'cloth book baby soft',
  'Musical Rhyme Phone / Toy Phone': 'toy phone kids musical',
  'Picture Board Books (Bilingual)': 'board books kids colorful',
  'Interactive Sound Book (Animals/Vehicles)': 'sound book animals kids',
  'Hand Puppet Set': 'hand puppet animal kids',
  'Phonics Learning Toy (LeapFrog / Mitashi)': 'phonics learning toy kids',
  'Story Dice / Picture Cards': 'story dice kids',
  'Hindi Varnamala Learning Chart (Interactive)': 'alphabet chart kids interactive',

  // SOCIAL
  'Peek-a-Boo Blanket / Dupatta': 'baby peek-a-boo blanket',
  'Play Kitchen Set': 'kids play kitchen set',
  'Grocery Shop Pretend Play Set': 'pretend play grocery kids',
  'Doctor Play Kit': 'doctor kit toy kids',
  'Dress-Up Costume Box': 'kids costume dress up',
  'Simple Board Game (Snakes & Ladders)': 'snakes ladders board game',
  'Memory Matching Card Game': 'memory card game kids',

  // EMOTIONAL
  'Soft Lovey / Security Blanket': 'baby lovey security blanket',
  'Calm-Down Sensory Bottle': 'sensory bottle glitter calm',
  'Stuffed Animal Family Set': 'stuffed animals family plush',
  'Feelings Faces Flashcards': 'emotions flashcards kids',
  'Play Dough Set (Homemade or Funskool)': 'play dough colorful kids',
  'Feelings Wheel / Emotion Spinner': 'emotion wheel kids',
  'My Feelings Storybook Set': 'feelings storybook kids',
  'Mindfulness Breathing Buddy (Plush)': 'weighted plush stuffed animal',
};

// Category-level fallback keywords
const categoryFallback: Record<string, string> = {
  MOTOR: 'baby toy colorful motor skills',
  COGNITIVE: 'educational toy kids wooden',
  SPEECH: 'kids book toy language',
  SOCIAL: 'pretend play toy kids',
  EMOTIONAL: 'plush toy kids feelings',
};

export function getToyImageUrl(title: string, category?: string): string {
  const keywords = toyKeywordMap[title]
    || categoryFallback[category || '']
    || 'kids toy colorful';

  const encoded = encodeURIComponent(keywords.replace(/\s+/g, ','));
  return `https://source.unsplash.com/400x400/?${encoded}`;
}
