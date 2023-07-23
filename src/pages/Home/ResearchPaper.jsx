import React from 'react';

const ResearchPaper = () => {

    const papersData = [
        {
          title: 'Exploring the Impact of Artificial Intelligence in Healthcare',
          link: 'https://www.example.com/paper1',
          authors: 'John Smith, Jane Doe',
          abstract: 'This research paper investigates the role of artificial intelligence (AI) in modern healthcare systems. The study analyzes various AI applications, such as medical diagnosis, drug discovery, and personalized treatment plans. The results demonstrate the potential benefits and challenges of integrating AI technologies in healthcare to improve patient outcomes and reduce medical costs.',
        },
        {
          title: 'Climate Change and Its Effects on Biodiversity',
          link: 'https://www.example.com/paper2',
          authors: 'Emily Johnson, Michael Lee',
          abstract: 'In this paper, we examine the impact of climate change on global biodiversity. Through a comprehensive review of scientific literature, we identify the major threats posed by climate change to various ecosystems and species. Our findings emphasize the urgent need for conservation efforts and adaptive strategies to mitigate the effects of climate change and preserve Earths rich biodiversity.',
        },
        {
          title: 'Enhancing Cybersecurity through Blockchain Technology',
          link: 'https://www.example.com/paper3',
          authors: 'David Anderson, Sarah Parker',
          abstract: 'This research explores the potential of blockchain technology to strengthen cybersecurity measures. The paper presents a detailed analysis of how blockchains decentralized and immutable nature can enhance data integrity, privacy, and protection against cyber threats. The study also discusses real-world applications of blockchain in securing sensitive data and the challenges that need to be addressed for widespread adoption.',
        },
        {
          title: 'The Role of Social Media in Political Polarization',
          link: 'https://www.example.com/paper4',
          authors: 'Alex Roberts, Olivia Johnson',
          abstract: 'This study investigates the influence of social media platforms on political polarization and echo chambers. Through a combination of data analysis and surveys, we examine the patterns of information dissemination and engagement on popular social media sites. The research sheds light on the potential impact of algorithms and user behaviors on the formation of ideological bubbles and proposes strategies for promoting healthy online discourse.',
        },
      ];

    return (
        <div className="container mx-auto px-4 py-8">
        <h2 className='text-4xl font-semibold text-center mb-10'>Recommended Research Papers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {papersData.map((paper, index) => (
            <div key={index} className="bg-base-100 rounded-lg p-4 shadow-lg">
              <h3 className="text-lg font-semibold mb-2 bg-base-200 p-2">{paper.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{paper.authors}</p>
              

              <p className="text- mb-4 tooltip text-start" data-tip={paper.abstract} >
              {paper.abstract.length > 100
                ? paper.abstract.slice(0, 100) + '....see more'
                : paper.abstract}
            </p>
              
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ResearchPaper;