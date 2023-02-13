import { useState } from "react";

const lovePoems = [
  "Roses are red, violets are blue,\nSugar is sweet, and so are you.\nTill the oceans run dry and the mountains fall flat,\nI'll always love you, that's a fact!",
  "You are the beat in my heart,\nThe music in my soul.\nYou are the sun in my sky,\nThe river that makes me whole.\nI love you more each day,\nMore than words can say.",
  "Your love is a treasure, rare and bright,\nA guiding star that shines through the night.\nYou bring joy to my life,\nAnd make everything all right.\nI am so grateful to call you mine,\nForever and always, till the end of time.",
  "You are my everything, my reason to live,\nThe fire that burns in my heart, and the love that I give.\nYou are my sun, my moon, and my stars,\nThe one I want by my side, now and always, near and far.",
  "Your eyes, like stars, shine so bright,\nWith you, everything feels just right.\nIn your arms, I find my home,\nMy heart and soul are yours to own.",
  "Your smile, so warm and full of grace,\nMakes my heart skip a beat with each embrace.\nWith you by my side, I am complete,\nOur love, a work of art, unique.",
  "Your voice, a sweet melody,\nFills me with such joy and glee.\nTogether, our love will grow,\nLike a rose, blooming in the snow.",
  "Your touch, so gentle and so true,\nMakes me feel like I'm brand new.\nWith you, I have found my way,\nIn your love, I know I'll stay.",
  "Your love, a treasure beyond compare,\nMakes me feel like I'm soaring on air.\nTogether, we'll conquer all,\nOur love, a never-ending draw.",
  "Love is composed of a single soul inhabiting two bodies.",
  "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage",
  "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
  "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.",
  "Love is a promise that is always kept, a treasure that is never spent",
  "I love you",
  "Te quiero",
  "Je t'aime",
  "Ich liebe Dich",
  "Ti amo",
  "Your beauty is a poem, written in the language of the gods.",
  "In her eyes, one can see the stars, and in her smile, the moon and sun.",
  "Her grace and elegance are like the flowers in spring, and her laughter, music to the soul.",
  "Her beauty is like a symphony, a harmonious blend of a thousand melodies.",
  "Her face is a masterpiece, painted by the brush of an angel.",
  "Her smile is a ray of sunshine, bringing warmth to the coldest of days.",
  "Her beauty is like a rose, delicate and enchanting, yet with a strength that endures.",
  "She is a goddess, with a heart as pure as gold, and a spirit as bright as the stars.",
  "Her beauty is a garden, full of blooming flowers and sweet fragrances, a delight to the senses.",
  "Chand Teri Roshni Ka Halka Sa Ek Saya Hai",
];

export default function Overview() {
  const [poem, setPoem] = useState("");

  const handleGeneratePoem = () => {
    setPoem(lovePoems[Math.floor(Math.random() * lovePoems.length)]);
  };
  return (
    <>
      <div
        className="container-fluid text-niconne fw-bolder py-3 rounded-bottom"
        style={{ backgroundColor: "#d52e3f" }}
      >
        <h1 className="rose lh-1 mb-0">V</h1>
        <h1 className="text-end display-1 fw-bold mb-0">alentine's day</h1>
      </div>
      <div className="container-fluid text-dm py-3 text-center">
        <p className="fst-italic">
          <i class="fa-solid fa-quote-left me-2 fst-italic"></i>i love you more
          each day, more than words could ever say.
          <i class="fa-solid fa-quote-right ms-2 fst-italic"></i>
        </p>
      </div>
      <div className="col-10 mx-auto text-center">
        <button
          type="button"
          class="btn btn-white btn-shrink rounded p-5 text-dm fs-7"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleGeneratePoem}
        >
          Generate some random poems which you know i made for you, ily!
        </button>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content text-rubik bg-light border-0 rounded">
            <div className="modal-header border-0">
              <h5 className="modal-title text-rubik" id="ModalLabel">
                ❤️ Poem for you!
              </h5>
            </div>
            <div className="modal-body py-0">
              <p className="text-dm">Happy Valentine's Day</p>
              <p>{poem && <pre>{poem}</pre>}</p>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                className="btn btn-white btn-sm btn-shrink"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
