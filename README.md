# TwitQuiz site clone

A page-by-page vanilla HTML, CSS, and JavaScript clone of the supplied quiz reference.

## Run locally

Use any static web server from this directory. For example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Pages

- `index.html` — URL-driven quiz flow such as `index.html?question=1`
- `result.html` — completion reward and reward popup

## Configure quiz content

Edit `quiz-data.js`. Questions use this shape:

```js
{
  text: "Question text",
  options: ["A", "B", "C", "D"],
  correctIndex: 0,
  explanation: "Shown after answering."
}
```

The app supports any number of questions. Score, progress, result navigation, completion rewards, and saved coins update automatically.

## Multiple random quiz sets

Categories can define a `sets` array in `category-data.js`. When a contest starts,
one set is selected randomly and retained for that attempt. Starting a new contest
clears the selection and chooses again.

## Configure ads

The default `demo` mode shows placement placeholders without contacting an ad network.

To enable Google ads:

1. Open `quiz-data.js`.
2. Change `ads.provider` from `"demo"` to `"gpt"`.
3. Paste your real Google Ad Manager unit paths into `top`, `middle`, `interstitial`, and `rewarded`.
4. Keep the `ads.js` script included on every page.
5. Test with your own production-safe or test ad units before launch.

Use your own publisher and ad-unit IDs. Do not copy the reference site's ad account identifiers or automate ad clicks.
