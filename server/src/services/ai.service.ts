import { config } from '../config';
import { logger } from '../config/logger';
import { GeneratedRoadmap, MilestoneCategory, RoadmapSection } from '../types';

/**
 * AI Service – Abstraction layer for LLM integration.
 *
 * Currently returns structured mock data. When AI_PROVIDER is configured,
 * this will delegate to the appropriate LLM provider (OpenAI, Anthropic, etc.)
 *
 * Design:
 * - Provider-agnostic interface
 * - Structured output format (always returns typed data)
 * - Retry logic built in
 * - Cost tracking hooks ready
 */

interface AIRequest {
  prompt: string;
  systemPrompt?: string;
  maxTokens?: number;
  temperature?: number;
}

interface AIResponse {
  content: string;
  model: string;
  usage: {
    promptTokens: number;
    completionTokens: number;
  };
}

class AIService {
  private provider: string;

  constructor() {
    this.provider = config.AI_PROVIDER;
  }

  get isEnabled(): boolean {
    return this.provider !== 'none' && !!config.AI_API_KEY;
  }

  /**
   * Raw completion – provider-agnostic.
   */
  async complete(request: AIRequest): Promise<AIResponse> {
    if (!this.isEnabled) {
      throw new Error('AI provider not configured');
    }

    logger.info('AI completion request', { provider: this.provider });

    // Provider routing – add new providers here
    switch (this.provider) {
      case 'anthropic':
        return this.callAnthropic(request);
      case 'openai':
        return this.callOpenAI(request);
      default:
        throw new Error(`Unknown AI provider: ${this.provider}`);
    }
  }

  /**
   * Generate a development roadmap for a child.
   */
  async generateRoadmap(params: {
    childName: string;
    ageMonths: number;
    completedMilestones: string[];
    focusAreas?: MilestoneCategory[];
  }): Promise<GeneratedRoadmap> {
    if (!this.isEnabled) {
      return this.getMockRoadmap(params.ageMonths);
    }

    const prompt = this.buildRoadmapPrompt(params);

    const response = await this.complete({
      prompt,
      systemPrompt:
        'You are a child development expert. Generate structured development roadmaps in JSON format.',
      maxTokens: 2000,
      temperature: 0.7,
    });

    try {
      return JSON.parse(response.content) as GeneratedRoadmap;
    } catch {
      logger.error('Failed to parse AI roadmap response');
      return this.getMockRoadmap(params.ageMonths);
    }
  }

  // ─── Private Methods ──────────────────────────────────

  private buildRoadmapPrompt(params: {
    childName: string;
    ageMonths: number;
    completedMilestones: string[];
    focusAreas?: MilestoneCategory[];
  }): string {
    return `Generate a 4-week development roadmap for a child named ${params.childName},
age ${params.ageMonths} months.
Completed milestones: ${params.completedMilestones.join(', ') || 'none yet'}.
Focus areas: ${params.focusAreas?.join(', ') || 'all areas'}.
Return a JSON object with "sections" array, each containing title, description, activities array, and durationWeeks.`;
  }

  private async callAnthropic(_request: AIRequest): Promise<AIResponse> {
    // Anthropic Claude API integration point
    // Will use @anthropic-ai/sdk when AI_PROVIDER=anthropic
    throw new Error('Anthropic provider not yet implemented');
  }

  private async callOpenAI(_request: AIRequest): Promise<AIResponse> {
    // OpenAI API integration point
    throw new Error('OpenAI provider not yet implemented');
  }

  private getMockRoadmap(ageMonths: number): GeneratedRoadmap {
    const currentYear = Math.floor(ageMonths / 12);
    const sections = this.getYearSections(ageMonths);

    return {
      summary: `Comprehensive year-by-year development roadmap for your ${ageMonths}-month-old (Year ${currentYear}). Covers motor, cognitive, speech, social, and emotional milestones with Indian-context activities from now through age 5.`,
      generatedAt: new Date().toISOString(),
      sections,
    };
  }

