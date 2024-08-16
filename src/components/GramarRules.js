import React from 'react';
import { Link } from 'react-router-dom';

const GrammarRules = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">German Grammar Formulas</h2>
      <div className="bg-white p-4 shadow rounded">
        <p className="text-lg mb-4">This page summarizes essential grammar rules for A1 and A2 levels. Use these formulas to help with your German language studies.</p>

        {/* A1 Level Grammar */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">A1 Level Grammar</h3>
          
          <h4 className="font-semibold">1. Present Tense (Präsens)</h4>
          <p className="mb-2">To talk about actions happening in the present, use:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              ich (I) &gt; -e <br />
              du (you) &gt; -st <br />
              er/sie/es (he/she/it) &gt; -t <br />
              wir/sie/Sie (we/they/you-formal) &gt; -en
            </code>
          </pre>
          
          <h4 className="font-semibold">2. Simple Past (Präteritum)</h4>
          <p className="mb-2">To describe past actions:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              Regular verbs: <br />
              -te (e.g., "mach-t-e" for "machen") <br />
              Irregular verbs: <br />
              Unique forms (e.g., "ging" for "gehen")
            </code>
          </pre>
          
          <h4 className="font-semibold">3. Articles</h4>
          <p className="mb-2">Definite articles:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              der (masculine) <br />
              die (feminine) <br />
              das (neuter)
            </code>
          </pre>
          
          <p className="mb-2">Indefinite articles:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              ein (masculine/neuter) <br />
              eine (feminine)
            </code>
          </pre>
          
          <h4 className="font-semibold">4. Basic Sentence Structure</h4>
          <p className="mb-2">The typical word order in a German sentence is:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              Subject + Verb + Object <br />
              e.g., "Ich liebe Deutsch." (I love German.)
            </code>
          </pre>
          
          <h4 className="font-semibold">5. Pronouns</h4>
          <p className="mb-2">Personal pronouns:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              ich (I) <br />
              du (you) <br />
              er/sie/es (he/she/it) <br />
              wir (we) <br />
              ihr (you plural) <br />
              sie/Sie (they/you formal)
            </code>
          </pre>
        </section>

        {/* A2 Level Grammar */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">A2 Level Grammar</h3>
          
          <h4 className="font-semibold">1. Perfect Tense (Perfekt)</h4>
          <p className="mb-2">To describe completed actions:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              haben/sein (auxiliary verb) + past participle <br />
              e.g., "Ich habe gemacht" (I have done) <br />
              "Ich bin gegangen" (I have gone)
            </code>
          </pre>
          
          <h4 className="font-semibold">2. Future Tense (Futur I)</h4>
          <p className="mb-2">To talk about future actions:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              werden (auxiliary verb) + infinitive <br />
              e.g., "Ich werde essen" (I will eat)
            </code>
          </pre>
          
          <h4 className="font-semibold">3. Modal Verbs</h4>
          <p className="mb-2">Modal verbs change the meaning of the main verb:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              können (can) <br />
              müssen (must) <br />
              wollen (want) <br />
              dürfen (may) <br />
              sollen (should)
            </code>
          </pre>
          
          <h4 className="font-semibold">4. Comparatives and Superlatives</h4>
          <p className="mb-2">To compare things:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              Comparative: -er <br />
              e.g., "größer" (bigger) <br />
              Superlative: am -sten <br />
              e.g., "am größten" (biggest)
            </code>
          </pre>
          
          <h4 className="font-semibold">5. Prepositions</h4>
          <p className="mb-2">Common prepositions and their cases:</p>
          <pre className="bg-gray-100 p-2 rounded mb-4">
            <code>
              Akkusativ: durch, für, gegen, ohne, um <br />
              Dativ: aus, bei, mit, nach, von, zu <br />
              Both: an, auf, hinter, in, neben, über, unter, vor, zwischen
            </code>
          </pre>
        </section>
      </div>
      <Link to="/" className="block mt-4 text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default GrammarRules;
