import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
      <Layout title={`About`} description={siteConfig.tagline}>
          <div className="light" />
          <div className="main-content">
            <div className="pulsar-container">
              {"Pulsar".split("").map((char, index) => (
                  <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      className="pulsar-letter"
                  >
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="150"
                        fill="none"
                        strokeWidth="3"
                        strokeDasharray="80, 40"
                        fontFamily="sans-serif"
                        stroke="#90cdf4"
                    >
                      {char}
                    </text>
                  </svg>
              ))}
            </div>
            <p className="description-text">
                An incredibly simple, fast and lightweight toolkit for building web APIs
            </p>
          </div>
      </Layout>
  );
}
