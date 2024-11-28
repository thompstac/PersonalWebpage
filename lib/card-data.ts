export interface CardData {
  id: string
  title: string
  description: string
  details: string
  category: string
}

export const categories = [
  { name: 'Mental Exercises', primary: '#b33687', secondary: '#f2adda' },
  { name: 'Body Awareness', primary: '#e79775', secondary: '#ebcfc4' },
  { name: 'Visualization Activities', primary: '#7c68d1', secondary: '#bdb0f3' },
  { name: 'Labor Positions', primary: '#8ec4cb', secondary: '#d1f9fe' },
  { name: 'Birth Positions', primary: '#89e1ae', secondary: '#d2fce4' },
]

export const cardData: CardData[] = [
  {
    id: '1',
    title: 'Deep Breathing',
    description: 'Practice deep breathing techniques',
    details: 'Inhale deeply through your nose for 4 counts, hold for 4 counts, then exhale slowly through your mouth for 6 counts. Repeat 5 times.',
    category: 'Body Awareness'
  },
  {
    id: '2',
    title: 'Progressive Muscle Relaxation',
    description: 'Relax your body from head to toe',
    details: 'Start by tensing and then relaxing each muscle group in your body, beginning with your toes and working your way up to your head.',
    category: 'Mental Exercises'
  },
  {
    id: '3',
    title: 'Gentle Swaying',
    description: 'Move your body gently from side to side',
    details: 'Stand with your feet shoulder-width apart and gently sway your hips from side to side. This can help ease discomfort and promote relaxation.',
    category: 'Body Awareness'
  },
  {
    id: '4',
    title: 'Positive Affirmation',
    description: 'Repeat a positive affirmation',
    details: 'Say to yourself: "I am strong, capable, and ready to bring new life into this world." Repeat this affirmation several times, focusing on its meaning.',
    category: 'Mental Exercises'
  },
  {
    id: '5',
    title: 'Peaceful Place Visualization',
    description: 'Visualize a calm and peaceful place',
    details: 'Close your eyes and imagine yourself in a serene, peaceful place. It could be a beach, a forest, or any place that makes you feel calm and relaxed. Focus on the details of this place using all your senses.',
    category: 'Visualization Activities'
  },
  {
    id: '6',
    title: 'Yoga Ball Child\'s Pose',
    description: 'Rest and relax using a birth ball for support',
    details: `Kneel on the ground with a birth ball in front of you. Drape your upper body over the ball, allowing it to support your weight. This position can help relieve back pressure and provide comfort during contractions.

    ![Yoga Ball Child's Pose](${process.env.NEXT_PUBLIC_BLOB_URL}/birth-QJu9fZ9pZzfasGKYvzGyKjpLpKL29J.png)`,
    category: 'Labor Positions'
  },
  // Add more cards for each category...
]