  private getYearSections(ageMonths: number): RoadmapSection[] {
    const allYears: RoadmapSection[] = [
      // ─── Year 0 (0-12 months) ─────────────────
      {
        title: 'Year 1 (0-12 months) — Foundation & Bonding',
        description: 'The first year is about building trust, sensory awareness, and basic motor control. Focus on responsive caregiving, tummy time, and rich sensory input. Indian practices like oil massage (malish) and lullabies (lori) are excellent.',
        durationWeeks: 52,
        activities: [
          { name: 'Daily Oil Massage (Malish)', description: 'Gentle coconut/sesame oil massage before bath. Strengthens bones, improves circulation, and builds parent-child bonding — a time-tested Indian practice.', category: MilestoneCategory.MOTOR, frequency: 'Daily before bath', materials: ['Coconut oil or sesame oil', 'Soft towel'] },
          { name: 'Tummy Time Progression', description: 'Start with 2-3 minutes on a soft mat. Place colourful toys just out of reach. Gradually increase to 15-20 minutes. Builds neck, shoulder, and core strength.', category: MilestoneCategory.MOTOR, frequency: 'Daily, 3-5 sessions', materials: ['Play mat', 'Rattles', 'Soft mirror'] },
          { name: 'High-Contrast Visual Cards', description: 'Show black-and-white pattern cards at 20-30 cm distance for the first 3 months. Switch to colourful cards from month 4. Stimulates visual tracking.', category: MilestoneCategory.COGNITIVE, frequency: '2-3 times daily, 5 min each', materials: ['High-contrast cards'] },
          { name: 'Lori & Rhyme Time', description: 'Sing traditional lullabies (Nani Teri Morni Ko, Chanda Mama Door Ke) with facial expressions and hand gestures. Builds auditory processing and language foundations.', category: MilestoneCategory.SPEECH, frequency: 'Throughout the day', materials: [] },
          { name: 'Peek-a-Boo & Object Permanence', description: 'Play peek-a-boo with a dupatta or towel. Hide a toy under a cloth and let baby find it. Develops understanding that things exist even when not visible.', category: MilestoneCategory.COGNITIVE, frequency: 'Multiple times daily', materials: ['Soft cloth', 'Small toys'] },
          { name: 'Responsive Interaction', description: 'Mirror baby\'s coos, babbles, and facial expressions. Wait for their response. This "serve and return" builds secure attachment and emotional regulation.', category: MilestoneCategory.SOCIAL, frequency: 'Every interaction', materials: [] },
          { name: 'Texture Exploration', description: 'Let baby touch different textures — silk, cotton, jute, velvet, dal grains in a sealed bag. Builds sensory processing and curiosity.', category: MilestoneCategory.COGNITIVE, frequency: 'Daily, during playtime', materials: ['Fabric swatches', 'Sealed sensory bags'] },
        ],
      },
      // ─── Year 1 (12-24 months) ────────────────
      {
        title: 'Year 2 (12-24 months) — Exploration & First Words',
        description: 'Toddlers begin walking, saying first words, and asserting independence. Focus on safe exploration, vocabulary building through conversation, and emotional labelling. This is the golden window for language exposure.',
        durationWeeks: 52,
        activities: [
          { name: 'Walk & Talk Outings', description: 'Take short walks in parks or around the neighbourhood. Name everything: "Look, a peepal tree! See the red autorickshaw!" Builds vocabulary through real-world context.', category: MilestoneCategory.SPEECH, frequency: 'Daily, 20-30 min', materials: [] },
          { name: 'Stacking & Nesting Play', description: 'Use stacking cups, wooden blocks, or steel katoris. Builds hand-eye coordination, spatial awareness, and early problem-solving. Count aloud as you stack.', category: MilestoneCategory.MOTOR, frequency: 'Daily play sessions', materials: ['Stacking cups', 'Wooden blocks'] },
          { name: 'Two-Word Phrase Building', description: 'Model two-word phrases: "More roti?", "Big dog!", "Papa came!" Pause and wait for attempts. Do not correct — expand instead ("Yes, big brown dog!").', category: MilestoneCategory.SPEECH, frequency: 'Throughout the day', materials: [] },
          { name: 'Emotion Naming', description: 'When toddler is upset, label it: "You are feeling angry because the toy broke." When happy: "You are so happy dancing!" Builds emotional vocabulary and regulation.', category: MilestoneCategory.EMOTIONAL, frequency: 'During emotional moments', materials: [] },
          { name: 'Scribbling & Mark-Making', description: 'Provide chunky crayons and large paper. Let them scribble freely. Builds pre-writing grip strength and creative expression. Tape paper to the floor.', category: MilestoneCategory.MOTOR, frequency: '3-4 times/week', materials: ['Chunky crayons', 'Large paper', 'Tape'] },
          { name: 'Simple Pretend Play', description: 'Provide a toy phone, kitchen set, or stuffed animal. Model "feeding" a doll or "talking" on a phone. Builds imagination and social understanding.', category: MilestoneCategory.SOCIAL, frequency: 'Daily, 15-20 min', materials: ['Pretend play toys', 'Stuffed animals'] },
          { name: 'Board Book Reading', description: 'Read chunky board books with bright illustrations. Point to pictures, ask "Where is the cow?", make animal sounds. Aim for 3-5 short sessions daily.', category: MilestoneCategory.COGNITIVE, frequency: '3-5 times daily, 5-10 min each', materials: ['Board books in Hindi/English'] },
        ],
      },
      // ─── Year 2 (24-36 months) ────────────────
      {
        title: 'Year 3 (24-36 months) — Language Explosion & Independence',
        description: 'Vocabulary explodes to 200-1000 words. Toddlers form sentences, start toilet training, and develop strong preferences. Focus on conversation, choice-giving, and structured play. Introduce bilingual exposure (Hindi/English).',
        durationWeeks: 52,
        activities: [
          { name: 'Story Time with Questions', description: 'Read picture stories (Panchatantra, Karadi Tales) and ask "What happened next?" or "Why is the monkey sad?" Builds comprehension and narrative skills.', category: MilestoneCategory.SPEECH, frequency: 'Daily, 15-20 min', materials: ['Picture storybooks'] },
          { name: 'Sorting & Categorising', description: 'Sort dal by type, arrange fruits by colour, group toys by size. Say categories aloud: "All the red ones here." Builds logical thinking and vocabulary.', category: MilestoneCategory.COGNITIVE, frequency: '3-4 times/week', materials: ['Household items', 'Sorting containers'] },
          { name: 'Scissor Skills Introduction', description: 'Use child-safe scissors to cut playdough "snakes" or thick paper strips. Builds bilateral coordination and hand strength needed for writing.', category: MilestoneCategory.MOTOR, frequency: '2-3 times/week', materials: ['Child-safe scissors', 'Playdough', 'Thick paper'] },
          { name: 'Parallel Play Dates', description: 'Arrange playtime with 1-2 peers. At this age, they play alongside (not with) each other. Provide duplicate toys to reduce conflicts. Builds social tolerance.', category: MilestoneCategory.SOCIAL, frequency: '2-3 times/week', materials: ['Duplicate toys'] },
          { name: 'Feelings Chart Routine', description: 'Use a simple feelings chart (happy, sad, angry, scared faces). Ask "How are you feeling today?" each morning. Builds emotional awareness and self-regulation.', category: MilestoneCategory.EMOTIONAL, frequency: 'Daily morning routine', materials: ['Feelings chart with faces'] },
          { name: 'Counting in Daily Life', description: 'Count steps while climbing, rotis on the plate, bangles on a hand. Touch each item while counting. Builds one-to-one correspondence and number sense.', category: MilestoneCategory.COGNITIVE, frequency: 'Throughout the day', materials: [] },
          { name: 'Toilet Training Routine', description: 'Follow child\'s readiness cues. Set a consistent schedule (after meals, before bath). Use a child-sized potty. Celebrate attempts, never punish accidents.', category: MilestoneCategory.MOTOR, frequency: 'Scheduled times daily', materials: ['Child potty seat'] },
        ],
      },
      // ─── Year 3 (36-48 months) ────────────────
      {
        title: 'Year 4 (36-48 months) — Preschool Readiness & Friendship',
        description: 'Children start cooperative play, ask "why?" constantly, and develop pre-academic skills. Focus on letter/number recognition through play (not worksheets), structured social interactions, and fostering curiosity. Ideal age to start playschool.',
        durationWeeks: 52,
        activities: [
          { name: 'Letter Hunts & Name Writing', description: 'Find letters of child\'s name on signboards, packets, newspapers. Trace name in sand, salt tray, or with finger paint. Avoid forcing pencil grip yet.', category: MilestoneCategory.COGNITIVE, frequency: 'Daily, playful approach', materials: ['Salt/sand tray', 'Finger paint'] },
          { name: 'Structured Art Projects', description: 'Collage-making with torn paper, leaf printing with rangoli colours, bead threading. Follow 2-3 step instructions. Builds fine motor, sequencing, and creativity.', category: MilestoneCategory.MOTOR, frequency: '3-4 times/week', materials: ['Paper', 'Glue', 'Leaves', 'Beads', 'String'] },
          { name: 'Why-Question Conversations', description: 'When child asks "Why is the sky blue?" engage genuinely. Use simple science: "Sunlight has many colours, the sky shows us the blue part." Nurture curiosity, never dismiss.', category: MilestoneCategory.COGNITIVE, frequency: 'On-demand, always respond', materials: [] },
          { name: 'Cooperative Games', description: 'Play simple board games (Snakes & Ladders), take-turn activities, or group building with blocks. Teaches waiting, sharing, winning, and losing gracefully.', category: MilestoneCategory.SOCIAL, frequency: '3-4 times/week', materials: ['Board games', 'Building blocks'] },
          { name: 'Rhyming & Phonics Play', description: 'Play rhyming games: "What rhymes with cat? Bat, hat, mat!" Clap syllables in names: "A-di-tya — three claps!" Builds phonemic awareness for reading readiness.', category: MilestoneCategory.SPEECH, frequency: 'Daily, during play/travel', materials: [] },
          { name: 'Empathy Stories & Role Play', description: 'Read stories about kindness (Totto-Chan, Amar Chitra Katha). Role-play scenarios: "Your friend fell down — what do you do?" Builds perspective-taking.', category: MilestoneCategory.EMOTIONAL, frequency: '2-3 times/week', materials: ['Storybooks', 'Puppets'] },
          { name: 'Number Sense Through Cooking', description: 'Involve child in measuring: "2 cups of atta, 1 spoon of salt." Count rotis together. Builds mathematical thinking through real, meaningful contexts.', category: MilestoneCategory.COGNITIVE, frequency: '2-3 times/week', materials: ['Measuring cups', 'Kitchen ingredients'] },
        ],
      },
      // ─── Year 4 (48-60 months) ────────────────
      {
        title: 'Year 5 (48-60 months) — School Readiness & Confidence',
        description: 'Children develop reading readiness, write their name, handle complex emotions, and form real friendships. Focus on building confidence, attention span, and independence. Prepare for formal school entry without academic pressure.',
        durationWeeks: 52,
        activities: [
          { name: 'Sight Word & Reading Practice', description: 'Start with familiar words: child\'s name, "mama", "papa", common signs. Use Hindi/English flashcards. Read together daily — let child "read" repeated phrases in favourite books.', category: MilestoneCategory.SPEECH, frequency: 'Daily, 15-20 min', materials: ['Flashcards', 'Early reader books'] },
          { name: 'Writing & Drawing Journal', description: 'Provide a notebook for daily drawing with dictated captions ("This is my dog Bruno"). Progresses to copying letters and writing name independently.', category: MilestoneCategory.MOTOR, frequency: 'Daily, 10-15 min', materials: ['Notebook', 'Pencils', 'Crayons'] },
          { name: 'Science Experiments', description: 'Simple experiments: sink/float with household items, mixing colours, growing methi seeds in cotton. Ask "What do you think will happen?" before each. Builds scientific thinking.', category: MilestoneCategory.COGNITIVE, frequency: '2 times/week', materials: ['Household items', 'Seeds', 'Cotton', 'Containers'] },
          { name: 'Conflict Resolution Practice', description: 'When conflicts arise with siblings/friends, guide: "Use your words. Tell them: I don\'t like it when you take my toy." Model and practise resolution, don\'t solve it for them.', category: MilestoneCategory.EMOTIONAL, frequency: 'During conflicts', materials: [] },
          { name: 'Independent Routines', description: 'Child dresses themselves (with minimal help), packs school bag, brushes teeth, and tidies play area. Use a visual routine chart. Builds executive function and confidence.', category: MilestoneCategory.SOCIAL, frequency: 'Daily routines', materials: ['Visual routine chart'] },
          { name: 'Pattern & Logic Games', description: 'Create patterns with rangoli, beads, or blocks (red-blue-red-blue-?). Solve simple puzzles (15-25 pieces). Play "What comes next?" games. Builds mathematical and logical thinking.', category: MilestoneCategory.COGNITIVE, frequency: '3-4 times/week', materials: ['Pattern blocks', 'Puzzles', 'Beads'] },
          { name: 'Group Sports & Physical Play', description: 'Introduce kho-kho, simple cricket, running races, yoga poses (tree pose, cobra pose). Builds gross motor skills, teamwork, and body awareness. Aim for 60 min active play daily.', category: MilestoneCategory.MOTOR, frequency: 'Daily, 60 min', materials: ['Ball', 'Open space'] },
        ],
      },
    ];

    // Return sections from the child's current year onwards
    const currentYearIndex = Math.min(Math.floor(ageMonths / 12), 4);
    return allYears.slice(currentYearIndex);
  }
}

export const aiService = new AIService();
