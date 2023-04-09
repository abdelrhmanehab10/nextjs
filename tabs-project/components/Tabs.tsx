import { useState } from "react";
import Tab from "./Tab";
import Content from "./Content";

type Tab = {
  id: number;
  label: string;
  content: {
    title: string;
    name: string;
    date: string;
    li: string[];
  };
};

const TABS: Tab[] = [
  {
    id: 0,
    label: "TOMMY",
    content: {
      title: "Full Stack Web Developer",
      name: "TOMMY",
      date: "December 2015 - Present",
      li: [
        "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
        "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
        "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
      ],
    },
  },
  {
    id: 1,
    label: "BIGDROP",
    content: {
      title: "Front-End Engineer",
      name: "BIGDROP",
      date: "May 2015 - December 2015",
      li: [
        "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
        "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
        "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
        "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      ],
    },
  },
  {
    id: 2,
    label: "CUKER",
    content: {
      title: "Engineering Intern",
      name: "CUKER",
      date: "May 2014 - September 2015",
      li: [
        "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
        "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
        "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
      ],
    },
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  function handleClick(tabId: number) {
    setActiveTab(tabId);
  }

  return (
    <div className="text-center md:grid md:grid-cols-[20%_80%]">
      <ul className="mt-16 md:text-left md:ml-20">
        {TABS.map((tab) => (
          <Tab
            active={activeTab === tab.id}
            onClick={() => handleClick(tab.id)}
            key={tab.id}
            label={tab.label}
          />
        ))}
      </ul>
      {TABS.map((tab) =>
        activeTab === tab.id ? (
          <Content key={tab.id} content={tab.content} />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default Tabs;
