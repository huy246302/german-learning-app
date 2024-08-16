import React from 'react';
import { Link } from 'react-router-dom';

const GrammarFormulas = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">German Grammar Rules</h2>
      <div className="bg-white p-4 shadow rounded">

        {/* A1 Level Grammar Rules */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">A1 Level Grammar Rules</h3>

          {/* Present Tense (Präsens) */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">1. Present Tense (Präsens)</h4>
            <p className="mb-2">Used for actions happening now or regularly.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                ich (I) &gt; -e <br />
                du (you) &gt; -st <br />
                er/sie/es (he/she/it) &gt; -t <br />
                wir/sie/Sie (we/they/you-formal) &gt; -en
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ich spiele Fußball. (I play soccer.)</li>
              <li>Du liest ein Buch. (You read a book.)</li>
              <li>Er arbeitet jeden Tag. (He works every day.)</li>
              <li>Wir essen oft im Restaurant. (We often eat at the restaurant.)</li>
            </ul>
          </div>

          {/* Simple Past (Präteritum) */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">2. Simple Past (Präteritum)</h4>
            <p className="mb-2">Describes actions that happened in the past.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                Regular verbs: -te <br />
                Irregular verbs: unique forms <br />
                e.g., "ich machte" (I made), "ich ging" (I went)
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ich kaufte ein Auto. (I bought a car.)</li>
              <li>Wir fuhren nach Berlin. (We went to Berlin.)</li>
              <li>Sie trank einen Kaffee. (She drank a coffee.)</li>
              <li>Er schrieb einen Brief. (He wrote a letter.)</li>
            </ul>
          </div>

          {/* Articles */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">3. Articles</h4>
            <p className="mb-2">Definite and indefinite articles used with nouns.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                Definite articles: der (masc.), die (fem.), das (neut.) <br />
                Indefinite articles: ein (masc./neut.), eine (fem.)
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Der Hund ist groß. (The dog is big.)</li>
              <li>Die Katze schläft. (The cat is sleeping.)</li>
              <li>Das Buch ist interessant. (The book is interesting.)</li>
              <li>Ein Mann kommt. (A man is coming.)</li>
            </ul>
          </div>

          {/* Basic Sentence Structure */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">4. Basic Sentence Structure</h4>
            <p className="mb-2">The typical order of words in a sentence.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                Subject + Verb + Object <br />
                e.g., "Ich liebe Deutsch." (I love German.)
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Wir essen Pizza. (We eat pizza.)</li>
              <li>Er liest die Zeitung. (He reads the newspaper.)</li>
              <li>Sie macht Hausaufgaben. (She does homework.)</li>
              <li>Ich höre Musik. (I listen to music.)</li>
            </ul>
          </div>

          {/* Pronouns */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">5. Pronouns</h4>
            <p className="mb-2">Personal pronouns used in sentences.</p>
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
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ich gehe zur Schule. (I go to school.)</li>
              <li>Du spielst ein Spiel. (You play a game.)</li>
              <li>Er sieht einen Film. (He watches a movie.)</li>
              <li>Wir lernen Deutsch. (We learn German.)</li>
            </ul>
          </div>
        </section>

        {/* A2 Level Grammar Rules */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">A2 Level Grammar Rules</h3>

          {/* Perfect Tense (Perfekt) */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">1. Perfect Tense (Perfekt)</h4>
            <p className="mb-2">Used for actions that have been completed.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                haben/sein (auxiliary verb) + past participle <br />
                e.g., "Ich habe gegessen" (I have eaten) <br />
                "Ich bin gekommen" (I have come)
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ich habe das Buch gelesen. (I have read the book.)</li>
              <li>Wir sind nach Hause gegangen. (We have gone home.)</li>
              <li>Sie hat einen Film gesehen. (She has seen a movie.)</li>
              <li>Er hat das Auto repariert. (He has repaired the car.)</li>
            </ul>
          </div>

          {/* Future Tense (Futur I) */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">2. Future Tense (Futur I)</h4>
            <p className="mb-2">Used to talk about actions that will happen.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                werden (auxiliary verb) + infinitive <br />
                e.g., "Ich werde lernen" (I will learn)
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ich werde morgen arbeiten. (I will work tomorrow.)</li>
              <li>Wir werden ins Kino gehen. (We will go to the cinema.)</li>
              <li>Er wird eine Reise machen. (He will make a trip.)</li>
              <li>Sie wird den Test bestehen. (She will pass the test.)</li>
            </ul>
          </div>

          {/* Modal Verbs */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">3. Modal Verbs</h4>
            <p className="mb-2">Verbs that modify the meaning of the main verb.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                können (can) <br />
                müssen (must) <br />
                wollen (want) <br />
                sollen (should) <br />
                dürfen (may)
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Ich kann schwimmen. (I can swim.)</li>
              <li>Wir müssen lernen. (We must learn.)</li>
              <li>Er will essen. (He wants to eat.)</li>
              <li>Sie soll helfen. (She should help.)</li>
            </ul>
          </div>

          {/* Comparison of Adjectives */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">4. Comparison of Adjectives</h4>
            <p className="mb-2">How to compare adjectives.</p>
            <pre className="bg-gray-100 p-2 rounded mb-4">
              <code>
                Positive: gut <br />
                Comparative: besser <br />
                Superlative: am besten
              </code>
            </pre>
            <p className="mb-2">Examples:</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Mein Auto ist schnell. (My car is fast.)</li>
              <li>Mein Auto ist schneller als dein Auto. (My car is faster than your car.)</li>
              <li>Mein Auto ist am schnellsten. (My car is the fastest.)</li>
            </ul>
          </div>
        </section>
      </div>
      <Link to="/grammar" className="block mt-4 text-blue-500 hover:underline">Back to Grammar</Link>
    </div>
  );
};

export default GrammarFormulas;
