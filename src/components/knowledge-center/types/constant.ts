export interface KnowledgeCenterItem {
  knowledgeCenter: Array<{
    knowledgeCenterSeoData: KnowledgeCenterSeoData;
    Hero: Hero;
    Section: Section;
    SubSection: SubSection;
  }>;
}

type KnowledgeCenterSeoData = {
  twitter: any;
  robots: string;
  alternates: any;
  title: string;
  description: string;
  keywords: string;
  openGraph: OpenGraph;
};

type OpenGraph = {
  title: string;
  description: string;
  images: OpenGraphImage[];
};

type OpenGraphImage = {
  url: string;
  alt: string;
};

type Hero = {
  title: string;
  subtitle: string;
  section: HeroSection[];
};

type HeroSection = {
  title: string;
  img: string;
};

type Section = {
  button: string;
  sections: SectionItem[];
};

type SectionItem = {
  link: string;
  number: number;
  title: string;
  description: string;
  img: string;
};

type SubSection = {
  title: string;
  description: string;
};
