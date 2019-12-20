import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Package from '../../units/package';

import './our-packages.scss';

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          first: allFile(filter: {sourceInstanceName: {eq: "packages"}, name: {eq: "firstPackage"}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    firstPackageTitle
                    firstPackagePrice
                    firstPackageBenefits {
                      firstPackFirstBenefit
                      firstPackSecondBenefit
                      firstPackThirdBenefit
                      firstPackFourthBenefit
                      firstPackFifthBenefit
                    }
                  }
                }
              }
            }
          }
          second: allFile (filter: {sourceInstanceName: {eq: "packages"}, name: {eq: "secondPackage"}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    secondPackageTitle
                    secondPackagePrice
                    secondPackageBenefits {
                      secondPackFirstBenefit
                      secondPackSecondBenefit
                      secondPackThirdBenefit
                      secondPackFourthBenefit
                      secondPackFifthBenefit
                    }
                  }
                }
              }
            }
          }
          third: allFile (filter: {sourceInstanceName: {eq: "packages"}, name: {eq: "thirdPackage"}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    thirdPackageTitle
                    thirdPackagePrice
                    thirdPackageBenefits {
                      thirdPackFirstBenefit
                      thirdPackSecondBenefit
                      thirdPackThirdBenefit
                      thirdPackFourthBenefit
                      thirdPackFifthBenefit
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={packageData => {
        console.log("packages:", [packageData])
        // const bundle = packageData.map((bundle, id) => {
        //   return <Package data={bundle.edges['0'].node.childMarkdownRemark.frontmatter} key={`bundle-${id}`} />;
        // });
        return (
          <section className="section__wrapper">
            <h2 className="section__title">Nuestros servicios</h2>
            {/* <div className="section__bundler">{bundle}</div> */}
          </section>
        );
      }}
    ></StaticQuery>
  );
};
