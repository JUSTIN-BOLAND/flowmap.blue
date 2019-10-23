import * as React from 'react'
import { Link } from 'react-router-dom'
import MainExampleImageSrc from './images/swiss-cantons-relocations.jpg'
import styled from '@emotion/styled';
import ReadMore from './ReadMore';
import { examples, screenshotSizes } from './examples.json';
import SpreadsheetKeyExtractor from './SpreadsheetKeyExtractor';
import Away from './Away';
import { Helmet } from 'react-helmet';
import { ColorScheme } from './colors';

import Logo from './Logo'
import MapboxLogo from './images/mapbox-logo-black.svg'
import TLLogo from './images/TL-Horizontal-Black.svg'
import GitHubLogo from './images/github.svg'
import SpectrumLogo from './images/spectrum.svg'

const Outer = styled.div`
  padding: 10px 20px;
  & h1 { font-size: 2rem; }
  & li { margin: 0.5em 0; }
  margin: auto;
  max-width: 1500px;
`


const Support = styled.p`
  display: flex;
  justify-items: center;
  flex-wrap: wrap;
`

const SupportLogoLink = styled.a`
  position: relative;
  top: 0.25em;
  transition: opacity 0.2s;
  opacity: 0.6;
  margin: 0 22px;
  &:hover {
    opacity: 1;
  }
`

const SupportLogo = ({ src, href }: { src: string, href: string }) =>
  <SupportLogoLink href={href} target="_blank" rel="noopener noreferrer">
    <img alt="support logo" src={src} height={22} />
  </SupportLogoLink>

const NoWrap = styled.span`
  display: flex;
  flex-wrap: nowrap;
`

const ExampleGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const HoverableLink = styled(Link)`
  width: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  transition: border 0.25s;
  &:hover {
    border: 1px solid ${ColorScheme.primary};
  }
`
const ExampleGridHoverableLink = styled(HoverableLink)`
  position: relative;
  width: 100%;
  &:hover {
    & > .name {
     color: ${ColorScheme.primary}; 
    }
  }
`
const ExampleName = styled.div`
  width: 100%;
  position: absolute;
  padding: 3px 7px;
  bottom: 0;
  line-height: 1.4;
  background: #fff;
  font-size: 10pt;
  z-index: 2; 
  pointer-events: none;
  transition: color 0.25s;
  color: #aaa;
  text-align: center;
  border-top: 1px solid rgba(19,124,189,0.25);
`
const ExampleImage = styled.img`
  width: 100%;
  display: block;
  transform: scale(1.2);
  transition: transform 0.5s;
  &:hover {
    transform: scale(2);
  }
`
const MainExampleImageHoverableLink = styled(HoverableLink)`
  margin-bottom: 20px;
  max-width: 500px;
  display: inline-block;
  img {
    transform: scale(1) !important;
  }
  @media (min-width: 800px) {
    float: right;
    margin-left: 20px;
  }
`

const LinksArea = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  &>*+* {
    margin-left: 20px;
  }
`

const LinkItem = styled.div`
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
    font-size: 10px;  
  }
  img {
    width: 20px;
  }
  &>*+* {
    margin-left: 5px;
  }
