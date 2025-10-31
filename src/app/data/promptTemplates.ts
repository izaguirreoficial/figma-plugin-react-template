export interface PromptField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
  defaultValue?: string;
}

export interface PromptTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  fields: PromptField[];
  jsonStructure: Record<string, any>;
}

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'minimal-prompt',
    name: 'Minimal Prompt',
    category: 'General',
    description: 'Plantilla básica para prompts simples',
    fields: [
      {
        name: 'role',
        label: 'Role',
        type: 'textarea',
        placeholder: 'You are a helpful assistant that provides clear and accurate responses.',
        defaultValue: 'You are a helpful assistant that provides clear and accurate responses.'
      },
      {
        name: 'task',
        label: 'Task',
        type: 'textarea',
        placeholder: 'Complete the following request based on the provided input.',
        defaultValue: 'Complete the following request based on the provided input.'
      },
      {
        name: 'input',
        label: 'Input',
        type: 'textarea',
        placeholder: '[Your content or question here]',
        defaultValue: '[Your content or question here]'
      },
      {
        name: 'output_format',
        label: 'Output Format',
        type: 'textarea',
        placeholder: 'Provide a clear, well-structured response.',
        defaultValue: 'Provide a clear, well-structured response.'
      }
    ],
    jsonStructure: {
      role: '',
      task: '',
      input: '',
      output_format: ''
    }
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    category: 'Content',
    description: 'Para crear contenido de marketing, blogs y redes sociales',
    fields: [
      {
        name: 'role',
        label: 'Role',
        type: 'textarea',
        placeholder: 'You are an expert content creator...',
        defaultValue: 'You are an expert content creator with extensive experience in digital marketing and audience engagement.'
      },
      {
        name: 'content_type',
        label: 'Content Type',
        type: 'select',
        options: ['Blog Post', 'Social Media Post', 'Email Campaign', 'Product Description', 'Landing Page'],
        defaultValue: 'Blog Post'
      },
      {
        name: 'target_audience',
        label: 'Target Audience',
        type: 'text',
        placeholder: 'e.g., Young professionals, Tech enthusiasts, Small business owners',
        defaultValue: ''
      },
      {
        name: 'tone',
        label: 'Tone',
        type: 'select',
        options: ['Professional', 'Casual', 'Friendly', 'Authoritative', 'Conversational', 'Humorous'],
        defaultValue: 'Professional'
      },
      {
        name: 'topic',
        label: 'Topic/Subject',
        type: 'textarea',
        placeholder: 'Describe the main topic or subject for the content',
        defaultValue: ''
      },
      {
        name: 'key_points',
        label: 'Key Points',
        type: 'textarea',
        placeholder: 'List the main points to cover (one per line)',
        defaultValue: ''
      },
      {
        name: 'word_count',
        label: 'Word Count',
        type: 'text',
        placeholder: 'e.g., 500-800 words',
        defaultValue: ''
      }
    ],
    jsonStructure: {
      role: '',
      content_type: '',
      target_audience: '',
      tone: '',
      topic: '',
      key_points: '',
      word_count: '',
      output_format: 'Provide the content with proper formatting, headings, and structure suitable for the specified content type.'
    }
  },
  {
    id: 'code-generation',
    name: 'Code Generation',
    category: 'Development',
    description: 'Para generar código con especificaciones técnicas',
    fields: [
      {
        name: 'role',
        label: 'Role',
        type: 'textarea',
        placeholder: 'You are an expert software developer...',
        defaultValue: 'You are an expert software developer with deep knowledge of programming languages, frameworks, and best practices.'
      },
      {
        name: 'programming_language',
        label: 'Programming Language',
        type: 'select',
        options: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go', 'Rust', 'PHP', 'Ruby', 'Swift'],
        defaultValue: 'JavaScript'
      },
      {
        name: 'framework',
        label: 'Framework/Library',
        type: 'text',
        placeholder: 'e.g., React, Vue, Angular, Express, Django',
        defaultValue: ''
      },
      {
        name: 'functionality',
        label: 'Functionality Description',
        type: 'textarea',
        placeholder: 'Describe what the code should do',
        defaultValue: ''
      },
      {
        name: 'requirements',
        label: 'Technical Requirements',
        type: 'textarea',
        placeholder: 'List specific requirements, constraints, or specifications',
        defaultValue: ''
      },
      {
        name: 'code_style',
        label: 'Code Style',
        type: 'select',
        options: ['Clean Code', 'Functional', 'Object-Oriented', 'Modular', 'Enterprise'],
        defaultValue: 'Clean Code'
      }
    ],
    jsonStructure: {
      role: '',
      programming_language: '',
      framework: '',
      functionality: '',
      requirements: '',
      code_style: '',
      output_format: 'Provide clean, well-commented code with explanations of key components and usage instructions.'
    }
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    category: 'Analysis',
    description: 'Para análisis de datos y generación de insights',
    fields: [
      {
        name: 'role',
        label: 'Role',
        type: 'textarea',
        placeholder: 'You are a data analyst expert...',
        defaultValue: 'You are a data analyst expert with extensive experience in statistical analysis, data interpretation, and business intelligence.'
      },
      {
        name: 'data_type',
        label: 'Data Type',
        type: 'select',
        options: ['Sales Data', 'User Behavior', 'Financial Data', 'Survey Results', 'Performance Metrics', 'Market Research'],
        defaultValue: 'Sales Data'
      },
      {
        name: 'analysis_goal',
        label: 'Analysis Goal',
        type: 'textarea',
        placeholder: 'What insights or conclusions are you looking for?',
        defaultValue: ''
      },
      {
        name: 'data_description',
        label: 'Data Description',
        type: 'textarea',
        placeholder: 'Describe the dataset, columns, time period, etc.',
        defaultValue: ''
      },
      {
        name: 'metrics',
        label: 'Key Metrics',
        type: 'textarea',
        placeholder: 'List the main metrics to analyze',
        defaultValue: ''
      },
      {
        name: 'visualization',
        label: 'Visualization Needs',
        type: 'select',
        options: ['Charts and Graphs', 'Dashboard Layout', 'Statistical Tables', 'Trend Analysis', 'Comparative Analysis'],
        defaultValue: 'Charts and Graphs'
      }
    ],
    jsonStructure: {
      role: '',
      data_type: '',
      analysis_goal: '',
      data_description: '',
      metrics: '',
      visualization: '',
      output_format: 'Provide detailed analysis with insights, recommendations, and suggested visualizations.'
    }
  },
  {
    id: 'video-generation',
    name: 'Video Generation',
    category: 'Creative',
    description: 'Para crear prompts de generación de video con IA',
    fields: [
      {
        name: 'role',
        label: 'Role',
        type: 'textarea',
        placeholder: 'You are a video production expert...',
        defaultValue: 'You are a video production expert specializing in AI-generated content with deep understanding of cinematography and visual storytelling.'
      },
      {
        name: 'video_style',
        label: 'Video Style',
        type: 'select',
        options: ['Cinematic', 'Documentary', 'Animation', 'Commercial', 'Social Media', 'Educational'],
        defaultValue: 'Cinematic'
      },
      {
        name: 'scene_description',
        label: 'Scene Description',
        type: 'textarea',
        placeholder: 'Describe the visual scene in detail',
        defaultValue: ''
      },
      {
        name: 'camera_movement',
        label: 'Camera Movement',
        type: 'select',
        options: ['Static Shot', 'Pan Left/Right', 'Tilt Up/Down', 'Zoom In/Out', 'Dolly', 'Tracking Shot'],
        defaultValue: 'Static Shot'
      },
      {
        name: 'lighting',
        label: 'Lighting',
        type: 'select',
        options: ['Natural Light', 'Golden Hour', 'Blue Hour', 'Studio Lighting', 'Dramatic Lighting', 'Soft Lighting'],
        defaultValue: 'Natural Light'
      },
      {
        name: 'duration',
        label: 'Duration',
        type: 'text',
        placeholder: 'e.g., 5 seconds, 30 seconds',
        defaultValue: '5 seconds'
      },
      {
        name: 'mood',
        label: 'Mood/Atmosphere',
        type: 'text',
        placeholder: 'e.g., Peaceful, Energetic, Mysterious, Uplifting',
        defaultValue: ''
      }
    ],
    jsonStructure: {
      role: '',
      video_style: '',
      scene_description: '',
      camera_movement: '',
      lighting: '',
      duration: '',
      mood: '',
      output_format: 'Provide a detailed video generation prompt optimized for AI video tools like RunwayML, Pika Labs, or VEO3.'
    }
  },
  {
    id: 'educational-content',
    name: 'Educational Content',
    category: 'Education',
    description: 'Para crear contenido educativo y materiales de aprendizaje',
    fields: [
      {
        name: 'role',
        label: 'Role',
        type: 'textarea',
        placeholder: 'You are an educational expert...',
        defaultValue: 'You are an educational expert with extensive experience in curriculum design, pedagogy, and creating engaging learning materials.'
      },
      {
        name: 'subject',
        label: 'Subject/Topic',
        type: 'text',
        placeholder: 'e.g., Mathematics, History, Programming, Science',
        defaultValue: ''
      },
      {
        name: 'education_level',
        label: 'Education Level',
        type: 'select',
        options: ['Elementary', 'Middle School', 'High School', 'University', 'Professional', 'General Adult'],
        defaultValue: 'High School'
      },
      {
        name: 'learning_objectives',
        label: 'Learning Objectives',
        type: 'textarea',
        placeholder: 'What should students learn or be able to do?',
        defaultValue: ''
      },
      {
        name: 'content_format',
        label: 'Content Format',
        type: 'select',
        options: ['Lesson Plan', 'Quiz/Assessment', 'Study Guide', 'Interactive Exercise', 'Presentation', 'Worksheet'],
        defaultValue: 'Lesson Plan'
      },
      {
        name: 'duration',
        label: 'Duration/Length',
        type: 'text',
        placeholder: 'e.g., 45 minutes, 1 hour, 2 weeks',
        defaultValue: ''
      },
      {
        name: 'teaching_method',
        label: 'Teaching Method',
        type: 'select',
        options: ['Interactive', 'Visual', 'Hands-on', 'Discussion-based', 'Problem-solving', 'Storytelling'],
        defaultValue: 'Interactive'
      }
    ],
    jsonStructure: {
      role: '',
      subject: '',
      education_level: '',
      learning_objectives: '',
      content_format: '',
      duration: '',
      teaching_method: '',
      output_format: 'Provide structured educational content with clear objectives, activities, and assessment methods.'
    }
  }
];

export const getTemplatesByCategory = () => {
  const categories = [...new Set(promptTemplates.map(template => template.category))];
  return categories.reduce((acc, category) => {
    acc[category] = promptTemplates.filter(template => template.category === category);
    return acc;
  }, {} as Record<string, PromptTemplate[]>);
};

export const getTemplateById = (id: string): PromptTemplate | undefined => {
  return promptTemplates.find(template => template.id === id);
};