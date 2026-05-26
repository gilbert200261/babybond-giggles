export interface Activity {
  name: string
  supplies: string[]
  instructions: string[]
  learningBenefit: string
  safetyReminder: string
}

const activities: Record<string, Activity> = {
  '0-3_tummy-time': {
    name: 'Tummy Time on Your Chest',
    supplies: ['Your lap or a firm, flat surface', 'Soft blanket (optional)'],
    instructions: [
      'Lie back slightly in a reclined position and place baby face-down on your chest.',
      'Talk or sing softly so baby lifts their head toward your voice.',
      'Keep sessions to 2–3 minutes and repeat a few times a day.',
    ],
    learningBenefit: 'Builds the neck and shoulder strength baby needs to eventually roll over and sit up.',
    safetyReminder: 'Always supervise tummy time. Never leave baby unattended on their stomach.',
  },
  '0-3_sensory': {
    name: 'Black & White Contrast Cards',
    supplies: ['Printed or drawn black-and-white patterns (stripes, circles, checkerboard)'],
    instructions: [
      'Hold a high-contrast card about 8–12 inches from baby\'s face.',
      'Move it slowly left and right and watch baby\'s eyes track it.',
      'Switch to a new pattern after 1–2 minutes to keep baby engaged.',
    ],
    learningBenefit: 'Newborn eyes are most sensitive to high-contrast patterns, stimulating early visual development.',
    safetyReminder: 'Keep cards clean and out of baby\'s mouth. Supervise at all times.',
  },
  '0-3_music': {
    name: 'Gentle Lullaby & Sway',
    supplies: ['Your voice or a speaker with soft music'],
    instructions: [
      'Hold baby securely against your chest in a cradle position.',
      'Sing or play a gentle lullaby and sway slowly side to side.',
      'Make gentle eye contact and smile — baby will watch your face.',
    ],
    learningBenefit: 'Rhythm and melody help develop early auditory processing and emotional regulation.',
    safetyReminder: 'Keep music volume low — baby\'s hearing is sensitive. Avoid loud or sudden sounds.',
  },
  '0-3_reading': {
    name: 'Board Book Snuggle Time',
    supplies: ['A simple board book with large, colorful pictures'],
    instructions: [
      'Settle baby in your lap facing the book.',
      'Point to pictures and name them slowly: "Look — a duck! Duck says quack."',
      'Use an expressive, warm voice. It\'s about the sound and closeness, not the story.',
    ],
    learningBenefit: 'Early exposure to language and your voice builds the foundation for vocabulary and reading.',
    safetyReminder: 'Choose board books with no loose parts or sharp corners. Supervise at all times.',
  },
  '0-3_bonding': {
    name: 'Skin-to-Skin Cuddle',
    supplies: ['A quiet, warm room', 'Blanket to drape over both of you'],
    instructions: [
      'Sit or recline comfortably and hold baby against your bare chest.',
      'Drape a blanket over baby\'s back to keep them warm.',
      'Breathe slowly and talk or hum softly. No need to do anything else.',
    ],
    learningBenefit: 'Skin-to-skin contact regulates baby\'s heart rate, temperature, and stress hormones.',
    safetyReminder: 'Always keep baby\'s airway clear. Do not fall asleep with baby on your chest unsupported.',
  },
  '3-6_tummy-time': {
    name: 'Prop-Up Tummy Time',
    supplies: ['Rolled towel or small tummy time pillow', 'Colorful toy to place in front of baby'],
    instructions: [
      'Place the rolled towel under baby\'s chest so their arms are free in front.',
      'Put a colorful toy or mirror just out of reach.',
      'Encourage baby to reach for the toy — cheer when they do!',
    ],
    learningBenefit: 'Strengthens core, arms, and neck muscles — all essential for rolling and eventually crawling.',
    safetyReminder: 'Supervise every moment of tummy time. Stop if baby seems distressed.',
  },
  '3-6_sensory': {
    name: 'Texture Exploration Blanket',
    supplies: ['3–4 fabric scraps with different textures (soft fleece, bumpy terry cloth, smooth satin)'],
    instructions: [
      'Lay baby on their back and place fabric squares within reach.',
      'Guide baby\'s hands to each texture and describe it: "This one is soft... this one is bumpy."',
      'Let baby grab, scrunch, and explore freely.',
    ],
    learningBenefit: 'Touch exploration builds sensory processing skills and hand awareness.',
    safetyReminder: 'Use fabric pieces large enough that they cannot cover baby\'s face. Supervise closely.',
  },
  '3-6_music': {
    name: 'Lap Bounce & Rhyme',
    supplies: ['Your lap and voice'],
    instructions: [
      'Sit baby on your lap facing you, supporting their torso.',
      'Bounce your knees gently to the rhythm of a nursery rhyme like "Humpty Dumpty" or "Pat-a-Cake."',
      'Pause before the last word of each line — baby will start to anticipate it!',
    ],
    learningBenefit: 'Rhythm, repetition, and anticipation lay groundwork for language and pattern recognition.',
    safetyReminder: 'Support baby\'s head and back throughout. Keep bouncing gentle.',
  },
  '3-6_reading': {
    name: 'Lift-the-Flap Book Fun',
    supplies: ['A lift-the-flap board book'],
    instructions: [
      'Hold baby in your lap and open the book together.',
      'Ask "Where is it hiding?" before each flap, then lift it with a big "There it is!"',
      'Let baby touch and help lift the flaps — it\'s fine if they need help.',
    ],
    learningBenefit: 'Introduces object permanence — the understanding that things exist even when hidden.',
    safetyReminder: 'Check flaps regularly for tears. Loose cardboard pieces can be a choking hazard.',
  },
  '3-6_bonding': {
    name: 'Mirror Play Face-to-Face',
    supplies: ['A baby-safe unbreakable mirror'],
    instructions: [
      'Hold baby facing the mirror at eye level.',
      'Make exaggerated faces — big smile, surprised face, silly tongue — and name them.',
      'Watch baby imitate you and celebrate when they do!',
    ],
    learningBenefit: 'Facial imitation is one of the earliest social skills and builds emotional connection.',
    safetyReminder: 'Use only shatterproof baby mirrors. Hold securely so it cannot fall.',
  },
  '6-9_tummy-time': {
    name: 'Rolling Practice on the Floor',
    supplies: ['Soft play mat', 'Favorite toy'],
    instructions: [
      'Place baby on their back on the play mat.',
      'Hold a toy to one side just out of reach to encourage them to roll toward it.',
      'Celebrate every attempt — even partial rolls count!',
    ],
    learningBenefit: 'Rolling develops bilateral coordination and the body awareness needed for crawling.',
    safetyReminder: 'Always play on a flat, padded surface away from furniture edges.',
  },
  '6-9_sensory': {
    name: 'Kitchen Drum Set',
    supplies: ['Wooden spoon', '2–3 plastic containers or pots of different sizes'],
    instructions: [
      'Set containers on the floor in front of seated baby.',
      'Show baby how to tap with the spoon, then hand it over.',
      'Name the sounds: "loud... soft... boom!"',
    ],
    learningBenefit: 'Cause-and-effect discovery and auditory discrimination develop through banging and listening.',
    safetyReminder: 'Use only lightweight, unbreakable containers. Supervise use of the spoon.',
  },
  '6-9_music': {
    name: 'Shake & Dance Party',
    supplies: ['Homemade shaker (dried rice in a sealed container)', 'Upbeat music'],
    instructions: [
      'Sit on the floor with baby and play some happy music.',
      'Shake your homemade shaker to the beat and encourage baby to copy.',
      'Sway together, clap hands, and have fun — no moves required!',
    ],
    learningBenefit: 'Moving to music builds rhythm, gross motor coordination, and joyful social connection.',
    safetyReminder: 'Seal the shaker completely so nothing can spill out. Keep it large enough to not be a choking hazard.',
  },
  '6-9_reading': {
    name: 'Point & Name Book Time',
    supplies: ['Board book with simple pictures of familiar objects'],
    instructions: [
      'Seat baby in your lap and open the book.',
      'Point to a picture and say the word clearly: "Dog." Wait a moment, then say it again.',
      'Encourage baby to point — even if they just slap the page, praise the effort.',
    ],
    learningBenefit: 'Pointing and naming builds early word recognition and joint attention — a key language milestone.',
    safetyReminder: 'Choose books with no small parts. Let baby touch and hold the book freely.',
  },
  '6-9_bonding': {
    name: 'Peekaboo with a Blanket',
    supplies: ['Small lightweight blanket or muslin cloth'],
    instructions: [
      'Hold the blanket in front of your face and count to three.',
      'Drop it suddenly and say "Peekaboo!" with your biggest smile.',
      'Then cover baby\'s face gently and help them pull it off.',
    ],
    learningBenefit: 'Peekaboo reinforces object permanence and sparks delight in social surprises.',
    safetyReminder: 'Use a lightweight cloth that baby can push away easily. Never leave over baby\'s face.',
  },
  '9-12_tummy-time': {
    name: 'Tunnel Crawl Encouragement',
    supplies: ['Play tunnel or a blanket draped over two pillows to form a low arch'],
    instructions: [
      'Set up the tunnel and place a favorite toy just inside the entrance.',
      'Get on the other side and call baby through.',
      'Celebrate loudly when they make it through!',
    ],
    learningBenefit: 'Crawling through a tunnel builds spatial awareness, coordination, and problem solving.',
    safetyReminder: 'Ensure the tunnel is stable and cannot collapse. Stay within arm\'s reach.',
  },
  '9-12_sensory': {
    name: 'Water Play in a Tub',
    supplies: ['Shallow plastic tub', 'Warm water (2–3 inches)', 'Plastic cups and spoons'],
    instructions: [
      'Set the tub on a waterproof mat and add a few inches of warm water.',
      'Place baby in a seated position and let them splash, pour, and explore.',
      'Name what\'s happening: "You\'re splashing! In... out!"',
    ],
    learningBenefit: 'Water play develops fine motor skills, sensory processing, and early concepts like "full" and "empty."',
    safetyReminder: 'Never leave baby unattended near water, even 1 inch. Keep one hand on baby at all times.',
  },
  '9-12_music': {
    name: 'Dance & Freeze Game',
    supplies: ['Upbeat music with a way to pause it'],
    instructions: [
      'Hold baby upright and dance together while the music plays.',
      'Stop the music suddenly and freeze, looking surprised.',
      'Start again and repeat — baby will start to anticipate the freeze!',
    ],
    learningBenefit: 'Stopping and starting builds listening skills, body awareness, and joyful anticipation.',
    safetyReminder: 'Hold baby securely throughout. Keep movements gentle even when "dancing."',
  },
  '9-12_reading': {
    name: 'Let Baby Turn the Pages',
    supplies: ['Board book — any favorite'],
    instructions: [
      'Sit with baby and hold the book open together.',
      'Read a page, then wait and encourage baby to turn to the next one.',
      'If they struggle, guide their hand — the independence is what matters.',
    ],
    learningBenefit: 'Handling a book develops fine motor pincer grip and a sense of agency in the story.',
    safetyReminder: 'Board book corners can be stiff. Supervise and choose books with rounded edges when possible.',
  },
  '9-12_bonding': {
    name: 'Copy Cat Game',
    supplies: ['Nothing needed — just the two of you'],
    instructions: [
      'Sit facing baby at eye level.',
      'Make a simple action: clap, wave, tap your head. Wait for baby to copy.',
      'Then copy whatever baby does next — let them lead!',
    ],
    learningBenefit: 'Turn-taking imitation is a foundational social skill that foreshadows conversation.',
    safetyReminder: 'Play on a soft, flat surface. Make sure the area is clear of hazards if baby reaches or topples.',
  },
}

export function pickActivity(age: string, activityType: string): Activity {
  const key = `${age}_${activityType}`
  return (
    activities[key] ??
    activities[`0-3_bonding`] // safe fallback
  )
}