`

const Intro = () =>
  <Outer>
    <Helmet>
      <link href="https://flowmap.blue/" rel="canonical" />
    </Helmet>

    <h1><Logo fontSize={35} collapseWidth={300} /></h1>

    <LinksArea>
      <Away href="https://spectrum.chat/flowmap-blue/">
        <LinkItem>
          <span>Spectrum Chat</span>
          <img
            alt="flowmap.blue chat on Spectrum"
            src={SpectrumLogo}
          />
        </LinkItem>
      </Away>
      <Away href="https://github.com/ilyabo/flowmap.blue">
        <LinkItem>
          <span>GitHub</span>
          <img
            alt="flowmap.blue on GitHub"
            src={GitHubLogo}
          />
        </LinkItem>
      </Away>
    </LinksArea>

    <MainExampleImageHoverableLink to="/16wFY54ZbrZuZQoOCvpU2fAzlxB7MKLNspqKBOWrp1J8">
      <ExampleImage
        src={MainExampleImageSrc}
      />
    </MainExampleImageHoverableLink>

    <section>
      <p>
        Create geographic flow maps from your data published in Google Sheets.
      </p>
      <p>
        Visualize numbers of movements between locations (origin-destination data).
      </p>
      <p>
        Explore the data interactively.
      </p>
    </section>

    <section>
      <h2>Visualize your own data</h2>
      <p>
        To visualize your data set in flowmap.blue you need to have a Google account.{' '}
        <Away href="https://accounts.google.com/signup">Sign up here</Away> if you don't.
      </p>
      <p>
        Follow these steps:
      </p>
      <ol>
        <li>Open <Away href="https://docs.google.com/spreadsheets/d/1aEgwtGUGc0TdnsO0jIm50hshCZ-m4DHms3P0Qq9IYdA">this spreadsheet</Away> and
          make a copy of it (File / Make a copy…)</li>
        <li>Add data to the new spreadsheet. <ReadMore>
          The spreadsheet has three sheets in it.
          They are named "<b>properties</b>", "<b>locations</b>" and "<b>flows</b>".
          The <b>properties</b> sheet has the title and the description for your data set and a few other configuration parameters.
          The <b>locations</b> sheet has the columns <b>id</b>, <b>lat</b>, <b>lon</b> and the optional <b>name</b>.
          The <b>flows</b> sheet has <b>origin</b>, <b>dest</b> and <b>count</b>.
          The values in the <b>origin</b> and <b>dest</b> columns must be the respective locations' <b>id</b>s.
        </ReadMore>
        </li>
        {/*<li>Publish your spreadsheet by going to "File" / "Publish to the web…"</li>*/}
        <li>Share the spreadsheet by going to "File" / "Share with others", clicking "Advanced", and then
          choosing "Anyone with the link can view". <ReadMore>
            This step is required so that flowmap.blue can access the data in your spreadsheet.
            The spreadsheet and the flow map will be private effectively as long as you don't send
            their URLs to anyone and don't publish them online.
            We'll treat your data as private by default and will not disclose the URLs without getting an explicit
            consent from you (unless you disclose them yourself first by linking from a publicly accessible website).
          </ReadMore>
        </li>
        <SpreadsheetKeyExtractor />
      </ol>
    </section>

    <section>
      <h2>Example data sets</h2>
      <ExampleGrid>
        {
          examples.map(({ key, name }) =>
            <ExampleGridHoverableLink key={key} to={`/${key}`}>
                <ExampleName className="name">{name}</ExampleName>
                <ExampleImage
                  alt={name}
                  src={`screenshots/${key}__${screenshotSizes[0]}px.jpg`}
                  srcSet={screenshotSizes.map(w => `screenshots/${key}__${w}px.jpg ${w}w`).join(',')}
                  sizes={screenshotSizes.map((w,i) =>
                    (i < screenshotSizes.length-1 ? `(max-width: ${w*2}px) ` : '')+ `${w}px`)
                    .join(',')
                  }
                />
            </ExampleGridHoverableLink>
          )
        }
      </ExampleGrid>
    </section>

    <section>
      <h2>Need help?</h2>
      <p>
        <Away href="https://spectrum.chat/flowmap-blue/general">Ask a question in the forum</Away>,{` `}
        <Away href="https://github.com/ilyabo/flowmap.blue/issues">submit an issue</Away>
        {` or `}
        <a href="mailto:ilya@boyandin.me?subject=flowmap.blue">write me an email</a>.
      </p>
    </section>
    <section>
      <h2 id="privacy">Privacy notice</h2>
      <p>
        flowmap.blue does not store any of the data the users upload to Google Sheets.
        The data from the spreadsheets is loaded directly to the clients' browsers
        using <Away href="https://developers.google.com/chart/interactive/docs/querylanguage">Google Visualization API</Away>.
      </p>
      <p>
        We treat the data and the URLs of the spreadsheets and flow maps published by
        the users as private. We do not disclose the URLs without getting an explicit consent from the authors
        (unless the authors have already disclosed them by linking from a publicly accessible website).
      </p>
      <p>
        We collect anonymous usage statistics via Google Analytics and track errors via Sentry.
        We want to know how flowmap.blue is used and when it fails, so that we can improve it.
        The use of Google Analytics involves setting cookies in the users' browsers
        for detecting recurring visits and working sessions.
      </p>
      <p>
        We may try to contact you asking for a permission to add your flow map to the list of examples on the homepage of flowmap.blue.
      </p>
    </section>
    <section>
      <h2>Open source</h2>
      <p>
        {`The source code of flowmap.blue `}
        <Away href="https://github.com/ilyabo/flowmap.blue">is freely available</Away>
        {` under the  `}
        <Away href="https://github.com/ilyabo/flowmap.blue/blob/master/LICENSE">MIT license</Away>.
      </p>
      <p>
        Make sure to include a proper attribution (URL of flowmap.blue, the original author) if you use it in a different project.
      </p>
    </section>
    <section>
      <h2>Credits</h2>
      <p>
        Developed by <Away href="https://ilya.boyandin.me">Ilya Boyandin</Away> using {` `}
        <Away href="https://github.com/teralytics/flowmap.gl">flowmap.gl</Away>,{` `}
        <Away href="http://deck.gl">deck.gl</Away>,{` `}
        <Away href="https://github.com/mapbox/mapbox-gl-js">mapbox</Away>,{` `}
        <Away href="https://d3js.org/">d3</Away>.
      </p>
      <Support>
        <span>With kind support from</span>
        <NoWrap>
          <SupportLogo href="https://www.teralytics.net" src={TLLogo}/>
          <span>and</span>
          <SupportLogo href="https://www.mapbox.com" src={MapboxLogo}/>
        </NoWrap>
      </Support>
    </section>
  </Outer>

export default Intro
